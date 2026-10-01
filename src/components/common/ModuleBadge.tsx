import React from 'react';
import { getModuleTheme } from '../../domain/moduleThemes';

interface ModuleBadgeProps {
  moduleId: string | number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ModuleBadge: React.FC<ModuleBadgeProps> = ({
  moduleId,
  size = 'md',
  className = '',
}) => {
  const theme = getModuleTheme(moduleId);

  const sizeClasses = {
    sm: 'text-[10px] px-1.5 py-0.5 rounded font-bold min-w-6 text-center',
    md: 'text-xs px-2 py-0.5 rounded-md font-bold min-w-7 text-center',
    lg: 'text-sm px-2.5 py-1 rounded-md font-extrabold min-w-8 text-center',
  }[size];

  return (
    <span
      className={`inline-flex items-center justify-center font-mono tracking-tight shadow-xs select-none transition-colors ${theme.bgSolidClass} ${theme.textSolidClass} ${sizeClasses} ${className}`}
      style={{
        backgroundColor: theme.solidVar,
        color: theme.textVar,
      }}
    >
      {theme.codigo}
    </span>
  );
};
