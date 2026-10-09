import { describe, it, expect } from 'vitest';
import { comporSubmoduloRevisao } from '../domain/reviewSubmoduleEngine';
import { deriveJornadaState } from '../domain/jornadaEngine';
import { REVIEW_CONFIG } from '../config/reviewConfig';
import type { ConceptState } from '../domain/concepts/types';
import { ALL_COURSE_MODULES } from '../content/registry';
import { conceptRepository } from '../domain/concepts/conceptRepository';

describe('Motor de Composição Científica dos Submódulos Rn (Marco R4)', () => {
  it('deve compor o submódulo R2 com exatamente 20 itens e simetria 50/50 Cebraspe (10 C e 10 E)', () => {
    const sessao = comporSubmoduloRevisao({
      moduloNumero: 2,
      moduloId: 'm2',
    });

    expect(sessao.revisaoId).toBe('revisao-m2');
    expect(sessao.moduloNumero).toBe(2);
    expect(sessao.totalItens).toBe(20);
    expect(sessao.itens).toHaveLength(20);

    const countC = sessao.itens.filter((i) => i.conceito.gabaritoCanonic === 'C').length;
    const countE = sessao.itens.filter((i) => i.conceito.gabaritoCanonic === 'E').length;

    expect(countC).toBe(10);
    expect(countE).toBe(10);
    expect(sessao.acertosNecessarios).toBe(17); // 85% de 20
    expect(sessao.aproveitamentoMinimo).toBe(0.85);
  });

  it('deve respeitar a composição cumulativa (módulo atual vs precedentes) para k >= 2', () => {
    const sessao = comporSubmoduloRevisao({
      moduloNumero: 3,
      moduloId: 'm3',
    });

    const itensModuloAtual = sessao.itens.filter((i) => i.isModuloAtual);
    const itensPrecedentes = sessao.itens.filter((i) => !i.isModuloAtual);

    expect(itensModuloAtual.length).toBeGreaterThanOrEqual(10);
    expect(itensPrecedentes.length).toBeGreaterThan(0);
    expect(sessao.totalItens).toBe(20);
  });

  it('deve limitar o formato F1 (simulado clássico) a no máximo 20% dos itens (<= 4)', () => {
    const sessao = comporSubmoduloRevisao({
      moduloNumero: 2,
      moduloId: 'm2',
    });

    const itensF1 = sessao.itens.filter((i) => i.formato === 'f1_ce_simples');
    const maxPermitidoF1 = Math.floor(20 * REVIEW_CONFIG.testCeilingPct); // 4

    expect(itensF1.length).toBeLessThanOrEqual(maxPermitidoF1);

    // E deve conter outros formatos de F2 a F8
    const outrosFormatos = sessao.itens.filter((i) => i.formato !== 'f1_ce_simples');
    expect(outrosFormatos.length).toBeGreaterThanOrEqual(16);
  });

  it('deve priorizar conceitos em estado crítico ou vencidos na repetição espaçada', () => {
    const conceitosM2 = conceptRepository.getPorModulo('m2');
    expect(conceitosM2.length).toBeGreaterThan(0);
    const alvo = conceitosM2[0];

    const mockEstados: Record<string, ConceptState> = {
      [alvo.id]: {
        conceptId: alvo.id,
        userId: 'user-test',
        caixaLeitner: 1,
        proximaRevisao: '2026-10-01', // Vencida
        totalAparicoes: 2,
        totalAcertos: 0,
        totalErros: 2,
        totalChutes: 0,
        estadoDominio: 'critico',
        dataUltimaRevisao: '2026-10-01',
        historico: [],
      },
    };

    const sessao = comporSubmoduloRevisao({
      moduloNumero: 2,
      moduloId: 'm2',
      estadosConceitos: mockEstados,
      dataAtualIso: '2026-10-09',
    });

    const itemCritico = sessao.itens.find((i) => i.conceito.id === alvo.id);
    expect(itemCritico).toBeDefined();
    if (itemCritico) {
      expect(itemCritico.scorePrioridade).toBeGreaterThanOrEqual(1000);
    }
  });

  it('deve integrar as etapas de revisão científica Rn na jornadaEngine sem quebrar progresso', () => {
    const jornadaState = deriveJornadaState({
      modulos: ALL_COURSE_MODULES,
      tentativas: [],
      secoesVisualizadas: {},
      modoLivre: false,
    });

    // Deve conter etapas de revisão científica
    const etapasRevisao = jornadaState.etapasOrdenadas.filter(
      (e) => e.tipo === 'submodulo_revisao'
    );
    expect(etapasRevisao.length).toBeGreaterThan(0);

    // Deve suportar busca por id 'revisao-m2' e alias legado 'portal-m2'
    expect(jornadaState.etapas['revisao-m2']).toBeDefined();
    expect(jornadaState.etapas['portal-m2']).toBeDefined();
    expect(jornadaState.etapas['revisao-m2'].moduloNumero).toBe(2);
  });
});
