// @vitest-environment jsdom
import { createHash } from 'node:crypto';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { QUESTOES_REAIS } from '../content/questoesReais';
import base from '../content/questoesReaisTriadas.json';
import lote07 from '../content/questoesReaisLote07.json';
import novos from '../content/questoesReaisLote13.json';
import registro from '../content/conferenciaOficialReais/lote13.json';
import lote from '../../docs/simulados-reais/CURADORIA-LACUNAS-13.json';
import meta from '../../docs/simulados-reais/META-200-MODULOS.json';
import antes from '../../docs/simulados-reais/PRIORIDADES-CURADORIA-02.json';
import depois from '../../docs/simulados-reais/PRIORIDADES-CURADORIA-03.json';
import reclassificacao from '../../docs/simulados-reais/RECLASSIFICACAO-LACUNAS-02.json';
import { assinaturaQuestaoReal, lerSessaoReal } from '../domain/sessaoQuestoesReais';
import { SimuladosReaisModal } from '../components/simuladoReal/SimuladosReaisModal';
import { CONTAGEM_REAIS } from './helpers/lotesReaisConferidos';

const ativos = QUESTOES_REAIS.filter(q => q.loteRevisao === lote.lote);
afterEach(() => { cleanup(); localStorage.clear(); });

describe('meta de cobertura: contagens reais e déficit explícito', () => {
  it('concilia a inclusão com o banco e não declara cumprida uma meta ainda pendente', () => {
    expect(novos).toHaveLength(128); expect(ativos).toHaveLength(128);
    expect(lote.totalAntes).toBe(3341); expect(lote.totalDepois).toBe(3469);
    expect(QUESTOES_REAIS).toHaveLength(CONTAGEM_REAIS.total);
    expect(meta.deficitAntes).toBe(874); expect(meta.deficitDepois).toBe(739);
    expect(meta.modulos).toHaveLength(10);
    for (const m of meta.modulos) {
      expect(m.depois).toBe(QUESTOES_REAIS.filter(q => q.modulo === m.modulo).length);
      expect(m.faltam).toBe(Math.max(0, m.meta - m.depois));
      expect(m.depois).toBe(m.antes + m.novas + m.reclassificadasSemNovaContagem);
      expect(m.situacao).toBe(m.faltam ? 'abaixo-da-meta' : 'meta-atingida');
    }
    expect(meta.modulos.find(m => m.modulo === 'M13')?.depois).toBe(200);
    expect(meta.modulos.find(m => m.modulo === 'M9')?.faltam).toBe(105);
  });
  it('preserva o retrato anterior e concilia os 75 submódulos sem recontar reclassificações', () => {
    expect(antes.baseDepois).toBe(3341);
    expect(depois.coberturaPorSubmodulo).toHaveLength(75);
    expect(depois.coberturaPorSubmodulo.reduce((s, q) => s + q.antes, 0)).toBe(3341);
    expect(depois.coberturaPorSubmodulo.reduce((s, q) => s + q.depois, 0)).toBe(3469);
    for (const s of depois.coberturaPorSubmodulo) {
      expect(s.antes).toBe(antes.coberturaPorSubmodulo.find(a => a.submodulo === s.submodulo)!.depois);
      expect(s.depois).toBe(QUESTOES_REAIS.filter(q => q.submoduloId === s.submodulo).length);
    }
  });
  it('confere cada transcrição e julgamento sem incluir anuladas ou cópias de gabarito como itens novos', () => {
    expect(lote.confrontoNaOrigem).toBe(74); expect(lote.confrontoEmCopia).toBe(54);
    expect(Object.keys(lote.conferencia.fontes)).toHaveLength(15);
    expect(new Set(lote.objetivos.map(o => o.objetivoId)).size).toBe(128);
    expect(new Set(ativos.map(q => q.justificativa)).size).toBe(128);
    expect(new Set(ativos.map(q => q.fundamentacaoDidatica!.exemplo)).size).toBe(128);
    for (const ev of lote.conferencia.itens) {
      const q = ativos.find(q => q.id === ev.id)!;
      expect(q.gabarito).toBe(ev.gabaritoOficial); expect(['C', 'E']).toContain(q.gabarito);
      expect(createHash('sha256').update(q.item).digest('hex')).toBe(ev.sha256ItemConferido);
      expect(q.item).toContain(q.gatilho!);
      expect(q.item).not.toMatch(/JUSTIFICATIVA:|CEBRASPE|CESPE|julgue os/i);
      expect(q.item).not.toContain(String.fromCharCode(2));
      expect(q.justificativa.length).toBeGreaterThanOrEqual(150);
      expect(q.fundamentacaoDidatica!.exemplo.length).toBeGreaterThanOrEqual(80);
    }
    const tce = lote.conferencia.itens.filter(ev => ev.codigoCaderno === 'TCE/PE 2004 — Cargo 5: Bibliotecário');
    expect(tce).toHaveLength(4);
    expect(tce.every(ev => [49, 51, 53].includes(ev.linhaGabarito))).toBe(true);
    expect(Object.values(lote.conferencia.fontes).some(f => 'notaPareamento' in f && String(f.notaPareamento).includes('CARGO 5: BIBLIOTECÁRIO'))).toBe(true);
  });
  it('mantém textos de apoio e impede que a numeração de uma obra seja confundida com questão', () => {
    const textuais = ativos.filter(q => ['M12', 'M13'].includes(q.modulo) && !q.item.includes('comunicações oficiais') && !q.item.includes('pronomes de tratamento'));
    expect(textuais).toHaveLength(74);
    expect(textuais.every(q => q.contexto.length > 400)).toBe(true);
    const ultima = ativos.find(q => q.prova.includes('CNPq') && q.numeroNaFonte === 50)!;
    expect(ultima.item.startsWith('It is correct to infer')).toBe(true);
    expect(ultima.contexto).toContain('A lawyer used ChatGPT');
    expect(ultima.item).not.toContain('anos do CNPq');
  });
  it('reclassifica sete itens mantendo conteúdo e respostas já salvas', () => {
    expect(reclassificacao.itens).toHaveLength(7);
    expect(Object.keys(registro.editorial)).toHaveLength(7);
    for (const ajuste of reclassificacao.itens) {
      const anterior = [...base, ...lote07].find(q => q.id === ajuste.id)!;
      const atual = QUESTOES_REAIS.find(q => q.id === ajuste.id)!;
      expect(anterior.submoduloId).toBe(ajuste.de);
      expect(atual.submoduloId).toBe(ajuste.para);
      expect(atual.modulo).toBe(ajuste.para === '2.5' ? 'M2.5' : 'M9');
      expect(atual.item).toBe(anterior.item);
      expect(atual.justificativa).toBe(anterior.justificativa);
      const resposta = { resposta: atual.gabarito, assinatura: assinaturaQuestaoReal({ ...atual, modulo: anterior.modulo, submoduloId: anterior.submoduloId }) };
      const sessao = lerSessaoReal(JSON.stringify({ modulo: anterior.modulo, questaoId: atual.id, respostas: { [atual.id]: resposta } }), QUESTOES_REAIS);
      expect(sessao.respostas[atual.id]).toEqual(resposta);
    }
  });
  it('separa o fundamento atual da redação histórica e mantém o contraste de um item certo realmente errado', () => {
    const veto = ativos.find(q => q.prova.includes('Técnica Legislativa') && q.numeroNaFonte === 151)!;
    expect(veto.gabarito).toBe('E'); expect(veto.justificativa).toContain('EC 76/2013');
    const foro = ativos.find(q => q.prova.includes('Técnica Legislativa') && q.numeroNaFonte === 149)!;
    expect(foro.justificativa).toContain('HC 232.627');
    const concordancia = ativos.find(q => q.prova.includes('CAPES') && q.numeroNaFonte === 1)!;
    expect(concordancia.gabarito).toBe('C');
    expect(concordancia.versao_errada).toContain('torna obrigatório usar o predicativo no masculino');
    expect(concordancia.justificativa).toContain('feminino singular');
  });
  it('mostra estudo reverso individual imediatamente após a resposta em inglês', () => {
    const q = ativos.find(q => q.prova.includes('CNPq') && q.numeroNaFonte === 49)!;
    localStorage.setItem('hnc_questoes_reais_v1:local', JSON.stringify({ modulo: q.modulo, questaoId: q.id, respostas: {} }));
    render(<SimuladosReaisModal onClose={vi.fn()} />);
    expect(document.body.textContent).toContain('A lawyer used ChatGPT');
    expect(screen.queryByText(q.justificativa)).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: /^Certo$/ }));
    expect(screen.getByRole('status').textContent).toContain('Você acertou');
    expect(screen.getByText(q.justificativa)).toBeTruthy();
    expect(screen.getByText(q.fundamentacaoDidatica!.exemplo)).toBeTruthy();
    expect(screen.getByText(`“${q.versao_errada}”`)).toBeTruthy();
  });
  it('apresenta contexto, explicação da vírgula e retorno à teoria de Português', () => {
    const q = ativos.find(q => q.prova.includes('CNPq') && q.numeroNaFonte === 9)!;
    localStorage.setItem('hnc_questoes_reais_v1:local', JSON.stringify({ modulo: q.modulo, questaoId: q.id, respostas: {} }));
    render(<SimuladosReaisModal onClose={vi.fn()} />);
    expect(document.body.textContent).toContain('César Lattes');
    fireEvent.click(screen.getByRole('button', { name: /^Errado$/ }));
    expect(screen.getByText(q.justificativa)).toBeTruthy();
    expect(screen.getByText(/Rever o assunto na teoria \(submódulo 13.3\)/)).toBeTruthy();
  });
});
