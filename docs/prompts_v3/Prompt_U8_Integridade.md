# PROMPT PARA O GOOGLE ANTIGRAVITY: FASE U8 (PLANO v3) — Integridade de rótulos e de conteúdo

## 1. Quem você é e o que está fazendo
Você é o agente de engenharia da plataforma de estudos **"Heuller na Câmara" (HNC)**: React 19, TypeScript, Vite, Tailwind v4, Zustand, Zod, Supabase, PWA. Ela prepara **um único candidato** para **Analista Legislativo, Documentação e Informação Legislativa, Biblioteconomia (Cargo 5)**, Câmara dos Deputados, banca **Cebraspe**, **Edital nº 1, de 02/10/2026**, prova em **17/01/2027**. As provas objetivas usam itens **Certo/Errado** com penalização do erro. **Rigor e honestidade valem mais do que volume.**

Você está executando a **Fase U8** do **Plano v3** (correções, UX/UI, pedagogia e modo livre). As fases são executadas **em sequência, uma por sessão**. Pré-condição: U0 a U7 concluídas. **As fórmulas da discursiva abaixo foram confirmadas no edital (itens 9.1, 9.4 a 9.6, 9.8.4 e 9.8.5). Use exatamente essas.**

## 2. Arquivos de referência (no workspace, em `docs/`)
- `docs/Plano_v3_Correcoes_UX_Pedagogia_Heuller_na_Camara.md`: o plano completo (diagnóstico, evidências, fases). **Este prompt vale mais** se houver conflito; registre o conflito no relatório.
- `docs/edital_cargo5.pdf` e o trecho do **item 9 (prova discursiva)**, quando a tarefa o exigir.
- O repositório atual (`src/`, `DIRETRIZES_PROJETO_HEULLER_NA_CAMARA.md`, `docs/CHANGELOG_CONTEUDO.md`).

## 3. Regras globais do Plano v3 (obrigatórias)
1. **Branch:** trabalhe somente na branch `ux/plano-v3`, criada a partir da branch que **contém a Fase 8**. **Nunca** faça merge ou push para `master`/`main` sem aprovação do usuário.
2. **Leia antes de editar.** Respeite a arquitetura existente. **Não adicione dependências** além das que a fase nomear; justifique qualquer exceção no relatório.
3. **Testes a cada tarefa:** `npm test`, `npx tsc -b`, `npm run lint` e `npm run build`. **Se algo falhar, pare**, descreva a causa provável e **não** avance nem enfraqueça o teste.
4. **Um commit por tarefa**, com mensagem `U8.<n>: <resumo>` (por exemplo `U1.2: instala remark-math nos leitores`).
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
| D8 | "Doutrina Canônica **Verbatim**" e "texto original preservado verbatim" | O texto é **redigido por IA**. "Verbatim" sugere citação literal de livros; isso é **arriscado** (citação inventada com aparência de literal). | **[CONFIRMADO]** (`modulo.schema.ts` comenta "verbatim"; a tela diz "Citações de autores clássicos... sem paráfrases vagas") | Esquema e telas | Trocar o rótulo e **auditar citações contra o seu acervo** (U8). |
| D9 | "Radar Cebraspe: Estatística e Incidência de Banca", "Itens da Banca (1520)", "Padrão preliminar baseado em editais reais" | Esses números descrevem **itens escritos pela plataforma**, não dados reais de provas da banca. Rótulo sugere estatística empírica que **não existe**. | Visto nos prints | Telas Radar, Simulados, Discursiva | Reescrever rótulos (U8): "Itens autorais no estilo Cebraspe". |
| D10 | Fórmula da discursiva **errada em dois lugares e certa em outros** | **[CONFIRMADO no edital, itens 9.8.5.1(d) e 9.8.5.2(d)]**: `NQi = NCi − 3 × NEi ÷ TLi` (questões) e `NPT = NC − 6 × NE ÷ TL` (peça técnica). O código ainda tem `NC = NCP − 2×(NE/TL)` em `src/pages/TreinosPage.tsx` (~linha 206) e, **pior**, dentro do **prompt do avaliador de IA** em `src/pages/DiscursivaPage.tsx` (~linha 24), que manda o modelo aplicar a fórmula errada | **[CONFIRMADO]** | Os dois arquivos citados | Fase U8.4: fórmula única centralizada, com testes numéricos. **A correção por IA hoje usa a fórmula errada.** |
| D11 | Progresso diz "dados **100% no navegador**, sem servidores externos", mas o projeto tem sincronização com Supabase | Texto desatualizado ou funcionalidade inativa | **[CONFIRMADO]** (existem `src/services/*SyncService.ts`) | `ProgressoPage` | Decidir qual é verdade e alinhar o texto (U8). |
| D12 | Contagens que não batem: "59 etapas / 40 submódulos" x "Todos os Submódulos (64)"; "10 cadernos da trilha (M1 a M10)" x lista M1 a M14 | Estruturas diferentes (trilha de 10 módulos x acervo de 14) apresentadas sem explicação | Visto nos prints | Painel, Jornada, Radar, Treinos | Rotular claramente "Trilha principal" x "Acervo" (U6). Com o modo livre, simplificar. |

