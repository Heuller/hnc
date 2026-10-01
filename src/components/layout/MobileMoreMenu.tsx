import React, { useState, useRef, useEffect } from 'react';
import { MoreVertical, Sun, Moon, Laptop, Download, Palette, BookOpen, BookMarked, Flame } from 'lucide-react';
import { useNavigationStore } from '../../store/useNavigationStore';

export const MobileMoreMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { setActiveView } = useNavigationStore();

  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'auto'>('auto');

  useEffect(() => {
    const saved = localStorage.getItem('theme-preference') as 'light' | 'dark' | 'auto' | null;
    if (saved) {
      setCurrentTheme(saved);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const applyTheme = (theme: 'light' | 'dark' | 'auto') => {
    setCurrentTheme(theme);
    localStorage.setItem('theme-preference', theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('dark', 'light');
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      }
    }
    setIsOpen(false);
  };

  return (
    <div className="relative md:hidden" ref={menuRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="min-h-[44px] min-w-[44px] p-2 rounded-lg text-ink-2 hover:text-ink hover:bg-surface-2 transition-colors flex items-center justify-center cursor-pointer border border-transparent hover:border-border"
        aria-label="Abrir menu Mais Opções"
        aria-expanded={isOpen}
      >
        <MoreVertical className="w-5 h-5" />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label="Opções e preferências"
          className="absolute right-0 top-12 z-50 w-60 rounded-xl bg-surface border border-border shadow-lg p-2 space-y-1 text-xs font-sans text-ink animate-fadeIn"
        >
          <div className="px-2.5 py-1.5 text-[10px] font-bold text-ink-2 uppercase tracking-wider border-b border-border/50">
            Aparência
          </div>

          <button
            type="button"
            role="menuitem"
            onClick={() => applyTheme('light')}
            className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between transition-colors min-h-[40px] cursor-pointer ${
              currentTheme === 'light' ? 'bg-surface-2 font-bold text-accent' : 'hover:bg-surface-2 text-ink-2 hover:text-ink'
            }`}
          >
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-amber-500" />
              <span>Tema Claro</span>
            </div>
            {currentTheme === 'light' && <span className="text-[10px] font-mono">✓</span>}
          </button>

          <button
            type="button"
            role="menuitem"
            onClick={() => applyTheme('dark')}
            className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between transition-colors min-h-[40px] cursor-pointer ${
              currentTheme === 'dark' ? 'bg-surface-2 font-bold text-accent' : 'hover:bg-surface-2 text-ink-2 hover:text-ink'
            }`}
          >
            <div className="flex items-center gap-2">
              <Moon className="w-4 h-4 text-blue-400" />
              <span>Tema Escuro</span>
            </div>
            {currentTheme === 'dark' && <span className="text-[10px] font-mono">✓</span>}
          </button>

          <button
            type="button"
            role="menuitem"
            onClick={() => applyTheme('auto')}
            className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between transition-colors min-h-[40px] cursor-pointer ${
              currentTheme === 'auto' ? 'bg-surface-2 font-bold text-accent' : 'hover:bg-surface-2 text-ink-2 hover:text-ink'
            }`}
          >
            <div className="flex items-center gap-2">
              <Laptop className="w-4 h-4 text-slate-400" />
              <span>Automático (Aparelho)</span>
            </div>
            {currentTheme === 'auto' && <span className="text-[10px] font-mono">✓</span>}
          </button>

          <div className="px-2.5 py-1.5 text-[10px] font-bold text-ink-2 uppercase tracking-wider border-b border-t border-border/50 mt-1">
            Estudo e Revisão
          </div>

          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setActiveView('caderno-erros');
              setIsOpen(false);
            }}
            className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 hover:bg-surface-2 text-ink transition-colors min-h-[40px] cursor-pointer"
          >
            <BookMarked className="w-4 h-4 text-amber-500" />
            <span>Caderno de Erros</span>
          </button>

          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setActiveView('folha-vespera');
              setIsOpen(false);
            }}
            className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 hover:bg-surface-2 text-ink transition-colors min-h-[40px] cursor-pointer"
          >
            <Flame className="w-4 h-4 text-accent" />
            <span>Folha de Véspera (48h)</span>
          </button>

          <div className="px-2.5 py-1.5 text-[10px] font-bold text-ink-2 uppercase tracking-wider border-b border-t border-border/50 mt-1">
            Dados e Progresso
          </div>

          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setActiveView('progresso');
              setIsOpen(false);
            }}
            className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 hover:bg-surface-2 text-ink transition-colors min-h-[40px] cursor-pointer"
          >
            <Download className="w-4 h-4 text-accent" />
            <span>Exportar / Importar Dados</span>
          </button>

          {import.meta.env.DEV && (
            <>
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  setActiveView('dev-rascunhos');
                  setIsOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 hover:bg-surface-2 text-accent font-semibold transition-colors min-h-[40px] cursor-pointer border-t border-border/50"
              >
                <BookOpen className="w-4 h-4" />
                <span>Homologar Itens R4 (DEV)</span>
              </button>
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  setActiveView('design-system');
                  setIsOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 hover:bg-surface-2 text-amber-600 dark:text-amber-400 transition-colors min-h-[40px] cursor-pointer"
              >
                <Palette className="w-4 h-4" />
                <span>Design System (DEV)</span>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
