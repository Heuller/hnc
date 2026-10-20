import React from 'react';
import { motion } from 'motion/react';
import { useNavigationStore } from '../../store/useNavigationStore';
import { ABAS_PRINCIPAIS, isDestinoAtivo } from '../../config/rotas';

export const BottomNav: React.FC = () => {
  const { activeView, setActiveView } = useNavigationStore();

  return (
    <nav
      className="md:hidden fixed inset-x-0 bottom-0 z-40 bg-surface/95 backdrop-blur-md border-t border-border shadow-[0_-4px_16px_rgba(0,0,0,0.06)] print:hidden w-full"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
      aria-label="Navegação móvel inferior"
    >
      <div className="grid grid-cols-5 h-16 w-full max-w-lg mx-auto relative px-0.5 sm:px-1">
        {ABAS_PRINCIPAIS.map((tab) => {
          const isActive = isDestinoAtivo(tab.id, activeView);
          const Icon = tab.icone;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveView(tab.rotaPadrao)}
              className={`relative flex flex-col items-center justify-center gap-1 transition-all select-none min-h-[44px] min-w-0 w-full py-1 px-0.5 cursor-pointer ${
                isActive
                  ? 'text-ink font-bold'
                  : 'text-ink-2 hover:text-ink font-medium'
              }`}
              aria-current={isActive ? 'page' : undefined}
              aria-label={tab.rotulo}
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
              </div>

              <span className="text-xs leading-tight tracking-normal truncate max-w-full">
                {tab.rotulo}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
