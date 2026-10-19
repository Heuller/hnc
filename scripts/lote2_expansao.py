# -*- coding: utf-8 -*-
"""
Script de Expansão Didática — Lote 2 (M3 e M4: 8 Submódulos)
Missão v2 — Fase 5: Expansão da Teoria Didática Dual (W5)
Embasamento Real e Referências Bibliográficas Canônicas
"""

import os
import re
import sys

if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

TEXTOS_DIDATICOS = {
    'sub-3-1': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Classificação Decimal Universal (CDU)** e a **Classificação Decimal de Dewey (CDD)** são os dois maiores sistemas bibliográficos decimais do mundo e figuram entre os tópicos mais cobrados pelo Cebraspe:
1. **CDD (Melvil Dewey, 1876 / 23ª ed.):**
   - Sistema puramente hierárquico e predominantemente enumerativo, estruturado em 10 classes principais (000 a 900), com princípio da notação decimal e três resumos (*summaries*).
   - Uso de 6 tabelas auxiliares padronizadas (T1: Subdivisões Padrão, T2: Áreas Geográficas, T3: Subdivisões para Literaturas, T4: Subdivisões para Línguas, T5: Grupos Étnicos e Nacionais, T6: Línguas).
2. **CDU (Paul Otlet e Henri La Fontaine, 1895 / Edição-Padrão Internacional):**
   - Sistema analítico-sintético e facetado, derivado da CDD, mas infinitamente mais flexível para relacionar conceitos compostos.
   - **Tabela Principal (10 Classes):** 0 (Generalidades/Ciência e Conhecimento), 1 (Filosofia e Psicologia), 2 (Religião e Teologia), 3 (Ciências Sociais/Direito/Política), 4 (Vaga/Livre para futuras expansões), 5 (Ciências Exatas e Naturais), 6 (Ciências Aplicadas/Medicina/Tecnologia), 7 (Arte/Música/Esporte), 8 (Linguagem/Linguística/Literatura), 9 (Geografia/Biografia/História). A classe 4 está **vaga desde 1961**!
   - **Símbolos e Sinais de Ligação Canônicos da CDU:**
     - `+` (Adição): Liga assuntos independentes não consecutivos (ex.: `53+54` Física e Química).
     - `/` (Extensão Consecutiva): Abrange uma sequência contínua de classes (ex.: `53/54` De Física a Química inclusive).
     - `:` (Relação Simples): Conecta dois ou mais assuntos com influência mútua reversível (ex.: `17:7` Ética em relação à Arte).
     - `::` (Relação Fixa / Ordem Irreversível): Relação subordinada inflexível de ordenação mecânica.
     - `[ ]` (Subagrupamento / Colchetes): Agrupamento algébrico auxiliar para evitar ambiguidade (ex.: `31:[622+669]`).
     - `*` (Notação Não CDU): Introduz códigos externos (fórmulas químicas, normas).
     - `A/Z` (Especificação Alfabética): Complemento de nome próprio por extenso.
   - **Auxiliares Comuns Independentes:** `(0...)` Forma do documento; `(1/9)` Lugar/Geografia; `(=...)` Raça/Povo; `\"...\"` Tempo/Data.
   - **Auxiliares Comuns Dependentes:** `-02` Propriedades; `-03` Materiais; `-05` Pessoas e Características Pessoais.
   - **Auxiliares Especiais:** `-1/-9` (Hífen: analíticos de detalhe); `.01/.09` (Ponto zero: processos e operações); `'1/'9` (Apóstrofo: síntese integradora e composição).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Classificação de Parecer sobre Reforma Tributária na Biblioteca Pedro Aleixo):** Ao classificar um livro sobre o impacto social da reforma tributária nos estados brasileiros, o classificador da Câmara constrói a síntese CDU facetada: `336.22(81)(094.5)` onde `336.22` é Direito Tributário/Impostos, `(81)` é auxiliar comum de lugar (Brasil) e `(094.5)` é auxiliar de forma para estatutos e leis.
