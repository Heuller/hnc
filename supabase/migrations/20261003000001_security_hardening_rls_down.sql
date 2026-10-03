-- Down Migration: 20261003000001_security_hardening_rls_down.sql

DROP POLICY IF EXISTS "Users can only read their own progress" ON public.user_progress;
DROP POLICY IF EXISTS "Users can only insert their own progress" ON public.user_progress;
DROP POLICY IF EXISTS "Users can only update their own progress" ON public.user_progress;

DROP POLICY IF EXISTS "Users can only read their own simulation attempts" ON public.simulado_tentativas;
DROP POLICY IF EXISTS "Users can only insert their own simulation attempts" ON public.simulado_tentativas;
