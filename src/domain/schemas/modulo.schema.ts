import { z } from 'zod';
import { MnemonicosModuloSchema } from './mnemonico.schema';

export const AlertaBancaItemSchema = z.object({
  texto: z.string().min(5),
  fonte: z.string().optional(),
  verificado: z.boolean().default(true),
});

export const QuadroComparativoSchema = z.object({
  titulo: z.string(),
  colunas: z.array(z.string()).min(2),
  linhas: z.array(z.array(z.string())),
});

export const TipoExercicioSchema = z.enum([
  'X1',
  'X2',
  'X3',
  'X4',
  'X5',
  'X6',
  'X7',
  'X8',
  'X9',
  'X10',
]);
export type TipoExercicio = z.infer<typeof TipoExercicioSchema>;

// X1: Pré-teste (tentar antes de aprender; sem nota e sem penalidade)
export const ExercicioX1Schema = z.object({
  id: z.string().min(1),
  tipo: z.literal('X1'),
  enunciado: z.string().min(5),
  gabarito: z.union([z.enum(['C', 'E']), z.string().min(1)]),
  justificativa: z.string().min(5),
  fonte: z.string().min(2),
  editalRef: z.string().min(2),
  nivelConfianca: z.boolean().optional(),
  semNota: z.boolean().default(true).optional(),
  conceitoChave: z.string().optional(),
  opcoes: z.array(z.string()).optional(),
});

// X2: Certo/Errado com confiança (calibração e hipercorreção)
export const ExercicioX2Schema = z.object({
  id: z.string().min(1),
  tipo: z.literal('X2'),
  enunciado: z.string().min(5),
  gabarito: z.enum(['C', 'E']),
  justificativa: z.string().min(5),
  fonte: z.string().min(2),
  editalRef: z.string().min(2),
  nivelConfianca: z.boolean().optional(),
  item: z.string().optional(),
  pergunta: z.string().optional(),
  versao_correta: z.string().optional(),
  armadilhaBanca: z.string().optional(),
});

// X3: Corrija a assertiva (interrogação elaborativa / autoexplicação)
export const ExercicioX3Schema = z.object({
  id: z.string().min(1),
  tipo: z.literal('X3'),
  enunciado: z.string().min(5),
  gabarito: z.string().min(3),
  justificativa: z.string().min(5),
  fonte: z.string().min(2),
  editalRef: z.string().min(2),
  nivelConfianca: z.boolean().optional(),
  trechoIncorreto: z.string().optional(),
  opcoesCorrecao: z.array(z.string()).min(2).optional(),
});

// X4: Brain dump (recuperação livre cronometrada)
export const ExercicioX4Schema = z.object({
  id: z.string().min(1),
  tipo: z.literal('X4'),
  enunciado: z.string().min(5),
  pontosChave: z.array(z.string()).min(2),
  gabarito: z.array(z.string()).min(2),
  justificativa: z.string().min(5),
  fonte: z.string().min(2),
  editalRef: z.string().min(2),
  nivelConfianca: z.boolean().optional(),
  tempoSegundos: z.number().min(10).default(60).optional(),
});

// X5: Par confundível lado a lado (contraste e intercalação)
export const ExercicioX5Schema = z.object({
  id: z.string().min(1),
  tipo: z.literal('X5'),
  enunciado: z.string().min(5),
  conceitoA: z.string().min(1),
  conceitoB: z.string().min(1),
  afirmacao: z.string().min(3),
  gabarito: z.enum(['A', 'B']),
  justificativa: z.string().min(5),
  fonte: z.string().min(2),
  editalRef: z.string().min(2),
  nivelConfianca: z.boolean().optional(),
  distincoesChave: z.string().optional(),
});

// X6: Completar o exemplo (SQL, regex, MER, código com esmaecimento)
export const ExercicioX6Schema = z.object({
  id: z.string().min(1),
  tipo: z.literal('X6'),
  enunciado: z.string().min(5),
  linguagem: z.enum(['sql', 'regex', 'mer', 'json', 'sparql', 'outro']).default('sql'),
  codigoComLacuna: z.string().min(3),
  gabarito: z.string().min(1),
  justificativa: z.string().min(5),
  fonte: z.string().min(2),
  editalRef: z.string().min(2),
  nivelConfianca: z.boolean().optional(),
  opcoesLacuna: z.array(z.string()).min(2).optional(),
  resultadoEsperado: z.string().optional(),
});

