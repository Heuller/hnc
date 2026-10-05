import type { MacroModulo } from '../../../domain/types';
import { submodulo51 } from './sub-5-1';
import { submodulo52 } from './sub-5-2';
import { submodulo53 } from './sub-5-3';
import { submodulo54 } from './sub-5-4';

export const moduloM5Gestao: MacroModulo = {
  id: 'm5',
  codigo: 'M5',
  numero: 5,
  titulo: 'Gestão de Unidades de Informação e Coleções',
  titulo_curto: 'Gestão de Bibliotecas',
  subtitulo: 'Planejamento estratégico, CRM aplicado a serviços de informação, curadoria, desenvolvimento de coleções e inteligência organizacional',
  descricao: 'Estudo aprofundado dos processos gerenciais e de inteligência em unidades de informação: planejamento estratégico (Almeida), avaliação e indicadores de desempenho (Lancaster); CRM aplicado a serviços de informação (Paul Greenberg: operacional, analítico e colaborativo), personalização e DSI (Eirão & Cunha), curadoria de informação (Arthur Bezerra) e elaboração de dossiês e panoramas (Candido); modelo cíclico de desenvolvimento de coleções (Vergueiro); e gestão do conhecimento e inteligência organizacional (Choo, Nonaka & Takeuchi).',
  status: 'disponivel',
  simuladoDisponivel: true,
  modulosFilhos: [
    submodulo51,
    submodulo52,
    submodulo53,
    submodulo54,
  ],
};
