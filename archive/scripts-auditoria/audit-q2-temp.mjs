import { readFileSync } from 'fs';

const content = readFileSync('src/content/questions/m1-fundamentos-100q.ts', 'utf8');

const gabC1 = (content.match(/gabarito:\s*'C'/g) || []).length;
const gabC2 = (content.match(/gabarito:\s*"C"/g) || []).length;
const gabE1 = (content.match(/gabarito:\s*'E'/g) || []).length;
const gabE2 = (content.match(/gabarito:\s*"E"/g) || []).length;
const gabC3 = (content.match(/"gabarito":\s*"C"/g) || []).length;
const gabE3 = (content.match(/"gabarito":\s*"E"/g) || []).length;

console.log("gabarito C (single):", gabC1);
console.log("gabarito C (double):", gabC2);
console.log("gabarito E (single):", gabE1);
console.log("gabarito E (double):", gabE2);
console.log('"gabarito":"C":', gabC3);
console.log('"gabarito":"E":', gabE3);

// Find actual pattern
const patterns = content.match(/gabarito/g) || [];
console.log('Total gabarito occurrences:', patterns.length);

// Show a sample
const idx = content.indexOf('"gabarito"');
console.log('Sample:', JSON.stringify(content.substring(idx-5, idx+30)));
