# -*- coding: utf-8 -*-
"""
Script de Expansão Didática — Lote 1 (M1 e M2: 10 Submódulos)
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
    'sub-1-3': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
Para o **Cebraspe**, a compreensão de *dado, informação, conhecimento e inteligência* e a evolução paradigmática da Ciência da Informação estruturam-se em marcos conceituais rigorosos:
1. **A Pirâmide DIKW (Dado, Informação, Conhecimento, Sabedoria):**
   - **Dado:** Símbolo bruto, sem contexto, não articulado (ex.: "1824", "PL 2630").
   - **Informação:** Dado dotado de significado, relevância e propósito em determinado contexto (ex.: "O PL 2630 regula a transparência de redes sociais").
   - **Conhecimento:** Informação interiorizada, processada e integrada às estruturas cognitivas de um indivíduo, capacitando-o para a ação (ex.: saber como aplicar o PL 2630 na prática jurídica).
   - **Sabedoria/Inteligência:** Julgamento ético e estratégico de longo prazo sobre o uso do conhecimento.
2. **A Tipologia Tripartite de Michael Buckland (1991):**
   - **Informação como Coisa (*Information-as-thing*):** Dados materiais, documentos tangíveis, bits, microfilmes. É a **única forma** que sistemas de computadores e bibliotecas podem fisicamente armazenar, processar e recuperar.
   - **Informação como Processo (*Information-as-process*):** O ato subjetivo de ser informado; a dinâmica em que uma mensagem altera o estado mental do receptor.
   - **Informação como Conhecimento (*Information-as-knowledge*):** O conteúdo intangível, a crença justificada presente na mente do indivíduo.
3. **Os Três Paradigmas da CI (Capurro, 2003):**
   - **Físico (Shannon & Weaver, 1949):** A informação tratada como sinal físico objetivo em um canal mecânico; foco na redução de ruído e na capacidade de transmissão.
   - **Cognitivo (Brookes, 1980; Belkin, 1980):** A informação como incremento capaz de modificar estruturas mentais. Equação fundamental de Brookes: $K[S] + \\Delta I = K[S + \\Delta S]$. Modelo ASK (*Anomalous State of Knowledge*) de Belkin.
   - **Social/Hermenêutico (Hjørland, 1995; Frohmann):** A informação é situada contextualmente em comunidades de prática discursiva (Análise de Domínio). A relevância não é matemática, mas intersubjetiva e cultural.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Informação como Coisa na BDCam):** Quando o bibliotecário da Câmara faz o upload de um arquivo PDF/A da *Constituição Histórica de 1988* no DSpace, ele manipula estritamente **informação como coisa** (Buckland). O arquivo digital e seus metadados Dublin Core são artefatos físicos/digitais mensuráveis.
- **Cenário 2 (Estado Anômalo de Conhecimento no Atendimento ao Parlamentar):** Um deputado novo procura o Serviço de Referência da Biblioteca Pedro Aleixo dizendo: *"Preciso de algo sobre inteligência artificial, mas não sei exatamente o quê"*. O bibliotecário diagnostica um **Estado Anômalo de Conhecimento (ASK de Nicholas Belkin)** e atua como mediador para transformar essa incerteza em uma estratégia de busca refinada.
- **Cenário 3 (Análise de Domínio no Vocabulário Legislativo):** Na Rede Virtual de Bibliotecas (RVBI), os termos do vocabulário controlado não refletem um padrão abstrato genérico, mas o **domínio discursivo do Congresso Nacional** (Hjørland), onde "Mesa Diretora", "Ordem do Dia" e "Urgência Urgentíssima" possuem semântica jurídica e regimental própria.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Conceito / Paradigma | Objeto Primário | Foco Central no Cebraspe | Armadilha Típica da Banca |
| :--- | :--- | :--- | :--- |
| **Informação como Coisa** | Documentos, registros, mídias | Única manipulável por máquinas e acervos | Afirmar que sistemas processam conhecimento puro |
| **Paradigma Físico** | Sinais em canal de comunicação | Transmissão mecânica semântica zero | Confundir teoria matemática de Shannon com psicologia |
| **Paradigma Cognitivo** | Estruturas mentais do receptor | Equação de Brookes e ASK de Belkin | Atribuir Brookes ao paradigma físico |
| **Paradigma Social** | Comunidades discursivas de prática | Análise de domínio de Birger Hjørland | Afirmar que a relevância é universal e atemporal |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Armadilha da Informação como Processo em Banco de Dados:** A banca adora afirmar que *"um repositório digital como o DSpace armazena tanto informação como coisa quanto informação como processo"*. **Gabarito: ERRADO.** Sistemas armazenam apenas coisas (registros físicos ou digitais). O processo ocorre na mente humana.
- **Inversão da Equação de Brookes:** Dizer que a equação $K[S] + \\Delta I = K[S + \\Delta S]$ pertence a Shannon e Weaver. **Gabarito: ERRADO.** Pertence a Bertram Brookes e funda o paradigma cognitivo.
- **Relevância no Paradigma Social:** O Cebraspe adora assertivas dizendo que *"a relevância documental é invariável no tempo e no espaço sob a ótica social"*. **Gabarito: ERRADO.** No paradigma social, a relevância depende do contexto do grupo e da comunidade de prática.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BUCKLAND, Michael.** *Information and Information Systems*. New York: Greenwood Press, 1991. (Obra canônica da distinção: informação como coisa, processo e conhecimento).
- **BROOKES, Bertram C.** The foundations of information science: part I: philosophical aspects. *Journal of Information Science*, v. 2, n. 3-4, p. 125-133, 1980. (Formulação da equação fundamental da CI).
- **CAPURRO, Rafael; HJØRLAND, Birger.** The concept of information. *Annual Review of Information Science and Technology (ARIST)*, v. 37, p. 343-411, 2003. (Mapeamento dos paradigmas físico, cognitivo e social).
- **BELKIN, Nicholas J.** Anomalous states of knowledge as a basis for information retrieval. *Canadian Journal of Information Science*, v. 5, p. 133-143, 1980. (O conceito de ASK na busca da informação).
- **SHANNON, Claude E.; WEAVER, Warren.** *The Mathematical Theory of Communication*. Urbana: University of Illinois Press, 1949.""",

    'sub-1-4': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Competência em Informação (*Information Literacy*)** e a **Mediação da Informação** são temas de altíssima incidência nas provas do Cebraspe para o Legislativo:
1. **Conceito de Competência em Informação:**
   - Habilidade integrada de reconhecer quando uma informação é necessária, identificar fontes adequadas, acessar com eficiência, avaliar criticamente a veracidade/autoridade e utilizar a informação ética e legalmente (Declarações de Praga/2003 e Alexandria/2005).
   - Não se confunde com mero "letramento digital" ou domínio de computadores: trata-se de uma metacompetência crítica, cognitiva e reflexiva.
2. **Modelos Canônicos de Competência Informacional:**
   - **The Big6 (Eisenberg & Berkowitz, 1990):** Seis etapas lógicas: Definição da tarefa $\\to$ Estratégias de busca $\\to$ Localização e acesso $\\to$ Uso da informação $\\to$ Síntese $\\to$ Avaliação.
   - **Seven Faces of Information Literacy (Christine Bruce, 1997):** Modelo relacional que categoriza como as pessoas vivenciam a informação (desde o uso de TI até a sabedoria).
   - **Modelo de Kuhlthau (Information Search Process - ISP):** Seis estágios que integram sentimentos (afetivo), pensamentos (cognitivo) e ações (físico): Iniciação (incerteza) $\\to$ Seleção (otimismo) $\\to$ Exploração (confusão/frustração) $\\to$ Formulação (clareza) $\\to$ Coleta (confiança) $\\to$ Apresentação (alívio).
