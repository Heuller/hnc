const fs = require('fs');
const path = require('path');

console.log('🔍 Executando Verificação Matemática de Fidelidade do Conteúdo (Diff 1:1)...');

// 1. Carregar módulos originais
const originalModuloPath = path.resolve('src/data/moduloFundamentos.ts');
const originalContent = fs.readFileSync(originalModuloPath, 'utf-8');

// 2. Carregar módulos novos
const sub1Path = path.resolve('src/content/modules/m1-fundamentos/sub-1-1.ts');
const sub2Path = path.resolve('src/content/modules/m1-fundamentos/sub-1-2.ts');
const sub3Path = path.resolve('src/content/modules/m1-fundamentos/sub-1-3.ts');
const sub4Path = path.resolve('src/content/modules/m1-fundamentos/sub-1-4.ts');

const sub1Content = fs.readFileSync(sub1Path, 'utf-8');
const sub2Content = fs.readFileSync(sub2Path, 'utf-8');
const sub3Content = fs.readFileSync(sub3Path, 'utf-8');
const sub4Content = fs.readFileSync(sub4Path, 'utf-8');

// Helper to extract teoriaDensaMarkdown
function extractTeoria(str) {
  const match = str.match(/teoriaDensaMarkdown:\s*`([\s\S]*?)`,\s*(checkpoints|resumo)/);
  return match ? match[1].trim() : '';
}

const origTeorias = [...originalContent.matchAll(/teoriaDensaMarkdown:\s*`([\s\S]*?)`,\s*resumo/g)].map(m => m[1].trim());

const newTeorias = [
  extractTeoria(sub1Content),
  extractTeoria(sub2Content),
  extractTeoria(sub3Content),
  extractTeoria(sub4Content),
];

let diffsFound = 0;

console.log('\n--- Comparação da Teoria Densa (Módulo a Módulo) ---');
for (let i = 0; i < 4; i++) {
  const orig = origTeorias[i];
  const nova = newTeorias[i];
  if (!orig) {
    console.error(`❌ Teoria original do submódulo 1.${i+1} não encontrada`);
    diffsFound++;
    continue;
  }
  if (!nova) {
    console.error(`❌ Nova teoria do submódulo 1.${i+1} não encontrada`);
    diffsFound++;
    continue;
  }
  if (orig === nova) {
    console.log(`✅ Submódulo 1.${i+1}: 100% idêntico caractere por caractere (${orig.length} caracteres)`);
  } else {
    console.error(`❌ Divergência encontrada no submódulo 1.${i+1}! Comprimento original: ${orig.length}, novo: ${nova.length}`);
    diffsFound++;
  }
}

// 3. Comparação das 100 Questões
console.log('\n--- Comparação das 100 Questões do Simulado ---');
const originalSimPath = path.resolve('src/data/simuladoFundamentos100Q.ts');
const newSimPath = path.resolve('src/content/questions/m1-fundamentos-100q.ts');

const origSimStr = fs.readFileSync(originalSimPath, 'utf-8')
  .replace("import type { CebraspeQuestion } from './types';", "")
  .replace("export const simuladoFundamentos100Q: CebraspeQuestion[] =", "module.exports =");

const newSimStr = fs.readFileSync(newSimPath, 'utf-8')
  .replace("import type { CebraspeQuestion } from '../../domain/types';", "")
  .replace("export const simuladoFundamentos100Q: CebraspeQuestion[] =", "module.exports =");

const tempOrig = path.resolve('temp_orig_sim.cjs');
const tempNew = path.resolve('temp_new_sim.cjs');
fs.writeFileSync(tempOrig, origSimStr);
fs.writeFileSync(tempNew, newSimStr);

const origQuestions = require(tempOrig);
const newQuestions = require(tempNew);
fs.unlinkSync(tempOrig);
fs.unlinkSync(tempNew);

if (origQuestions.length !== 100 || newQuestions.length !== 100) {
  console.error(`❌ Quantidade diverge! Original: ${origQuestions.length}, Novo: ${newQuestions.length}`);
  diffsFound++;
} else {
  console.log(`✅ Ambas as bases contêm exatamente 100 questões`);
}

let questionDiffs = 0;
for (let i = 0; i < 100; i++) {
  const o = origQuestions[i];
  const n = newQuestions[i];

  if (o.id !== n.id) {
    console.error(`Divergência de ID no item ${i+1}: ${o.id} vs ${n.id}`);
    questionDiffs++;
  }
  if (o.item !== n.item) {
    console.error(`Divergência de assertiva no item ${i+1}`);
    questionDiffs++;
  }
  if (o.gabarito !== n.gabarito) {
    console.error(`Divergência de gabarito no item ${i+1}: ${o.gabarito} vs ${n.gabarito}`);
    questionDiffs++;
  }
  if (o.justificativa !== n.justificativa) {
    console.error(`Divergência de justificativa no item ${i+1}`);
    questionDiffs++;
  }
  if (o.armadilhaBanca !== n.armadilhaBanca) {
    console.error(`Divergência de armadilha no item ${i+1}`);
    questionDiffs++;
  }
}

if (questionDiffs === 0) {
  console.log(`✅ Todos os 100 itens (assertiva, gabarito, justificativa, armadilha e IDs) são 100% IDÊNTICOS!`);
} else {
  console.error(`❌ Foram encontradas ${questionDiffs} divergências nas questões!`);
  diffsFound += questionDiffs;
}

console.log('\n==============================================');
if (diffsFound === 0) {
  console.log('🎉 SUCESSO ABSOLUTO: 0 DIVERGÊNCIAS DETECTADAS.');
  console.log('O conteúdo original foi integralmente e literalmente preservado.');
  process.exit(0);
} else {
  console.error(`💥 FALHA: ${diffsFound} divergências detectadas!`);
  process.exit(1);
}
