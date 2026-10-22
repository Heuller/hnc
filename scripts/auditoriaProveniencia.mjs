import ts from 'typescript';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Normaliza e limpa string para extração de palavras.
 */
export function cleanText(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/(\w+)\s*-\s*(\w+)/g, '$1$2')
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Retorna conjunto de palavras com 3+ letras.
 */
export function getWords3Plus(s) {
  return new Set(cleanText(s).split(' ').filter(w => w.length >= 3));
}

/**
 * Coeficiente de similaridade de Jaccard entre dois conjuntos de palavras.
 */
export function jaccard(w1, w2) {
  if (w1.size === 0 || w2.size === 0) return 0;
  let inter = 0;
  for (const w of w1) {
    if (w2.has(w)) inter++;
  }
  return inter / (w1.size + w2.size - inter);
}

/**
 * Extrai a última frase do item (depois de "julgue o item..." ou "judge the following item").
 */
export function extrairUltimaFrase(texto) {
  if (!texto) return '';
  const m = texto.match(/(?:julgue\s+(?:o|os|o\s+seguinte|os\s+seguintes|o\s+próximo|os\s+próximos)?\s+itens?|judge\s+the\s+following\s+item)[^.:\n]*[:.]\s*([\s\S]+)$/i);
  return m ? m[1].trim() : texto.trim();
}

export const REGEX_INTERNAL_ID = /^(cespe-cad-|cespe-tec-|real-prova_recente-|real-cad_cespe-|real-pcdf_)/;
export const REGEX_FORBIDDEN_INEDITA = /gabarito oficial|cobrado no concurso|pela banca|concurso [A-Z]/i;

/**
 * Executa a auditoria completa de proveniência nas questões de src/content/questions.
 */
