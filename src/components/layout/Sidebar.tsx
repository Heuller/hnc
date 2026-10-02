import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ChevronRight, ChevronDown, CheckCircle2, Circle } from 'lucide-react';
import { useNavigationStore } from '../../store/useNavigationStore';
import { useProgressStore } from '../../store/useProgressStore';
import { COURSE_REGISTRY } from '../../content/registry';
import { getModuleTheme } from '../../domain/moduleThemes';
import { ModuleBadge } from '../common/ModuleBadge';
import { ModuleProgressRing } from '../common/ModuleProgressRing';
import { getMacroModuloProgressoPercent, getSubmodulosLidosCount } from '../../domain/metrics';

export const Sidebar: React.FC = () => {
  const {
    activeView,
    setActiveView,
    selectedSubmodule,
    setSelectedSubmodule,
    sidebarCollapsed,
    toggleSidebar,
  } = useNavigationStore();

  const { modulosLidosIds } = useProgressStore();

  // Mapeia qual módulo pai contém o submódulo selecionado
  const activeModuleOfSub =
    COURSE_REGISTRY.find((m) =>
      m.modulosFilhos.some((s) => s.numero === selectedSubmodule)
    )?.id || 'm1';

  // Controle de quais módulos foram alternados manualmente pelo usuário
  const [userToggledModules, setUserToggledModules] = useState<Record<string, boolean>>({});

  const isModuleExpanded = (moduleId: string) => {
    if (userToggledModules[moduleId] !== undefined) {
      return userToggledModules[moduleId];
    }
    return moduleId === activeModuleOfSub;
  };

  const toggleModuleExpand = (moduleId: string) => {
    setUserToggledModules((prev) => ({
      ...prev,
      [moduleId]: !isModuleExpanded(moduleId),
    }));
  };

  const handleSelectSubmodule = (subNumero: string) => {
    setSelectedSubmodule(subNumero);
    setActiveView('teoria');
  };

  // Separação entre módulos "Em Estudo" e "Planejados / A Estudar" (Parte C)
  const modulosEmEstudo = COURSE_REGISTRY.filter((m) => {
    const lidos = getSubmodulosLidosCount(m, modulosLidosIds);
    const hasActive = m.modulosFilhos.some((s) => s.numero === selectedSubmodule);
    return lidos > 0 || hasActive || m.id === 'm1';
  });

  const modulosPlanejados = COURSE_REGISTRY.filter(
    (m) => !modulosEmEstudo.some((em) => em.id === m.id)
  );

  // Trilho de ícones recolhido (72px) para viewports intermediárias ou preferência do usuário (Parte E)
  if (sidebarCollapsed) {
    return (
      <aside
        className="w-[72px] shrink-0 hidden lg:flex flex-col items-center bg-surface border-r border-border overflow-y-auto sticky top-16 h-[calc(100vh-4rem)] py-4 transition-all scrollbar-thin space-y-3 select-none print:hidden"
        aria-label="Trilha de Módulos (Recolhida)"
      >
        <button
          type="button"
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-surface-2 text-ink transition-colors border border-transparent hover:border-border cursor-pointer"
          title="Expandir barra lateral"
          aria-label="Expandir barra lateral"
        >
          <BookOpen className="w-5 h-5 text-accent" />
        </button>

        <div className="w-8 h-px bg-border my-1" />

        <div className="space-y-2.5 w-full flex flex-col items-center">
          {COURSE_REGISTRY.map((modulo) => {
            const theme = getModuleTheme(modulo.id);
            const hasActiveSub = modulo.modulosFilhos.some(
              (s) => s.numero === selectedSubmodule && activeView === 'teoria'
            );
            const totalSubs = modulo.modulosFilhos.length;
            const completedSubs = getSubmodulosLidosCount(modulo, modulosLidosIds);
            const moduloPercent = getMacroModuloProgressoPercent(modulo, modulosLidosIds);

            return (
              <button
                key={modulo.id}
                type="button"
                onClick={() => {
                  setSelectedSubmodule(modulo.modulosFilhos[0].numero);
                  setActiveView('teoria');
                }}
                className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer relative group ${
                  hasActiveSub
                    ? 'border-2 shadow-editorial-sm'
                    : 'bg-surface-2/60 border border-border hover:border-border-subtle'
                }`}
                style={{
                  borderColor: hasActiveSub ? theme.solidVar : undefined,
                  backgroundColor: hasActiveSub ? theme.softVar : undefined,
                }}
                title={`${modulo.codigo}: ${modulo.titulo} (${completedSubs}/${totalSubs})`}
                aria-label={`${modulo.codigo}: ${modulo.titulo}`}
              >
                <span
                  className="font-mono text-xs font-bold"
                  style={{ color: hasActiveSub ? theme.solidVar : 'var(--ink)' }}
                >
                  {modulo.codigo}
                </span>

                <ModuleProgressRing
                  moduleId={modulo.id}
                  progressPercent={moduloPercent}
                  size={18}
                  strokeWidth={2.5}
                  className="mt-0.5"
                />

                {/* Tooltip flutuante no hover */}
                <div className="absolute left-[54px] top-1/2 -translate-y-1/2 bg-surface text-ink text-xs font-sans rounded-lg p-2.5 shadow-lg border border-border whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-50">
                  <div className="flex items-center gap-1.5 mb-1">
                    <ModuleBadge moduleId={modulo.id} size="sm" />
                    <span className="font-bold">{modulo.titulo}</span>
                  </div>
                  <div className="text-[11px] text-ink-2">
                    {completedSubs} de {totalSubs} submódulos concluídos ({moduloPercent}%)
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </aside>
    );
  }

  const renderModuleCard = (modulo: typeof COURSE_REGISTRY[0]) => {
    const theme = getModuleTheme(modulo.id);
    const isExpanded = isModuleExpanded(modulo.id);
    const hasActiveSub = modulo.modulosFilhos.some(
      (s) => s.numero === selectedSubmodule && activeView === 'teoria'
    );
    const totalSubs = modulo.modulosFilhos.length;
    const completedSubs = getSubmodulosLidosCount(modulo, modulosLidosIds);
    const moduloPercent = getMacroModuloProgressoPercent(modulo, modulosLidosIds);

    return (
      <div
        key={modulo.id}
        className={`rounded-xl border transition-all overflow-hidden ${
          hasActiveSub
            ? 'shadow-editorial-sm bg-surface'
            : 'bg-surface hover:border-border-subtle'
        }`}
        style={{
          borderColor: hasActiveSub ? theme.solidVar : 'var(--border)',
        }}
      >
        {/* Faixa sutil superior com a cor do módulo (Parte C) */}
        <div
          className="h-1 w-full"
          style={{ backgroundColor: theme.solidVar }}
        />

        {/* Cabeçalho do Macro-Módulo (clicável para acordeão) */}
        <button
          type="button"
          onClick={() => toggleModuleExpand(modulo.id)}
          className="w-full text-left p-3 flex items-start justify-between gap-2.5 cursor-pointer select-none group"
          aria-expanded={isExpanded}
        >
          <div className="flex items-start gap-2.5 min-w-0 flex-1">
            <ModuleBadge moduleId={modulo.id} size="sm" className="mt-0.5 shrink-0" />
            <div className="min-w-0 flex-1">
              <h3 className="text-xs font-bold text-ink leading-snug line-clamp-2 group-hover:text-ink transition-colors">
                {modulo.titulo_curto || modulo.titulo}
              </h3>
              <div className="text-[10px] text-ink-2 font-mono mt-0.5">
                {completedSubs}/{totalSubs} concluídos
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 mt-0.5">
            <ModuleProgressRing
              moduleId={modulo.id}
              progressPercent={moduloPercent}
              size={22}
              strokeWidth={2.5}
            />
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 text-ink-2" />
            ) : (
              <ChevronRight className="w-4 h-4 text-ink-2" />
            )}
          </div>
        </button>

        {/* Submódulos expandidos com animação de altura (Parte D) */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              <div className="space-y-1 p-2 pt-0 border-t border-border/50">
                {modulo.modulosFilhos.map((sub) => {
                  const isSelected =
                    activeView === 'teoria' && selectedSubmodule === sub.numero;
                  const isLido = modulosLidosIds.includes(sub.id);

                  return (
                    <motion.button
                      key={sub.id}
                      type="button"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSelectSubmodule(sub.numero)}
                      className={`w-full text-left p-2 rounded-lg text-xs flex items-center justify-between transition-all cursor-pointer ${
                        isSelected
                          ? 'font-bold shadow-2xs'
                          : 'text-ink-2 hover:text-ink hover:bg-surface-2'
                      }`}
                      style={{
                        backgroundColor: isSelected ? theme.softVar : undefined,
                        borderLeft: isSelected ? `3px solid ${theme.solidVar}` : '3px solid transparent',
                      }}
                    >
                      <div className="pr-2 flex items-start gap-2 flex-1 min-w-0">
                        {isLido ? (
                          <CheckCircle2
                            className="w-3.5 h-3.5 shrink-0 mt-0.5"
                            style={{ color: theme.solidVar }}
                          />
                        ) : (
                          <Circle className="w-3 h-3 text-border shrink-0 mt-0.5 stroke-[2.5]" />
                        )}
                        <span
                          className="font-mono font-semibold shrink-0"
                          style={{ color: isSelected ? theme.solidVar : 'inherit' }}
                        >
                          {sub.numero}
                        </span>
                        <span className="line-clamp-2 leading-snug text-ink flex-1">
                          {sub.titulo_curto || sub.titulo}
                        </span>
                      </div>
                      <ChevronRight
                        className={`w-3.5 h-3.5 shrink-0 ${
                          isSelected ? 'opacity-100' : 'opacity-30'
                        }`}
                        style={{ color: isSelected ? theme.solidVar : undefined }}
                      />
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <aside
      className="w-[280px] shrink-0 hidden lg:block bg-surface border-r border-border overflow-y-auto sticky top-16 h-[calc(100vh-4rem)] p-3.5 transition-all scrollbar-thin select-none print:hidden"
      aria-label="Trilha de Módulos do Curso"
    >
      <div className="space-y-5">
        {/* Header da Trilha */}
        <div className="flex items-center justify-between pb-3 border-b border-border">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-accent" aria-hidden="true" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-ink">
              Trilha de Módulos
            </h2>
          </div>
          <span className="text-[11px] font-mono font-semibold text-ink-2 bg-surface-2 px-2 py-0.5 rounded border border-border">
            10 Blocos
          </span>
        </div>

        {/* Grupo 1: Em Estudo */}
        <div className="space-y-2.5">
          <div className="text-[11px] font-sans font-bold uppercase tracking-wider text-ink-2 flex items-center justify-between px-1">
            <span>Em Estudo</span>
            <span className="font-mono text-[10px] text-accent font-semibold">
              {modulosEmEstudo.length} bloco{modulosEmEstudo.length > 1 ? 's' : ''}
            </span>
          </div>

          <div className="space-y-2">
            {modulosEmEstudo.map(renderModuleCard)}
          </div>
        </div>

        {/* Grupo 2: Próximos Blocos */}
        {modulosPlanejados.length > 0 && (
          <div className="space-y-2.5 pt-2 border-t border-border">
            <div className="text-[11px] font-sans font-bold uppercase tracking-wider text-ink-2 flex items-center justify-between px-1">
              <span>Próximos Blocos</span>
              <span className="font-mono text-[10px] text-ink-2">
                {modulosPlanejados.length}
              </span>
            </div>

            <div className="space-y-2">
              {modulosPlanejados.map(renderModuleCard)}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
