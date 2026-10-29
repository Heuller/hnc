import { getEffectiveUserId } from '../lib/userScopedStorage';
import { progressSyncService } from './progressSyncService';
import type { SessaoSimuladoState } from '../domain/schemas/progress.schema';

const SESSION_PREFIX = 'hnc_simulado_session_';
const ACTIVE_SIMULADO_KEY = 'hnc_active_simulado_id';

let cloudSyncTimeout: ReturnType<typeof setTimeout> | null = null;

function getStorageKey(simuladoId: string): string {
  const uid = getEffectiveUserId();
  return uid ? `${SESSION_PREFIX}${simuladoId}:${uid}` : `${SESSION_PREFIX}${simuladoId}`;
}

export const simuladoSessionService = {
  /**
   * Salva a sessão do simulado de forma atômica e síncrona no localStorage.
   * Garante sobrevivência a 0ms contra reload de navegador (F5), fechamento de aba ou pane de rede.
   */
  salvarSessaoLocal(simuladoId: string, sessao: SessaoSimuladoState): void {
    if (typeof window === 'undefined' || !window.localStorage) return;
    try {
      const key = getStorageKey(simuladoId);
      const payload: SessaoSimuladoState = {
        ...sessao,
        simuladoId,
        emAndamento: true,
        ultimoAcessoTimestamp: sessao.ultimoAcessoTimestamp || Date.now(),
      };
      localStorage.setItem(key, JSON.stringify(payload));
      localStorage.setItem(ACTIVE_SIMULADO_KEY, simuladoId);
    } catch (e) {
      console.warn('[simuladoSessionService] Erro ao salvar sessão local:', e);
    }
  },

  /**
   * Obtém a sessão persistida localmente para um simulado específico.
   * Tenta a chave escopada por usuário e recorre à chave legado/anônima se aplicável.
   */
  obterSessaoLocal(simuladoId: string): SessaoSimuladoState | null {
    if (typeof window === 'undefined' || !window.localStorage) return null;
    try {
      const primaryKey = getStorageKey(simuladoId);
      let raw = localStorage.getItem(primaryKey);

      // Fallback para chave sem sufixo :uid
      if (!raw) {
        const fallbackKey = `${SESSION_PREFIX}${simuladoId}`;
        raw = localStorage.getItem(fallbackKey);
      }

      if (!raw) return null;

      const parsed = JSON.parse(raw) as SessaoSimuladoState;
      if (parsed && typeof parsed === 'object' && parsed.respostas) {
        return parsed;
      }
    } catch (e) {
      console.warn('[simuladoSessionService] Erro ao ler sessão local:', e);
    }
    return null;
  },

  /**
   * Atualiza o tempo gasto de forma síncrona no storage local
   */
  salvarTempoLocal(simuladoId: string, segundos: number): void {
    if (typeof window === 'undefined' || !window.localStorage) return;
    try {
      const existente = this.obterSessaoLocal(simuladoId);
      if (existente) {
        existente.tempoGastoSegundos = segundos;
        existente.ultimoAcessoTimestamp = Date.now();
        const key = getStorageKey(simuladoId);
        localStorage.setItem(key, JSON.stringify(existente));
      }
    } catch {
      // Ignora falha de tempo
    }
  },

  /**
   * Remove a sessão local do simulado quando ele é finalizado ou reiniciado.
   */
  limparSessaoLocal(simuladoId: string): void {
    if (typeof window === 'undefined' || !window.localStorage) return;
    try {
      const primaryKey = getStorageKey(simuladoId);
      const fallbackKey = `${SESSION_PREFIX}${simuladoId}`;
      localStorage.removeItem(primaryKey);
      localStorage.removeItem(fallbackKey);

      if (localStorage.getItem(ACTIVE_SIMULADO_KEY) === simuladoId) {
        localStorage.removeItem(ACTIVE_SIMULADO_KEY);
      }
    } catch (e) {
      console.warn('[simuladoSessionService] Erro ao limpar sessão local:', e);
    }
  },

  /**
   * Retorna o ID do último simulado que esteve ativo
   */
  obterUltimoSimuladoIdAtivo(): string | null {
    if (typeof window === 'undefined' || !window.localStorage) return null;
    try {
      return localStorage.getItem(ACTIVE_SIMULADO_KEY);
    } catch {
      return null;
    }
  },

  /**
   * Dispara sincronização em nuvem com debounce para economizar requisições
   * sem bloquear ou atrasar a interação do usuário.
   */
  salvarSessaoNuvemDebounced(
    userId: string,
    simuladoId: string,
    sessao: SessaoSimuladoState,
    delayMs = 1200
  ): void {
    if (!userId) return;

    if (cloudSyncTimeout) {
      clearTimeout(cloudSyncTimeout);
    }

    cloudSyncTimeout = setTimeout(() => {
      progressSyncService
        .salvarSessaoSimuladoNuvem(userId, simuladoId, sessao)
        .catch((err) => {
          console.warn('[simuladoSessionService] Erro na sincronização em nuvem:', err);
        });
    }, delayMs);
  },

  /**
   * Compara duas sessões e retorna a mais completa (com mais respostas salvas ou mais recente)
   */
  mesclarSessoes(
    sessaoA?: SessaoSimuladoState | null,
    sessaoB?: SessaoSimuladoState | null
  ): SessaoSimuladoState | null {
    if (!sessaoA) return sessaoB || null;
    if (!sessaoB) return sessaoA;

    const respostasA = sessaoA.respostas || {};
    const respostasB = sessaoB.respostas || {};

    // Combina todas as respostas (nenhuma resposta é descartada)
    const combinadas = { ...respostasB, ...respostasA };

    const maisRecente =
      (sessaoA.ultimoAcessoTimestamp || 0) >= (sessaoB.ultimoAcessoTimestamp || 0)
        ? sessaoA
        : sessaoB;

    return {
      ...maisRecente,
      respostas: combinadas,
      currentIndex: Math.max(sessaoA.currentIndex || 0, sessaoB.currentIndex || 0),
      tempoGastoSegundos: Math.max(
        sessaoA.tempoGastoSegundos || 0,
        sessaoB.tempoGastoSegundos || 0
      ),
      emAndamento: true,
    };
  },
};