export function auditarProveniencia(options = {}) {
  const dir = options.dir || 'src/content/questions';
  const corpusPath = options.corpusPath || 'archive/corpus_questoes_reais_cebraspe.json';
  const csvPath = options.csvPath || 'real_confirmada_sem_casamento.csv';

  const corpus = JSON.parse(fs.readFileSync(corpusPath, 'utf8'));
  const semCasamentoCSV = fs.existsSync(csvPath)
    ? fs.readFileSync(csvPath, 'utf8').trim().split('\n').slice(1).map(l => l.trim())
    : [];

  const corpusPrepared = corpus.map(c => {
    const frase = extrairUltimaFrase(c.item);
    return {
      id: c.id,
      gabarito: c.gabarito,
      orgao_ano: c.orgao_ano,
      fonteArquivo: c.fonteArquivo,
      words: getWords3Plus(frase)
    };
  });

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

  const errors = [];
  const stats = {
    total: 0,
    realConfirmada: 0,
    adaptada: 0,
    inedita: 0,
    emConferencia: 0,
    semTipo: 0,
    byFile: {}
  };

  for (const file of files) {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const sf = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true);

    stats.byFile[file] = {
      total: 0,
      realConfirmada: 0,
      adaptada: 0,
      inedita: 0,
      emConferencia: 0,
      erros: 0
    };

    function visit(node) {
      if (ts.isObjectLiteralExpression(node)) {
        let id = null;
        let item = null;
        let gabarito = null;
        let justificativa = null;
        let armadilha = null;
        let tipo = null;
        let questaoOriginalId = null;
        let _provaId = null;
        let _origemAcervoLocal = null;
        let hasFonteOriginal = false;

        for (const prop of node.properties) {
          if (ts.isPropertyAssignment(prop)) {
            const name = prop.name.getText(sf).replace(/['"]/g, '');
            if (name === 'id') id = prop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
            if (name === 'item') {
              const raw = prop.initializer.getText(sf);
              item = raw.slice(1, -1).replace(/\\"/g, '"');
            }
            if (name === 'gabarito') gabarito = prop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
            if (name === 'justificativa') justificativa = prop.initializer.getText(sf).slice(1, -1);
            if (name === 'armadilhaBanca') armadilha = prop.initializer.getText(sf).slice(1, -1);
            if (name === 'fonteOriginal' && ts.isObjectLiteralExpression(prop.initializer)) {
              hasFonteOriginal = true;
              for (const fprop of prop.initializer.properties) {
                if (ts.isPropertyAssignment(fprop)) {
                  const fname = fprop.name.getText(sf).replace(/['"]/g, '');
                  const fval = fprop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
                  if (fname === 'tipo') tipo = fval;
                  if (fname === 'questaoOriginalId') questaoOriginalId = fval;
                  if (fname === 'provaId') _provaId = fval;
                  if (fname === 'origemAcervoLocal') _origemAcervoLocal = fval;
                }
              }
            }
          }
        }

        if (id && item && gabarito && hasFonteOriginal) {
          stats.total++;
          stats.byFile[file].total++;

          // Rule 3: No internal ID in questaoOriginalId
          if (questaoOriginalId && REGEX_INTERNAL_ID.test(questaoOriginalId)) {
            errors.push({
              id,
              file,
              erro: `ID interno '${questaoOriginalId}' exposto em questaoOriginalId (deve estar em origemAcervoLocal)`
            });
            stats.byFile[file].erros++;
          }

          if (tipo === 'real-confirmada') {
            stats.realConfirmada++;
            stats.byFile[file].realConfirmada++;

            // Must NOT be in sem casamento CSV
            if (semCasamentoCSV.includes(id)) {
              errors.push({
                id,
                file,
                erro: `'real-confirmada' consta na lista de sem casamento (${csvPath})`
              });
              stats.byFile[file].erros++;
            }

            // Must have numeric questaoOriginalId
            if (!questaoOriginalId || !/^\d+$/.test(questaoOriginalId)) {
              errors.push({
                id,
                file,
                erro: `'real-confirmada' exige questaoOriginalId numérico real (encontrado: '${questaoOriginalId}')`
              });
              stats.byFile[file].erros++;
            }

            // Must match acervo with Jaccard >= 0.90 and same gabarito
            const frase = extrairUltimaFrase(item);
            const qWords = getWords3Plus(frase);
            let bestJ = 0;
            let bestC = null;
            for (const c of corpusPrepared) {
              const j = jaccard(qWords, c.words);
              if (j > bestJ) {
                bestJ = j;
                bestC = c;
              }
            }

            if (bestJ < 0.90) {
              errors.push({
                id,
                file,
                erro: `'real-confirmada' com similaridade Jaccard insuficiente: ${bestJ.toFixed(2)} < 0.90`
              });
              stats.byFile[file].erros++;
            }

            if (bestC && bestC.gabarito !== gabarito) {
              errors.push({
                id,
                file,
                erro: `'real-confirmada' com gabarito divergente do acervo (${gabarito} !== ${bestC.gabarito})`
              });
              stats.byFile[file].erros++;
            }
          } else if (tipo === 'adaptada') {
            stats.adaptada++;
            stats.byFile[file].adaptada++;
          } else if (tipo === 'inedita') {
            stats.inedita++;
            stats.byFile[file].inedita++;

            // Rule 2: Inedita must not claim official contest / banca
            const combinedText = `${justificativa || ''} ${armadilha || ''}`;
            if (REGEX_FORBIDDEN_INEDITA.test(combinedText)) {
              errors.push({
                id,
                file,
                erro: `Item inédito contém termos proibidos de concurso/banca: "${combinedText.slice(0, 80)}..."`
              });
              stats.byFile[file].erros++;
            }
          } else if (tipo === 'em-conferencia') {
            stats.emConferencia++;
            stats.byFile[file].emConferencia++;
          } else {
            stats.semTipo++;
          }
        }
      }
      ts.forEachChild(node, visit);
    }

    visit(sf);
  }

  return {
    success: errors.length === 0,
    errors,
    stats
  };
}

// Execução direta via CLI
if (process.argv[1] && process.argv[1].endsWith('auditoriaProveniencia.mjs')) {
  console.log('=== AUDITORIA INDEPENDENTE DE PROVENIÊNCIA (PROMPT C7) ===\n');
  const result = auditarProveniencia();

  console.log(`Total de questões auditadas: ${result.stats.total}`);
  console.log(`- real-confirmada : ${result.stats.realConfirmada}`);
  console.log(`- adaptada        : ${result.stats.adaptada}`);
  console.log(`- inedita         : ${result.stats.inedita}`);
  console.log(`- em-conferencia  : ${result.stats.emConferencia}`);
  console.log('');

  console.log('--- Distribuição por Arquivo ---');
  for (const [file, fstats] of Object.entries(result.stats.byFile)) {
    if (fstats.total > 0) {
      console.log(`  ${file.padEnd(35)}: ${fstats.total} total [Real: ${fstats.realConfirmada}, Adapt: ${fstats.adaptada}, Ined: ${fstats.inedita}, Conf: ${fstats.emConferencia}] (Erros: ${fstats.erros})`);
    }
  }

  if (result.errors.length > 0) {
    console.error(`\n❌ FALHA: ${result.errors.length} violações da Regra 2 / Regra 3 encontradas:\n`);
    result.errors.slice(0, 15).forEach(e => console.error(`  - [${e.file}] ${e.id}: ${e.erro}`));
    if (result.errors.length > 15) {
      console.error(`  ... e mais ${result.errors.length - 15} erros.`);
    }
    process.exit(1);
  } else {
    console.log('\n✅ SUCESSO: Todas as questões cumprem rigorosamente as Regras do C7!');
    console.log('  1. Nenhuma questão "real-confirmada" sem casamento (J >= 0.90).');
    console.log('  2. 100% das "real-confirmada" possuem questaoOriginalId numérico real.');
    console.log('  3. Gabarito de todas as "real-confirmada" é idêntico ao do acervo oficial.');
    console.log('  4. Nenhuma questão inédita afirma gabarito oficial ou concurso prévio.');
    console.log('  5. Zero IDs internos expostos como fonte pública (migrados para origemAcervoLocal).');
    process.exit(0);
  }
}
