import { describe, it, expect } from 'vitest';
import {
  validarRegrasDistribuicao,
  validarDistribuicaoSecoes,
  intercalarTiposExercicios,
  distribuirItensPorSecoes,
} from '../domain/exercicios/distribuicaoExercicios';
import type { ExercicioX1, ExercicioX2, ExercicioX3, ExercicioX4, SecaoTeoria } from '../domain/schemas/modulo.schema';

describe('U4.3: Regras Pedagógicas de Distribuição de Exercícios', () => {
  const itemX1: ExercicioX1 = {
    id: 'x1',
    tipo: 'X1',
    enunciado: 'Pré-teste ativação',
    gabarito: 'C',
    justificativa: 'Justificativa do pré-teste',
    fonte: 'Fonte',
    editalRef: 'Edital',
  };

  const itemX2A: ExercicioX2 = {
    id: 'x2-a',
    tipo: 'X2',
    enunciado: 'Assertiva Cebraspe 1',
    gabarito: 'C',
    justificativa: 'Justificativa 1',
    fonte: 'Fonte',
    editalRef: 'Edital',
  };

  const itemX2B: ExercicioX2 = {
    id: 'x2-b',
    tipo: 'X2',
    enunciado: 'Assertiva Cebraspe 2',
    gabarito: 'E',
    justificativa: 'Justificativa 2',
    fonte: 'Fonte',
    editalRef: 'Edital',
  };

  const itemX2C: ExercicioX2 = {
    id: 'x2-c',
    tipo: 'X2',
    enunciado: 'Assertiva Cebraspe 3',
    gabarito: 'C',
    justificativa: 'Justificativa 3',
    fonte: 'Fonte',
    editalRef: 'Edital',
  };

  const itemX3: ExercicioX3 = {
    id: 'x3',
    tipo: 'X3',
    enunciado: 'Corrija assertiva',
    gabarito: 'Versão certa',
    justificativa: 'Justificativa',
    fonte: 'Fonte',
    editalRef: 'Edital',
  };

  const itemX4: ExercicioX4 = {
    id: 'x4',
    tipo: 'X4',
    enunciado: 'Brain dump livre',
    pontosChave: ['ponto 1', 'ponto 2'],
    gabarito: ['ponto 1', 'ponto 2'],
    justificativa: 'Justificativa',
    fonte: 'Fonte',
    editalRef: 'Edital',
  };

  it('detecta violação se houver mais de 2 itens consecutivos do mesmo tipo', () => {
    // 3 itens X2 em sequência
    const lista = [itemX2A, itemX2B, itemX2C];
    const res = validarRegrasDistribuicao(lista);

    expect(res.valido).toBe(false);
    expect(res.violacoes.some((v) => v.regra === 'MAX_DOIS_CONSECUTIVOS')).toBe(true);
  });

  it('permite até 2 itens consecutivos do mesmo tipo intercalados por outro', () => {
    // X2, X2, X3, X2 (máx 2 consecutivos)
    const lista = [itemX2A, itemX2B, itemX3, itemX2C];
    const res = validarRegrasDistribuicao(lista);

    expect(res.valido).toBe(true);
    expect(res.violacoes).toHaveLength(0);
  });

  it('detecta violação se pré-teste (X1) for posicionado após o início', () => {
    const lista = [itemX2A, itemX1, itemX3];
    const res = validarRegrasDistribuicao(lista);

    expect(res.valido).toBe(false);
    expect(res.violacoes.some((v) => v.regra === 'PRE_TESTE_POSICAO')).toBe(true);
  });

  it('detecta violação se pré-teste (X1) for usado em tema que não é novo', () => {
    const lista = [itemX1, itemX2A, itemX3];
    const res = validarRegrasDistribuicao(lista, { isTemaNovo: false });

    expect(res.valido).toBe(false);
    expect(res.violacoes.some((v) => v.regra === 'PRE_TESTE_TEMA_NOVO')).toBe(true);
  });

  it('detecta violação se brain dump (X4) não estiver na última posição', () => {
    const lista = [itemX2A, itemX4, itemX3];
    const res = validarRegrasDistribuicao(lista);

    expect(res.valido).toBe(false);
    expect(res.violacoes.some((v) => v.regra === 'BRAIN_DUMP_POSICAO')).toBe(true);
  });

  it('valida sequência perfeitamente estruturada: X1 no início, X4 no fim, sem trincas', () => {
    const lista = [itemX1, itemX2A, itemX3, itemX2B, itemX4];
    const res = validarRegrasDistribuicao(lista, { isTemaNovo: true });

    expect(res.valido).toBe(true);
    expect(res.violacoes).toHaveLength(0);
  });

  it('intercalarTiposExercicios quebra sequências consecutivas e preserva X1 e X4', () => {
    // Trinca de X2 com X1 e X4 desordenados
    const lista = [itemX2A, itemX2B, itemX2C, itemX1, itemX4];
    const intercalada = intercalarTiposExercicios(lista);

    expect(intercalada[0].tipo).toBe('X1');
    expect(intercalada[intercalada.length - 1].tipo).toBe('X4');
  });

  it('validarDistribuicaoSecoes garante teto de 1 item por seção', () => {
    const secoesValidas: SecaoTeoria[] = [
      { id: 'sec-1', nivel: 3, titulo: 'Conceito Inicial', conteudo: 'Texto', itens: [itemX1] },
      { id: 'sec-2', nivel: 3, titulo: 'Doutrina Central', conteudo: 'Texto', itens: [itemX2A] },
      { id: 'sec-3', nivel: 3, titulo: 'Síntese', conteudo: 'Texto', itens: undefined },
    ];
    expect(validarDistribuicaoSecoes(secoesValidas).valido).toBe(true);

    const secoesComExcesso: SecaoTeoria[] = [
      { id: 'sec-1', nivel: 3, titulo: 'Conceito Inicial', conteudo: 'Texto', itens: [itemX1, itemX2A] },
    ];
    const res = validarDistribuicaoSecoes(secoesComExcesso);
    expect(res.valido).toBe(false);
    expect(res.violacoes.some((v) => v.regra === 'UM_ITEM_POR_SECAO')).toBe(true);
  });

  it('distribuirItensPorSecoes associa 1 item a cada seção', () => {
    const secoes: SecaoTeoria[] = [
      { id: 'sec-1', nivel: 3, titulo: 'Seção 1', conteudo: 'Texto' },
      { id: 'sec-2', nivel: 3, titulo: 'Seção 2', conteudo: 'Texto' },
    ];
    const itens = [itemX1, itemX2A];

    const distribuidas = distribuirItensPorSecoes(secoes, itens);
    expect(distribuidas[0].itens).toHaveLength(1);
    expect(distribuidas[1].itens).toHaveLength(1);
  });
});
