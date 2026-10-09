import React, { useState } from 'react';
import { Eye, Check, X, Sparkles } from 'lucide-react';
import type { ExerciseFormatProps } from '../types';

export const F7FlashcardAtivo: React.FC<ExerciseFormatProps> = ({
  conceito,
  respondido,
  respostaSelecionada,
  onResponder,
  disabled = false,
}) => {
  const [revelado, setRevelado] = useState(false);

  return (
    <div className="space-y-4">
      {/* Frente do Card: Pergunta de Recuperação Ativa */}
      <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-border shadow-editorial-sm">
        <div className="flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-accent mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{conceito.topico} · Recuperação Ativa (Elaborative Retrieval)</span>
        </div>
        <p className="font-serif text-base sm:text-lg leading-relaxed text-ink font-semibold">
          Como a doutrina e as normas canônicas regulam: "{conceito.topico}"?
        </p>
        <p className="text-xs text-ink-3 mt-2">
          Pause por 3 segundos e formule a regra mentalmente antes de revelar a assertiva oficial.
        </p>
      </div>

      {!revelado && !respondido ? (
        <button
          type="button"
          onClick={() => setRevelado(true)}
          className="w-full p-4 rounded-xl border border-dashed border-accent/60 bg-accent/5 hover:bg-accent/10 text-accent font-sans font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <Eye className="w-4 h-4" />
          <span>Revelar Assertiva da Banca e Julgar</span>
        </button>
      ) : (
        <div className="space-y-4 animate-fade-in">
          <div className="p-4 rounded-xl bg-surface-2 border border-border">
            <span className="text-xs font-sans font-bold uppercase tracking-wider text-ink-2 block mb-1">
              Assertiva da Banca Cebraspe:
            </span>
            <p className="font-serif text-base sm:text-lg leading-relaxed text-ink break-words" style={{ overflowWrap: 'anywhere' }}>
              {conceito.enunciadoCanonic}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <button
              type="button"
              disabled={disabled || respondido}
              onClick={() => onResponder('C')}
              className={`p-3.5 rounded-xl border flex items-center justify-center gap-2 font-sans font-bold text-base transition-all cursor-pointer ${
                respostaSelecionada === 'C'
                  ? 'border-emerald-600 bg-emerald-500/10 text-emerald-950 dark:text-emerald-100 ring-2 ring-emerald-500/20'
                  : 'border-border bg-surface hover:border-emerald-500/50 text-ink'
              }`}
            >
              <Check className="w-5 h-5 text-emerald-600" />
              <span>CERTO</span>
            </button>

            <button
              type="button"
              disabled={disabled || respondido}
              onClick={() => onResponder('E')}
              className={`p-3.5 rounded-xl border flex items-center justify-center gap-2 font-sans font-bold text-base transition-all cursor-pointer ${
                respostaSelecionada === 'E'
                  ? 'border-rose-600 bg-rose-500/10 text-rose-950 dark:text-rose-100 ring-2 ring-rose-500/20'
                  : 'border-border bg-surface hover:border-rose-500/50 text-ink'
              }`}
            >
              <X className="w-5 h-5 text-rose-600" />
              <span>ERRADO</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
