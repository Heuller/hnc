import { describe, it, expect } from 'vitest';
import {
  contarDiasUteisEntre,
  calcularProjecaoTemporal,
  DEFINICAO_MARCOS_DISCIPLINA,
} from '../domain/projectionsEngine';
import type { ConceptState } from '../domain/concepts/types';
import { conceptRepository } from '../domain/concepts/conceptRepository';

describe('Marco R6: Projeções Temporais até 17/01/2027 e Marcos de Disciplina', () => {
  it('deve calcular rigorosamente dias úteis sem fins de semana entre duas datas', () => {
    // Sexta-feira 09/10/2026 até Segunda-feira 12/10/2026:
    // Dias: Sexta 9 (útil), Sábado 10 (fim de semana), Domingo 11 (fim de semana) -> 1 dia útil antes de Segunda 12
    const uteis = contarDiasUteisEntre('2026-10-09', '2026-10-12');
    expect(uteis).toBe(1);

    // Uma semana cheia (Segunda a Sexta): 5 dias úteis
    const semanaCheia = contarDiasUteisEntre('2026-10-12', '2026-10-19');
    expect(semanaCheia).toBe(5);

    // Até a prova em 17/01/2027
    const diasUteisAteProva = contarDiasUteisEntre('2026-10-09', '2027-01-17');
    expect(diasUteisAteProva).toBeGreaterThan(65);
    expect(diasUteisAteProva).toBeLessThan(75);
  });

  it('deve projetar a capacidade de repetição espaçada respeitando o teto de 30 itens/dia', () => {
    const projecao = calcularProjecaoTemporal({
      dataAtualIso: '2026-10-09',
      dataProvaIso: '2027-01-17',
      tetoDiario: 30,
    });

    expect(projecao.tetoDiarioConfortavel).toBe(30);
    expect(projecao.capacidadeTotalRevisoes).toBe(projecao.diasUteisRestantes * 30);
    expect(projecao.capacidadeTotalRevisoes).toBeGreaterThan(1900); // Mais de 1.900 revisões confortáveis
  });

  it('deve calcular a cobertura e distribuição das caixas Leitner para todo o catálogo de conceitos', () => {
    const todos = conceptRepository.getTodos();
    expect(todos.length).toBeGreaterThanOrEqual(180);

    const mockEstados: Record<string, ConceptState> = {
      [todos[0].id]: {
        conceptId: todos[0].id,
        userId: 'user',
        caixaLeitner: 5,
        proximaRevisao: '2026-11-20',
        totalAparicoes: 5,
        totalAcertos: 5,
        totalErros: 0,
        totalChutes: 0,
        estadoDominio: 'dominado',
        historico: [],
      },
      [todos[1].id]: {
        conceptId: todos[1].id,
        userId: 'user',
        caixaLeitner: 2,
        proximaRevisao: '2026-10-14',
        totalAparicoes: 2,
        totalAcertos: 1,
        totalErros: 1,
        totalChutes: 0,
        estadoDominio: 'em_aprendizado',
        historico: [],
      },
      [todos[2].id]: {
        conceptId: todos[2].id,
        userId: 'user',
        caixaLeitner: 1,
        proximaRevisao: '2026-10-10',
        totalAparicoes: 3,
        totalAcertos: 1,
        totalErros: 2,
        totalChutes: 0,
        estadoDominio: 'critico',
        historico: [],
      },
    };

    const projecao = calcularProjecaoTemporal({
      estadosConceitos: mockEstados,
      dataAtualIso: '2026-10-09',
    });

    expect(projecao.conceitosIniciados).toBe(3);
    expect(projecao.conceitosDominados).toBe(1);
    expect(projecao.conceitosEmRetencao).toBe(1);
    expect(projecao.conceitosCriticos).toBe(1);
    expect(projecao.conceitosNaoIniciados).toBe(todos.length - 3);
    expect(projecao.retencaoProjetadaDataProva).toBeGreaterThanOrEqual(0.65);
    expect(projecao.ritmoDiarioRecomendado).toBeLessThanOrEqual(30);
  });

  it('deve estruturar os 6 Marcos de Disciplina cobrindo todos os módulos do edital', () => {
    expect(DEFINICAO_MARCOS_DISCIPLINA).toHaveLength(6);

    const idsEsperados = [
      'marco-fundamentos',
      'marco-representacao-descritiva',
      'marco-representacao-tematica',
      'marco-gestao-servicos',
      'marco-institucional-camara',
      'marco-conhecimentos-gerais',
    ];

    const idsPresentes = DEFINICAO_MARCOS_DISCIPLINA.map((m) => m.id);
    expect(idsPresentes).toEqual(idsEsperados);

    const projecao = calcularProjecaoTemporal({});
    expect(projecao.marcosDisciplina).toHaveLength(6);

    for (const marco of projecao.marcosDisciplina) {
      expect(marco.totalConceitos).toBeGreaterThan(0);
      expect(marco.titulo).toBeDefined();
    }
  });
});
