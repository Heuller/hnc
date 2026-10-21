import fs from 'node:fs';
import { simuladoIngles100Q } from '../src/content/questions/m12-ingles-100q.ts';
import { megaSimuladoCamara120Q } from '../src/content/questions/mega-simulado-camara-120q.ts';
import { simuladoOficialCamara180Q } from '../src/content/questions/simulado-oficial-camara-180q.ts';

const allQuestions = [...simuladoIngles100Q, ...megaSimuladoCamara120Q, ...simuladoOficialCamara180Q];

const csvPath = 'C:/Users/bibli/.gemini/antigravity/brain/8bac98a0-7ed7-46a8-aa4d-72d6eaccabf8/.user_uploaded/media_1792616371947_eb00ecdb.csv';
const lines = fs.readFileSync(csvPath, 'utf8').trim().split('\n').slice(1);

const divergencias = lines.map(line => {
  const [id, gabarito_plataforma, gabarito_tec, similaridade, observacao] = line.split(',').map(s => s.trim());
  return { id, gabarito_plataforma, gabarito_tec, similaridade, observacao };
});

console.log(`Carregadas ${divergencias.length} divergências de Inglês.\n`);

function separateContextAndAssertive(fullText) {
  // Cebraspe english questions often have: "... judge the following item. <assertive>"
  // or "... julgue os itens a seguir. <assertiva>"
  // or "About the preceding text, judge the following item. <assertive>"
  const markers = [
    /Considering the preceding text, judge the following item\.?\s*/i,
    /About the preceding text, judge the following item\.?\s*/i,
    /Based on the text(?: above)?, (?:it is correct to |judge the following item\.?\s*)/i,
    /Judge the following item, according to the text above\.?\s*/i,
    /Judge the following item according to the text\.?\s*/i,
    /Judging the text above, judge the following item\.?\s*/i,
    /Judge the following item\.\s*/i,
    /Julgue os itens seguintes.*?\.\s*/i,
    /Julgue o item a seguir.*?\.\s*/i,
  ];

  for (const regex of markers) {
    const match = fullText.match(regex);
    if (match) {
      const idx = match.index;
      const markerLength = match[0].length;
      const context = fullText.slice(0, idx).trim();
      const assertive = fullText.slice(idx + markerLength).trim();
      return { context, assertive };
    }
  }

  // Fallback: split by last sentence if no marker found
  const sentences = fullText.split(/(?<=[.!?])\s+/);
  if (sentences.length > 1) {
    return {
      context: sentences.slice(0, -1).join(' '),
      assertive: sentences[sentences.length - 1]
    };
  }

  return { context: '', assertive: fullText };
}

const detailedReport = [];

for (const d of divergencias) {
  const q = allQuestions.find(x => x.id === d.id);
  if (!q) {
    console.warn(`Questão não encontrada: ${d.id}`);
    continue;
  }

  const { context, assertive } = separateContextAndAssertive(q.item);
  const words = (context || q.contexto || '').trim().split(/\s+/).filter(Boolean);
  const first40ContextWords = words.slice(0, 40).join(' ') + (words.length > 40 ? '...' : '');

  detailedReport.push({
    id: q.id,
    arquivo: q.id.startsWith('m12') ? 'm12-ingles-100q.ts' : q.id.startsWith('mega') ? 'mega-simulado-camara-120q.ts' : 'simulado-oficial-camara-180q.ts',
    gabaritoAtual: q.gabarito,
    gabaritoTec: d.gabarito_tec,
    observacao: d.observacao,
    fonteDescricao: q.fonteOriginal?.descricao || q.fonteOriginal?.declaracaoLegada || 'N/A',
    contexto40: first40ContextWords,
    assertiva: assertive || q.item,
    justificativa: q.justificativa
  });
}

for (const item of detailedReport) {
  console.log(`================================================================================`);
  console.log(`ID: ${item.id} | Arquivo: ${item.arquivo}`);
  console.log(`Fonte: ${item.fonteDescricao}`);
  console.log(`Gabarito Atual (Plataforma): ${item.gabaritoAtual} | Gabarito Tec Concursos: ${item.gabaritoTec} [${item.observacao}]`);
  console.log(`--- Texto Motivador (primeiras 40 palavras) ---`);
  console.log(item.contexto40);
  console.log(`--- Assertiva ---`);
  console.log(item.assertiva);
  console.log(`--- Justificativa Atual ---`);
  console.log(item.justificativa);
  console.log(`\n`);
}
