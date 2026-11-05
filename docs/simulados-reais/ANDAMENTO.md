# Questões reais Cebraspe — andamento

## Estado atual — 5 de novembro de 2026

A versão com **442 itens** foi publicada no GitHub (`74ce4595ec4c10503b67e5f9e68aa88474d586c0`) e recebeu status de sucesso da Vercel. Em seguida, foram preparados **mais 300 itens**, elevando a seleção local a **742 questões**: 46 confrontadas com fontes oficiais e 696 com gabarito e atribuição informados por cadernos. Este segundo lote ainda não foi publicado.

### Segundo lote de 300 — após a publicação

O lote `esquematizada-300-02-2026-11-05` contém 300 questões adicionais da apostila esquematizada, com comentários editoriais específicos, formulação corrigida dos itens E e ligação à teoria. Os 442 itens publicados foram preservados integralmente. A seleção excluiu duplicatas textuais exatas e próximas, textos cortados e candidatos de conferência insegura; dois itens associados a divergências já sinalizadas na fila foram substituídos antes do fechamento.

Distribuição das novas questões: M1: 1; M2: 135; M3: 18; M4: 103; M5: 2; M6: 15; M8: 11; M9: 15. São 155 respostas C e 145 respostas E. Os gabaritos provêm da apostila, sem presumir confronto oficial. Os comentários situam regras históricas do AACR2, FRBR e de normalização quando necessário, evitando apresentá-las como equivalentes indistintas dos padrões atuais.

Os arquivos `LOTE-300-ESQUEMATIZADA-02.csv` e `LOTE-300-ESQUEMATIZADA-02.json` permitem revisar enunciados, comentários, correções, fontes e os identificadores do novo lote. O importador aceita `--lote` e preserva os demais lotes ao reexecutar a importação. Os comentários de trabalho e as reservas permanecem no diretório privado ignorado pelo Git.

A validação deste segundo lote passou: 1.008 testes em 130 arquivos, sete testes Python, auditoria estrutural e build com todos os orçamentos respeitados. Foi confirmada a igualdade integral dos 442 itens anteriores com a versão publicada. Em Chromium, a afirmação 493 foi respondida em viewport 390 × 844; o comentário e a formulação corrigida apareceram imediatamente, sem erros de página nem rolagem horizontal. A imagem local está em `/workspace/scratch/prints-reais/lote-300-02-mobile.png`. A tela temporária de conferência foi removida, sem alteração da autenticação da plataforma.

### Primeiro lote de 300 — incluído na versão publicada

O pedido desta etapa foi concluído: **300 questões novas** da apostila `PAPIRVM BIBLIOTECONOMIA ESQUEMATIZADA.pdf`, além das 142 já existentes. Cada nova questão recebeu comentário editorial específico, classificação por módulo e submódulo e, quando o gabarito é E, uma formulação corrigida. Gabaritos e atribuições deste lote foram conferidos na apostila; o confronto individual com os documentos oficiais permanece pendente e não é presumido pela interface.

A planilha `LOTE-300-ESQUEMATIZADA.csv` permite revisar os 300 enunciados, comentários, correções, atribuições e links de fonte. O manifesto `LOTE-300-ESQUEMATIZADA.json` identifica os itens e a contagem antes e depois. A distribuição das novas questões é: M1: 47; M2: 7; M3: 11; M4: 136; M5: 68; M6: 10; M9: 20; M10: 1. São 164 respostas C e 136 respostas E.

Foram verificadas duplicatas textuais exatas e próximas contra a seleção existente e dentro do lote, além dos conflitos já sinalizados na fila. Três seleções ambíguas foram substituídas antes da versão final. O lote não inclui itens detectados como anulados ou de múltipla escolha.

A validação do primeiro lote passou: 1.007 testes em 130 arquivos, sete testes Python e build dentro dos orçamentos. Na preparação da publicação, foi corrigida a divergência entre README e métricas geradas; os demais 1.006 testes e os três testes do README passaram, além da auditoria e do build. A conferência em Chromium, com viewport 390 × 844, respondeu a uma questão nova e confirmou o comentário imediato, sem erros de página ou rolagem horizontal. A imagem local está em `/workspace/scratch/prints-reais/lote-300-mobile.png`; a tela temporária de conferência foi removida.

A triagem contém 4.148 candidatos em 3.255 grupos de revisão. Ainda faltam conferência, classificação e comentários para a maior parte deles, além de OCR e exame das fontes não lidas integralmente. Os totais das seções seguintes registram etapas históricas; não devem ser somados nem tratados como o estado atual.

## Escopo e decisão do aluno

Separar questões C/E por módulos, com estudo reverso imediato. Excluir questões de múltipla escolha e anuladas e consolidar duplicatas. A presença de uma atribuição em apostila ou caderno não comprova, por si só, a correspondência com a prova oficial; o sistema informa o nível de conferência.

## Inventário e triagem

