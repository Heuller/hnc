import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';

const ICONS_DIR = path.resolve('public', 'icons');
const SVG_PATH = path.resolve('public', 'favicon.svg');

async function gerarIcones() {
  if (!fs.existsSync(SVG_PATH)) {
    throw new Error(`Arquivo SVG não encontrado em: ${SVG_PATH}`);
  }

  if (!fs.existsSync(ICONS_DIR)) {
    fs.mkdirSync(ICONS_DIR, { recursive: true });
  }

  const svgContent = fs.readFileSync(SVG_PATH, 'utf-8');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  // Helper para renderizar
  async function renderIcon(size, filename, isMaskable = false) {
    const padding = isMaskable ? Math.round(size * 0.15) : 0; // 15% safe area margin para maskable
    const innerSize = size - padding * 2;
    const bgColor = isMaskable ? '#16244A' : 'transparent';

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
              width: ${size}px;
              height: ${size}px;
              background: ${bgColor};
              display: flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
            }
            .svg-container {
              width: ${innerSize}px;
              height: ${innerSize}px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            svg {
              width: 100%;
              height: 100%;
            }
          </style>
        </head>
        <body>
          <div class="svg-container">
            ${svgContent}
          </div>
        </body>
      </html>
    `;

    await page.setViewport({ width: size, height: size, deviceScaleFactor: 1 });
    await page.setContent(html, { waitUntil: 'domcontentloaded' });

    const outputPath = path.join(ICONS_DIR, filename);
    await page.screenshot({
      path: outputPath,
      omitBackground: !isMaskable,
      type: 'png',
    });

    console.log(`✅ Ícone gerado: ${filename} (${size}x${size}, maskable=${isMaskable})`);
  }

  try {
    await renderIcon(192, 'icon-192.png', false);
    await renderIcon(512, 'icon-512.png', false);
    await renderIcon(512, 'icon-512-maskable.png', true);
    console.log('🎉 Todos os ícones PWA gerados com sucesso!');
  } finally {
    await browser.close();
  }
}

gerarIcones().catch((err) => {
  console.error('Erro ao gerar ícones:', err);
  process.exit(1);
});
