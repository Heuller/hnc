/**
 * Motor de Associação Conceitual com Embaralhamento por Semente (Regra B4)
 */

export interface AssociacaoCardItem {
  id: string;
  nome: string;
  conceito: string;
}

export interface MatchedPairInfo {
  authorName: string;
  pairNumber: number; // 1, 2, 3, 4
  colorStyle: {
    bg: string;
    border: string;
    text: string;
    badge: string;
  };
}

export const PAIR_COLOR_PALETTES = [
  {
    bg: 'bg-emerald-500/10 dark:bg-emerald-500/15',
    border: 'border-emerald-600/40 dark:border-emerald-400/40',
    text: 'text-emerald-700 dark:text-emerald-300',
    badge: 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-900',
  },
  {
    bg: 'bg-blue-500/10 dark:bg-blue-500/15',
    border: 'border-blue-600/40 dark:border-blue-400/40',
    text: 'text-blue-700 dark:text-blue-300',
    badge: 'bg-blue-600 text-white dark:bg-blue-500 dark:text-slate-900',
  },
  {
    bg: 'bg-purple-500/10 dark:bg-purple-500/15',
    border: 'border-purple-600/40 dark:border-purple-400/40',
    text: 'text-purple-700 dark:text-purple-300',
    badge: 'bg-purple-600 text-white dark:bg-purple-500 dark:text-slate-900',
  },
  {
    bg: 'bg-amber-500/10 dark:bg-amber-500/15',
    border: 'border-amber-600/40 dark:border-amber-400/40',
    text: 'text-amber-700 dark:text-amber-300',
    badge: 'bg-amber-600 text-white dark:bg-amber-500 dark:text-slate-900',
  },
];

/**
 * Gerador pseudoaleatório baseado em semente (Mulberry32)
 */
function createPrng(seed: number) {
  let s = seed | 0;
  return function nextFloat(): number {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Embaralha a coluna direita garantindo que ela NUNCA coincida por inteiro
 * com a ordem original da esquerda (Regra B4).
 */
export function shuffleConceptsColumn<T>(items: T[], seed: number): T[] {
  if (!items || items.length <= 1) return [...items];

  const rng = createPrng(seed);
  const n = items.length;
  let attempts = 0;
  let result: T[] = [];

  do {
    result = [...items];
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      const temp = result[i];
      result[i] = result[j];
      result[j] = temp;
    }
    attempts++;
    // Se por azar coincidiu exatamente em todos os índices e temos tentativas, repete
    const coincideTotalmente = result.every((item, idx) => item === items[idx]);
    if (!coincideTotalmente) {
      return result;
    }
  } while (attempts < 10);

  // Fallback garantido se o PRNG cair na mesma ordem: rotação simples por 1
  return [...items.slice(1), items[0]];
}
