import type { MacroModulo } from '../../../domain/types';
import { submodulo111 } from './sub-11-1';
import { submodulo112 } from './sub-11-2';
import { submodulo113 } from './sub-11-3';
import { submodulo114 } from './sub-11-4';
import { submodulo115 } from './sub-11-5';
import { submodulo116 } from './sub-11-6';
import { submodulo117 } from './sub-11-7';
import { submodulo118 } from './sub-11-8';
import { submodulo119 } from './sub-11-9';
import { submodulo1110 } from './sub-11-10';
import { submodulo1111 } from './sub-11-11';
import { submodulo1112 } from './sub-11-12';

export const moduloM11DireitoAdministrativo: MacroModulo = {
  id: 'm11',
  codigo: 'M11',
  numero: 11,
  titulo: 'Noções de Direito Administrativo e Administração Pública',
  titulo_curto: 'Direito Administrativo',
  subtitulo: 'Regime Jurídico-Administrativo, Atos, Agentes (Lei 8.112/90), Processo (Lei 9.784/99), Poderes, Responsabilidade, Improbidade (Lei 14.230/2021), Governança (Dec. 9.203/2017), Licitações e Contratos (Lei 14.133/2021), LAI e LGPD',
  descricao: 'Módulo canônico exaustivo estruturado com rigor absoluto conforme o Edital nº 1/2026 da Câmara dos Deputados (Cebraspe). Abrange integralmente os 12 tópicos formais do edital: Estado, princípios e organização administrativa (direta e indireta); atos administrativos, requisitos (COFIFOMOB), atributos (PATI), invalidação e responsabilidade por pareceres; regime dos servidores públicos federais (Lei nº 8.112/1990); processo administrativo federal (Lei nº 9.784/1999) e direito disciplinar; poderes administrativos e controle do abuso; responsabilidade civil objetiva do Estado (art. 37, § 6º da CF/88 e Tema 940 do STF); o novo regime da improbidade administrativa (Lei nº 14.230/2021 com extinção da culpa e dolo específico); evolução dos modelos de gestão (patrimonialismo, burocracia weberiana, gerencialismo/NPM, nova governança pública/NPG e cadeia de valor público); governança federal (Decreto nº 9.203/2017 e modelo das três linhas); nova lei de licitações e contratos administrativos (Lei nº 14.133/2021, modalidades, ETP, termo de referência e fiscalização contratual); e o binômio transparência e privacidade no serviço público com a LAI (Lei nº 12.527/2011) e a LGPD (Lei nº 13.709/2018).',
  status: 'disponivel',
  trilha: 'complementar',
  avisoVerificacao: 'Conhecimentos Básicos Oficiais (Edital nº 1/2026) — Conteúdo canônico exaustivo, amparado na doutrina majoritária e na jurisprudência vinculante do STF, STJ e TCU para o Cebraspe',
  simuladoDisponivel: true,
  modulosFilhos: [
    submodulo111,
    submodulo112,
    submodulo113,
    submodulo114,
    submodulo115,
    submodulo116,
    submodulo117,
    submodulo118,
    submodulo119,
    submodulo1110,
    submodulo1111,
    submodulo1112,
  ],
};
