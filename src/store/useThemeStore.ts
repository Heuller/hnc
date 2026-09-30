import { create } from 'zustand';

export type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeState {
  theme: ThemeMode;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

const STORAGE_KEY = 'heuller_camara_v2_theme';

function getInitialTheme(): ThemeMode {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    if (saved === 'light' || saved === 'dark' || saved === 'system') {
      return saved;
    }
  } catch (e) {
    console.error('Failed to read theme from localStorage', e);
  }
  return 'system';
}

function resolveSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyThemeToDOM(resolved: 'light' | 'dark') {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(resolved);
  root.style.colorScheme = resolved;
}

export const useThemeStore = create<ThemeState>((set, get) => {
  const initialTheme = getInitialTheme();
  const initialResolved = initialTheme === 'system' ? resolveSystemTheme() : initialTheme;
  
  // Apply initially
  applyThemeToDOM(initialResolved);

  // Set up system listener
  if (typeof window !== 'undefined') {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      const current = get().theme;
      if (current === 'system') {
        const nextResolved = e.matches ? 'dark' : 'light';
        applyThemeToDOM(nextResolved);
        set({ resolvedTheme: nextResolved });
      }
    });
  }

  return {
    theme: initialTheme,
    resolvedTheme: initialResolved,
    setTheme: (newTheme: ThemeMode) => {
      const resolved = newTheme === 'system' ? resolveSystemTheme() : newTheme;
      try {
        localStorage.setItem(STORAGE_KEY, newTheme);
      } catch (e) {
        console.error('Failed to save theme', e);
      }
      applyThemeToDOM(resolved);
      set({ theme: newTheme, resolvedTheme: resolved });
    },
    toggleTheme: () => {
      const currentResolved = get().resolvedTheme;
      const nextResolved = currentResolved === 'dark' ? 'light' : 'dark';
      get().setTheme(nextResolved);
    },
  };
});
