import { useAuthStore } from '../store/useAuthStore';
import type { StateStorage } from 'zustand/middleware';

export const HNC_LAST_ACTIVE_UID_KEY = 'hnc_last_active_uid';

/**
 * Obtém o ID do usuário de forma resiliente e síncrona.
 * 1. Prioriza o Zustand useAuthStore (se o usuário já estiver populado em memória).
 * 2. Em reload do navegador (F5), onde useAuthStore ainda está carregando a sessão assíncrona,
 *    lê a chave síncrona de cache hnc_last_active_uid.
 * 3. Como fallback resiliente, inspeciona o token de sessão do Supabase no localStorage (sb-*-auth-token).
 * 4. Como fallback de desenvolvimento/modo local, lê hnc_local_user_id.
 */
export function getEffectiveUserId(): string | undefined {
  const storeUid = useAuthStore.getState().user?.id;
  if (storeUid) {
    return storeUid;
  }

  if (typeof window === 'undefined' || !window.localStorage) {
    return undefined;
  }

  try {
    const lastActive = localStorage.getItem(HNC_LAST_ACTIVE_UID_KEY);
    if (lastActive) {
      return lastActive;
    }

    const localDevId = localStorage.getItem('hnc_local_user_id');
    if (localDevId) {
      return localDevId;
    }

    // Varredura por tokens de sessão do Supabase persistidos localmente
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('sb-') && key.endsWith('-auth-token')) {
        const raw = localStorage.getItem(key);
        if (raw) {
          const parsed = JSON.parse(raw);
          const uid = parsed?.user?.id;
          if (uid && typeof uid === 'string') {
            return uid;
          }
        }
      }
    }
  } catch {
    // Falha silenciosa para garantir robustez
  }

  return undefined;
}

/**
 * Registra ou remove o ID do usuário ativo na chave síncrona do localStorage.
 */
export function setStoredActiveUserId(uid: string | null): void {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    if (uid) {
      localStorage.setItem(HNC_LAST_ACTIVE_UID_KEY, uid);
    } else {
      localStorage.removeItem(HNC_LAST_ACTIVE_UID_KEY);
    }
  } catch (err) {
    console.warn('[userScopedStorage] Erro ao gravar hnc_last_active_uid:', err);
  }
}

/**
 * Cria um adaptador de storage escopado por usuário para o middleware persist do Zustand.
 * Chave resultante: `${baseKey}:${uid}` (ou `${baseKey}` se não houver usuário autenticado).
 * 
 * Regra F-04:
 * 1. Isole os dados por usuário: `heuller_camara_v2_progress:<uid>` e `hnc_concept_state_v1:<uid>`.
 * 2. Migração única da chave antiga (sem :<uid>) para o primeiro usuário que logar e tiver dados.
 * 3. No signOut, os stores em memória são zerados e reidratados.
 */
export function createUserScopedStorage(baseKey: string): StateStorage {
  return {
    getItem: (_name: string): string | null => {
      if (typeof window === 'undefined' || !window.localStorage) {
        return null;
      }

      const uid = getEffectiveUserId();
      const scopedKey = uid ? `${baseKey}:${uid}` : baseKey;

      const scopedData = localStorage.getItem(scopedKey);
      if (scopedData) {
        return scopedData;
      }

      // Migração única da chave legada (caso exista e o usuário esteja logado)
      if (uid) {
        const legacyData = localStorage.getItem(baseKey);
        if (legacyData) {
          try {
            localStorage.setItem(scopedKey, legacyData);
            localStorage.removeItem(baseKey);
            return legacyData;
          } catch (e) {
            console.error(`[userScopedStorage] Erro ao migrar chave legada ${baseKey} para ${scopedKey}:`, e);
          }
        }
      }

      return null;
    },

    setItem: (_name: string, value: string): void => {
      if (typeof window === 'undefined' || !window.localStorage) {
        return;
      }

      const uid = getEffectiveUserId();
      const scopedKey = uid ? `${baseKey}:${uid}` : baseKey;
      localStorage.setItem(scopedKey, value);
    },

    removeItem: (_name: string): void => {
      if (typeof window === 'undefined' || !window.localStorage) {
        return;
      }

      const uid = getEffectiveUserId();
      const scopedKey = uid ? `${baseKey}:${uid}` : baseKey;
      localStorage.removeItem(scopedKey);
    },
  };
}
