# PLANO v3 (VERSÃO APROVADA): CORREÇÕES, UX/UI PROFISSIONAL, PEDAGOGIA BASEADA EM EVIDÊNCIA E MODO LIVRE
**Plataforma *Heuller na Câmara* (HNC) | versão de 14/10/2026, com as suas respostas integradas | prova em 17/01/2027**

---

## 0. COMO ESTE DIAGNÓSTICO FOI FEITO

- **Fontes:** (1) os dois PDFs de telas que você enviou (28 páginas desktop/mobile + 9 capturas do celular); (2) o repositório `github.com/Heuller/hnc`, branch `master`, commit `ed27649` ("consolidação das Fases 0 a 6"), que eu **li** (não rodei).
- **Limite 1 (atualizado):** você disse que finalizou e commitou a Fase 8, mas **no GitHub o último commit (`9b680d2`, 14/10/2026 18:28) é o da Fase 7**. Não encontrei a Fase 8 em nenhuma das 6 branches remotas. **Provavelmente falta um `git push`.** Os achados abaixo valem para o que está no GitHub; o **primeiro passo da Fase U0** é conferir que a Fase 8 está na branch de trabalho. Arquivos citados com caminho exato.
- **Limite 2:** eu **não executei** a aplicação, então causas de lentidão aparecem como **hipóteses a medir**, não como fatos.
- **O que é fato (verificado no código):** itens marcados **[CONFIRMADO]**. O que é inferência: **[HIPÓTESE]**.

---

## 1. DIAGNÓSTICO: SINTOMA → CAUSA → CORREÇÃO

