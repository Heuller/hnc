import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';

/**
 * U9.3: Captura Automatizada de Screenshots para Validação Mobile-First e Lançamento
 * Viewports testados:
 * - 360×800 (Mobile estreito - alvo tátil mínimo e telas compactas)
 * - 412×915 (Mobile moderno - Pixel / Galaxy padrão do candidato)
 * - 1440×900 (Desktop de referência para validação editorial)
 */

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
};

async function main() {
  const distDir = path.resolve('dist');
  const outDir = path.resolve('docs/relatorios/screenshots');
  fs.mkdirSync(outDir, { recursive: true });

  const server = http.createServer((req, res) => {
    let reqPath = req.url ? req.url.split('?')[0] : '/';
    let filePath = path.join(distDir, reqPath === '/' ? 'index.html' : reqPath);

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(distDir, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    try {
      const data = fs.readFileSync(filePath);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    } catch {
      res.writeHead(404);
      res.end('Not found');
    }
  });

  const port = 5209;
  await new Promise((resolve) => server.listen(port, '127.0.0.1', resolve));
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`🌐 Servidor de homologação U9 rodando em ${baseUrl}`);

  const tempProfileDir = path.join(outDir, `temp_profile_u9_${Date.now()}`);
  fs.mkdirSync(tempProfileDir, { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    userDataDir: tempProfileDir,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const viewports = [
    { width: 360, height: 800, name: '360x800' },
    { width: 412, height: 915, name: '412x915' },
    { width: 1440, height: 900, name: '1440x900' },
  ];

  const paginas = [
    { nome: 'painel', hash: '#/' },
    { nome: 'teoria', hash: '#/teoria' },
    { nome: 'treinos', hash: '#/treinos' },
    { nome: 'simulado', hash: '#/simulado' },
    { nome: 'discursiva', hash: '#/discursiva' },
    { nome: 'progresso', hash: '#/progresso' },
  ];

  const relatorioCapturas = [];

  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height });

    // 1. Acesso inicial e login de convidado
    await page.goto(`${baseUrl}/`, { waitUntil: 'domcontentloaded' });
    await new Promise((r) => setTimeout(r, 600));

    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const guestBtn = buttons.find((b) => b.textContent && b.textContent.includes('Convidado'));
      if (guestBtn) guestBtn.click();
    });
    await new Promise((r) => setTimeout(r, 600));

    for (const pg of paginas) {
      await page.evaluate((targetHash) => {
        window.location.hash = targetHash;
      }, pg.hash);
      await new Promise((r) => setTimeout(r, 1000));

      // Verifica rolagem horizontal (Diretriz D6)
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });

      const shotFile = path.join(outDir, `u9_${pg.nome}_${vp.name}.png`);
      await page.screenshot({ path: shotFile, fullPage: false });
      console.log(`📸 [${vp.name}] ${pg.nome.padEnd(10)}: u9_${pg.nome}_${vp.name}.png (Overflow H: ${hasHorizontalScroll ? '⚠️ DETECTADO' : '✅ ZERO'})`);

      relatorioCapturas.push({
        viewport: vp.name,
        pagina: pg.nome,
        overflowHorizontal: hasHorizontalScroll,
        arquivo: `u9_${pg.nome}_${vp.name}.png`,
      });
    }

    await page.close();
  }

  await browser.close();
  server.close();

  // Limpa perfil temporário
  try {
    fs.rmSync(tempProfileDir, { recursive: true, force: true });
  } catch {}

  console.log('\n--- RESUMO DE TESTES EM DISPOSITIVOS (U9.3) ---');
  let todosSemOverflow = true;
  for (const item of relatorioCapturas) {
    if (item.overflowHorizontal) todosSemOverflow = false;
    console.log(`- ${item.viewport.padEnd(8)} | ${item.pagina.padEnd(10)}: ${item.overflowHorizontal ? '❌ OVERFLOW' : '✅ ZERO overflow'}`);
  }
  console.log(`\nResultado Geral: ${todosSemOverflow ? '✅ PERFEITO: Zero overflow horizontal em todas as telas e viewports.' : '❌ ATENÇÃO: Falhas de overflow encontradas.'}`);
}

main().catch((err) => {
  console.error('Erro na captura de screenshots U9:', err);
  process.exit(1);
});
