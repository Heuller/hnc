import ts from 'typescript';
import fs from 'node:fs';
import path from 'node:path';

// 1. Load corpus
const corpus = JSON.parse(fs.readFileSync('archive/corpus_questoes_reais_cebraspe.json', 'utf8'));

// 2. Load user CSV with numeric Tec IDs
const csvUser = fs.readFileSync('C:/Users/bibli/.gemini/antigravity/brain/8bac98a0-7ed7-46a8-aa4d-72d6eaccabf8/.user_uploaded/media_1792598460906_2f94db8a.csv', 'utf8');
const linesUser = csvUser.split('\n').filter(Boolean);
const headerUser = linesUser[0].replace(/^\uFEFF/, '').split(',').map(s => s.trim());
const userTecMap = new Map();

for (let i = 1; i < linesUser.length; i++) {
  let inQuotes = false;
  let cur = '';
  const row = [];
  for (const ch of linesUser[i]) {
    if (ch === '"') inQuotes = !inQuotes;
    else if (ch === ',' && !inQuotes) { row.push(cur.trim()); cur = ''; }
    else cur += ch;
  }
  row.push(cur.trim());
  const obj = {};
  headerUser.forEach((h, idx) => obj[h] = row[idx] || '');
  if (obj.id_tec_concursos && /^\d+$/.test(obj.id_tec_concursos)) {
    userTecMap.set(obj.id_plataforma, obj.id_tec_concursos);
  }
}

// 3. Load sem casamento CSV
const semCasamentoCSV = fs.readFileSync('real_confirmada_sem_casamento.csv', 'utf8').trim().split('\n').slice(1).map(l => l.trim());

function clean(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/(\w+)\s*-\s*(\w+)/g, '$1$2')
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getWords(s) {
  return new Set(clean(s).split(' ').filter(w => w.length >= 3));
}

function jaccard(w1, w2) {
  if (w1.size === 0 || w2.size === 0) return 0;
  let inter = 0;
  for (const w of w1) { if (w2.has(w)) inter++; }
  return inter / (w1.size + w2.size - inter);
}

function extrairUltimaFrase(texto) {
  if (!texto) return '';
  const m = texto.match(/(?:julgue\s+(?:o|os|o\s+seguinte|os\s+seguintes|o\s+próximo|os\s+próximos)?\s+itens?|judge\s+the\s+following\s+item)[^.:\n]*[:.]\s*([\s\S]+)$/i);
  return m ? m[1].trim() : texto.trim();
}

function parseExam(orgaoAno) {
  if (!orgaoAno) return { ano: 2024, orgao: 'Cebraspe' };
  const parts = orgaoAno.split('/').map(s => s.trim());
  const anoMatch = orgaoAno.match(/\b(19\d\d|20\d\d)\b/);
  const ano = anoMatch ? parseInt(anoMatch[1], 10) : 2024;
  let orgao = parts[0] || 'Cebraspe';
  if (orgaoAno.includes('CAM DEP') || orgaoAno.includes('Câmara dos Deputados')) {
    orgao = 'Câmara dos Deputados';
  } else if (parts.length >= 2) {
    orgao = parts[1];
  }
  orgao = orgao.replace(/^[A-Z0-9\s]+\(([^)]+)\)$/, '$1').trim();
  return { ano, orgao };
}

