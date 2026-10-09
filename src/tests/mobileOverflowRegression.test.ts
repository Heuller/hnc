// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Regressão Mobile: Prevenção de Overflow Horizontal e Layout Responsivo (Marco R1)', () => {
  const rootDir = path.resolve(__dirname, '../../');

  it('deve possuir viewport-fit=cover na meta tag viewport de index.html', () => {
    const htmlPath = path.join(rootDir, 'index.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
    expect(htmlContent).toContain('name="viewport"');
    expect(htmlContent).toContain('viewport-fit=cover');
  });

  it('deve conter regras defensivas contra overflow horizontal em index.css', () => {
    const cssPath = path.join(rootDir, 'src/index.css');
    const cssContent = fs.readFileSync(cssPath, 'utf-8');
    expect(cssContent).toContain('overflow-x: hidden');
    expect(cssContent).toContain('max-width: 100vw');
  });

  it('deve manter o BottomNav com 5 colunas perfeitamente distribuídas e dock fixo', () => {
    const bottomNavPath = path.join(rootDir, 'src/components/layout/BottomNav.tsx');
    const content = fs.readFileSync(bottomNavPath, 'utf-8');
    expect(content).toContain('grid grid-cols-5');
    expect(content).toContain('safe-area-inset-bottom');
    expect(content).toContain('fixed');
    expect(content).toContain('inset-x-0');
  });

  it('deve manter o Header enxuto no mobile com título truncado e sem quebras', () => {
    const headerPath = path.join(rootDir, 'src/components/layout/Header.tsx');
    const content = fs.readFileSync(headerPath, 'utf-8');
    expect(content).toContain('truncate');
    expect(content).toContain('MobileMoreMenu');
  });

  it('deve assegurar que AccordionTree previna overflow de texto longo e indentação infinita', () => {
    const accordionPath = path.join(rootDir, 'src/components/common/AccordionTree.tsx');
    const content = fs.readFileSync(accordionPath, 'utf-8');
    expect(content).toContain('break-words');
    expect(content).toContain('min-w-0');
  });

  it('deve garantir que MarkdownRenderer envolva tabelas com container horizontal rolável', () => {
    const mdPath = path.join(rootDir, 'src/components/common/MarkdownRenderer.tsx');
    const content = fs.readFileSync(mdPath, 'utf-8');
    expect(content).toContain('overflow-x-auto');
    expect(content).toContain('<table className="w-full text-left');
  });

  it('deve conter proteções contra overflow em DecisionFlow e TimelineFlow', () => {
    const decisionPath = path.join(rootDir, 'src/components/common/DecisionFlow.tsx');
    const decisionContent = fs.readFileSync(decisionPath, 'utf-8');
    expect(decisionContent).toContain('min-w-0');
    expect(decisionContent).toContain('break-words');

    const timelinePath = path.join(rootDir, 'src/components/common/TimelineFlow.tsx');
    const timelineContent = fs.readFileSync(timelinePath, 'utf-8');
    expect(timelineContent).toContain('min-w-0');
    expect(timelineContent).toContain('break-words');
  });

  it('deve garantir que TabelaComparativa utilize cards no mobile e preserve largura 100%', () => {
    const tabelaPath = path.join(rootDir, 'src/components/content-blocks/TabelaComparativa.tsx');
    const content = fs.readFileSync(tabelaPath, 'utf-8');
    expect(content).toContain('sm:hidden');
    expect(content).toContain('hidden sm:block');
  });
});
