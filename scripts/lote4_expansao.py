# -*- coding: utf-8 -*-
"""
Script de Expansão Didática — Lote 4 (M7, M8 e M9: 12 Submódulos)
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
    'sub-7-2': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
Os **Agentes Biológicos de Degradação** e o **Controle Integrado de Pragas (CIP)** são temas críticos de conservação preventiva cobrados pelo Cebraspe:
1. **Principais Agentes Biológicos:**
   - **Micro-organismos (Fungos / Bolor):** Desenvolvem-se em ambientes com umidade relativa superior a 65% e temperaturas elevadas (> 22 °C). Provocam manchas ácidas e coloridas no papel (*foxing*), digerem o adesivo de amido e quebram as fibras de celulose.
   - **Insetos Bibliófagos:**
     - *Brocas (Anóbios):* Larvas de besouros que perfuram galerias sinuosas e contínuas no interior de livros e encadernações, deixando resíduo em pó fino (*frass*).
     - *Traças (Tisanuros / Lepisma saccharina):* Insetos ágeis e prateados que consomem amido, cola, papel acetinado e tecidos, causando bordas rendilhadas e erosões superficiais.
     - *Baratas (Blattodea) e Cupins (Térmitas):* Insetos mastigadores altamente destrutivos; os cupins subterrâneos podem devorar estantes de madeira e acervos inteiros de dentro para fora em semanas.
   - **Roedores (Ratos e Camundongos):** Destroem papel e couro para construção de ninhos e roem fios elétricos (risco grave de incêndio).
2. **Controle Integrado de Pragas (CIP / IPM - Integrated Pest Management):**
   - Abordagem holística, preventiva e ecologicamente sustentável que substitui a aplicação indiscriminada e periódica de inseticidas químicos agressivos.
   - **Os 4 Pilares do CIP:** Inspeção e monitoramento contínuo (armadilhas adesivas de chão com feromônio) $\\to$ Higiene e saneamento rigoroso $\\to$ Bloqueio mecânico de entrada (vedação de frestas, telas milimétricas em janelas) $\\to$ Métodos de controle não tóxicos.
   - **Tratamento Não Tóxico Canônico:** **Anoxia** (expurgos em câmaras herméticas sem oxigênio, com nitrogênio ou argônio) e congelamento controlado (*freezing* a -20 °C).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Monitoramento por Armadilhas no Cofre de Obras Raras):** Na Seção de Obras Raras da Biblioteca Pedro Aleixo, o bibliotecário-conservador instala armadilhas adesivas de solo com atrativo feromônico a cada 5 metros. Semanalmente, ele inspeciona as armadilhas: a captura de uma única traça ativa um protocolo de vistoria minuciosa das prateleiras adjacentes antes que ocorra infestação.
- **Cenário 2 (Tratamento de Livro Raro Infestado por Anóbia):** Um exemplar de 1830 doado ao CEDI chega com orifícios de broca e pó fresco. Em vez de usar brometo de metila (químico tóxico proibido que danifica o papel e envenena o servidor), a equipe encaminha o volume para uma câmara de **anoxia** com gás nitrogênio por 21 dias, eliminando ovos, larvas e insetos adultos por asfixia sem química.
- **Cenário 3 (Bloqueio Físico contra Roedores nas Áreas Subterrâneas):** Os depósitos de anais legislativos situados no subsolo do Palácio do Congresso Nacional passam por vistoria de vedação mecânica: soleiras com escovas de vedação de aço, ralos com telas pesadas e proibição terminante de lanches e copos de café nas áreas de guarda de livros.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Praga / Inseto | Tipo de Dano Típico | Vestígio Característico | Preferência Alimentar |
| :--- | :--- | :--- | :--- |
| **Fungos (Bolor)** | Manchas coloridas (*foxing*) e enfraquecimento | Cheiro de mofo, pó pulverulento | Celulose, amido e gelatina sob UR > 65% |
| **Brocas (Anóbios)** | Perfurações profundas e túneis | Pó de broca fino (*frass*) nas prateleiras | Encadernações de couro, madeira e papel |
| **Traças (Lepisma)** | Erosão superficial e bordas rendilhadas | Excrementos escuros microscópicos | Cola de amido, cola de encadernação, fotos |
| **Cupins (Térmitas)** | Destruição oca massiva | Túneis de terra nas paredes | Celulose em geral e estruturas de madeira |
| **Controle Químico vs. CIP** | CIP prioriza prevenção mecânica | Monitoramento com armadilhas | Químico tóxico é o último recurso |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Dedetização Química Periódica Obrigatória:** A banca formula itens afirmando que *"a biblioteca deve realizar dedetizações químicas preventivas com inseticidas em spray a cada 6 meses sobre os livros"*. **Gabarito: ERRADO.** A aplicação química direta nos livros degrada o papel, acelera a hidrólise ácida e é expressamente vedada pelo CIP; o foco é o controle do ambiente e monitoramento não tóxico.
- **Foxing Causado por Calor:** Afirmar que o *foxing* (manchas ferruginosas) decorre exclusivamente do calor da luz solar. **Gabarito: ERRADO.** O *foxing* tem origem biológica (micro-organismos e fungos) combinada a impurezas metálicas (ferro) presentes na massa de fabricação do papel.
- **Armadilhas de Luz UV para Traças de Chão:** Traças (*Lepisma*) são fotofóbicas (fogem da luz); armadilhas de luz não são eficazes para elas, exigindo-se armadilhas adesivas de chão.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **CASSARES, Norma Cristina.** *Como fazer conservação preventiva em arquivos e bibliotecas*. São Paulo: Arquivo do Estado; Imprensa Oficial, 2000. (O manual de conservação mais adotado no Brasil).
- **SPINELLI JÚNIOR, Jayme.** *A conservação de acervos bibliográficos e documentais*. Rio de Janeiro: Fundação Biblioteca Nacional, 1995.
- **BECK, Ingrid.** *Manual de conservação de documentos*. Rio de Janeiro: Arquivo Nacional, 1995.
- **PINNIGER, David.** *Pest management in museums, archives and historic houses*. London: Archetype Publications, 2001. (Referência mundial sobre CIP em instituições de memória).
- **OGDEN, Sherelyn (Org.).** *Manual de preservação de documentos*. Rio de Janeiro: Projeto Conservação Preventiva em Bibliotecas e Arquivos (CPBA); Arquivo Nacional, 2001.""",

    'sub-7-3': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Conservação Preventiva** estabelece as rotinas sistemáticas de higienização, acondicionamento e manuseio que retardam a degradação física dos suportes:
1. **Higienização de Acervos:**
   - Remoção mecânica de poeira e sujidades superficiais acumuladas (a poeira é higroscópica e ácida, absorvendo umidade e nutrindo fungos).
   - **Técnicas e Equipamentos Canônicos:**
     - *Trincha de cerdas macias:* Varredura suave da borda superior (corte superior) para fora do livro.
     - *Aspirador de pó com filtro HEPA e controle de sucção:* Bocal protegido com gaze/filtro para não aspirar fragmentos de papel soltos.
     - *Borracha em pó (ou pó de borracha macia):* Utilizada com movimentos circulares para limpar sujidades resistentes em margens sem texto (nunca sobre tintas frágeis ou manuscritos).
   - **Proibições Absolutas:** Uso de água, álcool, fita crepe, fita adesiva comum (Durex) e grampos metálicos oxidáveis.
2. **Acondicionamento e Embalagens:**
   - Embalagens de proteção primária funcionam como barreira contra luz, poluentes atmosféricos e oscilações bruscas de umidade.
   - **Materiais Recomendados:** Papel alcalino (*acid-free*) com reserva alcalina de carbonato de cálcio ($pH \\ge 7,5$); cartão triplex alcalino; caixas de polipropileno corrugado (Polionda neutro); envelopes de poliéster virgem (Mylar/Melinex para manuscritos e fotos).
3. **Manuseio e Acomodação nas Estantes:**
   - Apoio firme nas estantes sem compressão excessiva (que deforma a encadernação) e sem folga exagerada (que tomba e empena o volume).
   - Retirar o livro da estante empurrando os volumes laterais e segurando pelo meio da lombada (NUNCA puxar pela coifa superior da lombada!).
   - Uso de luvas: luvas de algodão ou nitrílicas para fotos, metais e obras raras; para papel comum encadernado, as mãos limpas e secas são preferíveis para não perder a sensibilidade tátil e rasgar folhas frágeis.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Rotina de Higienização de Cortes de Livros no Acervo):** A equipe de conservação da Biblioteca Pedro Aleixo realiza a higienização mecânica semestral: cada volume é retirado da estante, mantido firmemente fechado e escovado com trincha macia a partir da lombada em direção à borda aberta do corte, impedindo que a poeira caia entre as páginas do miolo.
