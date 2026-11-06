// @vitest-environment jsdom
import { createHash } from 'node:crypto';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { QUESTOES_REAIS } from '../content/questoesReais';
import { QUESTOES_REAIS_PARA_TREINO } from '../content/questoesReaisAtualizadas';
import base from '../content/questoesReaisTriadas.json';
import lote06 from '../content/questoesReaisLote06.json';
import lote07 from '../content/questoesReaisLote07.json';
import lote08 from '../content/questoesReaisLote08.json';
import novos from '../content/questoesReaisLote09.json';
import lote from '../../docs/simulados-reais/LOTE-300-ACERVO-09.json';
import { ALL_COURSE_MODULES } from '../content/registry';
import { SimuladosReaisModal } from '../components/simuladoReal/SimuladosReaisModal';
import { comentarioGenerico, contrasteArtificial } from '../domain/qualidadeEditorial';
import { CONTAGEM_REAIS } from './helpers/lotesReaisConferidos';

const ativos = QUESTOES_REAIS.filter(q => q.loteRevisao === lote.lote);
const sha = (s: string) => createHash('sha256').update(s).digest('hex');
function ordenar(o: unknown): unknown {
  if (Array.isArray(o)) return o.map(ordenar);
  if (o && typeof o === 'object') return Object.fromEntries(Object.entries(o).sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0).map(([k, v]) => [k, ordenar(v)]));
  return o;
}
afterEach(() => { cleanup(); localStorage.clear(); });

