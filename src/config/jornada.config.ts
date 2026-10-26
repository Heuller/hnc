export interface HeuristicaDiasRestantes {
  ate_dias: number;
  fracao: number;
}

export interface JornadaConfig {
  aproveitamentoMinimo: number;
  minimoVerificacao: number; // 0.85
  minimoSimuladoModulo: number; // 0.80
  nMinimoVerificacao: number;
  simuladoObrigatorioParaAvancar: boolean;
  desafioItensTotal: number;
  desafioAcertosMinimo: number;
  desafioErrosMaximo: number;
  segundosPorItemProva: number; // 100s ritmo de prova (edital: 5h / 180 itens)
  intervaloRetesteMinutos: number; // 0min
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

export type NivelSeloDominio = 'em_andamento' | 'consolidado' | 'dominado';

export interface SeloDominioConfig {
  limiarConsolidado: number; // 0.85 (85% acertos)
  intervaloMinimoDominadoDias: number; // 7 dias de retenção
}

export const SELO_CONFIG: SeloDominioConfig = {
  limiarConsolidado: 0.85,
  intervaloMinimoDominadoDias: 7,
};

/**
 * Parâmetros centrais da Jornada de Domínio Cebraspe (Parte D e Rodada 5B / Plano v3 Fase U2)
 * Regra D.2: Todos os critérios devem vir deste arquivo de configuração, nunca hardcoded no código.
 * Em Fase U2, travas de avanço são desativadas (modoLivreDefault: true, simuladoObrigatorioParaAvancar: false)
 * e os limiares atuam como critérios de qualidade/selo, não bloqueio.
 */
export const JORNADA_CONFIG: JornadaConfig = {
  aproveitamentoMinimo: 0.85,
  minimoVerificacao: 0.85,
  minimoSimuladoModulo: 0.80,
  nMinimoVerificacao: 3,
  simuladoObrigatorioParaAvancar: false,
  desafioItensTotal: 100,
  desafioAcertosMinimo: 80, // ceil(0.80 * 100) = 80 acertos exigidos
  desafioErrosMaximo: 20,
  segundosPorItemProva: 100, // 100 segundos por item em ritmo de prova
  intervaloRetesteMinutos: 0,
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
  modoLivreDefault: true,
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

/**
 * Calcula o intervalo-alvo (em dias) de revisão espaçada com base na proximidade da prova.
 * Heurísticas inspiradas na literatura científica de espaçamento (Cepeda et al., 2008).
 * Nota: São aproximações empíricas para retenção de fatos conceituais e não devem ser
 * rotuladas como "ótimas" na interface (Regra D.4).
 */
export function calcularIntervaloAlvo(diasRestantes: number): number {
  if (diasRestantes <= 0) return JORNADA_CONFIG.limiteMinimoIntervaloDias;

  const faixas = JORNADA_CONFIG.heuristicaDiasRestantes;
  let fracao = faixas[faixas.length - 1].fracao;
  let indiceFaixa = faixas.length - 1;
  for (let i = 0; i < faixas.length; i++) {
    if (diasRestantes <= faixas[i].ate_dias) {
      fracao = faixas[i].fracao;
      indiceFaixa = i;
      break;
    }
  }

  let lacuna = Math.round(fracao * diasRestantes);
  // A fração cai por faixa, mas o intervalo absoluto não pode diminuir quando a prova está mais longe
  // (ex.: com 91 dias restantes o intervalo não pode ser menor que com 90).
  if (indiceFaixa > 0) {
    const anterior = faixas[indiceFaixa - 1];
    lacuna = Math.max(lacuna, Math.round(anterior.fracao * anterior.ate_dias));
  }

  return Math.min(
    JORNADA_CONFIG.limiteMaximoIntervaloDias,
    Math.max(JORNADA_CONFIG.limiteMinimoIntervaloDias, lacuna)
  );
}
