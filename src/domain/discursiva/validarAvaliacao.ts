import { z } from 'zod';
import type { AvaliacaoCebraspe, TemaDiscursiva } from './types.js';
import { notaQuestao, notaPeca } from './formulas.js';

const avaliacaoSchema = z.object({
  id: z.string().min(1), dataAvaliacao: z.string().datetime(), temaId: z.string(),
  tipo: z.enum(['questao_20', 'peca_50']), totalLinhas: z.number().int().positive(),
  notaConteudo: z.number().finite().nonnegative(), notaConteudoMaxima: z.number().finite().positive(),
  numErrosGramaticais: z.number().int().nonnegative(), descontoGramatical: z.number().finite().nonnegative(),
  notaFinal: z.number().finite().nonnegative(), formulaAplicada: z.string(),
  situacao: z.enum(['HABILITADO', 'ELIMINADO']),
  criterios: z.array(z.object({ item: z.string(), notaObtida: z.number().finite().nonnegative(), notaMaxima: z.number().finite().positive(), parecer: z.string() })).min(1),
  errosGramaticais: z.array(z.object({ linha: z.number().int().positive(), trecho: z.string().min(1), correcao: z.string(), explicacao: z.string(), tipo: z.enum(['concordancia', 'regencia', 'pontuacao', 'ortografia', 'morfossintaxe', 'outro']) })),
  pontosFortes: z.array(z.string()), lacunasIdentificadas: z.array(z.string()), parecerGeralExaminador: z.string().min(1),
  sugestaoReescritaParagrafo: z.object({ original: z.string(), sugerido: z.string(), justificativa: z.string() }).optional(),
});

/** Não homologa a avaliação pedagógica: verifica contrato, aritmética e evidência textual. */
export function validarAvaliacaoDiscursiva(raw: unknown, tema: TemaDiscursiva, texto: string): AvaliacaoCebraspe {
  const record = raw as Record<string, unknown> | null;
  if (record?.modoDeterministico || record?.modo === 'offline' || String(record?.id || '').startsWith('eval-offline-')) throw new Error('Avaliação automática indisponível. Seu texto foi mantido; use a rubrica de autoavaliação ou tente novamente.');
  const a = avaliacaoSchema.parse(raw);
  const max = tema.tipo === 'peca_50' ? 30 : 15;
  const soma = a.criterios.reduce((n, c) => n + c.notaObtida, 0);
  const nota = tema.tipo === 'peca_50' ? notaPeca(a.notaConteudo, a.numErrosGramaticais, a.totalLinhas) : notaQuestao(a.notaConteudo, a.numErrosGramaticais, a.totalLinhas);
  const desconto = Number(((tema.tipo === 'peca_50' ? 6 : 3) * a.numErrosGramaticais / a.totalLinhas).toFixed(2));
  const invalida = a.temaId !== tema.id || a.tipo !== tema.tipo || a.totalLinhas > tema.limiteLinhas ||
    a.notaConteudoMaxima !== max || a.notaConteudo > max || Math.abs(soma - a.notaConteudo) > 0.011 ||
    a.notaFinal !== nota || a.descontoGramatical !== desconto ||
    a.situacao !== (a.notaFinal >= max * 0.5 ? 'HABILITADO' : 'ELIMINADO') ||
    a.criterios.length !== tema.criteriosPontuacao.length ||
    a.criterios.some((c, i) => c.item !== tema.criteriosPontuacao[i].item || c.notaMaxima !== tema.criteriosPontuacao[i].pontuacaoMaxima || c.notaObtida > c.notaMaxima) ||
    a.numErrosGramaticais !== a.errosGramaticais.length ||
    a.errosGramaticais.some(e => e.linha > a.totalLinhas || !texto.includes(e.trecho));
  if (invalida) throw new Error('A correção recebida está inconsistente. Seu texto foi mantido; tente novamente ou use a rubrica de autoavaliação.');
  return a;
}
