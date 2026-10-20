import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import {
  X,
  Award,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import { useConceptStore } from '../../store/useConceptStore';
import { useProgressStore } from '../../store/useProgressStore';
import { ExerciseRenderer } from './ExerciseRenderer';
import type { ExerciseSubmission } from './types';
import { Button } from '../common/Button';

interface RevisaoDiariaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RevisaoDiariaModal: React.FC<RevisaoDiariaModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { getFilaRevisaoHoje, registrarRespostaConceito } = useConceptStore();
  const { adicionarItemAttempt } = useProgressStore();

  const filaHoje = useMemo(() => getFilaRevisaoHoje(), [getFilaRevisaoHoje]);
  const itens = filaHoje.itensNaFila;
  const totalItens = itens.length;

  const [indiceAtual, setIndiceAtual] = useState(0);
  const [submissoes, setSubmissoes] = useState<Record<string, ExerciseSubmission>>({});
  const [sessaoFinalizada, setSessaoFinalizada] = useState(false);

  const itemAtual = itens[indiceAtual];

  const handleConcluirItem = async (submissao: ExerciseSubmission) => {
    if (!itemAtual) return;

    // Registra na fonte única de conceitos
    registrarRespostaConceito({
      conceptId: itemAtual.conceito.id,
      acertou: submissao.acertou,
      confianca: submissao.confianca,
      formatoUsado: itemAtual.formatoDesignado,
      respostaDada: submissao.respostaDada,
      tempoSegundos: submissao.tempoSegundos,
    });

    // Registra na Fonte Única de Respostas (ItemAttempts)
    await adicionarItemAttempt({
      itemId: itemAtual.conceito.id,
      submoduloId: itemAtual.conceito.submoduloId,
      moduloId: itemAtual.conceito.moduloId,
      contexto: 'revisao',
      resposta: submissao.respostaDada === 'C' || submissao.respostaDada === 'E'
        ? (submissao.respostaDada as 'C' | 'E')
        : 'BRANCO',
      gabarito: itemAtual.conceito.gabaritoCanonic,
    });

    const novasSubmissoes = {
      ...submissoes,
      [itemAtual.conceito.id]: submissao,
    };
    setSubmissoes(novasSubmissoes);

    if (indiceAtual < totalItens - 1) {
      setIndiceAtual((prev) => prev + 1);
    } else {
      setSessaoFinalizada(true);
    }
  };

  const handleReiniciar = () => {
    setIndiceAtual(0);
    setSubmissoes({});
    setSessaoFinalizada(false);
    onClose();
  };

  if (!isOpen) return null;

  const totalAcertos = Object.values(submissoes).filter((s) => s.acertou).length;
  const taxaAcerto = totalItens > 0 ? Math.round((totalAcertos / totalItens) * 100) : 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-ink/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-revisao-diaria-title"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="w-full max-w-2xl bg-surface border border-border rounded-2xl shadow-editorial-lg overflow-hidden flex flex-col my-auto max-h-[92dvh]"
      >
        {/* Cabeçalho */}
        <div className="p-4 sm:p-5 border-b border-border bg-surface-2/40 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 id="modal-revisao-diaria-title" className="text-base sm:text-lg font-serif font-bold text-ink">
                Revisão do Dia · Recuperação Ativa
              </h2>
              <p className="text-xs text-ink-2">
                {totalItens > 0 && !sessaoFinalizada
                  ? `Conceito ${indiceAtual + 1} de ${totalItens} · Janela de esquecimento ativa`
                  : 'Sessão diária baseada em evidências científicas'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-ink-2 hover:text-ink hover:bg-surface-3 transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Barra de Progresso */}
        {totalItens > 0 && !sessaoFinalizada && (
          <div className="w-full h-1.5 bg-surface-2 shrink-0">
            <div
              className="h-full bg-accent transition-all duration-300"
              style={{ width: `${((indiceAtual + 1) / totalItens) * 100}%` }}
            />
          </div>
        )}

        {/* Corpo do Modal */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          {totalItens === 0 ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-serif font-bold text-ink">
                  Retenção em Dia!
                </h3>
                <p className="text-xs sm:text-sm text-ink-2 max-w-md mx-auto">
                  Você não possui nenhum conceito com revisão vencida para a data de hoje. Continue avançando na leitura da teoria ou realize um simulado.
                </p>
              </div>
              <Button variant="primary" onClick={onClose} className="mt-2">
                Concluir
              </Button>
            </div>
          ) : !sessaoFinalizada && itemAtual ? (
            <div className="space-y-4">
              {/* Badge contextual */}
              <div className="flex items-center justify-between text-xs text-ink-2 pb-1 border-b border-border/50">
                <span className="font-semibold text-accent font-sans">
                  {itemAtual.conceito.topico}
                </span>
                <span className="font-mono text-xs bg-surface-2 px-2 py-0.5 rounded border border-border">
                  Submódulo {itemAtual.conceito.submoduloId}
                </span>
              </div>

              {/* Renderizador do Exercício */}
              <ExerciseRenderer
                conceito={itemAtual.conceito}
                formato={itemAtual.formatoDesignado}
                indiceAtual={indiceAtual}
                totalItens={totalItens}
                onConcluirItem={handleConcluirItem}
                avancarLabel={indiceAtual < totalItens - 1 ? 'Próximo Conceito' : 'Finalizar Sessão'}
              />
            </div>
          ) : (
            /* Tela de Resultado Final */
            <div className="py-6 space-y-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Award className="w-9 h-9" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-serif font-bold text-ink">
                  Sessão Diária Concluída!
                </h3>
                <p className="text-xs sm:text-sm text-ink-2 max-w-md mx-auto">
                  Você concluiu a recuperação ativa de todos os {totalItens} conceitos previstos para hoje.
                </p>
              </div>

              {/* Grade de Estatísticas */}
              <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                <div className="p-3.5 rounded-xl bg-surface-2/60 border border-border text-center">
                  <span className="text-xs font-sans text-ink-2 uppercase tracking-wider block">
                    Aproveitamento
                  </span>
                  <span className="text-2xl font-serif font-bold text-ink">
                    {taxaAcerto}%
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-2/60 border border-border text-center">
                  <span className="text-xs font-sans text-ink-2 uppercase tracking-wider block">
                    Acertos / Total
                  </span>
                  <span className="text-2xl font-serif font-bold text-ink">
                    {totalAcertos} / {totalItens}
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-accent/5 border border-accent/20 text-xs text-ink-2 text-left space-y-1 max-w-md mx-auto">
                <div className="flex items-center gap-1.5 font-semibold text-accent">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>Consolidação de Memória</span>
                </div>
                <p className="text-xs leading-relaxed">
                  Os conceitos acertados avançaram na escala de Leitner em dias úteis. Conceitos com erro foram retornados à Caixa 1 com prioridade aumentada para fixação sólida.
                </p>
              </div>

              <Button variant="primary" onClick={handleReiniciar} className="mx-auto flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                <span>Fechar e Voltar aos Estudos</span>
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
