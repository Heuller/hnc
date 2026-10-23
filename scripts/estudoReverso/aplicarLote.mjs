// Aplica saídas enriquecidas de estudo reverso diretamente aos arquivos de questões.
// Uso: node scripts/estudoReverso/aplicarLote.mjs <arquivo-ou-pasta-saida.json>
import fs from 'node:fs';
import path from 'node:path';
import { ARQUIVOS_JSON, lerArquivo, gravarArquivo, chaveItem } from './comum.mjs';

const entradaPath = process.argv[2];
if (!entradaPath) {
  console.error('Uso: node scripts/estudoReverso/aplicarLote.mjs <arquivo-ou-pasta-saida.json>');
  process.exit(1);
}

const arquivosParaProcessar = [];
if (fs.statSync(entradaPath).isDirectory()) {
  for (const f of fs.readdirSync(entradaPath)) {
    if (f.endsWith('.json')) arquivosParaProcessar.push(path.join(entradaPath, f));
  }
} else {
  arquivosParaProcessar.push(entradaPath);
}

const mapaEnriquecimento = new Map(); // chaveItem -> dados enriquecidos

for (const arq of arquivosParaProcessar) {
  const dados = JSON.parse(fs.readFileSync(arq, 'utf8'));
  for (const item of dados) {
    if (item.item) {
      mapaEnriquecimento.set(chaveItem(item), item);
    }
    if (item.id) {
      mapaEnriquecimento.set(`id:${item.id}`, item);
    }
  }
}

console.log(`Carregados ${mapaEnriquecimento.size} itens enriquecidos para aplicação.`);

let totalAtualizados = 0;

for (const nomeArquivo of ARQUIVOS_JSON) {
  const arqObj = lerArquivo(nomeArquivo);
  let alteradoNoArquivo = 0;

  for (const q of arqObj.itens) {
    const k = chaveItem(q);
    const enriquecido = mapaEnriquecimento.get(k) || mapaEnriquecimento.get(`id:${q.id}`);

    if (enriquecido) {
      if (enriquecido.gatilho) {
        q.gatilho = enriquecido.gatilho;
      }
      if (enriquecido.justificativa) {
        q.justificativa = enriquecido.justificativa;
      }
      if (enriquecido.armadilhaBanca) {
        q.armadilhaBanca = enriquecido.armadilhaBanca;
      }
      if (enriquecido.versao_correta !== undefined) {
        q.versao_correta = enriquecido.versao_correta;
      }
      if (enriquecido.versao_errada !== undefined) {
        q.versao_errada = enriquecido.versao_errada;
      }
      alteradoNoArquivo++;
      totalAtualizados++;
    }
  }

  if (alteradoNoArquivo > 0) {
    gravarArquivo(arqObj, arqObj.itens);
    console.log(`✅ ${nomeArquivo}: ${alteradoNoArquivo} itens atualizados.`);
  }
}

console.log(`\n🎉 Total de questões atualizadas no repositório: ${totalAtualizados}`);
