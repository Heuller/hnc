import React, { useState, useMemo } from 'react';
import { UserCheck, Sparkles, Scale, CheckCircle2, BookmarkCheck, ListChecks } from 'lucide-react';
import { Button } from '../common/Button';
import type { TemaDiscursiva, AvaliacaoCebraspe } from '../../domain/discursiva/types';
import { notaQuestao, notaPeca } from '../../domain/discursiva/formulas';
import {
  calcularNotaRubrica,
  RUBRICA_PESOS_CANONICOS,
} from '../../domain/discursiva/rubricaAutocorrecao';

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

  const [modoAutocorrecao, setModoAutocorrecao] = useState<'rubrica_11_3_1' | 'quesitos_padrao'>(
    'rubrica_11_3_1'
  );

  // Estado da Rubrica 11/3/1
  const pesos = isPeca ? RUBRICA_PESOS_CANONICOS.PECA_50 : RUBRICA_PESOS_CANONICOS.QUESTAO_20;
  const [aspectosPontos, setAspectosPontos] = useState<number>(pesos.ASPECTOS_MAX);
  const [profundidadePontos, setProfundidadePontos] = useState<number>(pesos.PROFUNDIDADE_MAX);
  const [apresentacaoPontos, setApresentacaoPontos] = useState<number>(pesos.APRESENTACAO_MAX);

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

  // Cálculo da Rubrica 11/3/1
  const resultadoRubrica = useMemo(() => {
    return calcularNotaRubrica(tema.tipo, {
      aspectosPontos,
      profundidadePontos,
      apresentacaoPontos,
      errosGramaticais,
      linhasEfetivas: Math.max(1, totalLinhas),
    });
  }, [tema.tipo, aspectosPontos, profundidadePontos, apresentacaoPontos, errosGramaticais, totalLinhas]);

  // Cálculo por quesitos do padrão
  const notaConteudoPorQuesitos = useMemo(() => {
    let soma = 0;
    tema.criteriosPontuacao.forEach((crit, idx) => {
      const conceito = conceitos[idx] ?? 2;
      const multiplicador = conceito === 3 ? 1.0 : conceito === 2 ? 0.66 : conceito === 1 ? 0.33 : 0.0;
      soma += crit.pontuacaoMaxima * multiplicador;
    });
    return Number(Math.min(notaMaximaGeral, soma).toFixed(2));
  }, [tema.criteriosPontuacao, conceitos, notaMaximaGeral]);

  // Valores efetivos dependendo do modo ativo
  const notaConteudoHumana =
    modoAutocorrecao === 'rubrica_11_3_1' ? resultadoRubrica.notaConteudo : notaConteudoPorQuesitos;

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

  const limiteConvergenciaCebraspe = Number((notaMaximaGeral * 0.25).toFixed(2));
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
    <div className="bg-surface border border-border rounded-2xl p-5 sm:p-7 shadow-editorial-sm space-y-6" data-testid="painel-autocorrecao-discursiva">
      {/* CABEÇALHO DA AUTOAVALIAÇÃO */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 ">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-serif font-bold text-ink">
              Autocorreção e Calibração Humana (Régua Cebraspe)
            </h3>
            <p className="text-xs text-ink-2">
              Edital nº 1/2026: NQ = NC − 3×(NE/TL) e NPT = NC − 6×(NE/TL). Treino com a rubrica 11/3/1.
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

      {/* SELETOR DE MODO: RUBRICA 11/3/1 vs RÉGUA POR QUESITOS */}
      <div className="flex border-b border-border gap-2">
        <button
          type="button"
          onClick={() => setModoAutocorrecao('rubrica_11_3_1')}
          className={`flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-bold border-b-2 transition-all cursor-pointer ${
            modoAutocorrecao === 'rubrica_11_3_1'
              ? 'border-purple-600 text-purple-700 dark:text-purple-300 bg-purple-500/5'
              : 'border-transparent text-ink-2 hover:text-ink'
          }`}
        >
          <BookmarkCheck className="w-3.5 h-3.5" />
          <span>Rubrica Canônica 11/3/1 (HNC)</span>
        </button>

        <button
          type="button"
          onClick={() => setModoAutocorrecao('quesitos_padrao')}
          className={`flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-bold border-b-2 transition-all cursor-pointer ${
            modoAutocorrecao === 'quesitos_padrao'
              ? 'border-purple-600 text-purple-700 dark:text-purple-300 bg-purple-500/5'
              : 'border-transparent text-ink-2 hover:text-ink'
          }`}
        >
          <ListChecks className="w-3.5 h-3.5" />
          <span>Régua por Quesitos do Padrão ({tema.criteriosPontuacao.length})</span>
        </button>
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
                  ? 'bg-emerald-500/10 text-ok border-emerald-500/20'
                  : 'bg-amber-500/10 text-accent border-amber-500/20'
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
              <span className="text-xs font-mono uppercase text-ink-2 block">Sua Autoavaliação</span>
              <span className="text-2xl font-serif font-black text-ink">{notaHumanaFinal.toFixed(2)} pts</span>
              <span className="text-xs text-ink-2 block">NC: {notaConteudoHumana} | NE: {errosGramaticais}</span>
            </div>

            {/* Nota IA */}
            <div className="p-3 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900">
              <span className="text-xs font-mono uppercase text-purple-700 dark:text-purple-300 block">Correção IA (Cebraspe)</span>
              <span className="text-2xl font-serif font-black text-purple-900 dark:text-purple-100">{avaliacaoIA.notaFinal.toFixed(2)} pts</span>
              <span className="text-xs text-purple-600 dark:text-purple-400 block">NC: {avaliacaoIA.notaConteudo} | NE: {avaliacaoIA.numErrosGramaticais}</span>
            </div>

            {/* Delta */}
            <div className="p-3 rounded-xl bg-surface border border-border">
              <span className="text-xs font-mono uppercase text-ink-2 block">Diferença (Δ = Humano - IA)</span>
              <span
                className={`text-2xl font-serif font-black ${
                  deltaCalibracao! > 0 ? 'text-accent' : deltaCalibracao! < 0 ? 'text-blue-600' : 'text-ok'
                }`}
              >
                {deltaCalibracao! > 0 ? `+${deltaCalibracao}` : deltaCalibracao} pts
              </span>
              <span className="text-xs text-ink-2 block">
                {deltaCalibracao! > 2.0
                  ? 'Você foi mais generoso que a banca'
                  : deltaCalibracao! < -2.0
                  ? 'Você foi mais rigoroso que a banca'
                  : 'Excelente alinhamento crítico'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* MODO 1: RUBRICA CANÔNICA 11/3/1 */}
      {modoAutocorrecao === 'rubrica_11_3_1' && (
        <div className="space-y-4" data-testid="secao-rubrica-11-3-1">
          <div className="flex items-center justify-between flex-wrap gap-2 pb-2 ">
            <span className="text-xs font-mono font-bold uppercase text-ink">
              Critérios da Rubrica 11/3/1 (docs/HNC_Cronograma_e_Trilha_Discursiva.md seção 4.4)
            </span>
            <span className="text-xs font-mono font-bold text-purple-700 dark:text-purple-300">
              Nota de Conteúdo: {notaConteudoHumana.toFixed(2)} / {notaMaximaGeral.toFixed(1)} pts
            </span>
          </div>

          {/* 1. Aspectos do Comando */}
          <div className="p-4 rounded-xl bg-surface-2/40 border border-border space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-ink font-serif">1. Cobertura de Aspectos do Comando</h4>
                <p className="text-xs text-ink-2">Cobriu todos os aspectos obrigatórios do comando da questão/peça?</p>
              </div>
              <span className="text-sm font-mono font-bold text-purple-700 dark:text-purple-300">
                {aspectosPontos.toFixed(1)} / {pesos.ASPECTOS_MAX.toFixed(1)} pts
              </span>
            </div>
            <input
              aria-label="Cobertura de aspectos do comando (pontos)"
              type="range"
              min={0}
              max={pesos.ASPECTOS_MAX}
              step={0.5}
              value={aspectosPontos}
              onChange={(e) => {
                setAspectosPontos(parseFloat(e.target.value));
                setSalvo(false);
              }}
              className="w-full accent-purple-600 cursor-pointer"
            />
          </div>

          {/* 2. Profundidade Conceitual */}
          <div className="p-4 rounded-xl bg-surface-2/40 border border-border space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-ink font-serif">2. Profundidade Conceitual</h4>
                <p className="text-xs text-ink-2">Cada aspecto possui definição precisa + explicação do porquê + exemplo concreto?</p>
              </div>
              <span className="text-sm font-mono font-bold text-purple-700 dark:text-purple-300">
                {profundidadePontos.toFixed(1)} / {pesos.PROFUNDIDADE_MAX.toFixed(1)} pts
              </span>
            </div>
            <input
              aria-label="Profundidade conceitual (pontos)"
              type="range"
              min={0}
              max={pesos.PROFUNDIDADE_MAX}
              step={0.5}
              value={profundidadePontos}
              onChange={(e) => {
                setProfundidadePontos(parseFloat(e.target.value));
                setSalvo(false);
              }}
              className="w-full accent-purple-600 cursor-pointer"
            />
          </div>

          {/* 3. Apresentação e Estrutura */}
          <div className="p-4 rounded-xl bg-surface-2/40 border border-border space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-ink font-serif">3. Apresentação e Estrutura</h4>
                <p className="text-xs text-ink-2">Parágrafos bem delimitados, tese expressa na abertura (linhas 1–2), sem rasuras.</p>
              </div>
              <span className="text-sm font-mono font-bold text-purple-700 dark:text-purple-300">
                {apresentacaoPontos.toFixed(1)} / {pesos.APRESENTACAO_MAX.toFixed(1)} pts
              </span>
            </div>
            <input
              aria-label="Apresentação e estrutura (pontos)"
              type="range"
              min={0}
              max={pesos.APRESENTACAO_MAX}
              step={0.25}
              value={apresentacaoPontos}
              onChange={(e) => {
                setApresentacaoPontos(parseFloat(e.target.value));
                setSalvo(false);
              }}
              className="w-full accent-purple-600 cursor-pointer"
            />
          </div>
        </div>
      )}

      {/* MODO 2: RÉGUA POR QUESITOS DO PADRÃO PRELIMINAR */}
      {modoAutocorrecao === 'quesitos_padrao' && (
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
                      <p className="text-xs text-ink-2 leading-relaxed">{crit.descricaoEsperada}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-sm font-mono font-bold text-purple-700 dark:text-purple-400">
                        {pontuacaoQuesito} / {crit.pontuacaoMaxima.toFixed(1)} pts
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-xs">
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
      )}

      {/* REVISÃO GRAMATICAL E DESCONTO EDITALÍCIO */}
      <div className="p-4 rounded-xl bg-surface-2/40 border border-border space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-ink block">
              Erros de Língua Portuguesa Identificados na Sua Leitura (NE)
            </span>
            <span className="text-xs text-ink-2">
              Desconto oficial: -{pesos.DESCONTO_UNITARIO_LINHAS_CHEIAS.toFixed(2)} por erro em linhas cheias ({fatorDesconto}×NE/TL)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-ink-2">Desconto: -{descontoHumano.toFixed(2)} pts</span>
            <input
              aria-label="Número de erros gramaticais"
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

        <div className="text-xs font-mono text-ink-2 flex items-center justify-between border-t border-border/60 pt-2 flex-wrap gap-2">
          <span>
            Fórmula: {isPeca ? 'NPT = NC − 6 × (NE/TL)' : 'NQ = NC − 3 × (NE/TL)'} = {notaConteudoHumana.toFixed(2)} − {descontoHumano.toFixed(2)} = <strong className="text-ink">{notaHumanaFinal.toFixed(2)} pts</strong>
          </span>

          <div className="flex items-center gap-2">
            <span
              className={
                notaHumanaFinal >= pesos.META_SEGURANCA
                  ? 'text-ok font-bold'
                  : 'text-accent font-bold'
              }
            >
              {notaHumanaFinal >= pesos.META_SEGURANCA
                ? `Acima da Meta de Segurança (≥ ${pesos.META_SEGURANCA} pts)`
                : `Abaixo da Meta de Segurança (${pesos.META_SEGURANCA} pts)`}
            </span>
            <span>•</span>
            <span
              className={
                notaHumanaFinal >= (isPeca ? 15.0 : 7.5)
                  ? 'text-ok font-bold'
                  : 'text-err font-bold'
              }
            >
              {notaHumanaFinal >= (isPeca ? 15.0 : 7.5) ? 'HABILITADO' : 'ELIMINADO'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
