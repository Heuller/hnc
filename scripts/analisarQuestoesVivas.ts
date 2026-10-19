import { SIMULADOS_REGISTRY, MINI_SIMULADOS_REGISTRY } from '../src/content/simuladosRegistry';

console.log('=== DIAGNÓSTICO PROFUNDO DO ACERVO DE QUESTÕES (W3) ===\n');

const todosCadernos = [...SIMULADOS_REGISTRY, ...MINI_SIMULADOS_REGISTRY];
const todasQuestoes = todosCadernos.flatMap((c) => c.questoes);

console.log(`Total geral de itens avaliados: ${todasQuestoes.length}`);

// 1. Desduplicação de texto de assertiva (q.item)
const mapaTextos = new Map<string, string[]>();
todasQuestoes.forEach((q) => {
  const texto = (q.item || (q as any).enunciado || '').trim().toLowerCase().replace(/\s+/g, ' ');
  const ids = mapaTextos.get(texto) || [];
  ids.push(q.id);
  mapaTextos.set(texto, ids);
});

let totalDuplicatas = 0;
const exemplosDuplicatas: Array<{ texto: string; ids: string[] }> = [];
mapaTextos.forEach((ids, texto) => {
  if (ids.length > 1) {
    totalDuplicatas += (ids.length - 1);
    if (exemplosDuplicatas.length < 5) {
      exemplosDuplicatas.push({ texto: texto.slice(0, 80) + '...', ids });
    }
  }
});

console.log(`1. Textos únicos de assertivas: ${mapaTextos.size}`);
console.log(`   Itens duplicados textualmente entre cadernos: ${totalDuplicatas}`);
exemplosDuplicatas.forEach((d, i) => {
  console.log(`   Exemplo ${i + 1} (${d.ids.join(', ')}): "${d.texto}"`);
});

// 2. Análise de questões com quantificadores absolutos
const quantificadores = [
  'sempre', 'nunca', 'somente', 'apenas', 'exclusivamente',
  'todos', 'todas', 'nenhum', 'nenhuma', 'jamais', 'unicamente'
];
const regexQuant = new RegExp(`\\b(${quantificadores.join('|')})\\b`, 'i');

const itensComQuant = todasQuestoes.filter((q) => regexQuant.test(q.item || ''));
const itensQuantErrados = itensComQuant.filter((q) => q.gabarito === 'E');
const taxaQuantErrados = ((itensQuantErrados.length / itensComQuant.length) * 100).toFixed(1);

console.log(`\n2. Quantificadores absolutos no acervo:`);
console.log(`   Total com quantificadores: ${itensComQuant.length} (${taxaQuantErrados}% com gabarito E: ${itensQuantErrados.length} E / ${itensComQuant.length - itensQuantErrados.length} C)`);

// 3. Questões com menção "Câmara dos Deputados/2026"
const itensCamara2026 = todasQuestoes.filter((q) => {
  const s = JSON.stringify(q);
  return s.includes('Câmara dos Deputados/2026') || s.includes('Câmara/2026') || s.includes('CD/2026');
});
console.log(`\n3. Itens citando concurso futuro/anacrônico 'Câmara 2026': ${itensCamara2026.length}`);
itensCamara2026.slice(0, 3).forEach((q) => {
  console.log(`   - [${q.id}]: "${q.item?.slice(0, 80)}..."`);
});

// 4. Questões com quebras de extração de PDF
const regexQuebra = /\b(classific\s*a-\s*ções|ra\s+mos|bibliote\s+co\s+nomia|documen\s+ta\s+ção|informa\s*-\s*ção|[a-zà-ú]{2,}-\s+[a-zà-ú]{2,})\b/i;
const itensQuebra = todasQuestoes.filter((q) => regexQuebra.test(q.item || ''));
console.log(`\n4. Itens com quebras de palavras oriundas de OCR/PDF: ${itensQuebra.length}`);

// 5. Itens citando Texto I / Text I sem contexto
const regexTextoRef = /\b(texto\s+[I|1]|text\s+[I|1]|com\s+base\s+no\s+texto)\b/i;
const itensComRefTexto = todasQuestoes.filter((q) => regexTextoRef.test(q.item || ''));
const itensSemContexto = itensComRefTexto.filter((q) => !q.contexto);
console.log(`\n5. Itens citando texto-base ("Texto I", etc.): ${itensComRefTexto.length}`);
console.log(`   Destes, sem campo de contexto preenchido: ${itensSemContexto.length}`);

// 6. Proporção de questões com fonte cebraspe-real vs inedita
const itensReais = todasQuestoes.filter((q) => q.fonteOriginal?.tipo === 'cebraspe-real');
console.log(`\n6. Questões rotuladas como 'cebraspe-real': ${itensReais.length} de ${todasQuestoes.length} (${((itensReais.length / todasQuestoes.length) * 100).toFixed(1)}%)`);

todosCadernos.forEach((c) => {
  const count = c.questoes.filter((q) => q.fonteOriginal?.tipo === 'cebraspe-real').length;
  console.log(`   - ${c.id}: ${count} de ${c.questoes.length} reais (${count}%)`);
});
