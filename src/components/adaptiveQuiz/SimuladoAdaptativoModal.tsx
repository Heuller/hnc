import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Sparkles,
  X,
  Target,
  Clock,
  ArrowRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Scale,
  Award,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import type {
  ConfiguracaoSimuladoAdaptativo,
  ItemSimuladoAdaptativo,
  ResultadoSimuladoAdaptativo,
  RespostaItemAdaptativo,
} from '../../domain/adaptiveQuiz/types';
import {
  gerarSimuladoAdaptativo,
  calcularResultadoSimuladoAdaptativo,
} from '../../domain/adaptiveQuiz/adaptiveQuizService';
import { diagnosticarVulnerabilidades } from '../../domain/adaptiveQuiz/diagnosticEngine';
import { useProgressStore } from '../../store/useProgressStore';
import { DialogoBancaModal } from '../cadernoErros/DialogoBancaModal';
import type { ItemCadernoErro } from '../../domain/cadernoErros';

interface SimuladoAdaptativoModalProps {
  isOpen: boolean;
  onClose: () => void;
  modoInicial?: 'fraquezas_criticas' | 'erros_caderno' | 'geral_adaptativo';
}

export const SimuladoAdaptativoModal: React.FC<SimuladoAdaptativoModalProps> = ({
  isOpen,
  onClose,
  modoInicial = 'fraquezas_criticas',
}) => {
  const { checkpointsRespondidos, historicoSimulados } = useProgressStore();

  const [etapa, setEtapa] = useState<'config' | 'executando' | 'resultado'>('config');
  const [qtdItens, setQtdItens] = useState<number>(10);
  const [modoFoco, setModoFoco] = useState<'fraquezas_criticas' | 'erros_caderno' | 'geral_adaptativo'>(
    modoInicial
  );

  const [gerando, setGerando] = useState<boolean>(false);
  const [itensSimulado, setItensSimulado] = useState<ItemSimuladoAdaptativo[]>([]);
  const [itemAtualIndex, setItemAtualIndex] = useState<number>(0);
  const [respostas, setRespostas] = useState<Record<string, RespostaItemAdaptativo>>({});
  const [tempoInicio, setTempoInicio] = useState<number>(0);
  const [segundosDecorridos, setSegundosDecorridos] = useState<number>(0);
  const [resultadoFinal, setResultadoFinal] = useState<ResultadoSimuladoAdaptativo | null>(null);

  // Integração com Modo Socrático no Espelho de Resultados
  const [itemSocraticoAtivo, setItemSocraticoAtivo] = useState<ItemCadernoErro | null>(null);

  // Diagnóstico das vulnerabilidades atuais
  const vulnerabilidades = useMemo(() => {
    return diagnosticarVulnerabilidades(checkpointsRespondidos || {}, historicoSimulados || []);
  }, [checkpointsRespondidos, historicoSimulados]);

  // Cronômetro durante a execução
  useEffect(() => {
    if (etapa !== 'executando') return;
    const interval = setInterval(() => {
      setSegundosDecorridos((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [etapa]);

  const handleMarcarResposta = useCallback((itemId: string, escolha: 'C' | 'E' | 'BRANCO') => {
    const item = itensSimulado.find((i) => i.id === itemId);
    const acertou = escolha === 'BRANCO' ? null : escolha === item?.gabarito;

    setRespostas((prev) => ({
      ...prev,
      [itemId]: {
        itemId,
        resposta: escolha,
        acertou,
      },
    }));
  }, [itensSimulado]);

  // Teclado durante o simulado (C, E, B, setas)
  useEffect(() => {
    if (etapa !== 'executando' || !itensSimulado[itemAtualIndex]) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignora se estiver digitando em input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      const itemAtual = itensSimulado[itemAtualIndex];
      const key = e.key.toUpperCase();

      if (key === 'C') {
        e.preventDefault();
        handleMarcarResposta(itemAtual.id, 'C');
      } else if (key === 'E') {
        e.preventDefault();
        handleMarcarResposta(itemAtual.id, 'E');
      } else if (key === 'B' || key === ' ') {
        e.preventDefault();
        handleMarcarResposta(itemAtual.id, 'BRANCO');
      } else if (e.key === 'ArrowRight' && itemAtualIndex < itensSimulado.length - 1) {
        setItemAtualIndex((prev) => prev + 1);
      } else if (e.key === 'ArrowLeft' && itemAtualIndex > 0) {
        setItemAtualIndex((prev) => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [etapa, itemAtualIndex, itensSimulado, handleMarcarResposta]);

  if (!isOpen) return null;

  const handleIniciarSimulado = async () => {
    setGerando(true);
    const config: ConfiguracaoSimuladoAdaptativo = {
      quantidadeItens: qtdItens,
      modoFoco,
    };

    try {
      const questoes = await gerarSimuladoAdaptativo(
        config,
        checkpointsRespondidos || {},
        historicoSimulados || []
      );
      setItensSimulado(questoes);
      setItemAtualIndex(0);
      setRespostas({});
      setSegundosDecorridos(0);
      setTempoInicio(Date.now());
      setEtapa('executando');
    } catch (err) {
      console.error('Erro ao gerar simulado adaptativo:', err);
    } finally {
      setGerando(false);
    }
  };

  const handleFinalizarSimulado = () => {
    const tempoGasto = Math.round((Date.now() - tempoInicio) / 1000) || segundosDecorridos;
    const resultado = calcularResultadoSimuladoAdaptativo(itensSimulado, respostas, tempoGasto);
    setResultadoFinal(resultado);
    setEtapa('resultado');
  };

  const formatarTempo = (segundos: number) => {
    const m = Math.floor(segundos / 60);
    const s = segundos % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const itemAtual = itensSimulado[itemAtualIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="simulado-adaptativo-titulo"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
    >
      <div className="bg-surface border border-border rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-editorial-xl overflow-hidden">
        {/* CABEÇALHO DO SIMULADO ADAPTATIVO */}
        <header className="p-4 sm:p-5 border-b border-border bg-surface-2 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-accent/15 text-accent font-bold border border-accent/30">
                  Simulado Adaptativo IA
                </span>
                <span className="text-xs font-mono text-ink-2 hidden sm:inline">
                  Fórmula Cebraspe (1 errada anula 1 certa)
                </span>
              </div>
              <h2
                id="simulado-adaptativo-titulo"
                className="text-base sm:text-lg font-serif font-bold text-ink tracking-tight m-0"
              >
                {etapa === 'config' && 'Configuração do Treino Personalizado de Fraquezas'}
                {etapa === 'executando' && `Simulado em Andamento · Item ${itemAtualIndex + 1} de ${itensSimulado.length}`}
                {etapa === 'resultado' && 'Espelho de Desempenho & Diagnóstico Pós-Treino'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {etapa === 'executando' && (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface border border-border text-xs font-mono text-ink font-bold">
                <Clock className="w-3.5 h-3.5 text-accent" />
                <span>{formatarTempo(segundosDecorridos)}</span>
              </div>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-ink-2 hover:text-ink hover:bg-surface-2 transition-colors cursor-pointer"
              title="Fechar"
              aria-label="Fechar modal de simulado adaptativo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* CORPO PRINCIPAL COM CONTEÚDO DAS ETAPAS */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-surface/50">
          {/* ========================================================================= */}
          {/* ETAPA 1: CONFIGURAÇÃO & MAPA DE VULNERABILIDADES */}
          {/* ========================================================================= */}
          {etapa === 'config' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="card-editorial p-5 border-l-4 border-l-accent space-y-2">
                <h3 className="text-sm font-bold text-ink m-0 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span>Diagnóstico Inteligente de Fraquezas</span>
                </h3>
                <p className="text-xs text-ink-2 font-serif-reading leading-relaxed m-0">
                  O algoritmo analisa seus erros em micro-checkpoints e simulados para gerar assertivas inéditas estritamente concentradas nos tópicos onde você mais tem vulnerabilidade conceitual.
                </p>
              </div>

              {/* LISTA DE VULNERABILIDADES DETECTADAS */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-ink-2 uppercase tracking-wider block">
                  Pontos Críticos Diagnosticados no Seu Histórico:
                </span>

                {vulnerabilidades.length === 0 ? (
                  <div className="p-4 rounded-xl bg-surface-2 border border-border text-xs text-ink-2 text-center">
                    Nenhum ponto fraco crítico registrado ainda. O simulado cobrirá os principais módulos do edital da Câmara com ênfase preventiva.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {vulnerabilidades.slice(0, 4).map((v) => (
                      <div
                        key={v.macroModuloId}
                        className="p-3 rounded-xl bg-surface border border-border space-y-1.5 shadow-editorial-sm"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-ink truncate max-w-[170px]">
                            {v.titulo}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                              v.nivelGravidade === 'CRITICA'
                                ? 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-500/30'
                                : 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30'
                            }`}
                          >
                            {v.totalErros} falha{v.totalErros !== 1 ? 's' : ''} ({v.taxaErro}%)
                          </span>
                        </div>
                        {v.pontosCegosIdentificados[0] && (
                          <p className="text-[11px] text-ink-2 italic m-0 line-clamp-1">
                            "{v.pontosCegosIdentificados[0]}"
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* OPÇÕES DE CONFIGURAÇÃO */}
              <div className="space-y-4 pt-2 border-t border-border">
                {/* Quantidade de Itens */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-ink">Quantidade de Itens no Treino:</span>
                  <div className="grid grid-cols-3 gap-2">
                    {[10, 15, 20].map((qtd) => (
                      <button
                        key={qtd}
                        type="button"
                        onClick={() => setQtdItens(qtd)}
                        className={`p-2.5 rounded-xl border text-xs font-bold font-mono transition-colors cursor-pointer ${
                          qtdItens === qtd
                            ? 'bg-accent text-accent-text border-accent'
                            : 'bg-surface-2 text-ink hover:border-accent border-border'
                        }`}
                      >
                        {qtd} Itens
                      </button>
                    ))}
                  </div>
                </div>

                {/* Modo de Foco */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-ink">Estratégia Pedagógica do Treino:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setModoFoco('fraquezas_criticas')}
                      className={`p-3 rounded-xl border text-left transition-colors cursor-pointer space-y-1 ${
                        modoFoco === 'fraquezas_criticas'
                          ? 'bg-accent/10 border-accent text-ink'
                          : 'bg-surface-2 border-border text-ink-2 hover:text-ink'
                      }`}
                    >
                      <div className="text-xs font-bold text-ink flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-accent" />
                        <span>Fraquezas Críticas</span>
                      </div>
                      <p className="text-[11px] leading-relaxed m-0">
                        Concentra 80% das assertivas nos submódulos onde você mais errou.
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setModoFoco('erros_caderno')}
                      className={`p-3 rounded-xl border text-left transition-colors cursor-pointer space-y-1 ${
                        modoFoco === 'erros_caderno'
                          ? 'bg-accent/10 border-accent text-ink'
                          : 'bg-surface-2 border-border text-ink-2 hover:text-ink'
                      }`}
                    >
                      <div className="text-xs font-bold text-ink flex items-center gap-1.5">
                        <RotateCcw className="w-3.5 h-3.5 text-accent" />
                        <span>Erradicação do Caderno</span>
                      </div>
                      <p className="text-[11px] leading-relaxed m-0">
                        Retesta e aprofunda os itens exatos do seu Caderno de Erros.
                      </p>
                    </button>
                  </div>
                </div>
              </div>

              {/* BOTÃO GERAR */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleIniciarSimulado}
                  disabled={gerando}
                  className="w-full py-3 px-4 rounded-xl bg-accent hover:bg-accent/90 text-accent-text font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-editorial-sm disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{gerando ? 'Gerando Itens Inéditos com a Banca IA...' : 'Iniciar Simulado Adaptativo'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* ETAPA 2: EXECUTANDO O SIMULADO (SALA DE PROVA) */}
          {/* ========================================================================= */}
          {etapa === 'executando' && itemAtual && (
            <div className="max-w-3xl mx-auto space-y-6">
              {/* Contexto do Item */}
              <div className="flex items-center justify-between text-xs font-mono text-ink-2 border-b border-border pb-2.5">
                <span className="font-bold text-accent">
                  ITEM {itemAtualIndex + 1} DE {itensSimulado.length}
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-2 border border-border text-ink truncate max-w-[280px]">
                  {itemAtual.topicoNome}
                </span>
              </div>

              {/* Texto da Assertiva */}
              <div className="card-editorial p-6 sm:p-8 bg-surface border border-border shadow-editorial-sm">
                <p className="font-serif-reading text-base sm:text-lg text-ink leading-relaxed m-0 select-text">
                  {itemAtual.item}
                </p>
              </div>

              {/* Botões de Decisão Cebraspe */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-ink-2 uppercase block text-center">
                  Julgue o item conforme o edital da Câmara dos Deputados:
                </span>

                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => handleMarcarResposta(itemAtual.id, 'C')}
                    className={`py-3 px-4 rounded-xl border text-xs sm:text-sm font-bold cursor-pointer transition-all flex items-center justify-center gap-2 ${
                      respostas[itemAtual.id]?.resposta === 'C'
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-editorial-sm scale-[1.02]'
                        : 'bg-surface-2 text-ink hover:border-emerald-500/50 border-border'
                    }`}
                  >
                    <span>CERTO</span>
                    <span className="text-[10px] font-mono opacity-60 hidden sm:inline">(C)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleMarcarResposta(itemAtual.id, 'E')}
                    className={`py-3 px-4 rounded-xl border text-xs sm:text-sm font-bold cursor-pointer transition-all flex items-center justify-center gap-2 ${
                      respostas[itemAtual.id]?.resposta === 'E'
                        ? 'bg-rose-600 text-white border-rose-600 shadow-editorial-sm scale-[1.02]'
                        : 'bg-surface-2 text-ink hover:border-rose-500/50 border-border'
                    }`}
                  >
                    <span>ERRADO</span>
                    <span className="text-[10px] font-mono opacity-60 hidden sm:inline">(E)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleMarcarResposta(itemAtual.id, 'BRANCO')}
                    className={`py-3 px-4 rounded-xl border text-xs sm:text-sm font-bold cursor-pointer transition-all flex items-center justify-center gap-2 ${
                      respostas[itemAtual.id]?.resposta === 'BRANCO'
                        ? 'bg-amber-600 text-white border-amber-600 shadow-editorial-sm scale-[1.02]'
                        : 'bg-surface-2 text-ink hover:border-amber-500/50 border-border'
                    }`}
                  >
                    <span>EM BRANCO</span>
                    <span className="text-[10px] font-mono opacity-60 hidden sm:inline">(B)</span>
                  </button>
                </div>
              </div>

              {/* Régua de Navegação dos Itens */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <button
                  type="button"
                  onClick={() => setItemAtualIndex((prev) => Math.max(0, prev - 1))}
                  disabled={itemAtualIndex === 0}
                  className="px-3 py-2 rounded-lg bg-surface border border-border text-ink hover:border-accent text-xs font-bold flex items-center gap-1 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>

                {/* Grade de Pílulas */}
                <div className="flex items-center gap-1 overflow-x-auto px-2 max-w-[50%]">
                  {itensSimulado.map((it, idx) => {
                    const resp = respostas[it.id]?.resposta;
                    const ehAtual = idx === itemAtualIndex;

                    return (
                      <button
                        key={it.id}
                        type="button"
                        onClick={() => setItemAtualIndex(idx)}
                        className={`w-7 h-7 rounded-lg text-[11px] font-mono font-bold shrink-0 cursor-pointer border transition-colors ${
                          ehAtual
                            ? 'border-accent bg-accent text-accent-text'
                            : resp
                            ? 'border-border-strong bg-surface-2 text-ink font-extrabold'
                            : 'border-border bg-surface text-ink-2 hover:border-border-strong'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>

                {itemAtualIndex < itensSimulado.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setItemAtualIndex((prev) => prev + 1)}
                    className="px-3 py-2 rounded-lg bg-surface border border-border text-ink hover:border-accent text-xs font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Próximo</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleFinalizarSimulado}
                    className="px-4 py-2 rounded-lg bg-accent text-accent-text hover:bg-accent/90 text-xs font-bold flex items-center gap-1 cursor-pointer shadow-editorial-sm"
                  >
                    <span>Finalizar</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* ETAPA 3: RESULTADO & ESPELHO DE NOTAS CEBRASPE */}
          {/* ========================================================================= */}
          {etapa === 'resultado' && resultadoFinal && (
            <div className="max-w-3xl mx-auto space-y-6">
              {/* Placar Oficial Cebraspe */}
              <div className="card-editorial p-6 sm:p-8 bg-surface border border-border shadow-editorial-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">
                    Espelho de Pontos Oficial Cebraspe
                  </span>
                  <span className="text-xs font-mono text-ink-2">
                    Tempo: {formatarTempo(resultadoFinal.tempoGastoSegundos)}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl bg-surface-2 border border-border text-center">
                    <span className="text-[10px] font-mono uppercase text-ink-2 font-bold block">
                      Nota Líquida (C - E)
                    </span>
                    <span
                      className={`text-2xl font-black ${
                        resultadoFinal.notaLiquidaCebraspe > 0
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-rose-600 dark:text-rose-400'
                      }`}
                    >
                      {resultadoFinal.notaLiquidaCebraspe > 0 ? `+${resultadoFinal.notaLiquidaCebraspe}` : resultadoFinal.notaLiquidaCebraspe}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface-2 border border-border text-center">
                    <span className="text-[10px] font-mono uppercase text-ink-2 font-bold block">
                      Certos (C)
                    </span>
                    <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                      {resultadoFinal.certos}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface-2 border border-border text-center">
                    <span className="text-[10px] font-mono uppercase text-ink-2 font-bold block">
                      Errados (E)
                    </span>
                    <span className="text-2xl font-black text-rose-600 dark:text-rose-400">
                      {resultadoFinal.errados}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface-2 border border-border text-center">
                    <span className="text-[10px] font-mono uppercase text-ink-2 font-bold block">
                      Em Branco
                    </span>
                    <span className="text-2xl font-black text-ink-2">
                      {resultadoFinal.emBranco}
                    </span>
                  </div>
                </div>

                {/* Mensagem de Diagnóstico */}
                <div className="p-3.5 rounded-xl bg-accent/10 border border-accent/20 text-xs text-ink flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="font-bold">
                      {resultadoFinal.aproveitamentoLiquidoPercentual >= 60
                        ? 'Excelente aproveitamento líquido! Domínio firme das armadilhas da banca.'
                        : 'Treino diagnóstico concluído. Revise as assertivas que geraram penalidade abaixo.'}
                    </span>
                    <p className="text-[11px] text-ink-2 m-0">
                      Aproveitamento líquido: {resultadoFinal.aproveitamentoLiquidoPercentual}% da pontuação máxima.
                    </p>
                  </div>
                </div>
              </div>

              {/* Revisão Questão a Questão com Botão de Diálogo Socrático */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-ink-2 uppercase tracking-wider block">
                  Auditoria de Itens & Superação de Lacunas:
                </span>

                {resultadoFinal.itens.map((it) => {
                  const resp = resultadoFinal.respostas[it.id];
                  const acertou = resp?.acertou;
                  const escolha = resp?.resposta || 'BRANCO';

                  const itemParaSocratico: ItemCadernoErro = {
                    id: `adp-${it.id}`,
                    chaveOriginal: it.id,
                    origem: 'simulado',
                    macroModuloId: it.macroModuloId,
                    macroModuloTitulo: it.topicoNome,
                    tituloContexto: `Simulado Adaptativo · Item ${it.numero}`,
                    assertiva: it.item,
                    gabarito: it.gabarito,
                    respostaUsuario: escolha === 'BRANCO' ? null : (escolha as 'C' | 'E'),
                    justificativa: it.justificativa,
                    armadilhaBanca: it.armadilhaBanca,
                  };

                  return (
                    <div
                      key={it.id}
                      className="p-4 rounded-xl bg-surface border border-border space-y-3 shadow-editorial-sm"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-ink">
                            #{it.numero} · {it.topicoNome}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {acertou === true && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Acertou (+1)</span>
                            </span>
                          )}
                          {acertou === false && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-600">
                              <XCircle className="w-3.5 h-3.5" />
                              <span>Errou (-1)</span>
                            </span>
                          )}
                          {escolha === 'BRANCO' && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-ink-2">
                              <HelpCircle className="w-3.5 h-3.5" />
                              <span>Em Branco (0)</span>
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="font-serif-reading text-sm text-ink leading-relaxed m-0">
                        "{it.item}"
                      </p>

                      <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                        <div className="p-2 rounded bg-surface-2 border border-border">
                          <span className="text-ink-2">Você marcou: </span>
                          <span className="font-bold text-ink">{escolha}</span>
                        </div>
                        <div className="p-2 rounded bg-surface-2 border border-border">
                          <span className="text-ink-2">Gabarito: </span>
                          <span className="font-bold text-accent">{it.gabarito}</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-surface-2 border border-border space-y-1 text-xs">
                        <span className="font-bold text-ink block text-[11px] uppercase">
                          Fundamento Canônico:
                        </span>
                        <p className="text-ink-2 font-serif-reading m-0">
                          {it.justificativa}
                        </p>
                      </div>

                      {/* Botão de Diálogo Socrático se o candidato errou */}
                      {acertou === false && (
                        <button
                          type="button"
                          onClick={() => setItemSocraticoAtivo(itemParaSocratico)}
                          className="w-full py-2 px-3 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-950 dark:text-amber-200 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors"
                        >
                          <Scale className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                          <span>Recorrer / Discutir este erro com a Banca (IA)</span>
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Botões de Ação Final */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setEtapa('config')}
                  className="flex-1 py-3 rounded-xl bg-surface border border-border text-ink hover:border-accent text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Configurar Novo Simulado Adaptativo</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 rounded-xl bg-accent text-accent-text hover:bg-accent/90 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-editorial-sm"
                >
                  <span>Concluir e Voltar aos Treinos</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MODAL SOCRÁTICO ANINHADO (CASO O CANDIDATO RECORRA DE ALGUM ITEM DO RESULTADO) */}
      <DialogoBancaModal
        item={itemSocraticoAtivo}
        isOpen={Boolean(itemSocraticoAtivo)}
        onClose={() => setItemSocraticoAtivo(null)}
      />
    </div>
  );
};
