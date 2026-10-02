// Vercel Serverless Function: /api/socratic-challenge
// Embodying the Senior Cebraspe Examiner in a Socratic dialogue over incorrect items

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    acao,
    assertiva,
    gabarito,
    respostaUsuario,
    justificativa,
    armadilhaBanca,
    macroModuloTitulo,
    historicoMensagens,
    argumentoCandidato,
  } = req.body || {};

  if (!assertiva || !gabarito) {
    return res.status(400).json({ error: 'Assertiva e gabarito são obrigatórios.' });
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

  const gabaritoExtenso = gabarito === 'C' ? 'CERTO' : 'ERRADO';
  const escolhaExtensa = respostaUsuario === 'C' ? 'CERTO' : 'ERRADO';

  // Fallback caso a chave não esteja disponível no ambiente
  if (!apiKey) {
    if (acao === 'iniciar') {
      return res.status(200).json({
        parecer: {
          tesePrincipal: `A banca examinadora do Cebraspe ratifica a correção do gabarito oficial como ${gabaritoExtenso}. O item foi redigido com precisão doutrinária para testar o domínio estrito dos conceitos biblioteconômicos consagrados para a Câmara dos Deputados.`,
          pontoCegoIdentificado: armadilhaBanca
            ? `Ponto cego identificado: ${armadilhaBanca}`
            : `O candidato optou por ${escolhaExtensa} ao deixar-se levar por generalização excessiva ou ignorar a restrição conceitual posta no enunciado.`,
          fundamentacao: {
            autor: 'Doutrina Clássica e Normas Oficiais de Biblioteconomia',
            obraOuNorma: 'Manuais Canônicos (Cunha & Cavalcanti, Lancaster, Vergueiro, ABNT)',
            citacao: justificativa || 'A doutrina hegemônica adota critério estrito na diferenciação dos termos.',
          },
          perguntaDesafio: `À luz do gabarito oficial (${gabaritoExtenso}), qual termo específico do texto da assertiva desautoriza qualquer interpretação em sentido contrário?`,
          sugestaoBaralho: {
            frente: `[Cebraspe] ${assertiva.slice(0, 100)}... (C/E?)`,
            verso: `GABARITO: ${gabaritoExtenso}\n\n${justificativa}`,
          },
        },
      });
    } else {
      return res.status(200).json({
        respostaBanca: `**Despacho da Banca Examinadora:**\n\nO argumento do candidato ("${argumentoCandidato?.slice(0, 120)}...") foi apreciado. O recurso administrativo **NÃO PROSPERA**.\n\nNa jurisprudência do Cebraspe, a assertiva deve ser tomada em seu sentido estrito e canônico. Exceções teóricas periféricas não infirmam a regra geral exigida no padrão oficial. Mantenha o foco na literatura hegemônica para não incorrer no mesmo desvio na prova oficial.`,
      });
    }
  }

  // Chamada ao modelo Gemini
  try {
    if (acao === 'iniciar') {
      const prompt = `
Você é o EXAMINADOR TITULAR DA BANCA CEBRASPE (CESPE/UnB) de Biblioteconomia para o Concurso de Analista Legislativo da Câmara dos Deputados.
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

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.2,
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

      return res.status(200).json({ parecer: parsed });
    } else {
      // Replicar ao argumento do candidato
      const historicoFormatado = (historicoMensagens || []).slice(-8);

      const promptSistema = `
Você é o EXAMINADOR TITULAR DA BANCA CEBRASPE (CESPE/UnB) de Biblioteconomia (Câmara dos Deputados).
O candidato está dialogando com você, tentando recorrer ou justificar sua resposta para a seguinte assertiva:
"${assertiva}" (Gabarito Oficial: ${gabaritoExtenso}).

Instruções:
- Responda formalmente, na primeira pessoa do plural da banca ("A banca examinadora...", "Registramos que...", "O pleito não se sustenta porque...").
- Discuta criticamente o argumento apresentado pelo candidato ("${argumentoCandidato}").
- Se o candidato estiver correto na refutação conceitual, elogie a percepção, mas aponte por que o Cebraspe mantém a chave oficial (pegadinha formal da palavra/advérbio no item).
- Cite os autores de referência (Cunha, Lancaster, Vergueiro, Briet, Mey, etc.) com precisão cirúrgica.
- Mantenha tom socrático, polido e focado em alta performance.
- Responda em no máximo 3 ou 4 parágrafos objetivos com marcações em Markdown.
`;

      const contents = [
        ...historicoFormatado,
        {
          role: 'user',
          parts: [{ text: `${promptSistema}\n\nArgumento recente do candidato: "${argumentoCandidato}"` }],
        },
      ];

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents,
            generationConfig: {
              temperature: 0.3,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.statusText}`);
      }

      const json = await response.json();
      const textOutput = json.candidates?.[0]?.content?.parts?.[0]?.text;

      return res.status(200).json({ respostaBanca: textOutput });
    }
  } catch (error: any) {
    console.error('Erro na função socratic-challenge:', error);

    // Fallback defensivo garantido
    if (acao === 'iniciar') {
      return res.status(200).json({
        parecer: {
          tesePrincipal: `A banca examinadora ratifica o gabarito oficial como ${gabaritoExtenso}. A formulação do item observa estritamente os termos consagrados pela doutrina biblioteconômica predominante.`,
          pontoCegoIdentificado: armadilhaBanca || `A marcação ${escolhaExtensa} decorre frequentemente da desatenção a termos restritivos no texto da assertiva.`,
          fundamentacao: {
            autor: 'Doutrina Biblioteconômica Canônica',
            obraOuNorma: 'Bibliografia de Referência do Edital',
            citacao: justificativa || 'A conceituação padrão não admite a sinonímia implícita assumida pelo candidato.',
          },
          perguntaDesafio: `Qual elemento textual do enunciado impede que a assertiva seja considerada ${escolhaExtensa}?`,
          sugestaoBaralho: {
            frente: `[Cebraspe] ${assertiva.slice(0, 90)}...`,
            verso: `Gabarito: ${gabaritoExtenso}\n${justificativa}`,
          },
        },
      });
    } else {
      return res.status(200).json({
        respostaBanca: `**Despacho da Banca Cebraspe:**\n\nO argumento apresentado foi ponderado. No entanto, na jurisprudência do Cebraspe para a Câmara dos Deputados, a interpretação literal e sistemática do edital prevalece sobre concepções heterodoxas. O gabarito oficial (${gabaritoExtenso}) permanece fundamentado e inalterado.`,
      });
    }
  }
}
