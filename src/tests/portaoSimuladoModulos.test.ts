import { describe, it, expect } from 'vitest';
import {
  calcularNotaConsolidadaSimulado,
  obterSimuladoIdDoModulo,
} from '../domain/portaoSimuladoEngine';
import { derivarProgresso } from '../domain/progressoEngine';
import { COURSE_REGISTRY } from '../content/registry';
import { SIMULADOS_REGISTRY } from '../content/simuladosRegistry';
import { JORNADA_CONFIG } from '../config/jornada.config';
import type { SimuladoFinalizado } from '../domain/schemas/progress.schema';

function tentativa(simuladoId: string, dataHora: string, acertosIds: string[], errosIds: string[]): SimuladoFinalizado {
  const respostas: SimuladoFinalizado['respostas'] = {};
  for (const id of acertosIds) respostas[id] = { questionId: id, resposta: 'C', timestamp: 0, acertou: true };
  for (const id of errosIds) respostas[id] = { questionId: id, resposta: 'E', timestamp: 0, acertou: false };
  const total = acertosIds.length + errosIds.length;
  return {
    id: `simulado-${dataHora}`,
    simuladoId,
    dataHora,
    tempoGastoSegundos: 60,
    certos: acertosIds.length,
    errados: errosIds.length,
    emBranco: 0,
    notaLiquida: acertosIds.length - errosIds.length,
    aproveitamentoPercent: Math.round((acertosIds.length / total) * 100),
    respostas,
    calibracao: { acertoCertezaPercent: 0, acertoProvavelPercent: 0, acertoChutePercent: 0, ganhoPotencialSeChuteBranco: 0 },
  };
}

describe('Portão de simulado por módulo', () => {
  it('resolve o caderno real de cada módulo (não apenas mN-fundamentos)', () => {
    expect(obterSimuladoIdDoModulo(1)).toBe('m1-fundamentos');
    expect(obterSimuladoIdDoModulo(2)).toBe('m2-catalogacao');
    for (const s of SIMULADOS_REGISTRY.filter((m) => /^M\d+$/.test(m.macroModuloId))) {
      expect(obterSimuladoIdDoModulo(Number(s.macroModuloId.slice(1)))).toBe(s.id);
    }
  });

  it('usa a tentativa mais antiga como 1ª tentativa, mesmo com histórico mais-recente-primeiro', () => {
    const primeira = tentativa('m2-catalogacao', '2026-10-01T10:00:00.000Z', ['a', 'b'], ['c', 'd']);
    const segunda = tentativa('m2-catalogacao', '2026-10-05T10:00:00.000Z', ['a', 'b', 'c', 'd'], []);
    const nota = calcularNotaConsolidadaSimulado('m2-catalogacao', [segunda, primeira]);
    expect(nota.primeiraTentativaPercent).toBe(50);
    expect(nota.errosCorrigidosReteste).toBe(2);
    expect(nota.notaConsolidadaPercent).toBe(100);
  });

  it('id de módulo (m2) casa com o caderno m2-*, mas não com m20/m1', () => {
    const h = [
      tentativa('m2-catalogacao', '2026-10-01T10:00:00.000Z', ['a'], ['b']),
      tentativa('m1-fundamentos', '2026-10-02T10:00:00.000Z', ['a', 'b'], []),
    ];
    expect(calcularNotaConsolidadaSimulado('m2', h).totalTentativas).toBe(1);
  });

  it('derivarProgresso contabiliza o simulado do módulo em escala 0–1', () => {
    const h = [tentativa('m2-catalogacao', '2026-10-01T10:00:00.000Z', ['a', 'b', 'c', 'd'], ['e'])];
    const prog = derivarProgresso([], {}, COURSE_REGISTRY, JORNADA_CONFIG, h);
    expect(prog.modulos['m2'].simuladoTentativasCount).toBe(1);
    expect(prog.modulos['m2'].simuladoPrimeiraTentativaNota).toBe(0.8);
    expect(prog.modulos['m2'].simuladoAprovado).toBe(true);
    expect(prog.modulos['m1'].simuladoTentativasCount).toBe(0);
  });
});
