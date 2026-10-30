import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import { createServer } from 'vite';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const server=await createServer({root,server:{middlewareMode:true},appType:'custom'});
const { ALL_COURSE_MODULES }=await server.ssrLoadModule('/src/content/registry.ts');
const originals=ALL_COURSE_MODULES.flatMap(m=>m.modulosFilhos);
await server.close();
for(const name of fs.readdirSync(root+'/src/content/reforma/aulas').filter(n=>n.endsWith('.json'))){
 const authored=JSON.parse(fs.readFileSync(root+'/src/content/reforma/aulas/'+name,'utf8'));
 const original=originals.find(s=>s.id===authored.id);
 if(!original)throw Error(name);
 const files=fs.readdirSync(root+'/src/content/modules',{recursive:true}).filter(p=>p.endsWith('/'+authored.id+'.ts'));
 if(files.length!==1)throw Error('source '+name);
 const p=path.join(root,'src/content/modules',files[0]);let source=fs.readFileSync(p,'utf8');
 const fields={...authored};delete fields.id;
 const removerCampos=fields.removerCampos||[];delete fields.removerCampos;
 const cpEdits=fields.checkpointEdits||{};delete fields.checkpointEdits;
 fields.checkpoints=[...original.checkpoints.filter(cp=>!cp.id.startsWith('rt-')).map(cp=>({...cp,...cpEdits[cp.id]})),...(fields.novosCheckpoints||[])];delete fields.novosCheckpoints;
 const ids=new Set(fields.checkpoints.map(c=>c.id));
 for(const u of fields.unidadesAprendizagem||[])for(const id of u.checkpointIds)if(!ids.has(id))throw Error('missing checkpoint '+id);
 fields.mnemonicos = {
   timeline: [],
   autores: (fields.fontesTeoria || []).map(f => ({id: original.id+'-fonte-'+f.id, nome: f.titulo, ano: 'Referência de consulta', obraPrincipal: f.titulo, ideiaChave: f.localizador, chipPegadinha: 'Fonte da aula'})),
   pegadinhas: fields.checkpoints.slice(-3).map(c => ({id: 'memoria-'+c.id, afirmacao:c.item, gabarito:c.gabarito, porQue:c.justificativa}))
 };
 fields.teoriaDensaMarkdown=fields.unidadesAprendizagem.map(u=>'### '+u.titulo+'\n\n'+u.conteudo).join('\n\n');
 const ast=ts.createSourceFile(p,source,ts.ScriptTarget.Latest,true);let obj;
 function walk(n){if(ts.isVariableDeclaration(n)&&ts.isObjectLiteralExpression(n.initializer))obj=n.initializer;ts.forEachChild(n,walk)}walk(ast);if(!obj)throw Error('obj');
 const edits=[];const additions=[];
 for(const key of removerCampos){
  const index=obj.properties.findIndex(p=>p.name?.getText(ast)===key);
  if(index<0)continue;
  const prop=obj.properties[index];
  const end=index<obj.properties.length-1?obj.properties[index+1].getStart(ast):prop.getEnd()+(source[prop.getEnd()]==','?1:0);
  edits.push({start:prop.getStart(ast),end,text:''});
 }
 for(const [key,value] of Object.entries(fields)){
  const prop=obj.properties.find(p=>p.name?.getText(ast)===key);
  if(prop&&ts.isPropertyAssignment(prop))edits.push({start:prop.initializer.getStart(ast),end:prop.initializer.getEnd(),text:JSON.stringify(value,null,2)});
  else additions.push(key+': '+JSON.stringify(value,null,2));
 }
 if(additions.length)edits.push({start:obj.getEnd()-1,end:obj.getEnd()-1,text:'\n'+additions.join(',\n')+',\n'});
 for(const e of edits.sort((a,b)=>b.start-a.start))source=source.slice(0,e.start)+e.text+source.slice(e.end);
 fs.writeFileSync(p,source);
 console.log(name,fields.checkpoints.length,'checkpoints',fields.unidadesAprendizagem.length,'blocos');
}
