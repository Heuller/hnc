import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';

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

  await new Promise((resolve) => server.listen(5199, '127.0.0.1', resolve));
  const baseUrl = 'http://127.0.0.1:5199';
  console.log(`Servidor estático de dist/ iniciado em ${baseUrl}`);

  const tempProfileDir = path.join(outDir, `temp_profile_${Date.now()}`);
  fs.mkdirSync(tempProfileDir, { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    userDataDir: tempProfileDir,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const viewports = [
    { width: 360, height: 800, name: '360x800' },
    { width: 412, height: 915, name: '412x915' },
  ];

  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height });

    // 1. Carrega Home e autentica como Convidado
    await page.goto(`${baseUrl}/`, { waitUntil: 'domcontentloaded' });
    await new Promise((r) => setTimeout(r, 600));

    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const guestBtn = buttons.find((b) => b.textContent && b.textContent.includes('Convidado'));
      if (guestBtn) guestBtn.click();
    });
    await new Promise((r) => setTimeout(r, 600));

    // 2. Navega para a página de Glossário (/glossario)
    await page.evaluate(() => {
      window.location.hash = '#/glossario';
    });
    await new Promise((r) => setTimeout(r, 800));
    const shotGlossario = path.join(outDir, `u3_glossario_${vp.name}.png`);
    await page.screenshot({ path: shotGlossario, fullPage: false });
    console.log(`📸 Screenshot salvo: ${shotGlossario}`);

    // 3. Navega para Teoria sub-6-6 (com Cartão Antes de Ler)
    await page.evaluate(() => {
      window.location.hash = '#/teoria/sub-6-6';
    });
    await new Promise((r) => setTimeout(r, 1000));
    const shotTeoria = path.join(outDir, `u3_teoria_sub66_${vp.name}.png`);
    await page.screenshot({ path: shotTeoria, fullPage: false });
    console.log(`📸 Screenshot salvo: ${shotTeoria}`);

    // 4. Clica em um termo com destaque de glossário para abrir a Gaveta Curta
    const clicou = await page.evaluate(() => {
      const botoesTermo = Array.from(document.querySelectorAll('button[aria-haspopup="dialog"]'));
      if (botoesTermo.length > 0) {
        botoesTermo[0].click();
        return true;
      }
      return false;
    });

    if (clicou) {
      await new Promise((r) => setTimeout(r, 500));
      const shotGaveta = path.join(outDir, `u3_gaveta_curta_${vp.name}.png`);
      await page.screenshot({ path: shotGaveta, fullPage: false });
      console.log(`📸 Screenshot salvo: ${shotGaveta}`);
    }

    await page.close();
  }

  await browser.close();
  await new Promise((resolve) => server.close(resolve));
  try {
    fs.rmSync(tempProfileDir, { recursive: true, force: true });
  } catch {
    // ignora falha de limpeza
  }
  console.log('Capturas concluídas com sucesso!');
}

main().catch((err) => {
  console.error('Erro ao gerar screenshots:', err);
  process.exit(1);
});
