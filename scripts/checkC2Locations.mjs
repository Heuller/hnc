import fs from 'node:fs';
import path from 'node:path';

const qDir = './src/content/questions';
const files = fs.readdirSync(qDir).filter(f => f.endsWith('.ts'));

const targetIds = [
  'm12-q-4', 'm12-q-9', 'm12-q-23', 'm12-q-44', 'm12-q-50',
  'm12-q-54', 'm12-q-59', 'm12-q-70', 'm12-q-79', 'm12-q-93',
  'mega-q-13', 'mega-q-14', 'mega-q-16',
  'oficial-180q-028', 'oficial-180q-033'
];

for (const f of files) {
  const content = fs.readFileSync(path.join(qDir, f), 'utf8');
  for (const id of targetIds) {
    if (content.includes(`'${id}'`) || content.includes(`"${id}"`)) {
      console.log(`File ${f} contains ${id}`);
    }
  }
}
