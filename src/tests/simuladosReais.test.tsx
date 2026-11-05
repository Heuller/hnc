// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import base from '../content/questoesReaisTriadas.json';
import type { QuestaoReal } from '../content/questoesReais';
import { QUESTOES_REAIS } from '../content/questoesReais';
import loteEsquematizada from '../../docs/simulados-reais/LOTE-300-ESQUEMATIZADA.json';
import segundoLoteEsquematizada from '../../docs/simulados-reais/LOTE-300-ESQUEMATIZADA-02.json';
import terceiroLoteEsquematizada from '../../docs/simulados-reais/LOTE-300-ESQUEMATIZADA-03.json';
import quartoLoteEsquematizada from '../../docs/simulados-reais/LOTE-300-ESQUEMATIZADA-04.json';
import { ALL_COURSE_MODULES } from '../content/registry';
import { SimuladosReaisModal } from '../components/simuladoReal/SimuladosReaisModal';

// Regressão dos lotes de origem: a projeção ativa aplica exclusões posteriores.
const idsOrigem = new Set(base.map(q => q.id));
const HISTORICO: QuestaoReal[] = [...(base as QuestaoReal[]), ...QUESTOES_REAIS.filter(q => !idsOrigem.has(q.id))];

afterEach(() => { cleanup(); localStorage.clear(); });

