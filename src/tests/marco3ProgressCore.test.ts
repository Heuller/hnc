import { describe, it, expect } from 'vitest';
import { COURSE_REGISTRY, TRILHA_ESPECIFICOS } from '../content/registry';
import { SIMULADOS_REGISTRY } from '../content/simuladosRegistry';
import {
  deriveProgressCore,
  deduplicarSubmodulos,
} from '../domain/progressCore';
import type { MacroModulo } from '../domain/types';

describe('Marco 3 — progressCore e Unificação de Métricas', () => {
  describe('Bug 3: Deduplicação e Integridade de Submódulos', () => {
    it('deve deduplicar submódulos de forma estável preservando a ordem canônica', () => {
      const mockSubmodulos = [
        { id: 'sub-1-1', numero: '1.1', titulo: 'Fundamentos' },
        { id: 'sub-1-2-dup1', numero: '1.2', titulo: 'Ranganathan 1' },
        { id: 'sub-1-2-dup2', numero: '1.2', titulo: 'Ranganathan 2' },
        { id: 'sub-1-3', numero: '1.3', titulo: 'Legislação' },
        { id: 'sub-1-4', numero: '1.4', titulo: 'Ética' },
      ] as any;

      const deduplicados = deduplicarSubmodulos(mockSubmodulos);
      expect(deduplicados).toHaveLength(4);
      expect(deduplicados.map((s) => s.numero)).toEqual(['1.1', '1.2', '1.3', '1.4']);
      expect(deduplicados[1].id).toBe('sub-1-2-dup1');
    });

    it('não deve gerar etapas duplicadas em etapasOrdenadas no progressCore mesmo com duplicata nos dados brutos', () => {
      const moduloComDuplicata: MacroModulo = {
        ...TRILHA_ESPECIFICOS[0],
        modulosFilhos: [
          TRILHA_ESPECIFICOS[0].modulosFilhos[0],
          TRILHA_ESPECIFICOS[0].modulosFilhos[1],
          TRILHA_ESPECIFICOS[0].modulosFilhos[1], // 1.2 duplicado
          TRILHA_ESPECIFICOS[0].modulosFilhos[2],
          TRILHA_ESPECIFICOS[0].modulosFilhos[3],
        ],
      };

      const core = deriveProgressCore({
        modulos: [moduloComDuplicata, ...TRILHA_ESPECIFICOS.slice(1)],
      });

      const etapas12 = core.etapasOrdenadas.filter((e) => e.id === '1.2');
      expect(etapas12).toHaveLength(1);
      expect(core.contagens.totalSubmodulosTrilha).toBe(40);
    });

    it('garante que todos os módulos do COURSE_REGISTRY possuem submódulos estritamente únicos', () => {
      for (const modulo of COURSE_REGISTRY) {
        const numeros = modulo.modulosFilhos.map((s) => s.numero);
        const setNumeros = new Set(numeros);
        expect(numeros.length).toBe(setNumeros.size);
      }
    });
  });

  describe('Bug 4: Contagens Canônicas Unificadas', () => {
    it('deve calcular contagens exatas da Trilha de Domínio (59 etapas = 40 sub + 10 desafios + 9 portais)', () => {
      const core = deriveProgressCore({
        modulos: COURSE_REGISTRY,
      });

      expect(core.contagens.totalSubmodulosTrilha).toBe(40);
      expect(core.contagens.totalDesafiosTrilha).toBe(10);
      expect(core.contagens.totalPortaisTrilha).toBe(9);
      expect(core.contagens.totalEtapasTrilha).toBe(59);
    });

    it('deve distinguir 10 cadernos da trilha de 15 cadernos da plataforma em Treinos', () => {
      const core = deriveProgressCore({
        modulos: COURSE_REGISTRY,
        historicoSimulados: [
          // 1 tentativa reprovada (< 80%) no Simulado M1
          {
            id: 'sim-1',
            simuladoId: 'm1-fundamentos',
            dataHora: '2026-10-07T10:00:00Z',
            certos: 70,
            errados: 30,
            emBranco: 0,
            notaLiquida: 40,
            aproveitamentoPercent: 70,
            tempoGastoSegundos: 3600,
            respostas: {},
            calibracao: {
              acertoCertezaPercent: 70,
              acertoProvavelPercent: 70,
              acertoChutePercent: 50,
              ganhoPotencialSeChuteBranco: 0,
            },
          },
          // 1 tentativa aprovada (>= 80%) no Simulado M2
          {
            id: 'sim-2',
            simuladoId: 'm2-catalogacao',
            dataHora: '2026-10-07T11:00:00Z',
            certos: 85,
            errados: 15,
            emBranco: 0,
            notaLiquida: 70,
            aproveitamentoPercent: 85,
            tempoGastoSegundos: 3600,
            respostas: {},
            calibracao: {
              acertoCertezaPercent: 90,
              acertoProvavelPercent: 80,
              acertoChutePercent: 50,
              ganhoPotencialSeChuteBranco: 0,
            },
          },
          // 1 tentativa no Mega Simulado (avulso da plataforma) com 80%
          {
            id: 'sim-3',
            simuladoId: 'mega-simulado-camara',
            dataHora: '2026-10-07T12:00:00Z',
            certos: 100,
            errados: 20,
            emBranco: 0,
            notaLiquida: 80,
            aproveitamentoPercent: 83,
            tempoGastoSegundos: 4000,
            respostas: {},
            calibracao: {
              acertoCertezaPercent: 85,
              acertoProvavelPercent: 80,
              acertoChutePercent: 50,
              ganhoPotencialSeChuteBranco: 0,
            },
          },
        ],
      });

      expect(core.contagens.cadernosTrilhaTotal).toBe(10);
      expect(core.contagens.cadernosPlataformaTotal).toBe(SIMULADOS_REGISTRY.length); // 15
      // Apenas m2-catalogacao aprovado na trilha
      expect(core.contagens.cadernosTrilhaAprovados).toBe(1);
      // m2-catalogacao e mega-simulado aprovados na plataforma
      expect(core.contagens.cadernosPlataformaAprovados).toBe(2);
    });

    it('deve fornecer contagem correta de submódulos totais do catálogo (64 do COURSE_REGISTRY)', () => {
      const core = deriveProgressCore({
        modulos: COURSE_REGISTRY,
      });

      const totalEsperado = COURSE_REGISTRY.flatMap((m) => m.modulosFilhos).length;
      expect(core.contagens.totalSubmodulosCurso).toBe(totalEsperado);
      expect(totalEsperado).toBe(64);
    });
  });

  describe('Bug 1: Fonte Única de Verdade (Sidebar/Grade vs Jornada)', () => {
    it('não deve marcar o Módulo 1 com 100% se todos os submódulos foram lidos mas o Desafio M1 está pendente', () => {
      // 1.1 a 1.4 lidos, mas sem Desafio M1 aprovado
      const core = deriveProgressCore({
        modulos: COURSE_REGISTRY,
        modulosLidosIds: ['sub-1-1', 'sub-1-2', 'sub-1-3', 'sub-1-4'],
        tentativas: [],
      });

      const statusM1 = core.modulosStatus['m1'];
      expect(statusM1.submodulosConcluidos).toBe(4);
      expect(statusM1.desafioConcluido).toBe(false);
      expect(statusM1.isCompleto).toBe(false);
      // Não pode ser 100%!
      expect(statusM1.progressoPercent).toBeLessThan(100);
      expect(statusM1.progressoPercent).toBe(80); // 4 de 5 etapas do módulo (80%)
    });

    it('deve marcar o Módulo 1 como 100% completo apenas quando submódulos e Desafio forem concluídos', () => {
      const core = deriveProgressCore({
        modulos: COURSE_REGISTRY,
        modulosLidosIds: ['sub-1-1', 'sub-1-2', 'sub-1-3', 'sub-1-4'],
        tentativas: [
          // Desafio M1 aprovado com 80% (80 acertos)
          {
            id: 'tent-desafio-m1',
            userId: 'user-teste',
            tipo: 'desafio_modulo',
            targetId: 'desafio-m1',
            moduloId: 'm1',
            totalItens: 100,
            acertos: 80,
            erros: 20,
            emBranco: 0,
            aproveitamento: 0.8,
            notaLiquida: 60,
            aprovado: true,
            acertosNecessarios: 80,
            errosMaximos: 20,
            secoesComErros: [],
            respostas: {},
            foraDaTrilha: false,
            criadoEm: '2026-10-07T10:00:00Z',
          },
        ],
      });

      const statusM1 = core.modulosStatus['m1'];
      expect(statusM1.desafioConcluido).toBe(true);
      expect(statusM1.isCompleto).toBe(true);
      expect(statusM1.progressoPercent).toBe(100);
    });

    it('deve bloquear acesso ao Módulo 2 e Submódulo 2.1 quando Desafio M1 não foi concluído (sem grandfathered)', () => {
      const core = deriveProgressCore({
        modulos: COURSE_REGISTRY,
        modulosLidosIds: ['sub-1-1', 'sub-1-2', 'sub-1-3', 'sub-1-4'],
        tentativas: [],
        flagsLegado: [], // sem exceção
      });

      expect(core.isSubmoduloBloqueado('2.1')).toBe(true);
      expect(core.isModuloBloqueado('m2')).toBe(true);
    });

    it('deve liberar 2.1 por exceção grandfathered quando flagLegado contiver 2.1', () => {
      const core = deriveProgressCore({
        modulos: COURSE_REGISTRY,
        modulosLidosIds: ['sub-1-1', 'sub-1-2', 'sub-1-3', 'sub-1-4'],
        tentativas: [],
        flagsLegado: ['2.1'],
      });

      expect(core.isSubmoduloBloqueado('2.1')).toBe(false);
      expect(core.modulosStatus['m2'].isBloqueado).toBe(false);
    });
  });
});
