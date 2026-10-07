import { describe, it, expect, beforeEach } from 'vitest';
import { useProgressStore } from '../store/useProgressStore';
import { COURSE_REGISTRY } from '../content/registry';
import { getSimuladoById, SIMULADOS_REGISTRY } from '../content/simuladosRegistry';
import { deduplicarSubmodulos } from '../domain/progressCore';

describe('Marco 5 — Teste de Integração End-to-End & Regressão Geral', () => {
  beforeEach(() => {
    useProgressStore.getState().limparTodoProgresso();
    useProgressStore.setState({
      flagsLegado: [],
    });
  });

  describe('1. Ciclo de Vida Completo do Aluno (M1.1 ao Desbloqueio Canônico de M2.1)', () => {
    it('executa a progressão pedagógica estrita de ponta a ponta sem falhas de estado', () => {
      // Estado Inicial: Tudo zerado
      let core = useProgressStore.getState().getProgressCore();

      expect(core.modulosStatus['m1'].isBloqueado).toBe(false);
      expect(core.isSubmoduloBloqueado('1.1')).toBe(false);
      expect(core.etapas['1.1'].status).toBe('disponivel');

      // 1.2 a 1.4 devem estar bloqueados inicialmente
      expect(core.isSubmoduloBloqueado('1.2')).toBe(true);
      expect(core.etapas['1.2'].status).toBe('bloqueada');
      expect(core.isSubmoduloBloqueado('1.3')).toBe(true);
      expect(core.isSubmoduloBloqueado('1.4')).toBe(true);

      // Desafio M1 e M2 bloqueados
      expect(core.etapas['desafio-m1'].status).toBe('bloqueada');
      expect(core.modulosStatus['m2'].isBloqueado).toBe(true);
      expect(core.isSubmoduloBloqueado('2.1')).toBe(true);
      expect(core.etapas['2.1'].status).toBe('bloqueada');

      // ETAPA 1: Aluno lê 1.1 e responde verificação com 100% de acertos
      useProgressStore.setState((s) => ({
        modulosLidosIds: [...s.modulosLidosIds, 'sub-1-1'],
        secoesVisualizadas: {
          ...s.secoesVisualizadas,
          '1.1': ['sec-autores', 'sec-alertas', 'sec-teoria', 'sec-checkpoints', 'sec-mnemonicos'],
        },
        tentativas: [
          ...s.tentativas,
          {
            id: 'tent-1-1',
            userId: 'aluno-teste',
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
            criadoEm: new Date().toISOString(),
          },
        ],
      }));

      core = useProgressStore.getState().getProgressCore();
      expect(core.etapas['1.1'].status).toBe('concluida');
      expect(core.isSubmoduloBloqueado('1.2')).toBe(false);
      expect(core.etapas['1.2'].status).toBe('disponivel');
      expect(core.proximoPasso.etapaId).toBe('1.2');

      // ETAPA 2: Aluno conclui 1.2, 1.3 e 1.4
      useProgressStore.setState((s) => ({
        modulosLidosIds: [...s.modulosLidosIds, 'sub-1-2', 'sub-1-3', 'sub-1-4'],
        secoesVisualizadas: {
          ...s.secoesVisualizadas,
          '1.2': ['sec-autores', 'sec-alertas', 'sec-teoria', 'sec-checkpoints', 'sec-mnemonicos'],
          '1.3': ['sec-autores', 'sec-alertas', 'sec-teoria', 'sec-checkpoints', 'sec-mnemonicos'],
          '1.4': ['sec-autores', 'sec-alertas', 'sec-teoria', 'sec-checkpoints', 'sec-mnemonicos'],
        },
        tentativas: [
          ...s.tentativas,
          {
            id: 'tent-1-2',
            userId: 'aluno-teste',
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
            criadoEm: new Date().toISOString(),
          },
          {
            id: 'tent-1-3',
            userId: 'aluno-teste',
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
            criadoEm: new Date().toISOString(),
          },
          {
            id: 'tent-1-4',
            userId: 'aluno-teste',
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
            criadoEm: new Date().toISOString(),
          },
        ],
      }));

      core = useProgressStore.getState().getProgressCore();

      // Todos os 4 submódulos concluídos
      expect(core.modulosStatus['m1'].submodulosConcluidos).toBe(4);
      expect(core.modulosStatus['m1'].submodulosTotal).toBe(4);
      expect(core.modulosStatus['m1'].desafioConcluido).toBe(false);
      expect(core.modulosStatus['m1'].isCompleto).toBe(false);
      expect(core.modulosStatus['m1'].progressoPercent).toBe(80); // 4 de 5 etapas = 80%

      // Desafio M1 liberado
      expect(core.etapas['desafio-m1'].isDesbloqueada).toBe(true);
      expect(core.etapas['desafio-m1'].status).toBe('disponivel');
      expect(core.proximoPasso.etapaId).toBe('desafio-m1');
      expect(core.proximoPasso.tipo).toBe('desafio_modulo');

      // Módulo 2 e 2.1 CONTINUAM RIGOROSAMENTE BLOQUEADOS (Bug 1 & 2)
      expect(core.modulosStatus['m2'].isBloqueado).toBe(true);
      expect(core.isSubmoduloBloqueado('2.1')).toBe(true);
      expect(core.etapas['2.1'].status).toBe('bloqueada');

      // ETAPA 3: Aluno realiza Simulado M1 com 72 acertos (< 80)
      const manifestM1 = getSimuladoById('m1-fundamentos');
      expect(manifestM1).toBeDefined();
      const questoesM1 = manifestM1!.questoes;

      const mockRespostasReprovado: Record<string, any> = {};
      questoesM1.slice(0, 72).forEach((q) => {
        mockRespostasReprovado[q.id] = {
          questionId: q.id,
          resposta: q.gabarito,
          certeza: 'certeza',
          timestamp: Date.now(),
        };
      });
      questoesM1.slice(72, 100).forEach((q) => {
        mockRespostasReprovado[q.id] = {
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
            respostas: mockRespostasReprovado,
            currentIndex: 99,
            emAndamento: true,
            tempoGastoSegundos: 3600,
            ultimoAcessoTimestamp: Date.now(),
          },
        },
      });

      const resReprovado = useProgressStore.getState().finalizarSimulado(3600, 'm1-fundamentos');
      expect(resReprovado.certos).toBe(72);

      core = useProgressStore.getState().getProgressCore();
      // Não desbloqueia M2
      expect(core.modulosStatus['m1'].desafioConcluido).toBe(false);
      expect(core.modulosStatus['m1'].isCompleto).toBe(false);
      expect(core.modulosStatus['m2'].isBloqueado).toBe(true);
      expect(core.isSubmoduloBloqueado('2.1')).toBe(true);

      // ETAPA 4: Aluno refaz o Simulado M1 e atinge 88 acertos (>= 80)
      const mockRespostasAprovado: Record<string, any> = {};
      questoesM1.slice(0, 88).forEach((q) => {
        mockRespostasAprovado[q.id] = {
          questionId: q.id,
          resposta: q.gabarito,
          certeza: 'certeza',
          timestamp: Date.now(),
        };
      });
      questoesM1.slice(88, 100).forEach((q) => {
        mockRespostasAprovado[q.id] = {
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
            respostas: mockRespostasAprovado,
            currentIndex: 99,
            emAndamento: true,
            tempoGastoSegundos: 3600,
            ultimoAcessoTimestamp: Date.now(),
          },
        },
      });

      const resAprovado = useProgressStore.getState().finalizarSimulado(3600, 'm1-fundamentos');
      expect(resAprovado.certos).toBe(88);

      core = useProgressStore.getState().getProgressCore();

      // DESBLOQUEIO CANÔNICO COMPROVADO
      expect(core.modulosStatus['m1'].desafioConcluido).toBe(true);
      expect(core.modulosStatus['m1'].isCompleto).toBe(true);
      expect(core.modulosStatus['m1'].progressoPercent).toBe(100);

      expect(core.etapas['desafio-m1'].status).toBe('concluida');
      expect(core.etapas['desafio-m1'].aprovado).toBe(true);

      // Módulo 2 e 2.1 desbloqueados
      expect(core.modulosStatus['m2'].isBloqueado).toBe(false);
      expect(core.isSubmoduloBloqueado('2.1')).toBe(false);
      expect(core.etapas['2.1'].status).toBe('disponivel');

      // Próximo passo avança automaticamente para 2.1
      expect(core.proximoPasso.etapaId).toBe('2.1');
      expect(core.proximoPasso.moduloNumero).toBe(2);
    });
  });

  describe('2. Unificação de Contagens e Fonte Única da Verdade entre Telas', () => {
    it('garante métricas perfeitamente reconciliadas para Painel, Jornada, Treinos, Radar e Progresso', () => {
      const core = useProgressStore.getState().getProgressCore();

      // Painel & Jornada: 59 etapas na Trilha (40 submódulos + 10 desafios + 9 portais)
      expect(core.contagens.totalEtapasTrilha).toBe(59);
      expect(core.contagens.totalSubmodulosTrilha).toBe(40);
      expect(core.contagens.totalDesafiosTrilha).toBe(10);
      expect(core.contagens.totalPortaisTrilha).toBe(9);

      // Treinos: 10 cadernos da trilha vs 15 no acervo completo da plataforma
      expect(core.contagens.cadernosTrilhaTotal).toBe(10);
      expect(core.contagens.cadernosPlataformaTotal).toBe(15);
      expect(SIMULADOS_REGISTRY.length).toBe(15);

      // Radar & Catálogo Geral: 64 submódulos totais do COURSE_REGISTRY
      const totalCatalogo = COURSE_REGISTRY.flatMap((m) => deduplicarSubmodulos(m.modulosFilhos)).length;
      expect(core.contagens.totalSubmodulosCurso).toBe(totalCatalogo);
      expect(totalCatalogo).toBe(64);
    });
  });

  describe('3. Modo Livre e Reversibilidade de Bloqueios', () => {
    it('permite alternar Modo Livre sem corromper as tentativas nem os bloqueios originais', () => {
      const store = useProgressStore.getState();

      // Inicialmente em modo restrito
      expect(store.modoLivre).toBe(false);
      let core = store.getProgressCore();
      expect(core.modulosStatus['m3'].isBloqueado).toBe(true);
      expect(core.isSubmoduloBloqueado('3.1')).toBe(true);

      // Ativa Modo Livre
      store.setModoLivre(true);
      core = useProgressStore.getState().getProgressCore();
      expect(core.modulosStatus['m3'].isBloqueado).toBe(false);
      expect(core.isSubmoduloBloqueado('3.1')).toBe(false);

      // Desativa Modo Livre: Bloqueio pedagógico restabelecido
      store.setModoLivre(false);
      core = useProgressStore.getState().getProgressCore();
      expect(core.modulosStatus['m3'].isBloqueado).toBe(true);
      expect(core.isSubmoduloBloqueado('3.1')).toBe(true);
    });
  });

  describe('4. Deduplicação Estável e Prevenção de Regressão de Chaves', () => {
    it('garante que nenhum módulo do catálogo gera duplicatas em listas nem quebra keys React', () => {
      for (const modulo of COURSE_REGISTRY) {
        const deduplicados = deduplicarSubmodulos(modulo.modulosFilhos);
        const numeros = deduplicados.map((s) => s.numero);
        const setNumeros = new Set(numeros);

        expect(numeros.length).toBe(setNumeros.size);
      }
    });
  });
});
