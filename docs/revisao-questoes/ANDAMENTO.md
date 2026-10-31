# Revisão individual do banco e dos simulados

Referência: edital e corte cadastrados no HNC. Iniciada em 30/10/2026. Revisão individual do banco e validação final concluídas; publicação em andamento.

Situação atual: **2.179 de 2.179 revisadas individualmente; nenhuma pendência no inventário do banco**. A revisão não equivale a confirmação de origem oficial. As 59 adaptações historicamente isoladas receberam disposição editorial específica, sem certificar a prova atribuída.

O inventário de `src/content/questions` contém **2.179 itens**: 2.110 em 20 cadernos e 69 complementares. A revisão inclui itens fora do treino e não equivale à simples aprovação dos atualmente elegíveis. A interface compartilhada também atende outras atividades; checkpoints da reforma teórica têm registro separado.

## Método

Cada item é lido com seu comentário, contexto e julgamento. São conferidos conceitos, edição/referência normativa, OCR, condições do enunciado, contraste e utilidade pedagógica. As mudanças são registradas individualmente em `lotes/`, com fontes, motivo e impressões digitais anteriores e posteriores. Não há preenchimento automático de explicações por um texto-modelo.

`node scripts/revisaoQuestoes.mjs validar` verifica a aplicação e integridade dos lotes. A validação detecta desatualização do registro, trecho não literal e ausência de campos; **não certifica verdade conceitual**. `aplicar` só aplica decisões explícitas desses registros e recusa alterações inesperadas na questão.

Revisão conceitual e confirmação de origem oficial são verificações diferentes. Um identificador de agregador ou número de compilação não pode ser anunciado como número da prova original. A compilação CAD CESPE é usada como fonte secundária e modelo de redação; provas e gabaritos oficiais publicados pela banca prevalecem na confirmação de origem. Quando o enunciado é reformulado, ele é adaptação editorial.

## Lotes

| Caderno | Itens revisados neste processo | Situação |
| --- | ---: | --- |
| M3 — Classificação e Indexação | 100/100 | Revisão individual aplicada |
| M4 — Recuperação, Fontes e Referência | 100/100 | Revisão individual aplicada |
| M2 — Catalogação, RDA, modelos e MARC | 100/100 | Revisão individual aplicada |
| M1 — Fundamentos, leis, informação e ética | 100/100 | Revisão individual aplicada |
| M5 — Gestão, coleções, avaliação e conhecimento | 100/100 | Revisão individual aplicada |
| M6 — Bibliotecas digitais, interoperabilidade, dados e IA | 100/100 | Revisão individual aplicada |
| M7 — Preservação digital e conservação de acervos | 100/100 | Revisão individual aplicada |
| M8 — Referências, citações e apresentação documental | 100/100 | Revisão individual aplicada |
| M9 — Comunicação científica, abertura, métricas e integridade | 100/100 | Revisão individual aplicada |
| M10 — Processo legislativo, contexto e legislação | 100/100 | Revisão individual aplicada |
| M10A — Constituição e processo legislativo | 100/100 | Revisão individual aplicada |
| M10B — Regimentos da Câmara e do Congresso | 100/100 | Revisão individual aplicada |
| M11 — Direito Administrativo, gestão pública e contratações | 100/100 | Revisão individual aplicada |
| M12 — Inglês: leitura, coesão e vocabulário contextual | 100/100 | Revisão individual aplicada |
| M13 — Português: interpretação, reescrita, sintaxe e ortografia | 100/100 | Revisão individual aplicada |
| M14 — Tecnologia, colaboração, redes, segurança, IA e dados | 100/100 | Revisão individual aplicada |
| Simulado integral Câmara | 180/180 | Revisão individual aplicada, incluindo textos de apoio e cópias divergentes |
| Mega simulado | 120/120 | Revisão individual aplicada |
| Simulado geral Câmara | 180/180 | Revisão individual aplicada, inclusive cópias conferidas com os módulos |
| Mini módulo de órgãos | 30/30 | Revisão individual aplicada |
| Banco complementar | 69/69 | Revisão individual aplicada e caderno disponibilizado |

