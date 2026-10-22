import ts from 'typescript';
import fs from 'node:fs';


function extractQuestionsFromTsFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const sf = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true);
  const questions = [];

  function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      let id = null;
      let hasItem = false;
      let hasGabarito = false;
      for (const prop of node.properties) {
        if (ts.isPropertyAssignment(prop)) {
          const name = prop.name.getText(sf).replace(/['"]/g, '');
          if (name === 'id') id = prop.initializer.getText(sf).replace(/['"]/g, '');
          if (name === 'item') hasItem = true;
          if (name === 'gabarito') hasGabarito = true;
        }
      }
      if (id && hasItem && hasGabarito) {
        const rawText = node.getText(sf);
        try {
          const fn = new Function(`return (${rawText});`);
          const obj = fn();
          questions.push(obj);
        } catch (err) {
          console.error(`Error parsing question ${id} in ${filePath}:`, err.message);
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sf);
  return questions;
}

function selectQuestions(questions, countC, countE) {
  const certas = questions.filter(q => q.gabarito === 'C').slice(0, countC);
  const erradas = questions.filter(q => q.gabarito === 'E').slice(0, countE);
  if (certas.length < countC || erradas.length < countE) {
    throw new Error(`Insufficient questions: requested ${countC}C/${countE}E, got ${certas.length}C/${erradas.length}E`);
  }
  // Interleave
  const result = [];
  const max = Math.max(certas.length, erradas.length);
  for (let i = 0; i < max; i++) {
    if (i < certas.length) result.push(certas[i]);
    if (i < erradas.length) result.push(erradas[i]);
  }
  return result;
}

// 1. P1 - Conhecimentos Básicos (90 items)
const qM13 = extractQuestionsFromTsFile('src/content/questions/m13-portugues-100q.ts');
const qM12 = extractQuestionsFromTsFile('src/content/questions/m12-ingles-100q.ts');
const qM11 = extractQuestionsFromTsFile('src/content/questions/m11-administrativo-100q.ts');
const qM10A = extractQuestionsFromTsFile('src/content/questions/m10a-legislativo-constituicao-100q.ts');
const qM10B = extractQuestionsFromTsFile('src/content/questions/m10b-regimentos-100q.ts');
const qM14 = extractQuestionsFromTsFile('src/content/questions/m14-tecnologia-dados-100q.ts');

const selM13 = selectQuestions(qM13, 12, 12); // 24
const selM12 = selectQuestions(qM12, 7, 7);   // 14
const selM11 = selectQuestions(qM11, 10, 10); // 20
const selM10A = selectQuestions(qM10A, 4, 4); // 8
const selM10B = selectQuestions(qM10B, 4, 4); // 8
const selM14 = selectQuestions(qM14, 8, 8);   // 16

const p1Questions = [
  ...selM13,
  ...selM12,
  ...selM11,
  ...selM10A,
  ...selM10B,
  ...selM14
];

console.log('P1 Total:', p1Questions.length);
console.log('P1 Certas:', p1Questions.filter(q => q.gabarito === 'C').length);
console.log('P1 Erradas:', p1Questions.filter(q => q.gabarito === 'E').length);

// 2. P2 - Conhecimentos Específicos (90 items)
const qM1 = extractQuestionsFromTsFile('src/content/questions/m1-fundamentos-100q.ts');
const qM2 = extractQuestionsFromTsFile('src/content/questions/m2-catalogacao-100q.ts');
const qM3 = extractQuestionsFromTsFile('src/content/questions/m3-classificacao-100q.ts');
const qM4 = extractQuestionsFromTsFile('src/content/questions/m4-recuperacao-100q.ts');
const qM5 = extractQuestionsFromTsFile('src/content/questions/m5-gestao-100q.ts');
const qM6 = extractQuestionsFromTsFile('src/content/questions/m6-digital-ia-100q.ts');
const qM7 = extractQuestionsFromTsFile('src/content/questions/m7-preservacao-100q.ts');
const qM8 = extractQuestionsFromTsFile('src/content/questions/m8-normalizacao-100q.ts');
const qM9 = extractQuestionsFromTsFile('src/content/questions/m9-comunicacao-100q.ts');
const qM10 = extractQuestionsFromTsFile('src/content/questions/m10-legislativo-100q.ts');

const selM1 = selectQuestions(qM1, 4, 4);   // 8
const selM2 = selectQuestions(qM2, 5, 5);   // 10 (Bloco 1 = 18)
const selM3 = selectQuestions(qM3, 5, 4);   // 9
const selM4 = selectQuestions(qM4, 4, 5);   // 9  (Bloco 2 = 18, 9C/9E)
const selM5 = selectQuestions(qM5, 5, 4);   // 9
const selM6 = selectQuestions(qM6, 4, 5);   // 9  (Bloco 3 = 18, 9C/9E)
const selM7 = selectQuestions(qM7, 4, 4);   // 8
const selM8 = selectQuestions(qM8, 5, 5);   // 10 (Bloco 4 = 18)
const selM9 = selectQuestions(qM9, 4, 4);   // 8
const selM10 = selectQuestions(qM10, 5, 5); // 10 (Bloco 5 = 18)

const p2Questions = [
  ...selM1,
  ...selM2,
  ...selM3,
  ...selM4,
  ...selM5,
  ...selM6,
  ...selM7,
  ...selM8,
  ...selM9,
  ...selM10
];

console.log('P2 Total:', p2Questions.length);
console.log('P2 Certas:', p2Questions.filter(q => q.gabarito === 'C').length);
console.log('P2 Erradas:', p2Questions.filter(q => q.gabarito === 'E').length);

const allQuestions = [...p1Questions, ...p2Questions];
console.log('Total All:', allQuestions.length);

// Format sequentially 1 to 180
const finalQuestions = allQuestions.map((q, idx) => {
  const num = idx + 1;
  const idStr = `oficial-180q-${String(num).padStart(3, '0')}`;
  return {
    ...q,
    id: idStr,
    numero: num,
    // Add editalRef and provaBloco
    provaBloco: num <= 90 ? 'P1_BASICOS' : 'P2_ESPECIFICOS',
  };
});

const tsFileContent = `import type { CebraspeQuestion } from '../../domain/types';

/**
 * Simulado Oficial Câmara dos Deputados 2027 (P22)
 *
 * Estrutura Oficial do Edital nº 1/2026:
 * - 180 Itens no formato Certo/Errado (+1 / -1 / 0)
 * - P1: 90 itens de Conhecimentos Básicos (Língua Portuguesa, Língua Inglesa,
 *       Direito Administrativo, Direito Constitucional/RICD/RCCN, TI e Dados)
 * - P2: 90 itens de Conhecimentos Específicos (5 Blocos do Cargo 5 de Biblioteconomia)
 * - Pisos Eliminatórios: P1 < 18, P2 < 27, Total < 54 eliminam
 * - Duração: 5 horas (300 minutos)
 * - Simetria Cebraspe Rigorosa: 90 Certos e 90 Errados (45C/45E em P1 e 45C/45E em P2)
 */
export const simuladoOficialCamara180Q: CebraspeQuestion[] = ${JSON.stringify(finalQuestions, null, 2)};
`;

fs.writeFileSync('src/content/questions/simulado-oficial-camara-180q.ts', tsFileContent, 'utf8');
console.log('Generated src/content/questions/simulado-oficial-camara-180q.ts successfully!');
