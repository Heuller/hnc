import React from 'react';
import { CheckCircle2, XCircle, AlertTriangle, BookOpen, Calendar, ArrowRight } from 'lucide-react';
import type { Concept } from '../../domain/concepts/types';

interface ExerciseFeedbackProps {
  conceito: Concept;
  respostaDada: string;
  acertou: boolean;
  mensagemPedagogica?: string;
  diasAteProximaRevisao?: number;
  onAvancar?: () => void;
  avancarLabel?: string;
}

export const ExerciseFeedback: React.FC<ExerciseFeedbackProps> = ({
  conceito,
  respostaDada,
  acertou,
  mensagemPedagogica,
  diasAteProximaRevisao,
  onAvancar,
  avancarLabel = 'Próximo Item',
}) => {
  return (
    <div className="mt-5 space-y-4 animate-fade-in">
      {/* Barra de Status Cebraspe */}
      <div
        className={`p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
          acertou
            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-950 dark:text-emerald-100'
            : 'bg-rose-500/10 border-rose-500/30 text-rose-950 dark:text-rose-100'
        }`}
      >
        <div className="flex items-center gap-3">
          {acertou ? (
            <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
          ) : (
            <XCircle className="w-6 h-6 text-rose-600 dark:text-rose-400 shrink-0" />
          )}
          <div>
            <div className="font-sans font-bold text-sm sm:text-base flex items-center gap-2">
              <span>{acertou ? 'Julgamento Correto!' : 'Julgamento Incorreto'}</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-mono bg-surface border border-border">
                {acertou ? '+1,00 pt líq.' : '-1,00 pt líq. (anula 1 acerto)'}
              </span>
            </div>
            <div className="text-xs text-ink-2 mt-0.5">
              Sua resposta: <strong>{respostaDada}</strong> | Gabarito Oficial: <strong>{conceito.gabaritoCanonic}</strong>
            </div>
          </div>
        </div>

        {typeof diasAteProximaRevisao === 'number' && (
          <div className="flex items-center gap-1.5 text-xs text-ink-2 font-sans bg-surface/80 px-2.5 py-1 rounded-lg border border-border shrink-0">
            <Calendar className="w-3.5 h-3.5 text-accent" />
            <span>Próxima revisão em <strong>{diasAteProximaRevisao}</strong> dia{diasAteProximaRevisao > 1 ? 's úteis' : ' útil'}</span>
          </div>
        )}
      </div>

      {/* Justificativa Canônica */}
      <div className="p-4 rounded-xl bg-surface border border-border space-y-3">
        <div>
          <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-ink-2 flex items-center gap-1.5 mb-1.5">
            <BookOpen className="w-4 h-4 text-accent" />
            Justificativa Canônica
          </h4>
          <p className="font-serif text-sm sm:text-[15px] leading-relaxed text-ink break-words" style={{ overflowWrap: 'anywhere' }}>
            {conceito.justificativaCanonic}
          </p>
        </div>

        {/* Armadilha da Banca */}
        {conceito.armadilhaCebraspe && (
          <div className="pt-3 border-t border-border/60">
            <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1.5 mb-1">
              <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
              Alerta de Armadilha Cebraspe
            </h4>
            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
              {conceito.armadilhaCebraspe}
            </p>
          </div>
        )}

        {/* Fonte Canônica */}
        {conceito.fonteCanonica && (
          <div className="text-[11px] text-ink-3 pt-1 border-t border-border/40">
            Fonte / Referência Oficial: {conceito.fonteCanonica}
          </div>
        )}

        {/* Mensagem de Transição de Caixa */}
        {mensagemPedagogica && (
          <div className="text-xs text-ink-2 bg-surface-2 p-2.5 rounded-lg border border-border/80">
            {mensagemPedagogica}
          </div>
        )}
      </div>

      {/* Botão de Avanço */}
      {onAvancar && (
        <div className="flex justify-end pt-2">
          <button
            type="button"
            onClick={onAvancar}
            className="w-full sm:w-auto px-6 py-2.5 bg-accent hover:bg-accent/90 text-white font-sans font-semibold rounded-xl text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
          >
            <span>{avancarLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
