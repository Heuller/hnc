import { Suspense, lazy } from 'react';
import { AppShell } from './components/layout/AppShell';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { useNavigationStore } from './store/useNavigationStore';

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

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[300px]" aria-live="polite">
    <div className="flex flex-col items-center gap-2">
      <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      <span className="text-xs font-sans text-ink-2">Carregando conteúdo...</span>
    </div>
  </div>
);

export function App() {
  const { activeView } = useNavigationStore();

  return (
    <AppShell>
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          {activeView === 'painel' && <PainelPage />}
          {activeView === 'teoria' && <TeoriaPage />}
          {activeView === 'simulado' && <SimuladoPage />}
          {activeView === 'radar' && <RadarPage />}
          {activeView === 'progresso' && <ProgressoPage />}
          {activeView === 'design-system' && <DesignSystemPage />}
        </Suspense>
      </ErrorBoundary>
    </AppShell>
  );
}

export default App;