No M3 foram corrigidos três julgamentos: `m3-q-33`, `m3-q-39` (CDDir) e `m3-q-76` (simetria e reciprocidade). Foram reescritas perguntas dependentes de uma edição histórica não identificada, corrigidos fragmentos de OCR e substituídos comentários genéricos e contrastes artificiais. Os dois exemplos das imagens correspondem a `m3-q-64` e `m3-q-49`.

O arquivo do acervo chamado CDD 23 traduzida é uma compilação comentada, com identificação e conteúdo que não permitem tratá-lo como substituto da edição oficial. Para regras da CDD foi consultada a introdução do editor OCLC. As fontes e localizadores estão em `fontes.json` e em cada item.

Não modificar retrospectivamente a primeira tentativa do aluno para fazê-la parecer resposta à nova redação. Antes de publicar alterações de julgamento, verificar tratamento de sessões ativas e históricos. A dificuldade permanece uma estimativa editorial até haver dados de desempenho.

Marco de 300 itens: corrigidos também os vínculos com a teoria pelo assunto efetivo. Verificações antigas exigiam 50% de cada gabarito e 25 questões por submódulo, impondo restrições que podiam impedir correções de julgamento e vínculos. Esses requisitos sem base na banca foram substituídos por integridade de contagem, validade dos julgamentos e existência do submódulo. Não foram alterados gabaritos para satisfazer porcentagens.

Após o marco de 300, a suíte completa foi executada sobre os 400 itens então aplicados: 978 testes aprovados, lint, auditoria estrutural e compilação aprovados. A UI distingue adaptação editorial de origem oficialmente confirmada; a correção conceitual não é prova de origem. O envio seguinte foi realizado no marco de 600 itens.

Marco de 600 itens: M1, M5 e M6 concluídos neste processo. No M5 foram corrigidas definições de desbastamento, dimensões do conhecimento e aplicações de CRM/DSI, com redação explicitamente adaptada quando necessário. No M6, contrastes absurdos foram substituídos por confusões conceituais plausíveis; explicações delimitam versões de software, funções de protocolos, FAIR, preservação e limites da IA. Vínculos de teoria seguem o assunto efetivo.

O diagnóstico lexical deixou de impor tetos de palavras e cotas de gabarito sem base empírica oficial: as distribuições continuam visíveis para análise editorial. O censo técnico passou a reconhecer o registro individual vigente por hash, mantendo separados os registros históricos e as pendências dos demais tipos de atividade.

Validação do marco de 600: 978 testes em 125 arquivos aprovados, lint sem falhas, verificações estruturais e compilação com orçamentos aprovados. O censo registra 600 revisões individuais vigentes; os demais tipos de atividade mantêm inventário e registro separados. Os testes não certificam a correção conceitual das 1.579 questões ainda pendentes.

M7: corrigidos julgamentos dos itens 5 e 82 (microfilmagem anterior aos anos 1970), 24 (OAIS não é esquema equivalente a OAI-PMH) e redação do 21 (adaptação explícita, ainda isolada por bloqueio histórico). Repetições foram substituídas por aplicações de conservação física, identificadas como itens autorais. As referências indicam PREMIS 3.0 e Resolução CONARQ 51/2023, respeitando versões e revogações. O próximo envio deste conjunto é o marco de 900.

M8: revisão individual aplicada com NBR 6023:2025, 10520:2023, 6028:2021 e 14724:2024 corrigida em 2025. O item 2 foi corrigido para E (sinais angulares não são obrigatórios na edição vigente). Questões de edições antigas foram explicitamente atualizadas; os comentários distinguem recomendação, obrigação e exceções. Um item literário sem texto-base foi substituído por aplicação de citações. Testes direcionados: 91 aprovados.

M9: 100 itens revisados individualmente. Corrigidos escopo temporal do Qualis e integração Sherpa/Open Policy Finder; comentários distinguem atenção de qualidade, unidade do indicador e limites dos modelos. Corrigidos os julgamentos 80 e 96 para C em redações delimitadas (apoio de medidas quantitativas a estudos de uso e função de descoberta da bibliografia), sem alegar reversão de gabarito oficial. Meia-vida não é prazo de inutilidade; o núcleo de Bradford não reúne necessariamente a maioria dos artigos.

