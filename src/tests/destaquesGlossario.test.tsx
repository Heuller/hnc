// @vitest-environment jsdom
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  destacarTermosNoTexto,
  obterTermosDestaque,
  converterParaVerbeteUnificado,
  type TermoDestaqueSubmodulo,
} from '../domain/glossario/destaquesService';
import { CartaoAntesDeLer } from '../components/content-blocks/CartaoAntesDeLer';
import { GavetaCurtaDefinicao } from '../components/glossario/GavetaCurtaDefinicao';
import { useGlossarioStore } from '../store/useGlossarioStore';
import { useNavigationStore } from '../store/useNavigationStore';

describe('Destaques de Glossário em Texto e Gaveta Curta (U3.12 / U3.5 / U3.4)', () => {
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
      activeView: 'teoria',
      selectedSubmodule: '6.6',
    });
  });

  it('obterTermosDestaque deve recuperar termos pré-calculados do submódulo 6.6', () => {
    const termos = obterTermosDestaque('sub-6-6');
    expect(termos.length).toBeGreaterThan(0);
    const sql = termos.find((t) => t.termo === 'SQL');
    expect(sql).toBeDefined();
    expect(sql?.acervo).toBe('tecnico');
  });

  it('destacarTermosNoTexto deve aplicar sublinhado apenas na primeira ocorrencia', () => {
    const termos: TermoDestaqueSubmodulo[] = [
      {
        termo: 'SQL',
        verbeteId: 'tec-sql',
        acervo: 'tecnico',
        definicaoCurta: 'Linguagem declarativa.',
      },
    ];

    const texto = 'O comando SQL é muito importante. Quem usa SQL sabe disso.';
    const onClique = vi.fn();

    const { container } = render(
      <div>
        {destacarTermosNoTexto(texto, termos, new Set(), onClique)}
      </div>
    );

    // Deve encontrar apenas 1 botão para SQL (a 1ª ocorrência)
    const botoes = screen.getAllByRole('button');
    expect(botoes).toHaveLength(1);
    expect(botoes[0].textContent).toBe('SQL');

    // Ao clicar, chama a função de callback
    fireEvent.click(botoes[0]);
    expect(onClique).toHaveBeenCalledWith(termos[0]);

    // O segundo SQL permanece como texto puro
    expect(container.textContent).toContain('Quem usa SQL sabe disso.');
  });

  it('destacarTermosNoTexto nao deve destacar termos silenciados pelo usuario', () => {
    const termos: TermoDestaqueSubmodulo[] = [
      {
        termo: 'SQL',
        verbeteId: 'tec-sql',
        acervo: 'tecnico',
        definicaoCurta: 'Linguagem declarativa.',
      },
    ];

    const texto = 'O comando SQL é muito importante.';
    const onClique = vi.fn();
    const silenciados = new Set(['tec-sql']);

    render(
      <div>
        {destacarTermosNoTexto(texto, termos, silenciados, onClique)}
      </div>
    );

    // Não deve criar botão interativo
    expect(screen.queryByRole('button')).toBeNull();
    expect(screen.getByText(/O comando SQL é muito importante./i)).toBeDefined();
  });

  it('CartaoAntesDeLer deve exibir termos pré-requisito e permitir recolher definição', () => {
    const antesDeLer = [
      {
        termo: 'SQL',
        definicao: 'Linguagem declarativa para bancos relacionais.',
        exemploBiblioteca: 'Consultar catálogo Koha.',
      },
      {
        termo: 'API',
        definicao: 'Interface de comunicação entre sistemas.',
        exemploBiblioteca: 'Consumir dados abertos da Câmara.',
      },
    ];

    render(<CartaoAntesDeLer termos={antesDeLer} />);

    expect(screen.getByText('Antes de Ler: Vocabulário Essencial')).toBeDefined();
    expect(screen.getByText('SQL')).toBeDefined();
    expect(screen.getByText('API')).toBeDefined();
    expect(screen.getByText(/Consultar catálogo Koha/i)).toBeDefined();

    // Clica no botão "Já sei" do primeiro termo
    const btnJaSei = screen.getAllByText('Já sei')[0];
    fireEvent.click(btnJaSei);

    // O termo deve ser silenciado no store
    expect(useGlossarioStore.getState().isTermoSilenciado('antes-sql')).toBe(true);
  });

  it('GavetaCurtaDefinicao deve exibir definicao curta e acoes', () => {
    const verbete = converterParaVerbeteUnificado({
      termo: 'SQL',
      verbeteId: 'tec-sql',
      acervo: 'tecnico',
      definicaoCurta: 'Linguagem declarativa padrão para bancos relacionais.',
      exemploBiblioteca: 'Consultar empréstimos no Koha.',
    });

    const onVerCompleto = vi.fn();
    const onClose = vi.fn();

    render(
      <GavetaCurtaDefinicao
        verbete={verbete}
        isOpen={true}
        onClose={onClose}
        onVerCompleto={onVerCompleto}
      />
    );

    expect(screen.getByRole('dialog')).toBeDefined();
    expect(screen.getByText('SQL')).toBeDefined();
    expect(
      screen.getByText('Linguagem declarativa padrão para bancos relacionais.')
    ).toBeDefined();

    // Clica em "Ver completo no Glossário"
    const btnVerCompleto = screen.getByText('Ver completo no Glossário');
    fireEvent.click(btnVerCompleto);
    expect(onVerCompleto).toHaveBeenCalledWith(verbete);

    // Clica em "Já sei"
    const btnJaSei = screen.getByText('Já sei (não destacar)');
    fireEvent.click(btnJaSei);
    expect(useGlossarioStore.getState().isTermoSilenciado('tec-sql')).toBe(true);
    expect(onClose).toHaveBeenCalled();
  });
});
