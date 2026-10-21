import { z } from 'zod';

export const RespostaItemSimuladoSchema = z.object({
  questionId: z.string(),
  resposta: z.enum(['C', 'E', 'BRANCO']),
  certeza: z.enum(['certeza', 'provavel', 'chute']).optional(),
  acertou: z.boolean().optional(),
  timestamp: z.number(),
});

export const SimuladoFinalizadoSchema = z.object({
  id: z.string(),
  simuladoId: z.string().optional(),
  tituloSimulado: z.string().optional(),
  dataHora: z.string(),
  tempoGastoSegundos: z.number(),
  certos: z.number(),
  errados: z.number(),
  emBranco: z.number(),
  notaLiquida: z.number(),
  aproveitamentoPercent: z.number(),
  respostas: z.record(z.string(), RespostaItemSimuladoSchema),
  calibracao: z.object({
    acertoCertezaPercent: z.number(),
    acertoProvavelPercent: z.number(),
    acertoChutePercent: z.number(),
    ganhoPotencialSeChuteBranco: z.number(),
  }),
});

export const SessaoSimuladoStateSchema = z.object({
  simuladoId: z.string(),
  respostas: z.record(z.string(), RespostaItemSimuladoSchema).default({}),
  currentIndex: z.number().default(0),
  emAndamento: z.boolean().default(false),
  tempoGastoSegundos: z.number().default(0),
  ultimoAcessoTimestamp: z.number().default(0),
});

export const LeitnerBoxSchema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
]);

export const LeitnerItemSchema = z.object({
  id: z.string(),
  submoduloId: z.string(),
  caixa: LeitnerBoxSchema,
  ultimaRevisao: z.string(),
  proximaRevisao: z.string(),
  historicoAcertos: z.number().int().nonnegative().default(0),
  historicoErros: z.number().int().nonnegative().default(0),
  vezesExposto: z.number().int().nonnegative().optional(),
});

export const RespostaTentativaSchema = z.object({
  questionId: z.string(),
  resposta: z.enum(['C', 'E', 'BRANCO']),
  gabarito: z.enum(['C', 'E']),
  acertou: z.boolean(),
  secaoId: z.string().optional(),
  texto: z.string().optional(),
});

export const TentativaRegistroSchema = z.object({
  id: z.string(),
  userId: z.string(),
  tipo: z.enum([
    'verificacao_submodulo',
    'desafio_modulo',
    'portal_revisao',
    'submodulo_revisao',
  ]),
  targetId: z.string(),
  moduloId: z.string(),
  totalItens: z.number(),
  acertos: z.number(),
  erros: z.number(),
  emBranco: z.number(),
  aproveitamento: z.number(),
  notaLiquida: z.number(),
  aprovado: z.boolean(),
  acertosNecessarios: z.number(),
  errosMaximos: z.number(),
  secoesComErros: z.array(z.string()).default([]),
  respostas: z.record(z.string(), RespostaTentativaSchema).default({}),
  foraDaTrilha: z.boolean().default(false),
  criadoEm: z.string(),
});

export const ItemAttemptStoredSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  item_id: z.string(),
  submodulo_id: z.string(),
  modulo_id: z.string(),
  contexto: z.enum(['teoria', 'jornada', 'treino', 'simulado', 'revisao', 'portal']),
  resposta: z.enum(['C', 'E', 'BRANCO']),
  certeza: z.enum(['alta', 'media', 'baixa']).optional(),
  correto: z.boolean(),
  tentativa_n: z.number().int().positive(),
  criado_em: z.string(),
  review_prefilled: z.boolean().optional(),
});

export const TermoSalvoSchema = z.object({
  id: z.string(),
  termo: z.string(),
  area: z.string(),
  dataSalvamento: z.string(),
  definicaoCurta: z.string(),
  armadilhaResumo: z.string(),
});

export const UserProgressSchema = z.object({
  versao: z.union([z.literal(2), z.literal(3), z.literal(4)]).default(4),
  modulosLidosIds: z.array(z.string()),
  checkpointsRespondidos: z.record(z.string(), z.enum(['C', 'E'])).default({}),
  secoesVisualizadas: z.record(z.string(), z.array(z.string())).default({}),
  leitnerDeck: z.record(z.string(), LeitnerItemSchema).default({}),
  devBypassSimuladoLock: z.boolean().default(false),
  sessaoAtivaSimulado: z.object({
    respostas: z.record(z.string(), RespostaItemSimuladoSchema),
    currentIndex: z.number().default(0),
    emAndamento: z.boolean().default(false),
  }).optional(),
  sessoesSimulados: z.record(z.string(), SessaoSimuladoStateSchema).default({}),
  ultimoSimuladoAcessadoId: z.string().default('m1-fundamentos'),
  historicoSimulados: z.array(SimuladoFinalizadoSchema).default([]),
  modoLivre: z.boolean().default(true),
  secoesReabertasAposFalha: z.record(z.string(), z.array(z.string())).default({}),
  tentativas: z.array(TentativaRegistroSchema).default([]),
  itemAttempts: z.array(ItemAttemptStoredSchema).default([]),
  termosSalvos: z.array(TermoSalvoSchema).default([]),
  preferenciaModoTeoria: z.record(z.string(), z.enum(['canonica', 'didatica'])).default({}),
  constancia: z.object({
    ultimoAcessoData: z.string(),
    diasConsecutivos: z.number(),
    historicoUltimos7Dias: z.array(z.string()),
  }),
});

export type LeitnerBox = z.infer<typeof LeitnerBoxSchema>;
export type LeitnerItem = z.infer<typeof LeitnerItemSchema>;
export type RespostaTentativa = z.infer<typeof RespostaTentativaSchema>;
export type TentativaRegistro = z.infer<typeof TentativaRegistroSchema>;
export type ItemAttemptStored = z.infer<typeof ItemAttemptStoredSchema>;
export type TermoSalvo = z.infer<typeof TermoSalvoSchema>;
export type RespostaItemSimulado = z.infer<typeof RespostaItemSimuladoSchema>;
export type SessaoSimuladoState = z.infer<typeof SessaoSimuladoStateSchema>;
export type SimuladoFinalizado = z.infer<typeof SimuladoFinalizadoSchema>;
export type UserProgress = z.infer<typeof UserProgressSchema>;
