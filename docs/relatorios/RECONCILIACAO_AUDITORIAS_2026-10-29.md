# Revisão de abrangência e reconciliação das auditorias HNC

Referência: 29/10/2026; continuação do commit `03ce9d6`. Edital e corte cadastrados no HNC, por orientação expressa do responsável. A publicação remota é independente da implementação local.

## Resultado e limite principal

**A revisão conceitual individual de todo o acervo ainda não está concluída.** Esta entrega faz o inventário integral, aplica verificações técnicas por registro, amplia os caminhos de feedback, corrige defeitos reproduzidos e documenta as pendências. Não é correto anunciar “mais de duas mil questões homologadas”, “todas no nível CEBRASPE” ou “todas as auditorias resolvidas”.

O censo contém 2.179 registros nos 21 arquivos de questões: 2.051 ativos nos 20 cadernos, 59 bloqueados por conferência e 69 fora do registro de simulados (o arquivo ampliado só foi encontrado em importações de testes). Existem ainda 225 checkpoints, 60 itens de véspera e 28 registros na base adaptativa legada. A seleção adaptativa agora usa o banco ativo, em vez dessa base antiga ou de geração automática. Os 225 exercícios derivados de checkpoints não são 225 questões inéditas adicionais. Não foram encontrados exercícios X1–X10 explicitamente cadastrados fora dessa conversão no catálogo percorrido.

São 2.492 registros inventariados entre essas fontes, com hash, origem, estado editorial e sinais por item no CSV e no JSON de [acervo](acervo/resumo.json). Houve intervenção editorial focal em 26 registros: 16 bloqueios por divergência, sete fundamentações/contrastes revistos e três explicitações de edição histórica. Os demais 2.466 registros permanecem com revisão conceitual individual pendente neste levantamento. As 26 intervenções também não são homologação documental completa: o campo `homologado` permanece falso.

Foram detectados 255 grupos de textos repetidos sob a normalização definida no script. A triagem registrou 152 comentários genéricos, 810 contrastes com a inserção artificial de “indevidamente” e quatro gatilhos não literais. São sinais editoriais, não provas automáticas de erro. Um registro sem sinal também pode conter erro conceitual. A dificuldade declarada não foi calibrada psicometricamente.

## Nome da banca e escopo do estudo reverso

A referência correta é **CEBRASPE**. Não foi identificada uma dependência operacional da grafia errada “Sebrasp/Sebraspe” no código de produto examinado. As referências históricas a CESPE foram preservadas. Os prompts que se apresentavam como a própria banca ou como autores de dicionário foram reformulados como assistência educacional independente.

O painel comum já atende os itens ativos de todos os simulados por módulo. Nesta rodada, foi estendido a ItemCE, adaptativo, caderno de erros, treino de véspera e cada subitem X8. O renderizador X1–X10 e o feedback F1–F8 incluem conferência do raciocínio da resposta. Radar é consulta, sem resposta do aluno. Todos os cadernos, inclusive o Mega, e o adaptativo abrem por padrão com feedback por resposta. O modo prova é uma escolha explícita antes da primeira resposta e conserva comentários ao final; o relatório oferece a correção por item. A regra foi estendida aos caminhos de interface, mas a qualidade do comentário depende da revisão individual do conteúdo.

O feedback explica a comparação entre resposta e critério, mostra a fundamentação cadastrada e orienta o aluno a distinguir desconhecimento, interpretação e marcação. Não infere a causa psicológica do erro. Comentários tautológicos são sinalizados; gatilhos arbitrários ligados a esses comentários e contrastes artificiais não são apresentados como fundamento confiável. Persistem itens que precisam de explicação específica, regra, condição, exceção e fonte localizada.

## Revisão focal de conteúdo

Os casos de inglês incluem contagem das pessoas no carro, troca de pais por alunos na prisão por faltas escolares, analogia entre estacionamento e vida familiar, duas alternativas contra faltas, novidade/quantificação de multas, terceira infração em Los Angeles e os sentidos de *allay* e *outperform*. O registro de alterações contém a fundamentação proposta e a ação por ID. Nos conflitos de gabarito, o item foi bloqueado, mantendo-se o julgamento legado até conferir a origem e tratar o histórico; não foi fabricado um novo gabarito “oficial”. Não houve reclassificação retroativa das tentativas do aluno.

