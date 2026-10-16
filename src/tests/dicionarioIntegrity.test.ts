import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

interface VerbeteDicionario {
  id: string;
  termo: string;
  variantes?: string[];
  definicao: string;
  remissivas?: string[];
  fonte: {
    obra: string;
    autores: string;
    editora: string;
    ano: number;
    pagina: number;
  };
}

describe('U3.9 - Validação Automática da Extração do Dicionário', () => {
  const jsonPath = path.resolve(__dirname, '../content/glossario/dicionario.json');
  let verbetes: VerbeteDicionario[] = [];

  it('o arquivo dicionario.json deve existir e conter mais de 10.000 verbetes', () => {
    expect(fs.existsSync(jsonPath)).toBe(true);
    const content = fs.readFileSync(jsonPath, 'utf-8');
    verbetes = JSON.parse(content);
    expect(verbetes.length).toBeGreaterThan(10000);
  });

  it('todo verbete deve possuir termo e definição não vazios', () => {
    for (const v of verbetes) {
      expect(v.id).toBeDefined();
      expect(v.id.trim().length).toBeGreaterThan(0);
      expect(v.termo).toBeDefined();
      expect(v.termo.trim().length).toBeGreaterThan(0);
      expect(v.definicao).toBeDefined();
      expect(v.definicao.trim().length).toBeGreaterThan(0);
    }
  });

  it('todos os IDs de verbetes devem ser únicos', () => {
    const ids = new Set<string>();
    const duplicados: string[] = [];

    for (const v of verbetes) {
      if (ids.has(v.id)) {
        duplicados.push(v.id);
      }
      ids.add(v.id);
    }

    expect(duplicados).toHaveLength(0);
  });

  it('todos os verbetes devem registrar metadados da fonte e página válida (1 a 382)', () => {
    for (const v of verbetes) {
      expect(v.fonte).toBeDefined();
      expect(v.fonte.obra).toBe('Dicionário de Biblioteconomia e Arquivologia');
      expect(v.fonte.ano).toBe(2008);
      expect(v.fonte.pagina).toBeGreaterThanOrEqual(1);
      expect(v.fonte.pagina).toBeLessThanOrEqual(382);
    }
  });

  it('a paginação deve apresentar progressão coerente ao longo da extração', () => {
    const primeiro = verbetes[0];
    const meio = verbetes[Math.floor(verbetes.length / 2)];
    const ultimo = verbetes[verbetes.length - 1];

    expect(primeiro.fonte.pagina).toBeLessThan(10);
    expect(meio.fonte.pagina).toBeGreaterThan(100);
    expect(meio.fonte.pagina).toBeLessThan(300);
    expect(ultimo.fonte.pagina).toBeGreaterThan(350);
  });
});
