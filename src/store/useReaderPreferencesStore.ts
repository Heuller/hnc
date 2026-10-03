import { create } from 'zustand';

export type ReaderFontSize = 'sm' | 'base' | 'lg';
export type ReaderColumnWidth = 'focus' | 'default' | 'wide';
export type ReaderFontFamily = 'serif' | 'sans';

interface ReaderPreferencesState {
  fontSize: ReaderFontSize;
  columnWidth: ReaderColumnWidth;
  fontFamily: ReaderFontFamily;
  isFocusMode: boolean;
  setFontSize: (size: ReaderFontSize) => void;
  setColumnWidth: (width: ReaderColumnWidth) => void;
  setFontFamily: (font: ReaderFontFamily) => void;
  setFocusMode: (val: boolean) => void;
  toggleFocusMode: () => void;
  resetPreferences: () => void;
}

const STORAGE_KEY = 'heuller_reader_prefs_v2';

const DEFAULT_PREFERENCES = {
  fontSize: 'base' as ReaderFontSize,
  columnWidth: 'default' as ReaderColumnWidth,
  fontFamily: 'serif' as ReaderFontFamily,
};

function getSavedPreferences() {
  if (typeof window === 'undefined') return DEFAULT_PREFERENCES;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return { ...DEFAULT_PREFERENCES, ...JSON.parse(raw) };
    }
  } catch (err) {
    console.error('Erro ao carregar preferências de leitura:', err);
  }
  return DEFAULT_PREFERENCES;
}

export const useReaderPreferencesStore = create<ReaderPreferencesState>((set, get) => {
  const initial = getSavedPreferences();

  const persist = (updated: Partial<typeof DEFAULT_PREFERENCES>) => {
    if (typeof window === 'undefined') return;
    try {
      const current = {
        fontSize: get().fontSize,
        columnWidth: get().columnWidth,
        fontFamily: get().fontFamily,
        ...updated,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    } catch (err) {
      console.error('Erro ao salvar preferências de leitura:', err);
    }
  };

  return {
    fontSize: initial.fontSize,
    columnWidth: initial.columnWidth,
    fontFamily: initial.fontFamily,
    isFocusMode: false,

    setFontSize: (fontSize) => {
      persist({ fontSize });
      set({ fontSize });
    },

    setColumnWidth: (columnWidth) => {
      persist({ columnWidth });
      set({ columnWidth });
    },

    setFontFamily: (fontFamily) => {
      persist({ fontFamily });
      set({ fontFamily });
    },

    setFocusMode: (val: boolean) => {
      set({ isFocusMode: val });
    },

    toggleFocusMode: () => {
      set((state) => ({ isFocusMode: !state.isFocusMode }));
    },

    resetPreferences: () => {
      persist(DEFAULT_PREFERENCES);
      set({ ...DEFAULT_PREFERENCES, isFocusMode: false });
    },
  };
});

