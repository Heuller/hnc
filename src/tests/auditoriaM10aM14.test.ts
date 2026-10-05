import { describe, it, expect } from 'vitest';
import { moduloM10Legislativo } from '../content/modules/m10-legislativo';
import { moduloM11DireitoAdministrativo } from '../content/modules/m11-direito-administrativo';
import { moduloM12Ingles } from '../content/modules/m12-ingles';
import { moduloM13Portugues } from '../content/modules/m13-portugues';
import { moduloM14TecnologiaDados } from '../content/modules/m14-tecnologia-dados';
import { ModuloFilhoSchema } from '../domain/schemas/modulo.schema';

const modulosAlvo = [
  moduloM10Legislativo,
  moduloM11DireitoAdministrativo,
  moduloM12Ingles,
  moduloM13Portugues,
  moduloM14TecnologiaDados,
];

describe('Auditoria Completa da Construção Teórica dos Módulos M10 a M14', () => {
  it('todos os 5 módulos (M10 a M14) devem estar definidos, disponíveis e válidos', () => {
    expect(modulosAlvo).toHaveLength(5);
    modulosAlvo.forEach((m) => {
      expect(m.id).toBeDefined();
      expect(m.titulo.length).toBeGreaterThan(5);
      expect(m.subtitulo.length).toBeGreaterThan(10);
      expect(m.descricao.length).toBeGreaterThan(50);
      expect(m.status).toBe('disponivel');
      expect(m.simuladoDisponivel).toBe(true);
      expect(m.modulosFilhos.length).toBeGreaterThanOrEqual(4);
    });
  });

  it('o número de submódulos deve corresponder exatamente à grade do currículo (28 no total de M10 a M14)', () => {
    const totalSubmodulos = modulosAlvo.reduce((acc, m) => acc + m.modulosFilhos.length, 0);
    // M10: 4, M11: 12, M12: 4, M13: 4, M14: 4 => 28
    expect(totalSubmodulos).toBe(28);
    expect(moduloM10Legislativo.modulosFilhos).toHaveLength(4);
    expect(moduloM11DireitoAdministrativo.modulosFilhos).toHaveLength(12);
    expect(moduloM12Ingles.modulosFilhos).toHaveLength(4);
    expect(moduloM13Portugues.modulosFilhos).toHaveLength(4);
    expect(moduloM14TecnologiaDados.modulosFilhos).toHaveLength(4);
  });

  it('todos os 28 submódulos devem passar com 100% de conformidade no Zod ModuloFilhoSchema', () => {
    const todosSubmodulos = modulosAlvo.flatMap((m) => m.modulosFilhos);
    todosSubmodulos.forEach((sub) => {
      const parseResult = ModuloFilhoSchema.safeParse(sub);
      if (!parseResult.success) {
        console.error(`Erro de schema no submódulo ${sub.id} (${sub.titulo}):`, parseResult.error.format());
      }
      expect(parseResult.success).toBe(true);
    });
  });

  it('todos os 28 submódulos devem possuir teoria densa em markdown substantive (> 2.000 caracteres)', () => {
    const todosSubmodulos = modulosAlvo.flatMap((m) => m.modulosFilhos);
    todosSubmodulos.forEach((sub) => {
      expect(sub.teoriaDensaMarkdown.trim().length).toBeGreaterThan(2000);
      // Garantir que não há placeholders
      expect(sub.teoriaDensaMarkdown).not.toContain('Lorem ipsum');
      expect(sub.teoriaDensaMarkdown).not.toMatch(/\bTODO:/);
      expect(sub.teoriaDensaMarkdown).not.toContain('A preencher');
    });
  });

  it('todos os 28 submódulos devem conter autores-chave canônicos e alertas Cebraspe densos', () => {
    const todosSubmodulos = modulosAlvo.flatMap((m) => m.modulosFilhos);
    todosSubmodulos.forEach((sub) => {
      expect(sub.autoresChave.length).toBeGreaterThanOrEqual(2);
      sub.autoresChave.forEach((autor) => {
        expect(autor.trim().length).toBeGreaterThan(3);
      });

      expect(sub.alertasCebraspe.length).toBeGreaterThanOrEqual(2);
      sub.alertasCebraspe.forEach((alerta) => {
        expect(alerta.trim().length).toBeGreaterThan(20);
      });
    });
  });

  it('todos os 28 submódulos devem possuir quadro comparativo estruturado', () => {
    const todosSubmodulos = modulosAlvo.flatMap((m) => m.modulosFilhos);
    todosSubmodulos.forEach((sub) => {
      expect(sub.quadroComparativo).toBeDefined();
      expect(sub.quadroComparativo!.titulo.trim().length).toBeGreaterThan(5);
      expect(sub.quadroComparativo!.colunas.length).toBeGreaterThanOrEqual(2);
      expect(sub.quadroComparativo!.linhas.length).toBeGreaterThanOrEqual(2);
      sub.quadroComparativo!.linhas.forEach((linha) => {
        expect(linha.length).toBe(sub.quadroComparativo!.colunas.length);
      });
    });
  });

  it('todos os 28 submódulos devem possuir micro-checkpoints com justificativas aprofundadas', () => {
    const todosSubmodulos = modulosAlvo.flatMap((m) => m.modulosFilhos);
    todosSubmodulos.forEach((sub) => {
      expect(sub.checkpoints.length).toBeGreaterThanOrEqual(3);
      sub.checkpoints.forEach((cp) => {
        expect(cp.id).toBeDefined();
        expect(cp.pergunta.trim().length).toBeGreaterThan(5);
        expect(cp.item.trim().length).toBeGreaterThan(15);
        expect(['C', 'E']).toContain(cp.gabarito);
        expect(cp.justificativa.trim().length).toBeGreaterThan(20);
      });
    });
  });

  it('todos os 28 submódulos devem possuir os 3 componentes mnemônicos (timeline, autores, pegadinhas)', () => {
    const todosSubmodulos = modulosAlvo.flatMap((m) => m.modulosFilhos);
    todosSubmodulos.forEach((sub) => {
      expect(sub.mnemonicos.timeline.length).toBeGreaterThanOrEqual(2);
      expect(sub.mnemonicos.autores.length).toBeGreaterThanOrEqual(2);
      expect(sub.mnemonicos.pegadinhas.length).toBeGreaterThanOrEqual(2);
    });
  });
});
