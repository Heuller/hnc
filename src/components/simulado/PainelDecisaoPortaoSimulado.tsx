import React from 'react';
import {
  CheckCircle2,
  ArrowRight,
  BookOpen,
  RotateCcw,
  RefreshCw,
  ShieldAlert,
} from 'lucide-react';
import { Button } from '../common/Button';
import { useNavigationStore } from '../../store/useNavigationStore';
import { useProgressStore } from '../../store/useProgressStore';
import { JORNADA_CONFIG } from '../../config/jornada.config';
import type { SimuladoFinalizado } from '../../domain/schemas/progress.schema';
import { calcularNotaConsolidadaSimulado } from '../../domain/portaoSimuladoEngine';

interface PainelDecisaoPortaoSimuladoProps {
  simuladoId: string;
  relatorioFinal: SimuladoFinalizado;
  onRefazerErros: (itensErradosIds: string[]) => void;
  onNovoSimuladoCompleto: () => void;
}

export const PainelDecisaoPortaoSimulado: React.FC<PainelDecisaoPortaoSimuladoProps> = ({
  simuladoId,
  relatorioFinal,
  onRefazerErros,
  onNovoSimuladoCompleto,
}) => {
  const { setSelectedSubmodule, setActiveView } = useNavigationStore();
  const { historicoSimulados } = useProgressStore();

  const modNumMatch = simuladoId.match(/m(\d+)/i);
  const moduloNumero = modNumMatch ? parseInt(modNumMatch[1], 10) : 1;
  const proximoModuloNumero = moduloNumero + 1;

  const totalQuestoes = Object.keys(relatorioFinal.respostas || {}).length || 100;
  const taxaAcertoBruto = Math.round((relatorioFinal.certos / totalQuestoes) * 100);

  // Calcula a nota consolidada
  const consolidada = calcularNotaConsolidadaSimulado(
    simuladoId,
    [relatorioFinal, ...(historicoSimulados || []).filter((s) => s.id !== relatorioFinal.id)]
  );

  const minimoExigido = Math.round(JORNADA_CONFIG.minimoSimuladoModulo * 100);
  const isAprovado = consolidada.aprovado || taxaAcertoBruto >= minimoExigido;

  // Itens errados nesta execução
  const itensErradosIds = Object.entries(relatorioFinal.respostas || {})
    .filter(([_, r]) => r.resposta !== 'BRANCO' && !r.acertou)
    .map(([qId]) => qId);

  const handleIrParaProximoModulo = () => {
    setSelectedSubmodule(`${proximoModuloNumero}.1`);
    setActiveView('teoria');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRevisaoDirigida = () => {
    // Abre o submódulo 1.1 ou o que tiver mais erros
    setSelectedSubmodule(`${moduloNumero}.1`);
    setActiveView('teoria');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`p-6 rounded-2xl border-2 my-6 space-y-5 animate-fadeIn ${
        isAprovado
          ? 'bg-ok-soft/30 border-ok/40'
          : 'bg-surface-2 border-border'
      }`}
      role="region"
      aria-label="Decisão do Portão do Simulado"
    >
      {/* Cabeçalho do Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-2xs ${
              isAprovado ? 'bg-ok text-white' : 'bg-surface border border-border text-ink'
            }`}
          >
            {isAprovado ? (
              <CheckCircle2 className="w-6 h-6" />
            ) : (
              <ShieldAlert className="w-6 h-6 text-accent" />
            )}
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded uppercase tracking-wider bg-surface border border-border text-ink-2">
                Portão do Simulado · Módulo {moduloNumero}
              </span>
              <span
                className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded uppercase ${
                  isAprovado
                    ? 'bg-ok text-white'
                    : 'bg-surface-2 text-ink-2 border border-border'
                }`}
              >
                {isAprovado ? 'Aprovado' : 'Abaixo do Limiar'}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-serif font-bold text-ink">
              {isAprovado
                ? `Módulo ${proximoModuloNumero} Liberado com Sucesso!`
                : `Aproveitamento Insuficiente para Liberação do Módulo ${proximoModuloNumero}`}
            </h3>

            <p className="text-xs sm:text-sm text-ink-2 font-serif leading-relaxed">
              {isAprovado
                ? `Você atingiu o índice pedagógico de domínio exigido pelo edital (ao menos ${minimoExigido}% no simulado de 100 itens). O próximo módulo já está desbloqueado.`
                : `O edital exige aproveitamento consolidado de ao menos ${minimoExigido}% para desbloquear o Módulo ${proximoModuloNumero}. Escolha um dos três caminhos para consolidar seus conhecimentos.`}
            </p>
          </div>
        </div>
      </div>

      {/* Régua de Notas: 1ª Tentativa e Consolidada (Regra 2.4) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-surface rounded-xl border border-border">
        <div>
          <span className="text-[11px] font-sans text-ink-2 block">1ª Tentativa</span>
          <span className="text-xl sm:text-2xl font-mono font-bold text-ink">
            {consolidada.primeiraTentativaPercent}%
          </span>
          <span className="text-[10px] text-ink-2 font-mono block">nota oficial do portão</span>
        </div>

        <div>
          <span className="text-[11px] font-sans text-ink-2 block">Nota Consolidada</span>
          <span
            className={`text-xl sm:text-2xl font-mono font-bold ${
              isAprovado ? 'text-ok' : 'text-accent'
            }`}
          >
            {consolidada.notaConsolidadaPercent}%
          </span>
          <span className="text-[10px] text-ink-2 font-mono block">
            mínimo: {minimoExigido}%
          </span>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <span className="text-[11px] font-sans text-ink-2 block">Nota Líquida (C − E)</span>
          <span className="text-xl sm:text-2xl font-mono font-bold text-ink">
            {relatorioFinal.notaLiquida > 0 ? `+${relatorioFinal.notaLiquida}` : relatorioFinal.notaLiquida}
          </span>
          <span className="text-[10px] text-ink-2 font-mono block">fator Cebraspe</span>
        </div>
      </div>

      {/* AÇÕES DE FLUXO */}
      {isAprovado ? (
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
          <Button
            variant="primary"
            size="lg"
            onClick={handleIrParaProximoModulo}
            className="w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer shadow-editorial-sm"
          >
            <span>Começar Módulo {proximoModuloNumero}</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      ) : (
        <div className="space-y-3 pt-2">
          <span className="text-xs font-sans font-semibold uppercase tracking-wider text-ink-2 block">
            Escolha como prosseguir (Regra 2.4):
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Opção A: Revisão Dirigida */}
            <button
              type="button"
              onClick={handleRevisaoDirigida}
              className="p-4 rounded-xl bg-surface border border-border hover:border-accent text-left transition-all space-y-2 cursor-pointer group shadow-2xs"
            >
              <div className="flex items-center gap-2 text-ink group-hover:text-accent">
                <BookOpen className="w-4 h-4 text-accent" />
                <span className="font-sans font-bold text-xs sm:text-sm">A) Revisão Dirigida</span>
              </div>
              <p className="text-[11px] text-ink-2 font-serif leading-relaxed">
                Abre as seções da teoria dos tópicos com maior número de erros para consolidação.
              </p>
            </button>

            {/* Opção B: Refazer só os erros */}
            <button
              type="button"
              onClick={() => onRefazerErros(itensErradosIds)}
              className="p-4 rounded-xl bg-surface border border-border hover:border-accent text-left transition-all space-y-2 cursor-pointer group shadow-2xs"
            >
              <div className="flex items-center gap-2 text-ink group-hover:text-accent">
                <RotateCcw className="w-4 h-4 text-accent" />
                <span className="font-sans font-bold text-xs sm:text-sm">
                  B) Refazer só os erros ({itensErradosIds.length} itens)
                </span>
              </div>
              <p className="text-[11px] text-ink-2 font-serif leading-relaxed">
                Simulado exclusivo com os itens errados em ordem embaralhada e estudo reverso.
              </p>
            </button>

            {/* Opção C: Novo simulado completo */}
            <button
              type="button"
              onClick={onNovoSimuladoCompleto}
              className="p-4 rounded-xl bg-surface border border-border hover:border-accent text-left transition-all space-y-2 cursor-pointer group shadow-2xs"
            >
              <div className="flex items-center gap-2 text-ink group-hover:text-accent">
                <RefreshCw className="w-4 h-4 text-accent" />
                <span className="font-sans font-bold text-xs sm:text-sm">C) Novo Simulado (100Q)</span>
              </div>
              <p className="text-[11px] text-ink-2 font-serif leading-relaxed">
                Nova tentativa completa de 100 itens no padrão oficial Cebraspe.
              </p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
