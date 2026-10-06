import type { ModuloFilho } from '../../../domain/types';

export const submodulo31: ModuloFilho = {
  id: 'sub-3-1',
  numero: '3.1',
  titulo: 'Teoria da Classificação, CDD (23ª ed.) e CDU',
  descricaoCurta: 'Teoria da classificação bibliográfica (Piedade), estrutura hierárquica e enumerativa da CDD (23ª ed. e Tabelas T1 a T6), e arquitetura analítico-sintética da CDU (sinais de síntese, auxiliares comuns independentes e dependentes, e auxiliares especiais analíticas).',
  tempoEstimadoMinutos: 45,
  autoresChave: ['Melvil Dewey', 'Paul Otlet', 'Henri La Fontaine', 'Maria Antonieta Requião Piedade', 'Odilon Pereira da Silva', 'Antonio Miranda'],
  alertasCebraspe: [
    'A CDD é uma classificação predominantemente ENUMERATIVA e hierárquica (embora com recursos sintéticos limitados pelas tabelas auxiliares); a CDU é uma classificação ANALÍTICO-SINTÉTICA e FACETADA que permite a livre construção e síntese combinatória de assuntos compostos e complexos.',
    'A CDU não possui 10 classes ativas hoje: a classe 4 encontra-se VAGA (esvaziada na década de 1960 para expansões futuras do conhecimento; seus conteúdos de linguística foram fundidos com a literatura na classe 8). O Cebraspe adora afirmar que a CDU possui 10 classes ativas ou que possui 12 classes principais: ERRADO!',
    'Atenção estrita aos sinais de relação da CDU: "+" é Adição/Coordenação (une assuntos não consecutivos); "/" é Extensão Consecutiva (abrange classes contíguas de uma sequência, ex.: 53/55); ":" é Relação Simples (reversível, ex.: 32:94 = 94:32); "::" é Relação Fixa ou Ordem Fixa (irreversível, trava o primeiro número para arquivamento no catálogo).',
    'Tabelas Auxiliares Comuns Independentes da CDU: Língua (=...), Forma (0...), Lugar (1/9), Raça/Etnia (=...), Tempo "...". Característica suprema em provas: possuem significado universal e podem figurar no início, meio ou fim de uma notação composta, assumindo inclusive a posição de entrada.',
    'Tabelas Auxiliares Especiais (Analíticas) da CDU: têm aplicação restrita e localizada apenas nas seções da tabela principal para as quais foram criadas. Dividem-se em analíticas de traço (-1/-9: processos e operações), de ponto zero (.01/.09: aspectos teóricos e metodológicos) e de apóstrofo (\'1/\'9: síntese integrativa e componentes).',
    'Tabela 1 da CDD (Subdivisões Padrão): É a única tabela auxiliar da CDD que pode ser aplicada a qualquer número da tabela principal sem necessidade de instrução expressa no esquema, obedecendo às regras de aplicação com um ou dois zeros.',
  ],
  quadroComparativo: {
    titulo: 'Quadro Comparativo: Sistema Decimal de Dewey (CDD) vs. Classificação Decimal Universal (CDU)',
    colunas: ['Critério Comparativo', 'CDD (Melvil Dewey, 1876 / 23ª ed.)', 'CDU (Otlet & La Fontaine, 1895 / Edição Padrão)'],
    linhas: [
      ['Estrutura Epistemológica', 'Predominantemente enumerativa, linear e hierárquica', 'Analítico-sintética, facetada e combinatória'],
      ['Classes Principais', '10 classes completas ativas (000 a 900)', '9 classes ativas (classe 4 vaga; linguística fundida na classe 8)'],
      ['Notação Básica', 'Números arábicos puros com ponto fixo invariável após 3 dígitos (ex.: 341.242)', 'Números arábicos combinados com pontos a cada 3 dígitos e rica simbologia gráfica'],
      ['Flexibilidade Combinatória', 'Combinação restrita e rigidamente disciplinada pelas Tabelas T1 a T6', 'Livre síntese por sinais de relação (+, /, :, ::, []) e auxiliares comuns/especiais'],
      ['Ordem de Citação', 'Rígida e pré-determinada pela estrutura da tabela', 'Flexível; permite adaptar a ordem de citação conforme a especialidade da biblioteca'],
      ['Origem Histórica', 'Criada para a ordenação física das estantes do Amherst College (1876)', 'Criada para o Repertório Bibliográfico Universal do Instituto Internacional de Bibliografia (1895)'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Teoria Geral da Classificação e Fundamentos Epistemológicos

A classificação é o processo mental e operativo de agrupar coisas, seres ou ideias com base em suas semelhanças e separá-los de acordo com suas diferenças, estabelecendo categorias lógicas e classes mutuamente exclusivas (Piedade, 1983, *Introdução à Teoria da Classificação*).

#### A. Classificação Filosófica / Científica vs. Classificação Documentária
* **Classificação Filosófica e Científica:** Ordena o universo do conhecimento puro ou as espécies naturais em si (ex.: a taxonomia de Lineu na Biologia, as árvores do saber de Aristóteles, Francis Bacon e Auguste Comte). Seu objetivo é taxonômico e puramente teórico.
* **Classificação Documentária / Bibliográfica:** Ordena o conhecimento registrado em suportes físicos ou digitais. Tem por finalidade precípua organizar o acervo nas estantes de forma relativa (*ordem útil*) e viabilizar a representação temática dos documentos nos catálogos para recuperação ágil e precisa.

---

### 2. A Classificação Decimal de Dewey (CDD - 23ª Edição)

Criada pelo bibliotecário norte-americano **Melvil Dewey em 1876**, a CDD revolucionou a Biblioteconomia mundial ao introduzir o princípio da **localização relativa** (os livros são ordenados pelo assunto nas estantes, acompanhando o crescimento das coleções, em vez de ficarem presos a prateleiras e salas com numeração fixa).

#### A. A Estrutura das Dez Classes Principais da CDD
O universo do conhecimento é repartido em dez grandes classes decimais (000 a 900):
* \`000\`: Ciência da Computação, Informação e Obras Gerais
* \`100\`: Filosofia e Psicologia
* \`200\`: Religião
* \`300\`: Ciências Sociais *(onde se insere o Direito: 340 e Administração Pública: 350)*
* \`400\`: Línguas / Linguística
* \`500\`: Ciências Puras (Matemática, Física, Química, Biologia)
* \`600\`: Tecnologia e Ciências Aplicadas (Engenharia, Medicina, Agricultura)
* \`700\`: Artes e Recreação
* \`800\`: Literatura
* \`900\`: História, Geografia e Biografias

#### B. Princípio Hierárquico e Decimalidade da CDD
* **Divisão Decenal:** Cada classe reparte-se em 10 divisões (totalizando 100 divisões), e cada divisão desdobra-se em 10 seções (totalizando 1.000 seções).
* **Regra do Ponto Fixo:** Na CDD, a notação é composta exclusivamente por algarismos arábicos. O ponto decimal é inserido **invariavelmente após o terceiro dígito** (ex.: \`341.2\` Direito Internacional; \`025.43\` Classificação Decimal).
* **Mnemônica:** Determinados números e dígitos repetem-se com o mesmo significado ao longo de várias classes (por exemplo, a forma periódica frequentemente envolve o dígito \`05\`).

#### C. As Seis Tabelas Auxiliares da CDD (T1 a T6)
A CDD complementa suas tabelas principais por meio de seis tabelas auxiliares:
1. **Tabela 1 — Subdivisões Padrão (*Standard Subdivisions*):**
   * Aplicável a qualquer classe principal, **mesmo sem instrução expressa** na tabela principal.
   * Representa formas de apresentação ou pontos de vista (ex.: \`-01\` Filosofia e teoria; \`-03\` Dicionários e enciclopédias; \`-05\` Publicações seriadas; \`-07\` Estudo e ensino).
   * *Atenção:* Quando a classe principal já termina em zero (como \`340\`), o zero da Tabela 1 é fundido (ex.: \`340.03\` Dicionário de Direito), salvo quando o esquema instrui expressamente o uso de dois zeros (\`-00\`).
2. **Tabela 2 — Áreas Geográficas, Períodos Históricos, Pessoas:** Representa países, regiões e biografias (ex.: \`-81\` Brasil).
3. **Tabela 3 — Subdivisões para as Artes e Literaturas Individuais:** Desdobrada em T3A (obras de autores individuais), T3B (obras de múltiplos autores) e T3C (notação a ser adicionada conforme instruído).
4. **Tabela 4 — Subdivisões de Línguas Individuais:** Utilizada na classe 400 (gramática, dicionários, pronúncia).
5. **Tabela 5 — Grupos Étnicos e Nacionais:** Representa povos e etnias (ex.: \`-98\` Povos indígenas sul-americanos).
6. **Tabela 6 — Línguas:** Notação específica para línguas do documento (ex.: \`-69\` Língua portuguesa).

---

### 3. A Classificação Decimal Universal (CDU)

Desenvolvida pelos juristas e bibliógrafos belgas **Paul Otlet e Henri La Fontaine em 1895**, no âmbito do Instituto Internacional de Bibliografia (IIB), a CDU derivou da CDD, mas foi construída com propósito distinto: indexar exaustivamente artigos de periódicos, patentes, leis e documentos avulsos para o *Repertório Bibliográfico Universal*.

No Brasil, a CDU é regulada e traduzida sob a coordenação do **IBICT** (*Instituto Brasileiro de Informação em Ciência e Tecnologia*), sendo o sistema oficial adotado pela maioria das bibliotecas jurídicas federais (STF, STJ, TST, TCU e Senado Federal).

#### A. A Estrutura Atual das Classes da CDU e a Vacância da Classe 4
* \`0\`: Ciência e Conhecimento. Organização. Informática. Documentação.
* \`1\`: Filosofia. Psicologia.
* \`2\`: Religião. Teologia.
* \`3\`: Ciências Sociais. Direito (34). Administração Pública (35). Economia (33). Política (32).
* \`4\`: **CLASSE VAGA** *(Na década de 1960, a FID esvaziou a classe 4 para abrir espaço a novas disciplinas emergentes; a linguística foi transferida para a classe 8, ficando 81 = Linguística e 82 = Literatura).*
* \`5\`: Matemática. Ciências Naturais.
* \`6\`: Ciências Aplicadas. Medicina. Tecnologia.
* \`7\`: Arte. Recreação. Entretenimento. Desporto.
* \`8\`: Linguagem. Linguística. Literatura.
* \`9\`: Geografia. Biografia. História.

---

#### B. Sinais Gráficos de Coordenação e Relação (Sintaxe da CDU)
A maior potência da CDU reside em seus operadores sintáticos, que transformam um sistema enumerativo em uma linguagem analítico-sintética:

| Sinal Gráfico | Denominação Canônica | Função e Propriedade Lógica | Exemplo Notacional Prático |
| :---: | :--- | :--- | :--- |
| **+** | **Adição / Coordenação** | Une dois ou mais números de assuntos **não consecutivos**. Semanticamente não é reversível como relação. | \`622 + 669\` (Mineração e Metalurgia juntas no mesmo livro) |
| **/** | **Extensão Consecutiva** | Une o primeiro e o último número de uma **sequência contínua/consecutiva** de classes. | \`53/55\` (Física, Química e Geociências: abrange 53, 54 e 55) |
| **:** | **Relação Simples** | Conecta dois assuntos independentes que interagem. É uma relação **perfeitamente reversível** na busca. | \`34:681.3\` (Direito e Informática) = \`681.3:34\` (Informática e Direito) |
| **::** | **Relação Fixa / Ordem Fixa** | Conecta dois assuntos estabelecendo **ordem fixa e irreversível**, travando o primeiro número para arquivamento no catálogo. | \`537::621.3\` (Eletricidade relacionada à Engenharia Elétrica, arquivado sob 537) |
| **[ ]** | **Subagrupamento Algébrico** | Funciona como parênteses matemáticos para delimitar e agrupar relações complexas. | \`31:[622+669]\` (Estatística de Mineração e Metalurgia) |
| **\*** | **Notação Não CDU** | Introduz códigos externos alheios à CDU (fórmulas químicas, normas, etc.). | \`546.47*Zn\` (Zinco) |
| **A/Z** | **Especificação Alfabética** | Complementa o número da CDU com o nome próprio por extenso. | \`821.134.3(81)-31MACHADO\` (Romance brasileiro de Machado de Assis) |

---

#### C. As Tabelas Auxiliares Comuns da CDU

As subdivisões auxiliares comuns dividem-se em duas categorias funcionais:

##### 1. Auxiliares Comuns Independentes (Podem figurar no início ou meio da notação)
* **Língua (\`=...\`):** Indica o idioma do documento (ex.: \`=134.3\` Português, \`=111\` Inglês).
* **Forma (\`(0...)\`):** Indica a forma física ou de apresentação do documento (ex.: \`(035)\` Manual/Guia, \`(05)\` Publicação Periódica, \`(094.4)\` Código de Leis, \`(043)\` Dissertação/Tese).
* **Lugar (\`(1/9)\`):** Indica a localização geográfica, administrativa ou política (ex.: \`(81)\` Brasil, \`(815.3)\` Rio de Janeiro, \`(100)\` Internacional/Mundial, \`(1-04)\` Fronteiras).
* **Raça, Etnia e Nacionalidade (\`(=...)\`):** Indica povos e nacionalidades (ex.: \`(=1-81)\` Povos indígenas).
* **Tempo (\`"..."\`):** Delimitado por aspas, indica datas e intervalos temporais (ex.: \`"2026"\` Ano de 2026, \`"19"\` Século XX, \`"321"\` Primavera, \`"+"\` Era Cristã, \`"-"\` Antes de Cristo).

##### 2. Auxiliares Comuns Dependentes (Acoplados obrigatoriamente a um número principal)
* **Propriedades (\`-02...\`):** Características materiais ou conceituais.
* **Materiais (\`-03...\`):** Matéria-prima do objeto.
* **Relações, Processos e Operações (\`-04...\`):** Ações técnicas.
* **Pessoas e Características Pessoais (\`-05...\`):** Pessoas por gênero, idade ou ocupação (ex.: \`-055.2\` Mulheres, \`-053.2\` Crianças, \`-057.11\` Trabalhadores com carteira assinada).

---

#### D. Subdivisões Auxiliares Especiais (Analíticas da CDU)
Diferenciam-se das comuns porque possuem significado estritamente **localizado e dependente da classe principal** à qual pertencem:
1. **Analíticas de Traço (\`-1/-9\`):** Denotam processos, operações técnicas, estados, propriedades e máquinas específicas daquela área.
2. **Analíticas de Ponto Zero (\`.01/.09\`):** Denotam aspectos teóricos, metodológicos, de gestão, estudos especiais e pontos de vista da disciplina.
3. **Analíticas de Apóstrofo (\`'1/'9\`):** Realizam sínteses integrativas e indicam componentes químicos, produtos derivados ou ligas materiais.

---

### 4. Ordem de Interpolação e Ordem de Arquivamento na CDU

Para a ordenação de fichas ou de documentos nas estantes, a CDU preconiza a regra de ir do **mais restrito / mais específico para o mais abrangente / mais geral**:

\`\`\`text
  Ordem Vertical Padrão na Estante:
  1. Notação pura simples:               34
  2. Notação com extensão consecutiva:  34/35
  3. Notação com adição:                34+35
  4. Notação com relação simples:       34:681.3
  5. Notação com auxiliar especial:     34-05
  6. Notação com auxiliar comum:        34(81)
\`\`\`

---

### 5. Padrões de Cobrança e Armadilhas do Cebraspe em Provas

| Tema da Prova | Como o Cebraspe Tenta Enganar o Candidato | Verdade Técnica Oficial (Gabarito) |
| :--- | :--- | :--- |
| **Vacância da Classe 4 da CDU** | *"Na Classificação Decimal Universal, as 10 classes principais encontram-se plenamente ocupadas, estando a classe 4 reservada para as ciências da linguagem."* | **ERRADO.** A classe 4 está **vaga**. Os conteúdos de linguagem migraram para a classe 8 juntamente com a literatura. |
| **Sinal de Relação Fixa (::)** | *"O sinal de dois pontos duplos (::) na CDU indica que os dois conceitos indexados podem ser livremente invertidos na ordenação do catálogo coletivo."* | **ERRADO.** Quem admite inversão livre é a relação simples (**:**). Os dois pontos duplos (**::**) determinam **relação fixa / ordem irreversível**. |
| **Extensão Consecutiva (/)** | *"O sinal de barra (/) na CDU é utilizado para coordenar temas distantes e dispersos nas tabelas, como História e Química."* | **ERRADO.** A barra indica **extensão consecutiva** (classes vizinhas e contíguas, ex.: 53/55). Para temas não consecutivos utiliza-se o sinal de adição (**+**). |
| **Tabela 1 da CDD** | *"Para adicionar uma subdivisão padrão da Tabela 1 da CDD a um número de classificação, o catalogador necessita de autorização explícita na tabela principal."* | **ERRADO.** As subdivisões padrão da Tabela 1 da CDD aplicam-se **universalmente a qualquer número**, salvo instrução em contrário. |`,
  checkpoints: [
    {
      id: 'cp-3-1-1',
      pergunta: 'Micro-Checkpoint 1: Estrutura Atual das Classes da CDU',
      item: 'Na Classificação Decimal Universal (CDU), a classe 4 encontra-se atualmente vaga, tendo seus conteúdos de linguística sido transferidos e agrupados com a literatura na classe 8.',
      gabarito: 'C',
      justificativa: 'Correto! Essa é uma clássica questão do Cebraspe. A classe 4 foi esvaziada pela FID para futura expansão do conhecimento, restando exatamente 9 classes principais ativas.',
    },
    {
      id: 'cp-3-1-2',
      pergunta: 'Micro-Checkpoint 2: Sinais de Relação na CDU',
      item: 'O sinal de dois pontos duplos (::) na CDU é utilizado como indicador de relação simples e perfeitamente reversível, permitindo a livre inversão dos números na composição notacional.',
      gabarito: 'E',
      justificativa: 'Errado! Os dois pontos duplos (::) indicam relação fixa ou irreversível. Quem indica relação reversível na CDU são os dois pontos simples (:).',
    },
    {
      id: 'cp-3-1-3',
      pergunta: 'Micro-Checkpoint 3: Tabela 1 Auxiliar da CDD',
      item: 'Na Classificação Decimal de Dewey (CDD), a Tabela 1 (Subdivisões Padrão) só pode ser utilizada quando houver instrução expressa na tabela principal de classificação autorizando a sua adição.',
      gabarito: 'E',
      justificativa: 'Errado! As subdivisões padrão da Tabela 1 da CDD possuem caráter mnemônico universal e podem ser aplicadas a qualquer número da tabela principal, exceto quando houver instrução em contrário.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-3-1-1',
        periodo: '1876',
        disciplina: 'Classificação Decimal de Dewey (CDD)',
        focoPrincipal: 'Criação da primeira classificação decimal moderna estruturada em 10 classes e introdução da localização relativa.',
        figuraChave: 'Melvil Dewey',
      },
      {
        id: 'tl-3-1-2',
        periodo: '1895 / 1905',
        disciplina: 'Classificação Decimal Universal (CDU)',
        focoPrincipal: 'Adaptação analítico-sintética e facetada da CDD com sinais de síntese e auxiliares comuns para o Repertório Bibliográfico Universal.',
        figuraChave: 'Paul Otlet e Henri La Fontaine',
      },
      {
        id: 'tl-3-1-3',
        periodo: '1958',
        disciplina: 'Comissão Brasileira da CDU (IBBD/IBICT)',
        focoPrincipal: 'Implantação oficial e difusão sistemática da CDU no Brasil, estabelecendo sua hegemonia nas bibliotecas jurídicas governamentais.',
        figuraChave: 'IBBD / IBICT',
      },
    ],
    autores: [
      {
        id: 'aut-3-1-1',
        nome: 'Melvil Dewey',
        ano: 1876,
        obraPrincipal: 'A Classification and Subject Index for Cataloguing and Arranging the Books and Pamphlets of a Library',
        ideiaChave: 'Divisão decimal do saber, notação pura com ponto fixo após o terceiro dígito e ordenação relativa nas estantes.',
        chipPegadinha: 'A CDD é predominantemente enumerativa, não analítico-sintética como a CDU.',
      },
      {
        id: 'aut-3-1-2',
        nome: 'Paul Otlet e Henri La Fontaine',
        ano: 1895,
        obraPrincipal: 'Manuel du Répertoire Bibliographique Universel',
        ideiaChave: 'Pioneiros da Documentação e criadores da CDU, introduzindo operadores sintáticos e facetas para documentos em microescala.',
        chipPegadinha: 'A CDU foi projetada para bibliografias e artigos, e não apenas para livros inteiros nas estantes.',
      },
      {
        id: 'aut-3-1-3',
        nome: 'Maria Antonieta Requião Piedade',
        ano: 1983,
        obraPrincipal: 'Introdução à teoria da classificação',
        ideiaChave: 'Fundamentos lógicos da classificação: gênero, espécie, mútua exclusividade e ordem útil na organização documental.',
        chipPegadinha: 'Classificação documental serve à guarda e recuperação física e temática do acervo.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-3-1-1',
        afirmacao: 'Diferentemente da CDD, a notação da CDU utiliza estritamente números decimais puros sem qualquer presença de sinais gráficos de pontuação.',
        gabarito: 'E',
        porQue: 'A CDU utiliza uma rica profusão de sinais auxiliares (+ , / , : , :: , = , ( ) , " " , - , .0 , \'), enquanto a CDD usa notação puramente numérica com apenas um ponto fixo.',
      },
      {
        id: 'peg-3-1-2',
        afirmacao: 'Na CDU, os sinais auxiliares especiais analíticos podem ser aplicados livremente a qualquer classe principal do sistema.',
        gabarito: 'E',
        porQue: 'Os auxiliares especiais têm aplicação estritamente restrita e localizada apenas nas seções da tabela principal para as quais foram expressamente criados.',
      },
      {
        id: 'peg-3-1-3',
        afirmacao: 'Na CDU, a notação entre aspas duplas "..." é utilizada exclusivamente para indicar citações textuais de autores no registro.',
        gabarito: 'E',
        porQue: 'As aspas "..." constituem o sinal auxiliar comum independente de TEMPO (datas, anos, séculos, estações).',
      },
    ],
  },
};
