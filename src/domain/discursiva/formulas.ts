/**
 * Fórmulas Oficiais da Prova Discursiva - Cargo 5 (Analista Legislativo - Biblioteconomia)
 * Câmara dos Deputados | Banca Cebraspe | Edital nº 1, de 02/10/2026
 * Itens 9.1, 9.4 a 9.6, 9.8.4 e 9.8.5
 */

/**
 * Fatores Canônicos da Prova Discursiva - Cargo 5 (Edital nº 1/2026, subitem 9.8.5)
 * Centralização mandatória (Regra F-11)
 */
export const DISCURSIVA_FATORES = {
  QUESTAO: {
    FATOR_DESCONTO: 3 as const,
    NOTA_MAXIMA: 15.0,
    MAX_LINHAS: 20,
    DESCRICAO: 'NQ = NC − 3 × (NE ÷ TL)',
  },
  PECA_TECNICA: {
    FATOR_DESCONTO: 6 as const,
    NOTA_MAXIMA: 30.0,
    MAX_LINHAS: 50,
    DESCRICAO: 'NPT = NC − 6 × (NE ÷ TL)',
  },
  PROVA: {
    TOTAL_QUESTOES: 2,
    NOTA_MAXIMA_TOTAL: 60.0,
    NOTA_MINIMA_APROVACAO: 30.0,
    FORMULA_TOTAL: 'NFPD = NQ1 + NQ2 + NPT',
  },
} as const;

export interface DetalheCalculoDiscursiva {
  tipo: 'questao' | 'peca_tecnica';
  notaConteudo: number;
  notaMaximaConteudo: number;
  errosGramaticais: number;
  linhasEfetivas: number;
  fatorDesconto: 3 | 6;
  descontoGramatical: number;
  notaFinal: number;
  formulaExplicita: string;
}

/**
 * Calcula a nota de uma Questão Discursiva (NQ1 ou NQ2).
 * Edital nº 1/2026, item 9.8.5.1(d):
 * NQi = NCi − 3 × NEi ÷ TLi
 *
 * Parâmetros:
 * - nc: Nota de Conteúdo (NCi <= 15,00 pontos)
 * - ne: Número de Erros (grafia, morfossintaxe e propriedade vocabular)
 * - tl: Total de Linhas efetivamente escritas (até 20 linhas)
 *
 * Regras:
 * - tl <= 0 (ausência de texto) -> nota 0
 * - Se NQi < 0 -> nota 0
 */
export function notaQuestao(nc: number, ne: number, tl: number): number {
  if (tl <= 0) return 0;
  const ncValido = Math.min(15, Math.max(0, nc));
  const neValido = Math.max(0, ne);
  const desconto = (3 * neValido) / tl;
  const nq = ncValido - desconto;
  if (nq <= 0) return 0;
  return Number(nq.toFixed(2));
}

/**
 * Calcula a nota da Peça Técnica (NPT).
 * Edital nº 1/2026, item 9.8.5.2(d):
 * NPT = NC − 6 × NE ÷ TL
 *
 * Parâmetros:
 * - nc: Nota de Conteúdo (NC <= 30,00 pontos)
 * - ne: Número de Erros (grafia, morfossintaxe e propriedade vocabular)
 * - tl: Total de Linhas efetivamente escritas (até 50 linhas)
 *
 * Regras:
 * - tl <= 0 (ausência de texto) -> nota 0
 * - Se NPT < 0 -> nota 0
 */
export function notaPeca(nc: number, ne: number, tl: number): number {
  if (tl <= 0) return 0;
  const ncValido = Math.min(30, Math.max(0, nc));
  const neValido = Math.max(0, ne);
  const desconto = (6 * neValido) / tl;
  const npt = ncValido - desconto;
  if (npt <= 0) return 0;
  return Number(npt.toFixed(2));
}

/**
 * Calcula a Nota Final da Prova Discursiva (NFPD).
 * Edital nº 1/2026, item 9.8.5.3:
 * NFPD = NQ1 + NQ2 + NPT
 *
 * Total máximo: 60,00 pontos (15,00 + 15,00 + 30,00)
 */
export function notaFinalDiscursiva(nq1: number, nq2: number, npt: number): number {
  const total = Math.max(0, nq1) + Math.max(0, nq2) + Math.max(0, npt);
  return Number(total.toFixed(2));
}

/**
 * Verifica se o candidato atinge o critério de aprovação do Edital nº 1/2026 (item 9.8.5.4):
 * Será aprovado na prova discursiva o candidato que obtiver NFPD >= 30,00 pontos.
 */
export function isAprovadoDiscursiva(nfpd: number): boolean {
  return nfpd >= 30.0;
}

/**
 * Constrói o texto pedagógico e transparente do cálculo da nota discursiva.
 */
export function obterDetalheCalculoDiscursiva(params: {
  isPecaTecnica: boolean;
  notaConteudo: number;
  errosGramaticais: number;
  linhasEfetivas: number;
}): DetalheCalculoDiscursiva {
  const { isPecaTecnica, notaConteudo, errosGramaticais, linhasEfetivas } = params;
  const fatorDesconto = isPecaTecnica ? 6 : 3;
  const notaMaximaConteudo = isPecaTecnica ? 30.0 : 15.0;

  const notaFinal = isPecaTecnica
    ? notaPeca(notaConteudo, errosGramaticais, linhasEfetivas)
    : notaQuestao(notaConteudo, errosGramaticais, linhasEfetivas);

  const descontoGramatical = linhasEfetivas > 0
    ? Number(((fatorDesconto * Math.max(0, errosGramaticais)) / linhasEfetivas).toFixed(2))
    : 0;

  const formulaExplicita = isPecaTecnica
    ? `NPT = NC − 6 × (NE ÷ TL) = ${notaConteudo.toFixed(2)} − 6 × (${errosGramaticais} ÷ ${linhasEfetivas}) = ${notaFinal.toFixed(2)}`
    : `NQ = NC − 3 × (NE ÷ TL) = ${notaConteudo.toFixed(2)} − 3 × (${errosGramaticais} ÷ ${linhasEfetivas}) = ${notaFinal.toFixed(2)}`;

  return {
    tipo: isPecaTecnica ? 'peca_tecnica' : 'questao',
    notaConteudo,
    notaMaximaConteudo,
    errosGramaticais,
    linhasEfetivas,
    fatorDesconto,
    descontoGramatical,
    notaFinal,
    formulaExplicita,
  };
}
