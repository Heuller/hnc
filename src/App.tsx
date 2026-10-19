import React, { Suspense, lazy, useEffect } from 'react';
import { AppShell } from './components/layout/AppShell';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { useNavigationStore } from './store/useNavigationStore';
import { useAuthStore } from './store/useAuthStore';
import { AuthGate } from './components/auth/AuthGate';

import { PainelPage } from './pages/PainelPage';

// Carregador resiliente a novos deploys e falhas transientes de rede
function lazyWithRetry<T extends React.ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>
) {
  return lazy(async () => {
    const pageHasAlreadyBeenReloaded = sessionStorage.getItem('hnc_chunk_reload');
    try {
      const component = await componentImport();
      sessionStorage.removeItem('hnc_chunk_reload');
      return component;
    } catch (error) {
      if (!pageHasAlreadyBeenReloaded) {
        sessionStorage.setItem('hnc_chunk_reload', 'true');
        window.location.reload();
        return new Promise<{ default: T }>(() => {});
      }
      sessionStorage.removeItem('hnc_chunk_reload');
      throw error;
    }
  });
}

const TeoriaPage = lazyWithRetry(() =>
  import('./pages/TeoriaPage').then((m) => ({ default: m.TeoriaPage }))
);
const JornadaPage = lazyWithRetry(() =>
  import('./pages/JornadaPage').then((m) => ({ default: m.JornadaPage }))
);
const TreinosPage = lazyWithRetry(() =>
  import('./pages/TreinosPage').then((m) => ({ default: m.TreinosPage }))
);
const DiscursivaPage = lazyWithRetry(() =>
  import('./pages/DiscursivaPage').then((m) => ({ default: m.DiscursivaPage }))
);
const SimuladoPage = lazyWithRetry(() =>
  import('./pages/SimuladoPage').then((m) => ({ default: m.SimuladoPage }))
);
const RadarPage = lazyWithRetry(() =>
  import('./pages/RadarPage').then((m) => ({ default: m.RadarPage }))
);
const ProgressoPage = lazyWithRetry(() =>
  import('./pages/ProgressoPage').then((m) => ({ default: m.ProgressoPage }))
);
const DesignSystemPage = lazyWithRetry(() =>
  import('./pages/DesignSystemPage').then((m) => ({ default: m.DesignSystemPage }))
);
const DevRascunhosPage = lazyWithRetry(() =>
  import('./pages/DevRascunhosPage').then((m) => ({ default: m.DevRascunhosPage }))
);
const CadernoErrosPage = lazyWithRetry(() =>
  import('./pages/CadernoErrosPage').then((m) => ({ default: m.CadernoErrosPage }))
);
const EditalPage = lazyWithRetry(() =>
  import('./pages/EditalPage').then((m) => ({ default: m.EditalPage }))
);
const FolhaVesperaPage = lazyWithRetry(() =>
  import('./pages/FolhaVesperaPage').then((m) => ({ default: m.FolhaVesperaPage }))
);

const PageSkeletonLoader = () => (
  <div className="max-w-4xl mx-auto space-y-6 py-6 animate-pulse" aria-live="polite">
    <div className="space-y-2">
      <div className="h-4 w-32 bg-surface-2 rounded" />
      <div className="h-8 w-3/4 bg-surface-2 rounded-lg" />
      <div className="h-4 w-1/2 bg-surface-2 rounded" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="h-28 bg-surface-2 rounded-xl" />
      <div className="h-28 bg-surface-2 rounded-xl" />
      <div className="h-28 bg-surface-2 rounded-xl" />
    </div>
    <div className="h-64 bg-surface-2 rounded-xl" />
  </div>
);

export function App() {
  const { activeView } = useNavigationStore();
  const { user, loading, initialize: initAuth } = useAuthStore();

  useEffect(() => {
    const unsubscribe = initAuth();
    return () => {
      unsubscribe();
    };
  }, [initAuth]);

  // Garante posicionamento no topo a cada transição de rota
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } catch {
      window.scrollTo(0, 0);
    }
  }, [activeView]);

  if (loading) {
    return (
      <div className="min-h-screen bg-theme-bg flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center gap-3 animate-pulse">
          <div className="w-12 h-12 rounded-xl bg-primary text-primary-text flex items-center justify-center font-bold text-sm shadow-editorial-sm">
            HNC
          </div>
          <p className="text-xs text-theme-ink-2 font-mono">Carregando ambiente...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <AuthGate />;
  }

  const renderActiveView = () => {
    switch (activeView) {
      case 'edital':
        return <EditalPage />;
      case 'painel':
        return <PainelPage />;
      case 'jornada':
        return <JornadaPage />;
      case 'treinos':
        return <TreinosPage />;
      case 'teoria':
        return <TeoriaPage />;
      case 'simulado':
        return <SimuladoPage />;
      case 'radar':
        return <RadarPage />;
      case 'progresso':
        return <ProgressoPage />;
      case 'caderno-erros':
        return <CadernoErrosPage />;
      case 'folha-vespera':
        return <FolhaVesperaPage />;
      case 'discursiva':
        return <DiscursivaPage />;
      case 'design-system':
        return import.meta.env.DEV ? <DesignSystemPage /> : <PainelPage />;
      case 'dev-rascunhos':
        return <DevRascunhosPage />;
      default:
        return <PainelPage />;
    }
  };

  return (
    <AppShell>
      <ErrorBoundary>
        <div key={activeView} className="w-full animate-fadeIn">
          <Suspense fallback={<PageSkeletonLoader />}>
            {renderActiveView()}
          </Suspense>
        </div>
      </ErrorBoundary>
    </AppShell>
  );
}

export default App;
