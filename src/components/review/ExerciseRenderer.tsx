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
  const [resposta, setResposta] = useState<string | null>(null);
  const [confianca, setConfianca] = useState<ConfidenceLevel | null>(null);
  const [acertou, setAcertou] = useState<boolean | null>(null);
  const tempoInicioRef = useRef<number>(Date.now());

  // Reinicia o cronômetro a cada novo conceito
  useEffect(() => {
    setResposta(null);
    setConfianca(null);
    setAcertou(null);
    tempoInicioRef.current = Date.now();
  }, [conceito.id]);

  const handleResponder = (resp: string) => {
    const isCorreto = resp.toUpperCase() === conceito.gabaritoCanonic.toUpperCase();
    setResposta(resp);
    setAcertou(isCorreto);
    // Sugere "certeza" como default inicial caso o aluno avance direto
    if (!confianca) {
      setConfianca(isCorreto ? 'certeza' : 'duvida');
    }
  };

  const handleAvancar = () => {
    if (!resposta || acertou === null) return;
    const tempoSegundos = Math.max(1, Math.round((Date.now() - tempoInicioRef.current) / 1000));
    onConcluirItem({
      respostaDada: resposta,
      acertou,
      confianca: confianca || 'certeza',
      tempoSegundos,
    });
  };

  const metaFormato = REVIEW_CONFIG.exerciseFormats[formato];

  const renderFormato = () => {
    const props = {
      conceito,
      respondido: resposta !== null,
      respostaSelecionada: resposta || undefined,
      onResponder: handleResponder,
    };

    switch (formato) {
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
      <div className="flex items-center justify-between text-xs font-sans text-ink-2 pb-2 border-b border-border">
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

      {/* Renderização do Formato Cognitivo Específico */}
      {renderFormato()}

      {/* Seção de Autoverificação de Confiança (Após Julgamento) */}
      {resposta !== null && (
        <div className="animate-fade-in space-y-4">
          <ConfidenceSelector
            valorSelecionado={confianca || undefined}
            onSelecionar={(c) => setConfianca(c)}
          />

          <ExerciseFeedback
            conceito={conceito}
            respostaDada={resposta}
            acertou={acertou ?? false}
            onAvancar={handleAvancar}
            avancarLabel={avancarLabel || (indiceAtual === totalItens ? 'Finalizar Revisão' : 'Próximo Item')}
          />
        </div>
      )}
    </div>
  );
};
