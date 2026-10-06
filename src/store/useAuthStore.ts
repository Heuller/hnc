import { create } from 'zustand';
import type { User, Session } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
  isConfigured: boolean;
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  initialize: () => () => void; // Retorna função de unsubscribe
  loginAsGuest: () => void;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  loading: true,
  isConfigured: isSupabaseConfigured,
  isAuthModalOpen: false,

  openAuthModal: () => set({ isAuthModalOpen: true }),
  closeAuthModal: () => set({ isAuthModalOpen: false }),

  loginAsGuest: () => {
    set({
      user: {
        id: '00000000-0000-0000-0000-000000000001',
        email: 'heuller.camara@hnc.internal',
        app_metadata: {},
        user_metadata: { name: 'Heuller (Convidado)' },
        aud: 'authenticated',
        created_at: new Date().toISOString(),
      } as unknown as User,
      session: null,
      loading: false,
    });
  },

  initialize: () => {
    if (!isSupabaseConfigured) {
      set({ loading: false });
      return () => {};
    }

    // Busca sessão atual
    supabase.auth.getSession().then(({ data: { session } }) => {
      set({
        session,
        user: session?.user ?? null,
        loading: false,
      });
    });

    // Escuta alterações de estado de autenticação
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      set({
        session,
        user: session?.user ?? null,
        loading: false,
      });
    });

    return () => {
      subscription.unsubscribe();
    };
  },

  signOut: async () => {
    if (isSupabaseConfigured) {
      await supabase.auth.signOut();
    }
    set({ user: null, session: null });
  },
}));
