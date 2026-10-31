import React, { useState } from 'react';
import { obterTimestampAtual, calcularTempoDecorridoSegundos } from '../../utils/tempo';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, CheckCircle2, XCircle, RotateCcw, Terminal } from 'lucide-react';
import type { ExercicioX6 } from '../../domain/schemas/modulo.schema';
import type { ExercicioProps } from './types';

export const ExercicioX6CompletarExemplo: React.FC<ExercicioProps<ExercicioX6>> = ({
  exercicio,
  onResponder,
  disabled = false,
}) => {
  const [resposta, setResposta] = useState<string | null>(null);
  const [tempoInicio] = useState<number>(obterTimestampAtual);

  const isRespondido = resposta !== null;
  const gabaritoNormalizado = exercicio.gabarito.trim().toLowerCase();
  const acertou = isRespondido && resposta.trim().toLowerCase() === gabaritoNormalizado;

  const handleSelect = (escolha: string) => {
    if (isRespondido || disabled) return;
    setResposta(escolha);
    const correto = escolha.trim().toLowerCase() === gabaritoNormalizado;
    const tempoSegundos = calcularTempoDecorridoSegundos(tempoInicio);
    onResponder?.({
      exercicioId: exercicio.id,
      tipo: 'X6',
      acertou: correto,
      respostaDada: escolha,
      tempoSegundos,
    });
  };

  const handleReset = () => {
    setResposta(null);
  };

  const opcoes = exercicio.opcoesLacuna && exercicio.opcoesLacuna.length > 0
    ? exercicio.opcoesLacuna
    : [exercicio.gabarito, 'INNER JOIN', 'WHERE', 'HAVING', 'GROUP BY'].slice(0, 4);

  // Substitui a lacuna no código para pré-visualização
  const codigoRenderizado = resposta
    ? exercicio.codigoComLacuna.replace(/___+|\[LACUNA\]/g, resposta)
    : exercicio.codigoComLacuna;

  return (
    <div
      className="p-4 sm:p-5 rounded-2xl bg-surface border border-border shadow-editorial-sm space-y-4"
      role="region"
      aria-label="Exercício de Completar Exemplo"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 ">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-emerald-500/10 text-ok dark:text-emerald-400">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold font-sans uppercase tracking-wider text-ok dark:text-emerald-400">
              Completar o Exemplo · {exercicio.linguagem.toUpperCase()}
            </span>
            <span className="block text-xs text-ink-2">
              Exemplo resolvido com esmaecimento · Preencha a lacuna do comando
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

      {/* Bloco de Código com a Lacuna */}
      <div className="p-4 rounded-xl bg-slate-950 text-slate-100 font-mono text-xs sm:text-sm border border-slate-800 space-y-2 overflow-x-auto shadow-inner">
        <div className="flex items-center gap-2 text-slate-400 text-xs border-b border-slate-800 pb-2">
          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
          <span>Editor de Sintaxe ({exercicio.linguagem.toUpperCase()})</span>
        </div>
        <pre className="whitespace-pre-wrap leading-relaxed">
          {codigoRenderizado.split(/(_{3,}|\[LACUNA\])/g).map((parte, idx) => {
            if (parte.match(/_{3,}|\[LACUNA\]/)) {
              return (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-accent/30 text-amber-300 font-bold border border-amber-400/40 inline-block animate-pulse"
                >
                  {resposta || '___ [PREENCHA] ___'}
                </span>
              );
            }
            return <span key={idx}>{parte}</span>;
          })}
        </pre>
      </div>

      {/* Opções de Preenchimento da Lacuna */}
      <div className="space-y-2 pt-1" role="group" aria-label="Opções para preencher a lacuna">
        <span className="text-xs font-sans font-bold text-ink-2 block">
          Qual cláusula ou termo técnico completa a consulta?
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {opcoes.map((opcao, idx) => {
            const isSelected = resposta === opcao;
            const isGabarito = opcao.trim().toLowerCase() === gabaritoNormalizado;

            return (
              <button
                key={idx}
                type="button"
                disabled={isRespondido || disabled}
                onClick={() => handleSelect(opcao)}
                className={`p-3 rounded-xl border text-left font-mono text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${
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
                <span>{opcao}</span>
                <span className="text-xs font-sans text-ink-3">[{idx + 1}]</span>
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
                  <span>Sintaxe correta! O comando foi completado perfeitamente.</span>
                </span>
              ) : (
                <span className="text-err flex items-center gap-1.5">
                  <XCircle className="w-4 h-4" />
                  <span>Preenchimento incorreto. O termo canônico esperado é "{exercicio.gabarito}".</span>
                </span>
              )}
            </div>

            {exercicio.resultadoEsperado && (
              <div className="p-3 rounded-lg bg-surface border border-border space-y-1">
                <span className="text-xs font-mono font-bold text-ink-2 uppercase block">
                  Efeito / Resultado Esperado na Execução:
                </span>
                <p className="font-mono text-xs text-ink leading-relaxed m-0">
                  {exercicio.resultadoEsperado}
                </p>
              </div>
            )}

            <div className="space-y-1">
              <span className="text-xs font-sans font-bold uppercase tracking-wide text-ink-2 block">
                Fundamentação Técnica:
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
