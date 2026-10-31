/** Registro por item: integridade do conteúdo revisado, sem inferir verdade por heurística. */
import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import ts from 'typescript';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export const ordenar = x => Array.isArray(x) ? x.map(ordenar) : x && typeof x === 'object' ? Object.fromEntries(Object.keys(x).sort().map(k => [k, ordenar(x[k])])) : x;
export const hashQuestao = x => crypto.createHash('sha256').update(JSON.stringify(ordenar(x))).digest('hex');
function parse(node) {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
  if (ts.isNumericLiteral(node)) return Number(node.text);
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (ts.isObjectLiteralExpression(node)) return Object.fromEntries(node.properties.filter(ts.isPropertyAssignment).map(p => [p.name.text, parse(p.initializer)]));
  if (ts.isArrayLiteralExpression(node)) return node.elements.map(parse);
}
export async function lerBanco() {
  const linhas = [];
  for (const arquivo of (await fs.readdir('src/content/questions')).filter(f => f.endsWith('.ts')).sort()) {
    const caminho = 'src/content/questions/' + arquivo;
    const texto = await fs.readFile(caminho, 'utf8');
    const ast = ts.createSourceFile(caminho, texto, ts.ScriptTarget.Latest, true);
    function visitar(node) {
      if (ts.isObjectLiteralExpression(node)) {
        const q = parse(node);
        if (q.id && q.item && q.gabarito) {
          linhas.push({ caminho, texto, inicio: node.getStart(), fim: node.end, q });
          return;
        }
      }
      ts.forEachChild(node, visitar);
    }
    visitar(ast);
  }
  return linhas;
}
export async function lerLotes() {
  const pasta = 'docs/revisao-questoes/lotes';
  return (await Promise.all((await fs.readdir(pasta)).filter(f => f.endsWith('.json')).sort().map(async f => JSON.parse(await fs.readFile(path.join(pasta, f), 'utf8'))))).flat();
}
async function executar() {
  const modo = process.argv[2] || 'validar';
  const banco = await lerBanco();
  const fontes = JSON.parse(await fs.readFile('docs/revisao-questoes/fontes.json', 'utf8'));
  const lotes = await lerLotes();
  const chaves = new Set();
  for (const r of lotes) {
    const chave = r.caminho + ':' + r.id;
    if (chaves.has(chave)) throw Error('Revisão duplicada: ' + chave);
    chaves.add(chave);
    if (!r.fonteIds?.length || r.fonteIds.some(id => !fontes[id])) throw Error('Fonte não registrada: ' + chave);
    if (!['revisado', 'bloqueado-para-conferencia'].includes(r.status)) throw Error('Status inválido: ' + chave);
    const registro = banco.find(b => b.caminho === r.caminho && b.q.id === r.id);
    if (!registro) throw Error('Item inexistente: ' + chave);
    const novo = { ...registro.q, ...r.patch };
    if (hashQuestao(registro.q) !== r.shaDepois && hashQuestao(registro.q) !== r.shaAntes) throw Error('Conteúdo alterado fora do lote: ' + chave);
    if (hashQuestao(novo) !== r.shaDepois) throw Error('Resultado divergente: ' + chave);
    if (r.status === 'revisado') {
      if (!novo.gatilho || !novo.item.includes(novo.gatilho)) throw Error('Trecho decisivo não literal: ' + chave);
      const contraste = novo.gabarito === 'C' ? novo.versao_errada : novo.versao_correta;
      if (!contraste || contraste === novo.item || /\bindevidamente\b/i.test(contraste)) throw Error('Contraste inválido: ' + chave);
      if (/expressa o preceito técnico aplicável|conteúdo encontra-se plenamente alinhado/i.test(novo.justificativa)) throw Error('Comentário genérico: ' + chave);
      if (!novo.fonte || !novo.dataConferencia) throw Error('Fundamentação sem referência: ' + chave);
    }
    if (modo === 'aplicar' && hashQuestao(registro.q) !== r.shaDepois) registro.novo = novo;
    else if (modo !== 'aplicar' && hashQuestao(registro.q) !== r.shaDepois) throw Error('Lote ainda não aplicado: ' + chave);
  }
  if (modo === 'aplicar') {
    for (const caminho of new Set(banco.filter(b => b.novo).map(b => b.caminho))) {
      const registros = banco.filter(b => b.caminho === caminho && b.novo).sort((a,b) => b.inicio - a.inicio);
      let texto = registros[0].texto;
      for (const b of registros) {
        const indent = b.texto.slice(b.texto.lastIndexOf('\n', b.inicio) + 1, b.inicio);
        texto = texto.slice(0, b.inicio) + JSON.stringify(b.novo, null, 2).replaceAll('\n', '\n' + indent) + texto.slice(b.fim);
      }
      await fs.writeFile(caminho, texto);
    }
  }
  const revisados = lotes.filter(r => r.status === 'revisado').length;
  const bloqueados = lotes.length - revisados;
  console.log(JSON.stringify({ totalBanco: banco.length, revisadosNesteProcesso: revisados, bloqueadosNesteProcesso: bloqueados, pendentesNesteProcesso: banco.length - lotes.length, limite: 'Integridade dos registros; não é validação semântica automática.' }, null, 2));
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) await executar();
