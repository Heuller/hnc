import { describe, it, expect } from 'vitest';
import { simuladoPreservacao100Q } from '../content/questions/m7-preservacao-100q';
import { megaSimuladoCamara120Q } from '../content/questions/mega-simulado-camara-120q';
import { simuladoLegislativo100Q } from '../content/questions/m10-legislativo-100q';
import { CONCURSO_CONFIG } from '../config/concurso.config';

describe('P17: Trava de Regressão de Gabaritos Oficiais Cebraspe (M7 e Conferências)', () => {
  const gabaritosEsperados: Record<string, { gabarito: 'C' | 'E'; concurso: string }> = {
    'm7-q-33': { gabarito: 'E', concurso: 'AJ TSE 2024 (múltiplos acessos não é preservação)' },
    'm7-q-58': { gabarito: 'E', concurso: 'AJ TSE 2024 (exportação p/ gerenciador não é preservação)' },
    'm7-q-15': { gabarito: 'C', concurso: 'SUFRAMA 2014 (necessidades: conhecimento vs ação - Figueiredo)' },
    'm7-q-20': { gabarito: 'C', concurso: 'SEE DF 2017 (conceito amplo de preservação digital)' },
    'm7-q-22': { gabarito: 'C', concurso: 'STJ 2012 (tríade: física, lógica, intelectual - Conway)' },
    'm7-q-25': { gabarito: 'C', concurso: 'UNEAL 2026 (crítica ao museu tecnológico)' },
    'm7-q-29': { gabarito: 'E', concurso: 'STJ 2024 (LexML não usa metadados proprietários)' },
    'm7-q-46': { gabarito: 'C', concurso: 'SUFRAMA 2014 (taxonomia de necessidades informacionais)' },
    'm7-q-49': { gabarito: 'C', concurso: 'SEE DF 2017 (conceito amplo de preservação digital)' },
    'm7-q-50': { gabarito: 'C', concurso: 'STJ 2012 (tríade física, lógica e intelectual)' },
    'm7-q-52': { gabarito: 'C', concurso: 'UNEAL 2026 (crítica ao museu tecnológico)' },
    'm7-q-53': { gabarito: 'E', concurso: 'STJ 2024 (LexML não é depositária de patrimônio)' },
    'm7-q-40': { gabarito: 'E', concurso: 'UNEAL 2026 (backup não garante preservação a longo prazo)' },
    'm7-q-32': { gabarito: 'C', concurso: 'SUFRAMA 2014 (cultura informacional produção e descarte)' },
    'm7-q-59': { gabarito: 'C', concurso: 'SUFRAMA 2014 (cultura informacional produção e descarte)' },
    'm7-q-43': { gabarito: 'C', concurso: 'SERPRO 2013 (e-Science e biblioteca científica)' },
    'm7-q-42': { gabarito: 'C', concurso: 'TRT 17 2013 (conceituação de preservação tecnológica)' },
    'm7-q-39': { gabarito: 'E', concurso: 'IPHAN 2018 (OAIS é modelo ISO 14721, não sistema brasileiro)' },
    'm7-q-36': { gabarito: 'C', concurso: 'STJ 2024 (ciclo de curadoria digital DCC)' },
    'm7-q-44': { gabarito: 'E', concurso: 'TRT 17 2013 (bibliografia comercial vs patrimônio cultural)' },
  };

  it('trava os 20 gabaritos oficiais corrigidos no M7 contra qualquer inversão futura', () => {
    for (const [id, expected] of Object.entries(gabaritosEsperados)) {
      const q = simuladoPreservacao100Q.find((item) => item.id === id);
      expect(q, `Questão ${id} deve existir no simulado M7`).toBeDefined();
      expect(
        q?.gabarito,
        `Gabarito de ${id} (${expected.concurso}) deve ser rigorosamente ${expected.gabarito}`
      ).toBe(expected.gabarito);
    }
  });

  it('marca os 2 itens divergentes (m7-q-21 e mega-q-85) com flag revisar: true', () => {
    const q21 = simuladoPreservacao100Q.find((q) => q.id === 'm7-q-21');
    expect(q21).toBeDefined();
    expect(q21?.revisar, 'm7-q-21 deve ter flag revisar: true para aferição no portal oficial').toBe(true);

    const qMega85 = megaSimuladoCamara120Q.find((q) => q.id === 'mega-q-85');
    expect(qMega85).toBeDefined();
    expect(qMega85?.revisar, 'mega-q-85 deve ter flag revisar: true para aferição no portal oficial').toBe(true);
  });

  it('confirma que m10-q-94 mantém o gabarito oficial ERRADO do IPHAN 2018', () => {
    const q94 = simuladoLegislativo100Q.find((q) => q.id === 'm10-q-94');
    expect(q94).toBeDefined();
    expect(q94?.gabarito).toBe('E');
  });

  it('mantém a paridade estrita Cebraspe de 50 C / 50 E no Simulado M7', () => {
    expect(simuladoPreservacao100Q).toHaveLength(100);

    const certas = simuladoPreservacao100Q.filter((q) => q.gabarito === 'C').length;
    const erradas = simuladoPreservacao100Q.filter((q) => q.gabarito === 'E').length;

    expect(certas + erradas).toBe(100);
    expect(certas).toBe(50);
    expect(erradas).toBe(50);

    const { certosMin, certosMax } = CONCURSO_CONFIG.banca.simetriaGabarito;
    const percentCertas = (certas / 100) * 100;
    expect(percentCertas).toBeGreaterThanOrEqual(certosMin);
    expect(percentCertas).toBeLessThanOrEqual(certosMax);
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
