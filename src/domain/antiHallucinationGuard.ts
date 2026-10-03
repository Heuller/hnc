import { z } from 'zod';

/**
 * Padrões genéricos e vagos expressamente proibidos, que caracterizam alucinação
 * ou falta de lastro documental estrito.
 */
const FONTES_GENERICAS_PROIBIDAS = [
  /jurisprud[eê]ncia\s+cebraspe/i,
  /edital\s+c[âa]mara/i,
  /banca\s+examinadora/i,
  /quest[ãa]o\s+cebraspe/i,
  /internet/i,
  /doutrina\s+geral/i,
  /conhecimento\s+comum/i,
  /gerado\s+por\s+ia/i,
  /material\s+do\s+curso/i,
  /v[áa]rios\s+autores/i,
  /n[ãa]o\s+informad[oa]/i,
  /acervo\s+geral/i,
  /senso\s+comum/i,
];

/**
 * Padrões aceitos que comprovam lastro em fonte primária canônica:
 * - Leis federais, Decretos, CF/88, Regimento Interno da Câmara
 * - Normas ABNT NBR, ISO, RDA, IFLA LRM, AACR2, ISBD, Dublin Core, MARC 21
 * - Teóricos de Biblioteconomia e Ciência da Informação (Ranganathan, Vergueiro, Lancaster, Otlet, Briet, etc.)
 * - Teóricos de Arquivologia (Schellenberg, Bellotto, Rousseau & Couture, Paes, Arquivo Nacional)
 * - Teóricos de Lógica / RLM (Boole, De Morgan, Frege, Aristóteles, Copi, Tarski, Russell, Johnson-Laird)
 * - Gramáticas normativas de Língua Portuguesa (Bechara, Cunha & Cintra, Cegalla, Rocha Lima, Celso Pedro Luft, Azeredo, Garcia, VOLP/ABL, Manual de Redação da Presidência)
 * - Teóricos e referências de Língua Inglesa (Murphy, Swan, Quirk, Biber, Cambridge, Oxford)
 */
const FONTES_PRIMARIAS_VALIDAS = [
  // Legislação e Atos Normativos
  /lei\s+(n[ºo°.]?\s*)?\d+(\.\d+)?/i,
  /decreto\s+(n[ºo°.]?\s*)?\d+/i,
  /constitui[çc][ãa]o\s+federal|cf\s*\/?\s*88/i,
  /regimento\s+interno/i,
  /art(\.|igo)?\s*\d+/i, // Menção explícita a artigo legal
  /resolu[çc][ãa]o\s+cfb|cdd|cdu/i,

  // Normas Técnicas e Padrões Internacionais
  /abnt\s+nbr\s+\d+/i,
  /iso\s+\d+/i,
  /ifla\s+lrm|rda|aacr2|isbd|marc\s*21|dublin\s+core|z39\.50/i,
  /oaipmh|oai-pmh|mets|mods|premis/i,

  // Biblioteconomia e Ciência da Informação
  /ranganathan|vergueiro|lancaster|briet|otlet|buckland|tarapanoff|rowley/i,
  /borko|shera|le\s+coadic|guinchat|menou|saracevic|farradane/i,
  /salton|blair|marrable|vickery|bates|dervin|kuhlthau/i,

  // Arquivologia e Gestão de Documentos
  /schellenberg|bellotto|rousseau|couture|camargo|paes|conarq/i,

  // Língua Portuguesa e Redação Oficial
  /bechara|cunha\s*&\s*cintra|cegalla|rocha\s+lima|azeredo|garcia|luft/i,
  /volp|academia\s+brasileira\s+de\s+letras/i,
  /manual\s+de\s+reda[çc][ãa]o\s+da\s+presid[êe]ncia/i,
  /acordo\s+ortogr[áa]fico/i,

  // Lógica e Raciocínio Lógico-Matemático (RLM)
  /boole|de\s+morgan|frege|arist[óo]teles|copi|tarski|russell|peirce/i,
  /johnson-laird|sweller|kahneman|tversky/i,

  // Língua Inglesa
  /murphy|swan|quirk|biber|cambridge|oxford/i,

  // Citações bibliográficas formais com autor e ano (ex: Autor, 1989)
  /\(\s*\d{4}\s*\)/,
  /[A-Z][a-z]+,\s*\d{4}/,
];

/**
 * Padrões de distratores característicos do estilo Cebraspe
 */