// X7: Ordenar o procedimento (recuperação de estrutura e processos)
export const ExercicioX7Schema = z.object({
  id: z.string().min(1),
  tipo: z.literal('X7'),
  enunciado: z.string().min(5),
  etapas: z.array(z.string()).min(3),
  gabarito: z.union([z.array(z.number()).min(3), z.array(z.string()).min(3)]),
  justificativa: z.string().min(5),
  fonte: z.string().min(2),
  editalRef: z.string().min(2),
  nivelConfianca: z.boolean().optional(),
});

// X8: Itens-suporte (texto-base com múltiplos itens formato Cebraspe)
export const ItemVinculadoX8Schema = z.object({
  id: z.string().min(1),
  enunciado: z.string().min(5),
  gabarito: z.enum(['C', 'E']),
  justificativa: z.string().min(5),
});

export const ExercicioX8Schema = z.object({
  id: z.string().min(1),
  tipo: z.literal('X8'),
  textoBase: z.string().min(10),
  enunciado: z.string().min(5),
  itensVinculados: z.array(ItemVinculadoX8Schema).min(2),
  gabarito: z.union([z.string().min(1), z.record(z.string(), z.enum(['C', 'E']))]),
  justificativa: z.string().min(5),
  fonte: z.string().min(2),
  editalRef: z.string().min(2),
  nivelConfianca: z.boolean().optional(),
});

// X9: Caça ao erro no parágrafo (detecção de armadilha Cebraspe)
export const ExercicioX9Schema = z.object({
  id: z.string().min(1),
  tipo: z.literal('X9'),
  enunciado: z.string().min(5),
  paragrafo: z.string().min(10),
  frases: z.array(z.string()).min(2),
  gabarito: z.union([z.number(), z.string().min(1)]),
  justificativa: z.string().min(5),
  fonte: z.string().min(2),
  editalRef: z.string().min(2),
  nivelConfianca: z.boolean().optional(),
  indiceFraseIncorreta: z.number().optional(),
  explicacaoErro: z.string().optional(),
});

// X10: Associação (conceito ↔ definição / autor ↔ obra)
export const ParAssociacaoX10Schema = z.object({
  id: z.string().min(1),
  termo: z.string().min(1),
  definicao: z.string().min(1),
});

export const ExercicioX10Schema = z.object({
  id: z.string().min(1),
  tipo: z.literal('X10'),
  enunciado: z.string().min(5),
  pares: z.array(ParAssociacaoX10Schema).min(2),
  gabarito: z.union([
    z.record(z.string(), z.string()),
    z.array(z.object({ termo: z.string(), definicao: z.string() })),
  ]),
  justificativa: z.string().min(5),
  fonte: z.string().min(2),
  editalRef: z.string().min(2),
  nivelConfianca: z.boolean().optional(),
});

export const ExercicioSchema = z.discriminatedUnion('tipo', [
  ExercicioX1Schema,
  ExercicioX2Schema,
  ExercicioX3Schema,
  ExercicioX4Schema,
  ExercicioX5Schema,
  ExercicioX6Schema,
  ExercicioX7Schema,
  ExercicioX8Schema,
  ExercicioX9Schema,
  ExercicioX10Schema,
]);

export const CheckpointSchema = z.object({
  id: z.string(),
  pergunta: z.string().default('Julgue o item:'),
  item: z.string(),
  enunciado: z.string().optional(),
  tipo: TipoExercicioSchema.optional(),
  gabarito: z.enum(['C', 'E']),
  justificativa: z.string(),
  versao_correta: z.string().optional(),
  armadilhaBanca: z.string().optional(),
  editalRef: z.string().optional(),
  fonte: z.string().optional(),
  nivelConfianca: z.boolean().optional(),
  habilidade: z.enum(['memorizar', 'compreender', 'aplicar', 'analisar', 'avaliar']).optional(),
  nivel: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).optional(),
});

