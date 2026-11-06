type RelatorioLote = { novasQuestoes: number; totalAntes: number; totalDepois: number; confrontoNaOrigem: number; confrontoEmCopia: number; tipoRevisao?: string };
const arquivos = import.meta.glob<RelatorioLote>(['../../../docs/simulados-reais/LOTE-300-ACERVO-*.json', '../../../docs/simulados-reais/CURADORIA-LACUNAS-*.json'], { eager: true, import: 'default' });
export const RELATORIOS_LOTES_REAIS = Object.entries(arquivos)
  .filter(([nome]) => Number(nome.match(/(?:ACERVO|LACUNAS)-(\d+)\.json$/)?.[1]) >= 6)
  .sort(([a], [b]) => Number(a.match(/-(\d+)\.json$/)?.[1]) - Number(b.match(/-(\d+)\.json$/)?.[1])).map(([, relatorio]) => relatorio);
export const CONTAGEM_REAIS = RELATORIOS_LOTES_REAIS.reduce((contagem, lote) => ({
  total: contagem.total + lote.novasQuestoes,
  origem: contagem.origem + lote.confrontoNaOrigem,
  copia: contagem.copia + lote.confrontoEmCopia,
}), { total: 1529, origem: 1329, copia: 200 });
