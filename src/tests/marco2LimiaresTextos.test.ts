import { describe, it, expect } from 'vitest';
import { JORNADA_CONFIG, getDescricaoLimiar } from '../config/jornada.config';
import { deriveJornadaState } from '../domain/jornadaEngine';
import { getRequiredSectionsForSubmodule } from '../domain/learningEngine';
import type { MacroModulo } from '../domain/types';

function criarMockMacroModulo(numero: number, numSubmodulos = 4, checkpointsPorSub = 8): MacroModulo {
  const macroId = `m${numero}`;
  return {
    id: macroId,
    codigo: `M${numero}`,
    numero: numero,
    titulo: `Módulo de Teste ${numero}`,
    titulo_curto: `M${numero}`,
    subtitulo: `Subtítulo do Módulo ${numero}`,
    descricao: `Descrição do Módulo ${numero}`,
    status: 'disponivel',
    simuladoDisponivel: true,
    modulosFilhos: Array.from({ length: numSubmodulos }, (_, idx) => {
      const subNum = `${numero}.${idx + 1}`;
      return {
        id: `sub-${numero}-${idx + 1}`,
        numero: subNum,
        titulo: `Submódulo de Teste ${subNum}`,
        titulo_curto: `Sub ${subNum}`,
        descricaoCurta: `Descrição de teste ${subNum}`,
        tempoEstimadoMinutos: 20,
        autoresChave: ['Autor Teste'],
        alertasCebraspe: ['Alerta Teste'],
        teoriaDensaMarkdown: 'Texto de teoria para testes',
        checkpoints: Array.from({ length: checkpointsPorSub }, (_, cIdx) => ({
          id: `cp-${numero}-${idx + 1}-${cIdx + 1}`,
          pergunta: `Questão ${cIdx + 1}`,
          item: `Assertiva de teste ${cIdx + 1} do submódulo ${subNum}`,
          gabarito: (cIdx % 2 === 0 ? 'C' : 'E') as 'C' | 'E',
          justificativa: 'Justificativa de teste',
        })),
        mnemonicos: {
          timeline: [],
          autores: [],
          pegadinhas: [],
        },
      };
    }),
  };
}

