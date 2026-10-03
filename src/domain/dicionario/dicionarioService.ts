import type { TermoDicionario, TermoGlossarioCanonico } from './types';
import { BASE_TERMOS_DICIONARIO } from './baseTermos';

// Normalizador terminológico avançado (Parte D.3): NFD sem acentos, minúsculas e pontuação
export const normalizarTexto = (texto: string): string => {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    // Remove pontuação de borda e caracteres comuns de markdown/HTML
    .replace(/^[\s.,;:\-—_()[\]{}"'“”‘’/\\]+|[\s.,;:\-—_()[\]{}"'“”‘’/\\]+$/g, '')
    .trim();
};

/**
 * Normaliza variações plurais comuns em língua portuguesa para permitir correspondência singular/plural
 */
export const singularizar = (termoNorm: string): string => {
  if (termoNorm.endsWith('oes') && termoNorm.length > 4) {
    return termoNorm.slice(0, -3) + 'ao';
  }
  if (termoNorm.endsWith('ais') && termoNorm.length > 4) {
    return termoNorm.slice(0, -3) + 'al';
  }
  if (termoNorm.endsWith('eis') && termoNorm.length > 4) {
    return termoNorm.slice(0, -3) + 'el';
  }
  if (termoNorm.endsWith('is') && termoNorm.length > 3) {
    return termoNorm.slice(0, -2) + 'il';
  }
  if (termoNorm.endsWith('res') && termoNorm.length > 4) {
    return termoNorm.slice(0, -2);
  }
  if (termoNorm.endsWith('zes') && termoNorm.length > 4) {
    return termoNorm.slice(0, -2);
  }
  if (termoNorm.endsWith('s') && !termoNorm.endsWith('ss') && termoNorm.length > 3) {
    return termoNorm.slice(0, -1);
  }
  return termoNorm;
};

/**
 * Calcula a relevância terminológica determinística (Score de 0 a 100)
 */
export const calcularRelevanciaTermo = (
  t: TermoGlossarioCanonico,
  qRaw: string,
  moduloAtual?: string
): number => {
  const qNorm = normalizarTexto(qRaw);
  if (!qNorm || qNorm.length < 2) return 0;

  const tNorm = normalizarTexto(t.termo);
  const idNorm = normalizarTexto(t.id);
  const qSingular = singularizar(qNorm);
  const tSingular = singularizar(tNorm);

  // 1. Coincidência Exata com o Termo ou com o ID canônico (Score 100)
  if (tNorm === qNorm || idNorm === qNorm || tSingular === qSingular) {
    // Se o termo for polissêmico e houver correspondência com o módulo atual, recebe prioridade máxima (Score 105)
    if (moduloAtual && t.modulo_ref?.includes(moduloAtual.toLowerCase())) {
      return 105;
    }
    return 100;
  }

  // 2. Coincidência com Sigla (Score 100)
  if (t.sigla && normalizarTexto(t.sigla) === qNorm) {
    return 100;
  }

  // 3. Coincidência com Expansão da Sigla (Score 98)
  if (t.expansao && (normalizarTexto(t.expansao) === qNorm || singularizar(normalizarTexto(t.expansao)) === qSingular)) {
    return 98;
  }

  // 4. Coincidência com Variantes ou Sinônimos estritos (Score 95)
  const todasVariantes = [...(t.variantes || []), ...(t.sinonimos || [])];
  if (todasVariantes.some((v) => {
    const vNorm = normalizarTexto(v);
    return vNorm === qNorm || singularizar(vNorm) === qSingular;
  })) {
    return 95;
  }

  // 5. Termo principal inicia com a query ou query inicia com o termo (Score 85)
  if (qNorm.length >= 4 && (tNorm.startsWith(qNorm) || qNorm.startsWith(tNorm))) {
    return 85;
  }

  // 6. Palavra inteira delimitada por fronteira de espaço
  const escaped = qNorm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regexWord = new RegExp('(^|\\s|[.,;()\\-_/])' + escaped + '($|\\s|[.,;()\\-_/])', 'i');
  if (regexWord.test(tNorm) || regexWord.test(t.definicao_curta || '')) {
    return 80;
  }

  // 7. Substring relevante com pelo menos 4 caracteres
  if (qNorm.length >= 4 && tNorm.includes(qNorm)) {
    return 65;
  }

  return 0;
};

export class DicionarioService {
  /**
   * Busca um termo na base estática curada com correspondência determinística e sem chamadas de rede (0ms).
   */
  public buscarTermoLocal(query: string, moduloAtual?: string): TermoDicionario | null {
    const qNorm = normalizarTexto(query);
    if (!qNorm || qNorm.length < 2) return null;

    let melhorTermo: TermoDicionario | null = null;
    let maiorScore = 0;

    for (const termo of BASE_TERMOS_DICIONARIO) {
      const score = calcularRelevanciaTermo(termo, query, moduloAtual);
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
   * Retorna múltiplos termos similares ordenados por relevância determinística
   */
  public buscarTermosSimilares(query: string, limit = 5, moduloAtual?: string): TermoDicionario[] {
    const qNorm = normalizarTexto(query);
    if (!qNorm || qNorm.length < 2) return [];

    const pontuados = BASE_TERMOS_DICIONARIO
      .map((termo) => ({
        termo,
        score: calcularRelevanciaTermo(termo, query, moduloAtual),
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

    const similares = this.buscarTermosSimilares(query, limit);
    if (similares.length > 0) return similares;

    return BASE_TERMOS_DICIONARIO.filter(
      (t) =>
        normalizarTexto(t.termo).includes(qNorm) ||
        (t.sigla && normalizarTexto(t.sigla).includes(qNorm)) ||
        t.variantes?.some((v) => normalizarTexto(v).includes(qNorm)) ||
        t.sinonimos?.some((s) => normalizarTexto(s).includes(qNorm))
    ).slice(0, limit);
  }

  /**
   * Obtém a lista completa de termos canônicos ordenada alfabeticamente
   */
  public obterTodosTermos(): TermoDicionario[] {
    return [...BASE_TERMOS_DICIONARIO].sort((a, b) =>
      a.termo.localeCompare(b.termo, 'pt-BR')
    );
  }

  /**
   * Consulta determinística fechada: NUNCA chama IA em tempo de execução (Regra D.3).
   * Se o termo não estiver catalogado, retorna estado formal de ausência com opção de sugestão.
   */
  public async buscarOuGerarDefinicao(
    termoOriginal: string,
    _contextoFrase?: string,
    moduloAtual?: string
  ): Promise<TermoDicionario> {
    const termoLimpo = termoOriginal.trim();
    const termoLocal = this.buscarTermoLocal(termoLimpo, moduloAtual);

    if (termoLocal) {
      return termoLocal;
    }

    // Regra D.3: Zero IA em tempo de execução. O sistema nunca inventa definições por chamada de rede.
    const termoNorm = normalizarTexto(termoLimpo);
    const termoAusente: TermoGlossarioCanonico = {
      id: 'ausente-' + termoNorm.replace(/\s+/g, '-'),
      termo: termoLimpo,
      tipo: 'conceito',
      area: 'Glossário Fechado HNC',
      definicao_curta: 'Este termo ainda não consta no Glossário canônico auditado da plataforma.',
      definicao_completa: 'O Glossário da plataforma HNC opera em regime 100% determinístico e auditado, sem geração de IA em tempo de execução. Caso este conceito seja relevante para o concurso, submeta-o como sugestão para a próxima onda de expansão.',
      fonte: {
        referencia: 'Glossário Canônico HNC (Regra D.3 — Determinístico sem IA em runtime)',
        versao: 'Edital nº 1/2026',
      },
      modulo_ref: moduloAtual ? [moduloAtual.toLowerCase()] : [],
      conceitoCanonico: 'Este termo ainda não consta no Glossário canônico auditado da plataforma.',
      armadilhaCebraspe: 'Consulte o texto canônico do submódulo em estudo para a definição oficial adotada pela banca Cebraspe.',
      aplicacaoCamara: 'Conceito em processo de catalogação canônica.',
      fonteReferencia: 'Glossário Canônico HNC — Edital nº 1/2026',
      ausente: true,
      geradoPorIA: false,
    };

    return termoAusente;
  }
}

export const dicionarioService = new DicionarioService();
