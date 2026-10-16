import type { ModuloFilho } from '../../../domain/types';

export const submodulo142: ModuloFilho = {
  id: 'sub-14-2',
  numero: '14.2',
  editalRef: 'Conhecimentos Básicos - Tecnologia da Informação (Item 4: Segurança da Informação, Criptografia e Riscos)',
  preRequisitos: ["sub-14-1"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-6-3",
          "titulo": "Preservação Digital e Repositórios Confiáveis",
          "motivo": "Uso de criptografia hash para verificação de fixidez."
      }
  ],
  titulo: 'Redes de Computadores, Internet/Intranet, Criptografia e Gestão de Riscos de Segurança da Informação',
  antesDeLer: [
    {
      termo: 'Hash',
      definicao: 'Função matemática unidirecional que converte qualquer volume de dados em um resumo de tamanho fixo para atestar fixidez.',
      exemploBiblioteca: 'Calcular SHA-256 de ata parlamentar para certificar que nenhum bit foi corrompido ou adulterado.',
    },
    {
      termo: 'Criptografia Assimétrica',
      definicao: 'Criptografia baseada em par de chaves: chave pública (para cifrar) e chave privada (para decifrar e assinar).',
      exemploBiblioteca: 'Garantir que pareceres jurídicos sejam assinados com a chave privada do consultor legislativo.',
    },
    {
      termo: 'Assinatura Digital',
      definicao: 'Mecanismo criptográfico que atesta autoria, integridade e não repúdio a documentos digitais com certificado ICP-Brasil.',
      exemploBiblioteca: 'Assinatura digital com token ICP-Brasil A3 para homologação oficial de autógrafos de leis.',
    },
    {
      termo: 'Ransomware',
      definicao: 'Software malicioso que sequestra sistemas informacionais criptografando arquivos e exigindo resgate financeiro.',
      exemploBiblioteca: 'Risco cibernético enfrentado por repositórios digitais, exigindo backups desconectados (air-gapped).',
    },
    {
      termo: 'Regra 3-2-1',
      definicao: 'Estratégia de backup: manter pelo menos 3 cópias, em 2 mídias diferentes, com 1 cópia fora do local físico.',
      exemploBiblioteca: 'Manter cópia dos arquivos digitais da Câmara no cofre local e réplica em nuvem governamental em outra cidade.',
    },
  ],
  descricaoCurta: 'Arquitetura TCP/IP, modelos de rede e navegação web; ameaças cibernéticas (malware, ransomware, phishing e pharming); mecanismos de proteção (firewall, antivírus, MFA); criptografia simétrica, assimétrica, hash, assinatura digital e ICP-Brasil (MP nº 2.200-2/2001); políticas de backup (regra 3-2-1) e gestão de riscos informacionais (ABNT NBR ISO 31000:2018 e ISO/IEC 27005:2023).',
  tempoEstimadoMinutos: 45,
  autoresChave: [
    'Andrew Tanenbaum (2021)',
    'William Stallings (2018)',
    'CERT.br / NIC.br (2021)',
    'ABNT NBR ISO 31000:2018',
    'ABNT NBR ISO/IEC 27005:2023',
    'MP nº 2.200-2/2001 (ICP-Brasil)',
  ],
  alertasCebraspe: [
    'Internet vs. Intranet vs. Extranet: a Intranet utiliza exatamente a mesma pilha de protocolos e tecnologias da Internet (TCP/IP, HTTP, DNS), diferenciando-se unicamente pelo escopo de acesso (restrito aos colaboradores da organização). A Extranet representa a extensão segura da intranet para parceiros ou usuários externos autorizados.',
    'Protocolos de Rede e Portas Críticas: DNS (porta 53 UDP/TCP - resolução de nomes em IPs); DHCP (portas 67/68 UDP - atribuição dinâmica de IPs); HTTP (porta 80 TCP) vs. HTTPS (porta 443 TCP com TLS/SSL); SSH (porta 22 TCP) vs. Telnet (porta 23 - tráfego em texto claro inseguro).',
    'Classificação de Pragas Virtuais (Malware): Vírus necessita de hospedeiro e execução explícita pelo usuário para se propagar; Worm propaga-se de forma autônoma pelas redes explorando vulnerabilidades sem precisar de hospedeiro; Ransomware sequestra dados por criptografia simétrica/assimétrica exigindo resgate; Cavalo de Troia (Trojan) disfarça-se de programa legítimo para abrir portas dos fundos (backdoors).',
    'Ataques Cibernéticos e Engenharia Social: Phishing visa induzir o usuário a entregar credenciais por e-mails ou mensagens falsas; Pharming adultera a resolução de nomes (tabela hosts local ou envenenamento de cache DNS - DNS Cache Poisoning) redirecionando o tráfego para sites espúrios mesmo quando a URL digitada estiver correta.',
    'Criptografia Simétrica vs. Assimétrica: A simétrica utiliza uma única chave secreta compartilhada para cifrar e decifrar (DES, 3DES, AES), sendo rápida e adequada para grandes volumes de dados; a assimétrica utiliza um par de chaves matematicamente correlacionadas (chave pública para cifrar/verificar e chave privada para decifrar/assinar; RSA, ECC), resolvendo a distribuição de chaves, porém com custo computacional consideravelmente maior.',
    'Funções de Hash Criptográfico e Fixidez: O hash (SHA-256, SHA-512) é unidirecional (one-way), gera um resumo de tamanho fixo a partir de qualquer entrada e possui efeito avalanche (alterar 1 único bit altera todo o digest). Na preservação digital (OAIS / PREMIS), o hash é a garantia técnica de fixidez (fixity) para auditar integridade de arquivos parlamentares contra degradação de bits (bit rot). MD5 e SHA-1 são vulneráveis a colisões e proibidos na ICP-Brasil.',
    'Assinatura Digital vs. Eletrônica vs. Digitalizada: A assinatura digital é obtida cifrando-se o hash do documento com a chave privada do autor, garantindo autenticidade, integridade e não repúdio (irretratabilidade). Não se confunde com assinatura eletrônica genérica (termo amplo que inclui senhas e OTPs) nem com assinatura digitalizada (mera imagem escaneada sem segurança probatória).',
    'ICP-Brasil e Tipos de Certificado (MP nº 2.200-2/2001): A Autoridade Certificadora Raiz é o ITI (Instituto Nacional de Tecnologia da Informação). Certificados A1 têm chave gerada e armazenada em software no computador/navegador (validade de 1 ano); certificados A3 têm chave gerada e armazenada em hardware criptográfico inviolável (smartcard ou token criptográfico FIPS 140-2, validade de até 3 a 5 anos). Conforme o art. 10, § 1º, declarações assinadas com certificado ICP-Brasil presumem-se verdadeiras em relação aos signatários.',
    'Gestão de Riscos Informacionais (ABNT NBR ISO 31000:2018 e ISO/IEC 27005:2023): O processo de avaliação de riscos (risk assessment) compreende: identificação, análise (probabilidade x impacto) e avaliação de riscos (comparação com critérios/apetite a risco). O tratamento de riscos envolve quatro estratégias: mitigar (reduzir), aceitar (reter), evitar e transferir (compartilhar).',
    'Tipos de Backup e Regra 3-2-1: Backup Completo (cópia total de todos os arquivos; restauração mais rápida com apenas 1 conjunto); Backup Diferencial (copia arquivos alterados desde o último backup completo; restauração exige o completo + o último diferencial); Backup Incremental (copia arquivos alterados desde o último backup completo ou incremental; restauração mais demorada, exigindo o completo + todos os incrementais intermediários na ordem). A regra 3-2-1 exige 3 cópias em 2 mídias diferentes com 1 cópia externa e offline (air-gapped) para imunidade a ransomware.',
  ],
  quadroComparativo: {
    titulo: 'Quadro Comparativo Integrado: Mecanismos de Proteção Criptográfica e Integridade',
    colunas: ['Mecanismo', 'Chaves Empregadas', 'Garantias Primárias (CIDAL)', 'Algoritmos Representativos', 'Aplicação Prática no Legislativo'],
    linhas: [
      [
        'Criptografia Simétrica',
        '1 chave secreta única (cifra e decifra)',
        'Confidencialidade em alta velocidade',
        'AES (128/256 bits), 3DES, ChaCha20',
        'Cifração de grandes bases de dados da Câmara e mídias de backup em fita LTO',
      ],
      [
        'Criptografia Assimétrica',
        'Par de chaves: Pública (cifra) e Privada (decifra)',
        'Confidencialidade e troca segura de chaves de sessão',
        'RSA (2048/4096 bits), ECC (Curvas Elípticas), Diffie-Hellman',
        'Estabelecimento de canal seguro HTTPS/TLS para navegação do portal da Câmara',
      ],
      [
        'Hash Criptográfico (Resumo)',
        'Nenhuma chave (algoritmo matemático unidirecional)',
        'Integridade estrita e Fixidez (detecção de adulteração)',
        'SHA-256, SHA-512, SHA-3 (MD5 e SHA-1 obsoletos por colisão)',
        'Verificação de fixidez de acervos digitais legislativos no repositório OAIS/PREMIS',
      ],
      [
        'Assinatura Digital (ICP-Brasil)',
        'Par de chaves: Privada (assina o hash) e Pública (verifica)',
        'Autenticidade, Integridade e Não Repúdio (irretratabilidade)',
        'Padrão ICP-Brasil (RSA 2048+ / SHA-256) em certificados A1 e A3',
        'Validação jurídica de autógrafos de leis, atas de plenário e certidões da Mesa Diretora',
      ],
      [
        'Backup Corporativo (Regra 3-2-1)',
        'Gestão de mídias (fita magnética, storage SAN, nuvem)',
        'Disponibilidade e Resiliência contra desastres e ransomware',
        'Backup Completo (Full), Diferencial e Incremental (cópia air-gapped)',
        'Salvaguarda de bases de dados do processo legislativo eletrônico e do acervo documental',
      ],
    ],
  },
  teoriaDensaMarkdown: `### 1. Fundamentos de Redes de Computadores e Arquitetura TCP/IP

#### A. Topologias e Escopos Geográficos de Rede
* **Classificação por Abrangência Geográfica:**
  * **PAN (Personal Area Network):** Alcance individual de curta distância (ex.: conexões Bluetooth e NFC entre periféricos).
  * **LAN (Local Area Network):** Rede local restrita a uma sala, andar, edifício ou campus legislativo (padrões Ethernet IEEE 802.3 cabeado e Wi-Fi IEEE 802.11 sem fio).
  * **MAN (Metropolitan Area Network):** Conexão de alta velocidade interligando unidades distribuídas em uma região metropolitana (ex.: anel de fibra óptica infovia interligando o Congresso Nacional, Ministérios e tribunais em Brasília).
  * **WAN (Wide Area Network):** Rede de longa distância com amplitude territorial interestadual ou global (a Internet pública é o exemplo canônico de WAN).
* **Internet vs. Intranet vs. Extranet:**
  * **Intranet:** Rede corporativa privada que opera **rigorosamente sobre a mesma pilha de protocolos TCP/IP e tecnologias da Internet pública** (servidores web HTTP/HTTPS, correio SMTP/IMAP, DNS corporativo), mas cujo perímetro de acesso é restrito e protegido por autenticação e firewalls exclusivamente aos colaboradores e servidores do órgão.
  * **Extranet:** Extensão controlada e autenticada da intranet para acesso externo por partes autorizadas (parceiros interinstitucionais, fornecedores contratuais ou outros órgãos do Poder Público).

#### B. Pilha de Protocolos TCP/IP e Portas Padronizadas
* **Camada de Aplicação:**
  * **DNS (Domain Name System - porta 53 UDP/TCP):** Resolve nomes de domínio amigáveis (ex.: \`camara.leg.br\`) em endereços IP roteáveis.
  * **DHCP (Dynamic Host Configuration Protocol - portas 67/68 UDP):** Configura dinamicamente parâmetros de rede (endereço IP, máscara de sub-rede, gateway padrão e servidores DNS) para hosts conectados.
  * **HTTP (porta 80 TCP) e HTTPS (porta 443 TCP):** Protocolo de transferência de hipertexto; o HTTPS implementa criptografia em trânsito com TLS/SSL.
  * **SSH (Secure Shell - porta 22 TCP):** Acesso remoto e execução de comandos seguros com autenticação criptografada por chaves públicas/privadas, substituindo o obsoleto e inseguro Telnet (porta 23).
* **Camada de Transporte:**
  * **TCP (Transmission Control Protocol):** Orientado a conexão, confiável, garante entrega ordenada de pacotes com controle de fluxo e congestionamento por meio do *three-way handshake* (SYN $\rightarrow$ SYN-ACK $\rightarrow$ ACK).
  * **UDP (User Datagram Protocol):** Não orientado a conexão, sem confirmação de entrega (*best-effort*), de baixa latência e alta velocidade, ideal para transmissões ao vivo de áudio e vídeo da TV Câmara e consultas DNS.
* **Camada de Rede / Internet:**
  * **IP (IPv4 e IPv6):** Roteamento e endereçamento lógico de pacotes. O IPv4 utiliza 32 bits (4 octetos decimais separados por pontos); o IPv6 utiliza 128 bits (8 grupos de 4 dígitos hexadecimais separados por dois-pontos).
  * **ICMP (Internet Control Message Protocol):** Mensagens de controle e diagnóstico de rede (utilizado pelas ferramentas \`ping\` e \`traceroute\`).

---

### 2. Ameaças Cibernéticas e Engenharia Social (Padrão CERT.br / Cebraspe)

#### A. Tipologia Canônica de Códigos Maliciosos (*Malware*)
* **Vírus:** Programa malicioso que **necessita de um hospedeiro** (arquivo executável, documento com macro) e de **execução explícita pelo usuário** para infectar novos arquivos e se propagar.
* **Worm (Verme):** Programa malicioso autônomo que **não necessita de hospedeiro nem de intervenção do usuário**; propaga-se de máquina em máquina explorando vulnerabilidades em serviços de rede abertos.
* **Ransomware:** Malware destrutivo que criptografa arquivos no armazenamento local e em unidades de rede compartilhadas, tornando-os inacessíveis, e exibe mensagem exigindo pagamento de resgate (frequentemente em criptomoedas):
  * *Ransomware Locker:* Bloqueia o acesso à interface visual e periféricos do computador.
  * *Ransomware Crypto:* Criptografa o sistema de arquivos mantendo a chave privada sob posse do atacante.
* **Cavalo de Troia (*Trojan Horse*):** Programa que se apresenta como utilitário benigno ou aplicativo legítimo, mas que, ao ser executado, realiza ações maliciosas ocultas, frequentemente abrindo **Backdoors** (portas dos fundos) para acesso remoto do invasor.
* **Spyware:** Software espião projetado para monitorar e capturar atividades do sistema sem consentimento:
  * *Keylogger:* Registra todas as teclas digitadas no teclado físico.
  * *Screenlogger:* Captura capturas de tela das regiões onde o ponteiro do mouse é clicado (para burlar teclados virtuais simples).
  * *Adware:* Exibe propagandas abusivas não solicitadas.
* **Bot e Botnet:** Programa que permite o controle remoto da máquina zumbi por um atacante (*botmaster*), formando redes massivas (*botnets*) empregadas em ataques de negação de serviço distribuída (**DDoS - Distributed Denial of Service**).

#### B. Engenharia Social e Ataques de Redirecionamento
* **Phishing:** Fraude eletrônica baseada em e-mails, SMS (*Smishing*) ou mensagens falsas simulando comunicações de instituições confiáveis, contendo links capciosos para páginas clonadas com intuito de subtrair credenciais e senhas.
* **Spear-Phishing:** Ataque de phishing altamente direcionado e personalizado contra um indivíduo ou departamento específico de um órgão público (ex.: setor de licitações ou taquigrafia da Câmara), utilizando dados prévios da vítima para maximizar a credibilidade.
* **Pharming (Envenenamento de Resolução de Nomes):** Ataque que compromete a resolução de nomes de domínio, alterando o arquivo local \`hosts\` do sistema operacional ou contaminando o cache de um servidor DNS (**DNS Cache Poisoning**). Como resultado, o usuário digita a URL oficial correta no navegador, mas é direcionado transparentemente para o endereço IP do servidor fraudulento controlado pelo criminoso.

---

### 3. Mecanismos de Proteção, Autenticação e Governança de Backup

#### A. Ferramentas e Mecanismos de Segurança
* **Firewall:** Dispositivo ou software que atua na fronteira da rede ou no host (*host-based firewall*), inspecionando o tráfego de entrada e saída com base em uma tabela de regras de segurança (endereço IP de origem/destino, porta e protocolo):
  * *Firewall Stateless:* Analisa pacotes isoladamente sem considerar o estado prévio da conexão.
  * *Firewall Stateful (com estado):* Monitora o contexto e o fluxo das conexões ativas, permitindo respostas legítimas a requisições internas iniciadas pelo host.
  * *Next-Generation Firewall (NGFW):* Inspeciona a camada de aplicação (Layer 7), detecta assinaturas de ataques em profundidade (DPI - Deep Packet Inspection) e integra sistemas de prevenção de intrusão (IPS).
* **Antivírus e Mecanismos de Detecção:**
  * *Assinatura:* Compara hash e padrões binários conhecidos com uma base de dados previamente catalogada (ineficaz contra ameaças de dia zero / *zero-day*).
  * *Heurística:* Analisa estruturas e instruções potencialmente suspeitas no código sem necessitar de assinatura prévia.
  * *Comportamental / Sandbox:* Executa o programa em ambiente virtual isolado para observar ações em tempo real (ex.: tentativas de modificar o registro do sistema ou criptografar arquivos em massa).
* **Autenticação Multifator (MFA - Multi-Factor Authentication):**
  * Exige ao menos dois fatores distintos de categorias independentes:
    1. *O que você sabe:* Senha, PIN, frase secreta.
    2. *O que você tem:* Token físico, aplicativo autenticador OTP (TOTP), chave FIDO2/U2F, certificado digital em cartão/token.
    3. *O que você é:* Biometria (impressão digital, reconhecimento facial, íris).
    *(Nota: Inserir duas senhas ou senha + pergunta de segurança constitui apenas fator único repetido, e não MFA).*

#### B. Estratégias e Procedimentos de Backup Corporativo
* **Janela e Tipos de Backup:**
  * **Backup Completo (Full):** Cópia integral do acervo de dados. A restauração requer apenas o último volume completo.
  * **Backup Diferencial:** Cópia dos arquivos alterados desde o último backup completo. Não desmarca o bit de arquivo. A restauração requer o último backup completo + o último backup diferencial.
  * **Backup Incremental:** Cópia apenas dos arquivos alterados desde o último backup qualquer (completo ou incremental anterior). Desmarca o bit de arquivo. A restauração requer o último backup completo + todos os backups incrementais subsequentes na sequência exata.
* **A Regra 3-2-1 de Resiliência de Dados:**
  * Manter no mínimo **3 cópias** dos dados fundamentais (1 primária de produção + 2 backups).
  * Armazenar em **2 tipos de mídias físicas diferentes** (ex.: storage em disco SAN/NAS e fita magnética LTO ou nuvem).
  * Manter **1 cópia fora da organização (off-site)** e fisicamente isolada da rede corporativa (**air-gapped** / offline), garantindo recuperação garantida em catástrofes físicas ou incidentes graves de ransomware que propagam pela rede.

---

### 4. Criptografia Simétrica, Assimétrica, Funções de Hash, Assinatura Digital e ICP-Brasil (Alvo E1)

#### A. Criptografia Simétrica (Chave Secreta)
* **Conceito:** Utiliza **a mesma chave secreta** para cifrar o texto em claro (*plaintext*) e para decifrar o texto cifrado (*ciphertext*).
* **Vantagens e Desvantagens:**
  * *Vantagens:* Altíssima velocidade de processamento e baixo consumo computacional; ideal para cifrar grandes volumes de dados em repouso (bancos de dados relacionais, unidades de disco e fitas de backup).
  * *Desvantagens:* Problema crítico de **distribuição de chaves** (como enviar a chave secreta ao destinatário sem que ela seja interceptada no canal) e escalabilidade quadrática ($n(n-1)/2$ chaves necessárias para $n$ usuários se comunicarem aos pares em segredo).
* **Algoritmos Canônicos:**
  * **AES (Advanced Encryption Standard):** Padrão do NIST e mundial, cifra de bloco operando em blocos de 128 bits com chaves de 128, 192 ou 256 bits. Robusto contra ataques práticos.
  * **DES / 3DES (Data Encryption Standard):** Obsoletos; o DES (chave efetiva de 56 bits) é vulnerável a ataques de força bruta; o 3DES aplica o DES três vezes, mas foi superado pelo AES em segurança e eficiência.
  * **ChaCha20 / RC4:** Cifras de fluxo (stream ciphers). O RC4 é obsoleto e vulnerável; o ChaCha20 é moderno e veloz em plataformas móveis.

#### B. Criptografia Assimétrica (Chave Pública)
* **Conceito (Diffie e Hellman, 1976):** Baseia-se em problemas matemáticos de difícil inversão (fatoração de inteiros grandes, logaritmo discreto e curvas elípticas). Utiliza **um par de chaves matematicamente correlacionadas**:
  * **Chave Pública:** Amplamente divulgada e acessível a qualquer pessoa; utilizada para cifrar mensagens destinadas ao titular ou para verificar a assinatura digital gerada por ele.
  * **Chave Privada:** Mantida sob posse e segredo absoluto do titular; utilizada para decifrar mensagens recebidas ou para assinar digitalmente documentos.
* **Propriedade Fundamental:** O que é cifrado com a chave pública só pode ser decifrado com a chave privada correspondente; inversamente, o que é cifrado com a chave privada só pode ser decifrado com a chave pública correspondente.
* **Vantagens e Desvantagens:**
  * *Vantagens:* Elimina a necessidade de compartilhamento prévio de segredos em canais inseguros; viabiliza assinaturas digitais com não repúdio.
  * *Desvantagens:* Custo computacional centenas a milhares de vezes superior à simétrica; inviável para cifração direta de arquivos gigantescos.
* **Algoritmos Canônicos:**
  * **RSA (Rivest, Shamir, Adleman, 1977):** Baseado na dificuldade de fatoração de produtos de primos grandes. Chaves recomendadas de no mínimo 2048 ou 4096 bits.
  * **ECC (Elliptic Curve Cryptography):** Baseado em logaritmos discretos em curvas elípticas. Oferece o mesmo nível de segurança do RSA com chaves drasticamente menores (ex.: 256 bits ECC $\\approx$ 3072 bits RSA), com menor consumo de memória e energia.

#### C. Funções de Resumo Criptográfico (*Hash Functions*) e Fixidez na Preservação Digital
* **Conceito:** Algoritmo matemático determinístico e **unidirecional (*one-way*)** que mapeia uma entrada de tamanho arbitrário em um resumo binário de tamanho estritamente fixo (*hash* ou *digest*).
* **Propriedades Indispensáveis:**
  1. *Determinismo:* O mesmo dado de entrada sempre produz exatamente o mesmo hash.
  2. *Unidirecionalidade (Resistência à Primeira Pré-Imagem):* Dado um resumo $h$, é computacionalmente inviável encontrar a entrada $x$ tal que $\\text{Hash}(x) = h$.
  3. *Resistência à Segunda Pré-Imagem:* Dada uma entrada $x$, é computacionalmente inviável encontrar outra entrada $y \\neq x$ tal que $\\text{Hash}(y) = \\text{Hash}(x)$.
  4. *Resistência a Colisões:* É computacionalmente inviável encontrar quaisquer duas entradas distintas $x$ e $y$ que gerem o mesmo resumo.
  5. *Efeito Avalanche:* A alteração de um único bit no arquivo original modifica de forma imprevisível cerca de 50% dos bits do resumo gerado.
* **Famílias de Algoritmos:**
  * **MD5 (128 bits) e SHA-1 (160 bits):** Criptograficamente **vulneráveis e obsoletos**. Ataques práticos comprovaram geração de colisões. Proibidos para segurança e certificação digital na ICP-Brasil.
  * **Família SHA-2 (Secure Hash Algorithm 2):** SHA-256 (256 bits) e SHA-512 (512 bits), recomendados internacionalmente pelo NIST e obrigatórios no ecossistema governamental brasileiro.
  * **Família SHA-3 (Keccak):** Padrão mais recente com arquitetura de esponja (*sponge construction*), independente do SHA-2.
* **Aplicação Canônica em Bibliotecas e Arquivos (Fixidez / *Fixity*):**
  * No modelo **OAIS (ISO 14721)** e no esquema de metadados **PREMIS (ISO 16363)**, a geração de resumos de hash (SHA-256) na ingestão de Pacotes de Informação para Submissão (SIP) e sua verificação periódica no armazenamento (AIP) constituem a rotina técnica de **auditoria de fixidez (*fixity check*)**, garantindo que nenhum documento legislativo sofreu alteração maliciosa ou degradação silenciosa de bits (*bit rot* / *silent data corruption*).

### 5. Assinatura Digital e ICP-Brasil Asseguram Autenticidade, Integridade e Não Repúdio com Validade Jurídica

#### A. Assinatura Digital: Funcionamento, Propriedades e Distinções Críticas
* **Mecanismo de Geração e Verificação:**
  1. *Geração (Signatário):* O software aplica uma função de hash (ex.: SHA-256) ao documento original, produzindo um resumo. Em seguida, cifra esse resumo utilizando a **chave privada** do signatário. O resultado cifrado é a **assinatura digital**, que é anexada ao documento.
  2. *Verificação (Destinatário ou Cidadão):* O verificador decifra a assinatura digital utilizando a **chave pública** do signatário, obtendo o resumo original. Paralelamente, calcula o hash do documento recebido. Se ambos os resumos forem perfeitamente idênticos, a assinatura é matematicamente válida.
* **Garantias Fornecidas:**
  * **Autenticidade:** Confirma a identidade inequívoca do signatário (somente o detentor da chave privada exclusiva pôde gerar aquela assinatura).
  * **Integridade:** Garante que o documento não sofreu qualquer adulteração posterior (qualquer alteração no texto faria o hash calculado divergir do hash decifrado).
  * **Não Repúdio (Irretratabilidade):** O autor da assinatura não pode negar juridicamente a autoria do ato ou declaração perante terceiros.
* **Quadro de Distratores Cebraspe: Assinatura Digital vs. Eletrônica vs. Digitalizada**
  * *Assinatura Digitalizada:* Mera imagem gráfica escaneada da assinatura manuscrita (PNG, JPEG). **Não possui segurança criptográfica**, podendo ser recortada e colada livremente em qualquer fraude.
  * *Assinatura Eletrônica:* Gênero amplo (Lei Federal nº 14.063/2020) que abrange qualquer método eletrônico de identificação (login e senha, código SMS, biometria). Divide-se em: simples, avançada e qualificada.
  * *Assinatura Digital Qualificada (ICP-Brasil):* Espécie tecnicamente mais rigorosa, gerada por criptografia assimétrica lastreada em certificado digital emitido no âmbito da ICP-Brasil, com presunção legal absoluta de veracidade.

#### B. A Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil - MP nº 2.200-2/2001)
* **Origem e Marco Legal:** Criada pela **Medida Provisória nº 2.200-2, de 24 de agosto de 2001**, com a finalidade de garantir a autenticidade, a integridade e a validade jurídica de documentos em forma eletrônica e das aplicações de suporte no Brasil.
* **Estrutura Hierárquica da ICP-Brasil:**
  * **AC Raiz (Autoridade Certificadora Raiz):** Única autoridade do topo da cadeia de confiança, operada pelo **ITI (Instituto Nacional de Tecnologia da Informação)**, autarquia vinculada à Casa Civil da Presidência da República. Executa a geração das chaves da AC Raiz e emite, expede, distribui, revoga e gerencia os certificados das Autoridades Certificadoras de primeiro nível.
  * **Autoridades Certificadoras (ACs):** Entidades autorizadas a emitir, suspender, revogar e gerenciar os certificados digitais dos usuários finais e de servidores.
  * **Autoridades de Registro (ARs):** Entidades operacionais responsáveis pelo atendimento presencial ou validação biométrica remota, identificação cadastral e conferência documental dos requerentes de certificados.
* **Classificação dos Certificados Digitais na ICP-Brasil:**
  * **Série A (Assinatura Digital):**
    * **Certificado A1:** O par de chaves é gerado por software e armazenado diretamente no computador ou dispositivo móvel do usuário (arquivo com extensão \`.pfx\` ou \`.p12\`). Possui **validade máxima de 1 ano**. Vantagem: praticidade e uso automatizado em servidores; desvantagem: vulnerabilidade a cópia indevida caso o sistema seja invadido.
    * **Certificado A3:** O par de chaves é gerado no interior de um **dispositivo físico de hardware criptográfico inviolável** (smartcard com leitora ou token USB criptográfico) que atende aos padrões de segurança internacionais (FIPS 140-2 nível 2 ou superior). A chave privada nunca sai do dispositivo nem pode ser exportada; as operações de assinatura ocorrem dentro do chip. Possui **validade de até 3 a 5 anos**.
  * **Série S (Sigilo / Confidencialidade):** Utilizados para cifração simétrica/assimétrica de dados confidenciais (S1, S3 e S4).
  * **Série T (Tempo / Carimbo do Tempo):** Emitidos por Autoridades de Carimbo do Tempo (ACT), atestam que um documento digital existia em determinado instante temporal sincronizado com o Observatório Nacional.
* **Presunção Legal de Veracidade (Art. 10 da MP nº 2.200-2/2001):**
  * *Art. 10, § 1º:* As declarações constantes dos documentos em forma eletrônica produzidos com a utilização de processo de certificação disponibilizado pela ICP-Brasil **presumem-se verdadeiros em relação aos signatários**, na forma do art. 131 da Lei nº 3.071/1916 (atual art. 219 do Código Civil).
  * *Art. 10, § 2º:* O disposto na MP não obsta a utilização de outro meio de comprovação da autoria e integridade de documentos em forma eletrônica, desde que admitido pelas partes como válido ou aceito pela pessoa a quem for oposto o documento (origem das assinaturas eletrônicas avançadas).

---

### 5. Gestão de Riscos de Segurança da Informação (Alvo E2)

#### A. O Ecossistema Normativo: ABNT NBR ISO 31000:2018 e ISO/IEC 27005:2023
* **ABNT NBR ISO 31000:2018 (Gestão de Riscos — Diretrizes):**
  * Fornece princípios, estrutura (*framework*) e processo genérico de gestão de riscos aplicável a qualquer organização pública ou privada.
  * Define **Risco** como: *"O efeito da incerteza nos objetivos"*. O efeito é um desvio em relação ao esperado, podendo ser positivo, negativo ou ambos.
* **ABNT NBR ISO/IEC 27005:2023 (Segurança da Informação, Cibersegurança e Proteção da Privacidade — Gestão de Riscos de Segurança da Informação):**
  * Norma setorial especializada que detalha a condução da gestão de riscos sob a perspectiva dos ativos de informação, ameaças, vulnerabilidades e impactos sobre os objetivos de segurança (Confidencialidade, Integridade e Disponibilidade).

#### B. As Fases do Processo de Gestão de Riscos (ISO 31000 / ISO/IEC 27005)
O processo é dinâmico, iterativo e compõe-se das seguintes etapas interligadas:
1. **Comunicação e Consulta:** Diálogo contínuo com as partes interessadas (*stakeholders*) para reunir informações e justificar tomadas de decisão.
2. **Escopo, Contexto e Critérios:** Definição dos limites do processo (ex.: repositório institucional digital da Biblioteca da Câmara), compreensão do ambiente interno e externo e estabelecimento dos **critérios de aceitação e apetite a risco**.
3. **Processo de Avaliação de Riscos (*Risk Assessment*):** Compreende obrigatoriamente três etapas sucessivas:
   * **Identificação de Riscos:** Mapear fontes de risco, eventos potenciais, ameaças (humanas ou ambientais), vulnerabilidades dos ativos de informação e suas causas.
   * **Análise de Riscos:** Compreender a natureza e o nível do risco, determinando a combinação entre a **Probabilidade de Ocorrência** e o **Impacto / Consequência** caso o evento se concretize. Pode ser qualitativa (escalas ordinal: baixo, médio, alto), semi-quantitativa ou quantitativa (valores monetários ou perdas operacionais).
   * **Avaliação de Riscos (*Risk Evaluation*):** Comparar os resultados da análise de riscos com os critérios de tolerância pré-estabelecidos para decidir se o risco é aceitável ou se demanda tratamento prioritário.
4. **Tratamento de Riscos (*Risk Treatment*):** Seleção e implementação de uma ou mais opções estruturadas:
   * **Mitigar / Reduzir (*Risk Mitigation*):** Aplicar controles de segurança técnicos, organizacionais ou procedimentais para diminuir a probabilidade de falha ou a severidade do impacto (ex.: instalar firewall de aplicação web, exigir MFA para administradores de rede, implementar controle de temperatura no CPD).
   * **Aceitar / Reter (*Risk Acceptance*):** Assumir conscientemente o risco residual, sem medidas adicionais, quando o custo da contramedida supera o prejuízo potencial ou quando o risco residual situa-se dentro da tolerância institucional aprovada pela alta administração.
   * **Evitar (*Risk Avoidance*):** Decidir não iniciar ou descontinuar a atividade, processo ou tecnologia vulnerável para eliminar completamente a exposição ao risco.
   * **Transferir / Compartilhar (*Risk Sharing / Transfer*):** Repassar o risco ou parte de suas consequências financeiras e operacionais a terceiros (ex.: contratação de apólice de seguro cibernético ou contratação de serviço em nuvem com cláusulas de Acordo de Nível de Serviço - SLA rigorosas).
5. **Monitoramento e Análise Crítica:** Acompanhamento permanente da evolução das ameaças, eficácia dos controles e reavaliação periódica dos riscos residuais.
6. **Registro e Relato:** Documentação formal de todo o processo para auditoria, governança e prestação de contas.

#### C. Matriz de Probabilidade $\times$ Impacto Aplicada à Biblioteca Pedro Aleixo (Caso Concreto)

A Biblioteca Pedro Aleixo custodia tanto obras raras físicas e documentos históricos do Império e da República quanto o Repositório Institucional da Câmara (depósito legal e produção legislativa digital). A tabela a seguir ilustra a aplicação prática da matriz de riscos $3 \\times 3$:

| ID do Risco | Evento / Ameaça Identificada | Vulnerabilidade Associada | Probabilidade | Impacto | Nível de Risco | Estratégia de Tratamento Adotada |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **R-01** | Infecção por Ransomware no servidor do SIGB | Portas RDP expostas e ausência de MFA em contas de bibliotecários | Média | Extremo | **Crítico (Tratar Imediato)** | **Mitigar:** Fechamento de portas RDP, exigência de MFA obrigatório e isolamento de backups air-gapped offline. |
| **R-02** | Corrupção silenciosa de bits (*Bit Rot*) em atas digitalizadas do século XIX | Mídias de disco ótico antigas e falta de rotina periódica de auditoria | Alta | Alto | **Alto (Prioritário)** | **Mitigar:** Migração para storage SAN redundante com rotina automatizada de checagem de fixidez (*checksum* SHA-256) a cada 90 dias conforme PREMIS. |
| **R-03** | Indisponibilidade do catálogo público online (OPAC) por pico de acessos | Servidor web local com dimensionamento estático | Baixa | Médio | **Médio (Monitorar)** | **Transferir / Mitigar:** Migração da camada de apresentação para nuvem elástica (*autoscaling*) com balanceador de carga. |
| **R-04** | Furto de terminal de consulta pública do salão de leitura | Ambiente aberto ao público sem ancoragem física dos cabos | Baixa | Baixo | **Baixo (Aceitável)** | **Aceitar:** O custo de blindagem supera o valor venal do computador desprovido de privilégios de rede. |

---

### 🔗 Veja Também (Articulação Intermódulos)
* **Preservação Digital e Repositórios Confiáveis (sub-6-3):** Uso de criptografia hash para verificação de fixidez.
`,
  checkpoints: [
    {
      id: 'cp-14-2-1',
      pergunta: 'Micro-Checkpoint 1: Segurança da Informação - Phishing vs. Pharming',
      item: 'No ataque de pharming, o usuário é induzido por um e-mail fraudulento a clicar em um link enganoso; diferentemente do phishing, no qual a tabela de resolução de nomes (DNS) é corrompida para redirecionar o tráfego mesmo quando o endereço correto é digitado.',
      gabarito: 'E',
      justificativa: 'Errado! Segundo as diretrizes do CERT.br (2021) e William Stallings (2018), os conceitos foram invertidos pela banca. O phishing baseia-se na indução humana por mensagens capciosas (engenharia social), enquanto o pharming compromete a resolução de nomes (DNS Cache Poisoning ou arquivo hosts) redirecionando o tráfego tecnicamente mesmo com a digitação da URL correta.',
    },
    {
      id: 'cp-14-2-2',
      pergunta: 'Micro-Checkpoint 2: Criptografia Assimétrica, Assinatura Digital e ICP-Brasil',
      item: 'No âmbito da Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil), instituída pela MP nº 2.200-2/2001, a assinatura digital qualificada é gerada a partir da cifração do resumo criptográfico (hash) do documento eletrônico com a chave pública do signatário, permitindo que qualquer terceiro decifre a assinatura com a chave privada correspondente para atestar a autenticidade.',
      gabarito: 'E',
      justificativa: 'Errado! Conforme preceituado por William Stallings (2018) e pela MP nº 2.200-2/2001, a assinatura digital é gerada mediante a cifração do hash do documento com a chave PRIVADA do signatário (de posse exclusiva deste). A verificação da assinatura é realizada por terceiros decifrando-a com a chave PÚBLICA do signatário. A assertiva inverteu a função das chaves.',
    },
    {
      id: 'cp-14-2-3',
      pergunta: 'Micro-Checkpoint 3: Gestão de Riscos Informacionais (ISO 31000 e ISO/IEC 27005)',
      item: 'De acordo com a ABNT NBR ISO 31000:2018 e a ABNT NBR ISO/IEC 27005:2023, o processo de avaliação de riscos (risk assessment) compreende as etapas sequenciais de identificação de riscos, análise de riscos e avaliação de riscos, sendo esta última a fase em que os níveis de risco estimados são comparados com os critérios de tolerância definidos para orientar a tomada de decisão sobre o tratamento.',
      gabarito: 'C',
      justificativa: 'Certo! Em estrita consonância com a ABNT NBR ISO 31000:2018 (item 5.4) e a ABNT NBR ISO/IEC 27005:2023, o risk assessment engloba exatamente a tríade: identificação, análise (probabilidade x impacto) e avaliação (comparação do nível de risco contra o apetite a risco da organização).',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-14-2-1',
        periodo: '1983 / 1988',
        disciplina: 'Redes e Segurança',
        focoPrincipal: 'Migração oficial da ARPANET para o protocolo TCP/IP e eclosão do Morris Worm na Internet',
        figuraChave: 'Vinton Cerf / Robert Tappan Morris',
      },
      {
        id: 'tl-14-2-2',
        periodo: '2001',
        disciplina: 'Certificação Digital',
        focoPrincipal: 'Publicação da Medida Provisória nº 2.200-2/2001, instituindo a ICP-Brasil e a AC Raiz sob gestão do ITI',
        figuraChave: 'Poder Executivo Federal / ITI',
      },
      {
        id: 'tl-14-2-3',
        periodo: '2018 / 2023',
        disciplina: 'Gestão de Riscos e Cibersegurança',
        focoPrincipal: 'Consolidação das normas ABNT NBR ISO 31000:2018 (Diretrizes de Riscos) e ABNT NBR ISO/IEC 27005:2023 (Riscos em Segurança da Informação)',
        figuraChave: 'ISO / ABNT / Stallings (2018)',
      },
    ],
    autores: [
      {
        id: 'aut-14-2-1',
        nome: 'William Stallings',
        ano: 2018,
        obraPrincipal: 'Criptografia e Segurança de Redes: Princípios e Práticas',
        ideiaChave: 'Diferença simétrica x assimétrica, funções de hash seguras (SHA-2/3), assinatura digital com chave privada e gestão de risco.',
        chipPegadinha: 'Assina com chave PRIVADA e verifica com chave PÚBLICA.',
      },
      {
        id: 'aut-14-2-2',
        nome: 'Andrew Tanenbaum',
        ano: 2021,
        obraPrincipal: 'Redes de Computadores (6ª Ed.)',
        ideiaChave: 'Camadas de transporte (TCP orientado vs UDP veloz), resolução DNS e arquitetura de intranet.',
        chipPegadinha: 'Intranet usa a mesmíssima pilha TCP/IP da Internet.',
      },
      {
        id: 'aut-14-2-3',
        nome: 'ABNT NBR ISO 31000:2018 / ISO/IEC 27005:2023',
        ano: 2023,
        obraPrincipal: 'Gestão de Riscos de Segurança da Informação',
        ideiaChave: 'Processo de avaliação de riscos (identificação, análise, avaliação) e estratégias de tratamento (mitigar, aceitar, evitar, transferir).',
        chipPegadinha: 'Avaliação de riscos (evaluation) compara com os critérios de tolerância.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-14-2-1',
        afirmacao: 'A intranet de um órgão público legislativo opera com protocolos proprietários e fechados, sendo tecnicamente incompatível com os protocolos abertos TCP/IP utilizados na Internet mundial.',
        gabarito: 'E',
        porQue: 'A intranet utiliza EXATAMENTE os mesmos protocolos e serviços da Internet (TCP/IP, HTTP/HTTPS, DNS), restringindo apenas o perímetro de acesso por motivos de segurança.',
      },
      {
        id: 'peg-14-2-2',
        afirmacao: 'Para restaurar um sistema a partir de uma estratégia de backup incremental, basta disponibilizar o último volume incremental gerado, o qual já incorpora todos os estados anteriores.',
        gabarito: 'E',
        porQue: 'O incremental só armazena as alterações do dia. Para restaurar, é OBRIGATÓRIO o backup completo + TODOS os incrementais em sequência.',
      },
      {
        id: 'peg-14-2-3',
        afirmacao: 'A assinatura digitalizada, obtida pelo escaneamento da firma manuscrita de uma autoridade parlamentar inserida em arquivo PDF, detém a mesma validade jurídica e garantias de não repúdio que a assinatura digital baseada em certificado ICP-Brasil.',
        gabarito: 'E',
        porQue: 'A assinatura digitalizada é mera imagem gráfica desprovida de segurança criptográfica ou presunção legal de veracidade (MP nº 2.200-2/2001, art. 10, § 1º).',
      },
      {
        id: 'peg-14-2-4',
        afirmacao: 'Na gestão de riscos segundo a ABNT NBR ISO 31000:2018, a decisão de aceitar conscientemente um risco residual dispensa qualquer aprovação formal ou comparação prévia com os critérios de tolerância definidos pela organização.',
        gabarito: 'E',
        porQue: 'A aceitação/retenção do risco requer comparação formal com os critérios pré-estabelecidos na avaliação de riscos e aprovação do nível de risco pela alta administração.',
      },
    ],
  },
};

