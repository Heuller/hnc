import { create } from 'zustand';
import type { TermoDicionario } from '../domain/dicionario/types';
import { dicionarioService } from '../domain/dicionario/dicionarioService';

interface DicionarioStoreState {
  isModalOpen: boolean;
  termoAtivo: TermoDicionario | null;
  termoQuery: string;
  contextoFrase: string;
  isLoading: boolean;
  erro: string | null;
  historicoConsultas: string[];

  // Ações
  abrirDicionario: (termo: string, contexto?: string) => Promise<void>;
  abrirDicionarioComTermo: (termo: TermoDicionario) => void;
  abrirBuscaVazia: () => void;
  fecharDicionario: () => void;
  pesquisar: (query: string) => Promise<void>;
}

export const useDicionarioStore = create<DicionarioStoreState>((set, get) => ({
  isModalOpen: false,
  termoAtivo: null,
  termoQuery: '',
  contextoFrase: '',
  isLoading: false,
  erro: null,
  historicoConsultas: [],

  abrirDicionario: async (termo: string, contexto?: string) => {
    const limpo = termo.trim();
    if (!limpo) return;

    set({
      isModalOpen: true,
      termoAtivo: null,
      termoQuery: limpo,
      contextoFrase: contexto || '',
      isLoading: true,
      erro: null,
    });

    // 1. Tenta busca local instantânea (0ms)
    const local = dicionarioService.buscarTermoLocal(limpo);
    if (local) {
      set((state) => ({
        termoAtivo: local,
        isLoading: false,
        historicoConsultas: Array.from(new Set([local.termo, ...state.historicoConsultas])).slice(0, 20),
      }));
      return;
    }

    // 2. Se não encontrou exato local, busca ou gera via Gemini / backend
    try {
      const resultado = await dicionarioService.buscarOuGerarDefinicao(limpo, contexto);
      set((state) => ({
        termoAtivo: resultado,
        isLoading: false,
        historicoConsultas: Array.from(new Set([resultado.termo, ...state.historicoConsultas])).slice(0, 20),
      }));
    } catch {
      set({
        isLoading: false,
        erro: 'Não foi possível carregar a definição no momento.',
      });
    }
  },

  abrirDicionarioComTermo: (termo: TermoDicionario) => {
    set((state) => ({
      isModalOpen: true,
      termoAtivo: termo,
      termoQuery: termo.termo,
      contextoFrase: '',
      isLoading: false,
      erro: null,
      historicoConsultas: Array.from(new Set([termo.termo, ...state.historicoConsultas])).slice(0, 20),
    }));
  },

  abrirBuscaVazia: () => {
    set({
      isModalOpen: true,
      termoQuery: '',
      contextoFrase: '',
      isLoading: false,
      erro: null,
    });
  },

  fecharDicionario: () => {
    set({ isModalOpen: false });
  },

  pesquisar: async (query: string) => {
    const { abrirDicionario } = get();
    await abrirDicionario(query);
  },
}));