- **Cenário 2 (Substituição de Prendedores Metálicos Oxidados em Processos Históricos):** Ao higienizar maços de discursos manuscritos de deputados do Império, o bibliotecário remove todos os clipes e alfinetes de ferro enferrujados que estavam manchando o papel. Para manter os maços unidos, utiliza tiras de papel alcalino dobrado ou clipes plásticos inertes.
- **Cenário 3 (Confecção de Caixas Sob Medida para Obras Raras):** Uma edição original de 1827 dos *Anais do Parlamento Brasileiro* apresenta lombada solta. Em vez de colar fita adesiva, o técnico confecciona uma caixa de quatro abas sob medida em cartão alcalino neutro (*Four-Flap Enclosure*), protegendo a obra contra poeira e luz até que passe pelo laboratório de restauro.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Ação / Material | Conduta Correta Canônica | Conduta Proibida / Erro Grave | Motivo Técnico |
| :--- | :--- | :--- | :--- |
| **Retirada da Estante** | Empurrar vizinhos e puxar pelo corpo da lombada | Puxar pela coifa superior | Rasga a cabeça da encadernação |
| **Material da Embalagem** | Papel ou cartão alcalino ($pH \\ge 7,5$) | Papel jornal, papelão comum pardo | Migração ácida de lignina |
| **Reparo de Rasgos** | Papel japonês e cola de metilcelulose | Fita durex, fita crepe, fita adesiva | Oxidação irreversível da cola sintética |
| **Uso de Luvas** | Mãos limpas para livros; luvas para fotos | Luvas grossas para virar folhas frágeis | Falta de tato rasga papel antigo |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **O Uso de Fitas Adesivas Comerciais:** A banca afirma que rasgos em folhas de livros podem ser reparados com fita adesiva transparente comum do tipo *Magic Tape*. **Gabarito: ERRADO.** Qualquer fita adesiva comercial comum é terminantemente proibida em conservação de acervos, pois seus adesivos oxidam, mancham o papel de amarelo escuro e tornam-se irreversíveis.
- **Higienização Úmida do Papel:** Afirmar que a poeira das páginas deve ser retirada com pano levemente umedecido em álcool 70%. **Gabarito: ERRADO.** A higienização rotineira é puramente a seco mecânica; água e álcool solubilizam tintas e aceleram a hidrólise ácida.
- **Puxar o Livro pela Coifa:** A banca descreve como técnica padrão puxar o livro pelo topo da lombada com o dedo indicador. **Gabarito: ERRADO.** É a principal causa mecânica de destruição de lombadas em bibliotecas.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **CASSARES, Norma Cristina; MOI, Cláudia.** *Preservação de acervos bibliográficos: princípios e práticas*. São Paulo: Imprensa Oficial; Arquivo Público do Estado, 2008. (A referência mais cobrada em conservação preventiva).
- **SPINELLI JÚNIOR, Jayme.** *A conservação de acervos bibliográficos e documentais*. Rio de Janeiro: FBN, 1995.
- **OGDEN, Sherelyn (Org.).** *Manual de preservação de documentos*. Rio de Janeiro: Projeto CPBA; Arquivo Nacional, 2001.
- **LIBRARY OF CONGRESS.** *Care, Handling, and Storage of Books*. Washington: Preservation Directorate, Library of Congress, 2021.
- **IFLA.** *Principles for the Care and Handling of Library Material*. Haia: IFLA Core Programme on Preservation and Conservation (PAC), 2010.""",

    'sub-7-4': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
As **Intervenções Curativas, a Restauração e os Planos de Contingência contra Desastres** tratam do resgate técnico de acervos danificados por sinistros ou deterioração avançada:
1. **Princípios Éticos Fundamentais da Restauração (Cartas Internacionais de Restauro):**
   - **Reversibilidade:** Todo material, adesivo ou técnica aplicada em uma intervenção deve poder ser removido no futuro sem causar danos ao original.
   - **Legibilidade e Distinguibilidade:** A intervenção não deve falsificar o documento histórico; partes reintegradas devem ser sutis, porém discerníveis pelo olho de um especialista.
   - **Mínima Intervenção:** Intervir apenas no estritamente necessário para garantir a estabilidade física e a funcionalidade do documento, sem buscar uma "falsa aparência de novo".
   - **Estabilidade Química:** Uso exclusivo de adesivos inertes (metilcelulose, cola de amido purificado de trigo/arroz) e papel japonês (*kozo/gampi*) de fibras longas livres de ácido.
2. **Planos de Gestão de Riscos e Contingência contra Desastres (IFLA / CPBA):**
   - Um desastre é qualquer evento imprevisto que cause destruição rápida em larga escala (incêndios, inundações, rompimento de tubulações, desabamentos).
   - **Fases do Plano de Desastres:**
     1. *Prevenção e Mitigação:* Identificação de vulnerabilidades prediais, manutenção de extintores (CO2 e gás limpo FM-200; evitar água sob livros raros), limpeza de calhas e revisão de rede elétrica.
     2. *Preparação:* Formação da brigada interna de salvamento, lista de contatos de emergência atualizada, suprimentos de resgate em prontidão (lonas plásticas, caixas plásticas, toalhas absorventes).
     3. *Resposta Imediata:* Garantir a segurança das vidas humanas em primeiro lugar; isolar a fonte do perigo; estabilizar o ambiente; priorizar o resgate dos acervos mais valiosos da instituição.
     4. *Recuperação:* Triagem, secagem e reabilitação de documentos atingidos.
3. **Resgate de Documentos Molhados (Inundações):**
   - A proliferação de fungos ocorre em **48 a 72 horas** após o contato com a água!
   - Se for impossível secar todo o acervo em até 48 horas, a conduta correta canônica é o **congelamento imediato dos documentos molhados** (a -20 °C), que interrompe o crescimento de fungos e ganha tempo para posterior liofilização (*freeze-drying*) ou secagem lenta com ar circulante frio.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Restauração com Papel Japonês na Biblioteca Pedro Aleixo):** Uma ata original da Constituinte de 1988 apresenta rasgos profundos na folha de assinaturas dos deputados. O restaurador do laboratório do CEDI utiliza papel japonês *Kozo* de 9 g/m² e adesivo de metilcelulose pura. A intervenção é perfeitamente **reversível** em banho de água morna e visível sob luz rasante, cumprindo a ética internacional de restauro.
- **Cenário 2 (Rompimento de Tubulação de Ar-Condicionado no Depósito):** Uma tubulação de condensado se rompe no fim de semana, molhando 2.000 volumes de anais parlamentares. A equipe de emergência da Câmara isola o vazamento e transporta imediatamente os volumes encharcados para câmaras frigoríficas industriais a -20 °C, impedindo que colônias de fungos destruam o papel nas 48 horas seguintes.
- **Cenário 3 (Simulado Anual de Evacuação de Obras Raras):** A Brigada de Emergência do CEDI realiza simulação de incêndio: enquanto os brigadistas direcionam os servidores para as saídas de emergência, os bibliotecários identificam as caixas prioritárias identificadas com fitas refletivas vermelhas (o acervo constitucional histórico), prontas para serem retiradas em carrinhos antichoque.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Conceito / Fase | Ação Primária | Regra Inegociável | Erro Típico da Banca |
| :--- | :--- | :--- | :--- |
| **Reversibilidade** | Uso de materiais solúveis | Remoção sem danos no futuro | Usar cola branca PVA comum |
| **Mínima Intervenção** | Estabilizar a estrutura física | Não redesenhar ou repintar texto | Tentar deixar o livro como "novo" |
| **Documentos Molhados** | Congelar em até 48 horas | Parar o crescimento de fungos | Deixar secar ao sol direto |
| **Extintor em Obras Raras** | Gás limpo (FM-200 / CO2) | Não deixar resíduos corrosivos | Usar pó químico seco ou água |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Secagem de Livros ao Sol:** O Cebraspe propõe que livros encharcados por enchente devem ser abertos ao sol quente do meio-dia para secagem rápida. **Gabarito: ERRADO.** O calor solar empena o papel, deforma encadernações, oxida tintas e acelera o desenvolvimento de fungos; a secagem deve ser feita em ambiente ventilado com ar frio desumidificado ou por congelamento/liofilização.
- **Uso de Adesivo Sintético Irreversível:** Dizer que o restaurador deve usar cola branca escolar (PVA) ou supercola de cianoacrilato para fixar lombadas históricas. **Gabarito: ERRADO.** Fere o princípio ético da **reversibilidade**.
- **Primeira Prioridade no Desastre:** Afirmar que a prioridade número um ao soar o alarme de incêndio é salvar os manuscritos raros. **Gabarito: ERRADO.** A salvaguarda de vidas humanas é a prioridade absoluta número um; os bens materiais só são resgatados após a evacuação segura de todas as pessoas.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **IFLA.** *Diretrizes para o Planejamento de Desastres em Bibliotecas*. Haia: IFLA Core Activity on Preservation and Conservation, 2006. (A cartilha canônica de gestão de desastres).
- **BUCHANAN, Sally A.** *Planejamento e gerenciamento de desastres*. Rio de Janeiro: Projeto CPBA; Arquivo Nacional, 2001.
- **CASSARES, Norma Cristina.** *Como fazer conservação preventiva em arquivos e bibliotecas*. São Paulo: Imprensa Oficial, 2000.
- **CARVALHO, Cláudia S. Rodrigues de et al.** *Gestão de riscos para o patrimônio museológico e bibliográfico*. Rio de Janeiro: Museu Histórico Nacional, 2014.
- **WATERS, Peter.** *Procedures for salvage of water-damaged library materials*. Washington: Library of Congress, 1993.""",

    'sub-8-1': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **ABNT NBR 6023 (Versões 2018 e 2025)** estabelece as regras de elaboração de referências bibliográficas no Brasil e é fonte contínua de questões no Cebraspe:
