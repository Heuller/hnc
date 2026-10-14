# PROMPT — Submódulos de Revisão Científica + Correção Mobile
**Projeto:** Heuller na Câmara (Analista Legislativo – Bibliotecário, Câmara dos Deputados, banca Cebraspe)
**Prova:** 17/01/2027 · **Repositório:** Heuller/hnc · **Stack:** React 19, TypeScript, Vite, Tailwind v4, Framer Motion, Lucide, Supabase (Postgres, Auth, RLS), deploy na Vercel

---

## 0. MODO DE EXECUÇÃO (leia antes de qualquer ação)

Você é um engenheiro sênior de produto educacional. Trabalhe em marcos (seção 9), nesta ordem. Regras inegociáveis:

1. **Auditoria antes de código.** Primeiro leia o repositório inteiro (estrutura de módulos, rotas, componentes, tabelas Supabase, `DIRETRIZES_PROJETO_HEULLER_NA_CAMARA.md`, edital oficial se estiver no repositório). Entregue o relatório da Fase 0 e só então implemente.
2. **Nada destrutivo sem confirmação.** Antes de apagar qualquer módulo, tabela, coluna ou conteúdo: faça backup (dump SQL + cópia dos arquivos), liste exatamente o que será removido e **peça confirmação ao usuário**.
3. **Preserve o que já funciona e o progresso do usuário.** Os submódulos já concluídos (ex.: 2.2 e 2.3) continuam concluídos; o 2.1 continua liberado. O **submódulo 2.5 (Órgãos do Estado: STF, STJ, TRFs, TJs, Tribunal de Contas etc.) deve ser mantido intacto** em conteúdo, posição e funcionamento.
4. **Anti-alucinação.** Nunca invente artigo de lei, número de itens do edital, dado, data ou referência científica. Use somente as referências da seção 11. Se quiser citar outra, verifique-a em fonte primária e sinalize como "adicionada pelo agente". Se algo não puder ser verificado, escreva `FONTE_PENDENTE` e liste no relatório final.
5. **Não altere o conteúdo teórico** dos módulos, exceto onde esta especificação mandar (marcações de `concept_id`).
6. **Valores numéricos desta especificação são de dois tipos:** (a) *derivados de estudo* (indicados com a fonte) e (b) *heurísticas de partida* (marcadas `[HEURÍSTICA]`). Implemente as heurísticas como **constantes configuráveis** em um único arquivo (`reviewConfig.ts`), nunca espalhadas pelo código.
7. **Commits por marco**, com mensagem descritiva, e deploy de preview para o usuário testar antes do próximo marco.
8. **Português do Brasil** em toda a interface. Termos técnicos em inglês só no código.

---

## 1. CONTEXTO E DECISÕES JÁ TOMADAS

- A prova objetiva tem itens **Certo/Errado** (nota líquida: item errado anula item certo; é possível deixar em branco) e há uma discursiva. O usuário nunca estudou várias das disciplinas (Direito Administrativo, Direito Constitucional etc.); é a primeira exposição a esse conteúdo.
- O usuário estudará **mais de 3 horas líquidas por dia, apenas em dias úteis** (segunda a sexta). Há ~14 semanas até a prova.
- A Jornada é uma trilha estilo RPG: etapa só libera com ≥85% na anterior; simulado de 100 itens por módulo libera o próximo módulo com ≥80%; simulados e revisões passadas "moram" em **Treinos** (a Jornada só aponta para lá).
- Já existe a **Revisão do Dia** (Caixas de Leitner) e o **Caderno de Erros** em Treinos. Toda resposta mostra justificativa (estudo reverso).
- **Decisão desta rodada:** o módulo de revisão que existe hoje na Jornada será **apagado e substituído por submódulos de revisão inseridos entre os grandes módulos**, com cronograma e formatos de exercício embasados em evidência científica.

---

## 2. FASE 0 — AUDITORIA (somente leitura)

Entregue um relatório com:

