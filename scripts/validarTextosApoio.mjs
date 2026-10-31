/** Evidência local: contexto, parágrafos, idioma e feedback em telas pequenas/grandes. */
import puppeteer from 'puppeteer';
import assert from 'node:assert/strict';
const base=process.env.HNC_SIMULADOS_BASE_URL||'http://127.0.0.1:5173';
assert(['127.0.0.1','localhost'].includes(new URL(base).hostname),'Somente Vite local.');
const browser=await puppeteer.launch({executablePath:process.env.CHROME_BIN||'/usr/bin/chromium',headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
try {
 const page=await browser.newPage(),errors=[],resultados=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base+'/#/simulado?id=m13-portugues',{waitUntil:'networkidle0'});
 await page.waitForSelector('#auth-identifier');
 await page.type('#auth-identifier','auditoria-local');
 await page.type('#auth-password','validacao-local');
 await page.click('button[type="submit"]');
 await page.waitForFunction(()=>document.body.innerText.includes('Finalizar Simulado'));
 async function selecionar(simulado,id) {
  await page.evaluate(async ({simulado,id})=>{
   const {useProgressStore}=await import('/src/store/useProgressStore.ts');
   const {useNavigationStore}=await import('/src/store/useNavigationStore.ts');
   useProgressStore.getState().reiniciarSimulado(simulado);
   useProgressStore.getState().iniciarOuRetomarSimulado(simulado);
   useNavigationStore.getState().navigateToQuestao(simulado,id);
  },{simulado,id});
 }
 for(const width of [1440,390]) {
  await page.setViewport({width,height:1000});
  await selecionar('m13-portugues','m13-q-13');
  await page.waitForFunction(()=>document.body.innerText.includes('pronome demonstrativo'));
  assert(await page.evaluate(()=>Array.from(document.querySelectorAll('article')).some(e=>e.innerText.includes('Malgrado sejam elevadas')&&e.innerText.includes('por ele eleitos'))),'Texto II deve estar visível antes da resposta.');
  for(const button of await page.$$('button'))if((await button.evaluate(e=>e.innerText)).includes('EM BRANCO')){await button.click();break;}
  await page.waitForSelector('section[aria-label="Estudo reverso do item"]');
  assert(await page.evaluate(()=>document.querySelector('section[aria-label="Estudo reverso do item"]').innerText.includes('pronome pessoal')));
  await selecionar('m12-ingles','m12-q-3');
  await page.waitForFunction(()=>document.body.innerText.includes('antigen test measures blood levels'));
  assert(await page.evaluate(()=>Array.from(document.querySelectorAll('article [lang="en"]')).some(e=>e.innerText.includes('To screen or not to screen?')&&getComputedStyle(e).whiteSpace==='pre-line')),'Texto de Inglês deve preservar parágrafos e idioma.');
  assert(await page.evaluate(()=>{const m=document.querySelector('main');return m.scrollWidth<=m.clientWidth+1;}),'Sem overflow horizontal.');
  await page.screenshot({path:`/tmp/hnc-textos-apoio-${width}.png`,fullPage:true});
  resultados.push({width,textoAntesDaResposta:true,feedbackEmBranco:true,paragrafos:true,idioma:true,semOverflow:true});
 }
 assert.deepEqual(errors,[]);
 console.log(JSON.stringify({resultados,errors}));
} finally {await browser.close();}
