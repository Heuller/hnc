import React, { useEffect } from 'react';
import { CheckCircle2, HelpCircle, Shuffle } from 'lucide-react';
import type { ConfidenceLevel } from '../../domain/concepts/types';

interface ConfidenceSelectorProps {
  valorSelecionado?: ConfidenceLevel;
  onSelecionar: (confianca: ConfidenceLevel) => void;
  disabled?: boolean;
}

export const ConfidenceSelector: React.FC<ConfidenceSelectorProps> = ({
  valorSelecionado,
  onSelecionar,
  disabled = false,
}) => {
  // Atalhos de teclado acessíveis: 1 (Certeza), 2 (Dúvida), 3 (Chute)
  useEffect(() => {
    if (disabled) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === '1') onSelecionar('certeza');
      if (e.key === '2') onSelecionar('duvida');
      if (e.key === '3') onSelecionar('chute');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [disabled, onSelecionar]);

  const opcoes: Array<{
    id: ConfidenceLevel;
    label: string;
    sublabel: string;
    atalho: string;
    icone: React.ReactNode;
    activeClasses: string;
    idleClasses: string;
  }> = [
    {
      id: 'certeza',
      label: 'Certeza',
      sublabel: 'Consolidação factual',
      atalho: '[1]',
      icone: <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />,
      activeClasses:
        'border-emerald-600 bg-emerald-50 text-emerald-950 dark:bg-emerald-950/40 dark:border-emerald-500 dark:text-emerald-100 ring-2 ring-emerald-500/20 shadow-xs',
      idleClasses:
        'border-border hover:border-emerald-400/70 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20 text-ink',
    },
    {
      id: 'duvida',
      label: 'Dúvida',
      sublabel: 'Insegurança parcial',
      atalho: '[2]',
      icone: <HelpCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />,
      activeClasses:
        'border-amber-600 bg-amber-50 text-amber-950 dark:bg-amber-950/40 dark:border-amber-500 dark:text-amber-100 ring-2 ring-amber-500/20 shadow-xs',
      idleClasses:
        'border-border hover:border-amber-400/70 hover:bg-amber-50/30 dark:hover:bg-amber-950/20 text-ink',
    },
    {
      id: 'chute',
      label: 'Chute',
      sublabel: 'Tentativa sem certeza',
      atalho: '[3]',
      icone: <Shuffle className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />,
      activeClasses:
        'border-purple-600 bg-purple-50 text-purple-950 dark:bg-purple-950/40 dark:border-purple-500 dark:text-purple-100 ring-2 ring-purple-500/20 shadow-xs',
      idleClasses:
        'border-border hover:border-purple-400/70 hover:bg-purple-50/30 dark:hover:bg-purple-950/20 text-ink',
    },
  ];

  return (
    <div className="w-full mt-4 pt-4 border-t border-border animate-fade-in">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-sans font-bold uppercase tracking-wider text-ink-2">
          Autoverificação de Confiança (Pashler Metacognition):
        </span>
        <span className="text-[11px] text-ink-3 hidden sm:inline">Use as teclas 1, 2 ou 3</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {opcoes.map((op) => {
          const isSelected = valorSelecionado === op.id;
          return (
            <button
              key={op.id}
              type="button"
              disabled={disabled}
              onClick={() => onSelecionar(op.id)}
              className={`flex items-center justify-between p-2.5 sm:p-3 rounded-lg border text-left transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
                isSelected ? op.activeClasses : op.idleClasses
              }`}
              aria-pressed={isSelected}
              aria-label={`Confiança: ${op.label}`}
            >
              <div className="flex items-center gap-2 min-w-0">
                {op.icone}
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-sans font-semibold text-ink leading-tight truncate">
                    {op.label}
                  </div>
                  <div className="text-[10px] text-ink-3 leading-tight truncate">
                    {op.sublabel}
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-ink-3 ml-1 shrink-0">{op.atalho}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
