import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Award,
  AlertTriangle,
  RotateCcw,
  ArrowRight,
} from 'lucide-react';
import { useProgressStore } from '../../store/useProgressStore';
import { useConceptStore } from '../../store/useConceptStore';
import { comporSubmoduloRevisao } from '../../domain/reviewSubmoduleEngine';
import { ExerciseRenderer } from '../review/ExerciseRenderer';
import type { ExerciseSubmission } from '../review/types';
import {
  criarTentativaRegistro,
  type RespostaTentativa,
} from '../../domain/tentativas';
import type { EtapaJornadaState } from '../../domain/jornadaEngine';

interface RevisaoCientificaModalProps {
  isOpen: boolean;
  onClose: () => void;
  etapa: EtapaJornadaState;
}

export const RevisaoCientificaModal: React.FC<RevisaoCientificaModalProps> = ({
  isOpen,
  onClose,
  etapa,
}) => {
  const { adicionarTentativa, adicionarItemAttempt, modoLivre } = useProgressStore();
  const { estados, registrarRespostaConceito } = useConceptStore();

  const [indiceAtual, setIndiceAtual] = useState(0);
  const [submissoes, setSubmissoes] = useState<Record<string, ExerciseSubmission>>({});
  const [fase, setFase] = useState<'exercicio' | 'resultado'>('exercicio');
  const [tentativaFinalizada, setTentativaFinalizada] = useState<any | null>(null);

  // Compõe a lista canônica de 20 itens com simetria 50/50 Cebraspe
  const sessaoRevisao = useMemo(() => {
    return comporSubmoduloRevisao({
      moduloNumero: etapa.moduloNumero,
      moduloId: etapa.moduloId,
      estadosConceitos: estados,
    });
  }, [etapa.moduloNumero, etapa.moduloId, estados]);

  const itemAtual = sessaoRevisao.itens[indiceAtual];
  const totalItens = sessaoRevisao.totalItens;

  const handleConcluirItem = async (submissao: ExerciseSubmission) => {
    if (!itemAtual) return;

    // Registra no store de repetição espaçada
    registrarRespostaConceito({
      conceptId: itemAtual.conceito.id,
      acertou: submissao.acertou,
      confianca: submissao.confianca,
      formatoUsado: itemAtual.formato,
      respostaDada: submissao.respostaDada,
      tempoSegundos: submissao.tempoSegundos,
    });

    // Registra na Fonte Única de Respostas
    await adicionarItemAttempt({
      itemId: itemAtual.conceito.id,
      submoduloId: itemAtual.conceito.submoduloId,
      moduloId: etapa.moduloId,
      contexto: 'portal',
      resposta: submissao.respostaDada === 'C' || submissao.respostaDada === 'E' ? (submissao.respostaDada as 'C' | 'E') : 'BRANCO',
      gabarito: itemAtual.conceito.gabaritoCanonic,
    });

    const novasSubmissoes = {
      ...submissoes,
      [itemAtual.conceito.id]: submissao,
    };
    setSubmissoes(novasSubmissoes);

    // Se ainda há itens, avança
    if (indiceAtual < totalItens - 1) {
      setIndiceAtual((prev) => prev + 1);
    } else {
      // Conclui a sessão de 20 itens e calcula resultado
      await finalizarSessao(novasSubmissoes);
    }
  };

  const finalizarSessao = async (todasSubmissoes: Record<string, ExerciseSubmission>) => {
    const mapaRespostas: Record<string, RespostaTentativa> = {};
    const secoesComErros: string[] = [];

    for (const it of sessaoRevisao.itens) {
      const sub = todasSubmissoes[it.conceito.id];
      const acertou = sub?.acertou ?? false;
      const resp = sub?.respostaDada === 'C' || sub?.respostaDada === 'E' ? (sub.respostaDada as 'C' | 'E') : 'BRANCO';

      mapaRespostas[it.conceito.id] = {
        questionId: it.conceito.id,
        resposta: resp,
        gabarito: it.conceito.gabaritoCanonic,
        acertou,
        secaoId: it.conceito.submoduloId,
        texto: it.conceito.enunciadoCanonic,
      };

      if (!acertou) {
        secoesComErros.push(it.conceito.submoduloId);
      }
    }

    const novaTentativa = criarTentativaRegistro({
      userId: 'usuario-logado',
      tipo: 'submodulo_revisao',
      targetId: etapa.id,
      moduloId: etapa.moduloId,
      totalItens,
      respostas: mapaRespostas,
      foraDaTrilha: modoLivre,
    });

    await adicionarTentativa(novaTentativa);
    setTentativaFinalizada(novaTentativa);
    setFase('resultado');
  };

  const handleReiniciar = () => {
    setIndiceAtual(0);
    setSubmissoes({});
    setTentativaFinalizada(null);
    setFase('exercicio');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-ink/70 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-bg border border-border rounded-2xl shadow-editorial-lg overflow-hidden"
        >
          {/* Header do Modal */}
          <div className="p-4 sm:p-5 border-b border-border bg-surface flex items-center justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                  {sessaoRevisao.tituloCurto}
                </span>
                <span className="text-xs text-ink-3 hidden sm:inline">
                  Simetria Cebraspe (10 C / 10 E)
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-sans font-bold text-ink truncate mt-0.5">
                {sessaoRevisao.titulo}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-ink-2 hover:text-ink rounded-lg hover:bg-surface-2 transition-colors cursor-pointer"
              aria-label="Fechar revisão"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Conteúdo com rolagem interna */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            {fase === 'exercicio' && itemAtual ? (
              <ExerciseRenderer
                key={itemAtual.conceito.id}
                conceito={itemAtual.conceito}
                formato={itemAtual.formato}
                indiceAtual={indiceAtual + 1}
                totalItens={totalItens}
                onConcluirItem={handleConcluirItem}
              />
            ) : fase === 'resultado' && tentativaFinalizada ? (
              <div className="max-w-2xl mx-auto space-y-6 text-center py-4 animate-fade-in">
                {tentativaFinalizada.aprovado ? (
                  <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 dark:text-emerald-100 space-y-3">
                    <div className="w-14 h-14 rounded-full bg-emerald-600/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                      <Award className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-sans font-bold">
                      Domínio Factual Consolidado (≥ 85%)!
                    </h3>
                    <p className="text-sm text-ink-2 max-w-md mx-auto">
                      Você atingiu a retenção exigida pelo Cebraspe para este submódulo de revisão científica. A próxima etapa da Jornada foi desbloqueada.
                    </p>
                  </div>
                ) : (
                  <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-950 dark:text-amber-100 space-y-3">
                    <div className="w-14 h-14 rounded-full bg-amber-600/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto">
                      <AlertTriangle className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-sans font-bold">
                      Retenção Abaixo de 85%
                    </h3>
                    <p className="text-sm text-ink-2 max-w-md mx-auto">
                      O Cebraspe pune severamente a insegurança (1 erro anula 1 acerto). Releia os tópicos indicados antes de uma nova tentativa.
                    </p>
                  </div>
                )}

                {/* Placar Oficial Cebraspe */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl bg-surface border border-border">
                    <div className="text-xs text-ink-3">Acertos</div>
                    <div className="text-xl font-sans font-bold text-emerald-600">
                      {tentativaFinalizada.acertos}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface border border-border">
                    <div className="text-xs text-ink-3">Erros</div>
                    <div className="text-xl font-sans font-bold text-rose-600">
                      {tentativaFinalizada.erros}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface border border-border">
                    <div className="text-xs text-ink-3">Nota Líquida</div>
                    <div className="text-xl font-mono font-bold text-ink">
                      {tentativaFinalizada.notaLiquida}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface border border-border">
                    <div className="text-xs text-ink-3">Aproveitamento</div>
                    <div className="text-xl font-mono font-bold text-accent">
                      {Math.round(tentativaFinalizada.aproveitamento * 100)}%
                    </div>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                  {!tentativaFinalizada.aprovado && (
                    <button
                      type="button"
                      onClick={handleReiniciar}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-border bg-surface hover:bg-surface-2 text-ink font-sans font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Refazer Revisão</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-accent hover:bg-accent/90 text-white font-sans font-semibold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <span>{tentativaFinalizada.aprovado ? 'Continuar Jornada' : 'Fechar e Estudar Teoria'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
