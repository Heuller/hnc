import { describe, it, expect } from 'vitest';
import {
  calcularPontuacaoCebraspe,
  calcularCorteCebraspe,
  gerarDiagnosticoChute,
  type RespostaQuestaoCebraspe,
} from '../domain/scoring/cebraspeScoring';

describe('CebraspeScoringEngine (Fase 2 - Deep Module TDD)', () => {
  it('deve calcular pontuação líquida perfeita quando todas as respostas forem corretas', () => {
    const questoes: RespostaQuestaoCebraspe[] = [
      { id: 'q1', respostaUsuario: 'C', gabarito: 'C' },
      { id: 'q2', respostaUsuario: 'E', gabarito: 'E' },
      { id: 'q3', respostaUsuario: 'C', gabarito: 'C' },
    ];

    const resultado = calcularPontuacaoCebraspe(questoes);

    expect(resultado.totalQuestoes).toBe(3);
    expect(resultado.certos).toBe(3);
    expect(resultado.errados).toBe(0);
    expect(resultado.emBranco).toBe(0);
    expect(resultado.notaLiquida).toBe(3);
    expect(resultado.aproveitamentoPercent).toBe(100);
    expect(resultado.taxaAcertoBrutaPercent).toBe(100);
  });

  it('deve penalizar com anulação de 1 ponto a cada erro (regra Cebraspe 1 erro anula 1 acerto)', () => {
    const questoes: RespostaQuestaoCebraspe[] = [
      { id: 'q1', respostaUsuario: 'C', gabarito: 'C' }, // +1
      { id: 'q2', respostaUsuario: 'E', gabarito: 'C' }, // -1
      { id: 'q3', respostaUsuario: 'C', gabarito: 'C' }, // +1
      { id: 'q4', respostaUsuario: 'C', gabarito: 'E' }, // -1
    ];

    const resultado = calcularPontuacaoCebraspe(questoes);

    expect(resultado.totalQuestoes).toBe(4);
    expect(resultado.certos).toBe(2);
    expect(resultado.errados).toBe(2);
    expect(resultado.emBranco).toBe(0);
    expect(resultado.notaLiquida).toBe(0);
    expect(resultado.aproveitamentoPercent).toBe(0);
    expect(resultado.taxaAcertoBrutaPercent).toBe(50);
  });

  it('deve permitir nota líquida negativa mas travar aproveitamento percentual no piso 0%', () => {
    const questoes: RespostaQuestaoCebraspe[] = [
      { id: 'q1', respostaUsuario: 'C', gabarito: 'C' }, // +1
      { id: 'q2', respostaUsuario: 'C', gabarito: 'E' }, // -1
      { id: 'q3', respostaUsuario: 'C', gabarito: 'E' }, // -1
      { id: 'q4', respostaUsuario: 'E', gabarito: 'C' }, // -1
    ];

    const resultado = calcularPontuacaoCebraspe(questoes);

    expect(resultado.certos).toBe(1);
    expect(resultado.errados).toBe(3);
    expect(resultado.notaLiquida).toBe(-2);
    expect(resultado.aproveitamentoPercent).toBe(0);
  });

  it('deve pontuar 0 pontos para respostas deixadas em branco sem penalidade', () => {
    const questoes: RespostaQuestaoCebraspe[] = [
      { id: 'q1', respostaUsuario: 'C', gabarito: 'C' }, // +1
      { id: 'q2', respostaUsuario: 'BRANCO', gabarito: 'E' }, // 0
      { id: 'q3', respostaUsuario: 'BRANCO', gabarito: 'C' }, // 0
      { id: 'q4', respostaUsuario: 'E', gabarito: 'E' }, // +1
    ];

    const resultado = calcularPontuacaoCebraspe(questoes);

    expect(resultado.totalQuestoes).toBe(4);
    expect(resultado.certos).toBe(2);
    expect(resultado.errados).toBe(0);
    expect(resultado.emBranco).toBe(2);
    expect(resultado.notaLiquida).toBe(2);
    expect(resultado.aproveitamentoPercent).toBe(50);
    expect(resultado.taxaAcertoBrutaPercent).toBe(100); // 2 certos de 2 respondidos
  });

  it('deve lidar seguramente com lista vazia de questões', () => {
    const resultado = calcularPontuacaoCebraspe([]);

    expect(resultado.totalQuestoes).toBe(0);
    expect(resultado.certos).toBe(0);
    expect(resultado.errados).toBe(0);
    expect(resultado.emBranco).toBe(0);
    expect(resultado.notaLiquida).toBe(0);
    expect(resultado.aproveitamentoPercent).toBe(0);
    expect(resultado.taxaAcertoBrutaPercent).toBe(0);
  });

  it('deve calibrar níveis metacognitivos e calcular ganho se chutes prejudiciais ficassem em branco', () => {
    const questoes: RespostaQuestaoCebraspe[] = [
      // Certeza: 2 certas, 0 erradas
      { id: 'q1', respostaUsuario: 'C', gabarito: 'C', certeza: 'certeza' },
      { id: 'q2', respostaUsuario: 'E', gabarito: 'E', certeza: 'certeza' },
      // Provavel: 1 certa, 1 errada
      { id: 'q3', respostaUsuario: 'C', gabarito: 'C', certeza: 'provavel' },
      { id: 'q4', respostaUsuario: 'C', gabarito: 'E', certeza: 'provavel' },
      // Chute: 1 certa, 3 erradas (saldo = 1 - 3 = -2)
      { id: 'q5', respostaUsuario: 'C', gabarito: 'C', certeza: 'chute' },
      { id: 'q6', respostaUsuario: 'C', gabarito: 'E', certeza: 'chute' },
      { id: 'q7', respostaUsuario: 'E', gabarito: 'C', certeza: 'chute' },
      { id: 'q8', respostaUsuario: 'E', gabarito: 'C', certeza: 'chute' },
    ];

    const resultado = calcularPontuacaoCebraspe(questoes);

    expect(resultado.certos).toBe(4);
    expect(resultado.errados).toBe(4);
    expect(resultado.notaLiquida).toBe(0);

    const cal = resultado.calibracao;
    expect(cal.certezaTotal).toBe(2);
    expect(cal.certezaAcertos).toBe(2);
    expect(cal.acertoCertezaPercent).toBe(100);

    expect(cal.provavelTotal).toBe(2);
    expect(cal.provavelAcertos).toBe(1);
    expect(cal.acertoProvavelPercent).toBe(50);

    expect(cal.chuteTotal).toBe(4);
    expect(cal.chuteAcertos).toBe(1);
    expect(cal.acertoChutePercent).toBe(25);
    expect(cal.saldoChutes).toBe(-2);
    expect(cal.ganhoPotencialSeChuteBranco).toBe(2);
    // amostra pequena (4 chutes): o texto deve avisar que o saldo é ruído e citar a regra de 50%
    expect(resultado.estrategiaChuteRecomendada).toContain('ruído');
    expect(resultado.estrategiaChuteRecomendada).toContain('50%');
  });

  it('deve avaliar critérios de nota de corte Cebraspe com precisão', () => {
    // 100 questões com 60 pontos líquidos
    const corteAprovado = calcularCorteCebraspe(60, 100, {
      notaMinimaLiquida: 50,
      percentualMinimo: 50,
    });
    expect(corteAprovado.atingiuCorte).toBe(true);
    expect(corteAprovado.margem).toBe(10);

    // 100 questões com 40 pontos líquidos
    const corteReprovado = calcularCorteCebraspe(40, 100, {
      notaMinimaLiquida: 50,
      percentualMinimo: 50,
    });
    expect(corteReprovado.atingiuCorte).toBe(false);
    expect(corteReprovado.margem).toBe(-10);
  });
});

describe('gerarDiagnosticoChute (valor esperado, não resultado de amostra)', () => {
  it('amostra pequena: avisa que o saldo é ruído', () => {
    expect(gerarDiagnosticoChute(6, 2)).toContain('ruído');
  });
  it('amostra grande com taxa acima de 50%: marcar compensa', () => {
    expect(gerarDiagnosticoChute(40, 26)).toContain('valor esperado positivo');
  });
  it('amostra grande com taxa abaixo de 50%: em branco rende mais', () => {
    expect(gerarDiagnosticoChute(40, 14)).toContain('em branco teria rendido mais');
  });
  it('sem dados de chute (progresso antigo): só a regra, sem afirmar que não houve chutes', () => {
    const t = gerarDiagnosticoChute(undefined, undefined);
    expect(t).toContain('50%');
    expect(t).not.toContain('nenhum item como chute');
  });
});
