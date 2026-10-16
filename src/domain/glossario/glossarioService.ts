import type {
  VerbeteUnificado,
  FiltrosGlossario,
  IndiceLetra,
  SubmoduloReferencia,
  FonteVerbete,
} from './types';
import { GLOSSARIO_TECNICO } from '../../content/glossario-tecnico';
import { COURSE_REGISTRY } from '../../content/registry';

// Normaliza texto removendo acentos e convertendo para minúsculas
export function normalizarTermo(texto: string): string {
  if (!texto) return '';
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

// Mapa rápido em memória dos submódulos do curso
const SUBMODULOS_MAP = new Map<string, SubmoduloReferencia>();

function inicializarMapaSubmodulos(): void {
  if (SUBMODULOS_MAP.size > 0) return;
  for (const macro of COURSE_REGISTRY) {
    for (const sub of macro.modulosFilhos) {
      SUBMODULOS_MAP.set(sub.id, {
        id: sub.id,
        numero: sub.numero,
        titulo: sub.titulo,
      });
    }
  }
}

// Converte os itens do Acervo B (Glossário Técnico) em VerbeteUnificado
export function getTermosTecnicos(): VerbeteUnificado[] {
  inicializarMapaSubmodulos();

  return GLOSSARIO_TECNICO.map((item) => {
    const subRef = SUBMODULOS_MAP.get(item.moduloOrigemId);
    const submodulosOndeAparece: SubmoduloReferencia[] = subRef ? [subRef] : [];

    const variantes = [item.nomeCompleto, ...item.sinonimos]
      .filter((v): v is string => Boolean(v) && v !== item.termo);

    const fonte: FonteVerbete = {
      obra: 'Edital nº 1/2026 - Conhecimentos Específicos Cargo 5 (TI, Arquivologia e IA)',
      ano: 2026,
    };

    return {
      id: `tec-${item.slug.toLowerCase()}`,
      termo: item.termo,
      acervo: 'tecnico',
      variantes,
      definicao: item.definicaoCurta,
      definicaoCompleta: item.definicaoCompleta,
      exemploBiblioteca: item.exemploBiblioteca,
      remissivas: item.sinonimos,
      fonte,
      submodulosOndeAparece,
    };
  });
}

// Cache do Dicionário (Acervo A) em memória para evitar reimportações redundantes
let dicionarioCache: VerbeteUnificado[] | null = null;

/**
 * Carrega o Dicionário Cunha & Cavalcanti (2008) de forma dinâmica / preguiçosa.
 * Se o arquivo não existir ou falhar, retorna array vazio de modo resiliente.
 */
export async function carregarDicionario(): Promise<VerbeteUnificado[]> {
  if (dicionarioCache) return dicionarioCache;

  try {
    const modulo = await import('../../content/glossario/dicionario.json');
    const dados = (modulo.default || modulo) as Array<{
      id: string;
      termo: string;
      variantes?: string[];
      definicao: string;
      remissivas?: string[];
      fonte: FonteVerbete;
    }>;

    dicionarioCache = dados.map((item) => ({
      id: `dic-${item.id.toLowerCase()}`,
      termo: item.termo,
      acervo: 'dicionario' as const,
      variantes: item.variantes || [],
      definicao: item.definicao,
      definicaoCompleta: item.definicao,
      remissivas: item.remissivas || [],
      fonte: item.fonte,
      submodulosOndeAparece: [],
    }));

    return dicionarioCache;
  } catch (err) {
    console.warn('[GlossarioService] Dicionário completo não carregado ou ausente:', err);
    return [];
  }
}

/**
 * Carrega ambos os acervos e retorna uma lista unificada ordenada alfabeticamente.
 */
export async function carregarAcervoUnificado(): Promise<VerbeteUnificado[]> {
  const tecnicos = getTermosTecnicos();
  const dicionario = await carregarDicionario();

  const todos = [...tecnicos, ...dicionario];
  todos.sort((a, b) => a.termo.localeCompare(b.termo, 'pt-BR', { sensitivity: 'base' }));
  return todos;
}

/**
 * Permite limpar o cache (útil em testes unitários).
 */
export function resetarCacheDicionario(): void {
  dicionarioCache = null;
}

/**
 * Gera o índice A-Z de letras com a quantidade de termos em cada uma.
 */
export function gerarIndiceLetras(verbetes: VerbeteUnificado[]): IndiceLetra[] {
  const mapa = new Map<string, number>();

  // Inicializa letras A-Z
  const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  for (const letra of alfabeto) {
    mapa.set(letra, 0);
  }
  mapa.set('#', 0); // Para números e símbolos como @, 3M, etc.

  for (const v of verbetes) {
    const prim = normalizarTermo(v.termo).charAt(0).toUpperCase();
    if (prim >= 'A' && prim <= 'Z') {
      mapa.set(prim, (mapa.get(prim) || 0) + 1);
    } else {
      mapa.set('#', (mapa.get('#') || 0) + 1);
    }
  }

  const resultado: IndiceLetra[] = [];
  // Se houver símbolos/números, adiciona '#'
  if ((mapa.get('#') || 0) > 0) {
    resultado.push({ letra: '#', quantidade: mapa.get('#') || 0 });
  }

  for (const letra of alfabeto) {
    resultado.push({ letra, quantidade: mapa.get(letra) || 0 });
  }

  return resultado;
}

interface ContextoBusca {
  termosSuspeitos?: string[];
  termosSilenciados?: string[];
}

/**
 * Filtra e ranqueia verbetes por texto, acervo, letra inicial e flags do usuário.
 */
export function filtrarVerbetes(
  verbetes: VerbeteUnificado[],
  filtros: FiltrosGlossario,
  contexto?: ContextoBusca
): VerbeteUnificado[] {
  const buscaNorm = normalizarTermo(filtros.busca);
  const letraFiltro = filtros.letra ? filtros.letra.toUpperCase() : undefined;
  const acervoFiltro = filtros.acervo && filtros.acervo !== 'todos' ? filtros.acervo : undefined;
  const setSuspeitos = contexto?.termosSuspeitos
    ? new Set(contexto.termosSuspeitos.map((s) => s.toLowerCase()))
    : null;

  // Se não houver busca textual, aplica filtros simples diretamente
  if (!buscaNorm) {
    return verbetes.filter((v) => {
      if (acervoFiltro && v.acervo !== acervoFiltro) return false;

      if (filtros.apenasMarcadosSuspeitos) {
        if (!setSuspeitos || !setSuspeitos.has(v.id.toLowerCase())) return false;
      }

      if (filtros.apenasComOcorrenciaNoCurso) {
        if (!v.submodulosOndeAparece || v.submodulosOndeAparece.length === 0) return false;
      }

      if (letraFiltro) {
        const prim = normalizarTermo(v.termo).charAt(0).toUpperCase();
        if (letraFiltro === '#') {
          if (prim >= 'A' && prim <= 'Z') return false;
        } else if (prim !== letraFiltro) {
          return false;
        }
      }

      return true;
    });
  }

  // Com busca textual: calcula pontuação de relevância para ranquear
  interface ItemRanqueado {
    verbete: VerbeteUnificado;
    score: number;
  }

  const itensRanqueados: ItemRanqueado[] = [];

  for (const v of verbetes) {
    if (acervoFiltro && v.acervo !== acervoFiltro) continue;

    if (filtros.apenasMarcadosSuspeitos) {
      if (!setSuspeitos || !setSuspeitos.has(v.id.toLowerCase())) continue;
    }

    if (filtros.apenasComOcorrenciaNoCurso) {
      if (!v.submodulosOndeAparece || v.submodulosOndeAparece.length === 0) continue;
    }

    if (letraFiltro) {
      const prim = normalizarTermo(v.termo).charAt(0).toUpperCase();
      if (letraFiltro === '#') {
        if (prim >= 'A' && prim <= 'Z') continue;
      } else if (prim !== letraFiltro) {
        continue;
      }
    }

    const tNorm = normalizarTermo(v.termo);
    let score = 0;

    if (tNorm === buscaNorm) {
      score = 100; // Coincidência exata do termo principal
    } else if (tNorm.startsWith(buscaNorm)) {
      score = 80; // Prefixo do termo principal
    } else if (tNorm.includes(buscaNorm)) {
      score = 60; // Substring do termo principal
    } else {
      // Checa variantes e sinônimos
      let varianteScore = 0;
      if (v.variantes) {
        for (const variante of v.variantes) {
          const varNorm = normalizarTermo(variante);
          if (varNorm === buscaNorm) {
            varianteScore = Math.max(varianteScore, 90);
          } else if (varNorm.startsWith(buscaNorm)) {
            varianteScore = Math.max(varianteScore, 70);
          } else if (varNorm.includes(buscaNorm)) {
            varianteScore = Math.max(varianteScore, 50);
          }
        }
      }
      if (varianteScore > 0) {
        score = varianteScore;
      } else {
        // Checa definição
        const defNorm = normalizarTermo(v.definicao);
        if (defNorm.includes(buscaNorm)) {
          score = 30;
        }
      }
    }

    if (score > 0) {
      // Pequeno bônus se tiver ocorrência mapeada no curso
      if (v.submodulosOndeAparece && v.submodulosOndeAparece.length > 0) {
        score += 5;
      }
      itensRanqueados.push({ verbete: v, score });
    }
  }

  itensRanqueados.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.verbete.termo.localeCompare(b.verbete.termo, 'pt-BR');
  });

  return itensRanqueados.map((i) => i.verbete);
}

/**
 * Busca verbete por ID exato.
 */
export async function buscarPorId(id: string): Promise<VerbeteUnificado | null> {
  const idLimpo = id.trim().toLowerCase();
  const todos = await carregarAcervoUnificado();
  return todos.find((v) => v.id.toLowerCase() === idLimpo) || null;
}

/**
 * Busca verbete por termo exato (case/accent insensitive).
 */
export async function buscarPorTermoExato(termo: string): Promise<VerbeteUnificado | null> {
  const tNorm = normalizarTermo(termo);
  if (!tNorm) return null;
  const todos = await carregarAcervoUnificado();
  return (
    todos.find((v) => {
      if (normalizarTermo(v.termo) === tNorm) return true;
      if (v.variantes?.some((variante) => normalizarTermo(variante) === tNorm)) return true;
      return false;
    }) || null
  );
}
