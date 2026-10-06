import { create } from 'zustand';

export type AppView =
  | 'painel'
  | 'jornada'
  | 'treinos'
  | 'radar'
  | 'progresso'
  | 'teoria'
  | 'simulado'
  | 'caderno-erros'
  | 'folha-vespera'
  | 'discursiva'
  | 'design-system'
  | 'dev-rascunhos'
  | 'edital';

interface NavigationState {
  activeView: AppView;
  currentRoute: AppView;
  activeSubmoduleIndex: number;
  selectedSubmodule: string;
  sidebarCollapsed: boolean;
  targetSimuladoId?: string;
  setActiveView: (view: AppView) => void;
  setCurrentRoute: (view: AppView) => void;
  setActiveSubmoduleIndex: (index: number) => void;
  setSelectedSubmodule: (subId: string) => void;
  setTargetSimuladoId: (id?: string) => void;
  navigateToSimulado: (simuladoId?: string) => void;
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
}

function getViewFromHash(): AppView {
  if (typeof window === 'undefined') return 'painel';
  const rawHash = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase();
  const rawPath = window.location.pathname.replace(/^\//, '').trim().toLowerCase();
  const route = rawHash || rawPath;

  if (route.startsWith('jornada')) return 'jornada';
  if (route.startsWith('treinos')) return 'treinos';
  if (route.startsWith('teoria')) return 'teoria';
  if (route.startsWith('simulado')) return 'simulado';
  if (route.startsWith('radar')) return 'radar';
  if (route.startsWith('progresso')) return 'progresso';
  if (route.startsWith('caderno-erros') || route.startsWith('caderno')) return 'caderno-erros';
  if (route.startsWith('folha-vespera') || route.startsWith('folha')) return 'folha-vespera';
  if (route.startsWith('discursiva')) return 'discursiva';
  if (route.startsWith('design-system')) return 'design-system';
  if (route.startsWith('dev/rascunhos') || route.startsWith('dev-rascunhos')) return 'dev-rascunhos';
  if (route.startsWith('edital')) return 'edital';
  if (route.startsWith('painel')) return 'painel';
  return 'painel';
}

const HNC_LAST_SUBMODULE_KEY = 'hnc_ultimo_submodulo';

function getInitialSubmodule(): string {
  if (typeof window === 'undefined') return '1.1';
  try {
    return localStorage.getItem(HNC_LAST_SUBMODULE_KEY) || '1.1';
  } catch {
    return '1.1';
  }
}

function getSimuladoIdFromHash(): string | undefined {
  if (typeof window === 'undefined') return undefined;
  const rawHash = window.location.hash.replace(/^#\/?/, '').trim();
  if (rawHash.includes('?')) {
    const params = new URLSearchParams(rawHash.split('?')[1]);
    const id = params.get('id');
    if (id) return id;
  }
  const parts = rawHash.split('/');
  if (parts[0] === 'simulado' && parts[1]) {
    return parts[1];
  }
  return undefined;
}

export const useNavigationStore = create<NavigationState>((set) => {
  const initialView = getViewFromHash();
  const initialTargetSimulado = getSimuladoIdFromHash();

  if (typeof window !== 'undefined') {
    window.addEventListener('hashchange', () => {
      const nextView = getViewFromHash();
      const nextSimuladoId = getSimuladoIdFromHash();
      try {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      } catch {
        window.scrollTo(0, 0);
      }
      set((state) => {
        if (state.activeView === nextView && state.targetSimuladoId === nextSimuladoId) {
          return state;
        }
        return {
          activeView: nextView,
          currentRoute: nextView,
          targetSimuladoId: nextSimuladoId || state.targetSimuladoId,
        };
      });
    });
  }

  return {
    activeView: initialView,
    currentRoute: initialView,
    activeSubmoduleIndex: 0,
    selectedSubmodule: getInitialSubmodule(),
    sidebarCollapsed: false,
    setActiveView: (view: AppView) => {
      if (typeof window !== 'undefined') {
        try {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        } catch {
          window.scrollTo(0, 0);
        }
        const currentHash = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase();
        if (currentHash !== view) {
          window.location.hash = `#${view}`;
        }
      }
      set({ activeView: view, currentRoute: view });
    },
    setCurrentRoute: (view: AppView) => {
      if (typeof window !== 'undefined') {
        try {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        } catch {
          window.scrollTo(0, 0);
        }
        const currentHash = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase();
        if (currentHash !== view) {
          window.location.hash = `#${view}`;
        }
      }
      set({ activeView: view, currentRoute: view });
    },
    setActiveSubmoduleIndex: (index: number) => {
      set({ activeSubmoduleIndex: index });
    },
    setSelectedSubmodule: (subId: string) => {
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem(HNC_LAST_SUBMODULE_KEY, subId);
        } catch {
          // ignore
        }
      }
      set({ selectedSubmodule: subId });
    },
    targetSimuladoId: initialTargetSimulado,
    setTargetSimuladoId: (id?: string) => {
      set({ targetSimuladoId: id });
    },
    navigateToSimulado: (simuladoId?: string) => {
      if (typeof window !== 'undefined') {
        try {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        } catch {
          window.scrollTo(0, 0);
        }
        const targetHash = simuladoId ? `simulado?id=${simuladoId}` : 'simulado';
        const currentHash = window.location.hash.replace(/^#\/?/, '').trim();
        if (currentHash !== targetHash) {
          window.location.hash = `#${targetHash}`;
        }
      }
      set({
        activeView: 'simulado',
        currentRoute: 'simulado',
        targetSimuladoId: simuladoId,
      });
    },
    toggleSidebar: () => {
      set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed }));
    },
    setSidebarCollapsed: (collapsed: boolean) => {
      set({ sidebarCollapsed: collapsed });
    },
  };
});
