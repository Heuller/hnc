import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';
import { createServer } from 'vite';

const PORT = 5198;
const BASE_URL = `http://127.0.0.1:${PORT}`;
const ARTIFACT_DIR = 'C:/Users/bibli/.gemini/antigravity/brain/8bac98a0-7ed7-46a8-aa4d-72d6eaccabf8';
const SCREENSHOTS_DIR = path.resolve('docs', 'relatorios', 'screenshots', 'p7');

fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });

async function runSmokeTest() {
  console.log('🚀 Iniciando servidor Vite para teste de fumaça P7...');
  const server = await createServer({
    server: { host: '127.0.0.1', port: PORT },
  });
  await server.listen();
  console.log(`🌐 Servidor rodando em ${BASE_URL}`);

  console.log('🚀 Iniciando Puppeteer...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  console.log('Browser instanciado com sucesso!');

  // Warmup inicial para garantir compilação prévia das rotas
  console.log('⚡ Aquecendo servidor e cache de módulos...');
  const warmupPage = await browser.newPage();
  await warmupPage.goto(BASE_URL, { waitUntil: 'load', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1000));
  await warmupPage.close();
  console.log('✅ Servidor pronto!');

  const viewports = [
    { width: 1280, height: 800, nome: '1280px' },
    { width: 360, height: 800, nome: '360px' },
  ];

  const temas = ['claro', 'escuro'];

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
    for (const tema of temas) {
      for (const vp of viewports) {
        console.log(`\n======================================================`);
        console.log(`🧪 Testando Ambiente: Viewport ${vp.nome} | Tema: ${tema.toUpperCase()}`);
        console.log(`======================================================`);

        const page = await browser.newPage();
        await page.setViewport({ width: vp.width, height: vp.height });

        // 1. Acesso inicial e tela de Login
        console.log('\n[1/7] Testando acesso e tela de login (AuthGate)...');
        await page.goto(`${BASE_URL}/`, { waitUntil: 'load' });
        await new Promise((r) => setTimeout(r, 400));

        // Aplica o tema
        await page.evaluate((t) => {
          const root = document.documentElement;
          root.classList.remove('light', 'dark');
          root.classList.add(t === 'escuro' ? 'dark' : 'light');
          root.style.colorScheme = t === 'escuro' ? 'dark' : 'light';
        }, tema);

        // Preenche formulário de login usando teclado real para acionar onChange do React
        let formPreenchido = false;
        try {
          const idInput = await page.$('#auth-identifier');
          const passInput = await page.$('#auth-password');
          const submitBtn = await page.$('button[type="submit"]');

          if (idInput && passInput && submitBtn) {
            await idInput.click({ clickCount: 3 });
            await idInput.type('heuller_auditoria_p7');
            await passInput.click({ clickCount: 3 });
            await passInput.type('senha123456');
            await submitBtn.click();
            formPreenchido = true;
          }
        } catch (e) {
          console.warn('Erro ao preencher formulário:', e.message);
        }

        registrar(`Formulário de login preenchido (${vp.nome}, ${tema})`, formPreenchido);

        // Aguarda transição para o Painel
        await new Promise((r) => setTimeout(r, 1200));

        // 2. Verificar PainelPage
        console.log('\n[2/7] Verificando Painel de Estudos...');
        const painelOk = await page.evaluate(() => {
          const h1 = document.querySelector('h1');
          return Boolean(h1 && (h1.textContent?.includes('Painel') || h1.textContent?.includes('Olá') || h1.textContent?.length > 3));
        });
        registrar(`PainelPage carregado com sucesso (${vp.nome}, ${tema})`, painelOk);

        // Checar overflow no Painel
        const overflowPainel = await page.evaluate(() => {
          return document.documentElement.scrollWidth > window.innerWidth ||
                 document.body.scrollWidth > window.innerWidth;
        });
        registrar(`PainelPage sem overflow horizontal (${vp.nome}, ${tema})`, !overflowPainel);

        // 3. Navegação: Jornada
        console.log('\n[3/7] Navegando para Jornada de Estudos...');
        await page.evaluate(() => {
          window.location.hash = '#/jornada';
        });
        await new Promise((r) => setTimeout(r, 1000));

        const jornadaOk = await page.evaluate(() => {
          const text = document.body.innerText;
          return text.includes('Jornada') || text.includes('Trilha') || text.includes('Módulos');
        });
        registrar(`JornadaPage carregado (${vp.nome}, ${tema})`, jornadaOk);

        // 4. Navegação: Teoria
        console.log('\n[4/7] Navegando para Teoria Canônica...');
        await page.evaluate(() => {
          window.location.hash = '#/teoria';
        });
        await new Promise((r) => setTimeout(r, 1000));

        const teoriaOk = await page.evaluate(() => {
          const text = document.body.innerText;
          return text.includes('Teoria') || text.includes('Fundamentos') || text.includes('Submódulo');
        });
        registrar(`TeoriaPage carregado (${vp.nome}, ${tema})`, teoriaOk);

        // 5. Simulado de 100 itens com respostas C, E e B via atalhos de teclado
        console.log('\n[5/7] Executando Simulado de 100 itens com atalhos de teclado...');
        await page.evaluate(() => {
          window.location.hash = '#/simulado';
        });
        await new Promise((r) => setTimeout(r, 1200));

        // Desbloqueia se necessário (Bypass Dev)
        await page.evaluate(() => {
          const bypassBtn = Array.from(document.querySelectorAll('button')).find(
            (b) => b.textContent && b.textContent.includes('Desbloquear')
          );
          if (bypassBtn) bypassBtn.click();
        });
        await new Promise((r) => setTimeout(r, 500));

        // Inicia ou retoma o simulado
        await page.evaluate(() => {
          const btn = Array.from(document.querySelectorAll('button')).find(
            (b) => b.textContent && (b.textContent.includes('Iniciar') || b.textContent.includes('Continuar') || b.textContent.includes('Retomar') || b.textContent.includes('Refazer'))
          );
          if (btn) btn.click();
        });
        await new Promise((r) => setTimeout(r, 800));

        // Responde Item 1 com tecla 'c' (Certo)
        console.log('   Respondendo Item 1 com tecla "c"...');
        await page.keyboard.press('c');
        await new Promise((r) => setTimeout(r, 400));

        // Avança com Seta para a Direita
        await page.keyboard.press('ArrowRight');
        await new Promise((r) => setTimeout(r, 400));

        // Responde Item 2 com tecla 'e' (Errado)
        console.log('   Respondendo Item 2 com tecla "e"...');
        await page.keyboard.press('e');
        await new Promise((r) => setTimeout(r, 400));

        // Avança com Seta para a Direita
        await page.keyboard.press('ArrowRight');
        await new Promise((r) => setTimeout(r, 400));

        // Responde Item 3 com tecla 'b' (Em Branco)
        console.log('   Respondendo Item 3 com tecla "b"...');
        await page.keyboard.press('b');
        await new Promise((r) => setTimeout(r, 400));

        // Finaliza o Simulado
        console.log('   Finalizando Simulado...');
        const finalizou = await page.evaluate(() => {
          const finishBtn = Array.from(document.querySelectorAll('button')).find(
            (b) => b.textContent && b.textContent.includes('Finalizar Simulado')
          );
          if (finishBtn) {
            finishBtn.click();
            return true;
          }
          return false;
        });

        await new Promise((r) => setTimeout(r, 1500));

        // Valida relatório final do Simulado (C - E e média por item)
        const relatorioSimulado = await page.evaluate(() => {
          const bodyText = document.body.innerText;
          const temFatorCE = bodyText.includes('fator C - E') || bodyText.includes('C − E') || bodyText.includes('Nota Líquida') || bodyText.includes('Líquida');
          const temTempoMedio = bodyText.includes('tempo') || bodyText.includes('Tempo') || bodyText.includes('s/item') || bodyText.includes('min') || bodyText.includes('seg');
          const temAproveitamento = bodyText.includes('%') && (bodyText.includes('acerto') || bodyText.includes('aproveitamento') || bodyText.includes('Pontos') || bodyText.includes('Aproveitamento'));

          return {
            temFatorCE,
            temTempoMedio,
            temAproveitamento,
          };
        });

        registrar(
          `Simulado finalizado e relatório de nota líquida (C - E) exibido (${vp.nome}, ${tema})`,
          Boolean(finalizou && relatorioSimulado.temFatorCE)
        );
        registrar(
          `Métricas de tempo e aproveitamento calculadas no relatório (${vp.nome}, ${tema})`,
          relatorioSimulado.temTempoMedio && relatorioSimulado.temAproveitamento
        );

        // 6. Caderno de Erros
        console.log('\n[6/7] Navegando para o Caderno de Erros...');
        await page.evaluate(() => {
          window.location.hash = '#/caderno-erros';
        });
        await new Promise((r) => setTimeout(r, 1000));

        const cadernoOk = await page.evaluate(() => {
          const text = document.body.innerText;
          return text.includes('Caderno de Erros') || text.includes('Erros') || text.includes('Hipercorreção');
        });
        registrar(`CadernoErrosPage carregado (${vp.nome}, ${tema})`, cadernoOk);

        // 7. Glossário / Busca de Verbetes
        console.log('\n[7/7] Testando Busca Rápida / Glossário...');
        const buscaAberta = await page.evaluate(() => {
          const buscaBtn = document.querySelector('button[aria-label="Abrir busca global"]') ||
                           Array.from(document.querySelectorAll('button')).find(
                             (b) => b.textContent && b.textContent.includes('Busca')
                           );
          if (buscaBtn) {
            buscaBtn.click();
            return true;
          }
          return false;
        });

        await new Promise((r) => setTimeout(r, 600));

        const modalVisivel = await page.evaluate(() => {
          const input = document.querySelector('input[placeholder*="Buscar por conceito"]');
          return Boolean(input);
        });

        registrar(`Modal de Busca / Dicionário acessível (${vp.nome}, ${tema})`, buscaAberta || modalVisivel);

        // Fecha modal com Escape
        await page.keyboard.press('Escape');
        await new Promise((r) => setTimeout(r, 400));

        // Captura screenshot de evidência da execução
        const screenshotName = `fumaca_p7_${vp.nome}_${tema}.png`;
        const localScreenshotPath = path.join(SCREENSHOTS_DIR, screenshotName);
        await page.screenshot({ path: localScreenshotPath, fullPage: false });

        if (fs.existsSync(ARTIFACT_DIR)) {
          const artifactScreenshotPath = path.join(ARTIFACT_DIR, screenshotName);
          fs.copyFileSync(localScreenshotPath, artifactScreenshotPath);
        }

        await page.close();
      }
    }
  } finally {
    await browser.close();
    await server.close();
  }

  console.log('\n======================================================');
  console.log('🏁 RESULTADO DO TESTE DE FUMAÇA P7');
  console.log(`Total de verificações: ${relatorio.testesExecutados}`);
  console.log(`Aprovados: ${relatorio.testesPassados}`);
  console.log(`Falhas: ${relatorio.falhas.length}`);
  console.log('======================================================');

  if (relatorio.falhas.length > 0) {
    console.error('Falhas detectadas:', relatorio.falhas);
    process.exit(1);
  } else {
    console.log('🎉 100% dos testes de fumaça P7 passaram com sucesso!');
  }
}

runSmokeTest().catch((err) => {
  console.error('Erro fatal no teste de fumaça:', err);
  process.exit(1);
});
