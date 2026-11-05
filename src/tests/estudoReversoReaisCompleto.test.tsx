// @vitest-environment jsdom
import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { QUESTOES_REAIS } from '../content/questoesReais';
import base from '../content/questoesReaisTriadas.json';
import anotacoes from '../content/estudoReversoReais/anotacoes.json';
import { enriquecerEstudoReversoReal } from '../content/estudoReversoReais/enriquecer';
import { PainelEstudoReverso } from '../components/common/PainelEstudoReverso';
import { destacarGatilho } from '../domain/estudoReverso';
import { assinaturaQuestaoReal, lerSessaoReal } from '../domain/sessaoQuestoesReais';
import relatorio from '../../docs/simulados-reais/CONFERENCIA-OFICIAL-2026-11-05.json';
import { comentarioGenerico, contrasteArtificial } from '../domain/qualidadeEditorial';

afterEach(cleanup);

describe('estudo reverso do banco integral de questões reais', () => {
  it('não deixa itens, lotes ou anotações órfãos', () => {
    expect(QUESTOES_REAIS).toHaveLength(relatorio.resumo.bancoDepois - relatorio.resumo.pendentes);
    const inativos = relatorio.itens.filter(r => ['anulada', 'pendente'].includes(r.resultado)).map(r => r.id);
    expect(new Set(Object.keys(anotacoes))).toEqual(new Set([...QUESTOES_REAIS.map(q => q.id), ...inativos]));
    for (const q of QUESTOES_REAIS) {
      expect(q.fundamentacaoDidatica, q.id).toBeTruthy();
      expect(q.armadilhaBanca, q.id).toBeTruthy();
      expect(comentarioGenerico(q.justificativa), q.id).toBe(false);
      const contraste = q.gabarito === 'C' ? q.versao_errada : q.versao_correta;
      expect(contraste, q.id).toBeTruthy();
      expect(contrasteArtificial(contraste), q.id).toBe(false);
      expect(contraste?.trim(), q.id).not.toBe(q.item.trim());
      const d = q.fundamentacaoDidatica!;
      expect(d.regra, q.id).not.toBe(q.justificativa);
      expect(d.exemplo, q.id).not.toBe(d.regra);
      expect(d.referencia.titulo, q.id).toBeTruthy();
      expect(d.referencia.localizador, q.id).toBeTruthy();
      if (d.referencia.url) expect(new URL(d.referencia.url).protocol).toBe('https:');
    }
  });
  it('destaca texto que existe literalmente em todas as questões, sem ocultar a assertiva', () => {
    for (const q of QUESTOES_REAIS) {
      const trechos = destacarGatilho(q.item, q.gatilho);
      expect(trechos.some(t => t.decisivo), q.id).toBe(true);
      expect(trechos.map(t => t.texto).join(''), q.id).toBe(q.item);
    }
  });
  it('preserva respostas quando só muda a proveniência e invalida respostas de redações corrigidas', () => {
    const inativos = new Set(relatorio.itens.filter(r => ['anulada', 'pendente'].includes(r.resultado)).map(r => r.id));
    for (const original of base) {
      const ampliada = QUESTOES_REAIS.find(q => q.id === original.id);
      if (inativos.has(original.id)) { expect(ampliada).toBeUndefined(); continue; }
      expect(ampliada, original.id).toBeTruthy();
      const assinatura = JSON.stringify([original.item, original.contexto, original.gabarito]);
      const anterior = JSON.stringify({ modulo: original.modulo, questaoId: original.id,
        respostas: { [original.id]: { resposta: original.gabarito, assinatura } } });
      const resposta = lerSessaoReal(anterior, [ampliada!]).respostas[original.id]?.resposta;
      expect(resposta, original.id).toBe(assinaturaQuestaoReal(ampliada!) === assinatura ? original.gabarito : undefined);
    }
    expect(QUESTOES_REAIS.filter(q => q.estadoConferencia === 'caderno')).toHaveLength(0);
    expect(QUESTOES_REAIS.filter(q => !q.estadoConferencia)).toHaveLength(relatorio.resumo.conferidasNaOrigem);
    expect(QUESTOES_REAIS.filter(q => q.estadoConferencia === 'copia-oficial')).toHaveLength(relatorio.resumo.documentosConferidosEmEspelho);
  });
  it('recusa questão nova sem revisão explícita, sem preencher pelo módulo', () => {
    expect(() => enriquecerEstudoReversoReal({
      id: 'sem-revisao', item: 'Qualquer item novo.', gabarito: 'C', justificativa: 'Não revisada.',
    })).toThrow('sem revisão editorial');
  });
  it('mostra o formato completo do anexo após responder um item errado', () => {
    const q = QUESTOES_REAIS.find(q => q.id === 'real-stj-2024-biblio-64')!;
    render(<PainelEstudoReverso questao={q} resposta="E" onReverTeoria={() => {}} />);
    expect(screen.getByRole('heading', { name: 'Por que você acertou' })).toBeTruthy();
    expect(screen.getByText('Trecho que decide o julgamento')).toBeTruthy();
    const painel = screen.getByRole('group', { name: 'Estudo reverso do item' });
    expect(painel.querySelector('mark')?.textContent).toBe('necessariamente');
    expect(screen.getByText('Por que o item está ERRADO')).toBeTruthy();
    expect(screen.getByText(q.fundamentacaoDidatica!.regra)).toBeTruthy();
    expect(screen.getByText(q.justificativa)).toBeTruthy();
    expect(screen.getByText(q.fundamentacaoDidatica!.exemplo)).toBeTruthy();
    expect(screen.getByRole('link', { name: q.fundamentacaoDidatica!.referencia.titulo })).toBeTruthy();
    expect(screen.getByText('Como ficaria CERTO')).toBeTruthy();
    expect(screen.getByText('Técnica da banca')).toBeTruthy();
    fireEvent.click(screen.getByText('Como conferir se aprendi'));
    expect(within(painel).getAllByRole('listitem')).toHaveLength(4);
    expect(screen.getByRole('button', { name: /Rever o assunto/ })).toBeTruthy();
  });
  it('oferece comparação falsa identificada como didática para item certo', () => {
    const q = QUESTOES_REAIS.find(q => q.id === 'real-stj-2024-biblio-85')!;
    render(<PainelEstudoReverso questao={q} resposta="C" />);
    expect(screen.getByText('Como a banca tornaria ERRADO')).toBeTruthy();
    expect(screen.getByText(/Comparação didática elaborada para o estudo/)).toBeTruthy();
    expect(screen.getByText(`“${q.versao_errada}”`)).toBeTruthy();
  });
  it('mantém autoexplicação antes da fundamentação para erro ou branco', () => {
    const q = QUESTOES_REAIS[0];
    render(<PainelEstudoReverso questao={q} resposta="BRANCO" />);
    expect(screen.queryByText(q.fundamentacaoDidatica!.exemplo)).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'Pensei — mostrar fundamentação' }));
    expect(screen.getByText(q.fundamentacaoDidatica!.exemplo)).toBeTruthy();
    expect(screen.getByText('Como identificar o possível erro')).toBeTruthy();
  });
});
