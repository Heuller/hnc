import { Suspense, lazy, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { AppShell } from './components/layout/AppShell';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { useNavigationStore } from './store/useNavigationStore';
import { useAuthStore } from './store/useAuthStore';
import { AuthGate } from './components/auth/AuthGate';

const PainelPage = lazy(() =>
  import('./pages/PainelPage').then((m) => ({ default: m.PainelPage }))
);
const TeoriaPage = lazy(() =>
  import('./pages/TeoriaPage').then((m) => ({ default: m.TeoriaPage }))
);
const SimuladoPage = lazy(() =>
  import('./pages/SimuladoPage').then((m) => ({ default: m.SimuladoPage }))
);
const RadarPage = lazy(() =>
  import('./pages/RadarPage').then((m) => ({ default: m.RadarPage }))
);
const ProgressoPage = lazy(() =>
  import('./pages/ProgressoPage').then((m) => ({ default: m.ProgressoPage }))
);
const DesignSystemPage = lazy(() =>
  import('./pages/DesignSystemPage').then((m) => ({ default: m.DesignSystemPage }))
);
const DevRascunhosPage = lazy(() =>
  import('./pages/DevRascunhosPage').then((m) => ({ default: m.DevRascunhosPage }))
);
const CadernoErrosPage = lazy(() =>
  import('./pages/CadernoErrosPage').then((m) => ({ default: m.CadernoErrosPage }))
);
const FolhaVesperaPage = lazy(() =>
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
  const shouldReduceMotion = useReducedMotion();
  const { user, loading, initialize: initAuth } = useAuthStore();

  useEffect(() => {
    const unsubscribe = initAuth();
    return () => {
      unsubscribe();
    };
  }, [initAuth]);

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

  return (
    <AppShell>
      <ErrorBoundary>
        <Suspense fallback={<PageSkeletonLoader />}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {activeView === 'painel' && <PainelPage />}
              {activeView === 'teoria' && <TeoriaPage />}
              {activeView === 'simulado' && <SimuladoPage />}
              {activeView === 'radar' && <RadarPage />}
              {activeView === 'progresso' && <ProgressoPage />}
              {activeView === 'caderno-erros' && <CadernoErrosPage />}
              {activeView === 'folha-vespera' && <FolhaVesperaPage />}
              {activeView === 'design-system' && import.meta.env.DEV && <DesignSystemPage />}
              {activeView === 'dev-rascunhos' && <DevRascunhosPage />}
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </ErrorBoundary>
    </AppShell>
  );
}

export default App;
