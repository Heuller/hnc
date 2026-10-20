import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ListOrdered, CheckCircle2, XCircle, RotateCcw, ChevronUp, ChevronDown } from 'lucide-react';
import type { ExercicioX7 } from '../../domain/schemas/modulo.schema';
import type { ExercicioProps } from './types';

export const ExercicioX7OrdenarProcedimento: React.FC<ExercicioProps<ExercicioX7>> = ({
  exercicio,
  onResponder,
  disabled = false,
}) => {
  // Inicializa com ordem embaralhada
  const [ordemAtual, setOrdemAtual] = useState<number[]>(() => {
    const indices = exercicio.etapas.map((_, i) => i);
    // Embaralha se tiver mais de 2 etapas
    const embaralhado = [...indices].sort(() => 0.5 - Math.random());
    const igual = embaralhado.every((v, idx) => v === idx);
    if (igual && indices.length > 1) {
      return [...indices.slice(1), indices[0]];
    }
    return embaralhado;
  });

  const [verificado, setVerificado] = useState<boolean>(false);
  const [tempoInicio] = useState<number>(() => Date.now());

  // Converte gabarito para array de índices numéricos se vier como strings ou números
  const gabaritoIndices: number[] = React.useMemo(() => {
    if (Array.isArray(exercicio.gabarito) && typeof exercicio.gabarito[0] === 'number') {
      return exercicio.gabarito as number[];
    }
    if (Array.isArray(exercicio.gabarito) && typeof exercicio.gabarito[0] === 'string') {
      const gStrings = exercicio.gabarito as string[];
      return gStrings.map((s) => exercicio.etapas.indexOf(s));
    }
    // Default sequencial 0, 1, 2...
    return exercicio.etapas.map((_, i) => i);
  }, [exercicio.gabarito, exercicio.etapas]);

  const acertou =
    verificado &&
    ordemAtual.length === gabaritoIndices.length &&
    ordemAtual.every((val, idx) => val === gabaritoIndices[idx]);

  const moverEtapa = (index: number, direcao: 'up' | 'down') => {
    if (disabled || verificado) return;
    const novoIndice = direcao === 'up' ? index - 1 : index + 1;
    if (novoIndice < 0 || novoIndice >= ordemAtual.length) return;

    const novaOrdem = [...ordemAtual];
    const temp = novaOrdem[index];
    novaOrdem[index] = novaOrdem[novoIndice];
    novaOrdem[novoIndice] = temp;
    setOrdemAtual(novaOrdem);
  };

  const handleVerificar = () => {
    if (verificado || disabled) return;
    setVerificado(true);
    const tempoSegundos = Math.max(1, Math.round((Date.now() - tempoInicio) / 1000));
    const correto =
      ordemAtual.length === gabaritoIndices.length &&
      ordemAtual.every((val, idx) => val === gabaritoIndices[idx]);
    onResponder?.({
      exercicioId: exercicio.id,
      tipo: 'X7',
      acertou: correto,
      respostaDada: ordemAtual,
      tempoSegundos,
    });
  };

  const handleReset = () => {
    setVerificado(false);
    const indices = exercicio.etapas.map((_, i) => i);
    setOrdemAtual([...indices.slice(1), indices[0]]);
  };

  return (
    <div
      className="p-4 sm:p-5 rounded-2xl bg-surface border border-border shadow-editorial-sm space-y-4"
      role="region"
      aria-label="Exercício de Ordenação de Procedimento"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border/60">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400">
            <ListOrdered className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold font-sans uppercase tracking-wider text-teal-600 dark:text-teal-400">
              Ordenar o Procedimento
            </span>
            <span className="block text-xs text-ink-2">
              Recuperação de estrutura e processos · Ajuste as etapas na ordem correta
            </span>
          </div>
        </div>

        {verificado && (
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

      {/* Enunciado */}
      <p className="font-serif text-sm sm:text-base text-ink leading-relaxed font-normal">
        {exercicio.enunciado}
      </p>

      {/* Lista de Etapas com Controles de Reordenação */}
      <div className="space-y-2 pt-1" role="group" aria-label="Etapas do procedimento a ordenar">
        {ordemAtual.map((etapaIdx, posicaoVisual) => {
          const textoEtapa = exercicio.etapas[etapaIdx];
          const posicaoCorreta = gabaritoIndices[posicaoVisual] === etapaIdx;

          return (
            <div
              key={etapaIdx}
              className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-all ${
                verificado
                  ? posicaoCorreta
                    ? 'bg-ok-soft/50 border-ok text-ink'
                    : 'bg-err-soft/50 border-err text-ink'
                  : 'bg-surface-2 border-border text-ink'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-7 h-7 rounded-full bg-surface border border-border text-xs font-mono font-bold flex items-center justify-center shrink-0">
                  {posicaoVisual + 1}
                </span>
                <span className="text-xs sm:text-sm font-sans font-medium leading-snug">
                  {textoEtapa}
                </span>
              </div>

              {!verificado && (
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    disabled={posicaoVisual === 0 || disabled}
                    onClick={() => moverEtapa(posicaoVisual, 'up')}
                    className="p-2 rounded-lg border border-border bg-surface text-ink-2 hover:text-ink disabled:opacity-30 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
                    aria-label={`Mover etapa "${textoEtapa}" para cima`}
                  >
                    <ChevronUp className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    disabled={posicaoVisual === ordemAtual.length - 1 || disabled}
                    onClick={() => moverEtapa(posicaoVisual, 'down')}
                    className="p-2 rounded-lg border border-border bg-surface text-ink-2 hover:text-ink disabled:opacity-30 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
                    aria-label={`Mover etapa "${textoEtapa}" para baixo`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Botão de Verificação */}
      {!verificado && (
        <div className="pt-2">
          <button
            type="button"
            disabled={disabled}
            onClick={handleVerificar}
            className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-xl bg-accent text-white font-sans text-xs font-bold hover:bg-accent/90 transition-all cursor-pointer shadow-xs"
          >
            Verificar Sequência
          </button>
        </div>
      )}

      {/* Feedback Explicativo */}
      <AnimatePresence>
        {verificado && (
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
                  <span>Sequência perfeita! Todas as etapas estão na ordem canônica.</span>
                </span>
              ) : (
                <span className="text-err flex items-center gap-1.5">
                  <XCircle className="w-4 h-4" />
                  <span>A ordem acima contém inversões em relação ao fluxo regulamentar.</span>
                </span>
              )}
            </div>

            <div className="space-y-1">
              <span className="text-xs font-sans font-bold uppercase tracking-wide text-ink-2 block">
                Fluxo Sequencial Normativo:
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
