import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Award, BarChart3, LayoutDashboard, PanelLeftClose, PanelLeftOpen, Palette, TrendingUp, Search } from 'lucide-react';
import { CONCURSO_CONFIG } from '../../config/concurso.config';
import { useNavigationStore, type AppView } from '../../store/useNavigationStore';
import { ThemeToggle } from './ThemeToggle';
import { MobileModulesDrawer } from './MobileModulesDrawer';
import { MobileMoreMenu } from './MobileMoreMenu';

interface HeaderProps {
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const { activeView, setActiveView, sidebarCollapsed, toggleSidebar, selectedSubmodule } = useNavigationStore();
  const [isModulesDrawerOpen, setIsModulesDrawerOpen] = useState(false);

  const navItems: { view: AppView; label: string; icon: React.ReactNode }[] = [
    { view: 'painel', label: 'Painel', icon: <LayoutDashboard className="w-4 h-4" /> },
    { view: 'teoria', label: 'Teoria', icon: <BookOpen className="w-4 h-4" /> },
    { view: 'simulado', label: 'Simulado 100Q', icon: <Award className="w-4 h-4" /> },
    { view: 'radar', label: 'Radar Cebraspe', icon: <BarChart3 className="w-4 h-4" /> },
    { view: 'progresso', label: 'Progresso', icon: <TrendingUp className="w-4 h-4" /> },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-surface/95 backdrop-blur-md border-b border-border transition-colors shadow-editorial-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-3">
          {/* MOBILE HEADER (Uma linha compacta: Botão Módulos + Título Curto + Menu Mais) */}
          <div className="flex md:hidden items-center justify-between w-full">
            <button
              type="button"
              onClick={() => setIsModulesDrawerOpen(true)}
              className="flex items-center gap-1.5 py-1.5 px-2.5 rounded-lg bg-surface-2 border border-border text-ink text-xs font-semibold cursor-pointer min-h-[44px] min-w-[44px]"
              aria-label="Abrir grade de módulos"
            >
              <BookOpen className="w-4 h-4 text-accent" />
              <span>Módulos</span>
            </button>

            <div className="text-center truncate px-2 flex-1">
              <span className="font-bold text-xs text-ink truncate block">
                HNC ·{' '}
                {activeView === 'teoria'
                  ? `Submódulo ${selectedSubmodule}`
                  : activeView === 'simulado'
                  ? 'Simulado'
                  : activeView === 'radar'
                  ? 'Radar'
                  : activeView === 'progresso'
                  ? 'Progresso'
                  : 'Painel'}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={onOpenSearch}
                className="min-h-[44px] min-w-[44px] p-2 rounded-lg text-ink-2 hover:text-ink hover:bg-surface-2 transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Abrir busca global"
              >
                <Search className="w-4 h-4" />
              </button>
              <MobileMoreMenu />
            </div>
          </div>

          {/* DESKTOP HEADER (Brand & Sidebar Toggle) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleSidebar}
              className="hidden lg:flex touch-target p-2 rounded-md hover:bg-surface-2 text-ink transition-colors border border-transparent hover:border-border"
              aria-label={sidebarCollapsed ? 'Expandir barra lateral' : 'Recolher barra lateral'}
              title={sidebarCollapsed ? 'Expandir barra lateral' : 'Recolher barra lateral'}
            >
              {sidebarCollapsed ? (
                <PanelLeftOpen className="w-5 h-5" />
              ) : (
                <PanelLeftClose className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => setActiveView('painel')}
              className="flex items-center gap-2.5 text-left group cursor-pointer"
            >
              {/* Símbolo editorial sóbrio da plataforma */}
              <div className="w-9 h-9 rounded-md bg-primary text-primary-text flex items-center justify-center font-bold text-sm select-none shadow-editorial-sm">
                {CONCURSO_CONFIG.plataforma.sigla}
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-sm sm:text-base text-ink leading-tight">
                    {CONCURSO_CONFIG.plataforma.sigla}
                  </span>
                  <span className="text-ink-2/60 text-xs">/</span>
                  <span className="text-xs font-semibold text-accent capitalize">
                    {activeView === 'teoria'
                      ? `Teoria (${selectedSubmodule})`
                      : activeView === 'simulado'
                      ? 'Simulado 100Q'
                      : activeView === 'radar'
                      ? 'Radar Cebraspe'
                      : activeView === 'progresso'
                      ? 'Progresso'
                      : 'Painel'}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-surface-2 text-ink-2 border border-border hidden sm:inline-block ml-1">
                    {CONCURSO_CONFIG.banca.nome}
                  </span>
                </div>
                <p className="text-[11px] text-ink-2 hidden sm:block leading-tight">
                  {CONCURSO_CONFIG.cargo.titulo} • {CONCURSO_CONFIG.cargo.atribuicao}
                </p>
              </div>
            </button>
          </div>

        {/* Center: Desktop Navigation Tabs */}
        <nav
          className="hidden md:flex items-center gap-1 p-1 rounded-md bg-theme-surface-2 border border-theme relative"
          aria-label="Navegação principal"
        >
          {navItems.map((item) => {
            const isActive = activeView === item.view;
            return (
              <button
                key={item.view}
                onClick={() => setActiveView(item.view)}
                className={`relative px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  isActive
                    ? 'text-ink font-bold'
                    : 'text-ink-2 hover:text-ink'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded bg-surface shadow-editorial-sm border border-border -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {item.icon}
                  <span>{item.label}</span>
                </span>
              </button>
            );
          })}
        </nav>

        {/* Right: Search, DEV tools & Theme Toggle */}
        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg bg-surface-2 border border-border text-ink-2 hover:text-ink hover:border-accent text-xs font-mono transition-colors cursor-pointer"
            title="Busca Global (Ctrl+K)"
            aria-label="Abrir busca global"
          >
            <Search className="w-3.5 h-3.5 text-accent" />
            <span className="font-sans text-xs">Buscar</span>
            <span className="text-[10px] px-1 py-0.5 rounded bg-surface border border-border font-bold text-ink-2">
              ⌘K
            </span>
          </button>
          {import.meta.env.DEV && (
            <>
              <button
                onClick={() => setActiveView('dev-rascunhos')}
                className={`touch-target p-2 rounded-md transition-colors border ${
                  activeView === 'dev-rascunhos'
                    ? 'bg-accent text-accent-text border-border'
                    : 'text-ink-2 hover:text-ink hover:bg-surface-2 border-transparent'
                }`}
                title="Rascunho de Itens Cebraspe (Homologação R4)"
                aria-label="Página de Homologação de Rascunhos Cebraspe"
              >
                <BookOpen className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveView('design-system')}
                className={`touch-target p-2 rounded-md transition-colors border ${
                  activeView === 'design-system'
                    ? 'bg-primary text-primary-text border-border'
                    : 'text-ink-2 hover:text-ink hover:bg-surface-2 border-transparent'
                }`}
                title="Design System (somente em desenvolvimento)"
                aria-label="Página de Design System DEV"
              >
                <Palette className="w-4 h-4" />
              </button>
            </>
          )}

          <ThemeToggle />
        </div>
      </div>
    </header>

      <MobileModulesDrawer
        isOpen={isModulesDrawerOpen}
        onClose={() => setIsModulesDrawerOpen(false)}
      />
    </>
  );
};