1. **Inventário** de todos os módulos (M1…M12) e submódulos: id, título, disciplina do edital, estado (concluído/no ar/planejado), quantidade de itens C/E e de micro-checkpoints.
2. **Cruzamento edital × módulos:** para cada disciplina do edital, quais módulos a cobrem; **número de itens por disciplina conforme o edital oficial** (se o edital não estiver no repositório, peça ao usuário; não estime). Aponte divergências (módulo sem correspondência no edital; tópico do edital sem módulo). **Não apague nada**; apenas relate.
3. **Módulo de revisão atual da Jornada:** onde está, quais rotas/tabelas/componentes o compõem, o que depende dele (gates, progresso, links).
4. **Revisão do Dia (Leitner) e Caderno de Erros:** esquema de dados atual, intervalos usados, como a data de vencimento é calculada, se considera fins de semana.
5. **Esquema Supabase** relevante (tabelas, RLS) e como o progresso é sincronizado entre celular e computador.
6. **Granularidade dos itens:** cada item C/E aponta para um conceito atômico? Se não, proponha o mapeamento (seção 4.1).

Pare e aguarde aprovação do relatório.

---

## 3. FUNDAMENTAÇÃO CIENTÍFICA (o que governa as decisões)

Cada princípio traz: o que a evidência mostra, **limite da evidência** e **como vira regra no produto**.

### P1 — Recuperação ativa (testar-se) supera reler
- **Evidência:** Dunlosky et al. (2013) avaliaram 10 técnicas; *teste prático* e *prática distribuída* receberam utilidade **alta**; reler e destacar não ajudam de forma consistente. Roediger & Karpicke (2006): recuperar supera reestudar no longo prazo. Karpicke & Blunt (2011): recuperação superou mapa conceitual feito com o texto à vista. Rowland (2014, meta-análise): efeito médio g≈0,5 sobre reestudar, maior com feedback.
- **Limite:** a maior parte dos estudos usa universitários e material textual; para texto jurídico é extrapolação razoável (há estudos em educação médica), não medição direta.
- **Regra:** toda revisão é feita por **recuperação**, nunca por releitura. É proibido criar submódulo de revisão cujo formato seja "reler o resumo". O texto só aparece **depois** da tentativa, como feedback.

### P2 — Espaçamento (prática distribuída)
- **Evidência:** Cepeda et al. (2008, >1.350 participantes): o intervalo ótimo entre estudo e revisão **cresce com o prazo até a prova**, mas **diminui em proporção** — de ~20–40% de um prazo de 1 semana a ~5–10% de um prazo de 1 ano. Intervalo curto demais prejudica mais do que intervalo longo demais.
- **Limite:** esses números vêm de duas sessões sobre fatos soltos; **não são medidos para legislação com 14 semanas de prazo**. Para ~100 dias até a prova, interpolar sugere uma primeira revisão em torno de **10–20% do tempo restante** (≈ 7 a 14 dias corridos). Isto é **interpolação**, não resultado direto.
- **Regra:** a 1ª revisão espaçada de um módulo ocorre ~1 módulo depois (≈ 5–7 dias úteis). Os intervalos do scheduler respeitam um teto relativo ao tempo restante (seção 4.3).

### P3 — Intervalos crescentes vs. iguais: a literatura diverge
- **Evidência:** Karpicke & Roediger (2007) acharam que intervalos **iguais** foram tão bons ou melhores que **crescentes** para retenção de longo prazo; outros trabalhos mostram vantagem de crescentes em condições específicas.
- **Regra:** **não declare crescente como "cientificamente superior".** Mantenha as Caixas de Leitner (intervalos crescentes) por serem práticas e suficientes, mas deixe a sequência de intervalos configurável (`reviewConfig.ts`) e registre os dados de acerto por intervalo para ajuste futuro.

### P4 — Recuperar até um critério e continuar revisitando (relearning sucessivo)
- **Evidência:** Karpicke & Roediger (2008): **parar de testar um item depois do primeiro acerto** prejudica a retenção posterior; a recuperação repetida é o que fixa. Rawson & Dunlosky (2011) e Rawson, Dunlosky & Sciartelli (2013): recuperar até um critério em uma sessão **e reaprender em sessões espaçadas** melhora o desempenho em provas e a retenção.
- **Limite:** o número ideal de acertos varia por material.
- **Regra:** um conceito só é "consolidado" após **≥3 acertos em dias distintos** `[HEURÍSTICA]`. Erro durante uma sessão recoloca o item na fila da mesma sessão, **após alguns itens intermediários** (não imediatamente) e novamente no dia seguinte.

