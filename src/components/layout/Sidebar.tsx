import React, { useState, useEffect } from 'react';
import { BookOpen, ChevronRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { useNavigationStore } from '../../store/useNavigationStore';
import { useProgressStore } from '../../store/useProgressStore';
import { COURSE_REGISTRY } from '../../content/registry';
import { Badge } from '../common/Badge';

export const Sidebar: React.FC = () => {
  const {
    activeView,
    setActiveView,
    selectedSubmodule,
    setSelectedSubmodule,
    sidebarCollapsed,
  } = useNavigationStore();

  const { modulosLidosIds } = useProgressStore();

  // Mapeia qual módulo pai contém o submódulo selecionado
  const activeModuleOfSub = COURSE_REGISTRY.find((m) =>
    m.modulosFilhos.some((s) => s.numero === selectedSubmodule)
  )?.id || 'm1';

  // Controle de quais módulos estão expandidos no acordeão
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    [activeModuleOfSub]: true,
  });

  // Atualiza expansão quando muda o submódulo
  useEffect(() => {
    if (activeModuleOfSub) {
      setExpandedModules((prev) => ({ ...prev, [activeModuleOfSub]: true }));
    }
  }, [activeModuleOfSub]);

  if (sidebarCollapsed) {
    return null;
  }

  const toggleModuleExpand = (moduleId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }));
  };

  const handleSelectSubmodule = (subNumero: string) => {
    setSelectedSubmodule(subNumero);
    setActiveView('teoria');
  };

  return (
    <aside
      className="w-80 shrink-0 hidden lg:block bg-theme-surface border-r border-theme overflow-y-auto sticky top-16 h-[calc(100vh-4rem)] p-4 transition-all scrollbar-thin"
      aria-label="Trilha de Módulos do Curso"
    >
      <div className="space-y-4">
        {/* Header da Trilha */}
        <div className="flex items-center justify-between pb-3 border-b border-theme">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-theme-accent" aria-hidden="true" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-theme-ink">
              Trilha Completa (M1–M10)
            </h2>
          </div>
          <Badge variant="concluido" size="sm">
            100% no ar
          </Badge>
        </div>

        {/* Lista dos Macro-Módulos */}
        <div className="space-y-2">
          {COURSE_REGISTRY.map((modulo) => {
            const isExpanded = !!expandedModules[modulo.id];
            const hasActiveSub = modulo.modulosFilhos.some(
              (s) => s.numero === selectedSubmodule && activeView === 'teoria'
            );
            const totalSubs = modulo.modulosFilhos.length;
            const completedSubs = modulo.modulosFilhos.filter((s) =>
              modulosLidosIds.includes(s.id)
            ).length;

            return (
              <div
                key={modulo.id}
                className={`rounded-lg border transition-all ${
                  hasActiveSub
                    ? 'border-theme-accent/60 bg-theme-surface-2 shadow-editorial-sm'
                    : 'border-theme bg-theme-surface hover:border-theme-accent/40'
                }`}
              >
                {/* Cabeçalho do Macro-Módulo (clicável para expandir/recolher) */}
                <button
                  type="button"
                  onClick={() => toggleModuleExpand(modulo.id)}
                  className="w-full text-left p-3 flex items-start justify-between gap-2 cursor-pointer select-none"
                  aria-expanded={isExpanded}
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-theme-accent">
                        {modulo.codigo}
                      </span>
                      {completedSubs === totalSubs && totalSubs > 0 && (
                        <span className="inline-flex items-center gap-0.5 text-[10px] text-theme-ok font-medium">
                          <CheckCircle2 className="w-3 h-3" />
                          Concluído
                        </span>
                      )}
                    </div>
                    <h3 className="text-xs font-bold text-theme-ink leading-snug line-clamp-2">
                      {modulo.titulo}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
                    <span className="font-mono text-[10px] text-theme-ink-2">
                      {completedSubs}/{totalSubs}
                    </span>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-theme-ink-2" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-theme-ink-2" />
                    )}
                  </div>
                </button>

                {/* Submódulos expandidos */}
                {isExpanded && (
                  <div className="space-y-1 p-2 pt-0 border-t border-theme/60">
                    {modulo.modulosFilhos.map((sub) => {
                      const isSelected =
                        activeView === 'teoria' && selectedSubmodule === sub.numero;
                      const isLido = modulosLidosIds.includes(sub.id);

                      return (
                        <button
                          key={sub.id}
                          type="button"
                          onClick={() => handleSelectSubmodule(sub.numero)}
                          className={`w-full text-left p-2 rounded text-xs flex items-center justify-between transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-theme-accent/10 text-theme-ink font-bold border border-theme-accent/40 shadow-editorial-sm'
                              : 'text-theme-ink-2 hover:text-theme-ink hover:bg-theme-surface-2'
                          }`}
                        >
                          <span className="truncate pr-2 flex items-center gap-1.5">
                            {isLido ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-theme-ok shrink-0" />
                            ) : (
                              <span className="w-1.5 h-1.5 rounded-full bg-theme-ink-2/40 shrink-0" />
                            )}
                            <span className="font-mono font-semibold text-theme-accent shrink-0">
                              {sub.numero}
                            </span>
                            <span className="truncate">{sub.titulo}</span>
                          </span>
                          <ChevronRight
                            className={`w-3.5 h-3.5 shrink-0 ${
                              isSelected ? 'text-theme-accent' : 'opacity-30'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
