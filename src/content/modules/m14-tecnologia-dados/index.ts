import type { MacroModulo } from '../../../domain/types';
import { submodulo141 } from './sub-14-1';
import { submodulo142 } from './sub-14-2';
import { submodulo143 } from './sub-14-3';
import { submodulo144 } from './sub-14-4';

export const moduloM14TecnologiaDados: MacroModulo = {
  id: 'm14',
  codigo: 'M14',
  numero: 14,
  titulo: 'Tecnologia da Informação e Dados',
  titulo_curto: 'Tecnologia da Informação e Dados',
  subtitulo: 'Microsoft 365, Redes e Segurança da Informação, Inteligência Artificial, Engenharia de Prompts, Governança Ética, Ciência e Visualização de Dados (Power BI) e Storytelling',
  descricao: 'Módulo canônico exaustivo estruturado com rigor absoluto conforme o item 5 de Conhecimentos Básicos do Edital nº 1/2026 da Câmara dos Deputados (Cebraspe). Cobre integralmente os 8 tópicos editalícios: Suíte Microsoft 365 (Word, Excel com fórmulas, referências e PROCX, PowerPoint, OneDrive e arquivos sob demanda); Redes de computadores, Internet, intranet, ferramentas de navegação e correio eletrônico (SMTP, IMAP, POP3); Ferramentas corporativas de comunicação e colaboração (Microsoft Teams e Google Meet); Segurança da informação, ameaças cibernéticas (malware, vírus, worms, ransomware, phishing, pharming), mecanismos de defesa (antivírus, firewall, MFA) e procedimentos de backup (completo, diferencial, incremental, regra 3-2-1 e air-gap); Inteligência artificial, machine learning (supervisionado, não supervisionado, por reforço/RLHF), arquitetura Transformer e LLMs; Engenharia de prompts (Zero-shot, Few-shot, Chain-of-Thought, RAG); Ética digital no serviço público, LGPD e supervisão humana (human-in-the-loop); Ciência de dados, tipologia de dados, atributos categóricos/numéricos, métricas de estatística descritiva e pipelines ETL/ELT; e Visualização de dados, gramática de gráficos (histograma, boxplot, dispersão), ferramentas analíticas (Microsoft Power BI, DAX, Power Query) e storytelling com dados segundo Edward Tufte e Cole Knaflic.',
  status: 'disponivel',
  trilha: 'complementar',
  avisoVerificacao: 'Conhecimentos Básicos Oficiais (Edital nº 1/2026) — Conteúdo canônico de Tecnologia da Informação e Dados estruturado segundo a banca Cebraspe',
  simuladoDisponivel: true,
  modulosFilhos: [
    submodulo141,
    submodulo142,
    submodulo143,
    submodulo144,
  ],
};