- **Cenário 2 (Uso de Auxiliar de Pessoas na Comissão de Defesa dos Direitos da Mulher):** Ao organizar a bibliografia temática para a Bancada Feminina sobre liderança política das mulheres parlamentares no Brasil, utiliza-se a classe `328(81)-055.2`, onde `328` representa parlamentos, `(81)` Brasil e `-055.2` é o auxiliar comum dependente para o gênero feminino.
- **Cenário 3 (A Classe 4 Vaga na Ordenação das Estantes):** Ao orientar novos analistas e estagiários da Câmara na organização física das estantes do acervo aberto, lembra-se que após a classe 3 (Ciências Sociais e Direito) os livros saltam diretamente para a classe 5 (Ciências Exatas), pois a classe 4 está intencionalmente desocupada.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Símbolo CDU | Nome Oficial | Significado / Comportamento | Exemplo Cebraspe |
| :--- | :--- | :--- | :--- |
| `+` | Adição | Conceitos independentes (A e B) | `622+669` (Mineração e Metalurgia) |
| `/` | Extensão consecutiva | Sequência contínua de classes (de A até B) | `592/599` (Zoologia sistemática) |
| `:` | Relação simples | Conexão recíproca/reversível | `34:681.3` (Direito e Informática) |
| `::` | Relação fixa | Relação irreversível (ordem fixa) | `77.044::355` (Fotografia militar) |
| `(0...)` | Auxiliar de forma | Tipo/suporte documental | `(035)` (Manuais e guias) |
| `(1/9)` | Auxiliar de lugar | Localização espacial/geográfica | `(81)` (Brasil) / `(4)` (Europa) |
| `\"...\"` | Auxiliar de tempo | Datas, anos, séculos entre aspas | `\"2024\"` (Ano de 2024) |
| `-05` | Auxiliar de pessoas | Características pessoais e grupos | `-053.2` (Crianças) |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **A Classe 4 na CDU:** A banca afirma com frequência que *"a classe 4 da CDU destina-se atualmente à Linguística e Filologia"*. **Gabarito: ERRADO.** A classe 4 está **VAGA** desde 1961. A Linguística foi transferida para a classe 8 juntamente com a Literatura!
- **Diferença entre `+` e `/`:** A banca troca a barra pela adição, dizendo que `53/54` representa apenas a física e a química isoladas. **Gabarito: ERRADO.** A barra `/` indica extensão contínua de todos os números entre 53 e 54 inclusive.
- **Aspas na CDU:** Afirmar que as aspas `\"...\"` introduzem nomes próprios alfabéticos. **Gabarito: ERRADO.** As aspas indicam exclusivamente o **auxiliar comum de tempo**; nomes próprios entram com o operador alfabético `A/Z`.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **UDC CONSORTIUM.** *Classificação Decimal Universal: edição-padrão internacional em língua portuguesa*. Brasília: IBICT, 2020. 3 v. (Norma e tabela canônica da CDU no Brasil).
- **DEWEY, Melvil.** *Dewey Decimal Classification and Relative Index*. 23. ed. Dublin, Ohio: OCLC, 2011. 4 v.
- **PIEDADE, Maria Antonieta Requião.** *Introdução à teoria da classificação*. 2. ed. rev. e aum. Rio de Janeiro: Interciência, 1983. (Clássico didático obrigatório).
- **SOUZA, Sebastião de.** *CDU: guia para utilização da edição padrão internacional em língua portuguesa*. Brasília: Thesaurus, 2009.
- **POMBO, Olga.** Da classificação dos seres à classificação dos saberes. *Revista da Faculdade de Ciências da Universidade de Lisboa*, v. 14, p. 19-33, 2006.""",

    'sub-3-2': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
No âmbito jurídico-legislativo, a **Classificação Decimal de Direito (CDDir)** e as **Notações de Autor** são instrumentos indispensáveis para a precisão técnica do acervo:
1. **A Classificação Decimal de Direito (CDDir de Doris de Queiroz Carvalho):**
   - Sistema decimal especializado desenvolvido no Brasil por **Doris de Queiroz Carvalho** (criado originalmente no Ministério da Fazenda em 1948 e adotado pelo STF, Senado e Câmara).
   - Toma como raiz a classe **34 (Direito)** da CDU e desdobra minuciosamente as ramificações jurídicas nacionais:
     - `340`: Teoria Geral, Filosofia do Direito, Enciclopédia Jurídica.
     - `341`: Direito Internacional (Público e Privado).
     - `342`: Direito Público e Constitucional (Sistemas políticos, processo legislativo).
     - `343`: Direito Penal (Crimes, criminologia, processo penal).
     - `344`: Direito Militar.
     - `345`: Direito Administrativo (Serviços públicos, servidores, licitações).
     - `346`: Direito Econômico e Tributário.
     - `347`: Direito Civil e Comercial / Direito Privado.
     - `348`: Direito Canônico e Eclesiástico.
     - `349`: Ramos Especiais (Direito do Trabalho, Direito Agrário, Direito Ambiental).
2. **Notação de Autor (Cutter-Sanborn e Tabela PHA):**
   - **Tabela Cutter-Sanborn:** Letra inicial maiúscula do sobrenome + dois ou três algarismos.
   - **Tabela PHA (Paula Hawkins de Azevedo):** Criada para superar a limitação da Cutter-Sanborn em nomes de língua portuguesa (com abundância de Silva, Santos, Souza, Oliveira, Pereira).
   - **Obra-Marca (*Workmark*):** Letra minúscula adicionada ao final da notação de autor correspondente à primeira letra do título da obra (desconsiderando artigo inicial) para diferenciar livros do mesmo autor na mesma classe.
   - **Edição e Data no Número de Chamada:** Registrados em linhas sucessivas para garantir a ordenação cronológica e evolutiva das edições.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (CDDir na Biblioteca Pedro Aleixo):** Ao dar entrada nas obras clássicas de Direito Constitucional de José Afonso da Silva e Michel Temer, a biblioteca utiliza a CDDir `342.1` (Direito Constitucional Brasileiro). A notação Cutter de Silva é `S586` e a obra-marca para o livro *Curso de Direito Constitucional Positivo* é `c` minúsculo, resultando no número de chamada:
  `342.1` / `S586c` / `45. ed.` / `2022`.
- **Cenário 2 (Diferenciação PHA em Homônimos):** Em uma biblioteca parlamentar com dezenas de juristas com sobrenome "Oliveira", a Tabela PHA fornece granularidade específica para a antroponímia brasileira, evitando que obras de autores distintos recebam exatamente o mesmo número de chamada.
- **Cenário 3 (Organização da Coleção Especial de Pareceres da CCJ):** Os pareceres da Comissão de Constituição e Justiça são classificados pela CDDir sob a classe `342.52` (Poder Legislativo e Processo de Elaboração das Leis), permitindo que consultores e parlamentares localizem em segundos qualquer precedente normativo nas estantes do CEDI.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Sistema de Classificação / Notação | Autoria / Origem | Foco Principal | Vantagem Competitiva no Concurso |
| :--- | :--- | :--- | :--- |
| **CDDir** | Doris de Queiroz Carvalho | Direito e Legislação Brasileira | Granularidade exata para ramos do direito nacional |
| **Cutter-Sanborn** | C. A. Cutter e Kate Sanborn | Nomes de autores em geral (anglo-saxão) | Padrão mundial mais cobrado em concursos |
| **Tabela PHA** | Paula Hawkins de Azevedo | Autores luso-brasileiros | Desempate refinado de sobrenomes ibéricos (Silva, Santos) |
| **Obra-Marca (Workmark)** | Teoria da Notação | Letra minúscula do título | Desempata obras do mesmo autor na mesma classe |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Artigo Inicial na Obra-Marca:** O Cebraspe afirma que a obra-marca do livro *"O Direito Administrativo"* do autor Celso Antônio Bandeira de Mello deve ser a letra `o`. **Gabarito: ERRADO.** Artigos iniciais são sumariamente ignorados na composição da obra-marca; a letra correta é `d` (de Direito).
- **Autoria da CDDir:** Atribuir a criação da Classificação Decimal de Direito a Melvil Dewey ou Paul Otlet. **Gabarito: ERRADO.** Trata-se de obra genuinamente brasileira criada pela bibliotecária **Doris de Queiroz Carvalho**.
- **Maiúscula vs. Minúscula na Notação de Autor:** A letra inicial do sobrenome é sempre **maiúscula** e a obra-marca do título é sempre **minúscula**. A inversão dessas caixas tipográficas constitui erro de notação.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **CARVALHO, Doris de Queiroz.** *Classificação decimal de direito*. 4. ed. Brasília: Ministério da Justiça, 2002. (Tabela canônica adotada pelos tribunais superiores e pelo Congresso Nacional).
- **SILVEIRA, Amélia.** *A notação de autor e a tabela Cutter-Sanborn*. Florianópolis: Ed. da UFSC, 2002.
- **AZEVEDO, Paula Hawkins de.** *Tabela de notação de autor (PHA)*. Rio de Janeiro: s.n., 1965.
- **CÂMARA DOS DEPUTADOS.** *Manual de Processamento Técnico da Biblioteca Pedro Aleixo*. Brasília: CEDI, 2019.
- **LEHNUS, Donald J.** *Book numbers: history, principles, and application to materials*. Chicago: ALA, 1980.""",

    'sub-3-3': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Análise Documentária** e a **Indexação** representam o núcleo intelectual do tratamento temático da informação:
