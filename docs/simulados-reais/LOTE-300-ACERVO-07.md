# Sétimo lote — 300 questões reais com estudo reverso individual

Revisão editorial de **6 de novembro de 2026**. O lote acrescenta **300 questões**, elevando o banco ativo de **1.829 para 2.129 itens**. Permanecem excluídas as 105 pendências documentais e as oito anuladas da seleção anterior.

## Materiais e conferência

As ocorrências foram localizadas nos materiais do Drive: **295 em cadernos temáticos do Tec Concursos, quatro em uma apostila de biblioteconomia e uma em lista de questões**. A identificação do arquivo, o número na fonte e a página de localização acompanham as evidências. Não se apresentam comandos adaptados pelos cadernos como se fossem novas assertivas oficiais.

São **294 itens confrontados na origem e seis com documentos oficiais consultados em cópias identificadas**. As cópias correspondem aos gabaritos de itens do IPHAN; a indicação é mantida na interface e nos links. Os dez pares de prova e gabarito utilizados incluem fontes já consultadas e seis pares adicionais. Foram selecionados somente itens de certo ou errado, com julgamento definitivo e leitura segura.

| Prova | Questões | Documentação |
| --- | ---: | --- |
| CAPES 2024 | 34 | Arquivos da banca |
| Cachoeiro de Itapemirim 2024 | 7 | Arquivos da banca |
| FUB 2022 | 44 | Arquivos da banca |
| IPHAN 2018 | 6 | Cópias identificadas no par documental |
| MPCE 2025 | 16 | Arquivos da banca |
| PC/DF 2025 | 2 | Arquivos da banca |
| SEE/PE 2022 | 41 | Arquivos da banca |
| STJ 2024 | 51 | Arquivos da banca |
| TJ/AM 2019 | 56 | Arquivos da banca |
| TSE/CPNUJE 2024 | 43 | Arquivos da banca |
| **Total** | **300** | **294 na origem; seis em cópias** |

A triagem distingue a assertiva do texto introdutório: cadernos diferentes podem reproduzir o mesmo item com comandos no singular ou com contextos organizados de outra forma. A conferência considera o número oficial, a identidade da prova e a redação, evitando contar essas variações como questões novas. Anulações, quase duplicatas, trechos truncados e casos sem fundamentação conceitual suficiente não foram usados neste lote; materiais reservados não são promovidos por estimativa de gabarito.

## Conteúdo e didática

Cada questão recebeu **comentário, exemplo e comparação didática individuais**, trecho decisivo literal e vínculo à teoria. O lote contém **166 respostas C e 134 E**. Os exemplos e as comparações são autorais e não constituem itens adicionais da banca.

| Módulo | Novas questões |
| --- | ---: |
| M1 — Fundamentos | 19 |
| M2 — Catalogação e metadados | 39 |
| M3 — Classificação e linguagens | 29 |
| M4 — Recuperação, fontes e usuários | 101 |
| M5 — Gestão e coleções | 17 |
| M6 — Bibliotecas digitais e IA | 49 |
| M8 — Normalização | 36 |
| M9 — Comunicação científica e métricas | 8 |
| M10 — Processo legislativo | 1 |
| M14 — Tecnologia e dados | 1 |
| **Total** | **300** |

Foram acrescentados seis perfis: **mediação, normalização, lombada, guias de unidades informacionais, VIAF e processo legislativo**. Dez referências complementam a fundamentação, incluindo Almeida Júnior, ABNT, OCLC, Constituição Federal, IFLA e fontes institucionais do TSE. As questões de IA e de serviços eleitorais utilizam referências específicas, identificadas separadamente da explicação conceitual geral.

Os comentários explicam, entre outras distinções, que MARC codifica dados e não define o layout do catálogo; OPAC não substitui todo o SIGB; perfis orientam a DSI; URL e identificador persistente não são equivalentes; e digitalizar não assegura preservação permanente. Nas normas, diferenciam-se as edições de 2003 e 2021 da NBR 6028 e a regra histórica de lombada cobrada em 2022. Regras antigas não são apresentadas como exigências universais atuais.

A questão 79 da **PC/DF 2025**, sobre interoperabilidade entre catálogos, estava marcada E no caderno consultado. O lote aplica **C**, conforme o gabarito definitivo, e explica a integração de dados e suas condições. A divergência é entre o caderno e o documento definitivo; não se afirma, sem evidência, que tenha ocorrido alteração oficial em recurso.

Duas quebras tipográficas identificadas foram normalizadas: `per- manente` e a quebra dentro de `URN_DE_IDENTIFICACAO_DA_NORMA`. O texto introdutório necessário permanece no campo de contexto, incluindo os textos de apoio extensos. O hash da ocorrência no acervo é registrado separadamente do hash da assertiva incorporada.

## Integridade e continuidade

Os arquivos anteriores de questões permanecem intactos. O lote tem arquivos próprios de dados e conferência; anotações, perfis e referências anteriores são preservados. O carregamento e a auditoria reconhecem os arquivos de lotes, conferem cobertura e recusam conflitos ou repetição de identidades entre conferências. As métricas somam os lotes a partir da base histórica correta, sem contar novamente os lotes que já estão incorporados ao arquivo anterior.

O importador admite o número sequencial do lote e um registro adicional de fontes previamente conferidas. Ele verifica estrutura, assinaturas e compatibilidade com fontes anteriores; não produz comentários nem autentica automaticamente a veracidade dos documentos ou das explicações.

```bash
python3 scripts/importarLoteRealConferido.py --numero-lote 7 \
  --fontes-conferidas caminho/fontes-conferidas.json \
  --manifesto caminho/manifesto.json
# Acrescentar --write somente após a revisão completa das 300 entradas.
node scripts/auditarEstudoReversoReais.mjs
```

Reimportar um lote validado não deve apagar anotações de outros arquivos. Fontes adicionais não podem substituir pares documentais anteriores. Hashes do texto extraído consultado não equivalem a hashes dos bytes dos PDFs. A validação estrutural complementa a revisão documental e editorial, sem certificar automaticamente verdade conceitual.

- [Relatório e evidências do lote](LOTE-300-ACERVO-07.json).
- [Planilha de conferência](LOTE-300-ACERVO-07.csv).
- [Auditoria integral](ESTUDO-REVERSO-INTEGRAL.json).
- [Planilha do estudo reverso](ESTUDO-REVERSO-INTEGRAL.csv).

## Validação

`npm run verify` concluiu lint, auditorias, 1.050 testes em 135 arquivos e build com os orçamentos preservados. Os 28 testes Python do importador também passaram. A inspeção local cobriu sete cenários em 320, 390 e 1.440 pixels, incluindo tema escuro, enunciado longo, correção de gabarito e fonte em cópia: nenhum erro de JavaScript ou corte horizontal foi detectado.

O maior chunk tem 2,06 MiB e o precache 4,86 MiB, dentro dos limites existentes. O domínio de produção permanece bloqueado pela política de rede deste ambiente; inspeção visual local e estado de implantação são evidências distintas.

O teste local do pacote compilado carregou os 2.129 itens ativos, identificou as 300 novas questões e abriu o módulo de treinos sem erros de JavaScript ou overflow.
