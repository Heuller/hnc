import { describe, it, expect } from 'vitest';
import { hojeLocalIso, diasAtrasIso, somarDiasIso, diaDaSemanaIso } from '../utils/dataLocal';

describe('dataLocal (fuso de Brasília)', () => {
  it('às 21h15 de 24/10 em Brasília ainda é dia 24 (UTC já é dia 25)', () => {
    const agora = new Date('2026-10-25T00:15:00Z'); // 21:15 BRT de 24/10
    expect(agora.toISOString().split('T')[0]).toBe('2026-10-25'); // o bug antigo
    expect(hojeLocalIso(agora)).toBe('2026-10-24');
  });

  it('às 23h59 em Brasília continua no mesmo dia e à 0h vira o dia seguinte', () => {
    expect(hojeLocalIso(new Date('2026-10-25T02:59:00Z'))).toBe('2026-10-24'); // 23:59 BRT
    expect(hojeLocalIso(new Date('2026-10-25T03:00:00Z'))).toBe('2026-10-25'); // 00:00 BRT
  });

  it('diasAtrasIso e somarDiasIso cruzam mês e ano sem drift', () => {
    expect(diasAtrasIso(1, new Date('2026-11-01T01:00:00Z'))).toBe('2026-10-30');
    expect(somarDiasIso('2026-12-31', 1)).toBe('2027-01-01');
    expect(somarDiasIso('2027-01-01', -1)).toBe('2026-12-31');
  });

  it('dia da semana não depende do fuso do navegador', () => {
    expect(diaDaSemanaIso('2027-01-17')).toBe(0); // domingo, dia da prova
    expect(diaDaSemanaIso('2026-10-26')).toBe(1);
  });
});