describe('questões reais por módulo', () => {
  it('identifica a prova, o gabarito, o acervo e a explicação de cada item sem duplicar IDs', () => {
    expect(new Set(QUESTOES_REAIS.map(q => q.id)).size).toBe(QUESTOES_REAIS.length);
    expect(new Set(QUESTOES_REAIS.map(q => q.item.trim().toLocaleLowerCase('pt-BR'))).size).toBe(QUESTOES_REAIS.length);
    for (const q of QUESTOES_REAIS) {
      if (q.estadoConferencia === 'caderno') expect(q.provaUrl).toMatch(/^https:\/\/(?:www\.tecconcursos\.com\.br|drive\.google\.com)\//);
      else if (q.estadoConferencia === 'copia-oficial') {
        expect(q.provaUrl).toMatch(/^https:\/\//);
        expect(q.gabaritoUrl).toMatch(/^https:\/\//);
        expect(q.conferenciaOficial?.provaEmEspelho || q.conferenciaOficial?.gabaritoEmEspelho).toBe(true);
      } else {
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
    const novos = HISTORICO.filter(q => q.loteRevisao === loteEsquematizada.lote);
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
    expect(HISTORICO.filter(q => !q.loteRevisao)).toHaveLength(142);
  });
  it('acrescenta mais 300 questões preservando os 442 itens publicados', () => {
    const novos = HISTORICO.filter(q => q.loteRevisao === segundoLoteEsquematizada.lote);
    expect(novos).toHaveLength(300);
    expect(HISTORICO.filter(q => !q.loteRevisao || q.loteRevisao === loteEsquematizada.lote)).toHaveLength(442);
    expect(new Set(novos.map(q => q.id))).toEqual(new Set(segundoLoteEsquematizada.ids));
    const lotesAnteriores = [loteEsquematizada.lote, segundoLoteEsquematizada.lote];
    expect(new Set(HISTORICO.filter(q => lotesAnteriores.includes(q.loteRevisao || '')).map(q => q.numeroNaFonte)).size).toBe(600);
    for (const q of novos) {
      const modulo = ALL_COURSE_MODULES.find(m => m.codigo.toUpperCase() === q.modulo);
      expect(modulo?.modulosFilhos?.some(s => s.id === `sub-${q.submoduloId?.replace('.', '-')}`), q.id).toBe(true);
      expect(q.estadoConferencia).toBe('caderno');
      expect(q.gabaritoUrl).toBeUndefined();
      expect(q.justificativa.length).toBeGreaterThan(90);
      expect(q.acervoUrl).toContain(segundoLoteEsquematizada.fonteDrive);
      if (q.gabarito === 'E') expect(q.versao_correta?.length).toBeGreaterThan(30);
    }
  });
  it('acrescenta o terceiro lote de 300 sem sobrepor os 742 itens publicados', () => {
    const novos = HISTORICO.filter(q => q.loteRevisao === terceiroLoteEsquematizada.lote);
    expect(novos).toHaveLength(300);
    expect(HISTORICO.filter(q => !q.loteRevisao || [loteEsquematizada.lote, segundoLoteEsquematizada.lote].includes(q.loteRevisao))).toHaveLength(742);
    expect(new Set(novos.map(q => q.id))).toEqual(new Set(terceiroLoteEsquematizada.ids));
    const lotesAnteriores = [loteEsquematizada.lote, segundoLoteEsquematizada.lote, terceiroLoteEsquematizada.lote];
    expect(new Set(HISTORICO.filter(q => lotesAnteriores.includes(q.loteRevisao || '')).map(q => q.numeroNaFonte)).size).toBe(900);
    for (const q of novos) {
      const modulo = ALL_COURSE_MODULES.find(m => m.codigo.toUpperCase() === q.modulo);
      expect(modulo?.modulosFilhos?.some(s => s.id === `sub-${q.submoduloId?.replace('.', '-')}`), q.id).toBe(true);
      expect(q.estadoConferencia).toBe('caderno');
      expect(q.gabaritoUrl).toBeUndefined();
      expect(q.justificativa.length).toBeGreaterThan(90);
      expect(q.acervoUrl).toContain(terceiroLoteEsquematizada.fonteDrive);
      if (q.gabarito === 'E') expect(q.versao_correta?.length).toBeGreaterThan(30);
    }
  });
  it('acrescenta o quarto lote de 300 preservando as 1.042 questões anteriores', () => {
    const novos = HISTORICO.filter(q => q.loteRevisao === quartoLoteEsquematizada.lote);
    expect(novos).toHaveLength(300);
    expect(HISTORICO.filter(q => !q.loteRevisao || [loteEsquematizada.lote, segundoLoteEsquematizada.lote, terceiroLoteEsquematizada.lote].includes(q.loteRevisao))).toHaveLength(1042);
    expect(new Set(novos.map(q => q.id))).toEqual(new Set(quartoLoteEsquematizada.ids));
    expect(new Set(HISTORICO.filter(q => [loteEsquematizada.lote, segundoLoteEsquematizada.lote, terceiroLoteEsquematizada.lote, quartoLoteEsquematizada.lote].includes(q.loteRevisao || '')).map(q => q.numeroNaFonte)).size).toBe(1200);
    for (const q of novos) {
      const modulo = ALL_COURSE_MODULES.find(m => m.codigo.toUpperCase() === q.modulo);
      expect(modulo?.modulosFilhos?.some(s => s.id === `sub-${q.submoduloId?.replace('.', '-')}`), q.id).toBe(true);
      expect(q.estadoConferencia).toBe('caderno');
      expect(q.gabaritoUrl).toBeUndefined();
      expect(q.justificativa.length).toBeGreaterThan(90);
      expect(q.acervoUrl).toContain(quartoLoteEsquematizada.fonteDrive);
      if (q.gabarito === 'E') expect(q.versao_correta?.length).toBeGreaterThan(30);
    }
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
  it('filtra por assunto e navega apenas pelos itens da seleção', () => {
    render(<SimuladosReaisModal onClose={vi.fn()} />);
    fireEvent.click(screen.getByRole('button', { name: /^M3/ }));
    fireEvent.change(screen.getByRole('combobox', { name: 'Filtrar por assunto' }), { target: { value: '3.4' } });
    const selecionados = QUESTOES_REAIS.filter(q => q.modulo === 'M3' && q.submoduloId === '3.4');
    expect(screen.getByText(selecionados[0].item)).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: selecionados[0].gabarito === 'C' ? 'Certo' : 'Errado' }));
    expect(screen.getByRole('progressbar').getAttribute('aria-valuenow')).toBe('1');
    fireEvent.click(screen.getByRole('button', { name: 'Próxima' }));
    expect(screen.getByText(selecionados[1].item)).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: 'Anterior' }));
    expect(screen.getByRole('region', { name: 'Correção da questão' })).toBeTruthy();
    expect(screen.getByRole('button', { name: selecionados[0].gabarito === 'C' ? 'Certo' : 'Errado' }).getAttribute('aria-pressed')).toBe('true');
  });
  it('retoma o primeiro item não respondido ao escolher novamente um módulo', () => {
    render(<SimuladosReaisModal onClose={vi.fn()} />);
    fireEvent.click(screen.getByRole('button', { name: /^M4/ }));
    fireEvent.click(screen.getByRole('button', { name: 'Errado' }));
    fireEvent.click(screen.getByRole('button', { name: 'Escolher outro módulo' }));
    fireEvent.click(screen.getByRole('button', { name: /^M4/ }));
    expect(screen.getByText(QUESTOES_REAIS.filter(q => q.modulo === 'M4')[1].item)).toBeTruthy();
    expect((screen.getByRole('button', { name: 'Certo' }) as HTMLButtonElement).disabled).toBe(false);
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
    expect(screen.getByText(/questões com enunciados legíveis e documentos conferidos/)).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: /^M4/ }));
    expect(screen.queryByText(/Você acertou/)).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'Errado' }));
    expect(screen.getByText(/Você acertou/)).toBeTruthy();
    expect(screen.getByText(/O perfil orienta a seleção/)).toBeTruthy();
    expect(screen.getByRole('link', { name: 'gabarito definitivo' }).getAttribute('href')).toContain('GAB_DEFINITIVO');
  });
});
