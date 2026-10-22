import ts from 'typescript';
import fs from 'node:fs';
import path from 'node:path';
import {
  PALAVRAS_ABSOLUTAS_ESTRITAS,
  PALAVRAS_ABSOLUTAS_AMBIGUAS,
  PALAVRAS_ABSOLUTAS,
  calcularPesoItemAbsoluto,
  contemPalavraAbsoluta,
  extrairPalavrasAbsolutas,
} from '../src/config/palavrasAbsolutas.ts';

const reescritasRaw = fs.readFileSync('scripts/dadosC9Reescritas.json', 'utf8');
const REESCRITAS = JSON.parse(reescritasRaw);

console.log('========================================================================');
console.log('APLICAÇÃO DO PROMPT C9 — REESCRITA DE ITENS COM PALAVRAS ABSOLUTAS');
console.log('========================================================================');
console.log(`Carregadas ${Object.keys(REESCRITAS).length} reescritas canônicas.`);

const dir = 'src/content/questions';
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.ts'));

let totalModificados = 0;
const modificadosPorArquivo = {};

for (const file of files) {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const sf = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true);

  const edits = [];
  let fileModificados = 0;

  function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      let id = '';
      let gabarito = '';
      let itemNode = null;
      let justificativaNode = null;
      let armadilhaNode = null;

      for (const prop of node.properties) {
        if (ts.isPropertyAssignment(prop)) {
          const name = prop.name.getText(sf).replace(/['"]/g, '');
          if (name === 'id') {
            id = prop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
          }
          if (name === 'gabarito') {
            gabarito = prop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
          }
          if (name === 'item') itemNode = prop;
          if (name === 'justificativa') justificativaNode = prop;
          if (name === 'armadilhaBanca') armadilhaNode = prop;
        }
      }

      if (id && REESCRITAS[id] && itemNode && justificativaNode) {
        if (gabarito !== 'E') {
          throw new Error(`[ERRO CRÍTICO] Item ${id} tem gabarito '${gabarito}', mas reescrita C9 exige estritamente 'E'!`);
        }

        const nova = REESCRITAS[id];

        // 1. Edit item
        edits.push({
          start: itemNode.initializer.getStart(sf),
          end: itemNode.initializer.getEnd(),
          replacement: JSON.stringify(nova.item),
        });

        // 2. Edit justificativa
        edits.push({
          start: justificativaNode.initializer.getStart(sf),
          end: justificativaNode.initializer.getEnd(),
          replacement: JSON.stringify(nova.justificativa),
        });

        // 3. Edit armadilhaBanca se houver menção caricata
        if (armadilhaNode) {
          const armadilhaText = armadilhaNode.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
          if (armadilhaText.includes('CATEGORICO_ABSOLUTO') || armadilhaText.includes('distrator caricato')) {
            const cleanArmadilha = armadilhaText
              .replace(/CATEGORICO_ABSOLUTO\s*[:\-]?\s*/gi, '')
              .replace(/distrator caricato\s*[:\-]?\s*/gi, '')
              .trim();
            edits.push({
              start: armadilhaNode.initializer.getStart(sf),
              end: armadilhaNode.initializer.getEnd(),
              replacement: JSON.stringify(cleanArmadilha || 'Assertiva com substituição de conceitos técnicos vizinhos.'),
            });
          }
        }

        fileModificados++;
        totalModificados++;
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
    modificadosPorArquivo[file] = fileModificados;
  }
}

console.log(`\nTotal de itens reescritos no disco: ${totalModificados}`);
for (const [f, count] of Object.entries(modificadosPorArquivo)) {
  console.log(`  ${f.padEnd(36)}: ${count} itens reescritos`);
}
