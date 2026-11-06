// @vitest-environment jsdom
import { createHash } from 'node:crypto';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { QUESTOES_REAIS, type QuestaoReal } from '../content/questoesReais';
import base from '../content/questoesReaisTriadas.json';
import novos from '../content/questoesReaisLote06.json';
import anotacoes from '../content/estudoReversoReais/anotacoes.json';
import conferencia from '../content/conferenciaOficialReais/lote06.json';
import anterior from '../../docs/simulados-reais/CONFERENCIA-OFICIAL-2026-11-05.json';
import lote from '../../docs/simulados-reais/LOTE-300-ACERVO-06.json';
import { ALL_COURSE_MODULES } from '../content/registry';
import { SimuladosReaisModal } from '../components/simuladoReal/SimuladosReaisModal';
import { comentarioGenerico, contrasteArtificial } from '../domain/qualidadeEditorial';

const ativos = QUESTOES_REAIS.filter(q => q.loteRevisao === lote.lote);
afterEach(() => { cleanup(); localStorage.clear(); });
function abrir(q: QuestaoReal) {
  localStorage.setItem('hnc_questoes_reais_v1:local', JSON.stringify({ modulo: q.modulo, questaoId: q.id, respostas: {} }));
  render(<SimuladosReaisModal onClose={vi.fn()} />);
}
const sha = (s: string) => createHash('sha256').update(s).digest('hex');
function ordenar(obj: unknown): unknown {
  if (Array.isArray(obj)) return obj.map(ordenar);
  if (obj && typeof obj === 'object') return Object.fromEntries(Object.entries(obj).sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0).map(([k, v]) => [k, ordenar(v)]));
  return obj;
}