3. **Mediação da Informação (Oswaldo Francisco de Almeida Júnior):**
   - *"Toda ação de interferência — realizada pelo profissional da informação — direta ou indireta, consciente ou inconsciente, singular ou plural, individual ou coletiva, que propicia a apropriação da informação"*.
   - A mediação nunca é neutra; o bibliotecário intervém ativamente na cadeia de comunicação.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Kuhlthau no Suporte a uma Comissão Parlamentar de Inquérito - CPI):** O relator de uma CPI designa um assessor para investigar fraudes fiscais complexas. Na fase inicial de **Exploração**, o assessor relata sentimentos de ansiedade e frustração diante do excesso de dados contraditórios. O bibliotecário legislativo identifica o estágio do ISP de Kuhlthau e oferece filtros conceituais para conduzir o usuário à fase de **Formulação** (foco claro de pesquisa).
- **Cenário 2 (Letramento Informacional no Treinamento de Gabinetes):** A Biblioteca Pedro Aleixo oferece oficinas aos secretários parlamentares ensinando a distinguir notícias falsas (*fake news*) de pareceres técnicos canônicos da Consultoria Legislativa e a utilizar operadores booleanos no LexML e no Portal da Câmara. Isso é a aplicação pura dos pilares da UNESCO para *Information Literacy*.
- **Cenário 3 (Mediação Implícita na Arquitetura do Portal):** Quando a equipe de bibliotecários da Câmara estrutura as facetas de busca por deputado, tema e ano no catálogo online, ocorre **mediação indireta/implícita** (Almeida Júnior), facilitando a apropriação da informação pelo cidadão antes mesmo de qualquer interação presencial.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Modelo / Teoria | Autor Central | Enfoque Principal | Sentimento Crítico na Prova |
| :--- | :--- | :--- | :--- |
| **Big6** | Eisenberg & Berkowitz | 6 etapas pragmáticas de resolução de problemas | Metodológico / Linear |
| **ISP (Search Process)** | Carol Kuhlthau | Relação entre sentimentos, pensamentos e ações | Ansiedade/dúvida na Exploração |
| **Seven Faces** | Christine Bruce | Maneiras experienciais de vivenciar a informação | Relacional / Fenomenográfico |
| **Mediação da Informação** | Almeida Júnior | Interferência consciente/inconsciente do mediador | Rejeição ao mito da neutralidade |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **O Mito da Neutralidade do Bibliotecário:** O Cebraspe propõe que *"na mediação da informação, o bibliotecário deve atuar de forma absolutamente neutra, funcionando como mero repassador mecânico sem interferir no processo"*. **Gabarito: ERRADO.** A teoria da mediação (Almeida Júnior) postula que a neutralidade é uma ilusão positivista; toda mediação é uma interferência ativa.
- **Estágio de Maior Incerteza em Kuhlthau:** A banca costuma inverter o sentimento de frustração, dizendo que *"a formulação é o momento de maior incerteza e pessimismo"*. **Gabarito: ERRADO.** O ponto de maior dúvida, confusão e frustração é a **Exploração**; na **Formulação**, surge a clareza e o otimismo.
- **Redução à Alfabetização Digital:** Afirmar que a competência em informação esgota-se na capacidade técnica de operar softwares e navegadores web. **Gabarito: ERRADO.** Trata-se de competência crítica de avaliação e uso ético.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **ALMEIDA JÚNIOR, Oswaldo Francisco de.** Mediação da informação e múltiplas linguagens. *Tendências da Pesquisa Brasileira em Ciência da Informação*, v. 2, n. 1, p. 89-103, 2009. (Conceito canônico de mediação da informação).
- **CAMPELLO, Bernadete.** O letramento informacional no Brasil: práticas e reflexões. *Perspectivas em Ciência da Informação*, v. 8, n. 1, p. 40-55, 2003.
- **DUDZIAK, Elisabeth Adriana.** Information literacy: princípios, filosofia e prática. *Ciência da Informação*, v. 32, n. 1, p. 23-35, 2003. (Marcos conceituais e manifestos de Praga e Alexandria).
- **GASQUE, Kelley Cristine G. D.** *Letramento informacional: pesquisa, comunicação e aprendizagem*. Brasília: FCI/UnB, 2012.
- **KUHLTHAU, Carol C.** *Seeking Meaning: A Process Approach to Library and Information Services*. 2. ed. Westport: Libraries Unlimited, 2004. (Modelo ISP de seis estágios).
- **EISENBERG, Michael B.; BERKOWITZ, Robert E.** *Information Problem Solving: The Big Six Skills Approach to Library & Information Skills Instruction*. Norwood: Ablex, 1990.""",

    'sub-1-5': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
Para o Cebraspe, a gestão da informação exige governança rigorosa do seu ciclo de vida, padrões internacionais de qualidade de dados e a salvaguarda da memória institucional:
1. **O Ciclo de Vida da Informação e dos Documentos:**
   - **Teoria das Três Idades (Arquivística/Gestão da Informação):**
     - *Corrente (1ª Idade):* Documentos em tramitação, de uso frequente, valor primário (administrativo, legal, fiscal).
     - *Intermediário (2ª Idade):* Aguardando destinação final (guarda temporária/expurgo), uso esporádico, ainda com valor primário.
     - *Permanente/Histórico (3ª Idade):* Imprescritíveis e inalienáveis, valor secundário (histórico, probatório, cultural, de pesquisa). Nunca mais podem ser eliminados!
   - **Fases do Ciclo da Informação:** Criação/Coleta $\\to$ Armazenamento/Tratamento $\\to$ Disseminação/Acesso $\\to$ Uso $\\to$ Preservação ou Descarte.
2. **Dimensões da Qualidade de Dados (Wang & Strong, 1996 e DAMA-DMBOK2):**
   - **Intrínseca:** Acurácia (exatidão), credibilidade, reputação.
   - **Contextual:** Relevância, tempestividade (pontualidade/tempo hábil), completude, suficiência.
   - **Representacional:** Interpretabilidade, facilidade de compreensão, consistência de formatos.
   - **Acessibilidade:** Disponibilidade e segurança do acesso.
3. **Memória Institucional:**
   - Patrimônio intangível e tangível acumulado por uma organização. A biblioteca atua como âncora da memória técnica e política, impedindo o esquecimento organizacional e garantindo a continuidade das políticas públicas.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Teoria das Três Idades na Tramitação de Projetos de Lei):** Uma Proposta de Emenda à Constituição (PEC) em debate na Comissão de Constituição e Justiça (CCJ) está na sua **fase corrente**. Quando arquivada ao final da legislatura, aguarda na **fase intermediária**. Ao ser recolhida ao Arquivo Histórico e à Seção de Obras Raras e Memória da Biblioteca da Câmara, atinge a **fase permanente**, tornando-se fonte inalienável de pesquisa sobre a história da democracia brasileira.
- **Cenário 2 (Tempestividade e Acurácia no Plenário):** Durante uma sessão de votação, o presidente da Casa solicita dados históricos sobre votações análogas em legislaturas passadas. Se a informação fornecida pelo CEDI for exata, mas entregue 30 minutos após o encerramento da votação, faltou a dimensão contextual da **tempestividade** (Wang & Strong), invalidando a utilidade da entrega.
- **Cenário 3 (A Biblioteca Pedro Aleixo como Guardiã da Memória):** As coleções de discursos parlamentares, anais históricos do Império e da República e relatórios das Mesas Diretoras catalogados no CEDI compõem o corpus da **memória institucional** da Câmara, disponibilizado no portal aberto para pesquisadores e historiadores.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Idade Documental | Frequência de Uso | Valor Predominante | Destinação Possível |
| :--- | :--- | :--- | :--- |
| **Corrente (1ª Idade)** | Diária / Frequente | Primário (administrativo/legal) | Tramitação / Consulta ativa |
| **Intermediária (2ª Idade)** | Baixa / Esporádica | Primário (aguardando prazo) | Expurgo ou Guarda Permanente |
| **Permanente (3ª Idade)** | Cultural / Pesquisa | Secundário (histórico/probatório) | **Nunca pode ser eliminado!** |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Eliminação de Documentos da 3ª Idade:** A banca costuma sugerir que *"documentos históricos de terceira idade podem ser eliminados caso passem por microfilmagem ou digitalização para economia de espaço predial"*. **Gabarito: ERRADO.** Documentos de valor permanente são imprescritíveis e inalienáveis (art. 10 da Lei Federal nº 8.159/1991); digitalização não autoriza descarte de original permanente.
- **Confusão entre Acurácia e Tempestividade:** Apresentar um dado factual perfeito, mas defasado no tempo, como exemplo de falha de acurácia. **Gabarito: ERRADO.** Trata-se de problema de tempestividade (*timeliness*).
- **Valor Primário vs. Valor Secundário:** Inverter os valores: o valor primário é para a administração criadora; o secundário é para a sociedade e pesquisadores.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **WANG, Richard Y.; STRONG, Diane M.** Beyond accuracy: what data quality means to data consumers. *Journal of Management Information Systems*, v. 12, n. 4, p. 5-33, 1996. (Artigo clássico das 4 categorias de qualidade de dados).
- **DAMA INTERNATIONAL.** *DAMA-DMBOK: Data Management Body of Knowledge*. 2. ed. Basking Ridge: Technics Publications, 2017. (Padrão mundial de governança e qualidade de dados).
- **BRASIL.** *Lei Federal nº 8.159, de 8 de janeiro de 1991*. Dispõe sobre a política nacional de arquivos públicos e privados. (Regime jurídico da Teoria das Três Idades e inalienabilidade do patrimônio permanente).
- **ROUSSEAU, Jean-Yves; COUTURE, Carol.** *Os fundamentos da disciplina arquivística*. Lisboa: Dom Quixote, 1998. (Ciclo vital documental e valores primário e secundário).
- **CHOI, Byounggu; LEE, Heeseok.** Knowledge management strategy and its link to knowledge creation process. *Expert Systems with Applications*, v. 23, n. 3, p. 173-187, 2002.""",

    'sub-1-6': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A atuação do Bibliotecário na Câmara dos Deputados está submetida a um regime legal estrito, ao Código de Ética Profissional e às normas de Governança de Dados do setor público federal:
