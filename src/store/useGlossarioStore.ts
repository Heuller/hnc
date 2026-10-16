import { create } from 'zustand';
import type { VerbeteUnificado } from '../domain/glossario/types';

const STORAGE_JA_SEI_KEY = 'hnc_glossario_ja_sei';
const STORAGE_SUSPEITOS_KEY = 'hnc_glossario_suspeitos';
const STORAGE_DESTAQUES_KEY = 'hnc_glossario_destaques_ativos';

function carregarDoLocalStorage<T>(key: string, padrao: T): T {
  if (typeof window === 'undefined') return padrao;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return padrao;
    return JSON.parse(raw) as T;
  } catch {
    return padrao;
  }
}

function salvarNoLocalStorage(key: string, valor: unknown): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(valor));
  } catch {
    // quota exceeded ou ambiente restrito
  }
}

export interface SugestaoReabertura {
  termoId: string;
  termo: string;
  motivo: string;
}

interface GlossarioStoreState {
  termosSilenciados: string[]; // IDs marcados como "já sei"
  termosSuspeitos: string[]; // IDs marcados como "suspeito"
  destaquesHabilitados: boolean; // Ativa/desativa sublinhado no texto
  termoAtivoDrawer: VerbeteUnificado | null;
  isDrawerOpen: boolean;
  sugestaoReabertura: SugestaoReabertura | null;

  // Ações
  marcarJaSei: (id: string) => void;
  desmarcarJaSei: (id: string) => void;
  alternarJaSei: (id: string) => void;
  isTermoSilenciado: (id: string) => boolean;

  marcarSuspeito: (id: string) => void;
  desmarcarSuspeito: (id: string) => void;
  alternarSuspeito: (id: string) => void;
  isTermoSuspeito: (id: string) => boolean;

  setDestaquesHabilitados: (habilitado: boolean) => void;

  abrirDrawer: (verbete: VerbeteUnificado) => void;
  fecharDrawer: () => void;

  sugerirReabertura: (termoId: string, termo: string, motivo: string) => void;
  descartarSugestao: () => void;
  reabrirPorSugestao: (termoId: string) => void;
}

export const useGlossarioStore = create<GlossarioStoreState>((set, get) => ({
  termosSilenciados: carregarDoLocalStorage<string[]>(STORAGE_JA_SEI_KEY, []),
  termosSuspeitos: carregarDoLocalStorage<string[]>(STORAGE_SUSPEITOS_KEY, []),
  destaquesHabilitados: carregarDoLocalStorage<boolean>(STORAGE_DESTAQUES_KEY, true),
  termoAtivoDrawer: null,
  isDrawerOpen: false,
  sugestaoReabertura: null,

  marcarJaSei: (id: string) => {
    const limpo = id.trim().toLowerCase();
    const atuais = get().termosSilenciados;
    if (atuais.includes(limpo)) return;
    const novos = [...atuais, limpo];
    salvarNoLocalStorage(STORAGE_JA_SEI_KEY, novos);
    set({ termosSilenciados: novos });
  },

  desmarcarJaSei: (id: string) => {
    const limpo = id.trim().toLowerCase();
    const atuais = get().termosSilenciados;
    const novos = atuais.filter((t) => t !== limpo);
    salvarNoLocalStorage(STORAGE_JA_SEI_KEY, novos);
    set({ termosSilenciados: novos });
  },

  alternarJaSei: (id: string) => {
    const limpo = id.trim().toLowerCase();
    if (get().isTermoSilenciado(limpo)) {
      get().desmarcarJaSei(limpo);
    } else {
      get().marcarJaSei(limpo);
    }
  },

  isTermoSilenciado: (id: string) => {
    const limpo = id.trim().toLowerCase();
    return get().termosSilenciados.includes(limpo);
  },

  marcarSuspeito: (id: string) => {
    const limpo = id.trim().toLowerCase();
    const atuais = get().termosSuspeitos;
    if (atuais.includes(limpo)) return;
    const novos = [...atuais, limpo];
    salvarNoLocalStorage(STORAGE_SUSPEITOS_KEY, novos);
    set({ termosSuspeitos: novos });
  },

  desmarcarSuspeito: (id: string) => {
    const limpo = id.trim().toLowerCase();
    const atuais = get().termosSuspeitos;
    const novos = atuais.filter((t) => t !== limpo);
    salvarNoLocalStorage(STORAGE_SUSPEITOS_KEY, novos);
    set({ termosSuspeitos: novos });
  },

  alternarSuspeito: (id: string) => {
    const limpo = id.trim().toLowerCase();
    if (get().isTermoSuspeito(limpo)) {
      get().desmarcarSuspeito(limpo);
    } else {
      get().marcarSuspeito(limpo);
    }
  },

  isTermoSuspeito: (id: string) => {
    const limpo = id.trim().toLowerCase();
    return get().termosSuspeitos.includes(limpo);
  },

  setDestaquesHabilitados: (habilitado: boolean) => {
    salvarNoLocalStorage(STORAGE_DESTAQUES_KEY, habilitado);
    set({ destaquesHabilitados: habilitado });
  },

  abrirDrawer: (verbete: VerbeteUnificado) => {
    set({ termoAtivoDrawer: verbete, isDrawerOpen: true });
  },

  fecharDrawer: () => {
    set({ isDrawerOpen: false, termoAtivoDrawer: null });
  },

  sugerirReabertura: (termoId: string, termo: string, motivo: string) => {
    set({
      sugestaoReabertura: {
        termoId: termoId.trim().toLowerCase(),
        termo,
        motivo,
      },
    });
  },

  descartarSugestao: () => {
    set({ sugestaoReabertura: null });
  },

  reabrirPorSugestao: (termoId: string) => {
    get().desmarcarJaSei(termoId);
    set({ sugestaoReabertura: null });
  },
}));
