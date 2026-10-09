import { REVIEW_CONFIG } from '../config/reviewConfig';
import { isDiaUtil } from './scheduler/unifiedScheduler';
import type { ConceptState } from './concepts/types';
import { conceptRepository } from './concepts/conceptRepository';

export interface MarcoDisciplinaInfo {
  id: string;
  titulo: string;
  subtitulo: string;
  modulosIds: string[];
  totalConceitos: number;
  conceitosDominados: number;
  retencaoMedia: number; // 0 a 1
  concluido: boolean;
}

export interface ProjecaoTemporalResultado {
  dataHojeIso: string;
  dataProvaIso: string;
  diasUteisRestantes: number;
  diasCorridosRestantes: number;
  capacidadeTotalRevisoes: number; // diasUteisRestantes * dailyReviewCap
  tetoDiarioConfortavel: number; // 30
  
  // Cobertura de Conceitos
  totalConceitosCatalogo: number;
  conceitosIniciados: number;
  conceitosDominados: number; // Caixa >= 4
  conceitosEmRetencao: number; // Caixa 2 ou 3
  conceitosCriticos: number; // Caixa 1 ou erros frequentes
  conceitosNaoIniciados: number;

  // Projeção Cebraspe até 17/01/2027
  retencaoProjetadaDataProva: number; // percentual estimado (ex: 88%)
  ritmoDiarioRecomendado: number; // itens por dia recomendados para 100% domínio
  statusCronograma: 'confortavel' | 'adequado' | 'acelerar';
  mensagemPedagogica: string;

  // Marcos de Disciplina
  marcosDisciplina: MarcoDisciplinaInfo[];
}

/**
 * Calcula quantidade exata de dias úteis (segunda a sexta) entre duas datas ISO.
 */
