import * as path from 'path';
import { pathToFileURL } from 'url';

interface Questao {
  id: string;
  enunciado: string;
  gabarito: 'C' | 'E';
  justificativa?: string;
  versao_correta?: string;
  assunto?: string;
}

const files = [
  'm1-fundamentos-100q.ts',
  'm2-catalogacao-100q.ts',
  'm3-classificacao-100q.ts',
  'm4-recuperacao-100q.ts',
  'm5-gestao-100q.ts',
  'm6-digital-ia-100q.ts',
  'm7-preservacao-100q.ts',
  'm8-normalizacao-100q.ts',
  'm9-comunicacao-100q.ts',
  'm10-legislativo-100q.ts',
  'm10a-legislativo-constituicao-100q.ts',
  'm10b-regimentos-100q.ts',
  'm11-administrativo-100q.ts',
  'm12-ingles-100q.ts',
  'm13-portugues-100q.ts',
  'm14-tecnologia-dados-100q.ts',
  'mini-modulo-orgaos-30q.ts',
  'questoes-submodulos-ampliados.ts',
  'mega-simulado-camara-120q.ts',
  'simulado-geral-180q.ts',
  'simulado-oficial-camara-180q.ts'
];

async function main() {
  console.log('| Módulo | Total | Média C | Curtos C (<180c) | Secos C | Média E | Curtos E (<180c) |');
  console.log('|---|---|---|---|---|---|---|');

  const dryRegex = /^(gabarito\s+certo[.:,\s]+)?(conforme|de acordo com|nos termos d[oa]|art\.|lei\s+n?|ricd|cf\/88|regimento)\b/i;

  let totalCurtosC = 0;
  let totalSecosC = 0;
  let totalCurtosE = 0;
  let totalC = 0;
  let totalE = 0;

  const samples: { [mod: string]: string[] } = {};

  for (const f of files) {
    const modPath = path.resolve(process.cwd(), 'src/content/questions', f);
    const mod = await import(pathToFileURL(modPath).href);
    const qs: Questao[] = Object.values(mod).find(Array.isArray) as Questao[];
    if (!qs) continue;

    const modName = f.replace('-100q.ts', '').replace('.ts', '');
    samples[modName] = [];

    const certos = qs.filter(q => q.gabarito === 'C');
    const errados = qs.filter(q => q.gabarito === 'E');

    totalC += certos.length;
    totalE += errados.length;

    const avgC = Math.round(certos.reduce((acc, q) => acc + (q.justificativa || '').length, 0) / (certos.length || 1));
    const avgE = Math.round(errados.reduce((acc, q) => acc + (q.justificativa || '').length, 0) / (errados.length || 1));

    const curtosC = certos.filter(q => (q.justificativa || '').length < 180);
    const curtosE = errados.filter(q => (q.justificativa || '').length < 180);
    const secosC = certos.filter(q => {
      const j = (q.justificativa || '').trim();
      return dryRegex.test(j) || (j.length < 220 && (j.includes('art.') || j.includes('Art.')));
    });

    totalCurtosC += curtosC.length;
    totalCurtosE += curtosE.length;
    totalSecosC += secosC.length;

    // coletar 2 exemplos de C curto/seco
    for (const q of certos) {
      if ((q.justificativa || '').length < 160 && samples[modName].length < 2) {
        samples[modName].push(`[${q.id}]: "${q.justificativa}"`);
      }
    }

    console.log(`| ${modName} | ${qs.length} | ${avgC}c | ${curtosC.length} | ${secosC.length} | ${avgE}c | ${curtosE.length} |`);
  }

  console.log(`\nTOTAL GERAL:`);
  console.log(`- Total de itens CERTO: ${totalC} (Curtos <180c: ${totalCurtosC}, Secos/Legais: ${totalSecosC})`);
  console.log(`- Total de itens ERRADO: ${totalE} (Curtos <180c: ${totalCurtosE})`);

  console.log(`\nAMOSTRAS DE JUSTIFICATIVAS CURTAS/SECAS EM ITENS CERTOS:`);
  for (const [mod, s] of Object.entries(samples)) {
    if (s.length > 0) {
      console.log(`\n--- ${mod} ---`);
      s.forEach(item => console.log(item));
    }
  }
}

main().catch(console.error);
