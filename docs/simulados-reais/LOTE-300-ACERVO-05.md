# Quinto lote: 300 novas questões reais

> Registro histórico. O banco ativo tem 2.429 itens após [o oitavo lote](LOTE-300-ACERVO-08.md). Consulte [a auditoria integral dos originais](ESTUDO-REVERSO-INTEGRAL.json); as contagens e decisões abaixo descrevem a etapa registrada.

Revisão editorial de 5 de novembro de 2026. O banco passa de **1.342 para 1.642 itens**, preservando os IDs, enunciados, contextos e gabaritos anteriores. A assinatura dos 1.338 registros anteriores em JSON consta no relatório; os quatro itens oficiais mantidos em TypeScript não foram alterados.

## Seleção e distribuição

Foram incorporados 177 itens da **PAPIRVM — Biblioteconomia Esquematizada** e 123 de outros cadernos do acervo, em 17 PDFs. A apostila atribui sua coleção à CESPE/CEBRASPE; 101 dos 177 itens selecionados também foram encontrados com atribuição à banca em outros cadernos. A seleção contempla exclusivamente assertivas de certo ou errado, com gabarito identificável nos materiais consultados.

| Módulo | Novas questões |
| --- | ---: |
| M1 — Fundamentos | 13 |
| M2 — Catalogação e metadados | 49 |
| M3 — Classificação e tesauros | 41 |
| M4 — Recuperação da informação | 76 |
| M5 — Gestão de unidades e coleções | 65 |
| M6 — Bibliotecas digitais e IA | 25 |
| M8 — Normalização | 26 |
| M9 — Comunicação científica e bibliometria | 5 |
| **Total** | **300** |

São 167 gabaritos C e 133 E. Não foram acrescentados itens ao M7 apenas para preencher a distribuição.

A conferência utilizou normalização do enunciado, retirada de comandos de julgamento e comparação por similaridade com o banco anterior e dentro do lote. A revisão final não identificou duplicatas. Foram descartadas alternativas múltiplas, indicações de anulação e candidatos sem segurança editorial suficiente. O item 875 da apostila foi excluído desta seleção por divergência de gabarito entre materiais e substituído por outro item, sem alterar arbitrariamente seu gabarito.

## Estudo reverso individual

Cada uma das 300 questões tem comentário de aplicação, exemplo prático e comparação próprios, além de trecho decisivo selecionado literalmente no enunciado. A sequência após responder continua no mesmo painel dos simulados teóricos:

1. Conceito e regra explicados em linguagem acessível.
2. Aplicação ao enunciado e ao gabarito.
3. Exemplo concreto, individual desta questão.
4. Fundamentação com fonte identificada.
5. Formulação corrigida para E ou comparação falsa identificada como didática para C.
6. Técnica da banca, perguntas de recuperação e acesso à teoria relacionada.

O painel admite agora exemplo e referência específicos por questão, preservando os exemplos conceituais compartilhados dos itens anteriores. O conjunto completo tem 1.642 anotações, 143 explicações conceituais e 105 registros de referências. Foram acrescentados conceitos específicos de SLIC e APIs e fontes complementares sobre ISSN, LDB, ergonomia, LISA, GESAC, QuestionPoint, diário eletrônico do STJ, Google Acadêmico, competências infocomunicacionais, LexML e hiperlinks.

Questões históricas recebem contextualização quando serviços, normas ou regimes mudaram. A comparação didática não é apresentada como segunda questão oficial. A abordagem de cobrança explica a operação exigida pelo item; não constitui estatística de incidência da banca.

## Proveniência e limites da conferência

Os 300 textos e respectivos gabaritos foram novamente confrontados com os PDFs locais do acervo. O relatório registra arquivo, identificador, páginas físicas do enunciado e gabarito e SHA-256 do texto. O manifesto editorial completo permanece no diretório privado ignorado pelo Git; os relatórios públicos contêm os localizadores necessários à revisão.

**Confronto com caderno não equivale a confronto com prova e gabarito oficiais.** Os 300 itens permanecem no estado `caderno`, sem link inventado de gabarito definitivo. O total de itens confrontados oficialmente continua 46; 1.596 aguardam essa etapa. A interface preserva o aviso e distingue fonte secundária de prova oficial.

O importador exige exatamente 300 revisões completas, rejeita duplicatas, gabarito diferente da evidência, transcrição alterada, exemplo ausente e vínculos inválidos. É idempotente e não gera comentários nem certifica a correção conceitual. Testes e auditorias estruturais complementam a revisão editorial; não substituem o cotejo oficial.

## Verificação da apresentação

O painel foi exercitado em navegador local com larguras de 320, 390 e 1.440 pixels, incluindo tema escuro. Foram conferidos julgamento, destaque literal, exemplo, fonte e contraste, sem erros de JavaScript ou transbordamento horizontal. A inspeção local não equivale a verificação visual do domínio de produção.

## Validação técnica

`npm run verify` concluído: lint, integridade dos bancos, auditoria do estudo reverso, 1.024 testes em 132 arquivos, auditoria independente e build de produção aprovados. Os 12 testes Python de extração, fila e importação também passaram.

O build respeitou os limites existentes de pacote: maior chunk de 2,44 MiB e precache de 4,85 MiB. A checagem final de similaridade retornou zero duplicatas, com 300 comentários, 300 exemplos e 300 contrastes distintos. A comparação integral dos registros anteriores confirmou sua preservação.

## Registros

- [Relatório do lote e evidências](LOTE-300-ACERVO-05.json).
- [Planilha de revisão](LOTE-300-ACERVO-05.csv).
- [Auditoria atual do estudo reverso integral](ESTUDO-REVERSO-INTEGRAL.json).
- [Planilha atual do estudo reverso integral](ESTUDO-REVERSO-INTEGRAL.csv).

Os arquivos `ESTUDO-REVERSO-1342.*` continuam como fotografia da publicação anterior.
