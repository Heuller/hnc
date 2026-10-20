import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, BookMarked } from 'lucide-react';
import { useNavigationStore } from '../../store/useNavigationStore';
import { ROTAS_REFERENCIA } from '../../config/rotas';

export const ReferenceMenuDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { activeView, setActiveView } = useNavigationStore();

  const isAnyReferenceActive = ROTAS_REFERENCIA.some((r) => r.id === activeView);

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

  return (
    <div className="relative shrink-0" ref={menuRef}>
      <button
        type="button"
        id="reference-menu-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer select-none border min-h-[34px] ${
          isAnyReferenceActive
            ? 'bg-surface text-ink font-bold border-border shadow-editorial-sm'
            : 'text-ink-2 hover:text-ink hover:bg-surface-2 border-transparent'
        }`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label="Menu de ferramentas de referência"
      >
        <BookMarked className="w-3.5 h-3.5 text-accent shrink-0" />
        <span className="hidden xl:inline">Referência</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180 text-accent' : 'text-ink-2'
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label="Ferramentas de referência do edital"
          className="absolute right-0 top-10 z-50 w-64 rounded-xl bg-surface border border-border shadow-lg p-1.5 space-y-1 text-xs font-sans text-ink animate-fadeIn"
        >
          <div className="px-2.5 py-1 text-xs font-mono font-bold text-ink-2 uppercase tracking-wider border-b border-border/50">
            Referência & Acervo
          </div>

          {ROTAS_REFERENCIA.map((rota) => {
            const Icon = rota.icone;
            const isItemActive = activeView === rota.id;

            return (
              <button
                key={rota.id}
                type="button"
                role="menuitem"
                onClick={() => {
                  setActiveView(rota.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between transition-colors min-h-[40px] cursor-pointer ${
                  isItemActive
                    ? 'bg-surface-2 font-bold text-accent'
                    : 'hover:bg-surface-2 text-ink-2 hover:text-ink'
                }`}
                aria-current={isItemActive ? 'page' : undefined}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Icon className="w-4 h-4 shrink-0 text-accent" />
                  <span className="truncate">{rota.rotulo}</span>
                </div>
                {rota.tagDireita && (
                  <span className="text-xs font-mono text-ink-2/80 bg-surface px-1.5 py-0.5 rounded border border-border shrink-0 ml-1">
                    {rota.tagDireita}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
