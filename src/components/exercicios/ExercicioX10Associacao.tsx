import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, CheckCircle2, AlertTriangle, RotateCcw, Undo2 } from 'lucide-react';
import type { ExercicioX10 } from '../../domain/schemas/modulo.schema';
import type { ExercicioProps } from './types';
import {
  shuffleConceptsColumn,
  PAIR_COLOR_PALETTES,
  type MatchedPairInfo,
  type AssociacaoCardItem,
} from '../../domain/associacao';

export const ExercicioX10Associacao: React.FC<ExercicioProps<ExercicioX10>> = ({
  exercicio,
  onResponder,
  disabled = false,
}) => {
  const [seed, setSeed] = useState(() => Date.now());
  const [selectedTermo, setSelectedTermo] = useState<string | null>(null);
  const [selectedDefinicao, setSelectedDefinicao] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<MatchedPairInfo[]>([]);
  const [pairError, setPairError] = useState<string | null>(null);
  const [pairSuccess, setPairSuccess] = useState<string | null>(null);
  const [shakingCard, setShakingCard] = useState<string | null>(null);
  const [tempoInicio] = useState<number>(() => Date.now());

  // Converte pares em items para associação
  const termCards: AssociacaoCardItem[] = useMemo(() => {
    return exercicio.pares.map((p, idx) => ({
      id: p.id || `term-${idx}`,
      nome: p.termo,
      conceito: p.definicao,
    }));
  }, [exercicio.pares]);

  // Coluna direita embaralhada via PRNG seeded garantindo não coincidir por inteiro com a esquerda
  const shuffledDefinicoes = useMemo(() => {
    return shuffleConceptsColumn(termCards, seed);
  }, [termCards, seed]);

  const totalPares = termCards.length;
  const todosCompletos = matchedPairs.length === totalPares && totalPares > 0;

  useEffect(() => {
    if (todosCompletos) {
      const tempoSegundos = Math.max(1, Math.round((Date.now() - tempoInicio) / 1000));
      onResponder?.({
        exercicioId: exercicio.id,
        tipo: 'X10',
        acertou: true,
        respostaDada: matchedPairs,
        tempoSegundos,
      });
    }
  }, [todosCompletos, matchedPairs, totalPares, exercicio.id, tempoInicio, onResponder]);

  const handleSelectTermo = (termo: string) => {
    if (disabled || matchedPairs.some((p) => p.authorName === termo)) return;
    setPairError(null);
    setPairSuccess(null);

    // Se já havia uma definição selecionada
    if (selectedDefinicao) {
      if (termo === selectedDefinicao) {
        const nextPairNum = matchedPairs.length + 1;
        const palette = PAIR_COLOR_PALETTES[(nextPairNum - 1) % PAIR_COLOR_PALETTES.length];
        setMatchedPairs((prev) => [
          ...prev,
          { authorName: termo, pairNumber: nextPairNum, colorStyle: palette },
        ]);
        setSelectedTermo(null);
        setSelectedDefinicao(null);
        setPairSuccess(`Correto! "${termo}" associado ao Par ${nextPairNum}.`);
        setTimeout(() => setPairSuccess(null), 2500);
      } else {
        setShakingCard(termo);
        setPairError(`Associação incorreta: "${termo}" não corresponde à definição selecionada.`);
        setTimeout(() => {
          setShakingCard(null);
          setSelectedTermo(null);
          setSelectedDefinicao(null);
        }, 1200);
      }
      return;
    }

    setSelectedTermo((prev) => (prev === termo ? null : termo));
  };

  const handleSelectDefinicao = (termoCorrespondente: string) => {
    if (disabled || matchedPairs.some((p) => p.authorName === termoCorrespondente)) return;
    setPairError(null);
    setPairSuccess(null);

    // Se já havia um termo selecionado
    if (selectedTermo) {
      if (selectedTermo === termoCorrespondente) {
        const nextPairNum = matchedPairs.length + 1;
        const palette = PAIR_COLOR_PALETTES[(nextPairNum - 1) % PAIR_COLOR_PALETTES.length];
        setMatchedPairs((prev) => [
          ...prev,
          { authorName: selectedTermo, pairNumber: nextPairNum, colorStyle: palette },
        ]);
        setSelectedTermo(null);
        setSelectedDefinicao(null);
        setPairSuccess(`Correto! "${selectedTermo}" associado ao Par ${nextPairNum}.`);
        setTimeout(() => setPairSuccess(null), 2500);
      } else {
        setShakingCard(termoCorrespondente);
        setPairError(`Associação incorreta: esta definição não pertence a "${selectedTermo}".`);
        setTimeout(() => {
          setShakingCard(null);
          setSelectedTermo(null);
          setSelectedDefinicao(null);
        }, 1200);
      }
      return;
    }

    setSelectedDefinicao((prev) => (prev === termoCorrespondente ? null : termoCorrespondente));
  };

  const handleUndo = () => {
    if (matchedPairs.length === 0) return;
    setMatchedPairs((prev) => prev.slice(0, -1));
    setSelectedTermo(null);
    setSelectedDefinicao(null);
    setPairError(null);
    setPairSuccess(null);
  };

  const handleReset = () => {
    setSelectedTermo(null);
    setSelectedDefinicao(null);
    setMatchedPairs([]);
    setPairError(null);
    setPairSuccess(null);
    setShakingCard(null);
    setSeed(Date.now() + Math.floor(Math.random() * 1000));
  };

  return (
    <div
      className="p-4 sm:p-5 rounded-2xl bg-surface border border-border shadow-editorial-sm space-y-4"
      role="region"
      aria-label="Exercício de Associação de Conceitos"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border/60">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold font-sans uppercase tracking-wider text-teal-600 dark:text-teal-400">
              Associação Conceitual
            </span>
            <span className="block text-xs text-ink-2">
              Recuperação ativa por pares · Toque no termo e na sua respectiva definição
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {matchedPairs.length > 0 && !todosCompletos && (
            <button
              type="button"
              onClick={handleUndo}
              className="text-xs text-ink-2 hover:text-ink flex items-center gap-1 cursor-pointer transition-colors"
              aria-label="Desfazer último par associado"
            >
              <Undo2 className="w-3.5 h-3.5" />
              <span>Desfazer</span>
            </button>
          )}

          {todosCompletos && (
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
      </div>

      {/* Enunciado */}
      <p className="font-serif text-sm sm:text-base text-ink leading-relaxed font-normal">
        {exercicio.enunciado}
      </p>

      {/* Dica de seleção ativa */}
      {(selectedTermo || selectedDefinicao) && !pairError && !pairSuccess && (
        <div className="p-3 rounded-xl bg-accent-soft/70 border border-accent/30 text-ink text-xs font-sans flex items-center gap-2 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping shrink-0" />
          <span>
            {selectedTermo
              ? `👉 Termo selecionado: "${selectedTermo}". Agora toque na respectiva definição à direita.`
              : `👈 Definição selecionada. Agora toque no respectivo termo à esquerda.`}
          </span>
        </div>
      )}

      {/* Mensagens In-Place de Sucesso / Erro */}
      {pairError && (
        <div className="p-3 rounded-xl bg-err-soft border-2 border-err text-err text-xs font-sans font-semibold flex items-center gap-2.5 animate-fadeIn">
          <AlertTriangle className="w-4 h-4 shrink-0 text-err" />
          <span>{pairError}</span>
        </div>
      )}

      {pairSuccess && (
        <div className="p-3 rounded-xl bg-ok-soft border-2 border-ok text-ok text-xs font-sans font-semibold flex items-center gap-2.5 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 shrink-0 text-ok" />
          <span>{pairSuccess}</span>
        </div>
      )}

      {/* D3 Regressão Resolvida: contagem dinâmica totalPares */}
      {todosCompletos && (
        <div className="p-3.5 rounded-xl bg-ok-soft border-2 border-ok text-ok text-xs font-sans flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 shrink-0 text-ok" />
            <span className="font-bold text-sm">
              Excelente! Todos os {totalPares} pares foram associados corretamente.
            </span>
          </div>
        </div>
      )}

      {/* Grid 2 Colunas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
        {/* Coluna 1: Termos */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-ink-2 font-semibold">
            Termos / Autores
          </span>
          <div className="space-y-2" role="group" aria-label="Termos para associar">
            {termCards.map((item) => {
              const match = matchedPairs.find((p) => p.authorName === item.nome);
              const isMatched = !!match;
              const isSelected = selectedTermo === item.nome;
              const isShaking = shakingCard === item.nome;

              return (
                <button
                  key={item.id}
                  type="button"
                  disabled={isMatched || disabled}
                  onClick={() => handleSelectTermo(item.nome)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectTermo(item.nome);
                    }
                  }}
                  aria-pressed={isSelected}
                  aria-label={isMatched ? `${item.nome}, associado ao Par ${match?.pairNumber}` : `Termo: ${item.nome}`}
                  className={`w-full min-h-[56px] p-3 rounded-xl border text-left text-xs font-sans font-semibold transition-all flex items-center justify-between cursor-pointer foco focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                    isMatched
                      ? `${match.colorStyle.bg} ${match.colorStyle.border} opacity-95 cursor-default font-bold`
                      : isShaking
                      ? 'bg-err-soft border-err text-err ring-2 ring-err/60 animate-shake'
                      : isSelected
                      ? 'bg-accent-soft border-accent text-ink ring-2 ring-accent shadow-xs scale-[1.01]'
                      : 'bg-surface-2/60 border-border text-ink hover:border-accent/50'
                  }`}
                >
                  <span className="leading-snug">{item.nome}</span>
                  {isMatched && (
                    <span className={`text-xs font-mono px-2 py-0.5 rounded-full font-bold ml-2 shrink-0 flex items-center gap-1 ${match.colorStyle.badge}`}>
                      <span>✓ Par {match.pairNumber}</span>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Coluna 2: Definições */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-ink-2 font-semibold">
            Definições / Conceitos
          </span>
          <div className="space-y-2" role="group" aria-label="Definições para associar">
            {shuffledDefinicoes.map((item) => {
              const match = matchedPairs.find((p) => p.authorName === item.nome);
              const isMatched = !!match;
              const isSelected = selectedDefinicao === item.nome;
              const isShaking = shakingCard === item.nome;

              return (
                <button
                  key={item.id}
                  type="button"
                  disabled={isMatched || disabled}
                  onClick={() => handleSelectDefinicao(item.nome)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectDefinicao(item.nome);
                    }
                  }}
                  aria-pressed={isSelected}
                  aria-label={isMatched ? `${item.conceito}, associado ao Par ${match?.pairNumber}` : `Definição: ${item.conceito}`}
                  className={`w-full min-h-[56px] p-3 rounded-xl border text-left text-xs font-sans transition-all flex items-center justify-between cursor-pointer foco focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                    isMatched
                      ? `${match.colorStyle.bg} ${match.colorStyle.border} opacity-95 cursor-default font-medium`
                      : isShaking
                      ? 'bg-err-soft border-err text-err ring-2 ring-err/60 animate-shake'
                      : isSelected
                      ? 'bg-accent-soft border-accent text-ink ring-2 ring-accent shadow-xs scale-[1.01]'
                      : 'bg-surface-2/60 border-border text-ink-2 hover:text-ink hover:border-accent/50'
                  }`}
                >
                  <span className="leading-snug pr-2">{item.conceito}</span>
                  {isMatched && (
                    <span className={`text-xs font-mono px-2 py-0.5 rounded-full font-bold shrink-0 flex items-center gap-1 ${match.colorStyle.badge}`}>
                      <span>✓ Par {match.pairNumber}</span>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Justificativa Canônica ao Concluir */}
      <AnimatePresence>
        {todosCompletos && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="p-4 rounded-xl border border-border bg-surface-2/60 space-y-2 mt-4"
            aria-live="polite"
          >
            <span className="text-xs font-sans font-bold uppercase tracking-wide text-ink-2 block">
              Fundamentação Canônica da Associação:
            </span>
            <p className="font-serif text-xs sm:text-sm text-ink leading-relaxed m-0">
              {exercicio.justificativa}
            </p>
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
