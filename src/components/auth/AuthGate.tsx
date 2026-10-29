import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Lock,
  Mail,
  KeyRound,
  User,
  LogIn,
  Loader2,
  AlertCircle,
  CheckCircle2,
  ShieldCheck,
  Eye,
  EyeOff,
} from 'lucide-react';
import type { User as SupabaseUser } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from '../../lib/supabase';
import { progressSyncService } from '../../services/progressSyncService';
import { useProgressStore } from '../../store/useProgressStore';
import { useAuthStore } from '../../store/useAuthStore';
import { ThemeToggle } from '../layout/ThemeToggle';

export const AuthGate: React.FC = () => {
  const [tab, setTab] = useState<'login' | 'reset'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setLoading(true);

    const resolveEmail = (identifier: string) => {
      const clean = identifier.trim().toLowerCase();
      if (!clean.includes('@')) {
        return `${clean}@hnc.internal`;
      }
      return clean;
    };

    try {
      if (tab === 'login') {
        if (!isSupabaseConfigured) {
          // Regra V-06: Em produção sem variáveis do Supabase, recusa acesso a menos que VITE_ALLOW_LOCAL_MODE=true
          const isDev = import.meta.env.DEV;
          const allowLocal = import.meta.env.VITE_ALLOW_LOCAL_MODE === 'true';

          if (!isDev && !allowLocal) {
            console.error('[AuthGate] Supabase não configurado em ambiente de produção. Acesso negado.');
            setErrorMsg('Serviço indisponível.');
            setLoading(false);
            return;
          }

          // Ambiente DEV ou com flag explícita VITE_ALLOW_LOCAL_MODE: gera ID único por navegador
          setSuccessMsg('Acesso autorizado (Modo Local)! Carregando dados...');
          const userEmail = resolveEmail(email);
          const userName = userEmail.split('@')[0];

          let localUserId = localStorage.getItem('hnc_local_user_id');
          if (!localUserId) {
            localUserId = typeof crypto !== 'undefined' && crypto.randomUUID
              ? crypto.randomUUID()
              : `local-${Date.now()}`;
            localStorage.setItem('hnc_local_user_id', localUserId);
          }

          useAuthStore.setState({
            user: {
              id: localUserId,
              email: userEmail,
              app_metadata: {},
              user_metadata: { name: userName },
              aud: 'authenticated',
              created_at: new Date().toISOString(),
            } as unknown as SupabaseUser,
            session: null,
            loading: false,
          });
          return;
        }

        const { data, error } = await supabase.auth.signInWithPassword({
          email: resolveEmail(email),
          password,
        });

        if (error) {
          setErrorMsg(
            error.message === 'Invalid login credentials'
              ? 'Usuário ou senha incorretos.'
              : error.message
          );
          setLoading(false);
          return;
        }

        if (data.user) {
          setSuccessMsg('Acesso autorizado! Carregando dados...');
          const cloudProgress = await progressSyncService.baixarProgressoNuvem(data.user.id);
          if (cloudProgress) {
            useProgressStore.setState((state) => ({
              ...state,
              ...cloudProgress,
            }));
          }
        }
      } else {
        // Redefinição de senha
        const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
          redirectTo: window.location.origin,
        });

        if (error) {
          setErrorMsg(error.message);
        } else {
          setSuccessMsg('Instruções de redefinição enviadas para o seu e-mail!');
        }
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Falha ao autenticar.';
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-dvh bg-theme-bg text-theme-ink flex flex-col justify-between font-sans selection:bg-accent/20 transition-colors">
      {/* Barra Superior Discreta e Neutra (Regra V-03) */}
      <header className="w-full max-w-sm sm:max-w-md mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary text-primary-text flex items-center justify-center font-bold text-xs shadow-editorial-sm select-none">
            HNC
          </div>
          <span className="font-bold text-sm tracking-normal text-ink">
            HNC
          </span>
        </div>

        <ThemeToggle />
      </header>

      {/* Conteúdo Central Neutro - Otimizado para caber sem rolagem em 360x740 (Regra V-03) */}
      <main className="flex-1 flex items-center justify-center px-4 py-2 sm:py-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="w-full max-w-sm mx-auto"
        >
          <div className="rounded-2xl bg-surface border border-border shadow-editorial-lg p-5 sm:p-7 space-y-5">
            {/* Cabeçalho do Cartão */}
            <div className="text-center space-y-1.5">
              <div className="w-10 h-10 rounded-xl bg-surface-2 border border-border text-accent flex items-center justify-center mx-auto shadow-editorial-sm">
                <Lock className="w-4 h-4" />
              </div>
              <h1 className="text-lg sm:text-xl font-bold font-serif text-ink tracking-normal">
                {tab === 'login' ? 'Acesso' : 'Recuperação de Acesso'}
              </h1>
              <p className="text-xs text-ink-2 leading-relaxed">
                {tab === 'login'
                  ? 'Identifique-se para continuar'
                  : 'Digite seu e-mail para redefinir a chave de acesso'}
              </p>
            </div>

            {/* Alertas de Feedback Acessíveis */}
            <AnimatePresence mode="wait">
              {errorMsg && (
                <motion.div
                  role="alert"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="p-3 rounded-xl bg-err-soft border border-err/30 text-err text-xs flex items-start gap-2.5"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span className="leading-snug">{errorMsg}</span>
                </motion.div>
              )}

              {successMsg && (
                <motion.div
                  role="status"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="p-3 rounded-xl bg-ok-soft border border-ok/30 text-ok text-xs flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  <span className="leading-snug">{successMsg}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Formulário de Login / Reset com Placeholders Genéricos (Regra V-04) */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label htmlFor="auth-identifier" className="block text-xs font-semibold text-ink-2 mb-1">
                  {tab === 'login' ? 'Usuário ou e-mail' : 'E-mail cadastrado'}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-ink-2/60 absolute left-3 top-2.5 pointer-events-none" />
                  <input
                    id="auth-identifier"
                    type={tab === 'login' ? 'text' : 'email'}
                    required
                    autoComplete={tab === 'login' ? 'username' : 'email'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Usuário ou e-mail"
                    className="min-h-[48px] w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-surface border border-border text-ink placeholder:text-ink-2/40 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-hidden transition-all"
                  />
                </div>
              </div>

              {tab === 'login' && (
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="auth-password" className="text-xs font-semibold text-ink-2">
                      Senha
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setTab('reset');
                        setErrorMsg(null);
                        setSuccessMsg(null);
                      }}
                      className="text-xs text-accent hover:underline cursor-pointer focus:outline-hidden focus:underline"
                    >
                      Esqueceu a senha?
                    </button>
                  </div>
                  <div className="relative">
                    <KeyRound className="w-4 h-4 text-ink-2/60 absolute left-3 top-2.5 pointer-events-none" />
                    <input
                      id="auth-password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Sua senha"
                      className="min-h-[48px] w-full pl-9 pr-9 py-2 text-xs rounded-xl bg-surface border border-border text-ink placeholder:text-ink-2/40 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-hidden transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? 'Ocultar senha' : 'Exibir senha'}
                      className="absolute right-1 top-0.5 min-h-[44px] min-w-[44px] flex items-center justify-center p-0.5 text-ink-2 hover:text-ink cursor-pointer focus:outline-hidden"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}

              <div className="pt-1.5">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 rounded-xl bg-primary hover:opacity-95 text-primary-text font-bold text-xs flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer shadow-editorial-md focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Verificando...</span>
                    </>
                  ) : tab === 'login' ? (
                    <>
                      <LogIn className="w-4 h-4" />
                      <span>Entrar</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      <span>Recuperar Acesso</span>
                    </>
                  )}
                </button>
              </div>

              {tab === 'reset' && (
                <div className="text-center pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setTab('login');
                      setErrorMsg(null);
                      setSuccessMsg(null);
                    }}
                    className="text-xs text-ink-2 hover:text-ink underline cursor-pointer"
                  >
                    Voltar para o Login
                  </button>
                </div>
              )}
            </form>

            {/* Destaque de Segurança Neutro */}
            <div className="pt-2.5 border-t border-border/60">
              <div className="flex items-center gap-2 text-xs text-ink-2 justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>Sessão autenticada e protegida</span>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Rodapé Discreto e Neutro */}
      <footer className="w-full max-w-sm sm:max-w-md mx-auto px-4 py-2.5 text-center text-xs text-ink-2">
        <p>HNC</p>
      </footer>
    </div>
  );
};