export function converterCheckpointParaExercicio(cp: z.infer<typeof CheckpointSchema>): Exercicio {
  const isSegundoItem =
    cp.id.endsWith('-2') ||
    cp.id.endsWith('_2') ||
    cp.id.endsWith('cp2') ||
    /\bcheckpoint\s*2\b/i.test(cp.pergunta || '');

  // Se explicitamente X3 ou se for o segundo item com versao_correta
  if (cp.tipo === 'X3' || (!cp.tipo && isSegundoItem && cp.gabarito === 'E' && cp.versao_correta)) {
    const versao = cp.versao_correta || cp.justificativa.replace(/^Errado!?\s*/i, '');
    return {
      id: cp.id,
      tipo: 'X3',
      enunciado: cp.enunciado || cp.item,
      gabarito: versao,
      justificativa: cp.justificativa,
      fonte: cp.fonte || 'Edital nº 1/2026 - Conhecimentos Específicos',
      editalRef: cp.editalRef || 'Cargo 5 - Biblioteconomia',
      trechoIncorreto: cp.armadilhaBanca,
      opcoesCorrecao: [
        versao,
        cp.enunciado || cp.item,
        `Na doutrina canônica, não se aplica ${cp.armadilhaBanca || 'a restrição indevida'}.`,
      ],
      nivelConfianca: cp.nivelConfianca ?? true,
    };
  }

  // Se for o segundo item sem tipo explícito, converte para X3 para quebrar monotonia (U4.3)
  if (!cp.tipo && isSegundoItem) {
    if (cp.gabarito === 'E') {
      const versaoCorreta = cp.versao_correta || cp.justificativa.replace(/^Errado!?\s*/i, '');
      return {
        id: cp.id,
        tipo: 'X3',
        enunciado: cp.enunciado || cp.item,
        gabarito: versaoCorreta,
        justificativa: cp.justificativa,
        fonte: cp.fonte || 'Edital nº 1/2026 - Conhecimentos Específicos',
        editalRef: cp.editalRef || 'Cargo 5 - Biblioteconomia',
        trechoIncorreto: cp.armadilhaBanca,
        opcoesCorrecao: [
          versaoCorreta,
          cp.enunciado || cp.item,
          `A regra canônica veda a restrição apontada pela banca.`,
        ],
        nivelConfianca: cp.nivelConfianca ?? true,
      };
    } else {
      // Gabarito 'C' no segundo item: interrogação elaborativa sobre a formulação correta
      return {
        id: cp.id,
        tipo: 'X3',
        enunciado: `Identifique a formulação canônica correta: ${cp.item}`,
        gabarito: cp.item,
        justificativa: cp.justificativa,
        fonte: cp.fonte || 'Edital nº 1/2026 - Conhecimentos Específicos',
        editalRef: cp.editalRef || 'Cargo 5 - Biblioteconomia',
        trechoIncorreto: cp.armadilhaBanca,
        opcoesCorrecao: [
          cp.item,
          `A doutrina contemporânea inverte a regra canônica para dispensar o procedimento.`,
          `A aplicação descrita restringe-se exclusivamente a suportes analógicos em papel.`,
        ],
        nivelConfianca: cp.nivelConfianca ?? true,
      };
    }
  }

  return {
    id: cp.id,
    tipo: (cp.tipo as 'X2') || 'X2',
    enunciado: cp.enunciado || cp.item,
    item: cp.item,
    pergunta: cp.pergunta,
    gabarito: cp.gabarito,
    justificativa: cp.justificativa,
    versao_correta: cp.versao_correta,
    armadilhaBanca: cp.armadilhaBanca,
    fonte: cp.fonte || 'Edital nº 1/2026 - Conhecimentos Específicos',
    editalRef: cp.editalRef || 'Cargo 5 - Biblioteconomia',
    nivelConfianca: cp.nivelConfianca ?? true,
  };
}

export const TermoAntesDeLerSchema = z.object({
  termo: z.string().min(1),
  definicao: z.string().min(5),
  exemploBiblioteca: z.string().min(5),
});

