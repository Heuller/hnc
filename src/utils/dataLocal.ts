/**
 * Datas "de hoje" no fuso de Brasília.
 *
 * `new Date().toISOString().split('T')[0]` devolve a data em UTC: depois das 21h em
 * Brasília (UTC-3) o app já enxergava o dia seguinte e errava constância, fila de
 * revisão e cronograma. Toda data "de hoje" deve vir daqui.
 */
const FUSO_APP = 'America/Sao_Paulo';

const formatadorIso = new Intl.DateTimeFormat('en-CA', {
  timeZone: FUSO_APP,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

/** Data de hoje (YYYY-MM-DD) em America/Sao_Paulo. `agora` existe para testes. */
export function hojeLocalIso(agora: Date = new Date()): string {
  return formatadorIso.format(agora);
}

/** Soma dias a uma data YYYY-MM-DD sem depender do fuso do navegador. */
export function somarDiasIso(dataIso: string, dias: number): string {
  const [ano, mes, dia] = dataIso.split('-').map(Number);
  const d = new Date(Date.UTC(ano, mes - 1, dia, 12, 0, 0));
  d.setUTCDate(d.getUTCDate() + dias);
  return d.toISOString().split('T')[0];
}

/** Data de `n` dias antes de hoje (fuso de Brasília). */
export function diasAtrasIso(n: number, agora: Date = new Date()): string {
  return somarDiasIso(hojeLocalIso(agora), -n);
}

/** Dia da semana de uma data YYYY-MM-DD (0 = domingo), independente do fuso. */
export function diaDaSemanaIso(dataIso: string): number {
  const [ano, mes, dia] = dataIso.split('-').map(Number);
  return new Date(Date.UTC(ano, mes - 1, dia, 12, 0, 0)).getUTCDay();
}
