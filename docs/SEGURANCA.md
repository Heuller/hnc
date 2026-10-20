# Arquitetura de Segurança e Proteção de Dados — HNC

## 1. Proteção de Acesso à Interface (AuthGate)

* A autenticação de entrada (`AuthGate.tsx`) protege o acesso à interface visual do aplicativo.
* Em ambiente de produção (`import.meta.env.PROD`), se as variáveis de ambiente do Supabase (`VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`) não estiverem configuradas, o login é **estritamente recusado** com a mensagem "Serviço indisponível" (regra V-06).
* O "Modo Local" (offline mock) é restrito a desenvolvimento local (`import.meta.env.DEV`) ou habilitado apenas sob declaração explícita de `VITE_ALLOW_LOCAL_MODE=true`. O identificador de usuário no modo local é gerado aleatoriamente por navegador via `crypto.randomUUID()` e persistido em `localStorage`, nunca compartilhado nem estático.

---

## 2. Modelo de Entrega de Conteúdo vs. Proteção de Interface

> [!IMPORTANT]
> **Divulgação Técnica:** Atualmente, os pacotes teóricos (módulos, assertivas, questões de simulados e dicionário terminológico) são compilados no bundle JavaScript público do cliente (`dist/assets/*.js`) para permitir funcionamento offline (PWA) e carregamento instantâneo.
> 
> Portanto, o login protege a **interface de usuário, a persistência e a sincronização do progresso**. Qualquer usuário técnico com acesso ao código-fonte ou às ferramentas de desenvolvedor do navegador pode inspecionar os arquivos JavaScript baixados pelo navegador.

### Opção de Restrição Estrita de Conteúdo (Sob Demanda)
Caso seja necessário restringir o acesso ao conteúdo textual das questões e da doutrina exclusivamente a usuários autenticados:
1. Os dados de módulos e questões deverão ser migrados do bundle estático para tabelas do Supabase (`modulos`, `questoes`, `dicionario`).
2. Devem ser configuradas políticas de **Row Level Security (RLS)** exigindo `auth.role() = 'authenticated'` para leitura.
3. A aplicação passará a buscar o conteúdo sob demanda via endpoints autenticados (REST/GraphQL), com cache local criptografado (IndexedDB com chave derivada da sessão).
4. *Nota: Esta transição exige autorização prévia do usuário antes de sua implementação.*

---

## 3. Segurança dos Endpoints Serverless (`api/*`)

* **Autenticação:** Exigência de cabeçalho `Authorization: Bearer <token_supabase>`, validado via `supabase.auth.getUser(token)` no servidor.
* **Rate Limiting:** Limite por usuário (20 chamadas/10 min, 200/dia), com resposta HTTP 429 e cabeçalho `Retry-After`.
* **Validação de Entrada:** Validação de schemas Zod com limites explícitos de tamanho no payload.
* **Resiliência e Timeout:** Timeout de 20s com `AbortController` em chamadas externas a modelos de IA.