export const SecaoTeoriaSchema = z.object({
  id: z.string(),
  nivel: z.union([z.literal(3), z.literal(4)]),
  titulo: z.string(),
  conteudo: z.string(),
  itens: z.array(z.union([ExercicioSchema, CheckpointSchema])).optional(),
});

export const ReferenciaCruzadaSchema = z.object({
  submoduloId: z.string(),
  titulo: z.string(),
  motivo: z.string(),
});

export const ModuloFilhoSchema = z.object({
  id: z.string(),
  numero: z.string(), // ex: '1.1'
  titulo: z.string(),
  titulo_curto: z.string().optional(), // Rótulo de interface para evitar truncamento (Regra B7)
  descricaoCurta: z.string(),
  tempoEstimadoMinutos: z.number(),
  autoresChave: z.array(z.string()),
  alertasCebraspe: z.array(z.string()),
  quadroComparativo: QuadroComparativoSchema.optional(),
  teoriaDensaMarkdown: z.string(), // Texto autoral com fundamentação em doutrina e normas
  secoes: z.array(SecaoTeoriaSchema).optional(),
  antesDeLer: z.array(TermoAntesDeLerSchema).optional(),
  checkpoints: z.array(CheckpointSchema).min(3).max(8),
  mnemonicos: MnemonicosModuloSchema,
  prioridade: z.enum(['alta', 'normal', 'baixa']).default('normal').optional(),
  preRequisitos: z.array(z.string()).optional(), // T6.1: Pré-requisitos pedagógicos (ex: ['sub-1-6'])
  editalRef: z.string().optional(), // T6.4: Item do Edital nº 1/2026
  referenciasCruzadas: z.array(ReferenciaCruzadaSchema).optional(), // T6.3: Veja Também (Articulação Intermódulos)
});

export const MacroModuloSchema = z.object({
  id: z.string(), // ex: 'm1'
  codigo: z.string(), // ex: 'M1'
  numero: z.number().min(1).max(20),
  titulo: z.string(),
  titulo_curto: z.string().optional(), // Rótulo de interface para evitar truncamento (Regra B7)
  subtitulo: z.string(),
  descricao: z.string(),
  status: z.enum(['disponivel', 'planejado']),
  trilha: z.enum(['especificos', 'complementar']).optional(),
  avisoVerificacao: z.string().optional(),
  modulosFilhos: z.array(ModuloFilhoSchema),
  simuladoDisponivel: z.boolean(),
  preRequisitos: z.array(z.string()).optional(), // T6.1: Pré-requisitos entre módulos
  blocoEdital: z.string().optional(), // T6.4: Bloco do Edital (ex: 'Bloco A')
});

export type AlertaBancaItem = z.infer<typeof AlertaBancaItemSchema>;
export type QuadroComparativo = z.infer<typeof QuadroComparativoSchema>;
export type ReferenciaCruzada = z.infer<typeof ReferenciaCruzadaSchema>;
export type Checkpoint = z.infer<typeof CheckpointSchema>;
export type Exercicio = z.infer<typeof ExercicioSchema>;
export type ExercicioX1 = z.infer<typeof ExercicioX1Schema>;
export type ExercicioX2 = z.infer<typeof ExercicioX2Schema>;
export type ExercicioX3 = z.infer<typeof ExercicioX3Schema>;
export type ExercicioX4 = z.infer<typeof ExercicioX4Schema>;
export type ExercicioX5 = z.infer<typeof ExercicioX5Schema>;
export type ExercicioX6 = z.infer<typeof ExercicioX6Schema>;
export type ExercicioX7 = z.infer<typeof ExercicioX7Schema>;
export type ExercicioX8 = z.infer<typeof ExercicioX8Schema>;
export type ExercicioX9 = z.infer<typeof ExercicioX9Schema>;
export type ExercicioX10 = z.infer<typeof ExercicioX10Schema>;
export type TermoAntesDeLer = z.infer<typeof TermoAntesDeLerSchema>;
export type SecaoTeoria = z.infer<typeof SecaoTeoriaSchema>;
export type ModuloFilho = z.infer<typeof ModuloFilhoSchema>;
export type MacroModulo = z.infer<typeof MacroModuloSchema>;
