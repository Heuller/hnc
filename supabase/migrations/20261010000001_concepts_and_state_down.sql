-- Rollback: 20261010000001_concepts_and_state_down.sql
-- Descrição: Reverte tabelas de conceitos e estados de repetição espaçada

DROP TABLE IF EXISTS public.concept_state CASCADE;
DROP TABLE IF EXISTS public.concepts CASCADE;
