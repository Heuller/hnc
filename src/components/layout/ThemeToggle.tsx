import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Laptop, Check } from 'lucide-react';
import { useThemeStore } from '../../store/useThemeStore';

export const ThemeToggle: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { theme, resolvedTheme, setTheme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fecha o dropdown ao clicar fora ou pressionar Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
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

  const getCurrentIcon = () => {
    if (theme === 'system') {
      return <Laptop className="w-4 h-4 text-ink" aria-hidden="true" />;
    }
    return resolvedTheme === 'dark' ? (
      <Moon className="w-4 h-4 text-ink" aria-hidden="true" />
    ) : (
      <Sun className="w-4 h-4 text-ink" aria-hidden="true" />
    );
  };

  const getCurrentLabel = () => {
    if (theme === 'system') return 'Automático';
    return theme === 'dark' ? 'Escuro' : 'Claro';
  };

  const options: { id: 'light' | 'dark' | 'system'; label: string; desc: string; icon: React.ReactNode }[] = [
    { id: 'light', label: 'Claro', desc: 'Fundo papel e texto tinta', icon: <Sun className="w-4 h-4 text-accent" /> },
    { id: 'dark', label: 'Escuro', desc: 'Sombreado para leitura noturna', icon: <Moon className="w-4 h-4 text-accent" /> },
    { id: 'system', label: 'Automático', desc: 'Segue o sistema do aparelho', icon: <Laptop className="w-4 h-4 text-accent" /> },
  ];

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="touch-target px-2.5 py-1.5 rounded-lg border border-border bg-surface hover:bg-surface-2 transition-colors flex items-center gap-2 text-xs font-semibold text-ink cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`Tema de exibição: ${getCurrentLabel()}. Clique para alterar.`}
        title={`Tema: ${getCurrentLabel()}`}
      >
        {getCurrentIcon()}
        {!compact && <span className="hidden sm:inline font-sans">{getCurrentLabel()}</span>}
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute right-0 mt-2 w-64 rounded-xl border border-border bg-surface p-1.5 shadow-xl z-50 animate-fadeIn focus:outline-none"
        >
          <div className="px-2.5 py-1.5 text-[11px] font-sans font-bold text-ink-2 uppercase tracking-wider border-b border-border mb-1">
            Aparência da Plataforma
          </div>
          <div className="space-y-0.5">
            {options.map((opt) => {
              const isSelected = theme === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    setTheme(opt.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-sans flex items-center justify-between transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-accent/10 text-ink font-bold border border-accent/30'
                      : 'text-ink hover:bg-surface-2 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="shrink-0">{opt.icon}</span>
                    <div className="min-w-0">
                      <div className="leading-tight font-semibold">{opt.label}</div>
                      <div className="text-[10px] text-ink-2 truncate">{opt.desc}</div>
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-accent shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
