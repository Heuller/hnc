import type { MacroModulo } from '../../../domain/types';
import { submodulo131 } from './sub-13-1';

export const moduloM13Portugues: MacroModulo = {
  id: 'm13',
  codigo: 'M13',
  numero: 13,
  titulo: 'Língua Portuguesa',
  subtitulo: 'Linguística Textual, Coesão, Reescritura, Sintaxe Avançada e Redação Oficial para o Cebraspe',
  descricao:
    'Módulo estruturado sob rigor metodológico e fundamentado em referências canônicas (Celso Cunha & Lindley Cintra, Evanildo Bechara, Ingedore Koch e Manual de Redação da Presidência da República 2018), com foco cirúrgico nas peculiaridades das provas do Cebraspe para o Poder Legislativo: distinção científica entre compreensão e interpretação, rastreamento anafórico de pronomes demonstrativos e do pronome cujo, relações semânticas de operadores argumentativos (concessão vs adversidade, pois causal vs conclusivo), protocolos de reescritura com tríade correção/sentido/coerência, sintaxe de concordância e regência com partícula "se", regência da crase, e normas atualizadas de redação oficial.',
  status: 'disponivel',
  trilha: 'complementar',
  avisoVerificacao:
    'Trilha Complementar (Gerais provisórios até publicação do edital) · Conteúdo elaborado com assistência de IA e fontes primárias canônicas',
  simuladoDisponivel: true,
  modulosFilhos: [
    submodulo131,
  ],
};
