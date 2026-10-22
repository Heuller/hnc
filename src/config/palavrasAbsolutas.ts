/**
 * Lista canônica de palavras e expressões de teor absoluto/categórico
 * monitoradas para controle de qualidade e prevenção de distratores caricatos
 * nas questões inéditas estilo Cebraspe (Conforme Prompt C3 e C9 / Auditoria HNC).
 *
 * No estilo Cebraspe autêntico:
 * - O uso de termos restritivos/categóricos ocorre tanto em itens Certos quanto Errados.
 * - Nas questões inéditas, o banco não deve abusar de termos absolutos (meta: taxa <= 12%).
 * - Dos itens que contêm tais termos, pelo menos 40% devem possuir gabarito Certo,
 *   evitando que o candidato acerte por mero macete de distrator caricato.
 * - Termos ambíguos ("qualquer", "todos", "todas") têm peso 0,5 na métrica ponderada.
 */

export const PALAVRAS_ABSOLUTAS_ESTRITAS: readonly string[] = [
  'sempre',
  'nunca',
  'apenas',
  'somente',
  'exclusivamente',
  'unicamente',
  'independentemente',
  'jamais',
  'necessariamente',
  'obrigatoriamente',
  'impossível',
  'dispensa',
  'vedado',
  'vedada',
  'terminantemente',
  'irrestrito',
  'irrestrita',
  'nenhuma',
  'incondicionalmente',
  'sem exceção',
  'de forma alguma',
] as const;

export const PALAVRAS_ABSOLUTAS_AMBIGUAS: readonly string[] = [
  'qualquer',
  'todos',
  'todas',
] as const;

export const PALAVRAS_ABSOLUTAS: readonly string[] = [
  ...PALAVRAS_ABSOLUTAS_ESTRITAS,
  ...PALAVRAS_ABSOLUTAS_AMBIGUAS,
] as const;

export const PESO_ESTRITAS = 1.0;
export const PESO_AMBIGUAS = 0.5;

/**
 * Expressão regular compilada para busca de termos estritos com fronteira de palavra.
 */
export const REGEX_PALAVRAS_ESTRITAS = new RegExp(
  `\\b(${PALAVRAS_ABSOLUTAS_ESTRITAS.map((w) => w.replace(/\\s+/g, '\\s+')).join('|')})\\b`,
  'i'
);

/**
 * Expressão regular compilada para busca de termos ambíguos com fronteira de palavra.
 */
export const REGEX_PALAVRAS_AMBIGUAS = new RegExp(
  `\\b(${PALAVRAS_ABSOLUTAS_AMBIGUAS.map((w) => w.replace(/\\s+/g, '\\s+')).join('|')})\\b`,
  'i'
);

/**
 * Expressão regular compilada para busca de qualquer termo absoluto com fronteira de palavra.
 */
export const REGEX_PALAVRAS_ABSOLUTAS = new RegExp(
  `\\b(${PALAVRAS_ABSOLUTAS.map((w) => w.replace(/\\s+/g, '\\s+')).join('|')})\\b`,
  'i'
);

/**
 * Retorna se o texto de um item contém alguma das palavras absolutas da lista completa.
 */
export function contemPalavraAbsoluta(texto: string): boolean {
  return REGEX_PALAVRAS_ABSOLUTAS.test(texto);
}

/**
 * Retorna se o texto de um item contém palavras estritas.
 */
export function contemPalavraEstrita(texto: string): boolean {
  return REGEX_PALAVRAS_ESTRITAS.test(texto);
}

/**
 * Retorna se o texto de um item contém palavras ambíguas.
 */
export function contemPalavraAmbígua(texto: string): boolean {
  return REGEX_PALAVRAS_AMBIGUAS.test(texto);
}

/**
 * Calcula o peso ponderado de um item conforme C9:
 * - 1.0 se contiver ao menos um termo estrito;
 * - 0.5 se contiver apenas termos ambíguos;
 * - 0.0 se não contiver termos absolutos.
 */
export function calcularPesoItemAbsoluto(texto: string): number {
  if (REGEX_PALAVRAS_ESTRITAS.test(texto)) {
    return PESO_ESTRITAS;
  }
  if (REGEX_PALAVRAS_AMBIGUAS.test(texto)) {
    return PESO_AMBIGUAS;
  }
  return 0;
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
