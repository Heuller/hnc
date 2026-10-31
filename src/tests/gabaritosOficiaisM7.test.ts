import { disposicoesHistoricas } from './helpers/revisoesIndividuais';
import { describe, it, expect } from 'vitest';
import { simuladoPreservacao100Q } from '../content/questions/m7-preservacao-100q';
import { megaSimuladoCamara120Q } from '../content/questions/mega-simulado-camara-120q';
import { simuladoLegislativo100Q } from '../content/questions/m10-legislativo-100q';

describe('P17: Regressões editoriais de preservação (M7 e Conferências)', () => {
  const gabaritosEsperados: Record<string, { gabarito: 'C' | 'E' }> = {
    'm7-q-33': { gabarito: 'E' },
    'm7-q-58': { gabarito: 'E' },
    'm7-q-15': { gabarito: 'C' },
    'm7-q-20': { gabarito: 'C' },
    'm7-q-22': { gabarito: 'C' },
    'm7-q-25': { gabarito: 'C' },
    'm7-q-29': { gabarito: 'E' },
    'm7-q-46': { gabarito: 'C' },
    'm7-q-49': { gabarito: 'C' },
    'm7-q-50': { gabarito: 'C' },
    'm7-q-52': { gabarito: 'C' },
    'm7-q-53': { gabarito: 'E' },
    'm7-q-40': { gabarito: 'E' },
    'm7-q-32': { gabarito: 'C' },
    'm7-q-59': { gabarito: 'C' },
    'm7-q-43': { gabarito: 'C' },
    'm7-q-42': { gabarito: 'C' },
    'm7-q-39': { gabarito: 'E' },
    'm7-q-36': { gabarito: 'C' },
    'm7-q-44': { gabarito: 'E' },
  };

  it('preserva julgamentos editoriais de casos revisados do M7', () => {
    for (const [id, expected] of Object.entries(gabaritosEsperados)) {
      const q = simuladoPreservacao100Q.find((item) => item.id === id);
      expect(q, `Questão ${id} deve existir no simulado M7`).toBeDefined();
      expect(
        q?.gabarito,
        `Gabarito de ${id} deve ser rigorosamente ${expected.gabarito}`
      ).toBe(expected.gabarito);
    }
  });

  it('preserva origem não certificada e decisão editorial individual dos 2 itens históricos', () => {
    const q21 = simuladoPreservacao100Q.find((q) => q.id === 'm7-q-21');
    expect(q21).toBeDefined();
    expect(q21?.revisar).toBe(false);
    expect(q21?.fonteOriginal.verificado).toBe(false);
    expect(disposicoesHistoricas.has('m7-q-21')).toBe(true);

    const qMega85 = megaSimuladoCamara120Q.find((q) => q.id === 'mega-q-85');
    expect(qMega85).toBeDefined();
    expect(qMega85?.revisar).toBe(false);
    expect(qMega85?.fonteOriginal.verificado).toBe(false);
    expect(disposicoesHistoricas.has('mega-q-85')).toBe(true);
  });

  it('confirma que m10-q-94 mantém o gabarito oficial ERRADO do IPHAN 2018', () => {
    const q94 = simuladoLegislativo100Q.find((q) => q.id === 'm10-q-94');
    expect(q94).toBeDefined();
    expect(q94?.gabarito).toBe('E');
  });

  it('mantém 100 julgamentos válidos sem impor cota de gabarito', () => {
    expect(simuladoPreservacao100Q).toHaveLength(100);

    const certas = simuladoPreservacao100Q.filter((q) => q.gabarito === 'C').length;
    const erradas = simuladoPreservacao100Q.filter((q) => q.gabarito === 'E').length;

    expect(certas + erradas).toBe(100);

  });

  it('garante que nenhum item de M7 possui resíduos de extração de PDF', () => {
    for (const q of simuladoPreservacao100Q) {
      expect(q.item).not.toMatch(/^Biblioteconomia\s*-/i);
      expect(q.item).not.toMatch(/^\d+\)/);
      expect(q.item).not.toContain('extrapo lam');
      expect(q.item).not.toContain('instit ucionais');
      expect(q.item).not.toContain('racional ização');
      expect(q.item).not.toContain('doc umento');
      expect(q.item).not.toContain('infrae strutura');
      expect(q.item).not.toContain('intelect ual');
      expect(q.item).not.toContain('preservaç ão');
      expect(q.item).not.toContain('a rmazenados');
    }
  });
});