### P5 — Feedback corretivo
- **Evidência:** em Rowland (2014) o efeito do teste foi maior com feedback (g≈0,73 com vs. ≈0,39 sem, conforme relatado em sínteses que citam a meta-análise; confira no original). Butterfield & Metcalfe (2001): **erros cometidos com alta confiança são mais corrigidos** quando há feedback (hipercorreção).
- **Limite:** hipercorreção foi medida com perguntas de conhecimentos gerais; a transferência para C/E jurídico é inferência.
- **Regra:** feedback imediato com justificativa (já decidido pelo usuário). Cada resposta registra **confiança** (seção 5, F3). Erro com confiança alta vira "armadilha" no Caderno de Erros e volta mais cedo.

### P6 — Intercalação (misturar) ajuda a discriminar categorias
- **Evidência:** Dunlosky et al. (2013): utilidade **moderada**. Kornell & Bjork (2008): misturar exemplos de categorias favoreceu a indução de categorias (apesar de os participantes acharem o contrário). Rohrer & Taylor (2007): embaralhar tipos de problema melhorou o desempenho em matemática.
- **Limite:** evidência é mais forte para habilidades/categorias do que para fatos isolados.
- **Regra:** nas revisões, **misturar módulos e disciplinas** dentro da sessão, e usar **pares de contraste** (F4) onde a prova costuma trocar o sujeito da assertiva (ex.: competência do STF atribuída ao STJ). *Esta justificativa ligada ao estilo Cebraspe é raciocínio nosso, não achado de estudo.*

### P7 — Recuperação livre vs. reconhecimento: a literatura diverge
- **Evidência:** a teoria e parte dos estudos (inclusive Rowland, 2014) apontam benefício maior para recuperação com pista ou livre do que para reconhecimento; porém a meta-análise de Adesope, Trevisan & Sundararajan (2017), segundo revisão posterior, indica que testes de múltipla escolha foram pelo menos tão eficazes quanto recuperação livre/com pista.
- **Regra:** **mesclar** formatos. C/E (reconhecimento, formato da prova) continua sendo o principal por *transferência para o formato de prova* (Morris, Bransford & Franks, 1977: o desempenho é melhor quando o processamento no estudo se parece com o da avaliação), e recuperação livre/com lacuna entra como complemento.

### P8 — Dificuldade desejável e pré-teste
- **Evidência:** Bjork & Bjork (2011): condições que tornam a recuperação mais difícil (espaçamento, intercalação, teste) pioram o desempenho imediato e melhoram a retenção. Kornell, Hays & Bjork (2009): tentativas de recuperação **mal-sucedidas** antes do feedback ainda ajudam o aprendizado posterior.
- **Regra:** a interface deve **explicar** ao usuário, em uma frase, por que a revisão "parece mais difícil" e por que isso é desejável; sem moralismo.

### O que NÃO implementar (evidência fraca ou desfavorável)
- Reler, destacar, resumir passivamente (utilidade baixa, Dunlosky et al., 2013).
- "Estilos de aprendizagem" como critério de personalização (sem suporte).
- Mnemônicos como método geral: o mnemônico de palavra-chave teve utilidade baixa em Dunlosky et al.; **manter o botão Mnemônicos apenas como apoio** a listas ordenadas curtas, nunca como formato de revisão.
- Mapa conceitual feito com o texto à vista (Karpicke & Blunt, 2011). Só admitido **a partir da memória** (Blunt & Karpicke, 2014) e como formato opcional e raro.

---

## 4. ARQUITETURA DA REVISÃO

### 4.1 Unidade de conhecimento: `concept`
- Crie/complete a tabela `concepts` (`id`, `module_id`, `submodule_id`, `discipline`, `title`, `source_ref` — lei/artigo/obra, `edital_topic`). Cada item C/E, lacuna, par de contraste e checkpoint referencia **um ou mais** `concept_id`.
- O agente propõe o mapeamento a partir do conteúdo existente; itens sem `source_ref` verificável recebem `FONTE_PENDENTE` e **não entram** em revisões até serem resolvidos.
- Não gere conteúdo novo sem fonte: variações de itens (itens gêmeos, pares de contraste) só podem ser derivadas do **texto teórico já existente** e das fontes primárias citadas nele.

