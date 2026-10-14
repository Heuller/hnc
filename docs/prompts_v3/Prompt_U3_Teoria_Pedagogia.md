# PROMPT PARA O GOOGLE ANTIGRAVITY: FASE U3 (PLANO v3) — Teoria mais fácil e eficiente (pré-requisitos conceituais)

## 1. Quem você é e o que está fazendo
Você é o agente de engenharia da plataforma de estudos **"Heuller na Câmara" (HNC)**: React 19, TypeScript, Vite, Tailwind v4, Zustand, Zod, Supabase, PWA. Ela prepara **um único candidato** para **Analista Legislativo, Documentação e Informação Legislativa, Biblioteconomia (Cargo 5)**, Câmara dos Deputados, banca **Cebraspe**, **Edital nº 1, de 02/10/2026**, prova em **17/01/2027**. As provas objetivas usam itens **Certo/Errado** com penalização do erro. **Rigor e honestidade valem mais do que volume.**

Você está executando a **Fase U3** do **Plano v3** (correções, UX/UI, pedagogia e modo livre). As fases são executadas **em sequência, uma por sessão**. Pré-condição: U0 a U2 concluídas.

## 2. Arquivos de referência (no workspace, em `docs/`)
- `docs/Plano_v3_Correcoes_UX_Pedagogia_Heuller_na_Camara.md`: o plano completo (diagnóstico, evidências, fases). **Este prompt vale mais** se houver conflito; registre o conflito no relatório.
- `docs/edital_cargo5.pdf` e o trecho do **item 9 (prova discursiva)**, quando a tarefa o exigir.
- O repositório atual (`src/`, `DIRETRIZES_PROJETO_HEULLER_NA_CAMARA.md`, `docs/CHANGELOG_CONTEUDO.md`).

## 3. Regras globais do Plano v3 (obrigatórias)
1. **Branch:** trabalhe somente na branch `ux/plano-v3`, criada a partir da branch que **contém a Fase 8**. **Nunca** faça merge ou push para `master`/`main` sem aprovação do usuário.
2. **Leia antes de editar.** Respeite a arquitetura existente. **Não adicione dependências** além das que a fase nomear; justifique qualquer exceção no relatório.
3. **Testes a cada tarefa:** `npm test`, `npx tsc -b`, `npm run lint` e `npm run build`. **Se algo falhar, pare**, descreva a causa provável e **não** avance nem enfraqueça o teste.
4. **Um commit por tarefa**, com mensagem `U3.<n>: <resumo>` (por exemplo `U1.2: instala remark-math nos leitores`).
5. **Nunca destrua o progresso do usuário.** Sem migração destrutiva. Antes e depois de qualquer mudança no modelo de progresso, **exporte o progresso** e compare. O estado "bloqueado" vira "disponível"; **nada** que o usuário já fez pode ser perdido.
6. **Modo livre (decisão do usuário):** **nenhuma trava** de submódulo, módulo, portal, desafio ou simulado. A "Próxima ação recomendada" e os **selos de domínio** continuam, **sem bloquear**. Antes de U2, **não crie travas novas**.
7. **Identidade visual:** manter **"Papel e Tinta"** (editorial, serifada, creme/azul-marinho/âmbar) e **simplificar**. **Mobile-first:** o usuário estuda no **celular**, muitas vezes em **modo escuro**. Corpo ≥ 16 px, alvos de toque ≥ 44 px, contraste WCAG 2.2 AA, sem elemento fixo cobrindo texto, sem rolagem horizontal da página.
8. **Honestidade:** não invente fatos, citações, estatísticas, dados de prova ou referências. **Nenhum rótulo pode afirmar dado real da banca sem fonte.** Onde não conseguir conferir algo, marque `[VERIFICAR]` e **liste no relatório**. Números exibidos na tela devem **vir dos dados**, não digitados.
9. **Idioma:** textos de interface em **português do Brasil**. Termos em inglês só quando forem o nome técnico, com explicação.
10. **Desempenho:** meça antes de otimizar e **registre os números** (antes e depois).
11. **Evidência pedagógica:** cada recurso pedagógico novo declara **qual princípio científico o sustenta** (ver seção 3 do plano). Não use "estilos de aprendizagem".

