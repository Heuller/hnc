import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
      className="card-editorial p-4 sm:p-5 space-y-3.5 my-4 bg-surface rounded-xl border border-border shadow-xs"
      aria-live="polite"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-2.5">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
          <span className="text-xs font-bold text-ink uppercase tracking-wider">
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
              className="text-[11px] font-semibold text-ink-2 hover:text-ink flex items-center gap-1 cursor-pointer transition-colors"
              title="Praticar novamente (a 1ª tentativa permanece para a nota do portão)"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Praticar</span>
            </button>
          </div>
        )}
      </div>

      <p className="font-serif text-sm sm:text-base text-ink leading-relaxed font-normal">
        {checkpoint.item}
      </p>

      {/* Ações CERTO e ERRADO com animação sutil de pulo no ícone (Parte D e F) */}
      <div className="grid grid-cols-2 sm:flex sm:items-center gap-3 pt-1">
        <button
          type="button"
          onClick={() => handleSelect('C')}
          disabled={isAnswered}
          className={`w-full sm:w-auto min-h-[48px] px-4 py-2.5 rounded-lg font-sans text-xs sm:text-sm font-bold transition-all duration-250 flex items-center justify-center gap-2 cursor-pointer ${
            answer === 'C'
              ? isCorrect
                ? 'bg-ok text-white shadow-xs'
                : 'bg-err text-white shadow-xs'
              : isAnswered && checkpoint.gabarito === 'C'
              ? 'bg-ok-soft text-ok border border-ok'
              : 'bg-surface-2 text-ink border border-border hover:bg-surface hover:border-accent'
          } ${isAnswered ? 'cursor-default' : 'active:scale-98'}`}
        >
          <motion.span
            animate={answer === 'C' ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="inline-flex"
          >
            <CheckCircle2 className="w-4 h-4" />
          </motion.span>
          <span>CERTO</span>
        </button>

        <button
          type="button"
          onClick={() => handleSelect('E')}
          disabled={isAnswered}
          className={`w-full sm:w-auto min-h-[48px] px-4 py-2.5 rounded-lg font-sans text-xs sm:text-sm font-bold transition-all duration-250 flex items-center justify-center gap-2 cursor-pointer ${
            answer === 'E'
              ? isCorrect
                ? 'bg-ok text-white shadow-xs'
                : 'bg-err text-white shadow-xs'
              : isAnswered && checkpoint.gabarito === 'E'
              ? 'bg-ok-soft text-ok border border-ok'
              : 'bg-surface-2 text-ink border border-border hover:bg-surface hover:border-accent'
          } ${isAnswered ? 'cursor-default' : 'active:scale-98'}`}
        >
          <motion.span
            animate={answer === 'E' ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="inline-flex"
          >
            <XCircle className="w-4 h-4" />
          </motion.span>
          <span>ERRADO</span>
        </button>
      </div>

      {/* Feedback Explicativo Canônico Imediato */}
      <AnimatePresence>
        {isAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className={`p-3.5 rounded-lg border text-xs sm:text-sm leading-relaxed ${
              isCorrect
                ? 'bg-ok-soft/70 border-ok text-ink'
                : 'bg-err-soft/70 border-err text-ink'
            }`}
          >
            <div className="font-bold mb-1 flex items-center gap-1.5">
              {isCorrect ? (
                <CheckCircle2 className="w-4 h-4 text-ok" />
              ) : (
                <XCircle className="w-4 h-4 text-err" />
              )}
              <span>
                Gabarito: <strong className="uppercase">{checkpoint.gabarito === 'C' ? 'Certo' : 'Errado'}</strong>
              </span>
            </div>
            <p className="m-0 font-serif leading-relaxed">{checkpoint.justificativa}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