### 4.2 Um único agendador (sem sistemas concorrentes)
- A **Revisão do Dia (Leitner)** continua em Treinos como fila diária de itens vencidos. Os **submódulos de revisão** (Rn) são sessões **curadas** que consomem o **mesmo** estado por conceito (`concept_state`: `box`, `due_at`, `correct_days`, `last_confidence`, `history`). Acertos e erros em qualquer lugar atualizam o mesmo estado.
- Sincronização entre dispositivos via Supabase (já exigida). Estado salvo a cada resposta, não ao final da sessão.

### 4.3 Regras do agendador (constantes em `reviewConfig.ts`)
- **Dias de estudo:** configuráveis, padrão segunda a sexta. Vencimentos que caírem em dia sem estudo rolam para o próximo dia de estudo; para **evitar acúmulo na segunda-feira**, distribua o excedente pelos primeiros dias úteis com limite diário de itens `[HEURÍSTICA: limite diário editável pelo usuário]`.
- **Intervalos** (em dias de estudo) da Caixa 1 à N: valor inicial `[HEURÍSTICA]` 1, 2, 4, 7, 12. Aplique **teto = ~20% dos dias de estudo restantes até a prova** `[HEURÍSTICA inspirada em Cepeda et al., 2008]`, de modo que nada fique "agendado para depois da prova".
- **Erro:** volta à Caixa 1; se a confiança era alta, também entra no Caderno de Erros como "armadilha" e reaparece mais cedo (P5).
- **Consolidado:** ≥3 acertos em dias distintos (P4). Itens consolidados continuam aparecendo, em baixa frequência, até a fase final.
- **Fase final** (a partir de ~21 dias antes da prova, ≈ 27/12/2026, ajustável): sem conteúdo novo; só simulados cumulativos e revisão de armadilhas e itens não consolidados (seção 4.5).

### 4.4 Submódulos de revisão `Rn` entre os grandes módulos
- **Posição:** um submódulo de revisão cumulativa **ao final de cada módulo Mn, para n ≥ 2**, antes de liberar M(n+1). O **2.5 permanece onde está** (é conteúdo, não revisão).
- **Nomenclatura na Jornada:** "Revisão R2", "R3"… (nunca numerar como "2.6", para não colidir com os submódulos de conteúdo).
- **Composição de itens** (quando o módulo correspondente existir; senão redistribua proporcionalmente) `[HEURÍSTICA — calibrar com os dados do usuário]`:
  - **~40%** do módulo anterior M(n-1): **1ª revisão espaçada** (lag ≈ 1 módulo, coerente com P2);
  - **~30%** de M(n-2): 2ª revisão;
  - **~20%** de M(n-3) e anteriores, **priorizando** conceitos não consolidados e disciplinas com mais itens no edital (usar a contagem oficial extraída na Fase 0);
  - **~10%** de M(n) — apenas conceitos errados no simulado do próprio módulo (a recuperação imediata de M(n) já ocorreu no simulado; revisão massificada logo em seguida traz pouco ganho, P2).
- **Seleção dentro de cada faixa:** conceitos vencidos primeiro; depois menor domínio; depois erros de alta confiança; depois sorteio. **Intercalar** disciplinas e módulos na ordem de apresentação (P6).
- **Tamanho/duração:** varia com o volume. `itens = clamp(volume elegível, mín. 30, máx. 150)` `[HEURÍSTICA, editável]`. Mostre **duração estimada** usando a mediana real do tempo por item do próprio usuário (se não houver histórico, não exiba estimativa; não invente).
- **Gate:** ≥85% para liberar M(n+1) (decisão anterior do usuário). **Não aprovado:** não repetir tudo; entra **relearning dirigido** só com os conceitos errados (P4), em nova sessão **em outro dia de estudo**, e o usuário escolhe entre refazer a revisão completa ou apenas os itens errados. Considere a nota líquida Cebraspe ao calcular os 85% (itens em branco não somam nem subtraem; informe isso ao usuário).
- **Revisões de marco por disciplina:** quando todos os módulos de uma disciplina terminarem, insira uma **revisão disciplinar** (profundidade maior na disciplina) seguida de uma **revisão intercalada entre disciplinas afins** (ex.: Direito Constitucional × Direito Administrativo), onde os pares de contraste (F4) são mais densos.

### 4.5 Fase final (últimas ~3 semanas)
- **Simulados cumulativos de 180 itens** C/E, com **a proporção por disciplina do edital oficial** e cronometragem (transferência para o formato de prova; Morris et al., 1977).
- Entre simulados: revisão do Caderno de Erros por armadilhas, relearning de itens não consolidados.
- Sem conteúdo novo na última semana.

