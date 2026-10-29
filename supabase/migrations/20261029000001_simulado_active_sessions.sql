-- Migration: 20261029000001_simulado_active_sessions.sql
-- Descrição: Persistência de sessões de simulados em andamento (resiliência contra refresh de navegador)
-- Permite armazenar respostas parciais, cronômetro e índice atual da questão para restauração imediata.

ALTER TABLE public.user_progress
    ADD COLUMN IF NOT EXISTS sessoes_simulados JSONB DEFAULT '{}'::jsonb,
    ADD COLUMN IF NOT EXISTS ultimo_simulado_acessado_id TEXT DEFAULT 'm1-fundamentos';

-- Habilita e reafirma RLS estrito em user_progress
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can update own progress sessions" ON public.user_progress;
CREATE POLICY "Users can update own progress sessions"
ON public.user_progress
FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);
