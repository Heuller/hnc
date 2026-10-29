import React, { useState } from 'react';
import {
  Sparkles,
  Target,
  RotateCcw,
  BookOpen,
  Clock,
  Scale,
  Eye,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldAlert,
} from 'lucide-react';
import type { DiagnosticoFraqueza } from '../../domain/adaptiveQuiz/types';

export interface SimuladoWizardProps {
  vulnerabilidades: DiagnosticoFraqueza[];
  qtdItens: number;
  setQtdItens: (qtd: number) => void;
  modoFoco: 'fraquezas_criticas' | 'erros_caderno' | 'geral_adaptativo';
  setModoFoco: (modo: 'fraquezas_criticas' | 'erros_caderno' | 'geral_adaptativo') => void;
  modoFeedback: 'cego' | 'imediato';
  setModoFeedback: (modo: 'cego' | 'imediato') => void;
  onIniciar: () => void;
  gerando: boolean;
}

const ETAPAS_WIZARD = [
  { id: 1, label: 'Estratégia' },
  { id: 2, label: 'Volume & Tempo' },
  { id: 3, label: 'Feedback' },
  { id: 4, label: 'Prontidão' },
] as const;

export const SimuladoWizard: React.FC<SimuladoWizardProps> = ({
  vulnerabilidades,
  qtdItens,
  setQtdItens,
  modoFoco,
  setModoFoco,
  modoFeedback,
  setModoFeedback,
  onIniciar,
  gerando,
}) => {
  const [etapaAtual, setEtapaAtual] = useState<1 | 2 | 3 | 4>(1);

  const tempoEstimadoMinutos = Math.round(qtdItens * 2.5);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Indicador de Passos do Wizard (Padrão Wizard Matt Pocock) */}
      <nav aria-label="Progresso do assistente de configuração" className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono font-bold text-ink-2">
          <span>ETAPA {etapaAtual} DE 4: {ETAPAS_WIZARD[etapaAtual - 1].label.toUpperCase()}</span>
          <span>{Math.round((etapaAtual / 4) * 100)}% CONCLUÍDO</span>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {ETAPAS_WIZARD.map((step) => {
            const ativa = etapaAtual === step.id;
            const concluida = etapaAtual > step.id;

            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setEtapaAtual(step.id)}
                className={`py-1.5 px-2 rounded-lg text-xs font-sans font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer border ${
                  ativa
                    ? 'bg-accent text-accent-text border-accent shadow-xs'
                    : concluida
                    ? 'bg-accent/15 text-accent border-accent/30'
                    : 'bg-surface-2 text-ink-2 border-border opacity-70'
                }`}
              >
                <span>{step.id}.</span>
                <span className="hidden sm:inline">{step.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* PASSO 1: ESTRATÉGIA PEDAGÓGICA E FOCO TEMÁTICO */}
      {/* ========================================================================= */}
      {etapaAtual === 1 && (
        <div className="space-y-5 animate-in fade-in duration-200">
          <div className="card-editorial p-5 border-l-4 border-l-accent space-y-2">
            <h3 className="text-sm font-sans font-bold text-ink m-0 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Diagnóstico Inteligente de Fraquezas</span>
            </h3>
            <p className="text-xs text-ink-2 font-serif leading-relaxed m-0">
              O algoritmo avalia suas respostas em micro-checkpoints para identificar tópicos com menor índice de acerto líquido.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-ink-2 uppercase tracking-wider block">
              Pontos Críticos Diagnosticados no Histórico:
            </span>

            {vulnerabilidades.length === 0 ? (
              <div className="p-4 rounded-xl bg-surface-2 border border-border text-xs text-ink-2 text-center font-sans">
                Nenhum ponto fraco crítico registrado ainda. O simulado cobrirá os principais módulos do edital da Câmara com ênfase preventiva.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {vulnerabilidades.slice(0, 4).map((v) => (
                  <div
                    key={v.macroModuloId}
                    className="p-3 rounded-xl bg-surface border border-border space-y-1.5 shadow-2xs"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-sans font-bold text-ink truncate max-w-[170px]">
                        {v.titulo}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-mono font-bold ${
                          v.nivelGravidade === 'CRITICA'
                            ? 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-500/30'
                            : 'bg-amber-500/15 text-accent dark:text-amber-300 border border-amber-500/30'
                        }`}
                      >
                        {v.totalErros} erro{v.totalErros !== 1 ? 's' : ''} ({v.taxaErro}%)
                      </span>
                    </div>
                    {v.pontosCegosIdentificados[0] && (
                      <p className="text-xs text-ink-2 italic font-serif m-0 line-clamp-1">
                        "{v.pontosCegosIdentificados[0]}"
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2 pt-2">
            <span className="text-xs font-sans font-bold text-ink block">
              Selecione o Foco do Treino:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setModoFoco('fraquezas_criticas')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer space-y-1 ${
                  modoFoco === 'fraquezas_criticas'
                    ? 'bg-accent/10 border-accent text-ink shadow-xs'
                    : 'bg-surface-2 border-border text-ink-2 hover:text-ink'
                }`}
              >
                <div className="text-xs font-sans font-bold text-ink flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-accent" />
                  <span>Fraquezas Críticas</span>
                </div>
                <p className="text-xs font-serif leading-relaxed m-0 text-ink-2">
                  Concentra 80% nos submódulos onde você mais falhou.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setModoFoco('erros_caderno')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer space-y-1 ${
                  modoFoco === 'erros_caderno'
                    ? 'bg-accent/10 border-accent text-ink shadow-xs'
                    : 'bg-surface-2 border-border text-ink-2 hover:text-ink'
                }`}
              >
                <div className="text-xs font-sans font-bold text-ink flex items-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5 text-accent" />
                  <span>Caderno de Erros</span>
                </div>
                <p className="text-xs font-serif leading-relaxed m-0 text-ink-2">
                  Retesta e aprofunda itens já errados anteriormente.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setModoFoco('geral_adaptativo')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer space-y-1 ${
                  modoFoco === 'geral_adaptativo'
                    ? 'bg-accent/10 border-accent text-ink shadow-xs'
                    : 'bg-surface-2 border-border text-ink-2 hover:text-ink'
                }`}
              >
                <div className="text-xs font-sans font-bold text-ink flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-accent" />
                  <span>Geral Preventivo</span>
                </div>
                <p className="text-xs font-serif leading-relaxed m-0 text-ink-2">
                  Varredura balanceada por todos os blocos do edital.
                </p>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* PASSO 2: VOLUME E RITMO DE PROVA */}
      {/* ========================================================================= */}
      {etapaAtual === 2 && (
        <div className="space-y-5 animate-in fade-in duration-200">
          <div className="space-y-2">
            <span className="text-xs font-sans font-bold text-ink block">
              Quantidade de Itens no Treino:
            </span>
            <div className="grid grid-cols-3 gap-2.5">
              {[10, 15, 20].map((qtd) => (
                <button
                  key={qtd}
                  type="button"
                  onClick={() => setQtdItens(qtd)}
                  className={`p-3.5 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                    qtdItens === qtd
                      ? 'bg-accent text-accent-text border-accent shadow-xs'
                      : 'bg-surface-2 text-ink hover:border-accent/60 border-border'
                  }`}
                >
                  <span className="text-base">{qtd} Itens</span>
                  <span className="text-xs opacity-75 font-sans font-normal">
                    ~{Math.round(qtd * 2.5)} minutos
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-border space-y-2">
            <div className="flex items-center gap-2 text-xs font-sans font-bold text-ink">
              <Scale className="w-4 h-4 text-accent" />
              <span>Regra de Pontuação Oficial Cebraspe (Fator 1:1)</span>
            </div>
            <p className="text-xs font-serif text-ink-2 leading-relaxed m-0">
              Cada acerto soma <strong>+1 ponto líquido</strong>. Cada erro subtrai <strong>-1 ponto líquido</strong>. Itens deixados em branco pontuam <strong>0</strong>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-2 border border-border flex items-center justify-between text-xs font-sans">
            <div className="flex items-center gap-2 text-ink">
              <Clock className="w-4 h-4 text-accent" />
              <span>Tempo de Prova Sugerido:</span>
            </div>
            <span className="font-mono font-bold text-accent text-sm">
              {tempoEstimadoMinutos} minutos ({qtdItens} assertivas)
            </span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* PASSO 3: MODO DE FEEDBACK PEDAGÓGICO */}
      {/* ========================================================================= */}
      {etapaAtual === 3 && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <span className="text-xs font-sans font-bold text-ink block">
            Quando deseja conferir as respostas?
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setModoFeedback('cego')}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer space-y-2 ${
                modoFeedback === 'cego'
                  ? 'bg-accent/10 border-accent text-ink shadow-xs'
                  : 'bg-surface-2 border-border text-ink-2 hover:text-ink'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="text-xs font-sans font-bold text-ink flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-accent" />
                  <span>Modo Simulado Cego</span>
                </div>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-surface border border-border">
                  Prova Real
                </span>
              </div>
              <p className="text-xs font-serif text-ink-2 leading-relaxed m-0">
                Você responde todas as questões sequencialmente sem interrupções. O gabarito, nota líquida e fundamentação jurídica são exibidos apenas ao finalizar o caderno.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setModoFeedback('imediato')}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer space-y-2 ${
                modoFeedback === 'imediato'
                  ? 'bg-accent/10 border-accent text-ink shadow-xs'
                  : 'bg-surface-2 border-border text-ink-2 hover:text-ink'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="text-xs font-sans font-bold text-ink flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-accent" />
                  <span>Modo Hipercorreção</span>
                </div>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-surface border border-border">
                  Treino Didático
                </span>
              </div>
              <p className="text-xs font-serif text-ink-2 leading-relaxed m-0">
                A cada assertiva respondida, a plataforma valida imediatamente o acerto ou erro, mostrando a fundamentação cadastrada e orientações para conferir seu raciocínio.
              </p>
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* PASSO 4: PRONTIDÃO E DESPACHO */}
      {/* ========================================================================= */}
      {etapaAtual === 4 && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="card-editorial p-5 bg-surface border border-border shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-ink border-b border-border/80 pb-2.5">
              <CheckCircle2 className="w-4 h-4 text-ok dark:text-emerald-400" />
              <h3 className="text-sm font-sans font-bold text-ink m-0">
                Resumo da Configuração do Simulado
              </h3>
            </div>

            <dl className="grid grid-cols-2 gap-2 text-xs font-sans">
              <div className="p-2.5 rounded-lg bg-surface-2/60">
                <dt className="text-ink-2 font-medium">Estratégia de Foco:</dt>
                <dd className="font-bold text-ink capitalize m-0">
                  {modoFoco === 'fraquezas_criticas'
                    ? 'Fraquezas Críticas'
                    : modoFoco === 'erros_caderno'
                    ? 'Caderno de Erros'
                    : 'Geral Preventivo'}
                </dd>
              </div>

              <div className="p-2.5 rounded-lg bg-surface-2/60">
                <dt className="text-ink-2 font-medium">Volume de Itens:</dt>
                <dd className="font-bold text-ink font-mono m-0">
                  {qtdItens} assertivas Cebraspe
                </dd>
              </div>

              <div className="p-2.5 rounded-lg bg-surface-2/60">
                <dt className="text-ink-2 font-medium">Tempo Sugerido:</dt>
                <dd className="font-bold text-ink font-mono m-0">
                  ~{tempoEstimadoMinutos} minutos
                </dd>
              </div>

              <div className="p-2.5 rounded-lg bg-surface-2/60">
                <dt className="text-ink-2 font-medium">Feedback Pedagógico:</dt>
                <dd className="font-bold text-ink m-0">
                  {modoFeedback === 'cego' ? 'Simulado Cego' : 'Hipercorreção Imediata'}
                </dd>
              </div>
            </dl>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={onIniciar}
              disabled={gerando}
              className="w-full py-3.5 px-4 rounded-xl bg-accent hover:bg-accent/90 text-accent-text font-sans font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-editorial-sm disabled:opacity-50"
            >
              <Sparkles className="w-4 h-4" />
              <span>{gerando ? 'Selecionando itens do banco...' : 'Iniciar Simulado Adaptativo'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Barra de Navegação Entre Passos (Voltar / Avançar) */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        {etapaAtual > 1 ? (
          <button
            type="button"
            onClick={() => setEtapaAtual((prev) => (prev > 1 ? ((prev - 1) as 1 | 2 | 3 | 4) : 1))}
            className="px-3.5 py-2 rounded-lg bg-surface-2 hover:bg-surface border border-border text-ink font-sans font-semibold text-xs flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar</span>
          </button>
        ) : (
          <div />
        )}

        {etapaAtual < 4 && (
          <button
            type="button"
            onClick={() => setEtapaAtual((prev) => (prev < 4 ? ((prev + 1) as 1 | 2 | 3 | 4) : 4))}
            className="px-4 py-2 rounded-lg bg-primary text-primary-text font-sans font-bold text-xs flex items-center gap-1.5 cursor-pointer hover:opacity-90 transition-opacity"
          >
            <span>Próximo Passo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
