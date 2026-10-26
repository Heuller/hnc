import { z } from 'zod';

export const RespostaCebraspeEnum = z.enum(['C', 'E', 'BRANCO']);
export type RespostaCebraspe = z.infer<typeof RespostaCebraspeEnum>;

export const CertezaMetacognitivaEnum = z.enum(['certeza', 'provavel', 'chute']);
export type CertezaMetacognitiva = z.infer<typeof CertezaMetacognitivaEnum>;

export const RespostaQuestaoCebraspeSchema = z.object({
  id: z.string(),
  respostaUsuario: RespostaCebraspeEnum,
  gabarito: z.enum(['C', 'E']),
  certeza: CertezaMetacognitivaEnum.optional(),
});
export type RespostaQuestaoCebraspe = z.infer<typeof RespostaQuestaoCebraspeSchema>;

export const CebraspeCalibracaoMetacognitivaSchema = z.object({
  certezaTotal: z.number().int().nonnegative(),
  certezaAcertos: z.number().int().nonnegative(),
  acertoCertezaPercent: z.number().nonnegative(),
  provavelTotal: z.number().int().nonnegative(),
  provavelAcertos: z.number().int().nonnegative(),
  acertoProvavelPercent: z.number().nonnegative(),
  chuteTotal: z.number().int().nonnegative(),
  chuteAcertos: z.number().int().nonnegative(),
  acertoChutePercent: z.number().nonnegative(),
  saldoChutes: z.number(),
  ganhoPotencialSeChuteBranco: z.number().nonnegative(),
});
export type CebraspeCalibracaoMetacognitiva = z.infer<typeof CebraspeCalibracaoMetacognitivaSchema>;

export const PontuacaoCebraspeResultadoSchema = z.object({
  totalQuestoes: z.number().int().nonnegative(),
  certos: z.number().int().nonnegative(),
  errados: z.number().int().nonnegative(),
  emBranco: z.number().int().nonnegative(),
  notaLiquida: z.number(),
  aproveitamentoPercent: z.number().min(0).max(100),
  taxaAcertoBrutaPercent: z.number().min(0).max(100),
  calibracao: CebraspeCalibracaoMetacognitivaSchema,
  estrategiaChuteRecomendada: z.string(),
});
export type PontuacaoCebraspeResultado = z.infer<typeof PontuacaoCebraspeResultadoSchema>;

export interface CriteriosCorteCebraspe {
  notaMinimaLiquida?: number;
  percentualMinimo?: number;
}

export interface ResultadoCorteCebraspe {
  atingiuCorte: boolean;
  margem: number;
}

/**
 * Módulo Profundo de Pontuação Cebraspe (Ousterhout - Deep Modules)
 *
 * Encapsula com completude as regras de correção da banca Cebraspe:
 * - 1 acerto = +1,00 ponto
 * - 1 erro = -1,00 ponto (anulação de um acerto)
 * - 1 em branco = 0,00 ponto
 * - Nota líquida = certos - errados (pode ser negativa)
 * - Aproveitamento percentual normalizado entre 0% e 100%
 * - Análise metacognitiva de calibração de chutes e ganho de deixar em branco.
 */
export function calcularPontuacaoCebraspe(
  questoes: RespostaQuestaoCebraspe[]
): PontuacaoCebraspeResultado {
  const totalQuestoes = questoes.length;

  if (totalQuestoes === 0) {
    return {
      totalQuestoes: 0,
      certos: 0,
      errados: 0,
      emBranco: 0,
      notaLiquida: 0,
      aproveitamentoPercent: 0,
      taxaAcertoBrutaPercent: 0,
      calibracao: {
        certezaTotal: 0,
        certezaAcertos: 0,
        acertoCertezaPercent: 0,
        provavelTotal: 0,
        provavelAcertos: 0,
        acertoProvavelPercent: 0,
        chuteTotal: 0,
        chuteAcertos: 0,
        acertoChutePercent: 0,
        saldoChutes: 0,
        ganhoPotencialSeChuteBranco: 0,
      },
      estrategiaChuteRecomendada: 'Nenhuma questão avaliada.',
    };
  }

  let certos = 0;
  let errados = 0;
  let emBranco = 0;

  let certezaTotal = 0;
  let certezaAcertos = 0;
  let provavelTotal = 0;
  let provavelAcertos = 0;
  let chuteTotal = 0;
  let chuteAcertos = 0;

  for (const q of questoes) {
    if (!q.respostaUsuario || q.respostaUsuario === 'BRANCO') {
      emBranco++;
      continue;
    }

    const acertou = q.respostaUsuario === q.gabarito;

    if (acertou) {
      certos++;
      if (q.certeza === 'certeza') {
        certezaTotal++;
        certezaAcertos++;
      } else if (q.certeza === 'provavel') {
        provavelTotal++;
        provavelAcertos++;
      } else if (q.certeza === 'chute') {
        chuteTotal++;
        chuteAcertos++;
      }
    } else {
      errados++;
      if (q.certeza === 'certeza') {
        certezaTotal++;
      } else if (q.certeza === 'provavel') {
        provavelTotal++;
      } else if (q.certeza === 'chute') {
        chuteTotal++;
      }
    }
  }

  const notaLiquida = certos - errados;
  const aproveitamentoPercent = Math.max(
    0,
    Math.min(100, Math.round((notaLiquida / totalQuestoes) * 100))
  );

  const respondidas = certos + errados;
  const taxaAcertoBrutaPercent =
    respondidas > 0 ? Math.round((certos / respondidas) * 100) : 0;

  const acertoCertezaPercent =
    certezaTotal > 0 ? Math.round((certezaAcertos / certezaTotal) * 100) : 0;
  const acertoProvavelPercent =
    provavelTotal > 0 ? Math.round((provavelAcertos / provavelTotal) * 100) : 0;
  const acertoChutePercent =
    chuteTotal > 0 ? Math.round((chuteAcertos / chuteTotal) * 100) : 0;

  const chuteErrados = chuteTotal - chuteAcertos;
  const saldoChutes = chuteAcertos - chuteErrados;
  const ganhoPotencialSeChuteBranco = saldoChutes < 0 ? Math.abs(saldoChutes) : 0;

  const calibracao: CebraspeCalibracaoMetacognitiva = {
    certezaTotal,
    certezaAcertos,
    acertoCertezaPercent,
    provavelTotal,
    provavelAcertos,
    acertoProvavelPercent,
    chuteTotal,
    chuteAcertos,
    acertoChutePercent,
    saldoChutes,
    ganhoPotencialSeChuteBranco,
  };

  const estrategiaChuteRecomendada = gerarDiagnosticoEstrategiaCebraspe(calibracao);

  return {
    totalQuestoes,
    certos,
    errados,
    emBranco,
    notaLiquida,
    aproveitamentoPercent,
    taxaAcertoBrutaPercent,
    calibracao,
    estrategiaChuteRecomendada,
  };
}

