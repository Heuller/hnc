import React, { useState } from 'react';
import { obterTimestampAtual, calcularTempoDecorridoSegundos } from '../../utils/tempo';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, CheckCircle2, XCircle, RotateCcw, Crosshair } from 'lucide-react';
import type { ExercicioX9 } from '../../domain/schemas/modulo.schema';
import type { ExercicioProps } from './types';

export const ExercicioX9CacaErro: React.FC<ExercicioProps<ExercicioX9>> = ({
  exercicio,
  onResponder,
  disabled = false,
}) => {
  const [indiceSelecionado, setIndiceSelecionado] = useState<number | null>(null);
  const [tempoInicio] = useState<number>(obterTimestampAtual);

  const isRespondido = indiceSelecionado !== null;

  // Determina o índice correto do gabarito (seja número direto ou frase correspondente)
  const indiceCorreto: number = React.useMemo(() => {
    if (typeof exercicio.gabarito === 'number') {
      return exercicio.gabarito;
    }
    if (exercicio.indiceFraseIncorreta !== undefined) {
      return exercicio.indiceFraseIncorreta;
    }
    // Procura por string
    const idx = exercicio.frases.findIndex(
      (f) => f.trim().toLowerCase() === String(exercicio.gabarito).trim().toLowerCase()
    );
    return idx >= 0 ? idx : 0;
  }, [exercicio.gabarito, exercicio.indiceFraseIncorreta, exercicio.frases]);

  const acertou = isRespondido && indiceSelecionado === indiceCorreto;

  const handleSelectFrase = (idx: number) => {
    if (isRespondido || disabled) return;
    setIndiceSelecionado(idx);
    const correto = idx === indiceCorreto;
    const tempoSegundos = calcularTempoDecorridoSegundos(tempoInicio);
    onResponder?.({
      exercicioId: exercicio.id,
      tipo: 'X9',
      acertou: correto,
      respostaDada: { indiceSelecionado: idx, frase: exercicio.frases[idx] },
      tempoSegundos,
    });
  };

  const handleReset = () => {
    setIndiceSelecionado(null);
  };

  return (
    <div
      className="p-4 sm:p-5 rounded-2xl bg-surface border border-border shadow-editorial-sm space-y-4"
      role="region"
      aria-label="Exercício de Caça ao Erro no Parágrafo"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border/60">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <Crosshair className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold font-sans uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Caça ao Erro no Parágrafo
            </span>
            <span className="block text-xs text-ink-2">
              Detecção de armadilha Cebraspe · Toque na frase que contém o erro doutrinário
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

      {/* Enunciado */}
      <p className="font-serif text-sm sm:text-base text-ink leading-relaxed font-normal">
        {exercicio.enunciado}
      </p>

      {/* Frases Clicáveis que formam o parágrafo */}
      <div className="p-4 rounded-xl bg-surface-2/60 border border-border space-y-2">
        <span className="text-xs font-sans font-bold uppercase tracking-wider text-ink-2 block">
          Toque na frase com a incorreção da banca:
        </span>
        <div className="space-y-2" role="group" aria-label="Frases do parágrafo">
          {exercicio.frases.map((frase, idx) => {
            const isSelected = indiceSelecionado === idx;
            const isCorreta = idx === indiceCorreto;

            return (
              <button
                key={idx}
                type="button"
                disabled={isRespondido || disabled}
                onClick={() => handleSelectFrase(idx)}
                className={`w-full min-h-[44px] p-3 rounded-xl border text-left text-xs sm:text-sm font-serif leading-relaxed transition-all flex items-start gap-3 cursor-pointer ${
                  isSelected
                    ? isCorreta
                      ? 'bg-ok-soft border-ok text-ink font-semibold shadow-2xs'
                      : 'bg-err-soft border-err text-ink font-semibold shadow-2xs'
                    : isRespondido && isCorreta
                    ? 'bg-ok-soft/50 border-ok text-ink'
                    : 'bg-surface border-border text-ink hover:border-accent hover:bg-surface-2/80'
                } ${isRespondido ? 'cursor-default' : 'active:scale-98'}`}
                aria-pressed={isSelected}
              >
                <span className="font-mono text-xs font-bold text-accent shrink-0 mt-0.5">
                  [{idx + 1}]
                </span>
                <span className="flex-1">{frase}</span>
              </button>
            );
          })}
        </div>
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
                  <span>
                    Armadilha detectada com sucesso! A frase [{indiceCorreto + 1}] contém o vício da assertiva.
                  </span>
                </span>
              ) : (
                <span className="text-err flex items-center gap-1.5">
                  <XCircle className="w-4 h-4" />
                  <span>
                    Atenção: a armadilha está na frase [{indiceCorreto + 1}]. Veja a explicação abaixo.
                  </span>
                </span>
              )}
            </div>

            {exercicio.explicacaoErro && (
              <div className="p-3 rounded-lg bg-surface border border-border space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-alerta">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Mecanismo da Armadilha Cebraspe:</span>
                </div>
                <p className="font-serif text-xs sm:text-sm text-ink leading-relaxed m-0">
                  {exercicio.explicacaoErro}
                </p>
              </div>
            )}

            <div className="space-y-1">
              <span className="text-xs font-sans font-bold uppercase tracking-wide text-ink-2 block">
                Fundamentação Canônica:
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