export const PADROES_DISTRATORES_CEBRASPE = {
  generalizacaoIndevida: /\b(sempre|todos|todas|qualquer|em qualquer hip[oó]tese|invariavelmente|sem exce[çc][ãa]o)\b/i,
  restricaoIndevida: /\b(apenas|somente|exclusivamente|unicamente|t[ãa]o somente|restringe-se|limita-se)\b/i,
  inversaoConceitual: /\b(ao contr[áa]rio de|em vez de|enquanto|distingue-se por|oposto a|confunde-se com)\b/i,
};

export interface ItemCandidatoIA {
  id?: string;
  item: string; // Assertiva declarativa
  gabarito: 'C' | 'E';
  justificativa: string;
  fontePrimaria?: string;
  autorOuNormaReferencia?: string;
  trechoAncora?: string;
  textoBase?: string;
  armadilhaBanca?: string;
  tecnicaDistratorDetectada?: string;
}

export interface ResultadoValidacaoAntiAlucinacao {
  valido: boolean;
  erros: string[];
  fonteIdentificada?: string;
  bloqueadoPorAlucinacao: boolean;
  tecnicaDistratorDetectada?: string;
}

/**
 * Schema Zod estrito para itens gerados com assistência de IA
 */
export const ItemValidadoIASchema = z.object({
  item: z
    .string()
    .min(15, 'A assertiva deve ter no mínimo 15 caracteres.')
    .refine((txt) => !txt.includes('?'), {
      message: 'Assertivas no estilo Cebraspe não podem ser perguntas interrogativas.',
    })
    .refine((txt) => !/^[A-E]\s*[).-]/i.test(txt.trim()), {
      message: 'Itens Cebraspe são no formato C/E, não alternativas de múltipla escolha A/B/C/D/E.',
    }),
  gabarito: z.enum(['C', 'E']),
  justificativa: z
    .string()
    .min(20, 'A justificativa deve conter no mínimo 20 caracteres fundamentando o gabarito.'),
  fontePrimaria: z
    .string()
    .min(6, 'Fonte primária deve ser informada e verificável (autor/obra, artigo de lei, norma técnica ou gramática).'),
  trechoAncora: z.string().optional(),
  armadilhaBanca: z.string().optional(),
});

/**
 * Validador estrito que atua como bloqueio contra alucinações de IA.
 * Rejeita assertivas sem lastro em fontes primárias verificáveis e fora do formato Cebraspe.
 */
export function validarItemAntiAlucinacao(
  candidato: ItemCandidatoIA
): ResultadoValidacaoAntiAlucinacao {
  const erros: string[] = [];

  const fonte = (candidato.fontePrimaria || candidato.autorOuNormaReferencia || '').trim();

  // 1. Verificação da existência e comprimento da fonte
  if (!fonte || fonte.length < 6) {
    erros.push('Fonte primária ausente ou excessivamente curta.');
  }

  // 2. Bloqueio de fontes genéricas ou fictícias
  for (const padraoProibido of FONTES_GENERICAS_PROIBIDAS) {
    if (padraoProibido.test(fonte)) {
      erros.push(
        `A fonte informada ("${fonte}") é genérica ou sem lastro verificável. Requer autor canônico com ano/obra, artigo de lei, norma técnica específica ou gramática normativa.`
      );
      break;
    }
  }

  // 3. Verificação de lastro em fonte primária reconhecível
  const temFonteValida = FONTES_PRIMARIAS_VALIDAS.some((padrao) => padrao.test(fonte));
  if (!temFonteValida && fonte.length > 0) {
    erros.push(
      `A fonte informada ("${fonte}") não corresponde a um padrão primário reconhecido (autor com ano, norma ABNT/ISO, dispositivo de lei com artigo ou gramática normativa).`
    );
  }

  // 4. Verificação da estrutura do item no padrão autêntico do Cebraspe
  if (!candidato.item || candidato.item.trim().length < 15) {
    erros.push('Texto do item muito curto ou vazio.');
  } else {
    const textoLimpo = candidato.item.trim();
    if (textoLimpo.includes('?')) {
      erros.push('Itens Cebraspe são afirmativas declarativas para julgamento, não perguntas interrogativas.');
    }
    if (/^[A-E]\s*[).-]/i.test(textoLimpo)) {
      erros.push('O item aparenta ser uma alternativa de múltipla escolha (A-E), incompatível com o formato Cebraspe Certo/Errado.');
    }
  }

  // 5. Verificação da justificativa analítica
  if (!candidato.justificativa || candidato.justificativa.trim().length < 20) {
    erros.push('Justificativa analítica insuficiente. O item deve fundamentar o gabarito com precisão conceitual.');
  }

  // 6. Verificação de ancoragem se houver texto base associado
  if (candidato.textoBase && candidato.trechoAncora) {
    if (!candidato.textoBase.includes(candidato.trechoAncora)) {
      erros.push('O trecho âncora informado não foi encontrado literalmente no texto base de apoio.');
    }
  }

  // 7. Deteção de técnicas de distratores do Cebraspe em itens ERRADOS
  let tecnicaDetectada: string | undefined;
  if (candidato.gabarito === 'E') {
    if (PADROES_DISTRATORES_CEBRASPE.generalizacaoIndevida.test(candidato.item)) {
      tecnicaDetectada = 'Generalização indevida (termos absolutos)';
    } else if (PADROES_DISTRATORES_CEBRASPE.restricaoIndevida.test(candidato.item)) {
      tecnicaDetectada = 'Restrição indevida (termos limitantes)';
    } else if (PADROES_DISTRATORES_CEBRASPE.inversaoConceitual.test(candidato.item)) {
      tecnicaDetectada = 'Inversão conceitual entre termos correlatos';
    }
  }

  const bloqueadoPorAlucinacao = erros.length > 0;

  return {
    valido: !bloqueadoPorAlucinacao,
    erros,
    fonteIdentificada: temFonteValida ? fonte : undefined,
    bloqueadoPorAlucinacao,
    tecnicaDistratorDetectada: tecnicaDetectada,
  };
}