/**
 * Gera feedback pedagógico sobre a calibração de chutes vs. deixar em branco
 */
export function gerarDiagnosticoEstrategiaCebraspe(
  calibracao: CebraspeCalibracaoMetacognitiva
): string {
  return gerarDiagnosticoChute(calibracao.chuteTotal, calibracao.chuteAcertos);
}

/**
 * Diagnóstico de chutes por valor esperado. Com +1/−1, o resultado de poucos itens não
 * prova nada: a decisão certa depende da chance de acerto estimada, não do saldo passado.
 * `chuteAcertos` ausente (progresso salvo antes desta versão) mostra só a regra.
 */
export function gerarDiagnosticoChute(chuteTotal?: number, chuteAcertos?: number): string {
  const regra =
    'Com +1 por acerto e −1 por erro, marcar um item vale a pena quando sua chance de acertar é maior que 50%; abaixo disso, deixar em branco é melhor.';

  if (chuteTotal === undefined) {
    return regra;
  }
  if (chuteTotal === 0) {
    return `Você não marcou nenhum item como chute. ${regra}`;
  }
  if (chuteAcertos === undefined) {
    return regra;
  }

  const erros = chuteTotal - chuteAcertos;
  const saldo = chuteAcertos - erros;
  const percent = Math.round((chuteAcertos / chuteTotal) * 100);
  const resumo = `Nos ${chuteTotal} chutes você acertou ${chuteAcertos} e errou ${erros} (${percent}%, saldo ${saldo >= 0 ? '+' : ''}${saldo}).`;

  if (chuteTotal < 20) {
    return `${resumo} Com tão poucos itens o saldo é ruído, não prova de que chutar compensa ou não. ${regra} Acumule mais simulados antes de concluir.`;
  }
  if (percent > 50) {
    return `${resumo} Sua taxa nos chutes está acima de 50%: nesses casos, marcar tem valor esperado positivo. ${regra}`;
  }
  if (percent < 50) {
    return `${resumo} Sua taxa nos chutes está abaixo de 50%: nesse nível de confiança, deixar em branco teria rendido mais pontos. ${regra}`;
  }
  return `${resumo} Taxa de 50%: marcar e deixar em branco rendem o mesmo em média. ${regra}`;
}

/**
 * Avalia se o resultado atinge os critérios de corte do edital Cebraspe
 */
export function calcularCorteCebraspe(
  notaLiquida: number,
  totalQuestoes: number,
  criterios: CriteriosCorteCebraspe = {}
): ResultadoCorteCebraspe {
  const { notaMinimaLiquida, percentualMinimo } = criterios;

  let atingiuCorte = true;
  let margem = 0;

  if (notaMinimaLiquida !== undefined) {
    const diff = notaLiquida - notaMinimaLiquida;
    if (diff < 0) {
      atingiuCorte = false;
    }
    margem = diff;
  }

  if (percentualMinimo !== undefined && totalQuestoes > 0) {
    const notaExigida = (percentualMinimo / 100) * totalQuestoes;
    const diff = notaLiquida - notaExigida;
    if (diff < 0) {
      atingiuCorte = false;
    }
    margem = Math.min(margem, diff);
  }

  return { atingiuCorte, margem };
}
