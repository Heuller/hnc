import React, { useMemo } from 'react';
import {
  Target,
  ShieldCheck,
  TrendingUp,
  Brain,
  Calendar,
  Award,
  Activity,
} from 'lucide-react';
import { useProgressStore } from '../../store/useProgressStore';
import { gerarRelatorioQuinzenalW6 } from '../../domain/metrics/medicaoContinuaW6';

export const PainelMedicaoContinuaW6: React.FC = () => {
  const { itemAttempts, historicoSimulados } = useProgressStore();

  const relatorio = useMemo(() => {
    return gerarRelatorioQuinzenalW6(itemAttempts, historicoSimulados);
  }, [itemAttempts, historicoSimulados]);

  const { itensIneditos, calibracaoMetacognitiva, retencaoLongitudinal, mecanismosAvaliados, metaRecalibrada } = relatorio;

  return (
    <div className="bg-surface border border-border rounded-2xl p-5 sm:p-7 shadow-editorial-sm space-y-7">
      {/* CABEÇALHO W6 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-lg sm:text-xl font-serif font-bold text-ink">
                Medição Contínua e Metas Oficiais (W6)
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-500/15 border border-purple-500/30 text-purple-700 dark:text-purple-300 uppercase">
                Edital nº 1/2026 · Corte 22ª Vaga + 1.5 DP
              </span>
            </div>
            <p className="text-xs text-ink-2">
              Painel de calibração empírica, notas líquidas estritamente em itens inéditos e verificação dos critérios pré-registrados.
            </p>
          </div>
        </div>

        <div className="text-right sm:text-right">
          <span className="text-[10px] font-mono uppercase text-ink-2 block">Meta Segura de Aprovação</span>
          <span className="text-2xl font-serif font-black text-purple-700 dark:text-purple-400">
            {metaRecalibrada.metaObjetivaLiquidaTotal.toFixed(1)} pts
          </span>
          <span className="text-[10px] text-ink-2 block font-mono">
            {((metaRecalibrada.metaObjetivaLiquidaTotal / 180) * 100).toFixed(1)}% líq. em 180 itens
          </span>
        </div>
      </div>

      {/* METAS RECALIBRADAS EDITALÍCIAS */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-xl bg-surface-2/60 border border-border space-y-1">
          <span className="text-[10px] font-mono font-bold uppercase text-ink-2 block">
            Corte Estimado (22ª Vaga AC)
          </span>
          <span className="text-xl font-serif font-bold text-ink">
            {metaRecalibrada.corteEstimado22Vaga.toFixed(1)} pts
          </span>
          <span className="text-[10px] text-ink-2 block leading-snug">
            Cenário Realista Cebraspe (57.2% líquido no STJ/Câmara)
          </span>
        </div>

        <div className="p-3.5 rounded-xl bg-surface-2/60 border border-border space-y-1">
          <span className="text-[10px] font-mono font-bold uppercase text-ink-2 block">
            Margem de Segurança (+1.5 DP)
          </span>
          <span className="text-xl font-serif font-bold text-purple-600 dark:text-purple-400">
            +{metaRecalibrada.margemSegurancaDP.toFixed(1)} pts
          </span>
          <span className="text-[10px] text-ink-2 block leading-snug">
            Proteção estatística contra ruído de prova (CLAUDE.md §7)
          </span>
        </div>

        <div className="p-3.5 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900 space-y-1">
          <span className="text-[10px] font-mono font-bold uppercase text-purple-700 dark:text-purple-300 block">
            P2 (Específicos - 90Q)
          </span>
          <span className="text-xl font-serif font-bold text-purple-900 dark:text-purple-100">
            ≥ {metaRecalibrada.metaP2Especificos.toFixed(1)} pts
          </span>
          <span className="text-[10px] text-purple-600 dark:text-purple-400 block leading-snug">
            1º Critério de desempate editalício (subitem 12.1)
          </span>
        </div>

        <div className="p-3.5 rounded-xl bg-surface-2/60 border border-border space-y-1">
          <span className="text-[10px] font-mono font-bold uppercase text-ink-2 block">
            P3 (Discursiva - 60 pts)
          </span>
          <span className="text-xl font-serif font-bold text-ink">
            ≥ {metaRecalibrada.metaP3Discursiva.toFixed(1)} pts
          </span>
          <span className="text-[10px] text-ink-2 block leading-snug">
            75% de aproveitamento nas 2 questões + peça técnica
          </span>
        </div>
      </div>

      {/* BLOCO 1: MEDIÇÃO EM ITENS INÉDITOS (SEM CONTAMINAÇÃO) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase text-ink flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Desempenho Estritamente em Itens Inéditos (1ª Exposição)</span>
          </span>
          <span className="text-xs font-mono text-ink-2">
            Base limpa: {itensIneditos.totalItensIneditos} itens julgados
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <div className="p-3 rounded-xl bg-surface-2/40 border border-border text-center">
            <span className="text-[10px] font-mono uppercase text-ink-2 block">Acertos Brutos</span>
            <span className="text-lg font-mono font-bold text-emerald-600">{itensIneditos.acertos}</span>
            <span className="text-[10px] text-ink-2 block">
              {(itensIneditos.rawAccuracy * 100).toFixed(1)}% raw
            </span>
          </div>

          <div className="p-3 rounded-xl bg-surface-2/40 border border-border text-center">
            <span className="text-[10px] font-mono uppercase text-ink-2 block">Erros (Penalizam)</span>
            <span className="text-lg font-mono font-bold text-rose-600">{itensIneditos.erros}</span>
            <span className="text-[10px] text-rose-500 block">-{itensIneditos.erros} pts</span>
          </div>

          <div className="p-3 rounded-xl bg-surface-2/40 border border-border text-center">
            <span className="text-[10px] font-mono uppercase text-ink-2 block">Em Branco</span>
            <span className="text-lg font-mono font-bold text-amber-600">{itensIneditos.brancos}</span>
            <span className="text-[10px] text-ink-2 block">Abstenção segura</span>
          </div>

          <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-center">
            <span className="text-[10px] font-mono uppercase text-purple-700 dark:text-purple-300 block">
              Nota Líquida Inédita
            </span>
            <span className="text-lg font-mono font-black text-purple-800 dark:text-purple-200">
              {itensIneditos.pontosLiquidos > 0 ? `+${itensIneditos.pontosLiquidos}` : itensIneditos.pontosLiquidos} pts
            </span>
            <span className="text-[10px] font-bold text-purple-700 dark:text-purple-400 block">
              {(itensIneditos.netScorePercent * 100).toFixed(1)}% líquido
            </span>
          </div>

          <div className="p-3 rounded-xl bg-surface-2/40 border border-border text-center col-span-2 sm:col-span-1">
            <span className="text-[10px] font-mono uppercase text-ink-2 block">Desvio-Padrão (DP)</span>
            <span className="text-lg font-mono font-bold text-ink">±{itensIneditos.desvioPadraoAmostral}</span>
            <span className="text-[10px] text-ink-2 block">Variabilidade real</span>
          </div>
        </div>

        {/* Diagnóstico Pedagógico do Relatório */}
        <div className="p-3.5 rounded-xl bg-purple-500/5 border border-purple-500/20 flex items-start gap-2.5">
          <Activity className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
          <p className="text-xs text-ink font-serif leading-relaxed">
            <strong>Diagnóstico W6:</strong> {relatorio.diagnosticoPedagogico}
          </p>
        </div>
      </div>

      {/* BLOCO 2: CALIBRAÇÃO METACOGNITIVA (BRIER SCORE) E RETENÇÃO LONGITUDINAL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Brier Score */}
        <div className="p-4 rounded-xl bg-surface-2/40 border border-border space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase text-ink flex items-center gap-1.5">
              <Brain className="w-4 h-4 text-purple-600" />
              <span>Calibração Metacognitiva (Brier Score)</span>
            </span>
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                calibracaoMetacognitiva.nivelCalibracao === 'excelente'
                  ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
                  : calibracaoMetacognitiva.nivelCalibracao === 'adequado'
                  ? 'bg-blue-500/10 text-blue-600 border border-blue-500/20'
                  : 'bg-rose-500/10 text-rose-600 border border-rose-500/20'
              }`}
            >
              Brier: {calibracaoMetacognitiva.brierScore.toFixed(3)} ({calibracaoMetacognitiva.nivelCalibracao})
            </span>
          </div>

          <div className="space-y-1.5 text-xs font-mono">
            <div className="flex items-center justify-between p-2 rounded bg-surface border border-border">
              <span className="text-ink">Certeza (Esperado: ~100%)</span>
              <span className="font-bold text-emerald-600">
                {(calibracaoMetacognitiva.distribuicaoConfianca.certeza.taxaReal * 100).toFixed(1)}% real ({calibracaoMetacognitiva.distribuicaoConfianca.certeza.total} itens)
              </span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-surface border border-border">
              <span className="text-ink">Provável (Esperado: ~70%)</span>
              <span className="font-bold text-blue-600">
                {(calibracaoMetacognitiva.distribuicaoConfianca.provavel.taxaReal * 100).toFixed(1)}% real ({calibracaoMetacognitiva.distribuicaoConfianca.provavel.total} itens)
              </span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-surface border border-border">
              <span className="text-ink">Chute / Dúvida (Esperado: ~50%)</span>
              <span className="font-bold text-amber-600">
                {(calibracaoMetacognitiva.distribuicaoConfianca.chute.taxaReal * 100).toFixed(1)}% real ({calibracaoMetacognitiva.distribuicaoConfianca.chute.total} itens)
              </span>
            </div>
          </div>
          <p className="text-[10px] text-ink-2 font-serif italic">
            *No Cebraspe, chutes com acurácia próxima de 50% resultam em nota líquida zero ($50 - 50 = 0$) ou negativa. Dúvidas com confiança inferior a 60% devem ser deixadas em branco.
          </p>
        </div>

        {/* Retenção Longitudinal */}
        <div className="p-4 rounded-xl bg-surface-2/40 border border-border space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase text-ink flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>Retenção Espaçada Longitudinal</span>
            </span>
            <span className="text-[10px] font-mono text-ink-2">Curva de Ebbinghaus/Pashler</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="p-3 rounded bg-surface border border-border space-y-1">
              <span className="text-[10px] font-mono uppercase text-ink-2 block">Retenção a 7 Dias</span>
              <span className="text-xl font-mono font-bold text-emerald-600">
                {(retencaoLongitudinal.retencao7Dias.taxa * 100).toFixed(1)}%
              </span>
              <span className="text-[10px] text-ink-2 block">
                {retencaoLongitudinal.retencao7Dias.avaliacoes} retestes
              </span>
            </div>

            <div className="p-3 rounded bg-surface border border-border space-y-1">
              <span className="text-[10px] font-mono uppercase text-ink-2 block">Retenção a 21 Dias</span>
              <span className="text-xl font-mono font-bold text-purple-600 dark:text-purple-400">
                {(retencaoLongitudinal.retencao21Dias.taxa * 100).toFixed(1)}%
              </span>
              <span className="text-[10px] text-ink-2 block">
                {retencaoLongitudinal.retencao21Dias.avaliacoes} retestes
              </span>
            </div>
          </div>
          <p className="text-[10px] text-ink-2 font-serif italic">
            *Critério pré-registrado: retenção em 21 dias superior a 60% valida a eficiência do deck atômico unificado.
          </p>
        </div>
      </div>

      {/* BLOCO 3: CRITÉRIOS PRÉ-REGISTRADOS (MANTER OU ABANDONAR MECANISMOS) */}
      <div className="space-y-3">
        <span className="text-xs font-mono font-bold uppercase text-ink flex items-center gap-1.5">
          <Award className="w-4 h-4 text-purple-600" />
          <span>Status dos Mecanismos Pedagógicos (Critérios Pré-Registrados)</span>
        </span>

        <div className="space-y-2">
          {mecanismosAvaliados.map((m, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-surface-2/40 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
            >
              <div className="space-y-0.5 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="font-serif font-bold text-ink">{m.nome}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                      m.status === 'manter'
                        ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-600 border border-amber-500/20'
                    }`}
                  >
                    {m.status === 'manter' ? 'Manter' : 'Atenção'}
                  </span>
                </div>
                <p className="text-[11px] text-ink-2">{m.descricao}</p>
                <p className="text-[10px] font-mono text-ink-2 italic">Gatilho de abandono: {m.criterioAbandono}</p>
              </div>

              <div className="text-left sm:text-right shrink-0">
                <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 font-semibold block">
                  {m.justificativa}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCO 4: CALENDÁRIO OFICIAL DOS 3 SIMULADOS GERAIS (180Q + DISCURSIVA) */}
      <div className="p-4 sm:p-5 rounded-2xl bg-surface-2/60 border border-border space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>Calendário dos Simulados Gerais Completos (Formato Oficial da Prova)</span>
          </span>
          <span className="text-[11px] font-mono text-ink-2">
            Manhã (5h - 180Q Objetivas) + Tarde (3h - 60 pts Discursiva Manuscrita)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Simulado 1 */}
          <div className="p-4 rounded-xl bg-surface border border-border space-y-2">
            <div className="flex items-center justify-between font-mono text-[10px] text-ink-2">
              <span className="font-bold text-purple-700 dark:text-purple-300">SIMULADO 1</span>
              <span>01/11/2026 (Dom)</span>
            </div>
            <h4 className="text-xs font-bold font-serif text-ink">Marco Diagnóstico Inicial</h4>
            <p className="text-[11px] text-ink-2 leading-relaxed">
              Ensaio completo com 180 itens (90 P1 + 90 P2) e 2 questões + 1 peça técnica manuscritas. Aferição do baseline rigoroso pós-congelamento inicial.
            </p>
          </div>

          {/* Simulado 2 */}
          <div className="p-4 rounded-xl bg-surface border border-border space-y-2">
            <div className="flex items-center justify-between font-mono text-[10px] text-ink-2">
              <span className="font-bold text-purple-700 dark:text-purple-300">SIMULADO 2</span>
              <span>22/11/2026 (Dom)</span>
            </div>
            <h4 className="text-xs font-bold font-serif text-ink">Marco de Congelamento</h4>
            <p className="text-[11px] text-ink-2 leading-relaxed">
              Realizado logo após o congelamento oficial da plataforma (18/11/2026). Medição do avanço do Pareto e calibração das estratégias de marcação em branco.
            </p>
          </div>

          {/* Simulado 3 */}
          <div className="p-4 rounded-xl bg-surface border border-purple-500/30 bg-purple-500/5 space-y-2">
            <div className="flex items-center justify-between font-mono text-[10px] text-purple-700 dark:text-purple-300">
              <span className="font-bold">SIMULADO 3</span>
              <span>03/01/2027 (Dom)</span>
            </div>
            <h4 className="text-xs font-bold font-serif text-ink">Ensaio Geral Pré-Prova</h4>
            <p className="text-[11px] text-ink-2 leading-relaxed">
              Exatamente duas semanas antes de 17/01/2027. Simulação estrita em tempo real: 5h matutinas (9h-14h) e 3h vespertinas (16h-19h) com caneta preta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
