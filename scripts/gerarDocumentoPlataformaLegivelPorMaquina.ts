import fs from 'node:fs';
import path from 'node:path';
import { ALL_COURSE_MODULES } from '../src/content/registry';
import { SIMULADOS_REGISTRY, MINI_SIMULADOS_REGISTRY } from '../src/content/simuladosRegistry';
import { megaSimuladoCamara120Q } from '../src/content/questions/mega-simulado-camara-120q';
import { simuladoGeral180Q } from '../src/content/questions/simulado-geral-180q';
import { TEMAS_OFICIAIS_DISCURSIVA } from '../src/domain/discursiva/temasOficiais';
import { BASE_TERMOS_DICIONARIO } from '../src/domain/dicionario/baseTermos';
import { CASOS_INTEGRADORES } from '../src/domain/casosIntegradores/casosIntegradores';
import { MATRIZ_BLOCOS_EDITAL_VESPERA } from '../src/domain/folhaVespera/pegadinhasBlocos';
import { METRICAS_ACERVO } from '../src/domain/metrics/acervoMetricas';
import { classificarHabilidade } from '../src/domain/exercicios/classificacaoHabilidades';

/**
 * Script de Geração do Documento Único Legível por Máquina (JSON)
 * Plataforma "Heuller na Câmara" (HNC)
 * Consolida 100% da arquitetura, governança, recursos e todo o acervo teórico, técnico e prático.
 */

