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

export const useNavigationStore = create<NavigationState>((set, get) => {
  const initialView = getViewFromHash();

  if (typeof window !== 'undefined') {
    window.addEventListener('hashchange', () => {
      const nextView = getViewFromHash();
      if (nextView !== get().activeView) {
        set({ activeView: nextView, currentRoute: nextView });
      }
    });
  }

  return {
    activeView: initialView,
    currentRoute: initialView,
    activeSubmoduleIndex: 0,
    selectedSubmodule: '1.1',
    sidebarCollapsed: false,
    setActiveView: (view: AppView) => {
      if (typeof window !== 'undefined') {
        window.location.hash = `#${view}`;
      }
      set({ activeView: view, currentRoute: view });
    },
    setCurrentRoute: (view: AppView) => {
      if (typeof window !== 'undefined') {
        window.location.hash = `#${view}`;
      }
      set({ activeView: view, currentRoute: view });
    },
    setActiveSubmoduleIndex: (index: number) => {
      set({ activeSubmoduleIndex: index });
    },
    setSelectedSubmodule: (subId: string) => {
      set({ selectedSubmodule: subId });
    },
    targetSimuladoId: undefined,
    setTargetSimuladoId: (id?: string) => {
      set({ targetSimuladoId: id });
    },
    navigateToSimulado: (simuladoId?: string) => {
      if (typeof window !== 'undefined') {
        window.location.hash = '#simulado';
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