1. **Regulamentação Profissional (Leis Federais nº 4.084/1962 e nº 9.674/1998):**
   - O exercício da profissão de bibliotecário em todo o território nacional é privativo dos bacharéis em Biblioteconomia diplomados por escolas oficiais ou reconhecidas e **registrados no respectivo Conselho Regional de Biblioteconomia (CRB)**.
   - Atividades privativas: organização, direção e execução dos serviços técnicos de bibliotecas; classificação e catalogação de manuscritos e livros; planejamento e coordenação de redes de bibliotecas.
2. **Sistema CFB/CRB:**
   - **Conselho Federal de Biblioteconomia (CFB):** Órgão normativo e de grau de recurso superior.
   - **Conselhos Regionais (CRB):** Órgãos de fiscalização direta do exercício profissional em suas respectivas jurisdições (o Distrito Federal pertence à jurisdição do **CRB-1**).
3. **Código de Ética e Deontologia (Resolução CFB nº 207/2018):**
   - Deveres fundamentais: sigilo profissional sobre informações confiadas em razão do ofício; combate à censura e defesa do livre acesso à informação; atualização profissional contínua; não assinar trabalhos executados por terceiros sem sua participação técnica.
   - Infrações éticas puníveis com: advertência, censura confidencial, censura pública, multa, suspensão temporária do registro e cassação do exercício profissional.
4. **Governança de Dados e da Informação no Setor Público (DMBOK e Decreto nº 9.203/2017):**
   - A governança estabelece as diretrizes estratégicas, a prestação de contas (*accountability*), a liderança e o controle para assegurar que a informação seja tratada como ativo corporativo confiável, seguro e interoperável.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Sigilo Profissional no Atendimento à Consultoria Legislativa):** Um consultor legislativo solicita estudos comparados sigilosos sobre um tema de grande impacto econômico que embasará uma CPI ainda não divulgada. O bibliotecário da Biblioteca Pedro Aleixo tem o **dever ético e legal de sigilo absoluto**, não podendo divulgar a temática da busca nem a parlamentares de outras legendas.
