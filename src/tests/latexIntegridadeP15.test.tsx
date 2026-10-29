/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import fs from 'node:fs';
import path from 'node:path';
import { COURSE_REGISTRY } from '../content/registry';
import { ConteudoMarkdown } from '../components/common/ConteudoMarkdown';
import { submodulo41 } from '../content/modules/m4-recuperacao/sub-4-1';
import { ProgressoPage } from '../pages/ProgressoPage';

describe('P15 — Barras invertidas no LaTeX e integridade de fórmulas (N-01)', () => {
  const COMMANDS = [
    'cap', 'cup', 'Delta', 'times', 'cdot', 'neq', 'leq', 'geq',
    'sum', 'int', 'alpha', 'beta', 'frac', 'sqrt'
  ];

  it('1. Varredura nos arquivos fonte: nenhum comando LaTeX dentro de template strings sem barra dupla', () => {
    const modulesDir = path.resolve(process.cwd(), 'src/content/modules');
    const errors: string[] = [];

    function checkDir(dir: string) {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          checkDir(fullPath);
        } else if (entry.name.endsWith('.ts')) {
          const content = fs.readFileSync(fullPath, 'utf8');
          const lines = content.split(/\r?\n/);
          lines.forEach((line: string, idx: number) => {
            // Ignora comentários de linha inteira
            if (line.trim().startsWith('//') || line.trim().startsWith('*')) return;

            for (const cmd of COMMANDS) {
              // Procura barra única precedida por algo que não seja barra
              const regex = new RegExp(`(^|[^\\\\])\\\\(${cmd})\\b`, 'g');
              let match;
              while ((match = regex.exec(line)) !== null) {
                errors.push(`${path.relative(process.cwd(), fullPath)}:${idx + 1} -> Barra única encontrada: \\${match[2]}`);
              }
            }
          });
        }
      }
    }

    checkDir(modulesDir);
    expect(errors, `Erros de escape encontrados em arquivos fonte:\n${errors.join('\n')}`).toEqual([]);
  });

  it('2. Varredura nos módulos registrados: nenhum comando LaTeX sem barra invertida em blocos matemáticos $...$', () => {
    const errors: string[] = [];

    for (const macro of COURSE_REGISTRY) {
      for (const sub of macro.modulosFilhos) {
        const textsToCheck = [
          { name: 'teoriaDensaMarkdown', text: sub.teoriaDensaMarkdown },
          { name: 'teoriaDidaticaMarkdown', text: sub.teoriaDidaticaMarkdown },
        ];

        for (const { name, text } of textsToCheck) {
          if (!text) continue;
          const lines = text.split('\n');
          lines.forEach((line: string, idx: number) => {
            const mathMatches = line.match(/\$([^$]+)\$/g);
            if (!mathMatches) return;

            for (const mathBlock of mathMatches) {
              for (const cmd of COMMANDS) {
                // Em tempo de execução (string avaliada), um comando LaTeX válido começa com '\'
                // Se a barra foi perdida, teremos ' cap ' ou 'cap' isolado sem barra
                const bareRegex = new RegExp(`(^|[^\\\\])\\b(${cmd})\\b`);
                if (bareRegex.test(mathBlock)) {
                  errors.push(`Submódulo ${sub.numero} (${name}:${idx + 1}): comando cru '${cmd}' dentro de ${mathBlock}`);
                }
              }
            }
          });
        }
      }
    }

    expect(errors, `Comandos LaTeX sem barra invertida encontrados nos módulos:\n${errors.join('\n')}`).toEqual([]);
  });

  it('3. Teste de renderização: submódulo 4.1 exibe símbolos matemáticos ∩ e ∪ e não exibe "A cap B"', () => {
    const { container } = render(
      <ConteudoMarkdown content={submodulo41.teoriaDensaMarkdown} />
    );

    // Não deve conter a string crua deformada "A cap B" nem "A cup B"
    expect(screen.queryByText(/A cap B/i)).toBeNull();
    expect(screen.queryByText(/A cup B/i)).toBeNull();

    // KaTeX renderiza símbolos matemáticos no container
    const textContent = container.textContent || '';
    expect(textContent).toContain('∩');
    expect(textContent).toContain('∪');
  });

  it('4. ProgressoPage não exibe ($C - E$) cru e renderiza notação (C − E)', () => {
    render(<ProgressoPage />);

    // Não deve haver texto cru "$C - E$"
    expect(screen.queryByText(/\$C - E\$/)).toBeNull();

    // Deve exibir "(C − E)" tipográfico formatado
    expect(screen.getAllByText(/\(C [−-] E\)/i).length).toBeGreaterThanOrEqual(1);
  });
});
