import React, { useState } from 'react';
import type { CebraspeQuestion } from '../../domain/types';
import type { RespostaItemSimulado } from '../../domain/schemas/progress.schema';

interface AnswerSheetProps {
  questions: CebraspeQuestion[];
  respostas: Record<string, RespostaItemSimulado>;
  currentIndex: number;
  onSelectQuestion: (index: number) => void;
  className?: string;
}

type FilterType = 'todas' | 'erros' | 'acertos' | 'branco' | 'pendentes';

export const AnswerSheet: React.FC<AnswerSheetProps> = ({
  questions,
  respostas,
  currentIndex,
  onSelectQuestion,
  className = '',
}) => {
  const [filter, setFilter] = useState<FilterType>('todas');

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Filtros da Grade */}
      <div className="flex flex-wrap gap-1 p-1 bg-surface-2 rounded-lg border border-border text-xs">
        <button
          type="button"
          onClick={() => setFilter('todas')}
          className={`py-1 px-2.5 rounded font-sans font-medium transition-colors ${
            filter === 'todas'
              ? 'bg-surface text-ink shadow-2xs font-semibold'
              : 'text-ink-2 hover:text-ink'
          }`}
        >
          Todas ({questions.length})
        </button>
        <button
          type="button"
          onClick={() => setFilter('erros')}
          className={`py-1 px-2.5 rounded font-sans font-medium transition-colors ${
            filter === 'erros'
              ? 'bg-err-soft text-err border border-err/30 font-semibold'
              : 'text-ink-2 hover:text-err'
          }`}
        >
          Erros
        </button>
        <button
          type="button"
          onClick={() => setFilter('acertos')}
          className={`py-1 px-2.5 rounded font-sans font-medium transition-colors ${
            filter === 'acertos'
              ? 'bg-ok-soft text-ok border border-ok/30 font-semibold'
              : 'text-ink-2 hover:text-ok'
          }`}
        >
          Acertos
        </button>
        <button
          type="button"
          onClick={() => setFilter('branco')}
          className={`py-1 px-2.5 rounded font-sans font-medium transition-colors ${
            filter === 'branco'
              ? 'bg-surface text-ink-2 border border-border font-semibold'
              : 'text-ink-2 hover:text-ink'
          }`}
        >
          Em Branco
        </button>
        <button
          type="button"
          onClick={() => setFilter('pendentes')}
          className={`py-1 px-2.5 rounded font-sans font-medium transition-colors ${
            filter === 'pendentes'
              ? 'bg-surface text-ink border border-border font-semibold'
              : 'text-ink-2 hover:text-ink'
          }`}
        >
          Pendentes
        </button>
      </div>

      {/* Grade de 100 Questões */}
      <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 max-h-[360px] overflow-y-auto p-1">
        {questions.map((q, idx) => {
          const r = respostas[q.id];
          const isCurrent = idx === currentIndex;
          const isAnswered = !!r;
          const isCorrect = isAnswered && r.resposta === q.gabarito;
          const isWrong = isAnswered && r.resposta !== 'BRANCO' && r.resposta !== q.gabarito;
          const isBlank = isAnswered && r.resposta === 'BRANCO';

          // Filtro de visibilidade
          const matchesFilter =
            filter === 'todas' ||
            (filter === 'pendentes' && !isAnswered) ||
            (filter === 'acertos' && isCorrect) ||
            (filter === 'erros' && isWrong) ||
            (filter === 'branco' && isBlank);

          if (!matchesFilter) {
            return (
              <div
                key={q.id}
                className="w-8 h-8 rounded flex items-center justify-center text-xs font-mono opacity-20 border border-transparent"
              >
                {idx + 1}
              </div>
            );
          }

          let style = 'bg-surface border-border text-ink-2 hover:border-accent';
          if (isCorrect) {
            style = 'bg-ok-soft border-ok text-ok font-bold';
          } else if (isWrong) {
            style = 'bg-err-soft border-err text-err font-bold';
          } else if (isBlank) {
            style = 'bg-surface-2 border-border text-ink-2 font-medium';
          }

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => onSelectQuestion(idx)}
                className={`w-8 h-8 rounded text-xs font-mono flex items-center justify-center border transition-all ${style} ${
                  isCurrent ? 'ring-2 ring-accent ring-offset-1 font-bold z-10' : ''
                }`}
                title={`Item ${idx + 1} (${q.submoduloId}): ${
                  isAnswered ? `Marcado: ${r.resposta}` : 'Pendente'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
      </div>

      {/* Legenda Visual */}
      <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-border text-[11px] font-sans text-ink-2">
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded bg-ok-soft border border-ok" />
          Acerto (+1)
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded bg-err-soft border border-err" />
          Erro (-1)
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded bg-surface-2 border border-border" />
          Branco (0)
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded bg-surface border border-accent ring-1 ring-accent" />
          Atual
        </span>
      </div>
    </div>
  );
};
