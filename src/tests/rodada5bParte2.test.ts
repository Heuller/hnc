import { describe, it, expect } from 'vitest';
import {
  calcularNotaConsolidadaSimulado,
  verificarAcessoModulo,
  verificarNavegacaoRodapeSubmodulo,
} from '../domain/portaoSimuladoEngine';
import type { SimuladoFinalizado } from '../domain/schemas/progress.schema';
import type {
  ProgressoGlobalDerivado,
  SubmoduloProgressoDerivado,
  ModuloProgressoDerivado,
} from '../domain/progressoEngine';
import { JORNADA_CONFIG } from '../config/jornada.config';

function mockSubmodulo(parcial: Partial<SubmoduloProgressoDerivado>): SubmoduloProgressoDerivado {
  return {
    submoduloId: 'sub-1-1',
    submoduloNumero: '1.1',
    moduloId: 'm1',
    totalItensVerificacao: 6,
    itensRespondidosCount: 0,
    acertosPrimeiraTentativa: 0,
    errosPrimeiraTentativa: 0,
    aproveitamentoPortaoPercent: 0,
    acertosNecessariosPortao: 5,
    aprovadoNoPortao: false,
    secoesLidasCount: 0,
    secoesTotalCount: 3,
    leituraCompleta: false,
    concluido: false,
    emRevisaoDirigida: false,
    itensPendentesIds: [],
    statusTexto: '',
    primeirasTentativasMap: {},
    ultimasTentativasMap: {},
    ...parcial,
  };
}

function mockModulo(parcial: Partial<ModuloProgressoDerivado>): ModuloProgressoDerivado {
  return {
    moduloId: 'm1',
    moduloNumero: 1,
    submodulosConcluidosCount: 0,
    submodulosTotalCount: 4,
    todosSubmodulosConcluidos: false,
    simuladoLiberado: false,
    simuladoTentativasCount: 0,
    simuladoAprovado: false,
    moduloConcluido: false,
    proximoModuloLiberado: false,
    ...parcial,
  };
}

