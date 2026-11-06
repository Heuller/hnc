// @vitest-environment jsdom
import { createHash } from 'node:crypto';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { QUESTOES_REAIS, type QuestaoReal } from '../content/questoesReais';
import { QUESTOES_REAIS_PARA_TREINO, aplicarAdaptacoesRevisadas } from '../content/questoesReaisAtualizadas';
import base from '../content/questoesReaisTriadas.json';
import lote06 from '../content/questoesReaisLote06.json';
import lote07 from '../content/questoesReaisLote07.json';
import novos from '../content/questoesReaisLote08.json';
import adaptacoes from '../content/adaptacoesReais.json';
import lote from '../../docs/simulados-reais/LOTE-300-ACERVO-08.json';
import { ALL_COURSE_MODULES } from '../content/registry';
import { SimuladosReaisModal } from '../components/simuladoReal/SimuladosReaisModal';
import { comentarioGenerico, contrasteArtificial } from '../domain/qualidadeEditorial';
import { assinaturaQuestaoReal, lerSessaoReal } from '../domain/sessaoQuestoesReais';
import { CONTAGEM_REAIS } from './helpers/lotesReaisConferidos';

const ativos = QUESTOES_REAIS.filter(q => q.loteRevisao === lote.lote);
const sha = (s: string) => createHash('sha256').update(s).digest('hex');
function ordenar(o: unknown): unknown {
  if (Array.isArray(o)) return o.map(ordenar);
  if (o && typeof o === 'object') return Object.fromEntries(Object.entries(o).sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0).map(([k, v]) => [k, ordenar(v)]));
  return o;
}
function abrir(q: QuestaoReal) {
  localStorage.setItem('hnc_questoes_reais_v1:local', JSON.stringify({ modulo: q.modulo, questaoId: q.id, respostas: {} }));
  render(<SimuladosReaisModal onClose={vi.fn()} />);
}
afterEach(() => { cleanup(); localStorage.clear(); });

describe('oitavo lote: procedência, conteúdo e continuidade', () => {
  it('acrescenta 300 itens sem reescrever a base dos lotes anteriores', () => {
    expect(novos).toHaveLength(300); expect(ativos).toHaveLength(300);
    expect(lote.totalAntes).toBe(2129); expect(lote.totalDepois).toBe(2429);
    expect(sha(JSON.stringify(ordenar([...base, ...lote06, ...lote07])))).toBe(lote.sha256BaseJSON);
    expect(QUESTOES_REAIS).toHaveLength(CONTAGEM_REAIS.total);
    expect(new Set(ativos.map(q => q.id))).toEqual(new Set(lote.ids));
  });
  it('distingue 267 conferências na origem e 33 em cópia, excluindo anulações', () => {
    expect(ativos.filter(q => !q.estadoConferencia)).toHaveLength(267);
    expect(ativos.filter(q => q.estadoConferencia === 'copia-oficial')).toHaveLength(33);
    const identidades = new Set<string>();
    for (const ev of lote.conferencia.itens) {
      const q = ativos.find(q => q.id === ev.id)!;
      expect(q.gabarito).toBe(ev.gabaritoOficial); expect(['C', 'E']).toContain(q.gabarito);
      expect(sha(q.item)).toBe(ev.sha256ItemConferido);
      expect(q.provaUrl).toBe(ev.provaUrl); expect(q.gabaritoUrl).toBe(ev.gabaritoUrl);
      const identidade = `${ev.provaUrl}:${ev.numeroOficial}`;
      expect(identidades.has(identidade)).toBe(false); identidades.add(identidade);
    }
  });
  it('não atribui ao Drive os 116 itens incluídos diretamente das provas', () => {
    const diretos = lote.conferencia.itens.filter(e => e.origemDiretaDaProva);
    expect(diretos).toHaveLength(116);
    for (const ev of diretos) {
      expect(ev.acervo).toBeNull(); const q = ativos.find(q => q.id === ev.id)!;
      expect(q.acervoUrl).toBe(ev.provaUrl); expect(q.fonte).toContain('Inclusão diretamente da prova');
    }
    expect(lote.conferencia.itens.filter(e => e.acervo)).toHaveLength(184);
    expect(lote.conferencia.itens.filter(e => e.acervo?.arquivoId === '18uQCP0IGW-_I5Rp6kbHKZEpGbxfCvORv')).toHaveLength(14);
  });
  it('mantém 300 comentários, exemplos e contrastes individuais vinculados à teoria', () => {
    expect(new Set(ativos.map(q => q.justificativa)).size).toBe(300);
    expect(new Set(ativos.map(q => q.fundamentacaoDidatica?.exemplo)).size).toBe(300);
    for (const q of ativos) {
      expect(q.justificativa.length, q.id).toBeGreaterThanOrEqual(150);
      expect(comentarioGenerico(q.justificativa), q.id).toBe(false);
      expect(q.item.includes(q.gatilho!), q.id).toBe(true);
      expect(q.item, q.id).not.toMatch(/CEBRASPE|PROVA DISCURSIVA|ANOTAÇÕES:|julgue /i);
      expect(q.fundamentacaoDidatica!.exemplo.length, q.id).toBeGreaterThanOrEqual(80);
      expect(contrasteArtificial(q.gabarito === 'E' ? q.versao_correta : q.versao_errada), q.id).toBe(false);
      expect(ALL_COURSE_MODULES.find(m => m.codigo === q.modulo)?.modulosFilhos?.some(s => s.numero === q.submoduloId), q.id).toBe(true);
    }
  });
  it('explicita a divergência do caderno da DPU e restaura quatro trechos pela prova', () => {
    const ev = lote.conferencia.itens.filter(e => e.resultado === 'corrigida'); expect(ev).toHaveLength(1);
    expect(ev[0].numeroOficial).toBe(146); expect(ev[0].gabaritoOficial).toBe('E');
    expect(ativos.find(q => q.id === ev[0].id)!.justificativa).toContain('gabarito definitivo');
    expect(lote.conferencia.itens.filter(e => e.textoRestauradoDaProva)).toHaveLength(4);
  });
});

