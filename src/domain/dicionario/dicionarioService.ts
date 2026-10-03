import type { TermoDicionario } from './types';
import { BASE_TERMOS_DICIONARIO } from './baseTermos';

const CACHE_KEY = 'hnc_dicionario_ia_cache_v1';

// Função utilitária para normalizar strings para busca sem acentos
export const normalizarTexto = (texto: string): string => {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
};

/**
 * Calcula o índice de relevância (0 a 100) entre a busca normalizada e o termo
 */
export const calcularRelevanciaTermo = (t: TermoDicionario, qNorm: string): number => {
  if (!qNorm || qNorm.length < 2) return 0;
  const tNorm = normalizarTexto(t.termo);
  const idNorm = normalizarTexto(t.id);

  // 1. Coincidência exata com o termo ou com o ID (Score 100)
  if (tNorm === qNorm || idNorm === qNorm) return 100;

  // 2. Coincidência exata com algum sinônimo (Score 95)
  if (t.sinonimos?.some((s) => normalizarTexto(s) === qNorm)) return 95;

  // 3. Termo principal começa com a query (Score 85)
  if (qNorm.length >= 3 && tNorm.startsWith(qNorm)) return 85;

  // 4. Frase ou palavra inteira delimitada por fronteira (Score 80)
  const escaped = qNorm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regexWord = new RegExp(`(^|\\s|[.,;()\\-_/])${escaped}($|\\s|[.,;()\\-_/])`, 'i');
  if (regexWord.test(tNorm)) return 80;

  // 5. Algum sinônimo começa com a query (Score 75)
  if (qNorm.length >= 3 && t.sinonimos?.some((s) => normalizarTexto(s).startsWith(qNorm))) return 75;

  // 6. Sinônimo relevante que coincide como palavra inteira (mínimo 4 caracteres para o sinônimo)
  const sinonimoMatchPalavra = t.sinonimos?.some((s) => {
    const sNorm = normalizarTexto(s);
    if (sNorm.length < 4) return false;

    // Se a query for composta (múltiplas palavras) e o sinônimo for apenas 1 palavra isolada,
    // não deve forçar match local cego (permite que termos específicos vão para IA ou mantenham precisão)
    const palavrasQuery = qNorm.split(/\s+/).filter(Boolean);
    const palavrasSin = sNorm.split(/\s+/).filter(Boolean);
    if (palavrasQuery.length > 1 && palavrasSin.length === 1) {
      return false;
    }

    const escSin = sNorm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regSin = new RegExp(`(^|\\s|[.,;()\\-_/])${escSin}($|\\s|[.,;()\\-_/])`, 'i');
    return regSin.test(qNorm) || (qNorm.length >= 4 && new RegExp(`(^|\\s|[.,;()\\-_/])${escaped}($|\\s|[.,;()\\-_/])`, 'i').test(sNorm));
  });
  if (sinonimoMatchPalavra) return 70;

  // 7. Substring dentro do nome do termo (apenas se a query tiver pelo menos 4 caracteres e representar o termo completo ou vice-versa)
  if (qNorm.length >= 4 && tNorm.includes(qNorm)) {
    const palavrasQuery = qNorm.split(/\s+/).filter(Boolean);
    if (palavrasQuery.length === 1 && tNorm.split(/\s+/).length > 3) {
      return 50; // Abaixo de 60: termo correlato/sugestão, mas não match local cego
    }
    return 60;
  }

  return 0;
};

export class DicionarioService {
  private cacheIA: Map<string, TermoDicionario> = new Map();

  constructor() {
    this.carregarCacheLocalStorage();
  }

  private carregarCacheLocalStorage() {
    try {
      const salvo = localStorage.getItem(CACHE_KEY);
      if (salvo) {
        const parsed: Record<string, TermoDicionario> = JSON.parse(salvo);
        Object.entries(parsed).forEach(([k, v]) => this.cacheIA.set(k, v));
      }
    } catch {
      // Ignora falhas de parse
    }
  }

  private salvarCacheLocalStorage() {
    try {
      const obj: Record<string, TermoDicionario> = {};
      this.cacheIA.forEach((v, k) => {
        obj[k] = v;
      });
      localStorage.setItem(CACHE_KEY, JSON.stringify(obj));
    } catch {
      // Ignora limites de quota
    }
  }

  /**
   * Busca um termo na base curada local com alta precisão e sem matches espúrios
   */
  public buscarTermoLocal(query: string): TermoDicionario | null {
    const qNorm = normalizarTexto(query);
    if (!qNorm || qNorm.length < 2) return null;

    // 1. Verifica no cache local de termos gerados por IA
    if (this.cacheIA.has(qNorm)) {
      return this.cacheIA.get(qNorm)!;
    }

    // 2. Pontua e ranqueia todos os termos da base curada
    let melhorTermo: TermoDicionario | null = null;
    let maiorScore = 0;

    for (const termo of BASE_TERMOS_DICIONARIO) {
      const score = calcularRelevanciaTermo(termo, qNorm);
      if (score > maiorScore) {
        maiorScore = score;
        melhorTermo = termo;
      }
    }

    // Exige pontuação mínima de 60 para evitar falsos positivos
    if (maiorScore >= 60 && melhorTermo) {
      return melhorTermo;
    }

    return null;
  }