1. **Regras Gerais de Apresentação:**
   - **Alinhamento:** Alinhadas **à margem esquerda** do texto (e não justificadas!) e com **espaçamento simples** entre linhas.
   - **Separação:** Separadas entre si por um espaço simples em branco.
   - **Destaque Tipográfico (Itálico, Negrito ou Sublinhado):** Aplicado uniformemente no **título da publicação** (ou no título do periódico). Nunca se destaca o subtítulo!
2. **Autoria e Sobrenomes:**
   - Entrada pelo último sobrenome em letras MAIÚSCULAS seguido dos prenomes.
   - *Até 3 autores:* Indicam-se todos, separados por ponto e vírgula (`;`). Ex.: `SILVA, José; SOUZA, Maria; PEREIRA, Carlos.`
   - *Mais de 3 autores:* Convenciona-se indicar apenas o primeiro seguido da expressão latina `et al.`, embora a norma faculte indicar todos os nomes caso seja necessário para a instituição.
   - *Sobrenomes Compostos / Parentesco:* `JÚNIOR`, `FILHO`, `NETO`, `SOBRINHO` acompanham o sobrenome que os precede: `SILVA FILHO, José da.`
   - *Responsabilidade Intelectual Destacada:* Organizadores, compiladores ou coordenadores levam indicação abreviada entre parênteses: `(coord.)`, `(org.)`.
3. **Elementos Essenciais vs. Complementares:**
   - **Livro no Todo:** AUTOR. **Título**: subtítulo. Edição. Local: Editora, data.
   - **Capítulo de Livro (Autor do capítulo = Autor do livro):** AUTOR DO CAPÍTULO. Título do capítulo. *In*: **Título do livro**...
   - **Artigo de Periódico:** AUTOR. Título do artigo. **Título da Revista**, local, volume, número, páginas inicial e final, data.
   - **Documento Online:** Acrescenta-se obrigatoriamente: `Disponível em: URL. Acesso em: dia mês abreviado. ano.` (O mês de maio não se abrevia!).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Normalização de Parecer Técnico na Consultoria Legislativa):** Ao revisar as referências bibliográficas de uma Nota Técnica sobre a reforma tributária elaborada para a Mesa Diretora, o bibliotecário aplica a NBR 6023:
  `BRASIL. Congresso Nacional. Câmara dos Deputados. **Regimento interno da Câmara dos Deputados**. Brasília: Edições Câmara, 2023.`
  O título recebe o negrito, o órgão entra padronizado e o alinhamento fica rigorosamente à esquerda.
- **Cenário 2 (Referência de Documento Eletrônico no Portal LexML):** O bibliotecário referencia um projeto de lei obtido na web:
  `BRASIL. Congresso Nacional. Câmara dos Deputados. **Projeto de Lei nº 2.630, de 2020**. Institui a Lei Brasileira de Liberdade, Responsabilidade e Transparência na Internet. Brasília: Câmara dos Deputados, 2020. Disponível em: https://www.camara.leg.br/proposicoesWeb/... Acesso em: 15 out. 2024.`
- **Cenário 3 (Abreviação de Meses na Revista de Informação Legislativa):** Ao catalogar artigos de revistas para a RVBI, abrevia-se os meses com três letras seguidas de ponto (`jan.`, `fev.`, `mar.`, `abr.`, `jun.`, `jul.`, `ago.`, `set.`, `out.`, `nov.`, `dez.`), exceto o mês de **maio**, que se escreve por extenso sem ponto (`maio`).

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Tipo de Documento | Ordem dos Elementos Essenciais | Onde Fica o Destaque Tipográfico |
| :--- | :--- | :--- |
| **Monografia (Livro)** | AUTOR. Título: subtítulo. Ed. Local: Editora, ano. | No **Título** principal (subtítulo sem destaque) |
| **Artigo de Revista** | AUTOR. Título do artigo. Título da Revista, dados. | No **Título da Revista** (o artigo fica sem destaque) |
| **Capítulo de Livro** | AUTOR DO CAP. Título do cap. *In*: AUTOR. Título do livro... | No **Título do Livro** que contém o capítulo |
| **Legislação / Lei** | JURISDIÇÃO. Tipo, número e data. Ementa... | Na **Identificação do Ato** (ex.: **Lei nº 14.133...**) |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Destaque no Subtítulo:** A banca coloca em negrito tanto o título quanto o subtítulo após os dois pontos (`**Direito Constitucional: Teoria e Prática**`). **Gabarito: ERRADO.** O subtítulo é grafado em caracteres normais, sem negrito e sem itálico!
- **Alinhamento Justificado das Referências:** Afirmar que a NBR 6023 prescreve o alinhamento justificado para a lista de referências ao final do trabalho. **Gabarito: ERRADO.** O alinhamento obrigatório segundo a ABNT é à **margem esquerda**.
- **Abreviação do Mês de Maio:** A banca escreve `mai.` na data de acesso web. **Gabarito: ERRADO.** Pela norma ABNT, todos os meses são abreviados com 3 letras e ponto, exceto **maio**, que é escrito integralmente por extenso (`maio`).

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS (ABNT).** *ABNT NBR 6023:2018/Emenda 1:2020: Informação e documentação — Referências — Elaboração*. Rio de Janeiro: ABNT, 2020.
- **FRANÇA, Júnia Lessa et al.** *Manual de normalização de publicações técnico-científicas*. 10. ed. Belo Horizonte: Ed. UFMG, 2019. (O guia mais utilizado por universidades e bancas).
- **MEDEIROS, João Bosco.** *Redação científica: a prática de fichamentos, resumos, resenhas*. 13. ed. São Paulo: Atlas, 2019.
- **IBICT.** *Manual de Normalização de Documentos Científicos*. Brasília: IBICT, 2021.
- **CÂMARA DOS DEPUTADOS.** *Manual de Editoração das Edições Câmara*. Brasília: Coordenação Edições Câmara, 2022.""",

    'sub-8-2': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **ABNT NBR 10520 (Versão Atualizada em 2023)** regula a apresentação de citações em documentos acadêmicos e técnicos:
1. **Tipologia das Citações:**
   - **Citação Direta (Literal):** Transcrição textual exata das palavras do autor consultado.
     - *Curta (até 3 linhas):* Inserida no fluxo normal do parágrafo, incorporada entre aspas duplas (`\"...\"`).
     - *Longa (mais de 3 linhas):* Destacada em parágrafo isolado, com **recuo de 4 cm da margem esquerda**, tamanho de fonte menor (geralmente corpo 10), espaçamento entrelinhas simples e **sem aspas**!
   - **Citação Indireta (Paráfrase):** Texto redigido com as próprias palavras do pesquisador, baseado na ideia do autor original. Dispensa aspas e recuo; exige indicação da autoria e ano.
   - **Citação de Citação (*Apud*):** Citação de um texto ao qual o pesquisador não teve acesso direto à fonte original, utilizando a expressão latina *apud* (citado por). Ex.: `(KUNH, 1962 apud POPPER, 1974)`.
2. **A Grande Mudança da NBR 10520:2023 (Atenção Máxima no Cebraspe!):**
   - Na versão anterior (2002), chamadas entre parênteses exigiam caixa alta completa: `(SILVA, 2020)`.
   - Na versão **NBR 10520:2023**, a ABNT aboliu a caixa alta obrigatória nos parênteses! Agora, tanto no fluxo do texto quanto entre parênteses, os nomes devem ser grafados em **letras maiúsculas e minúsculas**:
     - *No texto:* Segundo Silva (2023, p. 15)...
     - *Entre parênteses:* ...(Silva, 2023, p. 15).
   - O uso de caixa alta total `(SILVA, 2023)` deixou de ser o padrão obrigatório!
3. **Sistemas de Chamada:**
   - Sistema Autor-Data vs. Sistema Numérico (deve-se adotar um único sistema em todo o documento).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Citação Direta Longa em Relatório de CPI):** O relator de uma CPI transcreve um parecer jurídico de 8 linhas de um jurista renomado. O bibliotecário formata o texto conforme a NBR 10520: recuo de 4 cm da margem esquerda, fonte tamanho 10, espaçamento entrelinhas simples, sem aspas, e ao final a chamada: `(Bandeira de Mello, 2023, p. 142)`.
- **Cenário 2 (Uso Racional do Apud em Pesquisa Histórica):** Um consultor parlamentar cita uma frase célebre do Visconde de Uruguai de 1855 citada na biografia escrita por Afonso Arinos de 1970. O bibliotecário registra: `(Uruguai, 1855 apud Arinos, 1970, p. 88)` e assegura que nas referências finais constará a obra de Arinos (a obra efetivamente consultada).
- **Cenário 3 (Atualização para a NBR 10520:2023 nas Edições Câmara):** A equipe editorial da Câmara dos Deputados revisa os modelos de teses e estudos legislativos para abolir a antiga caixa alta `(SILVA, 2018)`, aplicando o novo padrão uniforme `(Silva, 2018)` conforme a revisão 2023 da ABNT.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Tipo de Citação | Extensão / Formato | Recuo e Aspas | Exemplo Atualizado NBR 10520:2023 |
| :--- | :--- | :--- | :--- |
| **Direta Curta** | Até 3 linhas | No fluxo do texto / **Com aspas duplas** | Conforme Silva (2023, p. 12), \"o parlamento debate...\" |
| **Direta Longa** | Mais de 3 linhas | **Recuo de 4 cm** / Fonte menor / **Sem aspas** | Parágrafo isolado com recuo de 4 cm (Silva, 2023, p. 45) |
| **Indireta** | Qualquer extensão | No fluxo do texto / Sem aspas / Sem recuo | Para Silva (2023), o controle de legalidade é essencial. |
| **Apud** | Citação de citação | Autor original *apud* autor consultado | (Weber, 1922 apud Bendix, 1986, p. 30) |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Aspas em Citação Longa:** A banca coloca recuo de 4 cm com aspas duplas ao mesmo tempo. **Gabarito: ERRADO.** Citação longa com recuo de 4 cm não leva aspas em nenhuma hipótese!
- **Obra que vai para as Referências no Apud:** A banca afirma que, ao usar `(Kuhn, 1962 apud Popper, 1974)`, a única obra obrigatória na lista de referências final é a de Kuhn. **Gabarito: ERRADO.** A obra que deve obrigatoriamente constar nas referências finais é a que foi **efetivamente lida e consultada** pelo autor (isto é, a obra de Popper). A citação de Kuhn entra apenas em nota de rodapé opcional.
- **Indicação de Página em Citação Indireta:** Dizer que a indicação do número da página é estritamente obrigatória na citação indireta (paráfrase). **Gabarito: ERRADO.** Na citação indireta a página é opcional; ela é obrigatória apenas na citação direta!

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS (ABNT).** *ABNT NBR 10520:2023: Informação e documentação — Citações em documentos — Apresentação*. Rio de Janeiro: ABNT, 2023. (A nova versão da norma de citações).
- **MEDEIROS, João Bosco.** *Redação científica*. 13. ed. São Paulo: Atlas, 2019.
- **FRANÇA, Júnia Lessa et al.** *Manual de normalização de publicações técnico-científicas*. 10. ed. Belo Horizonte: Ed. UFMG, 2019.
- **CÂMARA DOS DEPUTADOS.** *Manual de Redação e Padronização Bibliográfica da Consultoria Legislativa*. Brasília: Edições Câmara, 2023.
- **ECO, Umberto.** *Como se faz uma tese*. 25. ed. São Paulo: Perspectiva, 2014.""",

    'sub-8-3': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **ABNT NBR 14724:2011** padroniza a estrutura, formatação e apresentação formal de **Trabalhos Acadêmicos** (teses, dissertações, TCCs e estudos monográficos):
