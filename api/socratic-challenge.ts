// Vercel Serverless Function: /api/socratic-challenge
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

const rateLimitCache = new Map<string, number[]>();
const RATE_LIMIT_10M_MAX = 20;
const RATE_LIMIT_10M_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_24H_MAX = 200;
const RATE_LIMIT_24H_WINDOW_MS = 24 * 60 * 60 * 1000;

interface AuthValidationResult {
  userId: string;
  userEmail?: string;
}

async function validateAuth(req: any): Promise<{ auth?: AuthValidationResult; error?: { status: number; message: string; code: string } }> {
  const authHeader = req.headers?.authorization || req.headers?.Authorization;

  if (!authHeader || typeof authHeader !== 'string' || !authHeader.startsWith('Bearer ')) {
    return {
      error: {
        status: 401,
        message: 'Acesso não autorizado. Token de sessão ausente ou inválido.',
        code: 'UNAUTHORIZED',
      },
    };
  }

  const token = authHeader.replace(/^Bearer\s+/i, '').trim();
  if (!token) {
    return {
      error: {
        status: 401,
        message: 'Token de autenticação vazio.',
        code: 'UNAUTHORIZED',
      },
    };
  }

  if (process.env.NODE_ENV === 'test' && token === 'mock-valid-token') {
    return {
      auth: {
        userId: 'test-user-id',
        userEmail: 'test@hnc.internal',
      },
    };
  }

  const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const serviceKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    process.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !serviceKey) {
    if (process.env.NODE_ENV === 'development') {
      return {
        auth: {
          userId: 'dev-local-user',
          userEmail: 'dev@hnc.internal',
        },
      };
    }
    return {
      error: {
        status: 401,
        message: 'Serviço de autenticação do backend não configurado.',
        code: 'AUTH_NOT_CONFIGURED',
      },
    };
  }

  try {
    const supabase = createClient(supabaseUrl, serviceKey);
    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data?.user) {
      return {
        error: {
          status: 401,
          message: 'Sessão inválida ou expirada. Faça login novamente.',
          code: 'INVALID_SESSION',
        },
      };
    }

    return {
      auth: {
        userId: data.user.id,
        userEmail: data.user.email,
      },
    };
  } catch {
    return {
      error: {
        status: 401,
        message: 'Falha ao validar credenciais da sessão.',
        code: 'AUTH_VALIDATION_FAILED',
      },
    };
  }
}

async function checkRateLimit(
  userId: string,
  endpoint: string
): Promise<{ allowed: boolean; retryAfterSeconds?: number }> {
  const now = Date.now();
  const key = `${userId}:${endpoint}`;

  const timestamps = rateLimitCache.get(key) || [];
  const active24h = timestamps.filter((t) => now - t < RATE_LIMIT_24H_WINDOW_MS);

  if (active24h.length >= RATE_LIMIT_24H_MAX) {
    const oldest = active24h[0];
    const retryAfter = Math.ceil((oldest + RATE_LIMIT_24H_WINDOW_MS - now) / 1000);
    return { allowed: false, retryAfterSeconds: Math.max(1, retryAfter) };
  }

  const active10m = active24h.filter((t) => now - t < RATE_LIMIT_10M_WINDOW_MS);
  if (active10m.length >= RATE_LIMIT_10M_MAX) {
    const oldest = active10m[0];
    const retryAfter = Math.ceil((oldest + RATE_LIMIT_10M_WINDOW_MS - now) / 1000);
    return { allowed: false, retryAfterSeconds: Math.max(1, retryAfter) };
  }

  active24h.push(now);
  rateLimitCache.set(key, active24h);
  return { allowed: true };
}

async function fetchWithTimeout(url: string, options: RequestInit, timeoutMs = 20000): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timer);
  }
}

function sendApiError(res: any, status: number, message: string, code: string) {
  return res.status(status).json({
    error: message,
    code,
    timestamp: new Date().toISOString(),
  });
}

