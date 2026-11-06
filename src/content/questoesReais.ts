import type { QuestaoEstudoReverso } from '../components/common/PainelEstudoReverso';
import itensTriados from './questoesReaisTriadas.json';
import { QUESTOES_LOTES_REAIS } from './lotesReais';
import { aplicarConferenciaOficial } from './conferenciaOficialReais/aplicar';
import { enriquecerEstudoReversoReal } from './estudoReversoReais/enriquecer';

export interface QuestaoReal extends QuestaoEstudoReverso {
  modulo: string;
  contexto: string;
  prova: string;
  provaUrl: string;
  gabaritoUrl?: string;
  estadoConferencia?: 'caderno' | 'copia-oficial';
  conferenciaOficial?: { numero: number; tipoGabarito: 'tabela' | 'recurso'; provaEmEspelho: boolean; gabaritoEmEspelho: boolean };
  loteRevisao?: string;
  numeroNaFonte?: number;
  outrasFontes?: { titulo: string; url: string }[];
  acervoUrl: string;
  adaptacaoEditorial?: {
    data: string;
    versao: number;
    motivo: string;
    original: Pick<QuestaoReal, 'item' | 'contexto' | 'gabarito' | 'justificativa'>;
  };
}

const prova = 'https://cdn.cebraspe.org.br/concursos/stj_24/arquivos/018_STJ_005_01.PDF';
const gabarito = 'https://cdn.cebraspe.org.br/concursos/stj_24/arquivos/GAB_DEFINITIVO_018_STJ_005_01.PDF';

/** Itens conferidos individualmente; não representa a extração integral do acervo. */
const QUESTOES_OFICIAIS_CONFERIDAS: QuestaoReal[] = [
  {
    id: 'real-stj-2024-biblio-67', modulo: 'M2', submoduloId: '2.2',
    prova: 'STJ 2024 · Analista Judiciário — Biblioteconomia · item 67', provaUrl: prova, gabaritoUrl: gabarito,
    acervoUrl: 'https://drive.google.com/file/d/1cOjm4fq3RpEoyWhew4bi-d7aU0R-k6DP/view',
    contexto: 'Acerca de catalogação e controle bibliográfico, julgue o item a seguir.',
    item: 'RDA (resource description and access) é uma forma inovadora de catalogação que substituiu o AACR2 (código de catalogação anglo-americano).',
    gabarito: 'C', justificativa: 'O RDA sucedeu o AACR2 como padrão de descrição e acesso. A banca considerou a afirmação certa no gabarito definitivo; isso não significa que todas as bibliotecas tenham migrado nem que RDA seja um formato de intercâmbio como MARC 21.',
    gatilho: 'substituiu o AACR2', fonte: 'Cebraspe, STJ/2024, item 67, gabarito definitivo; IFLA LRM e referências da aula 2.2.',
  },
  {
    id: 'real-stj-2024-biblio-64', modulo: 'M4', submoduloId: '4.4',
    prova: 'STJ 2024 · Analista Judiciário — Biblioteconomia · item 64', provaUrl: prova, gabaritoUrl: gabarito,
    acervoUrl: 'https://drive.google.com/file/d/1bGBK21hcxcGGKwfLzOEIp0X2F2bQ7RVR/view',
    contexto: 'Acerca da disseminação seletiva da informação (DSI), julgue o item a seguir.',
    item: 'Para a prestação do serviço de disseminação seletiva da informação, a identificação do perfil de usuário deve, necessariamente, ser explícita.',
    gabarito: 'E', justificativa: 'O perfil orienta a seleção de informações, mas sua identificação não precisa ser sempre explícita: dependendo do serviço e das condições de uso, sinais de comportamento podem contribuir para inferi-lo. O termo “necessariamente” transforma uma possibilidade em exigência universal. A construção e o uso do perfil devem respeitar as regras de proteção de dados aplicáveis.',
    versao_correta: 'Na DSI, o perfil pode ser identificado de modo explícito ou, conforme o serviço, também por sinais implícitos.', gatilho: 'necessariamente', fonte: 'Cebraspe, STJ/2024, item 64, gabarito definitivo; referências sobre DSI da aula 4.4.',
  },
  {
    id: 'real-stj-2024-biblio-80', modulo: 'M5', submoduloId: '5.3',
    prova: 'STJ 2024 · Analista Judiciário — Biblioteconomia · item 80', provaUrl: prova, gabaritoUrl: gabarito,
    acervoUrl: 'https://drive.google.com/file/d/1N4qqskpWDL4CcSUHstCKpYy0l5VFV6W1/view',
    contexto: 'No que se refere a organização e administração de bibliotecas, julgue o item a seguir.',
    item: 'A política de desenvolvimento de coleções, embora importante na constituição do acervo de uma biblioteca, exerce pouca influência no planejamento geral da biblioteca.',
    gabarito: 'E', justificativa: 'A política de coleções se relaciona ao planejamento da biblioteca: necessidades dos usuários, missão, prioridades, espaço e orçamento orientam a seleção, a aquisição e a avaliação. Por exemplo, uma prioridade por obras digitais afeta recursos financeiros e serviços de acesso. Por isso, a banca rejeitou a afirmação de que sua influência geral é pequena.',
    versao_correta: 'A política de desenvolvimento de coleções se articula ao planejamento geral da biblioteca.', gatilho: 'exerce pouca influência no planejamento geral', fonte: 'Cebraspe, STJ/2024, item 80, gabarito definitivo; referências de desenvolvimento de coleções da aula 5.3.',
  },
  {
    id: 'real-stj-2024-biblio-85', modulo: 'M8', submoduloId: '8.4',
    prova: 'STJ 2024 · Analista Judiciário — Biblioteconomia · item 85', provaUrl: prova, gabaritoUrl: gabarito,
    acervoUrl: 'https://drive.google.com/file/d/1VyNF5Wp_AzeCZ-T8ex-oeONE1BAov17b/view',
    contexto: 'Acerca de identificadores persistentes, julgue o item a seguir.',
    item: 'O Digital Object Identifier (DOI) é considerado um identificador persistente.',
    gabarito: 'C', justificativa: 'O DOI identifica persistentemente um objeto; seus metadados e o endereço de resolução podem ser atualizados quando a localização muda. Persistência não garante que o conteúdo continue disponível sem manutenção, nem que seja gratuito.',
    fonte: 'Cebraspe, STJ/2024, item 85, gabarito definitivo; documentação DOI indicada na aula 8.4.',
  },
];

// Preserva o banco de origem; aplica conferências, restaurações e exclusões antes do estudo reverso.
export const QUESTOES_REAIS: QuestaoReal[] = aplicarConferenciaOficial([...QUESTOES_OFICIAIS_CONFERIDAS, ...(itensTriados as QuestaoReal[]), ...QUESTOES_LOTES_REAIS]).map(enriquecerEstudoReversoReal);
