# -*- coding: utf-8 -*-
"""
Script de Expansão Didática — Lote 3 (M5 e M6: 11 Submódulos)
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
    'sub-5-1': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
O **Planejamento de Bibliotecas** e a **Avaliação de Serviços por Indicadores (ISO 11620)** constituem a base gerencial moderna das unidades de informação:
1. **Níveis de Planejamento (Almeida e Maciel & Mendonça):**
   - **Estratégico (Longo Prazo / Alta Administração):** Define missão, visão, valores, objetivos institucionais e diretrizes gerais. Envolve análise de cenários (Matriz SWOT / FOFA: Forças, Oportunidades, Fraquezas e Ameaças).
   - **Tático (Médio Prazo / Gerência Departamental):** Desdobra as diretrizes estratégicas em planos setoriais (ex.: plano de desenvolvimento de coleções, plano de modernização tecnológica do CEDI). Aloca recursos financeiros e humanos.
   - **Operacional (Curto Prazo / Execução Cotidiana):** Planos de ação detalhados, cronogramas, rotinas, procedimentos operacionais padrão (POP) e atribuições diárias dos bibliotecários.
2. **Avaliação e Indicadores de Desempenho (Norma ISO 11620):**
   - Um indicador de desempenho é uma expressão numérica (taxa, proporção ou índice) que mede a eficácia, eficiência e adequação dos serviços.
   - **Critérios de Qualidade de um Indicador:** Validade, confiabilidade, relevância, comparabilidade e custo-benefício da coleta.
   - Indicadores canônicos da ISO 11620: Custo por uso da coleção, Taxa de rotatividade do acervo, Tempo médio de resposta a consultas de referência, Satisfação do usuário e Percentual de empréstimos por usuário ativo.
3. **Ferramentas Gerenciais Canônicas:**
   - **Ciclo PDCA (Deming):** *Plan* (Planejar), *Do* (Executar), *Check* (Verificar), *Act* (Agir corretivamente).
   - **5W2H:** *What, Why, Where, When, Who, How, How much*.
   - **Matriz GUT:** Gravidade, Urgência e Tendência (para priorização de problemas operacionais).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Planejamento Estratégico no CEDI):** A Diretoria-Geral da Câmara publica o Plano Estratégico 2024–2027. O CEDI elabora seu planejamento tático definindo como meta a digitalização de 100% dos anais legislativos do século XIX e a redução do tempo de atendimento a consultas de deputados para no máximo 4 horas.
- **Cenário 2 (Aplicação da ISO 11620 na Biblioteca Pedro Aleixo):** O coordenador da biblioteca audita o serviço de empréstimo entre bibliotecas da RVBI e calcula o indicador:
  $\\text{Taxa de Sucesso no Atendimento} = \\frac{\\text{Consultas Respondidas no Prazo}}{\\text{Total de Consultas Recebidas}} \\times 100$.
  Ao verificar um índice de 96%, comprova a eficácia operacional do serviço no relatório de gestão anual apresentado ao Presidente da Câmara.
- **Cenário 3 (Matriz SWOT na Expansão da BDCam):** Antes de migrar o software DSpace para a versão mais recente em nuvem, a equipe de bibliotecários realiza uma análise FOFA: Força (equipe técnica qualificada), Fraqueza (servidores locais legados), Oportunidade (integração ao portal do Governo Digital), Ameaça (restrições orçamentárias na LOA).

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Nível de Planejamento | Horizonte Temporal | Responsável Típico | Foco da Decisão |
| :--- | :--- | :--- | :--- |
| **Estratégico** | Longo prazo (3 a 5 anos) | Diretoria-Geral / CEDI | Missão, Visão e Relação com o Ambiente |
| **Tático** | Médio prazo (1 a 2 anos) | Chefia de Seção da Biblioteca | Alocação de Recursos e Planos Setoriais |
| **Operacional** | Curto prazo (dias/meses) | Bibliotecários e Analistas | Rotinas, Tarefas e Metas Imediatas |
| **ISO 11620** | Avaliação contínua | Auditoria da Biblioteca | Indicadores quantitativos de desempenho |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Inversão dos Níveis de Planejamento:** Dizer que a elaboração de Procedimentos Operacionais Padrão (POPs) para tombamento de livros é atividade típica do planejamento estratégico. **Gabarito: ERRADO.** Trata-se de planejamento operacional.
- **Eficácia vs. Eficiência:**
  - *Eficiência:* Fazer as coisas com o menor consumo de recursos possível (relação custo-benefício / meios).
  - *Eficácia:* Atingir o objetivo e o resultado esperado, independentemente do custo (fins). O Cebraspe troca sistematicamente esses dois termos.
- **ISO 11620 como Norma de Catalogação:** Afirmar que a ISO 11620 estabelece regras de descrição física de livros. **Gabarito: ERRADO.** A ISO 11620 é estritamente uma norma de **indicadores de desempenho e avaliação de bibliotecas**.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **ALMEIDA, Maria Christina Barbosa de.** *Planejamento de bibliotecas e serviços de informação*. 2. ed. Brasília: Briquet de Lemos, 2005. (A referência clássica sobre planejamento em unidades de informação).
- **MACIEL, Alba Costa; MENDONÇA, Marília Alvarenga Rocha.** *Bibliotecas como organizações*. Rio de Janeiro: Interciência, 2000.
- **ISO 11620:2014.** *Information and documentation — Library performance indicators*. Genebra: ISO, 2014.
- **LANCASTER, F. Wilfrid.** *Avaliação de serviços de bibliotecas*. Brasília: Briquet de Lemos, 1996.
- **CHIAVENATO, Idalberto.** *Administração geral e pública*. 5. ed. Rio de Janeiro: Elsevier, 2018.""",

    'sub-5-2': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
O **Marketing da Informação**, o **CRM (*Customer Relationship Management*)** e a **Inteligência Informacional** transformam bibliotecas de meros depósitos em centros estratégicos de valor:
1. **Marketing de Serviços de Informação (Sueli Angélica do Amaral):**
   - Não se resume a publicidade ou propaganda. É uma filosofia gerencial orientada para a satisfação das necessidades de informação do usuário.
   - **Os 4 Ps Clássicos Adaptados à Informação:** Produto (serviços de valor agregado), Preço (custo de acesso, tempo despendido pelo usuário e esforço cognitivo), Praça (canais físicos e digitais de distribuição) e Promoção (comunicação, oficinas e divulgação ativa).
   - **Marketing de Relacionamento (CRM):** Gestão contínua da interação com os clientes/usuários para fidelização, personalização e antecipação de demandas futuras.
2. **Produtos e Serviços de Informação Especializada:**
   - Boletins de Alerta e Clipping Temático, Dossiês Legislativos, Guias de Fontes, Sumários Correntes e Análises de Tendências.
3. **Inteligência Competitiva / Inteligência Informacional (Tarapanoff):**
   - Processo sistemático de coleta, tratamento, análise e disseminação de informações acionáveis sobre o ambiente externo e interno para subsidiar decisões de alto nível.
   - **Ciclo da Inteligência:** Planejamento/Direção $\\to$ Coleta de dados $\\to$ Processamento $\\to$ Análise e Produção de Conhecimento $\\to$ Disseminação ao tomador de decisão.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Elaboração de Dossiê Temático para Votação de PEC):** Diante da votação iminente de uma PEC no Plenário, a equipe de bibliotecários do CEDI prepara proativamente um **Dossiê Legislativo de Inteligência Informacional** contendo: histórico da tramitação, legislação comparada em 10 países democráticos, notas técnicas e as decisões recentes do STF. Esse produto é entregue aos líderes partidários antes do debate.
