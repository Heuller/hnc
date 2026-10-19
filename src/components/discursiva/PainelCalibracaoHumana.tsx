import React, { useState, useMemo } from 'react';
import { UserCheck, Sparkles, Scale, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';
import type { TemaDiscursiva, AvaliacaoCebraspe } from '../../domain/discursiva/types';
import { notaQuestao, notaPeca } from '../../domain/discursiva/formulas';

interface PainelCalibracaoHumanaProps {
  tema: TemaDiscursiva;
  totalLinhas: number;
  avaliacaoIA?: AvaliacaoCebraspe;
  onSalvarCalibracao?: (dados: {
    notaHumana: number;
    notaConteudoHumana: number;
    errosHumanos: number;
    conceitosQuesitos: Record<number, number>;
  }) => void;
}

export const PainelCalibracaoHumana: React.FC<PainelCalibracaoHumanaProps> = ({
  tema,
  totalLinhas,
  avaliacaoIA,
  onSalvarCalibracao,
}) => {
  const isPeca = tema.tipo === 'peca_50';
  const notaMaximaGeral = isPeca ? 30.0 : 15.0;
  const fatorDesconto = isPeca ? 6 : 3;

  // Conceitos por quesito: 0 (0%), 1 (33%), 2 (66%), 3 (100%) - régua oficial Cebraspe
  const [conceitos, setConceitos] = useState<Record<number, number>>(() => {
    const init: Record<number, number> = {};
    tema.criteriosPontuacao.forEach((_, idx) => {
      init[idx] = 2; // Padrão inicial: conceito 2
    });
    return init;
  });

  const [errosGramaticais, setErrosGramaticais] = useState<number>(1);
  const [salvo, setSalvo] = useState(false);

  // Calcula a nota de conteúdo humana com base nos conceitos escolhidos
  const notaConteudoHumana = useMemo(() => {
    let soma = 0;
    tema.criteriosPontuacao.forEach((crit, idx) => {
      const conceito = conceitos[idx] ?? 2;
      const multiplicador = conceito === 3 ? 1.0 : conceito === 2 ? 0.66 : conceito === 1 ? 0.33 : 0.0;
      soma += crit.pontuacaoMaxima * multiplicador;
    });
    return Number(Math.min(notaMaximaGeral, soma).toFixed(2));
  }, [tema.criteriosPontuacao, conceitos, notaMaximaGeral]);

  // Aplica a fórmula do Edital nº 1/2026
  const descontoHumano = useMemo(() => {
    if (totalLinhas <= 0) return 0;
    return Number(((fatorDesconto * Math.max(0, errosGramaticais)) / totalLinhas).toFixed(2));
  }, [fatorDesconto, errosGramaticais, totalLinhas]);

  const notaHumanaFinal = useMemo(() => {
    if (totalLinhas <= 0) return 0;
    return isPeca
      ? notaPeca(notaConteudoHumana, errosGramaticais, totalLinhas)
      : notaQuestao(notaConteudoHumana, errosGramaticais, totalLinhas);
  }, [isPeca, notaConteudoHumana, errosGramaticais, totalLinhas]);

  // Delta de calibração se houver avaliação da IA
  const deltaCalibracao = avaliacaoIA
    ? Number((notaHumanaFinal - avaliacaoIA.notaFinal).toFixed(2))
    : null;

  const limiteConvergenciaCebraspe = Number((notaMaximaGeral * 0.25).toFixed(2)); // 25% da nota máxima (subitem 9.8.4.1.2)
  const isConvergente = deltaCalibracao !== null && Math.abs(deltaCalibracao) <= limiteConvergenciaCebraspe;

  const handleMudarConceito = (idx: number, novoConceito: number) => {
    setConceitos((prev) => ({ ...prev, [idx]: novoConceito }));
    setSalvo(false);
  };

  const handleSalvar = () => {
    onSalvarCalibracao?.({
      notaHumana: notaHumanaFinal,
      notaConteudoHumana,
      errosHumanos: errosGramaticais,
      conceitosQuesitos: conceitos,
    });
    setSalvo(true);
    setTimeout(() => setSalvo(false), 2500);
  };

  return (
    <div className="bg-surface border border-border rounded-2xl p-5 sm:p-7 shadow-editorial-sm space-y-6">
      {/* Cabeçalho da Autoavaliação */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-serif font-bold text-ink">
              Autoavaliação e Calibração Humana (Régua Cebraspe)
            </h3>
            <p className="text-xs text-ink-2">
              Atribua seus conceitos oficiais para calibrar sua percepção crítica contra a correção da IA e do concurso real.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <Button
            variant="primary"
            size="sm"
            onClick={handleSalvar}
            className="flex items-center gap-1.5 bg-purple-700 hover:bg-purple-800 text-white font-bold cursor-pointer"
          >
            {salvo ? <CheckCircle2 className="w-4 h-4 text-emerald-300" /> : <Scale className="w-4 h-4" />}
            <span>{salvo ? 'Calibração Salva!' : 'Registrar Autoavaliação'}</span>
          </Button>
        </div>
      </div>

      {/* PAINEL COMPARATIVO DE CALIBRAÇÃO (HUMANO vs IA) */}
      {avaliacaoIA && (
        <div className="p-4 sm:p-5 rounded-2xl bg-surface-2/60 border border-border space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Confronto de Calibração (Humano × IA)</span>
            </span>

            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border ${
                isConvergente
                  ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
                  : 'bg-amber-500/10 text-amber-600 border-amber-500/20'
              }`}
            >
              {isConvergente
                ? `Convergente (|Δ| ≤ 25% = ${limiteConvergenciaCebraspe} pts)`
                : `Divergente (|Δ| > 25% = ${limiteConvergenciaCebraspe} pts)`}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            {/* Nota Humana */}
            <div className="p-3 rounded-xl bg-surface border border-border">
              <span className="text-[10px] font-mono uppercase text-ink-2 block">Sua Autoavaliação</span>
              <span className="text-2xl font-serif font-black text-ink">{notaHumanaFinal.toFixed(2)} pts</span>
              <span className="text-[10px] text-ink-2 block">NC: {notaConteudoHumana} | NE: {errosGramaticais}</span>
            </div>

            {/* Nota IA */}
            <div className="p-3 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900">
              <span className="text-[10px] font-mono uppercase text-purple-700 dark:text-purple-300 block">Correção IA (Cebraspe)</span>
              <span className="text-2xl font-serif font-black text-purple-900 dark:text-purple-100">{avaliacaoIA.notaFinal.toFixed(2)} pts</span>
              <span className="text-[10px] text-purple-600 dark:text-purple-400 block">NC: {avaliacaoIA.notaConteudo} | NE: {avaliacaoIA.numErrosGramaticais}</span>
            </div>

            {/* Delta */}
            <div className="p-3 rounded-xl bg-surface border border-border">
              <span className="text-[10px] font-mono uppercase text-ink-2 block">Diferença (Δ = Humano - IA)</span>
              <span
                className={`text-2xl font-serif font-black ${
                  deltaCalibracao! > 0 ? 'text-amber-600' : deltaCalibracao! < 0 ? 'text-blue-600' : 'text-emerald-600'
                }`}
              >
                {deltaCalibracao! > 0 ? `+${deltaCalibracao}` : deltaCalibracao} pts
              </span>
              <span className="text-[10px] text-ink-2 block">
                {deltaCalibracao! > 2.0
                  ? 'Você foi mais generoso que a banca'
                  : deltaCalibracao! < -2.0
                  ? 'Você foi mais rigoroso que a banca'
                  : 'Excelente alinhamento crítico'}
              </span>
            </div>
          </div>

          <p className="text-[11px] text-ink-2 font-serif italic">
            *Regra do Edital nº 1/2026 (item 9.8.4.1.2): Duas correções são convergentes se a diferença for de até 25% da nota máxima ({limiteConvergenciaCebraspe} pts). Caso divirjam em mais de 25%, uma terceira correção é acionada.
          </p>
        </div>
      )}

      {/* SELEÇÃO DE CONCEITOS POR QUESITO (RÉGUA OFICIAL CEBRASPE) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase text-ink">
            Avaliação por Quesitos do Padrão Preliminar ({tema.criteriosPontuacao.length})
          </span>
          <span className="text-xs text-ink font-mono font-bold">
            Nota de Conteúdo: {notaConteudoHumana.toFixed(2)} / {notaMaximaGeral.toFixed(1)} pts
          </span>
        </div>

        <div className="space-y-3">
          {tema.criteriosPontuacao.map((crit, idx) => {
            const conceitoAtual = conceitos[idx] ?? 2;
            const pontuacaoQuesito = (
              crit.pontuacaoMaxima *
              (conceitoAtual === 3 ? 1.0 : conceitoAtual === 2 ? 0.66 : conceitoAtual === 1 ? 0.33 : 0.0)
            ).toFixed(2);

            return (
              <div key={idx} className="p-4 rounded-xl bg-surface-2/40 border border-border space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-ink font-serif">{crit.item}</h4>
                    <p className="text-[11px] text-ink-2 leading-relaxed">{crit.descricaoEsperada}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-sm font-mono font-bold text-purple-700 dark:text-purple-400">
                      {pontuacaoQuesito} / {crit.pontuacaoMaxima.toFixed(1)} pts
                    </span>
                  </div>
                </div>

                {/* Opções de Conceito Cebraspe (0 a 3) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-[11px]">
                  {[
                    { valor: 0, label: '0 (Não abordou / 0%)' },
                    { valor: 1, label: '1 (Superficial / 33%)' },
                    { valor: 2, label: '2 (Inconsistente / 66%)' },
                    { valor: 3, label: '3 (Consistente / 100%)' },
                  ].map((c) => (
                    <button
                      key={c.valor}
                      type="button"
                      onClick={() => handleMudarConceito(idx, c.valor)}
                      className={`px-2 py-1.5 rounded-lg border text-center transition-all cursor-pointer ${
                        conceitoAtual === c.valor
                          ? 'bg-purple-600 text-white font-bold border-purple-700 shadow-xs'
                          : 'bg-surface hover:bg-surface-2 border-border text-ink-2'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* REVISÃO GRAMATICAL HUMANA */}
      <div className="p-4 rounded-xl bg-surface-2/40 border border-border space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-ink block">
              Erros de Língua Portuguesa Identificados na Sua Leitura (NE)
            </span>
            <span className="text-[11px] text-ink-2">
              Ortografia, acentuação, pontuação, crase, concordância ou regência
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-ink-2">Desconto: -{descontoHumano.toFixed(2)} pts</span>
            <input
              type="number"
              min={0}
              max={25}
              value={errosGramaticais}
              onChange={(e) => {
                setErrosGramaticais(Math.max(0, parseInt(e.target.value) || 0));
                setSalvo(false);
              }}
              className="w-16 px-2 py-1 rounded-lg bg-surface border border-border text-center font-mono font-bold text-sm text-ink"
            />
          </div>
        </div>

        <div className="text-[11px] font-mono text-ink-2 flex items-center justify-between border-t border-border/60 pt-2">
          <span>
            Fórmula: {isPeca ? 'NPT = NC - 6 × (NE/TL)' : 'NQ = NC - 3 × (NE/TL)'} = {notaConteudoHumana.toFixed(2)} - {descontoHumano.toFixed(2)} = <strong className="text-ink">{notaHumanaFinal.toFixed(2)} pts</strong>
          </span>
          <span className={notaHumanaFinal >= (isPeca ? 15.0 : 7.5) ? 'text-emerald-600 font-bold' : 'text-rose-600 font-bold'}>
            {notaHumanaFinal >= (isPeca ? 15.0 : 7.5) ? 'HABILITADO' : 'ELIMINADO'}
          </span>
        </div>
      </div>
    </div>
  );
};