1. **Conceito e Etapas da Indexação (ISO 5963 / UNISIST):**
   - Processo de representar o conteúdo temático de um documento por meio de termos padronizados de uma linguagem documentária ou texto livre.
   - **Três Etapas Canônicas:**
     1. *Exame do Documento e Leitura Técnica:* Leitura estratégica da estrutura (título, subtítulo, resumo, sumário, introdução, conclusões, cabeçalhos de seção). O indexador **não lê o livro integralmente** de ponta a ponta!
     2. *Identificação dos Conceitos (Conceituação):* Extração das noções nucleares que respondem ao que o documento trata (o sobre/aboutness).
     3. *Tradução dos Conceitos:* Transposição dos conceitos em linguagem natural para os termos autorizados da linguagem de indexação (tesauro, lista de cabeçalhos ou vocabulário controlado).
2. **Exaustividade vs. Revocação e Precisão:**
   - **Exaustividade:** Número de termos atribuídos a um documento para cobrir todos os seus tópicos (quanto maior a exaustividade, maior a **revocação** e menor a precisão).
   - **Especificidade:** Grau de precisão com que um termo de indexação descreve exatamente o conceito do documento (quanto maior a especificidade, maior a **precisão** e menor a revocação).
3. **Indexação Manual vs. Automática:**
   - Manual (humana/intelectual), Semi-automática (humano valida sugestões algorítmicas) e Automática (algoritmos baseados em frequência TF-IDF, processamento de linguagem natural ou modelos de linguagem).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Leitura Técnica de Proposição Legislativa):** Ao receber um Projeto de Lei com 400 páginas sobre saneamento básico e concessões públicas, o bibliotecário legislativo aplica a **ISO 5963**: lê a ementa, a justificação do deputado autor, os artigos iniciais de definição e o relatório final da comissão, extraindo em 15 minutos os conceitos essenciais para indexação sem ler as 400 páginas.
