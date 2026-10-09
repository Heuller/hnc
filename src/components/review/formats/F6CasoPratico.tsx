import React from 'react';
import { Landmark, Check, X } from 'lucide-react';
import type { ExerciseFormatProps } from '../types';

export const F6CasoPratico: React.FC<ExerciseFormatProps> = ({
  conceito,
  respondido,
  respostaSelecionada,
  onResponder,
  disabled = false,
}) => {
  const contextoPratico =
    conceito.variantesFormatos?.f6_caso_pratico?.casoPraticoContexto ||
    `Na Seção de Tratamento da Informação da Biblioteca da Câmara dos Deputados, durante o recebimento e processamento técnico de publicações parlamentares e documentos digitais:`;

  return (
    <div className="space-y-4">
      {/* Cenário Prático da Câmara */}
      <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-border shadow-editorial-sm space-y-3">
        <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-accent border-b border-border pb-2">
          <Landmark className="w-4 h-4 text-accent" />
          <span>Caso Prático · Biblioteca da Câmara dos Deputados</span>
        </div>
        <p className="text-xs sm:text-sm text-ink-2 italic bg-surface-2 p-3 rounded-lg border border-border/60 leading-relaxed">
          {contextoPratico}
        </p>
        <div className="text-xs font-sans font-bold uppercase tracking-wider text-ink-2 pt-1">
          Situação hipotética a julgar:
        </div>
        <p className="font-serif text-base sm:text-lg leading-relaxed text-ink break-words" style={{ overflowWrap: 'anywhere' }}>
          {conceito.enunciadoCanonic}
        </p>
      </div>

      {/* Botões de Julgamento */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <button
          type="button"
          disabled={disabled || respondido}
          onClick={() => onResponder('C')}
          className={`p-3.5 sm:p-4 rounded-xl border flex items-center justify-center gap-2 font-sans font-bold text-base transition-all cursor-pointer ${
            respostaSelecionada === 'C'
              ? 'border-emerald-600 bg-emerald-500/10 text-emerald-950 dark:text-emerald-100 ring-2 ring-emerald-500/20'
              : 'border-border bg-surface hover:border-emerald-500/50 hover:bg-emerald-500/5 text-ink'
          }`}
        >
          <Check className="w-5 h-5 text-emerald-600" />
          <span>CERTO</span>
        </button>

        <button
          type="button"
          disabled={disabled || respondido}
          onClick={() => onResponder('E')}
          className={`p-3.5 sm:p-4 rounded-xl border flex items-center justify-center gap-2 font-sans font-bold text-base transition-all cursor-pointer ${
            respostaSelecionada === 'E'
              ? 'border-rose-600 bg-rose-500/10 text-rose-950 dark:text-rose-100 ring-2 ring-rose-500/20'
              : 'border-border bg-surface hover:border-rose-500/50 hover:bg-rose-500/5 text-ink'
          }`}
        >
          <X className="w-5 h-5 text-rose-600" />
          <span>ERRADO</span>
        </button>
      </div>
    </div>
  );
};
