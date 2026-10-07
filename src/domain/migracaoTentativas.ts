import { COURSE_REGISTRY } from '../content/registry';
import type { ItemAttempt } from './itemAttempts';
import { criarItemAttempt } from './itemAttempts';
import type { TentativaRegistro } from './tentativas';

export const HNC_MIGRACAO_REALIZADA_KEY = 'hnc_migracao_item_attempts_v1_done';
export const HNC_BACKUP_STORAGE_KEY = 'hnc_backup_pre_rodada5b';
export const HNC_BACKUP_LOGICO_KEY = 'hnc_backup_logico_pre_m1';

export interface DadosParaMigracao {
  checkpointsRespondidos?: Record<string, 'C' | 'E'>;
  tentativas?: TentativaRegistro[];
  secoesVisualizadas?: Record<string, string[]>;
  historicoSimulados?: any[];
  itemAttempts?: ItemAttempt[];
  userId?: string;
}

export interface ResultadoMigracao {
  migrado: boolean;
  totalCheckpointsMigrados: number;
  totalTentativasJornadaMigradas: number;
  attemptsGeradas: ItemAttempt[];
  backupRealizado: boolean;
  backupChave: string;
}

/**
 * Gera um payload de backup lógico em JSON dos dados do usuário (Regra de Segurança do Marco 1).
 */
export function criarPayloadBackupLogico(
  dados: DadosParaMigracao,
  attemptsExistentes: ItemAttempt[] = []
): string {
  return JSON.stringify(
    {
      timestamp: new Date().toISOString(),
      versao: 'backup-logico-m1',
      checkpoints: dados.checkpointsRespondidos || {},
      tentativas: dados.tentativas || [],
      secoesVisualizadas: dados.secoesVisualizadas || {},
      historicoSimulados: dados.historicoSimulados || [],
      itemAttempts: dados.itemAttempts || attemptsExistentes || [],
    },
    null,
    2
  );
}

/**
 * Migra o progresso histórico já salvo (teoria e Jornada) para o registro canônico item_attempts (Regra 1.5).
 * Realiza backup prévio lógico de 100% dos dados (itemAttempts, tentativas, secoesVisualizadas, historicoSimulados)
 * de forma append-only e estritamente idempotente.
 */
export function executarMigracaoHistorico(
  dados: DadosParaMigracao,
  attemptsExistentes: ItemAttempt[] = []
): ResultadoMigracao {
  const userId = dados.userId || 'usuario-local';

  // 1. Backup prévio de segurança idempotente
  let backupRealizado = false;
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    try {
      const backupExistente = localStorage.getItem(HNC_BACKUP_LOGICO_KEY) || localStorage.getItem(HNC_BACKUP_STORAGE_KEY);
      if (!backupExistente) {
        const backupJson = criarPayloadBackupLogico(dados, attemptsExistentes);
        localStorage.setItem(HNC_BACKUP_LOGICO_KEY, backupJson);
        localStorage.setItem(HNC_BACKUP_STORAGE_KEY, backupJson);
        backupRealizado = true;
      } else {
        backupRealizado = true; // Já garantido previamente
      }
    } catch (e) {
      console.warn('[Migracao] Falha ao gravar backup local:', e);
    }
  }

  const mapaExistentes = new Set(
    attemptsExistentes.map((a) => `${a.user_id}:${a.item_id}:${a.tentativa_n}`)
  );

  const novasAttempts: ItemAttempt[] = [...attemptsExistentes];
  let totalCheckpointsMigrados = 0;
  let totalTentativasJornadaMigradas = 0;

  // Dicionário de busca rápida de checkpoints no COURSE_REGISTRY
  const allSubmodules = COURSE_REGISTRY.flatMap((m) =>
    m.modulosFilhos.map((sub) => ({ sub, moduloId: m.id }))
  );

  const cpMap = new Map<string, { cp: any; subNumero: string; moduloId: string }>();
  for (const { sub, moduloId } of allSubmodules) {
    for (const cp of sub.checkpoints || []) {
      cpMap.set(cp.id, { cp, subNumero: sub.numero, moduloId });
    }
  }

  // 2. Migração dos checkpoints da Teoria
  if (dados.checkpointsRespondidos) {
    for (const [cpId, resposta] of Object.entries(dados.checkpointsRespondidos)) {
      const chaveDeduplicacao = `${userId}:${cpId}:1`;
      if (!mapaExistentes.has(chaveDeduplicacao)) {
        const info = cpMap.get(cpId);
        if (info) {
          const attempt = criarItemAttempt(
            {
              userId,
              itemId: cpId,
              submoduloId: info.subNumero,
              moduloId: info.moduloId,
              contexto: 'teoria',
              resposta: resposta as 'C' | 'E',
              gabarito: info.cp.gabarito,
              tentativaN: 1,
            },
            novasAttempts
          );
          novasAttempts.push(attempt);
          mapaExistentes.add(chaveDeduplicacao);
          totalCheckpointsMigrados++;
        }
      }
    }
  }

  // 3. Migração das tentativas de lote da Jornada
  if (dados.tentativas && Array.isArray(dados.tentativas)) {
    for (const t of dados.tentativas) {
      if (t.respostas && typeof t.respostas === 'object') {
        for (const [qId, r] of Object.entries(t.respostas)) {
          const chaveDeduplicacao = `${userId}:${qId}:1`;
          if (!mapaExistentes.has(chaveDeduplicacao)) {
            const info = cpMap.get(qId);
            const subId = info ? info.subNumero : t.targetId || '1.1';
            const modId = info ? info.moduloId : t.moduloId || 'm1';
            const attempt = criarItemAttempt(
              {
                userId,
                itemId: qId,
                submoduloId: subId,
                moduloId: modId,
                contexto: t.tipo === 'desafio_modulo' ? 'simulado' : 'jornada',
                resposta: r.resposta as 'C' | 'E',
                gabarito: r.gabarito,
                tentativaN: 1,
                criadoEm: t.criadoEm,
              },
              novasAttempts
            );
            novasAttempts.push(attempt);
            mapaExistentes.add(chaveDeduplicacao);
            totalTentativasJornadaMigradas++;
          }
        }
      }
    }
  }

  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    try {
      localStorage.setItem(HNC_MIGRACAO_REALIZADA_KEY, 'true');
    } catch {
      // ignore
    }
  }

  return {
    migrado: true,
    totalCheckpointsMigrados,
    totalTentativasJornadaMigradas,
    attemptsGeradas: novasAttempts,
    backupRealizado,
    backupChave: HNC_BACKUP_STORAGE_KEY,
  };
}
