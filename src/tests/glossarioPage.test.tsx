// @vitest-environment jsdom
import { act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { GlossarioPage } from '../pages/GlossarioPage';
import { useGlossarioStore } from '../store/useGlossarioStore';
import { useNavigationStore } from '../store/useNavigationStore';
import * as glossarioService from '../domain/glossario/glossarioService';

describe('GlossarioPage e VerbeteDetalhesDrawer (U3.11)', () => {
  beforeEach(() => {
    localStorage.clear();
    useGlossarioStore.setState({
      termosSilenciados: [],
      termosSuspeitos: [],
      destaquesHabilitados: true,
      termoAtivoDrawer: null,
      isDrawerOpen: false,
      sugestaoReabertura: null,
    });
    useNavigationStore.setState({
      activeView: 'glossario',
      selectedSubmodule: '1.1',
    });

    vi.spyOn(glossarioService, 'carregarAcervoUnificado').mockResolvedValue(
      glossarioService.getTermosTecnicos()
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('deve renderizar o cabeçalho editorial e a barra de busca', async () => {
    await act(async () => {
      render(<GlossarioPage />);
    });

    expect(screen.getByText('Glossário & Dicionário do Concurso')).toBeDefined();
    expect(
      screen.getByPlaceholderText(/Buscar termo, sigla ou conceito/i)
    ).toBeDefined();
    expect(screen.getByText('Siglas do Edital (TI/IA)')).toBeDefined();
  });

  it('deve listar termos técnicos e permitir alternar filtros', async () => {
    await act(async () => {
      render(<GlossarioPage />);
    });

    // Termo SQL deve estar visível
    expect(screen.getByText('SQL')).toBeDefined();

    // Filtra pela aba técnica
    const abaTec = screen.getByText('Siglas do Edital (TI/IA)');
    await act(async () => {
      fireEvent.click(abaTec);
    });

    expect(screen.getByText('SQL')).toBeDefined();
  });

  it('deve abrir o drawer de detalhes ao clicar em um verbete', async () => {
    await act(async () => {
      render(<GlossarioPage />);
    });

    const cardSql = screen.getByText('SQL');
    await act(async () => {
      fireEvent.click(cardSql);
    });

    // Drawer aberto com detalhes
    expect(screen.getByRole('dialog')).toBeDefined();
    expect(screen.getByText(/Aplicação Prática em Biblioteca e Legislação/i)).toBeDefined();
    expect(screen.getByText(/Koha\/Pergamum/i)).toBeDefined();
  });

  it('deve alternar estado "Já sei" dentro do drawer', async () => {
    await act(async () => {
      render(<GlossarioPage />);
    });

    const cardSql = screen.getByText('SQL');
    await act(async () => {
      fireEvent.click(cardSql);
    });

    // Localiza botão "Já Sei (Recolher Destaques)"
    const btnJaSei = screen.getByText(/Já Sei \(Recolher Destaques\)/i);
    await act(async () => {
      fireEvent.click(btnJaSei);
    });

    expect(useGlossarioStore.getState().isTermoSilenciado('tec-sql')).toBe(true);

    // Botão muda para "Mostrar Definições de Novo"
    expect(screen.getByText(/Mostrar Definições de Novo/i)).toBeDefined();
  });

  it('deve alternar estado "Marcar como Suspeito" dentro do drawer', async () => {
    await act(async () => {
      render(<GlossarioPage />);
    });

    const cardSql = screen.getByText('SQL');
    await act(async () => {
      fireEvent.click(cardSql);
    });

    const btnSuspeito = screen.getByText(/Marcar como Suspeito/i);
    await act(async () => {
      fireEvent.click(btnSuspeito);
    });

    expect(useGlossarioStore.getState().isTermoSuspeito('tec-sql')).toBe(true);
    expect(screen.getByText(/Desmarcar Suspeito/i)).toBeDefined();
  });

  it('deve navegar até a teoria ao clicar no submódulo de ocorrência', async () => {
    await act(async () => {
      render(<GlossarioPage />);
    });

    const cardSql = screen.getByText('SQL');
    await act(async () => {
      fireEvent.click(cardSql);
    });

    // Clica no submódulo 6.6
    const subBtn = screen.getByText(/Submódulo 6.6/i);
    await act(async () => {
      fireEvent.click(subBtn);
    });

    expect(useNavigationStore.getState().activeView).toBe('teoria');
    expect(useNavigationStore.getState().selectedSubmodule).toBe('6.6');
  });
});
