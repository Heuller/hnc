// @vitest-environment jsdom
import { createHash } from 'node:crypto';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { QUESTOES_REAIS } from '../content/questoesReais';
import base from '../content/questoesReaisTriadas.json';
import anotacoes from '../content/estudoReversoReais/anotacoes.json';
import lote from '../../docs/simulados-reais/LOTE-300-ACERVO-05.json';
import { SimuladosReaisModal } from '../components/simuladoReal/SimuladosReaisModal';
import { ALL_COURSE_MODULES } from '../content/registry';

const novos = QUESTOES_REAIS.filter(q => q.loteRevisao === lote.lote);
const notas = anotacoes as Record<string, { perfil: string; gatilho: string; exemplo?: string; referencia?: string }>;
afterEach(() => { cleanup(); localStorage.clear(); });

describe('quinto lote: 300 questões com estudo reverso individual', () => {
  it('acrescenta exatamente 300 e preserva as redações e assinaturas dos itens anteriores', () => {
    expect(QUESTOES_REAIS).toHaveLength(1642);
    expect(novos).toHaveLength(300);
    expect(new Set(novos.map(q => q.id))).toEqual(new Set(lote.ids));
    expect(QUESTOES_REAIS.filter(q => q.loteRevisao !== lote.lote)).toHaveLength(1342);
    const anteriores = base.filter(q => q.loteRevisao !== lote.lote)
      .map(q => [q.id, q.item, q.contexto, q.gabarito]).sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0);
    expect(createHash('sha256').update(JSON.stringify(anteriores)).digest('hex')).toBe(lote.assinaturaItensJSONAnteriores);
  });
  it('fornece 300 explicações, exemplos e comparações próprios com ligação válida à teoria', () => {
    expect(new Set(novos.map(q => q.justificativa)).size).toBe(300);
    expect(new Set(novos.map(q => q.fundamentacaoDidatica?.exemplo)).size).toBe(300);
    expect(new Set(novos.map(q => q.gabarito === 'C' ? q.versao_errada : q.versao_correta)).size).toBe(300);
    for (const q of novos) {
      expect(q.fundamentacaoDidatica?.exemplo, q.id).toBe(notas[q.id].exemplo);
      expect(q.fundamentacaoDidatica?.exemplo?.length, q.id).toBeGreaterThan(80);
      expect(q.justificativa.length, q.id).toBeGreaterThan(90);
      const modulo = ALL_COURSE_MODULES.find(m => m.codigo.toUpperCase() === q.modulo);
      expect(modulo?.modulosFilhos?.some(s => s.id === `sub-${q.submoduloId?.replace('.', '-')}`), q.id).toBe(true);
    }
  });
  it('vincula transcrição e gabarito às evidências dos cadernos sem criar confirmação oficial', () => {
    expect(lote.apostilaEsquematizada).toBe(177);
    expect(lote.outrosCadernos).toBe(123);
    expect(lote.evidencias).toHaveLength(300);
    for (const ev of lote.evidencias) {
      const q = novos.find(q => q.id === ev.id)!;
      expect(createHash('sha256').update(q.item).digest('hex'), q.id).toBe(ev.sha256Texto);
      expect(q.gabarito, q.id).toBe(ev.gabarito);
      expect(q.estadoConferencia, q.id).toBe('caderno');
      expect(q.gabaritoUrl, q.id).toBeUndefined();
      expect(q.acervoUrl, q.id).toContain(ev.arquivoId);
      expect(ev.paginaEnunciado, q.id).toBeGreaterThan(0);
      expect(ev.paginaGabarito, q.id).toBeGreaterThan(0);
      if ('identificadorTec' in ev) expect(q.provaUrl).toContain(String(ev.identificadorTec).replace('tec-', ''));
    }
  });
  it('mantém o contexto completo de um caso e a fonte teórica específica do item', () => {
    const caso = novos.find(q => q.id === 'real-tec-4145210')!;
    expect(caso.contexto).toContain('custos operacionais abaixo do orçamento');
    expect(caso.contexto).toContain('não correspondiam às reais necessidades');
    const issn = novos.find(q => q.numeroNaFonte === 574 && q.id.startsWith('real-esquematizada-'))!;
    expect(issn.fundamentacaoDidatica?.referencia.url).toContain('cbissn.ibict.br');
    const api = novos.find(q => q.id === 'real-tec-3373145')!;
    expect(api.fundamentacaoDidatica?.conceito).toContain('API');
  });
  it('mostra correção completa e ressalva histórica em uma questão nova de QuestionPoint', () => {
    const q = novos.find(q => q.id.startsWith('real-esquematizada-222-'))!;
    localStorage.setItem('hnc_questoes_reais_v1:local', JSON.stringify({ modulo: q.modulo, questaoId: q.id, respostas: {} }));
    render(<SimuladosReaisModal onClose={vi.fn()} />);
    fireEvent.click(screen.getByRole('button', { name: 'Errado' }));
    expect(screen.getByText(q.justificativa)).toBeTruthy();
    expect(screen.getByText(q.fundamentacaoDidatica!.exemplo)).toBeTruthy();
    expect(screen.getByText('Trecho que decide o julgamento')).toBeTruthy();
    expect(screen.getByText('Como ficaria CERTO')).toBeTruthy();
    expect(screen.getByText('Técnica da banca')).toBeTruthy();
    expect(screen.getByRole('link', { name: q.fundamentacaoDidatica!.referencia.titulo })).toBeTruthy();
    expect(screen.getByText(/confronto com a prova oficial pendente/)).toBeTruthy();
  });
});
