-- Rollback Migration: 20261002000001_jornada_tentativas_down.sql
-- Descrição: Script reversível de remoção da tabela jornada_tentativas (Regra 6).

DROP POLICY IF EXISTS "Users can only insert their own journey attempts" ON public.jornada_tentativas;
DROP POLICY IF EXISTS "Users can only read their own journey attempts" ON public.jornada_tentativas;
DROP TABLE IF EXISTS public.jornada_tentativas CASCADE;
