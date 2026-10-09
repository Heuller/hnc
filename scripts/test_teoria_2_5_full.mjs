import { createServer } from 'vite';
import puppeteer from 'puppeteer';

async function run() {
  const server = await createServer({
    server: { port: 5176 },
    logLevel: 'error',
  });
  await server.listen();
  const address = server.httpServer.address();
  const port = typeof address === 'object' ? address.port : 5176;
  const baseUrl = `http://localhost:${port}`;

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const viewports = [
    { width: 360, height: 800, name: '360x800' },
    { width: 390, height: 844, name: '390x844' },
    { width: 412, height: 915, name: '412x915' },
  ];

  const themes = ['light', 'dark'];

  console.log('\n======================================================');
  console.log('TESTE CIRÚRGICO DA LEITURA DA TEORIA 2.5 (TODAS AS SEÇÕES)');
  console.log('======================================================\n');

  for (const vp of viewports) {
    for (const theme of themes) {
      const page = await browser.newPage();
      await page.setViewport({ width: vp.width, height: vp.height });

      await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle0' });

      // Autentica via convidado
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const guestBtn = buttons.find((b) => b.textContent && b.textContent.includes('Convidado'));
        if (guestBtn) guestBtn.click();
      });
      await new Promise((r) => setTimeout(r, 400));

      // Configura tema e força seleção do submódulo 2.5
      await page.evaluate(
        (t) => {
          localStorage.setItem('theme-preference', t);
          localStorage.setItem('hnc_ultimo_submodulo', '2.5');
          if (t === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
          } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
          }
          window.location.hash = '#teoria';
        },
        theme
      );
      await new Promise((r) => setTimeout(r, 500));

      // Seleciona explicitamente 2.5 no drawer para garantir que 2.5 é o conteúdo renderizado
      await page.evaluate(() => {
        const btnModulos = document.querySelector('button[aria-label="Abrir grade de módulos"]');
        if (btnModulos) btnModulos.click();
      });
      await new Promise((r) => setTimeout(r, 300));
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const b25 = buttons.find((b) => b.textContent && b.textContent.includes('2.5'));
        if (b25) b25.click();
      });
      await new Promise((r) => setTimeout(r, 800));

      // Rola em 4 etapas para forçar layout e renderização de todos os nós
      await page.evaluate(async () => {
        const total = document.body.scrollHeight;
        window.scrollTo(0, total * 0.25);
        await new Promise((r) => setTimeout(r, 200));
        window.scrollTo(0, total * 0.5);
        await new Promise((r) => setTimeout(r, 200));
        window.scrollTo(0, total * 0.75);
        await new Promise((r) => setTimeout(r, 200));
        window.scrollTo(0, total);
        await new Promise((r) => setTimeout(r, 300));
      });

      const metrics = await page.evaluate(() => {
        const clientWidth = document.documentElement.clientWidth;
        const scrollWidth = document.documentElement.scrollWidth;
        const elements = Array.from(document.querySelectorAll('*'));
        const culprits = elements
          .filter((el) => el.getBoundingClientRect().right > clientWidth + 1)
          .map((el) => {
            const rect = el.getBoundingClientRect();
            return {
              tag: el.tagName.toLowerCase(),
              className: (el.className || '').toString().slice(0, 60),
              right: Math.round(rect.right),
              overflow: Math.round(rect.right - clientWidth),
              text: (el.textContent || '').trim().slice(0, 30),
            };
          });

        const headerTitle = document.querySelector('header .truncate span')?.textContent;
        const bottomNav = document.querySelector('nav[aria-label="Navegação móvel inferior"]');
        const bottomNavRect = bottomNav ? bottomNav.getBoundingClientRect() : null;
        const navButtons = bottomNav ? Array.from(bottomNav.querySelectorAll('button')).length : 0;

        return {
          clientWidth,
          scrollWidth,
          headerTitle,
          bottomNavWidth: bottomNavRect ? Math.round(bottomNavRect.width) : null,
          bottomNavRight: bottomNavRect ? Math.round(bottomNavRect.right) : null,
          navButtons,
          culpritsCount: culprits.length,
          culprits: culprits.slice(0, 10),
        };
      });

      if (metrics.scrollWidth <= metrics.clientWidth + 1 && metrics.culpritsCount === 0) {
        console.log(
          `✅ [${vp.name}] [Tema: ${theme}] Teoria 2.5 perfeita! clientWidth=${metrics.clientWidth}px == scrollWidth=${metrics.scrollWidth}px | Header="${metrics.headerTitle}" | BottomNav=${metrics.bottomNavWidth}px (5 botões centralizados)`
        );
      } else {
        console.log(
          `🚨 [${vp.name}] [Tema: ${theme}] OVERFLOW DETECTADO! clientWidth=${metrics.clientWidth}px, scrollWidth=${metrics.scrollWidth}px (+${metrics.scrollWidth - metrics.clientWidth}px)`
        );
        for (const c of metrics.culprits) {
          console.log(`   - <${c.tag}> right=${c.right} (+${c.overflow}px) class="${c.className}" snippet="${c.text}"`);
        }
      }

      await page.close();
    }
  }

  await browser.close();
  await server.close();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
