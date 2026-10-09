import { createServer } from 'vite';
import puppeteer from 'puppeteer';

async function run() {
  console.log('Iniciando servidor Vite para teste...');
  const server = await createServer({
    server: { port: 5175 },
    logLevel: 'error',
  });
  await server.listen();
  const address = server.httpServer.address();
  const port = typeof address === 'object' ? address.port : 5175;
  const baseUrl = `http://localhost:${port}`;
  console.log(`Vite rodando em ${baseUrl}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const viewports = [
    { width: 360, height: 800, name: '360x800 (Android estreito)' },
    { width: 390, height: 844, name: '390x844 (iPhone 12/13/14)' },
    { width: 412, height: 915, name: '412x915 (Samsung Galaxy/Pixel)' },
  ];

  const routes = [
    { name: 'Teoria 2.5', hash: '#teoria', subId: '2.5' },
    { name: 'Painel', hash: '#painel' },
    { name: 'Jornada', hash: '#jornada' },
    { name: 'Treinos', hash: '#treinos' },
    { name: 'Radar', hash: '#radar' },
    { name: 'Progresso', hash: '#progresso' },
  ];

  const themes = ['light', 'dark'];

  const results = [];

  for (const vp of viewports) {
    for (const theme of themes) {
      for (const route of routes) {
        const page = await browser.newPage();
        await page.setViewport({ width: vp.width, height: vp.height });

        // Acessa a raiz para autenticar e preparar storage
        await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle0' });

        // Clica no modo convidado para autenticar
        await page.evaluate(() => {
          // Busca o botão de convidado
          const buttons = Array.from(document.querySelectorAll('button'));
          const guestBtn = buttons.find((b) => b.textContent && b.textContent.includes('Convidado'));
          if (guestBtn) {
            guestBtn.click();
          }
        });

        await new Promise((r) => setTimeout(r, 400));

        // Configura tema e rota
        await page.evaluate(
          (t, h, sub) => {
            localStorage.setItem('theme-preference', t);
            if (t === 'dark') {
              document.documentElement.classList.add('dark');
              document.documentElement.classList.remove('light');
            } else {
              document.documentElement.classList.add('light');
              document.documentElement.classList.remove('dark');
            }
            if (sub) {
              localStorage.setItem('hnc_ultimo_submodulo', sub);
            }
            window.location.hash = h;
          },
          theme,
          route.hash,
          route.subId
        );

        await new Promise((r) => setTimeout(r, 600));

        // Se for rota de teoria, garante que o submódulo 2.5 está selecionado
        if (route.subId === '2.5') {
          await page.evaluate(() => {
            // Se houver gaveta de módulos, seleciona 2.5
            const btnModulos = document.querySelector('button[aria-label="Abrir grade de módulos"]');
            if (btnModulos) {
              btnModulos.click();
            }
          });
          await new Promise((r) => setTimeout(r, 300));
          await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const b25 = buttons.find((b) => b.textContent && b.textContent.includes('2.5'));
            if (b25) {
              b25.click();
            }
          });
          await new Promise((r) => setTimeout(r, 600));
        }

        // Rola até o meio e até o final para acionar todos os componentes
        await page.evaluate(async () => {
          window.scrollTo(0, document.body.scrollHeight / 2);
          await new Promise((r) => setTimeout(r, 300));
          window.scrollTo(0, document.body.scrollHeight);
          await new Promise((r) => setTimeout(r, 300));
        });

        // Avalia overflow horizontal
        const overflowData = await page.evaluate(() => {
          const clientWidth = document.documentElement.clientWidth;
          const scrollWidth = document.documentElement.scrollWidth;
          const windowWidth = window.innerWidth;
          const hasPageOverflow = scrollWidth > clientWidth + 1;

          const elements = Array.from(document.querySelectorAll('*'));
          const culprits = elements
            .filter((el) => {
              const rect = el.getBoundingClientRect();
              return rect.right > clientWidth + 1;
            })
            .map((el) => {
              const rect = el.getBoundingClientRect();
              const classes = typeof el.className === 'string' ? el.className : '';
              return {
                tag: el.tagName.toLowerCase(),
                id: el.id,
                className: classes.slice(0, 80),
                right: Math.round(rect.right),
                width: Math.round(rect.width),
                overflowPx: Math.round(rect.right - clientWidth),
                textSnippet: (el.textContent || '').trim().slice(0, 40),
              };
            });

          // Checa BottomNav
          const nav = document.querySelector('nav[aria-label="Navegação móvel inferior"]');
          let navData = null;
          if (nav) {
            const rect = nav.getBoundingClientRect();
            const buttons = Array.from(nav.querySelectorAll('button')).map((b) => {
              const bRect = b.getBoundingClientRect();
              return {
                text: (b.textContent || '').trim(),
                left: Math.round(bRect.left),
                right: Math.round(bRect.right),
                width: Math.round(bRect.width),
              };
            });
            navData = {
              navWidth: Math.round(rect.width),
              navRight: Math.round(rect.right),
              buttonsCount: buttons.length,
              buttons,
            };
          }

          // Checa Header
          const header = document.querySelector('header');
          let headerTitle = null;
          if (header) {
            const titleSpan = header.querySelector('.text-center.truncate span');
            if (titleSpan) headerTitle = titleSpan.textContent;
          }

          return {
            clientWidth,
            scrollWidth,
            windowWidth,
            hasPageOverflow,
            culpritsCount: culprits.length,
            culprits: culprits.slice(0, 15),
            navData,
            headerTitle,
          };
        });

        results.push({
          viewport: vp.name,
          theme,
          route: route.name,
          ...overflowData,
        });

        await page.close();
      }
    }
  }

  await browser.close();
  await server.close();

  console.log('\n========================================');
  console.log('RELATÓRIO DO DIAGNÓSTICO MOBILE OVERFLOW');
  console.log('========================================\n');

  let totalOverflowScenarios = 0;
  for (const res of results) {
    if (res.hasPageOverflow || res.culpritsCount > 0) {
      totalOverflowScenarios++;
      console.log(
        `🚨 OVERFLOW DETECTADO: [${res.viewport}] [Tema: ${res.theme}] [Rota: ${res.route}]`
      );
      console.log(
        `   clientWidth: ${res.clientWidth}px | scrollWidth: ${res.scrollWidth}px (Excesso: +${res.scrollWidth - res.clientWidth}px)`
      );
      console.log(`   Header Title: "${res.headerTitle}"`);
      console.log(`   Elementos culpados (${res.culpritsCount} no total):`);
      for (const c of res.culprits) {
        console.log(
          `     - <${c.tag}${c.id ? '#' + c.id : ''}> class="${c.className}" | right: ${c.right}px (+${c.overflowPx}px) | snippet: "${c.textSnippet}"`
        );
      }
      if (res.navData) {
        console.log(
          `   BottomNav: width=${res.navData.navWidth}px, right=${res.navData.navRight}px, botões=${res.navData.buttonsCount}`
        );
      }
      console.log('');
    } else {
      console.log(
        `✅ OK: [${res.viewport}] [Tema: ${res.theme}] [Rota: ${res.route}] (scrollWidth: ${res.scrollWidth}px == clientWidth: ${res.clientWidth}px | Title: "${res.headerTitle}")`
      );
    }
  }

  console.log(`\nTotal de cenários com overflow: ${totalOverflowScenarios} de ${results.length}`);
}

run().catch((err) => {
  console.error('Erro no diagnóstico:', err);
  process.exit(1);
});