describe('sexto lote: 300 questões conferidas e estudo reverso individual', () => {
  it('acrescenta exatamente 300 questões ativas e preserva o banco histórico anterior', () => {
    expect(novos).toHaveLength(300);
    expect(ativos).toHaveLength(300);
    expect(QUESTOES_REAIS).toHaveLength(1829);
    expect(sha(JSON.stringify(ordenar(base)))).toBe(lote.sha256BaseJSON);
    expect(new Set(ativos.map(q => q.id))).toEqual(new Set(lote.ids));
    expect(new Set(novos.map(q => q.id)).size).toBe(300);
    expect(lote.apostilaEsquematizada).toBe(274);
    expect(lote.outrasFontes).toBe(26);
  });
  it('confronta texto e resultado de todos os itens, distinguindo origem e cópia', () => {
    expect(lote.conferencia.itens).toHaveLength(300);
    expect(ativos.filter(q => !q.estadoConferencia)).toHaveLength(261);
    expect(ativos.filter(q => q.estadoConferencia === 'copia-oficial')).toHaveLength(39);
    const identidades = new Set<string>();
    for (const ev of lote.conferencia.itens) {
      const q = ativos.find(q => q.id === ev.id)!;
      const f = conferencia.fontes[ev.fonteId as keyof typeof conferencia.fontes];
      expect(q.gabarito, q.id).toBe(ev.gabaritoOficial);
      expect(['C', 'E']).toContain(q.gabarito);
      expect(sha(q.item), q.id).toBe(ev.sha256ItemConferido);
      expect(q.provaUrl, q.id).toBe(f.provaUrl);
      expect(q.gabaritoUrl, q.id).toBe(f.gabaritoUrl);
      expect(ev.paginaProva, q.id).toBeGreaterThan(0);
      const chave = `${f.provaUrl}#${ev.numeroOficial}`;
      expect(identidades.has(chave), q.id).toBe(false);
      identidades.add(chave);
    }
  });
  it('não reincorpora anuladas ou pendências anteriores e não aceita assertivas repetidas', () => {
    const inativos = new Set(anterior.itens.filter(r => ['anulada', 'pendente'].includes(r.resultado)).map(r => r.id));
    expect(ativos.some(q => inativos.has(q.id))).toBe(false);
    const normalizar = (s: string) => s.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
    expect(new Set(QUESTOES_REAIS.map(q => normalizar(q.item))).size).toBe(QUESTOES_REAIS.length);
    expect(QUESTOES_REAIS.some(q => q.estadoConferencia === 'caderno')).toBe(false);
  });
  it('mantém comentários, exemplos e contrastes individuais com acesso válido à teoria', () => {
    expect(new Set(ativos.map(q => q.justificativa)).size).toBe(300);
    expect(new Set(ativos.map(q => q.fundamentacaoDidatica?.exemplo)).size).toBe(300);
    for (const q of ativos) {
      expect(q.justificativa.length, q.id).toBeGreaterThanOrEqual(150);
      expect(comentarioGenerico(q.justificativa), q.id).toBe(false);
      expect(q.fundamentacaoDidatica?.exemplo.length, q.id).toBeGreaterThanOrEqual(80);
      expect(q.fundamentacaoDidatica?.referencia.localizador, q.id).toBeTruthy();
      expect(q.item.includes(q.gatilho!), q.id).toBe(true);
      expect(q.gatilho, q.id).toBe(anotacoes[q.id as keyof typeof anotacoes].gatilho);
      const contraste = q.gabarito === 'E' ? q.versao_correta : q.versao_errada;
      expect(contrasteArtificial(contraste), q.id).toBe(false);
      expect(ALL_COURSE_MODULES.find(m => m.codigo === q.modulo)?.modulosFilhos?.some(s => s.numero === q.submoduloId), q.id).toBe(true);
    }
  });
  it('corrige cinco respostas da apostila e identifica a fonte definitiva', () => {
    const corrigidas = lote.conferencia.itens.filter(e => e.resultado === 'corrigida');
    expect(corrigidas).toHaveLength(5);
    for (const ev of corrigidas) {
      const q = ativos.find(q => q.id === ev.id)!;
      expect(ev.gabaritoAcervo, q.id).not.toBe(ev.gabaritoOficial);
      expect(q.justificativa.toLowerCase(), q.id).toContain('definitivo');
      expect(q.gabaritoUrl, q.id).toBeTruthy();
    }
  });
  it('recupera as condições das situações hipotéticas e remove cabeçalhos de apostila', () => {
    const contexto = (n: number) => ativos.find(q => q.numeroNaFonte === n)!.contexto;
    expect(contexto(1137)).toContain('administração pública');
    expect(contexto(1442)).toContain('bibliotecas jurídicas');
    expect(contexto(1458)).toContain('acervo híbrido');
    for (const q of ativos) expect(q.contexto, q.id).not.toMatch(/Capítulo:|ANOTAÇÕES:/);
  });
  it('explica RAG após a resposta, com exemplo e referência científica acessível', () => {
    const q = ativos.find(q => q.id === 'real-uneal-2026-80')!;
    abrir(q);
    fireEvent.click(screen.getByRole('button', { name: 'Certo' }));
    expect(screen.getByText('Exemplo na prática')).toBeTruthy();
    expect(screen.getByText(q.justificativa)).toBeTruthy();
    expect(screen.getByRole('link', { name: /Lewis e colaboradores/ }).getAttribute('href')).toBe('https://arxiv.org/abs/2005.11401');
    expect(screen.getByRole('link', { name: 'documento de origem' }).getAttribute('href')).toContain('cdn.cebraspe.org.br');
  });
  it('contextualiza a mudança da NBR 6028 sem aplicar a edição atual retroativamente', () => {
    const q = ativos.find(q => q.numeroNaFonte === 1916)!;
    abrir(q);
    fireEvent.click(screen.getByRole('button', { name: 'Errado' }));
    expect(screen.getByText(q.justificativa)).toBeTruthy();
    expect(q.justificativa).toContain('2003');
    expect(q.justificativa).toContain('2021');
    expect(screen.getByText('Como ficaria CERTO', { exact: true })).toBeTruthy();
  });
});
