-- Migration: 20261021000001_fase4_sync_and_performance.sql
-- Descrição: Fase 4 - Sincronização e Performance do Banco de Dados
-- Alinha tabelas locais (item_attempts, user_progress, simulado_tentativas) com Supabase Postgres Best Practices:
-- 1. Criação da tabela item_attempts (append-only, idempotente por ID) com RLS estrito
-- 2. Alinhamento de colunas de simulado_tentativas e user_progress
-- 3. Índices compostos B-tree estratégicos para user_id, ordenação temporal e consultas por submódulo

-- ============================================================================
-- 1. TABELA ITEM_ATTEMPTS (Tentativas de Itens de Treino e Simulado)
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.item_attempts (
    id TEXT PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    item_id TEXT NOT NULL,
    submodulo_id TEXT NOT NULL,
    modulo_id TEXT NOT NULL,
    contexto TEXT NOT NULL DEFAULT 'treino',
    resposta TEXT NOT NULL,
    certeza TEXT CHECK (certeza IS NULL OR certeza IN ('certeza', 'duvida', 'chute')),
    correto BOOLEAN NOT NULL,
    tentativa_n INTEGER NOT NULL DEFAULT 1 CHECK (tentativa_n >= 1),
    criado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Índices B-tree compostos para alta performance e isolamento multitenant
CREATE INDEX IF NOT EXISTS idx_item_attempts_user_criado ON public.item_attempts(user_id, criado_em DESC);
CREATE INDEX IF NOT EXISTS idx_item_attempts_user_item ON public.item_attempts(user_id, item_id);
CREATE INDEX IF NOT EXISTS idx_item_attempts_user_submodulo ON public.item_attempts(user_id, submodulo_id);
CREATE INDEX IF NOT EXISTS idx_item_attempts_submodulo_correto ON public.item_attempts(submodulo_id, correto);

-- Habilita RLS estrito em item_attempts
ALTER TABLE public.item_attempts ENABLE ROW LEVEL SECURITY;

-- Políticas de RLS para item_attempts: Usuário só acessa e manipula seus próprios registros
DROP POLICY IF EXISTS "Users can read own item attempts" ON public.item_attempts;
CREATE POLICY "Users can read own item attempts"
ON public.item_attempts
FOR SELECT
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own item attempts" ON public.item_attempts;
CREATE POLICY "Users can insert own item attempts"
ON public.item_attempts
FOR INSERT
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own item attempts" ON public.item_attempts;
CREATE POLICY "Users can update own item attempts"
ON public.item_attempts
FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete own item attempts" ON public.item_attempts;
CREATE POLICY "Users can delete own item attempts"
ON public.item_attempts
FOR DELETE
USING (auth.uid() = user_id);


-- ============================================================================
-- 2. ALINHAMENTO DE SIMULADO_TENTATIVAS
-- ============================================================================
-- Adiciona colunas para suportar persistência do SimuladoFinalizado (progressSyncService)
ALTER TABLE public.simulado_tentativas
    ADD COLUMN IF NOT EXISTS simulado_id TEXT,
    ADD COLUMN IF NOT EXISTS respostas JSONB DEFAULT '{}'::jsonb,
    ADD COLUMN IF NOT EXISTS acertos INTEGER DEFAULT 0 CHECK (acertos >= 0),
    ADD COLUMN IF NOT EXISTS erros INTEGER DEFAULT 0 CHECK (erros >= 0),
    ADD COLUMN IF NOT EXISTS data_finalizacao TIMESTAMPTZ DEFAULT timezone('utc'::text, now());

-- Ajuste de campos existentes para permitir inserção flexível sem quebrar integridade
DO $$
BEGIN
    -- Permitir que total_questoes e respostas_corretas sejam preenchidos automaticamente ou tenham default se nulos
    IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = 'simulado_tentativas' AND column_name = 'modulo_id' AND is_nullable = 'NO'
    ) THEN
        ALTER TABLE public.simulado_tentativas ALTER COLUMN modulo_id DROP NOT NULL;
    END IF;

    IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = 'simulado_tentativas' AND column_name = 'total_questoes' AND is_nullable = 'NO'
    ) THEN
        ALTER TABLE public.simulado_tentativas ALTER COLUMN total_questoes DROP NOT NULL;
    END IF;

    IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = 'simulado_tentativas' AND column_name = 'respostas_corretas' AND is_nullable = 'NO'
    ) THEN
        ALTER TABLE public.simulado_tentativas ALTER COLUMN respostas_corretas DROP NOT NULL;
    END IF;

    IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = 'simulado_tentativas' AND column_name = 'respostas_incorretas' AND is_nullable = 'NO'
    ) THEN
        ALTER TABLE public.simulado_tentativas ALTER COLUMN respostas_incorretas DROP NOT NULL;
    END IF;
END $$;

-- Índice para ordenação rápida por data_finalizacao
CREATE INDEX IF NOT EXISTS idx_simulado_tentativas_user_finalizacao ON public.simulado_tentativas(user_id, data_finalizacao DESC);


-- ============================================================================
-- 3. ALINHAMENTO DE USER_PROGRESS
-- ============================================================================
-- Garante a coluna updated_at utilizada no upsert do progressSyncService
ALTER TABLE public.user_progress
    ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now());
