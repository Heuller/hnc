// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, within, cleanup } from '@testing-library/react';
import { ALL_COURSE_MODULES } from '../content/registry';
import { ModuloFilhoSchema } from '../domain/schemas/modulo.schema';
import { getRequiredSectionsForSubmodule, getUnitReadingKey, calculateSubmoduleStatus } from '../domain/learningEngine';
import { AulaEmBlocos } from '../components/teoria/AulaEmBlocos';
import { useProgressStore } from '../store/useProgressStore';
vi.mock('../components/common/ConteudoMarkdown', () => ({ ConteudoMarkdown: ({ content }: {content: string}) => <div>{content}</div> }));
const subs = ALL_COURSE_MODULES.flatMap(m => m.modulosFilhos);
const sub = subs.find(s => s.numero === '11.1')!;
beforeEach(() => { cleanup(); useProgressStore.getState().limparTodoProgresso(); });
describe('Reforma teórica e microcheckpoints por bloco', () => {
  it('mantém identidades, fontes e ligações válidas em todo capítulo reformado', () => {
    for (const s of subs.filter(s => s.unidadesAprendizagem?.length)) {
      expect(ModuloFilhoSchema.safeParse(s).success, s.id).toBe(true);
      const cps = s.checkpoints.map(c => c.id);
      const usados = s.unidadesAprendizagem!.flatMap(u => u.checkpointIds);
      expect(new Set(cps).size).toBe(cps.length);
      expect(new Set(usados).size).toBe(usados.length);
      for (const id of usados) expect(cps).toContain(id);
      expect(s.fontesTeoria?.length).toBeGreaterThan(0);
      expect(s.checkpoints.some(c => !c.fonte)).toBe(false);
    }
  });
  it('preserva a leitura antiga sem concluir automaticamente a edição ampliada', () => {
    const antigas = getRequiredSectionsForSubmodule({...sub, unidadesAprendizagem: undefined});
    const respostas = Object.fromEntries(sub.checkpoints.map(cp => [cp.id, cp.gabarito]));
    expect(calculateSubmoduleStatus(sub, antigas, respostas).todasSecoesLidas).toBe(false);
    const completas = getRequiredSectionsForSubmodule(sub);
    expect(calculateSubmoduleStatus(sub, completas, respostas).todasSecoesLidas).toBe(true);
  });
  it('não conclui a aula após responder somente um checkpoint', () => {
    const completas = getRequiredSectionsForSubmodule(sub);
    const estado = calculateSubmoduleStatus(sub, completas, {[sub.checkpoints[0].id]: sub.checkpoints[0].gabarito});
    expect(estado.todasSecoesLidas).toBe(true);
    expect(estado.status).toBe('em_andamento');
    expect(estado.checkpointsRespondidosCount).toBe(1);
  });
  it('insere checkpoints após o bloco pertinente e registra leitura na versão atual', () => {
    render(<AulaEmBlocos submodulo={sub} moduloId="m11" />);
    const unidade = sub.unidadesAprendizagem![0];
    const secao = document.getElementById(unidade.id)!;
    expect(within(secao).getByText('Pare e recupere')).toBeTruthy();
    fireEvent.click(within(secao).getByRole('button', {name: 'Marcar bloco como lido'}));
    expect(useProgressStore.getState().secoesVisualizadas[sub.id]).toContain(getUnitReadingKey(sub, unidade.id));
    expect(screen.getAllByRole('navigation', {name: 'Blocos desta aula'})).toHaveLength(1);
  });
  it('um atalho num checkpoint não responde os outros itens da aula', async () => {
    render(<AulaEmBlocos submodulo={sub} moduloId="m11" />);
    const buttons = screen.getAllByRole('button', {name: /Certo/i});
    buttons[0].focus();
    fireEvent.keyDown(buttons[0], {key: 'c'});
    await vi.waitFor(() => {
      expect(useProgressStore.getState().itemAttempts.filter(a => a.contexto === 'teoria')).toHaveLength(1);
    });
  });
});
