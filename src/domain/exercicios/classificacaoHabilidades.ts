import type { MacroModulo } from '../types';
import { normalizarParaExercicio } from './distribuicaoExercicios';
import { conceptRepository } from '../concepts/conceptRepository';

/**
 * Habilidades cognitivas canônicas do Cebraspe (Item 14.1.1 do Edital nº 1/2026):
 * - memorizar: retenção factual, regras mnemônicas e conceitos terminológicos
 * - compreender: entendimento das relações conceituais e justificativas canônicas
 * - aplicar: emprego de regras normativas em itens concretos de catalogação e processos
 * - analisar: desconstrução de assertivas com distratores e identificação de armadilhas sutis
 * - avaliar: julgamento axiológico, ético e avaliação de conformidade em cenários integrados
 */
export type HabilidadeCognitiva =
  | 'memorizar'
  | 'compreender'
  | 'aplicar'
  | 'analisar'
  | 'avaliar';

export const HABILIDADES_ORDEM: HabilidadeCognitiva[] = [
  'memorizar',
  'compreender',
  'aplicar',
  'analisar',
  'avaliar',
];

/**
 * Mapeia cada tipo de exercício (X1..X10 e F1..F8) para a habilidade cognitiva do Cebraspe
 */
export function classificarHabilidade(tipo: string): HabilidadeCognitiva {
  const t = tipo.trim();

  // Tipos X (Leitura, Checkpoints e Seções)
  if (t === 'X1' || t === 'X4') return 'memorizar';
  if (t === 'X2') return 'compreender';
  if (t === 'X3' || t === 'X6') return 'aplicar';
  if (t === 'X5' || t === 'X7' || t === 'X9') return 'analisar';
  if (t === 'X8' || t === 'X10') return 'avaliar';

  // Tipos F (Revisão Espaçada e Formatos Cognitivos)
  if (t === 'f7_flashcard_ativo') return 'memorizar';
  if (t === 'f1_ce_simples' || t === 'f2_com_justificativa' || t === 'f4_preenchimento_lacunas') {
    return 'compreender';
  }
  if (t === 'f5_associacao' || t === 'f6_caso_pratico') return 'aplicar';
  if (t === 'f3_identificacao_erro' || t === 'f8_inversao_papeis') return 'analisar';

  return 'compreender';
}

export interface AnaliseHabilidadesModulo {
  moduloId: string;
  moduloCodigo: string;
  moduloTitulo: string;
  totalExercicios: number;
  porHabilidade: Record<HabilidadeCognitiva, number>;
  porcentagemHabilidade: Record<HabilidadeCognitiva, number>;
  porTipo: Record<string, number>;
  porcentagemTipo: Record<string, number>;
  pctAplicacaoAnalise: number; // Meta: >= 30%
  maxPctTipo: number; // Meta: <= 40%
  tipoMaisFrequente: string;
  conformeMetaAplicacaoAnalise: boolean;
  conformeMetaMaxTipo: boolean;
}

/**
 * Extrai e cataloga todos os exercícios de um módulo:
 * 1. Checkpoints normalizados pedagógicos (X1..X10)
 * 2. Itens integrados por seção de leitura
 * 3. Variantes cognitivas de revisão espaçada (F1 a F8) geradas para os conceitos do módulo
 */
export function coletarExerciciosModulo(modulo: MacroModulo): Array<{ tipo: string; habilidade: HabilidadeCognitiva }> {
  const itens: Array<{ tipo: string; habilidade: HabilidadeCognitiva }> = [];

  // 1. Checkpoints normalizados e itens de seções
  (modulo.modulosFilhos || []).forEach((sub) => {
    (sub.checkpoints || []).forEach((cp) => {
      const ex = normalizarParaExercicio(cp);
      const tipo = ex.tipo || 'X2';
      itens.push({ tipo, habilidade: classificarHabilidade(tipo) });
    });

    (sub.secoes || []).forEach((sec) => {
      (sec.itens || []).forEach((it) => {
        const ex = normalizarParaExercicio(it as any);
        const tipo = ex.tipo || 'X2';
        itens.push({ tipo, habilidade: classificarHabilidade(tipo) });
      });
    });
  });

  // 2. Variantes de revisão espaçada do módulo no repositório de conceitos (F1..F8)
  const conceitos = conceptRepository.getPorModulo(modulo.id);
  conceitos.forEach((c) => {
    c.formatosDisponiveis.forEach((fmt) => {
      itens.push({ tipo: fmt, habilidade: classificarHabilidade(fmt) });
    });
  });

  return itens;
}

/**
 * Realiza a análise estatística de habilidades e distribuição de tipos de um MacroMódulo
 */
export function analisarHabilidadesModulo(modulo: MacroModulo): AnaliseHabilidadesModulo {
  const itens = coletarExerciciosModulo(modulo);
  const total = itens.length;

  const porHabilidade: Record<HabilidadeCognitiva, number> = {
    memorizar: 0,
    compreender: 0,
    aplicar: 0,
    analisar: 0,
    avaliar: 0,
  };

  const porTipo: Record<string, number> = {};

  itens.forEach((it) => {
    porHabilidade[it.habilidade] = (porHabilidade[it.habilidade] || 0) + 1;
    porTipo[it.tipo] = (porTipo[it.tipo] || 0) + 1;
  });

  const porcentagemHabilidade: Record<HabilidadeCognitiva, number> = {
    memorizar: total ? Number(((porHabilidade.memorizar / total) * 100).toFixed(1)) : 0,
    compreender: total ? Number(((porHabilidade.compreender / total) * 100).toFixed(1)) : 0,
    aplicar: total ? Number(((porHabilidade.aplicar / total) * 100).toFixed(1)) : 0,
    analisar: total ? Number(((porHabilidade.analisar / total) * 100).toFixed(1)) : 0,
    avaliar: total ? Number(((porHabilidade.avaliar / total) * 100).toFixed(1)) : 0,
  };

  const porcentagemTipo: Record<string, number> = {};
  let maxPct = 0;
  let tipoMaisFreq = '';

  Object.entries(porTipo).forEach(([tipo, count]) => {
    const pct = total ? Number(((count / total) * 100).toFixed(1)) : 0;
    porcentagemTipo[tipo] = pct;
    if (pct > maxPct) {
      maxPct = pct;
      tipoMaisFreq = tipo;
    }
  });

  const pctAplicacaoAnalise = Number(
    (porcentagemHabilidade.aplicar + porcentagemHabilidade.analisar).toFixed(1)
  );

  return {
    moduloId: modulo.id,
    moduloCodigo: modulo.codigo,
    moduloTitulo: modulo.titulo,
    totalExercicios: total,
    porHabilidade,
    porcentagemHabilidade,
    porTipo,
    porcentagemTipo,
    pctAplicacaoAnalise,
    maxPctTipo: maxPct,
    tipoMaisFrequente: tipoMaisFreq,
    conformeMetaAplicacaoAnalise: pctAplicacaoAnalise >= 30,
    conformeMetaMaxTipo: maxPct <= 40,
  };
}
