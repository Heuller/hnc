import React from 'react';
import { UserCheck, ShieldAlert } from 'lucide-react';
import type { ExerciseFormatProps } from '../types';

export const F8InversaoPapeis: React.FC<ExerciseFormatProps> = ({
  conceito,
  respondido,
  onResponder,
  disabled = false,
}) => {
  const armadilhasCebraspe = [
    {
      tipo: 'inversao_conceito',
      label: 'Inversão de conceito, autor ou campo técnico normativo',
      gabaritoEquivalente: 'E',
    },
    {
      tipo: 'generalizacao_restritiva',
      label: 'Generalização ou restrição indevida ("apenas", "sempre", "exclusivamente")',
      gabaritoEquivalente: 'E',
    },
    {
      tipo: 'anacronismo_historico',
      label: 'Anacronismo normativo ou atribuição a código revogado',
      gabaritoEquivalente: 'E',
    },
    {
      tipo: 'factual_correto',
      label: 'Assertiva factual estritamente aderente ao padrão canônico oficial',
      gabaritoEquivalente: 'C',
    },
  ];

  return (
    <div className="space-y-4">
      {/* Enunciado sob a ótica do examinador */}
      <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-border shadow-editorial-sm space-y-2">
        <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-accent border-b border-border pb-2">
          <UserCheck className="w-4 h-4 text-accent" />
          <span>Inversão de Papéis · Você é o Examinador Cebraspe</span>
        </div>
        <p className="font-serif text-base sm:text-lg leading-relaxed text-ink break-words" style={{ overflowWrap: 'anywhere' }}>
          {conceito.enunciadoCanonic}
        </p>
      </div>

      <div className="p-3 bg-surface-2 rounded-xl border border-border text-xs text-ink-2 flex items-center gap-2">
        <ShieldAlert className="w-4 h-4 text-accent shrink-0" />
        <span>Como examinador do concurso, qual estratégia de elaboração define esta assertiva?</span>
      </div>

      <div className="space-y-2">
        {armadilhasCebraspe.map((arm, idx) => (
          <button
            key={idx}
            type="button"
            disabled={disabled || respondido}
            onClick={() => onResponder(arm.gabaritoEquivalente)}
            className="w-full p-3.5 rounded-xl border border-border bg-surface hover:border-accent hover:bg-accent/5 text-left text-xs sm:text-sm font-sans transition-all cursor-pointer flex items-center justify-between text-ink"
          >
            <span className="font-medium">{arm.label}</span>
            <span className="text-[11px] font-mono text-ink-3">[{idx + 1}]</span>
          </button>
        ))}
      </div>
    </div>
  );
};
