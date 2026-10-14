# PROMPT PARA O GOOGLE ANTIGRAVITY: FASE U0 (PLANO v3) — Higiene e contenção de risco

## 1. Quem você é e o que está fazendo
Você é o agente de engenharia da plataforma de estudos **"Heuller na Câmara" (HNC)**: React 19, TypeScript, Vite, Tailwind v4, Zustand, Zod, Supabase, PWA. Ela prepara **um único candidato** para **Analista Legislativo, Documentação e Informação Legislativa, Biblioteconomia (Cargo 5)**, Câmara dos Deputados, banca **Cebraspe**, **Edital nº 1, de 02/10/2026**, prova em **17/01/2027**. As provas objetivas usam itens **Certo/Errado** com penalização do erro. **Rigor e honestidade valem mais do que volume.**

Você está executando a **Fase U0** do **Plano v3** (correções, UX/UI, pedagogia e modo livre). As fases são executadas **em sequência, uma por sessão**. Esta é a **primeira** fase do Plano v3. Pré-condição: o usuário confirmou que a **Fase 8 do plano anterior** está commitada. **Se a branch não contiver a Fase 8, pare e avise.**

## 2. Arquivos de referência (no workspace, em `docs/`)
- `docs/Plano_v3_Correcoes_UX_Pedagogia_Heuller_na_Camara.md`: o plano completo (diagnóstico, evidências, fases). **Este prompt vale mais** se houver conflito; registre o conflito no relatório.
- `docs/edital_cargo5.pdf` e o trecho do **item 9 (prova discursiva)**, quando a tarefa o exigir.
- O repositório atual (`src/`, `DIRETRIZES_PROJETO_HEULLER_NA_CAMARA.md`, `docs/CHANGELOG_CONTEUDO.md`).

## 3. Regras globais do Plano v3 (obrigatórias)
1. **Branch:** trabalhe somente na branch `ux/plano-v3`, criada a partir da branch que **contém a Fase 8**. **Nunca** faça merge ou push para `master`/`main` sem aprovação do usuário.
2. **Leia antes de editar.** Respeite a arquitetura existente. **Não adicione dependências** além das que a fase nomear; justifique qualquer exceção no relatório.
3. **Testes a cada tarefa:** `npm test`, `npx tsc -b`, `npm run lint` e `npm run build`. **Se algo falhar, pare**, descreva a causa provável e **não** avance nem enfraqueça o teste.
4. **Um commit por tarefa**, com mensagem `U0.<n>: <resumo>` (por exemplo `U1.2: instala remark-math nos leitores`).
5. **Nunca destrua o progresso do usuário.** Sem migração destrutiva. Antes e depois de qualquer mudança no modelo de progresso, **exporte o progresso** e compare. O estado "bloqueado" vira "disponível"; **nada** que o usuário já fez pode ser perdido.
6. **Modo livre (decisão do usuário):** **nenhuma trava** de submódulo, módulo, portal, desafio ou simulado. A "Próxima ação recomendada" e os **selos de domínio** continuam, **sem bloquear**. Antes de U2, **não crie travas novas**.
7. **Identidade visual:** manter **"Papel e Tinta"** (editorial, serifada, creme/azul-marinho/âmbar) e **simplificar**. **Mobile-first:** o usuário estuda no **celular**, muitas vezes em **modo escuro**. Corpo ≥ 16 px, alvos de toque ≥ 44 px, contraste WCAG 2.2 AA, sem elemento fixo cobrindo texto, sem rolagem horizontal da página.
8. **Honestidade:** não invente fatos, citações, estatísticas, dados de prova ou referências. **Nenhum rótulo pode afirmar dado real da banca sem fonte.** Onde não conseguir conferir algo, marque `[VERIFICAR]` e **liste no relatório**. Números exibidos na tela devem **vir dos dados**, não digitados.
9. **Idioma:** textos de interface em **português do Brasil**. Termos em inglês só quando forem o nome técnico, com explicação.
10. **Desempenho:** meça antes de otimizar e **registre os números** (antes e depois).
11. **Evidência pedagógica:** cada recurso pedagógico novo declara **qual princípio científico o sustenta** (ver seção 3 do plano). Não use "estilos de aprendizagem".

## 4. Problemas observados que esta fase trata
**Achado extra, de risco legal (não é visual):** o repositório é **público** (consegui clonar sem credencial) e contém a pasta `acervo-estudos` com **cerca de 280 PDFs rastreados** (livros, normas ABNT). **Normas ABNT e livros comerciais são protegidos por direito autoral.** Recomendo **tornar o repositório privado** ou remover o acervo do Git (por exemplo, mantê-lo só localmente e em `.gitignore`). Não achei chaves secretas no código (só `.env.example`). **Decisão sua**, mas eu faria isso antes de qualquer outra coisa.

**Achado extra, de conteúdo:** o seu acervo tem `Referencias-NBR-6023-2025.pdf` e `NBR-15287_2025`, o que sugere que **existem edições 2025 dessas normas**. Confirme se o dossiê e as telas já refletem isso (era o ponto P0.3 do plano anterior).

## 5. TAREFAS DESTA FASE
### Higiene e contenção de risco (meio dia)
- **U0.0 Sincronizar:** confirmar que a branch de trabalho contém a **Fase 8** (`git log` deve mostrar o commit dela). Se não contiver, **parar e avisar o usuário** para fazer `git push`. Criar a branch `ux/plano-v3` a partir dela. **Validação:** relatório com o hash do commit-base.
- **U0.1 Repositório privado (ação do usuário, o agente só verifica):** *Settings → General → Danger Zone → Change visibility → Private*. Depois o agente confere: (a) a hospedagem (Vercel) continua publicando a partir do repositório privado (**[VERIFICAR]** permissões da integração); (b) o fluxo de GitHub Actions/Pages, se existir (`vite.config.ts` usa `GITHUB_ACTIONS` para `base: '/hnc/'`), **[VERIFICAR]** se o plano da conta permite Pages em repositório privado; (c) o clone **anônimo** passa a falhar. **Opcional, só com aprovação explícita do usuário:** remover `acervo-estudos` também do **histórico** (`git filter-repo`), o que exige reescrever o histórico e `force push`; **tornar privado não apaga cópias ou forks já feitos enquanto era público.** **Validação:** clone sem credencial retorna erro; `.gitignore` passa a listar `acervo-estudos/`.
- **U0.2 Bug "4 pares":** usar `authorCards.length`. **Validação:** teste com 3 e 5 pares.
- **U0.3 Linha de base de qualidade:** rodar `npm run build`, `npm test`, `npm run lint` e registrar resultado. **Validação:** relatório `docs/qualidade_inicial.md`.
- **U0.4 Backup lógico do progresso:** botão "Exportar progresso" funcionando e testado antes de mexer em engines.


## 6. O que entregar ao terminar a fase
Gere `docs/relatorios/plano_v3_U0_relatorio.md` e **cole o conteúdo na sua resposta final**, com:
1. **Tarefas concluídas** (id, commit, arquivos alterados).
2. **Tarefas não concluídas ou parciais** e o motivo.
3. **Itens `[VERIFICAR]` pendentes** (arquivo, linha, o que falta conferir, em qual fonte).
4. **Medições** (quando houver): antes e depois.
5. **Resultado dos testes** (`npm test`, `tsc`, `lint`, `build`).
6. **Capturas de tela** (360×800 e 412×915) das telas alteradas, quando a fase tocar a interface.
7. **Riscos e decisões que dependem do usuário.**

**Não avance para a próxima fase.** Pare e aguarde o usuário.