- **Cenário 2 (Fiscalização do Exercício Privativo no Quadro da Câmara):** Ao realizar concurso público para provimento de vagas de Analista Legislativo - Atribuição Bibliotecário, a Câmara exige obrigatoriamente a comprovação de diploma de Bacharel em Biblioteconomia e o registro ativo no **CRB-1**, em estrito cumprimento às Leis 4.084/62 e 9.674/98.
- **Cenário 3 (Governança de Dados e Gestão de Metadados):** Ao participar do Comitê de Governança Digital da Câmara dos Deputados, o bibliotecário atua na definição do vocabulário controlado institucional e na gestão de metadados para garantir que os dados abertos das votações sejam interoperáveis entre a Câmara e o Senado Federal segundo o DAMA-DMBOK2.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Órgão / Norma | Papel Principal | Competência Típica | Recurso Final |
| :--- | :--- | :--- | :--- |
| **CFB (Federal)** | Normativo e Recursal | Editar o Código de Ética e resoluções gerais | Instância superior administrativa |
| **CRB-1 (Regional - DF)** | Fiscalização e Registro | Conceder registro profissional e fiscalizar acervos | Recursos sobem ao CFB |
| **Lei nº 4.084/1962** | Marco Regulatório Inicial | Define a profissão e atos privativos do bibliotecário | Lei Federal ordinária |
| **Lei nº 9.674/1998** | Reestruturação dos Conselhos | Detalha funcionamento dos Conselhos e infrações | Lei Federal ordinária |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Assinatura de Responsabilidade Técnica por Outrem:** O Cebraspe adora colocar como assertiva que *"é lícito ao bibliotecário assumir a responsabilidade técnica e assinar catálogos e bases de dados organizados inteiramente por estagiários ou técnicos administrativos sem sua supervisão direta"*. **Gabarito: ERRADO.** Constitui infração ética grave capitulada no Código de Ética do CFB.
- **Inversão das Competências CFB vs. CRB:** A banca diz que compete aos CRBs editar o Código de Ética e julgar em grau final as infrações. **Gabarito: ERRADO.** Quem edita o Código e julga recursos finais é o CFB.
- **Dispensa de Registro para Servidores Públicos:** Afirmar que a aprovação em concurso público de órgão federal dispensa o registro no Conselho Regional. **Gabarito: ERRADO.** O exercício profissional, mesmo no setor público estatutário, exige inscrição regular no CRB da jurisdição.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BRASIL.** *Lei Federal nº 4.084, de 30 de junho de 1962*. Dispõe sobre a profissão de Bibliotecário e regula o seu exercício.
- **BRASIL.** *Lei Federal nº 9.674, de 25 de junho de 1998*. Dispõe sobre o exercício da profissão de Bibliotecário e determina outras providências.
- **CONSELHO FEDERAL DE BIBLIOTECONOMIA (CFB).** *Resolução CFB nº 207, de 9 de novembro de 2018*. Aprova o Código de Ética e Deontologia do Profissional Bibliotecário brasileiro.
- **IFLA.** *IFLA Code of Ethics for Librarians and other Information Workers*. Haia: IFLA, 2012.
- **DAMA INTERNATIONAL.** *DAMA-DMBOK: Data Management Body of Knowledge*. 2. ed. Technics Publications, 2017. (Capítulo de Governança da Informação e Dados).""",

    'sub-2-2': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
O **RDA (*Resource Description and Access*)** e o **Projeto 3R (*RDA Steering Committee Restructure and Redesign*)** representam o estado da arte na representação catalográfica mundial:
1. **O que é o RDA:**
   - Sucessor direto do AACR2r, construído com foco na catalogação para a Web Semântica e Dados Conectados (*Linked Data*).
   - Deixa de ser um código prescritivo rígido baseado em fichas e formatos físicos para ser um conjunto flexível de diretrizes e instruções orientadas a **entidades, atributos e relacionamentos**.
   - Alinhado formalmente aos modelos conceituais da IFLA: originalmente à família FRBR e, a partir do Projeto 3R, integralmente fundado no **IFLA LRM (*Library Reference Model*)**.
2. **O Projeto 3R e as Novidades Estruturais do RDA Toolkit:**
   - Redesenho do RDA para implementar os quatro níveis de descrição e a entidade mais ampla **Res** (qualquer entidade do universo LRM).
   - Introdução dos **Elementos Núcleo (*Core Elements*)** e das quatro abordagens de implementação: Não estruturada, Estruturada, Identificadores e URIs (Linked Data).
   - O conceito de transcrição muda: flexibilização do princípio *"take what you see"* (registre o que você vê), reduzindo drasticamente o uso de abreviaturas latinas artificiais (como "s.l.", "s.n.", "[et al.]"), favorecendo a linguagem clara e os identificadores persistentes.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Eliminação de Abreviaturas Latinas na RVBI):** Ao catalogar um relatório governamental publicado sem indicação explícita de editora comercial, o catalogador da Câmara, sob o AACR2r, era obrigado a preencher `[s.n.]` (*sine nomine*). No RDA, registra-se explicitamente *"publicador não identificado"* ou utiliza-se o identificador do órgão, tornando o catálogo perfeitamente inteligível para o cidadão e para sistemas computacionais.
- **Cenário 2 (Transição AACR2r para RDA no SIGB Aleph/Koha):** A Rede Virtual de Bibliotecas (RVBI) adota perfil de catalogação compatível com o MARC 21 atualizado para acomodar os novos campos gerados pelo RDA (campos 336, 337 e 338 para tipo de conteúdo, mídia e suporte).
- **Cenário 3 (Relacionamentos de Manifestação de Proposições na BDCam):** Um anteprojeto de lei de 1988 gerou uma lei ordinária em 1990 que foi revisada em 2005. No RDA, em vez de notas textuais soltas, cada versão conecta-se por relacionamentos entidade-relacionamento estruturados no padrão LRM, permitindo ao usuário navegar visualmente pela evolução da norma.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Critério de Catalogação | Código AACR2r | Padrão RDA (Pós-3R) |
| :--- | :--- | :--- |
| **Base Teórica** | Prática descritiva em fichas / ISBD | Modelos conceituais IFLA LRM e FRBR |
| **Abreviaturas Latinas** | Uso intensivo (s.l., s.n., et al., ca.) | Fortemente desencorajadas ou eliminadas |
| **Mídia e Suporte** | Designação Geral do Material - DGM (campo 245 $h) | Campos 336 (Conteúdo), 337 (Mídia), 338 (Suporte) |
| **Formato e Destino** | Ambientes de catálogo isolados e bibliográficos | Web Semântica, Linked Data, RDF e URIs |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Extinção da DGM no RDA:** O Cebraspe testa exaustivamente a eliminação da Designação Geral do Material (DGM) em colchetes após o título próprio (`[livro]`, `[recurso eletrônico]`). No RDA, a DGM é **completamente substituída** pelo trio de campos MARC 336/337/338. **Gabarito: CERTO.**
- **RDA como Formato de Comunicação:** Dizer que o RDA substitui o MARC 21 como formato de intercâmbio de dados de computador. **Gabarito: ERRADO.** O RDA é um código de diretrizes de conteúdo; o MARC 21 (e futuramente o BIBFRAME) são formatos de codificação/comunicação. O RDA é expresso em MARC 21, MODS ou RDF.
- **RDA Baseado Exclusivamente no Suporte Papel:** Afirmar que o RDA privilegia o livro impresso. **Gabarito: ERRADO.** O RDA foi projetado nativamente para recursos digitais e ambientes em rede.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **RDA STEERING COMMITTEE (RSC).** *RDA: Resource Description and Access Toolkit*. Chicago: ALA; Ottawa: CILIP; London: Facet, 2020. (Norma internacional de catalogação).
- **OLIVER, Chris.** *Introdução à RDA: um guia básico sobre os fundamentos do Resource Description and Access*. Brasília: Briquet de Lemos, 2011. (Livro de referência obrigatória de concursos).
- **DOURADO, Stella.** *RDA: Resource Description and Access: guia prático de catalogação*. Salvador: Ed. da Autora, 2020.
- **IFLA.** *IFLA Library Reference Model (LRM): A Conceptual Model for Bibliographic Information*. Haia: IFLA, 2017.
- **MORENO, Fernanda Paula.** A transição do AACR2 para o RDA: princípios e perspectivas no Brasil. *Revista Ibero-Americana de Ciência da Informação*, v. 10, n. 2, p. 533-550, 2017.""",

    'sub-2-3': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
Os modelos conceituais da IFLA revolucionaram a representação bibliográfica, transpondo a catalogação da era tipográfica para a modelagem entidade-relacionamento:
1. **A Família FRBR Original:**
   - **FRBR (1998):** Requisitos Funcionais para Registros Bibliográficos (foco nos dados bibliográficos de produtos e materiais).
   - **FRAD (2009):** Requisitos Funcionais para Dados de Autoridade (foco em nomes de pessoas, famílias e entidades coletivas).
   - **FRSAD (2010):** Requisitos Funcionais para Dados de Assunto (entidades *Thema* e *Nomen*).
2. **As Entidades do Grupo 1 do FRBR (A Tríade WEMI):**
   - **Obra (*Work*):** Criação intelectual ou artística abstrata (ex.: o conceito da *Constituição Brasileira de 1988*).
   - **Expressão (*Expression*):** A realização intelectual ou artística da obra em signos, texto, idioma, som ou imagem (ex.: o texto original em português da Constituição, ou sua tradução para o inglês).
   - **Manifestação (*Manifestation*):** A corporificação física ou digital da expressão da obra em um suporte (ex.: a edição impressa pela Edições Câmara em 2023, brochura, ISBN X).
   - **Item (*Item*):** O exemplar físico ou arquivo digital individual e único pertencente a uma coleção (ex.: o exemplar físico com código de barras 0012398 localizado na estante da Biblioteca Pedro Aleixo).
