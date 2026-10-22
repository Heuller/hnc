// Exporta o banco agrupado por texto de item em lotes JSON por módulo, marcando o que falta.
// Uso: node scripts/estudoReverso/exportarLotes.mjs <diretorio-saida> [tamanhoLote]
import fs from 'node:fs';
import path from 'node:path';
import { ARQUIVOS_JSON, lerArquivo, chaveItem, justificativaFraca, armadilhaFraca, arquivoTeoria } from './comum.mjs';

const saida = process.argv[2];
const tamanho = Number(process.argv[3] || 40);
if (!saida) throw new Error('informe o diretório de saída');
fs.mkdirSync(saida, { recursive: true });

const grupos = new Map();
for (const arquivo of ARQUIVOS_JSON) {
  for (const q of lerArquivo(arquivo).itens) {
    const k = chaveItem(q);
    if (!grupos.has(k)) grupos.set(k, []);
    grupos.get(k).push({ arquivo, q });
  }
}

const melhor = (lista, campo, fraco) =>
  lista.map((x) => x.q[campo]).filter((t) => t && !fraco(t)).sort((a, b) => b.length - a.length)[0];

const porModulo = new Map();
let total = 0;
for (const lista of grupos.values()) {
  // A origem preferida é o caderno de módulo (mN-*), não os simulados compostos
  const base = (lista.find((x) => /^m\d/.test(x.arquivo)) ?? lista[0]).q;
  const gabaritos = new Set(lista.map((x) => x.q.gabarito));
  const justificativa = melhor(lista, 'justificativa', justificativaFraca);
  const armadilha = melhor(lista, 'armadilhaBanca', armadilhaFraca);
  const versaoCorreta = lista.map((x) => x.q.versao_correta).find(Boolean);
  const grupo = {
    ids: lista.map((x) => x.q.id),
    submoduloId: base.submoduloId,
    teoria: arquivoTeoria(base.submoduloId),
    contexto: base.contexto,
    item: base.item,
    gabarito: base.gabarito,
    gabaritoDivergente: gabaritos.size > 1 ? [...gabaritos] : undefined,
    origem: base.fonteOriginal?.descricao,
    fonte: base.fonte,
    justificativaAtual: justificativa ?? base.justificativa,
    armadilhaAtual: armadilha ?? base.armadilhaBanca,
    versaoCorretaAtual: versaoCorreta,
    precisa: {
      justificativa: !justificativa,
      armadilhaBanca: !armadilha,
      versao_correta: base.gabarito === 'E' && !versaoCorreta,
      versao_errada: base.gabarito === 'C' && !lista.some((x) => x.q.versao_errada),
      gatilho: !lista.some((x) => x.q.gatilho),
    },
  };
  const mod = (/^m(\d+[ab]?)/.exec(base.id)?.[0] ?? base.id.split('-')[0]).toLowerCase();
  if (!porModulo.has(mod)) porModulo.set(mod, []);
  porModulo.get(mod).push(grupo);
  total++;
}

const resumo = [];
for (const [mod, lista] of [...porModulo].sort()) {
  for (let i = 0; i < lista.length; i += tamanho) {
    const nome = `${mod}-${String(i / tamanho + 1).padStart(2, '0')}.json`;
    fs.writeFileSync(path.join(saida, nome), JSON.stringify(lista.slice(i, i + tamanho), null, 2));
    resumo.push(`${nome}: ${lista.slice(i, i + tamanho).length}`);
  }
}
const contar = (c) => [...porModulo.values()].flat().filter((g) => g.precisa[c]).length;
console.log(`grupos únicos: ${total}`);
for (const c of ['justificativa', 'armadilhaBanca', 'versao_correta', 'versao_errada', 'gatilho']) console.log(`  precisa ${c}: ${contar(c)}`);
console.log(`  gabarito divergente entre cópias: ${[...porModulo.values()].flat().filter((g) => g.gabaritoDivergente).length}`);
console.log(resumo.join('\n'));
