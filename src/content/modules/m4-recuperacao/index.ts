import type { MacroModulo } from '../../../domain/types';
import { submodulo41 } from './sub-4-1';
import { submodulo42 } from './sub-4-2';
import { submodulo43 } from './sub-4-3';
import { submodulo44 } from './sub-4-4';

export const moduloM4Recuperacao: MacroModulo = {
  id: 'm4',
  codigo: 'M4',
  numero: 4,
  titulo: 'Recuperação da Informação, Fontes e Usuários',
  titulo_curto: 'Recuperação da Informação',
  subtitulo: 'Estratégias de Busca, Álgebra Booleana, Fontes Jurídicas/Legislativas, Serviço de Referência e Estudos de Usuários',
  descricao: 'Estudo aprofundado dos sistemas de busca e recuperação de informação (Mooers, Salton, Baeza-Yates), lógica booleana, arquivo invertido e metabuscadores; tipologia das fontes de informação gerais e especializadas (Cunha, Grogan) e avaliação crítica; o tripé da informação jurídica (legislação, doutrina e jurisprudência), a estrutura do Diário Oficial da União e o portal LexML Brasil; o serviço de referência e suas 8 etapas (Grogan), a Disseminação Seletiva da Informação (DSI de Luhn), modelos teóricos de estudos de usuários (Wilson, Dervin, Belkin, Kuhlthau) e competência informacional.',
  status: 'disponivel',
  simuladoDisponivel: true,
  modulosFilhos: [
    submodulo41,
    submodulo42,
    submodulo43,
    submodulo44,
  ],
};