1. **Estrutura Tripartite Canônica:**
   - **Elementos Pré-Textuais:** Precedem o texto; auxiliam na identificação e localização das partes.
     - *Obrigatórios:* Folha de rosto, Ficha catalográfica (no verso da folha de rosto), Folha de aprovação, Resumo na língua vernácula (com palavras-chave), Resumo em língua estrangeira (Abstract) e Sumário.
     - *Opcionais:* Capa (externa), Lombada, Errata, Dedicatória, Agradecimentos, Epígrafe, Lista de ilustrações, Lista de tabelas, Lista de abreviaturas e siglas, e Lista de símbolos.
   - **Elementos Textuais (Obrigatórios):** Introdução, Desenvolvimento e Conclusão.
   - **Elementos Pós-Textuais:** Complementam e documentam o trabalho.
     - *Obrigatório:* Referências.
     - *Opcionais:* Glossário, Apêndice (texto/documento elaborado pelo próprio autor), Anexo (documento elaborado por terceiros/não elaborado pelo autor) e Índice.
2. **Regras Gráficas de Formatação:**
   - **Margens:** Esquerda e Superior de **3 cm**; Direita e Inferior de **2 cm** (para impressão em anverso/frente).
   - **Espaçamento:** Texto em espaçamento **1,5** entre linhas. Citações longas, notas de rodapé, referências, legendas e ficha catalográfica em espaçamento simples.
   - **Numeração de Páginas:** Todas as folhas contam a partir da folha de rosto, mas a numeração só é **impressa visualmente a partir da primeira folha da parte textual (Introdução)**, no canto superior direito!

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Elaboração de Ficha Catalográfica na Biblioteca Pedro Aleixo):** Um consultor da Câmara defende dissertação de mestrado pelo Centro de Formação, Treinamento e Aperfeiçoamento (CEFOR). A biblioteca confecciona a **ficha catalográfica CIP** que deve constar obrigatoriamente no verso da folha de rosto do trabalho impresso ou imediatamente após a folha de rosto no PDF da BDCam.
- **Cenário 2 (Distinção entre Apêndice e Anexo em Estudo Legislativo):** Ao organizar um estudo monográfico sobre segurança pública, o consultor anexa a cópia do texto integral do Acórdão do STF (como não foi produzido por ele, é um **Anexo**) e acrescenta a tabela com cálculos estatísticos que ele próprio modelou no Excel (como foi elaborado pelo autor, é um **Apêndice**).
- **Cenário 3 (Auditoria de Margens e Numeração pela Editora da Câmara):** Antes de enviar o livro técnico para a gráfica, o bibliotecário-editor confere: margem superior e esquerda de 3 cm, inferior e direita de 2 cm, e numeração visível iniciando na primeira página da Introdução.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Elemento Pré/Pós-Textual | Obrigatoriedade na NBR 14724 | Função Canônica | Distinção Crítica |
| :--- | :--- | :--- | :--- |
| **Folha de Rosto** | **Obrigatório** | Identifica título, autor e natureza | Conta página, mas não imprime número |
| **Capa** | Opcional | Proteção externa | Não conta na paginação interna |
| **Sumário** | **Obrigatório** | Enumera as divisões do trabalho | Pré-textual (o último antes do texto) |
| **Apêndice** | Opcional | Texto/documento complementar | **Elaborado pelo próprio autor** |
| **Anexo** | Opcional | Documento comprobatório externo | **Não elaborado pelo autor** (de terceiros) |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Apêndice vs. Anexo:** A pegadinha mais frequente do Cebraspe em normalização: a banca inverte as autorias, afirmando que o anexo é produzido pelo autor e o apêndice por terceiros. **Gabarito: ERRADO.** Lembre-se: **Apêndice = Autor**; **Anexo = Alheio**.
- **Onde Inicia a Impressão da Numeração de Páginas:** Dizer que a numeração começa a ser impressa no canto superior direito já na Folha de Rosto. **Gabarito: ERRADO.** A folha de rosto é contada, mas o número só aparece impresso na **Introdução** (primeira folha textual).
- **Capa como Elemento Obrigatório:** Afirmar que a capa dura é elemento pré-textual obrigatório pela NBR 14724. **Gabarito: ERRADO.** A capa é elemento opcional; a folha de rosto é que é obrigatória.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS (ABNT).** *ABNT NBR 14724:2011: Informação e documentação — Trabalhos acadêmicos — Apresentação*. Rio de Janeiro: ABNT, 2011. (A norma oficial de estrutura monográfica).
- **FRANÇA, Júnia Lessa et al.** *Manual de normalização de publicações técnico-científicas*. 10. ed. Belo Horizonte: Ed. UFMG, 2019.
- **REY, Luís.** *Planejar e redigir trabalhos científicos*. 2. ed. São Paulo: Edgard Blücher, 2003.
- **CENTRO DE FORMAÇÃO, TREINAMENTO E APERFEIÇOAMENTO (CEFOR).** *Manual de TCC e Dissertações do CEFOR*. Brasília: Câmara dos Deputados, 2022.
- **MEDEIROS, João Bosco.** *Redação científica*. 13. ed. São Paulo: Atlas, 2019.""",

    'sub-8-4': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
As normas **ABNT NBR 6028:2021 (Resumos), NBR 6027:2012 (Sumários) e NBR 6022:2018 (Artigos)** regulam a condensação e a estruturação de publicações técnicas:
1. **Resumos (ABNT NBR 6028:2021):**
   - Apresentação concisa dos pontos relevantes de um documento. Deve ressaltar: objetivo, método, resultados e conclusões.
   - **Tipologia Canônica:**
     - *Indicativo:* Apenas aponta os tópicos tratados no documento; não apresenta resultados nem conclusões.
     - *Informativo:* Suficientemente detalhado para dispensar a consulta ao original; relata objetivos, metodologia, principais resultados e conclusões.
     - *Crítico (Recensão / Resenha):* Análise interpretativa e valorativa de um documento feita por um especialista.
   - **Regras de Extensão da NBR 6028:**
     - De **150 a 500 palavras** para trabalhos acadêmicos (teses, dissertações) e relatórios técnico-científicos.
     - De **100 a 250 palavras** para artigos de periódicos.
     - De **50 a 100 palavras** para documentos curtos.
   - **Redação:** Composto por parágrafo único, em terceira pessoa do singular, com verbo na voz ativa, seguido das palavras-chave separadas por ponto e vírgula (ou ponto) e finalizadas por ponto.
2. **Sumário (ABNT NBR 6027:2012):**
   - Enumeração das divisões, seções e outras partes de um documento, **na mesma ordem e grafia em que a matéria nele se sucede**. É o último elemento pré-textual! Não se confunde com *Índice*!
3. **Artigo Científico (ABNT NBR 6022:2018):**
   - Publicação com autoria declarada que apresenta e discute ideias, métodos e resultados de pesquisa (artigo original) ou que resume o estado da arte de um tema (artigo de revisão).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Elaboração de Resumo Informativo para a Base SILEG):** Ao cadastrar uma tese defendida por um servidor no repositório da BDCam, o bibliotecário redige um **resumo informativo** de 300 palavras: expõe o objetivo da análise do processo legislativo, os métodos empíricos aplicados, a amostragem de votações e a conclusão de que o tempo de tramitação caiu 20% com o processo eletrônico, permitindo ao usuário decidir se precisa baixar o PDF de 400 páginas.
- **Cenário 2 (Distinção entre Sumário e Índice nas Edições Câmara):** Na editoração de uma coletânea de discursos parlamentares com 1.000 páginas, o bibliotecário posiciona o **Sumário** no início (elemento pré-textual na ordem sequencial dos capítulos) e contrata a elaboração de um **Índice Onomástico e Remissivo** para o final do livro (elemento pós-textual em ordem alfabética de nomes e assuntos).
- **Cenário 3 (Controle de Extensão de Resumo de Artigo na Revista de Informação Legislativa):** Ao avaliar um artigo submetido à revista técnica da casa, o bibliotecário verifica que o resumo possui 450 palavras. Ele solicita a redução para até 250 palavras para atender estritamente ao limite de artigos da NBR 6028.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Tipo de Resumo / Elemento | Finalidade Principal | Extensão Canônica | Característica Crítica no Cebraspe |
| :--- | :--- | :--- | :--- |
| **Resumo Indicativo** | Apenas indica os tópicos tratados | Curto | Não traz dados qualitativos nem conclusão |
| **Resumo Informativo** | Substitui a leitura do original | 150–500 pal. (Teses) / 100–250 (Artigos) | Informa objetivos, método, resultados e conclusões |
| **Resumo Crítico (Resenha)** | Julgamento e avaliação de valor | Livre | Feito por terceiro com opinião analítica |
| **Sumário (NBR 6027)** | Lista seções na ordem sequencial | Pré-textual | Ordem cronológica/exata do livro |
| **Índice (NBR 6034)** | Lista detalhada alfabética ou sistemática | Pós-textual | Ordem alfabética remissiva |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Sumário vs. Índice:** A banca adora trocar os conceitos afirmando que o sumário é uma lista em ordem alfabética posicionada ao final do livro. **Gabarito: ERRADO.** Quem fica ao final em ordem alfabética é o **Índice** (NBR 6034); o **Sumário** fica no início e reproduz a ordem exata das seções do texto.
- **Número de Parágrafos do Resumo:** O Cebraspe propõe que o resumo de uma tese acadêmica deve ser dividido em quatro parágrafos (introdução, método, resultado e conclusão). **Gabarito: ERRADO.** A NBR 6028 determina que o resumo deve ser redigido em **parágrafo único** contínuo!
- **Verbo na Primeira Pessoa:** Afirmar que o resumo deve usar verbos na primeira pessoa ("concluímos que"). **Gabarito: ERRADO.** A norma prescreve o uso da terceira pessoa do singular com voz ativa.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS (ABNT).** *ABNT NBR 6028:2021: Informação e documentação — Resumo, resenha e recensão — Apresentação*. Rio de Janeiro: ABNT, 2021.
- **ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS (ABNT).** *ABNT NBR 6027:2012: Informação e documentação — Sumário — Apresentação*. Rio de Janeiro: ABNT, 2012.
- **ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS (ABNT).** *ABNT NBR 6022:2018: Informação e documentação — Artigo em publicação periódica técnica e/ou científica — Apresentação*. Rio de Janeiro: ABNT, 2018.
- **LANCASTER, F. Wilfrid.** *Indexação e resumos: teoria e prática*. 2. ed. Brasília: Briquet de Lemos, 2004. (Capítulos de elaboração e avaliação de resumos).
- **FRANÇA, Júnia Lessa et al.** *Manual de normalização de publicações técnico-científicas*. 10. ed. Belo Horizonte: Ed. UFMG, 2019.""",

    'sub-8-5': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Editoração, a Catalogação na Publicação (CIP), os Índices (NBR 6034) e a Acessibilidade Documental** completam a cadeia de produção editorial técnica:
1. **Catalogação na Publicação (Ficha Catalográfica / CIP):**
   - Elaborada exclusivamente por **bibliotecário habilitado e registrado no CRB** (Lei nº 4.084/62 e Lei nº 10.753/2003 - Lei do Livro).
   - Deve ser impressa no verso da folha de rosto das publicações monográficas, na metade inferior da página.
   - Contém: Cabeçalho de autor, título, subtítulo, edição, local, editora, ano, paginação, série, notas, pontos de acesso de assunto (CDU/CDD) e número de registro CIP.
2. **Índices (ABNT NBR 6034:2004):**
   - Relação de palavras ou frases ordenadas alfabética, cronológica ou sistematicamente, localizadas ao final do documento (**elemento pós-textual**), que remete com precisão às páginas onde o assunto ou autor é tratado no texto.
   - Tipos: Onomástico (nomes de pessoas), Topográfico (geográfico), Cronológico, Temático/Assunto e Remissivo.
   - Remissivas obrigatórias: *Ver* (exclusiva/preferencial) e *Ver também* (associativa/complementar).
3. **Infografia e Design Editorial:**
   - Representação visual e sintética de dados complexos (gráficos, esquemas, mapas e diagramas) para otimizar a velocidade de absorção do leitor.
4. **Acessibilidade Documental (Lei nº 13.146/2015 e WCAG 2.1):**
   - O dever do poder público de garantir formatos acessíveis (DAISY, Braille, audiolivros, texto com descrição de imagens *alt-text*, fontes legíveis e contraste adequado) para cidadãos com deficiência visual ou motora.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Elaboração de Ficha CIP para as Edições Câmara):** A Coordenação de Edições Câmara vai publicar uma obra histórica sobre Rui Barbosa. A Seção de Catalogação da Biblioteca Pedro Aleixo elabora a ficha CIP oficial contendo: classificação CDDir, CDU e CDD, pontos de acesso autorizados da RVBI e código de registro no CRB-1.
- **Cenário 2 (Elaboração de Índice Onomástico para a História dos Deputados):** Em um livro biográfico de 600 páginas que cita 3.000 parlamentares, o bibliotecário aplica a NBR 6034 e cria o **Índice Onomástico** ao final da publicação, permitindo ao leitor encontrar instantaneamente em quais páginas cada deputado é mencionado.
- **Cenário 3 (Acessibilidade Digital no Portal da BDCam conforme WCAG 2.1):** Ao disponibilizar os relatórios parlamentares em PDF na internet, os bibliotecários garantem que o PDF/A contenha a camada de texto selecionável (OCR de alta acurácia), *tags* de leitura estruturadas e texto alternativo (*alt-text*) em todas as tabelas e gráficos, permitindo que deputados e cidadãos com deficiência visual utilizem leitores de tela como NVDA e JAWS.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Elemento Editorial | Localização Canônica | Responsável Técnico | Norma ou Base Legal |
| :--- | :--- | :--- | :--- |
| **Ficha CIP** | Verso da Folha de Rosto | Bibliotecário com CRB ativo | Lei do Livro (Lei nº 10.753/2003) |
| **Índice (NBR 6034)** | Final do livro (Pós-textual) | Bibliotecário / Indexador | ABNT NBR 6034:2004 |
| **Sumário (NBR 6027)** | Início do livro (Pré-textual) | Autor / Editor | ABNT NBR 6027:2012 |
| **Acessibilidade Digital** | Em todo o código e arquivo | Equipe Editorial / TI | Lei nº 13.146/2015 / WCAG 2.1 |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Quem pode Assinar Ficha Catalográfica CIP:** O Cebraspe sugere que qualquer profissional de letras ou editor gráfico pode confeccionar e assinar a ficha catalográfica. **Gabarito: ERRADO.** A elaboração da ficha CIP é ato privativo do profissional Bibliotecário devidamente registrado no Conselho Regional (Leis 4.084/62 e 10.753/2003).
- **Remissivas em Índices (Ver vs. Ver Também):**
  - *Ver:* Remete de um termo não adotado/sinônimo para o termo adotado (exclusão).
  - *Ver também:* Conecta termos afins correlatos que também possuem ocorrências no texto. A banca adora inverter essas duas remissivas.
