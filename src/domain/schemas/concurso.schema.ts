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
});
