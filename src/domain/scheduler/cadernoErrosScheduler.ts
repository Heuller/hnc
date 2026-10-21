import { z } from 'zod';
import {
  type LeitnerBox,
  LEITNER_INTERVALOS_DIAS,
  somarDiasDataIso,
  calcularDiferencaDias,
  calcularIntervaloRevisao,
} from '../leitner';

export const ItemCadernoErroSchedulerSchema = z.object({
  id: z.string(),
  chaveOriginal: z.string(),
  macroModuloId: z.string(),
  submoduloId: z.string().optional(),
  assertiva: z.string(),
  gabarito: z.enum(['C', 'E']),
  caixa: z.union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
  ]).default(1),
  proximaRevisao: z.string(), // YYYY-MM-DD
  ultimaRevisao: z.string().optional(), // YYYY-MM-DD
  historicoAcertos: z.number().int().nonnegative().default(0),
  historicoErros: z.number().int().nonnegative().default(0),
  certeza: z.enum(['alta', 'media', 'baixa']).optional(),
  prioridadeHipercorrecao: z.boolean().default(false),
  pesoRevisao: z.number().positive().default(1.0),
});

export type ItemCadernoErroSchedulerOutput = z.infer<typeof ItemCadernoErroSchedulerSchema>;
export type ItemCadernoErroScheduler = z.input<typeof ItemCadernoErroSchedulerSchema>;

export interface ProcessarRevisaoCadernoErroParams {
  acertou: boolean;
  certeza?: 'alta' | 'media' | 'baixa';
  dataAtualIso: string; // YYYY-MM-DD
  dataProvaIso?: string; // YYYY-MM-DD
}

export interface MetricasCadernoErros {
  totalItens: number;
  errosAltaConfianca: number;
  totalResolvidos: number;
  pendentesHoje: number;
  tempoEstimadoRevisaoMinutos: number;
  porModulo: Record<string, number>;
}

/**
 * Calcula o score de prioridade de um item no Caderno de Erros.
 *
 * Baseado no Efeito da Hipercorreção (Butterfield & Metcalfe, 2001; Metcalfe, 2017):
 * Erros cometidos com alta confiança geram forte dissonância cognitiva e devem
 * ser revisados com prioridade urgente para evitar consolidação do equívoco.
 */
export function calcularScorePrioridade(
  item: ItemCadernoErroScheduler,
  dataAtualIso: string
): number {
  let score = 0;

  // 1. Hipercorreção: +100 pontos se o erro foi com certeza/alta confiança
  if (item.prioridadeHipercorrecao || item.certeza === 'alta') {
    score += 100;
  }

  // 2. Atraso na data de revisão: +10 pontos por dia de atraso
  const diasAtraso = calcularDiferencaDias(item.proximaRevisao, dataAtualIso);
  if (diasAtraso > 0) {
    score += diasAtraso * 10;
  } else if (diasAtraso === 0) {
    score += 15; // Vence hoje
  }

  // 3. Posição na caixa Leitner: Caixas mais baixas (memória mais frágil) têm prioridade
  // Caixa 1 -> (6 - 1) * 15 = 75 pontos
  // Caixa 5 -> (6 - 5) * 15 = 15 pontos
  score += (6 - (item.caixa || 1)) * 15;

  // 4. Frequência de erros: +5 pontos por erro prévio
  score += (item.historicoErros || 0) * 5;

  return score;
}

/**
 * Ordena a fila de revisão do Caderno de Erros de forma decrescente pelo score de prioridade.
 */
export function ordenarFilaRevisaoCadernoErros(
  itens: ItemCadernoErroScheduler[],
  dataAtualIso: string
): ItemCadernoErroScheduler[] {
  return [...itens].sort((a, b) => {
    const scoreA = calcularScorePrioridade(a, dataAtualIso);
    const scoreB = calcularScorePrioridade(b, dataAtualIso);
    return scoreB - scoreA;
  });
}

