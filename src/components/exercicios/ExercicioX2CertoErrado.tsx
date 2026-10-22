import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, RotateCcw, AlertTriangle } from 'lucide-react';
import type { ExercicioX2 } from '../../domain/schemas/modulo.schema';
import type { ExercicioProps } from './types';
import type { ConfidenceLevel } from '../../domain/concepts/types';
import { ConfidenceSelector } from '../review/ConfidenceSelector';

export const ExercicioX2CertoErrado: React.FC<ExercicioProps<ExercicioX2>> = ({
  exercicio,
  onResponder,
  disabled = false,
  contadorTexto,
}) => {
  const [resposta, setResposta] = useState<'C' | 'E' | null>(null);
  const [confianca, setConfianca] = useState<ConfidenceLevel | null>(null);
  const [tempoInicio] = useState<number>(() => Date.now());

  const isRespondido = resposta !== null;
  const acertou = isRespondido && resposta === exercicio.gabarito;

  const handleJulgar = useCallback(
    (escolha: 'C' | 'E') => {
      if (isRespondido || disabled) return;
      setResposta(escolha);
      const correto = escolha === exercicio.gabarito;
      const conf = confianca || (correto ? 'certeza' : 'duvida');
      setConfianca(conf);
      const tempoSegundos = Math.max(1, Math.round((Date.now() - tempoInicio) / 1000));
      onResponder?.({
        exercicioId: exercicio.id,
        tipo: 'X2',
        acertou: correto,
        respostaDada: escolha,
        confianca: conf,
        tempoSegundos,
      });
    },
    [isRespondido, disabled, exercicio, confianca, tempoInicio, onResponder]
  );

  const handleConfianca = (c: ConfidenceLevel) => {
    setConfianca(c);
    if (isRespondido) {
      const tempoSegundos = Math.max(1, Math.round((Date.now() - tempoInicio) / 1000));
      onResponder?.({
        exercicioId: exercicio.id,
        tipo: 'X2',
        acertou: acertou ?? false,
        respostaDada: resposta!,
        confianca: c,
        tempoSegundos,
      });
    }
  };

  // Atalhos de teclado C e E (desativados se focado em inputs)
  useEffect(() => {
    if (disabled || isRespondido) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const tag = document.activeElement?.tagName.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
      if (e.key === 'c' || e.key === 'C') {
        e.preventDefault();
        handleJulgar('C');
      } else if (e.key === 'e' || e.key === 'E') {
        e.preventDefault();
        handleJulgar('E');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [disabled, isRespondido, handleJulgar]);

  const handleReset = () => {
    setResposta(null);
    setConfianca(null);
  };

  const textoEnunciado = exercicio.enunciado || exercicio.item || '';

  return (
    <article
      className="p-4 sm:p-5 rounded-2xl bg-surface border border-border shadow-editorial-sm space-y-4"
      aria-label="Item Certo ou Errado Cebraspe"
    >
      {/* Cabeçalho */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border/60">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-accent px-2 py-0.5 rounded bg-accent-soft border border-accent/20">
            {contadorTexto || 'CERTO / ERRADO'}
          </span>
          <span className="text-xs font-mono text-ink-2">Padrão Cebraspe</span>
        </div>

        {isRespondido && (
          <button
            type="button"
            onClick={handleReset}
            className="text-xs text-ink-2 hover:text-ink flex items-center gap-1 cursor-pointer transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Praticar</span>
          </button>
        )}
      </div>

      {/* Enunciado do Item */}
      <p className="font-serif text-sm sm:text-base text-ink leading-relaxed font-normal">
        {textoEnunciado}
      </p>

      {/* Botões CERTO e ERRADO */}
      <div className="grid grid-cols-2 gap-3 pt-1" role="group" aria-label="Julgamento Cebraspe">
        <button
          type="button"
          disabled={isRespondido || disabled}
          onClick={() => handleJulgar('C')}
          className={`min-h-[48px] px-4 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
            resposta === 'C'
              ? acertou
                ? 'bg-ok text-white border-ok shadow-xs'
                : 'bg-err text-white border-err shadow-xs'
              : isRespondido && exercicio.gabarito === 'C'
              ? 'bg-ok-soft text-ok border-ok'
              : 'bg-surface-2 text-ink border-border hover:border-accent hover:bg-surface'
          } ${isRespondido ? 'cursor-default' : 'active:scale-98'}`}
          aria-pressed={resposta === 'C'}
          aria-label="Julgar assertiva como Certo (Atalho C)"
        >
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>CERTO</span>
          <span className="hidden sm:inline-block px-1 py-0.2 rounded text-xs font-mono bg-black/10 dark:bg-white/10 ml-0.5">
            C
          </span>
        </button>

        <button
          type="button"
          disabled={isRespondido || disabled}
          onClick={() => handleJulgar('E')}
          className={`min-h-[48px] px-4 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
            resposta === 'E'
              ? acertou
                ? 'bg-ok text-white border-ok shadow-xs'
                : 'bg-err text-white border-err shadow-xs'
              : isRespondido && exercicio.gabarito === 'E'
              ? 'bg-ok-soft text-ok border-ok'
              : 'bg-surface-2 text-ink border-border hover:border-accent hover:bg-surface'
          } ${isRespondido ? 'cursor-default' : 'active:scale-98'}`}
          aria-pressed={resposta === 'E'}
          aria-label="Julgar assertiva como Errado (Atalho E)"
        >
          <XCircle className="w-4 h-4 shrink-0" />
          <span>ERRADO</span>
          <span className="hidden sm:inline-block px-1 py-0.2 rounded text-xs font-mono bg-black/10 dark:bg-white/10 ml-0.5">
            E
          </span>
        </button>
      </div>

      {/* Seletor de Confiança Metacognitiva */}
      {isRespondido && exercicio.nivelConfianca !== false && (
        <ConfidenceSelector
          valorSelecionado={confianca || undefined}
          onSelecionar={handleConfianca}
        />
      )}

      {/* Feedback Imediato */}
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
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/40 pb-2">
              <span className={`text-xs font-bold flex items-center gap-1.5 ${acertou ? 'text-ok' : 'text-err'}`}>
                {acertou ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                <span>
                  {acertou ? 'Acertou!' : 'Errou!'} Gabarito Oficial:{' '}
                  <strong className="uppercase">{exercicio.gabarito === 'C' ? 'Certo' : 'Errado'}</strong>
                </span>
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-sans font-bold uppercase tracking-wide text-ink-2 block">
                Por que é {exercicio.gabarito === 'C' ? 'CERTO' : 'ERRADO'}:
              </span>
              <p className="font-serif text-xs sm:text-sm text-ink leading-relaxed m-0">
                {exercicio.justificativa}
              </p>
            </div>

            {/* Versão Correta para itens Errados */}
            {exercicio.gabarito === 'E' && exercicio.versao_correta && (
              <div className="p-3 rounded-lg bg-surface border border-border space-y-1">
                <span className="text-xs font-bold text-ok flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Como ficaria correto:</span>
                </span>
                <p className="font-serif text-xs leading-relaxed text-ink m-0 italic">
                  "{exercicio.versao_correta}"
                </p>
              </div>
            )}

            {/* Armadilha da Banca */}
            {exercicio.armadilhaBanca && (
              <div className="p-3 rounded-lg bg-alerta-soft border border-alerta/30 text-xs text-ink space-y-1">
                <span className="font-bold text-alerta flex items-center gap-1 uppercase tracking-wide text-xs">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Armadilha da Banca:</span>
                </span>
                <p className="font-sans text-xs leading-relaxed m-0">
                  {exercicio.armadilhaBanca}
                </p>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-border/40 text-xs text-ink-2 font-mono">
              <span>Fonte: {exercicio.fonte}</span>
              <span>Edital: {exercicio.editalRef}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};
