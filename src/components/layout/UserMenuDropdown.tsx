import React, { useState, useRef, useEffect } from 'react';
import {
  FileText,
  User,
  LogOut,
  Sliders,
  Download,
  Unlock,
  ChevronDown,
} from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { useProgressStore } from '../../store/useProgressStore';
import { useReaderPreferencesStore } from '../../store/useReaderPreferencesStore';
import { useNavigationStore } from '../../store/useNavigationStore';

export const UserMenuDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrefsModal, setShowPrefsModal] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { user, signOut, openAuthModal } = useAuthStore();
  const { setActiveView } = useNavigationStore();
  const { modoLivre, setModoLivre, exportarResumoMarkdown } = useProgressStore();
  const { fontSize, setFontSize, columnWidth, setColumnWidth, fontFamily, setFontFamily } =
    useReaderPreferencesStore();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setShowPrefsModal(false);
      }
    };

    if (isOpen || showPrefsModal) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, showPrefsModal]);

  const handleExport = () => {
    const md = exportarResumoMarkdown();
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `heuller-na-camara-progresso-${new Date().toISOString().split('T')[0]}.md`;
    link.click();
    URL.revokeObjectURL(url);
    setIsOpen(false);
  };

  const handleToggleModoLivre = () => {
    setModoLivre(!modoLivre);
  };

  const handleLogout = async () => {
    setIsOpen(false);
    await signOut();
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Botão Gatilho */}
      <button
        type="button"
        id="user-menu-trigger"
        onClick={() => {
          if (!user) {
            openAuthModal();
          } else {
            setIsOpen((prev) => !prev);
          }
        }}
        className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg border text-xs font-sans font-semibold transition-all cursor-pointer min-h-[40px] select-none ${
          user
            ? 'bg-surface-2 border-border text-ink hover:border-accent shadow-xs'
            : 'bg-primary hover:opacity-95 text-primary-text shadow-xs'
        }`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label={user ? `Menu de usuário: ${user.email}` : 'Entrar na conta'}
      >
        <User className="w-3.5 h-3.5 text-accent" />
        <span className="hidden sm:inline font-sans truncate max-w-[120px]">
          {user ? user.email?.split('@')[0] : 'Entrar'}
        </span>
        {user ? (
          <>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <ChevronDown className="w-3 h-3 text-ink-2" />
          </>
        ) : null}
      </button>

      {/* Menu Suspenso */}
      {isOpen && user && (
        <div
          role="menu"
          aria-labelledby="user-menu-trigger"
          className="absolute right-0 top-12 z-50 w-64 rounded-xl bg-surface border border-border shadow-xl p-2 space-y-1 text-xs font-sans text-ink animate-fadeIn"
        >
          {/* Cabeçalho do Usuário */}
          <div className="px-3 py-2 border-b border-border/60">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-ink-2">
                Conta Conectada
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Nuvem
              </span>
            </div>
            <p className="font-semibold text-ink text-xs truncate mt-0.5">
              {user.email}
            </p>
          </div>

          {/* Opções de Estudo e Preferências */}
          <div className="py-1 space-y-0.5">
            <button
              type="button"
              role="menuitem"
              onClick={() => {
                setShowPrefsModal(true);
                setIsOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg flex items-center justify-between hover:bg-surface-2 text-ink transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Sliders className="w-4 h-4 text-accent" />
                <span>Preferências de Leitura</span>
              </div>
              <span className="text-[10px] font-mono text-ink-2">U.5</span>
            </button>

            <button
              type="button"
              role="menuitem"
              onClick={() => {
                setActiveView('edital');
                setIsOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg flex items-center justify-between hover:bg-surface-2 text-ink transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Edital Oficial 2026 (Quadro & Regras)</span>
              </div>
            </button>

            <button
              type="button"
              role="menuitem"
              onClick={handleExport}
              className="w-full text-left px-3 py-2 rounded-lg flex items-center justify-between hover:bg-surface-2 text-ink transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Download className="w-4 h-4 text-accent" />
                <span>Exportar Progresso (MD)</span>
              </div>
            </button>

            <button
              type="button"
              role="menuitem"
              onClick={handleToggleModoLivre}
              className="w-full text-left px-3 py-2 rounded-lg flex items-center justify-between hover:bg-surface-2 text-ink transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Unlock className={`w-4 h-4 ${modoLivre ? 'text-amber-500' : 'text-ink-2'}`} />
                <span>Modo Livre</span>
              </div>
              <span
                className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                  modoLivre
                    ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                    : 'bg-surface-2 text-ink-2 border border-border'
                }`}
              >
                {modoLivre ? 'ATIVO' : 'DESL.'}
              </span>
            </button>
          </div>

          <div className="border-t border-border/60 pt-1">
            <button
              type="button"
              role="menuitem"
              onClick={handleLogout}
              className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-2.5 text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer font-medium"
            >
              <LogOut className="w-4 h-4" />
              <span>Sair da Conta (Logout)</span>
            </button>
          </div>
        </div>
      )}

      {/* Modal / Dialog de Preferências de Leitura (U.5) */}
      {showPrefsModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="reader-prefs-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-xs animate-fadeIn"
        >
          <div className="bg-surface rounded-2xl border border-border shadow-2xl p-6 w-full max-w-sm space-y-5 text-ink">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-accent" />
                <h3 id="reader-prefs-title" className="font-serif font-bold text-base text-ink">
                  Preferências de Leitura
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowPrefsModal(false)}
                className="text-xs text-ink-2 hover:text-ink cursor-pointer p-1"
                aria-label="Fechar modal"
              >
                ✕
              </button>
            </div>

            {/* Tamanho da Fonte */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-ink-2 uppercase tracking-wide">
                Tamanho da Fonte Teórica
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(
                  [
                    { id: 'sm', label: 'Pequena (15px)' },
                    { id: 'base', label: 'Padrão (17px)' },
                    { id: 'lg', label: 'Grande (19px)' },
                  ] as const
                ).map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setFontSize(opt.id)}
                    className={`py-2 px-2 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                      fontSize === opt.id
                        ? 'bg-accent text-accent-text border-accent font-bold'
                        : 'bg-surface-2 border-border text-ink hover:border-accent'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Largura da Coluna */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-ink-2 uppercase tracking-wide">
                Largura do Bloco de Texto
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(
                  [
                    { id: 'focus', label: 'Foco (68ch)' },
                    { id: 'default', label: 'Padrão (75ch)' },
                    { id: 'wide', label: 'Amplo (85ch)' },
                  ] as const
                ).map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setColumnWidth(opt.id)}
                    className={`py-2 px-2 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                      columnWidth === opt.id
                        ? 'bg-accent text-accent-text border-accent font-bold'
                        : 'bg-surface-2 border-border text-ink hover:border-accent'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Família Tipográfica */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-ink-2 uppercase tracking-wide">
                Tipografia do Texto de Leitura
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(
                  [
                    { id: 'serif', label: 'Serifada (Editorial)' },
                    { id: 'sans', label: 'Sem Serifa (Inter)' },
                  ] as const
                ).map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setFontFamily(opt.id)}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                      fontFamily === opt.id
                        ? 'bg-accent text-accent-text border-accent font-bold'
                        : 'bg-surface-2 border-border text-ink hover:border-accent'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-border flex justify-end">
              <button
                type="button"
                onClick={() => setShowPrefsModal(false)}
                className="py-1.5 px-4 rounded-lg bg-surface-2 hover:bg-surface-3 border border-border text-ink font-semibold text-xs transition-colors cursor-pointer"
              >
                Concluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