### 4.6 Projeção de prazo (Painel)
- Calcule e mostre: "no ritmo atual, você conclui o M12 em DD/MM; faltam X dias úteis para a prova". Se a projeção indicar que o M12 termina depois do início da fase final, **alerte** e sugira priorizar módulos pelo peso da disciplina no edital. Use apenas dados reais de ritmo; sem estimativa quando houver pouco histórico.

---

## 5. CATÁLOGO DE FORMATOS DE EXERCÍCIO

Implemente como componentes reutilizáveis, mobile-first. Cada submódulo Rn combina vários formatos. Em todos: feedback imediato com justificativa e fonte (`source_ref`).

| Id | Formato | Base de evidência | Uso |
|---|---|---|---|
| **F1** | **Recuperação livre ("o que eu lembro")**: mostra apenas o título do conceito e pede ao usuário que escreva ou dite (voz do teclado) tudo o que lembra; depois exibe checklist de pontos-chave e o usuário marca o que recuperou | Roediger & Karpicke (2006); Karpicke & Blunt (2011). *Limite:* a autocorreção costuma ser leniente (Rawson & Dunlosky, 2007) → usar checklist **binário de pontos-chave**, nunca nota subjetiva | 3–5 conceitos por revisão; foco em conceitos centrais e de alto peso |
| **F2** | **Lacuna com pista (cloze)** em dispositivos legais e definições: o usuário completa o trecho antes de ver as opções | Rowland (2014): recuperação com pista tende a render mais que reconhecimento (há divergência, ver P7) | Artigos, conceitos, prazos, quóruns |
| **F3** | **C/E Cebraspe com confiança**: marcar Certo / Errado / **Em branco** + confiança em 3 níveis (chute, provável, certo). Regra visível: errar anula um acerto; só vale arriscar quando a probabilidade percebida de acerto for >50% | Formato da prova (Morris et al., 1977); confiança + feedback (Butterfield & Metcalfe, 2001). A calibração alimenta o Radar (acerto por nível de confiança) | Núcleo de toda revisão |
| **F4** | **Pares de contraste**: duas assertivas quase idênticas que diferem no sujeito, órgão, prazo ou exceção; o usuário julga as duas | Kornell & Bjork (2008); Rohrer & Taylor (2007) — a aplicação ao estilo Cebraspe é **inferência nossa** | Competências (STF×STJ×TRF×TJ), prazos, atribuições, exceções |
| **F5** | **"Conserte o item"**: assertiva errada apresentada; o usuário escolhe a correção entre opções ou reescreve o trecho incorreto | Efeito de geração (Slamecka & Graf, 1978). **Não há estudo direto neste formato com C/E**; tratar como **hipótese** e medir (comparar acerto futuro dos conceitos treinados em F5 × F3) | Opcional; ativar só em conceitos com erros recorrentes |
| **F6** | **Interrogação elaborativa curta**: "por que isto é verdade?" com resposta curta e checklist | Dunlosky et al. (2013): utilidade moderada | Relações causais/estruturais (por que X é competência de Y) |
| **F7** | **Mapa conceitual a partir da memória** (nós vazios que o usuário preenche, sem consultar o texto) | Blunt & Karpicke (2014) | **Raro** (no máximo 1 por revisão de marco); alto custo no celular |
| **F8** | **Simulado cumulativo cronometrado** (fase final e revisões de marco) | Prática de teste distribuída (Dunlosky et al., 2013) e transferência para o formato de prova | Fase final |

**Ordem dentro de uma sessão Rn** `[HEURÍSTICA]`: F1 (poucos) → F2 → F3/F4 intercalados → F6 (poucos) → relatório. F5, F7 e F8 conforme as regras acima.

**Dificuldade progressiva (RPG):** a revisão começa com itens de recuperação mais "fáceis" (lacuna, C/E direto) e termina com itens no nível real do Cebraspe (pares de contraste, exceções).

---

## 6. UX DAS SESSÕES DE REVISÃO (mobile-first)

