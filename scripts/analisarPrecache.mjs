import fs from 'node:fs';
import path from 'node:path';

const dist = 'dist';
const sw = fs.readFileSync('dist/sw.js', 'utf8');
const urls = [...sw.matchAll(/url:"([^"]+)"/g)].map((m) => m[1]);

console.log(`Total URLs no precache: ${urls.length}`);

const items = [];
let total = 0;

for (const u of urls) {
  const file = path.join(dist, u);
  if (fs.existsSync(file)) {
    const size = fs.statSync(file).size;
    total += size;
    items.push({ url: u, size });
  } else {
    items.push({ url: u, size: 0, missing: true });
  }
}

items.sort((a, b) => b.size - a.size);

console.log(`\nTotal Precache: ${(total / (1024 * 1024)).toFixed(2)} MB (${(total / 1024).toFixed(1)} kB)\n`);
console.log('Top 30 maiores arquivos no precache:');
items.slice(0, 30).forEach((item, idx) => {
  console.log(`${idx + 1}. ${item.url} -> ${(item.size / 1024).toFixed(1)} kB`);
});
