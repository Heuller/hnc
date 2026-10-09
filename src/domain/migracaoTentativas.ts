import { COURSE_REGISTRY } from '../content/registry';
import type { ItemAttempt } from './itemAttempts';
import { criarItemAttempt } from './itemAttempts';
import type { TentativaRegistro } from './tentativas';

const HNC_MIGRACAO_REALIZADA_KEY = 'hnc_migracao_item_attempts_v1_done';
const HNC_BACKUP_STORAGE_KEY = 'hnc_backup_pre_rodada5b';

export interface DadosParaMigracao {
  checkpointsRespondidos?: Record<string, 'C' | 'E'>;
  tentativas?: TentativaRegistro[];
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
 * Migra o progresso histórico já salvo (teoria e Jornada) para o registro canônico item_attempts (Regra 1.5).
 * Realiza backup prévio, preserva 100% dos dados e reconcilia duplicatas de forma idempotente.
 */
export function executarMigracaoHistorico(
  dados: DadosParaMigracao,
  attemptsExistentes: ItemAttempt[] = []
): ResultadoMigracao {
  const userId = dados.userId || 'usuario-local';

  // 1. Backup prévio de segurança
  let backupRealizado = false;
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    try {
      const backupData = {
        data: new Date().toISOString(),
        checkpoints: dados.checkpointsRespondidos,
        tentativas: dados.tentativas,
        attemptsAtuais: attemptsExistentes,
      };
      localStorage.setItem(HNC_BACKUP_STORAGE_KEY, JSON.stringify(backupData));
      backupRealizado = true;
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

export const HNC_MIGRACAO_PORTAIS_KEY = 'hnc_migracao_portais_revisao_v1_done';
export const HNC_BACKUP_PORTAIS_KEY = 'hnc_backup_pre_portais_migracao';

export interface ResultadoMigracaoPortais {
  migrado: boolean;
  totalPortaisMigrados: number;
  tentativasAtualizadas: TentativaRegistro[];
  backupRealizado: boolean;
  backupChave: string;
}

/**
 * Migra o histórico de tentativas dos antigos Portais de Verificação (portal-m2 a portal-m10)
 * para os novos Submódulos de Revisão Científica (revisao-m2 a revisao-m10), preservando
 * todas as tentativas de submódulos (ex: 2.2 e 2.3 concluídos) e liberados (2.1 e 2.5 intacto).
 */
export function migrarTentativasPortaisParaRevisao(
  tentativas: TentativaRegistro[] = []
): ResultadoMigracaoPortais {
  let backupRealizado = false;
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    try {
      localStorage.setItem(
        HNC_BACKUP_PORTAIS_KEY,
        JSON.stringify({
          data: new Date().toISOString(),
          tentativasOriginais: tentativas,
        })
      );
      backupRealizado = true;
    } catch (e) {
      console.warn('[MigracaoPortais] Falha ao gravar backup local:', e);
    }
  }

  let totalPortaisMigrados = 0;
  const tentativasAtualizadas: TentativaRegistro[] = [...tentativas];
  const idsExistentes = new Set(tentativas.map((t) => `${t.targetId}:${t.id}`));

  for (const t of tentativas) {
    if (t.tipo === 'portal_revisao' || (t.targetId && t.targetId.startsWith('portal-'))) {
      const novoTargetId = t.targetId.replace('portal-', 'revisao-');
      const chaveNova = `${novoTargetId}:migrado_${t.id}`;
      const chaveDireta = `${novoTargetId}:${t.id}`;

      if (!idsExistentes.has(chaveNova) && !idsExistentes.has(chaveDireta)) {
        const tentativaMigrada: TentativaRegistro = {
          ...t,
          id: `migrado_${t.id}`,
          tipo: 'submodulo_revisao',
          targetId: novoTargetId,
        };
        tentativasAtualizadas.push(tentativaMigrada);
        idsExistentes.add(chaveNova);
        totalPortaisMigrados++;
      }
    }
  }

  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    try {
      localStorage.setItem(HNC_MIGRACAO_PORTAIS_KEY, 'true');
    } catch {
      // ignore
    }
  }

  return {
    migrado: true,
    totalPortaisMigrados,
    tentativasAtualizadas,
    backupRealizado,
    backupChave: HNC_BACKUP_PORTAIS_KEY,
  };
}

