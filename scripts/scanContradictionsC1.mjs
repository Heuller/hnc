import ts from 'typescript';
import fs from 'node:fs';
import path from 'node:path';

const dir = 'src/content/questions';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));
const pattern = /gabarito oficial|cobrado no concurso|pela banca|concurso [A-Z]/i;

const contradictory = [];

for (const file of files) {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const sf = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true);

  function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      let id = '';
      let enunciado = '';
      let gabarito = '';
      let justificativa = '';
      let armadilha = '';
      let tipo = '';
      let declaracaoLegada = '';

      for (const prop of node.properties) {
        if (ts.isPropertyAssignment(prop)) {
          const name = prop.name.getText(sf).replace(/['"]/g, '');
          if (name === 'id') id = prop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
          if (name === 'enunciado' || name === 'item') enunciado = prop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
          if (name === 'gabarito') gabarito = prop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
          if (name === 'justificativa') justificativa = prop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
          if (name === 'armadilhaBanca') armadilha = prop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
          if (name === 'fonteOriginal' && ts.isObjectLiteralExpression(prop.initializer)) {
            for (const subProp of prop.initializer.properties) {
              if (ts.isPropertyAssignment(subProp)) {
                const subName = subProp.name.getText(sf).replace(/['"]/g, '');
                if (subName === 'tipo') tipo = subProp.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
                if (subName === 'declaracaoLegada') declaracaoLegada = subProp.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
              }
            }
          }
        }
      }

      if (id && tipo === 'inedita') {
        const textToTest = `${justificativa} ${armadilha}`;
        if (pattern.test(textToTest)) {
          contradictory.push({
            id,
            file,
            enunciado,
            gabarito,
            justificativa,
            armadilha,
            declaracaoLegada
          });
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sf);
}

console.log(`Found ${contradictory.length} contradictory items.`);
const byFile = {};
contradictory.forEach(c => {
  byFile[c.file] = (byFile[c.file] || 0) + 1;
});
console.log('Breakdown by file:', byFile);
fs.writeFileSync('scripts/detected_contradictions.json', JSON.stringify(contradictory, null, 2), 'utf8');
