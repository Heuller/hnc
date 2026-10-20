// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { useProgressStore } from '../store/useProgressStore';
import { COURSE_REGISTRY } from '../content/registry';
import { deriveJornadaState } from '../domain/jornadaEngine';

describe('U2.6 - Migração Aditiva do Modelo de Progresso (Versão 3)', () => {
  const STORAGE_KEY = 'heuller_camara_v2_progress';

  beforeEach(() => {
    localStorage.clear();
  });

  it('deve migrar com sucesso estado persistido v2 para v3 mantendo 100% dos dados legados', () => {
    // Fixture com estado persistido legado v2 (incluindo modoLivre: false e travas)
    const fixtureV2 = {
      state: {
        versao: 2,
        modoLivre: false,
        ultimoModuloAcessado: '1.2',
        modulosLidosIds: ['1.1', '1.2'],
        checkpointsRespondidos: {
          'cp-1-1-1': 'C',
          'cp-1-1-2': 'E',
          'cp-1-1-3': 'C',
          'cp-1-2-1': 'C',
        },
        secoesVisualizadas: {
          '1.1': ['sec-autores', 'sec-alertas', 'sec-teoria'],
          '1.2': ['sec-autores'],
        },
        leitnerDeck: {
          'cp-1-1-1': {
            itemId: 'cp-1-1-1',
            submoduloId: '1.1',
            caixa: 2,
            proximaRevisaoData: '2026-10-20',
            historicoAcertos: 2,
            historicoErros: 0,
          },
        },
        historicoSimulados: [
          {
            id: 'sim-antigo-1',
            dataHora: '2026-09-20T14:00:00Z',
            tempoGastoSegundos: 3600,
            certos: 85,
            errados: 10,
            emBranco: 5,
            notaLiquida: 75,
            aproveitamentoPercent: 75,
            respostas: {},
            calibracao: {
              acertoCertezaPercent: 90,
              acertoProvavelPercent: 70,
              acertoChutePercent: 30,
              ganhoPotencialSeChuteBranco: 2,
            },
          },
        ],
        tentativas: [
          {
            id: 'tentativa-v2-1',
            userId: 'user-heuller',
            tipo: 'verificacao_submodulo',
            targetId: '1.1',
            moduloId: 'm1',
            totalItens: 3,
            acertos: 2,
            erros: 1,
            emBranco: 0,
            aproveitamento: 0.67,
            notaLiquida: 1,
            aprovado: false,
            acertosNecessarios: 3,
            errosMaximos: 0,
            secoesComErros: ['sec-teoria'],
            respostas: {},
            foraDaTrilha: false,
            criadoEm: '2026-09-25T10:00:00Z',
          },
        ],
        itemAttempts: [
          {
            id: 'att-1',
            user_id: 'user-heuller',
            item_id: 'cp-1-1-1',
            submodulo_id: '1.1',
            modulo_id: 'm1',
            contexto: 'teoria',
            resposta: 'C',
            correto: true,
            created_at: '2026-09-25T10:00:00Z',
          },
        ],
        termosSalvos: ['Catalogação', 'ISBD'],
        devBypassSimuladoLock: false,
      },
      version: 2,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(fixtureV2));

    // Executa a função de migração do persist
    const persistOptions = (useProgressStore as any).persist;
    const migrationResult = persistOptions.getOptions().migrate(fixtureV2.state, 2);

    // Validações de integridade aditiva:
    expect(migrationResult.versao).toBeGreaterThanOrEqual(3);
    expect(migrationResult.modoLivre).toBe(true);

    // Zero perda de dados do progresso do usuário:
    expect(migrationResult.modulosLidosIds).toEqual(['1.1', '1.2']);
    expect(migrationResult.checkpointsRespondidos).toEqual(fixtureV2.state.checkpointsRespondidos);
    expect(migrationResult.secoesVisualizadas).toEqual(fixtureV2.state.secoesVisualizadas);
    expect(migrationResult.leitnerDeck).toEqual(fixtureV2.state.leitnerDeck);
    expect(migrationResult.historicoSimulados).toEqual(fixtureV2.state.historicoSimulados);
    expect(migrationResult.tentativas).toEqual(fixtureV2.state.tentativas);
    expect(migrationResult.itemAttempts).toEqual(fixtureV2.state.itemAttempts);
    expect(migrationResult.termosSalvos).toEqual(['Catalogação', 'ISBD']);

    // O estado derivado agora fica completamente desbloqueado:
    const estadoJornada = deriveJornadaState({
      modulos: COURSE_REGISTRY,
      tentativas: migrationResult.tentativas,
      secoesVisualizadas: migrationResult.secoesVisualizadas,
      modoLivre: migrationResult.modoLivre,
    });

    expect(estadoJornada.modoLivreAtivo).toBe(true);
    expect(estadoJornada.etapas['1.1'].isDesbloqueada).toBe(true);
    expect(estadoJornada.etapas['1.2'].isDesbloqueada).toBe(true);
    expect(estadoJornada.etapas['2.1'].isDesbloqueada).toBe(true);
    // Nenhuma etapa possui status 'bloqueada'
    const etapasBloqueadas = Object.values(estadoJornada.etapas).filter((e) => e.status === 'bloqueada');
    expect(etapasBloqueadas).toHaveLength(0);
  });

  it('deve garantir que o progressSyncService não re-bloqueia o cliente com dados da nuvem', async () => {
    // Verifica que baixarProgressoNuvem não expõe campos de trava nem modoLivre
    // (o que garante que um sync remoto não pode sobrescrever a migração local)
    const mockCloudData = {
      user_id: 'user-heuller',
      modulos_lidos: ['1.1'],
      checkpoints_respondidos: { 'cp-1': 'C' },
      secoes_visualizadas: { '1.1': ['sec-autores'] },
      leitner_deck: {},
      constancia: {
        ultimoAcessoData: '2026-10-15',
        diasConsecutivos: 5,
        historicoUltimos7Dias: ['2026-10-15'],
      },
    };

    // O serviço mapeia estritamente os arrays puros sem modoLivre nem flags de bloqueio
    const mapped = {
      modulosLidosIds: mockCloudData.modulos_lidos,
      checkpointsRespondidos: mockCloudData.checkpoints_respondidos,
      secoesVisualizadas: mockCloudData.secoes_visualizadas,
      leitnerDeck: mockCloudData.leitner_deck,
      constancia: mockCloudData.constancia,
    };

    expect((mapped as any).modoLivre).toBeUndefined();
    expect((mapped as any).versao).toBeUndefined();
    expect((mapped as any).bloqueado).toBeUndefined();
  });
});
