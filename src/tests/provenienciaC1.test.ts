import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import {
  obterInfoProveniencia,
  obterTextoRodapeProveniencia,
  REGEX_TERMOS_PROIBIDOS_INEDITA,
} from '../domain/proveniencia';

describe('C1 — Proveniência Única e Verdadeira (Auditoria e Sanitização de Inéditas)', () => {
  it('proíbe expressamente menções a gabarito oficial, banca ou concurso em itens marcados como inédita', () => {
    const dir = 'src/content/questions';
    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.ts'));

    let totalIneditas = 0;
    const violacoes: Array<{ file: string; id: string; trecho: string }> = [];

    for (const file of files) {
      const filePath = path.join(dir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const sf = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true);

      function visit(node: ts.Node) {
        if (ts.isObjectLiteralExpression(node)) {
          let id = '';
          let tipo = '';
          let justificativa = '';
          let armadilha = '';

          for (const prop of node.properties) {
            if (ts.isPropertyAssignment(prop)) {
              const name = prop.name.getText(sf).replace(/['"]/g, '');
              if (name === 'id') id = prop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
              if (name === 'justificativa') justificativa = prop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
              if (name === 'armadilhaBanca') armadilha = prop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
              if (name === 'fonteOriginal' && ts.isObjectLiteralExpression(prop.initializer)) {
                for (const sub of prop.initializer.properties) {
                  if (ts.isPropertyAssignment(sub)) {
                    const subName = sub.name.getText(sf).replace(/['"]/g, '');
                    if (subName === 'tipo') {
                      tipo = sub.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
                    }
                  }
                }
              }
            }
          }

          if (id && tipo === 'inedita') {
            totalIneditas++;
            const texto = `${justificativa} ${armadilha}`;
            if (REGEX_TERMOS_PROIBIDOS_INEDITA.test(texto)) {
              violacoes.push({ file, id, trecho: texto.slice(0, 100) });
            }
          }
        }
        ts.forEachChild(node, visit);
      }

      visit(sf);
    }

    expect(totalIneditas).toBeGreaterThan(1000);
    expect(violacoes).toEqual([]);
  });

  it('obterTextoRodapeProveniencia gera texto adequado e não expõe declaracaoLegada', () => {
    const rodapeInedita = obterTextoRodapeProveniencia({
      tipo: 'inedita',
      descricao: 'HNC — Inédita',
      declaracaoLegada: 'CEBRASPE / PC-DF / 2025',
      verificado: false,
    });
    expect(rodapeInedita).toContain('Item inédito autoral');
    expect(rodapeInedita).not.toContain('PC-DF');
    expect(rodapeInedita).not.toContain('2025');

    const rodapeReal = obterTextoRodapeProveniencia({
      tipo: 'real-confirmada',
      descricao: 'Cebraspe / Câmara / 2014',
      banca: 'Cebraspe',
      orgao: 'Câmara dos Deputados',
      ano: 2014,
      verificado: true,
      provaId: 'CD-2014',
    });
    expect(rodapeReal).toContain('Câmara dos Deputados');
    expect(rodapeReal).toContain('2014');

    const info = obterInfoProveniencia({
      tipo: 'inedita',
      descricao: 'HNC — Inédita',
      declaracaoLegada: 'Câmara dos Deputados / 2014 (Cespe/Cebraspe)',
      verificado: false,
    });
    expect(info.rotulo).toBe('Inédita, sem prova de origem');
    expect(info.isInedita).toBe(true);
    expect(info.textoRodape).toContain('sem concurso prévio');
  });

  it('CORRECOES_PENDENTES.md foi gerado e documenta os 6 itens divergentes', () => {
    expect(fs.existsSync('CORRECOES_PENDENTES.md')).toBe(true);
    const content = fs.readFileSync('CORRECOES_PENDENTES.md', 'utf8');
    expect(content).toContain('m12-q-39');
    expect(content).toContain('m12-q-47');
    expect(content).toContain('m12-q-52');
    expect(content).toContain('m12-q-61');
    expect(content).toContain('m12-q-66');
    expect(content).toContain('mega-q-16');
  });
});
