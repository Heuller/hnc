import { describe, it, expect } from 'vitest';
import { COURSE_REGISTRY } from '../content/registry';
import {
  getTempoEstimadoSubmodulo,
  getTempoTotalMacroModulo,
  getCheckpointsCountSubmodulo,
  getCheckpointsFeitosSubmodulo,
  getCheckpointsCountMacroModulo,
  getCheckpointsFeitosMacroModulo,
  getTempoTotalCurso,
  getCheckpointsTotalCurso,
  getSubmodulosLidosCount,
  getMacroModuloProgressoPercent,
  getCursoProgressoPercent,
} from '../domain/metrics';

describe('Métricas Derivadas — Fonte Única de Verdade (A9)', () => {
  const m1 = COURSE_REGISTRY.find((m) => m.id === 'm1')!;

  it('M1 deve somar exatamente o tempo de seus submódulos dinamicamente', () => {
    expect(m1).toBeDefined();
    const temposFilhos = m1.modulosFilhos.map((s) => getTempoEstimadoSubmodulo(s));
    expect(temposFilhos).toEqual(m1.modulosFilhos.map(s => s.tempoEstimadoMinutos));

    const tempoTotalM1 = getTempoTotalMacroModulo(m1);
    const somaEsperada = temposFilhos.reduce((acc, t) => acc + t, 0);
    expect(tempoTotalM1).toBe(somaEsperada);
    expect(tempoTotalM1).toBeGreaterThan(0);
  });

  it('cada submódulo deve computar seus próprios checkpoints sem vazar a contagem do macro-módulo', () => {
    const sub11 = m1.modulosFilhos[0];
    expect(getCheckpointsCountSubmodulo(sub11)).toBe(sub11.checkpoints.length);

    // Simula resposta apenas para o primeiro checkpoint de 1.1
    const cpId = sub11.checkpoints[0].id;
    const respondidos = { [cpId]: 'C' as const };

    // Submódulo 1.1 deve ter 1 feito de 3
    expect(getCheckpointsFeitosSubmodulo(sub11, respondidos)).toBe(1);

    // Submódulo 1.2 deve ter 0 feitos
    const sub12 = m1.modulosFilhos[1];
    expect(getCheckpointsFeitosSubmodulo(sub12, respondidos)).toBe(0);

    // Macro-Módulo M1 tem 18 checkpoints no total (3 em cada um dos 6 submódulos)
    expect(getCheckpointsCountMacroModulo(m1)).toBe(m1.modulosFilhos.reduce((n, s) => n + s.checkpoints.length, 0));
    expect(getCheckpointsFeitosMacroModulo(m1, respondidos)).toBe(1);
  });

  it('o tempo total do curso deve ser a soma exata de todos os submódulos', () => {
    const totalMinutos = getTempoTotalCurso(COURSE_REGISTRY);
    expect(totalMinutos).toBeGreaterThan(500);

    const somaManual = COURSE_REGISTRY.flatMap((m) => m.modulosFilhos).reduce(
      (acc, s) => acc + s.tempoEstimadoMinutos,
      0
    );
    expect(totalMinutos).toBe(somaManual);
  });

  it('o total de checkpoints do curso deve ser consistente com todos os submódulos', () => {
    const totalCheckpoints = getCheckpointsTotalCurso(COURSE_REGISTRY);
    expect(totalCheckpoints).toBeGreaterThanOrEqual(80); // mínimo 2 por cada um dos submódulos
  });

  it('o cálculo de progresso percentual deve ser proporcional e arredondado corretamente', () => {
    const lidosMock = ['sub-1-1', 'sub-1-2'];
    expect(getSubmodulosLidosCount(m1, lidosMock)).toBe(2);
    expect(getMacroModuloProgressoPercent(m1, lidosMock)).toBe(33);

    // Progresso global dinâmico baseado no total real de submódulos
    const totalSubmodulos = COURSE_REGISTRY.flatMap((m) => m.modulosFilhos).length;
    const esperadoPercent = Math.round((lidosMock.length / totalSubmodulos) * 100);
    expect(getCursoProgressoPercent(COURSE_REGISTRY, lidosMock)).toBe(esperadoPercent);
  });
});
