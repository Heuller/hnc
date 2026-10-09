-- Migration: 20261010000001_concepts_and_state.sql
-- Descrição: Banco de Conceitos Atômicos e Estados de Repetição Espaçada Unificada (Marco R2)
-- Segurança: OWASP A01:2021 Broken Access Control Prevention com RLS estrito por user_id

-- 1. TABELA DE CONCEITOS ATÔMICOS (Catálogo Canônico)
CREATE TABLE IF NOT EXISTS public.concepts (
    id TEXT PRIMARY KEY,
    submodulo_id TEXT NOT NULL,
    modulo_id TEXT NOT NULL,
    topico TEXT NOT NULL,
    item_pai_id TEXT,
    enunciado_canonic TEXT NOT NULL,
    gabarito_canonic CHAR(1) NOT NULL CHECK (gabarito_canonic IN ('C', 'E')),
    justificativa_canonic TEXT NOT NULL,
    armadilha_cebraspe TEXT,
    tipo_armadilha TEXT,
    fonte_canonica TEXT,
    nivel_dificuldade TEXT NOT NULL DEFAULT 'medio',
    formatos_disponiveis TEXT[] NOT NULL DEFAULT '{"f1_ce_simples"}',
    variantes_formatos JSONB NOT NULL DEFAULT '{}'::jsonb,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Índices de consulta de conceitos
CREATE INDEX IF NOT EXISTS idx_concepts_submodulo ON public.concepts(submodulo_id);
CREATE INDEX IF NOT EXISTS idx_concepts_modulo ON public.concepts(modulo_id);

-- Ativa RLS para concepts (Catálogo público para leitura de usuários autenticados e anônimos)
ALTER TABLE public.concepts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can read concepts" ON public.concepts;
CREATE POLICY "Public can read concepts"
ON public.concepts
FOR SELECT
USING (true);


-- 2. TABELA DE ESTADO DE CONCEITO DO USUÁRIO (Repetição Espaçada Leitner)
CREATE TABLE IF NOT EXISTS public.concept_state (
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    concept_id TEXT NOT NULL,
    caixa_leitner SMALLINT NOT NULL DEFAULT 1 CHECK (caixa_leitner BETWEEN 1 AND 5),
    proxima_revisao DATE NOT NULL,
    total_aparicoes INTEGER NOT NULL DEFAULT 0 CHECK (total_aparicoes >= 0),
    total_acertos INTEGER NOT NULL DEFAULT 0 CHECK (total_acertos >= 0),
    total_erros INTEGER NOT NULL DEFAULT 0 CHECK (total_erros >= 0),
    total_chutes INTEGER NOT NULL DEFAULT 0 CHECK (total_chutes >= 0),
    ultima_confianca TEXT CHECK (ultima_confianca IS NULL OR ultima_confianca IN ('certeza', 'duvida', 'chute')),
    ultimo_julgamento CHAR(1) CHECK (ultimo_julgamento IS NULL OR ultimo_julgamento IN ('C', 'E')),
    data_ultima_revisao DATE,
    estado_dominio TEXT NOT NULL DEFAULT 'novo' CHECK (estado_dominio IN ('novo', 'em_aprendizado', 'revisando', 'dominado', 'critico')),
    historico JSONB NOT NULL DEFAULT '[]'::jsonb,
    atualizado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    PRIMARY KEY (user_id, concept_id)
);

-- Índices para alta performance no agendamento diário
CREATE INDEX IF NOT EXISTS idx_concept_state_agenda ON public.concept_state(user_id, proxima_revisao);
CREATE INDEX IF NOT EXISTS idx_concept_state_dominio ON public.concept_state(user_id, estado_dominio);

-- Ativa RLS estrito em concept_state (Regra: Isolamento estrito entre usuários)
ALTER TABLE public.concept_state ENABLE ROW LEVEL SECURITY;

-- Usuário só lê seus próprios estados
DROP POLICY IF EXISTS "Users can read own concept states" ON public.concept_state;
CREATE POLICY "Users can read own concept states"
ON public.concept_state
FOR SELECT
USING (auth.uid() = user_id);

-- Usuário só insere seus próprios estados
DROP POLICY IF EXISTS "Users can insert own concept states" ON public.concept_state;
CREATE POLICY "Users can insert own concept states"
ON public.concept_state
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Usuário só atualiza seus próprios estados
DROP POLICY IF EXISTS "Users can update own concept states" ON public.concept_state;
CREATE POLICY "Users can update own concept states"
ON public.concept_state
FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Usuário só deleta seus próprios estados
DROP POLICY IF EXISTS "Users can delete own concept states" ON public.concept_state;
CREATE POLICY "Users can delete own concept states"
ON public.concept_state
FOR DELETE
USING (auth.uid() = user_id);