- **Cenário 2 (Trade-off Exaustividade vs. Precisão na Busca Parlamentar):** Um deputado pede ao serviço de referência: *"Quero apenas os projetos de lei que tratem especificamente de incentivo fiscal para microprodutores de cacau"*. O bibliotecário aplica busca de **alta especificidade** utilizando termos restritos do Vocabulário Controlado Básico (VCB), garantindo **alta precisão** (zero ruído de leis gerais sobre agricultura).
- **Cenário 3 (Tradução para Termos Autorizados na RVBI):** O autor do projeto usa em sua justificativa a expressão popular "taxação das grandes fortunas". O catalogador traduz esse conceito para o descritor canônico autorizado da RVBI: `IMPOSTO SOBRE GRANDES FORTUNAS (IGF)`, mantendo a consistência do catálogo.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Conceito de Indexação | Definição Teórica | Efeito na Recuperação | Relação Direta |
| :--- | :--- | :--- | :--- |
| **Exaustividade** | Quantidade de assuntos indexados | Recupera mais documentos | Aumenta a **Revocação** (Recall) |
| **Especificidade** | Exatidão e profundidade do termo | Recupera documentos mais pontuais | Aumenta a **Precisão** (Precision) |
| **Leitura Técnica** | Inspeção sistemática de partes estratégicas | Otimiza o tempo do profissional | Não exige leitura integral |
| **Tradução** | Passagem da linguagem natural para a controlada | Elimina sinonímias e ambiguidades | Uso obrigatório de Tesauro/VCB |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **A Leitura Integral do Documento:** O Cebraspe adora afirmar que *"na indexação profissional segundo a ISO 5963, o bibliotecário deve realizar a leitura linear completa de todas as páginas do documento antes de extrair conceitos"*. **Gabarito: ERRADO.** A norma orienta expressamente a leitura técnica seletiva de partes estruturantes.
- **Inversão entre Revocação e Precisão:** Dizer que o aumento da exaustividade resulta em maior precisão. **Gabarito: ERRADO.** Alta exaustividade traz mais documentos periféricos (aumenta a revocação / recall e diminui a precisão).
- **Indexação por Atribuição vs. Derivação:** Na indexação por **derivação** (ou extração), usam-se as próprias palavras literais do autor; na indexação por **atribuição**, termos padronizados de uma linguagem controlada são atribuídos mesmo que não constem no texto original.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **LANCASTER, F. Wilfrid.** *Indexação e resumos: teoria e prática*. 2. ed. Brasília: Briquet de Lemos, 2004. (A principal bíblia de indexação nos concursos do Cebraspe).
- **KOBASHI, Nair Yumiko.** *A elaboração de informações documentárias: em busca de uma metodologia*. 1994. Tese (Doutorado) – Universidade de São Paulo, São Paulo, 1994.
- **ISO 5963:1985.** *Documentation — Methods for examining documents, determining their subjects, and selecting indexing terms*. Genebra: ISO, 1985.
- **CHAUMIER, Jacques.** *Indexação: conceitos, etapas e instrumentos*. Rio de Janeiro: Palas Athena, 1988.
- **CINTRA, Anna Maria Marques et al.** *Para entender as linguagens documentárias*. 2. ed. São Paulo: Polis, 2002.""",

    'sub-3-4': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
As **Linguagens Documentárias**, com destaque para os **Tesauros**, estruturam o vocabulário e a interoperabilidade semântica nos sistemas de informação:
1. **O que é um Tesauro (ISO 25964 e ANSI/NISO Z39.19):**
   - Vocabulário controlado e dinâmico de termos relacionados formal e semanticamente, cobrindo de modo exaustivo um domínio específico do conhecimento.
   - **Relações Semânticas Canônicas:**
     - **Equivalência (Sinonímia):** `USE` (Termo Autorizado) e `UP` (*Usado Para* / Não autorizado). Controla sinônimos, variantes ortográficas e siglas.
     - **Hierárquica (Gênero-Espécie e Todo-Parte):** `TG` (*Termo Geral* / *Broader Term* - BT) e `TE` (*Termo Específico* / *Narrower Term* - NT).
     - **Associativa (Afinidade Conceitual):** `TA` (*Termo Associado* / *Related Term* - RT). Liga termos que não são sinônimos nem pertencem à mesma hierarquia, mas compartilham relação de causa-efeito, processo-produto ou instrumento.
     - **Notas de Escopo (`NE` / *Scope Note*):** Definem a acepção precisa em que o termo é utilizado naquele sistema e orientam o indexador.
2. **Estrutura de Apresentação:**
   - Alfabética (ordem A-Z de termos e referências cruzadas), Sistemática (agrupamentos temáticos hierárquicos) e Gráfica (árvores conceituais).
3. **SKOS (*Simple Knowledge Organization System* - W3C):**
   - Padrão da Web Semântica baseado em RDF para representar tesauros, taxonomias e esquemas de classificação no ambiente de Dados Conectados (*Linked Data*). Propriedades canônicas: `skos:prefLabel` (termo preferido), `skos:altLabel` (sinônimo/termo alternativo), `skos:broader` (TG), `skos:narrower` (TE) e `skos:related` (TA).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Relação de Equivalência no VCB da RVBI):** O usuário busca no catálogo da Câmara por *"Direito Cibernético"*. O tesauro da Rede RVBI contém a relação de equivalência:
  `DIREITO CIBERNÉTICO`
  `USE DIREITO DA INFORMÁTICA`
  O sistema redireciona automaticamente a busca para o termo autorizado `DIREITO DA INFORMÁTICA`, onde estão reunidas todas as leis e doutrinas.
- **Cenário 2 (Relação Hierárquica na Tramitação de Projetos):** Ao indexar a regulamentação do trabalho intermitente, o bibliotecário utiliza o termo específico `TRABALHO INTERMITENTE`. No tesauro, ele verifica que `TG DIREITO DO TRABALHO`. Caso um parlamentar busque genericamente por Direito do Trabalho com expansão hierárquica ativada, a busca recupera também todos os termos específicos vinculados.
- **Cenário 3 (Exportação de Tesauro em SKOS para o Portal de Dados Abertos):** O CEDI disponibiliza o Vocabulário Controlado da Câmara dos Deputados em formato `SKOS/RDF`, permitindo que pesquisadores universitários de IA importem toda a hierarquia jurídica para treinar algoritmos semânticos de análise legislativa.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Relação no Tesauro | Sigla em Português | Sigla em Inglês | Função Exata na Indexação |
| :--- | :--- | :--- | :--- |
| **Equivalência (Preferido)** | `USE` | `USE` | Remete do termo proibido/sinônimo para o termo adotado |
| **Equivalência (Recíproca)** | `UP` (Usado Para) | `UF` (Used For) | Indica os termos sinônimos que o termo autorizado substitui |
| **Hierárquica (Geral)** | `TG` (Termo Geral) | `BT` (Broader Term) | Conceito mais amplo na taxonomia (gênero/todo) |
| **Hierárquica (Específico)** | `TE` (Termo Específico) | `NT` (Narrower Term) | Conceito subordinado mais detalhado (espécie/parte) |
| **Associativa** | `TA` (Termo Associado) | `RT` (Related Term) | Relação de proximidade semântica não hierárquica |
| **Nota de Escopo** | `NE` | `SN` (Scope Note) | Esclarece o sentido, restrição ou histórico do termo |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Troca de Relações Hierárquicas por Associativas:** A banca diz que *"a relação entre Doença e Medicamento é hierárquica do tipo TG/TE"*. **Gabarito: ERRADO.** Medicamento não é uma espécie de doença; a relação entre ambos é puramente **associativa (TA)**.
- **Bidirecionalidade Obrigatória:** Toda relação em um tesauro deve ser estritamente recíproca. Se o termo A tem `TG B`, obrigatoriamente o termo B deve ter `TE A`. Se A tem `USE B`, B deve ter `UP A`. A ausência de reciprocidade é erro estrutural do vocabulário.
- **Equivalência no SKOS:** O Cebraspe testa as propriedades SKOS: `skos:prefLabel` corresponde ao termo autorizado e `skos:altLabel` corresponde ao termo não autorizado (`UP`).

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **ISO 25964-1:2011.** *Information and documentation — Thesauri and interoperability with other vocabularies — Part 1: Thesauri for information retrieval*. Genebra: ISO, 2011.
- **ANSI/NISO Z39.19-2005 (R2010).** *Guidelines for the Construction, Format, and Management of Monolingual Controlled Vocabularies*. Baltimore: NISO, 2010.
- **GOMES, Hagar Espanha (Coord.).** *Manual de elaboração de tesauros monolíngues*. Brasília: Programa Nacional de Bibliotecas das Instituições de Ensino Superior, 1990.
- **W3C.** *SKOS Simple Knowledge Organization System Reference*. W3C Recommendation, 2009.
- **MOREIRO GONZÁLEZ, José Antonio.** *Linguagens documentárias e vocabulários controlados para indexação e recuperação da informação*. São Paulo: Ed. Senac São Paulo, 2011.""",

    'sub-4-1': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
Os **Sistemas de Recuperação da Informação (SRI)**, a **Álgebra Booleana** e os modelos computacionais de busca determinam a eficácia da recuperação de acervos digitais:
1. **Álgebra Booleana e Operadores de Busca:**
   - **AND (Interseção / Restritivo):** Recupera documentos que contêm cumulativamente ambos os termos ($A \\cap B$). Reduz o conjunto recuperado, aumentando a precisão.
   - **OR (União / Expansivo):** Recupera documentos que contêm pelo menos um dos termos ($A \\cup B$). Ideal para agrupar sinônimos e variantes linguísticas. Aumenta a revocação.
   - **NOT / AND NOT (Diferença / Exclusão):** Exclui documentos que contenham determinado termo ($A - B$). Cuidado: pode excluir documentos relevantes se o termo indesejado for citado secundariamente.
2. **Operadores Auxiliares Avançados:**
   - **Truncagem / Curinga (`*`, `?`, `$`);** Recupera variações de desinência (ex.: `bibliot*` recupera biblioteca, bibliotecário, biblioteconomia).
   - **Proximidade / Adjacência (`NEAR`, `ADJ`, `WITH`, `SAME`):** Exige que os termos estejam a uma distância máxima de palavras um do outro, garantindo coesão sintática.
   - **Busca por Frase Exata (Aspas `\"...\"`):** Preserva a ordem e a contiguidade estrita das palavras.
