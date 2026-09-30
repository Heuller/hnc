import React from 'react';

export interface KbdProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Kbd: React.FC<KbdProps> = ({ children, className = '', title }) => {
  return (
    <kbd
      title={title}
      className={`inline-flex items-center justify-center font-mono text-[11px] font-semibold px-1.5 py-0.5 min-w-[20px] rounded bg-theme-surface-2 text-theme-ink border border-theme shadow-[0_1px_0_1px_rgba(0,0,0,0.1)] ${className}`}
    >
      {children}
    </kbd>
  );
};
