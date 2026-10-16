// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DESIGN_TOKENS } from '../config/designTokens';
import { DesignSystemPage } from '../pages/DesignSystemPage';

describe('U6.1: Sistema de Design "Papel e Tinta" e 3 Níveis de Superfície', () => {
  it('deve conter tokens centralizados com 3 níveis de superfície para claro e escuro', () => {
    // Claro
    expect(DESIGN_TOKENS.superficies.claro.nivel1.hex).toBe('#FAF7F0');
    expect(DESIGN_TOKENS.superficies.claro.nivel2.hex).toBe('#FFFFFF');
    expect(DESIGN_TOKENS.superficies.claro.nivel3.hex).toBe('#F2EEE4');

    // Escuro
    expect(DESIGN_TOKENS.superficies.escuro.nivel1.hex).toBe('#0D1220');
    expect(DESIGN_TOKENS.superficies.escuro.nivel2.hex).toBe('#141B2E');
    expect(DESIGN_TOKENS.superficies.escuro.nivel3.hex).toBe('#1B2440');
  });

  it('deve fixar corpo de texto da leitura em no mínimo 16px (1rem) para celular', () => {
    expect(DESIGN_TOKENS.tipografia.escala.base.px).toBeGreaterThanOrEqual(16);
    expect(DESIGN_TOKENS.tipografia.escala.base.rem).toBe('1rem');
    expect(DESIGN_TOKENS.geometria.alvoToqueMinimoPx).toBeGreaterThanOrEqual(44);
  });

  it('deve conter os 5 callouts padronizados em português', () => {
    const tipos = Object.keys(DESIGN_TOKENS.callouts);
    expect(tipos).toEqual(['nota', 'dica', 'importante', 'atencao', 'cascaDeBanana']);
    expect(DESIGN_TOKENS.callouts.nota.rotulo).toBe('Nota');
    expect(DESIGN_TOKENS.callouts.dica.rotulo).toBe('Dica');
    expect(DESIGN_TOKENS.callouts.importante.rotulo).toBe('Importante');
    expect(DESIGN_TOKENS.callouts.atencao.rotulo).toBe('Atenção');
    expect(DESIGN_TOKENS.callouts.cascaDeBanana.rotulo).toBe('Casca de banana');
  });

  it('deve renderizar a DesignSystemPage com os 3 níveis e os 5 callouts visíveis', () => {
    render(<DesignSystemPage />);

    // 3 Níveis de Superfície
    expect(screen.getByText(/Três Níveis de Superfície/i)).toBeTruthy();
    expect(screen.getByText(/Nível 1 · Fundo Base/i)).toBeTruthy();
    expect(screen.getByText(/Nível 2 · Cartão \/ Leitura/i)).toBeTruthy();
    expect(screen.getByText(/Nível 3 · Elevado \/ Gaveta/i)).toBeTruthy();

    // Callouts em português
    expect(screen.getByText('Nota')).toBeTruthy();
    expect(screen.getByText('Dica')).toBeTruthy();
    expect(screen.getByText('Importante')).toBeTruthy();
    expect(screen.getByText('Atenção')).toBeTruthy();
    expect(screen.getByText('Casca de banana')).toBeTruthy();

    // Alvos táteis
    expect(screen.getAllByText(/Alvos de Toque/i).length).toBeGreaterThanOrEqual(1);
  });
});
