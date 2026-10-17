import { ALL_COURSE_MODULES, COURSE_REGISTRY } from '../../content/registry';
import { SIMULADOS_REGISTRY, MINI_SIMULADOS_REGISTRY } from '../../content/simuladosRegistry';
import { megaSimuladoCamara120Q } from '../../content/questions/mega-simulado-camara-120q';
import { simuladoGeral180Q } from '../../content/questions/simulado-geral-180q';

/**
 * Métricas Canônicas do Acervo da Plataforma Heuller na Câmara (HNC)
 * Garante que nenhuma tela ou componente apresente contagens manuais (hardcoded).
 */

export interface MetricasAcervo {
  totalModulosAcervo: number;
  totalModulosTrilha: number;
  totalSubmodulosAcervo: number;
  totalSubmodulosTrilha: number;
  totalCheckpoints: number;
  totalItensSimuladosPadrao: number;
  totalItensMiniSimulados: number;
  totalItensMegaSimulado: number;
  totalItensSimuladoGeral: number;
  totalItensSimulados: number;
  totalQuestoesAcervo: number;
  totalCadernosSimulados: number;
}

export function calcularMetricasAcervo(): MetricasAcervo {
  const totalModulosAcervo = ALL_COURSE_MODULES.length;
  const totalModulosTrilha = COURSE_REGISTRY.length;

  const totalSubmodulosAcervo = ALL_COURSE_MODULES.reduce(
    (acc, m) => acc + m.modulosFilhos.length,
    0
  );

  const totalSubmodulosTrilha = COURSE_REGISTRY.reduce(
    (acc, m) => acc + m.modulosFilhos.length,
    0
  );

  const totalCheckpoints = ALL_COURSE_MODULES.reduce(
    (acc, m) =>
      acc +
      m.modulosFilhos.reduce((subAcc, sub) => subAcc + sub.checkpoints.length, 0),
    0
  );

  const totalItensSimuladosPadrao = SIMULADOS_REGISTRY.reduce(
    (acc, sim) => acc + sim.questoes.length,
    0
  );

  const totalItensMiniSimulados = MINI_SIMULADOS_REGISTRY.reduce(
    (acc, sim) => acc + sim.questoes.length,
    0
  );

  const totalItensMegaSimulado = megaSimuladoCamara120Q.length;
  const totalItensSimuladoGeral = simuladoGeral180Q.length;

  const totalItensSimulados =
    totalItensSimuladosPadrao +
    totalItensMiniSimulados +
    totalItensMegaSimulado +
    totalItensSimuladoGeral;

  const totalQuestoesAcervo = totalCheckpoints + totalItensSimulados;
  const totalCadernosSimulados = SIMULADOS_REGISTRY.length + MINI_SIMULADOS_REGISTRY.length + 2; // + Mega + Geral

  return {
    totalModulosAcervo,
    totalModulosTrilha,
    totalSubmodulosAcervo,
    totalSubmodulosTrilha,
    totalCheckpoints,
    totalItensSimuladosPadrao,
    totalItensMiniSimulados,
    totalItensMegaSimulado,
    totalItensSimuladoGeral,
    totalItensSimulados,
    totalQuestoesAcervo,
    totalCadernosSimulados,
  };
}

export const METRICAS_ACERVO = calcularMetricasAcervo();
