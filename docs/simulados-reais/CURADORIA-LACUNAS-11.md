# Primeira curadoria por lacunas — preservação física

**6 de novembro de 2026.** A seleção passa a priorizar contribuição pedagógica e cobertura de assuntos relevantes, sem obrigação de completar lotes de 300. Esta etapa acrescenta **12 questões reais**, elevando o banco ativo de **3.029 para 3.041**. Três questões existentes recebem correção de vínculo temático e não são contadas novamente.

## Critério de seleção

Cada inclusão precisa trazer uma distinção, aplicação, condição ou mecanismo que ainda mereça treino. Trocar algumas palavras ou o cargo da prova não basta. O objetivo, o ganho esperado e a comparação editorial com o banco estão registrados para cada item no [relatório da curadoria](CURADORIA-LACUNAS-11.json). A [planilha](CURADORIA-LACUNAS-11.csv) relaciona prova, gabarito e localizadores.

A importação admite a quantidade declarada da curadoria, exige objetivos distintos e rejeita repetição de um objetivo já priorizado em curadoria anterior. Permanecem os controles de duplicatas textuais, identidade da questão oficial, anulações, gabaritos e integridade. Os lotes históricos de 300 continuam exigindo 300. A comparação semântica é editorial; nomes diferentes de objetivos não comprovam, sozinhos, diversidade de raciocínio.

## Lacuna atendida

A projeção ativa não tinha questões reais vinculadas aos quatro submódulos físicos do M7. Questões de preservação digital não substituem essa prática.

| Assunto | Antes | Depois | Objetivos trabalhados |
| --- | ---: | ---: | --- |
| 7.1 — Agentes ambientais e físico-químicos | 0 | 3 | Diagnóstico e monitoramento; categorias de agentes; deterioração pela luz |
| 7.2 — Agentes biológicos e CIP | 0 | 3 | Vestígios; vigilância pela equipe; função de feromônios |
| 7.3 — Conservação preventiva | 0 | 4 | Política de preservação; limpeza a seco; materiais estranhos; invólucro e mobiliário |
| 7.4 — Intervenções e contingência | 0 | 2 | Materiais de pequeno reparo; compatibilidade da proteção contra incêndio |
| **Total** | **0** | **12** | **12 objetivos distintos nesta seleção** |

Não foram acrescentadas várias definições equivalentes de preservação, nem versões apenas reescritas da mesma regra de higienização. Algumas candidatas foram deixadas de fora por redundância de objetivo, redação ambígua ou insegurança na correspondência documental. Não se transformou questão de outra banca ou de múltipla escolha em questão real Cebraspe.

## Procedência e estudo reverso

São **nove itens dos Correios de 2011, um do STF de 2013 e dois do IPHAN de 2018**, todos C/E, com prova e gabarito definitivo consultados na origem. Os cargos originais — Museólogo, Técnico Judiciário e Auxiliar Institucional — aparecem na identificação. A inclusão se justifica pela correspondência do conteúdo com o M7; não são apresentados como provas de cargos de Biblioteconomia. A busca no acervo temático não forneceu novos itens físicos adequados a esta etapa; os complementos diretos não receberam atribuição fictícia ao Drive.

Os originais têm **sete C e cinco E**. Cada item recebeu comentário, exemplo e contraste próprios, com trecho decisivo e acesso à aula correspondente. A nota HNC sobre área de reserva técnica explica a sigla ART antes dos comandos que a utilizam; não altera o enunciado julgado.

A fundamentação utiliza orientações da **Biblioteca Nacional**, da **Library of Congress** e do **Canadian Conservation Institute**. Os comentários evitam generalizações: um vestígio não comprova sozinho infestação ativa; pequenos reparos exigem avaliação; remover adesivos não significa arrancá-los à força; rejeitar um sistema aquoso obrigatório para todo acervo não significa proibir sprinklers em qualquer biblioteca.

## Melhor uso do banco existente

As três [reclassificações](RECLASSIFICACAO-LACUNAS-01.json) preservam IDs, enunciados, julgamentos, comentários e respostas:

- A questão sobre FAIR e acesso condicionado passa de preservação digital (6.3) para acesso aberto e FAIR (9.2).
- A questão sobre curadoria de dados e metadados estruturados passa de 6.3 para gestão de dados de pesquisa (9.3).
- A definição de crédito editorial passa de citações (8.2) para editoração e apresentação de publicações (8.5).

Com isso, citações tem **três** questões vinculadas, não quatro. Acesso aberto e FAIR passa de duas para **três**; a mudança não representa uma questão nova. As contagens usam as sobreposições editoriais e os quatro itens em TypeScript, além dos arquivos JSON; por isso refinam a triagem inicial feita sobre o JSON bruto.

## Próximas prioridades e regra de parada

O [mapa de prioridades e cobertura](PRIORIDADES-CURADORIA-01.json) registra os 75 submódulos, incluindo os sem questões reais, e orienta a próxima busca:

1. **Modelos conceituais:** tarefas, entidades e consolidação FRAD/FRSAD/LRM, em vez de mais definições equivalentes de RDA.
2. **Citações:** mecanismos diferentes dos já explorados em aspas e destaque de citação longa.
3. **Acesso aberto e FAIR:** vias, direitos, financiamento e condições de acesso.
4. **Preservação digital:** responsabilidades e metadados de preservação, especialmente a distinção OAIS/PREMIS/METS; evitar novas versões de “backup não basta”.

A busca nominal não encontrou LRM, FRSAD ou PREMIS nos enunciados do banco. Isso orienta investigação; não prova ausência de todos os conceitos relacionados, nem autoriza fabricar uma questão real para preencher o espaço. Exercícios autorais devem continuar identificados separadamente.

A seleção se encerra quando os candidatos restantes apenas repetem objetivos ou não têm leitura e fundamentação suficientes, independentemente do tamanho do lote. As prioridades expressam julgamento editorial apoiado no curso e na cobertura, não uma previsão estatística da próxima prova. Nenhuma aula precisa ter a mesma quantidade de questões que outra.

## Validação

A suíte geral passou em **1.080 testes Vitest, em 139 arquivos**, e os **34 testes Python** passaram. O teste da curadoria foi executado novamente após fechar o quadro de cobertura. Foram preservados os valores das 3.142 anotações, 201 perfis e 181 referências anteriores; acrescentaram-se 12 anotações, quatro perfis e quatro referências. As 13 adaptações existentes permanecem iguais.

Foram conferidos sete cenários locais, em 320, 390 e 1.440 pixels, incluindo tema escuro, estudo reverso e entrada do M7 no seletor com 12 questões. Não houve overflow horizontal nem erro de JavaScript nesses cenários. O pacote compilado carregou **3.041 questões, das quais 12 desta curadoria**, preservando um item anterior de controle. Lint, auditorias, compilação e orçamentos passaram: maior chunk de 2,06 MiB, precache de 4,88 MiB e JavaScript total de 19,94 MiB.

O domínio de produção permanece bloqueado pela política de rede do ambiente. Inspeção local, leitura do GitHub remoto e estado de implantação são evidências distintas de uma visita autenticada ao site publicado.