3. **O IFLA LRM (*Library Reference Model* - 2017):**
   - Modelo conceitual único de alto nível que consolidou e unificou FRBR, FRAD e FRSAD em um único modelo consistente.
   - Criado com modelagem formal orientada a objetos (classes e subclasses) para viabilizar a Web Semântica.
   - Entidade topo de hierarquia: **Res** (qualquer coisa que possa ser objeto de discurso no universo bibliográfico).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (WEMI em uma Lei Federal):**
  - **Obra:** A *Lei Maria da Penha (Lei nº 11.340/2006)* como entidade abstrata do direito.
  - **Expressão:** O texto normativo consolidado com as alterações legais de 2023.
  - **Manifestação:** O livreto em formato de bolso publicado pelas Edições Câmara em 2024.
  - **Item:** O exemplar tombado na Biblioteca Pedro Aleixo com dedicatória autografada ao Presidente da Câmara.
- **Cenário 2 (O IFLA LRM e a Entidade *Res* na Busca Temática):** Na modelagem de ontologias legislativas na Câmara, qualquer entidade do processo parlamentar (um deputado, uma comissão, um parecer, uma sessão plenária) herda as propriedades de **Res**, permitindo que o sistema de busca responda a perguntas complexas como: *"Quais expressões de discursos de autoria do Deputado X sobre Direito Ambiental foram manifestadas em formato de vídeo em 2022?"*.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Nível FRBR (WEMI) | Natureza | Pergunta-Chave | Exemplo na Câmara |
| :--- | :--- | :--- | :--- |
| **Obra (Work)** | Abstrata / Conceitual | O que foi concebido idealmente? | O *Regimento Interno da Câmara* |
| **Expressão** | Linguística / Semiótica | Em que forma e idioma se realizou? | O texto consolidado em língua portuguesa |
| **Manifestação** | Comercial / Produção | Como foi corporificado e publicado? | A edição impressa da Edições Câmara de 2024 |
| **Item** | Tangível / Exemplar | Qual é a cópia física individual? | O livro carimbado com o tombo nº 55.432 na estante |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Inversão Obra vs. Expressão:** A banca afirma que *"a tradução de uma obra literária para o espanhol constitui uma nova Obra dentro do modelo FRBR"*. **Gabarito: ERRADO.** A tradução é uma nova **Expressão** da mesma Obra original! Uma nova Obra surge apenas quando há modificação substancial de conteúdo (ex.: uma adaptação ou paródia autônoma).
- **Mudança de Manifestação sem Mudar Expressão:** A reimpressão idêntica de um livro mudando apenas o tipo de papel e a capa gera uma nova Manifestação, mas mantém a mesma Expressão. **Gabarito: CERTO.**
- **Unificação no LRM:** Dizer que o LRM descartou o WEMI. **Gabarito: ERRADO.** O LRM preservou a cadeia WEMI como subclasses diretas da entidade *Res*.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **IFLA Study Group on the Functional Requirements for Bibliographic Records.** *Functional Requirements for Bibliographic Records: Final Report*. München: K. G. Saur, 1998. (Relatório canônico do FRBR).
- **IFLA Working Group on Functional Requirements and Numbering of Authority Records (FRANAR).** *Functional Requirements for Authority Data (FRAD)*. München: K. G. Saur, 2009.
- **RIVA, Pat; LE BŒUF, Patrick; ŽUMER, Maja.** *IFLA Library Reference Model (LRM): A Conceptual Model for Bibliographic Information*. The Hague: IFLA, 2017.
- **MORENO, Fernanda Paula; MEY, Eliane Serrão Alves.** A família dos modelos conceituais FRBR: origens, estrutura e desdobramentos. *Perspectivas em Ciência da Informação*, v. 23, n. 4, p. 110-132, 2018.
- **ZINS, Chaim.** Conceptual approaches for defining data, information, and knowledge. *Journal of the American Society for Information Science and Technology*, v. 58, n. 4, p. 479-493, 2007.""",

    'sub-2-4': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A codificação da informação catalográfica exige o domínio articulado entre a **Notação de Autor**, o formato canônico **MARC 21** e o padrão de metadados web **Dublin Core**:
1. **Notação de Autor (Cutter-Sanborn e PHA):**
   - **Finalidade:** Ordenar alfabeticamente os livros com a mesma classificação temática nas estantes e compor o número de chamada (*Call Number* = Notação de Classe + Notação de Autor + Edição/Ano).
   - **Tabela Cutter-Sanborn:** Composta pela letra inicial do sobrenome do autor seguida de dois ou três algarismos e, quando necessário, letra minúscula de desambiguação de título (*obra-marca* ou *workmark*).
   - **Tabela PHA (Paula Hawkins de Azevedo):** Adaptação brasileira consagrada para nomes luso-brasileiros.
2. **Formato MARC 21 (Estrutura e Campos Bibliográficos Principais):**
   - **Estrutura:** Líder (24 posições fixas) $\\to$ Diretório $\\to$ Campos de Controle (00X) $\\to$ Campos Variáveis de Dados (01X a 9XX, com 2 indicadores e subcampos antecedidos por `$`).
   - **Blocos Canônicos de Campos:**
     - `020`: ISBN | `041`: Código de idioma | `080`: Número da CDU | `082`: Número da CDD.
     - `100`: Entrada principal — Nome pessoal (autor).
     - `110`: Entrada principal — Entidade coletiva (órgãos públicos, empresas).
     - `111`: Entrada principal — Evento/Congresso/Conferência.
     - `245`: Título principal e indicação de responsabilidade (`$a` título, `$b` subtítulo, `$c` responsabilidade).
     - `250`: Edição (`$a` ex.: "3. ed.").
     - `260` / `264`: Dados de publicação/distribuição/fabricação (`$a` local, `$b` publicador/editora, `$c` data).
     - `300`: Descrição física (`$a` extensão/páginas, `$b` detalhes ilustrativos, `$c` dimensões em cm).
     - `500`: Nota geral | `505`: Nota de conteúdo formatada.
     - `650`: Assunto — Tópico geral (com indicadores para tesauro/vocabulário).
     - `700`: Entrada secundária — Nome pessoal (coautores, organizadores, ilustradores).
     - `856`: Localização eletrônica e acesso (URI / Link web).
3. **Dublin Core Metadata Element Set (ISO 15836):**
   - Padrão internacional de 15 elementos básicos: *Title, Creator, Subject, Description, Publisher, Contributor, Date, Type, Format, Identifier, Source, Language, Relation, Coverage, Rights*.
   - Simples (15 elementos sem qualificadores) vs. Qualificado (com termos de refinamento e esquemas de codificação).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Composição do Número de Chamada na Biblioteca Pedro Aleixo):** Um livro de Direito Constitucional escrito por Gilmar Ferreira Mendes recebe a classificação CDU `342(81)` e a notação Cutter-Sanborn `M538d` (onde `M538` representa o autor Mendes e `d` é a primeira letra significativa do título *Direito Constitucional* para desempatar de outras obras do mesmo autor). O número de chamada colado na lombada garante a ordenação exata nas estantes de livre acesso.
- **Cenário 2 (Catalogação de Publicação Oficial no MARC 21):** Ao catalogar o relatório final da *Comissão Parlamentar Mista de Inquérito dos Atos de 8 de Janeiro*, o catalogador utiliza:
  - `110 1# $a Brasil. $b Congresso Nacional. $b Comissão Parlamentar Mista de Inquérito...`
  - `245 10 $a Relatório final... $c Relatora: Senadora Eliziane Gama.`
  - `264 #1 $a Brasília : $b Edições Câmara, $c 2023.`
- **Cenário 3 (Mapeamento MARC $\\to$ Dublin Core na BDCam):** Quando o registro MARC 21 da biblioteca é exportado para o repositório digital DSpace (BDCam), o sistema executa um *crosswalk*: o campo MARC `245$a` mapeia para `dc.title`, o campo `100$a` mapeia para `dc.creator` e o campo `650$a` mapeia para `dc.subject`.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Campo MARC 21 | Descrição e Finalidade | Primeiro Indicador Crítico | Subcampos Chave |
| :--- | :--- | :--- | :--- |
| **100** | Autor Pessoal Principal | 0: Prenome / 1: Sobrenome / 3: Família | `$a` Nome, `$d` Datas (nasc.-morte) |
| **110** | Autor Entidade Coletiva | 1: Jurisdição territorial / 2: Ordem direta | `$a` Jurisdição/Nome, `$b` Subordinado |
| **245** | Título e Responsabilidade | 0: Não gera secundária / 1: Gera secundária | `$a` Título, `$b` Resto, `$c` Responsab. |
| **264** | Publicação / Distribuição (RDA) | 2º indicador: 0=Produção, 1=Publicação | `$a` Local, `$b` Nome, `$c` Data |
| **650** | Ponto de Acesso de Assunto | 2º ind.: 0=LCSH, 7=Vocab. Controlado em `$2` | `$a` Termo de assunto, `$v` Forma |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Primeiro Indicador do Campo 110:** A banca afirma que *"para catalogar a Petrobras como autor corporativo no campo 110, deve-se usar o primeiro indicador 1 (jurisdição)"*. **Gabarito: ERRADO.** Entidades de ordem direta levam o primeiro indicador 2 (`110 2# $a Petróleo Brasileiro S.A.`); o indicador 1 é reservado exclusivamente para órgãos sob jurisdição geográfica (`110 1# $a Brasil. $b Ministério da Fazenda.`).
- **Segundo Indicador do Campo 245:** O segundo indicador do 245 representa o **número de caracteres a ignorar na ordenação** (artigos definidos e indefinidos). Para *"A Constituição do Brasil"*, o segundo indicador deve ser `2` (o "A" + o espaço contam 2 caracteres). Se for zero, a ordenação buscará na letra A.
- **O Dublin Core Substitui o MARC 21 na Descrição Detalhada:** Dizer que o Dublin Core substitui o MARC 21 em catalogação detalhada de livros raros. **Gabarito: ERRADO.** O Dublin Core é um padrão simples de metadados para interoperabilidade geral, insuficiente para o nível de exaustividade e granularidade do MARC 21.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **LIBRARY OF CONGRESS.** *MARC 21 Format for Bibliographic Data*. Washington: Library of Congress, Network Development and MARC Standards Office, 2022. (Manual oficial canônico).
- **DUBLIN CORE METADATA INITIATIVE (DCMI).** *DCMI Metadata Terms (ISO 15836-1:2017)*. DCMI, 2020.
- **SILVEIRA, Amélia.** *A notação de autor e a tabela Cutter-Sanborn*. Florianópolis: Ed. da UFSC, 2002.
- **MEY, Eliane Serrão Alves; SILVEIRA, Nair Kobashi.** *Catalogação no plural*. Brasília: Briquet de Lemos, 2009.
- **FURRIE, Betty.** *O MARC bibliográfico: um guia introdutório*. Brasília: Thesaurus, 2000.""",

    'sub-2-5': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A catalogação governamental e o conhecimento sobre a **Biblioteca da Câmara dos Deputados (Biblioteca Pedro Aleixo)** constituem temas obrigatórios e com forte peso na prova:
