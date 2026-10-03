import { Suspense, lazy, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { AppShell } from './components/layout/AppShell';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { useNavigationStore } from './store/useNavigationStore';
import { useAuthStore } from './store/useAuthStore';
import { AuthGate } from './components/auth/AuthGate';

import { PainelPage } from './pages/PainelPage';
const TeoriaPage = lazy(() =>
  import('./pages/TeoriaPage').then((m) => ({ default: m.TeoriaPage }))
);
const JornadaPage = lazy(() =>
  import('./pages/JornadaPage').then((m) => ({ default: m.JornadaPage }))
);
const TreinosPage = lazy(() =>
  import('./pages/TreinosPage').then((m) => ({ default: m.TreinosPage }))
);
const DiscursivaPage = lazy(() =>
  import('./pages/DiscursivaPage').then((m) => ({ default: m.DiscursivaPage }))
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

  const renderActiveView = () => {
    switch (activeView) {
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
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeView}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="w-full"
          >
            <Suspense fallback={<PageSkeletonLoader />}>
              {renderActiveView()}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </ErrorBoundary>
    </AppShell>
  );
}

export default App;