/**
 * Filtra um lote de questões geradas por IA, descartando itens não conformes.
 */
export function filtrarItensSegurosIA<T extends ItemCandidatoIA>(
  itens: T[]
): { aprovados: T[]; rejeitados: { item: T; erros: string[] }[] } {
  const aprovados: T[] = [];
  const rejeitados: { item: T; erros: string[] }[] = [];

  for (const it of itens) {
    const res = validarItemAntiAlucinacao(it);
    if (res.valido) {
      aprovados.push({
        ...it,
        tecnicaDistratorDetectada: res.tecnicaDistratorDetectada,
      });
    } else {
      rejeitados.push({ item: it, erros: res.erros });
    }
  }

  return { aprovados, rejeitados };
}

/**
 * Diretriz Canônica de Prompting para Geração de Itens via IA imune a alucinações
 */
export const CEBRASPE_PROMPT_ANTI_ALUCINACAO = `
DIRETRIZES DE ENGENHARIA DE ITENS CEBRASPE (PADRÃO CÂMARA DOS DEPUTADOS):
1. Cada item DEVE ser uma assertiva puramente DECLARATIVA em 3ª pessoa ("Julgue o item a seguir a respeito de..."). Jamais formule perguntas ou alternativas de múltipla escolha.
2. Cada assertiva deve testar a compreensão crítica de uma regra, princípio, dispositivo legal ou conceito específico.
3. Para itens com gabarito ERRADO (E), utilize uma das técnicas de distratores canônicos do Cebraspe:
   - Inversão de conceitos correlatos (ex: desbastamento x descarte; revocação x precisão; denotação x conotação; modus ponens x falácia da afirmação do consequente).
   - Extrapolação / Generalização indevida: inserção sutil de termos absolutos ("sempre", "em qualquer hipótese", "invariavelmente", "sem exceção") em regras que comportam ressalvas.
   - Restrição indevida: uso de restritivos ("apenas", "somente", "exclusivamente") limitando a aplicação geral de um instituto.
   - Adulteração de dispositivo legal ou norma: citação quase literal do texto normativo com substituição de uma única palavra-chave (ex: competência privativa vs exclusiva, quórum qualificado, prazo).
4. BLOQUEIO INEGOCIÁVEL CONTRA ALUCINAÇÕES:
   - Todo item DEVE indicar obrigatoriamente a "fontePrimaria" exata: autor clássico com ano e obra, norma ABNT NBR específica com número, dispositivo de lei federal com número e artigo, ou gramática normativa com autor.
   - NUNCA use termos genéricos como "jurisprudência Cebraspe", "edital da câmara", "internet" ou "doutrina geral".
`;

