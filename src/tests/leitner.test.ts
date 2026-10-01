import { describe, it, expect } from 'vitest';
import {
  criarItemLeitner,
  processarRespostaLeitner,
  getItensPendentesRevisao,
  somarDiasDataIso,
  getDistribuicaoCaixasLeitner,
  LEITNER_INTERVALOS_DIAS,
} from '../domain/leitner';

describe('Motor de Repetição Espaçada - Sistema Leitner (leitner.ts)', () => {
  it('deve calcular corretamente a soma de dias em formato ISO', () => {
    expect(somarDiasDataIso('2026-10-01', 1)).toBe('2026-10-02');
    expect(somarDiasDataIso('2026-10-01', 3)).toBe('2026-10-04');
    expect(somarDiasDataIso('2026-10-31', 1)).toBe('2026-11-01');
    expect(somarDiasDataIso('2026-12-31', 1)).toBe('2027-01-01');
    expect(LEITNER_INTERVALOS_DIAS[1]).toBe(1);
    expect(LEITNER_INTERVALOS_DIAS[2]).toBe(3);
    expect(LEITNER_INTERVALOS_DIAS[3]).toBe(7);
    expect(LEITNER_INTERVALOS_DIAS[4]).toBe(14);
    expect(LEITNER_INTERVALOS_DIAS[5]).toBe(30);
  });

  it('deve inicializar um novo item na Caixa 1 com revisão para o dia seguinte', () => {
    const item = criarItemLeitner('cp-1-1-1', '1.1', '2026-10-01');
    expect(item.id).toBe('cp-1-1-1');
    expect(item.submoduloId).toBe('1.1');
    expect(item.caixa).toBe(1);
    expect(item.ultimaRevisao).toBe('2026-10-01');
    expect(item.proximaRevisao).toBe('2026-10-02');
    expect(item.historicoAcertos).toBe(0);
    expect(item.historicoErros).toBe(0);
  });

  it('deve avançar sucessivamente pelas caixas 1 -> 2 -> 3 -> 4 -> 5 mediante acertos', () => {
    let item = criarItemLeitner('cp-1', '1.1', '2026-10-01');

    // 1º acerto: vai para caixa 2 (+3 dias)
    item = processarRespostaLeitner(item, true, '2026-10-02');
    expect(item.caixa).toBe(2);
    expect(item.proximaRevisao).toBe('2026-10-05');
    expect(item.historicoAcertos).toBe(1);

    // 2º acerto: vai para caixa 3 (+7 dias)
    item = processarRespostaLeitner(item, true, '2026-10-05');
    expect(item.caixa).toBe(3);
    expect(item.proximaRevisao).toBe('2026-10-12');
    expect(item.historicoAcertos).toBe(2);

    // 3º acerto: vai para caixa 4 (+14 dias)
    item = processarRespostaLeitner(item, true, '2026-10-12');
    expect(item.caixa).toBe(4);
    expect(item.proximaRevisao).toBe('2026-10-26');
    expect(item.historicoAcertos).toBe(3);

    // 4º acerto: vai para caixa 5 (+30 dias)
    item = processarRespostaLeitner(item, true, '2026-10-26');
    expect(item.caixa).toBe(5);
    expect(item.proximaRevisao).toBe('2026-11-25');
    expect(item.historicoAcertos).toBe(4);

    // 5º acerto na caixa 5: permanece na caixa 5 (+30 dias)
    item = processarRespostaLeitner(item, true, '2026-11-25');
    expect(item.caixa).toBe(5);
    expect(item.proximaRevisao).toBe('2026-12-25');
  });

  it('deve rebaixar imediatamente para a Caixa 1 caso o usuário erre o item em qualquer caixa', () => {
    let item = criarItemLeitner('cp-1', '1.1', '2026-10-01');
    // Simula item avançado até caixa 4
    item = { ...item, caixa: 4, historicoAcertos: 3 };

    // Errou na caixa 4
    const itemAposErro = processarRespostaLeitner(item, false, '2026-10-26');
    expect(itemAposErro.caixa).toBe(1);
    expect(itemAposErro.proximaRevisao).toBe('2026-10-27'); // +1 dia
    expect(itemAposErro.historicoErros).toBe(1);
  });

  it('deve identificar corretamente os itens pendentes de revisão para uma data simulada', () => {
    const item1 = {
      ...criarItemLeitner('cp-1', '1.1', '2026-10-01'),
      proximaRevisao: '2026-10-02',
    };
    const item2 = {
      ...criarItemLeitner('cp-2', '1.1', '2026-10-01'),
      proximaRevisao: '2026-10-05',
    };
    const item3 = {
      ...criarItemLeitner('cp-3', '1.1', '2026-10-01'),
      proximaRevisao: '2026-10-01',
    };

    const itens = [item1, item2, item3];

    // No dia 2026-10-01: somente item3 está pendente
    const pendentes01 = getItensPendentesRevisao(itens, '2026-10-01');
    expect(pendentes01.map((i) => i.id)).toEqual(['cp-3']);

    // No dia 2026-10-02: item1 e item3 estão pendentes
    const pendentes02 = getItensPendentesRevisao(itens, '2026-10-02');
    expect(pendentes02.map((i) => i.id)).toEqual(['cp-1', 'cp-3']);

    // No dia 2026-10-06: todos os 3 itens estão pendentes
    const pendentes06 = getItensPendentesRevisao(itens, '2026-10-06');
    expect(pendentes06).toHaveLength(3);
  });

  it('deve calcular a distribuição estatística das caixas Leitner', () => {
    const itens = [
      { ...criarItemLeitner('1', '1.1', '2026-10-01'), caixa: 1 as const },
      { ...criarItemLeitner('2', '1.1', '2026-10-01'), caixa: 1 as const },
      { ...criarItemLeitner('3', '1.1', '2026-10-01'), caixa: 3 as const },
      { ...criarItemLeitner('4', '1.1', '2026-10-01'), caixa: 5 as const },
    ];

    const dist = getDistribuicaoCaixasLeitner(itens);
    expect(dist).toEqual({ 1: 2, 2: 0, 3: 1, 4: 0, 5: 1 });
  });
});
