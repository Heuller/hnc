import { describe, it, expect } from 'vitest';
import { PALAVRAS_ABSOLUTAS, contemPalavraAbsoluta, extrairPalavrasAbsolutas } from '../config/palavrasAbsolutas';
import { simuladoPreservacao100Q } from '../content/questions/m7-preservacao-100q';
import { simuladoOficialCamara180Q } from '../content/questions/simulado-oficial-camara-180q';

import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

interface ItemAuditoria {
  id: string;
  item: string;
  gabarito: 'C' | 'E';
  tipo: string;
}

function carregarTodasQuestoesUnicas(): ItemAuditoria[] {
  const dir = 'src/content/questions';
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.ts'));
  const questionsMap = new Map<string, ItemAuditoria>();

  for (const file of files) {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const sf = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true);

    function visit(node: ts.Node) {
      if (ts.isObjectLiteralExpression(node)) {
        let id = '';
        let item = '';
        let gabarito: 'C' | 'E' | undefined;
        let tipo = 'inedita';

        for (const prop of node.properties) {
          if (ts.isPropertyAssignment(prop)) {
            const name = prop.name.getText(sf).replace(/['"]/g, '');
            if (name === 'id') id = prop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
            if (name === 'item') item = prop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
            if (name === 'gabarito') {
              const g = prop.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
              if (g === 'C' || g === 'E') gabarito = g;
            }
            if (name === 'fonteOriginal' && ts.isObjectLiteralExpression(prop.initializer)) {
              for (const sub of prop.initializer.properties) {
                if (ts.isPropertyAssignment(sub)) {
                  const subName = sub.name.getText(sf).replace(/['"]/g, '');
                  if (subName === 'tipo') tipo = sub.initializer.getText(sf).replace(/^['"`]|['"`]$/g, '');
                }
              }
            }
          }
        }

        if (id && item && gabarito && !questionsMap.has(id)) {
          questionsMap.set(id, { id, item, gabarito, tipo });
        }
      }
      ts.forEachChild(node, visit);
    }
    visit(sf);
  }

  return Array.from(questionsMap.values());
}

describe('C3 — Qualidade de Itens Inéditos e Eliminação de Distratores Caricatos', () => {
  const todasQuestoes = carregarTodasQuestoesUnicas();
  const ineditas = todasQuestoes.filter((q) => q.tipo === 'inedita');

  describe('1. Controle de Palavras Absolutas nas Questões Inéditas', () => {
    it('a lista de PALAVRAS_ABSOLUTAS está definida e cobre termos categóricos canônicos', () => {
      expect(PALAVRAS_ABSOLUTAS).toBeDefined();
      expect(PALAVRAS_ABSOLUTAS.length).toBeGreaterThanOrEqual(10);
      expect(PALAVRAS_ABSOLUTAS).toContain('apenas');
      expect(PALAVRAS_ABSOLUTAS).toContain('somente');
    });

    it('o banco de questões inéditas deve conter no máximo 12% de itens com termos absolutos', () => {
      expect(ineditas.length).toBeGreaterThan(1000);

      const comAbsoluto = ineditas.filter((q) => contemPalavraAbsoluta(q.item));
      const pctAbsolutos = (comAbsoluto.length / ineditas.length) * 100;

      // Meta estipulada no C3: <= 12%
      expect(pctAbsolutos).toBeLessThanOrEqual(12);
    });

    it('dos itens inéditos contendo palavras absolutas, no mínimo 40% devem possuir gabarito Certo', () => {
      const comAbsoluto = ineditas.filter((q) => contemPalavraAbsoluta(q.item));
      expect(comAbsoluto.length).toBeGreaterThan(0);

      const certos = comAbsoluto.filter((q) => q.gabarito === 'C');
      const pctCertos = (certos.length / comAbsoluto.length) * 100;

      // Meta estipulada no C3: >= 40% (evita que candidato chute E por reflexo)
      expect(pctCertos).toBeGreaterThanOrEqual(40);
    });

    it('as funções utilitárias contemPalavraAbsoluta e extrairPalavrasAbsolutas funcionam com precisão', () => {
      expect(contemPalavraAbsoluta('Esta assertiva é somente para testes.')).toBe(true);
      expect(contemPalavraAbsoluta('Esta assertiva é irrestrita em sua abrangência.')).toBe(true);
      expect(contemPalavraAbsoluta('O modelo OAIS utiliza pacotes de arquivamento padrão.')).toBe(false);

      const extraidas = extrairPalavrasAbsolutas('Apenas os documentos com vigência irrestrita são preservados.');
      expect(extraidas).toContain('apenas');
      expect(extraidas).toContain('irrestrita');
    });
  });

  describe('2. Reescrita das 6 Inéditas do M7 (m7-q-69, 73, 76, 84, 90, 93)', () => {
    const idsM7 = ['m7-q-69', 'm7-q-73', 'm7-q-76', 'm7-q-84', 'm7-q-90', 'm7-q-93'];
    const forbiddenWordsRegex = /\b(exclusivamente|dispensa|dispensando|dispensável|vedado|vedada|vedando|vedando-se|sem qualquer|terminantemente)\b/i;

    it('todas as 6 questões existem no módulo M7 e possuem gabarito Errado (E)', () => {
      for (const id of idsM7) {
        const q = simuladoPreservacao100Q.find((item) => item.id === id);
        expect(q, `Questão ${id} deve existir no M7`).toBeDefined();
        expect(q?.gabarito, `Questão ${id} deve manter gabarito E`).toBe('E');
      }
    });

    it('cada um dos 6 itens possui extensão Cebraspe padrão entre 25 e 60 palavras', () => {
      for (const id of idsM7) {
        const q = simuladoPreservacao100Q.find((item) => item.id === id)!;
        const wordCount = q.item.trim().split(/\s+/).length;
        expect(
          wordCount,
          `Item ${id} possui ${wordCount} palavras; esperado entre 25 e 60`
        ).toBeGreaterThanOrEqual(25);
        expect(
          wordCount,
          `Item ${id} possui ${wordCount} palavras; esperado entre 25 e 60`
        ).toBeLessThanOrEqual(60);
      }
    });

    it('nenhum dos 6 itens reescritos contém termos caricatos proibidos', () => {
      for (const id of idsM7) {
        const q = simuladoPreservacao100Q.find((item) => item.id === id)!;
        expect(
          forbiddenWordsRegex.test(q.item),
          `Item ${id} contém termo caricato proibido: "${q.item}"`
        ).toBe(false);

        // Verifica também ausência de tags caricatas em armadilhaBanca
        expect(q.armadilhaBanca).not.toContain('CATEGORICO_ABSOLUTO');
      }
    });

    it('os 6 itens operam por substituição verossímil de conceitos canônicos vizinhos', () => {
      const q69 = simuladoPreservacao100Q.find((i) => i.id === 'm7-q-69')!;
      expect(q69.item).toContain('AIP');
      expect(q69.item).toContain('DIP');
      expect(q69.justificativa).toContain('invertidos');

      const q73 = simuladoPreservacao100Q.find((i) => i.id === 'm7-q-73')!;
      expect(q73.item).toContain('Archivematica');
      expect(q73.item).toContain('AtoM');

      const q76 = simuladoPreservacao100Q.find((i) => i.id === 'm7-q-76')!;
      expect(q76.item).toContain('SHA-256');
      expect(q76.justificativa).toContain('fixidez');

      const q84 = simuladoPreservacao100Q.find((i) => i.id === 'm7-q-84')!;
      expect(q84.item).toContain('XML');
      expect(q84.justificativa).toContain('estruturação lógica');

      const q90 = simuladoPreservacao100Q.find((i) => i.id === 'm7-q-90')!;
      expect(q90.item).toContain('Objeto');
      expect(q90.item).toContain('Evento');

      const q93 = simuladoPreservacao100Q.find((i) => i.id === 'm7-q-93')!;
      expect(q93.item).toContain('Agente');
      expect(q93.justificativa).toContain('Ambiente');
    });
  });

  describe('3. Simetria Realista Cebraspe (46%–56%) no Simulado Oficial 180Q', () => {
    it('o Simulado Oficial não impõe simetria artificial de 50/50 e respeita a faixa 46%–56%', () => {
      const certos = simuladoOficialCamara180Q.filter((q) => q.gabarito === 'C').length;
      const total = simuladoOficialCamara180Q.length;
      const pct = (certos / total) * 100;

      expect(pct).toBeGreaterThanOrEqual(46);
      expect(pct).toBeLessThanOrEqual(56);
    });
  });
});
