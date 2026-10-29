-- Migration: 20261029000001_simulado_active_sessions.sql
-- Descrição: Persistência de sessões de simulados em andamento (resiliência contra refresh de navegador)
-- Permite armazenar respostas parciais, cronômetro e índice atual da questão para restauração imediata.

ALTER TABLE public.user_progress
    ADD COLUMN IF NOT EXISTS sessoes_simulados JSONB DEFAULT '{}'::jsonb,
    ADD COLUMN IF NOT EXISTS ultimo_simulado_acessado_id TEXT DEFAULT 'm1-fundamentos';
