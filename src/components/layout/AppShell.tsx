import React from 'react';
import { SkipLink } from './SkipLink';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { BottomNav } from './BottomNav';
import { CONCURSO_CONFIG } from '../../config/concurso.config';

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-theme-bg text-theme-ink flex flex-col font-sans transition-colors duration-200">
      <SkipLink />
      <Header />

      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        <Sidebar />

        <main
          id="main-content"
          tabIndex={-1}
          className="flex-1 w-full min-w-0 p-4 sm:p-6 lg:p-8 pb-24 md:pb-12 focus:outline-none"
        >
          {children}
        </main>
      </div>

      <BottomNav />

      {/* Rodapé Editorial Sóbrio */}
      <footer className="border-t border-theme py-6 px-4 bg-theme-surface text-center text-xs text-theme-ink-2 hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-theme-ink">{CONCURSO_CONFIG.plataforma.nome}</span>
            <span>• {CONCURSO_CONFIG.instituicao.nome}</span>
          </div>
          <p className="text-[11px] text-theme-ink-2">
            Metodologia Cebraspe: 1 Erro Anula 1 Certo • Plataforma Editorial de Aprendizagem Ativa
          </p>
        </div>
      </footer>
    </div>
  );
};