3. **Modelos de Recuperação:**
   - **Booleano Padrão:** Correspondência exata (*exact match*); sem ordenação por relevância; documentos satisfazem ou não satisfazem a expressão lógica.
   - **Modelo Vetorial (Salton, 1975):** Documentos e consultas são vetores em um espaço multidimensional. Avalia o cosseno do ângulo entre os vetores e pondera termos por **TF-IDF** (*Term Frequency - Inverse Document Frequency*), permitindo ordenação gradual por relevância (*ranked retrieval*).
   - **Modelo Probabilístico (Robertson & Spärck Jones - BM25):** Calcula a probabilidade de um documento ser relevante para uma consulta com base em distribuições estatísticas.
4. **Métricas Clássicas de Avaliação de SRI (Cranfield):**
   - **Revocação (*Recall*):** Razão entre documentos relevantes recuperados e o total de documentos relevantes existentes na base: $R = \\frac{\\text{Relevantes Recuperados}}{\\text{Total de Relevantes}}$.
   - **Precisão (*Precision*):** Razão entre documentos relevantes recuperados e o total de documentos recuperados pelo sistema: $P = \\frac{\\text{Relevantes Recuperados}}{\\text{Total de Recuperados}}$.
   - **Trade-off Histórico:** Revocação e Precisão são grandezas inversamente proporcionais; aumentar uma geralmente penaliza a outra.
   - **F-Measure (F1-Score):** Média harmônica balanceada entre precisão e revocação: $F_1 = 2 \\times \\frac{P \\times R}{P + R}$.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Busca Booleana Estruturada na Consultoria Legislativa):** Um consultor parlamentar precisa redigir uma emenda sobre responsabilidade penal ambiental. O bibliotecário formula a expressão lógica no sistema:
  `(\"direito penal\" OR \"crimes ambientais\") AND (poluição OR desmatamento) NOT mineração`
  O uso correto de parênteses evita ambiguidade e isola exatamente a jurisprudência desejada.
- **Cenário 2 (TF-IDF e BM25 no Mecanismo de Busca do Portal da Câmara):** Quando um cidadão digita na barra de pesquisa do portal da Câmara *"orçamento da união saúde"*, o algoritmo não faz mera checagem booleana. Ele aplica **BM25**, atribuindo peso elevado à palavra "saúde" e peso menor a termos hiperfrequentes no corpus legislativo, apresentando os projetos mais relevantes no topo da primeira página.
- **Cenário 3 (Auditoria de Precisão e Revocação na BDCam):** A equipe do CEDI audita o desempenho do mecanismo de busca do DSpace após uma atualização: realizam 100 buscas padrão e calculam a taxa de revocação e precisão para garantir que documentos históricos de discursos de posse não estejam ocultos por ruído informacional.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Métrica / Operador | Fórmula / Função | Objetivo Primário | Efeito Típico |
| :--- | :--- | :--- | :--- |
| **Operador AND** | Interseção ($A \\cap B$) | Restringir a busca | Aumenta Precisão / Reduz Revocação |
| **Operador OR** | União ($A \\cup B$) | Expandir busca (sinônimos) | Aumenta Revocação / Reduz Precisão |
| **Operador NOT** | Exclusão ($A - B$) | Eliminar ruído específico | Cuidado: risco de silêncio indesejado |
| **Revocação (Recall)** | Relevantes Recuperados / Total Relevantes | Não deixar nada relevante de fora | Maximiza abrangência |
| **Precisão (Precision)** | Relevantes Recuperados / Total Recuperados | Evitar documentos irrelevantes (ruído) | Maximiza acerto |
| **F-Measure ($F_1$)** | Média harmônica de P e R | Equilibrar acurácia e cobertura | Mede a eficácia global do SRI |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Ruído vs. Silêncio Informacional:**
  - **Ruído:** Ocorrência de documentos irrelevantes no conjunto recuperado (baixa precisão).
  - **Silêncio:** Ocorrência de documentos relevantes que o sistema **deixou de recuperar** (baixa revocação). O Cebraspe inverte com frequência esses dois conceitos!