1. **Regras Canônicas de Catalogação de Órgãos Públicos (AACR2r Cap. 24 e RDA Cap. 11):**
   - **Regra Geral de Subordinação à Jurisdição (AACR2 24.18):** Entram subordinados diretamente à jurisdição territorial (País, Estado ou Município) os órgãos que integram o núcleo de autoridade política do Estado: ministérios, secretarias, órgãos legislativos, órgãos judiciários e forças armadas.
     - *Exemplo:* `Brasil. Congresso Nacional. Câmara dos Deputados.`
     - *Exemplo:* `Brasil. Supremo Tribunal Federal.`
   - **Exceção Fundamental (Entidades com Entrada Direta - AACR2 24.17):** Entidades da administração pública indireta com personalidade jurídica própria e nomes distintivos — universidades públicas, hospitais estatais, empresas públicas, sociedades de economia mista e institutos de pesquisa — entram **diretamente sob o seu próprio nome**, sem a jurisdição!
     - *Exemplo:* `Universidade de Brasília.` (E NUNCA `Brasil. Universidade de Brasília.`).
     - *Exemplo:* `Empresa Brasileira de Correios e Telégrafos.`
2. **História e Estrutura da Biblioteca da Câmara dos Deputados:**
   - **Criação Secular:** Criada em **1826**, junto à instalação da primeira Assembleia Geral Constituinte e Legislativa do Império do Brasil, no Palácio Pedro Ernesto (Rio de Janeiro).
   - **Transferência para Brasília:** Transferida em 1960 com a fundação da nova Capital Federal.
   - **Patrono:** Denominada formalmente **Biblioteca Pedro Aleixo** pela Resolução da Câmara nº 25/1984.
   - **Vinculação Institucional:** Integra a estrutura do **Centro de Documentação e Informação (CEDI)**, que por sua vez se subordina à Diretoria-Geral da Câmara.
   - **Rede Virtual de Bibliotecas (RVBI):** Rede cooperativa coordenada pela Secretaria de Biblioteca e Arquivo do **Senado Federal**, da qual a Câmara é membro cofundador e usuário central.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Catalogação de Publicação de Comissão Parlamentar):** Ao dar entrada no livro técnico da *Comissão de Constituição e Justiça e de Cidadania (CCJC)*, o bibliotecário da Câmara aplica a regra de subordinação hierárquica sucessiva no MARC 21:
  - `110 1# $a Brasil. $b Congresso Nacional. $b Câmara dos Deputados. $b Comissão de Constituição e Justiça e de Cidadania.`
