import { describe, it, expect } from 'vitest';
import { BASE_TERMOS_DICIONARIO } from '../domain/dicionario/baseTermos';
import fs from 'fs';
import path from 'path';

describe('Rodada 5B - Fase A4 / A5: Defeitos dos Prints e Acabamento UX/UI', () => {
  it('D11: Todas as menções à obra canônica de Suzanne Briet (1951) devem referenciar "Qu\'est-ce que la documentation?" e nenhuma "Qu\'est-ce que le document?"', () => {
    const brietItems = BASE_TERMOS_DICIONARIO.filter(
      (t) =>
        t.termo.toLowerCase().includes('briet') ||
        t.conceitoCanonico?.toLowerCase().includes('briet') ||
        t.fonteReferencia?.toLowerCase().includes('briet')
    );

    expect(brietItems.length).toBeGreaterThan(0);

    brietItems.forEach((item) => {
      const fullText = JSON.stringify(item);
      expect(fullText).not.toContain("Qu'est-ce que le document?");
      expect(fullText).toContain("Qu'est-ce que la documentation?");
    });
  });

  it('D11: Termos e áreas do Dicionário Técnico Cebraspe devem possuir diacríticos e acentuação formal correta', () => {
    const unaccentedPatterns = [
      /\bCiencia da Informacao\b/,
      /\bClassificacao Decimal\b/,
      /\bLegislacao e Etica\b/,
      /\bExercicio da Profissao\b/,
      /\bProfissao de Bibliotecario\b/,
      /\bDocumentacao -\b/,
    ];

    BASE_TERMOS_DICIONARIO.forEach((item) => {
      unaccentedPatterns.forEach((pattern) => {
        expect(pattern.test(item.termo)).toBe(false);
        expect(pattern.test(item.area || '')).toBe(false);
      });
    });
  });

  it('D8: MnemonicosDrawerMobile deve ser exclusivo para mobile (md:hidden) para não sobrepor conteúdo em desktop/tablets', () => {
    const drawerFilePath = path.join(__dirname, '../components/content-blocks/MnemonicosDrawerMobile.tsx');
    const content = fs.readFileSync(drawerFilePath, 'utf-8');

    expect(content).toContain('md:hidden');
    expect(content).not.toContain('2xl:hidden fixed');
  });

  it('D7: Rodapé de AppShell deve conter whitespace-nowrap nos atalhos para evitar quebra em telas menores', () => {
    const appShellPath = path.join(__dirname, '../components/layout/AppShell.tsx');
    const content = fs.readFileSync(appShellPath, 'utf-8');

    expect(content).toContain('whitespace-nowrap');
    expect(content).toContain('Busca (<Kbd>Ctrl</Kbd>+<Kbd>K</Kbd>)');
  });

  it('D1: UserMenuDropdown e Header devem conter avatar/inicial compacta para evitar quebra em 1024px', () => {
    const userMenuPath = path.join(__dirname, '../components/layout/UserMenuDropdown.tsx');
    const content = fs.readFileSync(userMenuPath, 'utf-8');

    expect(content).toContain('userInitial');
    expect(content).toContain('max-w-[90px]');
  });

  it('U1 / D6: TeoriaPage deve conter a barra de etapas estruturada (1. Ler, 2. Praticar, 3. Revisar, 4. Verificar)', () => {
    const teoriaPath = path.join(__dirname, '../pages/TeoriaPage.tsx');
    const content = fs.readFileSync(teoriaPath, 'utf-8');

    expect(content).toContain('1. Ler');
    expect(content).toContain('2. Praticar');
    expect(content).toContain('3. Revisar');
    expect(content).toContain('4. Verificar');
    expect(content).toContain('Aa Leitura');
  });

  it('D14: ActiveRetrievalExercises deve aplicar min-h consistente de 68px nas colunas de associação', () => {
    const activeRetrievalPath = path.join(__dirname, '../components/content-blocks/ActiveRetrievalExercises.tsx');
    const content = fs.readFileSync(activeRetrievalPath, 'utf-8');

    expect(content).toContain('min-h-[68px]');
  });
});
