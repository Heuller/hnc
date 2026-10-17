import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { gerarMatrizViva } from '../../scripts/gerarMatrizVivaEdital';

describe('T9.2: Validação da Matriz Viva do Edital nº 1/2026 (Cargo 5)', () => {
  const resultado = gerarMatrizViva();

  it('assegura que o documento docs/matriz_edital_cargo5.md foi gerado e não está vazio', () => {
    const docPath = path.resolve('docs/matriz_edital_cargo5.md');
    expect(fs.existsSync(docPath)).toBe(true);
    const content = fs.readFileSync(docPath, 'utf-8');
    expect(content.length).toBeGreaterThan(1000);
    expect(content).toContain('Matriz Viva do Edital');
    expect(content).toContain('Sumário Executivo de Cobertura');
  });

  it('garante que ZERO tópico do edital está sem submódulo de conteúdo teórico', () => {
    expect(
      resultado.topicosSemSubmodulo.length,
      `Tópicos sem submódulo detectados: ${resultado.topicosSemSubmodulo.map((t) => t.codigoEdital).join(', ')}`
    ).toBe(0);
  });

  it('garante que ZERO tópico do edital está sem ao menos 1 item de simulado', () => {
    expect(
      resultado.topicosSemSimulado.length,
      `Tópicos sem simulado detectados: ${resultado.topicosSemSimulado.map((t) => t.codigoEdital).join(', ')}`
    ).toBe(0);
  });

  it('valida que a matriz cobre integralmente todos os tópicos programáticos do Edital nº 1/2026', () => {
    expect(resultado.totalTopicos).toBeGreaterThanOrEqual(60);
    expect(resultado.linhas.length).toBe(resultado.totalTopicos);
  });
});