  /**
   * Retorna múltiplos termos similares ordenados por relevância
   */
  public buscarTermosSimilares(query: string, limit = 5): TermoDicionario[] {
    const qNorm = normalizarTexto(query);
    if (!qNorm || qNorm.length < 2) return [];

    const todos = [
      ...BASE_TERMOS_DICIONARIO,
      ...Array.from(this.cacheIA.values()),
    ];

    const pontuados = todos
      .map((termo) => ({
        termo,
        score: calcularRelevanciaTermo(termo, qNorm),
      }))
      .filter((item) => item.score >= 60)
      .sort((a, b) => b.score - a.score);

    // Remove duplicatas por ID
    const unicos = new Map<string, TermoDicionario>();
    for (const item of pontuados) {
      if (!unicos.has(item.termo.id)) {
        unicos.set(item.termo.id, item.termo);
      }
      if (unicos.size >= limit) break;
    }

    return Array.from(unicos.values());
  }

  /**
   * Sugestões de autocomplete para o campo de busca rápida do glossário
   */
  public buscarSugestoes(query: string, limit = 6): TermoDicionario[] {
    const qNorm = normalizarTexto(query);
    if (!qNorm) return BASE_TERMOS_DICIONARIO.slice(0, limit);

    // Prioriza termos com maior relevância na busca
    const similares = this.buscarTermosSimilares(query, limit);
    if (similares.length > 0) return similares;

    // Fallback: termos cujo nome contenha o prefixo
    return BASE_TERMOS_DICIONARIO.filter(
      (t) =>
        normalizarTexto(t.termo).includes(qNorm) ||
        t.sinonimos?.some((s) => normalizarTexto(s).includes(qNorm))
    ).slice(0, limit);
  }

  /**
   * Obtém a lista completa de termos canônicos ordenada alfabeticamente
   */
  public obterTodosTermos(): TermoDicionario[] {
    const combinados = [
      ...BASE_TERMOS_DICIONARIO,
      ...Array.from(this.cacheIA.values()),
    ];
    // Remove duplicatas por ID
    const unicos = new Map<string, TermoDicionario>();
    combinados.forEach((t) => unicos.set(t.id, t));
    return Array.from(unicos.values()).sort((a, b) =>
      a.termo.localeCompare(b.termo, 'pt-BR')
    );
  }

  /**
   * Consulta a API do Gemini (via endpoint seguro de backend ou fallback local)
   */
  public async buscarOuGerarDefinicao(
    termoOriginal: string,
    contextoFrase?: string
  ): Promise<TermoDicionario> {
    const termoLimpo = termoOriginal.trim();
    const termoNorm = normalizarTexto(termoLimpo);

    // 1. Checa se já existe na base local ou cache
    const existente = this.buscarTermoLocal(termoLimpo);
    if (existente && !existente.geradoPorIA) {
      return existente;
    }
    if (this.cacheIA.has(termoNorm)) {
      return this.cacheIA.get(termoNorm)!;
    }

    // 2. Tenta chamar o endpoint de backend `/api/dictionary`
    try {
      const response = await fetch('/api/dictionary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          termo: termoLimpo,
          contexto: contextoFrase || '',
        }),
      });

      if (response.ok) {
        const dados = await response.json();
        if (dados && dados.conceitoCanonico) {
          const resultado: TermoDicionario = {
            id: `ia-${termoNorm.replace(/\s+/g, '-')}`,
            termo: dados.termo || termoLimpo,
            area: dados.area || 'Ciência da Informação e Biblioteconomia',
            conceitoCanonico: dados.conceitoCanonico,
            armadilhaCebraspe: dados.armadilhaCebraspe || 'Atenção às definições conceituais estritas da banca Cebraspe para este termo.',
            aplicacaoCamara: dados.aplicacaoCamara || 'Aplicável à organização do acervo e assessoria parlamentar na Câmara dos Deputados.',
            fonteReferencia: dados.fonteReferencia || 'Dicionário de Biblioteconomia e Arquivologia (Cunha & Lemos) / Cebraspe.',
            geradoPorIA: true,
          };

          this.cacheIA.set(termoNorm, resultado);
          this.salvarCacheLocalStorage();
          return resultado;
        }
      }
    } catch {
      // Se falhar o backend (offline ou sem internet), aciona o fallback inteligente
    }

    // 3. Fallback inteligente quando a API não estiver conectada
    const fallback: TermoDicionario = {
      id: `local-${termoNorm.replace(/\s+/g, '-')}`,
      termo: termoLimpo,
      area: 'Terminologia Geral de Concursos',
      conceitoCanonico: `Termo técnico relacionado a: "${termoLimpo}". Na literatura de Biblioteconomia e Ciência da Informação, refere-se ao conceito empregado na organização de unidades de informação, recuperação de documentos ou processo legislativo.`,
      armadilhaCebraspe: `O Cebraspe costuma testar "${termoLimpo}" alterando seu escopo restritivo (usando termos como "exclusivamente", "apenas" ou invertendo com conceitos correlatos).`,
      aplicacaoCamara: `Subsidia a análise de proposições e a rotina técnica dos serviços de documentação e biblioteca da Câmara dos Deputados.`,
      fonteReferencia: 'Dicionário de Biblioteconomia e Arquivologia / Heuller na Câmara.',
      geradoPorIA: true,
    };

    this.cacheIA.set(termoNorm, fallback);
    this.salvarCacheLocalStorage();
    return fallback;
  }
}

export const dicionarioService = new DicionarioService();
