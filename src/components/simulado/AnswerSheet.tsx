import React, { useState } from 'react';
import { CheckCircle2, XCircle, MinusCircle } from 'lucide-react';
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
          className={`py-1 px-2.5 rounded font-sans font-medium transition-colors cursor-pointer ${
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
          className={`py-1 px-2.5 rounded font-sans font-medium transition-colors cursor-pointer ${
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
          className={`py-1 px-2.5 rounded font-sans font-medium transition-colors cursor-pointer ${
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
          className={`py-1 px-2.5 rounded font-sans font-medium transition-colors cursor-pointer ${
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
          className={`py-1 px-2.5 rounded font-sans font-medium transition-colors cursor-pointer ${
            filter === 'pendentes'
              ? 'bg-surface text-ink border border-border font-semibold'
              : 'text-ink-2 hover:text-ink'
          }`}
        >
          Pendentes
        </button>
      </div>

      {/* Grade de Questões */}
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
              className={`relative w-8 h-8 rounded text-xs font-mono flex items-center justify-center border transition-all foco ${style} ${
                isCurrent ? 'ring-2 ring-accent ring-offset-1 font-bold z-10' : ''
              }`}
              aria-label={`Item ${idx + 1}${
                isCorrect ? ' - Acerto (+1)' : isWrong ? ' - Erro (-1)' : isBlank ? ' - Em Branco' : ' - Pendente'
              }`}
              title={`Item ${idx + 1} (${q.submoduloId}): ${
                isAnswered ? `Marcado: ${r.resposta}` : 'Pendente'
              }`}
            >
              <span>{idx + 1}</span>
              {isCorrect && (
                <span
                  className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-ok text-[7px] flex items-center justify-center text-white leading-none font-sans font-bold"
                  aria-hidden="true"
                >
                  ✓
                </span>
              )}
              {isWrong && (
                <span
                  className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-err text-[7px] flex items-center justify-center text-white leading-none font-sans font-bold"
                  aria-hidden="true"
                >
                  ✕
                </span>
              )}
              {isBlank && (
                <span
                  className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-ink-2 text-[7px] flex items-center justify-center text-white leading-none font-sans font-bold"
                  aria-hidden="true"
                >
                  –
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Legenda Visual com Ícone + Rótulo + Cor (Acessibilidade WCAG 2.2) */}
      <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-border text-xs font-sans text-ink-2">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-ok shrink-0" aria-hidden="true" />
          <span>Acerto (+1)</span>
        </span>
        <span className="flex items-center gap-1.5">
          <XCircle className="w-3.5 h-3.5 text-err shrink-0" aria-hidden="true" />
          <span>Erro (-1)</span>
        </span>
        <span className="flex items-center gap-1.5">
          <MinusCircle className="w-3.5 h-3.5 text-ink-2 shrink-0" aria-hidden="true" />
          <span>Em Branco (0)</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-surface border border-accent ring-1 ring-accent shrink-0" aria-hidden="true" />
          <span>Item Atual</span>
        </span>
      </div>
    </div>
  );
};