Foram listados 721 arquivos em 73 subpastas das três pastas indicadas no Drive; o inventário de metadados está em `inventario-drive.json`. Há 431 entradas de PDFs, algumas duplicadas. Foram gerados 396 arquivos de texto de PDFs em `/workspace/scratch/questoes-drive`; 30 têm menos de 300 bytes e exigem exame visual/OCR. Outros seis PDFs da listagem excedem o limite de 32 MiB do mecanismo de materialização usado e não foram examinados por essa via; houve também falhas de extração. Uma listagem ou extração não equivale à leitura de todas as páginas.

A triagem automatizada, executada com `scripts/extrairCandidatosCebraspe.py`, encontrou 3.230 ocorrências e agrupou 2.488 candidatos distintos em `acervo-privado/simulados-reais/candidatos-cebraspe.json` (cópia de trabalho ignorada pelo Git; o resultado original também está em `/workspace/scratch`). Ela identifica alguns formatos de cadernos Tec e apostilas, inclusive gabarito ao lado da questão. Os totais são apenas triagem: podem conter transcrição incorreta, duplicatas não reconhecidas, atribuições equivocadas ou formatos não capturados. Não representam o total de itens reais. Candidatos sem gabarito C/E inequívoco, múltipla escolha e anuladas detectadas não entram nessa lista automática. O filtro não é infalível e exige revisão manual, inclusive de alternativas, itens anulados, contexto compartilhado e gabaritos oficiais.

Ao cruzar os candidatos com comentários existentes por correspondência textual literal, 59 coincidiram com itens da plataforma, mas duas entradas referentes a `tec-624254` tinham gabaritos divergentes e foram excluídas. Duas transcrições adicionais divergiam literalmente e também foram excluídas. Dessa amostra, 57 foram incluídos com atribuição e gabarito declarados pelo caderno, identificados como não confrontados com a prova oficial. Quatro itens de STJ/2024 foram confrontados com prova e gabarito definitivo. Outros 13 itens da PCDF/2025, localizados nos cadernos do acervo, receberam explicações autorais e tiveram seus enunciados e gabaritos confrontados com a prova e o gabarito definitivo. Três itens da amostra cruzada também tiveram enunciado e gabarito conferidos no material oficial. Mais 10 itens da PCDF/2025 foram acrescentados com explicações autorais e conferência oficial. Quatro questões adicionais da apostila esquematizada coincidem literalmente com itens comentados na plataforma. Nesta continuação, mais cinco itens da PCDF receberam comentários autorais e conferência oficial. Total inicial: 93 questões, das quais 35 têm confronto com fontes oficiais e 58 mantêm atribuição ao caderno. Os comentários dos 57 vêm do conteúdo preexistente e não equivalem a uma revisão independente completa de cada questão.

## Implementação e trabalho restante

A entrada fica em Treinos → Questões reais Cebraspe por módulo. A janela usa o mesmo `PainelEstudoReverso` dos simulados, exibe o resultado imediatamente e vincula o item à teoria. Exibe diferenças entre gabarito da banca e do caderno. A sessão é salva no navegador, separada por usuário, e não interfere nos portões de domínio.

Ainda falta: completar e revisar a leitura de PDFs, OCR, listas esquematizadas e outros formatos; examinar os conflitos de gabarito; agrupar duplicatas sem perder fontes; verificar a redação e a autenticidade das questões e a vigência das regras; classificar os demais itens por módulo e submódulo; redigir ou revisar fundamentação própria para cada um; e ampliar relatórios. A meta de 300 novas questões foi atingida, mas o pedido abrangente de todas as questões do acervo continua em andamento.

## Continuação — gabaritos em blocos nas apostilas esquematizadas

A apostila `PAPIRVM BIBLIOTECONOMIA ESQUEMATIZADA.pdf` apresenta gabaritos imediatamente após blocos de afirmações. O extrator agora associa a sequência de respostas aos itens do bloco apenas quando a quantidade coincide e a numeração é consecutiva. A associação é uma hipótese de triagem: texto, banca, numeração e gabarito devem ser confrontados antes da publicação. Blocos incompletos ou não reconhecidos continuam pendentes.

Nesta execução a triagem identificou 4.638 ocorrências, agrupadas em 3.692 candidatos distintos, incluindo 1.407 associados a essa apostila; dois grupos foram sinalizados com conflitos. Esses números não são uma contagem final de questões válidas. O agrupamento automático não garante identificar toda duplicata, e questões anuladas ou de múltipla escolha eventualmente não detectadas continuam sujeitas a exclusão na revisão. Os dados de trabalho atualizados estão em `acervo-privado/simulados-reais/candidatos-cebraspe.json`.

## Continuação — cruzamento das apostilas em blocos

O novo cruzamento identificou 23 itens adicionais com correspondência literal, gabarito coincidente e comentário existente. Eles foram incluídos com indicação de que a atribuição e o gabarito provêm do acervo e ainda dependem de confronto oficial. A seleção local passa a 116 itens: 35 confrontados com a banca e 81 atribuídos aos cadernos. Duas entradas associadas a `tec-624254` continuam excluídas por divergência. O teste específico da interface e da integridade dos itens passou. O restante da triagem e da elaboração dos comentários segue pendente.