- **Cenário 2 (Catalogação de Livro da Fiocruz ou Ipea):** A Fundação Oswaldo Cruz (Fiocruz) e o Instituto de Pesquisa Econômica Aplicada (Ipea) publicam um estudo sobre saúde pública para subsídio aos deputados. Como são fundações públicas da administração indireta com nomes distintivos (AACR2 24.17), a entrada principal é **direta**: `110 2# $a Fundação Oswaldo Cruz.` e `110 2# $a Instituto de Pesquisa Econômica Aplicada.`.
- **Cenário 3 (Gestão de Obras Raras no Acervo Histórico):** A Seção de Obras Raras da Biblioteca Pedro Aleixo custodia os anais originais manuscritos do Império e as primeiras constituições do Brasil. O bibliotecário aplica políticas rigorosas de preservação física combinadas à digitalização e disponibilização na Biblioteca Digital da Câmara (BDCam / DSpace).

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Tipo de Órgão Público | Regra Canônica de Entrada | Indicador MARC 110 | Exemplo Correto Cebraspe |
| :--- | :--- | :--- | :--- |
| **Órgão Central de Poder (Exec./Leg./Jud.)** | Subordinado à Jurisdição territorial | 1 (Jurisdição) | `Brasil. Ministério da Educação.` |
| **Entidade da Adm. Indireta (Universidade/Empresa)** | Ordem Direta pelo próprio nome | 2 (Ordem direta) | `Universidade Federal do Rio de Janeiro.` |
| **Tribunal de Contas (TCU / TCEs)** | Órgão Constitucional Autônomo (não é do Judiciário!) | 1 (Jurisdição) | `Brasil. Tribunal de Contas da União.` |
| **Coordenação da RVBI** | Órgão Gestor: **Senado Federal** | - | Não é a Câmara que coordena a RVBI! |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Jurisdição Forçada em Universidades:** A banca formula itens afirmando que, por ser federal, a universidade pública deve entrar precedida por "Brasil" (`Brasil. Universidade Federal do Ceará`). **Gabarito: ERRADO.** Entidades universitárias entram diretamente pelo seu nome oficial.
- **Natureza Jurídica do TCU:** Dizer que o TCU entra subordinado ao Poder Legislativo ou que faz parte do Poder Judiciário. **Gabarito: ERRADO.** O rol do art. 92 da CF/88 é taxativo e não inclui o TCU no Judiciário; o TCU é órgão constitucional autônomo e entra como `Brasil. Tribunal de Contas da União.`.
- **Quem Coordena a RVBI:** Afirmar que a gestão tecnológica da RVBI é de competência da Biblioteca da Câmara. **Gabarito: ERRADO.** A coordenação executiva e tecnológica da RVBI pertence ao **Senado Federal**.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BRASIL.** *Constituição da República Federativa do Brasil de 1988*. Brasília: Congresso Nacional, 1988. (Art. 44 a 75 sobre o Poder Legislativo e órgãos federais).
- **ANGLO-AMERICAN CATALOGUING RULES (AACR2r).** 2. ed. rev. São Paulo: FEBAB, 2002. (Capítulo 24: Cabeçalhos para Entidades Coletivas, regras 24.17 e 24.18).
- **CÂMARA DOS DEPUTADOS.** *Regulamento Administrativo da Câmara dos Deputados*. Resolução nº 20/1971 e atualizações. (Estrutura do Centro de Documentação e Informação - CEDI).
- **REDE VIRTUAL DE BIBLIOTECAS (RVBI).** *Manual de Catalogação da RVBI*. Brasília: Senado Federal / Câmara dos Deputados, 2021.
- **MEY, Eliane Serrão Alves.** *Introdução à catalogação*. Brasília: Briquet de Lemos, 1995.""",

    'sub-2-6': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
No ambiente de bibliotecas digitais, portais governamentais e acervos multimídia, os **metadados** são dados estruturados sobre dados que sustentam toda a arquitetura de busca:
1. **Tipologia dos Metadados (NISO - National Information Standards Organization):**
   - **Descritivos:** Identificam e descrevem recursos para fins de busca, identificação e seleção (ex.: título, autor, assunto, data de publicação, resumo).
   - **Estruturais:** Indicam como objetos compostos se articulam internamente (ex.: como as páginas de um livro digitalizado se ordenam para formar capítulos; como faixas de áudio compõem uma sessão plenária).
   - **Administrativos:** Apoiam a gestão técnica e operacional do objeto no ciclo de vida. Subdividem-se em:
     - *Metadados Técnicos:* Resolução de escaneamento, formato de compressão (TIFF, MP4), taxa de amostragem.
     - *Metadados de Preservação:* Checksums (MD5, SHA-256), migração de formato, histórico de integridade (PREMIS).
     - *Metadados de Direitos (*Rights*):* Licença de uso, direitos autorais, restrições de confidencialidade (Creative Commons).
2. **Perfis de Aplicação (*Application Profiles*) e Crosswalks:**
   - **Perfil de Aplicação:** Customização de um ou mais esquemas de metadados padrão para atender às necessidades específicas de uma instituição, sem violar os esquemas originais (ex.: o Perfil de Aplicação BDCam baseado em Dublin Core).
   - **Crosswalk (Mapeamento Semântico):** Tabela de correspondência formal que converte atributos entre esquemas distintos (ex.: MARC 21 para Dublin Core, ou Dublin Core para MODS).
3. **Padrões Específicos para Recursos Audiovisuais:**
   - Recursos sonoros e visuais exigem granularidade para suporte, codec, taxa de bits e duração (ID3 para áudio, MPEG-7 e EXIF para fotografia e vídeo).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Metadados Estruturais nos Discursos Parlamentares Gravados):** O serviço de audiovisual da Câmara grava em vídeo as sessões do Plenário Ulysses Guimarães. Para que o cidadão possa clicar diretamente no capítulo referente ao discurso de um deputado específico, o bibliotecário modela **metadados estruturais** (METS) que amarram os marcadores de tempo aos dados descritivos do parlamentar.
- **Cenário 2 (Metadados de Preservação com PREMIS na BDCam):** Ao arquivar documentos históricos digitalizados na BDCam, o sistema gera automaticamente um hash SHA-256 e armazena metadados administrativos de preservação conforme o padrão PREMIS, permitindo auditar periodicamente se algum bit foi corrompido nos discos de armazenamento.
- **Cenário 3 (Crosswalk de Metadados na Interoperabilidade com o LexML):** A Câmara dos Deputados compartilha seus projetos de lei e notas técnicas com o Portal LexML Brasil. Como a Câmara usa internamente sistemas legados e MARC 21, um *crosswalk* converte automaticamente os campos para a ontologia XML do LexML.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Categoria de Metadados | Pergunta Atendida | Exemplos Canônicos de Elementos |
| :--- | :--- | :--- |
| **Descritivo** | Quem criou? Sobre o que fala? Onde achar? | Título, Criador, Assunto, Ano, Resumo |
| **Estrutural** | Como as partes se articulam no todo? | Ordem de páginas, sequência de faixas, hierarquia de XML |
| **Administrativo (Técnico)** | Que características de hardware/software possui? | Resolução (300 dpi), codec (H.264), extensão (.pdf) |
| **Administrativo (Preservação)** | O arquivo se mantém íntegro e autêntico? | Hash SHA-256, histórico de eventos PREMIS, formato |
| **Administrativo (Direitos)** | Quem pode acessar e sob que licença? | Domínio público, CC BY-NC 4.0, sigilo regimental |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Confusão entre Metadado Estrutural e Técnico:** O Cebraspe adora afirmar que *"a indicação da resolução em pixels e do perfil de cores de uma fotografia digital constitui metadado estrutural"*. **Gabarito: ERRADO.** Resolução e cor são metadados **administrativos do tipo técnico**. O metadado estrutural cuida do relacionamento entre partes (ex.: relacionamento página $\\to$ tomo).
- **Criação de Novos Elementos no Perfil de Aplicação:** Dizer que um perfil de aplicação cria novas regras universais incompatíveis com os padrões internacionais. **Gabarito: ERRADO.** Perfis de aplicação apenas combinam e restringem esquemas existentes para um contexto local.
- **Checksum como Metadado Descritivo:** Afirmar que o hash MD5 de um arquivo é metadado descritivo de assunto. **Gabarito: ERRADO.** É metadado administrativo de preservação e fixidez.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **NISO (National Information Standards Organization).** *Understanding Metadata: What is Metadata, and What is it For?* Baltimore: NISO Press, 2017. (Manual de referência mundial sobre os tipos de metadados).
- **ALVES, Rachel Cristina Vesu.** *Metadados como elementos do processo de representação da informação digital*. 2010. Tese (Doutorado em Ciência da Informação) – Universidade Estadual Paulista (UNESP), Marília, 2010.
- **BACA, Murtha (Ed.).** *Introduction to Metadata*. 3. ed. Los Angeles: Getty Publications, 2016.
- **PREMIS EDITORIAL COMMITTEE.** *PREMIS Data Dictionary for Preservation Metadata*. Version 3.0. Washington: Library of Congress, 2015.
- **ISO 15836-1:2017.** *Information and documentation — The Dublin Core metadata element set — Part 1: Core elements*. Genebra: ISO, 2017.""",

    'sub-2-7': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A modernização dos catálogos exige o domínio sobre esquemas XML avançados, o modelo **BIBFRAME** e a integração da Biblioteconomia à **Web de Dados Conectados (*Linked Open Data*)**:
