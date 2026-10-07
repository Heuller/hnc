// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { COURSE_REGISTRY } from '../content/registry';
import { obterItensVerificacaoSubmodulo, derivarProgresso } from '../domain/progressoEngine';
import { verificarNavegacaoRodapeSubmodulo } from '../domain/portaoSimuladoEngine';
import { getRequiredSectionsForSubmodule } from '../domain/learningEngine';
import { criarItemAttempt, type ItemAttempt } from '../domain/itemAttempts';
import { JORNADA_CONFIG } from '../config/jornada.config';
import { useProgressStore } from '../store/useProgressStore';

describe('MARCO 1 — Diagnóstico e Reprodução TDD dos Bugs 5, 6 e 8', () => {
  const sub21 = COURSE_REGISTRY.find((m) => m.id === 'm2')!.modulosFilhos.find((s) => s.numero === '2.1')!;

  it('FALHA ESPERADA (Bug 5): obterItensVerificacaoSubmodulo deve contar APENAS os checkpoints oficiais (3 itens)', () => {
    // No modelo correto exigido no Marco M1, o pool de verificação deve ter EXATAMENTE 3 checkpoints
    const itens = obterItensVerificacaoSubmodulo(sub21, 'm2');
    
    // Este teste valida que o pool conta exclusivamente os 3 checkpoints canônicos
    expect(itens.length).toBe(3);
    expect(itens.every((it) => it.tipo === 'checkpoint')).toBe(true);
  });

  it('FALHA ESPERADA (Bug 6): Ao responder os 3 checkpoints de 2.1, NÃO deve acusar 6 itens pendentes', () => {
    // Simula respostas apenas para os 3 checkpoints do 2.1:
    // CP1: Errado (tentativa 1)
    // CP2: Certo (tentativa 1)
    // CP3: Certo (tentativa 1)
    const cps = sub21.checkpoints || [];
    const attempts: ItemAttempt[] = [
      criarItemAttempt({
        itemId: cps[0].id,
        submoduloId: '2.1',
        moduloId: 'm2',
        contexto: 'teoria',
        resposta: cps[0].gabarito === 'C' ? 'E' : 'C', // Errou
        gabarito: cps[0].gabarito,
        tentativaN: 1,
      }),
      criarItemAttempt({
        itemId: cps[1].id,
        submoduloId: '2.1',
        moduloId: 'm2',
        contexto: 'teoria',
        resposta: cps[1].gabarito, // Acertou
        gabarito: cps[1].gabarito,
        tentativaN: 1,
      }),
      criarItemAttempt({
        itemId: cps[2].id,
        submoduloId: '2.1',
        moduloId: 'm2',
        contexto: 'teoria',
        resposta: cps[2].gabarito, // Acertou
        gabarito: cps[2].gabarito,
        tentativaN: 1,
      }),
    ];

    // Simula leitura de todas as seções canônicas de 2.1
    const secoesLidas = { '2.1': getRequiredSectionsForSubmodule(sub21) };
    const progressoGlobal = derivarProgresso(attempts, secoesLidas, COURSE_REGISTRY, JORNADA_CONFIG, []);
    const estadoRodape = verificarNavegacaoRodapeSubmodulo('2.1', progressoGlobal, []);

    // Não deve haver itens pendentes nos checkpoints
    expect(progressoGlobal.submodulos['2.1'].itensPendentesIds.length).toBe(0);
    expect(estadoRodape.motivoBloqueioSubmodulo).not.toContain('itens de verificação pendentes');
    expect(estadoRodape.motivoBloqueioSubmodulo).toContain('Aproveitamento insuficiente');
  });

  it('Mecanismo de Refazer Verificação Oficial permite nova rodada (rodada 2) e destrava o gate', () => {
    const cps = sub21.checkpoints || [];
    // Rodada 1: aluno errou 1 item (67%)
    const attemptsRodada1: ItemAttempt[] = [
      criarItemAttempt({
        itemId: cps[0].id,
        submoduloId: '2.1',
        moduloId: 'm2',
        contexto: 'teoria',
        resposta: cps[0].gabarito === 'C' ? 'E' : 'C',
        gabarito: cps[0].gabarito,
        rodadaN: 1,
        isPratica: false,
      }),
      criarItemAttempt({
        itemId: cps[1].id,
        submoduloId: '2.1',
        moduloId: 'm2',
        contexto: 'teoria',
        resposta: cps[1].gabarito,
        gabarito: cps[1].gabarito,
        rodadaN: 1,
        isPratica: false,
      }),
      criarItemAttempt({
        itemId: cps[2].id,
        submoduloId: '2.1',
        moduloId: 'm2',
        contexto: 'teoria',
        resposta: cps[2].gabarito,
        gabarito: cps[2].gabarito,
        rodadaN: 1,
        isPratica: false,
      }),
    ];

    // Rodada 2 oficial: aluno refez a verificação oficial e acertou os 3 itens
    const attemptsRodada2: ItemAttempt[] = [
      ...attemptsRodada1,
      criarItemAttempt({
        itemId: cps[0].id,
        submoduloId: '2.1',
        moduloId: 'm2',
        contexto: 'teoria',
        resposta: cps[0].gabarito, // Acertou na rodada 2
        gabarito: cps[0].gabarito,
        rodadaN: 2,
        isPratica: false,
      }),
      criarItemAttempt({
        itemId: cps[1].id,
        submoduloId: '2.1',
        moduloId: 'm2',
        contexto: 'teoria',
        resposta: cps[1].gabarito,
        gabarito: cps[1].gabarito,
        rodadaN: 2,
        isPratica: false,
      }),
      criarItemAttempt({
        itemId: cps[2].id,
        submoduloId: '2.1',
        moduloId: 'm2',
        contexto: 'teoria',
        resposta: cps[2].gabarito,
        gabarito: cps[2].gabarito,
        rodadaN: 2,
        isPratica: false,
      }),
    ];

    const secoesLidas = { '2.1': getRequiredSectionsForSubmodule(sub21) };
    const progressoGlobal = derivarProgresso(attemptsRodada2, secoesLidas, COURSE_REGISTRY, JORNADA_CONFIG, []);
    
    // A nota oficial da rodada mais recente deve ser 100% e aprovar no portão
    expect(progressoGlobal.submodulos['2.1'].aproveitamentoPortaoPercent).toBe(100);
    expect(progressoGlobal.submodulos['2.1'].aprovadoNoPortao).toBe(true);
    expect(progressoGlobal.submodulos['2.1'].concluido).toBe(true);
  });

  it('Ajuste 7: Com 2.2 e 2.3 já concluídos, ao aprovar 2.1 o botão de avanço aponta para 2.4', () => {
    const cps = sub21.checkpoints || [];
    const sub22 = COURSE_REGISTRY.find((m) => m.id === 'm2')!.modulosFilhos.find((s) => s.numero === '2.2')!;
    const sub23 = COURSE_REGISTRY.find((m) => m.id === 'm2')!.modulosFilhos.find((s) => s.numero === '2.3')!;

    // 2.1 aprovado (3 de 3 acertos)
    const attempts = [
      ...cps.map((cp) =>
        criarItemAttempt({
          itemId: cp.id,
          submoduloId: '2.1',
          moduloId: 'm2',
          contexto: 'teoria',
          resposta: cp.gabarito,
          gabarito: cp.gabarito,
          rodadaN: 1,
          isPratica: false,
        })
      ),
      // 2.2 aprovado
      ...(sub22.checkpoints || []).map((cp) =>
        criarItemAttempt({
          itemId: cp.id,
          submoduloId: '2.2',
          moduloId: 'm2',
          contexto: 'teoria',
          resposta: cp.gabarito,
          gabarito: cp.gabarito,
          rodadaN: 1,
          isPratica: false,
        })
      ),
      // 2.3 aprovado
      ...(sub23.checkpoints || []).map((cp) =>
        criarItemAttempt({
          itemId: cp.id,
          submoduloId: '2.3',
          moduloId: 'm2',
          contexto: 'teoria',
          resposta: cp.gabarito,
          gabarito: cp.gabarito,
          rodadaN: 1,
          isPratica: false,
        })
      ),
    ];

    const secoesLidas = {
      '2.1': getRequiredSectionsForSubmodule(sub21),
      '2.2': getRequiredSectionsForSubmodule(sub22),
      '2.3': getRequiredSectionsForSubmodule(sub23),
    };

    const progressoGlobal = derivarProgresso(attempts, secoesLidas, COURSE_REGISTRY, JORNADA_CONFIG, []);
    const estadoRodape21 = verificarNavegacaoRodapeSubmodulo('2.1', progressoGlobal, []);

    expect(estadoRodape21.podeAvancarProximoSubmodulo).toBe(true);
    // Deve saltar 2.2 e 2.3 que já estão concluídos e levar diretamente ao 2.4!
    expect(estadoRodape21.proximoSubmoduloNumero).toBe('2.4');
  });

  it('Integração Completa M1 na useProgressStore: Backup Lógico, Rodadas Oficiais e Desbloqueio do Portão', () => {
    // 1. Testa backup lógico
    const backupJson = useProgressStore.getState().gerarBackupLogicoJSON();
    const backupParsed = JSON.parse(backupJson);
    expect(backupParsed).toHaveProperty('itemAttempts');
    expect(backupParsed).toHaveProperty('tentativas');
    expect(backupParsed).toHaveProperty('secoesVisualizadas');
    expect(backupParsed).toHaveProperty('historicoSimulados');
    expect(backupParsed.versao).toBe('backup-logico-m1');

    // 2. Testa ação de refazer verificação oficial
    useProgressStore.getState().iniciarNovaRodadaVerificacao('2.1');
    expect(useProgressStore.getState().rodadasAtivas['2.1']).toBeGreaterThanOrEqual(2);
  });
});