| # | O que você viu | Causa | Status | Onde | Correção |
|---|---|---|---|---|---|
| D1 | Códigos como `$K[S] + \Delta I = K[S+\Delta S]$` e `$n^2$` no meio do texto | A fórmula usa a sintaxe `$...$`, mas **nenhum dos dois leitores de Markdown carrega o plugin `remark-math`** (que transforma `$...$` em fórmula). O `rehype-katex` sozinho não faz nada sem ele. O `remark-math` **nem está no `package.json`**. | **[CONFIRMADO]** | `src/components/MarkdownViewer.tsx` (só `remarkGfm`); `src/components/common/MarkdownRenderer.tsx` (`rehypeKatex` sem `remark-math`); `package.json` | Instalar `remark-math`, usar nos dois leitores, e **unificar os dois leitores em um só**. Cerca de **267 linhas em 45 arquivos** de conteúdo têm essa sintaxe. |
| D2 | `[!CAUTION]` em inglês, entre colchetes | O conteúdo usa a sintaxe de alertas do GitHub (`> [!CAUTION]`), mas o leitor não a interpreta; o `blockquote` só detecta palavras ("Atenção", "ERRADO", emoji). | **[CONFIRMADO]** | 10 ocorrências em `src/content/modules/**` (por exemplo `m1-fundamentos/sub-1-1.ts`) | Criar plugin que converta `[!NOTE\|TIP\|IMPORTANT\|WARNING\|CAUTION]` em **callout em português** (Nota, Dica, Importante, Atenção, Casca de banana) com ícone. |
| D3 | "Excelente! Todos os **4** pares" com só 3 pares na tela | O texto está **fixo** no código ("4 pares"). | **[CONFIRMADO]** | `src/components/content-blocks/ActiveRetrievalExercises.tsx`, linha ~303 | Usar `authorCards.length`. Teste de regressão. |
| D4 | Respondeu os 3 checkpoints e o 1.3 não libera: "Responda os 5 itens de verificação pendentes" | O motor soma aos checkpoints **itens escondidos** do "Treino de Recuperação Ativa" (pares de autores e pegadinhas dos Mnemônicos) para chegar a um N mínimo. O esquema limita checkpoints a **3** (`.min(2).max(3)`), então o motor **sempre** completa com itens que o aluno nem vê na leitura. A configuração pede **8** itens (`nMinimoVerificacao: 8`) e 85%. | **[CONFIRMADO]** | `src/domain/progressoEngine.ts` (`obterItensVerificacaoSubmodulo`), `src/domain/portaoSimuladoEngine.ts` (~linha 281), `src/config/jornada.config.ts`, `src/domain/schemas/modulo.schema.ts` | Sua decisão resolve: **remover as travas** (Fase U2). O bug de contagem deixa de bloquear, mas o contador também deve parar de mostrar pendências fantasma. |
| D5 | Interface "travada" | **[HIPÓTESE]** Três suspeitas, a medir (U7): (a) **3,6 MB de conteúdo** importados de forma eager por `src/content/registry.ts`; (b) o `zustand/persist` regrava **todo** o estado no `localStorage` a cada resposta, e o histórico de tentativas só cresce; (c) bibliotecas pesadas (`mermaid`, `recharts`, `katex`) no carregamento inicial. Além disso, **telas em esqueleto de carregamento** aparecem nos prints de Teoria e Caderno de Erros. | **[HIPÓTESE]** | `src/content/registry.ts`, `src/store/useProgressStore.ts`, `vite.config.ts` (`chunkSizeWarningLimit: 1500`) | Perfilar antes de otimizar (U7). |
| D6 | Tabela "Distratores" em celular: "GABARI TO" quebrado, texto apertado, botão amarelo "Mnemônicos" cobrindo o texto | Tabela larga em tela estreita; botão flutuante (FAB) sempre sobre a leitura. | Visto nos prints | Componentes de tabela e Mnemônicos | Tabela vira **cartões empilhados** no celular; Mnemônicos vira **aba/gaveta na barra de ações**, não flutuante. |
| D7 | Cabeçalho desktop com "Heuller na Câmara" quebrado em 3 linhas, menu lotado | Largura insuficiente para logo + 5 itens + glossário + busca + 4 ícones | Visto nos prints | `src/components/layout/Header.tsx` | Menu enxuto (U6). |
| D8 | "Doutrina Canônica **Verbatim**" e "texto original preservado verbatim" | O texto é **redigido por IA**. "Verbatim" sugere citação literal de livros; isso é **arriscado** (citação inventada com aparência de literal). | **[CONFIRMADO]** (`modulo.schema.ts` comenta "verbatim"; a tela diz "Citações de autores clássicos... sem paráfrases vagas") | Esquema e telas | Trocar o rótulo e **auditar citações contra o seu acervo** (U8). |
| D9 | "Radar Cebraspe: Estatística e Incidência de Banca", "Itens da Banca (1520)", "Padrão preliminar baseado em editais reais" | Esses números descrevem **itens escritos pela plataforma**, não dados reais de provas da banca. Rótulo sugere estatística empírica que **não existe**. | Visto nos prints | Telas Radar, Simulados, Discursiva | Reescrever rótulos (U8): "Itens autorais no estilo Cebraspe". |
| D10 | Fórmula da discursiva **errada em dois lugares e certa em outros** | **[CONFIRMADO no edital, itens 9.8.5.1(d) e 9.8.5.2(d)]**: `NQi = NCi − 3 × NEi ÷ TLi` (questões) e `NPT = NC − 6 × NE ÷ TL` (peça técnica). O código ainda tem `NC = NCP − 2×(NE/TL)` em `src/pages/TreinosPage.tsx` (~linha 206) e, **pior**, dentro do **prompt do avaliador de IA** em `src/pages/DiscursivaPage.tsx` (~linha 24), que manda o modelo aplicar a fórmula errada | **[CONFIRMADO]** | Os dois arquivos citados | Fase U8.4: fórmula única centralizada, com testes numéricos. **A correção por IA hoje usa a fórmula errada.** |
| D11 | Progresso diz "dados **100% no navegador**, sem servidores externos", mas o projeto tem sincronização com Supabase | Texto desatualizado ou funcionalidade inativa | **[CONFIRMADO]** (existem `src/services/*SyncService.ts`) | `ProgressoPage` | Decidir qual é verdade e alinhar o texto (U8). |
| D12 | Contagens que não batem: "59 etapas / 40 submódulos" x "Todos os Submódulos (64)"; "10 cadernos da trilha (M1 a M10)" x lista M1 a M14 | Estruturas diferentes (trilha de 10 módulos x acervo de 14) apresentadas sem explicação | Visto nos prints | Painel, Jornada, Radar, Treinos | Rotular claramente "Trilha principal" x "Acervo" (U6). Com o modo livre, simplificar. |
| D13 | Pré-requisito de vocabulário: "SQL" aparece no meio de frase sem explicação | O conteúdo foi escrito para quem já conhece o termo; não há camada de pré-requisitos conceituais | Seu relato | Todo o conteúdo | Pedagogia (seção 3) e Fase U3. |
| D14 | Os checkpoints são sempre iguais (3 itens Certo/Errado) | **[CONFIRMADO]** O esquema só admite Certo/Errado e no máximo 3. Já existem **8 formatos de exercício** (F1 a F8) em `reviewConfig.ts`, mas só nas **revisões**, não na leitura. | **[CONFIRMADO]** | `modulo.schema.ts`, `src/config/reviewConfig.ts` | Fase U4: levar a variedade para dentro da leitura. |

**Achado extra, de risco legal (não é visual):** o repositório é **público** (consegui clonar sem credencial) e contém a pasta `acervo-estudos` com **cerca de 280 PDFs rastreados** (livros, normas ABNT). **Normas ABNT e livros comerciais são protegidos por direito autoral.** Recomendo **tornar o repositório privado** ou remover o acervo do Git (por exemplo, mantê-lo só localmente e em `.gitignore`). Não achei chaves secretas no código (só `.env.example`). **Decisão sua**, mas eu faria isso antes de qualquer outra coisa.

**Achado extra, de conteúdo:** o seu acervo tem `Referencias-NBR-6023-2025.pdf` e `NBR-15287_2025`, o que sugere que **existem edições 2025 dessas normas**. Confirme se o dossiê e as telas já refletem isso (era o ponto P0.3 do plano anterior).

