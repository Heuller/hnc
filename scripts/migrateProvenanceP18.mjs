import ts from 'typescript';
import fs from 'node:fs';
import path from 'node:path';

const csvPath = 'C:/Users/bibli/.gemini/antigravity/brain/8bac98a0-7ed7-46a8-aa4d-72d6eaccabf8/.user_uploaded/media_1792598460906_2f94db8a.csv';
const csvContent = fs.readFileSync(csvPath, 'utf8');
const lines = csvContent.split('\n').filter(Boolean);
const header = lines[0].replace(/^\uFEFF/, '').split(',').map(s => s.trim());
const csvMap = new Map();

for (let i = 1; i < lines.length; i++) {
  let inQuotes = false;
  let cur = '';
  const row = [];
  for (const ch of lines[i]) {
    if (ch === '"') inQuotes = !inQuotes;
    else if (ch === ',' && !inQuotes) { row.push(cur.trim()); cur = ''; }
    else cur += ch;
  }
  row.push(cur.trim());
  const obj = {};
  header.forEach((h, idx) => obj[h] = row[idx] || '');
  csvMap.set(obj.id_plataforma, obj);
}

function parseExam(provaReal) {
  // e.g. "AJ TSE/TSE/Apoio Especializado/Biblioteconomia/2024"
  // "Biblio (SUFRAMA)/SUFRAMA/2014"
  // "GPPGE (SEE DF)/SEE DF/Biblioteconomia/2017"
  const parts = provaReal.split('/').map(s => s.trim());
  const anoStr = parts[parts.length - 1];
  const ano = parseInt(anoStr, 10) || 2024;
  let orgao = '';
  if (parts.length >= 2) {
    orgao = parts[1];
  } else {
    orgao = parts[0];
  }
  orgao = orgao.replace(/^[A-Z0-9\s]+\(([^)]+)\)$/, '$1').trim();
  return { ano, orgao: orgao || 'Cebraspe' };
}

const dir = 'src/content/questions';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

const stats = {
  total: 0,
  realConfirmada: 0,
  adaptada: 0,
  inedita: 0,
  legacyClaimBancaAno: 0,
  byFile: {}
};

const legacyClaimList = [];

for (const file of files) {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const sf = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true);

  const edits = [];
  stats.byFile[file] = { total: 0, realConfirmada: 0, adaptada: 0, inedita: 0 };

  function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      let id = null;
      let fonteProp = null;
      for (const prop of node.properties) {
        if (ts.isPropertyAssignment(prop)) {
          const name = prop.name.getText(sf).replace(/['"]/g, '');
          if (name === 'id') id = prop.initializer.getText(sf).replace(/['"]/g, '');
          if (name === 'fonteOriginal') fonteProp = prop;
        }
      }

      if (id && fonteProp) {
        stats.total++;
        stats.byFile[file].total++;

        // Extract old values from fonteProp
        const fonteText = fonteProp.getText(sf);
        const tipoMatch = fonteText.match(/["']?tipo["']?\s*:\s*["']([^"']+)["']/);
        const oldTipo = tipoMatch ? tipoMatch[1] : '';
        const descMatch = fonteText.match(/["']?descricao["']?\s*:\s*["']([^"']+)["']/);
        const oldDesc = descMatch ? descMatch[1] : '';

        let newFonteObj;

        if (csvMap.has(id)) {
          const csvRow = csvMap.get(id);
          const sim = parseFloat(csvRow.similaridade) || 0;
          const { ano, orgao } = parseExam(csvRow.prova_real);
          const tecId = csvRow.id_tec_concursos;
          const isAdapted = sim < 0.75 || oldDesc.toLowerCase().includes('adaptada');

          if (isAdapted) {
            stats.adaptada++;
            stats.byFile[file].adaptada++;
            newFonteObj = {
              tipo: 'adaptada',
              descricao: `Cebraspe / ${orgao} / ${ano} (Adaptada)`,
              verificado: true,
              provaId: csvRow.prova_real,
              ano,
              orgao,
              banca: 'Cebraspe',
              questaoOriginalId: `TecConcursos-${tecId}`
            };
          } else {
            stats.realConfirmada++;
            stats.byFile[file].realConfirmada++;
            newFonteObj = {
              tipo: 'real-confirmada',
              descricao: `Cebraspe / ${orgao} / ${ano}`,
              verificado: true,
              provaId: `TecConcursos-${tecId}`,
              ano,
              orgao,
              banca: 'Cebraspe'
            };
          }
        } else {
          stats.inedita++;
          stats.byFile[file].inedita++;

          const hadLegacyClaim = oldTipo === 'cebraspe-real' || (
            /(cebraspe|cespe|\d{4}|câmara|stj|tce|basa|abin|fub|tjdft|trt|anatel|suframa|see)/i.test(oldDesc) &&
            !oldDesc.toLowerCase().includes('inédita') &&
            !oldDesc.toLowerCase().includes('simulado')
          );

          if (hadLegacyClaim) {
            stats.legacyClaimBancaAno++;
            legacyClaimList.push({ id, file, oldTipo, oldDesc });
            newFonteObj = {
              tipo: 'inedita',
              descricao: 'Inédita, sem prova de origem',
              verificado: false,
              declaracaoLegada: oldDesc
            };
          } else {
            newFonteObj = {
              tipo: 'inedita',
              descricao: oldDesc || 'Inédita, sem prova de origem',
              verificado: false
            };
          }
        }

        // Format replacement string matching file indentation
        const isQuotedKey = fonteText.startsWith('"');
        const key = isQuotedKey ? '"fonteOriginal"' : 'fonteOriginal';
        const formattedJson = JSON.stringify(newFonteObj, null, 6)
          .replace(/^{\n/, '{\n    ')
          .replace(/\n}/, '\n    }');

        edits.push({
          start: fonteProp.getStart(sf),
          end: fonteProp.getEnd(),
          replacement: `${key}: ${formattedJson}`
        });
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sf);

  edits.sort((a, b) => b.start - a.start);
  let updatedContent = content;
  for (const edit of edits) {
    updatedContent = updatedContent.slice(0, edit.start) + edit.replacement + updatedContent.slice(edit.end);
  }

  fs.writeFileSync(filePath, updatedContent, 'utf8');
}

console.log('=== MIGRATION COMPLETED ===');
console.log('Total questions migrated:', stats.total);
console.log('real-confirmada:', stats.realConfirmada);
console.log('adaptada:', stats.adaptada);
console.log('inedita:', stats.inedita);
console.log('Legacy claiming banca/ano without proof (now inedita with declaracaoLegada):', stats.legacyClaimBancaAno);

// Save legacy claim list for PROVENIENCIA.md
fs.writeFileSync('scripts/legacyClaimList.json', JSON.stringify({
  stats,
  legacyClaimList
}, null, 2), 'utf8');
