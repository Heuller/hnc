import React, { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw, Lightbulb } from 'lucide-react';
import { Badge } from '../common/Badge';

export interface CheckpointData {
  id: string;
  pergunta: string;
  item: string;
  gabarito: 'C' | 'E';
  justificativa: string;
}

export interface CheckpointCardProps {
  checkpoint: CheckpointData;
  userAnswer?: 'C' | 'E';
  onAnswer?: (answer: 'C' | 'E') => void;
  onReset?: () => void;
}

export const CheckpointCard: React.FC<CheckpointCardProps> = ({
  checkpoint,
  userAnswer: propAnswer,
  onAnswer,
  onReset,
}) => {
  const [internalAnswer, setInternalAnswer] = useState<'C' | 'E' | undefined>(propAnswer);

  const answer = propAnswer !== undefined ? propAnswer : internalAnswer;
  const isAnswered = answer !== undefined;
  const isCorrect = answer === checkpoint.gabarito;

  const handleSelect = (choice: 'C' | 'E') => {
    if (isAnswered) return;
    setInternalAnswer(choice);
    onAnswer?.(choice);
  };

  const handleRedo = () => {
    setInternalAnswer(undefined);
    onReset?.();
  };

  return (
    <div
      className="card-editorial p-4 sm:p-5 space-y-3.5 my-4"
      aria-live="polite"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-theme pb-2.5">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-theme-accent shrink-0" aria-hidden="true" />
          <span className="text-xs font-bold text-theme-ink uppercase tracking-wider">
            {checkpoint.pergunta}
          </span>
        </div>

        {isAnswered && (
          <div className="flex items-center gap-2">
            <Badge variant={isCorrect ? 'certo' : 'errado'} size="sm">
              {isCorrect ? 'Acertou! (+1 pt líquido)' : 'Errou! (-1 pt anula um acerto)'}
            </Badge>
            <button
              onClick={handleRedo}
              className="text-[11px] font-semibold text-theme-ink-2 hover:text-theme-ink flex items-center gap-1 cursor-pointer"
              title="Refazer este checkpoint"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Refazer</span>
            </button>
          </div>
        )}
      </div>

      <p className="font-serif-reading text-sm sm:text-base text-theme-ink leading-relaxed font-normal">
        {checkpoint.item}
      </p>

      {/* Ações CERTO e ERRADO */}
      <div className="flex items-center gap-3 pt-1">
        <button
          onClick={() => handleSelect('C')}
          disabled={isAnswered}
          className={`touch-target px-4 py-2 rounded-md font-sans text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            answer === 'C'
              ? isCorrect
                ? 'bg-theme-ok text-white'
                : 'bg-theme-err text-white'
              : isAnswered && checkpoint.gabarito === 'C'
              ? 'bg-theme-ok-soft text-theme-ok border border-theme-ok'
              : 'bg-theme-surface-2 text-theme-ink border border-theme hover:bg-theme-surface'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>CERTO</span>
        </button>

        <button
          onClick={() => handleSelect('E')}
          disabled={isAnswered}
          className={`touch-target px-4 py-2 rounded-md font-sans text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            answer === 'E'
              ? isCorrect
                ? 'bg-theme-ok text-white'
                : 'bg-theme-err text-white'
              : isAnswered && checkpoint.gabarito === 'E'
              ? 'bg-theme-ok-soft text-theme-ok border border-theme-ok'
              : 'bg-theme-surface-2 text-theme-ink border border-theme hover:bg-theme-surface'
          }`}
        >
          <XCircle className="w-3.5 h-3.5" />
          <span>ERRADO</span>
        </button>
      </div>

      {/* Feedback Explicativo Canônico Imediato */}
      {isAnswered && (
        <div
          className={`p-3.5 rounded-lg border text-xs sm:text-sm leading-relaxed ${
            isCorrect
              ? 'bg-theme-ok-soft/60 border-theme-ok text-theme-ink'
              : 'bg-theme-err-soft/60 border-theme-err text-theme-ink'
          }`}
        >
          <div className="font-bold mb-1 flex items-center gap-1.5">
            {isCorrect ? (
              <CheckCircle2 className="w-4 h-4 text-theme-ok" />
            ) : (
              <XCircle className="w-4 h-4 text-theme-err" />
            )}
            <span>
              Gabarito Oficial: <strong className="uppercase">{checkpoint.gabarito === 'C' ? 'Certo' : 'Errado'}</strong>
            </span>
          </div>
          <p className="m-0 font-serif-reading">{checkpoint.justificativa}</p>
        </div>
      )}
    </div>
  );
};
