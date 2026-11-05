import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const raiz = process.cwd();
const ler = nome => JSON.parse(fs.readFileSync(path.join(raiz, nome), 'utf8'));
const pasta = 'src/content/estudoReversoReais';
const anotacoes = ler(`${pasta}/anotacoes.json`);
const perfis = ler(`${pasta}/perfis.json`);
const referencias = ler(`${pasta}/referencias.json`);
// Leitura por AST: mantém uma única fonte para os quatro itens oficiais em TypeScript.
const codigo = ts.createSourceFile('questoesReais.ts', fs.readFileSync('src/content/questoesReais.ts', 'utf8'), ts.ScriptTarget.Latest, true);
let oficiais = [];
const visitar = n => {
  if (ts.isVariableDeclaration(n) && n.name.getText(codigo) === 'QUESTOES_OFICIAIS_CONFERIDAS' && ts.isArrayLiteralExpression(n.initializer)) {
    oficiais = n.initializer.elements.map(obj => Object.fromEntries(obj.properties.filter(p => ts.isPropertyAssignment(p) && ts.isStringLiteral(p.initializer)).map(p => [p.name.getText(codigo), p.initializer.text])));
  }
  ts.forEachChild(n, visitar);
};
visitar(codigo);
if (oficiais.length !== 4) throw new Error('Estrutura dos itens oficiais mudou; atualize a auditoria.');
const questoes = [...oficiais, ...ler('src/content/questoesReaisTriadas.json')];
const ids = new Set(questoes.map(q => q.id));
if (ids.size !== questoes.length || Object.keys(anotacoes).length !== ids.size || Object.keys(anotacoes).some(id => !ids.has(id))) throw new Error('IDs duplicados ou anotações órfãs.');
const linhas = [];
const porModulo = {};
for (const q of questoes) {
  const a = anotacoes[q.id];
  const p = a && perfis[a.perfil];
  const r = p && referencias[p.referencia];
  if (!a || !p || !r || !q.item.includes(a.gatilho)) throw new Error(`Revisão incompleta ou gatilho ausente: ${q.id}`);
  const contraste = q.gabarito === 'E' ? q.versao_correta : q.versao_errada && !/\bindevidamente\b/i.test(q.versao_errada) ? q.versao_errada : p.contrasteErrado;
  if (!contraste || /\bindevidamente\b/i.test(contraste) || !p.regra || !p.exemplo || !p.tecnica || !r.localizador) throw new Error(`Bloco ausente: ${q.id}`);
  const conferencia = q.estadoConferencia === 'caderno' ? 'Atribuição e gabarito no caderno; confronto oficial pendente' : 'Prova e gabarito oficiais confrontados';
  linhas.push([q.id, q.modulo, q.submoduloId, q.gabarito, a.perfil, a.gatilho, p.titulo, p.regra, q.justificativa, p.exemplo, contraste, [p.tecnica, q.armadilhaBanca].filter(Boolean).join(' '), r.titulo, r.localizador, r.url || '', conferencia]);
  porModulo[q.modulo] = (porModulo[q.modulo] || 0) + 1;
}
const cabecalho = ['id', 'modulo', 'submodulo', 'gabarito', 'perfil_conceitual', 'trecho_decisivo', 'conceito', 'regra', 'aplicacao_ao_item', 'exemplo', 'comparacao_didatica', 'tecnica', 'referencia_teorica', 'localizador', 'url_teorica', 'conferencia_da_origem'];
const csv = [cabecalho, ...linhas].map(l => l.map(s => `"${String(s).replaceAll('"', '""')}"`).join(';')).join('\n') + '\n';
const resumo = {
  versao: 'estudo-reverso-integral-2026-11-05', total: questoes.length,
  anotacoesIndividuais: Object.keys(anotacoes).length, explicacoesConceituais: Object.keys(perfis).length,
  referenciasTeoricas: Object.keys(referencias).length, porModulo,
  oficiaisConfrontadas: questoes.filter(q => q.estadoConferencia !== 'caderno').length,
  confrontoOficialPendente: questoes.filter(q => q.estadoConferencia === 'caderno').length,
  limites: ['A auditoria verifica cobertura e integridade dos blocos, não comprova a verdade de cada explicação.', 'A ampliação didática não converte atribuição de apostila em confronto de prova e gabarito oficiais.', 'Exemplos e comparações são autorais, não enunciados adicionais da Cebraspe.'],
};
const destinos = { 'docs/simulados-reais/ESTUDO-REVERSO-1342.csv': '\uFEFF' + csv, 'docs/simulados-reais/ESTUDO-REVERSO-1342.json': JSON.stringify(resumo, null, 2) + '\n' };
for (const [destino, conteudo] of Object.entries(destinos)) {
  if (process.argv.includes('--write')) fs.writeFileSync(destino, conteudo);
  else if (!fs.existsSync(destino) || fs.readFileSync(destino, 'utf8') !== conteudo) throw new Error(`Relatório desatualizado: execute node scripts/auditarEstudoReversoReais.mjs --write`);
}
console.log(`Estudo reverso: ${questoes.length} questões, ${Object.keys(perfis).length} explicações conceituais, ${Object.keys(referencias).length} referências.`);
