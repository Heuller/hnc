-- Migration: 20261002000001_jornada_tentativas.sql
-- Descrição: Cria a tabela de tentativas imutáveis da Jornada (Fonte da Verdade) com RLS estrito por usuário.
-- Regra D.6: A FONTE DE VERDADE são as TENTATIVAS (registros imutáveis, append-only, com id único); os estados da Jornada são DERIVADOS delas.

CREATE TABLE IF NOT EXISTS public.jornada_tentativas (
    id TEXT PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    tipo TEXT NOT NULL CHECK (tipo IN ('verificacao_submodulo', 'desafio_modulo', 'portal_revisao')),
    target_id TEXT NOT NULL,
    modulo_id TEXT NOT NULL,
    total_itens INTEGER NOT NULL CHECK (total_itens >= 0),
    acertos INTEGER NOT NULL CHECK (acertos >= 0),
    erros INTEGER NOT NULL CHECK (erros >= 0),
    em_branco INTEGER NOT NULL DEFAULT 0 CHECK (em_branco >= 0),
    aproveitamento NUMERIC(5, 4) NOT NULL CHECK (aproveitamento >= 0 AND aproveitamento <= 1),
    nota_liquida INTEGER NOT NULL,
    aprovado BOOLEAN NOT NULL DEFAULT FALSE,
    acertos_necessarios INTEGER NOT NULL CHECK (acertos_necessarios >= 0),
    erros_maximos INTEGER NOT NULL CHECK (erros_maximos >= 0),
    secoes_com_erros TEXT[] DEFAULT '{}',
    respostas JSONB NOT NULL DEFAULT '{}'::jsonb,
    fora_da_trilha BOOLEAN NOT NULL DEFAULT FALSE,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Índices de alta performance para sincronização e isolamento de consultas
CREATE INDEX IF NOT EXISTS idx_jornada_tentativas_user ON public.jornada_tentativas(user_id, target_id);
CREATE INDEX IF NOT EXISTS idx_jornada_tentativas_criado_em ON public.jornada_tentativas(criado_em DESC);

-- Habilita Segurança em Nível de Linha (RLS)
ALTER TABLE public.jornada_tentativas ENABLE ROW LEVEL SECURITY;

-- Política de Isolamento Estrito: Usuário A NUNCA lê dados do Usuário B (Regra 6)
DROP POLICY IF EXISTS "Users can only read their own journey attempts" ON public.jornada_tentativas;
CREATE POLICY "Users can only read their own journey attempts"
ON public.jornada_tentativas
FOR SELECT
USING (auth.uid() = user_id);

-- Política de Inserção: Usuário só pode inserir tentativas vinculadas ao seu próprio auth.uid()
DROP POLICY IF EXISTS "Users can only insert their own journey attempts" ON public.jornada_tentativas;
CREATE POLICY "Users can only insert their own journey attempts"
ON public.jornada_tentativas
FOR INSERT
WITH CHECK (auth.uid() = user_id);