- **Entrada:** card na Jornada "Revisão R_n" com: o que será revisado (módulos e disciplinas), nº de itens, duração estimada (se houver histórico), gate (≥85%). O link leva a **Treinos**, onde a sessão roda (decisão anterior: simulados e revisões vivem em Treinos).
- **Durante:** uma pergunta por tela, barra de progresso, botão de voltar ao último item, **salvamento a cada resposta** (retomar de onde parou, inclusive em outro dispositivo).
- **Feedback por item:** certo/errado, justificativa, `source_ref`, e o comparativo com a confiança marcada ("você estava muito seguro e errou: item marcado como armadilha").
- **Resumo final:** acerto líquido (Cebraspe) e bruto; calibração; conceitos consolidados × em risco; armadilhas novas; "próxima revisão destes conceitos: DD/MM" (data real do agendador).
- **Texto explicativo curto e permanente** (ícone de ajuda): "Por que isto parece mais difícil?" — uma frase sobre dificuldade desejável (P8) e outra sobre por que a revisão mistura assuntos (P6). Sem citar autores na tela, mas com link "Saiba mais" para a seção de referências.
- **Acessibilidade e foco:** alvos de toque ≥44 px, contraste adequado nos temas claro e escuro, sem animações que atrapalhem a leitura.

---

## 7. REMOÇÃO DO MÓDULO DE REVISÃO ANTIGO DA JORNADA

1. Faça backup (SQL + arquivos) e relate o que será removido; **peça confirmação**.
2. **Migre** o histórico de acertos e erros dos itens antigos para o `concept_state` por `concept_id` (quando não for possível mapear, mantenha o histórico em tabela de arquivo, não o apague).
3. Atualize gates, rotas e links que apontavam para o módulo antigo (nenhum link pode quebrar; faça varredura automática de links).
4. Mantenha 2.2 e 2.3 como concluídos, 2.1 liberado e o 2.5 intacto; valide que **nenhum progresso** do usuário foi perdido.

---

## 8. CORREÇÃO MOBILE — OVERFLOW HORIZONTAL (execute primeiro: Marco R1)

**Sintoma observado nos prints do usuário (celular Android, tema escuro, leitura da teoria 2.5):** a página é **mais larga que a tela**. O usuário precisa arrastar para o lado; o texto fica cortado na borda esquerda e a **barra de navegação inferior** (Painel · Jornada · Treinos · Radar · Progresso) fica deslocada: em um estado só aparecem Treinos, Radar e Progresso; no outro, só Painel, Jornada e Treinos. Os espaçamentos entre ícones da barra também ficam maiores que 1/5 da largura, indicando que **a barra tem largura maior que a viewport**. Em outro print (tema claro, no Chrome) a barra cabe, e o cabeçalho superior mostra um rótulo truncado ("HNC…"). O botão flutuante "Mnemônicos" cobre texto na leitura.

**Tarefa:** achar e corrigir a **causa raiz**, não mascarar o sintoma.

1. **Diagnóstico com navegador automatizado (Playwright)** em viewports **360×800, 390×844 e 412×915**, nos temas **claro e escuro**, em **todas as rotas** (incluindo leitura da teoria, Jornada, Treinos, Radar, Progresso, Painel). Em cada uma, rode no console:
   `[...document.querySelectorAll('*')].filter(e => e.getBoundingClientRect().right > document.documentElement.clientWidth + 1)`
   e relate os elementos culpados (candidatos: barra inferior com `width:100vw`/`min-width`/`left` + padding, `white-space: nowrap`, blocos `pre`/`code`, tabelas sem container, imagens/SVG com largura fixa, itens flex sem `min-w-0`, textos longos sem quebra).
2. **Correções esperadas:**
   - Barra inferior: `position: fixed; inset-inline: 0; bottom: 0` com **`grid grid-cols-5`** (não larguras fixas nem `100vw`); respeitar `env(safe-area-inset-bottom)`.
   - Texto de leitura: `overflow-wrap: anywhere` (ou `break-word`) e `min-width: 0` nos contêineres flex/grid.
   - Tabelas, blocos de código e diagramas: **dentro do próprio contêiner com `overflow-x: auto`**; em telas <640 px, preferir transformar tabelas em **cartões empilhados** (já era queixa antiga do usuário).
   - `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">` conferido.
   - Altura com `dvh` em vez de `vh` onde houver layout de tela cheia.
   - **Não** resolver só com `overflow-x: hidden` no `body`: isso esconde o sintoma e pode cortar conteúdo. Se usar, só como defesa **adicional** após a causa raiz corrigida.
