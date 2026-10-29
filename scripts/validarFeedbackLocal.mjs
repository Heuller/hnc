import puppeteer from 'puppeteer';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const out=process.env.HNC_AUDIT_OUTPUT || 'docs/relatorios/validacao-feedback';
await fs.mkdir(out,{recursive:true});
const origin=process.env.HNC_AUDIT_ORIGIN || 'http://127.0.0.1:5175';
if (!['localhost','127.0.0.1'].includes(new URL(origin).hostname)) throw new Error('Este roteiro usa conta sintética e só aceita servidor local de desenvolvimento.');
const browser=await puppeteer.launch({executablePath:process.env.HNC_CHROMIUM_PATH || '/usr/bin/chromium',headless:true,args:['--no-sandbox']});
const resultados=[],erros=[];
try {
 const page=await browser.newPage();page.on('pageerror',e=>erros.push(e.message));
 await page.setViewport({width:390,height:844});await page.goto(origin,{waitUntil:'networkidle2'});
 await page.evaluate(async()=>{const{useAuthStore}=await import(performance.getEntriesByType('resource').find(r=>r.name.includes('/src/store/useAuthStore.ts'))?.name || '/src/store/useAuthStore.ts');const{useProgressStore}=await import(performance.getEntriesByType('resource').find(r=>r.name.includes('/src/store/useProgressStore.ts'))?.name || '/src/store/useProgressStore.ts');useAuthStore.setState({user:{id:'revisao-integral-local',email:'auditoria@example.invalid'},session:null,loading:false});useProgressStore.setState({devBypassSimuladoLock:true});});
 await page.waitForSelector('#main-content h1');
 await new Promise(r=>setTimeout(r,400));
 async function clicar(texto){await page.waitForFunction(t=>[...document.querySelectorAll('button')].some(b=>b.innerText.replace(/\s+/g,' ').trim()===t),{},texto);await page.evaluate(t=>[...document.querySelectorAll('button')].find(b=>b.innerText.replace(/\s+/g,' ').trim()===t).click(),texto);}
 async function teste(nome,fn){try{await fn();resultados.push({nome,status:'aprovado'});}catch(e){resultados.push({nome,status:'falhou',erro:e.message,contexto:await page.evaluate(()=>({titulos:[...document.querySelectorAll('h1')].map(e=>e.textContent),texto:document.querySelector('#main-content')?.innerText.slice(0,1600)}))});}await fs.writeFile(out+(process.env.HNC_SO_RETESTE?'/navegador-extras.json':'/navegador.json'),JSON.stringify({ambiente:'Vite local; interações programáticas; conta sintética; sem validação do deploy',resultados,erros},null,2));}
 const ids=await page.evaluate(async()=>{const{ALL_SIMULADOS_REGISTRY}=await import('/src/content/simuladosRegistry.ts');return ALL_SIMULADOS_REGISTRY.map(s=>({id:s.id,total:s.questoes.length,trecho:s.questoes[0].item.slice(0,100)}));});
 for(const sim of ids){
  if(process.env.HNC_SO_RETESTE)continue;
  await teste('Feedback imediato no caderno '+sim.id,async()=>{
   await page.evaluate(async id=>{const{useNavigationStore}=await import(performance.getEntriesByType('resource').find(r=>r.name.includes('/src/store/useNavigationStore.ts'))?.name || '/src/store/useNavigationStore.ts');useNavigationStore.getState().navigateToSimulado(id);},sim.id);
   await page.waitForFunction(t=>document.querySelector('#main-content')?.textContent?.includes(t),{},sim.trecho);
   await clicar('CERTO C');await page.waitForSelector('[aria-label="Estudo reverso do item"]');
   const t=await page.$eval('[aria-label="Estudo reverso do item"]',el=>el.innerText);
   assert.match(t,/Por que você acertou|Por que seu julgamento está incorreto/);assert(t.toLowerCase().includes('por que o item está'));
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false);
  });
 }
 if(!process.env.HNC_SO_RETESTE) {
  await teste('Mega preserva correção para o final em modo prova',async()=>{
   const mega=ids.find(s=>s.id.includes('mega'));
   await page.evaluate(async id=>{const{useProgressStore}=await import(performance.getEntriesByType('resource').find(r=>r.name.includes('/src/store/useProgressStore.ts'))?.name || '/src/store/useProgressStore.ts');useProgressStore.getState().reiniciarSimulado?.(id);const s=useProgressStore.getState().sessoesSimulados;useProgressStore.setState({sessoesSimulados:{...s,[id]:{...s[id],respostas:{},currentIndex:0}}});},mega.id);
   await page.evaluate(async id=>{const{useNavigationStore}=await import(performance.getEntriesByType('resource').find(r=>r.name.includes('/src/store/useNavigationStore.ts'))?.name || '/src/store/useNavigationStore.ts');useNavigationStore.getState().navigateToSimulado(id);},mega.id);
   await page.waitForFunction(t=>document.querySelector('#main-content')?.textContent?.includes(t),{},mega.trecho);
   await clicar('Prova · correção ao final');
   await clicar('CERTO C');assert.equal(await page.$('[aria-label="Estudo reverso do item"]'),null);
  });
  await teste('Adaptativo mostra fundamento após julgamento no modo estudo',async()=>{
   await page.evaluate(async()=>{const{useNavigationStore}=await import(performance.getEntriesByType('resource').find(r=>r.name.includes('/src/store/useNavigationStore.ts'))?.name || '/src/store/useNavigationStore.ts');useNavigationStore.getState().setActiveView('treinos');});
   await clicar('Gerar Simulado Adaptativo de Fraquezas');
   for(let i=0;i<3;i++) await clicar('Próximo Passo');
   await clicar('Iniciar Simulado Adaptativo');
   await clicar('CERTO');
   await page.waitForSelector('[aria-label="Estudo reverso do item"]');
   await page.click('button[aria-label="Fechar modal de simulado adaptativo"]');
  });
 }
 await teste('Reteste correto permanece visível no caderno até concluir leitura',async()=>{
  const cp=await page.evaluate(async()=>{const{ALL_COURSE_MODULES}=await import('/src/content/registry.ts');const cp=ALL_COURSE_MODULES[0].modulosFilhos[0].checkpoints[0];const{useProgressStore}=await import(performance.getEntriesByType('resource').find(r=>r.name.includes('/src/store/useProgressStore.ts'))?.name || '/src/store/useProgressStore.ts');const{useNavigationStore}=await import(performance.getEntriesByType('resource').find(r=>r.name.includes('/src/store/useNavigationStore.ts'))?.name || '/src/store/useNavigationStore.ts');await useProgressStore.getState().adicionarItemAttempt({itemId:cp.id,submoduloId:'1.1',moduloId:'m1',contexto:'teoria',resposta:cp.gabarito==='C'?'E':'C',gabarito:cp.gabarito});useNavigationStore.getState().setActiveView('caderno-erros');return {id:cp.id,gabarito:cp.gabarito};});
  await page.waitForFunction(()=>document.querySelector('#main-content h1')?.textContent?.includes('Caderno'));
  await clicar(cp.gabarito==='C'?'CERTO':'ERRADO');
  await page.waitForFunction(()=>document.body.innerText.includes('Acertou nesta tentativa'));
  assert(await page.$('[aria-label="Estudo reverso do item"]'));
  await clicar('Concluir revisão deste item');
 });
 await teste('Véspera apresenta estudo reverso após julgamento',async()=>{
  await page.evaluate(async()=>{const{useNavigationStore}=await import(performance.getEntriesByType('resource').find(r=>r.name.includes('/src/store/useNavigationStore.ts'))?.name || '/src/store/useNavigationStore.ts');useNavigationStore.getState().setActiveView('folha-vespera');});
  await page.waitForSelector('#main-content h1');
  const buttons=await page.$$eval('button',els=>els.map(el=>el.innerText.trim()));
  const modo=buttons.find(t=>t.includes('Ativar Treino de Véspera'));assert(modo);await clicar(modo);
  await page.waitForFunction(()=>[...document.querySelectorAll('button')].some(b=>b.innerText.trim()==='CERTO (C)'));
  await clicar('CERTO (C)');await page.waitForSelector('[aria-label="Estudo reverso do item"]');
 });
 await page.screenshot({path:out+'/feedback-vespera-mobile.png',fullPage:true});
 if(resultados.some(r=>r.status!=='aprovado') || erros.length) process.exitCode=1;
 console.log(JSON.stringify({cenarios:resultados.length,aprovados:resultados.filter(r=>r.status==='aprovado').length,falhas:resultados.filter(r=>r.status!=='aprovado'),erros}));
}finally{await browser.close();}