---

## 2. SUAS DECISÕES, JÁ INTEGRADAS

**Respostas de 14/10/2026 às perguntas do rascunho:**
- **Fase 8:** concluída por você e commitada; **precisa estar no GitHub** (ver Limite 1).
- **Repositório:** tornar **privado**. **Eu não tenho acesso de escrita ao GitHub**, então **você** faz: *Settings → General → Danger Zone → Change repository visibility → Make private*. Veja U0.1 (inclui o que checar depois).
- **Modo livre:** sem travas, **com** "Próxima ação recomendada" e **selos de domínio** sem bloqueio.
- **Visual:** **manter** a identidade "Papel e Tinta" e simplificar. **Sem mockups.**
- **Dispositivo principal:** **celular**. Todo o design passa a ser **mobile-first**.
- **Edital:** você enviou o item 9 (discursiva). **O item 8 (provas objetivas, notas mínimas e critérios de eliminação) continua sem estar comigo.**
- **Definições que recolhem:** você deixou a meu critério. **Decisão: ambos** (automático pelo pré-teste e manual "já sei"), com o manual sempre prevalecendo e reversível.
- **Ordem:** **consertar tudo** (U0 a U9) **antes** de voltar ao conteúdo (a Fase 9 do plano anterior, de consolidação, fica **depois** e foi reescrita).

1. **Modo livre permanente:** **sem nenhuma trava** (submódulos, módulos, portais, desafios e simulados). Tudo aberto o tempo todo.
2. **Revisões encaixadas em submódulos de revisão**, alinhadas e checadas.
3. **Variedade nos micro-checkpoints**, com respaldo científico.
4. **Teoria mais fácil e eficiente**, com base em ciência, sem perder o objetivo da aprovação.
5. **Melhorias propostas por mim entram no plano.**

**Minha recomendação sobre o modo livre (para você decidir):** o modo livre é bom para a **autonomia**, mas estudos mostram que estudantes, quando livres, tendem a escolher estratégias menos eficientes (Karpicke, Butler e Roediger, 2009: relêem mais do que se testam). Por isso, no plano, **a liberdade vem junto com um guia que não bloqueia**: a "Próxima ação recomendada" continua, a revisão do dia continua puxando você, e o **domínio vira um selo informativo**, nunca uma porta fechada. Isso respeita a sua decisão (zero travas) e protege o seu tempo.

---

## 3. PEDAGOGIA: O QUE A CIÊNCIA SUPORTA, E O QUE NÃO

**Aviso de honestidade:** estes resultados vêm de estudos de laboratório e de sala de aula, com populações e materiais diferentes do seu. **Nenhum foi testado nesta plataforma.** Por isso o plano inclui **medir o seu próprio desempenho** (seção 3.4). As referências abaixo devem ser **conferidas pelo agente** antes de entrar na plataforma (marcadas **[VERIFICAR]** onde não tenho certeza de ano ou periódico).

### 3.1 O problema do "SQL no meio da frase"

É um problema conhecido em ensino, com resposta na literatura:

| Princípio | Em uma frase | Evidência | Como entra na plataforma |
|---|---|---|---|
| **Treino prévio (*pre-training*)** | Quem conhece os nomes e as características dos conceitos-chave aprende melhor a explicação seguinte | Mayer (princípio do pré-treinamento, aprendizagem multimídia) | Cartão **"Antes de ler"** em cada submódulo: 3 a 6 termos com definição de 1 linha e um exemplo do universo da biblioteca |
| **Carga cognitiva** | A memória de trabalho é pequena; termos desconhecidos consomem a capacidade que sobraria para entender o argumento | Sweller (teoria da carga cognitiva) | Nenhum termo técnico novo sem definição **no primeiro uso** (verificado por script) |
| **Efeito de reversão da expertise** | Ajuda que beneficia iniciantes **atrapalha** quem já sabe | Kalyuga, Ayres, Chandler e Sweller (2003), *Educational Psychologist* | Definições **adaptativas**: você marca "já sei" ou acerta um pré-teste e as definições daquele conceito **recolhem** |
| **Exemplos resolvidos com esmaecimento** | Ver um exemplo completo resolvido, depois exemplos com lacunas, depois o problema inteiro | Sweller e Cooper (1985); Renkl (esmaecimento) **[VERIFICAR]** | SQL, regex, modelo entidade-relacionamento: **3 degraus** (exemplo resolvido → completar → resolver) |
| **Segmentação** | Texto em blocos que o leitor controla | Mayer (princípio da segmentação) | Leitura em **seções curtas** com um item ao fim de cada |

**Para o seu perfil:** você é bibliotecário e domina catalogação e indexação. O risco está nos temas **novos** do edital (SQL, regex, APIs, IA, governança de dados). Aí o iniciante precisa de ajuda, e o conteúdo da sua área deve ser **enxuto**, justamente pela reversão da expertise.

### 3.2 Como aprender melhor (e o que reter)

