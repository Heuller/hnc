import type { MacroModulo } from '../../../domain/types';
import { submodulo101 } from './sub-10-1';
import { submodulo102 } from './sub-10-2';
import { submodulo103 } from './sub-10-3';
import { submodulo104 } from './sub-10-4';

export const moduloM10Legislativo: MacroModulo = {
  id: 'm10',
  codigo: 'M10',
  numero: 10,
  titulo: 'Legislação Federal e Contexto Legislativo',
  subtitulo: 'Regimento Interno da Câmara dos Deputados, Processo Legislativo Constitucional, LAI, LGPD e Legislação do Livro',
  descricao: 'Estudo aprofundado do arcabouço normativo e do ambiente institucional da Câmara dos Deputados: a estrutura do Regimento Interno (RICD) e do Regimento Comum (RCCN) com o Centro de Documentação e Informação (Cedi) e a Rede Virtual de Bibliotecas (RVBI); o processo legislativo constitucional do Art. 59 da CF/88 e as espécies normativas (PECs, Leis Complementares, Ordinárias e MPVs); a Lei de Acesso à Informação (Lei 12.527/11) com transparência ativa/passiva e graus de sigilo, e a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/18); e a legislação sobre bibliotecas, a Lei do Depósito Legal (Lei 10.994/04), o Código de Ética do CFB e a histórica Lei do Sistema Nacional de Bibliotecas Escolares (Lei 14.837/2024).',
  status: 'disponivel',
  simuladoDisponivel: true,
  modulosFilhos: [
    submodulo101,
    submodulo102,
    submodulo103,
    submodulo104,
  ],
};
