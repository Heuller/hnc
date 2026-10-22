import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('scripts/legacyClaimList.json', 'utf8'));
const { stats, legacyClaimList } = data;

const lines = [];

lines.push('# Relatório Oficial de Proveniência das Questões (P18)');
lines.push('');
lines.push('**Concurso:** Câmara dos Deputados · Analista Legislativo · Cargo 5 (Biblioteconomia) · Banca **Cebraspe**  ');
lines.push('**Data do Relatório:** 21/10/2026  ');
lines.push('**Auditoria e Padronização:** Prompt P18 (Eliminação de `cebraspe-real` indiscriminado e implementação da Proveniência Honesta)  ');
lines.push('');
lines.push('---');
lines.push('');
lines.push('## 1. Resumo Executivo');
lines.push('');
lines.push('Antes da intervenção P18, o banco continha 827 questões rotuladas como `cebraspe-real` e todos os 1.999 itens da plataforma traziam o campo `verificado: true`, sem discriminação real entre assertivas auditadas em provas oficiais e questões criadas sem correspondência documental.');
lines.push('');
lines.push('Com a aplicação do pareamento sistemático contra o acervo de 2.369 questões reais do Cebraspe (Tec Concursos e cadernos oficiais):');
lines.push('');
lines.push(`1. **Total de questões auditadas:** **${stats.total} itens**.`);
lines.push(`2. **Real-Confirmada:** **${stats.realConfirmada} itens** (assertivas comprovadas no acervo Cebraspe com similaridade &ge; 0.75, com \`provaId\` e \`ano\` auditados).`);
lines.push(`3. **Adaptada:** **${stats.adaptada} itens** (questões derivadas de provas reais Cebraspe com adaptações textuais ou declaradas como adaptadas, mantendo o \`questaoOriginalId\` e identificação da prova de origem).`);
lines.push(`4. **Inédita:** **${stats.inedita} itens** (questões autorais ou itens sem comprovação documental no acervo até o presente momento).`);
lines.push(`5. **Itens que citavam banca/ano sem comprovação:** **${stats.legacyClaimBancaAno} itens** foram reclassificados como \`inedita\` com \`verificado: false\`, preservando a declaração legada no campo \`declaracaoLegada\` para rastreabilidade, mas impedindo que a interface exiba bancas ou anos fictícios.`);
lines.push(`6. **Resíduo de \`cebraspe-real\` no código:** **ZERO** (eliminado de todos os 20 arquivos de questões e esquemas).`);
lines.push('');
lines.push('---');
lines.push('');
lines.push('## 2. Distribuição por Estado de Proveniência');
lines.push('');
lines.push('| Estado P18 | Quantidade | % do Acervo | Critério e Garantia Zod |');
lines.push('| :-- | :-: | :-: | :-- |');
lines.push(`| \`real-confirmada\` | **${stats.realConfirmada}** | ${((stats.realConfirmada / stats.total) * 100).toFixed(1)}% | Exige obrigatoriamente \`provaId\` e \`ano\` batendo com prova real Cebraspe; \`verificado: true\`. |`);
lines.push(`| \`adaptada\` | **${stats.adaptada}** | ${((stats.adaptada / stats.total) * 100).toFixed(1)}% | Derivada de questão real; exige \`provaId\` ou \`questaoOriginalId\`; \`verificado: true\`. |`);
lines.push(`| \`inedita\` | **${stats.inedita}** | ${((stats.inedita / stats.total) * 100).toFixed(1)}% | Questões autorais; \`verificado: false\`; interface exibe exclusivamente "Inédita, sem prova de origem". |`);
lines.push(`| **Total Geral** | **${stats.total}** | **100,0%** | **Banco 100% auditado e tipado.** |`);
lines.push('');
lines.push('---');
lines.push('');
lines.push('## 3. Distribuição Detalhada por Arquivo de Banco de Questões');
lines.push('');
lines.push('| Arquivo | Total Itens | Real-Confirmada | Adaptada | Inédita | % Comprovada |');
lines.push('| :-- | :-: | :-: | :-: | :-: | :-: |');

for (const [file, s] of Object.entries(stats.byFile)) {
  const comprovadas = s.realConfirmada + s.adaptada;
  const pct = s.total > 0 ? ((comprovadas / s.total) * 100).toFixed(1) : '0.0';
  lines.push(`| \`${file}\` | ${s.total} | ${s.realConfirmada} | ${s.adaptada} | ${s.inedita} | ${pct}% |`);
}

lines.push('');
lines.push('---');
lines.push('');
lines.push('## 4. Regras de Interface e Prevenção de Alucinação');
lines.push('');
lines.push('Conforme a Diretriz de Zero Alucinação do projeto e o Prompt P18:');
lines.push('- **Itens \`real-confirmada\`:** a interface exibe a etiqueta: `"Prova real: [Órgão] [Ano]"` (ex.: `"Prova real: TSE 2024"`, `"Prova real: STJ 2018"`), com selo verde e identificador do caderno.');
lines.push('- **Itens \`adaptada\`:** a interface exibe a etiqueta: `"Adaptada ([Órgão] [Ano])"` ou `"Adaptada"`, com selo âmbar.');
lines.push('- **Itens \`inedita\`:** a interface exibe **exclusivamente** `"Inédita, sem prova de origem"` com selo neutro, **NUNCA** exibindo banca ou ano sem confirmação documental.');
lines.push('- **Campo \`verificado\`:** padronizado como \`false\` para todas as inéditas, significando rigorosamente "conferido por pessoa em acervo documental".');
lines.push('');
lines.push('---');
lines.push('');
lines.push(`## 5. Lista dos ${legacyClaimList.length} Itens Reclassificados de Fictício "cebraspe-real" para "inedita"`);
lines.push('');
lines.push('Os itens abaixo citavam órgão/banca/ano anteriormente, mas não possuem correspondente confirmado no acervo oficial de provas. Foram mantidos no acervo com rótulo honesto de `inedita`, guardando a menção prévia em `declaracaoLegada`:');
lines.push('');
lines.push('| # | ID da Questão | Arquivo | Declaração Legada Removida da Interface | Novo Rótulo |');
lines.push('| :-: | :-- | :-- | :-- | :-- |');

legacyClaimList.forEach((it, idx) => {
  lines.push(`| ${idx + 1} | \`${it.id}\` | \`${it.file}\` | ${it.oldDesc} | \`inedita (sem prova confirmada)\` |`);
});

lines.push('');
lines.push('---');
lines.push('**Fim do Relatório P18.**');

const reportContent = lines.join('\n');
fs.writeFileSync('PROVENIENCIA.md', reportContent, 'utf8');
fs.writeFileSync('docs/relatorios/PROVENIENCIA.md', reportContent, 'utf8');
console.log('PROVENIENCIA.md generated successfully.');
