import { create } from 'zustand';
import type { User, Session } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { setStoredActiveUserId } from '../lib/userScopedStorage';

interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
  isConfigured: boolean;
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  initialize: () => () => void; // Retorna função de unsubscribe
  signOut: () => Promise<void>;
}

type SignOutListener = () => Promise<void> | void;
const signOutListeners = new Set<SignOutListener>();

type AuthStateListener = (user: User) => Promise<void> | void;
const authStateListeners = new Set<AuthStateListener>();

/**
 * Registra ouvintes para o evento de signOut (ex.: reset e reidratação de stores).
 * Evita acoplamento circular ou importação de dependências pesadas no useAuthStore.
 */
export function registerSignOutListener(fn: SignOutListener): () => void {
  signOutListeners.add(fn);
  return () => {
    signOutListeners.delete(fn);
  };
}

/**
 * Registra ouvintes para o evento de signIn ou restauração de sessão ativa.
 * Permite reidratar stores e baixar progresso na nuvem de forma desacoplada.
 */
export function registerAuthStateListener(fn: AuthStateListener): () => void {
  authStateListeners.add(fn);
  return () => {
    authStateListeners.delete(fn);
  };
}

async function notifyAuthStateListeners(user: User): Promise<void> {
  for (const listener of authStateListeners) {
    try {
      await listener(user);
    } catch (e) {
      console.warn('[useAuthStore] Erro ao executar authStateListener:', e);
    }
  }
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  loading: true,
  isConfigured: isSupabaseConfigured,
  isAuthModalOpen: false,

  openAuthModal: () => set({ isAuthModalOpen: true }),
  closeAuthModal: () => set({ isAuthModalOpen: false }),

  initialize: () => {
    if (!isSupabaseConfigured) {
      set({ loading: false });
      return () => {};
    }

    // Busca sessão atual
    supabase.auth.getSession().then(({ data: { session } }) => {
      const user = session?.user ?? null;
      if (user) {
        setStoredActiveUserId(user.id);
      }
      set({
        session,
        user,
        loading: false,
      });
      if (user) {
        notifyAuthStateListeners(user);
      }
    });

    // Escuta alterações de estado de autenticação
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const user = session?.user ?? null;
      if (user) {
        setStoredActiveUserId(user.id);
      }
      set({
        session,
        user,
        loading: false,
      });
      if (user) {
        notifyAuthStateListeners(user);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  },

  signOut: async () => {
    setStoredActiveUserId(null);
    if (isSupabaseConfigured) {
      await supabase.auth.signOut();
    }
    set({ user: null, session: null });

    // F-04: Notifica ouvintes registrados (ex: zerar e reidratar stores isolados)
    for (const listener of signOutListeners) {
      try {
        await listener();
      } catch (e) {
        console.warn('[useAuthStore] Erro ao executar signOut listener:', e);
      }
    }
  },
}));