describe('nono lote: procedência, inclusão de Inglês e curadoria atualizada', () => {
  it('acrescenta 300 questões preservando o conteúdo dos lotes anteriores', () => {
    expect(novos).toHaveLength(300); expect(ativos).toHaveLength(300);
    expect(lote.totalAntes).toBe(2429); expect(lote.totalDepois).toBe(2729);
    expect(sha(JSON.stringify(ordenar([...base, ...lote06, ...lote07, ...lote08])))).toBe(lote.sha256BaseJSON);
    expect(QUESTOES_REAIS).toHaveLength(CONTAGEM_REAIS.total);
    expect(new Set(ativos.map(q => q.id))).toEqual(new Set(lote.ids));
  });
  it('confere os 300 itens com a origem, distingue acervo de complemento e exclui anulações', () => {
    expect(lote.confrontoNaOrigem).toBe(300); expect(lote.confrontoEmCopia).toBe(0);
    expect(lote.conferencia.itens.filter(e => e.acervo)).toHaveLength(85);
    expect(lote.conferencia.itens.filter(e => e.origemDiretaDaProva)).toHaveLength(215);
    expect(Object.keys(lote.conferencia.fontes)).toHaveLength(28);
    const identidades = new Set<string>();
    for (const ev of lote.conferencia.itens) {
      const q = ativos.find(q => q.id === ev.id)!;
      expect(q.gabarito).toBe(ev.gabaritoOficial); expect(['C', 'E']).toContain(q.gabarito);
      expect(sha(q.item)).toBe(ev.sha256ItemConferido);
      expect(q.provaUrl).toBe(ev.provaUrl); expect(q.gabaritoUrl).toBe(ev.gabaritoUrl);
      const identidade = `${ev.provaUrl}:${ev.numeroOficial}`;
      expect(identidades.has(identidade)).toBe(false); identidades.add(identidade);
      if (ev.origemDiretaDaProva) {
        expect(ev.acervo).toBeNull(); expect(q.acervoUrl).toBe(ev.provaUrl);
        expect(q.fonte).toContain('Inclusão diretamente da prova');
      }
    }
  });
  it('entrega explicações, exemplos, contrastes e vínculos existentes na teoria', () => {
    for (const campo of ['justificativa', 'exemplo', 'contraste']) {
      expect(new Set(ativos.map(q => campo === 'justificativa' ? q.justificativa : campo === 'exemplo' ? q.fundamentacaoDidatica?.exemplo : q.gabarito === 'C' ? q.versao_errada : q.versao_correta)).size).toBe(300);
    }
    for (const q of ativos) {
      expect(q.justificativa.length, q.id).toBeGreaterThanOrEqual(150);
      expect(comentarioGenerico(q.justificativa), q.id).toBe(false);
      expect(q.item.includes(q.gatilho!), q.id).toBe(true);
      expect(q.item, q.id).not.toMatch(/CEBRASPE|PROVA DISCURSIVA|ANOTAÇÕES:|julgue /i);
      expect([...q.item].some(c => c.charCodeAt(0) < 32), q.id).toBe(false);
      expect(q.fundamentacaoDidatica!.exemplo.length, q.id).toBeGreaterThanOrEqual(80);
      expect(contrasteArtificial(q.gabarito === 'E' ? q.versao_correta : q.versao_errada), q.id).toBe(false);
      expect(ALL_COURSE_MODULES.find(m => m.codigo === q.modulo)?.modulosFilhos?.some(s => s.numero === q.submoduloId), q.id).toBe(true);
    }
  });
  it('inclui 68 itens de Inglês no M12 com contexto de leitura e comentário em português', () => {
    const ingles = ativos.filter(q => q.modulo === 'M12'); expect(ingles).toHaveLength(68);
    for (const q of ingles) {
      expect(q.contexto.length, q.id).toBeGreaterThan(500);
      expect(q.contexto, q.id).toMatch(/[A-Za-z]{4}/);
      expect(q.justificativa, q.id).toMatch(/Certo|Errado/);
      expect(q.fundamentacaoDidatica!.referencia.url).toBe(q.provaUrl);
    }
    const anulados = [['CAMARA14_CB2_03', 49], ['167_CDNS_CG1_01', 30]];
    for (const [codigo, numero] of anulados) expect(lote.conferencia.itens.some(e => e.codigoCaderno === codigo && e.numeroOficial === numero)).toBe(false);
    expect(ingles.find(q => q.id === 'real-fonte-8f8bafc433ed-93')!.versao_errada).toContain('never organize');
  });
  it('mantém o C histórico e oferece julgamento HNC E para a mudança na garantia de proposta', () => {
    const id = 'real-fonte-963ffeef2059-143';
    const original = QUESTOES_REAIS.find(q => q.id === id)!;
    const atual = QUESTOES_REAIS_PARA_TREINO.find(q => q.id === id)!;
    expect(original.gabarito).toBe('C'); expect(atual.gabarito).toBe('E');
    expect(atual.item).toContain('14.133/2021');
    expect(atual.adaptacaoEditorial!.original.item).toBe(original.item);
    expect(atual.adaptacaoEditorial!.original.justificativa).toBe(original.justificativa);
    expect(atual.fundamentacaoDidatica!.referencia.localizador).toContain('art. 58');
    expect(atual.provaUrl).toBe(original.provaUrl); expect(atual.gabaritoUrl).toBe(original.gabaritoUrl);
    for (const [idNorma, norma] of [['real-fonte-adc78534c80e-70', '6023:2025'], ['real-fonte-fde51a905108-70', '6028:2021']]) {
      const q = QUESTOES_REAIS_PARA_TREINO.find(q => q.id === idNorma)!;
      expect(q.item).toContain(norma); expect(q.gabarito).toBe('E');
      expect(q.adaptacaoEditorial!.original.gabarito).toBe('E');
      expect(q.fundamentacaoDidatica!.referencia.localizador).toBeTruthy();
    }
  });
  it('mostra texto de apoio e estudo reverso imediatamente após responder em Inglês', () => {
    const q = ativos.find(q => q.id === 'real-fonte-8f8bafc433ed-93')!;
    localStorage.setItem('hnc_questoes_reais_v1:local', JSON.stringify({ modulo: 'M12', questaoId: q.id, respostas: {} }));
    render(<SimuladosReaisModal onClose={vi.fn()} />);
    expect(screen.getByText(q.item)).toBeTruthy();
    expect(screen.getByText('Texto de apoio em inglês')).toBeTruthy();
    expect(screen.getByText(q.contexto.replace(/\s+/g, ' ').trim()).getAttribute('lang')).toBe('en');
    expect(screen.queryByText(q.justificativa)).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: /^Certo$/ }));
    expect(screen.getByRole('status').textContent).toContain('Você acertou');
    expect(screen.getByText(q.justificativa)).toBeTruthy();
    expect(screen.getByText('Exemplo na prática')).toBeTruthy();
  });
});
