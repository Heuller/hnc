// @vitest-environment jsdom
import { createHash } from 'node:crypto';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { QUESTOES_REAIS, type QuestaoReal } from '../content/questoesReais';
import base from '../content/questoesReaisTriadas.json';
import registro from '../content/conferenciaOficialReais/registro.json';
import relatorio from '../../docs/simulados-reais/CONFERENCIA-OFICIAL-2026-11-05.json';
import { aplicarConferenciaOficial } from '../content/conferenciaOficialReais/aplicar';
import { SimuladosReaisModal } from '../components/simuladoReal/SimuladosReaisModal';
import { assinaturaQuestaoReal, lerSessaoReal } from '../domain/sessaoQuestoesReais';

const porid = new Map(QUESTOES_REAIS.map(q => [q.id, q]));
afterEach(() => { cleanup(); localStorage.clear(); });

function abrir(q: QuestaoReal) {
  localStorage.setItem('hnc_questoes_reais_v1:local', JSON.stringify({ modulo: q.modulo, questaoId: q.id, respostas: {} }));
  render(<SimuladosReaisModal onClose={vi.fn()} />);
}

describe('conferência documental do banco real', () => {
  it('cobre os 1.596 itens de origem e distingue consulta na banca, espelhos e pendências', () => {
    expect(relatorio.itens).toHaveLength(1596);
    expect(new Set(relatorio.itens.map(r => r.id))).toEqual(new Set(base.filter(q => q.estadoConferencia === 'caderno').map(q => q.id)));
    expect(QUESTOES_REAIS).toHaveLength(1529);
    expect(QUESTOES_REAIS.filter(q => !q.estadoConferencia)).toHaveLength(1329);
    expect(QUESTOES_REAIS.filter(q => q.estadoConferencia === 'copia-oficial')).toHaveLength(200);
    expect(QUESTOES_REAIS.filter(q => q.estadoConferencia === 'caderno')).toHaveLength(0);
    for (const r of relatorio.itens) {
      const antes = base.find(q => q.id === r.id)!;
      expect(createHash('sha256').update(antes.item).digest('hex'), r.id).toBe(r.sha256ItemAnterior);
      if (r.resultado === 'pendente') {
        expect(porid.has(r.id), r.id).toBe(false);
        expect(r.motivo, r.id).toBeTruthy();
      }
    }
  });
  it('retira os oito anulados do treino e não restaura respostas desses itens', () => {
    const anuladas = relatorio.itens.filter(r => r.resultado === 'anulada');
    expect(anuladas).toHaveLength(8);
    for (const r of anuladas) {
      expect(porid.has(r.id), r.id).toBe(false);
      expect(registro.itens[r.id as keyof typeof registro.itens].gabarito).toBe('X');
      const original = base.find(q => q.id === r.id)!;
      const sessao = JSON.stringify({ modulo: original.modulo, questaoId: original.id, respostas: { [original.id]: { resposta: original.gabarito, assinatura: assinaturaQuestaoReal(original as QuestaoReal) } } });
      expect(lerSessaoReal(sessao, QUESTOES_REAIS).respostas[original.id]).toBeUndefined();
    }
  });
  it('corrige os dois gabaritos alterados em recurso com explicação e formulação compatíveis', () => {
    expect(relatorio.itens.filter(r => r.resultado === 'corrigida')).toHaveLength(2);
    const cade = porid.get('real-acervo-3b4baceb88ddf3')!;
    const serpro = porid.get('real-esquematizada-1668-5663a792d4')!;
    for (const q of [cade, serpro]) {
      expect(q.gabarito).toBe('E');
      expect(q.versao_correta).toBeTruthy();
      expect(q.justificativa).toContain('gabarito definitivo');
      expect(q.fundamentacaoDidatica?.referencia.url).toContain('JUSTIFICATIVAS');
    }
    expect(cade.justificativa).toContain('informações expressivas');
    expect(serpro.justificativa).toContain('bibliotecários e editores');
    expect(serpro.conferenciaOficial?.tipoGabarito).toBe('recurso');
  });
  it('restaura a negação e os autores no original e desfaz a junção de duas questões', () => {
    const aneel = porid.get('real-esquematizada-1816-fa866ae435')!;
    expect(aneel.item).toContain('se os documentos forem organizados por tipo de suporte');
    expect(aneel.item).not.toContain('se os documentos não forem');
    const bibliografia = porid.get('real-esquematizada-513-a33c204a27')!;
    expect(bibliografia.item).toContain('cronológica de autores');
    expect(bibliografia.item).not.toContain('cronológica de assuntos');
    const indice = porid.get('real-esquematizada-958-34b83148e9')!;
    expect(indice.conferenciaOficial?.numero).toBe(73);
    expect(indice.item).toBe('Índices onomásticos devem conter nomes de pessoas, locais ou instituições.');
    expect(QUESTOES_REAIS.filter(q => q.item === 'O índice de assunto, ou índice analítico, é produto da indexação temática.')).toHaveLength(1);
    for (const r of relatorio.itens.filter(r => r.resultado === 'restaurada')) {
      const q = porid.get(r.id)!;
      expect(createHash('sha256').update(q.item).digest('hex'), r.id).toBe(r.sha256ItemConferido);
    }
  });
  it('exclui um item novo sem confirmação e conserva os conferidos', () => {
    const q = { ...QUESTOES_REAIS[0], id: 'item-futuro-nao-revisado', estadoConferencia: 'caderno' as const, gabaritoUrl: undefined };
    expect(aplicarConferenciaOficial([q])).toEqual([]);
    expect(aplicarConferenciaOficial([QUESTOES_REAIS[0]])).toHaveLength(1);
    const chave = (s: string) => s.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
    expect(new Set(QUESTOES_REAIS.map(q => chave(q.item))).size).toBe(QUESTOES_REAIS.length);
  });
  it('identifica na interface a prova consultada em cópia e mantém o gabarito da banca acessível', () => {
    const q = porid.get('real-esquematizada-513-a33c204a27')!;
    abrir(q);
    expect(screen.getByText('Documento conferido em cópia')).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: 'Certo' }));
    expect(screen.getByRole('link', { name: 'cópia da prova' }).getAttribute('href')).toContain('qconcursos');
    expect(screen.getByRole('link', { name: 'gabarito definitivo' }).getAttribute('href')).toContain('cdn.cebraspe.org.br');
    expect(screen.getByText(q.justificativa)).toBeTruthy();
  });
  it('retira as 105 pendências e suas respostas salvas sem perder respostas de itens válidos', () => {
    const pendentes = relatorio.itens.filter(r => r.resultado === 'pendente');
    expect(pendentes).toHaveLength(105);
    const valida = QUESTOES_REAIS[0];
    const respostas: Record<string, { resposta: string; assinatura: string }> = {};
    for (const r of pendentes) {
      const q = base.find(q => q.id === r.id)!;
      respostas[q.id] = { resposta: q.gabarito, assinatura: assinaturaQuestaoReal(q as QuestaoReal) };
      expect(porid.has(q.id)).toBe(false);
    }
    respostas[valida.id] = { resposta: valida.gabarito, assinatura: assinaturaQuestaoReal(valida) };
    const raw = JSON.stringify({ modulo: valida.modulo, questaoId: pendentes[0].id, respostas });
    expect(Object.keys(lerSessaoReal(raw, QUESTOES_REAIS).respostas)).toEqual([valida.id]);
    localStorage.setItem('hnc_questoes_reais_v1:local', raw);
    render(<SimuladosReaisModal onClose={vi.fn()} />);
    expect(screen.queryByText('Gabarito da apostila')).toBeNull();
    expect(screen.getByRole('button', { name: 'Certo' })).toBeTruthy();
  });
  it('liga decisões de recurso ao resultado definitivo sem apresentar uma tabela inexistente', () => {
    const q = porid.get('real-esquematizada-1668-5663a792d4')!;
    abrir(q);
    fireEvent.click(screen.getByRole('button', { name: 'Errado' }));
    expect(screen.getByRole('link', { name: 'decisão definitiva do recurso' }).getAttribute('href')).toContain('SERPRO_2013_JUSTIFICATIVAS');
    expect(screen.getByText('Como ficaria CERTO')).toBeTruthy();
  });
});