describe('Marco 2 (M2) - Limiares e Textos Canônicos (TDD)', () => {
  it('1. Deve ter os limiares canônicos de 85% para verificação e 80% para simulado de 100Q na JORNADA_CONFIG', () => {
    expect(JORNADA_CONFIG.minimoVerificacao).toBe(0.85);
    expect(JORNADA_CONFIG.minimoSimuladoModulo).toBe(0.80);
    expect(JORNADA_CONFIG.desafioItensTotal).toBe(100);
    expect(JORNADA_CONFIG.desafioAcertosMinimo).toBe(80);
    expect(JORNADA_CONFIG.desafioErrosMaximo).toBe(20);
    expect(JORNADA_CONFIG.portalItensTotal).toBe(20);
    expect(JORNADA_CONFIG.portalAcertosMinimo).toBe(17);
    expect(JORNADA_CONFIG.portalErrosMaximo).toBe(3);
  });

  it('2. Deve formatar a regra do Desafio de Módulo com 80 acertos e 20 erros máximos (80%), e não 85%', () => {
    const descDesafio = getDescricaoLimiar(100, JORNADA_CONFIG.minimoSimuladoModulo);
    expect(descDesafio).toBe('80 acertos em 100 itens (no máximo 20 erros)');
  });

  it('3. jornadaEngine: a etapa de desafio de módulo deve registrar acertosNecessarios = 80 e errosMaximos = 20', () => {
    const modulosMock: MacroModulo[] = [criarMockMacroModulo(1, 1, 8)];

    const st = deriveJornadaState({
      modulos: modulosMock,
      tentativas: [],
      secoesVisualizadas: {},
    });

    const desafio = st.etapas['desafio-m1'];
    expect(desafio).toBeDefined();
    expect(desafio.totalItens).toBe(100);
    expect(desafio.acertosNecessarios).toBe(80);
    expect(desafio.errosMaximos).toBe(20);
    expect(desafio.descricaoRegra).toBe('80 acertos em 100 itens (no máximo 20 erros)');
  });

  it('4. jornadaEngine: texto de desbloqueio para 2.1 deve exigir 80% no Desafio M1 (não 85%)', () => {
    const modulosMock: MacroModulo[] = [
      criarMockMacroModulo(1, 1, 8),
      criarMockMacroModulo(2, 1, 8),
    ];

    const st = deriveJornadaState({
      modulos: modulosMock,
      tentativas: [],
      secoesVisualizadas: {},
    });

    const sub21 = st.etapas['2.1'];
    expect(sub21).toBeDefined();
    expect(sub21.requisitoDesbloqueio).toBe('Conclua o Desafio M1 com 80% ou mais para liberar 2.1.');
    expect(sub21.requisitoDesbloqueio).not.toContain('85%');
  });

  it('5. jornadaEngine: texto de desbloqueio do Portal P(k) deve exigir 80% no Desafio do Módulo (não 85%)', () => {
    const modulosMock: MacroModulo[] = [
      criarMockMacroModulo(1, 1, 8),
      criarMockMacroModulo(2, 1, 8),
    ];

    const st = deriveJornadaState({
      modulos: modulosMock,
      tentativas: [],
      secoesVisualizadas: {},
    });

    const portalM2 = st.etapas['portal-m2'];
    expect(portalM2).toBeDefined();
    expect(portalM2.requisitoDesbloqueio).toBe('Conclua o Desafio do Módulo M2 com 80% ou mais para liberar o Portal de Revisão P(2).');
    expect(portalM2.requisitoDesbloqueio).not.toContain('85%');
  });

  it('6. jornadaEngine: proximoPasso de desafio_modulo deve informar mínimo 80 acertos (não 85 acertos)', () => {
    const modulo1 = criarMockMacroModulo(1, 1, 8);
    const submodulo = modulo1.modulosFilhos[0];

    const respostas: Record<string, any> = {};
    for (let i = 1; i <= 8; i++) {
      const qId = `cp-1-1-${i}`;
      respostas[qId] = { questionId: qId, resposta: 'C', gabarito: 'C', acertou: true };
    }

    const tentativa = {
      id: 'tent-1',
      userId: 'user-teste',
      tipo: 'verificacao_submodulo' as const,
      targetId: '1.1',
      moduloId: 'm1',
      totalItens: 8,
      acertos: 8,
      erros: 0,
      emBranco: 0,
      aproveitamento: 1.0,
      notaLiquida: 8,
      aprovado: true,
      acertosNecessarios: 7,
      errosMaximos: 1,
      secoesComErros: [],
      respostas,
      foraDaTrilha: false,
      criadoEm: new Date().toISOString(),
    };

    const st = deriveJornadaState({
      modulos: [modulo1],
      tentativas: [tentativa],
      secoesVisualizadas: {
        '1.1': getRequiredSectionsForSubmodule(submodulo),
        [submodulo.id]: getRequiredSectionsForSubmodule(submodulo),
      },
    });

    expect(st.etapas['1.1'].status).toBe('concluida');
    expect(st.proximoPasso).toBeDefined();
    expect(st.proximoPasso?.tipo).toBe('desafio_modulo');
    expect(st.proximoPasso?.descricaoAcao).toContain('80 acertos');
    expect(st.proximoPasso?.descricaoAcao).not.toContain('85 acertos');
  });

  it('7. ComoFuncionaJornadaModal: texto da regra 2 não deve conter "85 em 100 no simulado" e deve conter "80 em 100"', async () => {
    const fs = await import('fs');
    const path = await import('path');
    const modalPath = path.resolve(__dirname, '../components/jornada/ComoFuncionaJornadaModal.tsx');
    const content = fs.readFileSync(modalPath, 'utf-8');
    expect(content).not.toContain('85 em 100 no simulado');
    expect(content).toContain('80 em 100');
  });

  it('8. JornadaPage: badge do desafio e composição de 59 etapas devem referenciar 80% e 80 acertos', async () => {
    const fs = await import('fs');
    const path = await import('path');
    const pagePath = path.resolve(__dirname, '../pages/JornadaPage.tsx');
    const content = fs.readFileSync(pagePath, 'utf-8');
    expect(content).not.toContain('100 Itens · Mín. 85 Acertos');
    expect(content).not.toContain('100 itens inéditos, mín. 85 acertos');
    expect(content).toContain('JORNADA_CONFIG.desafioAcertosMinimo');
  });

  it('9. PainelPage: descrição do herói deve usar constantes canônicas de JORNADA_CONFIG', async () => {
    const fs = await import('fs');
    const path = await import('path');
    const pagePath = path.resolve(__dirname, '../pages/PainelPage.tsx');
    const content = fs.readFileSync(pagePath, 'utf-8');
    expect(content).toContain('JORNADA_CONFIG.desafioAcertosMinimo');
    expect(content).toContain('JORNADA_CONFIG.minimoSimuladoModulo');
    expect(content).toContain('JORNADA_CONFIG.minimoVerificacao');
  });
});
