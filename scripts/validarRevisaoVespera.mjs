/** Integridade dos 60 registros; não é certificação semântica automática. */
import fs from 'node:fs/promises';
import ts from 'typescript';
import { hashQuestao } from './revisaoQuestoes.mjs';
const caminho = 'src/domain/folhaVespera/pegadinhasBlocos.ts';
const texto = await fs.readFile(caminho, 'utf8');
const ast = ts.createSourceFile(caminho, texto, ts.ScriptTarget.Latest, true);
let blocos;
function literal(n) {
  if (ts.isStringLiteral(n)) return n.text;
  if (ts.isNumericLiteral(n)) return Number(n.text);
  if (ts.isArrayLiteralExpression(n)) return n.elements.map(literal);
  if (ts.isObjectLiteralExpression(n)) return Object.fromEntries(n.properties.filter(ts.isPropertyAssignment).map(p => [p.name.text, literal(p.initializer)]));
}
function visitar(n) {
  if (ts.isVariableDeclaration(n) && n.name.text === 'MATRIZ_BLOCOS_EDITAL_VESPERA') blocos = literal(n.initializer);
  ts.forEachChild(n, visitar);
}
visitar(ast);
const itens = blocos.flatMap(b => b.pegadinhas);
const registros = JSON.parse(await fs.readFile('docs/revisao-questoes/vespera.json', 'utf8'));
const fontes = JSON.parse(await fs.readFile('docs/revisao-questoes/fontes.json', 'utf8'));
if (itens.length !== 60 || registros.length !== 60 || new Set(registros.map(r => r.id)).size !== 60) throw Error('Inventário de véspera divergente.');
for (const q of itens) {
  const r = registros.find(r => r.id === q.id);
  const normalizado = { ...q, item: q.afirmacaoFalsa, gabarito: q.gabaritoOficial, justificativa: q.fundamentacaoCanonico };
  if (!r || r.shaDepois !== hashQuestao(normalizado)) throw Error('Registro desatualizado: ' + q.id);
  if (r.status !== 'revisado' || r.fonteIds.some(id => !fontes[id])) throw Error('Registro/fonte inválido: ' + q.id);
  if (!q.gatilho || !q.afirmacaoFalsa.includes(q.gatilho) || !q.versao_correta || !q.fontePrimaria || !q.dataConferencia) throw Error('Estudo reverso incompleto: ' + q.id);
}
console.log('Véspera: 60 registros individuais íntegros; fonte, contraste e trecho decisivo presentes.');