/**
 * Processa o resultado de uma revisão de assertiva no Caderno de Erros (Regra D.4 + Hipercorreção).
 *
 * Regras implementadas:
 * 1. Ao errar:
 *    - Rebaixa imediatamente para a Caixa 1.
 *    - Agenda próxima revisão para amanhã (dataAtualIso + 1 dia).
 *    - Se errou com certeza alta, reforça a flag de hipercorreção e peso 2.0x.
 * 2. Ao acertar um item que NÃO estava vencido:
 *    - Não avança a caixa e mantém a data de revisão futura (anti-decoreba imediata).
 * 3. Ao acertar um item que ESTAVA vencido:
 *    - Avança 1 caixa (máximo Caixa 5).
 *    - Calcula novo intervalo de revisão, aplicando compressão temporal se a data da prova for iminente.
 */
export function processarRevisaoCadernoErro(
  item: ItemCadernoErroScheduler,
  params: ProcessarRevisaoCadernoErroParams
): ItemCadernoErroScheduler {
  const { acertou, certeza, dataAtualIso, dataProvaIso } = params;
  const isVencido = dataAtualIso >= item.proximaRevisao;
  const isAltaConfianca = certeza === 'alta';

  if (!acertou) {
    const proximaRevisao = somarDiasDataIso(dataAtualIso, LEITNER_INTERVALOS_DIAS[1]);
    return {
      ...item,
      caixa: 1,
      ultimaRevisao: dataAtualIso,
      proximaRevisao,
      historicoErros: (item.historicoErros || 0) + 1,
      prioridadeHipercorrecao: isAltaConfianca || item.prioridadeHipercorrecao,
      pesoRevisao: isAltaConfianca ? 2.0 : item.pesoRevisao || 1.0,
      certeza: certeza || item.certeza,
    };
  }

  // Acertou:
  if (!isVencido) {
    // Regra D.4: Acertar antes do vencimento não avança caixa
    return {
      ...item,
      ultimaRevisao: dataAtualIso,
      historicoAcertos: (item.historicoAcertos || 0) + 1,
    };
  }

  // Acertou e estava vencido: avança caixa (máximo 5)
  const novaCaixa = Math.min(5, (item.caixa || 1) + 1) as LeitnerBox;
  let intervaloDias = calcularIntervaloRevisao(novaCaixa, dataAtualIso, dataProvaIso);

  // Se houver data de prova próxima, não permitir que a data ultrapasse o dia da prova
  if (dataProvaIso) {
    const diasAteProva = calcularDiferencaDias(dataAtualIso, dataProvaIso);
    if (diasAteProva > 0 && intervaloDias > diasAteProva) {
      intervaloDias = Math.max(1, Math.floor(diasAteProva / 2));
    }
  }

  const proximaRevisao = somarDiasDataIso(dataAtualIso, intervaloDias);

  return {
    ...item,
    caixa: novaCaixa,
    ultimaRevisao: dataAtualIso,
    proximaRevisao,
    historicoAcertos: (item.historicoAcertos || 0) + 1,
    // Se avançou além da Caixa 2, a hipercorreção já começou a consolidar
    prioridadeHipercorrecao: novaCaixa < 3 ? item.prioridadeHipercorrecao : false,
    pesoRevisao: novaCaixa >= 3 ? 1.0 : item.pesoRevisao || 1.0,
  };
}

/**
 * Calcula métricas agregadas do Caderno de Erros para visualização no painel
 */
export function calcularMetricasCadernoErros(
  itens: ItemCadernoErroScheduler[],
  dataAtualIso: string
): MetricasCadernoErros {
  const totalItens = itens.length;
  let errosAltaConfianca = 0;
  let totalResolvidos = 0;
  let pendentesHoje = 0;
  const porModulo: Record<string, number> = {};

  for (const item of itens) {
    if (item.prioridadeHipercorrecao || item.certeza === 'alta') {
      errosAltaConfianca++;
    }

    if (item.caixa === 5) {
      totalResolvidos++;
    }

    if (item.proximaRevisao <= dataAtualIso) {
      pendentesHoje++;
    }

    const modKey = (item.macroModuloId || 'GERAL').toUpperCase();
    porModulo[modKey] = (porModulo[modKey] || 0) + 1;
  }

  // 1.5 minutos por revisão de assertiva com leitura da justificativa
  const tempoEstimadoRevisaoMinutos = Math.round(pendentesHoje * 1.5);

  return {
    totalItens,
    errosAltaConfianca,
    totalResolvidos,
    pendentesHoje,
    tempoEstimadoRevisaoMinutos,
    porModulo,
  };
}
