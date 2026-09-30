import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'ok' | 'err' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-sans font-semibold rounded-md transition-colors duration-150 select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none touch-target';

  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 gap-1.5 min-h-[36px]',
    md: 'text-sm px-4 py-2 gap-2 min-h-[44px]',
    lg: 'text-base px-5 py-2.5 gap-2.5 min-h-[48px]',
  }[size];

  const variantClasses = {
    primary:
      'bg-theme-primary text-theme-primary-contrast hover:opacity-95 shadow-editorial-sm active:scale-[0.99]',
    secondary:
      'bg-theme-surface-2 text-theme-ink border border-theme hover:bg-theme-surface active:scale-[0.99]',
    outline:
      'bg-transparent text-theme-ink border border-theme hover:bg-theme-surface-2 active:scale-[0.99]',
    ghost:
      'bg-transparent text-theme-ink hover:bg-theme-surface-2 active:scale-[0.99]',
    ok:
      'bg-theme-ok-soft text-theme-ok border border-theme-ok hover:opacity-95 font-bold',
    err:
      'bg-theme-err-soft text-theme-err border border-theme-err hover:opacity-95 font-bold',
    accent:
      'bg-theme-accent-soft text-theme-ink border border-theme-accent hover:opacity-95 font-bold',
  }[variant];

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${widthClass} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
};
