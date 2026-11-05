# Conferência documental das questões reais — 5 de novembro de 2026

> Registro da conferência anterior. Após nova orientação, os 105 itens pendentes foram retirados dos treinos. O banco ativo tem **1.529 questões**, conforme a [seleção atual](SELECAO-SEGURA-2026-11-05.md). As contagens de 1.634 itens e as pendências abaixo descrevem o estado anterior à seleção.

Foram examinados os **1.596 itens que aguardavam confronto oficial** na publicação anterior. A conferência conseguiu resolver 1.491 deles; **105 continuam pendentes por falta de documentos definitivos acessíveis**. Esta etapa permanece aberta para essas três provas.

O banco ativo passa de **1.642 para 1.634 questões**, após a retirada de oito anuladas. Nenhuma questão nova foi acrescentada nesta etapa.

| Situação do banco ativo | Questões |
| --- | ---: |
| Prova e gabarito definitivo consultados nos arquivos da banca | 1.329 |
| Documentos oficiais confrontados em cópias identificadas | 200 |
| Atribuição e gabarito no acervo, com confronto definitivo pendente | 105 |
| **Total disponível para treino** | **1.634** |

As 1.329 conferidas na origem incluem as 46 que já estavam nesse estado. A interface distingue os três níveis de conferência e identifica os links de cópias, de gabaritos definitivos e de decisões de recurso. Um edital ou uma resposta de apostila não substitui o confronto com o gabarito definitivo.

## Correções aplicadas

**Oito itens anulados foram retirados dos treinos:** TJDFT 2015, itens 75, 90 e 94; CPRM 2013, item 80; ANTT 2013, item 60; IPHAN 2018, item 103; FUB 2015, item 64; SERPRO 2013, item 97.

**Dois gabaritos passaram de C para E**, acompanhados de novos comentários, exemplos e formulações corrigidas:

