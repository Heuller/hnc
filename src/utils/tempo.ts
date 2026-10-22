/**
 * Utilitário de medição temporal e timestamps para interações e exercícios.
 * Isola chamadas impuras de tempo para manter pureza estrita nos componentes React.
 */

export function obterTimestampAtual(): number {
  return Date.now();
}

export function calcularTempoDecorridoSegundos(tempoInicioMs: number): number {
  return Math.max(1, Math.round((Date.now() - tempoInicioMs) / 1000));
}
