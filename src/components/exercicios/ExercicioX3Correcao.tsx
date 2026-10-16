import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PenTool, CheckCircle2, XCircle, RotateCcw, AlertTriangle } from 'lucide-react';
import type { ExercicioX3 } from '../../domain/schemas/modulo.schema';
import type { ExercicioProps } from './types';

export const ExercicioX3Correcao: React.FC<ExercicioProps<ExercicioX3>> = ({
  exercicio,
  onResponder,
  disabled = false,
}) => {
  const [resposta, setResposta] = useState<string | null>(null);
  const [tempoInicio] = useState<number>(() => Date.now());

  const isRespondido = resposta !== null;
  const gabaritoNormalizado = exercicio.gabarito.trim().toLowerCase();
  const acertou = isRespondido && resposta.trim().toLowerCase() === gabaritoNormalizado;

  const handleSelect = (escolha: string) => {
    if (isRespondido || disabled) return;
    setResposta(escolha);
    const tempoSegundos = Math.max(1, Math.round((Date.now() - tempoInicio) / 1000));
    const correto = escolha.trim().toLowerCase() === gabaritoNormalizado;
    onResponder?.({
      exercicioId: exercicio.id,
      tipo: 'X3',
      acertou: correto,
      respostaDada: escolha,
      tempoSegundos,
    });
  };

  const handleReset = () => {
    setResposta(null);
  };

  // Assegura opções de correção mesmo se não vierem explícitas
  const opcoes = exercicio.opcoesCorrecao && exercicio.opcoesCorrecao.length > 0
    ? exercicio.opcoesCorrecao
    : [
        exercicio.gabarito,
        exercicio.enunciado,
        'O conceito não admite exceção na doutrina arquivística e biblioteconômica.',
      ];

  return (
    <div
      className="p-4 sm:p-5 rounded-2xl bg-surface border border-border shadow-editorial-sm space-y-4"
      role="region"
      aria-label="Exercício de Correção de Assertiva"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border/60">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400">
            <PenTool className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold font-sans uppercase tracking-wider text-rose-600 dark:text-rose-400">
              Corrija a Assertiva Incorreta
            </span>
            <span className="block text-[11px] text-ink-2">
              A assertiva abaixo contém um vício da banca. Escolha a versão corrigida:
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

      {/* Assertiva Original com Erro */}
      <div className="p-3.5 rounded-xl bg-err-soft/40 border border-err/30 space-y-1.5">
        <div className="flex items-center gap-1.5 text-xs font-bold text-err uppercase tracking-wider">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Assertiva com Armadilha:</span>
        </div>
        <p className="font-serif text-sm sm:text-base text-ink leading-relaxed m-0 italic">
          "{exercicio.enunciado}"
        </p>
        {exercicio.trechoIncorreto && (
          <div className="text-[11px] font-sans text-err font-medium pt-1">
            ⚠️ Ponto crítico: <u>{exercicio.trechoIncorreto}</u>
          </div>
        )}
      </div>

      {/* Opções de Correção */}
      <div className="space-y-2 pt-1" role="group" aria-label="Opções de correção para a assertiva">
        <span className="text-xs font-sans font-bold text-ink-2 block">
          Qual é a redação dogmaticamente correta?
        </span>
        {opcoes.map((opcao, idx) => {
          const isSelected = resposta === opcao;
          const isGabarito = opcao.trim().toLowerCase() === gabaritoNormalizado;

          return (
            <button
              key={idx}
              type="button"
              disabled={isRespondido || disabled}
              onClick={() => handleSelect(opcao)}
              className={`w-full min-h-[48px] p-3.5 rounded-xl border text-left text-xs sm:text-sm font-sans transition-all flex items-start gap-3 cursor-pointer ${
                isSelected
                  ? isGabarito
                    ? 'bg-ok-soft border-ok text-ok font-bold'
                    : 'bg-err-soft border-err text-err font-bold'
                  : isRespondido && isGabarito
                  ? 'bg-ok-soft/50 border-ok text-ok font-medium'
                  : 'bg-surface-2 border-border text-ink hover:border-accent hover:bg-surface'
              } ${isRespondido ? 'cursor-default' : 'active:scale-98'}`}
              aria-pressed={isSelected}
            >
              <span className="font-mono text-xs font-bold text-ink-3 mt-0.5 shrink-0">
                [{idx + 1}]
              </span>
              <span className="leading-relaxed flex-1">{opcao}</span>
            </button>
          );
        })}
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
                  <span>Excelente identificação! Você selecionou a versão canônica correta.</span>
                </span>
              ) : (
                <span className="text-err flex items-center gap-1.5">
                  <XCircle className="w-4 h-4" />
                  <span>Atenção: a versão correta difere da selecionada. Veja abaixo a fundamentação.</span>
                </span>
              )}
            </div>

            <div className="p-3 rounded-lg bg-surface border border-border space-y-1">
              <span className="text-xs font-bold text-ok flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Versão Oficialmente Correta:</span>
              </span>
              <p className="font-serif text-xs sm:text-sm text-ink leading-relaxed m-0">
                "{exercicio.gabarito}"
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-sans font-bold uppercase tracking-wide text-ink-2 block">
                Por que a assertiva original é falsa:
              </span>
              <p className="font-serif text-xs sm:text-sm text-ink leading-relaxed m-0">
                {exercicio.justificativa}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-border/40 text-[11px] text-ink-2 font-mono">
              <span>Fonte: {exercicio.fonte}</span>
              <span>Edital: {exercicio.editalRef}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
