// @vitest-environment jsdom
import { createHash } from 'node:crypto';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { QUESTOES_REAIS, type QuestaoReal } from '../content/questoesReais';
import base from '../content/questoesReaisTriadas.json';
import lote06 from '../content/questoesReaisLote06.json';
import novos from '../content/questoesReaisLote07.json';
import anotacoes from '../content/estudoReversoReais/anotacoes.json';
import lote from '../../docs/simulados-reais/LOTE-300-ACERVO-07.json';
import integral from '../../docs/simulados-reais/ESTUDO-REVERSO-INTEGRAL.json';
import { ALL_COURSE_MODULES } from '../content/registry';
import { SimuladosReaisModal } from '../components/simuladoReal/SimuladosReaisModal';
import { comentarioGenerico, contrasteArtificial } from '../domain/qualidadeEditorial';
import { CONTAGEM_REAIS, RELATORIOS_LOTES_REAIS } from './helpers/lotesReaisConferidos';

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

describe('sétimo lote e continuidade das publicações de 300 questões', () => {
  it('acrescenta 300 itens e conserva a assinatura do banco anterior completo', () => {
    expect(novos).toHaveLength(300); expect(ativos).toHaveLength(300);
    expect(lote.totalAntes).toBe(1829); expect(lote.totalDepois).toBe(2129);
    expect(sha(JSON.stringify(ordenar([...base, ...lote06])))).toBe(lote.sha256BaseJSON);
    expect(new Set(ativos.map(q => q.id))).toEqual(new Set(lote.ids));
    expect(QUESTOES_REAIS).toHaveLength(CONTAGEM_REAIS.total);
    expect(integral.total).toBe(CONTAGEM_REAIS.total);
  });
  it('mantém a cadeia dos lotes sem contar os lotes históricos duas vezes', () => {
    let total = 1529;
    for (const r of RELATORIOS_LOTES_REAIS) {
      expect(r.novasQuestoes).toBe(300); expect(r.totalAntes).toBe(total);
      total += 300; expect(r.totalDepois).toBe(total);
    }
    expect(total).toBe(QUESTOES_REAIS.length);
  });
  it('confronta 294 itens na origem e distingue seis gabaritos consultados em cópia', () => {
    expect(ativos.filter(q => !q.estadoConferencia)).toHaveLength(294);
    expect(ativos.filter(q => q.estadoConferencia === 'copia-oficial')).toHaveLength(6);
    expect(lote.conferencia.itens).toHaveLength(300);
    for (const ev of lote.conferencia.itens) {
      const q = ativos.find(q => q.id === ev.id)!;
      expect(q.gabarito, q.id).toBe(ev.gabaritoOficial);
      expect(['C', 'E']).toContain(q.gabarito);
      expect(sha(q.item), q.id).toBe(ev.sha256ItemConferido);
      expect(ev.acervo.arquivoId, q.id).toBeTruthy();
      expect(ev.acervo.paginaEnunciado, q.id).toBeGreaterThan(0);
      expect(q.provaUrl, q.id).toBe(ev.provaUrl);
      expect(q.gabaritoUrl, q.id).toBe(ev.gabaritoUrl);
    }
  });
  it('preserva a separação entre comando, assertiva e fonte, sem duplicar itens anteriores', () => {
    const anteriores = new Set([...base, ...lote06].map(q => q.id));
    const normalizar = (s: string) => s.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
    expect(new Set(QUESTOES_REAIS.map(q => normalizar(q.item))).size).toBe(QUESTOES_REAIS.length);
    for (const q of ativos) {
      expect(anteriores.has(q.id), q.id).toBe(false);
      expect(q.item, q.id).not.toMatch(/julgue o item a seguir|ANOTAÇÕES:|Capítulo:/i);
      expect(q.acervoUrl, q.id).toMatch(/^https:\/\/drive\.google\.com\//);
      expect(q.fonte, q.id).not.toContain('(None)');
    }
  });
  it('oferece 300 comentários, exemplos e comparações individuais com vínculo à teoria', () => {
    expect(new Set(ativos.map(q => q.justificativa)).size).toBe(300);
    expect(new Set(ativos.map(q => q.fundamentacaoDidatica?.exemplo)).size).toBe(300);
    for (const q of ativos) {
      expect(q.justificativa.length, q.id).toBeGreaterThanOrEqual(150);
      expect(comentarioGenerico(q.justificativa), q.id).toBe(false);
      expect(q.fundamentacaoDidatica?.exemplo.length, q.id).toBeGreaterThanOrEqual(80);
      expect(q.fundamentacaoDidatica?.referencia.localizador, q.id).toBeTruthy();
      expect(q.item.includes(q.gatilho!), q.id).toBe(true);
      expect(q.gatilho, q.id).toBe(anotacoes[q.id as keyof typeof anotacoes].gatilho);
      expect(contrasteArtificial(q.gabarito === 'E' ? q.versao_correta : q.versao_errada), q.id).toBe(false);
      expect(ALL_COURSE_MODULES.find(m => m.codigo === q.modulo)?.modulosFilhos?.some(s => s.numero === q.submoduloId), q.id).toBe(true);
    }
  });
  it('corrige a divergência de interoperabilidade da PCDF com identificação do resultado definitivo', () => {
    const corrigidas = lote.conferencia.itens.filter(e => e.resultado === 'corrigida');
    expect(corrigidas).toHaveLength(1);
    const q = ativos.find(q => q.id === corrigidas[0].id)!;
    expect(q.gabarito).toBe('C'); expect(corrigidas[0].numeroOficial).toBe(79);
    expect(q.justificativa).toContain('gabarito definitivo');
  });
  it('explica a distinção entre formatos MARC e apresentação visual após responder', () => {
    const q = ativos.find(q => q.prova.includes('SEE/PE 2022') && q.conferenciaOficial?.numero === 106)!;
    abrir(q); fireEvent.click(screen.getByRole('button', { name: 'Errado' }));
    expect(screen.getByText(q.justificativa)).toBeTruthy();
    expect(q.justificativa).toContain('apresentação visual');
    expect(screen.getByText('Exemplo na prática')).toBeTruthy();
    expect(screen.getByText('Como ficaria CERTO', { exact: true })).toBeTruthy();
  });
  it('distingue as versões da NBR 6028 e mantém a fonte do gabarito acessível', () => {
    const q = ativos.find(q => q.prova.includes('TSE/CPNUJE 2024') && q.conferenciaOficial?.numero === 64)!;
    abrir(q); fireEvent.click(screen.getByRole('button', { name: 'Errado' }));
    expect(q.justificativa).toContain('2021'); expect(q.justificativa).toContain('2003');
    expect(screen.getByRole('link', { name: 'gabarito definitivo' }).getAttribute('href')).toBe(q.gabaritoUrl);
  });
  it('apresenta a referência específica da IFLA sobre IA em lugar de fonte apenas genérica', () => {
    const q = ativos.find(q => q.prova.includes('STJ 2024') && q.conferenciaOficial?.numero === 117)!;
    abrir(q); fireEvent.click(screen.getByRole('button', { name: 'Certo' }));
    expect(screen.getByRole('link', { name: /IFLA — Statement on Libraries/ }).getAttribute('href')).toContain('ifla_statement_on_libraries_and_artificial_intelligence.pdf');
    expect(screen.getByText(q.justificativa)).toBeTruthy();
  });
  it('normaliza somente quebras tipográficas identificadas e preserva contextos extensos', () => {
    const urn = ativos.find(q => q.prova.includes('STJ 2024') && q.conferenciaOficial?.numero === 104)!;
    expect(urn.item).toContain('URN_DE_IDENTIFICACAO_DA_NORMA');
    const memoria = ativos.find(q => q.prova.includes('TJ/AM 2019') && q.conferenciaOficial?.numero === 58)!;
    expect(memoria.item).toContain('permanente'); expect(memoria.item).not.toContain('per- manente');
    const contexto = ativos.find(q => q.prova.includes('STJ 2024') && q.conferenciaOficial?.numero === 55)!;
    expect(contexto.contexto.length).toBeGreaterThan(800);
    abrir(contexto); expect(screen.getByText(contexto.contexto)).toBeTruthy();
  });
});
