const fs = require('fs');

const doc = JSON.parse(fs.readFileSync('HNC_PLATAFORMA_COMPLETA_LEGIVEL_POR_MAQUINA.json', 'utf8'));

console.log('=== VALIDACAO DOS ACHADOS PREVIOS ===\n');

// 1. QUESTOES
const cadernos = doc.acervo_simulados_e_cadernos_cebraspe;
console.log('Total cadernos:', cadernos.length);
let totalQuestoes = 0;
const textosQuestoes = new Set();
const textosMap = new Map();
let totalC = 0;
let totalE = 0;

cadernos.forEach((cad) => {
  const questoes = cad.questoes || [];
  totalQuestoes += questoes.length;
  questoes.forEach((q) => {
    const txt = (q.item || '').trim();
    textosQuestoes.add(txt);
    if (!textosMap.has(txt)) textosMap.set(txt, []);
    textosMap.get(txt).push({ cadernoId: cad.id, questaoId: q.id });
    if (q.gabarito === 'C') totalC++;
    if (q.gabarito === 'E') totalE++;
  });
});

console.log(`1.1 Total questoes declaradas: ${totalQuestoes} (Achado: 1.850)`);
console.log(`1.2 Textos distintos: ${textosQuestoes.size} (Achado: 1.575)`);

// Duplicatas mega-simulado vs 120q
const megaSimulado = cadernos.find(c => c.id === 'mega-simulado-camara');
const mega120q = cadernos.find(c => c.id === 'mega-simulado-camara-120q');
if (megaSimulado && mega120q) {
  let overlapMega = 0;
  megaSimulado.questoes.forEach((q1, idx) => {
    const q2 = mega120q.questoes[idx];
    if (q2 && (q1.item || '').trim() === (q2.item || '').trim()) overlapMega++;
  });
  console.log(`1.3 Duplicatas mega-simulado vs 120q: ${overlapMega}/${megaSimulado.questoes.length} (Achado: 120/120)`);
}

// Overlap simulado-geral-180q com outros
const geral180q = cadernos.find(c => c.id === 'simulado-geral-180q');
if (geral180q) {
  let overlapComOutros = 0;
  geral180q.questoes.forEach(q => {
    const matches = textosMap.get((q.item || '').trim()) || [];
    const outros = matches.filter(m => m.cadernoId !== 'simulado-geral-180q');
    if (outros.length > 0) overlapComOutros++;
  });
  console.log(`1.4 Overlap simulado-geral-180q com modulos: ${overlapComOutros}/${geral180q.questoes.length} (Achado: >= 128)`);
}

// Proporcao C/E por caderno
console.log('1.5 Proporcao C/E por caderno:');
let allCadernosStrict5050 = true;
cadernos.forEach(cad => {
  let c = 0, e = 0;
  cad.questoes.forEach(q => { if (q.gabarito === 'C') c++; else if (q.gabarito === 'E') e++; });
  const pctC = Math.round((c / cad.questoes.length) * 100);
  const pctE = Math.round((e / cad.questoes.length) * 100);
  if (c !== e) {
    allCadernosStrict5050 = false;
    console.log(`   Caderno ${cad.id}: ${c} C (${pctC}%) / ${e} E (${pctE}%)`);
  }
});
if (allCadernosStrict5050) {
  console.log('   TODOS os 18 cadernos têm exatamente 50% C e 50% E! (CONFIRMADO)');
}
console.log(`   Total geral C/E: ${totalC} C (${Math.round(totalC/totalQuestoes*100)}%) / ${totalE} E (${Math.round(totalE/totalQuestoes*100)}%)`);

// Quantificadores absolutos
const absolutosRegex = /\b(sempre|nunca|somente|apenas|exclusivamente|todos|nenhum|jamais|unicamente)\b/i;
let totalAbsolutos = 0;
let absolutosE = 0;
cadernos.forEach(cad => {
  cad.questoes.forEach(q => {
    if (absolutosRegex.test(q.item || '')) {
      totalAbsolutos++;
      if (q.gabarito === 'E') absolutosE++;
    }
  });
});
console.log(`1.6 Quantificadores absolutos: ${totalAbsolutos} itens, sendo ${absolutosE} E (${Math.round(absolutosE/totalAbsolutos*100)}%) (Achado: 144 de 180 = 80%)`);

