// Vercel Serverless Function: /api/generate-adaptive-quiz
import {
  validateAuth,
  checkRateLimit,
  fetchWithTimeout,
  sendApiError,
  generateAdaptiveQuizSchema,
} from './_lib/guard.js';
import { getGeminiGenerateContentUrl } from './_lib/model.js';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return sendApiError(res, 405, 'Método não permitido.', 'METHOD_NOT_ALLOWED');
  }

  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  // 1. Validação de Autenticação (F-01.a)
  const { auth, error: authError } = await validateAuth(req);
  if (authError || !auth) {
    return sendApiError(res, authError?.status || 401, authError?.message || 'Não autorizado.', authError?.code || 'UNAUTHORIZED');
  }

  // 2. Limite de Taxa (F-01.b)
  const rateLimit = await checkRateLimit(auth.userId, 'generate-adaptive-quiz');
  if (!rateLimit.allowed) {
    if (rateLimit.retryAfterSeconds) {
      res.setHeader('Retry-After', String(rateLimit.retryAfterSeconds));
    }
    return sendApiError(
      res,
      429,
      'Limite de requisições excedido. Aguarde antes de gerar um novo simulado adaptativo.',
      'RATE_LIMIT_EXCEEDED'
    );
  }

  // 3. Validação do Corpo com Zod (F-01.c)
  const parseResult = generateAdaptiveQuizSchema.safeParse(req.body);
  if (!parseResult.success) {
    const errorMsg = parseResult.error.issues[0]?.message || 'Parâmetros inválidos.';
    return sendApiError(res, 400, errorMsg, 'VALIDATION_ERROR');
  }

  const {
    quantidadeItens = 10,
    modoFoco = 'fraquezas_criticas',
    modulosAlvo = ['m1', 'm2', 'm4', 'm5', 'm8'],
    vulnerabilidades = [],
  } = parseResult.data;

  const qtdClamped = Math.min(20, Math.max(5, quantidadeItens));

  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    // Retorno fallback quando sem chave (F-01 e F-06)
    return res.status(200).json({
      modo: 'offline',
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
          armadilhaBanca: 'Inverter a relação inversamente proporcional entre revocação e precisão postulada por Lancaster.',
          autorOuNormaReferencia: 'F. W. Lancaster - Indexação e Resumos',
        },
      ],
    });
  }

  const prompt = `
Você é a BANCA EXAMINADORA CEBRASPE (CESPE/UnB) de Biblioteconomia para o Concurso de Analista Legislativo da Câmara dos Deputados.
Sua missão é redigir exatamente ${qtdClamped} assertivas INÉDITAS de julgamento CERTO ou ERRADO (C/E) personalizadas para diagnosticar e sanar as vulnerabilidades do candidato.

DIRETRIZES DA BANCA:
- Modo de Foco: ${modoFoco}
- Módulos Alvo: ${modulosAlvo.join(', ')}
- Vulnerabilidades / Pontos Cegos diagnosticados:
${vulnerabilidades.length > 0 ? vulnerabilidades.map((v: string) => `  * ${v}`).join('\n') : '  * Conceitos fundamentais e distinções canônicas de Biblioteconomia'}

ESTILO CEBRASPE:
- Redação concisa, objetiva, acadêmica, com 25 a 45 palavras por assertiva.
- Equilíbrio rigoroso: aproximadamente 50% CERTO e 50% ERRADO.
- Assertivas ERRADAS devem conter sutis distratores doutrinários ('cascas de banana' típicas do Cebraspe: generalização indevida, inversão conceitual, anacronismo ou restrição absoluta).
- Justificativa técnica irrefutável citando autor canônico (Otlet, Briet, Borko, Lancaster, Vergueiro, Mey, Cunha & Lemos, RDA, IFLA LRM, ABNT ou LAI).

Retorne ESTRITAMENTE um objeto JSON com a seguinte estrutura:
{
  "itens": [
    {
      "id": "ia-adp-1",
      "macroModuloId": "m1",
      "submoduloId": "1.1",
      "topicoNome": "Nome do Tópico",
      "item": "Texto da assertiva para julgamento Certo ou Errado...",
      "gabarito": "C",
      "justificativa": "Justificativa detalhada com a fundamentação doutrinária...",
      "armadilhaBanca": "Qual o distrator ou ponto cego explorado...",
      "autorOuNormaReferencia": "Autor ou norma de referência"
    }
  ]
}
`;

  try {
    const geminiUrl = getGeminiGenerateContentUrl();

    const response = await fetchWithTimeout(geminiUrl, {
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
    }, 20000);

    if (!response.ok) {
      throw new Error(`Gemini status ${response.status}`);
    }

    const data: any = await response.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) throw new Error('Resposta vazia');

    const parsed = JSON.parse(rawText);
    return res.status(200).json({ ...parsed, modo: 'online' });
  } catch (error: any) {
    console.error('[Generate Adaptive Quiz Error]', error?.message);
    return sendApiError(res, 500, 'Falha ao gerar simulado adaptativo.', 'GENERATION_FAILED');
  }
}
