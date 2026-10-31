import { avaliarFormatoRevisao, descreverRespostaFormato, resolverFormatoRevisao, type RespostaFormato } from '../../domain/avaliarFormatoRevisao';
import React, { useState, useEffect, useRef } from 'react';
import type { Concept, ConfidenceLevel } from '../../domain/concepts/types';
import type { ExerciseFormatId } from '../../config/reviewConfig';
import { REVIEW_CONFIG } from '../../config/reviewConfig';
import { F1CeSimples } from './formats/F1CeSimples';
import { F2ComJustificativa } from './formats/F2ComJustificativa';
import { F3IdentificacaoErro } from './formats/F3IdentificacaoErro';
import { F4PreenchimentoLacunas } from './formats/F4PreenchimentoLacunas';
import { F5Associacao } from './formats/F5Associacao';
import { F6CasoPratico } from './formats/F6CasoPratico';
import { F7FlashcardAtivo } from './formats/F7FlashcardAtivo';
import { F8InversaoPapeis } from './formats/F8InversaoPapeis';
import { ConfidenceSelector } from './ConfidenceSelector';
import { ExerciseFeedback } from './ExerciseFeedback';
import type { ExerciseSubmission } from './types';

interface ExerciseRendererProps {
  conceito: Concept;
  formato: ExerciseFormatId;
  indiceAtual: number;
  totalItens: number;
  onConcluirItem: (submissao: ExerciseSubmission) => void;
  avancarLabel?: string;
}

export const ExerciseRenderer: React.FC<ExerciseRendererProps> = ({
  conceito,
  formato,
  indiceAtual,
  totalItens,
  onConcluirItem,
  avancarLabel,
}) => {
  const [prevConceitoId, setPrevConceitoId] = useState(conceito.id);
  const [resposta, setResposta] = useState<RespostaFormato | null>(null);
  const [confianca, setConfianca] = useState<ConfidenceLevel | null>(null);
  const [acertou, setAcertou] = useState<boolean | null>(null);

  // F-13/F-16: Reseta estados na troca de conceito durante o render (padrão React 19)
  if (conceito.id !== prevConceitoId) {
    setPrevConceitoId(conceito.id);
    setResposta(null);
    setConfianca(null);
    setAcertou(null);
  }

  // Pureza: inicializa ref com 0 e obtém timestamp real dentro do efeito
  const tempoInicioRef = useRef<number>(0);

  useEffect(() => {
    tempoInicioRef.current = Date.now();
  }, [conceito.id]);

  const formatoEfetivo = resolverFormatoRevisao(conceito, formato);
  const handleResponder = (resp: RespostaFormato) => {
    if (resposta !== null) return;
    const isCorreto = avaliarFormatoRevisao(conceito, formatoEfetivo, resp);
    setResposta(resp);
    setAcertou(isCorreto);

  };

  const handleSelecionarConfianca = (c: ConfidenceLevel) => {
    setConfianca(c);
  };

  const handleAvancar = () => {
    if (!resposta || acertou === null) return;
    const tempoSegundos = Math.max(1, Math.round((Date.now() - tempoInicioRef.current) / 1000));
    onConcluirItem({
      respostaDada: typeof resposta === 'string' ? resposta : JSON.stringify(resposta),
      acertou,
      confianca: confianca || undefined,
      tempoSegundos,
    });
  };

  const metaFormato = REVIEW_CONFIG.exerciseFormats[formatoEfetivo];

  const renderFormato = () => {
    const props = {
      conceito,
      respondido: resposta !== null,
      respostaSelecionada: typeof resposta === 'string' ? resposta : undefined,
      onResponder: handleResponder,
    };

    switch (formatoEfetivo) {
      case 'f1_ce_simples':
        return <F1CeSimples {...props} />;
      case 'f2_com_justificativa':
        return <F2ComJustificativa {...props} />;
      case 'f3_identificacao_erro':
        return <F3IdentificacaoErro {...props} />;
      case 'f4_preenchimento_lacunas':
        return <F4PreenchimentoLacunas {...props} />;
      case 'f5_associacao':
        return <F5Associacao {...props} />;
      case 'f6_caso_pratico':
        return <F6CasoPratico {...props} />;
      case 'f7_flashcard_ativo':
        return <F7FlashcardAtivo {...props} />;
      case 'f8_inversao_papeis':
        return <F8InversaoPapeis {...props} />;
      default:
        return <F1CeSimples {...props} />;
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {/* Barra de Progresso e Metadados do Exercício */}
      <div className="flex items-center justify-between text-xs font-sans text-ink-2 pb-2 ">
        <div className="flex items-center gap-2">
          <span className="font-bold text-accent px-2 py-0.5 rounded-md bg-accent/10 border border-accent/20">
            {metaFormato.codigo} · {metaFormato.nome}
          </span>
          <span className="text-ink-3">Submódulo {conceito.submoduloId}</span>
        </div>
        <div className="font-mono font-semibold">
          Item {indiceAtual} de {totalItens}
        </div>
      </div>

      {resposta === null && <div className="p-3 rounded-xl border border-border space-y-2">
        <p className="text-xs text-ink-2">Antes de responder: qual é a sua confiança? (opcional)</p>
        <ConfidenceSelector valorSelecionado={confianca || undefined} onSelecionar={handleSelecionarConfianca} />
      </div>}
      {/* Renderização do Formato Cognitivo Específico */}
      <div key={`${conceito.id}:${formatoEfetivo}`}>{renderFormato()}</div>

      {/* Seção de Autoverificação de Confiança e Feedback (Após Julgamento - W1) */}
      {resposta !== null && (
        <div className="animate-fade-in space-y-4">
          <ExerciseFeedback
            conceito={conceito}
            respostaDada={descreverRespostaFormato(resposta)}
            acertou={acertou ?? false}
            onAvancar={handleAvancar}
            avancarLabel={avancarLabel || (indiceAtual === totalItens ? 'Finalizar Revisão' : 'Próximo Item')}
          />
        </div>
      )}
    </div>
  );
};