- **Cenário 2 (CRM no Atendimento às Comissões Parlamentares):** A Biblioteca Pedro Aleixo adota um sistema de CRM para mapear as preferências dos presidentes e relatores das 30 comissões permanentes. O sistema registra quais autores e temas cada comissão mais requisita, permitindo personalizar alertas prévios sempre que uma nova obra correlata é adquirida.
- **Cenário 3 (O "Preço" do Serviço de Informação na Câmara):** Embora o atendimento da biblioteca seja gratuito financeiramente para o parlamentar, o bibliotecário compreende que o "preço" percebido pelo deputado é o **tempo de resposta**. Se a informação demorar 2 horas além da ordem do dia, o custo foi excessivo e o serviço fracassou.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Conceito / Ferramenta | Foco Central | Papel do Bibliotecário | Exemplo Típico |
| :--- | :--- | :--- | :--- |
| **Marketing da Informação** | Orientação para necessidades do usuário | Diagnosticar demandas e formatar serviços | Análise dos 4 Ps do serviço de referência |
| **CRM (Relacionamento)** | Fidelização e personalização contínua | Manter histórico e preferências de uso | Perfis personalizados para gabinetes |
| **Inteligência Informacional** | Informação acionável para decisão | Analisar tendências e gerar sínteses | Dossiê comparativo para subsídio a votação |
| **Clipping / Alerta** | Disseminação corrente de notícias | Filtrar e compilar mídia temática | Resumo diário de notícias parlamentares |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Redução do Marketing à Publicidade:** O Cebraspe formula itens dizendo que *"o marketing em bibliotecas limita-se à confecção de cartazes e avisos promocionais para atração de público"*. **Gabarito: ERRADO.** O marketing é processo gerencial completo de planejamento, segmentação de mercado, análise de custo-benefício e avaliação.
- **Conceito de Preço em Serviços Públicos:** Afirmar que, por ser pública e gratuita, a biblioteca não tem o elemento "preço" no composto de marketing. **Gabarito: ERRADO.** O preço inclui custos intangíveis: tempo gasto, deslocamento, esforço intelectual e barreiras de acesso.
- **Inteligência Competitiva como Espionagem:** Dizer que a inteligência corporativa envolve apropriação ilícita de informações sigilosas. **Gabarito: ERRADO.** O ciclo de inteligência baseia-se exclusivamente em métodos éticos e fontes legítimas de informação aberta (*OSINT*).

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **AMARAL, Sueli Angelica do.** *Marketing da informação: entre a teoria e a prática*. Brasília: Thesaurus, 2011. (A principal autoridade brasileira em marketing da informação).
- **TARAPANOFF, Kira (Org.).** *Inteligência, informação e conhecimento em corporações*. Brasília: IBICT; UNESCO, 2006. (Obra canônica sobre inteligência competitiva no Brasil).
- **KOTLER, Philip; KELLER, Kevin Lane.** *Administração de marketing*. 14. ed. São Paulo: Pearson, 2012.
- **CÂMARA DOS DEPUTADOS.** *Produtos de Informação e Pesquisa da Biblioteca Pedro Aleixo*. Brasília: CEDI, 2022.
- **DAVENPORT, Thomas H.** *Ecologia da informação: por que só a tecnologia não basta para o sucesso na era da informação*. São Paulo: Futura, 1998.""",

    'sub-5-3': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Política de Desenvolvimento de Coleções (PDC)** é o instrumento normativo que orienta o crescimento planejado, harmônico e sustentável do acervo:
1. **O Modelo Canônico de Waldomiro Vergueiro (6 Etapas Cíclicas):**
   - O desenvolvimento de coleções é um processo ininterrupto e circular composto por:
     1. **Estudo da Comunidade:** Diagnóstico das necessidades reais e potenciais dos usuários.
     2. **Políticas de Seleção:** Definição formal dos critérios para inclusão de materiais no acervo.
     3. **Aquisição:** Processos operacionais de compra, doação ou permuta.
     4. **Desbaste (*Weeding* / Descarte / Remanejamento):** Retirada planejada de materiais obsoletos, danificados ou duplicados para depósito ou expurgo.
     5. **Avaliação da Coleção:** Mensuração quantitativa e qualitativa do acervo (uso, cobertura e obsolescência).
     6. **Preservação e Conservação:** Salvaguarda física e digital contínua da coleção.
2. **Critérios Canônicos de Seleção (Vergueiro):**
   - *Ligados ao assunto:* Adequação ao perfil institucional, profundidade, autoridade e atualidade.
   - *Ligados aos usuários:* Demanda real, nível educacional e acessibilidade.
   - *Ligados ao documento:* Custo financeiro, idioma, qualidade física/gráfica, facilidade de manuseio e formato.
3. **Formas de Aquisição:**
   - **Compra:** Exige processo licitatório no setor público (Lei Federal nº 14.133/2021).
   - **Doação:** Exige triagem rigorosa com critérios prévios para não transformar a biblioteca em "depósito de descarte alheio". Política de doação deve prever o direito de recusa e de livre destinação.
   - **Permuta:** Troca de publicações oficiais e institucionais entre bibliotecas parceiras (muito forte na Rede RVBI).
4. **Desbaste vs. Descarte:**
   - **Desbaste:** Ação genérica de retirar materiais do acervo principal de acesso direto. Pode resultar em:
     - *Remanejamento:* Envio para depósito fechado de baixa circulação.
     - *Descarte:* Eliminação física definitiva (doação a outras entidades, reciclagem ou destruição).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Comissão de Seleção e Política de Doação na Biblioteca Pedro Aleixo):** Um parlamentar doa à biblioteca 500 volumes de literatura geral de seu acervo particular. O bibliotecário aplica a **Política de Desenvolvimento de Coleções da Câmara**: como o foco temático da biblioteca é Ciências Sociais e Direito, os volumes de literatura são formalmente agradecidos e redirecionados para bibliotecas comunitárias escolares do DF, preservando o espaço das estantes para a coleção legislativa.
- **Cenário 2 (Desbaste de Obras de Legislação Obsoleta):** Em Direito, a revogação de leis torna manuais desatualizados um risco grave se consultados por engano. O bibliotecário realiza o **desbaste sistemático**: exemplares de Códigos Civis comentados da década de 1970 são remanejados para o depósito de reserva técnica histórica, mantendo no acervo aberto apenas as edições atualizadas com jurisprudência vigente.
- **Cenário 3 (Aquisição por Permuta na Rede RVBI):** A Biblioteca da Câmara edita 1.000 exemplares da *Constituição Anotada*. Utiliza 300 para o acervo próprio e envia os demais para o Senado Federal, STF, TCU e TST por meio do **programa cooperativo de permuta da RVBI**, recebendo em troca publicações oficiais dessas instituições com custo financeiro zero de aquisição.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Etapa / Modalidade | Finalidade Principal | Instrumento / Ação Chave | Regra de Ouro no Concurso |
| :--- | :--- | :--- | :--- |
| **Seleção** | Decidir o que deve entrar | Critérios formais da PDC escrita | Selecionar não é comprar; é decisão intelectual |
| **Aquisição** | Obter material selecionado | Compra, Doação ou Permuta | Doação exige política escrita com direito de recusa |
| **Desbaste** | Aliviar espaço e atualizar | Remanejar para depósito | Ação genérica; nem todo desbaste é destruição |
| **Descarte** | Destinação definitiva | Expurgo, doação externa ou reciclagem | Bens permanentes históricos nunca são descartados |
| **Avaliação** | Medir valor e uso da coleção | Métodos centrados na coleção vs. no usuário | Guia a revisão cíclica da PDC |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Aceitação Obrigatória de Doações:** O Cebraspe adora afirmar que *"por ser órgão público, a biblioteca da Câmara é obrigada a aceitar e incorporar ao acervo toda e qualquer doação recebida de deputados ou cidadãos"*. **Gabarito: ERRADO.** A aceitação incondicional fere as boas práticas de desenvolvimento de coleções; a biblioteca deve ter critérios rígidos de triagem e direito de destinação.
- **Descarte de Obras Raras e Históricas:** Afirmar que livros raros de baixa circulação podem ser descartados e destruídos para abrir espaço. **Gabarito: ERRADO.** Obras raras, patrimoniais e documentos de valor permanente são protegidos por lei e inalienáveis.
- **Natureza Cíclica do Desenvolvimento de Coleções:** Dizer que a PDC é um documento estático feito uma única vez. **Gabarito: ERRADO.** O modelo de Vergueiro é expressamente dinâmico, contínuo e cíclico.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **VERGUEIRO, Waldomiro.** *Desenvolvimento de coleções*. São Paulo: Polis; APB, 1989. (A obra seminal e mais cobrada sobre o tema em concursos brasileiros).
- **WEITZEL, Simone da Rocha.** *Elaboração de uma política de desenvolvimento de coleções em bibliotecas universitárias*. 2. ed. Rio de Janeiro: Interciência, 2013.
- **EVANS, G. Edward; SAPONARO, Margaret Zarnosky.** *Developing Library and Information Center Collections*. 6. ed. Englewood: Libraries Unlimited, 2012.
- **CÂMARA DOS DEPUTADOS.** *Política de Desenvolvimento de Coleções da Biblioteca Pedro Aleixo*. Brasília: CEDI, 2018.
- **LANCASTER, F. Wilfrid.** *Avaliação de serviços de bibliotecas*. Brasília: Briquet de Lemos, 1996. (Capítulo sobre avaliação de coleções).""",

    'sub-5-4': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Gestão da Informação (GI)** e a **Gestão do Conhecimento (GC)** integram pessoas, processos e tecnologia para gerar valor organizacional:
1. **Diferença Conceitual Canônica:**
   - **Gestão da Informação (GI):** Gerencia fluxos, suportes, estoques, dados e registros explícitos formais (estruturados e recuperáveis).
   - **Gestão do Conhecimento (GC):** Gerencia o contexto social, o aprendizado humano, as competências e as condições organizacionais para que as pessoas criem, compartilhem e apliquem conhecimento.
2. **Conhecimento Tácito vs. Explícito (Polanyi / Nonaka & Takeuchi):**
   - **Tácito:** Pessoal, intuitivo, subjetivo, difícil de formalizar e comunicar verbalmente, enraizado na experiência e nos modelos mentais (*know-how*, intuição).
   - **Explícito:** Codificado, formal, articulado em palavras, números, diagramas, manuais e bases de dados (*know-what*).
3. **O Modelo SECI de Criação do Conhecimento (Espiral do Conhecimento de Nonaka & Takeuchi):**
   - **Socialização (Tácito $\\to$ Tácito):** Compartilhamento de experiências diretas, mentoria, observação e prática conjunta (sem uso de manuais).
   - **Externalização (Tácito $\\to$ Explícito):** Expressão do conhecimento tácito em conceitos explícitos, metáforas, modelos e documentos formais (é a chave da criação do conhecimento).
   - **Combinação (Explícito $\\to$ Explícito):** Recombinação, síntese e sistematização de diferentes corpos de conhecimento explícito (ex.: cruzar relatórios e bancos de dados para gerar um novo plano).
   - **Internalização (Explícito $\\to$ Tácito):** O indivíduo assimila o conhecimento explícito na prática diária (*learning by doing*), enriquecendo seu repertório tácito.
4. **O Modelo dos Três Círculos de Choo (*The Knowing Organization*):**
   - A organização usa a informação em três arenas estratégicas: **Construção de Sentido (*Sense Making*)**, **Criação de Conhecimento** e **Tomada de Decisão**.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Socialização e Mentoria na Consultoria e na Biblioteca):** Um analista legislativo veterano que domina as peculiaridades regimentais do plenário senta-se ao lado de um bibliotecário recém-empossado para orientá-lo sobre como antecipar demandas de votação. Esse processo de aprendizado direto sem manuais é a **Socialização (Tácito $\\to$ Tácito)** de Nonaka & Takeuchi.
- **Cenário 2 (Externalização na Produção de POPs do CEDI):** O bibliotecário mais experiente decide codificar seu método de restauração de livros raros em um *Procedimento Operacional Padrão (POP)* ricamente ilustrado. Ele operou a **Externalização (Tácito $\\to$ Explícito)**, transformando sua intuição técnica em patrimônio formal da Câmara.
- **Cenário 3 (Combinação na Produção de Relatórios Orçamentários):** A equipe do CEDI reúne os dados abertos de execução orçamentária da Câmara, cruza com as publicações do Senado e gera um *painel de business intelligence* comparativo. Isso é **Combinação (Explícito $\\to$ Explícito)**.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Modo de Conversão SECI | Origem $\\to$ Destino | Ação Típica na Prática | Exemplo Cebraspe |
| :--- | :--- | :--- | :--- |
| **Socialização** | Tácito $\\to$ Tácito | Mentoria, tutoria, diálogo direto | Mestre e aprendiz na bancada de conservação |
| **Externalização** | Tácito $\\to$ Explícito | Escrever manual, criar metáfora, diagramar | Registrar experiência prática em um manual |
| **Combinação** | Explícito $\\to$ Explícito | Cruzar bases de dados, compilar relatórios | Sintetizar dados de três pesquisas em um artigo |
| **Internalização** | Explícito $\\to$ Tácito | *Learning by doing*, prática profissional | Ler um manual e transformar em reflexo diário |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Inversão dos Modos SECI:** A banca costuma dizer que *"a Socialização ocorre quando o profissional lê um manual técnico e assimila seu conteúdo"*. **Gabarito: ERRADO.** Ler manual e assimilar é **Internalização** (Explícito $\\to$ Tácito). A Socialização é sempre Tácito $\\to$ Tácito.
- **Armazenamento de Conhecimento Tácito em Computadores:** Dizer que sistemas de TI armazenam conhecimento tácito. **Gabarito: ERRADO.** Computadores só armazenam dados e informações explícitas; conhecimento tácito reside exclusivamente no cérebro humano.
- **Sinonímia entre GI e GC:** Tratar Gestão da Informação e Gestão do Conhecimento como sinônimos perfeitos. **Gabarito: ERRADO.** GI cuida de artefatos explícitos; GC cuida de pessoas, aprendizado e ambiente corporativo.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **NONAKA, Ikujiro; TAKEUCHI, Hirotaka.** *Criação de conhecimento na empresa: como as empresas japonesas geram a dinâmica da inovação*. Rio de Janeiro: Elsevier, 1997. (A teoria fundamental de conhecimento tácito/explícito e espiral SECI).
- **CHOO, Chun Wei.** *A organização do conhecimento: como as organizações usam a informação para criar significado, construir conhecimento e tomar decisões*. São Paulo: Senac São Paulo, 2003.
- **DAVENPORT, Thomas H.; PRUSAK, Laurence.** *Conhecimento empresarial: como as organizações gerenciam o seu capital intelectual*. Rio de Janeiro: Campus, 1998.
- **POLANYI, Michael.** *The Tacit Dimension*. New York: Doubleday, 1966. (O autor pioneiro do conceito de conhecimento tácito).
- **TARAPANOFF, Kira.** *Gestão da informação e do conhecimento*. Brasília: Thesaurus, 2001.""",

    'sub-6-1': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
As **Bibliotecas Digitais**, a **Arquitetura da Informação** e a **Usabilidade** formam a tríade da interface dos sistemas de informação modernos:
1. **Diferenças Conceituais Canônicas (Cunha, 2008):**
   - **Biblioteca Tradicional:** Coleção predominantemente impressa em espaço físico tangível, processos manuais ou semiautomatizados.
   - **Biblioteca Eletrônica:** Utiliza sistemas de computadores para automatizar processos internos (catalogação, circulação, empréstimo), mas a coleção principal ainda pode ser física em papel.
   - **Biblioteca Virtual:** Não possui espaço físico e nem acervo próprio; é uma rede lógica que interliga acervos remotos distribuídos via internet.
   - **Biblioteca Digital:** Possui acervo nativamente digital ou digitalizado, com tratamento técnico padronizado (metadados), armazenamento digital seguro, preservação a longo prazo e serviços acessíveis online de ponta a ponta.
2. **Arquitetura da Informação (Rosenfeld, Morville e Arango):**
   - A arte e a ciência de organizar, estruturar e rotular sistemas de informação digitais para apoiar a usabilidade e a encontrabilidade (*findability*).
   - **Os 4 Sistemas Fundamentais da AI:**
     - *Sistema de Organização:* Como a informação é estruturada (hierárquica, cronológica, alfabética, facetada).
     - *Sistema de Rotulagem:* Como os botões, links e categorias são nomeados (evitar jargões técnicos incompreensíveis ao usuário comum).
     - *Sistema de Navegação:* Como o usuário se movimenta na interface (global, local, contextual, migalhas de pão / *breadcrumbs*).
     - *Sistema de Busca:* Mecanismos de busca, filtros, facetas e ordenação de resultados.
3. **Usabilidade e Heurísticas de Jakob Nielsen (1994):**
   - Medida da facilidade, eficácia e satisfação com que um usuário opera um sistema.
   - **10 Heurísticas de Nielsen:** 1. Visibilidade do estado do sistema; 2. Correspondência entre o sistema e o mundo real; 3. Controle e liberdade do usuário (botão desfazer); 4. Consistência e padrões; 5. Prevenção de erros; 6. Reconhecimento em vez de memorização; 7. Flexibilidade e eficiência de uso (atalhos); 8. Design estético e minimalista; 9. Auxílio aos usuários para reconhecer, diagnosticar e recuperar-se de erros; 10. Ajuda e documentação.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (A BDCam como Biblioteca Digital por Excelência):** A Biblioteca Digital da Câmara dos Deputados (BDCam) opera sobre DSpace. Os documentos nascem digitais (ou foram digitalizados com OCR), recebem metadados Dublin Core, possuem URNs e identificadores persistentes (Handle/DOI), e o usuário pesquisa, visualiza e baixa em PDF/A sem precisar ir ao prédio da Câmara. Trata-se de uma **biblioteca digital pura** (Cunha).
- **Cenário 2 (Arquitetura da Informação no Portal da Câmara):** Ao redesenhar a página de Proposições Legislativas, os bibliotecários aplicam o **Sistema de Navegação por Facetas**: o cidadão filtra por "Ano", "Tipo de Proposição (PL, PEC, MPV)" e "Situação da Tramitação", navegando com o suporte de *breadcrumbs* (migalhas de pão) no topo da página.
- **Cenário 3 (Heurística de Prevenção de Erros no Formulário de Pesquisa):** O sistema de busca do portal avisa preventivamente quando o usuário digita termos booleanos com sintaxe errada ou caracteres inválidos, impedindo que a busca retorne uma página de erro genérica. Isso aplica diretamente a **Heurística nº 5 de Nielsen (Prevenção de Erros)**.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Tipo de Biblioteca | Suporte da Coleção | Automação de Processos | Espaço Físico |
| :--- | :--- | :--- | :--- |
| **Tradicional** | Físico (papel) | Mínima / Manual | Obrigatório |
| **Eletrônica** | Misto (físico preponderante) | Alta (softwares de gestão) | Obrigatório |
| **Digital** | Digital (bits/arquivos com metadados) | Completa no ciclo digital | Pode ou não ter sede física |
| **Virtual** | Disperso em redes remotas | Baseada em links e hipertextos | Sem espaço físico próprio |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Biblioteca Digital vs. Virtual:** A banca afirma que *"a biblioteca virtual é aquela que possui um acervo próprio digitalizado armazenado em seus próprios servidores locais"*. **Gabarito: ERRADO.** A biblioteca que possui acervo digital próprio com metadados é a **Biblioteca Digital**; a biblioteca virtual é uma metáfora de rede que aponta para acervos alheios.
- **Heurística de Reconhecimento vs. Memorização:** O Cebraspe troca os termos dizendo que o usuário deve ser estimulado a memorizar comandos complexos. **Gabarito: ERRADO.** A heurística de Nielsen preconiza **reconhecimento em vez de memorização** (elementos visíveis e autoexplicativos).
- **Arquitetura da Informação Limitada ao Design Visual:** Dizer que AI cuida apenas das cores e estética do site. **Gabarito: ERRADO.** AI cuida da estrutura lógica, taxonomia, rotulagem e navegação.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **CUNHA, Murilo Bastos da.** Das bibliotecas convencionais às digitais: diferenças e convergências. *Perspectivas em Ciência da Informação*, v. 13, n. 1, p. 2-17, 2008. (O artigo mais citado sobre a evolução das tipologias de biblioteca).
- **ROSENFELD, Louis; MORVILLE, Peter; ARANGO, Jorge.** *Information Architecture: For the Web and Beyond*. 4. ed. Sebastopol: O'Reilly Media, 2015. (A bíblia mundial de Arquitetura da Informação).
- **NIELSEN, Jakob.** *Usability Engineering*. San Francisco: Morgan Kaufmann, 1994. (A fonte canônica das 10 heurísticas de usabilidade).
- **ROWLEY, Jennifer.** *A biblioteca eletrônica*. Brasília: Briquet de Lemos, 2002.
- **KRUG, Steve.** *Não me faça pensar: uma abordagem de bom senso à usabilidade na web*. 2. ed. Rio de Janeiro: Alta Books, 2008.""",

    'sub-6-2': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