| Prática | Evidência | Força | Observação | Uso |
|---|---|---|---|---|
| **Prática de recuperação** (testar-se) | Roediger e Karpicke (2006); metanálises de testes de prática (Rowland, 2014; Adesope et al., 2017) **[VERIFICAR]** | **Alta** | Supera reler | Já adotada; **ampliar** (U4) |
| **Recuperação livre** (escrever o que lembra, depois comparar) | Karpicke e Blunt (2011), *Science*: recuperação superou o mapa conceitual como estratégia de estudo | **Alta** | Exige esforço e "dói", e é por isso que funciona | Novo exercício "Brain dump" ao fim da seção |
| **Espaçamento** | Cepeda et al. (2006, 2008) | **Alta** | O intervalo ideal depende do prazo até a prova | Revisão alinhada à data da prova (U5) |
| **Pré-teste** (tentar antes de aprender) | Richland, Kornell e Kao (2009); Kornell, Hays e Bjork (2009) **[VERIFICAR]** | **Moderada** | Errar **antes** ajuda a aprender **depois** | Pré-teste **sem nota e sem penalidade** de 2 a 3 itens antes da seção |
| **Intercalação** | Kornell e Bjork (2008); Brunmair e Richter (2019), metanálise **[VERIFICAR]** | **Moderada, depende do material** | Ajuda a **distinguir conceitos parecidos**; para texto expositivo longo o efeito é mais fraco | Usar nas **revisões** com pares confundíveis (owner x steward; acoplamento x cocitação), não na leitura |
| **Autoexplicação** | Chi et al. (1989, 1994) **[VERIFICAR]**; Dunlosky et al. (2013) | **Moderada** | Explicar o "porquê" de cada passo | Exercício "Por que esta assertiva está errada?" com **checklist de autocorreção** |
| **Calibração e efeito da hipercorreção** | Butterfield e Metcalfe (2001) **[VERIFICAR]** | **Moderada** | Erros cometidos **com alta confiança** são mais bem corrigidos depois do feedback | Já existe o "nível de confiança"; **usar** os dados na revisão |
| **Processamento adequado à transferência** | Morris, Bransford e Franks (1977) **[VERIFICAR]** | **Moderada** | Treinar no formato da prova favorece o desempenho na prova | Itens-suporte no estilo Cebraspe (texto-base + vários C/E) e simulados sob regras reais |
| **Estilos de aprendizagem** (visual/auditivo/etc.) | Pashler et al. (2008) revisaram e **não encontraram** base | **Rejeitado** | | **Não** usar |
| **Releitura e grifar** | Dunlosky et al. (2013) | **Baixa utilidade** | | Evitar (já nas diretrizes) |

**O que eu NÃO vou prometer:** "técnica X faz você passar". O que a literatura sustenta é que **recuperação + espaçamento + feedback + clareza conceitual** aumentam a retenção. A aprovação depende também do seu tempo e de a cobertura do edital estar certa (por isso as Fases 0 a 9).

### 3.3 Novos tipos de exercício na leitura (cada um com a base científica declarada)

| Tipo | O que o aluno faz | Base | Quando usar |
|---|---|---|---|
| **X1 Pré-teste** | Responde 2 a 3 itens **antes** de ler; sem nota | Pré-teste | Início de seções de tema novo |
| **X2 Certo/Errado com confiança** (existente) | Julga e informa a confiança | Calibração | Fim de seção |
| **X3 Corrija a assertiva** | Reescreve ou escolhe a versão certa de uma assertiva errada | Interrogação elaborativa | Armadilhas da banca |
| **X4 Brain dump** | Escreve o que lembra em 60 s e compara com um **checklist de pontos-chave** | Recuperação livre | Fim de submódulo |
| **X5 Par confundível lado a lado** | Escolhe qual afirmação pertence a **A** ou a **B** (ex.: crosswalk x conversão) | Contraste e intercalação | Revisões |
| **X6 Completar o exemplo (SQL/regex/MER)** | Completa a lacuna de uma consulta ou expressão; depois escreve a sua | Exemplo resolvido com esmaecimento | M6, M14 |
| **X7 Ordenar o procedimento** | Coloca etapas na ordem (ciclo de vida, processo legislativo, tramitação) | Recuperação de estrutura | Processos |
| **X8 Itens-suporte** | Lê um texto-base curto e julga 4 a 5 itens | Transferência ao formato da prova | Fim de módulo |
| **X9 Caça ao erro no parágrafo** | Aponta a frase errada num parágrafo | Detecção de erro | Alertas Cebraspe |
| **X10 Associação** (existente) | Autor ↔ conceito | Recuperação | Corrigir o bug D3 |

**Regra:** cada tipo tem **gabarito, justificativa e fonte**, entra no **Caderno de Erros** quando errado e alimenta o **agendador**.

### 3.4 Como saber se funciona (medir, não crer)
A plataforma passa a registrar, **por tipo de exercício**: acerto na 1ª tentativa, acerto em 7 e 30 dias, tempo gasto e confiança. Um painel **"O que funciona para você"** compara os tipos. **Cuidado:** são poucos dados de uma só pessoa, então o painel mostra **tendência com ressalva**, não prova.

