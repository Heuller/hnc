-- Migration: 20261020000001_security_policies_and_rate_limit.sql
-- Descrição: Políticas DELETE em tentativas, criação com RLS de profiles e api_rate_limit (Regras F-01, F-07, F-08)

-- 1. Políticas DELETE para jornada_tentativas e simulado_tentativas
DROP POLICY IF EXISTS "Users can only delete their own journey attempts" ON public.jornada_tentativas;
CREATE POLICY "Users can only delete their own journey attempts"
ON public.jornada_tentativas
FOR DELETE
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can only delete their own simulation attempts" ON public.simulado_tentativas;
CREATE POLICY "Users can only delete their own simulation attempts"
ON public.simulado_tentativas
FOR DELETE
USING (auth.uid() = user_id);

-- 2. Tabela de Perfis de Usuário (profiles) com RLS estrito
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT,
    nome TEXT,
    atualizado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can only view their own profile" ON public.profiles;
CREATE POLICY "Users can only view their own profile"
ON public.profiles
FOR SELECT
USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can only update their own profile" ON public.profiles;
CREATE POLICY "Users can only update their own profile"
ON public.profiles
FOR UPDATE
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
CREATE POLICY "Users can insert their own profile"
ON public.profiles
FOR INSERT
WITH CHECK (auth.uid() = id);

-- 3. Tabela de Auditoria e Rate Limiting (api_rate_limit)
CREATE TABLE IF NOT EXISTS public.api_rate_limit (
    id BIGSERIAL PRIMARY KEY,
    user_id TEXT NOT NULL,
    endpoint TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_api_rate_limit_user_created ON public.api_rate_limit(user_id, created_at DESC);

ALTER TABLE public.api_rate_limit ENABLE ROW LEVEL SECURITY;

-- Bloqueia expressamente o acesso direto de clientes (anon/authenticated). Acesso restrito a service_role
DROP POLICY IF EXISTS "Deny direct client access to api_rate_limit" ON public.api_rate_limit;
CREATE POLICY "Deny direct client access to api_rate_limit"
ON public.api_rate_limit
FOR ALL
USING (false);
