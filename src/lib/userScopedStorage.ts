import { useAuthStore } from '../store/useAuthStore';
import type { StateStorage } from 'zustand/middleware';

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

      const uid = useAuthStore.getState().user?.id;
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

      const uid = useAuthStore.getState().user?.id;
      const scopedKey = uid ? `${baseKey}:${uid}` : baseKey;
      localStorage.setItem(scopedKey, value);
    },

    removeItem: (_name: string): void => {
      if (typeof window === 'undefined' || !window.localStorage) {
        return;
      }

      const uid = useAuthStore.getState().user?.id;
      const scopedKey = uid ? `${baseKey}:${uid}` : baseKey;
      localStorage.removeItem(scopedKey);
    },
  };
}
