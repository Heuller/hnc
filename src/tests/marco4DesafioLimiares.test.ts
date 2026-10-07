import { describe, it, expect, beforeEach } from 'vitest';
import { useProgressStore } from '../store/useProgressStore';
import { COURSE_REGISTRY } from '../content/registry';
import { deriveProgressCore } from '../domain/progressCore';
import { getSimuladoById } from '../content/simuladosRegistry';
import type { SimuladoFinalizado } from '../domain/schemas/progress.schema';

describe('Marco 4 — Limiares de Aprovação do Cebraspe & Desafio M1 (Bug 2)', () => {
  beforeEach(() => {
    // Reseta estado da store antes de cada teste
    useProgressStore.getState().limparTodoProgresso();
  });

  describe('1. Gravação Canônica em finalizarSimulado para Desafio de Módulo', () => {
    it('deve registrar tentativa do tipo desafio_modulo com aprovado=true ao atingir 80+ acertos no Simulado M1', () => {
      const manifest = getSimuladoById('m1-fundamentos');
      expect(manifest).toBeDefined();
      const questoes = manifest!.questoes;

      // Prepara 85 acertos e 15 erros com gabaritos reais
      const mockRespostas: Record<string, any> = {};
      questoes.slice(0, 85).forEach((q) => {
        mockRespostas[q.id] = {
          questionId: q.id,
          resposta: q.gabarito,
          certeza: 'certeza',
          timestamp: Date.now(),
        };
      });
      questoes.slice(85, 100).forEach((q) => {
        mockRespostas[q.id] = {
          questionId: q.id,
          resposta: q.gabarito === 'C' ? 'E' : 'C',
          certeza: 'provavel',
          timestamp: Date.now(),
        };
      });

      // Configura sessão ativa para m1-fundamentos
      useProgressStore.setState({
        sessaoAtivaSimulado: {
          respostas: mockRespostas,
          currentIndex: 99,
          emAndamento: true,
        },
        sessoesSimulados: {
          'm1-fundamentos': {
            simuladoId: 'm1-fundamentos',
            respostas: mockRespostas,
            currentIndex: 99,
            emAndamento: true,
            tempoGastoSegundos: 3600,
            ultimoAcessoTimestamp: Date.now(),
          },
        },
      });

      // Finaliza o simulado
      const resultado = useProgressStore.getState().finalizarSimulado(3600, 'm1-fundamentos');

      expect(resultado).toBeDefined();
      expect(resultado.simuladoId).toBe('m1-fundamentos');
      expect(resultado.certos).toBe(85);

      // Verifica histórico de simulados
      const historico = useProgressStore.getState().historicoSimulados;
      expect(historico.length).toBeGreaterThanOrEqual(1);

      // REGRA CRÍTICA DO MARCO 4: Deve registrar TentativaRegistro para o Desafio M1 em tentativas!
      const tentativas = useProgressStore.getState().tentativas;
      const tentativaDesafio = tentativas.find(
        (t) => t.targetId === 'desafio-m1' || t.targetId === 'desafio-1'
      );

      expect(tentativaDesafio).toBeDefined();
      expect(tentativaDesafio?.tipo).toBe('desafio_modulo');
      expect(tentativaDesafio?.moduloId).toBe('m1');
      expect(tentativaDesafio?.aprovado).toBe(true);
      expect(tentativaDesafio?.totalItens).toBe(100);
      expect(tentativaDesafio?.acertos).toBe(85);
    });

    it('deve registrar tentativa com aprovado=false caso a pontuação seja inferior a 80 acertos', () => {
      const manifest = getSimuladoById('m1-fundamentos');
      expect(manifest).toBeDefined();
      const questoes = manifest!.questoes;

      // Prepara 70 acertos e 30 erros
      const mockRespostas: Record<string, any> = {};
      questoes.slice(0, 70).forEach((q) => {
        mockRespostas[q.id] = {
          questionId: q.id,
          resposta: q.gabarito,
          certeza: 'certeza',
          timestamp: Date.now(),
        };
      });
      questoes.slice(70, 100).forEach((q) => {
        mockRespostas[q.id] = {
          questionId: q.id,
          resposta: q.gabarito === 'C' ? 'E' : 'C',
          certeza: 'provavel',
          timestamp: Date.now(),
        };
      });

      useProgressStore.setState({
        sessoesSimulados: {
          'm1-fundamentos': {
            simuladoId: 'm1-fundamentos',
            respostas: mockRespostas,
            currentIndex: 99,
            emAndamento: true,
            tempoGastoSegundos: 3600,
            ultimoAcessoTimestamp: Date.now(),
          },
        },
      });

      const resultado = useProgressStore.getState().finalizarSimulado(3600, 'm1-fundamentos');
      expect(resultado.certos).toBe(70);

      const tentativas = useProgressStore.getState().tentativas;
      const tentativaDesafio = tentativas.find(
        (t) => t.targetId === 'desafio-m1' || t.targetId === 'desafio-1'
      );

      expect(tentativaDesafio).toBeDefined();
      expect(tentativaDesafio?.aprovado).toBe(false);
    });
  });

  describe('2. Desbloqueio Imediato do Módulo 2 e Submódulo 2.1 via progressCore', () => {
    it('deve desbloquear o Módulo 2 e Submódulo 2.1 quando Desafio M1 estiver aprovado e submódulos 1.1-1.4 concluídos', () => {
      // 1.1 a 1.4 lidos e com verificação
      const core = deriveProgressCore({
        modulos: COURSE_REGISTRY,
        modulosLidosIds: ['sub-1-1', 'sub-1-2', 'sub-1-3', 'sub-1-4'],
        tentativas: [
          {
            id: 'tent-1-1',
            userId: 'user',
            tipo: 'verificacao_submodulo',
            targetId: '1.1',
            moduloId: 'm1',
            totalItens: 8,
            acertos: 8,
            erros: 0,
            emBranco: 0,
            aproveitamento: 1,
            notaLiquida: 8,
            aprovado: true,
            acertosNecessarios: 7,
            errosMaximos: 1,
            secoesComErros: [],
            respostas: {},
            foraDaTrilha: false,
            criadoEm: '2026-10-07T10:00:00Z',
          },
          {
            id: 'tent-1-2',
            userId: 'user',
            tipo: 'verificacao_submodulo',
            targetId: '1.2',
            moduloId: 'm1',
            totalItens: 8,
            acertos: 8,
            erros: 0,
            emBranco: 0,
            aproveitamento: 1,
            notaLiquida: 8,
            aprovado: true,
            acertosNecessarios: 7,
            errosMaximos: 1,
            secoesComErros: [],
            respostas: {},
            foraDaTrilha: false,
            criadoEm: '2026-10-07T10:00:00Z',
          },
          {
            id: 'tent-1-3',
            userId: 'user',
            tipo: 'verificacao_submodulo',
            targetId: '1.3',
            moduloId: 'm1',
            totalItens: 8,
            acertos: 8,
            erros: 0,
            emBranco: 0,
            aproveitamento: 1,
            notaLiquida: 8,
            aprovado: true,
            acertosNecessarios: 7,
            errosMaximos: 1,
            secoesComErros: [],
            respostas: {},
            foraDaTrilha: false,
            criadoEm: '2026-10-07T10:00:00Z',
          },
          {
            id: 'tent-1-4',
            userId: 'user',
            tipo: 'verificacao_submodulo',
            targetId: '1.4',
            moduloId: 'm1',
            totalItens: 8,
            acertos: 8,
            erros: 0,
            emBranco: 0,
            aproveitamento: 1,
            notaLiquida: 8,
            aprovado: true,
            acertosNecessarios: 7,
            errosMaximos: 1,
            secoesComErros: [],
            respostas: {},
            foraDaTrilha: false,
            criadoEm: '2026-10-07T10:00:00Z',
          },
          // Desafio M1 aprovado com 85 acertos (>= 80)
          {
            id: 'tent-desafio-m1',
            userId: 'user',
            tipo: 'desafio_modulo',
            targetId: 'desafio-m1',
            moduloId: 'm1',
            totalItens: 100,
            acertos: 85,
            erros: 15,
            emBranco: 0,
            aproveitamento: 0.85,
            notaLiquida: 70,
            aprovado: true,
            acertosNecessarios: 80,
            errosMaximos: 20,
            secoesComErros: [],
            respostas: {},
            foraDaTrilha: false,
            criadoEm: '2026-10-07T11:00:00Z',
          },
        ],
        secoesVisualizadas: {
          '1.1': ['sec-1', 'sec-2'],
          '1.2': ['sec-1', 'sec-2'],
          '1.3': ['sec-1', 'sec-2'],
          '1.4': ['sec-1', 'sec-2'],
        },
        flagsLegado: [], // Sem depender de grandfathering!
      });

      // Módulo 1 deve estar 100% completo
      expect(core.modulosStatus['m1'].isCompleto).toBe(true);
      expect(core.modulosStatus['m1'].progressoPercent).toBe(100);
      expect(core.modulosStatus['m1'].desafioConcluido).toBe(true);

      // Desafio M1 na jornada deve estar concluído
      expect(core.etapas['desafio-m1'].status).toBe('concluida');

      // Módulo 2 deve estar desbloqueado
      expect(core.modulosStatus['m2'].isBloqueado).toBe(false);

      // Submódulo 2.1 deve estar desbloqueado
      expect(core.isSubmoduloBloqueado('2.1')).toBe(false);
      expect(core.etapas['2.1'].status).toBe('disponivel');

      // Próximo passo da jornada deve ser 2.1
      expect(core.proximoPasso.etapaId).toBe('2.1');
    });

    it('deve reconciliar e desbloquear M2 caso o usuário tenha Simulado M1 aprovado no histórico (mesmo sem tentativa prévia)', () => {
      const simuladoM1Aprovado: SimuladoFinalizado = {
        id: 'sim-m1-antigo',
        simuladoId: 'm1-fundamentos',
        dataHora: '2026-10-06T10:00:00Z',
        tempoGastoSegundos: 3600,
        certos: 82,
        errados: 18,
        emBranco: 0,
        notaLiquida: 64,
        aproveitamentoPercent: 82,
        respostas: {},
        calibracao: {
          acertoCertezaPercent: 90,
          acertoProvavelPercent: 80,
          acertoChutePercent: 50,
          ganhoPotencialSeChuteBranco: 0,
        },
      };

      const core = deriveProgressCore({
        modulos: COURSE_REGISTRY,
        modulosLidosIds: ['sub-1-1', 'sub-1-2', 'sub-1-3', 'sub-1-4'],
        tentativas: [
          {
            id: 'tent-1-1',
            userId: 'user',
            tipo: 'verificacao_submodulo',
            targetId: '1.1',
            moduloId: 'm1',
            totalItens: 8,
            acertos: 8,
            erros: 0,
            emBranco: 0,
            aproveitamento: 1,
            notaLiquida: 8,
            aprovado: true,
            acertosNecessarios: 7,
            errosMaximos: 1,
            secoesComErros: [],
            respostas: {},
            foraDaTrilha: false,
            criadoEm: '2026-10-07T10:00:00Z',
          },
          {
            id: 'tent-1-2',
            userId: 'user',
            tipo: 'verificacao_submodulo',
            targetId: '1.2',
            moduloId: 'm1',
            totalItens: 8,
            acertos: 8,
            erros: 0,
            emBranco: 0,
            aproveitamento: 1,
            notaLiquida: 8,
            aprovado: true,
            acertosNecessarios: 7,
            errosMaximos: 1,
            secoesComErros: [],
            respostas: {},
            foraDaTrilha: false,
            criadoEm: '2026-10-07T10:00:00Z',
          },
          {
            id: 'tent-1-3',
            userId: 'user',
            tipo: 'verificacao_submodulo',
            targetId: '1.3',
            moduloId: 'm1',
            totalItens: 8,
            acertos: 8,
            erros: 0,
            emBranco: 0,
            aproveitamento: 1,
            notaLiquida: 8,
            aprovado: true,
            acertosNecessarios: 7,
            errosMaximos: 1,
            secoesComErros: [],
            respostas: {},
            foraDaTrilha: false,
            criadoEm: '2026-10-07T10:00:00Z',
          },
          {
            id: 'tent-1-4',
            userId: 'user',
            tipo: 'verificacao_submodulo',
            targetId: '1.4',
            moduloId: 'm1',
            totalItens: 8,
            acertos: 8,
            erros: 0,
            emBranco: 0,
            aproveitamento: 1,
            notaLiquida: 8,
            aprovado: true,
            acertosNecessarios: 7,
            errosMaximos: 1,
            secoesComErros: [],
            respostas: {},
            foraDaTrilha: false,
            criadoEm: '2026-10-07T10:00:00Z',
          },
        ],
        historicoSimulados: [simuladoM1Aprovado],
        secoesVisualizadas: {
          '1.1': ['sec-1'],
          '1.2': ['sec-1'],
          '1.3': ['sec-1'],
          '1.4': ['sec-1'],
        },
        flagsLegado: [],
      });

      // Deve reconhecer Desafio M1 aprovado e liberar M2 / 2.1
      expect(core.modulosStatus['m1'].desafioConcluido).toBe(true);
      expect(core.modulosStatus['m1'].isCompleto).toBe(true);
      expect(core.modulosStatus['m2'].isBloqueado).toBe(false);
      expect(core.isSubmoduloBloqueado('2.1')).toBe(false);
    });
  });
});