Os **Repositórios Institucionais (RI)**, os softwares de automação de bibliotecas (SIGB) e os protocolos de comunicação garantem o Acesso Aberto e a interoperabilidade global:
1. **O que é um Repositório Institucional (RI):**
   - Sistema de informação digital que reúne, organiza, preserva e dissemina a produção intelectual, técnica e científica de uma instituição em regime de **Acesso Aberto (*Open Access*)**.
   - Promove a visibilidade da produção da casa, estimula o reuso e assegura a custódia a longo prazo da memória institucional.
2. **Softwares Canônicos de Bibliotecas:**
   - **DSpace:** Software livre de código aberto líder mundial para repositórios digitais e institucionais, mantido pela DuraSpace/Lyrasis. Suporta Dublin Core, OAI-PMH, identificadores persistentes e modelo OAIS.
   - **Koha / Aleph / Alma:** Sistemas Integrados de Gestão de Bibliotecas (SIGB) para circulação, catalogação MARC 21, aquisição e OPAC.
3. **Protocolo OAI-PMH (*Open Archives Initiative Protocol for Metadata Harvesting* v2.0):**
   - Protocolo baseado em HTTP e XML para **coleta automatizada de metadados** entre repositórios na web.
   - **Papéis:**
     - *Data Provider (Provedor de Dados):* O repositório institucional que expõe seus metadados para o mundo.
     - *Service Provider (Provedor de Serviços):* O agregador que coleta (*harvesting*) os metadados de múltiplos repositórios para criar portais de busca unificados (ex.: Oasisbr do IBICT).
   - **Os 6 Verbos Canônicos do OAI-PMH:**
     1. `Identify` (Retorna dados gerais do repositório).
     2. `ListMetadataFormats` (Lista formatos suportados; **o Dublin Core Simples é obrigatório**!).
     3. `ListSets` (Lista as coleções/conjuntos temáticos).
     4. `ListIdentifiers` (Lista os cabeçalhos de identificadores dos registros).
     5. `ListRecords` (Coleta em lote os metadados completos dos registros).
     6. `GetRecord` (Recupera os metadados completos de um único registro específico).
4. **Protocolo Z39.50 e SRU/SRW:**
   - Protocolo cliente-servidor para busca federada e intercâmbio de registros bibliográficos completos (MARC 21) diretamente entre catálogos de bibliotecas.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (A BDCam como Data Provider OAI-PMH):** A Biblioteca Digital da Câmara opera o DSpace. Periodicamente, o portal *Oasisbr* do IBICT executa o verbo OAI-PMH `ListRecords` no endpoint da BDCam, coletando os metadados de todas as teses e estudos técnicos produzidos por servidores da Câmara para exibi-los no portal nacional de ciência aberta.