export function contarDiasUteisEntre(dataInicioIso: string, dataFimIso: string): number {
  const dInicio = new Date(`${dataInicioIso}T12:00:00Z`);
  const dFim = new Date(`${dataFimIso}T12:00:00Z`);

  if (dInicio >= dFim) return 0;

  let count = 0;
  const cursor = new Date(dInicio);
  // Avança dia a dia até o dia anterior à prova
  while (cursor < dFim) {
    const iso = cursor.toISOString().split('T')[0];
    if (isDiaUtil(iso)) {
      count++;
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return count;
}

/**
 * Definição dos 6 Marcos de Disciplina do Concurso (Cebraspe - Bibliotecário):
 * 1. M1: Fundamentos de Biblioteconomia & Epistemologia
 * 2. M2 + M2.5: Catalogação, MARC 21 & Órgãos Governamentais
 * 3. M3 + M4: Classificação (CDU/CDD) & Recuperação da Informação
 * 4. M5 a M9: Gestão, Preservação, Normalização e Comunicação
 * 5. M10: Legislação Específica e Regimento da Câmara
 * 6. M11 a M14: Conhecimentos Complementares & Básicos
 */
export const DEFINICAO_MARCOS_DISCIPLINA = [
  {
    id: 'marco-fundamentos',
    titulo: 'Fundamentos e Epistemologia',
    subtitulo: 'Epistemologia, História, Ética e Leis 4.084/62 e 9.674/98',
    modulosIds: ['m1'],
  },
  {
    id: 'marco-representacao-descritiva',
    titulo: 'Catalogação e Descrição',
    subtitulo: 'AACR2r, RDA, MARC 21 e Catalogação Governamental',
    modulosIds: ['m2', 'm2-5'],
  },
  {
    id: 'marco-representacao-tematica',
    titulo: 'Classificação e Indexação',
    subtitulo: 'CDU, CDD, Tesauros, Vocabulários Controlados e SRI',
    modulosIds: ['m3', 'm4'],
  },
  {
    id: 'marco-gestao-servicos',
    titulo: 'Gestão, Preservação e Serviços',
    subtitulo: 'Planejamento, Automação, Preservação Digital e ABNT',
    modulosIds: ['m5', 'm6', 'm7', 'm8', 'm9'],
  },
  {
    id: 'marco-institucional-camara',
    titulo: 'Legislação e Contexto da Câmara',
    subtitulo: 'RICD, Processo Legislativo, CEDI e Biblioteca Pedro Aleixo',
    modulosIds: ['m10'],
  },
  {
    id: 'marco-conhecimentos-gerais',
    titulo: 'Conhecimentos Complementares',
    subtitulo: 'Direito Administrativo, Inglês, Português e TI/Dados',
    modulosIds: ['m11', 'm12', 'm13', 'm14'],
  },
];

/**
 * Motor de Projeção Temporal até a Prova em 17/01/2027 (Marco R6)
 */
export function calcularProjecaoTemporal(params: {
  estadosConceitos?: Record<string, ConceptState>;
  dataAtualIso?: string;
  dataProvaIso?: string;
  tetoDiario?: number;
}): ProjecaoTemporalResultado {
  const {
    estadosConceitos = {},
    dataAtualIso = new Date().toISOString().split('T')[0],
    dataProvaIso = REVIEW_CONFIG.examDateIso, // '2027-01-17'
    tetoDiario = REVIEW_CONFIG.dailyReviewCap, // 30
  } = params;

  const dInicio = new Date(`${dataAtualIso}T12:00:00Z`);
  const dProva = new Date(`${dataProvaIso}T12:00:00Z`);
  const diffMillis = dProva.getTime() - dInicio.getTime();
  const diasCorridosRestantes = Math.max(0, Math.ceil(diffMillis / (1000 * 60 * 60 * 24)));
  const diasUteisRestantes = contarDiasUteisEntre(dataAtualIso, dataProvaIso);

  const capacidadeTotalRevisoes = diasUteisRestantes * tetoDiario;

  const todosConceitos = conceptRepository.getTodos();
  const totalConceitosCatalogo = todosConceitos.length;

  let conceitosIniciados = 0;
  let conceitosDominados = 0; // Caixa 4 ou 5
  let conceitosEmRetencao = 0; // Caixa 2 ou 3
  let conceitosCriticos = 0; // Caixa 1 ou crítico
  let conceitosNaoIniciados = 0;

  for (const c of todosConceitos) {
    const est = estadosConceitos[c.id];
    if (!est) {
      conceitosNaoIniciados++;
    } else {
      conceitosIniciados++;
      if (est.caixaLeitner >= 4) {
        conceitosDominados++;
      } else if (est.caixaLeitner >= 2) {
        conceitosEmRetencao++;
      } else {
        conceitosCriticos++;
      }
    }
  }

  // Avaliação dos Marcos de Disciplina
  const marcosDisciplina: MarcoDisciplinaInfo[] = DEFINICAO_MARCOS_DISCIPLINA.map((def) => {
    const conceitosDoMarco = todosConceitos.filter((c) =>
      def.modulosIds.includes(c.moduloId)
    );
    const totalMarco = conceitosDoMarco.length;
    let dominadosMarco = 0;
    let somaAproveitamento = 0;

    for (const c of conceitosDoMarco) {
      const est = estadosConceitos[c.id];
      if (est) {
        if (est.caixaLeitner >= 4) dominadosMarco++;
        const total = est.totalAcertos + est.totalErros;
        const aproveitamento = total > 0 ? est.totalAcertos / total : 0;
        somaAproveitamento += aproveitamento;
      }
    }

    const retencaoMedia = totalMarco > 0 ? somaAproveitamento / totalMarco : 0;
    const concluido = totalMarco > 0 && dominadosMarco >= Math.ceil(totalMarco * 0.85);

    return {
      id: def.id,
      titulo: def.titulo,
      subtitulo: def.subtitulo,
      modulosIds: def.modulosIds,
      totalConceitos: totalMarco,
      conceitosDominados: dominadosMarco,
      retencaoMedia: Math.round(retencaoMedia * 100) / 100,
      concluido,
    };
  });

  // Cálculo de Ritmo Diário e Retenção Projetada
  // Para dominar 100% dos conceitos com repeticao segura, cada conceito requer ~3 a 5 passagens
  const conceitosFaltandoDominio = totalConceitosCatalogo - conceitosDominados;
  const revisoesNecessariasEstimadas = conceitosFaltandoDominio * 4;
  const ritmoDiarioRecomendado =
    diasUteisRestantes > 0
      ? Math.min(
          tetoDiario,
          Math.max(5, Math.ceil(revisoesNecessariasEstimadas / diasUteisRestantes))
        )
      : tetoDiario;

  // Status do cronograma
  let statusCronograma: 'confortavel' | 'adequado' | 'acelerar' = 'confortavel';
  let mensagemPedagogica = '';

  if (diasUteisRestantes === 0) {
    statusCronograma = 'adequado';
    mensagemPedagogica = 'Semana final de prova. Foque na manutenção da estabilidade factual.';
  } else if (capacidadeTotalRevisoes >= revisoesNecessariasEstimadas * 1.5) {
    statusCronograma = 'confortavel';
    mensagemPedagogica = `Margem de segurança excelente. Com o teto diário de ${tetoDiario} itens/dia de segunda a sexta, cada conceito será revisado com espaçamento ótimo antes da prova.`;
  } else if (capacidadeTotalRevisoes >= revisoesNecessariasEstimadas) {
    statusCronograma = 'adequado';
    mensagemPedagogica = `Cronograma alinhado ao horizonte de 17/01/2027. Mantenha ${ritmoDiarioRecomendado} itens/dia para consolidar todos os tópicos no topo da curva Leitner.`;
  } else {
    statusCronograma = 'acelerar';
    mensagemPedagogica = `Atenção: Para consolidar os tópicos restantes até 17/01/2027, cumpra o teto diário de ${tetoDiario} itens sem interrupções nos dias úteis.`;
  }

  // Retenção Projetada para a Data da Prova
  // Baseada na proporção de conceitos em caixas altas e capacidade de ciclo
  const ratioDominioAtual = totalConceitosCatalogo > 0 ? conceitosDominados / totalConceitosCatalogo : 0;
  const coberturaCapacidade = Math.min(1, capacidadeTotalRevisoes / (totalConceitosCatalogo * 4 || 1));
  const retencaoProjetada = Math.min(
    0.98,
    Math.max(0.65, 0.70 + ratioDominioAtual * 0.15 + coberturaCapacidade * 0.13)
  );

  return {
    dataHojeIso: dataAtualIso,
    dataProvaIso,
    diasUteisRestantes,
    diasCorridosRestantes,
    capacidadeTotalRevisoes,
    tetoDiarioConfortavel: tetoDiario,
    totalConceitosCatalogo,
    conceitosIniciados,
    conceitosDominados,
    conceitosEmRetencao,
    conceitosCriticos,
    conceitosNaoIniciados,
    retencaoProjetadaDataProva: Math.round(retencaoProjetada * 100) / 100,
    ritmoDiarioRecomendado,
    statusCronograma,
    mensagemPedagogica,
    marcosDisciplina,
  };
}
