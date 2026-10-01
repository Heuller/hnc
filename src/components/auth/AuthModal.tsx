import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, LogIn, UserPlus, LogOut, CheckCircle2, AlertCircle, Loader2, User, KeyRound, Mail } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { supabase } from '../../lib/supabase';
import { progressSyncService } from '../../services/progressSyncService';
import { useProgressStore } from '../../store/useProgressStore';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { user, signOut } = useAuthStore();
  const [tab, setTab] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

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
          setErrorMsg(error.message === 'Invalid login credentials' 
            ? 'E-mail ou senha incorretos.' 
            : error.message);
          setLoading(false);
          return;
        }

        if (data.user) {
          setSuccessMsg('Login efetuado com sucesso!');
          // Tenta puxar progresso da nuvem
          const cloudProgress = await progressSyncService.baixarProgressoNuvem(data.user.id);
          if (cloudProgress) {
            useProgressStore.setState((state) => ({
              ...state,
              ...cloudProgress,
            }));
          }
          setTimeout(() => {
            onClose();
          }, 800);
        }
      } else {
        // Cadastro
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
            emailRedirectTo: window.location.origin,
          },
        });

        if (error) {
          setErrorMsg(error.message);
          setLoading(false);
          return;
        }

        if (data.session) {
          setSuccessMsg('Conta criada com sucesso! Sincronização ativada.');
          setTimeout(() => {
            onClose();
          }, 1000);
        } else {
          setSuccessMsg('Cadastro realizado! Verifique a caixa de entrada do seu e-mail para confirmar a conta.');
        }
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Ocorreu um erro ao autenticar.';
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-md rounded-2xl bg-surface border border-border shadow-2xl p-6 z-10 text-ink space-y-5"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/60 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold font-serif leading-tight">
                  {user ? 'Minha Conta · HNC' : 'Acesso à Plataforma'}
                </h3>
                <p className="text-[11px] text-ink-2">
                  {user ? 'Sincronização em nuvem ativa' : 'Sincronize seu estudo entre computador e celular'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-ink-2 hover:text-ink hover:bg-surface-2 transition-colors cursor-pointer"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Se o usuário já estiver logado */}
          {user ? (
            <div className="space-y-4 py-2">
              <div className="p-4 rounded-xl bg-surface-2 border border-border space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-accent">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Conectado ao Supabase</span>
                </div>
                <div className="text-sm font-bold truncate text-ink">{user.email}</div>
                <div className="text-xs text-ink-2">
                  Cargo-alvo: <span className="font-semibold text-ink">Analista Legislativo (Câmara dos Deputados)</span>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={async () => {
                    await signOut();
                    onClose();
                  }}
                  className="px-4 py-2 rounded-lg bg-err/10 hover:bg-err/20 text-err text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sair da Conta</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-surface-2 border border-border hover:bg-surface text-ink text-xs font-semibold cursor-pointer"
                >
                  Concluir
                </button>
              </div>
            </div>
          ) : (
            /* Formulário de Login / Cadastro */
            <div className="space-y-4">
              {/* Abas Alternadoras */}
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
                  <span>Cadastrar</span>
                </button>
              </div>

              {/* Mensagens de Feedback */}
              {errorMsg && (
                <div className="p-3 rounded-lg bg-err-soft border border-err/30 text-err text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {successMsg && (
                <div className="p-3 rounded-lg bg-ok-soft border border-ok/30 text-ok text-xs flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{successMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                {tab === 'signup' && (
                  <div>
                    <label className="block text-xs font-semibold text-ink-2 mb-1">
                      Nome Completo
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-ink-2/60 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Ex: Heuller Rodrigues"
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-surface border border-border text-ink focus:border-accent focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-ink-2 mb-1">
                    E-mail
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-ink-2/60 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu-email@exemplo.com"
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-surface border border-border text-ink focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ink-2 mb-1">
                    Senha
                  </label>
                  <div className="relative">
                    <KeyRound className="w-4 h-4 text-ink-2/60 absolute left-3 top-2.5" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Mínimo 6 caracteres"
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-surface border border-border text-ink focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 rounded-lg bg-primary hover:opacity-95 text-primary-text font-bold text-xs flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer shadow-editorial-sm"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Processando...</span>
                      </>
                    ) : tab === 'login' ? (
                      <>
                        <LogIn className="w-4 h-4" />
                        <span>Entrar na Plataforma</span>
                      </>
                    ) : (
                      <>
                        <UserPlus className="w-4 h-4" />
                        <span>Criar Minha Conta</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
