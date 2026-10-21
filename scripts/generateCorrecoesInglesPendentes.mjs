import fs from 'node:fs';
import { simuladoIngles100Q } from '../src/content/questions/m12-ingles-100q.ts';
import { megaSimuladoCamara120Q } from '../src/content/questions/mega-simulado-camara-120q.ts';

const csvPath = 'C:/Users/bibli/.gemini/antigravity/brain/8bac98a0-7ed7-46a8-aa4d-72d6eaccabf8/.user_uploaded/media_1792616371947_eb00ecdb.csv';
const lines = fs.readFileSync(csvPath, 'utf8').trim().split('\n').slice(1);

const rows = lines.map(line => {
  const [id, gabarito_plataforma, gabarito_tec, similaridade, observacao] = line.split(',').map(s => s.trim());
  return { id, gabarito_plataforma, gabarito_tec, similaridade, observacao };
});

function separateContextAndAssertive(fullText) {
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

  const sentences = fullText.split(/(?<=[.!?])\s+/);
  if (sentences.length > 1) {
    return {
      context: sentences.slice(0, -1).join(' '),
      assertive: sentences[sentences.length - 1]
    };
  }

  return { context: '', assertive: fullText };
}

const md = [];
md.push('# Relatório de Divergências de Inglês Pendentes de Homologação (C2)');
md.push('');
md.push('> [!IMPORTANT]');
md.push('> **Regra de Prudência Cebraspe:** Em estrito cumprimento à diretriz C2 e à regra de não inversão cega de gabaritos sem fonte primária, **nenhum gabarito foi invertido por conta própria**. Para questões de língua inglesa, textos motivadores extensos e tabelas consolidadas de gabarito aumentam o risco de falsos pareamentos no Tec Concursos. Todos os 15 itens foram sinalizados com `revisar: true` e excluídos dos simulados oficiais e do portão de verificação até que haja homologação documental definitiva no espelho oficial do Cebraspe.');
md.push('');
md.push('## 1. Inventário dos 15 Itens Divergentes');
md.push('');
md.push('| ID | Arquivo de Origem | Prova / Concurso Cebraspe | Gab. Plataforma | Gab. Tec | Divergência | Resumo da Assertiva | Conferir no Espelho Oficial do Cebraspe (`cdn.cebraspe.org.br`) |');
md.push('| :-- | :-- | :-- | :---: | :---: | :---: | :-- | :-- |');

for (const r of rows) {
  let q = null;
  let arquivoOrigem = '';
  let provaDesc = '';
  let assertiva = '';

  if (r.id.startsWith('m12')) {
    q = simuladoIngles100Q.find(x => x.id === r.id);
    arquivoOrigem = '`src/content/questions/m12-ingles-100q.ts`';
  } else if (r.id.startsWith('mega')) {
    q = megaSimuladoCamara120Q.find(x => x.id === r.id);
    arquivoOrigem = '`src/content/questions/mega-simulado-camara-120q.ts`';
  } else if (r.id.startsWith('oficial')) {
    arquivoOrigem = '`src/content/questions/simulado-oficial-camara-180q.ts`';
    // No simulado oficial, oficial-180q-028 era cópia de m12-q-4 e 033 de m12-q-9
    if (r.id === 'oficial-180q-028') {
      q = simuladoIngles100Q.find(x => x.id === 'm12-q-4');
      provaDesc = 'Câmara dos Deputados (Policial / 2026)';
    } else {
      q = simuladoIngles100Q.find(x => x.id === 'm12-q-9');
      provaDesc = 'Câmara dos Deputados (Proc. Leg. / 2026)';
    }
  }

  if (q) {
    provaDesc = provaDesc || (q.fonteOriginal?.provaId || q.fonteOriginal?.descricao || 'Câmara dos Deputados');
    const sep = separateContextAndAssertive(q.item);
    assertiva = (sep.assertive || q.item).replace(/\|/g, '\\|').replace(/\n/g, ' ');
    if (assertiva.length > 120) {
      assertiva = assertiva.slice(0, 117) + '...';
    }
  } else {
    assertiva = r.observacao;
  }

  const linkConsulta = `[Consulta Cebraspe](https://cdn.cebraspe.org.br/concursos/) · Prova: \`${provaDesc}\``;

  md.push(`| \`${r.id}\` | ${arquivoOrigem} | ${provaDesc} | **${r.gabarito_plataforma}** | **${r.gabarito_tec}** | ${r.gabarito_plataforma} &ne; ${r.gabarito_tec} | ${assertiva} | ${linkConsulta} |`);
}

