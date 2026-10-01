import type { MacroModulo, ModuloFilho } from './schemas/modulo.schema';

/**
 * Retorna o tempo estimado em minutos de um submódulo.
 */
export function getTempoEstimadoSubmodulo(sub: ModuloFilho): number {
  return sub.tempoEstimadoMinutos || 0;
}

/**
 * Calcula o tempo total estimado em minutos de um Macro-Módulo somando seus submódulos.
 * Fonte Única de Verdade (elimina dados hardcoded inconsistentes).
 */
export function getTempoTotalMacroModulo(macro: MacroModulo): number {
  return macro.modulosFilhos.reduce(
    (acc, sub) => acc + getTempoEstimadoSubmodulo(sub),
    0
  );
}

/**
 * Retorna o total de checkpoints presentes em um submódulo.
 */
export function getCheckpointsCountSubmodulo(sub: ModuloFilho): number {
  return sub.checkpoints.length;
}

/**
 * Retorna quantos checkpoints daquele submódulo específico foram respondidos pelo usuário.
 */
export function getCheckpointsFeitosSubmodulo(
  sub: ModuloFilho,
  checkpointsRespondidos: Record<string, string>
): number {
  return sub.checkpoints.filter((cp) => checkpointsRespondidos[cp.id] !== undefined).length;
}

/**
 * Retorna o total de checkpoints em um Macro-Módulo.
 */
export function getCheckpointsCountMacroModulo(macro: MacroModulo): number {
  return macro.modulosFilhos.reduce(
    (acc, sub) => acc + getCheckpointsCountSubmodulo(sub),
    0
  );
}

/**
 * Retorna quantos checkpoints de um Macro-Módulo foram respondidos.
 */
export function getCheckpointsFeitosMacroModulo(
  macro: MacroModulo,
  checkpointsRespondidos: Record<string, string>
): number {
  return macro.modulosFilhos.reduce(
    (acc, sub) => acc + getCheckpointsFeitosSubmodulo(sub, checkpointsRespondidos),
    0
  );
}

/**
 * Retorna a carga horária estimada total de todo o curso (em minutos).
 */
export function getTempoTotalCurso(macros: MacroModulo[]): number {
  return macros.reduce((acc, m) => acc + getTempoTotalMacroModulo(m), 0);
}

/**
 * Retorna o total global de checkpoints do curso inteiro.
 */
export function getCheckpointsTotalCurso(macros: MacroModulo[]): number {
  return macros.reduce((acc, m) => acc + getCheckpointsCountMacroModulo(m), 0);
}

/**
 * Retorna o total global de checkpoints respondidos no curso inteiro.
 */
export function getCheckpointsFeitosCurso(
  macros: MacroModulo[],
  checkpointsRespondidos: Record<string, string>
): number {
  return macros.reduce(
    (acc, m) => acc + getCheckpointsFeitosMacroModulo(m, checkpointsRespondidos),
    0
  );
}

/**
 * Retorna a quantidade de submódulos concluídos/lidos em um Macro-Módulo.
 */
export function getSubmodulosLidosCount(
  macro: MacroModulo,
  modulosLidosIds: string[]
): number {
  return macro.modulosFilhos.filter((s) => modulosLidosIds.includes(s.id)).length;
}

/**
 * Retorna a porcentagem de progresso de um Macro-Módulo (0 a 100).
 */
export function getMacroModuloProgressoPercent(
  macro: MacroModulo,
  modulosLidosIds: string[]
): number {
  const total = macro.modulosFilhos.length;
  if (total === 0) return 0;
  const lidos = getSubmodulosLidosCount(macro, modulosLidosIds);
  return Math.round((lidos / total) * 100);
}

/**
 * Retorna a porcentagem de progresso global de todo o curso (0 a 100).
 */
export function getCursoProgressoPercent(
  macros: MacroModulo[],
  modulosLidosIds: string[]
): number {
  const allSubs = macros.flatMap((m) => m.modulosFilhos);
  if (allSubs.length === 0) return 0;
  const lidos = allSubs.filter((s) => modulosLidosIds.includes(s.id)).length;
  return Math.round((lidos / allSubs.length) * 100);
}