Três cópias do item histórico sobre sinais angulares em URLs passaram a explicitar NBR 6023:2002. A justificativa não chama mais a edição de 2018 de vigente. O prefácio da NBR 6023:2025 informa que ela cancela e substitui a edição de 2018. Isso não valida automaticamente os demais itens de normalização.

Fontes consultadas:

- Texto-base incorporado em cada questão de inglês; a leitura do texto não substitui conferência do caderno e gabarito final da prova alegada.
- [Collins, allay](https://www.collinsdictionary.com/dictionary/english/allay) e [Cambridge, outperform](https://dictionary.cambridge.org/dictionary/english/outperform). As páginas Cambridge tiveram bloqueio de acesso direto; os trechos indexados foram obtidos na busca. Não se atribuiu a elas um espelho oficial da banca.
- [NBR 6023:2025, exemplar disponibilizado pela FHO](https://www.fho.edu.br/assets/documentos/FHO_Biblioteca_Referencia_ABNT_6023_2025.pdf), prefácio. A norma completa não foi incorporada ao pacote.
- `docs/edital_cargo5.pdf`, 13.33–13.35. O arquivo cadastrado tem data de 02/10/2026. Legislação e jurisprudência seguem regras diferentes. Trinta dias corridos antes de 17/01/2027 correspondem a 18/12/2026. Não houve certificação de todas as retificações externas.

## Reconciliação dos 24 achados da auditoria geral

“Corrigido” descreve o defeito concreto e os limites indicados, não uma certificação da plataforma inteira. “Parcial” conserva trabalho necessário. A auditoria original está em `AUDITORIA-HNC.md`, no pacote anterior, com referência-base `c8c4bac`.

| Achado | Estado | Evidência e trabalho que permanece |
|---|---|---|
| H01 — Nota inventada de discursiva | Corrigido na entrega anterior | Serviço e tela tratam indisponibilidade sem nota heurística inventada; testes de contrato e fluxo permanecem. Validação do serviço publicado depende de implantação. |
| H02 — Contrato da discursiva | Corrigido na entrega anterior | DTO compartilhado entre cliente/API e validação dos erros. Cliente e API precisam chegar juntos ao deploy. |
| H03 — Gabaritos contraditórios de inglês | Parcial | Casos focais foram fundamentados ou bloqueados; teste percorre todos os textos ativos procurando conflitos literais. Revisão semântica das demais questões e espelhos finais continua necessária. |
| H04 — F2/F5/F8 aprovam resposta inadequada | Corrigido no mecanismo | `avaliarFormatoRevisao`: F2 exige julgamento e justificativa; F5 compara todos os pares; F3/F8 só aceitam opção específica cadastrada, com retorno a C/E quando ausente. Testes incluem motivos errados e associações trocadas. Qualidade dos distratores ainda integra H07. |
| H05 — Lacunas consolidam assertiva falsa | Corrigido no mecanismo | `conceptRepository`: item E sem versão corrigida não gera F4; resposta registra o termo escolhido. O catálogo não ganha uma versão correta inventada. |
| H06 — Confiança inferida após feedback | Corrigido | Seleção opcional antes de responder; ausência permanece indefinida no log. Não se deduz certeza a partir de acerto. |
| H07 — Variedade cognitiva nominal | Parcial | Removidas opções genéricas automáticas de F3/F8. F6 ainda contextualiza C/E e F7 ainda pode terminar em reconhecimento. F2/F4/F5 derivados precisam de alternativas e relações substantivas específicas; não estão calibrados. |
| H08 — Retenção de 83% sem histórico | Corrigido na interface anterior | Ausência de histórico não mostra retenção pessoal inventada; projeções identificadas como estimativas. Isso não valida o modelo de retenção. |
| H09 — Corte normativo confunde categorias | Corrigido contra o documento cadastrado | `projectionsEngine`, `reviewConfig` e Radar distinguem 13.33–13.34 de 13.34.1; corrigido o cálculo de 30 dias para 18/12. Retificações oficiais precisam de acompanhamento. |
| H10 — Estudo reverso parcial anunciado completo | Parcial | Caminhos de feedback ampliados e censo integral rastreável. Ainda faltam fundamentações específicas e revisão conceitual em milhares de registros; o relatório deixa isso explícito. |
| H11 — Adaptativo ignora escopo/repete IDs | Parcial | Seleção de banco ativo respeita módulos, não completa quantidade com cópias e informa quantidade parcial. O cliente de treino deixou de depender do contrato de geração incompatível. A API legada permanece, assim como oportunidades de diversificação e seleção por exposição/habilidade. |
| H12 — Filtro não comprova verdade | Parcial | Treino adaptativo não serve geração automática; relatório de CI passa a descrever verificações estruturais. `antiHallucinationGuard` continua sem conferir existência e sustentação das fontes. Exige registro documental e validação semântica. |
| H13 — Prova 90+90 incompleta | Parcial | Cadernos com exclusões são rotulados treino parcial; relatório não promete Top 22/convocação. Falta reserva homologada e verificação de independência/exposição das famílias. O caderno “oficial” tem 178 ativos nesta rodada. |
| H14 — Repetições como novas exposições | Pendente no modelo | Censo identifica hashes de texto e 255 grupos; métricas ainda precisam de identidade canônica e de família. Hash literal não identifica toda variante semântica. |
| H15 — Backup incompleto | Parcial | Tentativas incluídas anteriormente e escopo visível. Estados de conceitos, redações e outros depósitos ainda não integram restauração completa testada. |
| H16 — Isolamento por conta incompleto | Pendente | `itemAttemptsSyncService` ainda tem chaves/canal globais; redações e sessões socráticas também precisam de escopo e transição atômica. Não se comprovou vazamento remoto. |
| H17 — Sincronização de conceitos | Pendente | `useConceptStore.sincronizarComSupabase` não está integrado ao login; merge favorece local por spread e escrita precisa tratar erro e retry. Indicador de nuvem anterior cobre apenas o resumo declarado, não resolve isso. |
| H18 — Intercalação sobrescreve um tópico | Corrigido | Substituição escolhe grupo com mais de um candidato; regressão reproduz A/A/A + B/C e exige A/B/C. |
| H19 — Aceleração sem histórico adequado | Parcial | Exige certeza anterior e atual, datas distintas e vencimento; acerto no chute integra o total objetivo. Ainda é necessário separar indicadores de prática imediata e recuperação espaçada e qualificar históricos legados. O multiplicador é heurística do HNC. |
| H20 — Normas com vigência ambígua | Parcial | Três cópias de NBR 6023 corrigidas no recorte histórico; o restante do conteúdo normativo ainda exige edição, localizador e conferência individual. |
| H21 — Socrático offline sempre indefere | Corrigido no fallback | Argumento é registrado como não julgado quando o serviço está indisponível. Usa comentário cadastrado, sem fabricar citação literal de autores. Pareceres gerados online ainda precisam de conferência de fonte. |
| H22 — Dependências e rate limit | Parcial | Atualizações compatíveis reduziram 16 alertas para nove (oito baixos, um alto; nenhum crítico). O alto remanescente é Zod e pede migração principal. Rate limit em `api/_lib/guard.ts` continua em memória, sem limite distribuído atômico. |
| H23 — Testes podem aprovar tela errada | Parcial | Script mobile agora bloqueia login/título incompatível e deixa de declarar contraste não medido; CI usa `npm run verify`. Suíte inclui alternativas incorretas e testes por todos os registros ativos. Cobertura real não é exaustiva. |
| H24 — Margem de corte zero | Corrigido | Margem usa apenas critérios presentes; regressões cobrem percentual, nota absoluta e ambos. |

## Reconciliação dos 13 achados de UX/UI

As implementações anteriores estão em [IMPLEMENTACAO_FRONTEND_UX_UI_2026-10-29.md](IMPLEMENTACAO_FRONTEND_UX_UI_2026-10-29.md). Os 67 cenários e 38 estados de axe ali descritos são evidência daquela entrega; não são apresentados como uma nova execução integral nesta rodada. Foram conferidos os caminhos correspondentes no código e mantidos os testes de regressão na suíte atual.

| Achado | Estado da implementação local | Evidência / limite |
|---|---|---|
| UX01 — Teclado e diálogos | Implementado | `AccessibleModal`, sem remoção do foco contido/retorno/Escape nesta rodada. |
| UX02 — Destino da busca | Implementado | Navegação para edital e questão identificada; banco segue elegibilidade atual. |
| UX03 — Tema móvel | Implementado | Mesma store de tema no menu e seletor. |
| UX04 — Contagens de filtros | Implementado | Derivadas da matriz, sem certificação jurídica do conteúdo. |
| UX05 — Eixo selecionado | Implementado | Manifestos de treino de eixo independentes e restritos aos submódulos. |
| UX06 — Erro de discursiva visível | Implementado | Estado de indisponibilidade junto à ação. |
| UX07 — Falha de cópia | Implementado | Sucesso depende de resolução do clipboard. |
| UX08 — Contraste | Implementado nos estados medidos | Novos estados e combinações não são certificação WCAG integral. |
| UX09 — Semântica e atualização | Implementado | Estrutura principal e região de atualização preservadas; painel pedagógico usa seção nomeada. |
| UX10 — Execução do simulado | Implementado | Catálogo recolhido e contexto da tarefa preservado. |
| UX11 — Sobrecarga de informação | Implementado | Busca/lotes no Radar; cartões e painéis recolhíveis. Reteste do caderno mantém feedback até conclusão explícita. |
| UX12 — Aviso de versão | Implementado | Fluxo normal, dispensa e adiamento em prova/escrita. |
| UX13 — Dados e estimativas | Parcial no sistema; interface implementada | Texto honesto e indicador de resumo. H14–H17 continuam pendentes; não há backup/sincronização universal nem certificação do modelo de retenção. |

## Critérios necessários para encerrar a revisão editorial integral

1. Para cada registro, conferir assertiva, julgamento, explicação, recorte temporal, fonte e localizador; registrar revisor e versão. “Fonte verificada” legada não basta como evidência.
2. Corrigir problemas preservando a distinção entre item original, adaptação e inédita. Em caso de mudança de gabarito, tratar o histórico antes de reativar.
3. Redigir regra, condição/exceção, trecho decisivo e contraste plausível quando útil. Não adicionar texto genérico apenas para preencher campos.
4. Conferir famílias/cópias em todos os módulos, checkpoints, véspera e simulados; evitar contagem como nova exposição e reservar itens de avaliação.
5. Rever dificuldade e habilidades com especialistas e dados de alunos. Estilo CEBRASPE inclui inferência, aplicação, escopo e distratores plausíveis; não é quota fixa C/E nem presença de palavras absolutas.
6. Tratar as pendências de isolamento, sincronização, backup e APIs; depois validar a versão implantada com contas de homologação.

A ciência da aprendizagem orienta recuperação ativa, feedback corretivo, espaçamento e comparação de conceitos; não certifica automaticamente questões geradas ou as agendas específicas do produto. A fundamentação científica anterior permanece em [PESQUISA_APRENDIZAGEM_E_RACIOCINIO_CEBRASPE.md](../PESQUISA_APRENDIZAGEM_E_RACIOCINIO_CEBRASPE.md).

## Reprodução

- `node scripts/auditarAcervo.mjs`: gera resumo, JSON e CSV por registro, com estados editoriais explícitos.
- `npm run verify`: lint, testes, verificações estruturais independentes e build/orçamento.
- `npm audit --json`: situação atual de dependências; não usar `--force` como substituto de migração validada.

As evidências de execução e o pacote importável acompanham a entrega. Não contêm credenciais da conta de teste.


## Validação registrada nesta rodada

- 959 testes aprovados em 122 arquivos, sem suítes com falha.
- Um teste percorre todos os 2.051 itens ativos e renderiza a correção nos estados de acerto, erro e branco: 6.153 estados do painel. Isso verifica compatibilidade técnica, não a verdade das explicações.
- 24 cenários de navegador local aprovados: primeiro item dos 20 cadernos em modo estudo, escolha explícita de prova sem revelar correção, adaptativo, manutenção da correção do reteste e véspera. Usa conta sintética e interações programáticas; não é validação da produção nem de todas as questões no navegador.
- Modo prova é persistido na própria sessão do caderno e não pode ser alterado depois da primeira resposta; regressão cobre preservação do campo na serialização.
- Lint sem avisos/erros, TypeScript e build com orçamento aprovados. As quatro verificações estruturais independentes passaram; não são homologação conceitual.
- `npm audit`: nove alertas remanescentes, oito baixos e um alto, contra 16 na leitura inicial; migração principal do Zod e limite distribuído continuam pendentes.

A branch remota `master` continuava em `c8c4bac0d12b495e21604570094d41217d24a05e` na leitura via GitHub. A tentativa de criar uma branch para enviar a entrega retornou HTTP 403, `Resource not accessible by integration`. Portanto, estas correções estão no workspace e no pacote importável, sem PR ou implantação remota. Não se tentou contornar essa restrição por outro canal.