- **Cenário 2 (Catalogação Cooperativa via Protocolo Z39.50 na RVBI):** O catalogador da Biblioteca Pedro Aleixo precisa registrar uma obra estrangeira recém-chegada. Ele abre o módulo de catalogação e dispara uma consulta Z39.50 aos servidores da *Library of Congress* (EUA). Em dois segundos, o registro MARC 21 completo é importado para o catálogo da Câmara sem necessidade de digitação manual.
- **Cenário 3 (Organização de Comunidades e Coleções no DSpace da Câmara):** No DSpace da BDCam, o bibliotecário estrutura a hierarquia: Comunidade *Processo Legislativo* $\\to$ Subcomunidade *Comissões Permanentes* $\\to$ Coleção *Relatórios Finais de CPI*. O verbo OAI-PMH `ListSets` reflete exatamente essa árvore para os sistemas coletores.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Protocolo / Padrão | Função Principal | Tecnologia Base | Formato Obrigatório |
| :--- | :--- | :--- | :--- |
| **OAI-PMH** | Coleta automatizada de metadados | HTTP + XML | **Dublin Core Simples (oai_dc)** |
| **Z39.50** | Busca remota e cópia de registros bibliográficos | TCP/IP (Cliente-Servidor) | Registros MARC 21 / UNIMARC |
| **SRU / SRW** | Evolução web moderna do Z39.50 | HTTP / REST / SOAP | XML (MODS, Dublin Core) |
| **DSpace** | Software de Repositório Institucional | Java, PostgreSQL, Solr | Dublin Core qualificado / OAI-PMH |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **O Formato Obrigatório no OAI-PMH:** O Cebraspe pergunta se um repositório OAI-PMH pode optar por não disponibilizar o Dublin Core Simples. **Gabarito: ERRADO.** O esquema `oai_dc` (Dublin Core Simples) é **mandatório e obrigatório** em qualquer implementação OAI-PMH no mundo. Outros formatos (MODS, MARCXML) são opcionais.
- **OAI-PMH Coleta os Arquivos em PDF:** A banca afirma que o OAI-PMH serve para baixar em lote os arquivos em PDF dos livros. **Gabarito: ERRADO.** O OAI-PMH é um protocolo estritamente para **coleta de metadados** (*metadata harvesting*); o download dos arquivos em texto completo é feito via HTTP comum.
- **Os 6 Verbos do OAI-PMH:** A banca inventa verbos falsos como `DeleteRecord` ou `UpdateRecord`. **Gabarito: ERRADO.** Os únicos 6 verbos válidos são: *Identify, ListMetadataFormats, ListSets, ListIdentifiers, ListRecords e GetRecord*.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **OPEN ARCHIVES INITIATIVE.** *The Open Archives Initiative Protocol for Metadata Harvesting (OAI-PMH) — Version 2.0*. OAI, 2015. (A especificação técnica canônica do protocolo).
- **LEITE, Fernando César Lima.** *Como gerenciar e ampliar a visibilidade da informação científica brasileira: repositórios institucionais de acesso aberto*. Brasília: IBICT, 2009. (Obra fundamental sobre repositórios no Brasil).
- **ANSI/NISO Z39.50-2003.** *Information Retrieval (Z39.50): Application Service Definition & Protocol Specification*. Bethesda: NISO Press, 2003.
- **SMITH, MacKenzie et al.** DSpace: an open source dynamic digital repository. *D-Lib Magazine*, v. 9, n. 1, 2003. (Artigo clássico de fundação da arquitetura DSpace).
- **KURAMOTO, Hélio.** Informação científica: proposta de um novo modelo para o Brasil. *Ciência da Informação*, v. 35, n. 2, p. 91-102, 2006.""",

    'sub-6-3': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Preservação Digital** visa garantir a integridade, confiabilidade e acessibilidade a longo prazo da informação digital diante da obsolescência tecnológica de hardware e software:
1. **O Modelo de Referência OAIS (*Open Archival Information System* / ISO 14721):**
   - Padrão arquitetural mundial para sistemas e repositórios de preservação digital de longo prazo.
   - **Os Três Pacotes de Informação Canônicos do OAIS:**
     - **SIP (*Submission Information Package*):** Pacote de submissão entregue pelo produtor/autor ao repositório.
     - **AIP (*Archival Information Package*):** Pacote de arquivamento preservado no núcleo seguro do repositório, com metadados de preservação completos e fixidez. É a versão mestre definitiva!
     - **DIP (*Dissemination Information Package*):** Pacote de disseminação entregue ao usuário final quando ele consulta ou baixa o documento (geralmente versão mais leve para web).
2. **Estratégias de Preservação Digital (Informativas e Tecnológicas):**
   - **Migração:** Conversão periódica de dados de um formato em obsolescência para um formato mais novo e padronizado (ex.: converter Word .doc para PDF/A-1a). É a estratégia mais adotada mundialmente.
   - **Emulação:** Recriação por software do ambiente de hardware e sistema operacional original para permitir a execução do arquivo antigo sem modificar seus bits originais.
   - **Encapsulamento:** Agrupamento do objeto digital juntamente com todos os seus metadados, especificações técnicas e softwares decodificadores em um pacote único.
   - **Refrescamento (*Refreshing*):** Cópia física dos bits de uma mídia física que se desgasta para uma mídia nova do mesmo tipo ou mais moderna (ex.: de disco magnético antigo para fita LTO).
3. **Fixidez, Integridade e Formatos Abertos:**
   - **Fixidez (*Fixity*):** Garantia matemática de que o arquivo digital não sofreu corrupção de bits, exclusão ou alteração fraudulenta. Medida por funções hash criptográficas (MD5, SHA-256).
   - **Formatos Abertos Recomendados pela ISO/CONARQ:** PDF/A (ISO 19005 para texto), TIFF não compactado (ISO 12234 para imagens), CSV/XML para dados tabulares, ODF/ODT para textos.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Ciclo SIP $\\to$ AIP $\\to$ DIP no Repositório da BDCam):** O setor de comissões entrega a gravação bruta e as transcrições de uma CPI em formato Word e WAV (isto é o **SIP**). O bibliotecário do CEDI valida o pacote, converte as transcrições para PDF/A-1a, gera hashes SHA-256 e armazena na área de preservação profunda segura (isto é o **AIP**). Quando o cidadão acessa o portal da Câmara para consultar o relatório, o sistema gera dinamicamente um arquivo leve com marca d'água institucional (isto é o **DIP**).
- **Cenário 2 (Auditoria Periódica de Fixidez com Hashes SHA-256):** A cada seis meses, um script automatizado de preservação digital lê todos os arquivos mestres da BDCam e recalcula seus hashes. Se o hash SHA-256 calculado hoje for idêntico ao armazenado no metadado PREMIS no momento da admissão, está formalmente comprovada a **fixidez e autenticidade** da memória legislativa perante a sociedade.
- **Cenário 3 (Estratégia de Migração para Evitar Obsolescência):** Em 2002, muitos discursos parlamentares foram salvos em disquetes no formato WordPerfect. A equipe da biblioteca adota a estratégia de **migração de formato**, convertendo os arquivos para o padrão aberto ISO PDF/A antes que os programas de leitura deixem de existir no mercado.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Pacote OAIS / Estratégia | Significado / Objetivo | Onde Atua | Exemplo Concreto Cebraspe |
| :--- | :--- | :--- | :--- |
| **SIP** | Submissão | Entrada no repositório | Arquivo enviado pelo autor/gabinete |
| **AIP** | Arquivamento / Preservação | Núcleo de guarda segura | Arquivo mestre TIFF/PDF/A com PREMIS |
| **DIP** | Disseminação / Acesso | Saída para o usuário | PDF leve baixado pelo cidadão na web |
| **Migração** | Converter formato de arquivo | Objeto digital | Converter .doc para PDF/A |
| **Emulação** | Recriar o sistema computacional | Ambiente de execução | Emular MS-DOS para rodar software de 1990 |
| **Fixidez (Hash)** | Verificar alteração de bits | Segurança da informação | Cálculo de hash SHA-256 |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Inversão dos Pacotes OAIS:** O Cebraspe afirma que o pacote entregue ao usuário que pesquisa no site da biblioteca é o AIP. **Gabarito: ERRADO.** O pacote entregue ao usuário final é sempre o **DIP (*Dissemination Information Package*)**; o AIP é o pacote arquivístico mestre de guarda interna.
- **Preservação Digital vs. Mero Backup:** Dizer que fazer backup diário dos servidores é suficiente para garantir a preservação digital a longo prazo. **Gabarito: ERRADO.** O backup protege contra perda acidental de dados no curto prazo, mas não combate a obsolescência de formatos de arquivos e mídias ao longo de décadas.
- **Emulação Altera os Bits do Arquivo:** Afirmar que na emulação os arquivos antigos são convertidos e modificados estruturalmente. **Gabarito: ERRADO.** Na emulação os bits originais do arquivo permanecem intocados; o que muda é o software emulador que imita o computador antigo.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **ISO 14721:2012 (CCSDS 650.0-M-2).** *Space data and information transfer systems — Open archival information system (OAIS) — Reference model*. Genebra: ISO, 2012. (A norma mundial de preservação digital).
- **CONSELHO NACIONAL DE ARQUIVOS (CONARQ).** *Diretrizes para a Presunção de Autenticidade de Documentos Arquivísticos Digitais*. Rio de Janeiro: CONARQ, 2015.
- **ARELLANO, Miguel Ángel Mardero.** Critérios para a preservação digital da informação científica. *Ciência da Informação*, v. 33, n. 2, p. 15-27, 2004. (Artigo canônico do IBICT mais cobrado em provas).
- **THOMAZ, Katia Pires; SOARES, Antônio José.** A preservação de documentos eletrônicos: uma visão contemporânea. *Ciência da Informação*, v. 33, n. 1, p. 86-92, 2004.
- **PREMIS EDITORIAL COMMITTEE.** *PREMIS Data Dictionary for Preservation Metadata*. Version 3.0. Library of Congress, 2015.""",

    'sub-6-4': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A aplicação da **Inteligência Artificial (IA)** na Biblioteconomia e nos Serviços de Informação Legislativa redefine a atuação do profissional da informação:
1. **Conceitos Fundamentais de IA:**
   - Capacidade de sistemas computacionais de simular capacidades humanas como aprendizado (*Machine Learning*), raciocínio, percepção, processamento de linguagem natural (PLN) e tomada de decisão.
   - **IA Tradicional (Simbólica/Baseada em Regras):** Sistemas especialistas baseados em árvores lógicas "SE... ENTÃO".
   - **Aprendizado de Máquina (*Machine Learning* - ML):** Algoritmos que aprendem padrões a partir de dados históricos sem serem explicitamente programados.
     - *Supervisionado:* Treinado com dados rotulados (ex.: documentos já classificados por bibliotecários).
     - *Não Supervisionado:* Algoritmos agrupam dados não rotulados por similaridade matemática (ex.: agrupamento/clusterização de textos).
     - *Por Reforço:* O agente aprende por recompensas e penalidades ao interagir com um ambiente.
2. **Modelos de Linguagem e IA Generativa (LLMs):**
   - Modelos baseados na arquitetura *Transformer* treinados em corpora textuais massivos para geração, sumarização e tradução textual.
   - Desafios críticos na informação pública: **Alucinação** (geração plausível de dados factualmente falsos ou inventados), **Opacidade / Caixa-Preta** e **Vieses Algorítmicos**.
3. **Aplicações Canônicas em Bibliotecas:**
   - Catalogação e indexação preditiva assistida; Reconhecimento Óptico de Caracteres (OCR) e Reconhecimento de Textos Manuscritos (HTR); Chatbots inteligentes de atendimento de referência; Sumarização de relatórios técnicos e detecção de duplicidades normativas.
4. **Diretrizes Éticas da IFLA para IA:**
   - Transparência, explicabilidade dos algoritmos, governança de dados, centralidade humana (*human-in-the-loop*), privacidade e combate à desinformação.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Classificação Automática Preliminar de Proposições):** Diariamente, chegam à Câmara centenas de novos projetos de lei. Um algoritmo de aprendizado supervisionado treinado com 20 anos de catálogo da biblioteca analisa a ementa do projeto e sugere 3 classes CDU e 5 descritores do vocabulário controlado. O bibliotecário valida ou corrige a sugestão (*human-in-the-loop*), reduzindo em 70% o tempo de processamento técnico.
- **Cenário 2 (HTR na Digitalização de Manuscritos da Constituinte de 1823):** A Biblioteca Pedro Aleixo custodia manuscritos históricos com caligrafias cursivas antigas do Império. O bibliotecário aplica algoritmos de **HTR (*Handwritten Text Recognition*)**, convertendo manuscritos ilegíveis em texto digital plenamente pesquisável na BDCam.
- **Cenário 3 (Prevenção de Alucinação em Resumos Legislativos):** A Câmara testa ferramentas de IA generativa para gerar resumos executivos de sessões de comissões. O bibliotecário atua na engenharia de prompts com técnicas de **RAG (*Retrieval-Augmented Generation*)**, forçando o modelo a citar estritamente trechos literais dos anais oficiais, eliminando alucinações e invenções factuais.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Modalidade de ML | Dados de Treinamento | Tarefa Típica em Bibliotecas | Exemplo Cebraspe |
| :--- | :--- | :--- | :--- |
| **Supervisionado** | Rotulados (com gabarito) | Classificação de assunto (CDU) | Classificar livros em categorias conhecidas |
| **Não Supervisionado** | Não rotulados | Agrupamento de tópicos (Topic Modeling) | Identificar temas emergentes em discursos |
| **Por Reforço** | Recompensas / Penalidades | Otimização de rotas de robôs de estante | Robô logístico em armazém de livros |
| **RAG (Retrieval-Augmented)** | Consulta à base fática | Respostas embasadas sem alucinações | Chatbot legislativo que cita a lei exata |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **A Substituição Total do Bibliotecário pela IA:** O Cebraspe sugere que *"sistemas modernos de IA generativa tornam prescindível a intervenção humana na curadoria e catalogação"*. **Gabarito: ERRADO.** Todas as diretrizes éticas (IFLA, UNESCO e EBIA) exigem a supervisão humana ativa (*human-in-the-loop*) para mitigar vieses e erros.
- **Alucinação como Falha de Conexão de Rede:** Definir alucinação em LLMs como queda de sinal de internet ou erro de hardware. **Gabarito: ERRADO.** Alucinação é a geração de respostas sintaticamente perfeitas, mas com dados factualmente incorretos ou fontes inventadas pelo modelo probabilístico.
- **Supervisionado vs. Não Supervisionado:** Trocar os conceitos: afirmar que no aprendizado não supervisionado os dados são previamente etiquetados por especialistas humanos. **Gabarito: ERRADO.** Isso é aprendizado **supervisionado**.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **RUSSELL, Stuart; NORVIG, Peter.** *Inteligência Artificial: uma abordagem moderna*. 4. ed. Rio de Janeiro: GEN LTC, 2022. (A bíblia mundial de IA adotada em concursos de TI e biblioteconomia).
- **IFLA.** *IFLA Statement on Libraries and Artificial Intelligence*. Haia: IFLA, 2020. (Posicionamento oficial das bibliotecas sobre o uso ético da IA).
- **BRASIL.** *Estratégia Brasileira de Inteligência Artificial (EBIA)*. Ministério da Ciência, Tecnologia e Inovações (MCTI), 2021.
- **O'NEIL, Cathy.** *Algoritmos de destruição em massa: como o big data aumenta a desigualdade e ameaça a democracia*. Santo André: Editora Rua do Sabão, 2020.
- **MITCHELL, Tom M.** *Machine Learning*. New York: McGraw-Hill, 1997.""",

    'sub-6-5': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A modelagem de dados e a arquitetura de **Bancos de Dados Relacionais e Não Relacionais (NoSQL)** constituem a espinha dorsal tecnológica dos catálogos modernos:
1. **Modelagem Conceitual (Modelo Entidade-Relacionamento - MER):**
   - Proposto por Peter Chen (1976). Representa o minimundo em:
     - **Entidades:** Objetos do mundo real (ex.: Livro, Autor, Usuário).
     - **Atributos:** Propriedades das entidades (ex.: ISBN, Nome, Matrícula).
     - **Relacionamentos e Cardinalidade:** Associações entre entidades: $1:1$ (um para um), $1:N$ (um para muitos), $N:M$ (muitos para muitos).
2. **Modelo Relacional (Edgar F. Codd, 1970):**
   - Dados organizados em tabelas bidimensionais (**relações**), compostas por linhas (**tuplas**) e colunas (**atributos**).
   - **Chave Primária (*Primary Key* - PK):** Atributo único e não nulo que identifica exclusivamente cada tupla na tabela.
   - **Chave Estrangeira (*Foreign Key* - FK):** Atributo que estabelece a integridade referencial apontando para a chave primária de outra tabela.
   - **Normalização (1FN, 2FN, 3FN):** Técnica sistemática para eliminar redundâncias e evitar anomalias de inserção, alteração e exclusão.
3. **Propriedades ACID nos Bancos Relacionais:**
   - **Atomicidade:** A transação executa tudo ou nada; se falhar no meio, é desfeita (*rollback*).
   - **Consistência:** Mantém as regras de integridade do banco válidas antes e após a transação.
   - **Isolamento:** Transações simultâneas não interferem umas nas outras.
   - **Durabilidade:** Os dados confirmados (*commit*) são persistidos e nunca se perdem por falha de energia.
4. **Bancos Não Relacionais (NoSQL - *Not Only SQL*):**
   - Criados para lidar com grandes volumes de dados não estruturados (*Big Data*), alta velocidade e escalabilidade horizontal.
   - **Quatro Famílias Canônicas de NoSQL:**
     1. *Chave-Valor (*Key-Value*):* Altíssimo desempenho e simplicidade (ex.: Redis, DynamoDB).
     2. *Documentos:* Armazena documentos semiestruturados em JSON/BSON (ex.: MongoDB, CouchDB). Muito usado em repositórios digitais modernos.
     3. *Família de Colunas (*Column-Family*):* Otimizado para consultas analíticas em petabytes (ex.: Apache Cassandra, HBase).
     4. *Grafos:* Modela nós e arestas com relacionamentos complexos e interconectados (ex.: Neo4j). Ideal para Web Semântica, ontologias e *Linked Data*.
   - **Teorema CAP (Eric Brewer):** Um sistema distribuído só pode garantir simultaneamente duas das três propriedades: Consistência (*Consistency*), Disponibilidade (*Availability*) e Tolerância a Partições (*Partition Tolerance*).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Modelagem Relacional de Empréstimos no SIGB da Câmara):** O sistema de circulação da Biblioteca Pedro Aleixo modela uma tabela `USUARIOS` (com PK `id_usuario`), uma tabela `LIVROS` (com PK `id_livro`) e uma tabela associativa `EMPRESTIMOS` de cardinalidade $N:M$ (com FKs apontando para usuário e livro, além da data de devolução). Isso garante que o sistema nunca registre um empréstimo para um livro ou usuário inexistente (integridade referencial).
- **Cenário 2 (Banco NoSQL de Documentos na BDCam):** O repositório DSpace armazena os metadados das proposições em estruturas flexíveis baseadas em JSON/BSON no MongoDB/PostgreSQL, permitindo que cada tipo documental tenha campos dinâmicos específicos sem exigir a alteração rígida do esquema do banco de dados.
- **Cenário 3 (Banco em Grafo para Rastreamento de Influência Parlamentar):** O setor de ciência de dados da Câmara implementa um banco em grafo (Neo4j) onde cada deputado é um nó e as coautorias em projetos de lei são arestas. Os bibliotecários e analistas executam consultas para identificar visualmente quais deputados formam redes de liderança temática em matérias de educação e meio ambiente.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Critério | Bancos Relacionais (SQL) | Bancos NoSQL (Não Relacionais) |
| :--- | :--- | :--- |
| **Estrutura** | Tabelas estritas, linhas e colunas | Chave-valor, Documentos, Colunas, Grafos |
| **Garantia Central** | Transações ACID rígidas | Teorema CAP / Modelo BASE (consistência eventual) |
| **Esquema (*Schema*)** | Rígido, definido previamente (*Schema-on-write*) | Flexível ou dinâmico (*Schema-on-read*) |
| **Escalabilidade** | Predominantemente vertical (hardware maior) | Horizontal (distribuição em múltiplos nós) |
| **Exemplo de Software** | PostgreSQL, MySQL, Oracle, SQL Server | MongoDB, Redis, Cassandra, Neo4j |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **A Chave Primária pode ser Nula:** O Cebraspe adora afirmar que *"uma tupla em uma tabela relacional pode conter valor nulo (NULL) em sua chave primária caso o registro seja provisório"*. **Gabarito: ERRADO.** A integridade de entidade proíbe terminantemente valores nulos em chaves primárias.
- **Bancos em Grafo para Dados Tabulares Simples:** A banca sugere que bancos em grafo são recomendados para armazenar cadastros alfanuméricos planos sem conexões. **Gabarito: ERRADO.** Bancos em grafo são desenhados especificamente para entidades com redes densas de inter-relacionamentos.
- **Normalização e Desempenho:** Afirmar que normalizar tabelas até a 3FN sempre aumenta a velocidade de leitura das consultas. **Gabarito: ERRADO.** A normalização reduz redundâncias e elimina anomalias, mas pode exigir múltiplas junções (*JOINs*), o que por vezes torna consultas analíticas mais lentas (motivo pelo qual se faz *desnormalização* em Data Warehouses).

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **ELMASRI, Ramez; NAVATHE, Shamkant B.** *Sistemas de Banco de Dados*. 6. ed. São Paulo: Pearson, 2011. (O livro-texto definitivo de bancos de dados em concursos).
- **SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S.** *Sistema de Banco de Dados*. 7. ed. Rio de Janeiro: Elsevier, 2020.
- **SADALAGE, Pramod J.; FOWLER, Martin.** *NoSQL Essencial: um guia conciso para o mundo emergente da persistência poliglota*. São Paulo: Novatec, 2013.
- **CODD, Edgar F.** A relational model of data for large shared data banks. *Communications of the ACM*, v. 13, n. 6, p. 377-387, 1970. (Artigo de criação do modelo relacional).
- **CHEN, Peter Pin-Shan.** The entity-relationship model: toward a unified view of data. *ACM Transactions on Database Systems*, v. 1, n. 1, p. 9-36, 1976.""",

    'sub-6-6': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
