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
  const outDir = path.resolve('docs/relatorios/screenshots/p4');
  fs.mkdirSync(outDir, { recursive: true });

  const artifactDir = 'C:/Users/bibli/.gemini/antigravity/brain/8bac98a0-7ed7-46a8-aa4d-72d6eaccabf8';

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

  const port = 5219;
  await new Promise((resolve) => server.listen(port, '127.0.0.1', resolve));
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`🌐 Servidor de validação P4 rodando em ${baseUrl}`);

  const tempProfileDir = path.join(outDir, `temp_profile_p4_${Date.now()}`);
  fs.mkdirSync(tempProfileDir, { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    userDataDir: tempProfileDir,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const viewports = [
    { width: 320, height: 568, name: '320px' },
    { width: 360, height: 800, name: '360px' },
    { width: 768, height: 1024, name: '768px' },
    { width: 1280, height: 800, name: '1280px' },
  ];

  const temas = ['claro', 'escuro'];

  const paginas = [
    { nome: 'painel', hash: '#/' },
    { nome: 'teoria', hash: '#/teoria' },
    { nome: 'treinos', hash: '#/treinos' },
    { nome: 'simulado', hash: '#/simulado' },
    { nome: 'discursiva', hash: '#/discursiva' },
    { nome: 'progresso', hash: '#/progresso' },
  ];

  const auditoria = [];

  for (const tema of temas) {
    for (const vp of viewports) {
      const page = await browser.newPage();
      await page.setViewport({ width: vp.width, height: vp.height });

      // Acesso e autenticação como Convidado
      await page.goto(`${baseUrl}/`, { waitUntil: 'domcontentloaded' });
      await new Promise((r) => setTimeout(r, 600));

      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const guestBtn = buttons.find((b) => b.textContent && b.textContent.includes('Convidado'));
        if (guestBtn) guestBtn.click();
      });
      await new Promise((r) => setTimeout(r, 600));

      // Aplica o tema
      await page.evaluate((t) => {
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(t === 'escuro' ? 'dark' : 'light');
        root.style.colorScheme = t === 'escuro' ? 'dark' : 'light';
      }, tema);
      await new Promise((r) => setTimeout(r, 400));

      for (const pg of paginas) {
        await page.evaluate((targetHash) => {
          window.location.hash = targetHash;
        }, pg.hash);
        await new Promise((r) => setTimeout(r, 800));

        // Checagem de overflow horizontal
        const overflow = await page.evaluate(() => {
          return document.documentElement.scrollWidth > window.innerWidth ||
                 document.body.scrollWidth > window.innerWidth;
        });

        const fileName = `p4_${pg.nome}_${vp.name}_${tema}.png`;
        const localPath = path.join(outDir, fileName);
        await page.screenshot({ path: localPath, fullPage: false });

        // Copia para artifacts directory
        if (fs.existsSync(artifactDir)) {
          const artifactPath = path.join(artifactDir, fileName);
          fs.copyFileSync(localPath, artifactPath);
        }

        auditoria.push({
          tema,
          viewport: vp.name,
          pagina: pg.nome,
          overflow,
          arquivo: fileName,
        });

        console.log(`📸 [${tema.padEnd(6)}] [${vp.name.padEnd(6)}] ${pg.nome.padEnd(10)}: ${fileName} (Overflow H: ${overflow ? '⚠️ DETECTADO' : '✅ ZERO'})`);
      }

      await page.close();
    }
  }

  await browser.close();
  server.close();

  try {
    fs.rmSync(tempProfileDir, { recursive: true, force: true });
  } catch {}

  const jsonReportPath = path.join(outDir, 'resultado_capturas.json');
  fs.writeFileSync(jsonReportPath, JSON.stringify(auditoria, null, 2), 'utf-8');
  console.log(`\n🎉 Auditoria concluída! Relatório salvo em: ${jsonReportPath}`);

  const hasAnyOverflow = auditoria.some((a) => a.overflow);
  console.log(`Status Geral de Overflow Horizontal: ${hasAnyOverflow ? '❌ FALHA DETECTADA' : '✅ 100% LIMPO EM TODAS AS TELAS E TEMAS'}`);
}

main().catch((err) => {
  console.error('Erro na captura P4:', err);
  process.exit(1);
});
