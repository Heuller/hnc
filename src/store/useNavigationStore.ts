import { create } from 'zustand';

export type AppView = 'painel' | 'teoria' | 'simulado' | 'radar' | 'progresso' | 'design-system';

interface NavigationState {
  activeView: AppView;
  currentRoute: AppView;
  activeSubmoduleIndex: number;
  selectedSubmodule: string;
  sidebarCollapsed: boolean;
  setActiveView: (view: AppView) => void;
  setCurrentRoute: (view: AppView) => void;
  setActiveSubmoduleIndex: (index: number) => void;
  setSelectedSubmodule: (subId: string) => void;
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
}

function getViewFromHash(): AppView {
  if (typeof window === 'undefined') return 'painel';
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash.startsWith('teoria')) return 'teoria';
  if (hash.startsWith('simulado')) return 'simulado';
  if (hash.startsWith('radar')) return 'radar';
  if (hash.startsWith('progresso')) return 'progresso';
  if (hash.startsWith('design-system')) return 'design-system';
  if (hash.startsWith('painel')) return 'painel';
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
      const submodules = ['1.1', '1.2', '1.3', '1.4'];
      const subId = submodules[index] || '1.1';
      set({ activeSubmoduleIndex: index, selectedSubmodule: subId });
    },
    setSelectedSubmodule: (subId: string) => {
      const submodules = ['1.1', '1.2', '1.3', '1.4'];
      const idx = submodules.indexOf(subId);
      set({ selectedSubmodule: subId, activeSubmoduleIndex: idx >= 0 ? idx : 0 });
    },
    toggleSidebar: () => {
      set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed }));
    },
    setSidebarCollapsed: (collapsed: boolean) => {
      set({ sidebarCollapsed: collapsed });
    },
  };
});
