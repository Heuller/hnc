import React from 'react';
import { motion } from 'motion/react';
import { Check, Lock, AlertCircle } from 'lucide-react';
import { getModuleTheme, type SubmoduleState } from '../../domain/moduleThemes';

interface ModuleProgressRingProps {
  moduleId: string | number;
  progressPercent: number; // 0 a 100
  state?: SubmoduleState;
  size?: number; // diâmetro em pixels, default 28
  strokeWidth?: number; // espessura, default 3
  showPercentText?: boolean;
  className?: string;
}

export const ModuleProgressRing: React.FC<ModuleProgressRingProps> = ({
  moduleId,
  progressPercent,
  state,
  size = 28,
  strokeWidth = 3,
  showPercentText = false,
  className = '',
}) => {
  const theme = getModuleTheme(moduleId);

  // Determina estado automático caso não informado
  const resolvedState: SubmoduleState =
    state ||
    (progressPercent >= 100
      ? 'concluido'
      : progressPercent > 0
      ? 'em_andamento'
      : 'nao_iniciado');

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (Math.min(100, Math.max(0, progressPercent)) / 100) * circumference;

  if (resolvedState === 'bloqueado') {
    return (
      <div
        className={`inline-flex items-center justify-center rounded-full bg-surface-2 border border-border text-ink-2/60 shrink-0 ${className}`}
        style={{ width: size, height: size }}
        title="Submódulo bloqueado"
      >
        <Lock className="w-3 h-3" />
      </div>
    );
  }

  if (resolvedState === 'em_revisao_dirigida' || (resolvedState as string) === 'em_revisao') {
    return (
      <div
        className={`inline-flex items-center justify-center rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-600 dark:text-amber-400 shrink-0 ${className}`}
        style={{ width: size, height: size }}
        title="Em revisão dirigida necessária"
      >
        <AlertCircle className="w-3.5 h-3.5" />
      </div>
    );
  }

  if (resolvedState === 'planejado') {
    return (
      <div
        className={`inline-flex items-center justify-center rounded-full border border-dashed border-border text-ink-2/40 shrink-0 opacity-60 ${className}`}
        style={{ width: size, height: size }}
        title="Submódulo planejado"
      >
        <span className="w-1 h-1 rounded-full bg-ink-2/40" />
      </div>
    );
  }

  if (resolvedState === 'concluido') {
    return (
      <div
        className={`inline-flex items-center justify-center rounded-full shadow-2xs shrink-0 transition-transform ${className}`}
        style={{
          width: size,
          height: size,
          backgroundColor: theme.solidVar,
          color: theme.textVar,
        }}
        title="Concluído"
      >
        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
      </div>
    );
  }

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      title={`${Math.round(progressPercent)}% concluído`}
    >
      <svg width={size} height={size} className="-rotate-90">
        {/* Trilho de fundo */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-border/60"
        />
        {/* Anel de progresso animado com a cor do módulo */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={theme.solidVar}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          strokeLinecap="round"
        />
      </svg>

      {showPercentText && (
        <span className="absolute font-mono text-[9px] font-bold text-ink">
          {Math.round(progressPercent)}%
        </span>
      )}
    </div>
  );
};
