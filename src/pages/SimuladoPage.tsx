import React, { useState, useEffect, useCallback } from 'react';
import { simuladoFundamentos100Q } from '../content/questions/m1-fundamentos-100q';
import { useProgressStore } from '../store/useProgressStore';
import { AnswerSheet } from '../components/simulado/AnswerSheet';
import { Badge } from '../components/common/Badge';
import { Kbd } from '../components/common/Kbd';
import { Drawer } from 'vaul';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Award,
  Layers,
  FileCheck,
  AlertTriangle,
  ShieldAlert,
} from 'lucide-react';
import type { SimuladoFinalizado } from '../domain/schemas/progress.schema';

export const SimuladoPage: React.FC = () => {
  const {
    sessaoAtivaSimulado,
    salvarRespostaSimulado,
    mudarQuestaoSimulado,
    iniciarOuRetomarSimulado,
    finalizarSimulado,
    reiniciarSimulado,
  } = useProgressStore();

  const [certezaSelecionada, setCertezaSelecionada] = useState<
    'certeza' | 'provavel' | 'chute' | undefined
  >(undefined);

  const [tempoInicio] = useState<number>(Date.now());
  const [relatorioFinal, setRelatorioFinal] = useState<SimuladoFinalizado | null>(null);
  const [isAnswerSheetMobileOpen, setIsAnswerSheetMobileOpen] = useState(false);

  useEffect(() => {
    iniciarOuRetomarSimulado();
  }, [iniciarOuRetomarSimulado]);

  const currentIndex = sessaoAtivaSimulado?.currentIndex ?? 0;
  const respostas = sessaoAtivaSimulado?.respostas ?? {};
  const currentQuestion = simuladoFundamentos100Q[currentIndex];
  const respostaAtual = respostas[currentQuestion?.id];

  // Sincroniza certeza quando já respondida
  useEffect(() => {
    if (respostaAtual?.certeza) {
      setCertezaSelecionada(respostaAtual.certeza);
    } else {
      setCertezaSelecionada(undefined);
    }
  }, [respostaAtual]);

  // Placar em tempo real
  let acertosCount = 0;
  let errosCount = 0;
  let brancoCount = 0;
  Object.values(respostas).forEach((r) => {
    if (r.resposta === 'BRANCO') {
      brancoCount++;
    } else if (r.acertou) {
      acertosCount++;
    } else {
      errosCount++;
    }
  });
  const notaLiquidaAtual = acertosCount - errosCount;
  const respondidasCount = Object.keys(respostas).length;

  const handleJulgar = useCallback(
    (resposta: 'C' | 'E' | 'BRANCO') => {
      if (!currentQuestion) return;

      const acertou = resposta === 'BRANCO' ? undefined : resposta === currentQuestion.gabarito;
      salvarRespostaSimulado(currentQuestion.id, resposta, certezaSelecionada, acertou);
    },
    [currentQuestion, certezaSelecionada, salvarRespostaSimulado]
  );

  const handleNext = useCallback(() => {
    if (currentIndex < 99) {
      mudarQuestaoSimulado(currentIndex + 1);
    }
  }, [currentIndex, mudarQuestaoSimulado]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      mudarQuestaoSimulado(currentIndex - 1);
    }
  }, [currentIndex, mudarQuestaoSimulado]);

  // Atalhos de teclado no desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignora se estiver digitando em input/textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      const key = e.key.toLowerCase();
      if (key === 'c') {
        e.preventDefault();
        handleJulgar('C');
      } else if (key === 'e') {
        e.preventDefault();
        handleJulgar('E');
      } else if (key === 'b') {
        e.preventDefault();
        handleJulgar('BRANCO');
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleJulgar, handleNext, handlePrev]);

  const handleFinalizar = () => {
    const tempoGasto = Math.round((Date.now() - tempoInicio) / 1000);
    const resultado = finalizarSimulado(tempoGasto);
    setRelatorioFinal(resultado);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNovoSimulado = () => {
    reiniciarSimulado();
    setRelatorioFinal(null);
    iniciarOuRetomarSimulado();
  };

  // Se o simulado foi finalizado nesta sessão, exibe o relatório final
  if (relatorioFinal) {
    // Quebra por submódulo
    const quebraSubmodulos: Record<
      string,
      { certos: number; errados: number; brancos: number; total: number }
    > = {
      '1.1': { certos: 0, errados: 0, brancos: 0, total: 25 },
      '1.2': { certos: 0, errados: 0, brancos: 0, total: 25 },
      '1.3': { certos: 0, errados: 0, brancos: 0, total: 25 },
      '1.4': { certos: 0, errados: 0, brancos: 0, total: 25 },
    };

    simuladoFundamentos100Q.forEach((q) => {
      const r = relatorioFinal.respostas[q.id];
      const sub = quebraSubmodulos[q.submoduloId];
      if (sub) {
        if (!r || r.resposta === 'BRANCO') {
          sub.brancos++;
        } else if (r.resposta === q.gabarito) {
          sub.certos++;
        } else {
          sub.errados++;
        }
      }
    });

    return (
      <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
        {/* Cabeçalho do Relatório */}
        <section className="bg-surface rounded-2xl border border-border p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-accent" />
            <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
              Relatório de Desempenho Oficial Cebraspe
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-sans font-bold text-ink tracking-tight mb-4">
            Simulado M1: 100 Itens de Fundamentos
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-surface-2 rounded-xl border border-border my-6">
            <div>
              <span className="text-xs font-sans text-ink-2">Nota Líquida</span>
              <div className="text-3xl font-mono font-bold text-ink">
                {relatorioFinal.notaLiquida > 0
                  ? `+${relatorioFinal.notaLiquida}`
                  : relatorioFinal.notaLiquida}
              </div>
              <span className="text-[11px] font-mono text-ink-2">máx: 100 pts</span>
            </div>

            <div>
              <span className="text-xs font-sans text-ink-2">Aproveitamento</span>
              <div className="text-3xl font-mono font-bold text-accent">
                {relatorioFinal.aproveitamentoPercent}%
              </div>
              <span className="text-[11px] font-mono text-ink-2">fator C - E</span>
            </div>

            <div>
              <span className="text-xs font-sans text-ink-2">Acertos / Erros</span>
              <div className="text-xl sm:text-2xl font-mono font-bold text-ink flex items-center gap-2">
                <span className="text-ok">✓ {relatorioFinal.certos}</span>
                <span className="text-err">✗ {relatorioFinal.errados}</span>
              </div>
              <span className="text-[11px] font-mono text-ink-2">
                ⚪ {relatorioFinal.emBranco} em branco
              </span>
            </div>

            <div>
              <span className="text-xs font-sans text-ink-2">Tempo Gasto</span>
              <div className="text-xl sm:text-2xl font-mono font-bold text-ink">
                {Math.floor(relatorioFinal.tempoGastoSegundos / 60)}m{' '}
                {relatorioFinal.tempoGastoSegundos % 60}s
              </div>
              <span className="text-[11px] font-mono text-ink-2">
                média: ~
                {Math.round(relatorioFinal.tempoGastoSegundos / 100)}s/item
              </span>
            </div>
          </div>

          {/* Relatório de Calibração Metacognitiva */}
          <div className="p-5 rounded-xl border border-accent/40 bg-accent-soft/20 my-6 space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              <h2 className="font-sans font-bold text-ink text-base">
                Calibração Metacognitiva e Gestão de Risco
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-ink-2 font-serif leading-relaxed">
              No Cebraspe, cada item chutado e errado anula um acerto suado. Veja como a sua
              certeza subjetiva se traduziu em assertividade real:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-surface p-3 rounded-lg border border-border">
                <span className="text-xs font-sans font-semibold text-ink">
                  Tenho Certeza
                </span>
                <div className="text-2xl font-mono font-bold text-ok mt-1">
                  {relatorioFinal.calibracao.acertoCertezaPercent}%
                </div>
                <span className="text-[11px] text-ink-2 font-sans">taxa de acerto real</span>
              </div>

              <div className="bg-surface p-3 rounded-lg border border-border">
                <span className="text-xs font-sans font-semibold text-ink">
                  Provável
                </span>
                <div className="text-2xl font-mono font-bold text-accent mt-1">
                  {relatorioFinal.calibracao.acertoProvavelPercent}%
                </div>
                <span className="text-[11px] text-ink-2 font-sans">taxa de acerto real</span>
              </div>

              <div className="bg-surface p-3 rounded-lg border border-border">
                <span className="text-xs font-sans font-semibold text-ink">
                  Chute Consciente
                </span>
                <div className="text-2xl font-mono font-bold text-err mt-1">
                  {relatorioFinal.calibracao.acertoChutePercent}%
                </div>
                <span className="text-[11px] text-ink-2 font-sans">taxa de acerto real</span>
              </div>
            </div>

            {/* Impacto da Abstenção Estratégica */}
            {relatorioFinal.calibracao.ganhoPotencialSeChuteBranco > 0 ? (
              <div className="p-3.5 bg-alerta-soft rounded-lg border border-alerta-cebraspe/30 flex items-start gap-2.5">
                <ShieldAlert className="w-5 h-5 text-alerta-cebraspe shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-alerta-cebraspe font-sans leading-relaxed">
                  <strong>Diagnóstico de Chutes Prejudiciais:</strong> Se todos os itens marcados
                  como "Chute" tivessem sido deixados em branco, sua Nota Líquida teria sido{' '}
                  <strong className="underline">
                    {relatorioFinal.notaLiquida +
                      relatorioFinal.calibracao.ganhoPotencialSeChuteBranco}{' '}
                    pontos
                  </strong>{' '}
                  (+{relatorioFinal.calibracao.ganhoPotencialSeChuteBranco} pontos ganhos por
                  abstenção). No Cebraspe, não saber e deixar em branco é uma habilidade de
                  pontuação.
                </div>
              </div>
            ) : (
              <div className="p-3.5 bg-ok-soft rounded-lg border border-ok/30 flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-ok shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-ok font-sans leading-relaxed">
                  <strong>Gestão de Risco Eficiente:</strong> Seus palpites tiveram saldo positivo ou
                  neutro em relação à pontuação líquida. Mantenha essa calibração apurada.
                </div>
              </div>
            )}
          </div>

          {/* Desempenho por Módulo-Filho */}
          <div className="space-y-3 my-6">
            <h3 className="font-sans font-bold text-ink text-sm sm:text-base">
              Desempenho por Submódulo (25 itens cada)
            </h3>
            <div className="space-y-2">
              {Object.entries(quebraSubmodulos).map(([subId, dados]) => {
                const subNota = dados.certos - dados.errados;
                const subPercent = Math.max(0, Math.round((subNota / dados.total) * 100));

                return (
                  <div
                    key={subId}
                    className="p-3 bg-surface-2 rounded-lg border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <span className="font-mono text-xs font-bold text-accent">
                        Submódulo {subId}
                      </span>
                      <div className="text-xs font-mono text-ink-2">
                        {dados.certos} Certos • {dados.errados} Errados • {dados.brancos} Em Branco
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <span className="font-mono text-sm font-bold text-ink">
                          {subNota > 0 ? `+${subNota}` : subNota} pts
                        </span>
                        <span className="text-[11px] font-mono text-ink-2 ml-1">
                          ({subPercent}%)
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ações pós-simulado */}
          <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={handleNovoSimulado}
              className="w-full sm:w-auto py-2.5 px-5 rounded-lg bg-primary text-primary-text font-sans font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-95 transition-opacity shadow-xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Realizar Novo Simulado</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setRelatorioFinal(null);
              }}
              className="w-full sm:w-auto py-2.5 px-4 rounded-lg bg-surface border border-border text-ink hover:border-accent font-sans font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <span>Revisar Respostas</span>
            </button>
          </div>
        </section>
      </div>
    );
  }

  // Visualização Normal da Questão
  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 animate-fadeIn">
      {/* Coluna Principal da Questão */}
      <main className="flex-1 min-w-0 space-y-6">
        {/* Barra Superior do Simulado: Placar em Tempo Real */}
        <section
          aria-label="Placar em Tempo Real"
          className="bg-surface rounded-xl border border-border p-4 shadow-xs flex flex-wrap items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-soft border border-accent/20">
              ITEM {currentIndex + 1} / 100
            </span>
            <span className="text-xs font-mono text-ink-2">
              Submódulo {currentQuestion.submoduloId}
            </span>
            <span className="text-xs font-mono text-ink-2 capitalize">
              • Nível {currentQuestion.dificuldade}
            </span>
          </div>

          {/* Placar Cebraspe: C - E */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <span className="text-ink-2">Líquida:</span>
              <strong className="text-sm font-bold text-ink">
                {notaLiquidaAtual > 0 ? `+${notaLiquidaAtual}` : notaLiquidaAtual}
              </strong>
            </div>
            <div className="flex items-center gap-2 text-ink-2">
              <span className="text-ok">✓ {acertosCount}</span>
              <span className="text-err">✗ {errosCount}</span>
              <span>⚪ {brancoCount}</span>
            </div>
            <span className="text-ink-2">({respondidasCount}/100)</span>
          </div>
        </section>

        {/* Card do Enunciado Cebraspe */}
        <article className="bg-surface rounded-2xl border border-border p-6 sm:p-8 shadow-xs space-y-6">
          {/* Texto Canônico do Item */}
          <div className="font-serif text-ink text-base sm:text-lg leading-relaxed pt-2">
            {currentQuestion.item}
          </div>

          {/* Seletor Metacognitivo de Certeza (Pré-julgamento) */}
          <div className="pt-4 border-t border-border">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-sans font-semibold text-ink-2 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                Nível de Confiança Metacognitiva
              </span>
              <span className="text-[11px] font-sans text-ink-2">
                (opcional, para calibrar risco)
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setCertezaSelecionada('certeza')}
                className={`py-2 px-3 rounded-lg text-xs font-sans font-medium border transition-all ${
                  certezaSelecionada === 'certeza'
                    ? 'bg-ok-soft border-ok text-ok font-semibold shadow-2xs'
                    : 'bg-surface-2 border-border text-ink-2 hover:text-ink'
                }`}
              >
                Tenho certeza
              </button>
              <button
                type="button"
                onClick={() => setCertezaSelecionada('provavel')}
                className={`py-2 px-3 rounded-lg text-xs font-sans font-medium border transition-all ${
                  certezaSelecionada === 'provavel'
                    ? 'bg-accent-soft border-accent text-accent font-semibold shadow-2xs'
                    : 'bg-surface-2 border-border text-ink-2 hover:text-ink'
                }`}
              >
                Provável
              </button>
              <button
                type="button"
                onClick={() => setCertezaSelecionada('chute')}
                className={`py-2 px-3 rounded-lg text-xs font-sans font-medium border transition-all ${
                  certezaSelecionada === 'chute'
                    ? 'bg-alerta-soft border-alerta-cebraspe text-alerta-cebraspe font-semibold shadow-2xs'
                    : 'bg-surface-2 border-border text-ink-2 hover:text-ink'
                }`}
              >
                Chute consciente
              </button>
            </div>
          </div>

          {/* 3 Botões de Ação Canônica: CERTO / ERRADO / DEIXAR EM BRANCO */}
          <div className="pt-4 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => handleJulgar('C')}
              className={`py-3.5 px-4 rounded-xl font-sans font-bold text-sm flex items-center justify-center gap-2 border-2 transition-all active:scale-98 ${
                respostaAtual?.resposta === 'C'
                  ? 'bg-ok-soft border-ok text-ok shadow-xs'
                  : 'bg-surface border-border text-ink hover:border-ok/60'
              }`}
            >
              <CheckCircle2 className="w-5 h-5 text-ok" />
              <span>CERTO</span>
              <Kbd>C</Kbd>
            </button>

            <button
              type="button"
              onClick={() => handleJulgar('E')}
              className={`py-3.5 px-4 rounded-xl font-sans font-bold text-sm flex items-center justify-center gap-2 border-2 transition-all active:scale-98 ${
                respostaAtual?.resposta === 'E'
                  ? 'bg-err-soft border-err text-err shadow-xs'
                  : 'bg-surface border-border text-ink hover:border-err/60'
              }`}
            >
              <XCircle className="w-5 h-5 text-err" />
              <span>ERRADO</span>
              <Kbd>E</Kbd>
            </button>

            <button
              type="button"
              onClick={() => handleJulgar('BRANCO')}
              className={`py-3.5 px-4 rounded-xl font-sans font-medium text-sm flex items-center justify-center gap-2 border-2 transition-all active:scale-98 ${
                respostaAtual?.resposta === 'BRANCO'
                  ? 'bg-surface-2 border-accent text-ink shadow-xs font-bold'
                  : 'bg-surface border-border text-ink-2 hover:border-border/80'
              }`}
            >
              <HelpCircle className="w-5 h-5 text-ink-2" />
              <span>EM BRANCO</span>
              <Kbd>B</Kbd>
            </button>
          </div>

          {/* Bloco de Feedback Imediato (Modo Estudo Guiado) */}
          {respostaAtual && (
            <div className="pt-6 border-t border-border space-y-4 animate-fadeIn" aria-live="polite">
              {/* Resultado e Impacto na Pontuação */}
              <div
                className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
                  respostaAtual.resposta === 'BRANCO'
                    ? 'bg-surface-2 border-border'
                    : respostaAtual.acertou
                    ? 'bg-ok-soft border-ok text-ok'
                    : 'bg-err-soft border-err text-err'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {respostaAtual.resposta === 'BRANCO' ? (
                    <HelpCircle className="w-5 h-5 text-ink-2" />
                  ) : respostaAtual.acertou ? (
                    <CheckCircle2 className="w-5 h-5 text-ok" />
                  ) : (
                    <XCircle className="w-5 h-5 text-err" />
                  )}

                  <span className="font-sans font-bold text-sm">
                    {respostaAtual.resposta === 'BRANCO'
                      ? 'Item deixado em branco (0 pontos)'
                      : respostaAtual.acertou
                      ? 'Você acertou! (+1 ponto líquido)'
                      : 'Você errou! (-1 ponto líquido: anula uma questão certa)'}
                  </span>
                </div>

                <Badge
                  variant={currentQuestion.gabarito === 'C' ? 'certo' : 'errado'}
                  size="sm"
                >
                  {`Gabarito: ${currentQuestion.gabarito === 'C' ? 'CERTO' : 'ERRADO'}`}
                </Badge>
              </div>

              {/* Armadilha Cebraspe */}
              {currentQuestion.armadilhaBanca && (
                <div className="p-4 rounded-xl bg-theme-alerta-soft/60 border border-theme-alerta/30 space-y-1">
                  <div className="flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wider text-theme-alerta">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Armadilha Cebraspe Identificada</span>
                  </div>
                  <p className="text-xs sm:text-sm font-sans text-theme-alerta leading-relaxed">
                    {currentQuestion.armadilhaBanca}
                  </p>
                </div>
              )}

              {/* Justificativa Canônica */}
              <div className="p-5 bg-surface-2 rounded-xl border border-border space-y-2">
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-ink-2">
                  Justificativa Canônica e Fundamentação
                </span>
                <p className="text-xs sm:text-sm font-serif text-ink leading-relaxed">
                  {currentQuestion.justificativa}
                </p>
              </div>

              {/* Fonte Original Auditada */}
              <div className="flex items-center justify-between text-xs text-ink-2 font-mono pt-1">
                <span>
                  Fonte:{' '}
                  {currentQuestion.fonteOriginal.tipo === 'cebraspe-real'
                    ? currentQuestion.fonteOriginal.descricao
                    : 'Questão Inédita no Padrão Cebraspe'}
                </span>
                {!currentQuestion.fonteOriginal.verificado && (
                  <span className="text-alerta-cebraspe font-sans text-[11px]">
                    (fonte não verificada)
                  </span>
                )}
              </div>
            </div>
          )}
        </article>

        {/* Rodapé de Navegação da Questão */}
        <nav
          aria-label="Navegação do Simulado"
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2"
        >
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={handlePrev}
              className="flex-1 sm:flex-none py-2.5 px-4 rounded-lg bg-surface border border-border text-ink hover:border-accent text-xs sm:text-sm font-sans font-medium flex items-center justify-center gap-1.5 disabled:opacity-40 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
              <Kbd>←</Kbd>
            </button>

            <button
              type="button"
              disabled={currentIndex === 99}
              onClick={handleNext}
              className="flex-1 sm:flex-none py-2.5 px-4 rounded-lg bg-surface border border-border text-ink hover:border-accent text-xs sm:text-sm font-sans font-medium flex items-center justify-center gap-1.5 disabled:opacity-40 transition-colors"
            >
              <span>Próxima</span>
              <Kbd>→</Kbd>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            {/* Botão Mobile da Folha de Respostas */}
            <button
              type="button"
              onClick={() => setIsAnswerSheetMobileOpen(true)}
              className="lg:hidden flex-1 sm:flex-none py-2.5 px-4 rounded-lg bg-surface-2 border border-border text-ink font-sans font-semibold text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              <Layers className="w-4 h-4 text-accent" />
              <span>Folha (100)</span>
            </button>

            <button
              type="button"
              onClick={handleFinalizar}
              className="flex-1 sm:flex-none py-2.5 px-5 rounded-lg bg-primary text-primary-text font-sans font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:opacity-95 shadow-xs"
            >
              <FileCheck className="w-4 h-4" />
              <span>Finalizar Simulado</span>
            </button>
          </div>
        </nav>
      </main>

      {/* Coluna Lateral da Folha de Respostas no Desktop */}
      <aside
        aria-label="Folha de respostas das 100 questões"
        className="hidden lg:block w-80 shrink-0 bg-surface rounded-2xl border border-border p-4.5 shadow-xs sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto"
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-border">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-accent" />
            <h3 className="font-sans font-bold text-ink text-sm">Folha de Respostas</h3>
          </div>
          <span className="font-mono text-xs text-ink-2">100 itens</span>
        </div>

        <AnswerSheet
          questions={simuladoFundamentos100Q}
          respostas={respostas}
          currentIndex={currentIndex}
          onSelectQuestion={(idx) => mudarQuestaoSimulado(idx)}
        />
      </aside>

      {/* Gaveta Mobile da Folha de Respostas (Vaul Drawer) */}
      <Drawer.Root
        open={isAnswerSheetMobileOpen}
        onOpenChange={setIsAnswerSheetMobileOpen}
      >
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/60 z-50 backdrop-blur-xs" />
          <Drawer.Content className="bg-surface border-t border-border flex flex-col rounded-t-2xl max-h-[88vh] fixed bottom-0 left-0 right-0 z-50 focus:outline-none">
            <div className="p-4 bg-surface rounded-t-2xl flex flex-col max-h-[88vh]">
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-border mb-3" />
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <Drawer.Title className="font-sans font-bold text-ink text-base">
                  Folha de Respostas (100 Itens)
                </Drawer.Title>
                <Drawer.Description className="sr-only">
                  Grade de resposta das questões
                </Drawer.Description>
              </div>

              <div className="flex-1 overflow-y-auto py-4">
                <AnswerSheet
                  questions={simuladoFundamentos100Q}
                  respostas={respostas}
                  currentIndex={currentIndex}
                  onSelectQuestion={(idx) => {
                    mudarQuestaoSimulado(idx);
                    setIsAnswerSheetMobileOpen(false);
                  }}
                />
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};
