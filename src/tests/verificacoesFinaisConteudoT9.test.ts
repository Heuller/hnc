import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { ALL_COURSE_MODULES } from '../content/registry';
import { TEMAS_OFICIAIS_DISCURSIVA } from '../domain/discursiva/temasOficiais';

describe('T9.5: Verificações Finais de Conteúdo (Plano v3)', () => {
  it('(a) Assegura ausência total de marcadores [VERIFICAR] em src/content', () => {
    function walkDir(dir: string, callback: (filePath: string) => void) {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
          walkDir(fullPath, callback);
        } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.md')) {
          callback(fullPath);
        }
      }
    }

    const contentDir = path.resolve(__dirname, '../content');
    const arquivosComVerificar: string[] = [];

    walkDir(contentDir, (filePath) => {
      const content = fs.readFileSync(filePath, 'utf-8');
      if (content.includes('[VERIFICAR]')) {
        arquivosComVerificar.push(filePath);
      }
    });

    expect(arquivosComVerificar).toHaveLength(0);
  });

  it('(b) Assegura vigência e anos normativos explícitos para as normas ABNT canônicas', () => {
    const sub81 = ALL_COURSE_MODULES.flatMap((m) => m.modulosFilhos).find((s) => s.id === 'sub-8-1');
    const sub82 = ALL_COURSE_MODULES.flatMap((m) => m.modulosFilhos).find((s) => s.id === 'sub-8-2');
    const sub83 = ALL_COURSE_MODULES.flatMap((m) => m.modulosFilhos).find((s) => s.id === 'sub-8-3');
    const sub84 = ALL_COURSE_MODULES.flatMap((m) => m.modulosFilhos).find((s) => s.id === 'sub-8-4');
    const sub85 = ALL_COURSE_MODULES.flatMap((m) => m.modulosFilhos).find((s) => s.id === 'sub-8-5');

    // NBR 6023: ano 2018 (ou 2025) explícito em sub-8-1
    expect(sub81?.teoriaDensaMarkdown).toMatch(/6023:(2018|2020|2025)/);

    // NBR 10520: ano 2023 vigente explícito em sub-8-2
    expect(sub82?.teoriaDensaMarkdown).toContain('10520:2023');

    // NBR 14724: ano 2011 explícito em sub-8-3
    expect(sub83?.teoriaDensaMarkdown).toMatch(/14724:(2011|2024)/);

    // NBR 6028: ano 2021 explícito em sub-8-4
    expect(sub84?.teoriaDensaMarkdown).toContain('6028:2021');

    // NBR 6027: ano 2012 explícito em sub-8-5
    expect(sub85?.teoriaDensaMarkdown).toContain('6027:2012');

    // NBR 6034: ano 2004 explícito em sub-8-5
    expect(sub85?.teoriaDensaMarkdown).toContain('6034:2004');
  });

  it('(c) Assegura citações canônicas devidamente atribuídas a autores fundamentados', () => {
    // Todos os 75 submódulos do acervo possuem autores canônicos identificados
    for (const macro of ALL_COURSE_MODULES) {
      for (const sub of macro.modulosFilhos) {
        expect(sub.autoresChave).toBeDefined();
        expect(sub.autoresChave.length).toBeGreaterThan(0);
      }
    }
  });

  it('(d) Assegura fórmulas oficiais da discursiva conforme Edital nº 1/2026 (itens 9.8.4 e 9.8.5)', () => {
    // 9.8.4: NQ = NC - 3 * NE / TL (Questões de até 20 linhas)
    // 9.8.5: NPT = NC - 6 * NE / TL (Peça Técnica de até 50 linhas)
    const editalPath = path.resolve(__dirname, '../pages/EditalPage.tsx');
    const discursivaPath = path.resolve(__dirname, '../pages/DiscursivaPage.tsx');

    if (fs.existsSync(editalPath)) {
      const editalContent = fs.readFileSync(editalPath, 'utf-8');
      expect(editalContent).toContain('3×NE/TL');
      expect(editalContent).toContain('6×NE/TL');
      // Não pode haver multiplicador antigo incorreto de 2x nas questões
      expect(editalContent).not.toMatch(/NQ\s*=\s*NC\s*−\s*2\s*×\s*NE/i);
    }

    if (fs.existsSync(discursivaPath)) {
      const discContent = fs.readFileSync(discursivaPath, 'utf-8');
      expect(discContent).toMatch(/3\s*×\s*\(?NE/);
      expect(discContent).toMatch(/6\s*×\s*\(?NE/);
    }

    // Valida temas oficiais da discursiva
    expect(TEMAS_OFICIAIS_DISCURSIVA.length).toBeGreaterThanOrEqual(5);
    for (const tema of TEMAS_OFICIAIS_DISCURSIVA) {
      expect(tema.limiteLinhas).toBeGreaterThan(0);
      expect(tema.criteriosPontuacao.length).toBeGreaterThan(0);
      const somaPontos = tema.criteriosPontuacao.reduce((acc, c) => acc + c.pontuacaoMaxima, 0);
      // Questões valem 15 pontos ou peças valem 30 pontos
      expect([15, 30]).toContain(Math.round(somaPontos));
    }
  });
});