interface DocumentoMachineReadableHNC {
  $schema: string;
  metadados_documento: {
    titulo: string;
    identificador: string;
    versao_documento: string;
    versao_plataforma: string;
    data_geracao_iso: string;
    formato_serializacao: string;
    descricao: string;
    destinatario: string;
    repositorio_github: string;
    url_producao_vercel: string;
    status_visibilidade_repositorio: string;
    politica_seguranca_acesso: string;
  };
  concurso_e_edital: {
    instituicao: string;
    orgao_especifico: string;
    localidade: string;
    cargo: string;
    atribuicao_especialidade: string;
    codigo_cargo: number;
    banca_examinadora: string;
    numero_edital: string;
    data_edital: string;
    data_prova_oficial: string;
    marco_temporal_jurisprudencia_corte: string;
    dias_restantes_referencia: number;
    carga_horaria_estudo_liquida_sugerida: {
      dias_uteis_efetivos: number;
      horas_liquidas_diarias: number;
      total_horas_liquidas: number;
      distribuicao_percentual: {
        teoria_e_casos_integradores: string;
        repeticao_espacada_e_erros: string;
        simulados_e_discursiva: string;
      };
    };
    sistema_de_avaliacao_objetiva: {
      formato_itens: string;
      fator_correcao_liquido: string;
      penalizacao: string;
      simetria_gabarito: string;
      gestao_de_risco: string;
    };
    sistema_de_avaliacao_discursiva: {
      pontuacao_maxima: number;
      nota_minima_aprovacao: number;
      estrutura_provas: {
        questoes_teoricas: {
          quantidade: number;
          limite_linhas_cada: number;
          valor_cada_ponto: number;
          formula_oficial: string;
          item_edital: string;
        };
        peca_tecnica: {
          quantidade: number;
          limite_linhas: number;
          valor_pontos: number;
          formula_oficial: string;
          item_edital: string;
        };
      };
      formula_nota_final_discursiva: string;
      regras_eliminatorias: string[];
      examinadores_e_convergencia: string;
      modelo_aplicacao_real: string;
    };
  };
  arquitetura_e_engenharia: {
    stack_tecnologica: Record<string, string>;
    padroes_de_projeto: string[];
    sistema_de_design_papel_e_tinta: {
      conceito: string;
      superficies: Record<string, string>;
      tipografia: Record<string, string>;
      alvos_tateis_mobile: string;
      contraste_wcag: string;
      mobile_first: boolean;
    };
    politica_de_seguranca_e_acesso: {
      privacidade_codigo: string;
      autenticacao: string;
      modo_demonstracao: string;
      persistencia_e_privacidade_dados: string;
    };
    estrutura_de_navegacao_e_views: Record<string, string>;
    motores_cognitivos_e_aprendizagem: {
      motor_repeticao_espacada: string;
      caixas_leitner_dias: number[];
      teto_diario_itens: number;
      regra_dias_uteis: string;
      caderno_de_erros_hipercorrecao: string;
      modo_livre_sem_bloqueios: string;
    };
  };
  metricas_oficiais_acervo: typeof METRICAS_ACERVO & {
    total_verbetes_dicionario: number;
    total_temas_discursiva: number;
    total_casos_integradores: number;
    total_folhas_vespera: number;
  };
  conteudo_teorico_e_tecnico_completo: Array<{
    id: string;
    modulo_codigo: string;
    titulo: string;
    titulo_curto?: string;
    descricao?: string;
    fase: string;
    tempo_estimado_modulo?: string;
    total_submodulos: number;
    submodulos: Array<{
      id: string;
      numero_submodulo: string;
      titulo: string;
      tempo_leitura_minutos: number;
      nivel_cognitivo_predominante: string;
      antes_de_ler_conceitos_essenciais: Array<{
        termo: string;
        definicao?: string;
        significado?: string;
        exemploBiblioteca?: string;
        porQueImporta?: string;
      }>;
      texto_teorico_integral_markdown: string;
      quadro_comparativo: any;
      mnemonicos: {
        autores: any[];
        esquemas?: any[];
      };
      alertas_cebraspe: any[];
      micro_checkpoints_formativos: Array<{
        id: string;
        item: string;
        gabarito: 'C' | 'E';
        formato_exercicio?: string;
        habilidade_bloom?: string;
        justificativa: string;
        referencia?: string;
      }>;
    }>;
  }>;
  acervo_simulados_e_cadernos_cebraspe: Array<{
    id: string;
    tipo: 'regular_100q' | 'mini_30q' | 'mega_120q' | 'geral_180q';
    macro_modulo_id: string;
    numero_simulado: number | string;
    titulo: string;
    titulo_curto: string;
    subtitulo: string;
    descricao: string;
    submodulos_cobertos: string[];
    total_questoes: number;
    questoes: Array<{
      id: string;
      item: string;
      gabarito: 'C' | 'E';
      justificativa: string;
      ano?: number;
      banca?: string;
      orgao?: string;
      submoduloRef?: string;
      armadilhaTipo?: string;
    }>;
  }>;
  dicionario_tecnico_canonico_cebraspe: Array<{
    id: string;
    termo: string;
    area: string;
    modulo_relacionado?: string;
    conceito_canonico: string;
    armadilha_cebraspe: string;
    aplicacao_camara: string;
    fonte_referencia?: string;
    definicao_curta?: string;
    sinonimos?: string[];
  }>;
  prova_discursiva_oficial_cebraspe: {
    formulas_e_regras: {
      formula_questao_teorica: string;
      formula_peca_tecnica: string;
      formula_nota_final: string;
      criterio_minimo_aprovacao: string;
      fator_penalizacao_erro_questao: number;
      fator_penalizacao_erro_peca: number;
    };
    temas_oficiais: Array<{
      id: string;
      tipo: string;
      limite_linhas: number;
      titulo: string;
      enunciado: string;
      padrao_resposta_preliminar: string;
      criterios_pontuacao: Array<{
        item: string;
        pontuacao_maxima: number;
        descricao_esperada: string;
      }>;
    }>;
  };
  casos_integradores_interdisciplinares: Array<{
    id: string;
    numero: number;
    titulo: string;
    subtitulo: string;
    modulos_envolvidos: string[];
    modulos_codigos: string[];
    tema_geral: string;
    enunciado_contexto: string;
    total_itens: number;
    questoes: Array<{
      id: string;
      item: string;
      gabarito: 'C' | 'E';
      submoduloRef: string;
      editalRef: string;
      justificativa: string;
    }>;
  }>;
  folhas_de_vespera_48h_pegadinhas_capitais: Array<{
    id: string;
    titulo: string;
    sigla: string;
    descricao: string;
    modulos_relacionados: string[];
    total_pegadinhas: number;
    pegadinhas: Array<{
      id: string;
      topico: string;
      afirmacao_falsa: string;
      armadilha_cebraspe: string;
      gabarito_oficial: 'C' | 'E';
      fundamentacao_canonica: string;
      fonte_primaria: string;
      submodulo_ref: string;
    }>;
  }>;
}

