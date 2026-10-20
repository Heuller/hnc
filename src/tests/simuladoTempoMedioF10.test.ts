import { describe, it, expect } from 'vitest';
import { calcularMediaTempoPorItem } from '../domain/progressoEngine';

describe('F-10: Cálculo de Tempo Médio por Item no Simulado', () => {
  it('calcula corretamente para mini-simulado de 30 itens (ex.: 25 minutos = 1500s → 50s/item)', () => {
    const tempoSegundos = 1500; // 25 min
    const totalItens = 30;
    const media = calcularMediaTempoPorItem(tempoSegundos, totalItens);
    expect(media).toBe(50);
  });

  it('calcula corretamente para simulado de 100 itens (ex.: 80 minutos = 4800s → 48s/item)', () => {
    const tempoSegundos = 4800; // 80 min
    const totalItens = 100;
    const media = calcularMediaTempoPorItem(tempoSegundos, totalItens);
    expect(media).toBe(48);
  });

  it('calcula corretamente para mega simulado de 120 itens (ex.: 150 minutos = 9000s → 75s/item)', () => {
    const tempoSegundos = 9000; // 2h30
    const totalItens = 120;
    const media = calcularMediaTempoPorItem(tempoSegundos, totalItens);
    expect(media).toBe(75);
  });

  it('calcula corretamente para simulado geral oficial de 180 itens (ex.: 300 minutos = 18000s → 100s/item)', () => {
    const tempoSegundos = 18000; // 5h00
    const totalItens = 180;
    const media = calcularMediaTempoPorItem(tempoSegundos, totalItens);
    expect(media).toBe(100);
  });

  it('trata divisão por zero graciosamente sem lançar NaN ou Infinity', () => {
    expect(calcularMediaTempoPorItem(1000, 0)).toBe(0);
    expect(calcularMediaTempoPorItem(0, 100)).toBe(0);
    expect(calcularMediaTempoPorItem(0, 0)).toBe(0);
    expect(calcularMediaTempoPorItem(-50, 100)).toBe(0);
    expect(calcularMediaTempoPorItem(100, -10)).toBe(0);
  });

  it('arredonda adequadamente para número inteiro mais próximo', () => {
    // 100s em 30 itens = 3.333s -> 3s
    expect(calcularMediaTempoPorItem(100, 30)).toBe(3);
    // 50s em 30 itens = 1.666s -> 2s
    expect(calcularMediaTempoPorItem(50, 30)).toBe(2);
  });
});
