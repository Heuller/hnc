import { COURSE_REGISTRY } from '../../content/registry';
import { getItensCadernoErros } from '../cadernoErros';
import type { SimuladoFinalizado } from '../schemas/progress.schema';
import type { DiagnosticoFraqueza } from './types';

/**
 * Analisa toda a telemetria do candidato e gera um diagnóstico
 * cirúrgico das vulnerabilidades conceituais por módulo e submódulo.
 */
export function diagnosticarVulnerabilidades(
  checkpointsRespondidos: Record<string, 'C' | 'E'>,
  historicoSimulados: SimuladoFinalizado[]
): DiagnosticoFraqueza[] {
  const errosCaderno = getItensCadernoErros(
    checkpointsRespondidos || {},
    historicoSimulados || []
  );

  // Mapeamento de contagem por módulo
  const mapaModulos = new Map<
    string,
    {
      macroModuloId: string;
      submoduloId?: string;
      titulo: string;
      totalErros: number;
      totalTentativas: number;
      pontosCegos: Set<string>;
    }
  >();

  // 1. Inicializa com os módulos cadastrados no curso
  for (const macro of COURSE_REGISTRY) {
    mapaModulos.set(macro.id.toLowerCase(), {
      macroModuloId: macro.id.toLowerCase(),
      titulo: macro.titulo,
      totalErros: 0,
      totalTentativas: 0,
      pontosCegos: new Set<string>(),
    });
  }

  // 2. Computa os erros catalogados
  for (const err of errosCaderno) {
    const modId = err.macroModuloId.toLowerCase();
    const entry = mapaModulos.get(modId) || {
      macroModuloId: modId,
      titulo: err.macroModuloTitulo || modId.toUpperCase(),
      totalErros: 0,
      totalTentativas: 0,
      pontosCegos: new Set<string>(),
    };

    entry.totalErros += 1;
    entry.totalTentativas += 1;

    if (err.armadilhaBanca) {
      entry.pontosCegos.add(err.armadilhaBanca.slice(0, 80));
    }

    mapaModulos.set(modId, entry);
  }

  // 3. Computa acertos em checkpoints para balancear a taxa de erro
  for (const macro of COURSE_REGISTRY) {
    const modId = macro.id.toLowerCase();
    const entry = mapaModulos.get(modId);
    if (!entry) continue;

    for (const sub of macro.modulosFilhos) {
      for (const cp of sub.checkpoints) {
        const resp = checkpointsRespondidos[cp.id];
        if (resp) {
          if (resp === cp.gabarito) {
            entry.totalTentativas += 1; // acerto
          }
        }
      }
    }
  }

  // 4. Converte para array de DiagnosticoFraqueza ordenado por gravidade
  const resultados: DiagnosticoFraqueza[] = [];

  for (const item of mapaModulos.values()) {
    if (item.totalErros > 0 || item.totalTentativas > 0) {
      const taxa =
        item.totalTentativas > 0
          ? Math.round((item.totalErros / item.totalTentativas) * 100)
          : item.totalErros > 0
          ? 100
          : 0;

      let nivelGravidade: 'CRITICA' | 'ALTA' | 'MODERADA' = 'MODERADA';
      if (item.totalErros >= 4 || taxa >= 60) {
        nivelGravidade = 'CRITICA';
      } else if (item.totalErros >= 2 || taxa >= 35) {
        nivelGravidade = 'ALTA';
      }

      resultados.push({
        macroModuloId: item.macroModuloId,
        titulo: item.titulo,
        totalErros: item.totalErros,
        totalTentativas: item.totalTentativas,
        taxaErro: taxa,
        nivelGravidade,
        pontosCegosIdentificados: Array.from(item.pontosCegos).slice(0, 3),
      });
    }
  }

  // Ordena pelas mais críticas primeiro
  resultados.sort((a, b) => {
    if (a.totalErros !== b.totalErros) {
      return b.totalErros - a.totalErros;
    }
    return b.taxaErro - a.taxaErro;
  });

  return resultados;
}
