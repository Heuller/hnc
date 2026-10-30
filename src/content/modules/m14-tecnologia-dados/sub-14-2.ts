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
    "termo": "Hash e assinatura",
    "definicao": "Resumo para comparação e mecanismo de assinatura atendem propriedades distintas.",
    "exemploBiblioteca": "Fixidez binária não certifica verdade do conteúdo assinado."
  },
  {
    "termo": "Risco residual",
    "definicao": "Risco que permanece após medidas de tratamento.",
    "exemploBiblioteca": "Uma cópia de segurança reduz exposição, sem tornar toda perda impossível."
  }
],
  descricaoCurta: "Distinguir abrangência física e política de acesso. Relacionar transporte, endereçamento e serviços sem transformar padrões em garantia absoluta. Distinguir engenharia social, redirecionamento e classes de código malicioso. Escolher controles e distinguir identificação, autenticação e autorização. Distinguir completo, diferencial, incremental, localização e isolamento. Separar confidencialidade, integridade e verificação de bits. Distinguir assinar, verificar, certificar identidade e avaliar o conteúdo. Analisar incerteza sobre objetivos e distinguir avaliação de tratamento.",
  tempoEstimadoMinutos: 33,
  autoresChave: [
  "CERT.br — Cartilha de Segurança para Internet",
  "RFC 9293 — Transmission Control Protocol",
  "NIST FIPS 186-5 — Digital Signature Standard",
  "MP 2.200-2/2001",
  "Lei 14.063/2020",
  "Library of Congress — PREMIS 3.0",
  "ISO 31000:2018 — Risk management — Guidelines"
],
  alertasCebraspe: [
  "Ambos pertencem à categoria de conhecimento. Repetir o que se sabe não cria, por si, fator distinto de posse ou inerência.",
  "Localização externa e isolamento lógico/físico são propriedades diferentes. Uma cópia na nuvem pode estar acessível com a mesma conta comprometida. É preciso verificar controles e recuperação.",
  "Esse modelo didático não descreve de forma universal os algoritmos de assinatura. A operação de assinar e a de verificar usam chaves e procedimentos definidos pelo esquema; nem toda assinatura é uma cifração reversível."
],
  quadroComparativo: {
  "titulo": "Segurança: distinguir o objetivo",
  "colunas": [
    "Mecanismo",
    "Objetivo pertinente",
    "Limite"
  ],
  "linhas": [
    [
      "Autenticação",
      "Verificar identidade alegada",
      "Não concede toda permissão"
    ],
    [
      "Hash de fixidez",
      "Comparar representação binária",
      "Não certifica verdade material"
    ],
    [
      "Assinatura",
      "Apoiar autoria/integridade",
      "Não dispensa competência e análise de conteúdo"
    ],
    [
      "Backup",
      "Permitir recuperação",
      "Depende de cadeia, retenção e testes"
    ],
    [
      "Avaliação de risco",
      "Orientar decisão por critérios",
      "Não transforma suposição em dado objetivo"
    ]
  ]
},
  teoriaDensaMarkdown: "### Redes: alcance, serviços e acesso\n\nUma rede conecta dispositivos e serviços; sua classificação pode considerar alcance, tecnologia e finalidade. **PAN** descreve âmbito pessoal; **LAN**, uma rede local; **MAN**, âmbito metropolitano; **WAN**, ampla área. Essas categorias não definem por si velocidade, segurança ou se o serviço é público. Ethernet e Wi-Fi são tecnologias de acesso, não sinônimos universais de uma classe de alcance.\n\n**Internet** articula redes e serviços sob protocolos comuns. **Intranet** usa tecnologias de rede para um contexto organizacional restrito. **Extranet** descreve acesso controlado de partes externas a recursos organizacionais. Uma instituição pode oferecer serviço público e serviço interno nos mesmos padrões web, com políticas de acesso diferentes.\n\n**Caso:** o catálogo público é acessível remotamente; a ferramenta interna de aquisição exige autenticação e acesso autorizado. O uso de HTTPS em ambos não elimina a diferença de público. Também não permite inferir que a intranet só funciona dentro do prédio: pode haver acesso remoto controlado conforme o projeto.\n\nConsidere separadamente **endereço**, **nome**, **rota** e **permissão**. Saber o endereço de um servidor não concede autorização de uso. Conseguir resolver um nome não demonstra que a aplicação está disponível. Um problema de rede deve identificar qual etapa falhou, em vez de tratar todo erro como “a internet caiu”.\n\n**Recuperação:** descreva uma rede local que acessa a internet e um serviço interno dessa rede. Quais recursos permanecem restritos? Qual tecnologia de comunicação isso permite reconhecer e qual política continua precisando ser definida?\n\n### TCP/IP e serviços: o que cada camada resolve\n\n**IP** trata de endereçamento e encaminhamento de pacotes. IPv4 usa endereços de 32 bits; IPv6, de 128 bits. A notação exibida não é o tamanho em caracteres obrigatório de todo endereço: IPv6 admite abreviações sob regras. **TCP** oferece mecanismos de conexão, ordenação e retransmissão; **UDP** fornece datagramas sem esses mesmos mecanismos de confiabilidade no protocolo.\n\nNão conclua que UDP é sempre mais rápido em qualquer aplicação ou que TCP garante sucesso diante de toda falha. A aplicação pode implementar controles sobre UDP, e o ambiente determina perdas, latência e disponibilidade. O estabelecimento de conexão TCP costuma ser explicado pelo intercâmbio SYN, SYN-ACK e ACK; esse procedimento não substitui o restante do protocolo.\n\n**DNS** associa nomes e informações de domínio, incluindo registros de endereços; **DHCP** pode fornecer parâmetros de configuração a um dispositivo. São funções diferentes. Um endereço manual não prova ausência de DNS, e um servidor DNS não fornece automaticamente toda configuração de rede como DHCP.\n\nNo estudo das portas convencionais, reconheça exemplos: DNS 53 em UDP/TCP conforme operação, SSH 22/TCP, HTTP 80 e HTTPS 443 em seus usos usuais. Não trate essa tabela como descrição de todas as versões: HTTP/3 usa QUIC sobre UDP, por exemplo. Um item precisa delimitar protocolo e contexto quando essa distinção muda a resposta.\n\n**TLS** protege a comunicação conforme negociação e validação aplicáveis; SSL é referência histórica que não deve ser recomendada como equivalente técnico atual sem ressalva. **ICMP** apoia controle e diagnóstico; responder a ping não certifica que o catálogo ou outro serviço de aplicação funciona corretamente.\n\n### Ameaças: comportamento e mecanismo, não apenas o nome\n\n**Phishing** envolve comunicação fraudulenta para induzir ação, como fornecer credenciais ou abrir um anexo. Pode usar diferentes canais; uma mensagem dirigida a pessoa/setor específico caracteriza o recorte direcionado conhecido como spear phishing. **Pharming** envolve redirecionamento associado a manipulação de resolução/caminho, como comprometimento de DNS ou arquivo de nomes local, conforme o cenário.\n\n**Vírus** associa sua propagação a código hospedeiro; não é seguro afirmar que toda infecção depende de um clique explícito consciente. **Worm** pode propagar-se de modo autônomo em redes. **Cavalo de Troia** aparenta funcionalidade legítima e executa ação maliciosa; não precisa cumprir toda característica de vírus ou worm. **Ransomware** restringe acesso para extorsão e pode empregar criptografia, bloqueio e outras práticas; nem toda variante se resume ao mesmo mecanismo.\n\nProgramas de espionagem e captura de atividade podem recolher informações. Uma **botnet** reúne dispositivos controlados para fins como ataques distribuídos. As categorias podem se sobrepor: o vetor de entrada e a ação posterior não são a mesma dimensão.\n\n**Caso resolvido:** um e-mail imita o suporte e pede senha numa página falsa. O texto descreve engenharia social compatível com phishing. Não é necessário supor que o DNS foi alterado. Se o usuário digita o domínio correto e um comprometimento de resolução o conduz a outro destino, o mecanismo descrito é diferente.\n\nA prevenção combina verificação de origem, atualização, configuração, autorização e resposta a incidentes. Nenhuma instrução como “nunca clique” resolve todas as formas de ataque. A aprendizagem deve permitir explicar como a ação solicitada e o ambiente se relacionam ao risco.\n\n### Proteção e autenticação: controles têm alcance\n\n**Identificar** é declarar/associar identidade; **autenticar** busca verificar a alegação; **autorizar** define o que o sujeito pode fazer. Entrar no sistema não concede acesso irrestrito a todos os documentos. O princípio de menor privilégio orienta conceder o necessário à finalidade, com revisão de permissões.\n\nAutenticação multifator combina fatores de categorias distintas, como conhecimento, posse e inerência. Senha mais pergunta secreta continua usando conhecimento. Um aplicativo ou dispositivo de posse, com controles próprios, é outra categoria. A segurança concreta também depende de recuperação de conta, resistência a fraude e configuração; o nome MFA não elimina todas as ameaças.\n\n**Firewall** aplica políticas sobre tráfego conforme suas capacidades e regras; não é sinônimo de antivírus nem prova de que todo ataque será bloqueado. Ferramentas de detecção podem usar assinaturas, análise heurística e comportamento. Ausência de alerta não certifica ausência de comprometimento. **Sandbox** permite observação controlada, mas também tem limites de representação do ambiente e do comportamento da ameaça.\n\n**Exemplo:** o usuário possui credencial válida, mas precisa somente consultar um relatório. Conceder função de administrador para tornar o acesso mais fácil amplia exposição desnecessária. Separar a permissão de consulta da gestão do sistema atende à tarefa com menor alcance.\n\nControles devem ser articulados: atualização, cópias de segurança, monitoramento, gestão de contas e resposta. Uma camada não autoriza abandonar as demais. Em prova, examine qual propriedade o mecanismo atende e qual garantia excessiva foi atribuída a ele.\n\n### Backup: reconstruir o estado e testar a recuperação\n\nNo esquema tradicional, **completo** copia o conjunto definido; **diferencial** reúne mudanças desde o último completo; **incremental** reúne mudanças desde o ponto anterior pertinente da cadeia. Implementações modernas podem usar estratégias sintéticas e outros mecanismos, portanto o enunciado precisa delimitar o modelo.\n\n**Exemplo resolvido:** completo no domingo e incrementais na segunda, terça e quarta. Para restaurar o estado de quarta nesse esquema, parte-se do completo e aplica-se a cadeia necessária. Com diferenciais, o completo e o diferencial do ponto escolhido podem bastar. O critério decisivo é de onde cada cópia calcula suas alterações, não só o volume aparente.\n\n**3-2-1** é uma orientação de redundância de cópias, diversidade de meios e localização externa. Off-site não é sinônimo de offline nem de air gap: uma cópia externa pode continuar acessível com a mesma credencial comprometida. Isolamento, imutabilidade, retenção e teste de restauração são decisões adicionais.\n\n**RPO** relaciona-se ao ponto de recuperação e perda de dados tolerada no enquadramento do plano; **RTO**, ao tempo para recuperar serviço. Ter cópias a cada dia não demonstra que a restauração ocorrerá em poucos minutos. Um projeto precisa testar dados, dependências, chaves e procedimentos.\n\nA sincronização tratada em 14.1 pode propagar exclusões. Redundância de disco também não substitui backup contra toda perda lógica ou incidente. O aluno deve explicar de qual falha a medida protege e como os dados serão efetivamente recuperados, em vez de repetir “backup garante tudo”.\n\n### Criptografia, hash e fixidez: propriedades diferentes\n\n**Criptografia simétrica** usa segredo compartilhado no esquema pertinente; **assimétrica** usa chaves relacionadas com operações definidas pelo algoritmo. Sistemas podem combinar métodos, usando estabelecimento de segredo e proteção eficiente do conteúdo. Não se deve afirmar que toda chave pública serve indistintamente para cifrar e verificar em qualquer algoritmo.\n\n**AES** é exemplo de cifra simétrica; **RSA** e algoritmos de curvas elípticas ilustram famílias de criptografia de chave pública em usos definidos. A segurança depende de parâmetros, implementação e ciclo de vida das chaves. Evite regras universais de custo ou recomendações numéricas descontextualizadas de versão e finalidade.\n\n**Hash criptográfico** produz um resumo conforme a função. Mesma entrada e algoritmo determinam o mesmo resultado. Para usos de segurança, são relevantes resistências a pré-imagem e colisões, com níveis que dependem da função. O espaço finito de resumos implica que colisões são matematicamente possíveis; o objetivo de resistência é torná-las inviáveis de explorar no cenário de segurança considerado.\n\n**Fixidez:** comparar um valor calculado ao valor de referência confiável ajuda a verificar manutenção dos bits. Isso não demonstra que a informação escrita é verdadeira nem reconstrói automaticamente um arquivo danificado. Referência, algoritmo, registro do procedimento e proteção dos valores precisam ser considerados.\n\n**PREMIS** descreve metadados de preservação, incluindo informação pertinente à fixidez. Não é a ISO 16363, referência de auditoria/certificação de repositórios confiáveis. Tampouco impõe uma regra universal de checar todo acervo a cada noventa dias. Periodicidade e controles dependem de política, risco e ambiente.\n\n**Caso:** um PDF materialmente incorreto pode ter o mesmo hash durante anos. Sua integridade binária não converte conteúdo falso em verdadeiro. Essa distinção reaparece na assinatura digital.\n\n### Assinatura digital e ICP-Brasil: autoria não é verdade material\n\nUma assinatura digital usa um esquema criptográfico de geração e verificação. O signatário utiliza a chave privada pertinente; a verificação usa material público correspondente conforme o algoritmo. A explicação “cifrar hash e depois decifrar” pode ser uma simplificação de alguns tratamentos didáticos, mas não descreve universalmente algoritmos como os contemplados pelo padrão de assinaturas do NIST.\n\nA assinatura apoia verificar autoria associada à chave e integridade nos termos do procedimento. **Certificado** vincula identidade e chave pública sob uma cadeia e política de confiança; **carimbo do tempo** acrescenta evidência temporal segundo seu serviço. Validação envolve também estado do certificado, cadeia e demais condições aplicáveis, não apenas verificar se há uma imagem de rubrica.\n\nA MP 2.200-2/2001 institui a ICP-Brasil e, no art. 10, trata da presunção em relação aos signatários. Isso não deve ser ensinado como verdade absoluta e incontestável de toda declaração. Assinar um relatório com erro não torna o dado correto nem dispensa examinar competência, validade do ato e eventual contestação.\n\nA Lei 14.063/2020 distingue assinaturas eletrônicas **simples, avançadas e qualificadas** em seu alcance. Qualificada utiliza certificado ICP-Brasil. Uma assinatura digitalizada é imagem, e não o mesmo mecanismo criptográfico. O regime admite análise dos meios e exigências específicos; não conclua que qualquer documento fora da ICP-Brasil seja necessariamente sem valor.\n\nNa infraestrutura, ACs emitem certificados e ARs realizam identificação conforme as regras; o ITI atua como autoridade certificadora raiz. Tipos e requisitos precisam ser consultados no normativo aplicável. A3 não deve ser reduzido a “somente um token USB inviolável”: há serviços de armazenamento/uso em nuvem sob condições próprias. Não invente duração universal para todo certificado sem fonte de versão.\n\n### Gestão de riscos: critérios, decisão e acompanhamento\n\nGerir riscos envolve reconhecer incertezas que afetam objetivos, compreender contexto e critérios, identificar eventos e fontes, analisar consequências e decidir respostas. A **ISO 31000:2018** oferece diretrizes gerais; a família de segurança da informação trata seu domínio específico. Referenciar uma norma não autoriza inventar número de cláusula nem aplicar toda redação de uma edição a outra.\n\n**Identificação** descreve o que pode ocorrer e em quais condições. **Análise** estuda natureza, consequências, probabilidade e nível conforme o método. **Avaliação** compara resultados com critérios para orientar prioridades e decisões. **Tratamento** seleciona e implementa respostas. Comunicação, registro, monitoramento e revisão acompanham o processo, que é iterativo.\n\n**Caso hipotético, não diagnóstico da Câmara:** um repositório pode ficar indisponível por falha de energia. Primeiro defina o objetivo de disponibilidade e o contexto. Depois examine histórico, dependências, consequências e controles. Classificar probabilidade como alta sem dado ou critério não constitui avaliação demonstrada. Uma matriz é ferramenta de organização; multiplicar categorias ordinais sem método não cria medida objetiva de perda.\n\nOpções podem reduzir exposição/consequências, evitar uma atividade, compartilhar efeitos ou aceitar risco segundo critérios e competência. Contratar serviço não transfere automaticamente toda responsabilidade. Aceitar também exige decisão informada e acompanhamento; não é sinônimo de ignorar.\n\n**Exemplo de retorno:** o controle reduziu a probabilidade estimada, mas permanece risco residual. Novos dados podem pedir revisão. O sucesso de um controle não garante que o risco se tornou zero. Uma aula de nível alto precisa ensinar a explicar a decisão e suas premissas, em vez de apresentar uma tabela inventada como caso concreto institucional.",
  teoriaDidaticaMarkdown: "### Revisão: qual propriedade está sendo avaliada?\n\nRede: tecnologia, alcance e acesso são eixos distintos. IP endereça/encaminha; TCP e UDP oferecem mecanismos diferentes; aplicação pode falhar mesmo com transporte adequado. DNS e DHCP têm funções distintas. Phishing manipula a vítima; pharming pode alterar o caminho de resolução. MFA requer fatores de categorias diferentes. Backup precisa de cadeia, isolamento e teste; off-site não é automaticamente offline. Hash apoia fixidez com referência confiável, sem provar verdade material. Assinatura usa chave privada para gerar e material público para verificar segundo o algoritmo; certificado e carimbo têm papéis próprios. ICP-Brasil não torna toda declaração incontestável. Riscos exigem critérios e acompanhamento; matriz não cria probabilidade a partir de suposição.\n\n**Recupere:** explique por que sincronização não substitui backup; por que hash íntegro não é texto verdadeiro; por que uma assinatura não dispensa análise de competência; e por que um risco residual pode continuar mesmo após controle eficaz.\n",
  checkpoints: [
  {
    "id": "cp-14-2-1",
    "pergunta": "Micro-Checkpoint 1: Segurança da Informação - Phishing vs. Pharming",
    "item": "No ataque de pharming, o usuário é induzido por um e-mail fraudulento a clicar em um link enganoso; diferentemente do phishing, no qual a tabela de resolução de nomes (DNS) é corrompida para redirecionar o tráfego mesmo quando o endereço correto é digitado.",
    "gabarito": "E",
    "justificativa": "O item inverte os mecanismos. A mensagem enganosa para induzir ação é compatível com phishing; comprometimento de resolução para redirecionar descreve pharming no cenário. Eles podem coexistir, mas não são definidos pela inversão proposta.",
    "fonte": "CERT.br, Cartilha de Segurança para Internet; RFC 9293 (TCP); NIST FIPS 186-5; MP 2.200-2/2001, art. 10; Lei 14.063/2020, art. 4º; ISO 31000:2018, gestão de riscos; exemplos autorais.",
    "versao_correta": "Phishing usa indução por comunicação fraudulenta; pharming pode envolver redirecionamento por resolução comprometida."
  },
  {
    "id": "cp-14-2-2",
    "pergunta": "Micro-Checkpoint 2: Criptografia Assimétrica, Assinatura Digital e ICP-Brasil",
    "item": "Na assinatura digital, utiliza-se a chave pública do signatário para produzir a assinatura e exige-se divulgar sua chave privada a todos que desejem verificar o documento.",
    "gabarito": "E",
    "justificativa": "O item inverte a função e a proteção das chaves. A geração usa a chave privada e a verificação usa o material público pertinente ao algoritmo. Não é necessário nem adequado divulgar a chave privada. A descrição como cifração de hash não é universal.",
    "fonte": "NIST FIPS 186-5; conceitos de assinatura digital e MP 2.200-2/2001.",
    "versao_correta": "A geração utiliza a chave privada; a verificação usa o material público correspondente, conforme o algoritmo."
  },
  {
    "id": "cp-14-2-3",
    "pergunta": "Micro-Checkpoint 3: Gestão de Riscos Informacionais (ISO 31000 e ISO/IEC 27005)",
    "item": "No processo de avaliação de riscos, identificar, analisar e comparar os resultados com critérios para decisão são atividades diferentes; essa comparação não deve ser confundida com a execução das medidas de tratamento.",
    "gabarito": "C",
    "justificativa": "A comparação com critérios orienta a decisão. Executar medidas faz parte do tratamento. O processo é iterativo; não se exige uma única conta probabilidade vezes impacto como método universal nem se atribui cláusula não conferida.",
    "fonte": "ISO 31000:2018 — diretrizes e processo de gestão de riscos; síntese didática."
  },
  {
    "id": "rt-14-2-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma intranet pode usar tecnologias web e TCP/IP com acesso restrito; o uso dessas tecnologias não a torna automaticamente aberta a qualquer usuário da internet.",
    "gabarito": "C",
    "justificativa": "Tecnologia e política de acesso são eixos diferentes. Serviços internos podem usar protocolos também usados na internet pública sem conceder acesso irrestrito.",
    "fonte": "CERT.br, Cartilha de Segurança para Internet; RFC 9293 (TCP); NIST FIPS 186-5; MP 2.200-2/2001, art. 10; Lei 14.063/2020, art. 4º; ISO 31000:2018, gestão de riscos; exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Tecnologia da Informação (Item 4: Segurança da Informação, Criptografia e Riscos)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-14-2-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "TCP oferece mecanismos de entrega ordenada e retransmissão, mas não garante que uma aplicação concluirá sua tarefa mesmo se a conexão ou o destino falhar.",
    "gabarito": "C",
    "justificativa": "Confiabilidade do transporte descreve mecanismos do protocolo dentro de suas condições. Ela não é garantia de disponibilidade infinita ou de sucesso de toda tarefa da aplicação.",
    "fonte": "CERT.br, Cartilha de Segurança para Internet; RFC 9293 (TCP); NIST FIPS 186-5; MP 2.200-2/2001, art. 10; Lei 14.063/2020, art. 4º; ISO 31000:2018, gestão de riscos; exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Tecnologia da Informação (Item 4: Segurança da Informação, Criptografia e Riscos)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-14-2-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma mensagem que imita a instituição para induzir o usuário a fornecer credenciais é compatível com phishing, sem exigir que haja alteração do DNS.",
    "gabarito": "C",
    "justificativa": "A manipulação da vítima por mensagem fraudulenta é o ponto do cenário. Redirecionamento por comprometimento de resolução é outra técnica, podendo coexistir em ataques.",
    "fonte": "CERT.br, Cartilha de Segurança para Internet; RFC 9293 (TCP); NIST FIPS 186-5; MP 2.200-2/2001, art. 10; Lei 14.063/2020, art. 4º; ISO 31000:2018, gestão de riscos; exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Tecnologia da Informação (Item 4: Segurança da Informação, Criptografia e Riscos)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-14-2-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Usar uma senha e responder a uma pergunta secreta constitui necessariamente dois fatores de autenticação independentes.",
    "gabarito": "E",
    "justificativa": "Ambos pertencem à categoria de conhecimento. Repetir o que se sabe não cria, por si, fator distinto de posse ou inerência.",
    "fonte": "CERT.br, Cartilha de Segurança para Internet; RFC 9293 (TCP); NIST FIPS 186-5; MP 2.200-2/2001, art. 10; Lei 14.063/2020, art. 4º; ISO 31000:2018, gestão de riscos; exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Tecnologia da Informação (Item 4: Segurança da Informação, Criptografia e Riscos)",
    "habilidade": "aplicar",
    "versao_correta": "Senha e pergunta secreta são exemplos da mesma categoria de fator."
  },
  {
    "id": "rt-14-2-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "No esquema tradicional, restaurar uma cópia completa de domingo com incrementais de segunda, terça e quarta requer a cadeia incremental pertinente até o ponto desejado.",
    "gabarito": "C",
    "justificativa": "Cada incremental registra alterações desde o ponto anterior do esquema. Perder um componente necessário pode impedir a restauração íntegra daquele estado. O enunciado delimita a modalidade tradicional.",
    "fonte": "CERT.br, Cartilha de Segurança para Internet; RFC 9293 (TCP); NIST FIPS 186-5; MP 2.200-2/2001, art. 10; Lei 14.063/2020, art. 4º; ISO 31000:2018, gestão de riscos; exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Tecnologia da Informação (Item 4: Segurança da Informação, Criptografia e Riscos)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-14-2-6",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma cópia off-site está necessariamente offline e isolada de toda conta comprometida da organização.",
    "gabarito": "E",
    "justificativa": "Localização externa e isolamento lógico/físico são propriedades diferentes. Uma cópia na nuvem pode estar acessível com a mesma conta comprometida. É preciso verificar controles e recuperação.",
    "fonte": "CERT.br, Cartilha de Segurança para Internet; RFC 9293 (TCP); NIST FIPS 186-5; MP 2.200-2/2001, art. 10; Lei 14.063/2020, art. 4º; ISO 31000:2018, gestão de riscos; exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Tecnologia da Informação (Item 4: Segurança da Informação, Criptografia e Riscos)",
    "habilidade": "aplicar",
    "versao_correta": "Uma cópia off-site pode estar online; seu isolamento e controle de acesso precisam ser avaliados."
  },
  {
    "id": "rt-14-2-7",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Um hash de fixidez que coincide com um valor de referência confiável é evidência de manutenção dos bits sob as condições do procedimento, mas não certifica a veracidade do texto.",
    "gabarito": "C",
    "justificativa": "Fixidez examina representação binária e comparação com referência. Um documento falso pode permanecer inalterado, e uma referência adulterada pode comprometer o procedimento. O alcance da evidência precisa ser preservado.",
    "fonte": "CERT.br, Cartilha de Segurança para Internet; RFC 9293 (TCP); NIST FIPS 186-5; MP 2.200-2/2001, art. 10; Lei 14.063/2020, art. 4º; ISO 31000:2018, gestão de riscos; exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Tecnologia da Informação (Item 4: Segurança da Informação, Criptografia e Riscos)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-14-2-8",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Todo algoritmo de assinatura digital deve ser explicado como cifrar um hash com chave privada e decifrá-lo com chave pública.",
    "gabarito": "E",
    "justificativa": "Esse modelo didático não descreve de forma universal os algoritmos de assinatura. A operação de assinar e a de verificar usam chaves e procedimentos definidos pelo esquema; nem toda assinatura é uma cifração reversível.",
    "fonte": "CERT.br, Cartilha de Segurança para Internet; RFC 9293 (TCP); NIST FIPS 186-5; MP 2.200-2/2001, art. 10; Lei 14.063/2020, art. 4º; ISO 31000:2018, gestão de riscos; exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Tecnologia da Informação (Item 4: Segurança da Informação, Criptografia e Riscos)",
    "habilidade": "aplicar",
    "versao_correta": "Assinar e verificar são operações do algoritmo de assinatura; a descrição como cifração inversa não é universal."
  },
  {
    "id": "rt-14-2-9",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma assinatura digital válida permite dispensar análise da competência de quem assinou e da verdade material de todas as declarações.",
    "gabarito": "E",
    "justificativa": "Validade criptográfica e competência/verdade do conteúdo são questões diferentes. A assinatura apoia autoria e integridade nos termos do procedimento e regime jurídico, sem tornar materialmente verdadeiro qualquer enunciado.",
    "fonte": "CERT.br, Cartilha de Segurança para Internet; RFC 9293 (TCP); NIST FIPS 186-5; MP 2.200-2/2001, art. 10; Lei 14.063/2020, art. 4º; ISO 31000:2018, gestão de riscos; exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Tecnologia da Informação (Item 4: Segurança da Informação, Criptografia e Riscos)",
    "habilidade": "aplicar",
    "versao_correta": "A assinatura não dispensa a análise da competência e do conteúdo do ato."
  },
  {
    "id": "rt-14-2-10",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Na gestão de riscos, comparar o resultado da análise com critérios previamente definidos é diferente de selecionar e executar medidas de tratamento.",
    "gabarito": "C",
    "justificativa": "A avaliação orienta prioridades e decisões; o tratamento altera o risco segundo as opções escolhidas. O processo é iterativo e deve ser monitorado, sem colapsar todas as etapas numa única operação.",
    "fonte": "CERT.br, Cartilha de Segurança para Internet; RFC 9293 (TCP); NIST FIPS 186-5; MP 2.200-2/2001, art. 10; Lei 14.063/2020, art. 4º; ISO 31000:2018, gestão de riscos; exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Tecnologia da Informação (Item 4: Segurança da Informação, Criptografia e Riscos)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-14-2-11",
    "pergunta": "Julgue a situação apresentada.",
    "item": "PREMIS é um dicionário de metadados de preservação; não se confunde com a ISO 16363, voltada à auditoria/certificação de repositórios digitais confiáveis.",
    "gabarito": "C",
    "justificativa": "São referências com funções distintas. Associar automaticamente PREMIS ao número ISO 16363 troca a identidade do instrumento e prejudica a compreensão da preservação.",
    "fonte": "CERT.br, Cartilha de Segurança para Internet; RFC 9293 (TCP); NIST FIPS 186-5; MP 2.200-2/2001, art. 10; Lei 14.063/2020, art. 4º; ISO 31000:2018, gestão de riscos; exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Tecnologia da Informação (Item 4: Segurança da Informação, Criptografia e Riscos)",
    "habilidade": "aplicar"
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-14-2-fonte-cert",
      "nome": "CERT.br — Cartilha de Segurança para Internet",
      "ano": "Referência de consulta",
      "obraPrincipal": "CERT.br — Cartilha de Segurança para Internet",
      "ideiaChave": "Ameaças, proteção, autenticação, cópias e criptografia.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-14-2-fonte-tcp",
      "nome": "RFC 9293 — Transmission Control Protocol",
      "ano": "Referência de consulta",
      "obraPrincipal": "RFC 9293 — Transmission Control Protocol",
      "ideiaChave": "Conceitos e mecanismos de TCP; não é garantia de sucesso de toda aplicação.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-14-2-fonte-dss",
      "nome": "NIST FIPS 186-5 — Digital Signature Standard",
      "ano": "Referência de consulta",
      "obraPrincipal": "NIST FIPS 186-5 — Digital Signature Standard",
      "ideiaChave": "Geração, verificação e propriedades de assinaturas.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-14-2-fonte-icp",
      "nome": "MP 2.200-2/2001",
      "ano": "Referência de consulta",
      "obraPrincipal": "MP 2.200-2/2001",
      "ideiaChave": "Art. 10 e estrutura da ICP-Brasil.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-14-2-fonte-assinaturas",
      "nome": "Lei 14.063/2020",
      "ano": "Referência de consulta",
      "obraPrincipal": "Lei 14.063/2020",
      "ideiaChave": "Art. 4º e alcance da classificação das assinaturas eletrônicas.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-14-2-fonte-premis",
      "nome": "Library of Congress — PREMIS 3.0",
      "ano": "Referência de consulta",
      "obraPrincipal": "Library of Congress — PREMIS 3.0",
      "ideiaChave": "Dicionário de metadados de preservação; fixity.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-14-2-fonte-risco",
      "nome": "ISO 31000:2018 — Risk management — Guidelines",
      "ano": "Referência de consulta",
      "obraPrincipal": "ISO 31000:2018 — Risk management — Guidelines",
      "ideiaChave": "Diretrizes gerais, contexto e processo; não é uma norma de certificação.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-14-2-9",
      "afirmacao": "Uma assinatura digital válida permite dispensar análise da competência de quem assinou e da verdade material de todas as declarações.",
      "gabarito": "E",
      "porQue": "Validade criptográfica e competência/verdade do conteúdo são questões diferentes. A assinatura apoia autoria e integridade nos termos do procedimento e regime jurídico, sem tornar materialmente verdadeiro qualquer enunciado."
    },
    {
      "id": "memoria-rt-14-2-10",
      "afirmacao": "Na gestão de riscos, comparar o resultado da análise com critérios previamente definidos é diferente de selecionar e executar medidas de tratamento.",
      "gabarito": "C",
      "porQue": "A avaliação orienta prioridades e decisões; o tratamento altera o risco segundo as opções escolhidas. O processo é iterativo e deve ser monitorado, sem colapsar todas as etapas numa única operação."
    },
    {
      "id": "memoria-rt-14-2-11",
      "afirmacao": "PREMIS é um dicionário de metadados de preservação; não se confunde com a ISO 16363, voltada à auditoria/certificação de repositórios digitais confiáveis.",
      "gabarito": "C",
      "porQue": "São referências com funções distintas. Associar automaticamente PREMIS ao número ISO 16363 troca a identidade do instrumento e prejudica a compreensão da preservação."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-14-2-bloco-1",
    "titulo": "Redes: alcance, serviços e acesso",
    "objetivos": [
      "Distinguir abrangência física e política de acesso."
    ],
    "conteudo": "Uma rede conecta dispositivos e serviços; sua classificação pode considerar alcance, tecnologia e finalidade. **PAN** descreve âmbito pessoal; **LAN**, uma rede local; **MAN**, âmbito metropolitano; **WAN**, ampla área. Essas categorias não definem por si velocidade, segurança ou se o serviço é público. Ethernet e Wi-Fi são tecnologias de acesso, não sinônimos universais de uma classe de alcance.\n\n**Internet** articula redes e serviços sob protocolos comuns. **Intranet** usa tecnologias de rede para um contexto organizacional restrito. **Extranet** descreve acesso controlado de partes externas a recursos organizacionais. Uma instituição pode oferecer serviço público e serviço interno nos mesmos padrões web, com políticas de acesso diferentes.\n\n**Caso:** o catálogo público é acessível remotamente; a ferramenta interna de aquisição exige autenticação e acesso autorizado. O uso de HTTPS em ambos não elimina a diferença de público. Também não permite inferir que a intranet só funciona dentro do prédio: pode haver acesso remoto controlado conforme o projeto.\n\nConsidere separadamente **endereço**, **nome**, **rota** e **permissão**. Saber o endereço de um servidor não concede autorização de uso. Conseguir resolver um nome não demonstra que a aplicação está disponível. Um problema de rede deve identificar qual etapa falhou, em vez de tratar todo erro como “a internet caiu”.\n\n**Recuperação:** descreva uma rede local que acessa a internet e um serviço interno dessa rede. Quais recursos permanecem restritos? Qual tecnologia de comunicação isso permite reconhecer e qual política continua precisando ser definida?",
    "checkpointIds": [
      "rt-14-2-1"
    ]
  },
  {
    "id": "sub-14-2-bloco-2",
    "titulo": "TCP/IP e serviços: o que cada camada resolve",
    "objetivos": [
      "Relacionar transporte, endereçamento e serviços sem transformar padrões em garantia absoluta."
    ],
    "conteudo": "**IP** trata de endereçamento e encaminhamento de pacotes. IPv4 usa endereços de 32 bits; IPv6, de 128 bits. A notação exibida não é o tamanho em caracteres obrigatório de todo endereço: IPv6 admite abreviações sob regras. **TCP** oferece mecanismos de conexão, ordenação e retransmissão; **UDP** fornece datagramas sem esses mesmos mecanismos de confiabilidade no protocolo.\n\nNão conclua que UDP é sempre mais rápido em qualquer aplicação ou que TCP garante sucesso diante de toda falha. A aplicação pode implementar controles sobre UDP, e o ambiente determina perdas, latência e disponibilidade. O estabelecimento de conexão TCP costuma ser explicado pelo intercâmbio SYN, SYN-ACK e ACK; esse procedimento não substitui o restante do protocolo.\n\n**DNS** associa nomes e informações de domínio, incluindo registros de endereços; **DHCP** pode fornecer parâmetros de configuração a um dispositivo. São funções diferentes. Um endereço manual não prova ausência de DNS, e um servidor DNS não fornece automaticamente toda configuração de rede como DHCP.\n\nNo estudo das portas convencionais, reconheça exemplos: DNS 53 em UDP/TCP conforme operação, SSH 22/TCP, HTTP 80 e HTTPS 443 em seus usos usuais. Não trate essa tabela como descrição de todas as versões: HTTP/3 usa QUIC sobre UDP, por exemplo. Um item precisa delimitar protocolo e contexto quando essa distinção muda a resposta.\n\n**TLS** protege a comunicação conforme negociação e validação aplicáveis; SSL é referência histórica que não deve ser recomendada como equivalente técnico atual sem ressalva. **ICMP** apoia controle e diagnóstico; responder a ping não certifica que o catálogo ou outro serviço de aplicação funciona corretamente.",
    "checkpointIds": [
      "rt-14-2-2"
    ]
  },
  {
    "id": "sub-14-2-bloco-3",
    "titulo": "Ameaças: comportamento e mecanismo, não apenas o nome",
    "objetivos": [
      "Distinguir engenharia social, redirecionamento e classes de código malicioso."
    ],
    "conteudo": "**Phishing** envolve comunicação fraudulenta para induzir ação, como fornecer credenciais ou abrir um anexo. Pode usar diferentes canais; uma mensagem dirigida a pessoa/setor específico caracteriza o recorte direcionado conhecido como spear phishing. **Pharming** envolve redirecionamento associado a manipulação de resolução/caminho, como comprometimento de DNS ou arquivo de nomes local, conforme o cenário.\n\n**Vírus** associa sua propagação a código hospedeiro; não é seguro afirmar que toda infecção depende de um clique explícito consciente. **Worm** pode propagar-se de modo autônomo em redes. **Cavalo de Troia** aparenta funcionalidade legítima e executa ação maliciosa; não precisa cumprir toda característica de vírus ou worm. **Ransomware** restringe acesso para extorsão e pode empregar criptografia, bloqueio e outras práticas; nem toda variante se resume ao mesmo mecanismo.\n\nProgramas de espionagem e captura de atividade podem recolher informações. Uma **botnet** reúne dispositivos controlados para fins como ataques distribuídos. As categorias podem se sobrepor: o vetor de entrada e a ação posterior não são a mesma dimensão.\n\n**Caso resolvido:** um e-mail imita o suporte e pede senha numa página falsa. O texto descreve engenharia social compatível com phishing. Não é necessário supor que o DNS foi alterado. Se o usuário digita o domínio correto e um comprometimento de resolução o conduz a outro destino, o mecanismo descrito é diferente.\n\nA prevenção combina verificação de origem, atualização, configuração, autorização e resposta a incidentes. Nenhuma instrução como “nunca clique” resolve todas as formas de ataque. A aprendizagem deve permitir explicar como a ação solicitada e o ambiente se relacionam ao risco.",
    "checkpointIds": [
      "cp-14-2-1",
      "rt-14-2-3"
    ]
  },
  {
    "id": "sub-14-2-bloco-4",
    "titulo": "Proteção e autenticação: controles têm alcance",
    "objetivos": [
      "Escolher controles e distinguir identificação, autenticação e autorização."
    ],
    "conteudo": "**Identificar** é declarar/associar identidade; **autenticar** busca verificar a alegação; **autorizar** define o que o sujeito pode fazer. Entrar no sistema não concede acesso irrestrito a todos os documentos. O princípio de menor privilégio orienta conceder o necessário à finalidade, com revisão de permissões.\n\nAutenticação multifator combina fatores de categorias distintas, como conhecimento, posse e inerência. Senha mais pergunta secreta continua usando conhecimento. Um aplicativo ou dispositivo de posse, com controles próprios, é outra categoria. A segurança concreta também depende de recuperação de conta, resistência a fraude e configuração; o nome MFA não elimina todas as ameaças.\n\n**Firewall** aplica políticas sobre tráfego conforme suas capacidades e regras; não é sinônimo de antivírus nem prova de que todo ataque será bloqueado. Ferramentas de detecção podem usar assinaturas, análise heurística e comportamento. Ausência de alerta não certifica ausência de comprometimento. **Sandbox** permite observação controlada, mas também tem limites de representação do ambiente e do comportamento da ameaça.\n\n**Exemplo:** o usuário possui credencial válida, mas precisa somente consultar um relatório. Conceder função de administrador para tornar o acesso mais fácil amplia exposição desnecessária. Separar a permissão de consulta da gestão do sistema atende à tarefa com menor alcance.\n\nControles devem ser articulados: atualização, cópias de segurança, monitoramento, gestão de contas e resposta. Uma camada não autoriza abandonar as demais. Em prova, examine qual propriedade o mecanismo atende e qual garantia excessiva foi atribuída a ele.",
    "checkpointIds": [
      "rt-14-2-4"
    ]
  },
  {
    "id": "sub-14-2-bloco-5",
    "titulo": "Backup: reconstruir o estado e testar a recuperação",
    "objetivos": [
      "Distinguir completo, diferencial, incremental, localização e isolamento."
    ],
    "conteudo": "No esquema tradicional, **completo** copia o conjunto definido; **diferencial** reúne mudanças desde o último completo; **incremental** reúne mudanças desde o ponto anterior pertinente da cadeia. Implementações modernas podem usar estratégias sintéticas e outros mecanismos, portanto o enunciado precisa delimitar o modelo.\n\n**Exemplo resolvido:** completo no domingo e incrementais na segunda, terça e quarta. Para restaurar o estado de quarta nesse esquema, parte-se do completo e aplica-se a cadeia necessária. Com diferenciais, o completo e o diferencial do ponto escolhido podem bastar. O critério decisivo é de onde cada cópia calcula suas alterações, não só o volume aparente.\n\n**3-2-1** é uma orientação de redundância de cópias, diversidade de meios e localização externa. Off-site não é sinônimo de offline nem de air gap: uma cópia externa pode continuar acessível com a mesma credencial comprometida. Isolamento, imutabilidade, retenção e teste de restauração são decisões adicionais.\n\n**RPO** relaciona-se ao ponto de recuperação e perda de dados tolerada no enquadramento do plano; **RTO**, ao tempo para recuperar serviço. Ter cópias a cada dia não demonstra que a restauração ocorrerá em poucos minutos. Um projeto precisa testar dados, dependências, chaves e procedimentos.\n\nA sincronização tratada em 14.1 pode propagar exclusões. Redundância de disco também não substitui backup contra toda perda lógica ou incidente. O aluno deve explicar de qual falha a medida protege e como os dados serão efetivamente recuperados, em vez de repetir “backup garante tudo”.",
    "checkpointIds": [
      "rt-14-2-5",
      "rt-14-2-6"
    ]
  },
  {
    "id": "sub-14-2-bloco-6",
    "titulo": "Criptografia, hash e fixidez: propriedades diferentes",
    "objetivos": [
      "Separar confidencialidade, integridade e verificação de bits."
    ],
    "conteudo": "**Criptografia simétrica** usa segredo compartilhado no esquema pertinente; **assimétrica** usa chaves relacionadas com operações definidas pelo algoritmo. Sistemas podem combinar métodos, usando estabelecimento de segredo e proteção eficiente do conteúdo. Não se deve afirmar que toda chave pública serve indistintamente para cifrar e verificar em qualquer algoritmo.\n\n**AES** é exemplo de cifra simétrica; **RSA** e algoritmos de curvas elípticas ilustram famílias de criptografia de chave pública em usos definidos. A segurança depende de parâmetros, implementação e ciclo de vida das chaves. Evite regras universais de custo ou recomendações numéricas descontextualizadas de versão e finalidade.\n\n**Hash criptográfico** produz um resumo conforme a função. Mesma entrada e algoritmo determinam o mesmo resultado. Para usos de segurança, são relevantes resistências a pré-imagem e colisões, com níveis que dependem da função. O espaço finito de resumos implica que colisões são matematicamente possíveis; o objetivo de resistência é torná-las inviáveis de explorar no cenário de segurança considerado.\n\n**Fixidez:** comparar um valor calculado ao valor de referência confiável ajuda a verificar manutenção dos bits. Isso não demonstra que a informação escrita é verdadeira nem reconstrói automaticamente um arquivo danificado. Referência, algoritmo, registro do procedimento e proteção dos valores precisam ser considerados.\n\n**PREMIS** descreve metadados de preservação, incluindo informação pertinente à fixidez. Não é a ISO 16363, referência de auditoria/certificação de repositórios confiáveis. Tampouco impõe uma regra universal de checar todo acervo a cada noventa dias. Periodicidade e controles dependem de política, risco e ambiente.\n\n**Caso:** um PDF materialmente incorreto pode ter o mesmo hash durante anos. Sua integridade binária não converte conteúdo falso em verdadeiro. Essa distinção reaparece na assinatura digital.",
    "checkpointIds": [
      "rt-14-2-7",
      "rt-14-2-11"
    ]
  },
  {
    "id": "sub-14-2-bloco-7",
    "titulo": "Assinatura digital e ICP-Brasil: autoria não é verdade material",
    "objetivos": [
      "Distinguir assinar, verificar, certificar identidade e avaliar o conteúdo."
    ],
    "conteudo": "Uma assinatura digital usa um esquema criptográfico de geração e verificação. O signatário utiliza a chave privada pertinente; a verificação usa material público correspondente conforme o algoritmo. A explicação “cifrar hash e depois decifrar” pode ser uma simplificação de alguns tratamentos didáticos, mas não descreve universalmente algoritmos como os contemplados pelo padrão de assinaturas do NIST.\n\nA assinatura apoia verificar autoria associada à chave e integridade nos termos do procedimento. **Certificado** vincula identidade e chave pública sob uma cadeia e política de confiança; **carimbo do tempo** acrescenta evidência temporal segundo seu serviço. Validação envolve também estado do certificado, cadeia e demais condições aplicáveis, não apenas verificar se há uma imagem de rubrica.\n\nA MP 2.200-2/2001 institui a ICP-Brasil e, no art. 10, trata da presunção em relação aos signatários. Isso não deve ser ensinado como verdade absoluta e incontestável de toda declaração. Assinar um relatório com erro não torna o dado correto nem dispensa examinar competência, validade do ato e eventual contestação.\n\nA Lei 14.063/2020 distingue assinaturas eletrônicas **simples, avançadas e qualificadas** em seu alcance. Qualificada utiliza certificado ICP-Brasil. Uma assinatura digitalizada é imagem, e não o mesmo mecanismo criptográfico. O regime admite análise dos meios e exigências específicos; não conclua que qualquer documento fora da ICP-Brasil seja necessariamente sem valor.\n\nNa infraestrutura, ACs emitem certificados e ARs realizam identificação conforme as regras; o ITI atua como autoridade certificadora raiz. Tipos e requisitos precisam ser consultados no normativo aplicável. A3 não deve ser reduzido a “somente um token USB inviolável”: há serviços de armazenamento/uso em nuvem sob condições próprias. Não invente duração universal para todo certificado sem fonte de versão.",
    "checkpointIds": [
      "cp-14-2-2",
      "rt-14-2-8",
      "rt-14-2-9"
    ]
  },
  {
    "id": "sub-14-2-bloco-8",
    "titulo": "Gestão de riscos: critérios, decisão e acompanhamento",
    "objetivos": [
      "Analisar incerteza sobre objetivos e distinguir avaliação de tratamento."
    ],
    "conteudo": "Gerir riscos envolve reconhecer incertezas que afetam objetivos, compreender contexto e critérios, identificar eventos e fontes, analisar consequências e decidir respostas. A **ISO 31000:2018** oferece diretrizes gerais; a família de segurança da informação trata seu domínio específico. Referenciar uma norma não autoriza inventar número de cláusula nem aplicar toda redação de uma edição a outra.\n\n**Identificação** descreve o que pode ocorrer e em quais condições. **Análise** estuda natureza, consequências, probabilidade e nível conforme o método. **Avaliação** compara resultados com critérios para orientar prioridades e decisões. **Tratamento** seleciona e implementa respostas. Comunicação, registro, monitoramento e revisão acompanham o processo, que é iterativo.\n\n**Caso hipotético, não diagnóstico da Câmara:** um repositório pode ficar indisponível por falha de energia. Primeiro defina o objetivo de disponibilidade e o contexto. Depois examine histórico, dependências, consequências e controles. Classificar probabilidade como alta sem dado ou critério não constitui avaliação demonstrada. Uma matriz é ferramenta de organização; multiplicar categorias ordinais sem método não cria medida objetiva de perda.\n\nOpções podem reduzir exposição/consequências, evitar uma atividade, compartilhar efeitos ou aceitar risco segundo critérios e competência. Contratar serviço não transfere automaticamente toda responsabilidade. Aceitar também exige decisão informada e acompanhamento; não é sinônimo de ignorar.\n\n**Exemplo de retorno:** o controle reduziu a probabilidade estimada, mas permanece risco residual. Novos dados podem pedir revisão. O sucesso de um controle não garante que o risco se tornou zero. Uma aula de nível alto precisa ensinar a explicar a decisão e suas premissas, em vez de apresentar uma tabela inventada como caso concreto institucional.",
    "checkpointIds": [
      "cp-14-2-3",
      "rt-14-2-10"
    ]
  }
],
fontesTeoria: [
  {
    "id": "cert",
    "titulo": "CERT.br — Cartilha de Segurança para Internet",
    "localizador": "Ameaças, proteção, autenticação, cópias e criptografia.",
    "url": "https://cartilha.cert.br/"
  },
  {
    "id": "tcp",
    "titulo": "RFC 9293 — Transmission Control Protocol",
    "localizador": "Conceitos e mecanismos de TCP; não é garantia de sucesso de toda aplicação.",
    "url": "https://www.rfc-editor.org/rfc/rfc9293.html"
  },
  {
    "id": "dss",
    "titulo": "NIST FIPS 186-5 — Digital Signature Standard",
    "localizador": "Geração, verificação e propriedades de assinaturas.",
    "url": "https://csrc.nist.gov/pubs/fips/186-5/final"
  },
  {
    "id": "icp",
    "titulo": "MP 2.200-2/2001",
    "localizador": "Art. 10 e estrutura da ICP-Brasil.",
    "url": "https://legis.senado.gov.br/norma/559102/publicacao/34949825"
  },
  {
    "id": "assinaturas",
    "titulo": "Lei 14.063/2020",
    "localizador": "Art. 4º e alcance da classificação das assinaturas eletrônicas.",
    "url": "https://www2.camara.leg.br/legin/fed/lei/2020/lei-14063-23-setembro-2020-790659-normaatualizada-pl.html"
  },
  {
    "id": "premis",
    "titulo": "Library of Congress — PREMIS 3.0",
    "localizador": "Dicionário de metadados de preservação; fixity.",
    "url": "https://www.loc.gov/standards/premis/v3/index.html"
  },
  {
    "id": "risco",
    "titulo": "ISO 31000:2018 — Risk management — Guidelines",
    "localizador": "Diretrizes gerais, contexto e processo; não é uma norma de certificação.",
    "url": "https://www.iso.org/standard/31000"
  }
],
};

