import React from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';
import { useThemeStore } from '../../store/useThemeStore';

export const ThemeToggle: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { theme, resolvedTheme, setTheme } = useThemeStore();

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const getIcon = () => {
    if (theme === 'system') {
      return <Laptop className="w-4 h-4 text-theme-ink" aria-hidden="true" />;
    }
    return resolvedTheme === 'dark' ? (
      <Moon className="w-4 h-4 text-theme-ink" aria-hidden="true" />
    ) : (
      <Sun className="w-4 h-4 text-theme-ink" aria-hidden="true" />
    );
  };

  const getLabel = () => {
    if (theme === 'system') return 'Sistema';
    return resolvedTheme === 'dark' ? 'Escuro' : 'Claro';
  };

  return (
    <button
      onClick={cycleTheme}
      className="touch-target px-2.5 py-1.5 rounded-md border border-theme bg-theme-surface hover:bg-theme-surface-2 transition-colors flex items-center gap-2 text-xs font-semibold text-theme-ink"
      aria-label={`Alternar tema atual (${getLabel()}). Clique para mudar.`}
      title={`Tema: ${getLabel()} (clique para alternar)`}
    >
      {getIcon()}
      {!compact && <span className="hidden sm:inline">{getLabel()}</span>}
    </button>
  );
};