---

## 4. UX/UI PROFISSIONAL: PRINCÍPIOS E PROPOSTA

**Princípios (base: coerência, sinalização e redução de ruído de Mayer; heurísticas de Nielsen; WCAG 2.2 AA):**
1. **Menos camadas.** Hoje há "cartão dentro de cartão dentro de cartão" e rótulos em caixa-alta mono por todo lado. Reduzir para **3 níveis** visuais.
2. **A leitura é o centro.** Coluna de **60 a 72 caracteres**, entrelinha de 1,6 a 1,7, ritmo vertical constante.
3. **Uma ação principal por tela.**
4. **Sem painel flutuante sobre o texto.**
5. **Estado vazio e estado de carregamento úteis.**
6. **Acessibilidade:** contraste AA, foco visível, alvo mínimo de 44 px, `prefers-reduced-motion` respeitado.

**Proposta concreta**

| Área | Hoje (nos prints) | Proposta |
|---|---|---|
| **Cabeçalho desktop** | Logo quebrado em 3 linhas, 5 abas + glossário + busca + 4 ícones | Logo em uma linha; **4 abas** (Painel, Estudar, Treinar, Progresso); busca `Ctrl K`; menu do usuário agrupa o resto (Radar, Folha de Véspera, Discursiva, Caderno de Erros, Edital) |
| **Leitura (teoria)** | Texto longo corrido; alertas e quadros misturados | Coluna central + **índice da seção** à direita (≥1280 px); **cartão "Antes de ler"**; **um item por seção**; callouts consistentes em português |
| **Callouts** | Amarelo de aviso solto, `[!CAUTION]` cru | 5 tipos fixos: **Nota, Dica, Importante, Atenção, Casca de banana**, cada um com ícone, cor e rótulo em português |
| **Tabelas (celular)** | Larguras espremidas, cabeçalho quebrado | **Cartões empilhados** (Afirmação · Gabarito como pílula · Armadilha) |
| **Mnemônicos (celular)** | Botão amarelo flutuante sobre o texto | **Aba** "Mnemônicos" dentro da barra de seção ou gaveta inferior acionada por botão fixo **fora** do texto |
| **Painel** | Muitos cartões com o mesmo peso | **Um cartão grande** "Hoje" (próxima ação + revisões do dia) e abaixo um resumo de progresso; ferramentas de apoio em linha discreta |
| **Jornada** | Modal explicando regras de bloqueio | **Mapa livre** (tudo aberto), com marcação de **recomendado**, **em andamento** e **domínio** (selo). Sem cadeados. |
| **Fórmulas** | Texto cru | KaTeX renderizado, com escala legível no celular e rolagem horizontal só quando necessário |
| **Carregamento** | Esqueletos que podem ficar sem resolver | Pré-carregar o módulo da rota; esqueleto só por <300 ms; mensagem de erro com "tentar de novo" |
| **Dark mode** | Presente no celular | Conferir contraste AA de todos os pares de cor (script) |

**Direção visual:** manter a identidade **"Papel e Tinta"** (serifada, editorial, creme/azul-marinho/âmbar), que combina com biblioteca, mas **simplificar** e **padronizar**. Se você preferir uma direção mais moderna, eu produzo **2 mockups** antes de qualquer código (pergunta 4 abaixo).

---

## 5. PLANO DE EXECUÇÃO (Fases U0 a U9)

**Ordem (decidida por você):** **U0 → U9 em sequência**, uma fase por sessão do agente; depois, a **Fase 9 revisada (consolidação)**. As Fases 7 e 8 do plano anterior **já foram concluídas**, então não serão refeitas; o que muda nelas é tratado em U2 (sem trava), U5 (revisões) e U8 (rótulos).

### Fase U0: Higiene e contenção de risco (meio dia)
- **U0.0 Sincronizar:** confirmar que a branch de trabalho contém a **Fase 8** (`git log` deve mostrar o commit dela). Se não contiver, **parar e avisar o usuário** para fazer `git push`. Criar a branch `ux/plano-v3` a partir dela. **Validação:** relatório com o hash do commit-base.
- **U0.1 Repositório privado (ação do usuário, o agente só verifica):** *Settings → General → Danger Zone → Change visibility → Private*. Depois o agente confere: (a) a hospedagem (Vercel) continua publicando a partir do repositório privado (**[VERIFICAR]** permissões da integração); (b) o fluxo de GitHub Actions/Pages, se existir (`vite.config.ts` usa `GITHUB_ACTIONS` para `base: '/hnc/'`), **[VERIFICAR]** se o plano da conta permite Pages em repositório privado; (c) o clone **anônimo** passa a falhar. **Opcional, só com aprovação explícita do usuário:** remover `acervo-estudos` também do **histórico** (`git filter-repo`), o que exige reescrever o histórico e `force push`; **tornar privado não apaga cópias ou forks já feitos enquanto era público.** **Validação:** clone sem credencial retorna erro; `.gitignore` passa a listar `acervo-estudos/`.
- **U0.2 Bug "4 pares":** usar `authorCards.length`. **Validação:** teste com 3 e 5 pares.
- **U0.3 Linha de base de qualidade:** rodar `npm run build`, `npm test`, `npm run lint` e registrar resultado. **Validação:** relatório `docs/qualidade_inicial.md`.
- **U0.4 Backup lógico do progresso:** botão "Exportar progresso" funcionando e testado antes de mexer em engines.