1. **Esquemas XML Canônicos da Library of Congress:**
   - **MODS (*Metadata Object Description Schema*):** Esquema baseado em XML para metadados bibliográficos descritivos; mais rico e flexível que o Dublin Core, porém mais simples e legível por humanos que o MARC 21. Usa tags textuais amigáveis (ex.: `<titleInfo>`, `<name>`, `<originInfo>`).
   - **METS (*Metadata Encoding and Transmission Standard*):** Esquema XML padronizado para codificar metadados descritivos, administrativos e estruturais de objetos digitais complexos em repositórios e bibliotecas digitais. Composto por 7 seções: cabeçalho, metadados descritivos, metadados administrativos, grupo de arquivos, mapa estrutural (*structural map* — a espinha dorsal obrigatória do METS), links estruturais e comportamento.
2. **O Padrão BIBFRAME (Bibliographic Framework):**
   - Iniciativa da *Library of Congress* para substituir definitivamente o formato MARC 21 por uma modelagem nativa da Web Semântica.
   - Baseia-se no framework **RDF (*Resource Description Framework*)** e utiliza URIs em vez de códigos textuais estáticos.
   - **Classes Principais do BIBFRAME 2.0:**
     - `Work` (Obra): Nível conceitual mais elevado.
     - `Instance` (Instância): A publicação/manifestação física ou eletrônica.
     - `Item` (Item): O exemplar individualizado.
3. **Linked Open Data (LOD) e as 5 Estrelas de Tim Berners-Lee:**
   - Dados publicados na web com licença aberta e conexões semânticas padronizadas (RDF, SPARQL, OWL).
   - ⭐ Disponível na web sob licença aberta (qualquer formato, ex.: PDF).
   - ⭐⭐ Estruturado de forma legível por máquina (ex.: planilha Excel).
   - ⭐⭐⭐ Formato não proprietário aberto (ex.: CSV).
   - ⭐⭐⭐⭐ Padrões W3C abertos (RDF e SPARQL com URIs de identificação).
   - ⭐⭐⭐⭐⭐ Conectado a dados de terceiros (*Linked Data* para fornecer contexto).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (BIBFRAME na Biblioteca Pedro Aleixo):** Ao migrar os catálogos da Câmara para o ecossistema de Linked Data, o registro do livro *O Processo Legislativo Constitucional* deixa de ser um bloco de strings isoladas em MARC 21 e passa a usar URIs: o autor Ulysses Guimarães é vinculado ao identificador internacional VIAF/Wikidata (`http://viaf.org/viaf/...`) e a editora é vinculada ao Vocabulário Controlado do Congresso.
- **Cenário 2 (Empacotamento METS de Obras Raras na BDCam):** Um livro raro do séc. XIX com 500 páginas digitalizadas é empacotado para preservação no padrão OAIS. O arquivo METS contém a seção obrigatória `<structMap>` que amarra a ordem exata das 500 imagens TIFF aos metadados descritivos MODS e aos hashes PREMIS.
- **Cenário 3 (Dados Abertos 5 Estrelas no Portal da Câmara):** A Câmara publica a relação diária de deputados, votações e proposições legislativas. Ao fornecer endpoints SPARQL com triplas RDF conectadas à Wikidata e ao Senado, a Câmara atinge o **nível máximo de 5 Estrelas de Dados Conectados de Tim Berners-Lee**.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Padrão / Tecnologia | Instituição Criadora | Papel Central no Ecossistema |
| :--- | :--- | :--- |
| **MODS** | Library of Congress | Descrição bibliográfica em XML (intermediário entre DC e MARC) |
| **METS** | Library of Congress | Estrutura de empacotamento completo de objetos digitais em XML |
| **BIBFRAME 2.0** | Library of Congress | Sucessor do MARC 21 baseado em triplas RDF (Work, Instance, Item) |
| **SPARQL** | W3C | Linguagem de consulta e recuperação para bases de dados RDF/LOD |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **A Seção Obrigatória do METS:** O Cebraspe pergunta qual das seções do documento METS é absolutamente indispensável e obrigatória. **Gabarito: o Mapa Estrutural (*Structural Map / <structMap>*).** Todas as outras seções são opcionais conforme o perfil, mas o METS não existe sem o mapa estrutural.
- **BIBFRAME como Substituto do RDA:** Dizer que o BIBFRAME foi criado para substituir o código RDA. **Gabarito: ERRADO.** O BIBFRAME substitui o **formato MARC 21**, não o RDA! O RDA fornece as regras de conteúdo que são codificadas em BIBFRAME.
- **Níveis do BIBFRAME 2.0:** O Cebraspe cobra as classes centrais do BIBFRAME: `Work`, `Instance` e `Item` (além de `Agent`, `Subject` e `Event`).

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **LIBRARY OF CONGRESS.** *BIBFRAME 2.0 Model*. Washington: Library of Congress, 2023. (Documentação canônica do modelo de transição do MARC para RDF).
- **LIBRARY OF CONGRESS.** *METS: Metadata Encoding & Transmission Standard: Primer and Reference Manual*. Washington: Library of Congress, 2010.
- **LIBRARY OF CONGRESS.** *MODS: Metadata Object Description Schema: User Guidelines*. Washington: Library of Congress, 2022.
- **BERNERS-LEE, Tim.** *Linked Data: Design Issues*. W3C, 2006. (A definição canônica dos quatro princípios e do esquema de cinco estrelas de dados abertos).
- **HEATH, Tom; BIZER, Christian.** *Linked Data: Evolving the Web into a Global Data Space*. San Rafael: Morgan & Claypool, 2011."""
}

def aplicar_lote1():
    print("Iniciando injeção didática do Lote 1 (M1 e M2)...")
    sucessos = 0
    for sub_id, texto_didatico in TEXTOS_DIDATICOS.items():
        # localizar arquivo
        caminhos = [
            f"src/content/modules/m1-fundamentos/{sub_id}.ts",
            f"src/content/modules/m2-catalogacao/{sub_id}.ts",
            f"src/content/modules/m2-5-orgaos-gov/{sub_id}.ts",
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

        # Inserir antes de 'checkpoints: ['
        alvo = "  checkpoints: ["
        if alvo not in conteudo:
            print(f"❌ Não encontrou '{alvo}' em {target_path}")
            continue

        # Escapando crases e interpolações no texto didático para JS template string
        texto_limpo = texto_didatico.strip()
        texto_escapado = re.sub(r'(?<!\\)`', r'\`', texto_limpo)
        texto_escapado = re.sub(r'(?<!\\)\$\{', r'\${', texto_escapado)
        bloco_didatico = f"  teoriaDidaticaMarkdown: `{texto_escapado}`,\n  checkpoints: ["

        novo_conteudo = conteudo.replace(alvo, bloco_didatico, 1)

        with open(target_path, "w", encoding="utf-8") as f:
            f.write(novo_conteudo)

        print(f"✅ Injetado com sucesso em {sub_id} ({target_path})")
        sucessos += 1

    print(f"\nFinalizado Lote 1: {sucessos}/{len(TEXTOS_DIDATICOS)} submódulos atualizados com sucesso.")

if __name__ == "__main__":
    aplicar_lote1()
