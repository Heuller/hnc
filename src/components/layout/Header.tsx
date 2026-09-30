import React from 'react';
import { BookOpen, Award, BarChart3, LayoutDashboard, PanelLeftClose, PanelLeftOpen, Palette, TrendingUp } from 'lucide-react';
import { CONCURSO_CONFIG } from '../../config/concurso.config';
import { useNavigationStore, type AppView } from '../../store/useNavigationStore';
import { ThemeToggle } from './ThemeToggle';

export const Header: React.FC = () => {
  const { activeView, setActiveView, sidebarCollapsed, toggleSidebar } = useNavigationStore();

  const navItems: { view: AppView; label: string; icon: React.ReactNode }[] = [
    { view: 'painel', label: 'Painel', icon: <LayoutDashboard className="w-4 h-4" /> },
    { view: 'teoria', label: 'Teoria', icon: <BookOpen className="w-4 h-4" /> },
    { view: 'simulado', label: 'Simulado 100Q', icon: <Award className="w-4 h-4" /> },
    { view: 'radar', label: 'Radar Cebraspe', icon: <BarChart3 className="w-4 h-4" /> },
    { view: 'progresso', label: 'Progresso', icon: <TrendingUp className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-theme-surface/95 backdrop-blur-md border-b border-theme transition-colors shadow-editorial-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Left: Brand & Sidebar Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="hidden lg:flex touch-target p-2 rounded-md hover:bg-theme-surface-2 text-theme-ink transition-colors border border-transparent hover:border-theme"
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
            <div className="w-9 h-9 rounded-md bg-theme-primary text-theme-primary-contrast flex items-center justify-center font-bold text-sm select-none shadow-editorial-sm">
              {CONCURSO_CONFIG.plataforma.sigla}
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm sm:text-base text-theme-ink leading-tight">
                  {CONCURSO_CONFIG.plataforma.nome}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-theme-surface-2 text-theme-ink-2 border border-theme">
                  {CONCURSO_CONFIG.banca.nome}
                </span>
              </div>
              <p className="text-[11px] text-theme-ink-2 hidden sm:block leading-tight">
                {CONCURSO_CONFIG.cargo.titulo} • {CONCURSO_CONFIG.cargo.atribuicao}
              </p>
            </div>
          </button>
        </div>

        {/* Center: Desktop Navigation Tabs */}
        <nav
          className="hidden md:flex items-center gap-1 p-1 rounded-md bg-theme-surface-2 border border-theme"
          aria-label="Navegação principal"
        >
          {navItems.map((item) => {
            const isActive = activeView === item.view;
            return (
              <button
                key={item.view}
                onClick={() => setActiveView(item.view)}
                className={`touch-target px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-theme-surface text-theme-ink font-bold shadow-editorial-sm border border-theme'
                    : 'text-theme-ink-2 hover:text-theme-ink hover:bg-theme-surface/50 border border-transparent'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right: Design System Specimen & Theme Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveView('design-system')}
            className={`touch-target p-2 rounded-md transition-colors border ${
              activeView === 'design-system'
                ? 'bg-theme-primary text-theme-primary-contrast border-theme'
                : 'text-theme-ink-2 hover:text-theme-ink hover:bg-theme-surface-2 border-transparent'
            }`}
            title="Design System 'Papel e Tinta'"
            aria-label="Página de Design System"
          >
            <Palette className="w-4 h-4" />
          </button>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
