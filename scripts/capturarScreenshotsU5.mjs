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

  await new Promise((resolve) => server.listen(5202, '127.0.0.1', resolve));
  const baseUrl = 'http://127.0.0.1:5202';
  console.log(`Servidor de screenshots rodando em ${baseUrl}`);

  const tempProfileDir = path.join(outDir, `temp_profile_u5_${Date.now()}`);
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

    // 1. Carrega Home e entra como convidado
    await page.goto(`${baseUrl}/`, { waitUntil: 'domcontentloaded' });
    await new Promise((r) => setTimeout(r, 600));

    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const guestBtn = buttons.find((b) => b.textContent && b.textContent.includes('Convidado'));
      if (guestBtn) guestBtn.click();
    });
    await new Promise((r) => setTimeout(r, 600));

    // 2. Tela de Jornada (/jornada) - Encaixe de R1 antes do Desafio
    await page.evaluate(() => {
      window.location.hash = '#/jornada';
    });
    await new Promise((r) => setTimeout(r, 1200));

    // Rola até o card do Submódulo de Revisão R1
    await page.evaluate(() => {
      const cardRevisao = Array.from(document.querySelectorAll('h3, h4, span, div')).find(
        (el) => el.textContent && el.textContent.includes('Revisão R1')
      );
      if (cardRevisao) {
        cardRevisao.scrollIntoView({ behavior: 'instant', block: 'center' });
      } else {
        window.scrollBy(0, 800);
      }
    });
    await new Promise((r) => setTimeout(r, 600));

    const shotJornada = path.join(outDir, `u5_jornada_card_revisao_r1_${vp.name}.png`);
    await page.screenshot({ path: shotJornada, fullPage: false });
    console.log(`📸 Screenshot salvo: ${shotJornada}`);

    // 3. Tela de Treinos (/treinos) - Card "Revisão do Dia" e "Simulados Oficiais"
    await page.evaluate(() => {
      window.location.hash = '#/treinos';
    });
    await new Promise((r) => setTimeout(r, 1200));

    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });
    await new Promise((r) => setTimeout(r, 500));

    const shotTreinos = path.join(outDir, `u5_treinos_revisao_dia_${vp.name}.png`);
    await page.screenshot({ path: shotTreinos, fullPage: false });
    console.log(`📸 Screenshot salvo: ${shotTreinos}`);

    await page.close();
  }

  await browser.close();
  server.close();
  console.log('Capturas da Fase U5 concluídas com sucesso!');
}

main().catch((err) => {
  console.error('Falha ao capturar screenshots:', err);
  process.exit(1);
});
