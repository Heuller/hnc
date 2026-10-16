import fs from 'node:fs';
import path from 'node:path';

// 1. sub-4-4.ts
const p44 = path.resolve('src/content/modules/m4-recuperacao/sub-4-4.ts');
let c44 = fs.readFileSync(p44, 'utf8');
c44 = c44.replace(
  `#### D. Metodologias de Estudos de Usuários`,
  `### 4. Metodologias Diretas e Indiretas de Estudos de Usuários Revelam Necessidades Reais no Legislativo\n\nA investigação sistemática do comportamento informacional da comunidade classifica-se em dois grandes paradigmas metodológicos:`
);
// Ajusta as seções seguintes em sub-4-4
c44 = c44.replace(`### 4. A Disseminação Seletiva`, `### 5. A Disseminação Seletiva`);
c44 = c44.replace(`### 5. Modelos Canônicos`, `### 6. Modelos Canônicos`);
c44 = c44.replace(`### 6. O Modelo Sense-Making`, `### 7. O Modelo Sense-Making`);
fs.writeFileSync(p44, c44, 'utf8');
console.log('✅ sub-4-4.ts atualizado');

// 2. sub-5-2.ts
const p52 = path.resolve('src/content/modules/m5-gestao/sub-5-2.ts');
let c52 = fs.readFileSync(p52, 'utf8');
c52 = c52.replace(
  `### 4. Produtos de Inteligência Informacional no Legislativo (Edital Bloco E, itens 3.12 e 3.13)`,
  `### 4. Produtos de Inteligência Informacional Imediata: Notas, Relatórios e Panoramas Subsidiam Decisões Rápidas`
);
c52 = c52.replace(
  `#### D. Linha do Tempo Normativa e Histórica`,
  `### 5. Produtos Estruturados de Inteligência: Linhas do Tempo, Mapas de Atores e Dossiês Mapeiam Redes Complexas\n\n#### A. Linha do Tempo Normativa e Histórica`
);
c52 = c52.replace(`#### E. Mapa de Atores`, `#### B. Mapa de Atores`);
c52 = c52.replace(`#### F. Dossiê Legislativo e Documental`, `#### C. Dossiê Legislativo e Documental`);
c52 = c52.replace(`#### G. Revisão de Estado da Arte`, `#### D. Revisão de Estado da Arte`);
c52 = c52.replace(`### 5. Protocolos de Atendimento`, `### 6. Protocolos de Atendimento`);
c52 = c52.replace(`### 6. Comunicação Técnica e Neutralidade Axiológica`, `### 7. Comunicação Técnica e Neutralidade Axiológica`);
c52 = c52.replace(`### 7. Avaliação Contínua e Gestão da Qualidade`, `### 8. Avaliação Contínua e Gestão da Qualidade`);
fs.writeFileSync(p52, c52, 'utf8');
console.log('✅ sub-5-2.ts atualizado');

// 3. sub-5-3.ts
const p53 = path.resolve('src/content/modules/m5-gestao/sub-5-3.ts');
let c53 = fs.readFileSync(p53, 'utf8');
c53 = c53.replace(
  `#### B. Métodos Centrados no Uso e Gestão de Coleções Orientada por Dados (Edital Bloco D, item 4.7)`,
  `### 8. Métodos Centrados no Uso e Gestão Orientada por Dados (CPU, COUNTER e Slote) Orientam Decisões Orçamentárias`
);
c53 = c53.replace(`### 8. Censura, Controle Social`, `### 9. Censura, Controle Social`);
fs.writeFileSync(p53, c53, 'utf8');
console.log('✅ sub-5-3.ts atualizado');

// 4. sub-9-3.ts
const p93 = path.resolve('src/content/modules/m9-comunicacao/sub-9-3.ts');
let c93 = fs.readFileSync(p93, 'utf8');
c93 = c93.replace(
  `#### D. Limitações aos Direitos Autorais na Lei nº 9.610/1998 (Arts. 46 a 48 — Exceções Legais de Uso Livre)`,
  `### 4. Limitações aos Direitos Autorais na Lei nº 9.610/1998 Constituem Rol Taxativo (Numerus Clausus)`
);
c93 = c93.replace(`### 4. As Licenças Creative Commons`, `### 5. As Licenças Creative Commons`);
c93 = c93.replace(`### 5. Acesso Aberto e Repositórios`, `### 6. Acesso Aberto e Repositórios`);
c93 = c93.replace(`### 6. O Movimento da Ciência Aberta`, `### 7. O Movimento da Ciência Aberta`);
fs.writeFileSync(p93, c93, 'utf8');
console.log('✅ sub-9-3.ts atualizado');

// 5. sub-14-2.ts
const p142 = path.resolve('src/content/modules/m14-tecnologia-dados/sub-14-2.ts');
let c142 = fs.readFileSync(p142, 'utf8');
c142 = c142.replace(
  `#### D. Assinatura Digital: Funcionamento, Propriedades e Distinções Críticas`,
  `### 5. Assinatura Digital e ICP-Brasil Asseguram Autenticidade, Integridade e Não Repúdio com Validade Jurídica\n\n#### A. Assinatura Digital: Funcionamento, Propriedades e Distinções Críticas`
);
c142 = c142.replace(`#### E. A Infraestrutura de Chaves Públicas Brasileira`, `#### B. A Infraestrutura de Chaves Públicas Brasileira`);
c142 = c142.replace(`### 5. Continuidade de Negócios`, `### 6. Continuidade de Negócios`);
fs.writeFileSync(p142, c142, 'utf8');
console.log('✅ sub-14-2.ts atualizado');

// 6. sub-14-4.ts
const p144 = path.resolve('src/content/modules/m14-tecnologia-dados/sub-14-4.ts');
let c144 = fs.readFileSync(p144, 'utf8');
c144 = c144.replace(
  `### 5. Mineração de Dados (*Data Mining*) e Mineração de Textos (*Text Mining*) — Alvo E3`,
  `### 5. Mineração de Dados (Data Mining) Estrutura Padrões Preditivos e Descritivos pelo Ciclo CRISP-DM`
);
c144 = c144.replace(
  `#### C. Mineração de Textos (*Text Mining*) e Pipeline de Processamento de Linguagem Natural`,
  `### 6. Mineração de Textos (Text Mining) e TF-IDF Operam na Faixa Áurea de Luhn Sob a Lei de Zipf\n\n#### A. Mineração de Textos (*Text Mining*) e Pipeline de Processamento de Linguagem Natural`
);
c144 = c144.replace(`#### D. Ponderação Term Frequency`, `#### B. Ponderação Term Frequency`);
c144 = c144.replace(`#### E. Conexão Epistemológica com a Lei de Zipf`, `#### C. Conexão Epistemológica com a Lei de Zipf`);
fs.writeFileSync(p144, c144, 'utf8');
console.log('✅ sub-14-4.ts atualizado');
