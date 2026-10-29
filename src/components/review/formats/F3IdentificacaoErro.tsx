import React from 'react';
import type { ExerciseFormatProps } from '../types';
import { F1CeSimples } from './F1CeSimples';
import { ordenarOpcoes } from '../../../domain/avaliarFormatoRevisao';

export const F3IdentificacaoErro: React.FC<ExerciseFormatProps> = (props) => {
  const variante = props.conceito.variantesFormatos?.f3_identificacao_erro;
  if (!variante?.opcoes?.length) return <F1CeSimples {...props} />;
  return <section className="space-y-3"><p className="font-serif text-ink">{variante.prompt}</p>
    {ordenarOpcoes(variante.opcoes, props.conceito.id).map(opcao => <button key={opcao} type="button" disabled={props.disabled || props.respondido}
      className="block w-full text-left p-3 min-h-[44px] rounded-xl border border-border bg-surface text-ink" onClick={() => props.onResponder(opcao)}>{opcao}</button>)}
  </section>;
};