- **Média Aritmética no F-Measure:** A banca afirma que o F-Measure é a média aritmética simples entre revocação e precisão. **Gabarito: ERRADO.** O F-Measure é categoricamente a **média harmônica**, que penaliza discrepâncias acentuadas entre os dois valores.
- **Modelo Booleano e Relevância:** Afirmar que o modelo booleano padrão ordena os documentos em ordem decrescente de probabilidade de relevância. **Gabarito: ERRADO.** O modelo booleano padrão apenas classifica como "corresponde" ou "não corresponde", sem graduação de relevância.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BAEZA-YATES, Ricardo; RIBEIRO-NETO, Berthier.** *Recuperação de Informação: conceitos e tecnologia das máquinas de busca*. 2. ed. Porto Alegre: Bookman, 2013. (Texto canônico mundial de Information Retrieval).
- **MANNING, Christopher D.; RAGHAVAN, Prabhakar; SCHÜTZE, Hinrich.** *Introduction to Information Retrieval*. Cambridge: Cambridge University Press, 2008.
- **ROBREDO, Jaime.** *Da ciência da informação revisitada aos sistemas humanos de informação*. Brasília: Thesaurus; SSRR Informações, 2005.
- **LANCASTER, F. Wilfrid.** *Avaliação de serviços de bibliotecas*. Brasília: Briquet de Lemos, 1996. (Capítulo sobre avaliação de desempenho de recuperação).
- **SALTON, Gerard; WONG, Anita; YANG, Chung-Shu.** A vector space model for automatic indexing. *Communications of the ACM*, v. 18, n. 11, p. 613-620, 1975.""",

    'sub-4-2': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A identificação, categorização e avaliação crítica de **fontes de informação** é indispensável para a prática de referência legislativa:
1. **Tipologia Tradicional das Fontes de Informação (Grogan e Campello):**
   - **Fontes Primárias:** Contêm informações originais, inéditas, publicadas pela primeira vez pelos próprios autores/pesquisadores (ex.: artigos de periódicos científicos, teses e dissertações, anais de congressos, relatórios técnicos de pesquisa, patentes, normas técnicas, diários oficiais e legislações originais).
   - **Fontes Secundárias:** Facilitam a localização, organização e acesso às fontes primárias; contêm informações compiladas, retrabalhadas ou organizadas sobre fontes primárias (ex.: catálogos de bibliotecas, bases de dados bibliográficas, enciclopédias, dicionários, manuais, tratados, bibliografias e periódicos de indexação/resumos).
   - **Fontes Terciárias:** Guiam o usuário até as fontes secundárias e primárias; organizam o universo informacional em nível superior (ex.: bibliografias de bibliografias, diretórios de bibliotecas e instituições, guias de literatura, catálogos coletivos de redes).
2. **Literatura Cinzenta (*Grey Literature*):**
   - Documentos produzidos em todos os níveis governamentais, acadêmicos e empresariais, em formato impresso ou eletrônico, **não controlados por editoras comerciais** e cuja distribuição não segue os canais tradicionais de venda (ex.: relatórios técnicos de consultorias legislativas, notas informativas ministeriais, atas de audiências públicas, *preprints*, traduções internas e apostilas).
   - Desafios: controle bibliográfico complexo, tiragens restritas, volatilidade na web e ausência frequente de ISBN/ISSN.
3. **Critérios de Avaliação de Fontes de Informação:**
   - Autoridade (reputação do autor e da instituição publicadora), Precisão/Acurácia, Atualidade/Tempestividade, Cobertura/Exaustividade, Usabilidade e Objetividade (ausência de viés tendencioso).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Classificação de Documentos no Acervo da Consultoria Legislativa):** Ao receber os relatórios de pesquisa produzidos pelos consultores da Conle sobre o impacto orçamentário de uma emenda constitucional, o bibliotecário os identifica como **literatura cinzenta** de alto valor primário. Ele os cataloga na BDCam para garantir a recuperação permanente antes que se percam em pastas departamentais.
- **Cenário 2 (Distinção entre Fonte Primária e Secundária no Processo Legislativo):** Um assessor parlamentar precisa embasar um recurso perante o STF. O bibliotecário alerta: a publicação do texto da lei no *Diário Oficial da União* é uma **fonte primária** com fé pública; já o comentário doutrinário em um manual de direito constitucional é uma **fonte secundária**, fundamental para a interpretação, mas que não substitui a norma oficial.
- **Cenário 3 (Uso de Fonte Terciária para Pesquisa Histórica):** Um pesquisador estrangeiro busca mapear todos os centros de documentação e bibliotecas que guardam acervos parlamentares na América Latina. O bibliotecário consulta o *Guia Mundial de Bibliotecas Parlamentares da IFLA*, utilizando uma **fonte terciária** por excelência.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Nível da Fonte | Função Essencial | Exemplos Canônicos no Cebraspe | Armadilha Clássica da Banca |
| :--- | :--- | :--- | :--- |
| **Primária** | Apresenta dado inédito / criação original | Artigos, patentes, anais, diários oficiais, leis | Dizer que enciclopédia é fonte primária |
| **Secundária** | Reorganiza, sintetiza ou referencia primárias | Enciclopédias, dicionários, catálogos, manuais | Confundir bibliografia temática com terciária |
| **Terciária** | Guia sobre fontes primárias e secundárias | Bibliografia de bibliografias, guias, diretórios | Dizer que periódico científico é terciário |
| **Literatura Cinzenta** | Publicação fora do mercado comercial editorial | Relatórios técnicos, *preprints*, teses, atas | Afirmar que livro publicado por editora é literatura cinzenta |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Teses e Dissertações:** A banca insiste em dizer que teses acadêmicas são fontes secundárias porque foram orientadas por professores. **Gabarito: ERRADO.** Teses e dissertações relatam pesquisas científicas originais inéditas e são categorizadas como **fontes primárias** (e classicamente como literatura cinzenta acadêmica).
- **Periódicos de Indexação e Resumos (*Abstracting and Indexing*):** Afirmar que uma base de dados que apenas indexa artigos de outras revistas é fonte primária. **Gabarito: ERRADO.** Trata-se de **fonte secundária** para localização.
- **Literatura Cinzenta sem Valor Científico:** O Cebraspe sugere que documentos de literatura cinzenta não possuem validade técnica ou jurídica por não terem ISBN comercial. **Gabarito: ERRADO.** Relatórios de órgãos governamentais e agências reguladoras constituem literatura cinzenta de altíssimo rigor e relevância pública.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **CAMPELLO, Bernadete de Souza; CENDÓN, Beatriz Valadares; KREMER, Jeannette Marguerite (Org.).** *Fontes de informação para pesquisadores e profissionais*. Belo Horizonte: Ed. UFMG, 2000. (Livro adotado formalmente em concursos de Biblioteconomia no Brasil).
- **CUNHA, Murilo Bastos da; CAVALCANTI, Cordélia Robalinho de Oliveira.** *Dicionário de Biblioteconomia e Arquivologia*. Brasília: Briquet de Lemos, 2008.
- **GROGAN, Denis.** *Science and technology: an introduction to the literature*. 4. ed. London: Clive Bingley, 1982. (A formulação canônica da divisão primária/secundária/terciária).
- **ROWLEY, Jennifer.** *A biblioteca eletrônica*. Brasília: Briquet de Lemos, 2002.
- **ALBERANI, Vilma; CASTRO PANGELOS, Paola de.** The use of grey literature in government and public institutions. *Interlending & Document Supply*, v. 23, n. 2, p. 24-29, 1995.""",

    'sub-4-3': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A gestão das **Fontes de Informação Jurídica** e o domínio sobre o ecossistema do **LexML Brasil** constituem competências centrais para o Analista Legislativo:
1. **Tipologia Tridimensional da Informação Jurídica:**
   - **Legislação (Normas):** Atos normativos primários e secundários (Constituição, Leis Complementares, Leis Ordinárias, Decretos, Medidas Provisórias, Resoluções, Portarias).
   - **Jurisprudência:** Conjunto de decisões, acórdãos e súmulas reiteradas dos órgãos do Poder Judiciário (STF, STJ, TST, TSE, STM, TRFs, TJs) e tribunais administrativos de contas (TCU).
   - **Doutrina:** Produção intelectual dos juristas e cientistas do direito (artigos, tratados, comentários a códigos, pareceres jurídicos e monografias).
