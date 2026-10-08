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
  BookOpen,
  Compass,
} from 'lucide-react';
import type { User as SupabaseUser } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from '../../lib/supabase';
import { progressSyncService } from '../../services/progressSyncService';
import { useProgressStore } from '../../store/useProgressStore';
import { useAuthStore } from '../../store/useAuthStore';
import { ThemeToggle } from '../layout/ThemeToggle';
import { IllustrationLogin } from '../illustrations/ContextualIllustrations';

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
          // Ambiente sem Supabase (offline / GitHub Pages sem secrets): login local imediato
          setSuccessMsg('Acesso autorizado (Modo Local)! Carregando dados...');
          const userEmail = resolveEmail(email);
          const userName = userEmail.split('@')[0];
          useAuthStore.setState({
            user: {
              id: '00000000-0000-0000-0000-000000000001',
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
    <div className="min-h-screen bg-theme-bg text-theme-ink flex flex-col justify-between font-sans selection:bg-accent/20 transition-colors">
      {/* Barra Superior Discreta */}
      <header className="w-full max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary text-primary-text flex items-center justify-center font-bold text-xs shadow-editorial-sm select-none">
            HNC
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-ink">
              Heuller na Câmara
            </span>
            <span className="text-[10px] text-ink-2 font-mono leading-none">
              Plataforma de Domínio Cebraspe
            </span>
          </div>
        </div>

        <ThemeToggle />
      </header>

      {/* Conteúdo Central em 2 Colunas no Desktop */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-6 md:py-10">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Coluna Esquerda: Apresentação e Gravura Editorial */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 border border-border text-[11px] font-mono font-medium text-ink-2">
              <BookOpen className="w-3.5 h-3.5 text-accent" />
              <span>Câmara dos Deputados · Bibliotecário</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-ink tracking-tight leading-tight">
              Plataforma de Preparação e Domínio Teórico
            </h1>

            <p className="text-xs sm:text-sm text-ink-2 font-serif leading-relaxed max-w-lg">
              Estudo estruturado por domínio de conhecimento, portais de retenção cumulativa e fator de correção Cebraspe (uma errada anula uma certa).
            </p>

            {/* Ilustração Ex-Libris */}
            <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md pt-2 text-accent/80 dark:text-accent/70">
              <IllustrationLogin className="w-full h-auto drop-shadow-sm" />
            </div>

            <p className="text-[11px] font-sans text-ink-2/70 hidden sm:block">
              Lema: O domínio do método supera a armadilha do examinador.
            </p>
          </motion.div>

          {/* Coluna Direita: Cartão de Autenticação */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-6 w-full max-w-md mx-auto"
          >
            <div className="rounded-2xl bg-surface border border-border shadow-editorial-lg p-6 sm:p-8 space-y-6">
              {/* Cabeçalho do Cartão */}
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-xl bg-surface-2 border border-border text-accent flex items-center justify-center mx-auto shadow-editorial-sm">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-serif text-ink tracking-tight">
                  {tab === 'login' ? 'Acesso à Plataforma de Estudos' : 'Recuperação de Acesso'}
                </h2>
                <p className="text-xs text-ink-2 leading-relaxed max-w-xs mx-auto">
                  {tab === 'login'
                    ? 'Identifique-se com suas credenciais autorizadas'
                    : 'Digite seu e-mail cadastrado para redefinir a chave de acesso'}
                </p>
              </div>

              {/* Alertas de Feedback Acessíveis */}
              <AnimatePresence mode="wait">
                {errorMsg && (
                  <motion.div
                    role="alert"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="p-3.5 rounded-xl bg-err-soft border border-err/30 text-err text-xs flex items-start gap-2.5"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span className="leading-snug">{errorMsg}</span>
                  </motion.div>
                )}

                {successMsg && (
                  <motion.div
                    role="status"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="p-3.5 rounded-xl bg-ok-soft border border-ok/30 text-ok text-xs flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <span className="leading-snug">{successMsg}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Formulário de Login / Reset */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="auth-identifier" className="block text-xs font-semibold text-ink-2 mb-1.5">
                    {tab === 'login' ? 'Usuário ou E-mail' : 'E-mail cadastrado'}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-ink-2/60 absolute left-3.5 top-3 pointer-events-none" />
                    <input
                      id="auth-identifier"
                      type={tab === 'login' ? 'text' : 'email'}
                      required
                      autoComplete={tab === 'login' ? 'username' : 'email'}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={tab === 'login' ? 'teste ou seu-email@exemplo.com' : 'seu-email@exemplo.com'}
                      className="w-full pl-10 pr-3 py-2.5 text-xs rounded-xl bg-surface border border-border text-ink placeholder:text-ink-2/40 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-hidden transition-all"
                    />
                  </div>
                </div>

                {tab === 'login' && (
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
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
                        className="text-[11px] text-accent hover:underline cursor-pointer focus:outline-hidden focus:underline"
                      >
                        Esqueceu a senha?
                      </button>
                    </div>
                    <div className="relative">
                      <KeyRound className="w-4 h-4 text-ink-2/60 absolute left-3.5 top-3 pointer-events-none" />
                      <input
                        id="auth-password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Sua senha"
                        className="w-full pl-10 pr-10 py-2.5 text-xs rounded-xl bg-surface border border-border text-ink placeholder:text-ink-2/40 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-hidden transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? 'Ocultar senha' : 'Exibir senha'}
                        className="absolute right-3 top-2.5 p-0.5 text-ink-2 hover:text-ink cursor-pointer focus:outline-hidden"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-primary hover:opacity-95 text-primary-text font-bold text-xs flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer shadow-editorial-md focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Verificando credenciais...</span>
                      </>
                    ) : tab === 'login' ? (
                      <>
                        <LogIn className="w-4 h-4" />
                        <span>Entrar na Plataforma</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4" />
                        <span>Enviar Link de Recuperação</span>
                      </>
                    )}
                  </button>

                  {tab === 'login' && (
                    <div className="pt-2">
                      <div className="relative flex py-2 items-center">
                        <div className="flex-grow border-t border-border"></div>
                        <span className="flex-shrink mx-2 text-[10px] font-mono text-ink-2 uppercase tracking-wider">
                          ou experimente
                        </span>
                        <div className="flex-grow border-t border-border"></div>
                      </div>

                      <button
                        type="button"
                        onClick={() => useAuthStore.getState().loginAsGuest()}
                        className="w-full py-2.5 px-3 rounded-xl bg-surface-2 hover:bg-surface border border-border hover:border-accent text-ink text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer group"
                      >
                        <Compass className="w-4 h-4 text-accent group-hover:rotate-45 transition-transform" />
                        <span>Acessar Modo Demonstração (Convidado)</span>
                      </button>
                    </div>
                  )}
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

              {/* Destaque de Segurança */}
              <div className="pt-4 border-t border-border/60">
                <div className="flex items-center gap-2.5 text-[11px] text-ink-2 bg-surface-2 p-3 rounded-xl border border-border">
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                  <span>
                    Acesso exclusivo · Sessão criptografada e autenticada
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      {/* Rodapé Editorial */}
      <footer className="w-full max-w-6xl mx-auto px-4 py-4 text-center text-[11px] text-ink-2/70 border-t border-border/40">
        <p>
          Heuller na Câmara · Plataforma Pessoal de Alta Performance · Metodologia Cebraspe
        </p>
      </footer>
    </div>
  );
};