## Continuação — PCDF/2025

Foram acrescentados sete itens da PCDF/2025, com explicações autorais e gabaritos confrontados com o documento definitivo. A seleção local passa a 123 itens: 42 confrontados com a banca e 81 atribuídos aos cadernos. A extração e revisão dos demais candidatos seguem pendentes; o teste específico da função passou.

## Continuação — conferência PCDF

Mais quatro itens da PCDF/2025 receberam comentários e confronto com o gabarito definitivo. A seleção local contém 127 itens: 46 confrontados com a banca e 81 atribuídos aos cadernos. Os candidatos restantes ainda exigem revisão individual e fundamentação; o teste específico passou.

## Conferência de divergência — STJ/2018

A questão `tec-624254` corresponde ao item 115 do cargo 2 de Biblioteconomia do STJ/2018. O [gabarito definitivo](https://cdn.cebraspe.org.br/concursos/stj_18/arquivos/GAB_DEFINITIVO_385_STJ002.PDF) confirma **C**, de acordo com o caderno e divergindo de duas adaptações legadas da plataforma que trazem E. Ela permanece fora da seleção até que a afirmação histórica sobre o início da microfilmagem para preservação seja examinada em fonte técnica e receba comentário que distinga o gabarito da banca da cronologia documentada. Nenhuma adaptação foi alterada automaticamente.

## Continuação — fila de revisão e duplicatas entre formatos

O organizador `scripts/organizarFilaQuestoesReais.py` agrupa enunciados com instruções introdutórias diferentes, preservando texto original, contexto, prova declarada, respostas e arquivos. A associação permanece uma hipótese editorial. Questões que mencionam texto, imagem ou outro contexto são mantidas separadas quando os contextos diferem.

A fila privada em `acervo-privado/simulados-reais/fila-revisao.json` reúne 2.839 grupos a partir dos 3.692 candidatos: 853 agrupamentos adicionais para revisão, nove grupos com divergências de fonte ou gabarito e 156 grupos com possível dependência de contexto. Nenhum identificador desses conflitos foi encontrado na seleção ativa. Foram adicionados dois testes do organizador; os seis testes dos scripts de extração e organização passaram. A seleção ativa permanece com 127 itens; a fila não equivale a questões homologadas.

## Continuação — espaços nos gabaritos e retomada de sessão

O extrator passou a reconhecer respostas separadas por espaços, sequências terminadas em ponto e marcações X nos blocos. A posição de cada resposta é preservada antes de excluir os itens anulados; um teste específico confirma esse comportamento. A nova passagem reúne 5.137 ocorrências e 4.148 candidatos distintos. A fila contém 3.255 grupos para revisão, 893 agrupamentos adicionais, nove divergências e 170 itens com possível dependência de contexto. Na apostila esquematizada, 1.906 candidatos estão associados à fonte. Esses valores continuam sendo triagem, não uma contagem de questões homologadas.

Foram acrescentadas 15 correspondências literais com comentários existentes, gabaritos coincidentes e identificação de fonte secundária. O item sobre modelos epidemiológicos na comunicação científica foi vinculado à aula 9.1. A seleção local chega a 142 questões: 46 confrontadas com fontes oficiais e 96 com atribuição ao caderno. O item sobre GESAC encontrado no mesmo cruzamento permanece pendente de conferência temporal.

A sessão agora salva localmente o módulo, o ponto de leitura e as respostas, separados por usuário. Se o enunciado, o contexto ou o gabarito mudar, uma resposta antiga não é reutilizada. Dados de armazenamento inválidos são descartados e falhas ao salvar são indicadas. Foram testadas a reabertura da sessão, a invalidação de respostas e a correção imediata. A persistência não inclui sincronização na nuvem nem altera os portões de domínio.

Consulta a plugins encontrou alternativas de OCR e design; a integração do Drive e as ferramentas locais já disponíveis permitiram continuar sem exigir uma nova conexão. O trabalho integral de conferência, classificação e comentários ainda não está concluído.

### Validação desta continuação

Os 1.006 testes em 130 arquivos passaram. O build inicialmente excedeu o orçamento de pré-cache do PWA; o acervo de questões reais foi colocado em um chunk `content-questions-reais`, seguindo a estratégia de cache já aplicada aos demais bancos. O novo build passou com pré-cache de 4,85 MiB. Os sete testes Python de extração e organização passaram.

Uma conferência com Chromium em viewport 390 × 844 executou seleção de módulo, resposta, exibição imediata da correção e recarregamento com retomada. Não foram registrados erros de página ou rolagem horizontal. A tela de teste isolada foi removida depois da conferência; a autenticação da plataforma não foi alterada. A imagem local está em `/workspace/scratch/prints-reais/correcao-mobile.png`.
