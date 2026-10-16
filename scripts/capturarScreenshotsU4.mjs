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

  await new Promise((resolve) => server.listen(5201, '127.0.0.1', resolve));
  const baseUrl = 'http://127.0.0.1:5201';
  console.log(`Servidor de screenshots rodando em ${baseUrl}`);

  const tempProfileDir = path.join(outDir, `temp_profile_u4_${Date.now()}`);
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

    // 1. Carrega Home e injeta dados no localStorage
    await page.goto(`${baseUrl}/`, { waitUntil: 'domcontentloaded' });
    await new Promise((r) => setTimeout(r, 600));

    // Clica em Convidado
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const guestBtn = buttons.find((b) => b.textContent && b.textContent.includes('Convidado'));
      if (guestBtn) guestBtn.click();
    });
    await new Promise((r) => setTimeout(r, 600));

    // Injeta dados de itemAttempts e conceitos para demonstrar Hipercorreção e Painel
    await page.evaluate(() => {
      const now = Date.now();
      const mockAttempts = [
        {
          id: 'att-1',
          itemId: 'm1-c1',
          tipoOrigem: 'exercicio_leitura',
          formatoExercicio: 'X1',
          resposta: 'C',
          gabarito: 'C',
          acertou: true,
          confianca: 'alta',
          timestamp: now - 3600000,
        },
        {
          id: 'att-2',
          itemId: 'm1-c2',
          tipoOrigem: 'exercicio_leitura',
          formatoExercicio: 'X2',
          resposta: 'E',
          gabarito: 'C',
          acertou: false,
          confianca: 'alta', // HIPERCORREÇÃO
          timestamp: now - 3000000,
        },
        {
          id: 'att-3',
          itemId: 'm1-c3',
          tipoOrigem: 'exercicio_leitura',
          formatoExercicio: 'X4',
          resposta: 'C',
          gabarito: 'C',
          acertou: true,
          confianca: 'media',
          timestamp: now - 2500000,
        },
        {
          id: 'att-4',
          itemId: 'm1-c4',
          tipoOrigem: 'simulado',
          formatoExercicio: 'cebraspe_c_e',
          resposta: 'E',
          gabarito: 'E',
          acertou: true,
          confianca: 'alta',
          timestamp: now - 2000000,
        },
        {
          id: 'att-5',
          itemId: 'm1-c5',
          tipoOrigem: 'exercicio_leitura',
          formatoExercicio: 'X10',
          resposta: 'C',
          gabarito: 'C',
          acertou: true,
          confianca: 'alta',
          timestamp: now - 1500000,
        },
        {
          id: 'att-6',
          itemId: 'm1-c6',
          tipoOrigem: 'exercicio_leitura',
          formatoExercicio: 'X5',
          resposta: 'E',
          gabarito: 'C',
          acertou: false,
          confianca: 'alta', // HIPERCORREÇÃO
          timestamp: now - 1000000,
        },
      ];

      // Atualiza hnc_progress_storage
      try {
        const raw = localStorage.getItem('hnc_progress_storage');
        const parsed = raw ? JSON.parse(raw) : { state: {} };
        parsed.state = {
          ...parsed.state,
          itemAttempts: mockAttempts,
          cadernoErros: [
            {
              id: 'err-1',
              itemId: 'm1-c2',
              itemTexto: 'O conceito de mediação da informação na perspectiva pós-custodial...',
              respostaDada: 'E',
              respostaCorreta: 'C',
              moduloOrigem: 'm1',
              submoduloOrigem: 'sub-1-1',
              confiancaAoErrar: 'alta',
              prioridadeHipercorrecao: true,
              dataErro: new Date(now - 3000000).toISOString(),
            },
            {
              id: 'err-2',
              itemId: 'm1-c6',
              itemTexto: 'A teoria das quatro ordens da informação segundo Buckland...',
              respostaDada: 'E',
              respostaCorreta: 'C',
              moduloOrigem: 'm1',
              submoduloOrigem: 'sub-1-1',
              confiancaAoErrar: 'alta',
              prioridadeHipercorrecao: true,
              dataErro: new Date(now - 1000000).toISOString(),
            },
          ],
        };
        localStorage.setItem('hnc_progress_storage', JSON.stringify(parsed));
      } catch (e) {
        console.error('Erro ao atualizar storage:', e);
      }
    });

    // 2. Tela de Teoria (/teoria/sub-1-1) - Exercícios ativos integrados
    await page.evaluate(() => {
      window.location.hash = '#/teoria/sub-1-1';
    });
    await new Promise((r) => setTimeout(r, 1200));

    // Rola para a seção de exercícios ativos
    await page.evaluate(() => {
      const el = document.querySelector('[data-testid="secao-exercicios"]') || document.querySelector('h2');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
      else window.scrollBy(0, 1400);
    });
    await new Promise((r) => setTimeout(r, 600));

    const shotTeoria = path.join(outDir, `u4_teoria_exercicios_${vp.name}.png`);
    await page.screenshot({ path: shotTeoria, fullPage: false });
    console.log(`📸 Screenshot salvo: ${shotTeoria}`);

    // 3. Caderno de Erros (/caderno-erros) - Destaque de Hipercorreção
    await page.evaluate(() => {
      window.location.hash = '#/caderno-erros';
    });
    await new Promise((r) => setTimeout(r, 1200));

    const shotCaderno = path.join(outDir, `u4_caderno_erros_${vp.name}.png`);
    await page.screenshot({ path: shotCaderno, fullPage: false });
    console.log(`📸 Screenshot salvo: ${shotCaderno}`);

    // 4. Progresso (/progresso) - Painel "O que funciona para você"
    await page.evaluate(() => {
      window.location.hash = '#/progresso';
    });
    await new Promise((r) => setTimeout(r, 1200));

    // Rola até o painel
    await page.evaluate(() => {
      const painel = Array.from(document.querySelectorAll('h2, h3')).find((el) =>
        el.textContent && el.textContent.includes('O que funciona para você')
      );
      if (painel) painel.scrollIntoView({ behavior: 'instant', block: 'start' });
      else window.scrollBy(0, 1200);
    });
    await new Promise((r) => setTimeout(r, 600));

    const shotProgresso = path.join(outDir, `u4_progresso_o_que_funciona_${vp.name}.png`);
    await page.screenshot({ path: shotProgresso, fullPage: false });
    console.log(`📸 Screenshot salvo: ${shotProgresso}`);

    await page.close();
  }

  await browser.close();
  server.close();
  console.log('Capturas da Fase U4 concluídas com sucesso!');
}

main().catch((err) => {
  console.error('Falha ao capturar screenshots:', err);
  process.exit(1);
});
