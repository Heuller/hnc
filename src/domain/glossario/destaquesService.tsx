import React from 'react';
import type { VerbeteUnificado } from './types';

export interface TermoDestaqueSubmodulo {
  termo: string;
  verbeteId: string;
  acervo: 'tecnico' | 'dicionario';
  definicaoCurta: string;
  exemploBiblioteca?: string;
}

// Mapa pré-calculado em build-time
let mapaOcorrencias: Record<string, TermoDestaqueSubmodulo[]> = {};

try {
  // Carregamento dinâmico ou estático seguro
  const dados = await import('../../content/glossario/ocorrencias-termos.json');
  mapaOcorrencias = (dados.default || dados) as Record<string, TermoDestaqueSubmodulo[]>;
} catch {
  // Fallback seguro se o arquivo ainda não existir
  mapaOcorrencias = {};
}

/**
 * Retorna os termos que devem ser destacados em um submódulo específico.
 */
export function obterTermosDestaque(submoduloId?: string): TermoDestaqueSubmodulo[] {
  if (!submoduloId) return [];
  return mapaOcorrencias[submoduloId] || [];
}

/**
 * Converte um TermoDestaqueSubmodulo em VerbeteUnificado para abrir na gaveta.
 */
export function converterParaVerbeteUnificado(
  item: TermoDestaqueSubmodulo
): VerbeteUnificado {
  return {
    id: item.verbeteId,
    termo: item.termo,
    acervo: item.acervo,
    definicao: item.definicaoCurta,
    definicaoCompleta: item.definicaoCurta,
    exemploBiblioteca: item.exemploBiblioteca,
    fonte: {
      obra:
        item.acervo === 'tecnico'
          ? 'Edital nº 1/2026 - Conhecimentos Específicos Cargo 5'
          : 'Dicionário de Biblioteconomia e Arquivologia',
      ano: item.acervo === 'tecnico' ? 2026 : 2008,
    },
    submodulosOndeAparece: [],
  };
}

/**
 * Aplica sublinhado pontilhado editorial nos termos destacados em um trecho de texto.
 * Regras do Plano v3 / U3.12:
 * 1. Apenas a 1ª ocorrência de cada termo por parágrafo / seção.
 * 2. Ignora termos silenciados pelo usuário ("já sei").
 * 3. Preserva a capitalização original do texto.
 */
export function destacarTermosNoTexto(
  texto: string,
  termosDisponiveis: TermoDestaqueSubmodulo[],
  termosSilenciados: Set<string>,
  onCliqueTermo: (item: TermoDestaqueSubmodulo) => void
): React.ReactNode {
  if (!texto || termosDisponiveis.length === 0) return texto;

  // Filtra termos ativos (não silenciados)
  const termosAtivos = termosDisponiveis.filter(
    (t) => !termosSilenciados.has(t.verbeteId.toLowerCase())
  );
  if (termosAtivos.length === 0) return texto;

  // Mapeia termos por lowercase para busca rápida
  const mapaPorTexto = new Map<string, TermoDestaqueSubmodulo>();
  for (const t of termosAtivos) {
    const k = t.termo.toLowerCase();
    if (!mapaPorTexto.has(k)) {
      mapaPorTexto.set(k, t);
    }
  }

  // Ordena termos pelo tamanho decrescente (frases mais longas primeiro)
  const termosOrdenados = Array.from(mapaPorTexto.keys()).sort((a, b) => b.length - a.length);

  // Constrói regex com fronteiras de palavra inteira
  const regexPattern = `\\b(${termosOrdenados
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')})\\b`;

  const regex = new RegExp(regexPattern, 'gi');

  const partes: React.ReactNode[] = [];
  let ultimoIndex = 0;
  const termosJaDestacadosNoBloco = new Set<string>();

  texto.replace(regex, (match, _p1, offset) => {
    // Texto anterior à correspondência
    if (offset > ultimoIndex) {
      partes.push(texto.slice(ultimoIndex, offset));
    }

    const matchLower = match.toLowerCase();
    const termoInfo = mapaPorTexto.get(matchLower);

    // Se já foi destacado neste bloco, mantém texto simples (regra: 1ª ocorrência)
    if (!termoInfo || termosJaDestacadosNoBloco.has(matchLower)) {
      partes.push(match);
    } else {
      termosJaDestacadosNoBloco.add(matchLower);
      partes.push(
        <button
          key={`term-${offset}-${matchLower}`}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onCliqueTermo(termoInfo);
          }}
          className="border-b border-dotted border-accent/70 hover:border-accent text-inherit font-inherit cursor-help transition-colors rounded-xs px-0.5 hover:bg-accent/10 focus:outline-none focus:ring-1 focus:ring-accent"
          title={`Definição de ${termoInfo.termo}`}
          aria-label={`Ver definição do termo ${termoInfo.termo}`}
        >
          {match}
        </button>
      );
    }

    ultimoIndex = offset + match.length;
    return match;
  });

  // Restante do texto após o último match
  if (ultimoIndex < texto.length) {
    partes.push(texto.slice(ultimoIndex));
  }

  return <>{partes}</>;
}
