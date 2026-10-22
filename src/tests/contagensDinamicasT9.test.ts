import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { ALL_COURSE_MODULES, COURSE_REGISTRY } from '../content/registry';
import { SIMULADOS_REGISTRY, MINI_SIMULADOS_REGISTRY } from '../content/simuladosRegistry';
import { megaSimuladoCamara120Q } from '../content/questions/mega-simulado-camara-120q';
import { simuladoGeral180Q } from '../content/questions/simulado-geral-180q';
import { calcularMetricasAcervo, METRICAS_ACERVO } from '../domain/metrics/acervoMetricas';

describe('T9.3: Contagens e Rótulos Dinâmicos na Interface (Plano v3)', () => {
  it('calcula métricas de acervo canônicas com precisão matemática', () => {
    const metricas = calcularMetricasAcervo();

    // 15 macro-módulos no acervo total (M1 a M14 + M15)
    expect(metricas.totalModulosAcervo).toBe(ALL_COURSE_MODULES.length);
    expect(metricas.totalModulosAcervo).toBe(15);

    // 14 macro-módulos na trilha principal (M1 a M14)
    expect(metricas.totalModulosTrilha).toBe(COURSE_REGISTRY.length);
    expect(metricas.totalModulosTrilha).toBe(14);

    // 75 submódulos no acervo total
    const somaSubmodulosAcervo = ALL_COURSE_MODULES.reduce((acc, m) => acc + m.modulosFilhos.length, 0);
    expect(metricas.totalSubmodulosAcervo).toBe(somaSubmodulosAcervo);
    expect(metricas.totalSubmodulosAcervo).toBe(75);

    // 74 submódulos na trilha principal (M1 a M14)
    const somaSubmodulosTrilha = COURSE_REGISTRY.reduce((acc, m) => acc + m.modulosFilhos.length, 0);
    expect(metricas.totalSubmodulosTrilha).toBe(somaSubmodulosTrilha);
    expect(metricas.totalSubmodulosTrilha).toBe(74);

    // 225 micro-checkpoints formativos (75 submódulos x 3)
    const somaCheckpoints = ALL_COURSE_MODULES.reduce(
      (acc, m) => acc + m.modulosFilhos.reduce((sAcc, s) => sAcc + s.checkpoints.length, 0),
      0
    );
    expect(metricas.totalCheckpoints).toBe(somaCheckpoints);
    expect(metricas.totalCheckpoints).toBe(225);

    // 1.850 questões de simulados
    const somaSimulados =
      SIMULADOS_REGISTRY.reduce((acc, sim) => acc + (sim.totalNominal ?? sim.questoes.length), 0) +
      MINI_SIMULADOS_REGISTRY.reduce((acc, sim) => acc + (sim.totalNominal ?? sim.questoes.length), 0) +
      megaSimuladoCamara120Q.length +
      simuladoGeral180Q.length;
    expect(metricas.totalItensSimulados).toBe(somaSimulados);
    expect(metricas.totalItensSimulados).toBe(1850);

    // 2.075 questões no acervo total
    expect(metricas.totalQuestoesAcervo).toBe(somaCheckpoints + somaSimulados);
    expect(metricas.totalQuestoesAcervo).toBe(2075);

    // METRICAS_ACERVO constante exportada coincide
    expect(METRICAS_ACERVO).toEqual(metricas);
  });

  it('assegura ausência de contagens obsoletas hardcoded nos arquivos de páginas (src/pages)', () => {
    const pagesDir = path.resolve(__dirname, '../pages');
    const files = fs.readdirSync(pagesDir).filter((f) => f.endsWith('.tsx') || f.endsWith('.ts'));

    for (const file of files) {
      const content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');

      // Não pode haver "1.712 questões"
      expect(content).not.toMatch(/1\.?712\s*questões/i);

      // Não pode haver "59 etapas" hardcoded
      expect(content).not.toMatch(/59\s*etapas/i);

      // Em SimuladoPage não pode haver "Desempenho por Submódulo (25 itens cada)"
      if (file === 'SimuladoPage.tsx') {
        expect(content).not.toContain('(25 itens cada)');
      }
    }
  });

  it('assegura ausência de contagens obsoletas hardcoded nos componentes principais (src/components)', () => {
    const searchModalPath = path.resolve(__dirname, '../components/common/GlobalSearchModal.tsx');
    if (fs.existsSync(searchModalPath)) {
      const searchModalContent = fs.readFileSync(searchModalPath, 'utf-8');
      expect(searchModalContent).not.toMatch(/todos os 40 submódulos/i);
    }

    const moduloViewPath = path.resolve(__dirname, '../components/ModuloView.tsx');
    if (fs.existsSync(moduloViewPath)) {
      const moduloViewContent = fs.readFileSync(moduloViewPath, 'utf-8');
      expect(moduloViewContent).not.toContain('4 Módulos-Filhos densamente fundamentados');
      expect(moduloViewContent).not.toContain('baseados exatamente nos 4 submódulos teóricos');
    }
  });
});
