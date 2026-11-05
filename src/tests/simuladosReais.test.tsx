// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { QUESTOES_REAIS } from '../content/questoesReais';
import loteEsquematizada from '../../docs/simulados-reais/LOTE-300-ESQUEMATIZADA.json';
import { ALL_COURSE_MODULES } from '../content/registry';
import { SimuladosReaisModal } from '../components/simuladoReal/SimuladosReaisModal';

afterEach(() => { cleanup(); localStorage.clear(); });

describe('questões reais por módulo', () => {
  it('identifica a prova, o gabarito, o acervo e a explicação de cada item sem duplicar IDs', () => {
    expect(new Set(QUESTOES_REAIS.map(q => q.id)).size).toBe(QUESTOES_REAIS.length);
    expect(new Set(QUESTOES_REAIS.map(q => q.item.trim().toLocaleLowerCase('pt-BR'))).size).toBe(QUESTOES_REAIS.length);
    for (const q of QUESTOES_REAIS) {
      if (q.estadoConferencia === 'caderno') expect(q.provaUrl).toMatch(/^https:\/\/(?:www\.tecconcursos\.com\.br|drive\.google\.com)\//);
      else {
        expect(q.provaUrl).toMatch(/^https:\/\/cdn\.cebraspe\.org\.br\//);
        expect(q.gabaritoUrl).toMatch(/^https:\/\/cdn\.cebraspe\.org\.br\//);
      }
      expect(q.acervoUrl).toMatch(/^https:\/\/drive\.google\.com\//);
      expect(q.justificativa.length).toBeGreaterThan(50);
      expect(q.modulo).toBe(`M${q.submoduloId?.split('.')[0]}`);
      expect(['C', 'E']).toContain(q.gabarito);
      if (q.gabarito === 'E') expect(q.versao_correta).toBeTruthy();
    }
  });
  it('entrega o lote de 300 sem duplicar itens anteriores e com vínculo válido à teoria', () => {
    const novos = QUESTOES_REAIS.filter(q => q.loteRevisao === loteEsquematizada.lote);
    expect(novos).toHaveLength(300);
    expect(new Set(novos.map(q => q.numeroNaFonte)).size).toBe(300);
    expect(new Set(novos.map(q => q.id))).toEqual(new Set(loteEsquematizada.ids));
    for (const q of novos) {
      const modulo = ALL_COURSE_MODULES.find(m => m.codigo.toUpperCase() === q.modulo);
      expect(modulo?.modulosFilhos?.some(s => s.id === `sub-${q.submoduloId?.replace('.', '-')}`), q.id).toBe(true);
      expect(q.estadoConferencia).toBe('caderno');
      expect(q.gabaritoUrl).toBeUndefined();
      expect(q.justificativa.length).toBeGreaterThan(90);
      expect(q.acervoUrl).toContain(loteEsquematizada.fonteDrive);
    }
    expect(QUESTOES_REAIS.filter(q => q.loteRevisao !== loteEsquematizada.lote)).toHaveLength(142);
  });
  it('restaura respostas e módulo ao reabrir a sessão', () => {
    const primeira = render(<SimuladosReaisModal onClose={vi.fn()} />);
    fireEvent.click(screen.getByRole('button', { name: /^M4/ }));
    fireEvent.click(screen.getByRole('button', { name: 'Errado' }));
    primeira.unmount();
    render(<SimuladosReaisModal onClose={vi.fn()} />);
    expect(screen.getByText(/Você acertou/)).toBeTruthy();
    expect((screen.getByRole('button', { name: 'Certo' }) as HTMLButtonElement).disabled).toBe(true);
  });
  it('mantém respostas de usuários locais diferentes separadas', () => {
    localStorage.setItem('hnc_local_user_id', 'aluno-a');
    const primeira = render(<SimuladosReaisModal onClose={vi.fn()} />);
    fireEvent.click(screen.getByRole('button', { name: /^M4/ }));
    fireEvent.click(screen.getByRole('button', { name: 'Errado' }));
    primeira.unmount();
    localStorage.setItem('hnc_local_user_id', 'aluno-b');
    render(<SimuladosReaisModal onClose={vi.fn()} />);
    expect(screen.getByText('Escolha um módulo')).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: /^M4/ }));
    expect(screen.queryByText(/Você acertou/)).toBeNull();
    expect((screen.getByRole('button', { name: 'Certo' }) as HTMLButtonElement).disabled).toBe(false);
  });
  it('mostra correção imediatamente após responder e preserva a origem', () => {
    render(<SimuladosReaisModal onClose={vi.fn()} />);
    expect(screen.getByText(/Acervo em construção/)).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: /^M4/ }));
    expect(screen.queryByText(/Você acertou/)).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'Errado' }));
    expect(screen.getByText(/Você acertou/)).toBeTruthy();
    expect(screen.getByText(/O perfil orienta a seleção/)).toBeTruthy();
    expect(screen.getByRole('link', { name: 'gabarito definitivo' }).getAttribute('href')).toContain('GAB_DEFINITIVO');
  });
});
