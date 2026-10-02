export interface HeuristicaDiasRestantes {
  ate_dias: number;
  fracao: number;
}

export interface JornadaConfig {
  aproveitamentoMinimo: number;
  nMinimoVerificacao: number;
  simuladoObrigatorioParaAvancar: boolean;
  desafioItensTotal: number;
  desafioAcertosMinimo: number;
  desafioErrosMaximo: number;
  portalItensTotal: number;
  portalAcertosMinimo: number;
  portalErrosMaximo: number;
  portalProporcaoModuloAnterior: number;
  portalProporcaoModulosPrecedentes: number;
  intervalosRevisaoDias: number[];
  heuristicaDiasRestantes: HeuristicaDiasRestantes[];
  limiteMaximoIntervaloDias: number;
  limiteMinimoIntervaloDias: number;
  modoLivreDefault: boolean;
}

/**
 * Parâmetros centrais da Jornada de Domínio Cebraspe (Parte D)
 * Regra D.2: Todos os critérios devem vir deste arquivo de configuração, nunca hardcoded no código.
 */
export const JORNADA_CONFIG: JornadaConfig = {
  aproveitamentoMinimo: 0.85,
  nMinimoVerificacao: 8,
  simuladoObrigatorioParaAvancar: true,
  desafioItensTotal: 100,
  desafioAcertosMinimo: 85, // ceil(0.85 * 100)
  desafioErrosMaximo: 15,
  portalItensTotal: 20,
  portalAcertosMinimo: 17, // ceil(0.85 * 20)
  portalErrosMaximo: 3,
  portalProporcaoModuloAnterior: 0.70,
  portalProporcaoModulosPrecedentes: 0.30,
  intervalosRevisaoDias: [1, 3, 7, 14, 30],
  heuristicaDiasRestantes: [
    { ate_dias: 14, fracao: 0.30 },
    { ate_dias: 90, fracao: 0.15 },
    { ate_dias: 365, fracao: 0.075 },
  ],
  limiteMaximoIntervaloDias: 30,
  limiteMinimoIntervaloDias: 1,
  modoLivreDefault: false,
};

/**
 * Calcula a quantidade de acertos necessários para atingir o limiar de aproveitamento mínimo.
 * Fórmula: ceil(aproveitamentoMinimo * N)
 */
export function calcularAcertosNecessarios(totalItens: number, aproveitamentoMin = JORNADA_CONFIG.aproveitamentoMinimo): number {
  if (totalItens <= 0) return 0;
  return Math.ceil(aproveitamentoMin * totalItens);
}

/**
 * Retorna a frase explicativa da regra em itens inteiros.
 * Exemplo: "17 acertos em 20 itens (no máximo 3 erros)"
 */
export function getDescricaoLimiar(totalItens: number, aproveitamentoMin = JORNADA_CONFIG.aproveitamentoMinimo): string {
  const acertos = calcularAcertosNecessarios(totalItens, aproveitamentoMin);
  const maxErros = Math.max(0, totalItens - acertos);
  return `${acertos} acertos em ${totalItens} itens (no máximo ${maxErros} erros)`;
}