## 5. TAREFAS DESTA FASE
### Integridade de rótulos e de conteúdo
- **U8.1 "Verbatim":** remover o termo dos rótulos e do esquema; trocar por "Texto autoral com fundamentação em..." **Validação:** `grep` retorna zero.
- **U8.2 Verificação de citações contra o acervo:** script que, para cada trecho entre aspas atribuído a um autor, **procura o trecho** nos PDFs/MDs de `acervo-estudos` (extração de texto). Trecho **não localizado** = marcado `[NÃO CONFERIDO]` e **convertido em paráfrase com referência** ou removido. **Validação:** relatório; nenhuma citação literal sem correspondência.
- **U8.3 Radar e simulados:** reescrever "Estatística e Incidência de Banca", "Itens da Banca" e "Padrão preliminar baseado em editais reais" para **"Itens autorais no estilo Cebraspe"** e "Padrões de armadilha (autorais)". Onde houver **dado real** (item de prova de fato), exibir a identificação (banca, ano, cargo, questão). **Validação:** nenhuma tela afirma estatística sem fonte.
- **U8.4 Discursiva: fórmulas e regras oficiais (confirmadas no edital, itens 9.1, 9.4 a 9.6 e 9.8.4 a 9.8.5; Cargo 5):**
  - **Estrutura:** 60,00 pontos = **2 questões** (até **20 linhas**, **15,00 pts** cada) + **1 peça técnica** (até **50 linhas**, **30,00 pts**) (9.1; 9.8.5.1; 9.8.5.2).
  - **Questão:** `NQi = NCi − 3 × NEi ÷ TLi` (i = 1 ou 2), com `NCi ≤ 15,00` (9.8.5.1, d).
  - **Peça técnica:** `NPT = NC − 6 × NE ÷ TL`, com `NC ≤ 30,00` (9.8.5.2, d).
  - **Nota final:** `NFPD = NQ1 + NQ2 + NPT`; **aprovação com `NFPD ≥ 30,00`** (9.8.5.3 e 9.8.5.4).
  - **Regras de contagem:** `TL` = **linhas efetivamente escritas**; `NE` = erros de **grafia, morfossintaxe e propriedade vocabular**; texto **fora do local ou além do limite de linhas é desconsiderado**; **nota zero** se `NQi < 0` ou `NPT < 0`, e em **fuga ao tema** ou **ausência de texto** (9.8.5.1, c, e, f; 9.8.5.2, c, e, f).
  - **Quem corrige o conteúdo (9.8.4.1):** **dois examinadores**; nota = **média de duas notas convergentes** (diferença ≤ **25%** da nota máxima); se divergirem, **terceira correção** e média das duas mais próximas, desde que convergentes.
  - **Formato real da prova:** texto **manuscrito**, caneta esferográfica **preta** de material transparente (9.4); **qualquer marca que identifique o candidato anula a prova** (9.5); **o rascunho não vale** (9.6).
  - **Correção no código:** remover `NC = NCP − 2×(NE/TL)` de `src/pages/TreinosPage.tsx` (~linha 206) e do **prompt do avaliador de IA** em `src/pages/DiscursivaPage.tsx` (~linha 24); criar `src/domain/discursiva/formulas.ts` com as funções `notaQuestao` e `notaPeca`, usadas por **todas** as telas e pelo prompt. **Testes numéricos:** `NC=12, NE=6, TL=20 → NQ = 11,1`; `NC=24, NE=10, TL=50 → NPT = 22,8`; caso de nota negativa → 0; `NFPD = 30` aprova, `29,99` reprova.
  - **Honestidade na tela:** a correção por IA é uma **estimativa**; a nota real vem de **dois examinadores humanos**. Exibir esse aviso junto ao resultado.
  - **Opcional (só com aprovação):** modo de treino **manuscrito** (cronômetro e contagem de linhas na tela, **resposta escrita no papel**, depois **autoavaliação** com o espelho). **Não** prometer leitura automática de letra manuscrita.
  - **Validação:** `grep -rn "2×(NE\|2 \* (NE" src` retorna zero; testes numéricos passam.
- **U8.5 Texto de privacidade/armazenamento:** alinhar com a realidade (local e/ou Supabase). **Validação:** revisão manual.
- **U8.6 Contagens:** gerar os números exibidos (submódulos, etapas, cadernos) **a partir do registry**, nunca digitados. **Validação:** teste que compara tela e dados.
- **U8.7 Normas ABNT 2025:** conferir no acervo (`Referencias-NBR-6023-2025.pdf`, `NBR-15287_2025`) e atualizar dossiê e telas. **Validação:** nenhuma NBR sem ano.


## 6. O que entregar ao terminar a fase
Gere `docs/relatorios/plano_v3_U8_relatorio.md` e **cole o conteúdo na sua resposta final**, com:
1. **Tarefas concluídas** (id, commit, arquivos alterados).
2. **Tarefas não concluídas ou parciais** e o motivo.
3. **Itens `[VERIFICAR]` pendentes** (arquivo, linha, o que falta conferir, em qual fonte).
4. **Medições** (quando houver): antes e depois.
5. **Resultado dos testes** (`npm test`, `tsc`, `lint`, `build`).
6. **Capturas de tela** (360×800 e 412×915) das telas alteradas, quando a fase tocar a interface.
7. **Riscos e decisões que dependem do usuário.**

**Não avance para a próxima fase.** Pare e aguarde o usuário.
