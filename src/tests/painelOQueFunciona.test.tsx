// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PainelOQueFunciona } from '../components/analytics/PainelOQueFunciona';
import { useProgressStore } from '../store/useProgressStore';
import type { ItemAttempt } from '../domain/itemAttempts';

describe('U4.5 - Painel O que Funciona para Você (Seção 3.4)', () => {
  beforeEach(() => {
    useProgressStore.setState({
      itemAttempts: [],
      checkpointsRespondidos: {},
      historicoSimulados: [],
    });
  });

  it('renderiza o cabeçalho e a ressalva estatística obrigatória (N=1)', () => {
    render(<PainelOQueFunciona />);

    expect(screen.getByText('O que Funciona para Você')).toBeTruthy();
    expect(screen.getByText(/Ressalva Estatística e Metodológica \(N = 1\)/i)).toBeTruthy();
    expect(screen.getByText(/tendências descritivas observadas/i)).toBeTruthy();
    expect(screen.getByText(/não uma comprovação científica causal/i)).toBeTruthy();
    expect(screen.getByText(/Pashler et al\. \(2008\)/i)).toBeTruthy();
    expect(screen.getByText(/Bjork & Bjork, 2011/i)).toBeTruthy();
  });

  it('exibe e filtra as tipologias cognitivas de leitura (X1 a X10) e revisão', () => {
    render(<PainelOQueFunciona />);

    // Verifica se os formatos X1 e X2 aparecem
    expect(screen.getByText('X1')).toBeTruthy();
    expect(screen.getByText('Pré-teste Epistêmico')).toBeTruthy();
    expect(screen.getByText('X2')).toBeTruthy();
    expect(screen.getByText('Julgamento C/E Clássico')).toBeTruthy();

    // Filtra apenas formatos de revisão
    const btnRevisao = screen.getByRole('button', { name: /Formatos de Revisão/i });
    fireEvent.click(btnRevisao);

    // Formato F1 deve estar presente
    expect(screen.getByText('F1')).toBeTruthy();
    // Formato X1 da leitura não deve estar visível
    expect(screen.queryByText('Pré-teste Epistêmico')).toBeNull();

    // Volta para todos
    const btnTodos = screen.getByRole('button', { name: /Todas as Tipologias/i });
    fireEvent.click(btnTodos);
    expect(screen.getByText('Pré-teste Epistêmico')).toBeTruthy();
  });

  it('computa acertos da 1ª tentativa e hipercorreções a partir de itemAttempts', () => {
    const mockAttempts: ItemAttempt[] = [
      {
        id: '11111111-1111-4111-8111-111111111111',
        user_id: 'user-1',
        item_id: 'cp-1-1-1', // tipo X2 no M1.1
        submodulo_id: '1.1',
        modulo_id: 'm1',
        contexto: 'teoria',
        resposta: 'C',
        correto: true,
        certeza: 'alta',
        tentativa_n: 1,
        criado_em: '2026-10-15T12:00:00.000Z',
      },
      {
        id: '22222222-2222-4222-8222-222222222222',
        user_id: 'user-1',
        item_id: 'cp-1-1-2', // tipo X2 (ou X3)
        submodulo_id: '1.1',
        modulo_id: 'm1',
        contexto: 'teoria',
        resposta: 'E',
        correto: false,
        certeza: 'alta', // ERRO COM ALTA CERTEZA -> HIPERCORREÇÃO
        tentativa_n: 1,
        criado_em: '2026-10-15T12:05:00.000Z',
      },
    ];

    useProgressStore.setState({
      itemAttempts: mockAttempts,
    });

    render(<PainelOQueFunciona />);

    // 2 respostas analisadas
    expect(screen.getByText('2 respostas analisadas')).toBeTruthy();

    // 1 caso de hipercorreção detectado
    expect(screen.getByText('1 casos detectados')).toBeTruthy();
  });
});
