import { describe, expect, it } from 'vitest';
import { ALL_SIMULADOS_REGISTRY } from '../content/simuladosRegistry';
import { PILOTO_RACIOCINIO } from '../content/estudoReverso/pilotoRaciocinio';
import { montarAcervoReverso, proximaRevisaoReversa, selecionarTreinoReverso } from '../domain/treinoReverso';
import type { ItemAttempt } from '../domain/itemAttempts';

const acervo = montarAcervoReverso(ALL_SIMULADOS_REGISTRY.flatMap(s => s.questoes), PILOTO_RACIOCINIO);
const tentativa = (extra: Partial<ItemAttempt> = {}): ItemAttempt => ({ id: 'audit-1', user_id: 'aluno', item_id: acervo[0].questao.id, submodulo_id: '2.1', modulo_id: 'M2', contexto: 'treino', resposta: 'C', correto: true, certeza: 'alta', tentativa_n: 1, criado_em: '2026-10-29T12:00:00Z', ...extra });

describe('Treino de raciocínio e revisão espaçada', () => {
  it('usa 12 itens elegíveis distintos, com gatilho literal, contraste e fontes localizáveis', () => {
    expect(acervo).toHaveLength(12);
    expect(new Set(acervo.map(i => i.questao.id)).size).toBe(12);
    for (const { questao, analise } of acervo) {
      expect(questao.item.includes(questao.gatilho!)).toBe(true);
      expect(questao.gabarito === 'C' ? questao.versao_errada : questao.versao_correta).toBeTruthy();
      expect(analise.passos).toHaveLength(3);
      expect(new URL(analise.fonte.url).protocol).toBe('https:');
      expect(analise.fonte.localizador.length).toBeGreaterThan(10);
      expect(questao.fonteOriginal.tipo).toBe('inedita');
    }
  });

  it('não oferece conteúdo em conferência ou com gabarito divergente da análise', () => {
    const q = acervo[0].questao;
    expect(montarAcervoReverso([{ ...q, fonteOriginal: { ...q.fonteOriginal, revisar: true } }], PILOTO_RACIOCINIO)).toEqual([]);
    expect(montarAcervoReverso([{ ...q, gabarito: q.gabarito === 'C' ? 'E' : 'C' }], PILOTO_RACIOCINIO)).toEqual([]);
  });

  it('erro, palpite ou confiança ausente mantêm revisão curta', () => {
    for (const extra of [{ correto: false }, { certeza: 'baixa' as const }, { certeza: undefined }]) {
      expect(proximaRevisaoReversa(tentativa(extra))).toBe('2026-10-30');
    }
    expect(proximaRevisaoReversa(tentativa())).toBe('2026-11-01');
  });

  it('repetição no mesmo dia não habilita o intervalo de recuperação tardia', () => {
    expect(proximaRevisaoReversa(tentativa(), [tentativa({ criado_em: '2026-10-29T09:00:00Z' })])).toBe('2026-11-01');
    expect(proximaRevisaoReversa(tentativa(), [tentativa({ criado_em: '2026-10-26T12:00:00Z' })])).toBe('2026-11-05');
  });

  it('prioriza vencidos, depois novos; ignora dados de outra pessoa e não duplica itens', () => {
    const vencida = tentativa({ item_id: acervo[7].questao.id, criado_em: '2026-10-20T12:00:00Z', correto: false });
    const futura = tentativa({ item_id: acervo[0].questao.id });
    const outraPessoa = tentativa({ user_id: 'outro', item_id: acervo[1].questao.id, correto: false, criado_em: '2026-10-20T12:00:00Z' });
    const sessao = selecionarTreinoReverso(acervo, [vencida, futura, outraPessoa], 'aluno', '2026-10-29');
    expect(sessao[0].questao.id).toBe(acervo[7].questao.id);
    expect(sessao.map(i => i.questao.id)).not.toContain(acervo[0].questao.id);
    expect(new Set(sessao.map(i => i.questao.id)).size).toBe(6);
    expect(selecionarTreinoReverso(acervo, [], 'aluno', '2026-10-29', 0)).toEqual([]);
  });

  it('distingue cálculo, competência, aplicação de princípio e confusão de entidades', () => {
    const habilidades = new Set(acervo.map(i => i.analise.habilidade));
    expect(habilidades.size).toBe(12);
    expect(acervo.find(i => i.questao.id === 'm4-q-57')!.questao.justificativa).toContain('12 sobre 30 calcula revocação');
    expect(acervo.find(i => i.questao.id === 'm4-q-56')!.questao.item).toContain('não estabelece uma proporcionalidade inversa obrigatória');
    expect(acervo.find(i => i.questao.id === 'm9-q-5')!.questao.item).not.toMatch(/ouro maciço|extorsivas/);
  });
});
