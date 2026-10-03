-- Migration: 20261003000001_security_hardening_rls.sql
-- Descrição: Assegura Row Level Security (RLS) estrito em todas as tabelas de dados do usuário (user_progress, simulado_tentativas).
-- OWASP A01:2021 Broken Access Control Prevention

-- 1. TABELA USER_PROGRESS (Progresso Global do Usuário)
CREATE TABLE IF NOT EXISTS public.user_progress (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    versao INTEGER NOT NULL DEFAULT 1,
    ultimo_modulo_acessado TEXT NOT NULL DEFAULT '1.1',
    modulos_lidos TEXT[] DEFAULT '{}',
    checkpoints_respondidos JSONB NOT NULL DEFAULT '{}'::jsonb,
    secoes_visualizadas JSONB NOT NULL DEFAULT '{}'::jsonb,
    leitner_deck JSONB NOT NULL DEFAULT '{}'::jsonb,
    constancia JSONB NOT NULL DEFAULT '{"diasConsecutivos": 1, "historicoUltimos7Dias": []}'::jsonb,
    atualizado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Ativa RLS em user_progress
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

-- Usuário só pode ler seu próprio progresso
DROP POLICY IF EXISTS "Users can only read their own progress" ON public.user_progress;
CREATE POLICY "Users can only read their own progress"
ON public.user_progress
FOR SELECT
USING (auth.uid() = user_id);

-- Usuário só pode inserir seu próprio progresso
DROP POLICY IF EXISTS "Users can only insert their own progress" ON public.user_progress;
CREATE POLICY "Users can only insert their own progress"
ON public.user_progress
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Usuário só pode atualizar seu próprio progresso
DROP POLICY IF EXISTS "Users can only update their own progress" ON public.user_progress;
CREATE POLICY "Users can only update their own progress"
ON public.user_progress
FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);


-- 2. TABELA SIMULADO_TENTATIVAS (Histórico de Simulados 100Q)
CREATE TABLE IF NOT EXISTS public.simulado_tentativas (
    id TEXT PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    modulo_id TEXT NOT NULL,
    total_questoes INTEGER NOT NULL CHECK (total_questoes >= 0),
    respostas_corretas INTEGER NOT NULL CHECK (respostas_corretas >= 0),
    respostas_incorretas INTEGER NOT NULL CHECK (respostas_incorretas >= 0),
    em_branco INTEGER NOT NULL DEFAULT 0 CHECK (em_branco >= 0),
    nota_liquida NUMERIC(6, 2) NOT NULL,
    aproveitamento_percentual NUMERIC(5, 2) NOT NULL,
    tempo_gasto_segundos INTEGER NOT NULL CHECK (tempo_gasto_segundos >= 0),
    criado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Índices de performance
CREATE INDEX IF NOT EXISTS idx_simulado_tentativas_user ON public.simulado_tentativas(user_id, criado_em DESC);

-- Ativa RLS em simulado_tentativas
ALTER TABLE public.simulado_tentativas ENABLE ROW LEVEL SECURITY;

-- Usuário só pode ler seus próprios simulados
DROP POLICY IF EXISTS "Users can only read their own simulation attempts" ON public.simulado_tentativas;
CREATE POLICY "Users can only read their own simulation attempts"
ON public.simulado_tentativas
FOR SELECT
USING (auth.uid() = user_id);

-- Usuário só pode registrar seus próprios simulados
DROP POLICY IF EXISTS "Users can only insert their own simulation attempts" ON public.simulado_tentativas;
CREATE POLICY "Users can only insert their own simulation attempts"
ON public.simulado_tentativas
FOR INSERT
WITH CHECK (auth.uid() = user_id);
