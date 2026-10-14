# PROMPT PARA O GOOGLE ANTIGRAVITY: FASE U1 (PLANO v3) — Motor de renderização do conteúdo

## 1. Quem você é e o que está fazendo
Você é o agente de engenharia da plataforma de estudos **"Heuller na Câmara" (HNC)**: React 19, TypeScript, Vite, Tailwind v4, Zustand, Zod, Supabase, PWA. Ela prepara **um único candidato** para **Analista Legislativo, Documentação e Informação Legislativa, Biblioteconomia (Cargo 5)**, Câmara dos Deputados, banca **Cebraspe**, **Edital nº 1, de 02/10/2026**, prova em **17/01/2027**. As provas objetivas usam itens **Certo/Errado** com penalização do erro. **Rigor e honestidade valem mais do que volume.**

Você está executando a **Fase U1** do **Plano v3** (correções, UX/UI, pedagogia e modo livre). As fases são executadas **em sequência, uma por sessão**. Pré-condição: U0 concluída.

## 2. Arquivos de referência (no workspace, em `docs/`)
- `docs/Plano_v3_Correcoes_UX_Pedagogia_Heuller_na_Camara.md`: o plano completo (diagnóstico, evidências, fases). **Este prompt vale mais** se houver conflito; registre o conflito no relatório.
- `docs/edital_cargo5.pdf` e o trecho do **item 9 (prova discursiva)**, quando a tarefa o exigir.
- O repositório atual (`src/`, `DIRETRIZES_PROJETO_HEULLER_NA_CAMARA.md`, `docs/CHANGELOG_CONTEUDO.md`).

## 3. Regras globais do Plano v3 (obrigatórias)
1. **Branch:** trabalhe somente na branch `ux/plano-v3`, criada a partir da branch que **contém a Fase 8**. **Nunca** faça merge ou push para `master`/`main` sem aprovação do usuário.
2. **Leia antes de editar.** Respeite a arquitetura existente. **Não adicione dependências** além das que a fase nomear; justifique qualquer exceção no relatório.
3. **Testes a cada tarefa:** `npm test`, `npx tsc -b`, `npm run lint` e `npm run build`. **Se algo falhar, pare**, descreva a causa provável e **não** avance nem enfraqueça o teste.
4. **Um commit por tarefa**, com mensagem `U1.<n>: <resumo>` (por exemplo `U1.2: instala remark-math nos leitores`).
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
| D1 | Códigos como `$K[S] + \Delta I = K[S+\Delta S]$` e `$n^2$` no meio do texto | A fórmula usa a sintaxe `$...$`, mas **nenhum dos dois leitores de Markdown carrega o plugin `remark-math`** (que transforma `$...$` em fórmula). O `rehype-katex` sozinho não faz nada sem ele. O `remark-math` **nem está no `package.json`**. | **[CONFIRMADO]** | `src/components/MarkdownViewer.tsx` (só `remarkGfm`); `src/components/common/MarkdownRenderer.tsx` (`rehypeKatex` sem `remark-math`); `package.json` | Instalar `remark-math`, usar nos dois leitores, e **unificar os dois leitores em um só**. Cerca de **267 linhas em 45 arquivos** de conteúdo têm essa sintaxe. |
| D2 | `[!CAUTION]` em inglês, entre colchetes | O conteúdo usa a sintaxe de alertas do GitHub (`> [!CAUTION]`), mas o leitor não a interpreta; o `blockquote` só detecta palavras ("Atenção", "ERRADO", emoji). | **[CONFIRMADO]** | 10 ocorrências em `src/content/modules/**` (por exemplo `m1-fundamentos/sub-1-1.ts`) | Criar plugin que converta `[!NOTE\|TIP\|IMPORTANT\|WARNING\|CAUTION]` em **callout em português** (Nota, Dica, Importante, Atenção, Casca de banana) com ícone. |
| D6 | Tabela "Distratores" em celular: "GABARI TO" quebrado, texto apertado, botão amarelo "Mnemônicos" cobrindo o texto | Tabela larga em tela estreita; botão flutuante (FAB) sempre sobre a leitura. | Visto nos prints | Componentes de tabela e Mnemônicos | Tabela vira **cartões empilhados** no celular; Mnemônicos vira **aba/gaveta na barra de ações**, não flutuante. |

## 5. TAREFAS DESTA FASE
### Motor de renderização do conteúdo
- **U1.1 Unificar os dois leitores** (`MarkdownViewer` e `MarkdownRenderer`) em **um** componente `ConteudoMarkdown`, com variantes de tema e tamanho. **Validação:** nenhuma página importa os antigos; testes de snapshot.
- **U1.2 Instalar e configurar** `remark-math` + `rehype-katex`; carregar o CSS do KaTeX só onde houver fórmula (carga sob demanda). **Atenção:** `R$` (reais) não pode virar fórmula. **Validação:** `R$ 32.070,88` aparece como texto; `$n^2$` vira fórmula.
- **U1.3 Plugin de alertas** `[!NOTE|TIP|IMPORTANT|WARNING|CAUTION]` → callout em português (Nota, Dica, Importante, Atenção, **Casca de banana**). Manter a detecção por palavras como **fallback**, mas **trocar** o critério por um marcador explícito. **Validação:** nenhum `[!` aparece no DOM.
- **U1.4 Varredura do conteúdo:** script que (a) lista toda ocorrência de `$` e `\` e `[!` nos arquivos de conteúdo, (b) valida que cada fórmula compila no KaTeX, (c) acusa `$` solto. **Validação:** zero fórmulas inválidas; relatório.
- **U1.5 Teste de regressão visual:** renderizar cada submódulo e **falhar** se o texto final contiver `$`, `\Delta`, `\times`, `\approx` ou `[!`.
- **U1.6 Tabelas responsivas:** componente `TabelaResponsiva` (vira cartões em <640 px) para quadros comparativos e quadro de distratores. **Validação:** sem quebra de palavra em cabeçalho (`GABARITO`), sem rolagem horizontal da página.


## 6. O que entregar ao terminar a fase
Gere `docs/relatorios/plano_v3_U1_relatorio.md` e **cole o conteúdo na sua resposta final**, com:
1. **Tarefas concluídas** (id, commit, arquivos alterados).
2. **Tarefas não concluídas ou parciais** e o motivo.
3. **Itens `[VERIFICAR]` pendentes** (arquivo, linha, o que falta conferir, em qual fonte).
4. **Medições** (quando houver): antes e depois.
5. **Resultado dos testes** (`npm test`, `tsc`, `lint`, `build`).
6. **Capturas de tela** (360×800 e 412×915) das telas alteradas, quando a fase tocar a interface.
7. **Riscos e decisões que dependem do usuário.**

**Não avance para a próxima fase.** Pare e aguarde o usuário.
