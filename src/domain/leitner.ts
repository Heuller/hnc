import {
  JORNADA_CONFIG,
  calcularIntervaloAlvo,
} from '../config/jornada.config';

export type LeitnerBox = 1 | 2 | 3 | 4 | 5;

export interface LeitnerItem {
  id: string; // ID único do item (ex: checkpointId ou id de assertiva)
  submoduloId: string;
  caixa: LeitnerBox;
  ultimaRevisao: string; // Formato YYYY-MM-DD
  proximaRevisao: string; // Formato YYYY-MM-DD
  historicoAcertos: number;
  historicoErros: number;
  vezesExposto?: number; // Contador de exposições totais
}

export const LEITNER_INTERVALOS_DIAS: Record<LeitnerBox, number> = {
  1: 1,
  2: 3,
  3: 7,
  4: 14,
  5: 30,
};

/**
 * Adiciona um número de dias a uma data no formato YYYY-MM-DD (UTC para evitar drift de fuso horário)
 */
export function somarDiasDataIso(dataIso: string, dias: number): string {
  const [ano, mes, dia] = dataIso.split('-').map(Number);
  const data = new Date(Date.UTC(ano, mes - 1, dia));
  data.setUTCDate(data.getUTCDate() + dias);
  return data.toISOString().split('T')[0];
}

/**
 * Calcula a diferença em dias entre duas datas no formato YYYY-MM-DD
 */
export function calcularDiferencaDias(dataInicioIso: string, dataFimIso: string): number {
  const [a1, m1, d1] = dataInicioIso.split('-').map(Number);
  const [a2, m2, d2] = dataFimIso.split('-').map(Number);
  const t1 = Date.UTC(a1, m1 - 1, d1);
  const t2 = Date.UTC(a2, m2 - 1, d2);
  const msPorDia = 1000 * 60 * 60 * 24;
  return Math.round((t2 - t1) / msPorDia);
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
    vezesExposto: 0,
  };
}

/**
 * Calcula o intervalo de revisão (em dias) para a caixa especificada,
 * aplicando a heurística de dias restantes para a data da prova quando informada (Regra D.4).
 *
 * Referência bibliográfica: Cepeda et al. (2008), Spacing effects in learning: A temporal
 * ridgeline of optimal retention. As proporções representam aproximações empíricas para
 * retenção conceitual e não devem ser descritas como "ótimas" na interface.
 */
export function calcularIntervaloRevisao(
  caixa: LeitnerBox,
  dataAtualIso: string,
  dataProvaIso?: string
): number {
  if (dataProvaIso) {
    const diasRestantes = calcularDiferencaDias(dataAtualIso, dataProvaIso);
    if (diasRestantes > 0) {
      const lacunaBase = calcularIntervaloAlvo(diasRestantes);
      // Os intervalos seguintes crescem x2 até o teto configurado de 30 dias
      const multiplicador = Math.pow(2, caixa - 1);
      const intervaloCalculado = Math.round(lacunaBase * multiplicador);
      return Math.min(
        JORNADA_CONFIG.limiteMaximoIntervaloDias,
        Math.max(JORNADA_CONFIG.limiteMinimoIntervaloDias, intervaloCalculado)
      );
    }
  }

  return LEITNER_INTERVALOS_DIAS[caixa];
}

/**
 * Processa o resultado de um estudo no item Leitner (Regra D.4):
 * - Se errou: retorna imediatamente para a Caixa 1 e programa revisão para +1 dia.
 * - Se acertou E o item NÃO estava vencido (dataAtualIso < proximaRevisao):
 *   NÃO avança a caixa (mantém a caixa atual e sua data de revisão) para evitar
 *   falsa consolidação por repetição imediata (ex: portal feito no mesmo dia).
 * - Se acertou E o item ESTAVA vencido (dataAtualIso >= proximaRevisao):
 *   Avança para a próxima caixa (máx 5) e programa nova data pelo intervalo.
 */
export function processarRespostaLeitner(
  item: LeitnerItem,
  acertou: boolean,
  dataAtualIso: string,
  dataProvaIso?: string
): LeitnerItem {
  const isVencido = dataAtualIso >= item.proximaRevisao;
  const vezesExposto = (item.vezesExposto || 0) + 1;

  if (!acertou) {
    // Errar sempre rebaixa para a Caixa 1
    const novaCaixa: LeitnerBox = 1;
    const proximaRevisao = somarDiasDataIso(dataAtualIso, 1);

    return {
      ...item,
      caixa: novaCaixa,
      ultimaRevisao: dataAtualIso,
      proximaRevisao,
      historicoAcertos: item.historicoAcertos,
      historicoErros: item.historicoErros + 1,
      vezesExposto,
    };
  }

  // Acertou:
  if (!isVencido) {
    // REGRA D.4: ACERTAR UM ITEM QUE NÃO ESTAVA VENCIDO NÃO AVANÇA A CAIXA
    return {
      ...item,
      ultimaRevisao: dataAtualIso,
      historicoAcertos: item.historicoAcertos + 1,
      vezesExposto,
      // caixa e proximaRevisao são preservadas
    };
  }

  // Acertou e estava vencido: avança de caixa
  const novaCaixa = Math.min(5, item.caixa + 1) as LeitnerBox;
  const intervalo = calcularIntervaloRevisao(novaCaixa, dataAtualIso, dataProvaIso);
  const proximaRevisao = somarDiasDataIso(dataAtualIso, intervalo);

  return {
    ...item,
    caixa: novaCaixa,
    ultimaRevisao: dataAtualIso,
    proximaRevisao,
    historicoAcertos: item.historicoAcertos + 1,
    historicoErros: item.historicoErros,
    vezesExposto,
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