Censo no marco de 900: 900 registros individuais vigentes. O censo detectou conflito com a cópia `oficial-180q-147`, que foi então lida e corrigida individualmente. Esse reparo adicional eleva o marco a 901 registros vigentes (1.278 pendentes); não publicar o banco parcialmente revisado em produção. Os 60 exercícios de véspera e 28 itens adaptativos legados permanecem inventariados separadamente. Histórico e sessões ativas também exigem tratamento de versão antes da publicação.

Validação do marco de 900 e cópia adicional (901): 978 testes em 125 arquivos aprovados, lint, verificações estruturais e compilação com orçamentos aprovados. Navegador local validou modos estudo e prova e aplicação guiada nas larguras 1440 e 390, sem overflow ou erros de execução. O censo deixou de registrar gabaritos conflitantes entre textos idênticos ativos. Correção semântica dos demais 1.278 itens continua pendente; nenhum desses checks a substitui.

M10: mais 100 revisões individuais aplicadas (total 1.001; 1.178 pendentes). Corrigidos julgamentos 3, 25, 27, 36 e 95 para E: sobrestamento sem ressalvas, dispensas indevidas na urgência, competência do Primeiro-Secretário, alcance do parecer terminativo e atribuição de regra profissional à lei errada. As substituições de afirmações institucionais não comprovadas foram delimitadas como hipóteses didáticas ou funções verificáveis. Vínculos do M8 também foram corrigidos após conferir o conteúdo efetivo das aulas.

Após o M10, foram detectadas e lidas as cópias `oficial-180q-173` (urgência constitucional) e `mega-q-117` (Primeiro-Secretário). Ambas receberam correção de julgamento e comentário próprio, elevando o total para 1.003 e as pendências para 1.176. Os 100 testes direcionados passaram após essas correções. O próximo envio reúne mais três cadernos de 100 e os reparos de cópias necessários.

M10A: mais 100 itens aplicados (total 1.103, pendentes 1.076). Corrigidos julgamentos 10 (Vice-Presidente do Senado na promulgação), 27 (Presidente promulga resoluções da Câmara) e 91 (identidade abstrata no LexML, distinta da versão). Delimitados alcance do bloqueio de pauta por MP, controle do TCU e poderes das CPIs com referências constitucionais e do STF.

M10B: 100 revisões individuais aplicadas; total de **1.203/2.179**, com **976 pendentes**. Julgamentos corrigidos em 7, 19, 31, 35, 42, 44, 53, 54, 55, 64 e 72: divisão de atribuições das Secretarias, execução do policiamento, admissibilidade pela comissão especial, mais de quatro comissões de mérito, início dos trabalhos de comissão, substitutiva/substitutivo, urgência e eficácia de parecer, arquivamento/desarquivamento após Resolução 33/2022, maioria absoluta na urgência do art. 155 e recurso de questão de ordem. Foram retiradas duplas negações artificiais; as explicações distinguem regra, exceção, autoridade, prazo e quórum. Abertura de sessão: décima parte desprezada a fração (51 de 513); verificação: seis centésimos; efeito suspensivo de questão de ordem: um terço dos presentes. Essas referências diferentes não podem ser reduzidas a um único quórum genérico.

Validação do marco de 1.203: 978 testes em 125 arquivos aprovados; lint, auditoria estrutural e compilação com orçamentos aprovados. Retiradas cotas artificiais 50/50 de M10A/M10B e 60/60 do Mega em verificações legadas, mantendo contagem, validade de julgamento, IDs e proveniência. O bloqueio conservador de alegações de origem foi preservado; uma frase sobre habilitação profissional foi tornada mais clara. Resultados técnicos não certificam as 976 questões pendentes.

M11: 100 revisões individuais, mais a cópia `oficial-180q-057`; total **1.304**, com **875 pendentes**. Item 20 e cópia corrigidos para E pelas ressalvas de contagem do prazo de posse; item 56 para E pelo julgamento das ADIs 7156/7236 em 2026; item 84 para C porque o art. 95, I, é hipótese autônoma de substituição do instrumento contratual. Atualizada a acumulação de cargo de professor conforme EC 138/2025, sem dispensar compatibilidade de horários. Redações de delegação, convalidação, parecer, responsabilidade, governança e licitação foram delimitadas para não criarem regras absolutas. O texto teórico de 11.7 já continha a atualização prescricional e foi conferido; a questão era a parte ainda divergente. Testes direcionados após reparo da cópia: 84 aprovados.

