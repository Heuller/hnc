// Vercel Serverless Function: /api/generate-adaptive-quiz
// Generates an adaptive Cebraspe C/E quiz targeting candidate's diagnosed weaknesses

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  const {
    quantidadeItens = 10,
    modoFoco = 'fraquezas_criticas',
    modulosAlvo = ['m1', 'm2', 'm4', 'm5', 'm8'],
    vulnerabilidades = [],
  } = req.body || {};

  // Limite estrito de segurança contra DoS / esgotamento de quota
  const qtdClamped = Math.min(20, Math.max(5, Number(quantidadeItens) || 10));

  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    // Retorno fallback quando a chave não estiver configurada no ambiente
    return res.status(200).json({
      itens: [
        {
          id: 'ia-adp-1',
          macroModuloId: 'm1',
          submoduloId: '1.1',
          topicoNome: 'Epistemologia e Conceito de Documento',
          item: 'Para Paul Otlet, a documentação distingue-se da biblioteconomia tradicional pelo fato de centrar-se na análise minuciosa do conteúdo das ideias e fatos registrados, independentemente do suporte físico.',
          gabarito: 'C',
          justificativa:
            'Otlet (1934) concebeu a documentação como a extensão universal da biblioteconomia com foco no princípio monográfico e na organização das informações factuais.',
          armadilhaBanca: 'Supor que Otlet restringia o documento a livros impressos encadernados.',
          autorOuNormaReferencia: 'Paul Otlet (1934) - Traité de Documentation',
        },
        {
          id: 'ia-adp-2',
          macroModuloId: 'm2',
          submoduloId: '2.1',
          topicoNome: 'Catalogação e RDA / IFLA LRM',
          item: 'No modelo IFLA LRM, os atributos de paginação e dimensões físicas de um exemplar concreto pertencem à entidade Obra.',
          gabarito: 'E',
          justificativa:
            'Paginação e dimensões físicas pertencem à Manifestação (ou ao Item concreto), enquanto a Obra é puramente a criação intelectual abstrata.',
          armadilhaBanca: 'Atribuir características físicas da Manifestação à entidade abstrata Obra.',
          autorOuNormaReferencia: 'IFLA Library Reference Model (LRM)',
        },
        {
          id: 'ia-adp-3',
          macroModuloId: 'm4',
          submoduloId: '4.1',
          topicoNome: 'Indexação e Medidas de Desempenho (Lancaster)',
          item: 'Em termos de revocação e precisão, uma busca por termos mais abrangentes em um vocabulário controlado tende a elevar a precisão dos resultados recuperados.',
          gabarito: 'E',
          justificativa:
            'Termos abrangentes elevam a revocação (trazem muitos documentos), mas reduzem a precisão ao introduzir ruído documental.',
          armadilhaBanca: 'Inverter os efeitos de termos genéricos entre revocação e precisão.',
          autorOuNormaReferencia: 'F. W. Lancaster (2004) - Indexação e Resumos',
        },
        {
          id: 'ia-adp-4',
          macroModuloId: 'm5',
          submoduloId: '5.1',
          topicoNome: 'Desenvolvimento de Coleções (Vergueiro)',
          item: 'Segundo Waldomiro Vergueiro, o estudo de comunidade é etapa dispensável na elaboração de uma política de desenvolvimento de coleções para bibliotecas legislativas.',
          gabarito: 'E',
          justificativa:
            'O estudo de comunidade e a identificação do perfil de usuários constituem a base indispensável para nortear todas as fases da formação e desenvolvimento de coleções.',
          armadilhaBanca: 'Qualificar o estudo de comunidade como dispensável ou secundário.',
          autorOuNormaReferencia: 'Waldomiro Vergueiro (1989) - Desenvolvimento de Coleções',
        },
        {
          id: 'ia-adp-5',
          macroModuloId: 'm8',
          submoduloId: '8.1',
          topicoNome: 'Lei de Acesso à Informação (Lei 12.527/2011)',
          item: 'Informações que possam colocar em risco a segurança do Presidente da República e de seu cônjuge são classificadas como reservadas e seu sigilo perdura até o término do mandato em exercício.',
          gabarito: 'C',
          justificativa:
            'Conforme o art. 24, § 2º, da LAI, tais informações são reservadas e seu sigilo é mantido até o término do mandato.',
          armadilhaBanca: 'Afirmar que essas informações seriam obrigatoriamente ultrassecretas com prazo fixo de 25 anos.',
          autorOuNormaReferencia: 'Lei nº 12.527/2011, art. 24, § 2º',
        },
      ].slice(0, Math.min(qtdClamped, 5)),
    });
  }

  try {
    const prompt = `
Você é a BANCA EXAMINADORA OFICIAL DO CEBRASPE (CESPE/UnB) para o Concurso da Câmara dos Deputados (Analista Legislativo), atuando com máximo rigor técnico em Conhecimentos Específicos (Biblioteconomia, Documentação, Gestão da Informação, Legislação) e Conhecimentos Gerais (Língua Portuguesa, Raciocínio Lógico-Matemático, Língua Inglesa).
Sua missão é formular um SIMULADO ADAPTATIVO DE FRAQUEZAS com exatamente ${qtdClamped} itens no formato CERTO/ERRADO, focando nos módulos solicitados (${modulosAlvo.join(', ')}).

DIAGNÓSTICO DAS VULNERABILIDADES DO CANDIDATO:
- Módulos prioritários: ${modulosAlvo.join(', ')}
- Pontos cegos diagnosticados: ${JSON.stringify(vulnerabilidades)}
- Modo de foco: ${modoFoco}

DIRETRIZES DA BANCA CEBRASPE:
1. Formulação de itens rigorosos, elegantes e de nível superior (padrão concurso da Câmara dos Deputados). Cada item deve ser uma assertiva puramente DECLARATIVA para julgamento Certo ou Errado (sem perguntas interrogativas e sem alternativas A-E).
2. Equilíbrio estatístico saudável entre assertivas Certas (C) e Erradas (E).
3. Distratores sofisticados da banca Cebraspe para itens ERRADOS:
   - Inversão causal/sintática ou de conceitos correlatos (desbastamento x descarte, revocação x precisão, oração concessiva x adversativa, causa x consequência).
   - Paráfrase infiel: reescrita gramaticalmente correta, porém com alteração do sentido original.
   - Generalização indevida: uso de termos absolutos ("sempre", "todos", "em qualquer hipótese", "invariavelmente") em regras que comportam exceções.
   - Restrição indevida: uso de termos limitantes ("apenas", "somente", "exclusivamente", "limita-se a") em conceitos de escopo abrangente.
   - Adulteração de dispositivos normativos, prazos legais ou regras gramaticais estritas.
4. REGRA ANTI-ALUCINAÇÃO INEGOCIÁVEL (BLOQUEIO SISTÊMICO):
   - Todo item DEVE obrigatoriamente referenciar uma fonte primária canônica verificável:
     * Língua Portuguesa: Celso Cunha & Lindley Cintra (2008), Evanildo Bechara (2009), Celso Pedro Luft, Domingos Paschoal Cegalla, Manual de Redação da Presidência da República (3ª ed. 2018), VOLP/ABL.
     * Biblioteconomia e Ciência da Informação: Paul Otlet (1934), Suzanne Briet (1951), Waldomiro Vergueiro (1989), F. W. Lancaster (2004), S. R. Ranganathan, IFLA LRM, RDA, AACR2, ABNT NBR (com número).
     * Legislação: CF/88 (com artigo), Lei nº 12.527/2011 (LAI com artigo), Lei nº 9.610/1998, Regimento Interno da Câmara (com artigo).
     * Raciocínio Lógico: George Boole (1854), Philip Johnson-Laird (1983), Augustus De Morgan.
     * Língua Inglesa: Raymond Murphy, Michael Swan, Randolph Quirk.
   - NUNCA use termos genéricos como "jurisprudência Cebraspe", "edital da Câmara", "internet", "doutrina geral" ou "vários autores". Itens sem fonte primária canônica serão sumariamente rejeitados.
5. Retorne EXCLUSIVAMENTE um objeto JSON válido com a seguinte estrutura:

{
  "itens": [
    {
      "id": "ia-adp-1",
      "macroModuloId": "m13",
      "submoduloId": "13.1",
      "topicoNome": "Título do Tópico",
      "item": "Texto da assertiva declarativa para julgamento...",
      "gabarito": "C",
      "justificativa": "Justificativa analítica com citação da regra/autor...",
      "armadilhaBanca": "Distrator ou técnica Cebraspe aplicada...",
      "autorOuNormaReferencia": "Autor clássico com obra/ano ou dispositivo de lei/gramática"
    }
  ]
}
`;

    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey,
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.3,
            responseMimeType: 'application/json',
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.statusText}`);
    }

    const json = await response.json();
    const textOutput = json.candidates?.[0]?.content?.parts?.[0]?.text;
    const parsed = JSON.parse(textOutput);

    return res.status(200).json(parsed);
  } catch (err: any) {
    console.error('Erro na função generate-adaptive-quiz:', err);
    return res.status(200).json({
      itens: [
        {
          id: 'ia-adp-fallback-1',
          macroModuloId: 'm1',
          submoduloId: '1.1',
          topicoNome: 'Conceito de Documento (Suzanne Briet)',
          item: 'Na doutrina de Suzanne Briet, o antílope selvagem livre na savana já constitui um documento primário independentemente de qualquer ação humana.',
          gabarito: 'E',
          justificativa:
            'Para Briet, o animal só se torna documento quando capturado, descrito e exposto sob a ação documentária.',
          armadilhaBanca: 'Confundir o ser da natureza com o objeto documental processado.',
          autorOuNormaReferencia: "Suzanne Briet (1951) - Qu'est-ce que la documentation?",
        },
      ],
    });
  }
}