- **Posicionamento da Ficha CIP:** Afirmar que a ficha catalográfica deve ser impressa na contracapa do livro. **Gabarito: ERRADO.** Deve figurar no **verso da folha de rosto**.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS (ABNT).** *ABNT NBR 6034:2004: Informação e documentação — Índice — Apresentação*. Rio de Janeiro: ABNT, 2004.
- **BRASIL.** *Lei Federal nº 10.753, de 30 de outubro de 2003*. Institui a Política Nacional do Livro. (Obrigatoriedade da Ficha CIP com indicação de bibliotecário registrado).
- **BRASIL.** *Lei Federal nº 13.146, de 6 de julho de 2015*. Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência).
- **W3C.** *Web Content Accessibility Guidelines (WCAG) 2.1*. W3C Recommendation, 2018.
- **ARAÚJO, Emanuel.** *A construção do livro: princípios da técnica de editoração*. Rio de Janeiro: Nova Fronteira; INL, 1986. (O clássico mais respeitado da história editorial brasileira).""",

    'sub-9-1': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
O **Ciclo da Comunicação Científica**, seus canais formais e informais e os modelos de **Avaliação por Pares (*Peer Review*)** são esteios da produção e validação do saber científico:
1. **O Modelo Clássico de Garvey-Griffith (1972):**
   - Mapeia a trajetória da informação desde a ideia inicial do cientista até sua consagração nos manuais enciclopédicos.
   - **Canais Informais (Comunicação Direta e Não Filtrada):** Conversas em laboratório, correspondência entre pares, colégios invisíveis (*invisible colleges* de Derek de Solla Price), apresentações orais em congressos e distribuição de *preprints*. Caracterizam-se por rapidez, público restrito e ausência de avaliação formal por pares.
   - **Canais Formais (Comunicação Filtrada e Permanente):** Artigos em periódicos científicos revisados por pares, livros acadêmicos, teses e tratados. Caracterizam-se por validação metodológica, controle bibliográfico internacional, registro público de prioridade da descoberta e arquivo permanente da ciência.
2. **Modelos de Avaliação por Pares (*Peer Review*):**
   - **Simples-Cego (*Single-Blind*):** Os avaliadores sabem quem é o autor, mas o autor não sabe quem são os avaliadores.
   - **Duplo-Cego (*Double-Blind*):** Nem os avaliadores sabem a identidade dos autores, nem os autores sabem a identidade dos avaliadores. Modelo tradicional mais adotado nas ciências sociais.
   - **Avaliação Aberta (*Open Peer Review* - Ciência Aberta):** As identidades de autores e revisores são públicas, e os pareceres podem ser publicados juntamente com o artigo para máxima transparência.
3. **Colégios Invisíveis (Derek de Solla Price):**
   - Redes informais de cooperação entre cientistas de ponta ao redor do mundo que trocam ideias e pesquisas em andamento antes que os artigos sejam formalmente publicados.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Identificação de Canal Formal em Audiência Pública):** Em uma audiência pública na Comissão de Seguridade Social sobre uma nova vacina, um deputado cita um artigo publicado em um blog pessoal da internet (canal informal não revisado). O bibliotecário da Câmara é consultado e emite nota de esclarecimento demonstrando que a tese só adquire legitimidade científica ao ser chancelada por periódicos indexados com revisão por pares duplo-cego na *The Lancet* ou *SciELO* (canal formal).
- **Cenário 2 (Gestão de Repositório de Preprints para Consultores):** O CEDI implementa um servidor interno de *preprints* para que os consultores legislativos publiquem previamente seus estudos econômicos em regime de **Open Peer Review**, recebendo críticas abertas de colegas da Câmara e do Senado antes do fechamento do parecer final.
- **Cenário 3 (A Biblioteca como Arquivo Permanente do Saber Formal):** As teses de doutorado e os anais parlamentares custodiados pela Biblioteca Pedro Aleixo cumprem o estágio final do modelo de Garvey-Griffith: a fixação permanente do conhecimento na memória pública documentada.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Canal / Modelo de Avaliação | Característica Central | Vantagem Principal | Desvantagem / Risco |
| :--- | :--- | :--- | :--- |
| **Canal Informal** | Sem revisão formal por pares | Altíssima velocidade | Risco de erros e circulação restrita |
| **Canal Formal** | Submetido a peer review | Validação e arquivo histórico permanente | Lentidão editorial (meses/anos) |
| **Duplo-Cego (Double-Blind)** | Anonimato recíproco completo | Reduz viés de prestígio ou preconceito | Dificuldade de anonimizar dados locais |
| **Avaliação Aberta (Open)** | Nomes e pareceres públicos | Transparência e responsabilidade | Inibição de pareceristas juniores |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Congresso Científico como Canal Estritamente Formal:** O Cebraspe propõe que uma palestra em congresso pertence aos canais formais da ciência. **Gabarito: ERRADO.** A apresentação oral em congresso é classicamente canal **informal/semiformal**; o que pertence ao canal formal definitivo é o artigo completo publicado nos anais impressos/digitais com registro bibliográfico.
- **Velocidade vs. Rigor nos Canais:** Afirmar que os canais formais são mais velozes que os informais. **Gabarito: ERRADO.** O canal informal é instantâneo; o canal formal é mais lento devido aos ciclos de revisão por pares e editoração.
- **Colégios Invisíveis Exigem Prédio Físico:** Dizer que os colégios invisíveis são instituições formais criadas por governos. **Gabarito: ERRADO.** São redes sociais informais e espontâneas de pesquisadores.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **MEADOWS, Arthur Jack.** *A comunicação científica*. Brasília: Briquet de Lemos, 1999. (A grande referência mundial sobre história e modelos de comunicação científica).
- **GARVEY, William D.; GRIFFITH, Belver C.** Communication and information processing within scientific disciplines: empirical findings for psychology. *Information Storage and Retrieval*, v. 8, n. 3, p. 123-136, 1972. (O modelo canônico do ciclo da informação científica).
- **PRICE, Derek de Solla.** *Little Science, Big Science... and Beyond*. New York: Columbia University Press, 1986. (Conceituação dos colégios invisíveis).
- **MUELLER, Suzana Pinheiro Machado.** A ciência, o sistema de comunicação científica e a literatura científica. In: CAMPELLO, B. et al. *Fontes de informação para pesquisadores e profissionais*. Belo Horizonte: UFMG, 2000.
- **TARGINO, Maria das Graças.** Comunicação científica: uma revisão de seus elementos constitutivos. *Informação & Sociedade: Estudos*, v. 10, n. 2, 2000.""",

    'sub-9-2': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
O **Acesso Aberto (*Open Access* - OA)** e os **Princípios FAIR** redefiniram a circulação do conhecimento científico global e das políticas públicas de informação:
1. **As Declarações Fundacionais do Acesso Aberto (O Trio BBB):**
   - **Budapest Open Access Initiative (BOAI, 2002):** Marco inaugural que definiu formalmente o acesso aberto: disponibilidade gratuita na internet pública, permitindo a qualquer usuário ler, baixar, copiar, distribuir, imprimir e vincular ao texto completo sem barreiras financeiras, legais ou técnicas, preservando apenas o direito do autor à integridade da obra e ao devido reconhecimento de citação.
   - **Declaração de Bethesda (2003):** Foco nas ciências biomédicas e depósito imediato em repositórios abertos.
   - **Declaração de Berlim (2003):** Expansão internacional do compromisso institucional com o acesso aberto.
2. **As Vias Canônicas do Acesso Aberto:**
   - **Via Dourada (*Gold Open Access*):** Publicação em periódicos de acesso aberto pleno. O artigo fica imediatamente gratuito na página da revista no momento da publicação (pode ou não envolver taxas de processamento de artigos - APCs).
   - **Via Verde (*Green Open Access* - Autoarquivamento):** O autor publica em qualquer periódico (mesmo tradicional por assinatura) e deposita uma cópia do manuscrito aceito (*post-print* / *preprint*) em um **Repositório Institucional ou Temático**.
   - **Via Diamante / Platina (*Diamond OA*):** Periódicos de acesso aberto financiados integralmente por universidades e órgãos públicos onde **nem os leitores pagam para ler, nem os autores pagam APCs para publicar** (ex.: a imensa maioria das revistas do SciELO e da Câmara dos Deputados).
   - **Via Híbrida:** Periódico comercial por assinatura que cobra taxa extra do autor para liberar acesso aberto individual a um artigo específico (prática duramente criticada pelo duplo pagamento - *double dipping*).
3. **Princípios FAIR para Gestão de Dados de Pesquisa:**
   - **Findable (Localizável):** Metadados ricos e identificadores persistentes e universais (DOI, Handle).
   - **Accessible (Acessível):** Recuperáveis por protocolos de comunicação abertos e padronizados (HTTPS).
   - **Interoperable (Interoperável):** Vocabulários controlados e esquemas que se comunicam entre sistemas.
   - **Reusable (Reutilizável):** Licenças de uso claras (Creative Commons) e documentação de proveniência dos dados.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (A BDCam como Expoente da Via Verde de Acesso Aberto):** A Câmara dos Deputados adota política mandatória de acesso aberto: todos os servidores e consultores que publicam artigos em revistas externas autorizam o depósito de uma cópia no repositório institucional da Câmara (BDCam), operando a **Via Verde** para dar retorno imediato ao cidadão que financiou a pesquisa pública.
