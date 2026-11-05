import { describe, expect, it } from 'vitest';
import { assinaturaQuestaoReal, lerSessaoReal } from '../domain/sessaoQuestoesReais';
import { QUESTOES_REAIS } from '../content/questoesReais';

describe('restauração de respostas das questões reais', () => {
  it('descarta dados inválidos sem impedir a abertura', () => {
    expect(lerSessaoReal('{', QUESTOES_REAIS).respostas).toEqual({});
    expect(lerSessaoReal('null', QUESTOES_REAIS).respostas).toEqual({});
  });
  it('invalida resposta quando a redação ou gabarito muda', () => {
    const q = QUESTOES_REAIS[0];
    const raw = JSON.stringify({ modulo: q.modulo, questaoId: q.id, respostas: { [q.id]: { resposta: 'C', assinatura: assinaturaQuestaoReal(q) } } });
    expect(lerSessaoReal(raw, [q]).respostas[q.id].resposta).toBe('C');
    const alterada = { ...q, item: q.item + ' Condição adicional.' };
    expect(lerSessaoReal(raw, [alterada]).respostas).toEqual({});
    expect(lerSessaoReal(raw, [{ ...q, gabarito: q.gabarito === 'C' ? 'E' : 'C' }]).respostas).toEqual({});
  });
});
