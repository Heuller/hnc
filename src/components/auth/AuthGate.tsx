import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Lock,
  Mail,
  KeyRound,
  User,
  LogIn,
  UserPlus,
  Loader2,
  AlertCircle,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { CONCURSO_CONFIG } from '../../config/concurso.config';
import { supabase } from '../../lib/supabase';
import { progressSyncService } from '../../services/progressSyncService';
import { useProgressStore } from '../../store/useProgressStore';
import { ThemeToggle } from '../layout/ThemeToggle';

export const AuthGate: React.FC = () => {
  const [tab, setTab] = useState<'login' | 'signup' | 'reset'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setLoading(true);

    try {
      if (tab === 'login') {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

        if (error) {
          setErrorMsg(
            error.message === 'Invalid login credentials'
              ? 'E-mail ou senha incorretos.'
              : error.message
          );
          setLoading(false);
          return;
        }

        if (data.user) {
          setSuccessMsg('Acesso autorizado! Carregando plataforma...');
          const cloudProgress = await progressSyncService.baixarProgressoNuvem(data.user.id);
          if (cloudProgress) {
            useProgressStore.setState((state) => ({
              ...state,
              ...cloudProgress,
            }));
          }
        }
      } else if (tab === 'signup') {
        if (password.length < 6) {
          setErrorMsg('A senha deve ter pelo menos 6 caracteres.');
          setLoading(false);
          return;
        }

        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: {
              nome_completo: nome.trim(),
            },
          },
        });

        if (error) {
          setErrorMsg(error.message);
          setLoading(false);
          return;
        }

        if (data.session) {
          setSuccessMsg('Conta criada com sucesso! Carregando seu ambiente...');
        } else {
          setSuccessMsg(
            'Cadastro realizado! Se o e-mail de confirmação estiver ativado no Supabase, verifique sua caixa de entrada.'
          );
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
            {CONCURSO_CONFIG.plataforma.sigla}
          </div>
          <div>
            <span className="font-bold text-sm tracking-tight text-ink">
              {CONCURSO_CONFIG.plataforma.nome}
            </span>
            <span className="text-ink-2/60 text-xs mx-1.5">•</span>
            <span className="text-xs text-ink-2 font-mono">
              {CONCURSO_CONFIG.banca.nome}
            </span>
          </div>
        </div>

        <ThemeToggle />
      </header>

      {/* Conteúdo Central */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="w-full max-w-md"
        >
          {/* Cartão de Login */}
          <div className="rounded-2xl bg-surface border border-border shadow-2xl p-6 sm:p-8 space-y-6">
            {/* Cabeçalho do Cartão */}
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-surface-2 border border-border text-accent flex items-center justify-center mx-auto shadow-editorial-sm">
                <Lock className="w-5 h-5" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold font-serif text-ink tracking-tight">
                {CONCURSO_CONFIG.plataforma.nome}
              </h1>
              <p className="text-xs text-ink-2 leading-relaxed max-w-xs mx-auto">
                {CONCURSO_CONFIG.cargo.titulo} — {CONCURSO_CONFIG.cargo.atribuicao}
                <br />
                <span className="font-semibold text-accent">
                  {CONCURSO_CONFIG.instituicao.nome}
                </span>
              </p>
            </div>

            {/* Alternador de Abas */}
            <div className="grid grid-cols-2 p-1 rounded-xl bg-surface-2 border border-border">
              <button
                type="button"
                onClick={() => {
                  setTab('login');
                  setErrorMsg(null);
                  setSuccessMsg(null);
                }}
                className={`py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  tab === 'login'
                    ? 'bg-surface text-ink shadow-editorial-sm border border-border'
                    : 'text-ink-2 hover:text-ink'
                }`}
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Entrar</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setTab('signup');
                  setErrorMsg(null);
                  setSuccessMsg(null);
                }}
                className={`py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  tab === 'signup'
                    ? 'bg-surface text-ink shadow-editorial-sm border border-border'
                    : 'text-ink-2 hover:text-ink'
                }`}
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Criar Conta</span>
              </button>
            </div>

            {/* Alertas de Feedback */}
            <AnimatePresence mode="wait">
              {errorMsg && (
                <motion.div
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

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {tab === 'signup' && (
                <div>
                  <label className="block text-xs font-semibold text-ink-2 mb-1.5">
                    Nome Completo
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-ink-2/60 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Ex: Heuller Rodrigues"
                      className="w-full pl-10 pr-3 py-2.5 text-xs rounded-xl bg-surface border border-border text-ink placeholder:text-ink-2/40 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-ink-2 mb-1.5">
                  E-mail
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-ink-2/60 absolute left-3.5 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu-email@exemplo.com"
                    className="w-full pl-10 pr-3 py-2.5 text-xs rounded-xl bg-surface border border-border text-ink placeholder:text-ink-2/40 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-ink-2">
                    Senha
                  </label>
                  {tab === 'login' && (
                    <button
                      type="button"
                      onClick={() => setTab('reset')}
                      className="text-[11px] text-accent hover:underline cursor-pointer"
                    >
                      Esqueceu a senha?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-ink-2/60 absolute left-3.5 top-3" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mínimo 6 caracteres"
                    className="w-full pl-10 pr-3 py-2.5 text-xs rounded-xl bg-surface border border-border text-ink placeholder:text-ink-2/40 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-primary hover:opacity-95 text-primary-text font-bold text-xs flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer shadow-editorial-md"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Aguarde...</span>
                    </>
                  ) : tab === 'login' ? (
                    <>
                      <LogIn className="w-4 h-4" />
                      <span>Acessar Plataforma</span>
                    </>
                  ) : tab === 'signup' ? (
                    <>
                      <UserPlus className="w-4 h-4" />
                      <span>Cadastrar e Iniciar Estudos</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      <span>Enviar Link de Recuperação</span>
                    </>
                  )}
                </button>
              </div>

              {tab === 'reset' && (
                <div className="text-center pt-1">
                  <button
                    type="button"
                    onClick={() => setTab('login')}
                    className="text-xs text-ink-2 hover:text-ink underline cursor-pointer"
                  >
                    Voltar para o Login
                  </button>
                </div>
              )}
            </form>

            {/* Destaque Institucional Cebraspe */}
            <div className="pt-4 border-t border-border/60">
              <div className="flex items-center gap-2.5 text-[11px] text-ink-2 bg-surface-2 p-3 rounded-xl border border-border">
                <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                <span>
                  Ambiente restrito de alta performance • Metodologia Cebraspe (1 Erro Anula 1 Certo).
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Rodapé */}
      <footer className="w-full max-w-6xl mx-auto px-4 py-4 text-center text-[11px] text-ink-2/70">
        <p>
          {CONCURSO_CONFIG.plataforma.nome} · {CONCURSO_CONFIG.instituicao.nome} ({CONCURSO_CONFIG.instituicao.esfera})
        </p>
      </footer>
    </div>
  );
};
