import { useState, useEffect, useCallback } from 'react';
import { simuladoFundamentos100Q } from '../data/simuladoFundamentos100Q';
import type { CebraspeQuestion, JulgamentoCebraspe, RespostaSimulado } from '../data/types';
import { 
  CheckCircle2, XCircle, HelpCircle, ChevronLeft, ChevronRight, 
  AlertTriangle, ShieldCheck, BookOpen, Target
} from 'lucide-react';

interface SimuladoGuiadoProps {
  onUpdateStats: (certos: number, errados: number, emBranco: number, notaLiquida: number) => void;
}

export const SimuladoGuiado100Q: React.FC<SimuladoGuiadoProps> = ({ onUpdateStats }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, RespostaSimulado>>({});
  const [selectedFilter, setSelectedFilter] = useState<'todos' | 'erros' | 'acertos' | 'emBranco' | 'pendentes'>('todos');
  const [showGrid, setShowGrid] = useState(true);

  const currentQ: CebraspeQuestion = simuladoFundamentos100Q[currentIndex];
  const userResp = respostas[currentQ.id];
  const isAnswered = userResp !== undefined;

  // Calculate live statistics
  const totalRespondidas = Object.keys(respostas).length;
  let certos = 0;
  let errados = 0;
  let emBranco = 0;

  Object.values(respostas).forEach(r => {
    if (r.resposta === 'BRANCO') {
      emBranco++;
    } else if (r.acertou) {
      certos++;
    } else {
      errados++;
    }
  });

  const notaLiquida = certos - errados;
  const aproveitamento = totalRespondidas > 0 
    ? Math.max(0, Math.round((notaLiquida / simuladoFundamentos100Q.length) * 100))
    : 0;

  // Sync stats with parent/header
  useEffect(() => {
    onUpdateStats(certos, errados, emBranco, notaLiquida);
  }, [certos, errados, emBranco, notaLiquida, onUpdateStats]);

  // Handle answering
  const handleAnswer = useCallback((opcao: JulgamentoCebraspe) => {
    const acertou = opcao === 'BRANCO' ? undefined : opcao === currentQ.gabarito;
    setRespostas(prev => ({
      ...prev,
      [currentQ.id]: {
        questionId: currentQ.id,
        resposta: opcao,
        acertou
      }
    }));
  }, [currentQ]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't capture inside inputs
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === 'c' || e.key === 'C') {
        handleAnswer('C');
      } else if (e.key === 'e' || e.key === 'E') {
        handleAnswer('E');
      } else if (e.key === 'b' || e.key === 'B') {
        handleAnswer('BRANCO');
      } else if (e.key === 'ArrowRight') {
        if (currentIndex < simuladoFundamentos100Q.length - 1) {
          setCurrentIndex(prev => prev + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          setCurrentIndex(prev => prev - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleAnswer, currentIndex]);

  // Filter questions for grid navigation
  const filteredIndices = simuladoFundamentos100Q.map((q, idx) => {
    const r = respostas[q.id];
    if (selectedFilter === 'todos') return idx;
    if (selectedFilter === 'pendentes' && !r) return idx;
    if (selectedFilter === 'erros' && r && r.acertou === false) return idx;
    if (selectedFilter === 'acertos' && r && r.acertou === true) return idx;
    if (selectedFilter === 'emBranco' && r && r.resposta === 'BRANCO') return idx;
    return -1;
  }).filter(idx => idx !== -1);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Placar Executivo Cebraspe */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {/* Nota Líquida */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-xl col-span-2 md:col-span-1 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Nota Líquida
            </span>
            <span className="text-[10px] text-amber-500/80 font-mono">C - E</span>
          </div>
          <div className="my-2">
            <span className={`text-3xl lg:text-4xl font-black tracking-tight ${
              notaLiquida > 0 ? 'text-emerald-400' : notaLiquida < 0 ? 'text-rose-400' : 'text-slate-200'
            }`}>
              {notaLiquida > 0 ? `+${notaLiquida}` : notaLiquida}
            </span>
            <span className="text-xs text-slate-500 ml-1.5 font-bold">/ 100</span>
          </div>
          <div className="text-[11px] text-slate-400">
            Aproveitamento: <strong className="text-amber-400 font-mono">{aproveitamento}%</strong>
          </div>
        </div>

        {/* Certos */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-emerald-950/60 shadow-lg flex flex-col justify-between">
          <span className="text-xs text-emerald-400/90 font-semibold flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Acertos (+1)
          </span>
          <span className="text-2xl lg:text-3xl font-black text-emerald-400 my-2">
            {certos}
          </span>
          <span className="text-[11px] text-slate-400">
            Pontos brutos positivos
          </span>
        </div>

        {/* Errados (Penalidade) */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-rose-950/60 shadow-lg flex flex-col justify-between">
          <span className="text-xs text-rose-400/90 font-semibold flex items-center gap-1.5">
            <XCircle className="w-4 h-4 text-rose-400" />
            Erros (-1)
          </span>
          <span className="text-2xl lg:text-3xl font-black text-rose-400 my-2">
            {errados}
          </span>
          <span className="text-[11px] text-slate-400">
            Anulam {errados} acertos
          </span>
        </div>

        {/* Em Branco (Gestão de Risco) */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
          <span className="text-xs text-slate-400 font-semibold flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-slate-400" />
            Em Branco (0)
          </span>
          <span className="text-2xl lg:text-3xl font-black text-slate-300 my-2">
            {emBranco}
          </span>
          <span className="text-[11px] text-slate-500">
            Risco zero / Sem desconto
          </span>
        </div>

        {/* Progresso Total */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg flex flex-col justify-between">
          <span className="text-xs text-amber-400 font-semibold flex items-center gap-1.5">
            <Target className="w-4 h-4 text-amber-400" />
            Respondidas
          </span>
          <span className="text-2xl lg:text-3xl font-black text-white my-2">
            {totalRespondidas}<span className="text-base text-slate-500 font-normal">/100</span>
          </span>
          <span className="text-[11px] text-slate-400">
            Restam {100 - totalRespondidas} itens
          </span>
        </div>
      </div>

      {/* Main Container: Question on Left + Fast Grid on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Active Question + Immediate Guided Feedback */}
        <div className="lg:col-span-8 space-y-5">
          <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl relative">
            {/* Header of Active Item */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  ITEM {currentQ.numero} DE 100
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 font-medium">
                  Submódulo {currentQ.submoduloId}
                </span>
                {currentQ.fonteOriginal && (
                  <span className="text-[11px] text-slate-400 hidden sm:inline-block">
                    • {currentQ.fonteOriginal}
                  </span>
                )}
              </div>

              {/* Submodule Label */}
              <div className="text-xs text-slate-400 font-mono">
                {currentQ.submoduloId === '1.1' && 'História & CI'}
                {currentQ.submoduloId === '1.2' && '5 Leis de Ranganathan'}
                {currentQ.submoduloId === '1.3' && 'Conceito de Documento'}
                {currentQ.submoduloId === '1.4' && 'Ética & Legislação CFB'}
              </div>
            </div>

            {/* Contexto / Texto de Apoio */}
            {currentQ.contexto && (
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs md:text-sm text-slate-300/90 leading-relaxed font-serif">
                {currentQ.contexto}
              </div>
            )}

            {/* A Assertiva Cebraspe */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Julgue a assertiva:
              </div>
              <p className="text-base md:text-lg font-bold text-white leading-relaxed">
                {currentQ.item}
              </p>
            </div>

            {/* Botões de Ação Cebraspe Táteis */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Selecione sua resposta (ou use as teclas <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-[10px] text-slate-200">C</kbd>, <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-[10px] text-slate-200">E</kbd>, <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-[10px] text-slate-200">B</kbd>):</span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {/* CERTO */}
                <button
                  onClick={() => handleAnswer('C')}
                  className={`py-3.5 px-4 rounded-xl font-black text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                    userResp?.resposta === 'C'
                      ? userResp.acertou
                        ? 'bg-emerald-600 text-white ring-2 ring-emerald-400 shadow-emerald-600/30'
                        : 'bg-rose-600 text-white ring-2 ring-rose-400 shadow-rose-600/30'
                      : 'bg-slate-800 hover:bg-emerald-950/40 hover:text-emerald-300 hover:border-emerald-600/60 border border-slate-700 text-slate-200'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>CERTO</span>
                </button>

                {/* ERRADO */}
                <button
                  onClick={() => handleAnswer('E')}
                  className={`py-3.5 px-4 rounded-xl font-black text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                    userResp?.resposta === 'E'
                      ? userResp.acertou
                        ? 'bg-emerald-600 text-white ring-2 ring-emerald-400 shadow-emerald-600/30'
                        : 'bg-rose-600 text-white ring-2 ring-rose-400 shadow-rose-600/30'
                      : 'bg-slate-800 hover:bg-rose-950/40 hover:text-rose-300 hover:border-rose-600/60 border border-slate-700 text-slate-200'
                  }`}
                >
                  <XCircle className="w-4 h-4" />
                  <span>ERRADO</span>
                </button>

                {/* DEIXAR EM BRANCO */}
                <button
                  onClick={() => handleAnswer('BRANCO')}
                  className={`py-3.5 px-4 rounded-xl font-bold text-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                    userResp?.resposta === 'BRANCO'
                      ? 'bg-slate-700 text-white ring-2 ring-slate-400 shadow-slate-700/30'
                      : 'bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-400'
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>EM BRANCO</span>
                </button>
              </div>
            </div>

            {/* FEEDBACK GUIADO IMEDIATO (ESTUDO GUIADO) */}
            {isAnswered && (
              <div className="pt-4 border-t border-slate-800 space-y-4 animate-fadeIn">
                {/* Banner de Resultado */}
                <div className={`p-4 rounded-xl flex items-center justify-between border ${
                  userResp.resposta === 'BRANCO'
                    ? 'bg-slate-950/80 border-slate-700 text-slate-300'
                    : userResp.acertou
                    ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300'
                    : 'bg-rose-950/40 border-rose-800/60 text-rose-300'
                }`}>
                  <div className="flex items-center gap-3">
                    {userResp.resposta === 'BRANCO' ? (
                      <HelpCircle className="w-6 h-6 text-slate-400" />
                    ) : userResp.acertou ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                    ) : (
                      <XCircle className="w-6 h-6 text-rose-400" />
                    )}
                    <div>
                      <div className="font-extrabold text-sm md:text-base">
                        {userResp.resposta === 'BRANCO'
                          ? 'Item Deixado em Branco (Risco Zero)'
                          : userResp.acertou
                          ? 'Resposta Correta! (+1 Ponto Líquido)'
                          : 'Resposta Incorreta! (-1 Ponto Líquido)'}
                      </div>
                      <div className="text-xs opacity-90 mt-0.5">
                        Gabarito Oficial Cebraspe: <strong className="font-black text-amber-300">{currentQ.gabarito === 'C' ? 'CERTO' : 'ERRADO'}</strong>
                      </div>
                    </div>
                  </div>

                  <span className={`text-xs px-2.5 py-1 rounded-full font-black ${
                    userResp.resposta === 'BRANCO'
                      ? 'bg-slate-800 text-slate-300'
                      : userResp.acertou
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : 'bg-rose-500/20 text-rose-300'
                  }`}>
                    {userResp.resposta === 'BRANCO' ? '0 pts' : userResp.acertou ? '+1 pt' : '-1 pt'}
                  </span>
                </div>

                {/* Armadilha da Banca Cebraspe */}
                {currentQ.armadilhaBanca && (
                  <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/30 to-slate-900 border border-amber-800/40 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                      <AlertTriangle className="w-4 h-4 text-amber-400" />
                      <span>Análise da Armadilha Cebraspe</span>
                    </div>
                    <p className="text-xs md:text-sm text-amber-200/90 leading-relaxed">
                      {currentQ.armadilhaBanca}
                    </p>
                  </div>
                )}

                {/* Justificativa Canônica */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300 uppercase tracking-wider">
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    <span>Fundamentação Teórica & Canônica</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-serif">
                    {currentQ.justificativa}
                  </p>
                </div>
              </div>
            )}

            {/* Navegação Inferior (Anterior / Próxima) */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-xs font-semibold text-slate-200 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>

              <span className="text-xs text-slate-400 font-mono">
                {currentIndex + 1} / 100
              </span>

              <button
                onClick={() => setCurrentIndex(prev => Math.min(simuladoFundamentos100Q.length - 1, prev + 1))}
                disabled={currentIndex === simuladoFundamentos100Q.length - 1}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:opacity-40 text-slate-950 text-xs font-extrabold transition-all cursor-pointer shadow-md shadow-amber-500/20"
              >
                <span>Próxima</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Grade de 100 Itens & Filtros de Revisão */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4 sticky top-24">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-extrabold text-white uppercase tracking-wider">
                <Target className="w-4 h-4 text-amber-400" />
                <span>Folha de Respostas (100 Itens)</span>
              </div>
              <button
                onClick={() => setShowGrid(!showGrid)}
                className="text-xs text-amber-400 hover:underline cursor-pointer"
              >
                {showGrid ? 'Ocultar' : 'Exibir'}
              </button>
            </div>

            {/* Filtros da Grade */}
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'todos', label: 'Todos (100)' },
                { id: 'erros', label: `Erros (${errados})` },
                { id: 'acertos', label: `Acertos (${certos})` },
                { id: 'emBranco', label: `Branco (${emBranco})` },
                { id: 'pendentes', label: `Pendentes (${100 - totalRespondidas})` },
              ].map(filtro => (
                <button
                  key={filtro.id}
                  onClick={() => setSelectedFilter(filtro.id as any)}
                  className={`text-[10px] px-2 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                    selectedFilter === filtro.id
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {filtro.label}
                </button>
              ))}
            </div>

            {/* Grade dos 100 Itens */}
            {showGrid && (
              <div className="grid grid-cols-10 gap-1.5 max-h-[360px] overflow-y-auto p-1 rounded-xl bg-slate-950/70 border border-slate-800">
                {simuladoFundamentos100Q.map((q, idx) => {
                  const r = respostas[q.id];
                  const isCurrent = idx === currentIndex;
                  const isVisibleInFilter = filteredIndices.includes(idx);

                  let bgClass = 'bg-slate-800/80 text-slate-400 hover:bg-slate-700';
                  if (r) {
                    if (r.resposta === 'BRANCO') {
                      bgClass = 'bg-slate-600 text-slate-200';
                    } else if (r.acertou) {
                      bgClass = 'bg-emerald-600 text-white font-bold';
                    } else {
                      bgClass = 'bg-rose-600 text-white font-bold';
                    }
                  }

                  if (isCurrent) {
                    bgClass += ' ring-2 ring-amber-400 ring-offset-1 ring-offset-slate-950';
                  }

                  if (!isVisibleInFilter) {
                    bgClass += ' opacity-20';
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIndex(idx)}
                      title={`Item ${idx + 1}: ${r ? (r.resposta === 'BRANCO' ? 'Em Branco' : r.acertou ? 'Acertou' : 'Errou') : 'Pendente'}`}
                      className={`h-7 rounded text-[11px] font-mono flex items-center justify-center transition-all cursor-pointer ${bgClass}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Legenda */}
            <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-400 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>Acerto (+1 pt)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span>Erro (-1 pt)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                <span>Em Branco (0 pt)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded border border-amber-400" />
                <span>Item Selecionado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
