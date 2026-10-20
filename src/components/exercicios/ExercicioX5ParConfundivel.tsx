import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Split, CheckCircle2, XCircle, RotateCcw, ArrowRightLeft } from 'lucide-react';
import type { ExercicioX5 } from '../../domain/schemas/modulo.schema';
import type { ExercicioProps } from './types';

export const ExercicioX5ParConfundivel: React.FC<ExercicioProps<ExercicioX5>> = ({
  exercicio,
  onResponder,
  disabled = false,
}) => {
  const [resposta, setResposta] = useState<'A' | 'B' | null>(null);
  const [tempoInicio] = useState<number>(() => Date.now());

  const isRespondido = resposta !== null;
  const acertou = isRespondido && resposta === exercicio.gabarito;

  const handleSelect = useCallback(
    (escolha: 'A' | 'B') => {
      if (isRespondido || disabled) return;
      setResposta(escolha);
      const correto = escolha === exercicio.gabarito;
      const tempoSegundos = Math.max(1, Math.round((Date.now() - tempoInicio) / 1000));
      onResponder?.({
        exercicioId: exercicio.id,
        tipo: 'X5',
        acertou: correto,
        respostaDada: escolha,
        tempoSegundos,
      });
    },
    [isRespondido, disabled, exercicio, tempoInicio, onResponder]
  );

  // Atalhos de teclado A e B (ou 1 e 2)
  useEffect(() => {
    if (disabled || isRespondido) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = document.activeElement?.tagName.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
      if (e.key === 'a' || e.key === 'A' || e.key === '1') {
        e.preventDefault();
        handleSelect('A');
      } else if (e.key === 'b' || e.key === 'B' || e.key === '2') {
        e.preventDefault();
        handleSelect('B');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [disabled, isRespondido, handleSelect]);

  const handleReset = () => {
    setResposta(null);
  };

  const conceitoGabarito = exercicio.gabarito === 'A' ? exercicio.conceitoA : exercicio.conceitoB;

  return (
    <div
      className="p-4 sm:p-5 rounded-2xl bg-surface border border-border shadow-editorial-sm space-y-4"
      role="region"
      aria-label="Exercício de Par Confundível"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border/60">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Split className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold font-sans uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Par Confundível · Contraste e Intercalação
            </span>
            <span className="block text-xs text-ink-2">
              Diferencie conceitos que a banca confunde intencionalmente
            </span>
          </div>
        </div>

        {isRespondido && (
          <button
            type="button"
            onClick={handleReset}
            className="text-xs text-ink-2 hover:text-ink flex items-center gap-1 cursor-pointer transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Refazer</span>
          </button>
        )}
      </div>

      {/* Destaque dos Dois Conceitos em Contraste */}
      <div className="grid grid-cols-2 gap-2 text-center">
        <div className="p-2.5 rounded-xl bg-surface-2 border border-border text-xs font-bold text-ink truncate">
          [A] {exercicio.conceitoA}
        </div>
        <div className="p-2.5 rounded-xl bg-surface-2 border border-border text-xs font-bold text-ink truncate">
          [B] {exercicio.conceitoB}
        </div>
      </div>

      {/* Afirmação a Ser Julgada */}
      <div className="p-4 rounded-xl bg-surface-2/60 border border-border space-y-1">
        <span className="text-xs font-sans font-bold uppercase tracking-wider text-ink-2 block">
          A afirmação a seguir refere-se a qual dos dois conceitos?
        </span>
        <p className="font-serif text-sm sm:text-base text-ink leading-relaxed m-0 font-normal">
          "{exercicio.afirmacao}"
        </p>
      </div>

      {/* Botões Conceito A vs Conceito B */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1" role="group" aria-label="Seleção do conceito correspondente">
        <button
          type="button"
          disabled={isRespondido || disabled}
          onClick={() => handleSelect('A')}
          className={`min-h-[50px] p-3 rounded-xl border text-left text-xs sm:text-sm font-sans transition-all flex items-center justify-between cursor-pointer ${
            resposta === 'A'
              ? acertou
                ? 'bg-ok text-white border-ok shadow-xs font-bold'
                : 'bg-err text-white border-err shadow-xs font-bold'
              : isRespondido && exercicio.gabarito === 'A'
              ? 'bg-ok-soft text-ok border-ok font-bold'
              : 'bg-surface-2 text-ink border-border hover:border-accent hover:bg-surface'
          } ${isRespondido ? 'cursor-default' : 'active:scale-98'}`}
          aria-pressed={resposta === 'A'}
          aria-label={`Opção A: ${exercicio.conceitoA}`}
        >
          <div className="min-w-0 pr-2">
            <span className="font-bold text-xs block mb-0.5 opacity-80">[A]</span>
            <span className="leading-tight block font-semibold">{exercicio.conceitoA}</span>
          </div>
          <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 shrink-0">
            A
          </span>
        </button>

        <button
          type="button"
          disabled={isRespondido || disabled}
          onClick={() => handleSelect('B')}
          className={`min-h-[50px] p-3 rounded-xl border text-left text-xs sm:text-sm font-sans transition-all flex items-center justify-between cursor-pointer ${
            resposta === 'B'
              ? acertou
                ? 'bg-ok text-white border-ok shadow-xs font-bold'
                : 'bg-err text-white border-err shadow-xs font-bold'
              : isRespondido && exercicio.gabarito === 'B'
              ? 'bg-ok-soft text-ok border-ok font-bold'
              : 'bg-surface-2 text-ink border-border hover:border-accent hover:bg-surface'
          } ${isRespondido ? 'cursor-default' : 'active:scale-98'}`}
          aria-pressed={resposta === 'B'}
          aria-label={`Opção B: ${exercicio.conceitoB}`}
        >
          <div className="min-w-0 pr-2">
            <span className="font-bold text-xs block mb-0.5 opacity-80">[B]</span>
            <span className="leading-tight block font-semibold">{exercicio.conceitoB}</span>
          </div>
          <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 shrink-0">
            B
          </span>
        </button>
      </div>

      {/* Feedback Explicativo */}
      <AnimatePresence>
        {isRespondido && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className={`p-4 rounded-xl border space-y-3 ${
              acertou ? 'bg-ok-soft/70 border-ok text-ink' : 'bg-err-soft/70 border-err text-ink'
            }`}
            aria-live="polite"
          >
            <div className="flex items-center gap-2 text-xs font-bold">
              {acertou ? (
                <span className="text-ok flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Exato! A afirmação descreve "{conceitoGabarito}".</span>
                </span>
              ) : (
                <span className="text-err flex items-center gap-1.5">
                  <XCircle className="w-4 h-4" />
                  <span>Incorreto. A afirmação refere-se a "{conceitoGabarito}".</span>
                </span>
              )}
            </div>

            {exercicio.distincoesChave && (
              <div className="p-3 rounded-lg bg-surface border border-border space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-accent">
                  <ArrowRightLeft className="w-3.5 h-3.5" />
                  <span>Distinção Dogmática Crucial:</span>
                </div>
                <p className="font-serif text-xs sm:text-sm text-ink leading-relaxed m-0">
                  {exercicio.distincoesChave}
                </p>
              </div>
            )}

            <div className="space-y-1">
              <span className="text-xs font-sans font-bold uppercase tracking-wide text-ink-2 block">
                Fundamentação Detalhada:
              </span>
              <p className="font-serif text-xs sm:text-sm text-ink leading-relaxed m-0">
                {exercicio.justificativa}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-border/40 text-xs text-ink-2 font-mono">
              <span>Fonte: {exercicio.fonte}</span>
              <span>Edital: {exercicio.editalRef}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
