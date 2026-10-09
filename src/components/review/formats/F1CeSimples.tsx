import React, { useEffect } from 'react';
import { Check, X } from 'lucide-react';
import type { ExerciseFormatProps } from '../types';

export const F1CeSimples: React.FC<ExerciseFormatProps> = ({
  conceito,
  respondido,
  respostaSelecionada,
  onResponder,
  disabled = false,
}) => {
  useEffect(() => {
    if (disabled || respondido) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const key = e.key.toUpperCase();
      if (key === 'C') onResponder('C');
      if (key === 'E') onResponder('E');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [disabled, respondido, onResponder]);

  const opcoes: Array<{
    id: 'C' | 'E';
    label: string;
    sublabel: string;
    icone: React.ReactNode;
    selectedClasses: string;
    idleClasses: string;
  }> = [
    {
      id: 'C',
      label: 'CERTO',
      sublabel: 'A assertiva é canonicamente correta',
      icone: <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />,
      selectedClasses:
        'border-emerald-600 bg-emerald-500/10 text-emerald-950 dark:text-emerald-100 ring-2 ring-emerald-500/20',
      idleClasses:
        'border-border hover:border-emerald-500/50 hover:bg-emerald-500/5 text-ink bg-surface',
    },
    {
      id: 'E',
      label: 'ERRADO',
      sublabel: 'A assertiva contém erro ou inversão',
      icone: <X className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />,
      selectedClasses:
        'border-rose-600 bg-rose-500/10 text-rose-950 dark:text-rose-100 ring-2 ring-rose-500/20',
      idleClasses:
        'border-border hover:border-rose-500/50 hover:bg-rose-500/5 text-ink bg-surface',
    },
  ];

  return (
    <div className="space-y-4">
      {/* Enunciado do Item */}
      <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-border shadow-editorial-sm">
        <div className="text-xs font-sans font-bold uppercase tracking-wider text-accent mb-2">
          {conceito.topico} · Julgamento Cebraspe
        </div>
        <p className="font-serif text-base sm:text-lg leading-relaxed text-ink break-words" style={{ overflowWrap: 'anywhere' }}>
          {conceito.enunciadoCanonic}
        </p>
      </div>

      {/* Botões de Julgamento */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {opcoes.map((op) => {
          const isSelected = respostaSelecionada === op.id;
          return (
            <button
              key={op.id}
              type="button"
              disabled={disabled || respondido}
              onClick={() => onResponder(op.id)}
              className={`p-3.5 sm:p-4 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer disabled:cursor-not-allowed ${
                isSelected ? op.selectedClasses : op.idleClasses
              }`}
              aria-label={`Julgar como ${op.label}`}
              aria-pressed={isSelected}
            >
              <div className="flex items-center gap-2">
                {op.icone}
                <span className="font-sans font-bold text-base sm:text-lg">{op.label}</span>
                <span className="text-[11px] font-mono opacity-60 hidden sm:inline">[{op.id}]</span>
              </div>
              <span className="text-[11px] text-ink-3 text-center hidden sm:block">
                {op.sublabel}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
