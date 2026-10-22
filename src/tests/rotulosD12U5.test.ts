import { describe, it, expect } from 'vitest';
import { COURSE_REGISTRY, ALL_COURSE_MODULES } from '../content/registry';
import { SIMULADOS_REGISTRY } from '../content/simuladosRegistry';
import { deriveJornadaState } from '../domain/jornadaEngine';

describe('U5.6: Padronização dos rótulos D12 (Trilha Específica M1-M10 vs Acervo Complementar M11-M14)', () => {
  it('deve distinguir estruturalmente a Trilha Específica (M1 a M10) do Acervo Complementar (M11 a M14)', () => {
    const extrairNumero = (id: string): number => {
      const num = parseInt(id.replace(/\D/g, ''), 10);
      return isNaN(num) ? 0 : num;
    };

    const modulosEspecificos = COURSE_REGISTRY.filter((m) => {
      const n = extrairNumero(m.id);
      return n >= 1 && n <= 10;
    });

    const modulosComplementares = COURSE_REGISTRY.filter((m) => {
      const n = extrairNumero(m.id);
      return n >= 11 && n <= 14;
    });

    expect(modulosEspecificos).toHaveLength(10);
    expect(modulosComplementares).toHaveLength(4);

    // Módulos Específicos correspondem aos Conhecimentos Específicos do Cargo 5 (Biblioteconomia)
    modulosEspecificos.forEach((m) => {
      expect(m.titulo).toBeDefined();
      expect(m.modulosFilhos.length).toBeGreaterThan(0);
    });

    // Módulos Básicos correspondem aos Conhecimentos Básicos (Direito, Inglês, Português, TI/Dados)
    expect(modulosComplementares.map((m) => m.id)).toEqual(['m11', 'm12', 'm13', 'm14']);
  });

  it('deve mapear exatamente 10 cadernos para Trilha Específica e 4 cadernos para o Acervo Básico', () => {
    const cadernosEspecificos = SIMULADOS_REGISTRY.filter((s) => s.numero >= 1 && s.numero <= 10);
    const cadernosBasicos = SIMULADOS_REGISTRY.filter((s) => s.numero >= 11 && s.numero <= 14);

    expect(cadernosEspecificos).toHaveLength(10);
    cadernosEspecificos.forEach((sim) => {
      expect(sim.totalNominal ?? sim.questoes.length).toBe(100);
      expect(sim.numero).toBeGreaterThanOrEqual(1);
      expect(sim.numero).toBeLessThanOrEqual(10);
    });

    expect(cadernosBasicos).toHaveLength(4);
    cadernosBasicos.forEach((sim) => {
      expect(sim.totalNominal ?? sim.questoes.length).toBe(100);
      expect(sim.numero).toBeGreaterThanOrEqual(11);
      expect(sim.numero).toBeLessThanOrEqual(14);
    });
  });

  it('deve derivar a contagem total de etapas dinamicamente na jornadaEngine sem hardcode de 59', () => {
    const jornadaState = deriveJornadaState({
      modulos: ALL_COURSE_MODULES,
      tentativas: [],
      secoesVisualizadas: {},
      modoLivre: true,
    });

    expect(jornadaState.metricas.totalEtapas).toBe(jornadaState.etapasOrdenadas.length);
    expect(jornadaState.metricas.totalEtapas).toBeGreaterThanOrEqual(50);
    expect(jornadaState.metricas.taxaDominioPercent).toBe(0);
  });
});