function gerarDocumentoIntegral(): DocumentoMachineReadableHNC {
  const agora = new Date().toISOString();

  // 1. Processamento e Estruturação do Conteúdo Teórico Completo
  const modulosProcessados = ALL_COURSE_MODULES.map((macro) => {
    return {
      id: macro.id,
      modulo_codigo: macro.id.toUpperCase(),
      titulo: macro.titulo,
      titulo_curto: macro.titulo_curto || macro.titulo,
      descricao: macro.descricao,
      fase: macro.fase || 'regular',
      tempo_estimado_modulo: macro.tempo_estimado,
      total_submodulos: macro.modulosFilhos.length,
      submodulos: macro.modulosFilhos.map((sub) => {
        return {
          id: sub.id,
          numero_submodulo: sub.id.replace('sub-', '').replace('-', '.'),
          titulo: sub.titulo,
          tempo_leitura_minutos: sub.tempo_leitura || 15,
          nivel_cognitivo_predominante: sub.nivel_cognitivo || 'Analítico / Aplicado',
          antes_de_ler_conceitos_essenciais: (sub.antesDeLer || []).map((t: any) => ({
            termo: t.termo,
            definicao: t.definicao || t.significado || '',
            exemploBiblioteca: t.exemploBiblioteca || t.porQueImporta || '',
          })),
          texto_teorico_integral_markdown:
            sub.conteudo ||
            (sub as any).teoriaDensaMarkdown ||
            ((sub as any).secoes ? (sub as any).secoes.map((s: any) => s.conteudo).join('\n\n') : '') ||
            '',
          quadro_comparativo: sub.quadroComparativo || null,
          mnemonicos: {
            autores: (sub.mnemonicos && sub.mnemonicos.autores) || [],
            esquemas: (sub.mnemonicos && sub.mnemonicos.esquemas) || [],
          },
          alertas_cebraspe: sub.alertasCebraspe || [],
          micro_checkpoints_formativos: (sub.checkpoints || []).map((chk: any) => {
            const formato = chk.formato || 'X1';
            const habilidade = chk.nivelCognitivo || classificarHabilidade(formato);
            return {
              id: chk.id,
              item: chk.item,
              gabarito: chk.gabarito,
              formato_exercicio: formato,
              habilidade_bloom: habilidade,
              justificativa: chk.justificativa,
              referencia: chk.referencia || '',
            };
          }),
        };
      }),
    };
  });

  // 2. Processamento do Acervo de Simulados e Questões
  const simuladosProcessados: any[] = [];

  // 2.1 Simulados Regulares de 100 Questões
  for (const sim of SIMULADOS_REGISTRY) {
    simuladosProcessados.push({
      id: sim.id,
      tipo: 'regular_100q',
      macro_modulo_id: sim.macroModuloId,
      numero_simulado: sim.numero,
      titulo: sim.titulo,
      titulo_curto: sim.tituloCurto,
      subtitulo: sim.subtitulo,
      descricao: sim.descricao,
      submodulos_cobertos: sim.submodulosIds,
      total_questoes: sim.questoes.length,
      questoes: sim.questoes.map((q) => ({
        id: q.id,
        item: q.item,
        gabarito: q.gabarito,
        justificativa: q.justificativa,
        ano: q.ano,
        banca: q.banca,
        orgao: q.orgao,
        submoduloRef: q.submoduloRef,
        armadilhaTipo: q.armadilhaTipo,
      })),
    });
  }

  // 2.2 Mini Simulados Especiais (Órgãos Públicos - 30Q)
  for (const mini of MINI_SIMULADOS_REGISTRY) {
    simuladosProcessados.push({
      id: mini.id,
      tipo: 'mini_30q',
      macro_modulo_id: mini.macroModuloId,
      numero_simulado: mini.numero,
      titulo: mini.titulo,
      titulo_curto: mini.tituloCurto,
      subtitulo: mini.subtitulo,
      descricao: mini.descricao,
      submodulos_cobertos: mini.submodulosIds,
      total_questoes: mini.questoes.length,
      questoes: mini.questoes.map((q) => ({
        id: q.id,
        item: q.item,
        gabarito: q.gabarito,
        justificativa: q.justificativa,
        ano: q.ano,
        banca: q.banca,
        orgao: q.orgao,
        submoduloRef: q.submoduloRef,
        armadilhaTipo: q.armadilhaTipo,
      })),
    });
  }

  // 2.3 Mega Simulado Câmara 120Q
  simuladosProcessados.push({
    id: 'mega-simulado-camara-120q',
    tipo: 'mega_120q',
    macro_modulo_id: 'ALL',
    numero_simulado: 'MEGA-120Q',
    titulo: 'Mega Simulado Geral Câmara dos Deputados (120 Itens Inéditos Cebraspe)',
    titulo_curto: 'Mega Simulado 120Q',
    subtitulo: 'Prova Completa de Conhecimentos Específicos e Normativos da Câmara',
    descricao:
      'Simulado integral com cronômetro de 3h30min abrangendo todos os módulos de Biblioteconomia, Ciência da Informação, Catalogação, Classificação, Repositórios Digitais, Preservação, ABNT, Comunicação Científica e Processo Legislativo/RICD.',
    submodulos_cobertos: ['M1..M10', 'M15'],
    total_questoes: megaSimuladoCamara120Q.length,
    questoes: megaSimuladoCamara120Q.map((q) => ({
      id: q.id,
      item: q.item,
      gabarito: q.gabarito,
      justificativa: q.justificativa,
      ano: q.ano,
      banca: q.banca,
      orgao: q.orgao,
      submoduloRef: q.submoduloRef,
      armadilhaTipo: q.armadilhaTipo,
    })),
  });

  // 2.4 Simulado Geral de 180 Questões (Padrão Completo do Edital)
  simuladosProcessados.push({
    id: 'simulado-geral-180q',
    tipo: 'geral_180q',
    macro_modulo_id: 'ALL_GLOBAL',
    numero_simulado: 'GERAL-180Q',
    titulo: 'Simulado Geral Cebraspe 180 Questões (Básicos + Específicos)',
    titulo_curto: 'Simulado Geral 180Q',
    subtitulo: 'Caderno Integral no Padrão do Edital nº 1/2026 (50 Gerais + 130 Específicos)',
    descricao:
      'Avaliação máxima nos moldes do domingo de prova oficial: Língua Portuguesa, Língua Inglesa, Direito Administrativo, Tecnologia/Ciência de Dados e todo o bloco de Biblioteconomia com fator Cebraspe 1:1.',
    submodulos_cobertos: ['M1..M14', 'M15'],
    total_questoes: simuladoGeral180Q.length,
    questoes: simuladoGeral180Q.map((q) => ({
      id: q.id,
      item: q.item,
      gabarito: q.gabarito,
      justificativa: q.justificativa,
      ano: q.ano,
      banca: q.banca,
      orgao: q.orgao,
      submoduloRef: q.submoduloRef,
      armadilhaTipo: q.armadilhaTipo,
    })),
  });

  // 3. Processamento do Dicionário Técnico
  const dicionarioProcessado = BASE_TERMOS_DICIONARIO.map((term) => ({
    id: term.id,
    termo: term.termo,
    area: term.area,
    modulo_relacionado: term.moduloRelacionado,
    conceito_canonico: term.conceitoCanonico,
    armadilha_cebraspe: term.armadilhaCebraspe,
    aplicacao_camara: term.aplicacaoCamara,
    fonte_referencia: term.fonteReferencia || (term.fonte && term.fonte.referencia) || '',
    definicao_curta: term.definicao_curta || '',
    sinonimos: term.sinonimos || [],
  }));

  // 4. Montagem da Estrutura Raiz
  return {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    metadados_documento: {
      titulo:
        'Heuller na Câmara (HNC) — Especificação Integral da Plataforma, Arquitetura, Recursos e Conteúdo Teórico-Técnico',
      identificador: 'HNC-SPEC-INTEGRAL-MACHINE-READABLE-V3',
      versao_documento: '3.0.0',
      versao_plataforma: '3.0.0 (Plano v3 Concluído)',
      data_geracao_iso: agora,
      formato_serializacao: 'JSON RFC 8259 estrito',
      descricao:
        'Documento consolidado único, formal e legível por máquina contendo a totalidade da fundamentação teórica, técnica, doutrinária, normativa, arquitetural e funcional da plataforma educacional Heuller na Câmara.',
      destinatario: 'Heuller (Candidato Único - Vaga Direta)',
      repositorio_github: 'https://github.com/Heuller/hnc',
      url_producao_vercel: 'https://heuller.vercel.app',
      status_visibilidade_repositorio: 'Privado (Confidencialidade Máxima)',
      politica_seguranca_acesso:
        'Acesso pessoal restrito; eliminação definitiva do modo demonstração/convidado; persistência local autônoma e nuvem opcional.',
    },
    concurso_e_edital: {
      instituicao: 'Congresso Nacional',
      orgao_especifico: 'Câmara dos Deputados',
      localidade: 'Brasília / Distrito Federal',
      cargo: 'Analista Legislativo',
      atribuicao_especialidade: 'Documentação e Informação Legislativa (Biblioteconomia)',
      codigo_cargo: 5,
      banca_examinadora: 'Cebraspe (Centro Brasileiro de Pesquisa em Avaliação e Seleção e de Promoção de Eventos)',
      numero_edital: 'Edital nº 1, de 02 de Outubro de 2026',
      data_edital: '2026-10-02',
      data_prova_oficial: '2027-01-17',
      marco_temporal_jurisprudencia_corte: '2026-12-17 (30 dias antes da prova)',
      dias_restantes_referencia: 90,
      carga_horaria_estudo_liquida_sugerida: {
        dias_uteis_efetivos: 65,
        horas_liquidas_diarias: 3.5,
        total_horas_liquidas: 227.5,
        distribuicao_percentual: {
          teoria_e_casos_integradores: '40% (~91h)',
          repeticao_espacada_e_erros: '35% (~80h)',
          simulados_e_discursiva: '25% (~57h)',
        },
      },
      sistema_de_avaliacao_objetiva: {
        formato_itens: 'Sentenças declarativas para julgamento exclusivo entre Certo (C) e Errado (E)',
        fator_correcao_liquido: 'Nota Líquida = C - E (1 erro anula integralmente 1 acerto)',
        penalizacao: '-1,00 ponto por erro; 0,00 ponto em abstenção (deixar em branco)',
        simetria_gabarito: 'Aproximadamente 50% de assertivas Certas e 50% de assertivas Erradas',
        gestao_de_risco:
          'A abstenção em caso de dúvida genuína é instruída matematicamente como ferramenta de aprovação para maximizar a pontuação líquida',
      },
      sistema_de_avaliacao_discursiva: {
        pontuacao_maxima: 60.0,
        nota_minima_aprovacao: 30.0,
        estrutura_provas: {
          questoes_teoricas: {
            quantidade: 2,
            limite_linhas_cada: 20,
            valor_cada_ponto: 15.0,
            formula_oficial: 'NQi = NCi - 3 * (NEi / TLi)',
            item_edital: 'Edital nº 1/2026, item 9.8.5.1(d)',
          },
          peca_tecnica: {
            quantidade: 1,
            limite_linhas: 50,
            valor_pontos: 30.0,
            formula_oficial: 'NPT = NC - 6 * (NE / TL)',
            item_edital: 'Edital nº 1/2026, item 9.8.5.2(d)',
          },
        },
        formula_nota_final_discursiva: 'NFPD = NQ1 + NQ2 + NPT (Aprovação com NFPD >= 30,00)',
        regras_eliminatorias: [
          'Nota zero em qualquer questão ou peça com nota calculada negativa',
          'Nota zero em caso de fuga ao tema ou ausência de texto (TL = 0)',
          'Desconsideração absoluta de texto fora do espaço delimitado ou além do limite de linhas',
          'Qualquer marca, rubrica ou sinal que identifique o candidato anula compulsoriamente a prova',
        ],
        examinadores_e_convergencia:
          'Correção por dois examinadores independentes; nota final é a média das duas notas convergentes (diferença <= 25% da nota máxima); havendo divergência, há terceiro examinador.',
        modelo_aplicacao_real:
          'Texto estritamente manuscrito em língua portuguesa com caneta esferográfica de tinta preta e corpo transparente; rascunho não é considerado.',
      },
    },
    arquitetura_e_engenharia: {
      stack_tecnologica: {
        frontend_framework: 'React 19 (React Compiler & Server/Client components)',
        linguagem: 'TypeScript 5.x estrito',
        bundler_e_devserver: 'Vite 6 com rolldown e oxc',
        estilizacao: 'Tailwind CSS v4 com paleta Papel e Tinta e tokens centralizados',
        gerenciamento_de_estado: 'Zustand com middlewares de persistência local',
        validacao_esquemas: 'Zod para validação rigorosa de contratos de acervo e tipos',
        banco_e_autenticacao: 'Supabase (PostgreSQL 15, Auth JWT e Row Level Security)',
        pwa_offline: 'vite-plugin-pwa com ServiceWorker e precache completo de 333 assets',
        compilacao_matematica: 'KaTeX com renderização nativa de fórmulas sem LaTeX cru no DOM',
        icones_e_animacoes: 'Lucide React e Motion (Framer Motion v14)',
        testes_automatizados: 'Vitest com 83 suítes e 726 testes automatizados',
        linter_e_qualidade: 'Oxlint e TypeScript compiler (-b)',
        deploy_e_hospedagem: 'Vercel Edge Network integrado ao GitHub',
      },
      padroes_de_projeto: [
        'Single Source of Truth (Fonte única da verdade para métricas e conceitos)',
        'Domain-Driven Structure (Divisão estrita entre src/domain, src/content, src/components e src/pages)',
        'Defensive Local-First Architecture (Operação 100% autônoma sem dependência forçada de internet)',
        'Zero Horizontal Scroll Pattern (Garantia de layout vertical responsivo mobile-first)',
      ],
      sistema_de_design_papel_e_tinta: {
        conceito: 'Inspirado na tradição tipográfica editorial e impressos oficiais do Parlamento',
        superficies: {
          nivel_1: 'bg-theme-bg (Fundo base)',
          nivel_2: 'bg-surface (Cartões, painéis de leitura e contêineres principais)',
          nivel_3: 'bg-surface-2 (Sub-blocos, callouts editoriais e barras de ferramentas)',
        },
        tipografia: {
          serif: 'Source Serif 4 (Corpo de texto doutrinário e títulos)',
          sans: 'Inter (Interface de usuário, botões, metadados e navegação)',
          mono: 'JetBrains Mono (Notações CDU/CDD, tags MARC 21, código SQL, fórmulas e números)',
        },
        alvos_tateis_mobile: 'Mínimo de 44x44 pixels em todos os botões e áreas clicáveis',
        contraste_wcag: 'Conformidade integral WCAG 2.2 Nível AA em modo claro e escuro',
        mobile_first: true,
      },
      politica_de_seguranca_e_acesso: {
        privacidade_codigo: 'Repositório GitHub privado (Heuller/hnc) com push autenticado',
        autenticacao: 'Portão de login AuthGate com credenciais obrigatórias',
        modo_demonstracao: 'Excluído de ponta a ponta (loginAsGuest e botão de convidado removidos)',
        persistencia_e_privacidade_dados:
          'Dados de progresso armazenados primordialmente no dispositivo do estudante (LocalStorage/IndexedDB)',
      },
      estrutura_de_navegacao_e_views: {
        painel: 'Visão panorâmica, cartão Hoje de próxima ação e métricas imediatas',
        jornada: 'Trilha visual dos 15 módulos e 75 submódulos em Modo Livre irrestrito',
        teoria: 'Leitura doutrinária imersiva com Antes de Ler, tabelas e checkpoints',
        treinos: 'Central de exercícios, filtros cognitivos e simulados adaptativos',
        simulado: 'Ambiente de prova Cebraspe com fator 1:1, cronômetro e análise',
        discursiva: 'Prática de questões de 20L e peça técnica de 50L com espelhos e fórmulas oficiais',
        caderno_erros: 'Hipercorreção de falhas com reteste direcionado e ponderado',
        radar: 'Análise de armadilhas autorais Cebraspe e mapeamento de riscos',
        folha_vespera: 'Revisão intensiva de 48h com pegadinhas capitais em 5 blocos',
        progresso: 'Diagnóstico analítico, curva de retenção e projeção para 17/01/2027',
        edital: 'Matriz viva de correspondência entre edital e submódulos',
      },
      motores_cognitivos_e_aprendizagem: {
        motor_repeticao_espacada: 'Leitner Expansion Scheduler com caixas de expansão de intervalo',
        caixas_leitner_dias: [1, 3, 7, 14, 30],
        teto_diario_itens: 30,
        regra_dias_uteis: 'Agendamentos distribuídos estritamente em dias úteis (segunda a sexta)',
        caderno_de_erros_hipercorrecao:
          'Armazenamento prioritário de erros com alta confiança prévia para desconstrução de certezas ilusórias',
        modo_livre_sem_bloqueios:
          'Acesso livre a qualquer módulo, submódulo ou simulado sem dependência de gates ou cadeados',
      },
    },
    metricas_oficiais_acervo: {
      ...METRICAS_ACERVO,
      total_verbetes_dicionario: BASE_TERMOS_DICIONARIO.length,
      total_temas_discursiva: TEMAS_OFICIAIS_DISCURSIVA.length,
      total_casos_integradores: CASOS_INTEGRADORES.length,
      total_folhas_vespera: MATRIZ_BLOCOS_EDITAL_VESPERA.length,
    },
    conteudo_teorico_e_tecnico_completo: modulosProcessados,
    acervo_simulados_e_cadernos_cebraspe: simuladosProcessados,
    dicionario_tecnico_canonico_cebraspe: dicionarioProcessado,
    prova_discursiva_oficial_cebraspe: {
      formulas_e_regras: {
        formula_questao_teorica: 'NQi = NCi - 3 * (NEi / TLi)',
        formula_peca_tecnica: 'NPT = NC - 6 * (NE / TL)',
        formula_nota_final: 'NFPD = NQ1 + NQ2 + NPT',
        criterio_minimo_aprovacao: 'NFPD >= 30,00 pontos (em 60,00 possíveis)',
        fator_penalizacao_erro_questao: 3,
        fator_penalizacao_erro_peca: 6,
      },
      temas_oficiais: TEMAS_OFICIAIS_DISCURSIVA.map((t) => ({
        id: t.id,
        tipo:
          t.tipo === 'questao_20'
            ? 'Questão Teórica (até 20 linhas - 15,00 pts)'
            : 'Peça Técnica (até 50 linhas - 30,00 pts)',
        limite_linhas: t.limiteLinhas,
        titulo: t.titulo,
        enunciado: t.enunciado,
        padrao_resposta_preliminar: t.padraoRespostaPreliminar,
        criterios_pontuacao: (t.criteriosPontuacao || []).map((c) => ({
          item: c.item,
          pontuacao_maxima: c.pontuacaoMaxima,
          descricao_esperada: c.descricaoEsperada,
        })),
      })),
    },
    casos_integradores_interdisciplinares: CASOS_INTEGRADORES.map((ci) => ({
      id: ci.id,
      numero: ci.numero,
      titulo: ci.titulo,
      subtitulo: ci.subtitulo,
      modulos_envolvidos: ci.modulosEnvolvidos,
      modulos_codigos: ci.modulosCodigos,
      tema_geral: ci.temaGeral,
      enunciado_contexto: ci.enunciadoContexto,
      total_itens: ci.questoes.length,
      questoes: ci.questoes.map((q) => ({
        id: q.id,
        item: q.item,
        gabarito: q.gabarito,
        submoduloRef: q.submoduloRef,
        editalRef: q.editalRef,
        justificativa: q.justificativa,
      })),
    })),
    folhas_de_vespera_48h_pegadinhas_capitais: MATRIZ_BLOCOS_EDITAL_VESPERA.map((bloco) => ({
      id: bloco.id,
      titulo: bloco.titulo,
      sigla: bloco.sigla,
      descricao: bloco.descricao,
      modulos_relacionados: bloco.modulosRelacionados,
      total_pegadinhas: bloco.pegadinhas.length,
      pegadinhas: bloco.pegadinhas.map((p) => ({
        id: p.id,
        topico: p.topico,
        afirmacao_falsa: p.afirmacaoFalsa,
        armadilha_cebraspe: p.armadilhaCebraspe,
        gabarito_oficial: p.gabaritoOficial,
        fundamentacao_canonica: p.fundamentacaoCanonico,
        fonte_primaria: p.fontePrimaria,
        submodulo_ref: p.submoduloRef,
      })),
    })),
  };
}