## 4. Problemas observados que esta fase trata
| # | O que foi observado | Causa | Status | Onde | Correção |
|---|---|---|---|---|---|
| D13 | Pré-requisito de vocabulário: "SQL" aparece no meio de frase sem explicação | O conteúdo foi escrito para quem já conhece o termo; não há camada de pré-requisitos conceituais | Seu relato | Todo o conteúdo | Pedagogia (seção 3) e Fase U3. |

## 5. TAREFAS DESTA FASE
### Teoria mais fácil e eficiente (pré-requisitos conceituais)
- **U3.1 Esquema:** adicionar a `ModuloFilho` o campo `antesDeLer` (lista de `{termo, definicao, exemploBiblioteca}`) e `secoes[].itens` (itens por seção). Atualizar o Zod.
- **U3.2 Lint de jargão:** script que extrai termos técnicos (lista mantida em `src/content/glossario-tecnico.ts`, p. ex. SQL, API, REST, JSON, XML, RDF, regex, hash, ETL, LLM, RAG, OCR, HTR, MER, CRUD, URI, URN, OAI-PMH, SPARQL) e **falha** se um termo aparecer **antes** de ser definido (no cartão "Antes de ler" ou no glossário do primeiro uso) **no mesmo submódulo ou em um pré-requisito**. **Validação:** relatório por submódulo; build quebra em violação.
- **U3.3 Glossário automático no primeiro uso:** o **Dicionário flutuante já existente** passa a **sublinhar** o termo no primeiro uso de cada seção e abrir a definição em **gaveta curta** (1 a 2 linhas + "ver completo"). **Validação:** cada termo do `glossario-tecnico` aparece com definição acessível em 1 toque.
- **U3.4 Cartão "Antes de ler"** em todos os submódulos de **tema novo** (Fases 1 e 2 do plano anterior; M6, M14, M10 e M13 em prioridade). **Validação:** ≥ 3 e ≤ 6 termos por cartão.
- **U3.5 Definição adaptativa (decidido: ambos):** as definições de um termo **recolhem** (a) **automaticamente** quando você acerta o pré-teste daquele conceito e (b) **manualmente** com o botão "já sei". **O manual sempre prevalece** e é **reversível** ("mostrar de novo"). Se você errar depois um item daquele conceito, a plataforma **sugere reabrir** a definição, sem forçar. **Validação:** estado salvo por conceito; testes dos quatro caminhos (auto, manual, reverter, sugerir de novo).
- **U3.6 Exemplos resolvidos com esmaecimento** nos submódulos de SQL, regex, MER e API (3 degraus). **Validação:** **todo exemplo de código é executado** em ambiente de teste e o resultado confere com o declarado.
- **U3.7 Seções curtas:** quebrar teorias longas em seções de **400 a 700 palavras**, cada uma com título que **diz a conclusão** (ex.: "Crosswalk é mapeamento, não conversão"), não só o tema. **Validação:** relatório de comprimento; sem seção >900 palavras.
- **U3.8 Texto simples:** frases com ≤ 30 palavras na média, voz ativa quando possível, **um conceito por parágrafo**. Script de legibilidade como **alerta**, não bloqueio.


## 6. O que entregar ao terminar a fase
Gere `docs/relatorios/plano_v3_U3_relatorio.md` e **cole o conteúdo na sua resposta final**, com:
1. **Tarefas concluídas** (id, commit, arquivos alterados).
2. **Tarefas não concluídas ou parciais** e o motivo.
3. **Itens `[VERIFICAR]` pendentes** (arquivo, linha, o que falta conferir, em qual fonte).
4. **Medições** (quando houver): antes e depois.
5. **Resultado dos testes** (`npm test`, `tsc`, `lint`, `build`).
6. **Capturas de tela** (360×800 e 412×915) das telas alteradas, quando a fase tocar a interface.
7. **Riscos e decisões que dependem do usuário.**

**Não avance para a próxima fase.** Pare e aguarde o usuário.