- **Cenário 2 (Publicação na Via Diamante pela Revista da Câmara):** A revista técnica editada pela Câmara dos Deputados opera no modelo **Acesso Aberto Diamante**: nenhum cidadão paga assinatura e nenhum pesquisador paga taxa de submissão (APC). Todo o custeio é institucional pelo orçamento público da Casa.
- **Cenário 3 (Implementação de Princípios FAIR nos Dados das Votações Nominais):** O portal de transparência da Câmara disponibiliza os dados de votação nominal de cada deputado em formato CSV/JSON com documentação de metadados, schemas abertos e licença CC BY, cumprindo integralmente os 4 pilares **FAIR** para reuso por jornalistas de dados e cidadãos.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Via do Acesso Aberto | Onde o Documento é Publicado/Guardado | Quem Paga o Custo Editorial | Taxa de Publicação (APC) |
| :--- | :--- | :--- | :--- |
| **Via Dourada (Gold)** | Periódico científico de acesso aberto | Autor, agência ou instituição | Frequente (quando há APC) |
| **Via Verde (Green)** | Repositório Institucional (Autoarquivamento) | Custeado pelo repositório | **Zero para o autor** |
| **Via Diamante** | Periódico de acesso aberto institucional | Universidade / Órgão público | **Zero para autor e leitor** |
| **Via Híbrida** | Periódico comercial fechado | Modelo duplo (*double dipping*) | Altas taxas cobradas do autor |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Via Verde Exige Pagamento de Taxa:** A banca afirma que a via verde de acesso aberto exige o pagamento de elevadas APCs pelo autor. **Gabarito: ERRADO.** A Via Verde baseia-se no **autoarquivamento gratuito** do manuscrito em repositórios institucionais (como o DSpace).
- **Princípios FAIR como Sinônimo de Acesso 100% Aberto:** O Cebraspe afirma que dados FAIR precisam ser obrigatoriamente abertos a qualquer pessoa sem qualquer restrição de sigilo. **Gabarito: ERRADO.** O princípio internacional preconiza: *"tão aberto quanto possível, tão fechado quanto necessário"*. Dados que contenham segredo de Estado ou privacidade médica podem ser FAIR (ter metadados ricos e interoperáveis), mas com acesso restrito controlado.
- **Eliminação dos Direitos Autorais no Acesso Aberto:** Afirmar que o Acesso Aberto extingue o direito moral de autor. **Gabarito: ERRADO.** O Acesso Aberto preserva rigorosamente a autoria moral e o direito à citação.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **SUBER, Peter.** *Open Access*. Cambridge, MA: MIT Press, 2012. (A obra de referência mundial sobre os fundamentos do acesso aberto).
- **BUDAPEST OPEN ACCESS INITIATIVE (BOAI).** *Budapest Open Access Initiative: 20th Anniversary Recommendations*. Budapest: BOAI, 2022.
- **WILKINSON, Mark D. et al.** The FAIR Guiding Principles for scientific data management and stewardship. *Scientific Data*, v. 3, n. 160018, 2016. (Artigo canônico dos princípios FAIR).
- **KURAMOTO, Hélio.** Acesso livre à informação científica: rumo à consolidação da ciência aberta. *Liinc em Revista*, v. 4, n. 2, 2008.
- **BRASIL. CÂMARA DOS DEPUTADOS.** *Política de Acesso Aberto à Produção Intelectual da Câmara dos Deputados*. Ato da Mesa nº 123/2019.""",

    'sub-9-3': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Curadoria Digital**, a **Gestão de Dados de Pesquisa (GDP)** e as licenças de **Direito Autoral e Creative Commons** garantem a preservação ativa e o reuso legal da informação:
1. **O Ciclo de Curadoria Digital (Modelo DCC - *Digital Curation Centre*):**
   - Curadoria digital é a gestão ativa e contínua, conservação e preservação de dados e objetos digitais ao longo de todo o seu ciclo de vida.
   - **Ações Seqüenciais do Modelo DCC:** Conceituação $\\to$ Criação ou Coleta de dados $\\to$ Avaliação e Seleção $\\to$ Ingresso (*Ingest*) $\\to$ Ações de Preservação $\\to$ Armazenamento seguro $\\to$ Acesso, uso e reuso $\\to$ Transformação (migração de dados).
2. **Plano de Gestão de Dados (PGD / DMP - *Data Management Plan*):**
   - Documento formal obrigatório em agências de fomento (CNPq, FAPESP) e órgãos públicos que descreve: que dados serão coletados, quais formatos abertos serão usados, como serão documentados com metadados, onde serão arquivados e como serão compartilhados.
3. **Direito Autoral Brasileiro (Lei Federal nº 9.610/1998):**
   - **Direitos Morais:** Imprescritíveis, inalienáveis e irrenunciáveis (reivindicar a autoria, ter seu nome indicado, defender a integridade da obra). O autor **nunca pode vender ou renunciar** a seus direitos morais!
   - **Direitos Patrimoniais:** O direito exclusivo de utilizar, fruir e dispor da obra (reproduzir, editar, comercializar, traduzir). Podem ser cedidos ou transferidos a terceiros.
   - **Prazo de Proteção Geral:** Os direitos patrimoniais perduram por **70 anos contados de 1º de janeiro do ano subsequente ao falecimento do autor** (art. 41). Após esse prazo, a obra cai em **Domínio Público**.
   - **Exclusões da Proteção Autoral (Art. 8º da Lei 9.610/98):** Leis, decretos, decisões judiciais e atos oficiais do governo **NÃO são protegidos por direito autoral** (são de livre reprodução pública!).
4. **Licenças Creative Commons (CC):**
   - Conjunto modular de licenças públicas baseadas em 4 cláusulas:
     - `BY` (Atribuição): Obrigatoriedade de dar os créditos ao autor original. Presente em **todas as licenças CC**!
     - `NC` (Não Comercial): Proíbe o uso para fins comerciais ou de lucro.
     - `ND` (Sem Derivações): Proíbe alterações, traduções ou obras derivadas.
     - `SA` (Compartilha Igual): Exige que obras derivadas usem a mesma licença aberta.
   - A licença `CC BY` é a mais aberta; a `CC BY-NC-ND` é a mais restritiva.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Livre Uso de Leis e Atos Oficiais conforme o Art. 8º da Lei 9.610/98):** Uma editora privada publica uma coletânea comercial com o texto integral do Regimento Interno da Câmara dos Deputados. O bibliotecário sabe que isso é **perfeitamente legítimo e legal**, pois textos de leis e atos regimentais públicos não possuem direito autoral (art. 8º da Lei nº 9.610/98).
- **Cenário 2 (Aplicação de Licença Creative Commons CC BY na BDCam):** Todas as publicações e relatórios técnicos das Edições Câmara são disponibilizados no portal sob licença **CC BY 4.0 Internacional**. Qualquer cidadão ou pesquisador pode copiar, traduzir e até criar aplicativos comerciais usando esses relatórios, desde que dê o devido crédito institucional à Câmara dos Deputados.
- **Cenário 3 (Cálculo de Domínio Público em Obras Raras da Biblioteca):** Um pesquisador deseja digitalizar os livros de um deputado constituinte falecido em 1952. O bibliotecário calcula: falecimento em 1952 $\\to$ contagem inicia em 1º de janeiro de 1953 $\\to$ 70 anos completados em 31 de dezembro de 2022. Em **1º de janeiro de 2023** a obra caiu oficialmente em **domínio público**, podendo ser integralmente escaneada e disponibilizada na web sem autorização de herdeiros.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Vertente / Cláusula CC | Natureza Jurídica | Alienabilidade / Cessão | Regra Inegociável |
| :--- | :--- | :--- | :--- |
| **Direitos Morais** | Ligados à personalidade | **Inalienáveis e irrenunciáveis** | O autor nunca perde o direito à paternidade |
| **Direitos Patrimoniais** | Econômicos / Comerciais | Podem ser cedidos e vendidos | Duram 70 anos *post mortem* auctoris |
| **Atos Oficiais e Leis** | Sem direito autoral (Art. 8º) | Domínio público permanente | Livre reprodução por qualquer cidadão |
| **Cláusula CC BY** | Atribuição de autoria | Obrigatória em todas as licenças | Sempre deve citar o autor original |
| **Cláusula CC ND** | Sem derivações (*NoDerivs*) | Proíbe adaptações e traduções | Só permite distribuição da cópia idêntica |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Cessão dos Direitos Morais em Contrato de Trabalho:** O Cebraspe afirma que o contrato de trabalho de um servidor da Câmara pode prever a renúncia expressa aos seus direitos morais de autor sobre os livros que escrever. **Gabarito: ERRADO.** O art. 27 da Lei nº 9.610/98 é taxativo: os direitos morais são **inalienáveis e irrenunciáveis**; qualquer cláusula de renúncia é juridicamente nula.
- **Contagem do Prazo de 70 Anos de Domínio Público:** A banca conta os 70 anos a partir do dia exato do falecimento do autor. **Gabarito: ERRADO.** O prazo conta-se **a partir de 1º de janeiro do ano subsequente** ao falecimento (art. 41).
- **Direito Autoral de Leis e Sentenças:** Afirmar que uma lei federal ou decisão judicial do STF é protegida por direito autoral. **Gabarito: ERRADO.** O art. 8º da Lei nº 9.610/98 exclui taxativamente textos de tratados, leis, decretos, regulamentos e decisões judiciais da proteção de direitos autorais.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BRASIL.** *Lei Federal nº 9.610, de 19 de fevereiro de 1998*. Altera, atualiza e consolida a legislação sobre direitos autorais. (A lei canônica de direito autoral no Brasil).
- **DIGITAL CURATION CENTRE (DCC).** *DCC Curation Lifecycle Model*. Edinburgh: DCC, 2008. (O modelo canônico internacional de curadoria digital).
- **SAYÃO, Luís Fernando; SALES, Luana Farias.** Dados de pesquisa: um novo desafio para os bibliotecários. *Biblios: Journal of Librarianship and Information Science*, n. 48, p. 1-14, 2012.
- **LESSIG, Lawrence.** *Free Culture: How Big Media Uses Technology and the Law to Lock Down Culture and Control Creativity*. New York: Penguin Press, 2004. (A base conceitual das licenças Creative Commons).
- **BITTAR, Carlos Alberto.** *Direito de autor*. 6. ed. Rio de Janeiro: Forense Universitária, 2015.""",

    'sub-9-4': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
