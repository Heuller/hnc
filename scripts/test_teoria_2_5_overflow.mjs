import { createServer } from 'vite';
import puppeteer from 'puppeteer';

async function run() {
  const server = await createServer({
    server: { port: 5174 },
    logLevel: 'error',
  });
  await server.listen();
  const address = server.httpServer.address();
  const port = typeof address === 'object' ? address.port : 5174;
  const baseUrl = `http://localhost:${port}`;

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 360, height: 800 });

  await page.goto(`${baseUrl}/#teoria`, { waitUntil: 'networkidle0' });

  // Força seleção do submódulo 2.5
  await page.evaluate(() => {
    // @ts-ignore
    window.location.hash = '#teoria';
    // Modifica o store diretamente
    const navStore = window.__NAV_STORE__ || null;
  });

  // Clica no drawer de módulos ou seleciona 2.5 via evaluate
  await page.evaluate(async () => {
    // Vamos inspecionar se há botões para selecionar 2.5
    // Ou importar a store
  });

  // Vamos carregar o submódulo 2.5 através da store do zustand no window se exposta,
  // ou selecionando o submódulo via drawer
  const opened = await page.evaluate(() => {
    const btnModulos = document.querySelector('button[aria-label="Abrir grade de módulos"]');
    if (btnModulos) {
      btnModulos.click();
      return true;
    }
    return false;
  });

  await new Promise((r) => setTimeout(r, 500));

  // No drawer, clica no submódulo 2.5
  const clicked25 = await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const b25 = buttons.find((b) => b.textContent && b.textContent.includes('2.5'));
    if (b25) {
      b25.click();
      return true;
    }
    return false;
  });

  console.log('Abriu drawer:', opened, '| Clicou em 2.5:', clicked25);
  await new Promise((r) => setTimeout(r, 1000));

  // Rola até o final da página
  await page.evaluate(async () => {
    window.scrollTo(0, document.body.scrollHeight / 2);
    await new Promise((r) => setTimeout(r, 300));
    window.scrollTo(0, document.body.scrollHeight);
  });
  await new Promise((r) => setTimeout(r, 500));

  // Inspeciona seletor de overflow
  const data = await page.evaluate(() => {
    const clientWidth = document.documentElement.clientWidth;
    const scrollWidth = document.documentElement.scrollWidth;
    const elements = Array.from(document.querySelectorAll('*'));
    const culprits = elements
      .filter((el) => el.getBoundingClientRect().right > clientWidth + 1)
      .map((el) => ({
        tag: el.tagName.toLowerCase(),
        id: el.id,
        className: (el.className || '').toString().slice(0, 100),
        right: Math.round(el.getBoundingClientRect().right),
        width: Math.round(el.getBoundingClientRect().width),
        overflowPx: Math.round(el.getBoundingClientRect().right - clientWidth),
        text: (el.textContent || '').trim().slice(0, 60),
      }));

    // Header title
    const headerTitleEl = document.querySelector('header .truncate span');
    const headerTitle = headerTitleEl ? headerTitleEl.textContent : null;

    // BottomNav
    const bottomNav = document.querySelector('nav[aria-label="Navegação móvel inferior"]');
    const bottomNavRect = bottomNav ? bottomNav.getBoundingClientRect() : null;

    return {
      clientWidth,
      scrollWidth,
      headerTitle,
      bottomNavWidth: bottomNavRect ? bottomNavRect.width : null,
      bottomNavRight: bottomNavRect ? bottomNavRect.right : null,
      culprits,
    };
  });

  console.log('Resultado Teoria 2.5 em 360x800:');
  console.log('clientWidth:', data.clientWidth);
  console.log('scrollWidth:', data.scrollWidth);
  console.log('headerTitle:', data.headerTitle);
  console.log('bottomNavWidth:', data.bottomNavWidth, 'bottomNavRight:', data.bottomNavRight);
  console.log('Culprits count:', data.culprits.length);
  for (const c of data.culprits) {
    console.log(` - <${c.tag}> right=${c.right} (+${c.overflowPx}px) class="${c.className}" text="${c.text}"`);
  }

  await browser.close();
  await server.close();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
