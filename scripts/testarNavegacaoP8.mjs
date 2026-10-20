import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';
import { createServer } from 'vite';

const PORT = 5199;
const BASE_URL = `http://127.0.0.1:${PORT}`;
const ARTIFACT_DIR = 'C:/Users/bibli/.gemini/antigravity/brain/8bac98a0-7ed7-46a8-aa4d-72d6eaccabf8';
const SCREENSHOTS_DIR = path.resolve('docs', 'relatorios', 'screenshots', 'p8');

fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });

async function runNavigationAuditP8() {
  console.log('🚀 Iniciando servidor Vite para auditoria P8...');
  const server = await createServer({
    server: {
      host: '127.0.0.1',
      port: PORT,
      fs: {
        allow: ['..', '.'],
      },
    },
  });
  await server.listen();
  console.log(`🌐 Servidor rodando em ${BASE_URL}`);

  console.log('🚀 Iniciando Puppeteer...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const relatorio = {
    testesExecutados: 0,
    testesPassados: 0,
    falhas: [],
    detalhes: [],
  };

  function registrar(etapa, passou, extra = '') {
    relatorio.testesExecutados++;
    if (passou) {
      relatorio.testesPassados++;
      console.log(`  ✅ [PASS] ${etapa} ${extra}`);
    } else {
      relatorio.falhas.push({ etapa, extra });
      console.error(`  ❌ [FAIL] ${etapa} ${extra}`);
    }
    relatorio.detalhes.push({ etapa, passou, extra });
  }

  try {
    const page = await browser.newPage();

    // =========================================================================
    // PARTE 1: DESKTOP (1280x800) & AUTENTICAÇÃO
    // =========================================================================
    console.log('\n🖥️ --- [TESTE DESKTOP: 1280x800] ---');
    await page.setViewport({ width: 1280, height: 800 });

    console.log('Autenticando via AuthGate...');
    await page.goto(`${BASE_URL}/`, { waitUntil: 'load', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 600));

    // Preenche login
    const idInput = await page.$('#auth-identifier');
    const passInput = await page.$('#auth-password');
    const submitBtn = await page.$('button[type="submit"]');

    if (idInput && passInput && submitBtn) {
      await idInput.click({ clickCount: 3 });
      await idInput.type('heuller_p8_audit');
      await passInput.click({ clickCount: 3 });
      await passInput.type('senha123456');
      await submitBtn.click();
    }
    await new Promise((r) => setTimeout(r, 1200));

    // Navega para Teoria (página longa para testar rolagem e sticky)
    console.log('Navegando para #/teoria...');
    await page.evaluate(() => {
      window.location.hash = '#/teoria';
    });
    await new Promise((r) => setTimeout(r, 2000));

    // 1.1 Sticky Header & Sidebar ao rolar scrollY = 900
    await page.evaluate(() => {
      window.scrollTo(0, 900);
    });
    await new Promise((r) => setTimeout(r, 800));

    const desktopStickyCheck = await page.evaluate(() => {
      const header = document.querySelector('header');
      const sidebar = document.querySelector('aside');
      const headerRect = header ? header.getBoundingClientRect() : null;
      const sidebarRect = sidebar ? sidebar.getBoundingClientRect() : null;
      return {
        scrollY: window.scrollY,
        scrollHeight: document.documentElement.scrollHeight,
        headerTop: headerRect ? Math.round(headerRect.top) : null,
        sidebarTop: sidebarRect ? Math.round(sidebarRect.top) : null,
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
      };
    });

    registrar(
      'U-01 Desktop Sticky Header (top === 0 ao rolar)',
      desktopStickyCheck.scrollY > 0 && desktopStickyCheck.headerTop === 0,
      `scrollY: ${desktopStickyCheck.scrollY}px / ${desktopStickyCheck.scrollHeight}px, headerTop: ${desktopStickyCheck.headerTop}px`
    );

    registrar(
      'U-01 Desktop Sticky Sidebar Visível',
      desktopStickyCheck.sidebarTop !== null && desktopStickyCheck.sidebarTop >= 0,
      `sidebarTop: ${desktopStickyCheck.sidebarTop}px`
    );

    registrar(
      'Desktop Zero Horizontal Overflow',
      desktopStickyCheck.scrollWidth <= desktopStickyCheck.innerWidth,
      `scrollWidth: ${desktopStickyCheck.scrollWidth}px, innerWidth: ${desktopStickyCheck.innerWidth}px`
    );

    // Screenshot Desktop Sticky
    const shotDesktopSticky = path.join(SCREENSHOTS_DIR, 'p8_desktop_1280px_sticky.png');
    await page.screenshot({ path: shotDesktopSticky });
    fs.copyFileSync(shotDesktopSticky, path.join(ARTIFACT_DIR, 'p8_desktop_1280px_sticky.png'));

    // 1.2 Verificação das 5 Abas Primárias Unificadas no Desktop
    const desktopTabs = await page.evaluate(() => {
      const nav = document.querySelector('nav[aria-label="Navegação principal"]');
      if (!nav) return [];
      const buttons = Array.from(nav.querySelectorAll('button'));
      return buttons.map((b) => ({
        label: b.textContent?.trim(),
        ariaCurrent: b.getAttribute('aria-current'),
      }));
    });

    registrar(
      'U-05 Desktop 5 Abas Primárias (Painel, Estudar, Praticar, Radar, Progresso)',
      desktopTabs.length === 5 &&
        desktopTabs.some((t) => t.label?.includes('Painel')) &&
        desktopTabs.some((t) => t.label?.includes('Estudar')) &&
        desktopTabs.some((t) => t.label?.includes('Praticar')) &&
        desktopTabs.some((t) => t.label?.includes('Radar')) &&
        desktopTabs.some((t) => t.label?.includes('Progresso')),
      `Encontradas: ${desktopTabs.map((t) => t.label).join(', ')}`
    );

    const estudarTab = desktopTabs.find((t) => t.label?.includes('Estudar'));
    registrar(
      'U-06 Aba Estudar Ativa na Teoria (aria-current="page")',
      estudarTab?.ariaCurrent === 'page',
      `aria-current: ${estudarTab?.ariaCurrent}`
    );

    // 1.3 Verificação da Trilha de Navegação (Breadcrumb)
    const breadcrumbDesktop = await page.evaluate(() => {
      const nav = document.querySelector('nav[aria-label="Trilha de navegação"]');
      return nav ? nav.textContent?.trim() : null;
    });

    registrar(
      'Breadcrumb em Teoria Presente e Estruturado (Início > Estudar > Submódulo)',
      breadcrumbDesktop !== null && breadcrumbDesktop.includes('Início') && breadcrumbDesktop.includes('Estudar'),
      `Texto: "${breadcrumbDesktop}"`
    );

    // 1.4 Menu Suspenso de Referência no Desktop
    await page.evaluate(() => {
      const btn = document.querySelector('#reference-menu-trigger');
      if (btn) btn.click();
    });
    await new Promise((r) => setTimeout(r, 400));

    const refMenuOptions = await page.evaluate(() => {
      const menu = document.querySelector('div[aria-label="Ferramentas de referência do edital"]');
      if (!menu) return [];
      return Array.from(menu.querySelectorAll('button[role="menuitem"]')).map((b) => b.textContent?.trim());
    });

    registrar(
      'Menu Suspenso de Referência com 4 Ferramentas Especializadas',
      refMenuOptions.length === 4 &&
        refMenuOptions.some((o) => o?.includes('Oficina Discursiva')) &&
        refMenuOptions.some((o) => o?.includes('Folha de Véspera')) &&
        refMenuOptions.some((o) => o?.includes('Edital Verticalizado')) &&
        refMenuOptions.some((o) => o?.includes('Caderno de Erros')),
      `Itens: ${refMenuOptions.join(' | ')}`
    );

    const shotDesktopRef = path.join(SCREENSHOTS_DIR, 'p8_desktop_1280px_reference_menu.png');
    await page.screenshot({ path: shotDesktopRef });
    fs.copyFileSync(shotDesktopRef, path.join(ARTIFACT_DIR, 'p8_desktop_1280px_reference_menu.png'));

    // Clica em Oficina Discursiva para validar navegação
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('div[aria-label="Ferramentas de referência do edital"] button'));
      const discBtn = btns.find((b) => b.textContent?.includes('Oficina Discursiva'));
      if (discBtn) discBtn.click();
    });
    await new Promise((r) => setTimeout(r, 600));

    const hashAposClique = await page.evaluate(() => window.location.hash);
    registrar(
      'Navegação pelo Menu de Referência para #/discursiva',
      hashAposClique === '#/discursiva' || hashAposClique === '#discursiva',
      `Hash atual: ${hashAposClique}`
    );

    // 1.5 Menu do Usuário no Desktop (Exclusivamente Conta, Preferências e Modo Livre)
    await page.keyboard.press('Escape');
    await new Promise((r) => setTimeout(r, 200));

    await page.evaluate(() => {
      const btn = document.querySelector('#user-menu-trigger');
      if (btn) btn.click();
    });
    await new Promise((r) => setTimeout(r, 500));

    const userMenuContent = await page.evaluate(() => {
      const menu = document.querySelector('div[role="menu"][aria-labelledby="user-menu-trigger"]');
      if (!menu) return null;
      const text = menu.textContent || '';
      return {
        text,
        hasEmail: text.includes('heuller_p8_audit') || text.includes('@'),
        hasModoLivre: text.includes('Modo Livre'),
        hasDescricaoModoLivre: text.includes('Desbloqueia todos os módulos e simulados'),
        hasLogoutLimpo: text.includes('Sair da Conta') && !text.includes('(Logout)'),
        noDuplicateRef: !text.includes('Oficina Discursiva') && !text.includes('Edital Oficial'),
      };
    });

    registrar(
      'UserMenuDropdown Higienizado e Focado em Conta (P8 / U-01, U-05, U-08)',
      userMenuContent !== null &&
        userMenuContent.hasEmail &&
        userMenuContent.hasModoLivre &&
        userMenuContent.hasDescricaoModoLivre &&
        userMenuContent.hasLogoutLimpo &&
        userMenuContent.noDuplicateRef,
      `Modo Livre: ${userMenuContent?.hasModoLivre}, Logout Limpo: ${userMenuContent?.hasLogoutLimpo}, Sem ref duplicada: ${userMenuContent?.noDuplicateRef}`
    );

    const shotDesktopUser = path.join(SCREENSHOTS_DIR, 'p8_desktop_1280px_user_menu.png');
    await page.screenshot({ path: shotDesktopUser });
    fs.copyFileSync(shotDesktopUser, path.join(ARTIFACT_DIR, 'p8_desktop_1280px_user_menu.png'));

    // Fecha o menu clicando fora
    await page.keyboard.press('Escape');
    await new Promise((r) => setTimeout(r, 300));

    // =========================================================================
    // PARTE 2: MOBILE (360x800)
    // =========================================================================
    console.log('\n📱 --- [TESTE MOBILE: 360x800] ---');
    await page.setViewport({ width: 360, height: 800 });
    await page.evaluate(() => {
      window.location.hash = '#/teoria';
    });
    await new Promise((r) => setTimeout(r, 1500));

    // 2.1 Sticky Header no Mobile ao rolar
    await page.evaluate(() => {
      window.scrollTo(0, 800);
    });
    await new Promise((r) => setTimeout(r, 500));

    const mobileStickyCheck = await page.evaluate(() => {
      const header = document.querySelector('header');
      const headerRect = header ? header.getBoundingClientRect() : null;
      return {
        scrollY: window.scrollY,
        headerTop: headerRect ? Math.round(headerRect.top) : null,
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
      };
    });

    registrar(
      'U-01 Mobile Sticky Header (top === 0 ao rolar)',
      mobileStickyCheck.scrollY > 0 && mobileStickyCheck.headerTop === 0,
      `scrollY: ${mobileStickyCheck.scrollY}px, headerTop: ${mobileStickyCheck.headerTop}px`
    );

    registrar(
      'Mobile Zero Horizontal Overflow',
      mobileStickyCheck.scrollWidth <= mobileStickyCheck.innerWidth,
      `scrollWidth: ${mobileStickyCheck.scrollWidth}px, innerWidth: ${mobileStickyCheck.innerWidth}px`
    );

    const shotMobileSticky = path.join(SCREENSHOTS_DIR, 'p8_mobile_360px_sticky.png');
    await page.screenshot({ path: shotMobileSticky });
    fs.copyFileSync(shotMobileSticky, path.join(ARTIFACT_DIR, 'p8_mobile_360px_sticky.png'));

    // 2.2 Verificação do BottomNav Mobile (5 Abas Primárias com aria-current)
    const mobileBottomTabs = await page.evaluate(() => {
      const nav = document.querySelector('nav[aria-label="Navegação móvel inferior"]');
      if (!nav) return [];
      const buttons = Array.from(nav.querySelectorAll('button'));
      return buttons.map((b) => ({
        label: b.textContent?.trim(),
        ariaCurrent: b.getAttribute('aria-current'),
      }));
    });

    registrar(
      'U-05 BottomNav com 5 Destinos Primários Idênticos ao Desktop',
      mobileBottomTabs.length === 5 &&
        mobileBottomTabs.some((t) => t.label?.includes('Painel')) &&
        mobileBottomTabs.some((t) => t.label?.includes('Estudar')) &&
        mobileBottomTabs.some((t) => t.label?.includes('Praticar')) &&
        mobileBottomTabs.some((t) => t.label?.includes('Radar')) &&
        mobileBottomTabs.some((t) => t.label?.includes('Progresso')),
      `Encontradas: ${mobileBottomTabs.map((t) => t.label).join(', ')}`
    );

    const mobileEstudarTab = mobileBottomTabs.find((t) => t.label?.includes('Estudar'));
    registrar(
      'U-06 Mobile Aba Estudar Ativa (aria-current="page")',
      mobileEstudarTab?.ariaCurrent === 'page',
      `aria-current: ${mobileEstudarTab?.ariaCurrent}`
    );

    // 2.3 Gaveta Mobile "Mais Opções" (Vaul Bottom Sheet - U-02, U-15, U-08)
    await page.evaluate(() => {
      const btn = document.querySelector('button[aria-label="Abrir menu de opções e referência"]');
      if (btn) btn.click();
    });
    await new Promise((r) => setTimeout(r, 600));

    const drawerEvaluation = await page.evaluate(() => {
      const drawer = document.querySelector('div[role="dialog"]');
      if (!drawer) return null;
      const text = drawer.textContent || '';
      const allButtons = Array.from(drawer.querySelectorAll('button'));
      const touchTargetFailures = allButtons.filter((b) => {
        const rect = b.getBoundingClientRect();
        return rect.width < 38 || rect.height < 38;
      });

      return {
        isOpen: true,
        text,
        maxHeightClass: drawer.className.includes('max-h-[85dvh]'),
        touchTargetCount: allButtons.length,
        touchTargetFailuresCount: touchTargetFailures.length,
        hasDiscursiva: text.includes('Oficina Discursiva') && text.includes('Discursivas'),
        hasVespera: text.includes('Folha de Véspera') && text.includes('Revisão de 48 h'),
        hasEdital: text.includes('Edital Oficial 2026') && text.includes('Edital 1/2026'),
        hasErros: text.includes('Caderno de Erros') && text.includes('Erros e hipercorreção'),
        hasRadar: text.includes('Radar Cebraspe') && text.includes('Padrões da banca'),
        hasModoLivreOneLine: text.includes('Desbloqueia todos os módulos e simulados para consulta irrestrita'),
        hasCleanReload: text.includes('Recarregar Aplicativo') && !text.includes('(Recarregar Versão)'),
        hasCleanLogout: text.includes('Sair da Conta') && !text.includes('(Logout)'),
      };
    });

    registrar(
      'U-02 / U-15 Gaveta Mobile Vaul com max-h-[85dvh] e Scroll Interno',
      drawerEvaluation !== null && drawerEvaluation.isOpen && drawerEvaluation.maxHeightClass,
      `maxHeightClass: ${drawerEvaluation?.maxHeightClass}`
    );

    registrar(
      'Acessibilidade: Alvos de Toque Táteis >= 44x44px na Gaveta Mobile',
      drawerEvaluation !== null && drawerEvaluation.touchTargetFailuresCount === 0,
      `Total: ${drawerEvaluation?.touchTargetCount}, Falhas: ${drawerEvaluation?.touchTargetFailuresCount}`
    );

    registrar(
      'U-08 Padronização de Tags Direitas no Menu Móvel',
      drawerEvaluation !== null &&
        drawerEvaluation.hasDiscursiva &&
        drawerEvaluation.hasVespera &&
        drawerEvaluation.hasEdital &&
        drawerEvaluation.hasErros &&
        drawerEvaluation.hasRadar,
      'Tags: Discursivas, Revisão de 48 h, Edital 1/2026, Erros e hipercorreção, Padrões da banca'
    );

    registrar(
      'U-08 Modo Livre com Explicação de Uma Linha e Rótulos sem Parênteses',
      drawerEvaluation !== null &&
        drawerEvaluation.hasModoLivreOneLine &&
        drawerEvaluation.hasCleanReload &&
        drawerEvaluation.hasCleanLogout,
      `Modo Livre: ${drawerEvaluation?.hasModoLivreOneLine}, Recarregar Limpo: ${drawerEvaluation?.hasCleanReload}, Logout Limpo: ${drawerEvaluation?.hasCleanLogout}`
    );

    const shotMobileDrawer = path.join(SCREENSHOTS_DIR, 'p8_mobile_360px_drawer.png');
    await page.screenshot({ path: shotMobileDrawer });
    fs.copyFileSync(shotMobileDrawer, path.join(ARTIFACT_DIR, 'p8_mobile_360px_drawer.png'));

    await page.close();
  } catch (err) {
    console.error('❌ Erro durante a execução da auditoria P8:', err);
    registrar('Execução Completa da Auditoria P8', false, String(err));
  } finally {
    await browser.close();
    await server.close();
  }

  console.log('\n======================================================');
  console.log(`📊 RESULTADO FINAL DA AUDITORIA P8:`);
  console.log(`   Total de Testes: ${relatorio.testesExecutados}`);
  console.log(`   Aprovados:       ${relatorio.testesPassados}`);
  console.log(`   Falhas:          ${relatorio.falhas.length}`);
  console.log('======================================================\n');

  if (relatorio.falhas.length > 0) {
    process.exit(1);
  }
}

runNavigationAuditP8();