2. **Publicações Oficiais e Diários Oficiais:**
   - **Diário Oficial da União (DOU):** Publicação oficial gerida pela Imprensa Nacional dividida em 3 seções:
     - *Seção 1:* Leis, decretos, resoluções, portarias e atos normativos gerais.
     - *Seção 2:* Atos relativos a pessoal da administração pública federal (nomeações, exonerações, aposentadorias).
     - *Seção 3:* Contratos, editais de licitação, concursos públicos e avisos.
   - **Diário da Câmara dos Deputados (DCD) e Diário do Congresso Nacional (DCN):** Registro oficial dos trabalhos legislativos, pautas, discursos em plenário, proposições apresentadas e atas das comissões.
3. **O Portal LexML Brasil (Rede de Informação Legislativa e Jurídica):**
   - Iniciativa governamental brasileira inspirada no padrão internacional *Akoma Ntoso* e nos princípios de Dados Abertos e Web Semântica.
   - Utiliza identificadores persistentes e universais baseados no padrão **URN (*Uniform Resource Name*) LexML**.
   - **Estrutura Canônica da URN LexML:**
     `urn:lex:br:federal:lei:2006-08-07;11340`
     (Hierarquia: jurisdição territorial $\\to$ autoridade $\\to$ tipo de norma $\\to$ data de promulgação $\\to$ número).
   - Permite a referenciação precisa de versões consolidadas de normas e a conexão direta entre leis e suas decisões judiciais correlatas.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Identificação de URN LexML em Emendas Parlamentares):** Ao elaborar a ficha de metadados de uma emenda substitutiva ao Código Civil na Comissão de Constituição e Justiça, o bibliotecário vincula a proposição à URN canônica: `urn:lex:br:federal:lei:2002-01-10;10406`, permitindo que os sistemas de automação legislativa processem automaticamente a árvore de alterações da norma.
- **Cenário 2 (Diferenciação de Seções do DOU no Apoio Parlamentar):** Um deputado pede verificação urgente sobre se a nomeação de um novo ministro foi publicada. O bibliotecário consulta imediatamente a **Seção 2 do DOU**; caso o deputado solicitasse o texto do decreto assinado, a busca seria feita na **Seção 1**.
- **Cenário 3 (Integração SILEG e LexML):** Os registros de proposições legislativas cadastrados no Sistema de Informações Legislativas da Câmara (SILEG) são convertidos em XML e indexados no repositório nacional do LexML, tornando as leis da Câmara recuperáveis simultaneamente com a jurisprudência do STF.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Vertente Jurídica / Seção DOU | Conteúdo e Definição | Exemplo de Aplicação | Fonte Canônica |
| :--- | :--- | :--- | :--- |
| **Legislação** | Normas escritas editadas pelo Estado | Leis, Decretos, Medidas Provisórias | DOU Seção 1 / LexML |
| **Jurisprudência** | Decisões reiteradas de tribunais | Súmulas vinculantes, Acórdãos do STF | Diário de Justiça / STF |
| **Doutrina** | Estudos teóricos de juristas | Livros de direito, teses, pareceres | Biblioteca Pedro Aleixo / RVBI |
| **DOU - Seção 1** | Atos normativos de efeito geral | Promulgação de Lei Federal | Imprensa Nacional |
| **DOU - Seção 2** | Atos de pessoal do serviço público | Nomeação de servidor concursado | Imprensa Nacional |
| **DOU - Seção 3** | Licitações, contratos e editais | Edital de concurso da Câmara | Imprensa Nacional |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Estrutura da URN LexML:** A banca altera a sintaxe da URN, trocando `urn:lex:...` por URLs HTTP frágeis (`http://leis.gov.br/...`) ou invertendo a ordem hierárquica (colocando o número antes da autoridade). **Gabarito: a URN é persistente e obedece à hierarquia espacial e cronológica rigorosa.**
- **Seções do DOU:** O Cebraspe afirma que a publicação de um edital de licitação para reforma predial da Câmara é feita na Seção 1 do DOU. **Gabarito: ERRADO.** Editais, contratos e avisos de licitação são publicados exclusivamente na **Seção 3**.
- **Doutrina como Fonte Formal Primária do Direito:** Afirmar que a doutrina jurídica possui força vinculante obrigatória e eficácia de lei geral. **Gabarito: ERRADO.** A doutrina é fonte secundária e subsidiária de interpretação; não vincula os juízes nem o parlamento.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **PASSOS, Edilenice; BARROS, Luciana Peixoto de.** *Informação jurídica: teoria e prática*. Brasília: Thesaurus, 2014. (Livro clássico indispensável para bibliotecas jurídicas e parlamentares).
- **BRASIL. SENADO FEDERAL.** *Portal LexML Brasil: Documentação Técnica da Rede de Informação Legislativa e Jurídica*. Brasília: Senado Federal / Coordenação do LexML, 2023.
- **BRASIL. IMPRENSA NACIONAL.** *Portaria que estabelece as normas para publicação no Diário Oficial da União*. Brasília: Imprensa Nacional, 2022.
- **CÂMARA DOS DEPUTADOS.** *Guia do Processo Legislativo e Fontes de Informação da Câmara*. Brasília: Edições Câmara, 2021.
- **MEZZAROBA, Orides; MONTEIRO, Cláudia Servilha.** *Manual de metodologia da pesquisa no direito*. 7. ed. São Paulo: Saraiva, 2019.""",

    'sub-4-4': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
O **Serviço de Referência**, a **Disseminação Seletiva da Informação (DSI)** e os **Estudos de Usuários** corporificam a missão mediadora da biblioteca pública e parlamentar:
1. **O Serviço de Referência (Denis Grogan e Jean-Philippe Accart):**
   - Processo de assistência direta, pessoal e personalizada aos usuários em busca de informação.
   - **Etapas Canônicas da Entrevista de Referência (Grogan):**
     1. Mensagem inicial recebida do usuário (pergunta expressa).
     2. Esclarecimento da necessidade real (diagnóstico da dúvida latente).
     3. Seleção da estratégia de busca e das fontes adequadas.
     4. Execução da busca no sistema.
     5. Avaliação da resposta e validação com o usuário.
   - **Tipologia de Questões de Referência (Grogan):** Administrativas (onde fica?), Pergunta de resposta rápida (*Ready Reference* / fato específico), Busca temática ampla e Questão de pesquisa profunda (*Research*).
2. **Disseminação Seletiva da Informação (DSI / SDI):**
   - Serviço proativo e personalizado no qual a biblioteca antecipa o envio de informações novas de acordo com o **perfil de interesses cadastrado do usuário** (*User Profile*).
   - Componentes: Perfil do usuário $\\to$ Base de novas publicações $\\to$ Mecanismo de cruzamento (*Matching*) $\\to$ Notificação periódica $\\to$ Mecanismo de retroalimentação (*Feedback* para calibrar o perfil).
3. **Estudos de Usuários e Comportamento Informacional:**
   - Investigação sistemática de quem são os usuários, quais suas necessidades reais e sentidas, como buscam informação e quais barreiras enfrentam.
   - **Abordagem Tradicional (Orientada ao Sistema):** Foco em estatísticas quantitativas de empréstimo, circulação e ocupação das mesas.
   - **Abordagem Alternativa (Orientada ao Usuário / Cognitiva-Sense Making de Dervin):** Foco nas lacunas de sentido, na experiência subjetiva e no contexto de uso da informação.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (DSI Parlamentar Customizada na Biblioteca Pedro Aleixo):** Um deputado recém-empossado assume a presidência da Comissão de Ciência e Tecnologia. O bibliotecário cria um perfil de DSI no sistema da biblioteca com os descritores: *inteligência artificial, regulação de algoritmos, proteção de dados*. Semanalmente, o gabinete do deputado recebe um boletim automatizado com as novas doutrinas, teses e artigos indexados sobre esses temas.
- **Cenário 2 (Entrevista de Referência com a Consultoria Legislativa):** Um consultor legislativo pergunta: *"Vocês têm livros sobre saúde pública?"*. O bibliotecário de referência aplica as técnicas de Grogan e descobre que a real necessidade é saber se a vacinação obrigatória foi tema de controle de constitucionalidade no STF após a pandemia de COVID-19, refinando a estratégia de busca para o repositório LexML e jurisprudência constitucional.
- **Cenário 3 (Estudo de Usuários para Modernização do Portal da BDCam):** O CEDI conduz um estudo qualitativo com assessores parlamentares de diferentes partidos para identificar por que a busca avançada era pouco utilizada. O diagnóstico revela que a linguagem dos operadores booleanos assustava os usuários, motivando a criação de filtros por facetas amigáveis de clique único.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Serviço / Abordagem | Papel do Bibliotecário | Mecanismo Central | Foco de Avaliação |
| :--- | :--- | :--- | :--- |
| **Referência Reativa** | Aguarda o usuário procurar o balcão | Entrevista de referência | Resolução de dúvida imediata |
| **DSI (Proativa)** | Antecipa o envio de informações novas | Cruzamento de perfis (*matching*) | Relevância e feedback contínuo |
| **Estudo Tradicional** | Mede o uso dos recursos da biblioteca | Estatísticas de circulação e empréstimos | Eficiência operacional do prédio |
| **Estudo Alternativo** | Compreende a cognição e o comportamento | Métodos qualitativos e *Sense-Making* | Satisfação de necessidades humanas |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **A Pergunta Inicial como Expressão Perfeita da Dúvida:** O Cebraspe propõe que *"o bibliotecário deve iniciar a busca imediatamente a partir dos exatos termos proferidos pelo usuário em sua primeira pergunta no balcão"*. **Gabarito: ERRADO.** A doutrina de Denis Grogan ensina que a primeira pergunta raramente reflete a real necessidade de informação; a entrevista de referência é indispensável para esclarecer a demanda oculta.
- **DSI sem Mecanismo de Retroalimentação:** Dizer que a DSI funciona em fluxo unidirecional sem necessidade de feedback. **Gabarito: ERRADO.** O mecanismo de *feedback* do usuário é elemento obrigatório da DSI para refinar ou atualizar o perfil.
- **Confusão entre Questão de Resposta Rápida e Pesquisa:** Afirmar que levantar toda a legislação comparada de cinco países é uma questão de referência rápida (*Ready Reference*). **Gabarito: ERRADO.** Trata-se de busca de pesquisa aprofundada (*Research Query*).

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **GROGAN, Denis.** *A prática do serviço de referência*. Brasília: Briquet de Lemos, 1995. (A principal referência clássica cobrada em provas de concurso).
- **ACCART, Jean-Philippe.** *Serviço de referência: do presencial ao virtual*. Brasília: Briquet de Lemos, 2012.
- **FIGUEIREDO, Nice Menezes de.** *Estudos de uso e usuários da informação*. Brasília: IBICT, 1994. (Texto fundacional dos estudos de usuários no Brasil).
- **DERVIN, Brenda.** From the mind's eye of the user: the sense-making qualitative-quantitative methodology. *Qualitative Research in Information Management*, p. 61-84, 1992.
- **CÂMARA DOS DEPUTADOS.** *Diretrizes de Atendimento do Serviço de Referência da Biblioteca Pedro Aleixo*. Brasília: CEDI, 2020."""
}

