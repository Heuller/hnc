import { describe, it, expect } from 'vitest';
import { EVIDENCIA_CIENTIFICA_FORMATOS } from '../domain/reviewSubmoduleEngine';
import { converterCheckpointParaExercicio, type Checkpoint } from '../domain/schemas/modulo.schema';
import { COURSE_REGISTRY } from '../content/registry';

describe('P21 — Micro-checkpoints de Recuperação Ativa e Evidência Científica', () => {
  describe('(a) Auditoria de EVIDENCIA_CIENTIFICA_FORMATOS (Dunlosky et al., 2013)', () => {
    it('garante que apenas prática de recuperação / teste (f1, f4, f7) possuem utilidade "alta"', () => {
      expect(EVIDENCIA_CIENTIFICA_FORMATOS.f1_ce_simples.utilidade).toBe('alta');
      expect(EVIDENCIA_CIENTIFICA_FORMATOS.f4_preenchimento_lacunas.utilidade).toBe('alta');
      expect(EVIDENCIA_CIENTIFICA_FORMATOS.f7_flashcard_ativo.utilidade).toBe('alta');
    });

    it('garante que interrogação elaborativa, contraste e esquemas (f2, f3, f5, f6, f8) possuem utilidade "moderada"', () => {
      expect(EVIDENCIA_CIENTIFICA_FORMATOS.f2_com_justificativa.utilidade).toBe('moderada');
      expect(EVIDENCIA_CIENTIFICA_FORMATOS.f3_identificacao_erro.utilidade).toBe('moderada');
      expect(EVIDENCIA_CIENTIFICA_FORMATOS.f5_associacao.utilidade).toBe('moderada');
      expect(EVIDENCIA_CIENTIFICA_FORMATOS.f6_caso_pratico.utilidade).toBe('moderada');
      expect(EVIDENCIA_CIENTIFICA_FORMATOS.f8_inversao_papeis.utilidade).toBe('moderada');
    });

    it('todos os 8 formatos citam rigorosamente a literatura primária', () => {
      Object.entries(EVIDENCIA_CIENTIFICA_FORMATOS).forEach(([, val]) => {
        expect(val.referencia).toMatch(/(Dunlosky|Roediger|Pashler|Kornell|Taylor|Pressley)/);
        expect(val.evidencia.length).toBeGreaterThan(20);
      });
    });
  });

  describe('(b) Recuperação ativa e conversão de checkpoints para X3', () => {
    it('converte checkpoint com gabarito Errado em exercício X3 com opções de correção ativa', () => {
      const cp: Checkpoint = {
        id: 'cp-teste-2',
        pergunta: 'Julgue o item sobre RDA:',
        item: 'No RDA, uma Manifestação representa uma criação intelectual abstrata e incorpórea.',
        gabarito: 'E',
        justificativa: 'No RDA, a criação intelectual abstrata é a Obra (Work); a Manifestação é a corporificação física ou digital.',
        versao_correta: 'No RDA, a Obra representa uma criação intelectual abstrata e incorpórea.',
        armadilhaBanca: 'Manifestação em vez de Obra',
      };

      const exercicio = converterCheckpointParaExercicio(cp);

      expect(exercicio.tipo).toBe('X3');
      if (exercicio.tipo === 'X3') {
        expect(exercicio.trechoIncorreto).toBe('Manifestação em vez de Obra');
        expect(exercicio.gabarito).toBe('No RDA, a Obra representa uma criação intelectual abstrata e incorpórea.');
        expect(exercicio.opcoesCorrecao).toBeDefined();
        expect(exercicio.opcoesCorrecao?.length).toBeGreaterThanOrEqual(2);
      }
    });

    it('todos os submódulos do COURSE_REGISTRY possuem no mínimo 3 micro-checkpoints com fundamentação', () => {
      COURSE_REGISTRY.forEach((macro) => {
        macro.modulosFilhos.forEach((sub) => {
          expect(sub.checkpoints.length).toBeGreaterThanOrEqual(3);
          sub.checkpoints.forEach((cp) => {
            expect(cp.item.length).toBeGreaterThan(15);
            expect(cp.justificativa.length).toBeGreaterThan(15);
            expect(['C', 'E']).toContain(cp.gabarito);
          });
        });
      });
    });
  });
});
