import type { QuestaoEstudoReverso } from '../../components/common/PainelEstudoReverso';
import anotacoes from './anotacoes.json';
import perfis from './perfis.json';
import referencias from './referencias.json';
import { contrasteArtificial } from '../../domain/qualidadeEditorial';

interface Anotacao { perfil: string; gatilho: string }
interface Perfil {
  titulo: string;
  regra: string;
  exemplo: string;
  tecnica: string;
  contrasteErrado: string;
  referencia: string;
}
interface Referencia { titulo: string; localizador: string; url?: string }
const indice = anotacoes as Record<string, Anotacao>;
const conceitos = perfis as Record<string, Perfil>;
const fontes = referencias as Record<string, Referencia>;

/**
 * O vínculo e o trecho são definidos editorialmente para cada item, sem fallback
 * por módulo ou escolha por palavra-chave. A aplicação ao item permanece individual.
 * Acrescentar didática não altera identidade, enunciado, gabarito ou proveniência.
 */
export function enriquecerEstudoReversoReal<T extends QuestaoEstudoReverso>(questao: T): T {
  const anotacao = indice[questao.id];
  const perfil = anotacao && conceitos[anotacao.perfil];
  const referencia = perfil && fontes[perfil.referencia];
  if (!anotacao || !perfil || !referencia) {
    throw new Error(`Estudo reverso sem revisão editorial: ${questao.id}`);
  }
  return {
    ...questao,
    gatilho: anotacao.gatilho,
    armadilhaBanca: [perfil.tecnica, questao.armadilhaBanca?.trim()].filter(Boolean).join(' '),
    versao_errada: questao.gabarito === 'C'
      ? (questao.versao_errada && !contrasteArtificial(questao.versao_errada)
          ? questao.versao_errada : perfil.contrasteErrado)
      : questao.versao_errada,
    fundamentacaoDidatica: {
      conceito: perfil.titulo,
      regra: perfil.regra,
      exemplo: perfil.exemplo,
      referencia,
    },
  };
}
