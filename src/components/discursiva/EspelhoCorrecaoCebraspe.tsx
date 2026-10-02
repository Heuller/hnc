import React, { useState } from 'react';
import type { AvaliacaoCebraspe } from '../../domain/discursiva/types';
import {
  Award,
  AlertTriangle,
  CheckCircle2,
  BookOpen,
  Sparkles,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Scale,
} from 'lucide-react';

interface EspelhoCorrecaoCebraspeProps {
  avaliacao: AvaliacaoCebraspe;
  onNovaCorrecao?: () => void;
}

export const EspelhoCorrecaoCebraspe: React.FC<EspelhoCorrecaoCebraspeProps> = ({
  avaliacao,
  onNovaCorrecao,
}) => {
  const [criterioExpandido, setCriterioExpandido] = useState<number | null>(null);

  const isHabilitado = avaliacao.situacao === 'HABILITADO';
  const percentualAcerto = Math.round((avaliacao.notaFinal / avaliacao.notaConteudoMaxima) * 100);

  return (
    <div className="bg-surface border border-border rounded-2xl p-5 sm:p-7 shadow-editorial-sm space-y-6 animate-in fade-in duration-200">
      {/* Topo do Espelho */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">
              Espelho Oficial de Correção
            </span>
            <span className="text-xs text-ink-2">•</span>
            <span className="text-xs text-ink-2 font-mono">Banca Cebraspe / Câmara dos Deputados</span>
          </div>
          <h2 className="text-lg sm:text-xl font-serif font-bold text-ink flex items-center gap-2">
            <span>Resultado da Prova Discursiva</span>
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border ${
                isHabilitado
                  ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
                  : 'bg-rose-500/10 text-rose-600 border-rose-500/20'
              }`}
            >
              {isHabilitado ? 'HABILITADO (≥ 60%)' : 'ELIMINADO (< 60%)'}
            </span>
          </h2>
        </div>

        {onNovaCorrecao && (
          <button
            type="button"
            onClick={onNovaCorrecao}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border text-xs font-semibold text-ink-2 hover:text-ink hover:bg-surface-2 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reavaliar Nova Versão</span>
          </button>
        )}
      </div>

      {/* Grid de Métricas Principais (Placar Editorial Cebraspe) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Nota Final */}
        <div className="p-4 rounded-xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200/80 dark:border-purple-900/40 space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-wider text-purple-700 dark:text-purple-300 font-bold block">
            Nota Final (NC)
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-black text-purple-900 dark:text-purple-100 font-serif">
              {avaliacao.notaFinal.toFixed(2)}
            </span>
            <span className="text-xs text-purple-600 dark:text-purple-400 font-mono">
              / {avaliacao.notaConteudoMaxima.toFixed(1)} ({percentualAcerto}%)
            </span>
          </div>
        </div>

        {/* Nota de Conteúdo (NCP) */}
        <div className="p-4 rounded-xl bg-surface-2/60 border border-border space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-wider text-ink-2 font-bold block">
            Conteúdo (NCP)
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-black text-ink font-serif">
              {avaliacao.notaConteudo.toFixed(2)}
            </span>
            <span className="text-xs text-ink-2 font-mono">
              / {avaliacao.notaConteudoMaxima.toFixed(1)}
            </span>
          </div>
        </div>

        {/* Desconto Gramatical */}
        <div className="p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40 space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-wider text-rose-700 dark:text-rose-300 font-bold block">
            Desconto Língua (2×NE/TL)
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-black text-rose-900 dark:text-rose-100 font-serif">
              -{avaliacao.descontoGramatical.toFixed(2)}
            </span>
            <span className="text-xs text-rose-600 dark:text-rose-400 font-mono">
              ({avaliacao.numErrosGramaticais} erros)
            </span>
          </div>
        </div>

        {/* Extensão de Linhas */}
        <div className="p-4 rounded-xl bg-surface-2/60 border border-border space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-wider text-ink-2 font-bold block">
            Linhas Efetivas (TL)
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-black text-ink font-serif">
              {avaliacao.totalLinhas}
            </span>
            <span className="text-xs text-ink-2 font-mono">linhas</span>
          </div>
        </div>
      </div>

      {/* Caixa da Fórmula Oficial Cebraspe */}
      <div className="p-3.5 rounded-xl bg-surface-2/40 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
        <div className="flex items-center gap-2 text-ink">
          <Scale className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span className="font-bold">Fórmula Oficial:</span>
          <span>{avaliacao.formulaAplicada}</span>
        </div>
        <span className="text-[11px] text-ink-2">
          1 Erro Gramatical subtrai proporcionalmente à extensão escrita
        </span>
      </div>

      {/* Quesitos de Conteúdo Avaliados (Padrão de Resposta) */}
      <div className="space-y-3">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-ink flex items-center gap-1.5">
          <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>Quesitos do Padrão Preliminar de Resposta ({avaliacao.criterios.length})</span>
        </h3>

        <div className="space-y-2.5">
          {avaliacao.criterios.map((criterio, idx) => {
            const isAberto = criterioExpandido === idx || criterioExpandido === null;
            const pct = Math.round((criterio.notaObtida / criterio.notaMaxima) * 100);

            return (
              <div
                key={idx}
                className="rounded-xl border border-border bg-surface-2/30 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setCriterioExpandido(criterioExpandido === idx ? null : idx)}
                  className="w-full p-3.5 flex items-center justify-between gap-3 text-left hover:bg-surface-2 transition-colors cursor-pointer"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-ink font-serif truncate">
                        {criterio.item}
                      </span>
                    </div>
                    {/* Barra de progresso da pontuação do quesito */}
                    <div className="w-full max-w-md h-1.5 rounded-full bg-border overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          pct >= 80 ? 'bg-emerald-500' : pct >= 60 ? 'bg-amber-500' : 'bg-rose-500'
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs font-mono font-bold text-ink">
                      {criterio.notaObtida.toFixed(2)} / {criterio.notaMaxima.toFixed(2)} pts
                    </span>
                    {isAberto ? (
                      <ChevronUp className="w-4 h-4 text-ink-2" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-ink-2" />
                    )}
                  </div>
                </button>

                {isAberto && (
                  <div className="p-3.5 pt-0 text-xs text-ink-2 font-serif border-t border-border/40 mt-1 leading-relaxed bg-surface/50">
                    <p className="mt-2 text-ink">{criterio.parecer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Erros Gramaticais e Morfossintáticos */}
      <div className="space-y-3">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
          <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
          <span>
            Desvios de Norma Culta e Língua Portuguesa ({avaliacao.errosGramaticais.length} apontamentos)
          </span>
        </h3>

        {avaliacao.errosGramaticais.length === 0 ? (
          <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/40 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Excelente! Nenhum erro gramatical identificado na redação examinada.</span>
          </div>
        ) : (
          <div className="grid gap-2.5 sm:grid-cols-2">
            {avaliacao.errosGramaticais.map((erro, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/20 text-xs space-y-1.5"
              >
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="font-bold text-rose-800 dark:text-rose-300">
                    Linha {erro.linha} · {erro.tipo.toUpperCase()}
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="text-ink-2 font-serif line-through decoration-rose-500">
                    "{erro.trecho}"
                  </div>
                  <div className="text-emerald-700 dark:text-emerald-300 font-semibold font-serif flex items-center gap-1">
                    <span>→ Sugestão: </span>
                    <span>"{erro.correcao}"</span>
                  </div>
                  <p className="text-[11px] text-ink-2 font-sans pt-0.5">{erro.explicacao}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pontos Fortes e Lacunas Identificadas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Pontos Fortes */}
        <div className="p-4 rounded-xl bg-emerald-50/40 dark:bg-emerald-950/10 border border-emerald-200/70 dark:border-emerald-900/30 space-y-2">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Pontos Fortes Mapeados</span>
          </h4>
          <ul className="space-y-1.5 text-xs text-ink-2 font-serif list-disc list-inside">
            {avaliacao.pontosFortes.map((pf, idx) => (
              <li key={idx} className="leading-relaxed">
                {pf}
              </li>
            ))}
          </ul>
        </div>

        {/* Lacunas de Conteúdo / Autores Canônicos */}
        <div className="p-4 rounded-xl bg-amber-50/40 dark:bg-amber-950/10 border border-amber-200/70 dark:border-amber-900/30 space-y-2">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>Lacunas de Citação & Normas</span>
          </h4>
          <ul className="space-y-1.5 text-xs text-ink-2 font-serif list-disc list-inside">
            {avaliacao.lacunasIdentificadas.map((lacuna, idx) => (
              <li key={idx} className="leading-relaxed">
                {lacuna}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sugestão de Reescrita de Parágrafo Modelo */}
      {avaliacao.sugestaoReescritaParagrafo && (
        <div className="p-4 sm:p-5 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/70 dark:border-purple-900/40 space-y-3">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-800 dark:text-purple-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Sugestão de Reescrita Padrão Ouro (Cebraspe)</span>
          </h4>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-surface border border-border space-y-1">
              <span className="text-[10px] font-mono uppercase text-ink-2 font-bold block">
                Trecho Original do Candidato
              </span>
              <p className="font-serif italic text-ink-2 leading-relaxed">
                "{avaliacao.sugestaoReescritaParagrafo.original}"
              </p>
            </div>

            <div className="p-3 rounded-lg bg-surface border border-purple-300 dark:border-purple-800 space-y-1">
              <span className="text-[10px] font-mono uppercase text-purple-700 dark:text-purple-400 font-bold block">
                Reescrita Sugerida pela Banca
              </span>
              <p className="font-serif text-ink leading-relaxed">
                "{avaliacao.sugestaoReescritaParagrafo.sugerido}"
              </p>
            </div>
          </div>

          <p className="text-[11px] text-ink-2 font-sans italic">
            Justificativa: {avaliacao.sugestaoReescritaParagrafo.justificativa}
          </p>
        </div>
      )}

      {/* Parecer Conclusivo da Banca */}
      <div className="p-4 rounded-xl bg-surface-2/50 border border-border space-y-1.5">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink block">
          Parecer Geral Conclusivo do Examinador
        </span>
        <p className="text-xs sm:text-sm text-ink font-serif leading-relaxed">
          {avaliacao.parecerGeralExaminador}
        </p>
      </div>
    </div>
  );
};
