import React, { useState } from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
} from 'lucide-react';
import type { MnemonicoAutorCard, MnemonicoTimelineItem, PegadinhaBancaItem } from '../../domain/schemas/mnemonico.schema';

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
  // MODO 1: ASSOCIAÇÃO AUTOR <-> CONCEITO/OBRA
  // -------------------------------------------------------------
  const authorCards: { nome: string; conceito: string }[] = autores
    .map((a) => {
      if (typeof a === 'string') return { nome: a, conceito: `Doutrina canônica de ${a}` };
      return {
        nome: a.nome,
        conceito: a.ideiaChave || a.obraPrincipal || `Teórico canônico`,
      };
    })
    .slice(0, 4);

  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [pairError, setPairError] = useState<string | null>(null);

  const handleSelectAuthor = (nome: string) => {
    if (matchedPairs.includes(nome)) return;
    setSelectedAuthor(nome);
    setPairError(null);
  };

  const handleSelectConcept = (nomeCorrespondente: string) => {
    if (!selectedAuthor) return;
    if (selectedAuthor === nomeCorrespondente) {
      setMatchedPairs((prev) => [...prev, selectedAuthor]);
      setSelectedAuthor(null);
      setPairError(null);
    } else {
      setPairError('Associação incorreta. Releia os conceitos canônicos.');
      setTimeout(() => setPairError(null), 1800);
    }
  };

  const resetAssociacao = () => {
    setSelectedAuthor(null);
    setMatchedPairs([]);
    setPairError(null);
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
            <span className="font-mono text-[11px] font-bold text-accent px-2 py-0.5 rounded bg-accent-soft border border-accent/20">
              MÉTODO CEBRASPE
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

      {/* ABA 1: ASSOCIAÇÃO AUTOR <-> CONCEITO */}
      {activeTab === 'associacao' && (
        <div className="space-y-4 animate-fadeIn">
          <p className="text-xs sm:text-sm text-ink-2 font-serif">
            Toque em um <strong>Autor</strong> à esquerda e em seguida toque no seu{' '}
            <strong>Conceito ou Obra</strong> correspondente à direita.
          </p>

          {pairError && (
            <div className="p-2.5 rounded-lg bg-err-soft border border-err text-err text-xs font-sans flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{pairError}</span>
            </div>
          )}

          {matchedPairs.length === authorCards.length && authorCards.length > 0 && (
            <div className="p-3 rounded-lg bg-ok-soft border border-ok text-ok text-xs font-sans flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span className="font-bold">Excelente! Todas as associações foram consolidadas.</span>
              </div>
              <button
                type="button"
                onClick={resetAssociacao}
                className="flex items-center gap-1 text-[11px] underline cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
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
                  const isMatched = matchedPairs.includes(a.nome);
                  const isSelected = selectedAuthor === a.nome;
                  return (
                    <button
                      key={a.nome}
                      type="button"
                      disabled={isMatched}
                      onClick={() => handleSelectAuthor(a.nome)}
                      className={`w-full min-h-[44px] p-2.5 rounded-xl border text-left text-xs font-sans font-semibold transition-all flex items-center justify-between cursor-pointer ${
                        isMatched
                          ? 'bg-ok-soft/50 border-ok text-ok opacity-80 cursor-default'
                          : isSelected
                          ? 'bg-accent-soft border-accent text-ink ring-2 ring-accent/30'
                          : 'bg-surface-2/60 border-border text-ink hover:border-accent/50'
                      }`}
                    >
                      <span>{a.nome}</span>
                      {isMatched && <CheckCircle2 className="w-4 h-4 text-ok" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Coluna 2: Conceitos */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-ink-2 font-semibold">
                Conceito / Obra Principal
              </span>
              <div className="space-y-2">
                {authorCards.map((a) => {
                  const isMatched = matchedPairs.includes(a.nome);
                  return (
                    <button
                      key={a.nome}
                      type="button"
                      disabled={isMatched}
                      onClick={() => handleSelectConcept(a.nome)}
                      className={`w-full min-h-[44px] p-2.5 rounded-xl border text-left text-xs font-sans transition-all flex items-center justify-between cursor-pointer ${
                        isMatched
                          ? 'bg-ok-soft/50 border-ok text-ok opacity-80 cursor-default'
                          : 'bg-surface-2/60 border-border text-ink-2 hover:text-ink hover:border-accent/50'
                      }`}
                    >
                      <span className="leading-snug">{a.conceito}</span>
                      {isMatched && <CheckCircle2 className="w-4 h-4 text-ok shrink-0 ml-2" />}
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
