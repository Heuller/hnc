import type { CebraspeQuestion } from './types';

/**
 * Função canônica única que determina se um item é elegível para estudo ativo (C8 / C14).
 * Itens marcados com revisar: true ou tipo: 'em-conferencia' são excluídos de simulados,
 * portão de verificação, filas de revisão espaçada e métricas de domínio.
 */
export function elegivelParaEstudo(q: CebraspeQuestion | { fonteOriginal?: { revisar?: boolean; tipo?: string } }): boolean {
  if (!q) return false;
  const fonte = q.fonteOriginal;
  if (!fonte) return true;
  if (fonte.revisar === true) return false;
  if (fonte.tipo === 'em-conferencia') return false;
  return true;
}

/**
 * Filtra um array de questões retornando apenas as elegíveis para estudo.
 */
export function filtrarQuestoesElegiveis<T extends { fonteOriginal?: any }>(questoes: T[]): T[] {
  if (!questoes || !Array.isArray(questoes)) return [];
  return questoes.filter(elegivelParaEstudo);
}

/**
 * Conta quantos itens em conferência foram excluídos de um conjunto.
 */
export function contarItensEmConferencia<T extends { fonteOriginal?: any }>(questoes: T[]): number {
  if (!questoes || !Array.isArray(questoes)) return 0;
  return questoes.filter((q) => !elegivelParaEstudo(q)).length;
}
