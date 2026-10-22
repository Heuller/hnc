import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import {
  PALAVRAS_ABSOLUTAS_ESTRITAS,
  PALAVRAS_ABSOLUTAS_AMBIGUAS,
  PALAVRAS_ABSOLUTAS,
  REGEX_PALAVRAS_ABSOLUTAS,
  calcularPesoItemAbsoluto,
  contemPalavraAbsoluta,
  extrairPalavrasAbsolutas,
} from '../src/config/palavrasAbsolutas.ts';

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
          map.set(id, { id, file, item, gabarito, tipo });
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
const adaptadas = questoes.filter((q) => q.tipo === 'adaptada');
const emConferencia = questoes.filter((q) => q.tipo === 'em-conferencia');

console.log('========================================================================');
console.log('RELATÓRIO DE AUDITORIA C9 — MEDIÇÃO COM LISTA COMPLETA DE ABSOLUTOS');
console.log('========================================================================');
console.log(`Total de Questões Únicas no Banco: ${questoes.length}`);
console.log(`• Inéditas:        ${ineditas.length}`);
console.log(`• Adaptadas:       ${adaptadas.length}`);
console.log(`• Reais Confirmadas: ${reais.length}`);
console.log(`• Em Conferência:  ${emConferencia.length}`);
console.log('------------------------------------------------------------------------');
console.log(`LISTA COMPLETA DE TERMOS (${PALAVRAS_ABSOLUTAS.length} termos):`);
console.log(`- Estritos (peso 1.0, ${PALAVRAS_ABSOLUTAS_ESTRITAS.length} termos): ${PALAVRAS_ABSOLUTAS_ESTRITAS.join(', ')}`);
console.log(`- Ambíguos (peso 0.5, ${PALAVRAS_ABSOLUTAS_AMBIGUAS.length} termos): ${PALAVRAS_ABSOLUTAS_AMBIGUAS.join(', ')}`);
console.log('------------------------------------------------------------------------');

let totalScorePonderado = 0;
const itensComAbsoluto = [];

for (const q of ineditas) {
  const peso = calcularPesoItemAbsoluto(q.item);
  if (peso > 0) {
    totalScorePonderado += peso;
    itensComAbsoluto.push({
      ...q,
      peso,
      palavras: extrairPalavrasAbsolutas(q.item),
    });
  }
}

const taxaPonderada = (totalScorePonderado / ineditas.length) * 100;
const certos = itensComAbsoluto.filter((q) => q.gabarito === 'C');
const errados = itensComAbsoluto.filter((q) => q.gabarito === 'E');
const pctCertos = (certos.length / itensComAbsoluto.length) * 100;
const pctErrados = (errados.length / itensComAbsoluto.length) * 100;

console.log('MÉTRICAS MEDIDAS COM A LISTA COMPLETA (PÓS-APLICAÇÃO C9):');
console.log(`• Taxa Ponderada de Absolutos:      ${taxaPonderada.toFixed(2)}% (Score: ${totalScorePonderado} / ${ineditas.length}) [Meta C9: <= 12%]`);
console.log(`• Itens Inéditos com Termo Absoluto: ${itensComAbsoluto.length} de ${ineditas.length} (${((itensComAbsoluto.length / ineditas.length) * 100).toFixed(2)}% bruto)`);
console.log(`• Gabarito Certo entre Absolutos:   ${certos.length} (${pctCertos.toFixed(2)}%) [Meta C9: >= 40%]`);
console.log(`• Gabarito Errado entre Absolutos:  ${errados.length} (${pctErrados.toFixed(2)}%)`);
console.log('------------------------------------------------------------------------');
console.log('COMPARAÇÃO ANTES vs DEPOIS (PROMPT C9):');
console.log('• Antes de C9:  Taxa ponderada = 18.67% (Score 312), Gabarito Certo = 22.75% (91 C / 309 E)');
console.log(`• Depois de C9: Taxa ponderada = ${taxaPonderada.toFixed(2)}% (Score ${totalScorePonderado}), Gabarito Certo = ${pctCertos.toFixed(2)}% (${certos.length} C / ${errados.length} E)`);
console.log('• Itens com "exclusivamente", "dispensa" e "vedada" reescritos para conceitos plausíveis.');
console.log('========================================================================');

if (taxaPonderada <= 12 && pctCertos >= 40) {
  console.log('✅ AUDITORIA CONCLUÍDA: Todos os critérios de aceite do Prompt C9 foram cumpridos!');
} else {
  console.error('❌ FALHA: Metas do Prompt C9 não atingidas.');
  process.exit(1);
}
