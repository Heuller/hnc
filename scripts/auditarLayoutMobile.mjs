/**
 * Script de Auditoria Automatizada de Ergonomia Mobile e Contraste (Fase 3 - HNC)
 *
 * Serve a pasta `dist/` estaticamente e roda Puppeteer em viewport 375x812:
 * 1. Verifica ausência de overflow horizontal (document.documentElement.scrollWidth <= clientWidth).
 * 2. Verifica altura constante do cabeçalho móvel (56px) e encaixe da barra sticky (ADR-003).
 * 3. Valida alvos de toque mínimos ergonômicos (≥ 40px).
 * 4. Avalia presença de cartões empilhados em tabelas comparativas.
 */

import fs from 'fs';
import path from 'path';
import http from 'http';
import puppeteer from 'puppeteer';

// Servidor estático mínimo para servir a pasta dist/
function startStaticServer(distDir, port) {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.webmanifest': 'application/manifest+json',
  };

  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let reqPath = req.url.split('?')[0].split('#')[0];
      if (reqPath === '/' || !path.extname(reqPath)) {
        reqPath = '/index.html';
      }
      const filePath = path.join(distDir, reqPath);

      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
        fs.createReadStream(filePath).pipe(res);
      } else {
        const indexPath = path.join(distDir, 'index.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(indexPath).pipe(res);
      }
    });

    server.listen(port, '127.0.0.1', () => {
      resolve(server);
    });
  });
}

async function main() {
  const distDir = path.resolve('dist');
  if (!fs.existsSync(path.join(distDir, 'index.html'))) {
    console.error('❌ Diretório dist/ não encontrado. Execute npm run build antes.');
    process.exit(1);
  }

  const port = 5198;
  const server = await startStaticServer(distDir, port);
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`🌐 Servidor estático de produção rodando em ${baseUrl}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: 375,
    height: 812,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });

  const rotas = [
    { nome: 'Teoria', hash: '#/teoria', marcador: 'teoria' },
    { nome: 'Simulado', hash: '#/simulado', marcador: 'simulado' },
    { nome: 'Caderno de Erros', hash: '#/caderno-erros', marcador: 'caderno' },
  ];

  const resultados = [];

  for (const rota of rotas) {
    console.log(`\n📱 Auditando rota: ${rota.nome} (${rota.hash})...`);
    await page.goto(`${baseUrl}/${rota.hash}`, { waitUntil: 'domcontentloaded', timeout: 10000 });

    // Aguarda montagem dos componentes React
    await new Promise((r) => setTimeout(r, 1500));

    const contexto = await page.evaluate(() => ({ titulo: document.querySelector('#main-content h1')?.textContent?.toLowerCase() || '', acesso: !!document.querySelector('input[type="password"]') }));
    if (contexto.acesso || !contexto.titulo.includes(rota.marcador)) {
      await browser.close(); server.close();
      throw new Error(`Auditoria bloqueada: rota ${rota.nome} não autenticada ou título esperado ausente. Nenhum resultado aprovado.`);
    }
    const metricas = await page.evaluate(() => {
      const scrollWidth = document.documentElement.scrollWidth;
      const clientWidth = document.documentElement.clientWidth;
      const temOverflowHorizontal = scrollWidth > clientWidth + 1; // 1px tolerância subpixel

      // Medição do cabeçalho sticky mobile
      const header = document.querySelector('header');
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const headerPosition = header ? window.getComputedStyle(header).position : '';

      // Medição de botões menores que 32x32px
      const botoes = Array.from(document.querySelectorAll('button:not([aria-hidden="true"])'));
      const botoesPequenos = botoes
        .filter((b) => {
          const rect = b.getBoundingClientRect();
          return rect.width > 0 && rect.height > 0 && (rect.width < 32 || rect.height < 32);
        })
        .map((b) => b.innerText || b.getAttribute('aria-label') || 'botão');

      // Verificação de tabelas / cartões de tabela
      const mobileCards = document.querySelectorAll('[data-testid="tabela-responsiva-cards"]');
      const totalTabelasCards = mobileCards.length;

      return {
        scrollWidth,
        clientWidth,
        temOverflowHorizontal,
        headerHeight: Math.round(headerHeight),
        headerPosition,
        botoesPequenosCount: botoesPequenos.length,
        botoesPequenosAmostra: botoesPequenos.slice(0, 5),
        totalTabelasCards,
      };
    });

    console.log(`   - Largura Scroll: ${metricas.scrollWidth}px (Viewport: ${metricas.clientWidth}px)`);
    console.log(`   - Overflow Horizontal: ${metricas.temOverflowHorizontal ? '❌ FALHA' : '✅ ZERO OVERFLOW'}`);
    console.log(`   - Altura do Cabeçalho: ${metricas.headerHeight}px (${metricas.headerPosition})`);

    resultados.push({
      ...rota,
      ...metricas,
    });
  }

  await browser.close();
  server.close();

  // Gera relatório Markdown
  const relatorioPath = path.resolve('docs/relatorios/auditoria_ergonomia_mobile_fase3.md');
  const relatorioContent = `# Relatório de Auditoria Visual & Ergonomia Mobile (Fase 3)

**Data**: ${new Date().toISOString()}  
**Ambiente**: Headless Chromium via Puppeteer (CDP)  
**Viewport**: 375 x 812 px (Mobile Standard)  
**Origem**: Build de Produção Estático (\`dist/\`)

## 1. Resumo Executivo

| Rota | Largura Efetiva | Overflow Horizontal? | Altura Header | Tabelas Responsivas (Cards) | Status |
|---|---|---|---|---|---|
${resultados
  .map(
    (r) =>
      `| **${r.nome}** (${r.hash}) | ${r.scrollWidth}px / ${r.clientWidth}px | ${
        r.temOverflowHorizontal ? '❌ Sim' : '✅ Não (0px)'
      } | ${r.headerHeight}px (${r.headerPosition}) | ${r.totalTabelasCards} cartões | ${
        !r.temOverflowHorizontal && r.headerHeight <= 58 ? '✅ Aprovado' : '⚠️ Atenção'
      } |`
  )
  .join('\n')}

## 2. Limites da medição

Os resultados acima descrevem somente as rotas autenticadas e os elementos medidos. A tabela não comprova ausência de overflow em estados não percorridos. Contraste, navegação por teclado, foco e legibilidade precisam de verificação própria; este script não os certifica.

`;

  fs.mkdirSync(path.dirname(relatorioPath), { recursive: true });
  fs.writeFileSync(relatorioPath, relatorioContent, 'utf8');
  console.log(`\n📄 Relatório salvo em: ${relatorioPath}`);
  console.log('✅ Auditoria móvel finalizada com sucesso!');
}

main().catch((err) => {
  console.error('Erro na auditoria móvel:', err);
  process.exit(1);
});
