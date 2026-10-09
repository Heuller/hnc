import React from 'react';
import {
  Calendar,
  Clock,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { useConceptStore } from '../../store/useConceptStore';
import { calcularProjecaoTemporal } from '../../domain/projectionsEngine';

export const ProjecaoTemporalCard: React.FC = () => {
  const { estados } = useConceptStore();

  const projecao = React.useMemo(() => {
    return calcularProjecaoTemporal({
      estadosConceitos: estados,
    });
  }, [estados]);

  const corStatus = {
    confortavel: 'text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
    adequado: 'text-sky-700 dark:text-sky-300 bg-sky-500/10 border-sky-500/20',
    acelerar: 'text-amber-700 dark:text-amber-300 bg-amber-500/10 border-amber-500/20',
  }[projecao.statusCronograma];

  return (
    <div className="w-full bg-surface border border-border rounded-2xl p-4 sm:p-6 shadow-xs space-y-6">
      {/* Header do Card */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/70">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20">
              Projeção Cebraspe · 17/01/2027
            </span>
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-sans font-semibold border ${corStatus}`}>
              {projecao.statusCronograma === 'confortavel'
                ? 'Margem Confortável'
                : projecao.statusCronograma === 'adequado'
                ? 'Cronograma Alinhado'
                : 'Atenção Necessária'}
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-serif font-bold text-ink mt-1">
            Planejamento Espaçado e Marcos de Disciplina
          </h2>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-ink-3">
          <Calendar className="w-4 h-4 text-accent" />
          <span>Segunda a sexta · Sem fins de semana</span>
        </div>
      </div>

      {/* Grid de Métricas Principais */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Dias Úteis */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-bg border border-border">
          <div className="flex items-center gap-1.5 text-xs text-ink-3 mb-1">
            <Clock className="w-3.5 h-3.5 text-accent" />
            <span>Dias Úteis Restantes</span>
          </div>
          <div className="text-2xl sm:text-3xl font-mono font-bold text-ink">
            {projecao.diasUteisRestantes}
          </div>
          <div className="text-[11px] text-ink-3 mt-0.5">
            {projecao.diasCorridosRestantes} dias corridos
          </div>
        </div>

        {/* Capacidade de Revisão */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-bg border border-border">
          <div className="flex items-center gap-1.5 text-xs text-ink-3 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Capacidade de Ciclo</span>
          </div>
          <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-700 dark:text-emerald-400">
            {projecao.capacidadeTotalRevisoes}
          </div>
          <div className="text-[11px] text-ink-3 mt-0.5">
            Teto: {projecao.tetoDiarioConfortavel} itens/dia
          </div>
        </div>

        {/* Retenção Projetada */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-bg border border-border">
          <div className="flex items-center gap-1.5 text-xs text-ink-3 mb-1">
            <TrendingUp className="w-3.5 h-3.5 text-purple-600" />
            <span>Retenção Projetada</span>
          </div>
          <div className="text-2xl sm:text-3xl font-mono font-bold text-purple-700 dark:text-purple-400">
            {Math.round(projecao.retencaoProjetadaDataProva * 100)}%
          </div>
          <div className="text-[11px] text-ink-3 mt-0.5">
            Meta Cebraspe: ≥ 85%
          </div>
        </div>

        {/* Ritmo Diário Recomendado */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-bg border border-border">
          <div className="flex items-center gap-1.5 text-xs text-ink-3 mb-1">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>Ritmo Recomendado</span>
          </div>
          <div className="text-2xl sm:text-3xl font-mono font-bold text-ink">
            {projecao.ritmoDiarioRecomendado} <span className="text-xs text-ink-3 font-normal">itens/dia</span>
          </div>
          <div className="text-[11px] text-ink-3 mt-0.5">
            100% dias úteis
          </div>
        </div>
      </div>

      {/* Barra de Distribuição de Domínio dos Conceitos */}
      <div className="space-y-2 p-4 rounded-xl bg-bg border border-border">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
          <span className="font-sans font-semibold text-ink">
            Distribuição Cognitiva ({projecao.totalConceitosCatalogo} conceitos mapeados)
          </span>
          <span className="text-ink-3">
            {projecao.conceitosDominados} dominados · {projecao.conceitosEmRetencao} em retenção · {projecao.conceitosCriticos} críticos
          </span>
        </div>

        {/* Barra de Progresso Segmentada */}
        <div className="w-full h-3 rounded-full bg-border/40 overflow-hidden flex">
          {projecao.conceitosDominados > 0 && (
            <div
              style={{
                width: `${(projecao.conceitosDominados / projecao.totalConceitosCatalogo) * 100}%`,
              }}
              className="bg-emerald-500 h-full transition-all duration-500"
              title={`Dominados: ${projecao.conceitosDominados}`}
            />
          )}
          {projecao.conceitosEmRetencao > 0 && (
            <div
              style={{
                width: `${(projecao.conceitosEmRetencao / projecao.totalConceitosCatalogo) * 100}%`,
              }}
              className="bg-sky-500 h-full transition-all duration-500"
              title={`Em Retenção: ${projecao.conceitosEmRetencao}`}
            />
          )}
          {projecao.conceitosCriticos > 0 && (
            <div
              style={{
                width: `${(projecao.conceitosCriticos / projecao.totalConceitosCatalogo) * 100}%`,
              }}
              className="bg-rose-500 h-full transition-all duration-500"
              title={`Críticos: ${projecao.conceitosCriticos}`}
            />
          )}
          {projecao.conceitosNaoIniciados > 0 && (
            <div
              style={{
                width: `${(projecao.conceitosNaoIniciados / projecao.totalConceitosCatalogo) * 100}%`,
              }}
              className="bg-border/60 h-full transition-all duration-500"
              title={`Não iniciados: ${projecao.conceitosNaoIniciados}`}
            />
          )}
        </div>

        {/* Legenda */}
        <div className="flex flex-wrap items-center gap-4 text-[11px] text-ink-3 pt-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Dominados (Caixas 4-5)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
            <span>Em Retenção (Caixas 2-3)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span>Críticos (Caixa 1 / Erros)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-border/80" />
            <span>Não Iniciados</span>
          </div>
        </div>
      </div>

      {/* Lista dos 6 Marcos de Disciplina */}
      <div className="space-y-3">
        <h3 className="text-sm font-sans font-bold text-ink uppercase tracking-wider text-ink-2">
          Marcos de Disciplina do Concurso
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {projecao.marcosDisciplina.map((marco) => (
            <div
              key={marco.id}
              className="p-3.5 rounded-xl bg-bg border border-border flex flex-col justify-between gap-2.5"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-sans font-bold text-ink truncate">
                    {marco.titulo}
                  </h4>
                  {marco.concluido ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Dominado
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-ink-3">
                      {marco.conceitosDominados}/{marco.totalConceitos}
                    </span>
                  )}
                </div>
                <p className="text-xs text-ink-3 truncate mt-0.5">
                  {marco.subtitulo}
                </p>
              </div>

              {/* Barra de Progresso do Marco */}
              <div className="space-y-1">
                <div className="w-full h-1.5 rounded-full bg-border/40 overflow-hidden">
                  <div
                    style={{
                      width: `${marco.totalConceitos > 0 ? (marco.conceitosDominados / marco.totalConceitos) * 100 : 0}%`,
                    }}
                    className={`h-full transition-all duration-300 ${
                      marco.concluido ? 'bg-emerald-500' : 'bg-accent'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mensagem Pedagógica com Alerta Cebraspe */}
      <div className="p-3.5 sm:p-4 rounded-xl bg-accent/5 border border-accent/15 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
        <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
          {projecao.mensagemPedagogica}
        </p>
      </div>
    </div>
  );
};
