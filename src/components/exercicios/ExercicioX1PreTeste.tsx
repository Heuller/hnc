import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CheckCircle2, XCircle, RotateCcw, BookOpen } from 'lucide-react';
import type { ExercicioX1 } from '../../domain/schemas/modulo.schema';
import type { ExercicioProps } from './types';

export const ExercicioX1PreTeste: React.FC<ExercicioProps<ExercicioX1>> = ({
  exercicio,
  onResponder,
  disabled = false,
}) => {
  const [resposta, setResposta] = useState<string | null>(null);
  const [tempoInicio] = useState<number>(() => Date.now());

  const isRespondido = resposta !== null;
  const gabaritoNormalizado = String(exercicio.gabarito).toUpperCase();
  const acertou = isRespondido && resposta.toUpperCase() === gabaritoNormalizado;

  const handleSelect = (escolha: string) => {
    if (isRespondido || disabled) return;
    setResposta(escolha);
    const tempoSegundos = Math.max(1, Math.round((Date.now() - tempoInicio) / 1000));
    const correto = escolha.toUpperCase() === gabaritoNormalizado;
    onResponder?.({
      exercicioId: exercicio.id,
      tipo: 'X1',
      acertou: correto,
      respostaDada: escolha,
      tempoSegundos,
    });
  };

  const handleReset = () => {
    setResposta(null);
  };

  const isBoleano =
    gabaritoNormalizado === 'C' ||
    gabaritoNormalizado === 'E' ||
    (exercicio.opcoes && exercicio.opcoes.length === 2 && exercicio.opcoes.includes('C') && exercicio.opcoes.includes('E'));

  return (
    <div
      className="p-4 sm:p-5 rounded-2xl bg-surface border border-accent/30 shadow-editorial-sm space-y-4"
      role="region"
      aria-label="Exercício de Pré-teste"
    >
      {/* Banner Informativo de Pré-teste */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 ">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-accent-soft text-accent">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold font-sans uppercase tracking-wider text-accent">
              Pré-teste de Ativação
            </span>
            <span className="block text-xs text-ink-2">
              Responda antes de ler a teoria · Sem nota nem penalidade
            </span>
          </div>
        </div>

        {isRespondido && (
          <button
            type="button"
            onClick={handleReset}
            className="text-xs text-ink-2 hover:text-ink flex items-center gap-1 cursor-pointer transition-colors"
            aria-label="Tentar novamente"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Tentar de novo</span>
          </button>
        )}
      </div>

      {/* Enunciado */}
      <p className="font-serif text-sm sm:text-base text-ink leading-relaxed font-normal">
        {exercicio.enunciado}
      </p>

      {/* Botões de Resposta */}
      <div className="pt-1">
        {isBoleano ? (
          <div className="grid grid-cols-2 gap-3" role="group" aria-label="Opções Certo e Errado">
            <button
              type="button"
              disabled={isRespondido || disabled}
              onClick={() => handleSelect('C')}
              className={`min-h-[48px] px-4 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
                resposta === 'C'
                  ? acertou
                    ? 'bg-ok text-white border-ok shadow-xs'
                    : 'bg-err text-white border-err shadow-xs'
                  : isRespondido && gabaritoNormalizado === 'C'
                  ? 'bg-ok-soft text-ok border-ok'
                  : 'bg-surface-2 text-ink border-border hover:border-accent hover:bg-surface'
              } ${isRespondido ? 'cursor-default' : 'active:scale-98'}`}
              aria-pressed={resposta === 'C'}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>CERTO</span>
            </button>

            <button
              type="button"
              disabled={isRespondido || disabled}
              onClick={() => handleSelect('E')}
              className={`min-h-[48px] px-4 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
                resposta === 'E'
                  ? acertou
                    ? 'bg-ok text-white border-ok shadow-xs'
                    : 'bg-err text-white border-err shadow-xs'
                  : isRespondido && gabaritoNormalizado === 'E'
                  ? 'bg-ok-soft text-ok border-ok'
                  : 'bg-surface-2 text-ink border-border hover:border-accent hover:bg-surface'
              } ${isRespondido ? 'cursor-default' : 'active:scale-98'}`}
              aria-pressed={resposta === 'E'}
            >
              <XCircle className="w-4 h-4" />
              <span>ERRADO</span>
            </button>
          </div>
        ) : (
          <div className="space-y-2" role="group" aria-label="Opções de múltipla escolha">
            {(exercicio.opcoes || [exercicio.gabarito]).map((op, idx) => {
              const opStr = String(op);
              const isSelected = resposta === opStr;
              const isGabarito = opStr.toUpperCase() === gabaritoNormalizado;

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={isRespondido || disabled}
                  onClick={() => handleSelect(opStr)}
                  className={`w-full min-h-[44px] p-3 rounded-xl border text-left text-xs sm:text-sm font-sans transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? isGabarito
                        ? 'bg-ok-soft border-ok text-ok font-bold'
                        : 'bg-err-soft border-err text-err font-bold'
                      : isRespondido && isGabarito
                      ? 'bg-ok-soft/50 border-ok text-ok font-medium'
                      : 'bg-surface-2 border-border text-ink hover:border-accent'
                  } ${isRespondido ? 'cursor-default' : 'active:scale-98'}`}
                  aria-pressed={isSelected}
                >
                  <span className="leading-snug">{opStr}</span>
                  <span className="text-xs font-mono font-bold text-ink-3">[{idx + 1}]</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Feedback Imediato */}
      <AnimatePresence>
        {isRespondido && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="p-4 rounded-xl border border-border bg-surface-2/60 space-y-3"
            aria-live="polite"
          >
            <div className="flex items-center gap-2 text-xs font-bold">
              {acertou ? (
                <span className="text-ok flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Boa intuição inicial! Você acertou antes de ler a teoria.</span>
                </span>
              ) : (
                <span className="text-accent flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Ótima tentativa! Errar no pré-teste prepara o cérebro para aprender o conceito exato.</span>
                </span>
              )}
            </div>

            <div className="text-xs sm:text-sm font-serif text-ink leading-relaxed">
              <span className="font-sans font-bold text-ink-2 block text-xs uppercase tracking-wider mb-1">
                Fundamentação Canônica:
              </span>
              {exercicio.justificativa}
            </div>

            {exercicio.conceitoChave && (
              <div className="p-2.5 rounded-lg bg-accent-soft/50 border border-accent/20 text-xs text-ink flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-accent shrink-0" />
                <span>
                  <strong>Atenção na leitura:</strong> foque especialmente em "{exercicio.conceitoChave}".
                </span>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-border/50 text-xs text-ink-2 font-mono">
              <span>Fonte: {exercicio.fonte}</span>
              <span>Edital: {exercicio.editalRef}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