3. **Itens secundários vistos nos prints (verificar e corrigir):** rótulo "HNC…" truncado no cabeçalho; botão flutuante "Mnemônicos" cobrindo texto (reservar espaço inferior no conteúdo ou reposicionar).
4. **Teste de regressão automatizado:** para cada rota, tema e viewport, `document.documentElement.scrollWidth <= window.innerWidth` e a barra inferior com os 5 itens inteiramente visíveis. O teste roda no CI antes do deploy.
5. **Aceite:** o usuário abre a leitura da teoria 2.5 no celular, em tema escuro e claro, e **nunca** consegue arrastar a página para o lado; a barra mostra os 5 itens centralizados.

---

## 9. MARCOS E CRITÉRIOS DE ACEITE

| Marco | Entrega | Aceite |
|---|---|---|
| **R0** | Relatório de auditoria (seção 2) | Usuário aprova o relatório |
| **R1** | Correção mobile (seção 8) + teste de regressão | Teste verde no CI; usuário confirma no celular real |
| **R2** | `concepts`, `concept_state`, migrações com backup, agendador unificado (4.1–4.3), `reviewConfig.ts` | Revisão do Dia e Caderno de Erros funcionando sobre o novo estado; vencimentos respeitam dias de estudo; sincronização celular × computador |
| **R3** | Componentes de exercício F1–F8 (seção 5) | Cada formato com feedback e justificativa; salvamento a cada resposta |
| **R4** | Motor de composição das revisões Rn + inserção na Jornada + gates + relearning dirigido (4.4, 6) | Rn gerada a partir do estado real; ≥85% libera M(n+1); reprovação gera relearning |
| **R5** | Remoção do módulo de revisão antigo com migração (seção 7) | Nenhum progresso perdido; nenhum link quebrado |
| **R6** | Revisões de marco por disciplina, fase final, simulados cumulativos de 180 itens, projeção de prazo (4.4–4.6) | Simulado segue proporção do edital; Painel mostra projeção real |
| **R7** | Auditoria final + testes e2e + relatório de pendências (`FONTE_PENDENTE`) | Relatório final entregue |

**Verificação ao fim de cada marco:** build limpo, lint, tipos, testes, varredura de links, teste manual em 390×844 (claro e escuro) e deploy de preview.

---

## 10. PERGUNTAS QUE VOCÊ (AGENTE) DEVE FAZER AO USUÁRIO

Antes de R2, pergunte e aguarde resposta: (1) feriados/dias sem estudo entre agora e 17/01/2027 e se quer manter segunda a sexta; (2) se há limite diário de revisões que ele considera confortável; (3) confirmação do que será apagado (seção 7).

---

## 11. REFERÊNCIAS (com tradução; use somente estas na interface)

