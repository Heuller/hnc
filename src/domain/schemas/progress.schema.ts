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

export const UserProgressSchema = z.object({
  versao: z.literal(2),
  modulosLidosIds: z.array(z.string()),
  checkpointsRespondidos: z.record(z.string(), z.enum(['C', 'E'])).default({}),
  secoesVisualizadas: z.record(z.string(), z.array(z.string())).default({}),
  leitnerDeck: z.record(z.string(), z.any()).default({}),
  devBypassSimuladoLock: z.boolean().default(false),
  sessaoAtivaSimulado: z.object({
    respostas: z.record(z.string(), RespostaItemSimuladoSchema),
    currentIndex: z.number().default(0),
    emAndamento: z.boolean().default(false),
  }).optional(),
  sessoesSimulados: z.record(z.string(), SessaoSimuladoStateSchema).default({}),
  ultimoSimuladoAcessadoId: z.string().default('m1-fundamentos'),
  historicoSimulados: z.array(SimuladoFinalizadoSchema).default([]),
  modoLivre: z.boolean().default(false),
  secoesReabertasAposFalha: z.record(z.string(), z.array(z.string())).default({}),
  tentativas: z.array(z.any()).default([]),
  itemAttempts: z.array(z.any()).default([]),
  termosSalvos: z.array(z.any()).default([]),
  constancia: z.object({
    ultimoAcessoData: z.string(),
    diasConsecutivos: z.number(),
    historicoUltimos7Dias: z.array(z.string()),
  }),
});

export type RespostaItemSimulado = z.infer<typeof RespostaItemSimuladoSchema>;
export type SessaoSimuladoState = z.infer<typeof SessaoSimuladoStateSchema>;
export type SimuladoFinalizado = z.infer<typeof SimuladoFinalizadoSchema>;
export type UserProgress = z.infer<typeof UserProgressSchema>;
