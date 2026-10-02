import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, LogIn, LogOut, CheckCircle2, AlertCircle, Loader2, User, KeyRound } from 'lucide-react';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

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
      const { data, error } = await supabase.auth.signInWithPassword({
        email: resolveEmail(email),
        password,
      });

      if (error) {
        setErrorMsg(error.message === 'Invalid login credentials' 
          ? 'Usuário ou senha incorretos.' 
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
                  {user ? 'Minha Conta · HNC' : 'Acesso'}
                </h3>
                <p className="text-[11px] text-ink-2">
                  {user ? 'Sincronização em nuvem ativa' : 'Acesse sua conta para continuar'}
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
                  <span>Conectado à nuvem</span>
                </div>
                <div className="text-sm font-bold truncate text-ink">{user.email}</div>
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
            /* Formulário de Login */
            <div className="space-y-4">
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
                <div>
                  <label className="block text-xs font-semibold text-ink-2 mb-1">
                    Usuário ou E-mail
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-ink-2/60 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      autoComplete="username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="teste ou seu-email@exemplo.com"
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
                      autoComplete="current-password"
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
                    ) : (
                      <>
                        <LogIn className="w-4 h-4" />
                        <span>Entrar</span>
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