// Molde de justificativas genericas
let justificativasGenericas = 0;
let justificativasPadraoGabarito = 0;
cadernos.forEach(cad => {
  cad.questoes.forEach(q => {
    const just = q.justificativa || '';
    if (just.startsWith('Gabarito oficial') || just.includes('Item cobrado pela banca')) justificativasGenericas++;
    if (just.startsWith('Gabarito CERTO') || just.startsWith('Gabarito ERRADO')) justificativasPadraoGabarito++;
  });
});
console.log(`1.7 Justificativas "Gabarito oficial ...": ${justificativasGenericas} (Achado: 308)`);
console.log(`1.8 Justificativas no molde "Gabarito CERTO/ERRADO": ${justificativasPadraoGabarito}/${totalQuestoes} (${Math.round(justificativasPadraoGabarito/totalQuestoes*100)}%) (Achado: ~85%)`);

// Questoes rotuladas reais e "Camara dos Deputados/2026"
let rotuladasReais = 0;
let camara2026 = 0;
const cadernosComReais = new Set();
cadernos.forEach(cad => {
  cad.questoes.forEach(q => {
    const just = q.justificativa || '';
    const orig = q.origem || '';
    const isReal = orig.toLowerCase().includes('real') || just.includes('Item cobrado pela banca');
    if (isReal) {
      rotuladasReais++;
      cadernosComReais.add(cad.id);
    }
    if (just.includes('Câmara dos Deputados/2026') || (q.item && q.item.includes('Câmara dos Deputados/2026'))) camara2026++;
  });
});
console.log(`1.9 Questoes rotuladas reais: ${rotuladasReais} presentes em cadernos: ${Array.from(cadernosComReais).join(', ')} (Achado: 282 em M3..M10)`);
console.log(`1.10 Questoes citando "Câmara dos Deputados/2026": ${camara2026} (Achado: 15)`);

// Quebras de extracao de PDF
const quebrasRegex = /\b(ra\s+mos|classific\s*a-\s*ções|considerando\s*-\s*se|proposi\s*-\s*ções)\b/i;
let totalQuebras = 0;
cadernos.forEach(cad => {
  cad.questoes.forEach(q => {
    if (quebrasRegex.test(q.item || '')) totalQuebras++;
  });
});
console.log(`1.11 Itens com quebras de extração (amostra de regex): ${totalQuebras} (Achado: 28 com quebras de extração)`);

// 2. TEORIA
const modulos = doc.conteudo_teorico_e_tecnico_completo;
let totalSubmodulos = 0;
let totalPalavrasTeoria = 0;
let unidadesMaior2000 = 0;
let unidadesMaior3000 = 0;
let maiorUnidade = { id: '', palavras: 0 };
let antesDeLerVazios = 0;
let esquemasVazios = 0;
let tempo15Count = 0;
let nivelCognitivoMap = new Map();

modulos.forEach(m => {
  (m.submodulos || []).forEach(s => {
    totalSubmodulos++;
    const txt = s.texto_teorico_integral_markdown || '';
    const palavrasSub = txt.trim().split(/\s+/).filter(Boolean).length;
    totalPalavrasTeoria += palavrasSub;
    if (palavrasSub > 2000) unidadesMaior2000++;
    if (palavrasSub > 3000) unidadesMaior3000++;
    if (palavrasSub > maiorUnidade.palavras) {
      maiorUnidade = { id: s.numero_submodulo || s.id, palavras: palavrasSub };
    }

    if (!s.antes_de_ler_conceitos_essenciais || s.antes_de_ler_conceitos_essenciais.length === 0) {
      antesDeLerVazios++;
    }
    if (!s.mnemonicos || !s.mnemonicos.esquemas || s.mnemonicos.esquemas.length === 0) {
      esquemasVazios++;
    }
    if (s.tempo_leitura_minutos === 15) {
      tempo15Count++;
    }
    const niv = s.nivel_cognitivo_predominante;
    nivelCognitivoMap.set(niv, (nivelCognitivoMap.get(niv) || 0) + 1);
  });
});

