export type LeitnerBox = 1 | 2 | 3 | 4 | 5;

export interface LeitnerItem {
  id: string; // ID único do item (ex: checkpointId ou id de assertiva)
  submoduloId: string;
  caixa: LeitnerBox;
  ultimaRevisao: string; // Formato YYYY-MM-DD
  proximaRevisao: string; // Formato YYYY-MM-DD
  historicoAcertos: number;
  historicoErros: number;
}

export const LEITNER_INTERVALOS_DIAS: Record<LeitnerBox, number> = {
  1: 1,
  2: 3,
  3: 7,
  4: 14,
  5: 30,
};

/**
 * Adiciona um número de dias a uma data no formato YYYY-MM-DD
 */
export function somarDiasDataIso(dataIso: string, dias: number): string {
  const [ano, mes, dia] = dataIso.split('-').map(Number);
  const data = new Date(Date.UTC(ano, mes - 1, dia));
  data.setUTCDate(data.getUTCDate() + dias);
  return data.toISOString().split('T')[0];
}

/**
 * Cria ou inicializa um novo item no baralho Leitner
 */
export function criarItemLeitner(
  id: string,
  submoduloId: string,
  dataAtualIso: string
): LeitnerItem {
  return {
    id,
    submoduloId,
    caixa: 1,
    ultimaRevisao: dataAtualIso,
    proximaRevisao: somarDiasDataIso(dataAtualIso, LEITNER_INTERVALOS_DIAS[1]),
    historicoAcertos: 0,
    historicoErros: 0,
  };
}

/**
 * Processa o resultado de um estudo no item Leitner:
 * - Se acertou: avança para a próxima caixa (máx 5) e programa a próxima revisão
 * - Se errou: retorna imediatamente para a Caixa 1 e programa revisão para o dia seguinte
 */
export function processarRespostaLeitner(
  item: LeitnerItem,
  acertou: boolean,
  dataAtualIso: string
): LeitnerItem {
  let novaCaixa: LeitnerBox;

  if (acertou) {
    novaCaixa = (Math.min(5, item.caixa + 1)) as LeitnerBox;
  } else {
    novaCaixa = 1;
  }

  const intervalo = LEITNER_INTERVALOS_DIAS[novaCaixa];
  const proximaRevisao = somarDiasDataIso(dataAtualIso, intervalo);

  return {
    ...item,
    caixa: novaCaixa,
    ultimaRevisao: dataAtualIso,
    proximaRevisao,
    historicoAcertos: acertou ? item.historicoAcertos + 1 : item.historicoAcertos,
    historicoErros: !acertou ? item.historicoErros + 1 : item.historicoErros,
  };
}

/**
 * Retorna todos os itens cuja próxima data de revisão seja menor ou igual à data de referência.
 */
export function getItensPendentesRevisao(
  itens: LeitnerItem[],
  dataReferenciaIso: string
): LeitnerItem[] {
  return itens.filter((item) => item.proximaRevisao <= dataReferenciaIso);
}

/**
 * Retorna estatísticas de distribuição das caixas Leitner
 */
export function getDistribuicaoCaixasLeitner(itens: LeitnerItem[]): Record<LeitnerBox, number> {
  const dist: Record<LeitnerBox, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const item of itens) {
    dist[item.caixa] = (dist[item.caixa] || 0) + 1;
  }
  return dist;
}
