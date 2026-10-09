import { describe, it, expect } from 'vitest';
import { migrarTentativasPortaisParaRevisao } from '../domain/migracaoTentativas';
import { deriveJornadaState } from '../domain/jornadaEngine';
import { ALL_COURSE_MODULES } from '../content/registry';
import { criarTentativaRegistro } from '../domain/tentativas';

describe('Marco R5: Migração de Histórico dos Portais e Preservação de Submódulos', () => {
  it('deve migrar tentativas de portal-m2 para revisao-m2 sem perda de métricas', () => {
    const respostasMock: Record<string, any> = {};
    for (let i = 1; i <= 20; i++) {
      const acertou = i <= 18; // 18 acertos, 2 erros (aprovado 90%)
      respostasMock[`q_${i}`] = {
        questionId: `q_${i}`,
        resposta: acertou ? 'C' : 'E',
        gabarito: 'C',
        acertou,
        secaoId: '2.1',
      };
    }

    const tentativaLegadaPortal = criarTentativaRegistro({
      userId: 'user-heuller',
      tipo: 'portal_revisao',
      targetId: 'portal-m2',
      moduloId: 'm2',
      totalItens: 20,
      respostas: respostasMock,
      foraDaTrilha: false,
    });

    expect(tentativaLegadaPortal.aprovado).toBe(true);
    expect(tentativaLegadaPortal.acertos).toBe(18);

    const resultado = migrarTentativasPortaisParaRevisao([tentativaLegadaPortal]);

    expect(resultado.migrado).toBe(true);
    expect(resultado.totalPortaisMigrados).toBe(1);

    const tentativaMigrada = resultado.tentativasAtualizadas.find(
      (t) => t.targetId === 'revisao-m2'
    );
    expect(tentativaMigrada).toBeDefined();
    expect(tentativaMigrada?.tipo).toBe('submodulo_revisao');
    expect(tentativaMigrada?.aprovado).toBe(true);
    expect(tentativaMigrada?.acertos).toBe(18);
    expect(tentativaMigrada?.erros).toBe(2);
    expect(tentativaMigrada?.notaLiquida).toBe(16);
    expect(tentativaMigrada?.aproveitamento).toBe(0.9);
  });

  it('deve ser idempotente na migração de portais (não duplicar tentativas se rodar novamente)', () => {
    const tentativaLegada = criarTentativaRegistro({
      userId: 'user-heuller',
      tipo: 'portal_revisao',
      targetId: 'portal-m3',
      moduloId: 'm3',
      totalItens: 20,
      respostas: {},
    });

    const primeira = migrarTentativasPortaisParaRevisao([tentativaLegada]);
    expect(primeira.totalPortaisMigrados).toBe(1);

    const segunda = migrarTentativasPortaisParaRevisao(primeira.tentativasAtualizadas);
    expect(segunda.totalPortaisMigrados).toBe(0);
    expect(segunda.tentativasAtualizadas.length).toBe(primeira.tentativasAtualizadas.length);
  });

  it('deve preservar 100% dos submódulos concluídos (2.2 e 2.3) e liberados (2.1)', () => {
    // Simula tentativas históricas do usuário para 2.2 e 2.3
    const tentativa22 = criarTentativaRegistro({
      userId: 'user-heuller',
      tipo: 'verificacao_submodulo',
      targetId: '2.2',
      moduloId: 'm2',
      totalItens: 8,
      respostas: {
        cp1: { questionId: 'cp1', resposta: 'C', gabarito: 'C', acertou: true },
        cp2: { questionId: 'cp2', resposta: 'C', gabarito: 'C', acertou: true },
        cp3: { questionId: 'cp3', resposta: 'C', gabarito: 'C', acertou: true },
        cp4: { questionId: 'cp4', resposta: 'C', gabarito: 'C', acertou: true },
        cp5: { questionId: 'cp5', resposta: 'C', gabarito: 'C', acertou: true },
        cp6: { questionId: 'cp6', resposta: 'C', gabarito: 'C', acertou: true },
        cp7: { questionId: 'cp7', resposta: 'C', gabarito: 'C', acertou: true },
        cp8: { questionId: 'cp8', resposta: 'C', gabarito: 'C', acertou: true },
      },
    });

    const tentativa23 = criarTentativaRegistro({
      userId: 'user-heuller',
      tipo: 'verificacao_submodulo',
      targetId: '2.3',
      moduloId: 'm2',
      totalItens: 8,
      respostas: {
        cp1: { questionId: 'cp1', resposta: 'C', gabarito: 'C', acertou: true },
        cp2: { questionId: 'cp2', resposta: 'C', gabarito: 'C', acertou: true },
        cp3: { questionId: 'cp3', resposta: 'C', gabarito: 'C', acertou: true },
        cp4: { questionId: 'cp4', resposta: 'C', gabarito: 'C', acertou: true },
        cp5: { questionId: 'cp5', resposta: 'C', gabarito: 'C', acertou: true },
        cp6: { questionId: 'cp6', resposta: 'C', gabarito: 'C', acertou: true },
        cp7: { questionId: 'cp7', resposta: 'C', gabarito: 'C', acertou: true },
        cp8: { questionId: 'cp8', resposta: 'C', gabarito: 'C', acertou: true },
      },
    });

    const todasTentativas = [tentativa22, tentativa23];
    const resultado = migrarTentativasPortaisParaRevisao(todasTentativas);

    // As tentativas de 2.2 e 2.3 devem permanecer inalteradas
    const t22 = resultado.tentativasAtualizadas.find((t) => t.targetId === '2.2');
    const t23 = resultado.tentativasAtualizadas.find((t) => t.targetId === '2.3');

    expect(t22).toBeDefined();
    expect(t22?.aprovado).toBe(true);
    expect(t23).toBeDefined();
    expect(t23?.aprovado).toBe(true);
  });

  it('deve garantir que o submódulo 2.5 (MARC 21 & Autores) permaneça intacto no catálogo de cursos', () => {
    const moduloM25 = ALL_COURSE_MODULES.find((m) => m.id === 'm2-5');
    expect(moduloM25).toBeDefined();

    const sub25 = moduloM25?.modulosFilhos.find((s) => s.numero === '2.5');
    expect(sub25).toBeDefined();
    expect(sub25?.titulo).toContain('Órgãos Públicos');
    expect(sub25?.checkpoints.length).toBeGreaterThan(0);
    expect(sub25?.autoresChave).toContain('Constituição da República Federativa do Brasil de 1988 (CF/88)');
    expect(sub25?.autoresChave).toContain('Formato MARC 21 Bibliográfico e de Autoridades (Campos 110 e 710)');
  });

  it('deve refletir a aprovação no estado da Jornada ao ler tanto tentativas migradas quanto legadas', () => {
    const tentativaLegadaPortal = criarTentativaRegistro({
      userId: 'user-heuller',
      tipo: 'portal_revisao',
      targetId: 'portal-m2',
      moduloId: 'm2',
      totalItens: 20,
      respostas: {
        ...Array.from({ length: 18 }).reduce<Record<string, any>>((acc, _, idx) => {
          acc[`q_${idx}`] = { questionId: `q_${idx}`, resposta: 'C', gabarito: 'C', acertou: true };
          return acc;
        }, {}),
      },
    });

    const jornadaState = deriveJornadaState({
      modulos: ALL_COURSE_MODULES,
      tentativas: [tentativaLegadaPortal],
      secoesVisualizadas: {},
      modoLivre: true,
    });

    // A nova etapa de revisão científica deve reconhecer a conclusão da tentativa legada
    const etapaRevisaoM2 = jornadaState.etapas['revisao-m2'];
    expect(etapaRevisaoM2).toBeDefined();
    expect(etapaRevisaoM2.aprovado).toBe(true);
    expect(etapaRevisaoM2.status).toBe('concluida');

    // E o alias legado portal-m2 também deve manter status concluida
    const etapaPortalM2 = jornadaState.etapas['portal-m2'];
    expect(etapaPortalM2).toBeDefined();
    expect(etapaPortalM2.status).toBe('concluida');
  });
});