M12: 100 revisões individuais aplicadas, incluindo texto-base nos itens que o omitiam e separando passagens, parágrafos e comando. As duas questões de CDU fora de escopo foram substituídas por itens autorais de Inglês. Corrigidos julgamentos contraditórios sobre allay, outperform, personagens na narrativa, antecedente de which/that/this, possibilidade versus certeza, novidade de multas e prisão de pais versus estudantes. Cópias foram diversificadas com proposições específicas dos mesmos textos, sem inventar resultados de prova. Passagens históricas não são apresentadas como orientação médica ou legislação atual. A tela e o relatório preservam os parágrafos e identificam o idioma; o contexto passou a aparecer na resposta, além do relatório.

M13: 100 revisões individuais aplicadas; total **1.504/2.179**, com **675 pendentes**. Texto I ampliado para conter os segmentos citados; Texto II reconstruído e identificado como autoral, pois não constava do banco anterior. Corrigidos os julgamentos 13 (ele não é demonstrativo), 43 (necessitar admite regências), 51/52 (visar direto admitido pelo Manual) e 53 (recomendação não é inexistência de variante). Foram delimitadas regras de implicar, crase, pontuação, prefixação e relativos. O Manual de Redação da PR de 2018 foi consultado integralmente nos trechos pertinentes; não se confunde preferência de estilo com proibição universal.

O detector textual de proveniência foi corrigido para não interpretar concurso público e concurso doloso como atribuição a prova. Permanecem bloqueios a alegações típicas de gabarito oficial e origem em banca, com teste positivo e negativo nos dois auditores; a triagem lexical não substitui verificação documental.

Duas cópias adicionais do erro de classificação de ele foram lidas e corrigidas: oficial-180q-013 e geral-180q-7. O Texto II autoral reconstruído acompanha as cópias. Total atualizado: **1.506**, com **673 pendentes**. Os testes de conferência preservam isolamento e ausência de verificação oficial, permitindo apenas redações adaptadas com decisão individual registrada. Não congelam uma resposta conceitualmente errada como se fosse gabarito oficial confirmado.

Validação em 31/10/2026 do marco de 1.506: **979 testes em 125 arquivos aprovados**, lint sem avisos, auditoria estrutural e build com orçamentos aprovados. Os testes de navegador validaram estudo/prova, sigilo de gabarito no modo prova, prática de aplicação sem alterar a resposta, texto de apoio antes da resposta, feedback em branco, parágrafos e idioma em 1440 e 390 px; sem erros de execução nem overflow. Corrigida a sincronização dos cliques do script durante recomposição do layout. O README voltou a exibir distribuição apenas descritiva, sem faixa alvo de gabaritos. O registro de 673 pendências é conceitual e não é substituído por esses checks técnicos.


Marco de 1.806 itens: concluídos M14 e simulado geral; revisados os primeiros 20 itens do mini módulo de órgãos. No M14, as explicações delimitam versão, plano e configuração de serviços, limites de RAG, representação vetorial e funções de protocolos. Corrigido também o julgamento da cópia oficial 85 sobre transcrição automática. No simulado geral, os textos ingleses ausentes foram reconstruídos e identificados como autorais HNC; não são recuperação de prova oficial. O perfil RVBI do campo 650 foi distinguido das opções gerais do MARC. LAI não limita restrições à classificação formal, e OAIS não impõe PREMIS como esquema único. No mini módulo, corrigido o item 19: tribunais são tipo 7 na regra 24.18A do AACR2r, e não tipo 6. As demais 373 questões continuam pendentes.

Validação do marco de 1.806: 979 testes em 125 arquivos aprovados; lint, auditoria estrutural e compilação com orçamentos aprovados. Navegador local validou estudo, prova, prática guiada sem alteração da resposta, textos de apoio e ausência de overflow nas larguras 1440 e 390. A verificação foi refeita com Vite iniciado sobre o banco atual. Eliminadas as últimas cotas de gabarito do teste do mini módulo; preservados seus 30 itens, IDs, schemas e três blocos temáticos. Essas verificações não certificam semanticamente os 373 itens pendentes.


