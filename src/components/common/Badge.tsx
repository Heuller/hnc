import React from 'react';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

export type BadgeVariant =
  | 'default'
  | 'certo'
  | 'errado'
  | 'branco'
  | 'alerta'
  | 'accent'
  | 'planejado'
  | 'concluido';

export interface BadgeProps {
  variant?: BadgeVariant;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  children,
  icon,
  size = 'md',
  className = '',
}) => {
  const sizeClasses = size === 'sm' ? 'text-[11px] px-2 py-0.5 gap-1' : 'text-xs px-2.5 py-1 gap-1.5';

  const defaultContent = () => {
    switch (variant) {
      case 'certo':
        return (
          <>
            <CheckCircle2 className="w-3.5 h-3.5 text-theme-ok shrink-0" aria-hidden="true" />
            <span>{children || 'Certo (+1)'}</span>
          </>
        );
      case 'errado':
        return (
          <>
            <XCircle className="w-3.5 h-3.5 text-theme-err shrink-0" aria-hidden="true" />
            <span>{children || 'Errado (-1)'}</span>
          </>
        );
      case 'branco':
        return (
          <>
            <HelpCircle className="w-3.5 h-3.5 text-theme-ink-2 shrink-0" aria-hidden="true" />
            <span>{children || 'Em branco (0)'}</span>
          </>
        );
      default:
        return (
          <>
            {icon && <span className="shrink-0">{icon}</span>}
            <span>{children}</span>
          </>
        );
    }
  };

  const variantClasses = {
    default: 'bg-theme-surface-2 text-theme-ink border border-theme',
    certo: 'bg-theme-ok-soft text-theme-ok border border-theme-ok font-bold',
    errado: 'bg-theme-err-soft text-theme-err border border-theme-err font-bold',
    branco: 'bg-theme-surface-2 text-theme-ink-2 border border-theme font-medium',
    alerta: 'bg-theme-alerta-soft text-theme-alerta border border-theme-alerta font-bold',
    accent: 'bg-theme-accent-soft text-theme-ink border border-theme-accent font-semibold',
    planejado: 'bg-theme-surface-2 text-theme-ink-2 border border-theme opacity-80',
    concluido: 'bg-theme-ok-soft text-theme-ok border border-theme-ok font-semibold',
  }[variant];

  return (
    <span
      className={`inline-flex items-center rounded-md font-sans tracking-normal select-none ${sizeClasses} ${variantClasses} ${className}`}
    >
      {defaultContent()}
    </span>
  );
};