describe('Rodada 5B — Parte 2: Portão do Simulado e Fim do Módulo', () => {
  const progressoZerado: ProgressoGlobalDerivado = {
    submodulos: {
      '1.1': mockSubmodulo({ submoduloId: '1.1', submoduloNumero: '1.1' }),
      '1.4': mockSubmodulo({ submoduloId: '1.4', submoduloNumero: '1.4' }),
    },
    modulos: {
      m1: mockModulo({ moduloId: 'm1', moduloNumero: 1 }),
      m2: mockModulo({ moduloId: 'm2', moduloNumero: 2 }),
    },
    etapasConcluidasCount: 0,
    etapasTotalCount: 14,
    progressoPercent: 0,
  };

  it('(2.1) Submódulo 1.4 nunca avança para 2.1 via rodapé de teoria (sempre abre portão do simulado)', () => {
    const rodapeNav = verificarNavegacaoRodapeSubmodulo('1.4', progressoZerado, []);

    expect(rodapeNav.isUltimoDoModulo).toBe(true);
    expect(rodapeNav.simuladoModuloId).toBe('m1-fundamentos');
    expect(rodapeNav.podeAvancarProximoSubmodulo).toBe(false);
    expect(rodapeNav.proximoSubmoduloNumero).toBeUndefined();
  });

  it('(2.1) Submódulo intermediário (1.1) aponta para o próximo (1.2) se liberado', () => {
    const rodapeNav = verificarNavegacaoRodapeSubmodulo('1.1', progressoZerado, []);

    expect(rodapeNav.isUltimoDoModulo).toBe(false);
    expect(rodapeNav.proximoSubmoduloNumero).toBe('1.2');
  });

  it('(2.2) Bloqueio global de acesso: Módulo 2 é bloqueado se o Simulado do Módulo 1 não foi aprovado', () => {
    const statusAcessoM2 = verificarAcessoModulo('m2', progressoZerado, []);

    expect(statusAcessoM2.liberado).toBe(false);
    expect(statusAcessoM2.moduloNumero).toBe(2);
    expect(statusAcessoM2.moduloAnteriorNumero).toBe(1);
    expect(statusAcessoM2.simuladoAnteriorId).toBe('m1-fundamentos');
    expect(statusAcessoM2.motivoBloqueio).toContain('Requer 80% de aproveitamento consolidado');
  });

  it('(2.2) Módulo 1 (primeiro módulo) tem acesso liberado imediatamente', () => {
    const statusAcessoM1 = verificarAcessoModulo('m1', progressoZerado, []);
    expect(statusAcessoM1.liberado).toBe(true);
  });

  it('(2.2) Bypass de DEV libera qualquer módulo para testes', () => {
    const statusBypass = verificarAcessoModulo('m2', progressoZerado, [], true);
    expect(statusBypass.liberado).toBe(true);
  });

  it('(2.3 + 2.4) Nota consolidada: 1ª tentativa 72%, reteste de erros corrigindo 11 questões eleva para 83%', () => {
    const respostasPrimeira: SimuladoFinalizado['respostas'] = {};
    for (let i = 1; i <= 100; i++) {
      respostasPrimeira[`q-${i}`] = {
        questionId: `q-${i}`,
        timestamp: Date.now(),
        resposta: 'C',
        acertou: i <= 72, // 72 certos, 28 errados
      };
    }

    const primeiraTentativa: SimuladoFinalizado = {
      id: 'sim-1',
      simuladoId: 'm1-fundamentos',
      tituloSimulado: 'Simulado M1',
      dataHora: '2026-10-06T10:00:00Z',
      tempoGastoSegundos: 3600,
      certos: 72,
      errados: 28,
      emBranco: 0,
      notaLiquida: 44,
      aproveitamentoPercent: 44,
      respostas: respostasPrimeira,
      calibracao: {
        acertoCertezaPercent: 80,
        acertoProvavelPercent: 60,
        acertoChutePercent: 30,
        ganhoPotencialSeChuteBranco: 0,
      },
    };

    // Apenas a 1ª tentativa: 72%, reprovado (< 80%)
    const notaInicial = calcularNotaConsolidadaSimulado('m1-fundamentos', [primeiraTentativa]);
    expect(notaInicial.primeiraTentativaPercent).toBe(72);
    expect(notaInicial.notaConsolidadaPercent).toBe(72);
    expect(notaInicial.aprovado).toBe(false);
    expect(notaInicial.itensErradosIds.length).toBe(28);

    // Reteste corrigindo 11 dos 28 erros (q-73 a q-83)
    const retestesAcertosMap: Record<string, boolean> = {};
    for (let i = 73; i <= 83; i++) {
      retestesAcertosMap[`q-${i}`] = true;
    }

    const notaConsolidada = calcularNotaConsolidadaSimulado(
      'm1-fundamentos',
      [primeiraTentativa],
      retestesAcertosMap
    );

    // 72 acertos iniciais + 11 erros corrigidos = 83 acertos = 83% consolidado
    expect(notaConsolidada.primeiraTentativaPercent).toBe(72);
    expect(notaConsolidada.errosCorrigidosReteste).toBe(11);
    expect(notaConsolidada.notaConsolidadaPercent).toBe(83);
    expect(notaConsolidada.aprovado).toBe(true);
  });

  it('(2.2 + 2.4) Módulo 2 é desbloqueado assim que o M1 atinge nota consolidada >= 80%', () => {
    // Simulado 1ª tentativa 70%
    const respostas1: SimuladoFinalizado['respostas'] = {};
    for (let i = 1; i <= 100; i++) {
      respostas1[`q-${i}`] = {
        questionId: `q-${i}`,
        timestamp: Date.now(),
        resposta: 'C',
        acertou: i <= 70,
      };
    }
    const tentativa1: SimuladoFinalizado = {
      id: 'sim-1',
      simuladoId: 'm1-fundamentos',
      tituloSimulado: 'Simulado M1',
      dataHora: '2026-10-06T10:00:00Z',
      tempoGastoSegundos: 3600,
      certos: 70,
      errados: 30,
      emBranco: 0,
      notaLiquida: 40,
      aproveitamentoPercent: 40,
      respostas: respostas1,
      calibracao: {
        acertoCertezaPercent: 0,
        acertoProvavelPercent: 0,
        acertoChutePercent: 0,
        ganhoPotencialSeChuteBranco: 0,
      },
    };

    // 2ª tentativa corrigindo 15 itens errados
    const respostas2: SimuladoFinalizado['respostas'] = {};
    for (let i = 71; i <= 85; i++) {
      respostas2[`q-${i}`] = {
        questionId: `q-${i}`,
        timestamp: Date.now(),
        resposta: 'C',
        acertou: true,
      };
    }
    const tentativa2: SimuladoFinalizado = {
      id: 'sim-2',
      simuladoId: 'm1-fundamentos',
      tituloSimulado: 'Reteste M1',
      dataHora: '2026-10-06T11:00:00Z',
      tempoGastoSegundos: 1200,
      certos: 15,
      errados: 0,
      emBranco: 0,
      notaLiquida: 15,
      aproveitamentoPercent: 100,
      respostas: respostas2,
      calibracao: {
        acertoCertezaPercent: 0,
        acertoProvavelPercent: 0,
        acertoChutePercent: 0,
        ganhoPotencialSeChuteBranco: 0,
      },
    };

    const historico = [tentativa1, tentativa2];
    const statusAcessoM2 = verificarAcessoModulo('m2', progressoZerado, historico);

    // 70 + 15 = 85% >= 80% -> Liberado!
    expect(statusAcessoM2.liberado).toBe(true);
    expect(statusAcessoM2.notaConsolidadaAnterior).toBe(85);
  });

  it('(2.6) Limiar configurado em jornada.config dita as regras do portão', () => {
    expect(JORNADA_CONFIG.minimoSimuladoModulo).toBe(0.8);
    expect(JORNADA_CONFIG.minimoVerificacao).toBe(0.85);
    expect(JORNADA_CONFIG.segundosPorItemProva).toBe(100);
  });
});