- **CADE 2014, item 70:** a [decisão definitiva do recurso](https://cdn.cebraspe.org.br/concursos/CADE_13/arquivos/CADE_13_JUSTIFICATIVAS_DE_ALTERA____O_DE_GABARITO.PDF) exige seleção das informações expressivas do documento. A cobertura de suas partes não significa incluir indiscriminadamente todo conteúdo.
- **SERPRO 2013, item 115:** a [decisão definitiva do recurso](https://cdn.cebraspe.org.br/concursos/SERPRO_13/arquivos/SERPRO_2013_JUSTIFICATIVAS_DE_ALTERA____O_DE_GABARITO.PDF) atribui o desafio de disponibilizar ebooks aos bibliotecários e editores, enquanto a assertiva o atribuía aos usuários.

**Doze enunciados foram restaurados** após comparação com a prova. Entre as mudanças relevantes estão a retirada de uma negação acrescentada pela apostila no item 84 da ANEEL 2010 e a restituição de “autores”, em lugar de “assuntos”, na questão sobre bibliografias do IPHAN 2018. Também foi desfeita a junção dos itens 72 e 73 da SUFRAMA 2014: o registro passou a conter apenas o item 73, pois o 72 já estava no banco separadamente.

A prova e o gabarito definitivo da **UNEAL 2026, cargo 3**, foram localizados na rodada final de pesquisa. Seus 36 itens selecionados tiveram texto e resposta confirmados, sem nova correção ou anulação. Não foi utilizado o gabarito de outro cargo.

O registro histórico de origem foi preservado. A projeção usada pelo aplicativo aplica exclusões e correções antes de montar o estudo reverso. Respostas salvas de anuladas são descartadas; alterações no enunciado ou no gabarito invalidam apenas a resposta incompatível. Mudanças exclusivamente documentais preservam o julgamento salvo.

## Pendências documentais

| Prova | Itens ativos pendentes | Documento necessário |
| --- | ---: | --- |
| SERPRO 2013 — Analista, Biblioteconomia | 47 | Tabela de gabaritos **definitivos** do caderno SERPRO13_004_09. A prova foi localizada; os espelhos da tabela consultados são preliminares. As decisões de recurso permitiram resolver somente dois dos itens selecionados. |
| FUB 2011 — Bibliotecário-documentalista | 30 | Gabarito **definitivo** do cargo 2. A prova foi localizada em espelho; os dois gabaritos disponíveis consultados são preliminares. |
| SEGER/ES 2011 — Área de formação 5, Biblioteconomia | 28 | Caderno e gabarito **definitivo** da área 5, SEGERES10_005_05. Uma transcrição da prova foi localizada, mas a tabela associada não pôde ser autenticada como definitiva. O PDF oficial da área 23 foi rejeitado por pertencer a outro cargo. |
| **Total** | **105** | |

Há quatro atribuições a “SERPRO/2017” nesses 47 itens que precisam ser confrontadas com o material de 2013; elas não foram silenciosamente homologadas por semelhança temática. Os motivos de pendência são registrados individualmente na planilha.

## Método e rastreabilidade

Foram consultados o acervo local, os metadados do Drive conectado, páginas oficiais e espelhos públicos. A localização automatizada de enunciados serviu para encontrar candidatos; os pares de prova e gabarito foram confrontados pelo código do caderno, cargo, conteúdo e indicação de caráter definitivo. Gabaritos preliminares, provas de outro cargo e mera reprodução em apostilas não receberam confirmação oficial.

O relatório identifica 38 pares de documentos, número oficial, página física da prova, linha do texto extraído e assinaturas SHA-256 dos enunciados antes e depois da conferência. As assinaturas de fontes correspondem ao **texto extraído consultado**, e não aos bytes dos PDFs. Os relatórios históricos dos lotes continuam preservados.

A conferência documental não equivale a uma nova revisão científica integral das explicações. Os comentários afetados pelas correções foram ajustados; a fundamentação didática restante conserva seu processo editorial anterior.

Para reproduzir a integração de um manifesto editorial revisado:

```bash
python3 scripts/integrarConferenciaOficial.py --manifesto caminho/manifesto.json --registro caminho/registro.json
node scripts/auditarEstudoReversoReais.mjs
```

O integrador rejeita enunciados alterados após a conferência, mudança de fonte, promoção de pendência, cópia identificada como arquivo da banca e mudança de gabarito sem comentário compatível. A auditoria geral também verifica a correspondência entre o registro ativo, as evidências e as contagens.

## Evidências

- [Relatório completo com 1.596 registros e fontes](CONFERENCIA-OFICIAL-2026-11-05.json).
- [Planilha da conferência e pendências](CONFERENCIA-OFICIAL-2026-11-05.csv).
- [Auditoria atual do estudo reverso](ESTUDO-REVERSO-INTEGRAL.json).
- [Planilha atual dos blocos didáticos](ESTUDO-REVERSO-INTEGRAL.csv).

## Validação técnica

`npm run verify` passou: lint, integridade dos bancos, auditoria documental e do estudo reverso, **1.032 testes em 133 arquivos**, auditoria independente e build de produção. Os **18 testes Python** de extração, fila e integração também passaram.

O estudo reverso ativo conserva 1.634 anotações, 143 perfis conceituais e 107 referências. O histórico mantém as 1.642 anotações, inclusive as das anuladas, para rastreabilidade. O registro documental foi isolado em um chunk próprio, preservando os limites existentes de tamanho e de precache.

A inspeção em navegador local cobriu 320, 390 e 1.440 pixels, tema claro e escuro, os três estados de conferência, os dois gabaritos alterados e um enunciado restaurado. Não houve erro de JavaScript ou transbordamento horizontal. Foram conferidos destaque, comentário, exemplo, fundamentação e comparação didática. Inspeção local e status de implantação não equivalem à inspeção visual do domínio de produção.
