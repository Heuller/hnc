import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen, ChevronRight, CheckCircle2, Circle, Lock } from 'lucide-react';
import { ALL_COURSE_MODULES } from '../../content/registry';
import { getModuleTheme } from '../../domain/moduleThemes';
import { ModuleBadge } from '../common/ModuleBadge';
import { ModuleProgressRing } from '../common/ModuleProgressRing';
import { useProgressStore } from '../../store/useProgressStore';
import { useNavigationStore } from '../../store/useNavigationStore';
import { deduplicarSubmodulos } from '../../domain/progressCore';

interface MobileModulesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileModulesDrawer: React.FC<MobileModulesDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const { setSelectedSubmodule, setActiveView, selectedSubmodule, setCurrentRoute } = useNavigationStore();
  const { modulosLidosIds, getProgressCore } = useProgressStore();
  const progressCore = getProgressCore();
  const { modulosStatus, isSubmoduloBloqueado } = progressCore;

  const handleSelectSub = (subNumero: string) => {
    if (isSubmoduloBloqueado(subNumero)) {
      setCurrentRoute('jornada');
      onClose();
      return;
    }
    setSelectedSubmodule(subNumero);
    setActiveView('teoria');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-modules-title"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          className="fixed inset-0 z-50 flex flex-col bg-surface text-ink lg:hidden"
          style={{ height: '100dvh' }}
        >
          {/* Header da Gaveta Móvel */}
          <header className="h-14 px-4 border-b border-border flex items-center justify-between shrink-0 bg-surface/95 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-accent" />
              <h2 id="mobile-modules-title" className="text-sm font-bold tracking-tight text-ink">
                Grade Curricular (M1–M14)
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-ink-2 hover:text-ink hover:bg-surface-2 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Fechar painel de módulos"
            >
              <X className="w-5 h-5" />
            </button>
          </header>

          {/* Conteúdo com rolagem suave */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin"
            style={{ paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 24px)' }}
          >
            {ALL_COURSE_MODULES.map((modulo) => {
              const theme = getModuleTheme(modulo.id);
              const modStatus = modulosStatus[modulo.id];
              const totalSubs = modStatus?.submodulosTotal ?? modulo.modulosFilhos.length;
              const subsLidos = modStatus?.submodulosConcluidos ?? 0;
              const moduloPercent = modStatus?.progressoPercent ?? 0;
              const isBloqueado = modStatus?.isBloqueado ?? false;
              const hasSelectedSub = modulo.modulosFilhos.some(
                (s) => s.numero === selectedSubmodule
              );

              return (
                <div
                  key={modulo.id}
                  className="rounded-xl border border-border bg-surface shadow-xs overflow-hidden"
                  style={{
                    borderColor: hasSelectedSub ? theme.solidVar : undefined,
                    opacity: isBloqueado ? 0.8 : 1,
                  }}
                >
                  {/* Faixa plana 4px na cor do módulo */}
                  <div
                    className="h-1 w-full"
                    style={{ backgroundColor: theme.solidVar }}
                  />

                  {/* Cabeçalho do Bloco */}
                  <div className="p-3.5 border-b border-border/60 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      <ModuleBadge moduleId={modulo.id} size="sm" />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h3 className="text-xs font-bold text-ink truncate">
                            {modulo.titulo}
                          </h3>
                          {isBloqueado && (
                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/25 uppercase tracking-wider">
                              Bloqueado
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-ink-2 font-mono">
                          {subsLidos}/{totalSubs} concluídos ({moduloPercent}%)
                        </span>
                      </div>
                    </div>

                    <ModuleProgressRing
                      moduleId={modulo.id}
                      progressPercent={moduloPercent}
                      size={24}
                      strokeWidth={2.5}
                    />
                  </div>

                  {/* Lista de Submódulos */}
                  <div className="divide-y divide-border/40 p-1">
                    {deduplicarSubmodulos(modulo.modulosFilhos).map((sub) => {
                      const etapaSub = progressCore.etapas[sub.numero];
                      const isLido = etapaSub?.status === 'concluida' || modulosLidosIds.includes(sub.id);
                      const isSelected = selectedSubmodule === sub.numero;
                      const isSubBloq = isSubmoduloBloqueado(sub.numero);

                      return (
                        <button
                          key={sub.numero}
                          type="button"
                          onClick={() => handleSelectSub(sub.numero)}
                          className={`w-full text-left p-2.5 rounded-lg text-xs flex items-center justify-between transition-colors min-h-[44px] cursor-pointer ${
                            isSelected
                              ? 'font-bold shadow-2xs'
                              : isSubBloq
                              ? 'text-ink-2/60 hover:text-ink hover:bg-surface-2 opacity-75'
                              : 'text-ink-2 hover:text-ink hover:bg-surface-2'
                          }`}
                          style={{
                            backgroundColor: isSelected ? theme.softVar : undefined,
                            borderLeft: isSelected ? `3px solid ${theme.solidVar}` : '3px solid transparent',
                          }}
                        >
                          <div className="flex items-start gap-2 min-w-0 flex-1 pr-2">
                            {isLido ? (
                              <CheckCircle2
                                className="w-4 h-4 shrink-0 mt-0.5"
                                style={{ color: theme.solidVar }}
                              />
                            ) : isSubBloq ? (
                              <Lock className="w-3.5 h-3.5 text-ink-2/50 shrink-0 mt-0.5" />
                            ) : (
                              <Circle className="w-3.5 h-3.5 text-border shrink-0 mt-0.5 stroke-[2]" />
                            )}
                            <span
                              className="font-mono font-semibold shrink-0"
                              style={{ color: isSelected ? theme.solidVar : 'inherit' }}
                            >
                              {sub.numero}
                            </span>
                            <span className="text-ink line-clamp-1 leading-snug flex-1">
                              {sub.titulo}
                            </span>
                          </div>

                          <ChevronRight
                            className={`w-4 h-4 shrink-0 ${
                              isSelected ? 'opacity-100' : 'opacity-30'
                            }`}
                            style={{ color: isSelected ? theme.solidVar : undefined }}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