Marco de 2.106 itens: concluídos o simulado integral de 180 e o mega simulado de 120. As instâncias repetidas foram lidas e mapeadas explicitamente para as revisões dos módulos; conteúdos diferentes receberam análise própria. No mega, corrigidos julgamentos sobre autorização de obras protegidas, aplicação do índice h, doação, modelos da ciência da informação e leitura de inglês. Foram retirados fragmentos de OCR e substituídas perguntas fora de escopo ou afirmações institucionais sem comprovação por adaptações declaradas. Dez vínculos do mini módulo retornaram à teoria específica 2.5, que ensina órgãos públicos. Permanecem 73 questões: quatro do mini módulo e 69 complementares.

Validação do marco de 2.106: 979 testes em 125 arquivos aprovados; lint, auditoria estrutural e compilação com orçamentos aprovados. Navegador local validou os fluxos de estudo/prova, transferência guiada, textos antes da resposta e ausência de overflow em 1440 e 390 px. Os scripts de navegação usam o destino atômico de questão, evitando a corrida entre mudança de hash e definição de alvo. Retiradas cotas remanescentes de proporção C/E e quantidade mínima de originais certificados: uma adaptação não deve receber selo oficial para satisfazer um teste. Bloqueios históricos e requisitos de identificação continuam conferidos.


Fechamento do inventário: 2.179 registros individuais vigentes. Concluídos os 69 complementares e os quatro itens restantes do mini módulo. Os complementares, antes sem entrada no catálogo, passam a ter caderno próprio e a integrar treinos por eixo e adaptativos. Todas as 2.179 questões do banco passam a estar disponíveis no registro.

As 59 adaptações historicamente isoladas foram relidas com enunciado, texto de apoio, fundamento e fonte e receberam disposição individual em `disposicoes-historicas.json`. Foram liberadas como adaptações editoriais, mantendo `verificado: false`, descrição explícita e declaração legada. Nenhuma delas foi promovida a original oficial certificado. O predicado de elegibilidade continua bloqueando itens efetivamente marcados para revisão; não houve exceção genérica no filtro.

A folha de véspera teve seus 60 exercícios revisados individualmente em registro separado (`vespera.json`). Corrigidas generalizações de RAG, PREMIS, sigilo, percentuais de esforço, direitos autorais e atribuições bibliográficas. Foram incluídos contraste, trecho decisivo, referência e data. A antiga base de 28 exemplos adaptativos independentes foi substituída pela fonte única do banco revisado, eliminando a manutenção paralela.

Histórico e aprendizagem: respostas e sessões recebem versão de conteúdo; tentativas anteriores sem versão ou de outro conteúdo não são recorrentemente corrigidas contra o banco atual. O aluno pode arquivar a tentativa preservando respostas e tempo e iniciar outra; cópias de segurança incluem os arquivos preservados. Mesclagem não combina tentativas diferentes e preserva a primeira resposta em conflitos da mesma tentativa. A sincronização de um caderno não cancela a de outro. Textos de apoio acompanham itens nos simulados, adaptativo, desafios e caderno de erros. Retestes mantêm seleção após F5 e pontuam somente os itens selecionados; cronômetro e atalhos não continuam respondendo no relatório final.

Escopo: as 2.179 questões e 60 exercícios de véspera possuem registros desta revisão. Os 669 checkpoints da reforma teórica anterior permanecem inventariados separadamente; a contagem deste processo não os apresenta como novos itens individualmente homologados. Dificuldade e padrões editoriais não são apresentados como calibração psicométrica nem previsão de aprovação. Mantém-se o corte do edital cadastrado; a data futura de corte jurisprudencial não foi apresentada como já conferida.


Validação final em 31/10/2026: **990 testes em 126 arquivos aprovados**, lint sem avisos, verificação de tipos, registros individuais do banco e da véspera, auditoria estrutural e build com orçamentos aprovados. Três verificações de navegador em 1440 e 390 px cobriram estudo/prova, feedback e prática guiada, textos de apoio, arquivamento sem recorreção, reteste após F5, escopo da nota, cronômetro e atalhos no relatório. Nenhum erro de execução ou overflow nos cenários verificados. Os testes técnicos complementam os registros conceituais; não certificam a origem oficial nem garantem ausência absoluta de erros.
