import React, { useState, useEffect } from 'react';
import { SkipLink } from './SkipLink';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { BottomNav } from './BottomNav';
import { CONCURSO_CONFIG } from '../../config/concurso.config';
import { GlobalSearchModal } from '../common/GlobalSearchModal';
import { KeyboardShortcutsModal } from '../common/KeyboardShortcutsModal';
import { AuthModal } from '../auth/AuthModal';
import { useNavigationStore } from '../../store/useNavigationStore';
import { useAuthStore } from '../../store/useAuthStore';
import { useProgressStore } from '../../store/useProgressStore';
import { progressSyncService } from '../../services/progressSyncService';
import { COURSE_REGISTRY } from '../../content/registry';
import { Keyboard, Search } from 'lucide-react';
import { Kbd } from '../common/Kbd';

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const { activeView, selectedSubmodule, setActiveView, setSelectedSubmodule } =
    useNavigationStore();
  const { isAuthModalOpen, closeAuthModal } = useAuthStore();

  // Sincronização automática em nuvem (debounce de 2s) quando logado
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const unsubscribe = useProgressStore.subscribe((state) => {
      const user = useAuthStore.getState().user;
      if (!user) return;

      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        progressSyncService.salvarProgressoNuvem(
          user.id,
          state,
          state.ultimoModuloAcessado
        );
      }, 2000);
    });

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      unsubscribe();
    };
  }, []);

  // Escuta global de atalhos de teclado (H5)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isInput =
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable);

      // Cmd+K ou Ctrl+K -> Busca Global
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
        return;
      }

      // Se estiver digitando em campo de texto, ignora atalhos de caractere simples
      if (isInput) return;

      // '/' -> Busca Global
      if (e.key === '/') {
        e.preventDefault();
        setIsSearchOpen(true);
        return;
      }

      // '?' -> Guia de Atalhos
      if (e.key === '?') {
        e.preventDefault();
        setIsShortcutsOpen(true);
        return;
      }

      // Alt+1 a Alt+5: Navegação Direta
      if (e.altKey && e.key === '1') {
        e.preventDefault();
        setActiveView('painel');
      } else if (e.altKey && e.key === '2') {
        e.preventDefault();
        setActiveView('teoria');
      } else if (e.altKey && e.key === '3') {
        e.preventDefault();
        setActiveView('simulado');
      } else if (e.altKey && e.key === '4') {
        e.preventDefault();
        setActiveView('radar');
      } else if (e.altKey && e.key === '5') {
        e.preventDefault();
        setActiveView('progresso');
      }

      // '[' e ']' para navegar submódulos na teoria
      if (activeView === 'teoria') {
        const allSubs = COURSE_REGISTRY.flatMap((m) => m.modulosFilhos);
        const currentIndex = allSubs.findIndex(
          (s) => s.numero === selectedSubmodule || s.id === selectedSubmodule
        );
        if (e.key === '[' && currentIndex > 0) {
          e.preventDefault();
          setSelectedSubmodule(allSubs[currentIndex - 1].numero);
        } else if (e.key === ']' && currentIndex < allSubs.length - 1) {
          e.preventDefault();
          setSelectedSubmodule(allSubs[currentIndex + 1].numero);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeView, selectedSubmodule, setActiveView, setSelectedSubmodule]);

  return (
    <div className="min-h-screen bg-theme-bg text-theme-ink flex flex-col font-sans transition-colors duration-200">
      <SkipLink />
      <Header onOpenSearch={() => setIsSearchOpen(true)} />

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

      {/* Rodapé Editorial Sóbrio com Botões de Acesso Rápido a Atalhos e Busca */}
      <footer className="border-t border-theme py-6 px-4 bg-theme-surface text-center text-xs text-theme-ink-2 hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-theme-ink">{CONCURSO_CONFIG.plataforma.nome}</span>
            <span>• {CONCURSO_CONFIG.instituicao.nome}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="inline-flex items-center gap-1.5 text-[11px] text-theme-ink-2 hover:text-theme-ink cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-accent" />
              <span>Busca (<Kbd>Ctrl</Kbd>+<Kbd>K</Kbd>)</span>
            </button>

            <span className="text-border">|</span>

            <button
              type="button"
              onClick={() => setIsShortcutsOpen(true)}
              className="inline-flex items-center gap-1.5 text-[11px] text-theme-ink-2 hover:text-theme-ink cursor-pointer"
            >
              <Keyboard className="w-3.5 h-3.5 text-accent" />
              <span>Atalhos (<Kbd>?</Kbd>)</span>
            </button>
          </div>

          <p className="text-[11px] text-theme-ink-2 m-0">
            Metodologia Cebraspe: 1 Erro Anula 1 Certo • Plataforma Editorial
          </p>
        </div>
      </footer>

      {/* Modal de Busca Global (H3) */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Modal de Atalhos de Teclado (H5) */}
      <KeyboardShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />

      {/* Modal de Autenticação Supabase */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
      />
    </div>
  );
};
