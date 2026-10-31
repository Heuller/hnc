/** Integridade das decisões individuais; não automatiza julgamento conceitual. */
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';
import { hashQuestao } from './revisaoQuestoes.mjs';
const pasta='docs/revisao-checkpoints/lotes';
function parse(n) {
 if(ts.isStringLiteral(n)||ts.isNoSubstitutionTemplateLiteral(n)) return n.text;
 if(ts.isNumericLiteral(n)) return Number(n.text);
 if(n.kind===ts.SyntaxKind.TrueKeyword)return true;
 if(n.kind===ts.SyntaxKind.FalseKeyword)return false;
 if(ts.isObjectLiteralExpression(n))return Object.fromEntries(n.properties.filter(ts.isPropertyAssignment).map(p=>[p.name.text,parse(p.initializer)]));
 if(ts.isArrayLiteralExpression(n))return n.elements.map(parse);
}
export async function lerCheckpoints(){
 const registros=[];
 async function visitarPasta(dir){for(const e of await fs.readdir(dir,{withFileTypes:true})){
  const caminho=dir+'/'+e.name;if(e.isDirectory()){await visitarPasta(caminho);continue;}if(!e.name.endsWith('.ts'))continue;
  const texto=await fs.readFile(caminho,'utf8'),sf=ts.createSourceFile(caminho,texto,ts.ScriptTarget.Latest,true);
  function visitar(n){if(ts.isObjectLiteralExpression(n)){const q=parse(n);if(q.id&&q.item&&q.gabarito&&q.pergunta){registros.push({caminho,texto,inicio:n.getStart(),fim:n.end,q});return;}}ts.forEachChild(n,visitar);}visitar(sf);
 }}
 await visitarPasta('src/content/modules');return registros;
}
export async function lerRevisoesCheckpoints(){return (await Promise.all((await fs.readdir(pasta)).filter(f=>f.endsWith('.json')).sort().map(async f=>JSON.parse(await fs.readFile(pasta+'/'+f,'utf8'))))).flat();}
export async function validarCheckpoints({parcial=false}={}){
 const banco=await lerCheckpoints(),revisoes=await lerRevisoesCheckpoints(),ids=new Set();
 for(const r of revisoes){if(ids.has(r.id))throw Error('Revisão duplicada: '+r.id);ids.add(r.id);
 const item=banco.find(b=>b.q.id===r.id&&b.caminho===r.caminho);
 if(!item||hashQuestao(item.q)!==r.shaDepois)throw Error('Revisão ausente ou desatualizada: '+r.id);
 if(r.status!=='revisado'||!r.decisao?.trim()||!r.referencia?.trim()||!r.data||!r.shaAntes)throw Error('Decisão incompleta: '+r.id);
 if(!item.q.fonte||!item.q.justificativa?.trim()||!['C','E'].includes(item.q.gabarito))throw Error('Fundamento incompleto: '+r.id);
 if(item.q.gatilho&&!item.q.item.includes(item.q.gatilho))throw Error('Trecho não literal: '+r.id);
 }
 if(new Set(banco.map(b=>b.q.id)).size!==banco.length)throw Error('IDs duplicados no banco de checkpoints');
 if(!parcial&&(banco.length!==669||revisoes.length!==banco.length))throw Error(`Inventário incompleto: ${revisoes.length}/${banco.length}; referência desta revisão: 669`);
 return {total:banco.length,revisados:revisoes.length,pendentes:banco.length-revisoes.length,limite:'Conferência de integridade; a análise conceitual está nas decisões individuais.'};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href)console.log(JSON.stringify(await validarCheckpoints({parcial:process.argv.includes('--parcial')}),null,2));