### Fase U1: Motor de renderização do conteúdo
- **U1.1 Unificar os dois leitores** (`MarkdownViewer` e `MarkdownRenderer`) em **um** componente `ConteudoMarkdown`, com variantes de tema e tamanho. **Validação:** nenhuma página importa os antigos; testes de snapshot.
- **U1.2 Instalar e configurar** `remark-math` + `rehype-katex`; carregar o CSS do KaTeX só onde houver fórmula (carga sob demanda). **Atenção:** `R$` (reais) não pode virar fórmula. **Validação:** `R$ 32.070,88` aparece como texto; `$n^2$` vira fórmula.
- **U1.3 Plugin de alertas** `[!NOTE|TIP|IMPORTANT|WARNING|CAUTION]` → callout em português (Nota, Dica, Importante, Atenção, **Casca de banana**). Manter a detecção por palavras como **fallback**, mas **trocar** o critério por um marcador explícito. **Validação:** nenhum `[!` aparece no DOM.
- **U1.4 Varredura do conteúdo:** script que (a) lista toda ocorrência de `$` e `\` e `[!` nos arquivos de conteúdo, (b) valida que cada fórmula compila no KaTeX, (c) acusa `$` solto. **Validação:** zero fórmulas inválidas; relatório.
- **U1.5 Teste de regressão visual:** renderizar cada submódulo e **falhar** se o texto final contiver `$`, `\Delta`, `\times`, `\approx` ou `[!`.
- **U1.6 Tabelas responsivas:** componente `TabelaResponsiva` (vira cartões em <640 px) para quadros comparativos e quadro de distratores. **Validação:** sem quebra de palavra em cabeçalho (`GABARITO`), sem rolagem horizontal da página.

### Fase U2: Modo livre permanente e modelo de progresso sem trava
- **U2.1 Remover as travas:** deixar `modoLivre` **sempre ativo**; remover `PortaoVerificacaoModal` como bloqueio, `TelaBloqueioModulo`, o texto de bloqueio no simulado e o cadeado da Jornada. Manter os **componentes** como **atividades opcionais** (sem cadeado). **Validação:** nenhuma rota exibe "bloqueado".
- **U2.2 Redefinir "concluído":** submódulo **concluído** = leitura de todas as seções (ou marcação manual) **e** itens da seção respondidos **sem** exigir nota mínima. O **domínio** passa a ser um **selo** com níveis (Em andamento, Consolidado, Dominado), calculado por acerto e retenção, **sem bloqueio**. **Validação:** `derivarProgresso` continua função pura; testes cobrindo os três estados.
- **U2.3 Eliminar pendências fantasma:** `obterItensVerificacaoSubmodulo` não pode mais somar itens dos Mnemônicos à contagem de checkpoints. **Validação:** teste: um submódulo com 3 checkpoints respondidos mostra 3 de 3.
- **U2.4 Config:** em `jornada.config.ts`, remover `simuladoObrigatorioParaAvancar` e `minimoVerificacao` como **gates**; manter os **limiares** só como critérios de **selo**.
- **U2.5 Próxima ação recomendada** continua, com explicação de **por que** ("revisão vencida", "tema novo", "ponto fraco"). **Validação:** sempre há exatamente uma recomendação principal.
- **U2.6 Migração do progresso:** **nenhum progresso se perde**. O que estava "bloqueado" vira "disponível". **Validação:** comparar o estado exportado antes e depois.
- **U2.7 Atualizar a documentação** (`DIRETRIZES_PROJETO_HEULLER_NA_CAMARA.md`, seção 11) e o modal "Como funciona".

### Fase U3: Teoria mais fácil e eficiente (pré-requisitos conceituais)
- **U3.1 Esquema:** adicionar a `ModuloFilho` o campo `antesDeLer` (lista de `{termo, definicao, exemploBiblioteca}`) e `secoes[].itens` (itens por seção). Atualizar o Zod.
- **U3.2 Lint de jargão:** script que extrai termos técnicos (lista mantida em `src/content/glossario-tecnico.ts`, p. ex. SQL, API, REST, JSON, XML, RDF, regex, hash, ETL, LLM, RAG, OCR, HTR, MER, CRUD, URI, URN, OAI-PMH, SPARQL) e **falha** se um termo aparecer **antes** de ser definido (no cartão "Antes de ler" ou no glossário do primeiro uso) **no mesmo submódulo ou em um pré-requisito**. **Validação:** relatório por submódulo; build quebra em violação.
- **U3.3 Glossário automático no primeiro uso:** o **Dicionário flutuante já existente** passa a **sublinhar** o termo no primeiro uso de cada seção e abrir a definição em **gaveta curta** (1 a 2 linhas + "ver completo"). **Validação:** cada termo do `glossario-tecnico` aparece com definição acessível em 1 toque.
- **U3.4 Cartão "Antes de ler"** em todos os submódulos de **tema novo** (Fases 1 e 2 do plano anterior; M6, M14, M10 e M13 em prioridade). **Validação:** ≥ 3 e ≤ 6 termos por cartão.
- **U3.5 Definição adaptativa (decidido: ambos):** as definições de um termo **recolhem** (a) **automaticamente** quando você acerta o pré-teste daquele conceito e (b) **manualmente** com o botão "já sei". **O manual sempre prevalece** e é **reversível** ("mostrar de novo"). Se você errar depois um item daquele conceito, a plataforma **sugere reabrir** a definição, sem forçar. **Validação:** estado salvo por conceito; testes dos quatro caminhos (auto, manual, reverter, sugerir de novo).
- **U3.6 Exemplos resolvidos com esmaecimento** nos submódulos de SQL, regex, MER e API (3 degraus). **Validação:** **todo exemplo de código é executado** em ambiente de teste e o resultado confere com o declarado.
- **U3.7 Seções curtas:** quebrar teorias longas em seções de **400 a 700 palavras**, cada uma com título que **diz a conclusão** (ex.: "Crosswalk é mapeamento, não conversão"), não só o tema. **Validação:** relatório de comprimento; sem seção >900 palavras.
- **U3.8 Texto simples:** frases com ≤ 30 palavras na média, voz ativa quando possível, **um conceito por parágrafo**. Script de legibilidade como **alerta**, não bloqueio.

### Fase U4: Variedade de exercícios na leitura e nos submódulos
- **U4.1 Esquema de exercício unificado** (`ExercicioSchema`) com união discriminada por `tipo` (X1 a X10), campos obrigatórios `gabarito`, `justificativa`, `fonte`, `editalRef`, `nivelConfianca?`. **Relaxar** `checkpoints.min(2).max(3)` para o **novo** limite: **3 a 8 por submódulo**, distribuídos pelas seções.
- **U4.2 Componentes de interface** para cada tipo (X1 a X10), **reaproveitando** `ActiveRetrievalExercises`, `adaptiveQuiz` e os formatos F1 a F8 das revisões. **Validação:** teste de componente por tipo, navegação por teclado e leitor de tela.
- **U4.3 Distribuição por seção:** 1 item por seção; **no máximo 2 do mesmo tipo seguidos**; pré-teste só em tema novo; brain dump só no fim do submódulo. **Validação:** script de verificação.
- **U4.4 Erros viram Caderno de Erros** e alimentam o agendador (**peso maior** para erro com alta confiança). **Validação:** teste.
- **U4.5 Painel "O que funciona para você"** (seção 3.4), com ressalva estatística visível.

### Fase U5: Revisões encaixadas nos submódulos de revisão (alinhamento)
O repositório **já** tem: submódulos de revisão `Rn` (20 itens, 10 C e 10 E, 60% do módulo atual e 40% dos anteriores), 8 formatos F1 a F8 com teto de 20% de formato "simulado puro", caixas de Leitner (1, 3, 7, 14, 30 dias) e um `unifiedScheduler`. O que falta é **alinhar**:
- **U5.1 Auditoria do motor:** descrever em `docs/revisoes_estado_atual.md` como `reviewSubmoduleEngine`, `leitner.ts`, `portalRevisao.ts` e `scheduler/unifiedScheduler.ts` se relacionam, e **apontar sobreposições**. **Validação:** relatório com diagrama.
- **U5.2 Fonte única da verdade:** um **único** pool de conceitos/itens com estado (caixa, próxima revisão, erros, confiança) alimenta **tanto** a "Revisão do Dia" **quanto** os `Rn`. **Validação:** o mesmo item não aparece em dois agendamentos.
- **U5.3 Encaixe na trilha:** cada `Rn` aparece **ao fim do módulo k** como **atividade recomendada, sem trava**, e permanece disponível. **Validação:** a Jornada mostra o `Rn` na posição certa.
- **U5.4 Calendário até a prova:** intervalos ajustados à data (17/01/2027): na prática, com ~90 dias, **revisões espaçadas em expansão** e **uma rodada cumulativa nas 3 últimas semanas**. Respeitar "apenas dias úteis" e o teto diário (hoje 30 itens). **Validação:** simulação de 68 dias úteis: nenhuma revisão cai em fim de semana; carga diária ≤ teto; **todo item novo das Fases 1 a 8 entra no pool**.
- **U5.5 Intercalação** nos `Rn`: ≥ 3 submódulos por sessão, priorizando **pares confundíveis** (lista de pares mantida em arquivo). **Validação:** teste de composição.
- **U5.6 Corrigir "10 cadernos x M1 a M14"** nos rótulos (D12).

### Fase U6: UI/UX profissional (mobile-first, mantendo "Papel e Tinta")
- **U6.0 Mobile-first obrigatório (decidido: você estuda no celular):** projetar e testar **primeiro** em 360×800 e 412×915, **depois** em desktop. Regras: corpo de texto **≥ 16 px**; alvos de toque **≥ 44 px**; ações principais ao alcance do **polegar** (parte inferior); **gavetas inferiores** em vez de modais centrais; nenhum elemento fixo cobrindo o texto; **modo escuro** com contraste AA (você usa); rolagem **vertical apenas**. **PWA funcionando offline** para estudar sem sinal (**validar** o *service worker*). **Validação:** capturas em 360×800 e 412×915 de Painel, Teoria, Treinos, Simulado e Discursiva, **sem rolagem horizontal** e **sem sobreposição**.
- **U6.1 Sistema de design:** tokens (cores, tipografia, espaçamento, raio, sombra) em **um** arquivo; escala tipográfica fixa; **3 níveis** de superfície. **Validação:** `DesignSystemPage` atualizada e testada.
- **U6.2 Cabeçalho enxuto** (seção 4). **Validação:** sem quebra de logo de 360 a 1920 px.
- **U6.3 Tela de leitura** com índice lateral (≥1280 px), barra de progresso por seção e **callouts** padronizados. **Validação:** sem sobreposição de elementos fixos ao texto.
- **U6.4 Mnemônicos** como aba/gaveta, **não flutuante**. **Validação:** o botão nunca cobre texto.
- **U6.5 Painel** com um cartão "Hoje" e resumo; **Jornada** livre com selos (sem cadeado).
- **U6.6 Estados de carregamento e erro** padronizados.
- **U6.7 Acessibilidade:** auditoria automatizada (contraste AA em todos os temas, foco, `aria`, alvos de 44 px, movimento reduzido). **Validação:** relatório sem falhas críticas.
- **U6.8 Teste em dispositivos:** 360×800, 375×812, 768×1024, 1440×900. **Validação:** capturas anexadas ao relatório.

### Fase U7: Desempenho (medir antes de otimizar)
- **U7.1 Medição:** Lighthouse (móvel) e perfil do React em **Painel**, **Teoria 1.1**, **Treinos** e **Simulado**; registrar LCP, INP, tamanho de JS inicial. **Validação:** relatório com números.
- **U7.2 Carregar conteúdo sob demanda:** `import()` dinâmico **por módulo/submódulo** em `registry.ts`, mantendo só **metadados** no carregamento inicial. **Validação:** JS inicial reduz; navegação continua offline (PWA).
- **U7.3 Carregar sob demanda** `mermaid`, `recharts` e KaTeX. **Validação:** não aparecem no pacote inicial.
- **U7.4 Gravação do progresso:** **agrupar/atrasar** a gravação (debounce) ou migrar o histórico de tentativas para **IndexedDB**; manter exportação e sincronização. **Validação:** resposta a um item sem atraso perceptível; teste de integridade de dados.
- **U7.5 Memoização** do parse de Markdown por submódulo e **virtualização** de listas longas (Radar, Caderno de Erros). **Validação:** INP dentro de orçamento definido no relatório.

### Fase U8: Integridade de rótulos e de conteúdo
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

### Fase U9: Qualidade contínua
- **U9.1** Suíte de testes ampliada: renderização (sem `$`/`[!` crus), progresso sem trava, contagens, tipos de exercício, calendário de revisões.
- **U9.2** Verificação de build e tamanho do pacote em CI (falha acima de orçamento).
- **U9.3** Checklist de lançamento por fase, com capturas antes e depois.

---

## 6. O QUE MUDA NO PLANO ANTERIOR
- **Fases 0 a 8:** concluídas por você (a Fase 8 precisa estar no GitHub). **Não serão refeitas.**
- **O que as fases concluídas deixaram para trás e este plano corrige:** a Fase 7 e as anteriores introduziram **gates** (portais, desafios, simulado obrigatório); **U2** os remove. A Fase 8 gerou **itens e simulados**; **U1** garante que as fórmulas deles renderizem; **U8** corrige rótulos e a fórmula da discursiva.
- **Fase 9 (consolidação):** **reescrita por inteiro** e movida para **depois de U9** (ver `prompts_antigravity/Prompt_Fase_9_Consolidacao.md`).
- **Regra global 8 (preservar progresso):** **continua**. Só deixa de existir a parte do "gate".

---

## 7. PENDÊNCIAS QUE ESTÃO COM VOCÊ
1. **`git push` da Fase 8** (ou me dizer em que branch ela está).
2. **Tornar o repositório privado** (U0.1). Decidir se quer **também** remover o `acervo-estudos` do **histórico**.
3. **Item 8 do edital** (provas objetivas, notas mínimas, critérios de eliminação e classificação), se quiser que eu confira o que a tela do Edital mostra (por exemplo "P1 ≥ 18,00" e "P2 ≥ 27,00", que **não consegui verificar**).
4. **Modo manuscrito** (opcional, em U8.4): quer que entre no plano?
