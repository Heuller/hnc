import {
  JORNADA_CONFIG,
  calcularAcertosNecessarios,
} from '../config/jornada.config';

export type TipoTentativa =
  | 'verificacao_submodulo'
  | 'desafio_modulo'
  | 'portal_revisao';

export interface RespostaTentativa {
  questionId: string;
  resposta: 'C' | 'E' | 'BRANCO';
  gabarito: 'C' | 'E';
  acertou: boolean;
  secaoId?: string;
  texto?: string;
}

/**
 * TentativaRegistro: Registro imutável (append-only) que serve como FONTE DE VERDADE da Jornada (Regra D.6).
 * Todos os estados da Jornada e do progresso são derivados estritamente dessas tentativas.
 */
export interface TentativaRegistro {
  id: string;
  userId: string;
  tipo: TipoTentativa;
  targetId: string; // Ex: '1.1' para submódulo, 'm1' para desafio, 'portal-m2' para portal
  moduloId: string; // Ex: 'm1', 'm2'
  totalItens: number;
  acertos: number;
  erros: number;
  emBranco: number;
  aproveitamento: number; // Fração decimal: acertos / totalItens
  notaLiquida: number; // Fator Cebraspe: acertos - erros
  aprovado: boolean; // acertos >= ceil(aproveitamentoMinimo * totalItens)
  acertosNecessarios: number;
  errosMaximos: number;
  secoesComErros: string[];
  respostas: Record<string, RespostaTentativa>;
  foraDaTrilha: boolean; // True se respondido enquanto o Modo Livre estava ativo (Regra D.5)
  criadoEm: string; // ISO 8601 UTC
}

export interface MetricasCalculadasTentativa {
  totalItens: number;
  acertos: number;
  erros: number;
  emBranco: number;
  aproveitamento: number;
  notaLiquida: number;
  aprovado: boolean;
  acertosNecessarios: number;
  errosMaximos: number;
  secoesComErros: string[];
}

/**
 * Calcula todas as métricas oficiais de uma tentativa a partir das respostas.
 * Critério D.2:
 * - aproveitamentoMinimo: 0.85
 * - Métrica: acertos ÷ totalItens da tentativa; "em branco" conta como não acerto.
 * - Cálculo em itens inteiros: acertosNecessarios = ceil(0.85 * N).
 * - Nota líquida (C - E) exibida à parte, sem servir de critério de corte.
 */
export function calcularMetricasTentativa(
  respostas: Record<string, RespostaTentativa>,
  totalItens: number,
  aproveitamentoMinimo = JORNADA_CONFIG.aproveitamentoMinimo
): MetricasCalculadasTentativa {
  let acertos = 0;
  let erros = 0;
  let emBranco = 0;
  const secoesComErrosSet = new Set<string>();

  for (const item of Object.values(respostas)) {
    if (item.resposta === 'BRANCO') {
      emBranco++;
    } else if (item.acertou) {
      acertos++;
    } else {
      erros++;
      if (item.secaoId) {
        secoesComErrosSet.add(item.secaoId);
      }
    }
  }

  // Itens não respondidos na tentativa contam como 'em branco' (não acerto)
  const respondidosCount = acertos + erros + emBranco;
  if (respondidosCount < totalItens) {
    emBranco += totalItens - respondidosCount;
  }

  const acertosNecessarios = calcularAcertosNecessarios(totalItens, aproveitamentoMinimo);
  const errosMaximos = Math.max(0, totalItens - acertosNecessarios);
  const aproveitamento = totalItens > 0 ? acertos / totalItens : 0;
  const notaLiquida = acertos - erros;
  const aprovado = totalItens > 0 && acertos >= acertosNecessarios;

  return {
    totalItens,
    acertos,
    erros,
    emBranco,
    aproveitamento,
    notaLiquida,
    aprovado,
    acertosNecessarios,
    errosMaximos,
    secoesComErros: Array.from(secoesComErrosSet),
  };
}

/**
 * Cria uma nova tentativa com id único e carimbo imutável
 */
export function criarTentativaRegistro(params: {
  id?: string;
  userId: string;
  tipo: TipoTentativa;
  targetId: string;
  moduloId: string;
  totalItens: number;
  respostas: Record<string, RespostaTentativa>;
  foraDaTrilha?: boolean;
  criadoEm?: string;
  aproveitamentoMinimo?: number;
}): TentativaRegistro {
  const metricas = calcularMetricasTentativa(
    params.respostas,
    params.totalItens,
    params.aproveitamentoMinimo ?? JORNADA_CONFIG.aproveitamentoMinimo
  );

  return {
    id: params.id || `tentativa-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    userId: params.userId,
    tipo: params.tipo,
    targetId: params.targetId,
    moduloId: params.moduloId,
    totalItens: params.totalItens,
    acertos: metricas.acertos,
    erros: metricas.erros,
    emBranco: metricas.emBranco,
    aproveitamento: metricas.aproveitamento,
    notaLiquida: metricas.notaLiquida,
    aprovado: metricas.aprovado,
    acertosNecessarios: metricas.acertosNecessarios,
    errosMaximos: metricas.errosMaximos,
    secoesComErros: metricas.secoesComErros,
    respostas: params.respostas,
    foraDaTrilha: params.foraDaTrilha ?? false,
    criadoEm: params.criadoEm || new Date().toISOString(),
  };
}

/**
 * Filtra tentativas associadas a um alvo específico, ordenadas cronologicamente da mais antiga para a mais recente.
 */
export function filtrarTentativasPorTarget(
  tentativas: TentativaRegistro[],
  targetId: string,
  incluirForaDaTrilha = false
): TentativaRegistro[] {
  return tentativas
    .filter((t) => t.targetId === targetId && (incluirForaDaTrilha || !t.foraDaTrilha))
    .sort((a, b) => new Date(a.criadoEm).getTime() - new Date(b.criadoEm).getTime());
}

/**
 * Retorna a tentativa mais recente para um determinado targetId
 */
export function obterUltimaTentativa(
  tentativas: TentativaRegistro[],
  targetId: string,
  incluirForaDaTrilha = false
): TentativaRegistro | undefined {
  const lista = filtrarTentativasPorTarget(tentativas, targetId, incluirForaDaTrilha);
  return lista.length > 0 ? lista[lista.length - 1] : undefined;
}
