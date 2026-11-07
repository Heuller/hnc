// @vitest-environment jsdom
import { createHash } from 'node:crypto';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { QUESTOES_REAIS } from '../content/questoesReais';
import novos from '../content/questoesReaisLote12.json';
import lote from '../../docs/simulados-reais/CURADORIA-LACUNAS-12.json';
import anterior from '../../docs/simulados-reais/PRIORIDADES-CURADORIA-01.json';
import prioridades from '../../docs/simulados-reais/PRIORIDADES-CURADORIA-02.json';
import { ALL_COURSE_MODULES } from '../content/registry';
import { SimuladosReaisModal } from '../components/simuladoReal/SimuladosReaisModal';
import { CONTAGEM_REAIS } from './helpers/lotesReaisConferidos';

const ativos = QUESTOES_REAIS.filter(q => q.loteRevisao === lote.lote);
afterEach(() => { cleanup(); localStorage.clear(); });

describe('segunda curadoria: 300 inclusões com contexto e procedência', () => {
  it('concilia a nova seleção com o banco ativo e mantém o retrato histórico anterior', () => {
    expect(novos).toHaveLength(300); expect(ativos).toHaveLength(300);
    expect(lote.totalAntes).toBe(3041); expect(lote.totalDepois).toBe(3341);
    expect(QUESTOES_REAIS).toHaveLength(CONTAGEM_REAIS.total);
    expect(anterior.baseDepois).toBe(3041);
    expect(prioridades.coberturaPorSubmodulo.reduce((s, q) => s + q.antes, 0)).toBe(3041);
    expect(prioridades.coberturaPorSubmodulo.reduce((s, q) => s + q.depois, 0)).toBe(3341);
    for (const s of prioridades.coberturaPorSubmodulo) {
      expect(s.depois - s.antes).toBe(ativos.filter(q => q.submoduloId === s.submodulo).length);
    }
  });
  it('mantém objetivos e blocos individuais sem fabricar novos itens por adaptação', () => {
    expect(new Set(lote.objetivos.map(o => o.objetivoId)).size).toBe(300);
    expect(new Set(ativos.map(q => q.justificativa)).size).toBe(300);
    expect(new Set(ativos.map(q => q.fundamentacaoDidatica!.exemplo)).size).toBe(300);
    for (const q of ativos) {
      expect(['C', 'E']).toContain(q.gabarito);
      expect(q.item).toContain(q.gatilho!);
      expect(q.justificativa.length).toBeGreaterThanOrEqual(150);
      expect(q.fundamentacaoDidatica!.exemplo.length).toBeGreaterThanOrEqual(80);
      expect(ALL_COURSE_MODULES.find(m => m.codigo === q.modulo)?.modulosFilhos?.some(s => s.numero === q.submoduloId)).toBe(true);
    }
  });
  it('confere texto e julgamento de cada original sem atribuição fictícia ao Drive', () => {
    expect(lote.confrontoNaOrigem).toBe(225); expect(lote.confrontoEmCopia).toBe(75);
    expect(lote.gabaritosCorrigidos).toBe(0);
    for (const ev of lote.conferencia.itens) {
      const q = ativos.find(q => q.id === ev.id)!;
      expect(q.gabarito).toBe(ev.gabaritoOficial);
      expect(createHash('sha256').update(q.item).digest('hex')).toBe(ev.sha256ItemConferido);
      expect(q.provaUrl).toBe(ev.provaUrl); expect(q.gabaritoUrl).toBe(ev.gabaritoUrl);
      expect(ev.origemDiretaDaProva).toBe(true); expect(ev.acervo).toBeNull();
      expect(q.item).not.toMatch(/CEBRASPE|CESPE|\|\||julgue os/i);
    }
  });
  it('preserva apoio integral nas questões linguísticas e o comando compartilhado do RCCN', () => {
    for (const q of ativos.filter(q => ['M12', 'M13'].includes(q.modulo))) {
      expect(q.contexto.length).toBeGreaterThan(400);
    }
    const rccn = ativos.filter(q => q.submoduloId === '10.6');
    expect(rccn).toHaveLength(12);
    expect(rccn.every(q => /Congresso\s+Nacional/.test(q.contexto))).toBe(true);
    expect(ativos.find(q => q.item.startsWith('promulgar as emendas'))!.contexto).toContain('cabe ao presidente');
    const fontes = Object.values(lote.conferencia.fontes);
    const pares = fontes.filter(f => 'notaPareamento' in f);
    expect(pares).toHaveLength(2);
    for (const f of pares) expect(String(f.notaPareamento)).toMatch(/impresso|imprime|cabeçalho interno/);
  });
  it('revela o estudo reverso após responder à planilha e conserva a fórmula original', () => {
    const q = ativos.find(q => q.item.includes('=CONT.SE('))!;
    localStorage.setItem('hnc_questoes_reais_v1:local', JSON.stringify({ modulo: q.modulo, questaoId: q.id, respostas: {} }));
    render(<SimuladosReaisModal onClose={vi.fn()} />);
    expect(screen.getByText(q.item)).toBeTruthy();
    expect(screen.queryByText(q.justificativa)).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: /^Certo$/ }));
    expect(screen.getByRole('status').textContent).toContain('Você acertou');
    expect(screen.getByText(q.justificativa)).toBeTruthy();
    expect(screen.getByText(q.fundamentacaoDidatica!.exemplo)).toBeTruthy();
    expect(screen.getByText(/Rever o assunto na teoria \(submódulo 14.1\)/)).toBeTruthy();
  });
  it('mantém texto em inglês acessível antes da resposta e não vaza a explicação', () => {
    const q = ativos.find(q => q.item.startsWith('The product of an environmental audit'))!;
    localStorage.setItem('hnc_questoes_reais_v1:local', JSON.stringify({ modulo: q.modulo, questaoId: q.id, respostas: {} }));
    render(<SimuladosReaisModal onClose={vi.fn()} />);
    expect(screen.getByText(q.item)).toBeTruthy();
    expect(document.body.textContent).toContain('Environmental auditing');
    expect(screen.queryByText(q.justificativa)).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: /^Errado$/ }));
    expect(screen.getByRole('status').textContent).toContain('Você errou');
    expect(screen.getByText(q.justificativa)).toBeTruthy();
  });
  it('abre a catalogação governamental no mini-módulo M2.5 e oferece a aula correta', () => {
    const q = ativos.find(q => q.submoduloId === '2.5')!;
    expect(q.modulo).toBe('M2.5');
    localStorage.setItem('hnc_questoes_reais_v1:local', JSON.stringify({ modulo: q.modulo, questaoId: q.id, respostas: {} }));
    render(<SimuladosReaisModal onClose={vi.fn()} />);
    expect(screen.getByText(q.item)).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: q.gabarito === 'C' ? /^Certo$/ : /^Errado$/ }));
    expect(screen.getByText(/Rever o assunto na teoria \(submódulo 2.5\)/)).toBeTruthy();
    expect(screen.getByText('1 respondido · 1 acerto')).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: 'Escolher outro módulo' }));
    expect(screen.getByText('1 questão disponível')).toBeTruthy();
    expect(screen.getByText('1 respondida')).toBeTruthy();
  });
});
