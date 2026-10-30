// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { PainelEstudoReverso } from '../components/common/PainelEstudoReverso';
import { PILOTO_RACIOCINIO } from '../content/estudoReverso/pilotoRaciocinio';
import { ALL_SIMULADOS_REGISTRY } from '../content/simuladosRegistry';

afterEach(cleanup);
const analise = PILOTO_RACIOCINIO[0];
const questao = ALL_SIMULADOS_REGISTRY.flatMap(s => s.questoes).find(q => q.id === analise.itemId)!;

describe('Aplicação após a correção do simulado', () => {
  it.each(['C', 'E', 'BRANCO'] as const)('retém a explicação até julgar, trata %s e impede nova marcação', resposta => {
    const teoria = vi.fn();
    render(<PainelEstudoReverso questao={questao} resposta="C" autoexplicacao={false} analise={analise} onReverTeoria={teoria} />);
    expect(screen.queryByText(analise.transferencia.item)).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'Tentar outra situação' }));
    expect(screen.getByText(analise.transferencia.item)).toBeTruthy();
    expect(screen.queryByText(analise.transferencia.justificativa)).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: resposta === 'C' ? 'Certo' : resposta === 'E' ? 'Errado' : 'Não sei ainda' }));
    expect(screen.getByText(analise.transferencia.justificativa)).toBeTruthy();
    expect(screen.getByText(resposta === 'BRANCO' ? /Vamos construir a resposta/ : resposta === analise.transferencia.gabarito ? /Você aplicou a regra neste exercício/ : /Reveja a condição/)).toBeTruthy();
    for (const nome of ['Certo', 'Errado', 'Não sei ainda']) expect((screen.getByRole('button', { name: nome }) as HTMLButtonElement).disabled).toBe(true);
    fireEvent.click(screen.getByRole('button', { name: /Rever o assunto na teoria/ }));
    expect(teoria).toHaveBeenCalledWith(questao.submoduloId);
  });

  it('não reutiliza a resposta de aplicação ao mudar de questão', () => {
    const { rerender } = render(<PainelEstudoReverso questao={questao} resposta="C" autoexplicacao={false} analise={analise} />);
    fireEvent.click(screen.getByRole('button', { name: 'Tentar outra situação' }));
    fireEvent.click(screen.getByRole('button', { name: 'Certo' }));
    const outra = PILOTO_RACIOCINIO[1];
    const q = ALL_SIMULADOS_REGISTRY.flatMap(s => s.questoes).find(q => q.id === outra.itemId)!;
    rerender(<PainelEstudoReverso questao={q} resposta="E" autoexplicacao={false} analise={outra} />);
    expect(screen.getByRole('button', { name: 'Tentar outra situação' })).toBeTruthy();
    expect(screen.queryByText(analise.transferencia.justificativa)).toBeNull();
  });

  it('não apresenta exercício quando falta análise correspondente', () => {
    render(<PainelEstudoReverso questao={questao} resposta="C" autoexplicacao={false} analise={{ ...analise, itemId: 'outro' }} />);
    expect(screen.queryByRole('button', { name: 'Tentar outra situação' })).toBeNull();
    expect(screen.getByText('Por que o item está CERTO')).toBeTruthy();
  });
});
