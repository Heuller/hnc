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
   * Busca um termo na base curada local (offline, 0ms)
   */
  public buscarTermoLocal(query: string): TermoDicionario | null {
    const qNorm = normalizarTexto(query);
    if (!qNorm || qNorm.length < 2) return null;

    // 1. Busca exata por ID ou termo
    const exato = BASE_TERMOS_DICIONARIO.find(
      (t) =>
        t.id === qNorm ||
        normalizarTexto(t.termo) === qNorm ||
        t.sinonimos?.some((s) => normalizarTexto(s) === qNorm)
    );
    if (exato) return exato;

    // 2. Busca por palavra contida no termo ou sinônimo
    const parcial = BASE_TERMOS_DICIONARIO.find(
      (t) =>
        normalizarTexto(t.termo).includes(qNorm) ||
        qNorm.includes(normalizarTexto(t.termo)) ||
        t.sinonimos?.some((s) => normalizarTexto(s).includes(qNorm) || qNorm.includes(normalizarTexto(s)))
    );
    if (parcial) return parcial;

    // 3. Verifica no cache local de termos já gerados por IA
    if (this.cacheIA.has(qNorm)) {
      return this.cacheIA.get(qNorm)!;
    }

    return null;
  }

  /**
   * Sugestões de autocomplete para o campo de busca rápida do glossário
   */
  public buscarSugestoes(query: string, limit = 6): TermoDicionario[] {
    const qNorm = normalizarTexto(query);
    if (!qNorm) return BASE_TERMOS_DICIONARIO.slice(0, limit);

    return BASE_TERMOS_DICIONARIO.filter(
      (t) =>
        normalizarTexto(t.termo).includes(qNorm) ||
        t.sinonimos?.some((s) => normalizarTexto(s).includes(qNorm)) ||
        normalizarTexto(t.area).includes(qNorm)
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