- **Cepeda, N. J., Vul, E., Rohrer, D., Wixted, J. T., & Pashler, H. (2008).** *Spacing effects in learning: A temporal ridgeline of optimal retention* (Efeitos de espaçamento no aprendizado: uma "crista temporal" de retenção ótima). *Psychological Science, 19*(11), 1095–1102.
- **Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006).** *Distributed practice in verbal recall tasks: A review and quantitative synthesis* (Prática distribuída em tarefas de recordação verbal: revisão e síntese quantitativa). *Psychological Bulletin, 132*(3), 354–380.
- **Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013).** *Improving students' learning with effective learning techniques* (Melhorando o aprendizado dos estudantes com técnicas de aprendizagem eficazes). *Psychological Science in the Public Interest, 14*(1), 4–58.
- **Roediger, H. L., & Karpicke, J. D. (2006).** *Test-enhanced learning: Taking memory tests improves long-term retention* (Aprendizado potencializado por teste: fazer testes de memória melhora a retenção de longo prazo). *Psychological Science, 17*(3), 249–255.
- **Karpicke, J. D., & Blunt, J. R. (2011).** *Retrieval practice produces more learning than elaborative studying with concept mapping* (A prática de recuperação gera mais aprendizado do que o estudo elaborativo com mapas conceituais). *Science, 331*(6018), 772–775.
- **Blunt, J. R., & Karpicke, J. D. (2014).** *Learning with retrieval-based concept mapping* (Aprender com mapas conceituais baseados em recuperação). *Journal of Educational Psychology, 106*(3), 849–858.
- **Rowland, C. A. (2014).** *The effect of testing versus restudy on retention: A meta-analytic review of the testing effect* (O efeito do teste versus reestudo sobre a retenção: revisão meta-analítica do efeito do teste). *Psychological Bulletin, 140*(6), 1432–1463.
- **Adesope, O. O., Trevisan, D. A., & Sundararajan, N. (2017).** *Rethinking the use of tests: A meta-analysis of practice testing* (Repensando o uso de testes: uma meta-análise da prática de testes). *Review of Educational Research, 87*(3), 659–701.
- **Karpicke, J. D., & Roediger, H. L. (2008).** *The critical importance of retrieval for learning* (A importância crítica da recuperação para o aprendizado). *Science, 319*(5865), 966–968.
- **Karpicke, J. D., & Roediger, H. L. (2007).** *Expanding retrieval promotes short-term retention, but equal interval retrieval enhances long-term retention* (A recuperação em intervalos crescentes favorece a retenção de curto prazo, mas a de intervalos iguais favorece a de longo prazo). *Journal of Experimental Psychology: LMC, 33*(4), 704–719.
- **Rawson, K. A., & Dunlosky, J. (2011).** *Optimizing schedules of retrieval practice for durable and efficient learning: How much is enough?* (Otimizando cronogramas de prática de recuperação para um aprendizado durável e eficiente: quanto é suficiente?). *Journal of Experimental Psychology: General, 140*(3), 283–302.
- **Rawson, K. A., Dunlosky, J., & Sciartelli, S. M. (2013).** *The power of successive relearning: Improving performance on course exams and long-term retention* (O poder do reaprendizado sucessivo: melhorando o desempenho em provas e a retenção de longo prazo). *Educational Psychology Review, 25*, 523–548.
- **Rawson, K. A., & Dunlosky, J. (2007).** *Improving students' self-evaluation of learning for key concepts in textbook materials* (Melhorando a autoavaliação do aprendizado de conceitos-chave em materiais didáticos). *European Journal of Cognitive Psychology, 19*, 559–579.
- **Butterfield, B., & Metcalfe, J. (2001).** *Errors committed with high confidence are hypercorrected* (Erros cometidos com alta confiança são hipercorrigidos). *Journal of Experimental Psychology: LMC, 27*(6), 1491–1494.
- **Kornell, N., & Bjork, R. A. (2008).** *Learning concepts and categories: Is spacing the "enemy of induction"?* (Aprendendo conceitos e categorias: o espaçamento é o "inimigo da indução"?). *Psychological Science, 19*(6), 585–592.
- **Rohrer, D., & Taylor, K. (2007).** *The shuffling of mathematics problems improves learning* (Embaralhar problemas de matemática melhora o aprendizado). *Instructional Science, 35*, 481–498.
- **Kornell, N., Hays, M. J., & Bjork, R. A. (2009).** *Unsuccessful retrieval attempts enhance subsequent learning* (Tentativas de recuperação malsucedidas melhoram o aprendizado posterior). *Journal of Experimental Psychology: LMC, 35*(4), 989–998.
- **Bjork, E. L., & Bjork, R. A. (2011).** *Making things hard on yourself, but in a good way: Creating desirable difficulties to enhance learning* (Dificultando as coisas para si, mas de um bom jeito: criando dificuldades desejáveis para melhorar o aprendizado). Em *Psychology and the Real World*. Worth Publishers.
- **Morris, C. D., Bransford, J. D., & Franks, J. J. (1977).** *Levels of processing versus transfer appropriate processing* (Níveis de processamento versus processamento apropriado à transferência). *Journal of Verbal Learning and Verbal Behavior, 16*, 519–533.
- **Slamecka, N. J., & Graf, P. (1978).** *The generation effect: Delineation of a phenomenon* (O efeito de geração: delimitação de um fenômeno). *Journal of Experimental Psychology: Human Learning and Memory, 4*(6), 592–604.

**Nota de transparência (exibir na tela "Por que revisamos assim"):** os estudos acima foram conduzidos, em sua maioria, com estudantes e material textual; a aplicação a legislação e à prova do Cebraspe é extrapolação fundamentada. Valores marcados `[HEURÍSTICA]` são pontos de partida do projeto, não resultados de pesquisa, e serão calibrados com os dados reais de acerto do usuário.
