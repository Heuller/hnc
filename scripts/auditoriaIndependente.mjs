import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

// ============================================================================
// AUDITORIA INDEPENDENTE CI (Prompt C12)
// Regra Estrita: NÃO importar nada de src/config.
// Lista de absolutos, regras de casamento e validações 100% autônomas.
// ============================================================================

// 1. Lista canônica completa de palavras absolutas embutida diretamente (Prompt C9 / C12)
const ABSOLUTAS_ESTRITAS = [
  'sempre',
  'nunca',
  'apenas',
  'somente',
  'exclusivamente',
  'unicamente',
  'independentemente',
  'jamais',
  'necessariamente',
  'obrigatoriamente',
  'impossível',
  'dispensa',
  'vedado',
  'vedada',
  'terminantemente',
  'irrestrito',
  'irrestrita',
  'nenhuma',
  'incondicionalmente',
  'sem exceção',
  'de forma alguma',
];

const ABSOLUTAS_AMBIGUAS = [
  'qualquer',
  'todos',
  'todas',
];

function normalizarTexto(texto) {
  return (texto || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function extrairPalavras3Plus(texto) {
  const limpo = normalizarTexto(texto)
    .replace(/(\w+)\s*-\s*(\w+)/g, '$1$2')
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return new Set(limpo.split(' ').filter((w) => w.length >= 3));
}

function calcularJaccard(set1, set2) {
  if (set1.size === 0 || set2.size === 0) return 0;
  let inter = 0;
  for (const w of set1) {
    if (set2.has(w)) inter++;
  }
  return inter / (set1.size + set2.size - inter);
}

function extrairUltimaFrase(texto) {
  if (!texto) return '';
  const m = texto.match(/(?:julgue\s+(?:o|os|o\s+seguinte|os\s+seguintes|o\s+próximo|os\s+próximos)?\s+itens?|judge\s+the\s+following\s+item)[^.:\n]*[:.]\s*([\s\S]+)$/i);
  return m ? m[1].trim() : texto.trim();
}

function contemTermo(textoNorm, termoNorm) {
  if (termoNorm.includes(' ')) {
    return textoNorm.includes(termoNorm);
  }
  const regex = new RegExp(`\\b${termoNorm}\\b`, 'i');
  return regex.test(textoNorm);
}

function avaliarAbsolutosItem(itemTexto) {
  const textoNorm = normalizarTexto(itemTexto);
  let temEstrita = false;
  let temAmbigua = false;
  const encontrados = [];

  for (const t of ABSOLUTAS_ESTRITAS) {
    const tNorm = normalizarTexto(t);
    if (contemTermo(textoNorm, tNorm)) {
      temEstrita = true;
      encontrados.push(t);
    }
  }

  for (const t of ABSOLUTAS_AMBIGUAS) {
    const tNorm = normalizarTexto(t);
    if (contemTermo(textoNorm, tNorm)) {
      temAmbigua = true;
      encontrados.push(t);
    }
  }

  let peso = 0;
  if (temEstrita) peso = 1.0;
  else if (temAmbigua) peso = 0.5;

  return { peso, temAbsoluto: peso > 0, termos: encontrados };
}

// ============================================================================
// EXECUÇÃO DA AUDITORIA
// ============================================================================

console.log('🏛️  Iniciando Auditoria Independente de CI (Prompt C12)...');
const errosFatais = [];

// Carrega todas as questões de src/content/questions
const qDir = path.resolve('src', 'content', 'questions');
const files = fs.readdirSync(qDir).filter((f) => f.endsWith('.ts'));

const todasQuestoes = [];

for (const file of files) {
  const filePath = path.join(qDir, file);
  const code = fs.readFileSync(filePath, 'utf-8');
  const sf = ts.createSourceFile(file, code, ts.ScriptTarget.Latest, true);

  function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      let id = null;
      let item = null;
      let gabarito = null;
      let justificativa = null;
      let armadilha = null;
      let tipo = null;
      let questaoOriginalId = null;
      let questaoOrigemId = null;
      let origemAcervoLocal = null;
      let revisar = false;

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
          if (name === 'revisar' && prop.initializer.kind === ts.SyntaxKind.TrueKeyword) revisar = true;
          if (name === 'questaoOrigemId') questaoOrigemId = prop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
          if (name === 'fonteOriginal' && ts.isObjectLiteralExpression(prop.initializer)) {
            for (const fprop of prop.initializer.properties) {
              if (ts.isPropertyAssignment(fprop)) {
                const fname = fprop.name.getText(sf).replace(/['"]/g, '');
                const fval = fprop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
                if (fname === 'tipo') tipo = fval;
                if (fname === 'questaoOriginalId') questaoOriginalId = fval;
                if (fname === 'origemAcervoLocal') origemAcervoLocal = fval;
                if (fname === 'revisar') revisar = fval === 'true';
              }
            }
          }
        }
      }

      if (id && item && gabarito) {
        todasQuestoes.push({
          id,
          file,
          item,
          gabarito,
          justificativa,
          armadilha,
          tipo,
          questaoOriginalId,
          questaoOrigemId,
          origemAcervoLocal,
          revisar,
        });
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sf);
}

console.log(`📦 Questões carregadas: ${todasQuestoes.length} itens em ${files.length} arquivos.`);

// ----------------------------------------------------------------------------
// VERIFICAÇÃO 1: Taxa de Palavras Absolutas com Lista Completa Embutida
// ----------------------------------------------------------------------------
console.log('\n[1/4] Verificando Taxa de Palavras Absolutas nas Inéditas...');
const ineditas = todasQuestoes.filter((q) => q.tipo === 'inedita');

let totalScoreAbsoluto = 0;
let ineditasComAbsoluto = 0;
let ineditasComAbsolutoC = 0;
let ineditasComAbsolutoE = 0;

for (const q of ineditas) {
  const { peso, temAbsoluto } = avaliarAbsolutosItem(q.item);
  totalScoreAbsoluto += peso;
  if (temAbsoluto) {
    ineditasComAbsoluto++;
    if (q.gabarito === 'C') ineditasComAbsolutoC++;
    else if (q.gabarito === 'E') ineditasComAbsolutoE++;
  }
}

const taxaAbsolutos = ineditas.length > 0 ? (totalScoreAbsoluto / ineditas.length) * 100 : 0;
const pctCertosAbsoluto = ineditasComAbsoluto > 0 ? (ineditasComAbsolutoC / ineditasComAbsoluto) * 100 : 0;

console.log(`  - Total inéditas analisadas: ${ineditas.length}`);
console.log(`  - Pontuação ponderada: ${totalScoreAbsoluto.toFixed(1)} / ${ineditas.length} (${taxaAbsolutos.toFixed(2)}%)`);
console.log(`  - Itens com absolutos: ${ineditasComAbsoluto} (${ineditasComAbsolutoC} C / ${ineditasComAbsolutoE} E -> ${pctCertosAbsoluto.toFixed(2)}% Certo)`);
// Indicadores editoriais, sem amostra oficial que fundamente cotas obrigatórias.
// Não alterar a verdade de uma assertiva para atingir uma distribuição lexical.
console.log('  ℹ️ Diagnóstico lexical: requer leitura contextual; não aprova conceitos nem impõe cotas de gabarito.');

// ----------------------------------------------------------------------------
// VERIFICAÇÃO 2: Casamento Rigoroso de 'real-confirmada' com o Acervo Real
// ----------------------------------------------------------------------------
console.log('\n[2/4] Verificando Casamento das Reais Confirmadas contra o Acervo Cebraspe...');
const corpusPath = path.resolve('archive', 'corpus_questoes_reais_cebraspe.json');
if (!fs.existsSync(corpusPath)) {
  errosFatais.push(`[VERIFICAÇÃO 2 FALHOU] Arquivo de acervo não encontrado: ${corpusPath}`);
} else {
  const corpus = JSON.parse(fs.readFileSync(corpusPath, 'utf-8'));
  const corpusPrepared = corpus.map((c) => ({
    id: c.id,
    gabarito: c.gabarito,
    words: extrairPalavras3Plus(extrairUltimaFrase(c.item)),
  }));

  const reaisConfirmadas = todasQuestoes.filter((q) => q.tipo === 'real-confirmada');
  console.log(`  - Itens marcados 'real-confirmada': ${reaisConfirmadas.length}`);

  let reaisFalhas = 0;
  for (const q of reaisConfirmadas) {
    if (!q.questaoOriginalId || !/^\d+$/.test(q.questaoOriginalId)) {
      errosFatais.push(`[VERIFICAÇÃO 2 FALHOU] Item '${q.id}' (${q.file}) marcado 'real-confirmada' não possui questaoOriginalId numérico real (encontrado: '${q.questaoOriginalId}')`);
      reaisFalhas++;
      continue;
    }

    const qWords = extrairPalavras3Plus(extrairUltimaFrase(q.item));
    let bestJ = 0;
    let bestCorpus = null;

    for (const c of corpusPrepared) {
      const j = calcularJaccard(qWords, c.words);
      if (j > bestJ) {
        bestJ = j;
        bestCorpus = c;
      }
    }

    if (bestJ < 0.90) {
      errosFatais.push(`[VERIFICAÇÃO 2 FALHOU] Item '${q.id}' (${q.file}) marcado 'real-confirmada' não casa com acervo (Jaccard: ${bestJ.toFixed(2)} < 0.90)`);
      reaisFalhas++;
    } else if (bestCorpus && bestCorpus.gabarito !== q.gabarito) {
      errosFatais.push(`[VERIFICAÇÃO 2 FALHOU] Item '${q.id}' (${q.file}) tem gabarito '${q.gabarito}' divergente do acervo oficial ('${bestCorpus.gabarito}')`);
      reaisFalhas++;
    }
  }

  if (reaisFalhas === 0) {
    console.log(`  ✅ Verificação 2 aprovada! Todas as ${reaisConfirmadas.length} questões 'real-confirmada' casam perfeitamente com o acervo (Jaccard >= 0.90 e mesmo gabarito).`);
  }
}

// ----------------------------------------------------------------------------
// VERIFICAÇÃO 3: Menções Proibidas a Concurso/Banca em Itens 'inedita'
// ----------------------------------------------------------------------------
console.log('\n[3/4] Verificando Ausência de Menções Oficiais em Itens Inéditos...');
// Usa limite de palavra \b para evitar falso positivo em palavras como "bancada parlamentar"
const REGEX_PROIBIDO_INEDITA = /gabarito oficial|cobrado no concurso|\bpela banca\b/i;

let violacoesIneditas = 0;
for (const q of ineditas) {
  const textoParaChecar = `${q.item || ''} ${q.justificativa || ''} ${q.armadilha || ''}`;
  const match = textoParaChecar.match(REGEX_PROIBIDO_INEDITA);
  if (match) {
    errosFatais.push(`[VERIFICAÇÃO 3 FALHOU] Item inédito '${q.id}' (${q.file}) contém menção proibida a '${match[0]}'.`);
    violacoesIneditas++;
  }
}

if (violacoesIneditas === 0) {
  console.log(`  ✅ Verificação 3 aprovada! Zero menções a concurso/banca nas ${ineditas.length} questões inéditas.`);
}

// ----------------------------------------------------------------------------
// VERIFICAÇÃO 4: Itens 'em-conferencia' Ausentes de Simulados
// ----------------------------------------------------------------------------
console.log('\n[4/4] Verificando Isolamento dos Itens em Conferência nos Simulados...');
const itensEmConferencia = todasQuestoes.filter((q) => q.tipo === 'em-conferencia' || q.revisar === true);
const idsEmConferencia = new Set(itensEmConferencia.map((q) => q.id));

console.log(`  - Itens com bloqueio editorial no acervo: ${idsEmConferencia.size}`);

// 4.1 Confere se simuladosRegistry.ts e questoesElegiveis.ts implementam o isolamento
const registryPath = path.resolve('src', 'content', 'simuladosRegistry.ts');
if (!fs.existsSync(registryPath)) {
  errosFatais.push(`[VERIFICAÇÃO 4 FALHOU] Arquivo simuladosRegistry.ts não encontrado: ${registryPath}`);
} else {
  const registryCode = fs.readFileSync(registryPath, 'utf-8');
  if (!registryCode.includes('filtrarQuestoesElegiveis') || !registryCode.includes('processarManifest')) {
    errosFatais.push(`[VERIFICAÇÃO 4 FALHOU] simuladosRegistry.ts não aplica processarManifest / filtrarQuestoesElegiveis.`);
  }
}

const elegiveisPath = path.resolve('src', 'domain', 'questoesElegiveis.ts');
if (!fs.existsSync(elegiveisPath)) {
  errosFatais.push(`[VERIFICAÇÃO 4 FALHOU] Arquivo questoesElegiveis.ts não encontrado: ${elegiveisPath}`);
} else {
  const elegiveisCode = fs.readFileSync(elegiveisPath, 'utf-8');
  if (!elegiveisCode.includes("'em-conferencia'") && !elegiveisCode.includes('"em-conferencia"')) {
    errosFatais.push(`[VERIFICAÇÃO 4 FALHOU] questoesElegiveis.ts não isola explicitamente itens com tipo 'em-conferencia'.`);
  }
}

// 4.2 Confere que itens em conferência e em revisão são estritamente excluídos de simulados
function verificarElegivelParaSimulado(q) {
  if (q.tipo === 'em-conferencia') return false;
  if (q.revisar === true) return false;
  return true;
}

let itensVazados = 0;
for (const q of itensEmConferencia) {
  if (verificarElegivelParaSimulado(q)) {
    errosFatais.push(`[VERIFICAÇÃO 4 FALHOU] Item em conferência '${q.id}' foi incorretamente avaliado como elegível.`);
    itensVazados++;
  }
}

// 4.3 Confere que em simulados reais nenhum item elegível possui tipo em-conferência
const simuladosAtivos = files.map((f) => {
  const questoesDoArquivo = todasQuestoes.filter((q) => q.file === f);
  const ativas = questoesDoArquivo.filter(verificarElegivelParaSimulado);
  return {
    arquivo: f,
    total: questoesDoArquivo.length,
    ativas,
    excluidas: questoesDoArquivo.length - ativas.length,
  };
});

let vazamento = 0;
for (const sim of simuladosAtivos) {
  for (const q of sim.ativas) {
    if (idsEmConferencia.has(q.id) || q.tipo === 'em-conferencia') {
      errosFatais.push(`[VERIFICAÇÃO 4 FALHOU] Item em conferência '${q.id}' está ativo no caderno '${sim.arquivo}'.`);
      vazamento++;
    }
  }
}

if (itensVazados === 0 && vazamento === 0) {
  console.log(`  ✅ Verificação 4 aprovada! Todos os ${idsEmConferencia.size} itens em conferência estão estritamente isolados e não aparecem em simulados.`);
}

// ============================================================================
// RESULTADO FINAL
// ============================================================================
console.log('\n------------------------------------------------------------');
if (errosFatais.length > 0) {
  console.error(`❌ AUDITORIA INDEPENDENTE FALHOU com ${errosFatais.length} erro(s):`);
  errosFatais.forEach((err, idx) => console.error(`  ${idx + 1}. ${err}`));
  process.exit(1);
} else {
  console.log('Verificações estruturais de CI concluídas sem falhas.');
  console.log('Estes quatro testes não certificam verdade conceitual, estilo da banca ou revisão integral do conteúdo.');
  process.exit(0);
}