// Execução e Gravação do Arquivo
console.log('Compilando documento completo legível por máquina da plataforma HNC...');
const documento = gerarDocumentoIntegral();

const outputPathDocs = path.resolve('docs', 'hnc_plataforma_completa_legivel_por_maquina.json');
const outputPathRoot = path.resolve('HNC_PLATAFORMA_COMPLETA_LEGIVEL_POR_MAQUINA.json');

const jsonString = JSON.stringify(documento, null, 2);

fs.writeFileSync(outputPathDocs, jsonString, 'utf-8');
console.log(`Documento gravado com sucesso em: ${outputPathDocs}`);

fs.writeFileSync(outputPathRoot, jsonString, 'utf-8');
console.log(`Cópia raiz gravada com sucesso em: ${outputPathRoot}`);

const stats = fs.statSync(outputPathDocs);
console.log(`Tamanho do arquivo: ${(stats.size / (1024 * 1024)).toFixed(2)} MB (${stats.size.toLocaleString('pt-BR')} bytes)`);
console.log(`Total de macro-módulos integrados: ${documento.conteudo_teorico_e_tecnico_completo.length}`);
console.log(`Total de submódulos teóricos integrados: ${documento.conteudo_teorico_e_tecnico_completo.reduce((a, m) => a + m.submodulos.length, 0)}`);
console.log(`Total de cadernos de simulado integrados: ${documento.acervo_simulados_e_cadernos_cebraspe.length}`);
console.log(`Total de questões de simulado integradas: ${documento.acervo_simulados_e_cadernos_cebraspe.reduce((a, s) => a + s.questoes.length, 0)}`);
console.log(`Total de verbetes do dicionário integrados: ${documento.dicionario_tecnico_canonico_cebraspe.length}`);
console.log(`Total de temas discursivos integrados: ${documento.prova_discursiva_oficial_cebraspe.temas_oficiais.length}`);
console.log(`Total de casos integradores: ${documento.casos_integradores_interdisciplinares.length}`);
console.log(`Total de blocos de folha de véspera: ${documento.folhas_de_vespera_48h_pegadinhas_capitais.length}`);
