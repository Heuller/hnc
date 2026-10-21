-- Rollback: 20261021000001_fase4_sync_and_performance_down.sql
-- Descrição: Reverte migrações de sincronização e índices da Fase 4

DROP TABLE IF EXISTS public.item_attempts CASCADE;

ALTER TABLE public.simulado_tentativas
    DROP COLUMN IF EXISTS simulado_id,
    DROP COLUMN IF EXISTS respostas,
    DROP COLUMN IF EXISTS acertos,
    DROP COLUMN IF EXISTS erros,
    DROP COLUMN IF EXISTS data_finalizacao;

DROP INDEX IF EXISTS public.idx_simulado_tentativas_user_finalizacao;

ALTER TABLE public.user_progress
    DROP COLUMN IF EXISTS updated_at;
