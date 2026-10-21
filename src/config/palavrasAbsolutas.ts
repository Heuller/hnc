/**
 * Lista canônica de palavras e expressões de teor absoluto/categórico
 * monitoradas para controle de qualidade e prevenção de distratores caricatos
 * nas questões inéditas estilo Cebraspe (Conforme Prompt C3 / Auditoria HNC).
 *
 * No estilo Cebraspe autêntico:
 * - O uso de termos restritivos/categóricos ocorre tanto em itens Certos quanto Errados.
 * - Nas questões inéditas, o banco não deve abusar de termos absolutos (meta: <= 12%).
 * - Dos itens que contêm tais termos, pelo menos 40% devem possuir gabarito Certo,
 *   evitando que o candidato acerte por mero macete de distrator caricato.
 */

export const PALAVRAS_ABSOLUTAS: readonly string[] = [
  'apenas',
  'somente',
  'todas',
  'jamais',
  'irrestrita',
  'irrestrito',
  'nenhuma',
  'incondicionalmente',
  'sem exceção',
  'sem qualquer exceção',
  'de forma alguma',
  'sob hipótese alguma',
] as const;

/**
 * Expressão regular compilada para busca de termos absolutos com fronteira de palavra.
 */
export const REGEX_PALAVRAS_ABSOLUTAS = new RegExp(
  `\\b(${PALAVRAS_ABSOLUTAS.map((w) => w.replace(/\\s+/g, '\\s+')).join('|')})\\b`,
  'i'
);

/**
 * Retorna se o texto de um item contém alguma das palavras absolutas da lista canônica.
 */
export function contemPalavraAbsoluta(texto: string): boolean {
  return REGEX_PALAVRAS_ABSOLUTAS.test(texto);
}

/**
 * Retorna todos os termos absolutos identificados no texto.
 */
export function extrairPalavrasAbsolutas(texto: string): string[] {
  const matches: string[] = [];
  for (const termo of PALAVRAS_ABSOLUTAS) {
    const r = new RegExp(`\\b${termo.replace(/\\s+/g, '\\s+')}\\b`, 'i');
    if (r.test(texto)) {
      matches.push(termo);
    }
  }
  return matches;
}