Os **Fundamentos Computacionais** — algoritmos, consultas SQL, expressões regulares (Regex), APIs e Web Scraping — habilitam a automação bibliotecária em larga escala:
1. **Linguagem SQL (Structured Query Language):**
   - **DQL (Consulta):** `SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY`.
   - **DML (Manipulação):** `INSERT INTO`, `UPDATE ... SET`, `DELETE FROM`.
   - **DDL (Definição):** `CREATE TABLE`, `ALTER TABLE`, `DROP TABLE`.
   - **DCL (Controle):** `GRANT`, `REVOKE`.
   - **Junções Canônicas (*JOINs*):**
     - `INNER JOIN`: Retorna apenas os registros com correspondência em ambas as tabelas.
     - `LEFT JOIN`: Retorna todos os registros da tabela da esquerda e os correspondentes da direita (com NULL se não houver).
2. **Expressões Regulares (*Regex*):**
   - Padrões formais para busca, validação e manipulação de cadeias de caracteres textuais:
     - `^`: Início da linha | `$`: Fim da linha.
     - `.`: Qualquer caractere (exceto nova linha).
     - `*`: Zero ou mais ocorrências | `+`: Uma ou mais ocorrências | `?`: Zero ou uma ocorrência.
     - `\\d`: Qualquer dígito numérico `[0-9]` | `\\w`: Qualquer caractere alfanumérico.
     - `[A-Z]`: Qualquer letra maiúscula | `( )`: Grupo de captura.
3. **APIs e Arquitetura REST:**
   - **API (*Application Programming Interface*):** Conjunto de rotinas e padrões de programação para acesso a um aplicativo de software ou plataforma baseado em requisições e respostas.
   - **REST (*Representational State Transfer*):** Padrão arquitetural web que opera sobre HTTP sem estado (*stateless*), usando métodos padronizados:
     - `GET`: Recuperar dados (idempotente e seguro).
     - `POST`: Criar um novo recurso.
     - `PUT`: Atualizar integralmente um recurso existente.
     - `DELETE`: Excluir um recurso.
4. **Web Scraping (Raspagem de Dados):**
   - Extração automatizada de dados de páginas HTML da web quando não há API estruturada disponível. Requer atenção à ética, termos de serviço e à Lei Geral de Proteção de Dados (LGPD).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Consulta SQL para Relatório da Mesa Diretora):** O Diretor-Geral da Câmara solicita a lista de todos os livros de Direito Constitucional adquiridos em 2023 com custo unitário superior a R$ 200,00. O bibliotecário executa a consulta:
  ```sql
  SELECT titulo, autor, valor_aquisicao 
  FROM acervo 
  WHERE classe_cdu LIKE '342%' AND ano_aquisicao = 2023 AND valor_aquisicao > 200.00 
  ORDER BY valor_aquisicao DESC;
  ```
  O relatório é exportado em CSV e entregue em segundos.
