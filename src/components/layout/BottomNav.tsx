import React from 'react';
import { LayoutDashboard, BookOpen, Award, BarChart3 } from 'lucide-react';
import { useNavigationStore, type AppView } from '../../store/useNavigationStore';

export const BottomNav: React.FC = () => {
  const { activeView, setActiveView } = useNavigationStore();

  const tabs: { view: AppView; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { view: 'painel', label: 'Painel', icon: LayoutDashboard },
    { view: 'teoria', label: 'Teoria', icon: BookOpen },
    { view: 'simulado', label: 'Simulado', icon: Award },
    { view: 'radar', label: 'Radar', icon: BarChart3 },
  ];

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-theme-surface/95 backdrop-blur-md border-t border-theme shadow-[0_-4px_16px_rgba(0,0,0,0.06)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      aria-label="Navegação móvel inferior"
    >
      <div className="grid grid-cols-4 h-16 max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive = activeView === tab.view;
          const Icon = tab.icon;

          return (
            <button
              key={tab.view}
              onClick={() => setActiveView(tab.view)}
              className={`touch-target flex flex-col items-center justify-center gap-1 transition-colors select-none ${
                isActive
                  ? 'text-theme-ink font-bold'
                  : 'text-theme-ink-2 hover:text-theme-ink'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'text-theme-accent stroke-[2.4]' : 'stroke-[1.8]'}`} />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-theme-accent" />
                )}
              </div>
              <span className="text-[11px] leading-none">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