def aplicar_lote2():
    print("Iniciando injeção didática do Lote 2 (M3 e M4)...")
    sucessos = 0
    for sub_id, texto_didatico in TEXTOS_DIDATICOS.items():
        caminhos = [
            f"src/content/modules/m3-classificacao/{sub_id}.ts",
            f"src/content/modules/m4-recuperacao/{sub_id}.ts",
        ]
        target_path = None
        for p in caminhos:
            if os.path.exists(p):
                target_path = p
                break
        
        if not target_path:
            print(f"❌ Arquivo não encontrado para {sub_id}")
            continue

        with open(target_path, "r", encoding="utf-8") as f:
            conteudo = f.read()

        if "teoriaDidaticaMarkdown" in conteudo:
            print(f"⚠️ {sub_id} já possui teoriaDidaticaMarkdown! Pulando.")
            continue

        alvo = "  checkpoints: ["
        if alvo not in conteudo:
            print(f"❌ Não encontrou '{alvo}' em {target_path}")
            continue

        texto_limpo = texto_didatico.strip()
        texto_escapado = re.sub(r'(?<!\\)`', r'\`', texto_limpo)
        texto_escapado = re.sub(r'(?<!\\)\$\{', r'\${', texto_escapado)
        bloco_didatico = f"  teoriaDidaticaMarkdown: `{texto_escapado}`,\n  checkpoints: ["

        novo_conteudo = conteudo.replace(alvo, bloco_didatico, 1)

        with open(target_path, "w", encoding="utf-8") as f:
            f.write(novo_conteudo)

        print(f"✅ Injetado com sucesso em {sub_id} ({target_path})")
        sucessos += 1

    print(f"\nFinalizado Lote 2: {sucessos}/{len(TEXTOS_DIDATICOS)} submódulos atualizados com sucesso.")

if __name__ == "__main__":
    aplicar_lote2()
