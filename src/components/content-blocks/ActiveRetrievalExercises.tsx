import React, { useState, useMemo, useEffect } from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Undo2,
} from 'lucide-react';
import type { MnemonicoAutorCard, MnemonicoTimelineItem, PegadinhaBancaItem } from '../../domain/schemas/mnemonico.schema';
import {
  shuffleConceptsColumn,
  PAIR_COLOR_PALETTES,
  type MatchedPairInfo,
  type AssociacaoCardItem,
} from '../../domain/associacao';
import { useProgressStore } from '../../store/useProgressStore';

interface ActiveRetrievalProps {
  submoduloNumero: string;
  autores: (string | MnemonicoAutorCard)[];
  timeline: MnemonicoTimelineItem[];
  pegadinhas: (string | PegadinhaBancaItem)[];
}

export const ActiveRetrievalExercises: React.FC<ActiveRetrievalProps> = ({
  submoduloNumero,
  autores,
  timeline,
  pegadinhas,
}) => {
  const [activeTab, setActiveTab] = useState<'associacao' | 'cronologia' | 'armadilha'>('associacao');

  // -------------------------------------------------------------
  // MODO 1: ASSOCIAÇÃO AUTOR <-> CONCEITO/OBRA (B4)
  // -------------------------------------------------------------
  const authorCards: AssociacaoCardItem[] = useMemo(() => {
    return autores
      .map((a, idx) => {
        if (typeof a === 'string') return { id: `auth-${idx}`, nome: a, conceito: `Doutrina canônica de ${a}` };
        return {
          id: `auth-${idx}`,
          nome: a.nome,
          conceito: a.ideiaChave || a.obraPrincipal || `Teórico canônico`,
        };
      })
      .slice(0, 4);
  }, [autores]);

  // Semente de embaralhamento registrada a cada ciclo/reinício (B4)
  const [seed, setSeed] = useState(() => Date.now());

  // Coluna direita embaralhada via PRNG seeded garantindo não coincidir por inteiro com a esquerda
  const shuffledConcepts = useMemo(() => {
    return shuffleConceptsColumn(authorCards, seed);
  }, [authorCards, seed]);

  const registrarSecaoVisualizada = useProgressStore((s) => s.registrarSecaoVisualizada);
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<MatchedPairInfo[]>([]);
  const [pairError, setPairError] = useState<string | null>(null);
  const [pairSuccess, setPairSuccess] = useState<string | null>(null);
  const [shakingCard, setShakingCard] = useState<string | null>(null);

  useEffect(() => {
    if (matchedPairs.length === authorCards.length && authorCards.length > 0) {
      registrarSecaoVisualizada(submoduloNumero, 'sec-recuperacao-ativa');
    }
  }, [matchedPairs.length, authorCards.length, submoduloNumero, registrarSecaoVisualizada]);

  const handleSelectAuthor = (nome: string) => {
    if (matchedPairs.some((p) => p.authorName === nome)) return;
    setPairError(null);
    setPairSuccess(null);

    // Se já havia um conceito selecionado previamente (seleção bidirecional)
    if (selectedConcept) {
      if (nome === selectedConcept) {
        const nextPairNum = matchedPairs.length + 1;
        const palette = PAIR_COLOR_PALETTES[(nextPairNum - 1) % PAIR_COLOR_PALETTES.length];
        setMatchedPairs((prev) => [
          ...prev,
          { authorName: nome, pairNumber: nextPairNum, colorStyle: palette },
        ]);
        setSelectedAuthor(null);
        setSelectedConcept(null);
        setPairSuccess(`Correto! ${nome} associado com sucesso ao Par ${nextPairNum}.`);
        setTimeout(() => setPairSuccess(null), 2500);
      } else {
        setShakingCard(nome);
        setPairError(`Associação incorreta: ${nome} não corresponde ao conceito selecionado. Releia a teoria!`);
        setTimeout(() => {
          setShakingCard(null);
          setSelectedAuthor(null);
          setSelectedConcept(null);
        }, 1200);
      }
      return;
    }

    // Alterna seleção
    setSelectedAuthor((prev) => (prev === nome ? null : nome));
  };

  const handleSelectConcept = (nomeCorrespondente: string) => {
    if (matchedPairs.some((p) => p.authorName === nomeCorrespondente)) return;
    setPairError(null);
    setPairSuccess(null);

    // Se já havia um autor selecionado previamente (seleção bidirecional)
    if (selectedAuthor) {
      if (selectedAuthor === nomeCorrespondente) {
        const nextPairNum = matchedPairs.length + 1;
        const palette = PAIR_COLOR_PALETTES[(nextPairNum - 1) % PAIR_COLOR_PALETTES.length];
        setMatchedPairs((prev) => [
          ...prev,
          { authorName: selectedAuthor, pairNumber: nextPairNum, colorStyle: palette },
        ]);
        setSelectedAuthor(null);
        setSelectedConcept(null);
        setPairSuccess(`Correto! ${selectedAuthor} associado com sucesso ao Par ${nextPairNum}.`);
        setTimeout(() => setPairSuccess(null), 2500);
      } else {
        setShakingCard(nomeCorrespondente);
        setPairError(`Associação incorreta: este conceito não pertence a ${selectedAuthor}. Tente novamente!`);
        setTimeout(() => {
          setShakingCard(null);
          setSelectedAuthor(null);
          setSelectedConcept(null);
        }, 1200);
      }
      return;
    }

    // Alterna seleção
    setSelectedConcept((prev) => (prev === nomeCorrespondente ? null : nomeCorrespondente));
  };

  const handleUndo = () => {
    if (matchedPairs.length === 0) return;
    setMatchedPairs((prev) => prev.slice(0, -1));
    setSelectedAuthor(null);
    setSelectedConcept(null);
    setPairError(null);
    setPairSuccess(null);
  };

  const resetAssociacao = () => {
    setSelectedAuthor(null);
    setSelectedConcept(null);
    setMatchedPairs([]);
    setPairError(null);
    setPairSuccess(null);
    setShakingCard(null);
    setSeed(Date.now() + Math.floor(Math.random() * 1000));
  };

  // -------------------------------------------------------------
  // MODO 2: ORDENAÇÃO CRONOLÓGICA HISTÓRICA
  // -------------------------------------------------------------
  const initialTimeline = timeline.slice(0, 4);
  const [timelineOrder, setTimelineOrder] = useState<number[]>(() =>
    [...Array(initialTimeline.length).keys()].sort(() => Math.random() - 0.5)
  );
  const [cronologiaVerificada, setCronologiaVerificada] = useState(false);

  const moveItem = (index: number, direction: 'up' | 'down') => {
    setCronologiaVerificada(false);
    const newOrder = [...timelineOrder];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newOrder.length) return;
    const temp = newOrder[index];
    newOrder[index] = newOrder[targetIndex];
    newOrder[targetIndex] = temp;
    setTimelineOrder(newOrder);
  };

  const isTimelineCorrect =
    timelineOrder.length > 0 &&
    timelineOrder.every((val, idx) => val === idx);

  // -------------------------------------------------------------
  // MODO 3: IDENTIFICAÇÃO DA ARMADILHA NA ASSERTIVA
  // -------------------------------------------------------------
  const rawPegadinha = pegadinhas[0];
  const pegadinhaTexto =
    typeof rawPegadinha === 'string'
      ? rawPegadinha
      : rawPegadinha?.afirmacao ||
        'O Cebraspe afirma que a Biblioteconomia dos livros foca nas necessidades dos leitores.';

  const words = pegadinhaTexto.split(' ');
  const [selectedWordIndex, setSelectedWordIndex] = useState<number | null>(null);
  const [trapRevealed, setTrapRevealed] = useState(false);

  return (
    <div className="bg-surface rounded-2xl border border-border p-4 sm:p-6 space-y-6 shadow-editorial-sm">
      {/* Header do Bloco de Recuperação Ativa */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border">
        <div>
          <div className="flex items-center gap-2 mb-1">
            {/* Regra B5: Apenas Caça-Armadilha cita o estilo/método Cebraspe */}
            <span className="font-mono text-[11px] font-bold text-accent px-2 py-0.5 rounded bg-accent-soft border border-accent/20">
              {activeTab === 'armadilha' ? 'MÉTODO CEBRASPE' : 'RECUPERAÇÃO ATIVA'}
            </span>
            <span className="text-xs text-ink-2 font-mono">Submódulo {submoduloNumero}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-sans font-bold text-ink">
            Treino de Recuperação Ativa
          </h3>
        </div>

        {/* Seletor de Modo de Exercício */}
        <div className="flex items-center gap-1 p-1 bg-surface-2 rounded-xl border border-border">
          <button
            type="button"
            onClick={() => setActiveTab('associacao')}
            className={`py-1 px-2.5 rounded-lg text-xs font-sans font-semibold transition-all cursor-pointer ${
              activeTab === 'associacao'
                ? 'bg-surface text-ink shadow-xs border border-border/80'
                : 'text-ink-2 hover:text-ink'
            }`}
          >
            Associação
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('cronologia')}
            className={`py-1 px-2.5 rounded-lg text-xs font-sans font-semibold transition-all cursor-pointer ${
              activeTab === 'cronologia'
                ? 'bg-surface text-ink shadow-xs border border-border/80'
                : 'text-ink-2 hover:text-ink'
            }`}
          >
            Cronologia
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('armadilha')}
            className={`py-1 px-2.5 rounded-lg text-xs font-sans font-semibold transition-all cursor-pointer ${
              activeTab === 'armadilha'
                ? 'bg-surface text-ink shadow-xs border border-border/80'
                : 'text-ink-2 hover:text-ink'
            }`}
          >
            Caça-Armadilha
          </button>
        </div>
      </div>

      {/* ABA 1: ASSOCIAÇÃO AUTOR <-> CONCEITO (B4) */}
      {activeTab === 'associacao' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <p className="text-xs sm:text-sm text-ink-2 font-serif">
              Selecione um <strong>Autor</strong> e o{' '}
              <strong>Conceito ou Obra</strong> correspondente (pode clicar em qualquer ordem).
            </p>
            {matchedPairs.length > 0 && matchedPairs.length < authorCards.length && (
              <button
                type="button"
                onClick={handleUndo}
                className="inline-flex items-center gap-1.5 text-xs text-ink-2 hover:text-ink font-sans underline cursor-pointer self-start sm:self-auto"
                aria-label="Desfazer última associação de par"
              >
                <Undo2 className="w-3.5 h-3.5" />
                Desfazer último par
              </button>
            )}
          </div>

          {/* Dica de seleção ativa */}
          {(selectedAuthor || selectedConcept) && !pairError && !pairSuccess && (
            <div className="p-3 rounded-xl bg-accent-soft/70 border border-accent/30 text-ink text-xs font-sans flex items-center gap-2 animate-fadeIn">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping shrink-0" />
              <span>
                {selectedAuthor
                  ? `👉 Autor selecionado: "${selectedAuthor}". Agora toque no conceito correspondente à direita.`
                  : `👈 Conceito selecionado. Agora toque no autor correspondente à esquerda.`}
              </span>
            </div>
          )}

          {/* Alerta de Erro In-Place */}
          {pairError && (
            <div className="p-3 rounded-xl bg-err-soft border-2 border-err text-err text-xs font-sans font-semibold flex items-center gap-2.5 animate-fadeIn shadow-xs">
              <AlertTriangle className="w-4 h-4 shrink-0 text-err" />
              <span>{pairError}</span>
            </div>
          )}

          {/* Alerta de Sucesso In-Place */}
          {pairSuccess && (
            <div className="p-3 rounded-xl bg-ok-soft border-2 border-ok text-ok text-xs font-sans font-semibold flex items-center gap-2.5 animate-fadeIn shadow-xs">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-ok" />
              <span>{pairSuccess}</span>
            </div>
          )}

          {matchedPairs.length === authorCards.length && authorCards.length > 0 && (
            <div className="p-3.5 rounded-xl bg-ok-soft border-2 border-ok text-ok text-xs font-sans flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-ok" />
                <span className="font-bold text-sm">Excelente! Todos os {authorCards.length} pares foram associados corretamente.</span>
              </div>
              <button
                type="button"
                onClick={resetAssociacao}
                className="flex items-center gap-1.5 text-xs font-bold underline cursor-pointer font-sans ml-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reiniciar
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Coluna 1: Autores */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-ink-2 font-semibold">
                Autores Canônicos
              </span>
              <div className="space-y-2">
                {authorCards.map((a) => {
                  const match = matchedPairs.find((p) => p.authorName === a.nome);
                  const isMatched = !!match;
                  const isSelected = selectedAuthor === a.nome;
                  const isShaking = shakingCard === a.nome;

                  return (
                    <button
                      key={a.nome}
                      type="button"
                      disabled={isMatched}
                      onClick={() => handleSelectAuthor(a.nome)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleSelectAuthor(a.nome);
                        }
                      }}
                      aria-pressed={isSelected}
                      aria-label={isMatched ? `${a.nome}, associado ao Par ${match?.pairNumber}` : `Autor ${a.nome}`}
                      className={`w-full min-h-[68px] p-3 rounded-xl border text-left text-xs font-sans font-semibold transition-all flex items-center justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                        isMatched
                          ? `${match.colorStyle.bg} ${match.colorStyle.border} opacity-95 cursor-default font-bold`
                          : isShaking
                          ? 'bg-err-soft border-err text-err ring-2 ring-err/60 animate-shake'
                          : isSelected
                          ? 'bg-accent-soft border-accent text-ink ring-2 ring-accent shadow-xs scale-[1.01]'
                          : 'bg-surface-2/60 border-border text-ink hover:border-accent/50'
                      }`}
                    >
                      <span className="leading-snug">{a.nome}</span>
                      {isMatched && (
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ml-2 shrink-0 flex items-center gap-1 ${match.colorStyle.badge}`}>
                          <span>✓ Par {match.pairNumber}</span>
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Coluna 2: Conceitos (ordem embaralhada via semente, altura uniforme - D14) */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-ink-2 font-semibold">
                Conceito / Obra Principal
              </span>
              <div className="space-y-2">
                {shuffledConcepts.map((item) => {
                  const match = matchedPairs.find((p) => p.authorName === item.nome);
                  const isMatched = !!match;
                  const isSelected = selectedConcept === item.nome;
                  const isShaking = shakingCard === item.nome;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      disabled={isMatched}
                      onClick={() => handleSelectConcept(item.nome)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleSelectConcept(item.nome);
                        }
                      }}
                      aria-pressed={isSelected}
                      aria-label={isMatched ? `${item.conceito}, associado ao Par ${match?.pairNumber}` : `Conceito: ${item.conceito}`}
                      className={`w-full min-h-[68px] p-3 rounded-xl border text-left text-xs font-sans transition-all flex items-center justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
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
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold shrink-0 flex items-center gap-1 ${match.colorStyle.badge}`}>
                          <span>✓ Par {match.pairNumber}</span>
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ABA 2: ORDENAÇÃO CRONOLÓGICA HISTÓRICA */}
      {activeTab === 'cronologia' && (
        <div className="space-y-4 animate-fadeIn">
          <p className="text-xs sm:text-sm text-ink-2 font-serif">
            Ordene os marcos históricos em ordem cronológica (do mais antigo para o mais recente)
            usando as setas.
          </p>

          <div className="space-y-2">
            {timelineOrder.map((timelineIdx, visualIndex) => {
              const item = initialTimeline[timelineIdx];
              if (!item) return null;

              return (
                <div
                  key={item.id}
                  className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-colors ${
                    cronologiaVerificada
                      ? isTimelineCorrect
                        ? 'bg-ok-soft/40 border-ok'
                        : 'bg-surface-2 border-border'
                      : 'bg-surface-2/60 border-border'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-6 h-6 rounded-full bg-surface border border-border text-[11px] font-mono font-bold flex items-center justify-center shrink-0">
                      {visualIndex + 1}
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-ink font-sans truncate">
                        {item.disciplina} ({item.periodo})
                      </div>
                      <div className="text-[11px] text-ink-2 font-serif truncate">
                        {item.focoPrincipal}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      disabled={visualIndex === 0}
                      onClick={() => moveItem(visualIndex, 'up')}
                      className="p-1.5 rounded-lg border border-border bg-surface text-ink-2 hover:text-ink disabled:opacity-30 cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
                      aria-label="Mover para cima"
                    >
                      ▲
                    </button>
                    <button
                      type="button"
                      disabled={visualIndex === timelineOrder.length - 1}
                      onClick={() => moveItem(visualIndex, 'down')}
                      className="p-1.5 rounded-lg border border-border bg-surface text-ink-2 hover:text-ink disabled:opacity-30 cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
                      aria-label="Mover para baixo"
                    >
                      ▼
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => setCronologiaVerificada(true)}
              className="py-2 px-4 rounded-lg bg-primary text-primary-text font-sans font-bold text-xs cursor-pointer hover:opacity-95"
            >
              Verificar Ordem Histórica
            </button>

            {cronologiaVerificada && (
              <span className={`text-xs font-sans font-bold ${isTimelineCorrect ? 'text-ok' : 'text-err'}`}>
                {isTimelineCorrect
                  ? 'Perfeito! Ordem cronológica correta.'
                  : 'Ordem incorreta. Verifique os períodos históricos.'}
              </span>
            )}
          </div>
        </div>
      )}

      {/* ABA 3: CAÇA-ARMADILHA DA BANCA */}
      {activeTab === 'armadilha' && (
        <div className="space-y-4 animate-fadeIn">
          <p className="text-xs sm:text-sm text-ink-2 font-serif">
            Toque na <strong>palavra-chave</strong> da assertiva que a banca manipula ou que torna o
            julgamento capcioso.
          </p>

          <div className="p-4 rounded-xl bg-surface-2/60 border border-border space-y-3">
            <div className="flex flex-wrap gap-1.5">
              {words.map((word, wIdx) => {
                const isSelected = selectedWordIndex === wIdx;
                return (
                  <button
                    key={wIdx}
                    type="button"
                    onClick={() => {
                      setSelectedWordIndex(wIdx);
                      setTrapRevealed(true);
                    }}
                    className={`px-2 py-1 rounded-md text-xs font-serif transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-alerta-soft border border-alerta text-alerta font-bold ring-2 ring-alerta/30'
                        : 'bg-surface border border-border text-ink hover:border-accent'
                    }`}
                  >
                    {word}
                  </button>
                );
              })}
            </div>
          </div>

          {trapRevealed && (
            <div className="p-3.5 rounded-xl bg-alerta-soft/40 border-l-4 border-l-alerta border-y border-r border-border space-y-2 text-xs font-sans text-ink">
              <div className="flex items-center gap-1.5 font-bold text-alerta uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Análise de Pegadinha Cebraspe</span>
              </div>
              <p className="leading-relaxed">
                O Cebraspe explora a inversão de conceitos complementares (ex: <em>livros</em> vs.{' '}
                <em>leitores</em>, <em>documento</em> vs. <em>informação</em>) e termos restritivos ou
                absolutos para criar falsas assertivas doutrinárias.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
