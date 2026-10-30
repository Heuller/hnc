/** Censo técnico reproduzível. Não certifica correção conceitual nem calibra dificuldade. */
import { createServer } from 'vite';
import fs from 'node:fs/promises';
import ts from 'typescript';
import crypto from 'node:crypto';
import { lerLotes, hashQuestao } from './revisaoQuestoes.mjs';
const destino = process.argv[2] || 'docs/relatorios/acervo';
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
const hash = value => crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
try {
 const { ALL_SIMULADOS_REGISTRY } = await server.ssrLoadModule('/src/content/simuladosRegistry.ts');
 const { ALL_COURSE_MODULES } = await server.ssrLoadModule('/src/content/registry.ts');
 const { MATRIZ_BLOCOS_EDITAL_VESPERA } = await server.ssrLoadModule('/src/domain/folhaVespera/pegadinhasBlocos.ts');
 const { BASE_QUESTOES_ADAPTATIVAS } = await server.ssrLoadModule('/src/domain/adaptiveQuiz/baseQuestoesAdaptativas.ts');
 const { elegivelParaEstudo } = await server.ssrLoadModule('/src/domain/questoesElegiveis.ts');
 const { comentarioGenerico, contrasteArtificial } = await server.ssrLoadModule('/src/domain/qualidadeEditorial.ts');
 const ativos = new Set(ALL_SIMULADOS_REGISTRY.flatMap(s => s.questoes.map(q => q.id)));
 const revisados = JSON.parse(await fs.readFile('docs/relatorios/REVISAO_EDITORIAL_ITENS_2026-10-29.json','utf8')).alteracoes;
 const lotesIndividuais = await lerLotes();
 const revisoesPorItem = new Map(lotesIndividuais.map(r => [r.caminho + ':' + r.id, r]));
 const raw=[];
 for (const file of await fs.readdir('src/content/questions')) {
  if (!file.endsWith('.ts')) continue;
  const path = 'src/content/questions/'+file, source = await fs.readFile(path,'utf8'), sf = ts.createSourceFile(path,source,ts.ScriptTarget.Latest,true);
  function parse(node) {
   if (ts.isStringLiteral(node)||ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
   if (ts.isNumericLiteral(node)) return Number(node.text);
   if (node.kind===ts.SyntaxKind.TrueKeyword) return true;
   if (node.kind===ts.SyntaxKind.FalseKeyword) return false;
   if (ts.isObjectLiteralExpression(node)) return Object.fromEntries(node.properties.filter(ts.isPropertyAssignment).map(p=>[p.name.text,parse(p.initializer)]));
   if (ts.isArrayLiteralExpression(node)) return node.elements.map(parse);
  }
  function visit(node) {
   if(ts.isObjectLiteralExpression(node)) {const q=parse(node);if(q.id&&q.item&&q.gabarito){raw.push({path,line:sf.getLineAndCharacterOfPosition(node.getStart()).line+1,...q});return;}}
   ts.forEachChild(node,visit);
  } visit(sf);
 }
 const checkpoints=ALL_COURSE_MODULES.flatMap(m=>m.modulosFilhos.flatMap(s=>s.checkpoints.map(q=>({path:'registry:'+m.id+'/'+s.numero,...q}))));
 const exercicios=[];
 function visitar(value,path) {if(!value||typeof value!=='object')return;if(value.id&&/^X\d+$/.test(value.tipo||''))exercicios.push({path,...value});for(const [key,child] of Object.entries(value)) if(key!=='checkpoints')visitar(child,path+'/'+key);}
 visitar(ALL_COURSE_MODULES,'registry');
 const vespera=MATRIZ_BLOCOS_EDITAL_VESPERA.flatMap(b=>b.pegadinhas.map(q=>({path:'vespera:'+b.id,...q,item:q.afirmacaoFalsa,gabarito:q.gabaritoOficial,justificativa:q.fundamentacaoCanonico})));
 const conjuntos=[['banco',raw],['checkpoint',checkpoints],['exercicio',exercicios],['vespera',vespera],['base-adaptativa-legada',BASE_QUESTOES_ADAPTATIVAS]];
 const grupos=new Map();
 const normalizar=q=>(q.item||q.enunciado||'').normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim();
 for(const q of raw){const k=normalizar(q);grupos.set(k,[...(grupos.get(k)||[]),q]);}
 const linhas=conjuntos.flatMap(([origem,items])=>items.map(q=>{
  const {path: _path, line: _line, ...conteudo} = q;
  const impressao=hash(conteudo);
  const revisao = origem === 'banco' ? revisoesPorItem.get(q.path + ':' + q.id) : undefined;
  const revisaoVigente = revisao?.shaDepois === hashQuestao(conteudo);
  const texto=q.item||q.enunciado||'',j=q.justificativa||'',grupo=grupos.get(normalizar(q))||[],achado=revisados.find(r=>r.id===q.id && r.sha256Conteudo===impressao),sinais=[];
  if(!j.trim())sinais.push('sem-justificativa');
  if(comentarioGenerico(j))sinais.push('justificativa-generica');
  if(!q.gatilho)sinais.push('sem-trecho-decisivo-cadastrado');
  else if(!texto.includes(q.gatilho))sinais.push('gatilho-nao-literal');
  if(contrasteArtificial(q.versao_errada)||contrasteArtificial(q.versao_correta))sinais.push('contraste-artificial');
  if(grupo.length>1)sinais.push('texto-repetido');
  if(new Set(grupo.filter(r=>ativos.has(r.id)).map(r=>r.gabarito)).size>1)sinais.push('conflito-gabarito-ativo');
  if(!q.fonte&&!q.fontePrimaria)sinais.push('fonte-sem-localizador-especifico');
  if (revisao && !revisaoVigente) sinais.push('registro-de-revisao-desatualizado');
  return {origem,id:q.id,path:q.path||origem,line:q.line||null,sha256:impressao,ativo:origem==='banco'?ativos.has(q.id):origem!=='base-adaptativa-legada',familiaTexto:hash(normalizar(q)),statusEditorial:revisaoVigente?revisao.status:achado?achado.acao:'pendente-de-revisao-conceitual-individual',dataRevisao:revisaoVigente?revisao.data:null,homologado:false,motivoForaDoTreino:origem==='banco'&&!ativos.has(q.id)?(!elegivelParaEstudo(q)?'conferencia-editorial':'fora-do-registro-de-simulados'):null,sinais};
 }));
 const resumo={foraDoRegistro:raw.filter(q=>elegivelParaEstudo(q)&&!ativos.has(q.id)).length,emConferencia:raw.filter(q=>!elegivelParaEstudo(q)).length,exerciciosDerivadosDosCheckpoints:checkpoints.length,data:new Date().toISOString().slice(0,10),limite:'Cobertura integral de inventário e triagem técnica; revisão conceitual integral PENDENTE. Ausência de sinal não equivale a aprovação editorial.',contagens:Object.fromEntries(conjuntos.map(([o,q])=>[o,q.length])),ativosBanco:ativos.size,revisaoFocalHistorica:revisados.length,revisaoIndividualVigente:linhas.filter(l=>l.origem==='banco'&&l.statusEditorial==='revisado').length,homologadosNestaRodada:0,gruposRepetidos:[...grupos.values()].filter(g=>g.length>1).length,sinais:linhas.reduce((a,r)=>(r.sinais.forEach(s=>a[s]=(a[s]||0)+1),a),{}),pendenciasConceituais:linhas.filter(l=>l.statusEditorial==='pendente-de-revisao-conceitual-individual').length};
 await fs.mkdir(destino,{recursive:true});await fs.writeFile(destino+'/resumo.json',JSON.stringify(resumo,null,2));await fs.writeFile(destino+'/itens.json',JSON.stringify(linhas,null,2));
 const colunas=['origem','id','path','line','sha256','ativo','familiaTexto','statusEditorial','homologado','sinais'];
 const cell=v=>'"'+String(Array.isArray(v)?v.join(';'):v??'').replaceAll('"','""')+'"';
 await fs.writeFile(destino+'/itens.csv','\uFEFF'+[colunas.join(','),...linhas.map(l=>colunas.map(k=>cell(l[k])).join(','))].join('\n')+'\n');
 console.log(JSON.stringify(resumo,null,2));
} finally { await server.close(); }