- **Cenário 2 (Expressão Regular para Limpeza de ISBN e CPF no Catálogo):** Ao higienizar uma base de dados legada com 50.000 registros, o bibliotecário utiliza uma regex no editor de texto para validar e padronizar ISBNs de 13 dígitos: `^97[89]-\\d{1,5}-\\d{1,7}-\\d{1,7}-\\d$`.
- **Cenário 3 (Consumo de Dados Abertos via API REST da Câmara):** O bibliotecário programa um script em Python que consome o endpoint REST oficial da Câmara (`GET https://dadosabertos.camara.leg.br/api/v2/proposicoes?ano=2024`) para baixar automaticamente todas as ementas em JSON e integrá-las aos novos sumários temáticos da Biblioteca Pedro Aleixo.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Comando / Método | Categoria / Função | Comportamento no Sistema | Efeito no Dado |
| :--- | :--- | :--- | :--- |
| **SELECT** | SQL DQL | Lê e projeta colunas da tabela | Não altera nada no banco |
| **DELETE** | SQL DML | Remove linhas específicas com `WHERE` | Exclui tuplas do banco |
| **DROP** | SQL DDL | Destrói a estrutura da tabela inteira | Elimina a tabela do banco |
| **GET (HTTP)** | Método REST | Leitura segura de recursos | Não altera o estado no servidor |
| **POST (HTTP)** | Método REST | Envio de novos dados | Cria um novo registro |
| **Regex `+` vs `*`** | Metacaracteres | `+` exige $\\ge 1$ | `*` aceita $\\ge 0$ (inclusive vazio) |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **O WHERE sem DELETE no SQL:** O Cebraspe adverte sobre o perigo do `DELETE FROM acervo;` sem a cláusula `WHERE`. **Gabarito: CERTO.** Executar `DELETE` sem `WHERE` apaga todas as linhas de toda a tabela.
- **Idempotência do Método POST:** Afirmar que o método HTTP POST é idempotente (isto é, que executá-lo 10 vezes produz sempre o mesmo resultado sem criar novos registros). **Gabarito: ERRADO.** O método `GET` e `PUT` são idempotentes; o `POST` não é idempotente (executar 10 vezes cria 10 novos recursos duplicados).
- **Regex `^` dentro de colchetes:** O símbolo `^` no início da regex significa início de linha, mas **dentro de colchetes** `[^0-9]` significa negação lógica (qualquer caractere que NÃO seja dígito).

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **CORMEN, Thomas H. et al.** *Algoritmos: teoria e prática*. 3. ed. Rio de Janeiro: Elsevier, 2012. (A bíblia mundial de estruturas de dados e algoritmos).
- **FRIEDL, Jeffrey E. F.** *Mastering Regular Expressions*. 3. ed. Sebastopol: O'Reilly Media, 2006. (A obra de referência absoluta em expressões regulares).
- **FIELDING, Roy Thomas.** *Architectural Styles and the Design of Network-based Software Architectures*. 2000. Tese (Doutorado em Ciência da Computação) – University of California, Irvine, 2000. (A tese seminal que definiu o padrão REST).
- **DATE, C. J.** *Introdução a sistemas de bancos de dados*. 8. ed. Rio de Janeiro: Campus, 2004.
- **BRASIL. CÂMARA DOS DEPUTADOS.** *Portal de Dados Abertos da Câmara dos Deputados: Documentação das APIs REST v2*. Brasília: Diretoria de Inovação e TI (DITEC), 2023.""",

    'sub-6-7': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Curadoria de Corpora, o Processamento de Linguagem Natural (PLN) e a Ética Algorítmica** são temas de fronteira exigidos no edital do Cebraspe:
1. **Curadoria de Dados e Corpora Textuais:**
   - Processo ativo e contínuo de seleção, higienização, anonimização, padronização e documentação de coleções de textos (*corpora*) para treino e teste de modelos computacionais.
   - **Princípios FAIR:** *Findable* (Localizável), *Accessible* (Acessível), *Interoperable* (Interoperável) e *Reusable* (Reutilizável).
2. **Processamento de Linguagem Natural (PLN) e OCR/HTR:**
   - **Pipeline de Pré-processamento Clássico:**
     - *Tokenização:* Quebra do texto em palavras, símbolos ou termos individuais (*tokens*).
     - *Remoção de Stopwords:* Exclusão de palavras gramaticais de alto vácuo semântico (artigos, preposições, conjunções: "de", "a", "o").
     - *Stemming (Troncamento):* Redução morfológica da palavra ao seu radical mecânico (ex.: "livraria", "livros" $\\to$ "livr").
     - *Lematização:* Redução da palavra à sua forma canônica dicionarizada com base na morfossintaxe (ex.: "foram" $\\to$ verbo "ir" ou "ser").
   - **OCR (*Optical Character Recognition*) e HTR (*Handwritten Text Recognition*):** Tecnologias de visão computacional que convertem imagens de documentos impressos ou manuscritos em texto digital codificado em UTF-8.
3. **Vieses Algorítmicos e Ética da IA na Gestão Pública:**
   - Algoritmos não são neutros; eles reproduzem e amplificam preconceitos históricos, de gênero, raciais e regionais presentes nos dados de treino.
   - **Auditoria de Vieses:** Exigência de avaliação independente da acurácia balanceada entre subpopulações e garantia da Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Curadoria de Corpus Textual das Proposições da Câmara):** O CEDI organiza o *Corpus Legislativo Brasileiro* com 1 milhão de discursos e projetos desde 1946. O bibliotecário higieniza os metadados, remove caracteres de controle corrompidos, anonimiza dados pessoais sensíveis conforme a LGPD e disponibiliza o dataset no padrão FAIR para que universidades treinem modelos de PLN.
- **Cenário 2 (Lematização no Mecanismo de Busca do Sileg):** Ao pesquisar por *"regulamentando as concessões públicas"*, o motor de busca do portal parlamentar aplica a **lematização**, recuperando documentos que contenham "regulamentar", "regulamenta" e "regulamentação", garantindo que a inflexão verbal não impeça o deputado de encontrar a norma.
- **Cenário 3 (Prevenção de Viés Algorítmico em Ferramenta de Seleção de Textos):** A equipe de IA testa um modelo de classificação para sugerir temas prioritários de tramitação. O bibliotecário identifica um viés de sub-representação histórica nos projetos da bancada feminina e ajusta o peso das classes para reequilibrar o aprendizado do algoritmo.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Etapa de PLN / Conceito | O que Faz | Exemplo de Saída | Vantagem / Risco |
| :--- | :--- | :--- | :--- |
| **Tokenização** | Quebra a frase em unidades mínimas | `["Câmara", "dos", "Deputados"]` | Base para qualquer processamento |
| **Stopwords** | Palavras vazias eliminadas | Remove: `"de"`, `"em"`, `"para"` | Reduz ruído e volume de dados |
| **Stemming** | Corta a palavra no radical bruto | `"constitucional"` $\\to$ `"constituc"` | Rápido, mas pode gerar palavras inexistentes |
| **Lematização** | Retorna o lema dicionarizado | `"foram"` $\\to$ `"ir"` (ou `"ser"`) | Gramaticalmente exato, mas exige mais CPU |
| **Viés Algorítmico** | Distorção sistemática nos resultados | Discriminação histórica nos dados | Fere a ética e a imparcialidade pública |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Stemming vs. Lematização:** O Cebraspe inverte os conceitos dizendo que *"o stemming utiliza análises morfológicas complexas para retornar a forma canônica dicionarizada da palavra"*. **Gabarito: ERRADO.** Quem utiliza análise morfológica e gramatical completa para encontrar a forma dicionarizada é a **lematização**; o *stemming* aplica apenas cortes heurísticos de sufixos.
- **Princípios FAIR como Padrão de Hardware:** Afirmar que os princípios FAIR são requisitos físicos de servidores e discos rígidos. **Gabarito: ERRADO.** Os princípios FAIR (*Findable, Accessible, Interoperable, Reusable*) são diretrizes de **gestão e governança de dados científicos e metadados**.
- **Neutralidade Inata dos Algoritmos:** A banca propõe que *"sistemas baseados em aprendizado de máquina são por natureza imunes a preconceitos humanos por utilizarem equações matemáticas"*. **Gabarito: ERRADO.** A doutrina moderna (Cathy O'Neil e EBIA) comprova que os algoritmos reproduzem integralmente os vieses dos dados com os quais foram treinados.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **JURAFSKY, Daniel; MARTIN, James H.** *Speech and Language Processing: An Introduction to Natural Language Processing, Computational Linguistics, and Speech Recognition*. 3. ed. draft. Stanford University, 2023. (O clássico absoluto de Processamento de Linguagem Natural).
- **WILKINSON, Mark D. et al.** The FAIR Guiding Principles for scientific data management and stewardship. *Scientific Data*, v. 3, n. 160018, 2016. (O manifesto original dos princípios FAIR).
- **O'NEIL, Cathy.** *Algoritmos de destruição em massa: como o big data aumenta a desigualdade e ameaça a democracia*. Santo André: Editora Rua do Sabão, 2020.
- **BRASIL.** *Lei Federal nº 13.709, de 14 de agosto de 2018*. Lei Geral de Proteção de Dados Pessoais (LGPD).
- **BIRD, Steven; KLEIN, Ewan; LOPER, Edward.** *Natural Language Processing with Python: Analyzing Text with the Natural Language Toolkit (NLTK)*. Sebastopol: O'Reilly Media, 2009."""
}

def aplicar_lote3():
    print("Iniciando injeção didática do Lote 3 (M5 e M6)...")
    sucessos = 0
    for sub_id, texto_didatico in TEXTOS_DIDATICOS.items():
        caminhos = [
            f"src/content/modules/m5-gestao/{sub_id}.ts",
            f"src/content/modules/m6-digital-ia/{sub_id}.ts",
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

    print(f"\nFinalizado Lote 3: {sucessos}/{len(TEXTOS_DIDATICOS)} submódulos atualizados com sucesso.")

if __name__ == "__main__":
    aplicar_lote3()
