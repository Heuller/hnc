/**
 * Rubrica Canônica de Autocorreção da Prova Discursiva (Edital nº 1/2026 e HNC)
 * Fórmulas:
 * Questão (20 linhas): NCi <= 15.0 pts (11 aspectos + 3 profundidade + 1 apresentação);
 *                      Desconto = 3 × NE / TL (-0,15 por erro quando TL = 20)
 * Peça Técnica (50 linhas): NC <= 30.0 pts (22 aspectos + 6 profundidade + 2 apresentação);
 *                           Desconto = 6 × NE / TL (-0,12 por erro quando TL = 50)
 * Referência: docs/HNC_Cronograma_e_Trilha_Discursiva.md seção 4.4
 */

export interface RubricaAutocorrecaoState {
  aspectosPontos: number;
  profundidadePontos: number;
  apresentacaoPontos: number;
  errosGramaticais: number;
  linhasEfetivas: number;
}

export interface ResultadoRubricaAutocorrecao {
  tipo: 'questao_20' | 'peca_50';
  notaConteudo: number;
  notaMaximaConteudo: number;
  descontoGramatical: number;
  custoPorErroEmLinhasCheias: number;
  custoPorErroReal: number;
  notaFinal: number;
  fatorDesconto: 3 | 6;
  atingiuMetaSeguranca: boolean; // >= 60% da nota máxima (9/15 na questão ou 18/30 na peça)
  detalheAspectos: { obtido: number; maximo: number };
  detalheProfundidade: { obtido: number; maximo: number };
  detalheApresentacao: { obtido: number; maximo: number };
}

export const RUBRICA_PESOS_CANONICOS = {
  QUESTAO_20: {
    ASPECTOS_MAX: 11.0,
    PROFUNDIDADE_MAX: 3.0,
    APRESENTACAO_MAX: 1.0,
    NOTA_MAXIMA: 15.0,
    LINHAS_PADRAO: 20,
    FATOR_DESCONTO: 3 as const,
    DESCONTO_UNITARIO_LINHAS_CHEIAS: 0.15, // 3 / 20 = 0.15
    META_SEGURANCA: 9.0, // 60% da questão
  },
  PECA_50: {
    ASPECTOS_MAX: 22.0,
    PROFUNDIDADE_MAX: 6.0,
    APRESENTACAO_MAX: 2.0,
    NOTA_MAXIMA: 30.0,
    LINHAS_PADRAO: 50,
    FATOR_DESCONTO: 6 as const,
    DESCONTO_UNITARIO_LINHAS_CHEIAS: 0.12, // 6 / 50 = 0.12
    META_SEGURANCA: 18.0, // 60% da peça (meta geral 36/60 na discursiva)
  },
} as const;

/**
 * Calcula a pontuação e os descontos conforme a rubrica 11/3/1 e as fórmulas do edital.
 */
export function calcularNotaRubrica(
  tipo: 'questao_20' | 'peca_50',
  rubrica: RubricaAutocorrecaoState
): ResultadoRubricaAutocorrecao {
  const config =
    tipo === 'peca_50' ? RUBRICA_PESOS_CANONICOS.PECA_50 : RUBRICA_PESOS_CANONICOS.QUESTAO_20;

  const aspectos = Math.min(config.ASPECTOS_MAX, Math.max(0, rubrica.aspectosPontos));
  const profundidade = Math.min(config.PROFUNDIDADE_MAX, Math.max(0, rubrica.profundidadePontos));
  const apresentacao = Math.min(config.APRESENTACAO_MAX, Math.max(0, rubrica.apresentacaoPontos));

  const notaConteudo = Number((aspectos + profundidade + apresentacao).toFixed(2));
  const linhas = Math.max(1, rubrica.linhasEfetivas);
  const erros = Math.max(0, rubrica.errosGramaticais);

  const custoPorErroReal = Number((config.FATOR_DESCONTO / linhas).toFixed(4));
  const descontoGramatical = Number(((config.FATOR_DESCONTO * erros) / linhas).toFixed(2));

  const notaLiquida = Math.max(0, notaConteudo - descontoGramatical);
  const notaFinal = Number(notaLiquida.toFixed(2));

  return {
    tipo,
    notaConteudo,
    notaMaximaConteudo: config.NOTA_MAXIMA,
    descontoGramatical,
    custoPorErroEmLinhasCheias: config.DESCONTO_UNITARIO_LINHAS_CHEIAS,
    custoPorErroReal,
    notaFinal,
    fatorDesconto: config.FATOR_DESCONTO,
    atingiuMetaSeguranca: notaFinal >= config.META_SEGURANCA,
    detalheAspectos: { obtido: aspectos, maximo: config.ASPECTOS_MAX },
    detalheProfundidade: { obtido: profundidade, maximo: config.PROFUNDIDADE_MAX },
    detalheApresentacao: { obtido: apresentacao, maximo: config.APRESENTACAO_MAX },
  };
}