describe('adaptações normativas identificadas e fundamentadas', () => {
  it('mantém os sete originais e suas conferências e aplica a curadoria apenas ao treino', () => {
    expect(Object.keys(adaptacoes)).toHaveLength(7);
    expect(QUESTOES_REAIS_PARA_TREINO).toHaveLength(QUESTOES_REAIS.length);
    for (const id of Object.keys(adaptacoes)) {
      const original = QUESTOES_REAIS.find(q => q.id === id)!;
      const atual = QUESTOES_REAIS_PARA_TREINO.find(q => q.id === id)!;
      expect(original.adaptacaoEditorial).toBeUndefined(); expect(atual).not.toBe(original);
      expect(atual.adaptacaoEditorial!.original.item).toBe(original.item);
      expect(atual.adaptacaoEditorial!.original.gabarito).toBe(original.gabarito);
      expect(atual.provaUrl).toBe(original.provaUrl); expect(atual.gabaritoUrl).toBe(original.gabaritoUrl);
      expect(atual.fundamentacaoDidatica!.referencia.url).toMatch(/^https:/);
      expect(atual.item).toContain(atual.gatilho);
    }
  });
  it('diferencia o gabarito autoral atualizado do resultado histórico da banca', () => {
    const id = 'real-acervo-14a5a412cd2397';
    const original = QUESTOES_REAIS.find(q => q.id === id)!;
    const atual = QUESTOES_REAIS_PARA_TREINO.find(q => q.id === id)!;
    expect(original.gabarito).toBe('C'); expect(atual.gabarito).toBe('E');
    expect(atual.contexto).toContain('2021'); expect(atual.versao_correta).toContain('resenha');
  });
  it('não reaproveita uma resposta da redação antiga como acerto na adaptação', () => {
    const original = QUESTOES_REAIS.find(q => q.id === 'real-acervo-14a5a412cd2397')!;
    const intacta = QUESTOES_REAIS.find(q => !adaptacoes[q.id as keyof typeof adaptacoes])!;
    const raw = JSON.stringify({ modulo: original.modulo, questaoId: original.id, respostas: {
      [original.id]: { resposta: 'C', assinatura: assinaturaQuestaoReal(original) },
      [intacta.id]: { resposta: intacta.gabarito, assinatura: assinaturaQuestaoReal(intacta) },
    } });
    const s = lerSessaoReal(raw, QUESTOES_REAIS_PARA_TREINO);
    expect(s.respostas[original.id]).toBeUndefined(); expect(s.respostas[intacta.id]).toBeTruthy();
  });
  it('identifica a adaptação antes da resposta e oferece comparação e fontes distintas depois', () => {
    const q = QUESTOES_REAIS_PARA_TREINO.find(q => q.id === 'real-acervo-14a5a412cd2397')!;
    abrir(q);
    expect(screen.getByText('Adaptada pela HNC')).toBeTruthy();
    expect(screen.queryByText('Conferida com a banca')).toBeNull();
    expect(screen.queryByText('Gabarito da prova original: Certo')).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: /^Certo$/ }));
    expect(screen.getByRole('status').textContent).toContain('Você errou · Gabarito HNC: Errado');
    fireEvent.click(screen.getByText('Compare com a questão original da banca'));
    expect(screen.getByText('Gabarito da prova original: Certo')).toBeTruthy();
    expect(screen.getByText(q.adaptacaoEditorial!.original.item)).toBeTruthy();
    expect(screen.getByRole('link', { name: 'prova original' }).getAttribute('href')).toBe(q.provaUrl);
    expect(screen.getByRole('link', { name: 'gabarito da prova original' }).getAttribute('href')).toBe(q.gabaritoUrl);
    expect(screen.getByText(q.justificativa)).toBeTruthy(); expect(screen.getByText('Exemplo na prática')).toBeTruthy();
  });
  it('recusa adaptações órfãs em vez de esconder erro de vínculo editorial', () => {
    expect(() => aplicarAdaptacoesRevisadas([], adaptacoes as Parameters<typeof aplicarAdaptacoesRevisadas>[1])).toThrow('Adaptação sem questão de origem');
  });
});
