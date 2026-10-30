/** Verificação do leitor no Vite local: navegação, mobile, prática e persistência. */
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';

const base = process.env.HNC_READER_BASE_URL || 'http://127.0.0.1:5173';
assert(['localhost', '127.0.0.1'].includes(new URL(base).hostname), 'Este roteiro usa módulos do Vite local.');
const saida = process.env.HNC_READER_OUTPUT || '/tmp/hnc-leitor';
await fs.mkdir(saida, { recursive: true });
const browser = await puppeteer.launch({
  ...(process.env.CHROME_BIN ? { executablePath: process.env.CHROME_BIN } : {}),
  headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage'],
});
const erros = [];
try {
  const page = await browser.newPage();
  page.on('pageerror', erro => erros.push(erro.message));
  await page.setViewport({ width: 1440, height: 1000 });
  await page.goto(base + '/#/teoria', { waitUntil: 'networkidle0' });
  async function entrar() {
    await page.waitForSelector('#auth-identifier');
    await page.type('#auth-identifier', 'auditoria-local');
    await page.type('#auth-password', 'validacao-local');
    await page.click('button[type="submit"]');
    await page.waitForSelector('nav[aria-label="Blocos desta aula"]');
  }
  await entrar();
  const aulas = await page.evaluate(async () => {
    const { ALL_COURSE_MODULES } = await import('/src/content/registry.ts');
    return ALL_COURSE_MODULES.flatMap(m => m.modulosFilhos).map(s => ({
      id: s.id, numero: s.numero, blocos: s.unidadesAprendizagem.length,
      cps: s.checkpoints.length, primeiroBloco: s.unidadesAprendizagem[0].id,
    }));
  });
  assert.equal(aulas.length, 75);
  async function selecionar(aula) {
    await page.evaluate(async ({ id, numero }) => {
      const { useNavigationStore } = await import('/src/store/useNavigationStore.ts');
      const { useProgressStore } = await import('/src/store/useProgressStore.ts');
      useProgressStore.getState().setModoTeoria(id, 'canonica');
      useNavigationStore.getState().setSelectedSubmodule(numero);
    }, aula);
    try {
      await page.waitForSelector('#' + aula.primeiroBloco);
    } catch (erro) {
      console.error('Falha na aula', aula.numero, erros);
      console.error((await page.evaluate(() => document.body.innerText)).slice(-1800));
      await page.screenshot({ path: path.join(saida, 'falha.png') });
      throw erro;
    }
  }
  const resultados = [];
  for (const viewport of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }]) {
    await page.setViewport(viewport);
    for (const aula of aulas) {
      await selecionar(aula);
      const medida = await page.evaluate(id => ({
        largura: document.documentElement.clientWidth,
        conteudo: document.documentElement.scrollWidth,
        blocos: document.querySelectorAll(`section[id^="${id}-bloco-"]`).length,
        cps: document.querySelectorAll('article[aria-labelledby^="item-titulo-"]').length,
        fontes: document.querySelectorAll('section[aria-label="Fontes desta aula"] li').length,
      }), aula.id);
      assert.equal(medida.blocos, aula.blocos, aula.id + ': blocos');
      assert.equal(medida.cps, aula.cps, aula.id + ': distribuição de checkpoints');
      assert(medida.fontes > 0, aula.id + ': fontes');
      assert(medida.conteudo <= medida.largura + 1, aula.id + ': overflow');
      resultados.push({ aula: aula.numero, viewport: viewport.width, ...medida });
    }
  }
  const aula = aulas.find(a => a.numero === '10.1');
  await selecionar(aula);
  const primeiro = '#' + aula.primeiroBloco;
  const card = `${primeiro} article[aria-labelledby^="item-titulo-"]`;
  const hash = await page.evaluate(() => location.hash);
  await page.click(`nav[aria-label="Blocos desta aula"] a[href="${primeiro}"]`);
  assert.equal(await page.evaluate(() => location.hash), hash, 'Âncora não deve alterar rota.');
  assert.equal(await page.evaluate(() => document.activeElement.id), aula.primeiroBloco);
  await page.click(`${card} button[aria-label^="Julgar assertiva como Errado"]`);
  await page.waitForFunction(sel => document.querySelector(sel).innerText.includes('Gabarito:'), {}, card);
  assert.match(await page.$eval(card, el => el.innerText), /Fonte:|Fundamentação/);
  // Seleção pelo texto evita confundir o botão de confiança com o de prática.
  await page.evaluate(sel => [...document.querySelectorAll(`${sel} button`)].find(b => b.textContent.trim() === 'Praticar').click(), card);
  await page.waitForFunction(sel => !document.querySelector(sel).innerText.includes('Gabarito:'), {}, card);
  await page.focus(`${card} button[aria-label^="Julgar assertiva como Certo"]`);
  await page.keyboard.press('c');
  await page.waitForFunction(sel => document.querySelector(sel).innerText.includes('Tentativa 2'), {}, card);
  assert.match(await page.$eval(card, el => el.innerText), /1ª tentativa:.*Erro/);
  await page.click(`${primeiro} > button`);
  assert.equal(await page.$eval(`${primeiro} > button`, b => b.disabled), true);
  await page.click('[data-testid="btn-modo-didatica"]');
  await page.waitForFunction(id => !document.getElementById(id), {}, aula.primeiroBloco);
  await page.click('[data-testid="btn-modo-canonica"]');
  await page.waitForSelector(primeiro);
  assert.equal(await page.$eval(`${primeiro} > button`, b => b.disabled), true);
  for (const width of [1440, 390]) {
    await page.setViewport({ width, height: 1000 });
    await page.$eval(primeiro, el => el.scrollIntoView());
    await page.screenshot({ path: path.join(saida, `leitor-${width}.png`) });
  }
  await page.emulateMediaType('print');
  assert.equal(await page.$eval(card, el => !!el.offsetParent && getComputedStyle(el.parentElement).display !== 'none'), false, 'Checkpoints devem ficar fora da impressão.');
  await page.emulateMediaType('screen');
  await page.reload({ waitUntil: 'networkidle0' });
  await entrar();
  await page.waitForSelector(primeiro);
  assert.equal(await page.$eval(`${primeiro} > button`, b => b.disabled), true, 'Leitura deve persistir.');
  await page.waitForFunction(sel => document.querySelector(sel).innerText.includes('Gabarito:'), {}, card);
  assert.equal(erros.length, 0, erros.join('\n'));
  await fs.writeFile(path.join(saida, 'resultado.json'), JSON.stringify({
    data: new Date().toISOString(), ambiente: 'Vite local, modo local de autenticação',
    aulas: aulas.length, verificacoesDeLayout: resultados.length,
    fluxos: ['navegação sem alterar rota', 'erro e fundamentação', 'nova tentativa por teclado', 'histórico da primeira tentativa', 'leitura por bloco', 'alternância de revisão', 'impressão', 'persistência após recarga'],
    erros, resultados,
  }, null, 2));
  console.log(`Leitor: ${aulas.length} aulas, ${resultados.length} verificações de layout e fluxos interativos aprovados.`);
} finally {
  await browser.close();
}
