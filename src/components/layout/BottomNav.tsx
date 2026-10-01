import React from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, BookOpen, Award, BarChart3, TrendingUp, Lock } from 'lucide-react';
import { useNavigationStore, type AppView } from '../../store/useNavigationStore';
import { useProgressStore } from '../../store/useProgressStore';
import { COURSE_REGISTRY } from '../../content/registry';

import { checkSimuladoAccess } from '../../domain/learningEngine';

export const BottomNav: React.FC = () => {
  const { activeView, setActiveView } = useNavigationStore();
  const { secoesVisualizadas, checkpointsRespondidos, devBypassSimuladoLock } =
    useProgressStore();

  // No macro-módulo M1, simulado bloqueado até concluir os 4 submódulos (regra pedagógica)
  const m1Submodules = COURSE_REGISTRY[0].modulosFilhos;
  const accessControl = checkSimuladoAccess(
    m1Submodules,
    secoesVisualizadas || {},
    checkpointsRespondidos || {},
    devBypassSimuladoLock
  );
  const isSimuladoLocked = !accessControl.isUnlocked;

  const tabs: {
    view: AppView;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    locked?: boolean;
  }[] = [
    { view: 'painel', label: 'Painel', icon: LayoutDashboard },
    { view: 'teoria', label: 'Teoria', icon: BookOpen },
    { view: 'simulado', label: 'Simulado', icon: Award, locked: isSimuladoLocked },
    { view: 'radar', label: 'Radar', icon: BarChart3 },
    { view: 'progresso', label: 'Progresso', icon: TrendingUp },
  ];

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-t border-border shadow-[0_-4px_16px_rgba(0,0,0,0.06)]"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
      aria-label="Navegação móvel inferior"
    >
      <div className="grid grid-cols-5 h-16 w-full max-w-lg mx-auto relative px-1">
        {tabs.map((tab) => {
          const isActive = activeView === tab.view;
          const Icon = tab.icon;

          return (
            <button
              key={tab.view}
              type="button"
              onClick={() => setActiveView(tab.view)}
              className={`relative flex flex-col items-center justify-center gap-1 transition-all select-none min-h-[44px] min-w-[44px] py-1 px-0.5 cursor-pointer ${
                isActive
                  ? 'text-ink font-bold'
                  : 'text-ink-2 hover:text-ink font-medium'
              }`}
              aria-current={isActive ? 'page' : undefined}
              aria-label={tab.label}
            >
              {/* Indicador deslizante suave (layoutId) */}
              {isActive && (
                <motion.span
                  layoutId="bottomNavIndicator"
                  className="absolute inset-1 rounded-xl bg-surface-2/80 -z-10 shadow-2xs border border-border/50"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}

              <div className="relative">
                <Icon
                  className={`w-5 h-5 transition-transform ${
                    isActive ? 'text-accent stroke-[2.4] scale-110' : 'stroke-[1.8]'
                  }`}
                />
                {tab.locked && (
                  <span className="absolute -top-1 -right-1.5 w-3 h-3 rounded-full bg-surface-2 border border-border text-ink-2/80 flex items-center justify-center">
                    <Lock className="w-2 h-2 text-amber-500" />
                  </span>
                )}
              </div>

              <span className="text-[10px] leading-tight tracking-tight truncate max-w-full">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
