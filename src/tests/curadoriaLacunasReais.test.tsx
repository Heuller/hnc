// @vitest-environment jsdom
import { createHash } from 'node:crypto';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { QUESTOES_REAIS } from '../content/questoesReais';
import base from '../content/questoesReaisTriadas.json';
import lote06 from '../content/questoesReaisLote06.json';
import lote07 from '../content/questoesReaisLote07.json';
import lote08 from '../content/questoesReaisLote08.json';
import lote09 from '../content/questoesReaisLote09.json';
import lote10 from '../content/questoesReaisLote10.json';
import novos from '../content/questoesReaisLote11.json';
import lote from '../../docs/simulados-reais/CURADORIA-LACUNAS-11.json';
import reclassificacao from '../../docs/simulados-reais/RECLASSIFICACAO-LACUNAS-01.json';
import integral from '../../docs/simulados-reais/ESTUDO-REVERSO-INTEGRAL.json';
import prioridades from '../../docs/simulados-reais/PRIORIDADES-CURADORIA-01.json';
import { ALL_COURSE_MODULES } from '../content/registry';
import { SimuladosReaisModal } from '../components/simuladoReal/SimuladosReaisModal';
import { CONTAGEM_REAIS } from './helpers/lotesReaisConferidos';

const ativos = QUESTOES_REAIS.filter(q => q.loteRevisao === lote.lote);
function ordenar(o: unknown): unknown {
  if (Array.isArray(o)) return o.map(ordenar);
  if (o && typeof o === 'object') return Object.fromEntries(Object.entries(o).sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0).map(([k, v]) => [k, ordenar(v)]));
  return o;
}
const sha = (s: string) => createHash('sha256').update(s).digest('hex');
afterEach(() => { cleanup(); localStorage.clear(); });

describe('curadoria por lacunas: contribuição antes de volume', () => {
  it('inclui somente as 12 revisões declaradas e preserva o banco histórico', () => {
    expect(novos).toHaveLength(12); expect(ativos).toHaveLength(12);
    expect(lote.totalAntes).toBe(3029); expect(lote.totalDepois).toBe(3041);
    expect(lote.tipoRevisao).toBe('curadoria-lacunas');
    expect(sha(JSON.stringify(ordenar([...base, ...lote06, ...lote07, ...lote08, ...lote09, ...lote10])))).toBe(lote.sha256BaseJSON);
    expect(QUESTOES_REAIS).toHaveLength(CONTAGEM_REAIS.total);
    expect(prioridades.coberturaPorSubmodulo.reduce((total, s) => total + s.antes, 0)).toBe(3029);
    expect(prioridades.coberturaPorSubmodulo.reduce((total, s) => total + s.depois, 0)).toBe(3041);
  });
  it('documenta objetivo distinto e comparação editorial com o banco para cada inclusão', () => {
    expect(lote.objetivos).toHaveLength(12);
    expect(new Set(lote.objetivos.map(o => o.objetivoId)).size).toBe(12);
    expect(new Set(lote.objetivos.map(o => o.id))).toEqual(new Set(ativos.map(q => q.id)));
    for (const o of lote.objetivos) {
      expect(o.ganhoPedagogico.length).toBeGreaterThanOrEqual(40);
      expect(o.comparacaoComBanco.length).toBeGreaterThanOrEqual(40);
    }
  });
  it('cobre os quatro submódulos físicos do M7 e identifica os cargos de origem', () => {
    const cobertura = Object.fromEntries(['7.1', '7.2', '7.3', '7.4'].map(s => [s, ativos.filter(q => q.submoduloId === s).length]));
    expect(cobertura).toEqual({ '7.1': 3, '7.2': 3, '7.3': 4, '7.4': 2 });
    for (const q of ativos) {
      expect(q.modulo).toBe('M7');
      expect(q.prova).toMatch(/Museólogo|Técnico Judiciário|Auxiliar Institucional/);
      expect(ALL_COURSE_MODULES.find(m => m.codigo === q.modulo)?.modulosFilhos?.some(s => s.numero === q.submoduloId)).toBe(true);
    }
  });
  it('confere gabarito e transcrição na origem e mantém explicações e exemplos individuais', () => {
    expect(lote.confrontoNaOrigem).toBe(12); expect(lote.confrontoEmCopia).toBe(0);
    for (const ev of lote.conferencia.itens) {
      const q = ativos.find(q => q.id === ev.id)!;
      expect(q.gabarito).toBe(ev.gabaritoOficial); expect(['C', 'E']).toContain(q.gabarito);
      expect(sha(q.item)).toBe(ev.sha256ItemConferido);
      expect(q.item).toContain(q.gatilho!);
      expect(q.acervoUrl).toBe(ev.provaUrl); expect(q.gabaritoUrl).toBe(ev.gabaritoUrl);
      expect(ev.origemDiretaDaProva).toBe(true); expect(ev.acervo).toBeNull();
      expect(q.item).not.toMatch(/CEBRASPE|CESPE|julgue|\|\|/i);
      expect(q.justificativa.length).toBeGreaterThanOrEqual(150);
      expect(q.fundamentacaoDidatica!.exemplo.length).toBeGreaterThanOrEqual(80);
      expect(q.fundamentacaoDidatica!.referencia.url).toMatch(/^https:\/\//);
    }
    expect(new Set(ativos.map(q => q.justificativa)).size).toBe(12);
    expect(new Set(ativos.map(q => q.fundamentacaoDidatica!.exemplo)).size).toBe(12);
  });
  it('corrige três vínculos temáticos sem acrescentar questões nem alterar seu conteúdo', () => {
    const historico = [...base, ...lote06, ...lote07, ...lote08, ...lote09, ...lote10];
    expect(reclassificacao.itens).toHaveLength(3);
    for (const ajuste of reclassificacao.itens) {
      const anterior = historico.find(q => q.id === ajuste.id)!;
      const atual = QUESTOES_REAIS.find(q => q.id === ajuste.id)!;
      expect(anterior.submoduloId).toBe(ajuste.de);
      expect(atual.submoduloId).toBe(ajuste.para);
      expect(atual.modulo).toBe(`M${ajuste.para.split('.')[0]}`);
      expect(atual.item).toBe(anterior.item);
      expect(atual.justificativa).toBe(anterior.justificativa);
      expect(atual.gabarito).toBe(anterior.gabarito);
    }
    for (const sub of ['8.2', '9.2', '6.3'] as const) expect(integral.porSubmodulo[sub]).toBe(QUESTOES_REAIS.filter(q => q.submoduloId === sub).length);
  });
  it('abre o M7 e o estudo reverso imediatamente, com acesso à aula do assunto', () => {
    const q = ativos.find(q => q.item.includes('feromônio'))!;
    localStorage.setItem('hnc_questoes_reais_v1:local', JSON.stringify({ modulo: 'M7', questaoId: q.id, respostas: {} }));
    render(<SimuladosReaisModal onClose={vi.fn()} />);
    expect(screen.getByText(q.item)).toBeTruthy(); expect(screen.queryByText(q.justificativa)).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: /^Errado$/ }));
    expect(screen.getByRole('status').textContent).toContain('Você acertou');
    expect(screen.getByText(q.justificativa)).toBeTruthy();
    expect(screen.getByText(q.fundamentacaoDidatica!.exemplo)).toBeTruthy();
    expect(screen.getByText(/Rever o assunto na teoria \(submódulo 7.2\)/)).toBeTruthy();
  });
});
