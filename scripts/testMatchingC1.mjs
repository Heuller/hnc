import fs from 'node:fs';

const contradictory = JSON.parse(fs.readFileSync('scripts/detected_contradictions.json', 'utf8'));
const corpus = JSON.parse(fs.readFileSync('archive/corpus_questoes_reais_cebraspe.json', 'utf8'));
const bancoClassificado = JSON.parse(fs.readFileSync('scripts/banco_questoes_cebraspe_reais_classificado.json', 'utf8'));

// Combine both sources
const allReal = [];
for (const q of corpus) {
  allReal.push({
    id: q.id,
    orgao_ano: q.orgao_ano,
    item: q.item,
    gabarito: q.gabarito,
    banca: q.banca || 'Cebraspe'
  });
}
for (const q of bancoClassificado) {
  allReal.push({
    id: q.id_banco_real || `real-${q.numero}`,
    orgao_ano: q.concurso,
    item: q.texto,
    gabarito: q.gabarito,
    banca: 'Cebraspe'
  });
}

console.log('Total real items in memory:', allReal.length);

function getWords(s) {
  return new Set(
    s
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length > 2)
  );
}

function jaccard(s1, s2) {
  const w1 = getWords(s1);
  const w2 = getWords(s2);
  if (w1.size === 0 || w2.size === 0) return 0;
  let inter = 0;
  for (const w of w1) {
    if (w2.has(w)) inter++;
  }
  return inter / (w1.size + w2.size - inter);
}

function getLastSentence(text) {
  if (!text) return '';
  const sentences = text
    .split(/(?<=[.!?])\s+/)
    .map(s => s.trim())
    .filter(Boolean);
  return sentences[sentences.length - 1] || text;
}

let matchedConfirm = 0;
let matchedDiverge = 0;
let unmatched = 0;

const details = {
  confirmados: [],
  divergentes: [],
  ineditosReais: []
};

for (const item of contradictory) {
  const last = getLastSentence(item.enunciado);
  let bestSim = 0;
  let bestMatch = null;

  for (const q of allReal) {
    // Test on both whole item and last sentence of real item
    const sim1 = jaccard(last, q.item);
    const sim2 = jaccard(item.enunciado, q.item);
    const sim = Math.max(sim1, sim2);

    if (sim > bestSim) {
      bestSim = sim;
      bestMatch = q;
    }
  }

  if (bestSim >= 0.88) { // allow small typo/punctuation diff
    if (bestMatch.gabarito === item.gabarito) {
      matchedConfirm++;
      details.confirmados.push({
        id: item.id,
        file: item.file,
        sim: bestSim,
        gabarito: item.gabarito,
        matchId: bestMatch.id,
        matchOrgao: bestMatch.orgao_ano
      });
    } else {
      matchedDiverge++;
      details.divergentes.push({
        id: item.id,
        file: item.file,
        sim: bestSim,
        itemGabarito: item.gabarito,
        matchGabarito: bestMatch.gabarito,
        matchId: bestMatch.id,
        matchOrgao: bestMatch.orgao_ano
      });
    }
  } else {
    unmatched++;
    details.ineditosReais.push({
      id: item.id,
      file: item.file,
      bestSim
    });
  }
}

console.log('Results on 363 contradictory items:');
console.log('  (a) Matched and Confirmed:', matchedConfirm);
console.log('  (b) Matched and Diverged:', matchedDiverge);
console.log('  (c) Unmatched (strictly Inedita):', unmatched);

fs.writeFileSync('scripts/matching_results_preview.json', JSON.stringify(details, null, 2), 'utf8');
