import { ALL_COURSE_MODULES } from '../../content/registry';
import type { Concept, ConceptVariantExercise } from './types';
import type { ModuloFilho, Checkpoint } from '../schemas/modulo.schema';
import type { ExerciseFormatId } from '../../config/reviewConfig';

/**
 * Deriva inteligentemente variantes cognitivas (F1 a F8) para um conceito
 * a partir de seu checkpoint original.
 */
function gerarVariantesParaConceito(
  cp: Checkpoint,
  submodulo: ModuloFilho,
  _moduloId: string
): Partial<Record<ExerciseFormatId, ConceptVariantExercise>> {
  const variantes: Partial<Record<ExerciseFormatId, ConceptVariantExercise>> = {};

  // F1: C/E Simples
  variantes.f1_ce_simples = {
    formatId: 'f1_ce_simples',
    prompt: cp.item,
    respostaCorreta: cp.gabarito,
  };

  // F2: C/E com Justificativa
  variantes.f2_com_justificativa = {
    formatId: 'f2_com_justificativa',
    prompt: cp.item,
    respostaCorreta: cp.gabarito,
    opcoes: [
      cp.justificativa,
      `A assertiva contradiz a doutrina clássica de ${submodulo.autoresChave[0] || 'referência canônica'}.`,
      'A aplicação da regra depende de delegação expressa em regimento interno.',
    ],
  };

  // F3: Identificação de Erro (para itens 'E' ou itens com pegadinhas)
  if (cp.gabarito === 'E') {
    variantes.f3_identificacao_erro = {
      formatId: 'f3_identificacao_erro',
      prompt: `Na assertiva a seguir, identifique qual trecho torna o item ERRADO:\n"${cp.item}"`,
      respostaCorreta: cp.justificativa,
    };
  }

  // F4: Preenchimento de Lacunas (Cloze)
  // Cria uma lacuna a partir de palavras-chave da justificativa ou assertiva
  const palavras = cp.item.split(' ');
  const indiceLacuna = Math.min(palavras.length - 2, Math.max(2, Math.floor(palavras.length / 2)));
  const palavraOcultada = palavras[indiceLacuna] ? palavras[indiceLacuna].replace(/[.,;:()]/g, '') : 'norma';
  const textoLacuna = palavras.map((p, idx) => (idx === indiceLacuna ? '_____' : p)).join(' ');

  variantes.f4_preenchimento_lacunas = {
    formatId: 'f4_preenchimento_lacunas',
    prompt: 'Preencha a lacuna para tornar a assertiva canônica verdadeira:',
    respostaCorreta: palavraOcultada,
    lacunas: {
      textoComLacuna: textoLacuna,
      respostaCorreta: palavraOcultada,
      distratores: ['exclusivamente', 'facultativamente', 'anacronicamente'],
    },
  };

  // F5: Associação (Conceito <-> Submódulo / Autor)
  variantes.f5_associacao = {
    formatId: 'f5_associacao',
    prompt: `Associe o princípio com o seu núcleo temático em ${submodulo.titulo}:`,
    respostaCorreta: submodulo.titulo,
    associacao: {
      pares: [
        { ladoA: cp.pergunta.slice(0, 60), ladoB: submodulo.titulo_curto || submodulo.titulo },
        { ladoA: 'Autor/Norma de Referência', ladoB: submodulo.autoresChave[0] || 'Cebraspe Canônico' },
      ],
    },
  };

  // F6: Caso Prático Legislativo
  variantes.f6_caso_pratico = {
    formatId: 'f6_caso_pratico',
    prompt: `[Cenário da Biblioteca da Câmara dos Deputados] Diante da rotina técnica legislativa referente a ${submodulo.titulo}, julgue a conduta do bibliotecário analista com base na assertiva:`,
    casoPraticoContexto: `Na coordenação técnica da Biblioteca da Câmara dos Deputados, durante o processamento de acervos relativos a ${submodulo.titulo}:`,
    respostaCorreta: cp.gabarito,
  };

  // F7: Flashcard Ativo
  variantes.f7_flashcard_ativo = {
    formatId: 'f7_flashcard_ativo',
    prompt: cp.pergunta,
    respostaCorreta: cp.item,
  };

  // F8: Inversão de Papéis
  variantes.f8_inversao_papeis = {
    formatId: 'f8_inversao_papeis',
    prompt: `Qual técnica de elaboração da banca Cebraspe está refletida neste item?\n"${cp.item}"`,
    opcoes: [
      'Inversão de conceito ou atribuição de autor',
      'Generalização restritiva indevida (apenas, sempre, exclusivamente)',
      'Anacronismo normativo ou substituição de edição de código',
      'Asserção factual direta estritamente alinhada ao padrão canônico',
    ],
    respostaCorreta: cp.gabarito === 'E'
      ? 'Inversão de conceito ou atribuição de autor'
      : 'Asserção factual direta estritamente alinhada ao padrão canônico',
  };

  return variantes;
}

