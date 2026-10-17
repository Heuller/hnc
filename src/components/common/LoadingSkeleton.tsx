import React from 'react';

export interface LoadingSkeletonProps {
  variant?: 'text' | 'card' | 'list' | 'article';
  lines?: number;
  className?: string;
  ariaLabel?: string;
}

/**
 * Componente padronizado de esqueleto de carregamento (Loading Skeleton)
 * Atende à Diretriz U6.6 do Plano v3:
 * - Adapta-se aos 3 níveis de superfície
 * - Animação suave com respeito a movimento reduzido (motion-safe)
 * - Variantes flexíveis para texto, cartão, lista e artigo de leitura
 */
export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  variant = 'card',
  lines = 3,
  className = '',
  ariaLabel = 'Carregando conteúdo...',
}) => {
  if (variant === 'text') {
    return (
      <div
        role="status"
        aria-label={ariaLabel}
        className={`space-y-2.5 motion-safe:animate-pulse ${className}`}
      >
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={`h-4 rounded-md bg-surface-2 ${
              i === lines - 1 ? 'w-3/5' : 'w-full'
            }`}
          />
        ))}
        <span className="sr-only">{ariaLabel}</span>
      </div>
    );
  }

  if (variant === 'list') {
    return (
      <div
        role="status"
        aria-label={ariaLabel}
        className={`space-y-3 motion-safe:animate-pulse ${className}`}
      >
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border border-border bg-surface flex items-center justify-between gap-4"
          >
            <div className="space-y-2 flex-1">
              <div className="h-4 w-1/3 rounded-md bg-surface-2" />
              <div className="h-3 w-4/5 rounded-md bg-surface-2/70" />
            </div>
            <div className="w-16 h-8 rounded-lg bg-surface-2 shrink-0" />
          </div>
        ))}
        <span className="sr-only">{ariaLabel}</span>
      </div>
    );
  }

  if (variant === 'article') {
    return (
      <div
        role="status"
        aria-label={ariaLabel}
        className={`space-y-6 motion-safe:animate-pulse ${className}`}
      >
        {/* Cabeçalho do artigo */}
        <div className="space-y-3 pb-6 border-b border-border">
          <div className="h-5 w-28 rounded-md bg-accent-soft" />
          <div className="h-8 w-3/4 rounded-lg bg-surface-2" />
          <div className="h-4 w-1/2 rounded-md bg-surface-2/70" />
        </div>

        {/* Parágrafos de leitura */}
        <div className="space-y-4">
          <div className="h-4 w-full rounded bg-surface-2" />
          <div className="h-4 w-full rounded bg-surface-2" />
          <div className="h-4 w-4/5 rounded bg-surface-2" />
        </div>

        {/* Callout esqueleto */}
        <div className="p-5 rounded-2xl border-l-4 border-l-accent border border-border bg-surface-2/40 space-y-2">
          <div className="h-4 w-24 rounded bg-accent/20" />
          <div className="h-3.5 w-full rounded bg-surface-2" />
          <div className="h-3.5 w-5/6 rounded bg-surface-2" />
        </div>

        {/* Mais parágrafos */}
        <div className="space-y-4">
          <div className="h-4 w-full rounded bg-surface-2" />
          <div className="h-4 w-11/12 rounded bg-surface-2" />
          <div className="h-4 w-3/4 rounded bg-surface-2" />
        </div>

        <span className="sr-only">{ariaLabel}</span>
      </div>
    );
  }

  // Padrão: Card
  return (
    <div
      role="status"
      aria-label={ariaLabel}
      className={`p-5 sm:p-6 rounded-2xl border border-border bg-surface shadow-xs space-y-4 motion-safe:animate-pulse ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="h-4 w-28 rounded-md bg-surface-2" />
        <div className="w-8 h-8 rounded-lg bg-surface-2" />
      </div>

      <div className="space-y-2">
        <div className="h-6 w-3/5 rounded-md bg-surface-2" />
        <div className="h-4 w-4/5 rounded-md bg-surface-2/70" />
      </div>

      <div className="pt-2 flex justify-end">
        <div className="w-28 h-9 rounded-xl bg-surface-2" />
      </div>

      <span className="sr-only">{ariaLabel}</span>
    </div>
  );
};
