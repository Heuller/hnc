import type { MacroModulo } from '../../../domain/types';
import { submodulo111 } from './sub-11-1';
import { submodulo112 } from './sub-11-2';
import { submodulo113 } from './sub-11-3';
import { submodulo114 } from './sub-11-4';

export const moduloM11RaciocinioLogico: MacroModulo = {
  id: 'm11',
  codigo: 'M11',
  numero: 11,
  titulo: 'Raciocínio Lógico-Matemático',
  titulo_curto: 'Raciocínio Lógico (RLM)',
  subtitulo: 'Lógica Proposicional, Equivalências, Tabela-Verdade, Diagramas e Argumentação para o Cebraspe',
  descricao: 'Módulo de alta densidade metodológica baseado na Teoria dos Modelos Mentais (Philip Johnson-Laird) e no Controle de Sobrecarga Cognitiva (John Sweller), concebido para aprender Raciocínio Lógico do zero absoluto: identificação de proposições e o Método do Ponto Único nos conectivos lógicos; a anatomia da condicional Cebraspe (P → Q), condição suficiente vs necessária e as equivalências magnas (Contrapositiva e NÉOU); as técnicas de negação com a regra MANÉ e o método PEA + NÃO para quantificadores categóricos (Todo, Nenhum, Algum) com diagramas de Euler-Venn; e a avaliação de argumentos dedutivos, Modus Ponens, Modus Tollens, problemas de verdade/mentira e questões reais aplicadas na Câmara dos Deputados.',
  status: 'disponivel',
  trilha: 'complementar',
  avisoVerificacao: 'Trilha Complementar (Gerais provisórios até publicação do edital) · Conteúdo elaborado com assistência de IA e fontes primárias canônicas',
  simuladoDisponivel: true,
  modulosFilhos: [
    submodulo111,
    submodulo112,
    submodulo113,
    submodulo114,
  ],
};