console.log(`\n2.0 Total submodulos teoricos: ${totalSubmodulos}`);
console.log(`2.1 Total palavras teoria: ${totalPalavrasTeoria} (Achado: 132.555)`);
console.log(`2.2 Unidades > 2000 palavras: ${unidadesMaior2000}/${totalSubmodulos} (Achado: 26)`);
console.log(`2.3 Unidades > 3000 palavras: ${unidadesMaior3000}/${totalSubmodulos} (Achado: 8)`);
console.log(`2.4 Maior unidade: Submodulo ${maiorUnidade.id} com ${maiorUnidade.palavras} palavras (Achado: 9.3 com 3.744)`);
console.log(`2.5 tempo_leitura_minutos === 15 em: ${tempo15Count}/${totalSubmodulos} (Achado: 75/75 constante)`);
console.log(`2.6 antes_de_ler_conceitos_essenciais vazio em: ${antesDeLerVazios}/${totalSubmodulos} (Achado: 69/75)`);
console.log(`2.7 mnemonicos.esquemas vazio em: ${esquemasVazios}/${totalSubmodulos} (Achado: 75/75)`);
console.log(`2.8 Nivel cognitivo predominante:`, Object.fromEntries(nivelCognitivoMap));

// Checkpoints
let totalCheckpoints = 0;
let formatX1 = 0;
let nivelMemorizar = 0;
let refVazia = 0;
modulos.forEach(m => {
  (m.submodulos || []).forEach(s => {
    (s.micro_checkpoints_formativos || []).forEach(cp => {
      totalCheckpoints++;
      if (cp.formato_exercicio === 'X1' || cp.gabarito === 'C' || cp.gabarito === 'E') formatX1++;
      if (!cp.referencia || cp.referencia === '') refVazia++;
      if (cp.habilidade_bloom === 'memorizar') nivelMemorizar++;
    });
  });
});
console.log(`2.9 Checkpoints: ${totalCheckpoints} total, ${formatX1} formato X1, ${nivelMemorizar} nivel memorizar, ${refVazia} referencia vazia (Achado: 225 X1 memorizar sem ref)`);

// 3. GLOSSARIO
const glossarioVerbetes = doc.dicionario_tecnico_canonico_cebraspe || [];
console.log(`\n3.1 Glossario verbetes no JSON: ${glossarioVerbetes.length} (Achado: 177)`);

// Menções ao glossário na teoria
let mencoesGlossario = 0;
modulos.forEach(m => {
  (m.submodulos || []).forEach(s => {
    const matches = (s.texto_teorico_integral_markdown || '').match(/gloss[aá]rio/gi);
    if (matches) mencoesGlossario += matches.length;
  });
});
console.log(`3.2 Mencoes textuais a "glossário" no conteudo teorico: ${mencoesGlossario} (Achado: 9)`);

// 4. TERMOS DE COBERTURA
console.log('\n4. COBERTURA DE TERMOS CHAVE:');
const termos = [
  'Intervenção Federal', 'direitos sociais', 'Tableau', 'Data Studio', 'box plot',
  'histograma', 'aprendizado por reforço', 'aprendizado não supervisionado', 'firewall',
  'antispyware', 'worms', 'manifestos da IFLA', 'holdings', 'REJE', 'RBMPF',
  'HTR', 'dados mestres', 'data stewardship', 'direito autoral', 'pharming',
  'engenharia de prompts', 'human-in-the-loop'
];

termos.forEach(t => {
  let inQuestoes = 0;
  let inCheckpoints = 0;
  let inTeoria = 0;

  const reg = new RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i');

  cadernos.forEach(c => {
    (c.questoes || []).forEach(q => {
      if (reg.test(q.item || '') || reg.test(q.justificativa || '')) inQuestoes++;
    });
  });

  modulos.forEach(m => {
    (m.submodulos || []).forEach(s => {
      (s.micro_checkpoints_formativos || []).forEach(cp => {
        if (reg.test(cp.item || '') || reg.test(cp.justificativa || '')) inCheckpoints++;
      });
      if (reg.test(s.texto_teorico_integral_markdown || '')) inTeoria++;
    });
  });

  console.log(`   "${t}": Questoes=${inQuestoes}, Checkpoints=${inCheckpoints}, Teoria=${inTeoria}`);
});
