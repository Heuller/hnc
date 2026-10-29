import { PainelEstudoReverso } from '../common/PainelEstudoReverso';
import React, { useState } from 'react';
import { obterTimestampAtual, calcularTempoDecorridoSegundos } from '../../utils/tempo';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import type { ExercicioX8 } from '../../domain/schemas/modulo.schema';
import type { ExercicioProps } from './types';

export const ExercicioX8ItensSuporte: React.FC<ExercicioProps<ExercicioX8>> = ({
  exercicio,
  onResponder,
  disabled = false,
}) => {
  const [respostas, setRespostas] = useState<Record<string, 'C' | 'E'>>({});
  const [tempoInicio] = useState<number>(obterTimestampAtual);

  const totalItens = exercicio.itensVinculados.length;
  const todosRespondidos = exercicio.itensVinculados.every((item) => respostas[item.id] !== undefined);

  const handleJulgarItem = (itemId: string, escolha: 'C' | 'E') => {
    if (disabled || respostas[itemId] !== undefined) return;
    const updated = { ...respostas, [itemId]: escolha };
    setRespostas(updated);

    const isDone = exercicio.itensVinculados.every((item) => updated[item.id] !== undefined);
    if (isDone) {
      const acertos = exercicio.itensVinculados.filter(
        (item) => updated[item.id] === item.gabarito
      ).length;
      const taxa = acertos / totalItens;
      const tempoSegundos = calcularTempoDecorridoSegundos(tempoInicio);
      onResponder?.({
        exercicioId: exercicio.id,
        tipo: 'X8',
        acertou: taxa >= 0.7,
        respostaDada: updated,
        tempoSegundos,
      });
    }
  };

  const handleReset = () => {
    setRespostas({});
  };

  const totalAcertos = exercicio.itensVinculados.filter(
    (item) => respostas[item.id] === item.gabarito
  ).length;

  return (
    <div
      className="p-4 sm:p-5 rounded-2xl bg-surface border border-border shadow-editorial-sm space-y-4"
      role="region"
      aria-label="Exercício de Itens-Suporte com Texto-Base"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border/60">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold font-sans uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Itens-Suporte com Texto-Base
            </span>
            <span className="block text-xs text-ink-2">
              Transferência para formato Cebraspe · {totalItens} itens vinculados à situação-problema
            </span>
          </div>
        </div>

        {todosRespondidos && (
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

      {/* Texto-Base Contextual */}
      <div className="p-4 rounded-xl bg-surface-2/70 border border-border space-y-2">
        <span className="text-xs font-sans font-bold uppercase tracking-wider text-ink-2 block">
          Texto-Base de Suporte:
        </span>
        <p className="font-serif text-xs sm:text-sm text-ink leading-relaxed m-0 italic">
          "{exercicio.textoBase}"
        </p>
      </div>

      {/* Enunciado Geral */}
      <p className="font-serif text-sm sm:text-base text-ink leading-relaxed font-normal">
        {exercicio.enunciado}
      </p>

      {/* Bateria de Itens Vinculados */}
      <div className="space-y-3 pt-1" role="group" aria-label="Bateria de itens vinculados ao texto-base">
        {exercicio.itensVinculados.map((item, idx) => {
          const resp = respostas[item.id];
          const isItemRespondido = resp !== undefined;
          const isItemCorreto = resp === item.gabarito;

          return (
            <div
              key={item.id}
              className={`p-3.5 sm:p-4 rounded-xl border space-y-3 transition-all ${
                isItemRespondido
                  ? isItemCorreto
                    ? 'bg-ok-soft/30 border-ok/60'
                    : 'bg-err-soft/30 border-err/60'
                  : 'bg-surface-2/40 border-border'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold text-accent">
                  Item {idx + 1} de {totalItens}
                </span>
                {isItemRespondido && (
                  <span
                    className={`text-xs font-sans font-bold flex items-center gap-1 ${
                      isItemCorreto ? 'text-ok' : 'text-err'
                    }`}
                  >
                    {isItemCorreto ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                    <span>{isItemCorreto ? 'Correto' : 'Incorreto'}</span>
                  </span>
                )}
              </div>

              <p className="font-serif text-xs sm:text-sm text-ink leading-relaxed m-0">
                {item.enunciado}
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <button
                  type="button"
                  disabled={isItemRespondido || disabled}
                  onClick={() => handleJulgarItem(item.id, 'C')}
                  className={`min-h-[44px] px-3 py-2 rounded-lg font-sans text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                    resp === 'C'
                      ? isItemCorreto
                        ? 'bg-ok text-white border-ok shadow-xs'
                        : 'bg-err text-white border-err shadow-xs'
                      : isItemRespondido && item.gabarito === 'C'
                      ? 'bg-ok-soft text-ok border-ok'
                      : 'bg-surface text-ink border-border hover:border-accent'
                  } ${isItemRespondido ? 'cursor-default' : 'active:scale-98'}`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>CERTO</span>
                </button>

                <button
                  type="button"
                  disabled={isItemRespondido || disabled}
                  onClick={() => handleJulgarItem(item.id, 'E')}
                  className={`min-h-[44px] px-3 py-2 rounded-lg font-sans text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                    resp === 'E'
                      ? isItemCorreto
                        ? 'bg-ok text-white border-ok shadow-xs'
                        : 'bg-err text-white border-err shadow-xs'
                      : isItemRespondido && item.gabarito === 'E'
                      ? 'bg-ok-soft text-ok border-ok'
                      : 'bg-surface text-ink border-border hover:border-accent'
                  } ${isItemRespondido ? 'cursor-default' : 'active:scale-98'}`}
                >
                  <XCircle className="w-3.5 h-3.5" />
                  <span>ERRADO</span>
                </button>
              </div>

              {isItemRespondido && (
                <PainelEstudoReverso questao={{ id: item.id, item: item.enunciado, gabarito: item.gabarito, justificativa: item.justificativa }} resposta={resp} autoexplicacao={false} />
              )}
            </div>
          );
        })}
      </div>

      {/* Resumo Final do Grupo */}
      <AnimatePresence>
        {todosRespondidos && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="p-4 rounded-xl border border-border bg-surface-2/60 space-y-3"
            aria-live="polite"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold font-sans text-ink uppercase tracking-wider">
                Desempenho no Grupo de Itens:
              </span>
              <span className="font-mono text-xs font-bold text-accent">
                {totalAcertos} de {totalItens} acertos ({Math.round((totalAcertos / totalItens) * 100)}%)
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-sans font-bold uppercase tracking-wide text-ink-2 block">
                Comentário Geral e Doutrina de Suporte:
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
