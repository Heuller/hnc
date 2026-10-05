import { describe, it, expect } from 'vitest';
import { getModuleTheme, MODULE_THEMES } from '../domain/moduleThemes';

describe('OKLCH Module Themes & Normalization (Parte C)', () => {
  it('contém exatamente os 10 macro-módulos com as matizes OKLCH especificadas', () => {
    expect(MODULE_THEMES.m1.hue).toBe(70);
    expect(MODULE_THEMES.m2.hue).toBe(205);
    expect(MODULE_THEMES.m3.hue).toBe(300);
    expect(MODULE_THEMES.m4.hue).toBe(105);
    expect(MODULE_THEMES.m5.hue).toBe(255);
    expect(MODULE_THEMES.m6.hue).toBe(340);
    expect(MODULE_THEMES.m7.hue).toBe(180);
    expect(MODULE_THEMES.m8.hue).toBe(45);
    expect(MODULE_THEMES.m9.hue).toBe(280);
    expect(MODULE_THEMES.m10.hue).toBe(230);
    expect(MODULE_THEMES.m11.hue).toBe(160);
    expect(MODULE_THEMES.m12.hue).toBe(215);
    expect(MODULE_THEMES.m13.hue).toBe(20);
    expect(MODULE_THEMES.m14.hue).toBe(195);
  });

  it('normaliza corretamente chaves em diferentes formatos (m1, M1, 1, 1.1)', () => {
    expect(getModuleTheme('m1').codigo).toBe('M1');
    expect(getModuleTheme('M1').codigo).toBe('M1');
    expect(getModuleTheme(1).codigo).toBe('M1');
    expect(getModuleTheme('1.1').codigo).toBe('M1');
    expect(getModuleTheme('1.4').codigo).toBe('M1');

    expect(getModuleTheme('m2').codigo).toBe('M2');
    expect(getModuleTheme('2.3').codigo).toBe('M2');

    expect(getModuleTheme('m10').codigo).toBe('M10');
    expect(getModuleTheme('10.1').codigo).toBe('M10');
    expect(getModuleTheme(10).codigo).toBe('M10');

    expect(getModuleTheme('m11').codigo).toBe('M11');
    expect(getModuleTheme('11.1').codigo).toBe('M11');
    expect(getModuleTheme(11).codigo).toBe('M11');

    expect(getModuleTheme('m12').codigo).toBe('M12');
    expect(getModuleTheme('12.1').codigo).toBe('M12');
    expect(getModuleTheme(12).codigo).toBe('M12');

    expect(getModuleTheme('m13').codigo).toBe('M13');
    expect(getModuleTheme('13.1').codigo).toBe('M13');
    expect(getModuleTheme(13).codigo).toBe('M13');

    expect(getModuleTheme('m14').codigo).toBe('M14');
    expect(getModuleTheme('14.1').codigo).toBe('M14');
    expect(getModuleTheme(14).codigo).toBe('M14');
  });

  it('possui variáveis CSS sólidas e suaves devidamente formatadas', () => {
    for (let i = 1; i <= 14; i++) {
      const theme = getModuleTheme(`m${i}`);
      expect(theme.solidVar).toBe(`var(--m${i}-solid)`);
      expect(theme.softVar).toBe(`var(--m${i}-soft)`);
      expect(theme.textVar).toBe(`var(--m${i}-text)`);
      expect(theme.borderVar).toBe(`var(--m${i}-border)`);
    }
  });
});
