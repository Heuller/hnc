import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  BookOpen,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  Palette,
  Layers,
} from 'lucide-react';
import { CONCURSO_CONFIG } from '../../config/concurso.config';
import { useNavigationStore } from '../../store/useNavigationStore';
import { ThemeToggle } from './ThemeToggle';
import { MobileModulesDrawer } from './MobileModulesDrawer';
import { MobileMoreMenu } from './MobileMoreMenu';
import { ReferenceMenuDropdown } from './ReferenceMenuDropdown';
import { Breadcrumb } from './Breadcrumb';
import { getSearchShortcutLabel } from '../../utils/platform';
import { UserMenuDropdown } from './UserMenuDropdown';
import {
  ABAS_PRINCIPAIS,
  isDestinoAtivo,
  getDesktopHeaderTitle,
  getMobileHeaderTitle,
} from '../../config/rotas';

interface HeaderProps {
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const { activeView, setActiveView, sidebarCollapsed, toggleSidebar, selectedSubmodule } =
    useNavigationStore();
  const [isModulesDrawerOpen, setIsModulesDrawerOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-surface/95 backdrop-blur-md border-b border-border transition-colors shadow-editorial-sm print:hidden">
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

            <div className="text-center truncate px-2 flex-1 min-w-0">
              <span className="font-bold text-xs text-ink truncate block">
                HNC · {getMobileHeaderTitle(activeView, selectedSubmodule)}
              </span>
            </div>

            <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
              <button
                type="button"
                onClick={onOpenSearch}
                className="min-h-[44px] min-w-[40px] p-2 rounded-lg text-ink-2 hover:text-ink hover:bg-surface-2 transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Abrir busca global"
              >
                <Search className="w-4 h-4" />
              </button>
              <ThemeToggle compact={true} />
              <MobileMoreMenu />
            </div>
          </div>

          {/* DESKTOP HEADER: Identidade Visual e Alternador de Barra Lateral */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
            <button
              type="button"
              onClick={toggleSidebar}
              className="hidden lg:flex touch-target p-2 rounded-md hover:bg-surface-2 text-ink transition-colors border border-transparent hover:border-border cursor-pointer"
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
              type="button"
              onClick={() => setActiveView('painel')}
              className="flex items-center gap-2.5 text-left group cursor-pointer shrink-0 whitespace-nowrap"
            >
              <div className="w-9 h-9 rounded-lg bg-primary text-primary-text flex items-center justify-center font-bold text-xs select-none shadow-editorial-sm border border-primary/20 shrink-0">
                <span className="font-serif tracking-widest text-[13px] font-bold">CD</span>
              </div>

              <div className="whitespace-nowrap">
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="font-serif font-bold text-sm sm:text-base text-ink leading-tight tracking-normal whitespace-nowrap">
                    {CONCURSO_CONFIG.plataforma.nome}
                  </span>
                  <span className="text-ink-2/60 text-xs hidden lg:inline">/</span>
                  <span className="text-xs font-semibold text-accent capitalize whitespace-nowrap hidden lg:inline">
                    {getDesktopHeaderTitle(activeView, selectedSubmodule)}
                  </span>
                  <span className="text-xs uppercase font-mono font-bold tracking-wider px-1.5 py-0.5 rounded bg-surface-2 text-ink-2 border border-border hidden 2xl:inline-block ml-1">
                    {CONCURSO_CONFIG.instituicao.sigla} · {CONCURSO_CONFIG.banca.nome}
                  </span>
                </div>
                <p className="text-xs text-ink-2 hidden 2xl:block leading-tight font-sans whitespace-nowrap">
                  {CONCURSO_CONFIG.cargo.titulo} • {CONCURSO_CONFIG.cargo.atribuicao}
                </p>
              </div>
            </button>
          </div>

          {/* Centro: 5 Abas de Navegação Principal Unificadas (P8 / U-01, U-05, U-06) */}
          <nav
            className="hidden md:flex items-center gap-0.5 lg:gap-1 p-1 rounded-md bg-surface-2 border border-border relative shrink-0"
            aria-label="Navegação principal"
          >
            {ABAS_PRINCIPAIS.map((aba) => {
              const isActive = isDestinoAtivo(aba.id, activeView);
              const Icon = aba.icone;

              return (
                <button
                  key={aba.id}
                  type="button"
                  onClick={() => setActiveView(aba.rotaPadrao)}
                  aria-current={isActive ? 'page' : undefined}
                  aria-label={aba.rotulo}
                  className={`relative px-2 sm:px-2.5 xl:px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer select-none ${
                    isActive ? 'text-ink font-bold' : 'text-ink-2 hover:text-ink'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded bg-surface shadow-editorial-sm border border-border z-0"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap shrink-0">
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{aba.rotulo}</span>
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Direita: Menu de Referência, Busca, DEV, Tema e Conta */}
          <div className="hidden md:flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Menu Suspenso de Referência (Oficina Discursiva, Folha de Véspera, Edital Oficial) */}
            <ReferenceMenuDropdown />

            <button
              type="button"
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 py-1.5 px-2.5 rounded-lg bg-surface-2 border border-border text-ink-2 hover:text-ink hover:border-accent text-xs font-mono transition-colors cursor-pointer shrink-0 min-h-[38px]"
              title={`Busca Global (${getSearchShortcutLabel()})`}
              aria-label="Abrir busca global"
            >
              <Search className="w-3.5 h-3.5 text-accent shrink-0" />
              <span className="font-sans text-xs hidden lg:inline">Buscar</span>
              <span className="text-xs px-1 py-0.5 rounded bg-surface border border-border font-bold text-ink-2 whitespace-nowrap">
                {getSearchShortcutLabel()}
              </span>
            </button>

            {import.meta.env.DEV && (
              <>
                <button
                  type="button"
                  onClick={() => setActiveView('dev-rascunhos')}
                  className={`touch-target p-2 rounded-md transition-colors border ${
                    activeView === 'dev-rascunhos'
                      ? 'bg-accent text-accent-text border-border'
                      : 'text-ink-2 hover:text-ink hover:bg-surface-2 border-transparent'
                  }`}
                  title="Rascunho de Itens Cebraspe (Homologação R4)"
                  aria-label="Página de Homologação de Rascunhos Cebraspe"
                >
                  <Layers className="w-4 h-4" />
                </button>
                <button
                  type="button"
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

            <ThemeToggle compact={true} />

            {/* Menu do Usuário com Logout e Preferências */}
            <UserMenuDropdown />
          </div>
        </div>

      </header>

      {/* Trilha de Navegação (Breadcrumb) logo abaixo da barra do cabeçalho */}
      <Breadcrumb />

      <MobileModulesDrawer
        isOpen={isModulesDrawerOpen}
        onClose={() => setIsModulesDrawerOpen(false)}
      />
    </>
  );
};
