import { describe, it, expect } from 'vitest';
import { ITENS_LACUNAS_CARGO5 } from '../content/drafts/itensLacunasEditalCargo5';
import { REGEX_TERMOS_PROIBIDOS_INEDITA } from '../domain/proveniencia';

describe('Fase 3 — Lacunas do Edital do Cargo 5 (Biblioteconomia)', () => {
  it('contém exatamente 48 itens inéditos distribuídos entre as 12 lacunas temáticas', () => {
    expect(ITENS_LACUNAS_CARGO5).toHaveLength(48);
  });

  it('apresenta paridade canônica rigorosa: exatamente 24 Certos e 24 Errados', () => {
    const certos = ITENS_LACUNAS_CARGO5.filter((i) => i.gabarito === 'C');
    const errados = ITENS_LACUNAS_CARGO5.filter((i) => i.gabarito === 'E');
    expect(certos).toHaveLength(24);
    expect(errados).toHaveLength(24);
  });

  it('cada um dos 12 temas possui exatamente 4 itens (2 C e 2 E)', () => {
    const temas = new Set(ITENS_LACUNAS_CARGO5.map((i) => i.tema));
    expect(temas.size).toBe(12);

    for (const t of temas) {
      const itensDoTema = ITENS_LACUNAS_CARGO5.filter((i) => i.tema === t);
      expect(itensDoTema).toHaveLength(4);
      const c = itensDoTema.filter((i) => i.gabarito === 'C');
      const e = itensDoTema.filter((i) => i.gabarito === 'E');
      expect(c).toHaveLength(2);
      expect(e).toHaveLength(2);
    }
  });

  it('todos os itens possuem campos completos de estudo reverso (gatilho, justificativa, armadilha, reversão)', () => {
    for (const item of ITENS_LACUNAS_CARGO5) {
      // Gatilho deve ser substring literal do item
      expect(item.item).toContain(item.gatilho);

      // Justificativa deve começar com Gabarito e ter entre 220 e 700 chars
      expect(item.justificativa).toMatch(/^Gabarito (CERTO|ERRADO)\./);
      expect(item.justificativa.length).toBeGreaterThanOrEqual(220);
      expect(item.justificativa.length).toBeLessThanOrEqual(700);

      // Armadilha da banca deve começar com Técnica:
      expect(item.armadilhaBanca).toMatch(/^Técnica:/);
      expect(item.armadilhaBanca.length).toBeGreaterThanOrEqual(40);
      expect(item.armadilhaBanca.length).toBeLessThanOrEqual(360);

      // Itens E devem ter versao_correta
      if (item.gabarito === 'E') {
        expect(item.versao_correta).toBeDefined();
        expect(item.versao_correta!.length).toBeGreaterThan(20);
      }

      // Itens C devem ter versao_errada
      if (item.gabarito === 'C') {
        expect(item.versao_errada).toBeDefined();
        expect(item.versao_errada!.length).toBeGreaterThan(20);
      }

      // Doutrina de referência válida
      expect(item.doutrinaReferencia.length).toBeGreaterThan(5);

      // Proveniência honesta e sem termos proibidos
      expect(item.tipoFonteOriginal).toBe('inedita');
      expect(item.verificado).toBe(false);
      expect(REGEX_TERMOS_PROIBIDOS_INEDITA.test(`${item.justificativa} ${item.armadilhaBanca}`)).toBe(false);
    }
  });
});