md.push('');
md.push('## 2. Detalhamento e Justificativas Atuais para Conferência');
md.push('');

for (const r of rows) {
  let q = null;
  let arquivoOrigem = '';
  if (r.id.startsWith('m12')) {
    q = simuladoIngles100Q.find(x => x.id === r.id);
    arquivoOrigem = 'm12-ingles-100q.ts';
  } else if (r.id.startsWith('mega')) {
    q = megaSimuladoCamara120Q.find(x => x.id === r.id);
    arquivoOrigem = 'mega-simulado-camara-120q.ts';
  } else if (r.id === 'oficial-180q-028') {
    q = simuladoIngles100Q.find(x => x.id === 'm12-q-4');
    arquivoOrigem = 'simulado-oficial-camara-180q.ts (original: m12-q-4)';
  } else if (r.id === 'oficial-180q-033') {
    q = simuladoIngles100Q.find(x => x.id === 'm12-q-9');
    arquivoOrigem = 'simulado-oficial-camara-180q.ts (original: m12-q-9)';
  }

  if (!q) continue;

  const { context, assertive } = separateContextAndAssertive(q.item);
  const words = (context || q.contexto || '').trim().split(/\s+/).filter(Boolean);
  const first40 = words.slice(0, 40).join(' ') + (words.length > 40 ? '...' : '');

  md.push(`### Item \`${r.id}\` (${arquivoOrigem})`);
  md.push(`- **Gabarito na Plataforma:** **${r.gabarito_plataforma}**`);
  md.push(`- **Gabarito no Tec Concursos:** **${r.gabarito_tec}**`);
  md.push(`- **Observação / Match:** ${r.observacao}`);
  md.push(`- **Texto Motivador (primeiras 40 palavras):** *"${first40}"*`);
  md.push(`- **Assertiva Completa:** ${assertive || q.item}`);
  md.push(`- **Justificativa Atual:** ${q.justificativa}`);
  md.push(`- **Status:** Marcado com \`revisar: true\`; retirado de simulados ativos e do portão de verificação.`);
  md.push('');
}

md.push('## 3. Ações de Blindagem Executadas');
md.push('1. **Sinalização no Schema:** Todos os 10 itens em `m12-ingles-100q.ts` e os 3 itens em `mega-simulado-camara-120q.ts` foram etiquetados com `"revisar": true` no metadado `fonteOriginal`.');
md.push('2. **Substituição no Simulado Oficial:** No arquivo `simulado-oficial-camara-180q.ts`, as posições 28 (`oficial-180q-028`) e 33 (`oficial-180q-033`) foram substituídas respectivamente pelas questões de reserva confirmadas `m12-q-16` (Gabarito E) e `m12-q-19` (Gabarito C), mantendo paridade 45C/45E e integridade sequencial sem exibir assertivas sob suspeita.');
md.push('3. **Portão de Verificação Imunizado:** Em `src/components/jornada/PortaoVerificacaoModal.tsx`, a rotina de montagem de itens de desafio/portão foi atualizada com `.filter((q) => !q.fonteOriginal?.revisar)`, garantindo que nenhuma questão pendente de conferência documental seja apresentada.');
md.push('');

const outputContent = md.join('\n');
fs.writeFileSync('CORRECOES_INGLES_PENDENTES.md', outputContent, 'utf8');
fs.mkdirSync('docs/relatorios', { recursive: true });
fs.writeFileSync('docs/relatorios/CORRECOES_INGLES_PENDENTES.md', outputContent, 'utf8');
console.log('Arquivos CORRECOES_INGLES_PENDENTES.md gerados com sucesso!');
