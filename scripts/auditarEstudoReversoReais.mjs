import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import { createHash } from 'node:crypto';

const raiz = process.cwd();
const ler = nome => JSON.parse(fs.readFileSync(path.join(raiz, nome), 'utf8'));
const pasta = 'src/content/estudoReversoReais';
const anotacoes = ler(`${pasta}/anotacoes.json`);
const perfis = ler(`${pasta}/perfis.json`);
const referencias = ler(`${pasta}/referencias.json`);
// Leitura por AST: mantém uma única fonte para os quatro itens oficiais em TypeScript.
const codigo = ts.createSourceFile('questoesReais.ts', fs.readFileSync('src/content/questoesReais.ts', 'utf8'), ts.ScriptTarget.Latest, true);
const literais = new Map(codigo.statements.filter(ts.isVariableStatement).flatMap(n => n.declarationList.declarations.filter(d => d.initializer && ts.isStringLiteral(d.initializer)).map(d => [d.name.getText(codigo), d.initializer.text])));
let oficiais = [];
const visitar = n => {
  if (ts.isVariableDeclaration(n) && n.name.getText(codigo) === 'QUESTOES_OFICIAIS_CONFERIDAS' && ts.isArrayLiteralExpression(n.initializer)) {
    oficiais = n.initializer.elements.map(obj => Object.fromEntries(obj.properties.filter(p => ts.isPropertyAssignment(p) && (ts.isStringLiteral(p.initializer) || ts.isIdentifier(p.initializer) && literais.has(p.initializer.text))).map(p => [p.name.getText(codigo), ts.isStringLiteral(p.initializer) ? p.initializer.text : literais.get(p.initializer.text)])));
  }
  ts.forEachChild(n, visitar);
};
visitar(codigo);
if (oficiais.length !== 4) throw new Error('Estrutura dos itens oficiais mudou; atualize a auditoria.');
const origem = [...oficiais, ...ler('src/content/questoesReaisTriadas.json')];
const ids = new Set(origem.map(q => q.id));
if (ids.size !== origem.length || Object.keys(anotacoes).length !== ids.size || Object.keys(anotacoes).some(id => !ids.has(id))) throw new Error('IDs duplicados ou anotações órfãs.');
const conferencia = ler('src/content/conferenciaOficialReais/registro.json');
const documento = ler('docs/simulados-reais/CONFERENCIA-OFICIAL-2026-11-05.json');
const pendentesOrigem = origem.filter(q => q.estadoConferencia === 'caderno');
const revisoes = new Map(documento.itens.map(r => [r.id, r]));
const sha = texto => createHash('sha256').update(texto).digest('hex');
if (revisoes.size !== documento.itens.length || revisoes.size !== pendentesOrigem.length) throw new Error('Cobertura documental inconsistente.');
for (const q of pendentesOrigem) {
  const r = revisoes.get(q.id);
  const c = conferencia.itens[q.id];
  if (!r || sha(q.item) !== r.sha256ItemAnterior) throw new Error(`Origem diferente da conferência: ${q.id}`);
  if (r.resultado === 'pendente') {
    if (c || !r.motivo) throw new Error(`Pendência promovida ou sem motivo: ${q.id}`);
    continue;
  }
  if (!c || c.numero !== r.numeroOficial || c.gabarito !== r.gabaritoOficial || c.fonteId !== r.fonteId) throw new Error(`Registro diferente da evidência: ${q.id}`);
  if (sha(conferencia.editorial[q.id]?.item ?? q.item) !== r.sha256ItemConferido) throw new Error(`Redação diferente da conferência: ${q.id}`);
  const f = conferencia.fontes[c.fonteId];
  const evidencia = documento.fontes[c.fonteId];
  if (!f || !evidencia || ['provaUrl', 'gabaritoUrl', 'modo', 'tipoGabarito', 'codigo'].some(campo => f[campo] !== evidencia[campo])) throw new Error(`Fonte diferente da conferência: ${q.id}`);
  if (f.modo !== r.modo || !['original', 'copia'].includes(f.modo)) throw new Error(`Modalidade inválida: ${q.id}`);
  if (f.modo === 'original' && [f.provaUrl, f.gabaritoUrl].some(url => !['cdn.cebraspe.org.br', 'www.cespe.unb.br', 'www.cebraspe.org.br'].includes(new URL(url).hostname))) throw new Error(`Espelho apresentado como origem: ${q.id}`);
}
if (Object.keys(conferencia.itens).some(id => !revisoes.has(id) || revisoes.get(id).resultado === 'pendente') || Object.keys(conferencia.editorial).some(id => !conferencia.itens[id])) throw new Error('Registro documental órfão.');
const semDocumento = origem.filter(q => !conferencia.itens[q.id] && (q.estadoConferencia === 'caderno' || !q.gabaritoUrl));
const excluidas = new Set(semDocumento.map(q => q.id));
const questoes = origem.filter(q => conferencia.itens[q.id]?.gabarito !== 'X' && !excluidas.has(q.id)).map(q => {
  const c = conferencia.itens[q.id];
  if (!c) return q;
  const f = conferencia.fontes[c.fonteId];
  return { ...q, ...conferencia.editorial[q.id], gabarito: c.gabarito, estadoConferencia: f.modo === 'copia' ? 'copia-oficial' : undefined };
});
const linhas = [];
const porModulo = {};
for (const q of questoes) {
  const a = anotacoes[q.id];
  const p = a && perfis[a.perfil];
  const r = p && referencias[a.referencia || p.referencia];
  if (!a || !p || !r || !q.item.includes(a.gatilho)) throw new Error(`Revisão incompleta ou gatilho ausente: ${q.id}`);
  const contraste = q.gabarito === 'E' ? q.versao_correta : q.versao_errada && !/\bindevidamente\b/i.test(q.versao_errada) ? q.versao_errada : p.contrasteErrado;
  if (!contraste || /\bindevidamente\b/i.test(contraste) || !p.regra || !p.exemplo || !p.tecnica || !r.localizador) throw new Error(`Bloco ausente: ${q.id}`);
  const conferencia = q.estadoConferencia === 'caderno' ? 'Atribuição e gabarito no caderno; confronto oficial pendente' : q.estadoConferencia === 'copia-oficial' ? 'Documentos oficiais conferidos em cópia; espelho identificado' : 'Prova e gabarito oficiais confrontados na origem';
  linhas.push([q.id, q.modulo, q.submoduloId, q.gabarito, a.perfil, a.gatilho, p.titulo, p.regra, q.justificativa, a.exemplo || p.exemplo, contraste, [p.tecnica, q.armadilhaBanca].filter(Boolean).join(' '), r.titulo, r.localizador, r.url || '', conferencia]);
  porModulo[q.modulo] = (porModulo[q.modulo] || 0) + 1;
}
const cabecalho = ['id', 'modulo', 'submodulo', 'gabarito', 'perfil_conceitual', 'trecho_decisivo', 'conceito', 'regra', 'aplicacao_ao_item', 'exemplo', 'comparacao_didatica', 'tecnica', 'referencia_teorica', 'localizador', 'url_teorica', 'conferencia_da_origem'];
const csv = [cabecalho, ...linhas].map(l => l.map(s => `"${String(s).replaceAll('"', '""')}"`).join(';')).join('\n') + '\n';
const resumo = {
  versao: 'selecao-documental-segura-2026-11-05', total: questoes.length,
  anotacoesIndividuais: questoes.length, anotacoesHistoricas: Object.keys(anotacoes).length,
  excluidasPorAnulacao: Object.values(conferencia.itens).filter(q => q.gabarito === 'X').length,
  excluidasPorPendenciaDocumental: semDocumento.length, explicacoesConceituais: Object.keys(perfis).length,
  referenciasTeoricas: Object.keys(referencias).length, porModulo,
  exemplosIndividuais: questoes.filter(q => anotacoes[q.id].exemplo).length,
  oficiaisConfrontadas: questoes.filter(q => !q.estadoConferencia).length,
  documentosOficiaisEmCopia: questoes.filter(q => q.estadoConferencia === 'copia-oficial').length,
  confrontoOficialPendente: questoes.filter(q => q.estadoConferencia === 'caderno').length,
  limites: ['A auditoria verifica cobertura e integridade dos blocos, não comprova a verdade de cada explicação.', 'A ampliação didática não converte atribuição de apostila em confronto de prova e gabarito oficiais.', 'Exemplos e comparações são autorais, não enunciados adicionais da Cebraspe.'],
};
if (resumo.total + semDocumento.length !== documento.resumo.bancoDepois || resumo.oficiaisConfrontadas !== documento.resumo.conferidasNaOrigem || resumo.documentosOficiaisEmCopia !== documento.resumo.documentosConferidosEmEspelho || resumo.confrontoOficialPendente !== 0 || semDocumento.length !== documento.resumo.pendentes || resumo.excluidasPorAnulacao !== documento.resumo.anuladasRetiradas) throw new Error('Contagens da conferência divergentes.');
const selecao = {
  dataEditorial: '2026-11-05', bancoAntes: documento.resumo.bancoDepois, bancoDepois: questoes.length,
  criterio: 'Utilizar somente questões com enunciado legível e conferência documental suficiente; excluir pendências e anuladas dos treinos.',
  revisaoConceitual: 'A explicação deve analisar o conteúdo com fundamentação e exemplos. O julgamento oficial da prova é identificado separadamente da análise editorial; conhecimento temático não autentica uma transcrição duvidosa.',
  excluidasPorPendenciaDocumental: semDocumento.map(q => ({ id: q.id, provaDeclarada: q.prova, motivo: revisoes.get(q.id)?.motivo })),
};
const destinos = { 'docs/simulados-reais/ESTUDO-REVERSO-INTEGRAL.csv': '\uFEFF' + csv, 'docs/simulados-reais/ESTUDO-REVERSO-INTEGRAL.json': JSON.stringify(resumo, null, 2) + '\n', 'docs/simulados-reais/SELECAO-SEGURA-2026-11-05.json': JSON.stringify(selecao, null, 2) + '\n' };
for (const [destino, conteudo] of Object.entries(destinos)) {
  if (process.argv.includes('--write')) fs.writeFileSync(destino, conteudo);
  else if (!fs.existsSync(destino) || fs.readFileSync(destino, 'utf8') !== conteudo) throw new Error(`Relatório desatualizado: execute node scripts/auditarEstudoReversoReais.mjs --write`);
}
console.log(`Estudo reverso: ${questoes.length} questões, ${Object.keys(perfis).length} explicações conceituais, ${Object.keys(referencias).length} referências.`);
