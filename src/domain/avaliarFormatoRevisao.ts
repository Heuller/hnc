import type { Concept } from './concepts/types';
import type { ExerciseFormatId } from '../config/reviewConfig';

export type RespostaFormato = string | { tipo: 'julgamento-justificativa'; julgamento: 'C' | 'E'; justificativa: string }
  | { tipo: 'associacao'; pares: Array<{ ladoA: string; ladoB: string }> };
export function avaliarFormatoRevisao(conceito: Concept, formato: ExerciseFormatId, resposta: RespostaFormato) {
  if (formato === 'f2_com_justificativa') {
    return typeof resposta !== 'string' && resposta.tipo === 'julgamento-justificativa'
      && resposta.julgamento === conceito.gabaritoCanonic && resposta.justificativa === conceito.justificativaCanonic;
  }
  if (formato === 'f5_associacao') {
    const esperados = conceito.variantesFormatos?.f5_associacao?.associacao?.pares;
    return !!esperados?.length && typeof resposta !== 'string' && resposta.tipo === 'associacao'
      && resposta.pares.length === esperados.length && esperados.every((p, i) => resposta.pares[i]?.ladoA === p.ladoA && resposta.pares[i]?.ladoB === p.ladoB);
  }
  if (typeof resposta !== 'string') return false;
  if (formato === 'f4_preenchimento_lacunas') return resposta.trim().toLocaleLowerCase() === conceito.variantesFormatos?.f4_preenchimento_lacunas?.lacunas?.respostaCorreta.trim().toLocaleLowerCase();
  if (formato === 'f3_identificacao_erro' || formato === 'f8_inversao_papeis') {
    const variante = conceito.variantesFormatos?.[formato];
    return !!variante && resposta === variante.respostaCorreta;
  }
  return resposta === conceito.gabaritoCanonic;
}
export function ordenarOpcoes<T>(opcoes: T[], id: string): T[] {
  const result = [...opcoes]; let seed = [...id].reduce((s,c) => (Math.imul(s,31)+c.charCodeAt(0))>>>0,7);
  for(let i=result.length-1;i>0;i--){seed=(Math.imul(seed,1664525)+1013904223)>>>0;const j=seed%(i+1);[result[i],result[j]]=[result[j],result[i]];}
  return result;
}

export function descreverRespostaFormato(resposta: RespostaFormato): string {
  if (typeof resposta === 'string') return resposta;
  if (resposta.tipo === 'julgamento-justificativa') return `${resposta.julgamento} — ${resposta.justificativa}`;
  return resposta.pares.map(p => `${p.ladoA}: ${p.ladoB}`).join('; ');
}

export function resolverFormatoRevisao(conceito: Concept, formato: ExerciseFormatId): ExerciseFormatId {
  if (!conceito.formatosDisponiveis.includes(formato)) return 'f1_ce_simples';
  const variante = conceito.variantesFormatos?.[formato];
  if ((formato === 'f3_identificacao_erro' || formato === 'f8_inversao_papeis') && !variante?.opcoes?.length) return 'f1_ce_simples';
  if (formato === 'f5_associacao' && !variante?.associacao?.pares.length) return 'f1_ce_simples';
  if (formato === 'f4_preenchimento_lacunas' && !variante?.lacunas) return 'f1_ce_simples';
  return formato;
}
