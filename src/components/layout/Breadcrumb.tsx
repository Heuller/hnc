import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigationStore } from '../../store/useNavigationStore';
import { getBreadcrumb } from '../../config/rotas';

interface BreadcrumbProps {
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ className = '' }) => {
  const { activeView, selectedSubmodule, setActiveView } = useNavigationStore();

  // Em painel inicial não é necessário exibir breadcrumb
  if (activeView === 'painel') {
    return null;
  }

  const items = getBreadcrumb(activeView, selectedSubmodule);

  return (
    <nav
      aria-label="Trilha de navegação"
      className={`w-full bg-surface-2/30 border-b border-border/40 px-3 sm:px-6 py-1 text-xs font-sans text-ink-2 select-none print:hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto flex items-center gap-1.5 overflow-x-auto scrollbar-none text-xs">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              {idx > 0 && (
                <ChevronRight className="w-3 h-3 text-ink-2/40 shrink-0" aria-hidden="true" />
              )}
              {isLast || !item.view ? (
                <span
                  className={isLast ? 'font-semibold text-ink truncate' : 'text-ink-2/70 shrink-0'}
                  aria-current={isLast ? 'location' : undefined}
                >
                  {item.rotulo}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveView(item.view!)}
                  className="hover:text-ink hover:underline transition-colors shrink-0 cursor-pointer text-ink-2"
                >
                  {item.rotulo}
                </button>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
