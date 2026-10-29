-- Rollback Migration: 20261029000001_simulado_active_sessions_down.sql
ALTER TABLE public.user_progress
    DROP COLUMN IF EXISTS sessoes_simulados,
    DROP COLUMN IF EXISTS ultimo_simulado_acessado_id;