/**
 * Construtor determinístico do Catálogo de Conceitos Atômicos.
 */
class ConceptRepository {
  private conceitos: Map<string, Concept> = new Map();
  private conceitosPorSubmodulo: Map<string, Concept[]> = new Map();
  private conceitosPorModulo: Map<string, Concept[]> = new Map();
  private inicializado: boolean = false;

  private inicializar(): void {
    if (this.inicializado) return;

    for (const macro of ALL_COURSE_MODULES) {
      const moduloId = macro.id;

      for (const sub of macro.modulosFilhos) {
        const submoduloId = sub.numero;

        for (const cp of sub.checkpoints) {
          const conceptId = `c_${submoduloId}_${cp.id}`;

          const formatosDisponiveis: ExerciseFormatId[] = [
            'f1_ce_simples',
            'f2_com_justificativa',
            'f4_preenchimento_lacunas',
            'f5_associacao',
            'f6_caso_pratico',
            'f7_flashcard_ativo',
            'f8_inversao_papeis',
          ];

          if (cp.gabarito === 'E') {
            formatosDisponiveis.push('f3_identificacao_erro');
          }

          const variantes = gerarVariantesParaConceito(cp, sub, moduloId);

          const conceito: Concept = {
            id: conceptId,
            submoduloId,
            moduloId,
            topico: sub.titulo,
            itemPaiId: cp.id,
            enunciadoCanonic: cp.item,
            gabaritoCanonic: cp.gabarito,
            justificativaCanonic: cp.justificativa,
            armadilhaCebraspe: sub.alertasCebraspe[0] || undefined,
            fonteCanonica: sub.autoresChave.join(', '),
            nivelDificuldade: 'medio',
            formatosDisponiveis,
            variantesFormatos: variantes,
          };

          this.conceitos.set(conceptId, conceito);

          // Indexa por submódulo
          const listaSub = this.conceitosPorSubmodulo.get(submoduloId) || [];
          listaSub.push(conceito);
          this.conceitosPorSubmodulo.set(submoduloId, listaSub);

          // Indexa por módulo macro
          const listaMod = this.conceitosPorModulo.get(moduloId) || [];
          listaMod.push(conceito);
          this.conceitosPorModulo.set(moduloId, listaMod);
        }
      }
    }

    this.inicializado = true;
  }

  public getTodos(): Concept[] {
    this.inicializar();
    return Array.from(this.conceitos.values());
  }

  public getPorId(id: string): Concept | undefined {
    this.inicializar();
    return this.conceitos.get(id);
  }

  public getPorSubmodulo(submoduloId: string): Concept[] {
    this.inicializar();
    return this.conceitosPorSubmodulo.get(submoduloId) || [];
  }

  public getPorModulo(moduloId: string): Concept[] {
    this.inicializar();
    return this.conceitosPorModulo.get(moduloId) || [];
  }

  public getMapaCompleto(): Record<string, Concept> {
    this.inicializar();
    const mapa: Record<string, Concept> = {};
    for (const [id, c] of this.conceitos.entries()) {
      mapa[id] = c;
    }
    return mapa;
  }

  public getTotalConceitos(): number {
    this.inicializar();
    return this.conceitos.size;
  }
}

export const conceptRepository = new ConceptRepository();
