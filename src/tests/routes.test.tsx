// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import React from 'react';
import { render, act } from '@testing-library/react';
import { useNavigationStore } from '../store/useNavigationStore';
import { PainelPage } from '../pages/PainelPage';
import { TeoriaPage } from '../pages/TeoriaPage';
import { SimuladoPage } from '../pages/SimuladoPage';
import { RadarPage } from '../pages/RadarPage';
import { ProgressoPage } from '../pages/ProgressoPage';
import { CadernoErrosPage } from '../pages/CadernoErrosPage';
import { FolhaVesperaPage } from '../pages/FolhaVesperaPage';

import { JornadaPage } from '../pages/JornadaPage';
import { TreinosPage } from '../pages/TreinosPage';
import { DiscursivaPage } from '../pages/DiscursivaPage';

describe('Teste de Fumaça de Rotas e Normalização de Roteamento (Regra B1)', () => {
  let consoleErrors: string[] = [];
  const originalConsoleError = console.error;

  beforeEach(() => {
    consoleErrors = [];
    console.error = (...args: unknown[]) => {
      consoleErrors.push(args.map(String).join(' '));
      originalConsoleError(...args);
    };

    // Mock IntersectionObserver para jsdom
    class MockIntersectionObserver {
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
    }
    window.IntersectionObserver = MockIntersectionObserver as any;
  });

  afterEach(() => {
    console.error = originalConsoleError;
  });

  it('deve normalizar corretamente hashes com e sem barra (#painel, #/painel, /painel)', () => {
    // Teste 1: #painel
    window.location.hash = '#painel';
    act(() => {
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });
    expect(useNavigationStore.getState().activeView).toBe('painel');

    // Teste 2: #/painel
    window.location.hash = '#/painel';
    act(() => {
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });
    expect(useNavigationStore.getState().activeView).toBe('painel');

    // Teste 3: #teoria e #/teoria
    window.location.hash = '#teoria';
    act(() => {
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });
    expect(useNavigationStore.getState().activeView).toBe('teoria');

    window.location.hash = '#/teoria';
    act(() => {
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });
    expect(useNavigationStore.getState().activeView).toBe('teoria');

    // Teste 4: #jornada e #/jornada
    window.location.hash = '#jornada';
    act(() => {
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });
    expect(useNavigationStore.getState().activeView).toBe('jornada');

    window.location.hash = '#/jornada';
    act(() => {
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });
    expect(useNavigationStore.getState().activeView).toBe('jornada');

    // Teste 5: #treinos e #/treinos
    window.location.hash = '#treinos';
    act(() => {
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });
    expect(useNavigationStore.getState().activeView).toBe('treinos');

    // Teste 6: #discursiva
    window.location.hash = '#discursiva';
    act(() => {
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });
    expect(useNavigationStore.getState().activeView).toBe('discursiva');

    // Teste 7: #folha-vespera
    window.location.hash = '#folha-vespera';
    act(() => {
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });
    expect(useNavigationStore.getState().activeView).toBe('folha-vespera');

    // Teste 8: fallback limpo para hash desconhecido
    window.location.hash = '#rota-inexistente';
    act(() => {
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });
    expect(useNavigationStore.getState().activeView).toBe('painel');
  });

  const routes: { name: string; component: React.ReactElement }[] = [
    { name: 'PainelPage', component: <PainelPage /> },
    { name: 'JornadaPage', component: <JornadaPage /> },
    { name: 'TreinosPage', component: <TreinosPage /> },
    { name: 'DiscursivaPage', component: <DiscursivaPage /> },
    { name: 'TeoriaPage', component: <TeoriaPage /> },
    { name: 'SimuladoPage', component: <SimuladoPage /> },
    { name: 'RadarPage', component: <RadarPage /> },
    { name: 'ProgressoPage', component: <ProgressoPage /> },
    { name: 'CadernoErrosPage', component: <CadernoErrosPage /> },
    { name: 'FolhaVesperaPage', component: <FolhaVesperaPage /> },
  ];

  routes.forEach(({ name, component }) => {
    it(`deve renderizar a tela ${name} com h1 presente e sem erros de console`, () => {
      const { container } = render(component);
      const h1Element = container.querySelector('h1');
      expect(h1Element).not.toBeNull();
      expect(h1Element?.textContent?.trim().length).toBeGreaterThan(0);
      expect(container.innerHTML.trim().length).toBeGreaterThan(50);
      expect(consoleErrors).toHaveLength(0);
    });
  });
});
