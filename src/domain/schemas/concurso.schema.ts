import { z } from 'zod';

export const RegraPontuacaoSchema = z.object({
  acertoPontos: z.literal(1),
  erroPontos: z.literal(-1),
  brancoPontos: z.literal(0),
  descricao: z.string(),
});

export const SimetriaGabaritoSchema = z.object({
  certosMin: z.number(),
  certosMax: z.number(),
  erradosMin: z.number(),
  erradosMax: z.number(),
});

export const PisosEliminatoriosConfigSchema = z.object({
  p1Minimo: z.number(),
  p2Minimo: z.number(),
  totalMinimo: z.number(),
  vagasAmplaConvocadasDiscursiva: z.number(),
  notaCorteDiscursivaMin: z.number(),
});

export const EstruturaDiscursivaConfigSchema = z.object({
  pontosTotal: z.number(),
  questoes: z.object({
    quantidade: z.number(),
    linhasMaximas: z.number(),
    pontosCada: z.number(),
    pontosTotal: z.number(),
  }),
  pecaTecnica: z.object({
    quantidade: z.number(),
    linhasMaximas: z.number(),
    pontosTotal: z.number(),
  }),
  pisoAprovacao: z.number(),
});

export const EditalOficialConfigSchema = z.object({
  dataProvavelProva: z.string(),
  totalItensProvaObjetiva: z.number(),
  distribuicao: z.object({
    p1Basicos: z.number(),
    p2Especificos: z.number(),
  }),
  pisosEliminatorios: PisosEliminatoriosConfigSchema,
  discursiva: EstruturaDiscursivaConfigSchema,
});

export const ConcursoConfigSchema = z.object({
  plataforma: z.object({
    nome: z.string(),
    sigla: z.string(),
    subtitulo: z.string(),
    versao: z.string(),
    ano: z.number(),
    repositorioUrl: z.string(),
    siteOficialUrl: z.string(),
  }),
  instituicao: z.object({
    nome: z.string(),
    sigla: z.string(),
    esfera: z.string(),
    local: z.string(),
  }),
  cargo: z.object({
    titulo: z.string(),
    atribuicao: z.string(),
    area: z.string(),
    nivel: z.string(),
  }),
  banca: z.object({
    nome: z.string(),
    antigoNome: z.string(),
    estilo: z.string(),
    formatoItem: z.literal('C/E'),
    itensPorSimulado: z.literal(100),
    fatorCorrecao: RegraPontuacaoSchema,
    simetriaGabarito: SimetriaGabaritoSchema,
  }),
  metas: z.object({
    notaCorteHistoricaMin: z.number(),
    notaCorteHistoricaMax: z.number(),
    diasConstanciaMeta: z.number(),
  }),
  edital: EditalOficialConfigSchema.optional(),
});
