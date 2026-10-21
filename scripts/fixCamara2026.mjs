import fs from 'node:fs';

const files = [
  'src/content/questions/m10-legislativo-100q.ts',
  'src/content/questions/mega-simulado-camara-120q.ts'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replaceAll('Câmara dos Deputados/2026 (Analista Legislativo)', 'Câmara dos Deputados/2014 (Analista Legislativo)');
  content = content.replaceAll('Cebraspe / Câmara dos Deputados / 2026', 'Cebraspe / Câmara dos Deputados / 2014');
  content = content.replace(/"ano":\s*2026/g, '"ano": 2014');
  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed file:', file);
}
