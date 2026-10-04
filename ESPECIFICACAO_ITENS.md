# 📐 ESPECIFICACAO_ITENS.md — Manual de Engenharia de Itens Cebraspe
**Plataforma Heuller na Câmara (HNC) — Edital nº 1, de 02 de Outubro de 2026**
*Câmara dos Deputados · Cargo 5: Analista Legislativo — Documentação e Informação Legislativa (Biblioteconomia)*

---

## 1. PRINCÍPIOS DE CONSTRUÇÃO E METODOLOGIA DO CORPUS

A concepção dos itens de avaliação da plataforma segue rigorosamente a modelagem de assertivas do **Cebraspe (Certo / Errado)**, respeitando a premissa de que cada item errado anula a pontuação de um item certo ($	ext{Nota Líquida} = C - E$).

### 1.1. Métricas Canônicas do Modelo Cebraspe
* **Extensão Padrão do Item:** Entre 25 e 48 palavras (assertiva concisa, objetiva e afirmativa).
* **Paridade Simétrica:** 50% de itens Certos e 50% de itens Errados por bloco de 100 questões ($Delta = 0$).
* **Fidelidade às Fontes:** Nenhum item é gerado a partir de alucinações ou paráfrases frouxas. Toda questão é estritamente ancorada em textos legais consolidados (CF/88, RICD, LAI, LGPD, Leis Administrativas) ou na literatura canônica da área (RDA, IFLA LRM, MARC 21, ABNT, Lancaster, Vergueiro, Otlet, Briet, Borko, Le Coadic).
* **Ausência de Pistas Gramaticais:** Os itens errados não devem conter absurdos óbvios que permitam acerto por mero bom senso; o erro deve residir na precisão técnica ou normativa.

---

## 2. A RÉGUA COGNITIVA DE DIFICULDADE (N1 A N5)
*Baseada na Taxonomia de Bloom Revisada (em estrita concordância com o item 14.1.1 do Edital nº 1/2026).*

| Nível | Categoria Cognitiva | Descrição do Comportamento Esperado | Aplicação no Sistema |
| :---: | :--- | :--- | :--- |
| **N1** | **Reconhecer / Lembrar** | Identificação literal de conceitos, siglas, prazos legais, autores canônicos e definições unívocas. | Checkpoints de teoria, cards de fixação e aquecimento. |
| **N2** | **Compreender** | Capacidade de interpretar a norma ou teoria com outras palavras, sem distorcer o núcleo semântico. | Verificação de submódulo e treinos iniciais. |
| **N3** | **Discriminar** | Distinção precisa entre conceitos vizinhos ou fronteiriços suscetíveis a confusão (ex.: desbaste vs. descarte; SIP vs. AIP; FRBR vs. LRM). | Simulado de módulo (baterias de transição). |
| **N4** | **Aplicar e Analisar** | Julgamento de situações práticas, estudos de caso e procedimentos de catalogação, classificação ou tramitação legislativa. | Simulado de módulo e Portais de Revisão. |
| **N5** | **Nível Prova Cebraspe** | Itens calibrados com alto grau de armadilha estrutural, inversões sutis de poder/dever, prazos cruzados e redação formal complexa. | Desafio de 100 Itens e Simulados Gerais da Jornada. |

---

## 3. CATÁLOGO DAS 10 TÉCNICAS DE ITENS DA BANCA CEBRASPE

### Técnicas de Construção de Itens ERRADOS (Distratores Canônicos)

1. **Inversão Polar de Papéis / Conceitos:**
   * *Mecanismo:* Inverte os predicados entre dois conceitos autônomos.
   * *Exemplo Clássico:* Atribuir as características de desbastamento ao descarte e vice-versa; ou inverter as funções de SIP e DIP no modelo OAIS.
2. **Adulteração de Modalidade Deôntica (Poder vs. Dever):**
   * *Mecanismo:* Substitui uma faculdade discricionária por obrigação vinculada, ou uma imposição legal por mera faculdade.
   * *Exemplo Clássico:* No processo legislativo ou na LAI, trocar "poderá a requerimento da Mesa" por "deverá obrigatoriamente".
3. **Generalização Indevida / Universalização Falsa:**
   * *Mecanismo:* Introduz advérbios restritivos ou absolutos (*sempre, nunca, exclusivamente, em qualquer hipótese*) onde a doutrina ou a norma prevê exceções.
   * *Exemplo Clássico:* Afirmar que a LAI impõe sigilo absoluto sem possibilidade de recurso em qualquer documento de segurança pública.
4. **Falsa Causalidade (Duas Verdades, Nexo Inventado):**
   * *Mecanismo:* A primeira oração é verdadeira, a segunda oração é verdadeira, mas a conjunção explicativa (*por conseguinte, haja vista que*) estabelece relação de causa e efeito inexistente.
5. **Anacronismo e Extrapolação de Versão:**
   * *Mecanismo:* Aplica regras de versões superadas (como AACR2) como se fossem válidas para os novos padrões (RDA / IFLA LRM).
6. **Mutilação de Requisito Cumulativo:**
   * *Mecanismo:* A lei exige requisitos cumulativos A, B e C; o item afirma que a presença isolada de A autoriza o ato administrativo.
7. **Usurpação de Competência / Troca de Sujeito:**
   * *Mecanismo:* Atribui competência da Mesa Diretora ao Colégio de Líderes, ou competência do CFB aos Conselhos Regionais (CRB).
8. **Falsa Sinônimia Técnica:**
   * *Mecanismo:* Trata termos técnicos distintos como intercambiáveis (ex.: tratar classificação temática como sinônimo estrito de indexação verbal).

### Técnicas de Construção de Itens CERTOS (Assertivas Válidas)

9. **Paráfrase Culta com Voz Passiva / Inversão Sintática:**
   * *Mecanismo:* O examinador não copia o artigo da lei ou o parágrafo do livro. Reescreve a lição canônica com vocabulário erudito, testando se o candidato realmente domina a matéria ou apenas decorou a frase.
10. **Inclusão Explícita de Exceção ou Ressalva:**
    * *Mecanismo:* O item descreve a regra geral e introduz explicitamente a exceção prevista no texto legal, exigindo segurança terminológica para o julgamento correto.

---

## 4. RUBRICA DE AUDITORIA E REGRAS DE REVISÃO

Antes da inclusão de qualquer questão nos cadernos oficiais do HNC, é obrigatório validar:
- [x] O item possui fonte primária indicada com localizador preciso (artigo de lei, capítulo de manual ou norma)?
- [x] O item atende à métrica de extensão e clareza sintática?
- [x] A justificativa detalha explicitamente a armadilha ou o dispositivo legal aplicável?
- [x] O simulado mantém rigorosa simetria de 50 Certos e 50 Errados?
- [x] O nível de dificuldade (N1 a N5) está devidamente tipificado no metadado do item?

---
*Documento homologado na Rodada 5 — Versão 3.*  
*Projeto Heuller na Câmara — Engenharia Reversa e Precisão Cirúrgica Cebraspe.*
