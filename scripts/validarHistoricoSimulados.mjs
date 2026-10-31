/** Evidência local: versão antiga, arquivamento sem recorreção, F5 e reteste delimitado. */
import puppeteer from 'puppeteer';
import assert from 'node:assert/strict';
const base = process.env.HNC_SIMULADOS_BASE_URL || 'http://127.0.0.1:5173';
assert(['127.0.0.1', 'localhost'].includes(new URL(base).hostname));
const browser = await puppeteer.launch({ executablePath: process.env.CHROME_BIN || '/usr/bin/chromium', headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
try {
  const page = await browser.newPage(), errors = [], resultados = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  await page.goto(base + '/#/simulado?id=m13-portugues', { waitUntil: 'networkidle0' });
  async function autenticarLocalSeNecessario() {
    await page.waitForFunction(() => document.querySelector('#auth-identifier') || document.body.innerText.includes('Finalizar Simulado'));
    if (await page.$('#auth-identifier')) {
      await page.type('#auth-identifier', 'auditoria-local');
      await page.type('#auth-password', 'validacao-local');
      await page.click('button[type="submit"]');
    }
    await page.waitForFunction(() => document.body.innerText.includes('Finalizar Simulado'));
  }
  await autenticarLocalSeNecessario();
  for (const width of [1440, 390]) {
    await page.setViewport({ width, height: 1000 });
    await page.evaluate(async () => {
      const {useProgressStore} = await import('/src/store/useProgressStore.ts');
      const {simuladoSessionService} = await import('/src/services/simuladoSessionService.ts');
      const sessao = { simuladoId: 'm13-portugues', respostas: { 'm13-q-13': { questionId: 'm13-q-13', resposta: 'C', acertou: true, timestamp: 100 } }, currentIndex: 12, tempoGastoSegundos: 91, emAndamento: true, ultimoAcessoTimestamp: Date.now() };
      simuladoSessionService.salvarSessaoLocal(sessao.simuladoId, sessao);
      useProgressStore.setState({ sessoesSimulados: { [sessao.simuladoId]: sessao } });
    });
    await page.waitForSelector('section[aria-label="Tentativa de uma versão anterior"]');
    assert.equal(await page.$('section[aria-label="Estudo reverso do item"]'), null);
    await page.locator('button::-p-text(Arquivar tentativa e iniciar versão atual)').click();
    await page.waitForFunction(() => !document.querySelector('section[aria-label="Tentativa de uma versão anterior"]'));
    const preservada = await page.evaluate(async () => {
      const {useProgressStore} = await import('/src/store/useProgressStore.ts');
      const s = useProgressStore.getState().obterSessaoSimulado('m13-portugues');
      return { antiga: s.tentativasArquivadas[0].respostas['m13-q-13'], tempo: s.tentativasArquivadas[0].tempoGastoSegundos, novas: Object.keys(s.respostas).length };
    });
    assert.equal(preservada.antiga.acertou, true);
    assert.equal(preservada.tempo, 91);
    assert.equal(preservada.novas, 0);
    await page.evaluate(async () => {
      const {useProgressStore} = await import('/src/store/useProgressStore.ts');
      const {useNavigationStore} = await import('/src/store/useNavigationStore.ts');
      useProgressStore.getState().reiniciarSimulado('m13-portugues');
      useProgressStore.getState().iniciarOuRetomarSimulado('m13-portugues', ['m13-q-13', 'm13-q-1']);
      useNavigationStore.getState().navigateToQuestao('m13-portugues', 'm13-q-13');
    });
    await page.waitForFunction(() => document.body.innerText.includes('pronome demonstrativo'));
    assert(await page.evaluate(() => document.body.innerText.includes('Malgrado sejam elevadas')));
    await page.locator('button::-p-text(CERTO)').click();
    await page.reload({ waitUntil: 'networkidle0' });
    await autenticarLocalSeNecessario();
    const retomada = await page.evaluate(async () => {
      const {useProgressStore} = await import('/src/store/useProgressStore.ts');
      const s = useProgressStore.getState().obterSessaoSimulado('m13-portugues');
      return { selecionadas: s.itensSelecionados, resposta: s.respostas['m13-q-13'] };
    });
    assert.equal(retomada.selecionadas.length, 2);
    assert.equal(retomada.resposta.gabaritoNaResposta, 'E');
    assert(retomada.resposta.versaoQuestao);
    await page.locator('button::-p-text(Finalizar Simulado)').click();
    await page.waitForFunction(() => !document.querySelector('button') || !Array.from(document.querySelectorAll('button')).some(b => b.innerText === 'Finalizar Simulado'));
    await page.keyboard.press('c');
    await new Promise(resolve => setTimeout(resolve, 5500));
    const final = await page.evaluate(async () => {
      const {useProgressStore} = await import('/src/store/useProgressStore.ts');
      const state = useProgressStore.getState(), s = state.obterSessaoSimulado('m13-portugues');
      return { resultado: state.historicoSimulados[0], tempo: s.tempoGastoSegundos, respostas: Object.keys(s.respostas).length, overflow: document.querySelector('main').scrollWidth > document.querySelector('main').clientWidth + 1 };
    });
    assert.equal(final.resultado.errados, 1);
    assert.equal(final.resultado.emBranco, 1);
    assert.equal(final.resultado.notaLiquida, -1);
    assert.equal(final.tempo, 0);
    assert.equal(final.respostas, 0);
    assert.equal(final.overflow, false);
    await page.screenshot({ path: `/tmp/hnc-historico-${width}.png`, fullPage: true });
    resultados.push({ width, arquivamento: true, f5: true, escopoReteste: true, cronometroParado: true, atalhoNaoRespondeRelatorio: true });
    if (width === 1440) { await page.reload({ waitUntil: 'networkidle0' }); await autenticarLocalSeNecessario(); }
  }
  assert.deepEqual(errors, []);
  console.log(JSON.stringify({resultados, errors}));
} finally { await browser.close(); }