function sanitizeIneditaJustificativa(just, gabarito) {
  let s = just;
  s = s.replace(/Gabarito\s+oficial\s+(CERTO|ERRADO)[\.\:\-]?\s*/gi, '');
  s = s.replace(/Item\s+cobrado\s+(no|pela|em)[^\.\n]+(\.|$)/gi, '');
  s = s.replace(/pela\s+banca\s+examinadora\s+Cebraspe\s+no\s+concurso[^\.\,\n]+[,\.]?\s*(avaliando\s*)?/gi, '');
  s = s.replace(/conforme\s+cobrado\s+no\s+concurso[^\.\n]+(\.|$)/gi, '');
  s = s.replace(/pela\s+banca\s+Cebraspe/gi, '');
  s = s.replace(/da\s+banca\s+Cebraspe/gi, '');
  s = s.replace(/pela\s+banca/gi, '');
  s = s.replace(/cobrado\s+pela\s+banca/gi, '');
  s = s.replace(/no\s+concurso\s+[A-Z0-9\/\-\s\(\)]+/gi, '');
  s = s.replace(/\bconcurso\s+[A-Z0-9\/\-\(\)]+/gi, '');
  s = s.replace(/\s+/g, ' ').trim();
  if (s.length < 15) {
    s = gabarito === 'C'
      ? 'Assertiva em consonância com as normas e doutrina canônica da matéria.'
      : 'Assertiva contraria as normas e doutrina canônica da matéria.';
  }
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function sanitizeIneditaArmadilha(arm, gabarito) {
  let s = arm;
  s = s.replace(/Armadilha\s+cl\u00e1ssica\s+da\s+banca(\s+Cebraspe)?\s+no\s+concurso[^\:\.\n]+[\:\.]?\s*/gi, '');
  s = s.replace(/conforme\s+cobrado\s+no\s+concurso[^\.\n]+(\.|$)/gi, '');
  s = s.replace(/da\s+banca\s+Cebraspe/gi, '');
  s = s.replace(/pela\s+banca\s+Cebraspe/gi, '');
  s = s.replace(/pela\s+banca/gi, '');
  s = s.replace(/no\s+concurso\s+[A-Z0-9\/\-\s\(\)]+/gi, '');
  s = s.replace(/\s+/g, ' ').trim();
  if (s.length < 15) {
    s = gabarito === 'C'
      ? 'A assertiva apresenta com precisão os conceitos doutrinários da disciplina.'
      : 'A assertiva introduz distorção conceitual deliberada da regra ou inversão de termos teóricos.';
  }
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const corpusPrepared = corpus.map(c => {
  const frase = extrairUltimaFrase(c.item);
  return {
    id: c.id,
    gabarito: c.gabarito,
    orgao_ano: c.orgao_ano,
    fonteArquivo: c.fonteArquivo,
    words: getWords(frase)
  };
});

const dir = 'src/content/questions';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

const stats = {
  stayRealConfirmada: 0,
  toAdaptada: 0,
  toInedita: 0,
  migratedInternalIds: 0,
  byFile: {}
};

for (const file of files) {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const sf = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true);

  const edits = [];
  stats.byFile[file] = { stayRealConfirmada: 0, toAdaptada: 0, toInedita: 0, migratedInternalIds: 0 };

  function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      let id = null;
      let item = null;
      let gabarito = null;
      let justificativaNode = null;
      let armadilhaNode = null;
      let fonteNode = null;
      let tipo = null;
      let questaoOriginalId = null;
      let provaId = null;
      let orgao = null;
      let ano = null;
      let banca = null;
      let oldDesc = null;
      let revisar = false;
      let statusConferencia = null;

      for (const prop of node.properties) {
        if (ts.isPropertyAssignment(prop)) {
          const name = prop.name.getText(sf).replace(/['"]/g, '');
          if (name === 'id') id = prop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
          if (name === 'item') {
            const raw = prop.initializer.getText(sf);
            item = raw.slice(1, -1).replace(/\\"/g, '"');
          }
          if (name === 'gabarito') gabarito = prop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
          if (name === 'justificativa') justificativaNode = prop;
          if (name === 'armadilhaBanca') armadilhaNode = prop;
          if (name === 'fonteOriginal' && ts.isObjectLiteralExpression(prop.initializer)) {
            fonteNode = prop;
            for (const fprop of prop.initializer.properties) {
              if (ts.isPropertyAssignment(fprop)) {
                const fname = fprop.name.getText(sf).replace(/['"]/g, '');
                const fval = fprop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
                if (fname === 'tipo') tipo = fval;
                if (fname === 'questaoOriginalId') questaoOriginalId = fval;
                if (fname === 'provaId') provaId = fval;
                if (fname === 'orgao') orgao = fval;
                if (fname === 'ano') ano = parseInt(fval, 10);
                if (fname === 'banca') banca = fval;
                if (fname === 'descricao') oldDesc = fval;
                if (fname === 'revisar') revisar = fval === 'true' || fprop.initializer.kind === ts.SyntaxKind.TrueKeyword;
                if (fname === 'statusConferencia') statusConferencia = fval;
              }
            }
          }
        }
      }

      if (id && item && gabarito && fonteNode) {
        const isInternalId = questaoOriginalId && /^(cespe-cad-|cespe-tec-|real-prova_recente-|real-cad_cespe-|real-pcdf_)/.test(questaoOriginalId);

        if (tipo === 'real-confirmada') {
          // Check matching against corpus
          const frase = extrairUltimaFrase(item);
          const qWords = getWords(frase);

          let bestJ = 0;
          let bestC = null;
          for (const c of corpusPrepared) {
            const j = jaccard(qWords, c.words);
            if (j > bestJ) {
              bestJ = j;
              bestC = c;
            }
          }

          let numericTecId = null;
          if (questaoOriginalId && /^\d+$/.test(questaoOriginalId)) {
            numericTecId = questaoOriginalId;
          } else if (provaId && /TecConcursos-(\d+)/.test(provaId)) {
            numericTecId = provaId.match(/TecConcursos-(\d+)/)[1];
          } else if (userTecMap.has(id)) {
            numericTecId = userTecMap.get(id);
          }

          const inSemCasamento = semCasamentoCSV.includes(id);
          const gabaritoMatches = bestC && bestC.gabarito === gabarito;

          if (bestJ >= 0.90 && gabaritoMatches && numericTecId && !inSemCasamento) {
            // Stay real-confirmada
            stats.stayRealConfirmada++;
            stats.byFile[file].stayRealConfirmada++;

            const newFonte = {
              tipo: 'real-confirmada',
              descricao: `Cebraspe / ${orgao || 'Câmara dos Deputados'} / ${ano || 2024}`,
              verificado: true,
              provaId: `TecConcursos-${numericTecId}`,
              ano: ano || 2024,
              orgao: orgao || 'Câmara dos Deputados',
              banca: 'Cebraspe',
              questaoOriginalId: String(numericTecId)
            };

            edits.push({
              start: fonteNode.initializer.getStart(sf),
              end: fonteNode.initializer.getEnd(),
              replacement: JSON.stringify(newFonte, null, 2).replace(/\n/g, '\n      ')
            });
          } else if (!inSemCasamento && bestJ >= 0.60) {
            // Downgrade to adaptada
            stats.toAdaptada++;
            stats.byFile[file].toAdaptada++;

            const parsed = bestC ? parseExam(bestC.orgao_ano) : { ano: ano || 2024, orgao: orgao || 'Cebraspe' };
            const effectiveAno = ano || parsed.ano;
            const effectiveOrgao = orgao || parsed.orgao;

            const newFonte = {
              tipo: 'adaptada',
              descricao: `Cebraspe / ${effectiveOrgao} / ${effectiveAno} (Adaptada)`,
              verificado: true,
              provaId: provaId || (bestC ? bestC.orgao_ano : `Cebraspe / ${effectiveOrgao} / ${effectiveAno}`),
              ano: effectiveAno,
              orgao: effectiveOrgao,
              banca: 'Cebraspe',
              origemAcervoLocal: isInternalId ? questaoOriginalId : (bestC ? bestC.id : undefined),
              revisar: (!gabaritoMatches || revisar) ? true : undefined
            };

            // Remove undefined keys
            Object.keys(newFonte).forEach(k => newFonte[k] === undefined && delete newFonte[k]);

            edits.push({
              start: fonteNode.initializer.getStart(sf),
              end: fonteNode.initializer.getEnd(),
              replacement: JSON.stringify(newFonte, null, 2).replace(/\n/g, '\n      ')
            });
          } else {
            // Downgrade to inedita
            stats.toInedita++;
            stats.byFile[file].toInedita++;

            const newFonte = {
              tipo: 'inedita',
              descricao: 'Inédita, sem prova de origem',
              verificado: false,
              origemAcervoLocal: isInternalId ? questaoOriginalId : undefined,
              declaracaoLegada: oldDesc || undefined
            };

            Object.keys(newFonte).forEach(k => newFonte[k] === undefined && delete newFonte[k]);

            edits.push({
              start: fonteNode.initializer.getStart(sf),
              end: fonteNode.initializer.getEnd(),
              replacement: JSON.stringify(newFonte, null, 2).replace(/\n/g, '\n      ')
            });

            // Sanitize justificativa and armadilha
            if (justificativaNode) {
              const raw = justificativaNode.initializer.getText(sf).slice(1, -1);
              const sanitized = sanitizeIneditaJustificativa(raw, gabarito);
              edits.push({
                start: justificativaNode.initializer.getStart(sf),
                end: justificativaNode.initializer.getEnd(),
                replacement: JSON.stringify(sanitized)
              });
            }
            if (armadilhaNode) {
              const raw = armadilhaNode.initializer.getText(sf).slice(1, -1);
              const sanitized = sanitizeIneditaArmadilha(raw, gabarito);
              edits.push({
                start: armadilhaNode.initializer.getStart(sf),
                end: armadilhaNode.initializer.getEnd(),
                replacement: JSON.stringify(sanitized)
              });
            }
          }
        } else if (isInternalId) {
          // Rule 3: For other questions, migrate internal ID to origemAcervoLocal
          stats.migratedInternalIds++;
          stats.byFile[file].migratedInternalIds++;

          const fObj = {};
          if (tipo) fObj.tipo = tipo;
          if (oldDesc) fObj.descricao = oldDesc;
          fObj.verificado = fonteNode.initializer.getText(sf).includes('"verificado": true');
          if (provaId) fObj.provaId = provaId;
          if (ano) fObj.ano = ano;
          if (orgao) fObj.orgao = orgao;
          if (banca) fObj.banca = banca;
          fObj.origemAcervoLocal = questaoOriginalId;
          if (revisar) fObj.revisar = true;
          if (statusConferencia) fObj.statusConferencia = statusConferencia;

          edits.push({
            start: fonteNode.initializer.getStart(sf),
            end: fonteNode.initializer.getEnd(),
            replacement: JSON.stringify(fObj, null, 2).replace(/\n/g, '\n      ')
          });
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sf);

  if (edits.length > 0) {
    edits.sort((a, b) => b.start - a.start);
    let newContent = content;
    for (const edit of edits) {
      newContent = newContent.slice(0, edit.start) + edit.replacement + newContent.slice(edit.end);
    }
    fs.writeFileSync(filePath, newContent, 'utf8');
  }
}

console.log('Migration complete!');
console.log('Stats:', stats);
