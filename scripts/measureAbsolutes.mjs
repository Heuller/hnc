import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import { PALAVRAS_ABSOLUTAS, REGEX_PALAVRAS_ABSOLUTAS } from '../src/config/palavrasAbsolutas.ts';

function carregarQuestoes() {
  const dir = 'src/content/questions';
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.ts'));
  const map = new Map();

  for (const file of files) {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const sf = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true);

    function visit(node) {
      if (ts.isObjectLiteralExpression(node)) {
        let id = '';
        let item = '';
        let gabarito = '';
        let tipo = 'inedita';

        for (const prop of node.properties) {
          if (ts.isPropertyAssignment(prop)) {
            const name = prop.name.getText(sf).replace(/['"]/g, '');
            if (name === 'id') id = prop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
            if (name === 'item') item = prop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
            if (name === 'gabarito') gabarito = prop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
            if (name === 'fonteOriginal' && ts.isObjectLiteralExpression(prop.initializer)) {
              for (const sub of prop.initializer.properties) {
                if (ts.isPropertyAssignment(sub)) {
                  const subName = sub.name.getText(sf).replace(/['"]/g, '');
                  if (subName === 'tipo') tipo = sub.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
                }
              }
            }
          }
        }

        if (id && item && gabarito && !map.has(id)) {
          map.set(id, { id, item, gabarito, tipo });
        }
      }
      ts.forEachChild(node, visit);
    }
    visit(sf);
  }

  return Array.from(map.values());
}

const questoes = carregarQuestoes();
const ineditas = questoes.filter((q) => q.tipo === 'inedita');
const reais = questoes.filter((q) => q.tipo === 'real-confirmada');

console.log('========================================================================');
console.log('RELATÓRIO DE AUDITORIA C3 — PALAVRAS ABSOLUTAS E DISTRATORES INÉDITOS');
console.log('========================================================================');
console.log(`Total de Questões Únicas no Banco: ${questoes.length}`);
console.log(`Total de Questões Inéditas:        ${ineditas.length}`);
console.log(`Total de Questões Reais:           ${reais.length}`);
console.log('------------------------------------------------------------------------');
console.log('LISTA CANÔNICA EM src/config/palavrasAbsolutas.ts:');
console.log(PALAVRAS_ABSOLUTAS.join(', '));
console.log('------------------------------------------------------------------------');

const comAbsoluto = ineditas.filter((q) => REGEX_PALAVRAS_ABSOLUTAS.test(q.item));
const certos = comAbsoluto.filter((q) => q.gabarito === 'C');
const errados = comAbsoluto.filter((q) => q.gabarito === 'E');

const pctTotal = ((comAbsoluto.length / ineditas.length) * 100).toFixed(2);
const pctCertos = ((certos.length / comAbsoluto.length) * 100).toFixed(2);
const pctErrados = ((errados.length / comAbsoluto.length) * 100).toFixed(2);

console.log('MÉTRICAS ATUAIS (PÓS-APLICAÇÃO C3):');
console.log(`• Itens Inéditos com Termo Absoluto: ${comAbsoluto.length} de ${ineditas.length} (${pctTotal}%) [Limite C3: <= 12%]`);
console.log(`• Gabarito Certo entre Absolutos:   ${certos.length} (${pctCertos}%) [Meta C3: >= 40%]`);
console.log(`• Gabarito Errado entre Absolutos:  ${errados.length} (${pctErrados}%)`);
console.log('------------------------------------------------------------------------');
console.log('COMPARAÇÃO ANTES vs DEPOIS:');
console.log('• Linha de base da Auditoria inicial: 21% de absolutos nas inéditas (com 77% Errado e 23% Certo)');
console.log(`• Estado Atual (Pós C1 e C3):         ${pctTotal}% de absolutos nas inéditas (com ${pctCertos}% Certo e ${pctErrados}% Errado)`);
console.log('• Distratores do M7 reescritos:      6 itens (m7-q-69, 73, 76, 84, 90, 93) convertidos de caricatos para substituição verossímil.');
console.log('========================================================================');