Os **Estudos Métricos da Informação (Bibliometria, Cientometria, Infometria e Altmetria)** medem quantitativamente a produção, circulação e o impacto social da ciência:
1. **As Três Leis Clássicas da Bibliometria:**
   - **Lei da Dispersão de Bradford (1934 - Periódicos):**
     - Descreve a dispersão de artigos sobre determinado tema em periódicos.
     - Divide os periódicos em três zonas de produtividade concêntricas contendo o mesmo número de artigos: $1 : n : n^2$.
     - *Zona 1 (Núcleo / Core):* Pequeno número de periódicos altamente especializados que concentram a maior parte dos artigos seminais.
     - *Zonas 2 e 3:* Número crescente e exponencial de periódicos generalistas com artigos dispersos.
   - **Lei do Quadrado Inverso de Lotka (1926 - Autores/Produtividade):**
     - Modela a produtividade dos autores em um campo: $A_n = \\frac{A_1}{n^2}$.
     - Um número muito pequeno de autores de elite produz a maior parte das publicações (grandes produtores), enquanto a imensa maioria dos autores produz apenas um ou dois artigos ao longo da vida.
   - **Lei do Menor Esforço de Zipf (1949 - Palavras/Linguística):**
     - Modela a frequência de palavras em um texto: $r \\times f = C$ (o produto da ordem de classificação $r$ pela frequência $f$ é constante).
     - Pouquíssimas palavras são extremamente frequentes (*stopwords*), e um volume enorme de palavras raras ocorre uma única vez (*hapax legomena*).
2. **Análise de Citação e Indicadores Tradicionais:**
   - **Fator de Impacto (JCR / Clarivate):** Razão entre as citações recebidas no ano corrente por artigos publicados nos dois anos anteriores e o total de artigos publicáveis nesses dois anos: $\\text{FI} = \\frac{\\text{Citações nos anos } t-1 \\text{ e } t-2}{\\text{Artigos publicados em } t-1 \\text{ e } t-2}$.
   - **Índice H (Jorge Hirsch, 2005):** Um autor possui índice $h$ se tiver $h$ artigos publicados com pelo menos $h$ citações cada um. Combina produtividade quantitativa com relevância citacional.
   - **Meia-Vida (*Half-Life*):** Tempo necessário para que metade das citações de uma literatura ocorra, medindo a obsolescência da área.
3. **Altmetria (*Altmetrics* / Métricas Alternativas):**
   - Medição do impacto e da atenção online imediata que uma produção científica recebe na web social e pública (menções no Twitter/X, citações na Wikipédia, salvamentos no Mendeley, referências em políticas públicas governamentais e matérias de jornal). Não substitui a citação por pares, mas complementa com a repercussão social em tempo real.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Aplicação da Lei de Bradford na Política de Aquisições da Biblioteca):** O setor de desenvolvimento de coleções analisa o orçamento para assinatura de periódicos de Direito Tributário. O bibliotecário aplica a **Lei de Bradford**: identifica os 5 periódicos do Núcleo (Zona 1) que concentram 60% das citações dos deputados e renova suas assinaturas, cancelando periódicos da Zona 3 periférica para economizar recursos públicos.
- **Cenário 2 (Altmetria para Medir o Impacto de Estudos da Consultoria da Câmara):** Um consultor publica uma nota técnica sobre desregulamentação do mercado de carbono. A biblioteca monitora a repercussão usando indicadores altmétricos (Altmetric Badge): o estudo foi citado em 40 projetos de lei de deputados, compartilhado 5.000 vezes em redes sociais e usado como referência em matérias de jornal. Esse dado comprova o **impacto social direto** da produção legislativa perante a sociedade.
- **Cenário 3 (Índice H na Seleção de Peritos para Audiências Públicas):** Uma comissão permanente precisa convidar cientistas de renome para depor sobre transição energética. O bibliotecário levanta o **Índice H** dos pesquisadores nas bases Web of Science e Scopus, selecionando os acadêmicos com produção consolidada e alto impacto citacional internacional.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Lei / Indicador | Criador / Origem | O que Mede Exatamente | Fórmula / Princípio |
| :--- | :--- | :--- | :--- |
| **Lei de Bradford** | Samuel C. Bradford (1934) | Produtividade de **periódicos** (dispersão) | Zonas concêntricas $1 : n : n^2$ |
| **Lei de Lotka** | Alfred J. Lotka (1926) | Produtividade de **autores** | Quadrado inverso: $A_n = \\frac{A_1}{n^2}$ |
| **Lei de Zipf** | George K. Zipf (1949) | Frequência de **palavras** no texto | $r \\times f = C$ |
| **Fator de Impacto** | Eugene Garfield (1955) | Prestígio de um **periódico** específico | Citações em 2 anos / Artigos publicados |
| **Índice H** | Jorge Hirsch (2005) | Impacto citacional de um **pesquisador** | $h$ artigos com $\\ge h$ citações |
| **Altmetria** | Jason Priem et al. (2010) | Impacto social da ciência na web | Menções em redes, blogs, Wikipédia e políticas |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Troca das Três Leis Bibliométricas:** O Cebraspe inverte sistematicamente: diz que Bradford mede palavras, que Zipf mede autores e que Lotka mede periódicos. **Gabarito: ERRADO.** Grave: **B**radford = **P**eriódicos; **L**otka = **A**utores; **Z**ipf = **P**alavras.
- **Índice H com Citação de um Único Artigo:** Afirmar que um autor que possui um único artigo com 10.000 citações terá índice H igual a 10.000. **Gabarito: ERRADO.** Seu índice H será exatamente **1**, pois ele só possui 1 artigo com pelo menos 1 citação! O índice H exige quantidade e impacto simultaneamente.
- **Altmetria Substitui a Revisão por Pares:** A banca propõe que a altmetria substitui a avaliação por pares e a contagem de citações tradicionais. **Gabarito: ERRADO.** A altmetria mede a atenção e repercussão social imediata; ela é **complementar** e não substitui a validação acadêmica formal.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **VANTI, Nadia Pompeu.** Da bibliometria à webometria: uma exploração conceitual dos mecanismos de mensuração da informação e do ponto de vista da informação e de sua alocação espacial e digital. *Ciência da Informação*, v. 31, n. 2, p. 152-162, 2002. (O melhor artigo introdutório cobrado pelo Cebraspe).
- **BRADFORD, Samuel C.** Sources of information on specific subjects. *Engineering*, v. 137, p. 85-86, 1934.
- **LOTKA, Alfred J.** The frequency distribution of scientific productivity. *Journal of the Washington Academy of Sciences*, v. 16, n. 12, p. 317-323, 1926.
- **ZIPF, George K.** *Human Behavior and the Principle of Least Effort*. Cambridge: Addison-Wesley, 1949.
- **PRIEM, Jason et al.** *Altmetrics: a manifesto*. Altmetrics.org, 2010.
- **HIRSCH, Jorge E.** An index to quantify an individual's scientific research output. *Proceedings of the National Academy of Sciences (PNAS)*, v. 102, n. 46, p. 16569-16572, 2005."""
}

def aplicar_lote4():
    print("Iniciando injeção didática do Lote 4 (M7, M8 e M9)...")
    sucessos = 0
    for sub_id, texto_didatico in TEXTOS_DIDATICOS.items():
        caminhos = [
            f"src/content/modules/m7-preservacao/{sub_id}.ts",
            f"src/content/modules/m8-normalizacao/{sub_id}.ts",
            f"src/content/modules/m9-comunicacao/{sub_id}.ts",
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

    print(f"\nFinalizado Lote 4: {sucessos}/{len(TEXTOS_DIDATICOS)} submódulos atualizados com sucesso.")

if __name__ == "__main__":
    aplicar_lote4()