function getGeminiGenerateContentUrl(): string {
  const model = process.env.GEMINI_MODEL || 'gemini-1.5-flash';
  return `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
}

const socraticChallengeSchema = z.object({
  acao: z.enum(['iniciar', 'responder']),
  assertiva: z.string().min(5).max(1000),
  gabarito: z.enum(['C', 'E']),
  escolhaCandidato: z.enum(['C', 'E', 'BRANCO']),
  argumentoCandidato: z.string().max(2000).optional(),
  macroModuloTitulo: z.string().max(100).optional(),
  justificativa: z.string().max(2000).optional(),
  armadilhaBanca: z.string().max(1000).optional(),
});

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
  const rateLimit = await checkRateLimit(auth.userId, 'socratic-challenge');
  if (!rateLimit.allowed) {
    if (rateLimit.retryAfterSeconds) {
      res.setHeader('Retry-After', String(rateLimit.retryAfterSeconds));
    }
    return sendApiError(
      res,
      429,
      'Limite de requisições excedido (20 consultas a cada 10 min). Aguarde antes de tentar novamente.',
      'RATE_LIMIT_EXCEEDED'
    );
  }

  // 3. Validação do Corpo com Zod (F-01.c)
  const parseResult = socraticChallengeSchema.safeParse(req.body);
  if (!parseResult.success) {
    const errorMsg = parseResult.error.issues[0]?.message || 'Parâmetros inválidos.';
    return sendApiError(res, 400, errorMsg, 'VALIDATION_ERROR');
  }

  const {
    acao,
    assertiva,
    gabarito,
    escolhaCandidato,
    argumentoCandidato,
    macroModuloTitulo,
    justificativa,
    armadilhaBanca,
  } = parseResult.data;

  const gabaritoExtenso = gabarito === 'C' ? 'CERTO' : 'ERRADO';
  const escolhaExtensa = escolhaCandidato === 'C' ? 'CERTO' : escolhaCandidato === 'E' ? 'ERRADO' : 'EM BRANCO';

  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

  // Fallback Neutro (Regra F-06): sem chave ou quando IA offline
  if (!apiKey) {
    if (acao === 'iniciar') {
      return res.status(200).json({
        modo: 'offline',
        parecer: {
          tesePrincipal: `Modo offline: O gabarito registrado no acervo é ${gabaritoExtenso}. Analise os termos estruturantes da assertiva com base nos manuais de referência do edital.`,
          pontoCegoIdentificado: armadilhaBanca
            ? `Ponto cego registrado: ${armadilhaBanca}`
            : `A escolha ${escolhaExtensa} deve ser confrontada com as distinções canônicas de doutrina.`,
          fundamentacao: {
            autor: 'Doutrina Clássica e Normas Oficiais de Biblioteconomia',
            obraOuNorma: 'Manuais Canônicos (Cunha & Lemos, Lancaster, Vergueiro, ABNT)',
            citacao: justificativa || 'A doutrina hegemônica adota critério estrito na diferenciação dos termos.',
          },
          perguntaDesafio: `À luz do gabarito oficial (${gabaritoExtenso}), qual termo específico do texto da assertiva desautoriza qualquer interpretação em sentido contrário?`,
          sugestaoBaralho: {
            frente: `[Cebraspe] ${assertiva.slice(0, 100)}... (C/E?)`,
            verso: `GABARITO: ${gabaritoExtenso}\n\n${justificativa || ''}`,
          },
        },
      });
    } else {
      // Regra F-06: Texto neutro sem veredito "NÃO PROSPERA", marcando modo: offline
      return res.status(200).json({
        modo: 'offline',
        respostaBanca: `A IA está indisponível; este é um roteiro de autoanálise.\n\nSeu argumento ("${argumentoCandidato?.slice(0, 120) || ''}...") foi registrado localmente para revisão. Para autoavaliação, consulte a literatura canônica e compare se os termos usados na assertiva representam regra geral ou exceção periférica.`,
      });
    }
  }

  // Chamada ao modelo Gemini
  try {
    const geminiUrl = getGeminiGenerateContentUrl();

    if (acao === 'iniciar') {
      const prompt = `
Você é um tutor independente que analisa itens no estilo CEBRASPE de Biblioteconomia para o Concurso de Analista Legislativo da Câmara dos Deputados.
Seu estilo é rigoroso, acadêmico, formal, polido e profundamente fundamentado na literatura clássica da área (Paul Otlet, Suzanne Briet, Harold Borko, Jesse Shera, S. R. Ranganathan, Waldomiro Vergueiro, F. W. Lancaster, Eliane Mey, Murilo Bastos da Cunha, Cordélia Cavalcanti, Michael Buckland, além da legislação federal como Lei 12.527/2011 LAI e normas da ABNT).

Um candidato errou um item do concurso e solicita o Parecer Técnico e Desafio Socrático da Banca.

DADOS DO ITEM:
- Assertiva da Questão: "${assertiva}"
- Gabarito Oficial Cebraspe: ${gabaritoExtenso}
- Resposta Assinalada pelo Candidato: ${escolhaExtensa}
- Módulo / Disciplina: ${macroModuloTitulo || 'Biblioteconomia'}
- Justificativa do Gabarito: "${justificativa || ''}"
- Armadilha da Banca / Distrator: "${armadilhaBanca || 'Não explicitada'}"

INSTRUÇÕES:
Gere uma análise no formato JSON estrito contendo:
1. "tesePrincipal": Explicação técnica e irrefutável de por que o gabarito oficial é ${gabaritoExtenso} segundo a doutrina hegemônica (máx 3-4 frases formais).
2. "pontoCegoIdentificado": O raciocínio falacioso, apegos intuitivos ou confusão de terminologia que levou o candidato a marcar ${escolhaExtensa}.
3. "fundamentacao": Objeto com "autor" (autor canônico da área), "obraOuNorma" (título da obra, norma ou lei de referência) e "citacao" (síntese textual ou citação representativa da regra).
4. "perguntaDesafio": Uma pergunta socrática provocativa e instigante direcionada ao candidato, exigindo que ele demonstre por que o distrator do Cebraspe é logicamente inviável.
5. "sugestaoBaralho": Objeto com "frente" e "verso" resumidos para flashcard de revisão rápida.

Retorne EXCLUSIVAMENTE um objeto JSON válido.
`;

      const response = await fetchWithTimeout(geminiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey,
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.2,
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
      return res.status(200).json({ parecer: parsed, modo: 'online' });
    } else {
      // Réplica socrática
      const prompt = `
Você é um tutor independente que analisa itens no estilo CEBRASPE de Biblioteconomia para o Concurso da Câmara dos Deputados.
O candidato respondeu ao seu desafio socrático anterior com o seguinte argumento de recurso:
"${argumentoCandidato || ''}"

CONTEXTO DO ITEM:
- Assertiva: "${assertiva}"
- Gabarito Definitivo: ${gabaritoExtenso}
- Fundamentação: "${justificativa || ''}"

INSTRUÇÕES:
Avalie a resposta do candidato com rigor e didática socrática (máximo 2 a 3 parágrafos curtos).
- Se o candidato demonstrou ter compreendido a distinção doutrinária do Cebraspe, elogie a metacognição e aponte como fixar esse conceito.
- Se o candidato insistiu em falácias ou distorções, desmonte cordialmente a premissa errada com uma citação de autoridade biblioteconômica.
Retorne texto em markdown fluente e cortês.
`;

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
          },
        }),
      }, 20000);

      if (!response.ok) {
        throw new Error(`Gemini status ${response.status}`);
      }

      const data: any = await response.json();
      const respostaBanca = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      return res.status(200).json({ respostaBanca, modo: 'online' });
    }
  } catch (error: any) {
    console.error('[Socratic Challenge Error]', error?.message);
    if (acao === 'iniciar') {
      return res.status(200).json({
        modo: 'offline',
        parecer: {
          tesePrincipal: `Modo offline: O gabarito é ${gabaritoExtenso}. Analise a literatura canônica e as restrições da assertiva.`,
          pontoCegoIdentificado: armadilhaBanca || 'Verifique distinções conceituais no enunciado.',
          fundamentacao: {
            autor: 'Doutrina Canônica de Biblioteconomia',
            obraOuNorma: 'Manuais Oficiais',
            citacao: justificativa || 'A doutrina hegemônica sustenta a assertiva.',
          },
          perguntaDesafio: `Qual termo exato no enunciado delimita a resposta como ${gabaritoExtenso}?`,
          sugestaoBaralho: {
            frente: `[Cebraspe] ${assertiva.slice(0, 100)}...`,
            verso: `GABARITO: ${gabaritoExtenso}`,
          },
        },
      });
    } else {
      return res.status(200).json({
        modo: 'offline',
        respostaBanca: `A IA está indisponível; este é um roteiro de autoanálise.\n\nSeu argumento ("${argumentoCandidato?.slice(0, 120) || ''}...") foi registrado localmente. Confronte suas justificativas com os manuais de referência do edital.`,
      });
    }
  }
}
