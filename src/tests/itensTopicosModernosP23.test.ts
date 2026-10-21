import { describe, it, expect } from 'vitest';
import { ITENS_TOPICOS_MODERNOS_P23, TOPICOS_MODERNOS_LISTA } from '../content/drafts/itensTopicosModernosP23';

describe('P23 — Itens Inéditos para Tópicos Modernos do Edital (Rascunhos para Homologação)', () => {
  it('contém exatamente 24 itens inéditos cobrindo os 12 tópicos modernos', () => {
    expect(ITENS_TOPICOS_MODERNOS_P23).toHaveLength(24);
    expect(TOPICOS_MODERNOS_LISTA).toHaveLength(12);
  });

  it('apresenta paridade canônica de gabarito Cebraspe: exatamente 12 C e 12 E', () => {
    const certos = ITENS_TOPICOS_MODERNOS_P23.filter((i) => i.gabarito === 'C');
    const errados = ITENS_TOPICOS_MODERNOS_P23.filter((i) => i.gabarito === 'E');

    expect(certos).toHaveLength(12);
    expect(errados).toHaveLength(12);
  });

  it('todos os itens possuem extensão canônica Cebraspe entre 25 e 48 palavras', () => {
    ITENS_TOPICOS_MODERNOS_P23.forEach((item) => {
      const palavras = item.item.trim().split(/\s+/).filter(Boolean);
      expect(palavras.length).toBeGreaterThanOrEqual(25);
      expect(palavras.length).toBeLessThanOrEqual(48);
      expect(item.palavrasContagem).toBe(palavras.length);
    });
  });

  it('cada um dos 12 tópicos modernos possui exatamente 1 item C e 1 item E', () => {
    TOPICOS_MODERNOS_LISTA.forEach((topico) => {
      const itensDoTopico = ITENS_TOPICOS_MODERNOS_P23.filter((i) => i.topico === topico);
      expect(itensDoTopico).toHaveLength(2);
      expect(itensDoTopico.some((i) => i.gabarito === 'C')).toBe(true);
      expect(itensDoTopico.some((i) => i.gabarito === 'E')).toBe(true);
    });
  });

  it('proveniência honesta: todos marcados como inédita, rascunho e sem falsas bancas', () => {
    ITENS_TOPICOS_MODERNOS_P23.forEach((item) => {
      expect(item.status).toBe('rascunho');
      expect(item.tipoFonteOriginal).toBe('inedita');
      expect(item.verificado).toBe(false);
      expect(item.doutrinaReferencia.length).toBeGreaterThan(10);
      expect(item.justificativa.length).toBeGreaterThan(20);
    });
  });
});
