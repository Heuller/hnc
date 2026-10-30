/** Fluxos de estudo reverso e sigilo do modo prova, com autenticação DEV local. */
import puppeteer from 'puppeteer';
import assert from 'node:assert/strict';

const base = process.env.HNC_SIMULADOS_BASE_URL || 'http://127.0.0.1:5173';
assert(['127.0.0.1', 'localhost'].includes(new URL(base).hostname), 'Validação restrita ao Vite local.');
const browser = await puppeteer.launch({
  executablePath: process.env.CHROME_BIN || '/usr/bin/chromium',
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});
const errors = [];
const results = [];
try {
  const page = await browser.newPage();
  page.on('pageerror', e => errors.push(e.message));
  await page.goto(base + '/#/simulado?id=mini-modulo-orgaos', { waitUntil: 'networkidle0' });
  await page.waitForSelector('#auth-identifier');
  await page.type('#auth-identifier', 'auditoria-local');
  await page.type('#auth-password', 'validacao-local');
  await page.click('button[type="submit"]');
  await page.waitForFunction(() => document.body.innerText.includes('Finalizar Simulado'));

  async function clickText(texto) {
    for (const button of await page.$$('button')) {
      if ((await button.evaluate(e => e.innerText)).includes(texto)) {
        await button.click();
        return;
      }
    }
    throw Error('Botão não encontrado: ' + texto);
  }

  async function selecionarItem(prova = false) {
    await page.evaluate(async prova => {
      const { useProgressStore } = await import('/src/store/useProgressStore.ts');
      const { useNavigationStore } = await import('/src/store/useNavigationStore.ts');
      useProgressStore.getState().reiniciarSimulado('mini-modulo-orgaos');
      useProgressStore.getState().definirModoProvaSimulado('mini-modulo-orgaos', prova);
      useNavigationStore.getState().setTargetQuestionId('orgaos-q-021');
    }, prova);
    await page.waitForFunction(() => document.body.innerText.includes('foi efetivamente criada em 1866'));
  }

  async function respostasOriginais() {
    return page.evaluate(async () => {
      const { useProgressStore } = await import('/src/store/useProgressStore.ts');
      return JSON.stringify(useProgressStore.getState().sessoesSimulados['mini-modulo-orgaos'].respostas);
    });
  }

  for (const width of [1440, 390]) {
    await page.setViewport({ width, height: 1000 });
    await selecionarItem();
    await clickText('CERTO');
    await page.waitForSelector('section[aria-label="Aplicação da regra"]');
    assert(await page.evaluate(() => document.body.innerText.includes('Por que você acertou')));
    const original = await respostasOriginais();
    await clickText('Tentar outra situação');
    assert(!await page.evaluate(() => document.body.innerText.includes('O histórico institucional trata os pedidos')));
    await clickText('Não sei ainda');
    await page.waitForFunction(() => document.body.innerText.includes('Vamos construir a resposta.'));
    assert(await page.evaluate(() => {
      const main = document.querySelector('main');
      return main.scrollWidth <= main.clientWidth + 1;
    }));
    assert.equal(await respostasOriginais(), original, 'A prática não deve alterar as respostas do simulado.');
    await page.screenshot({ path: `/tmp/hnc-simulados-${width}.png`, fullPage: true });
    results.push({ width, transferencia: true, semOverflow: true });

    await selecionarItem(true);
    await clickText('ERRADO');
    assert.equal(await page.$('section[aria-label="Estudo reverso do item"]'), null);
    assert.equal(await page.$('section[aria-label="Aplicação da regra"]'), null);
    results.push({ width, modoProvaSemFeedback: true });
  }
  assert.deepEqual(errors, []);
  console.log(JSON.stringify({ results, errors }));
} finally {
  await browser.close();
}
