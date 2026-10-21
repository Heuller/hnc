import ts from 'typescript';
import fs from 'node:fs';
import path from 'node:path';

// 1. Carrega os acervos reais
const corpus = JSON.parse(fs.readFileSync('archive/corpus_questoes_reais_cebraspe.json', 'utf8'));
const bancoClassificado = JSON.parse(fs.readFileSync('scripts/banco_questoes_cebraspe_reais_classificado.json', 'utf8'));

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

function clean(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/(\w+)\s*-\s*(\w+)/g, '$1$2')
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getWords(s) {
  return new Set(clean(s).split(' ').filter(w => w.length > 2));
}

function jaccard(s1, s2) {
  const w1 = getWords(s1);
  const w2 = getWords(s2);
  if (w1.size === 0 || w2.size === 0) return 0;
  let inter = 0;
  for (const w of w1) { if (w2.has(w)) inter++; }
  return inter / (w1.size + w2.size - inter);
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

function sanitizeIneditaText(text) {
  if (!text) return '';
  let s = text;
  // Remove "Gabarito oficial CERTO/ERRADO."
  s = s.replace(/Gabarito\s+oficial\s+(CERTO|ERRADO)[\.\:\-]?\s*/gi, '');
  // Remove "Item cobrado no concurso ... pela banca Cebraspe ..."
  s = s.replace(/Item\s+cobrado\s+(no|pela|em)[^\.\n]+(\.|$)/gi, '');
  // Remove "Assertiva tecnicamente correta ... conforme cobrado no concurso ..."
  s = s.replace(/conforme\s+cobrado\s+no\s+concurso[^\.\n]+(\.|$)/gi, '');
  // Remove "pela banca examinadora Cebraspe no concurso [^,]+,\s*avaliando\s*/gi"
  s = s.replace(/pela\s+banca\s+examinadora\s+Cebraspe\s+no\s+concurso[^\.\,\n]+[,\.]?\s*(avaliando\s*)?/gi, '');
  // Remove "Armadilha clássica da banca Cebraspe no concurso [^:]+:\s*"
  s = s.replace(/Armadilha\s+cl\u00e1ssica\s+da\s+banca(\s+Cebraspe)?\s+no\s+concurso[^\:\.\n]+[\:\.]?\s*/gi, '');
  // Remove menções avulsas
  s = s.replace(/pela\s+banca\s+Cebraspe/gi, '');
  s = s.replace(/da\s+banca\s+Cebraspe/gi, '');
  s = s.replace(/pela\s+banca/gi, '');
  s = s.replace(/cobrado\s+pela\s+banca/gi, '');
  s = s.replace(/no\s+concurso\s+[A-Z0-9\/\-\s\(\)]+/gi, '');
  s = s.replace(/\bconcurso\s+[A-Z0-9\/\-\(\)]+/gi, '');

  s = s.replace(/\s+/g, ' ').trim();
  // Se sobrou vazio, coloca fallback factual
  if (s.length < 5) {
    s = 'Julgamento fundamentado nas normas e doutrina canônica da matéria.';
  }
  // Garante letra inicial maiúscula
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// 2. Carrega lista dos 363 itens
const contradList = JSON.parse(fs.readFileSync('scripts/detected_contradictions.json', 'utf8'));
const contradMap = new Map();
for (const it of contradList) {
  let best = 0;
  let bestMatch = null;
  for (const q of allReal) {
    const sim = jaccard(it.enunciado, q.item);
    if (sim > best) {
      best = sim;
      bestMatch = q;
    }
  }

  const matchesOrgao = it.declaracaoLegada && bestMatch && bestMatch.orgao_ano && clean(bestMatch.orgao_ano).includes(clean(it.declaracaoLegada).slice(0, 4));
  const isMatch = best >= 0.85 || (best >= 0.70 && matchesOrgao);

  if (isMatch) {
    if (bestMatch.gabarito === it.gabarito) {
      contradMap.set(it.id, {
        destino: 'a',
        bestSim: best,
        match: bestMatch
      });
    } else {
      contradMap.set(it.id, {
        destino: 'b',
        bestSim: best,
        match: bestMatch
      });
    }
  } else {
    contradMap.set(it.id, {
      destino: 'c',
      bestSim: best
    });
  }
}

const contagem = { a: 0, b: 0, c: 0 };
for (const val of contradMap.values()) {
  contagem[val.destino]++;
}
console.log('Classificação dos 363 itens:', contagem);

// 3. Aplica modificações nos arquivos de questões
const dir = 'src/content/questions';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

const pendentesCorrecao = [];

for (const file of files) {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const sf = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true);

  const edits = [];

  function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      let id = null;
      let idNode = null;
      let justificativaNode = null;
      let armadilhaNode = null;
      let fonteNode = null;

      for (const prop of node.properties) {
        if (ts.isPropertyAssignment(prop)) {
          const name = prop.name.getText(sf).replace(/['"]/g, '');
          if (name === 'id') {
            id = prop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
            idNode = prop;
          }
          if (name === 'justificativa') justificativaNode = prop;
          if (name === 'armadilhaBanca') armadilhaNode = prop;
          if (name === 'fonteOriginal') fonteNode = prop;
        }
      }

      if (id && contradMap.has(id)) {
        const itemDecisao = contradMap.get(id);

        if (itemDecisao.destino === 'a') {
          // Grupo (a): Promove a real-confirmada
          const match = itemDecisao.match;
          const { ano, orgao } = parseExam(match.orgao_ano);
          const newFonteObj = {
            tipo: 'real-confirmada',
            descricao: `Cebraspe / ${orgao} / ${ano}`,
            verificado: true,
            provaId: match.orgao_ano,
            ano,
            orgao,
            banca: 'Cebraspe',
            questaoOriginalId: match.id,
            declaracaoLegada: undefined, // limpamos para ficar padrão limpo
          };
          if (fonteNode) {
            edits.push({
              start: fonteNode.initializer.getStart(sf),
              end: fonteNode.initializer.getEnd(),
              replacement: JSON.stringify(newFonteObj, null, 2).replace(/\n/g, '\n      ')
            });
          }
        } else if (itemDecisao.destino === 'b') {
          // Grupo (b): Diverge - mantém gabarito, marca revisar = true
          pendentesCorrecao.push({
            id,
            file,
            gabaritoAtual: '(ver arquivo)',
            match: itemDecisao.match
          });
          // Adiciona propriedade "revisar: true" no nó se não existir
          // E sanitiza texto
          if (justificativaNode) {
            const raw = justificativaNode.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
            const sanitized = sanitizeIneditaText(raw);
            edits.push({
              start: justificativaNode.initializer.getStart(sf),
              end: justificativaNode.initializer.getEnd(),
              replacement: JSON.stringify(sanitized)
            });
          }
          if (armadilhaNode) {
            const raw = armadilhaNode.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
            const sanitized = sanitizeIneditaText(raw);
            edits.push({
              start: armadilhaNode.initializer.getStart(sf),
              end: armadilhaNode.initializer.getEnd(),
              replacement: JSON.stringify(sanitized)
            });
          }
          // Marca revisar: true no fonteOriginal
          if (fonteNode && ts.isObjectLiteralExpression(fonteNode.initializer)) {
            const fText = fonteNode.initializer.getText(sf);
            if (!fText.includes('revisar')) {
              const lastBrace = fonteNode.initializer.getEnd() - 1;
              edits.push({
                start: lastBrace,
                end: lastBrace,
                replacement: ',\n      "revisar": true\n    '
              });
            }
          }
        } else if (itemDecisao.destino === 'c') {
          // Grupo (c): Permanece inédita - sanitiza justificativa e armadilha
          if (justificativaNode) {
            const raw = justificativaNode.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
            const sanitized = sanitizeIneditaText(raw);
            edits.push({
              start: justificativaNode.initializer.getStart(sf),
              end: justificativaNode.initializer.getEnd(),
              replacement: JSON.stringify(sanitized)
            });
          }
          if (armadilhaNode) {
            const raw = armadilhaNode.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
            const sanitized = sanitizeIneditaText(raw);
            edits.push({
              start: armadilhaNode.initializer.getStart(sf),
              end: armadilhaNode.initializer.getEnd(),
              replacement: JSON.stringify(sanitized)
            });
          }
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sf);

  if (edits.length > 0) {
    // Sort descending by start to avoid offset invalidation
    edits.sort((x, y) => y.start - x.start);
    let newContent = content;
    for (const e of edits) {
      newContent = newContent.slice(0, e.start) + e.replacement + newContent.slice(e.end);
    }
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${file} (${edits.length} edits)`);
  }
}

// 4. Gera CORRECOES_PENDENTES.md
const mdLines = [
  '# Correções de Gabarito Pendentes de Conferência Manual (Grupo B)',
  '',
  'Os itens abaixo coincidem textualmente com questões reais do Cebraspe em concursos anteriores, porém o gabarito registrado na plataforma diverge do gabarito do acervo.',
  'Conforme a regra do Prompt C1, o gabarito NÃO foi alterado automaticamente e os itens foram marcados com `revisar: true`.',
  '',
  '| ID | Arquivo | Gabarito no Acervo | Concurso / Órgão | ID no Acervo |',
  '| :-- | :-- | :-: | :-- | :-- |'
];

for (const p of pendentesCorrecao) {
  mdLines.push(`| \`${p.id}\` | \`${p.file}\` | **${p.match.gabarito}** | ${p.match.orgao_ano} | \`${p.match.id}\` |`);
}

mdLines.push('');
fs.writeFileSync('CORRECOES_PENDENTES.md', mdLines.join('\n'), 'utf8');
fs.writeFileSync('docs/relatorios/CORRECOES_PENDENTES.md', mdLines.join('\n'), 'utf8');
console.log('CORRECOES_PENDENTES.md generated with', pendentesCorrecao.length, 'entries.');
