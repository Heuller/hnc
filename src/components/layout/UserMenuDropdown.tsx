import React, { useState, useRef, useEffect } from 'react';
import {
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

export const UserMenuDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrefsModal, setShowPrefsModal] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { user, signOut, openAuthModal } = useAuthStore();
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

  const userInitial = user?.email ? user.email[0].toUpperCase() : 'U';
  const userName = user?.email ? user.email.split('@')[0] : '';

  return (
    <div className="relative shrink-0" ref={menuRef}>
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
        className={`flex items-center gap-1.5 py-1 px-2 sm:px-2.5 rounded-lg border text-xs font-sans font-semibold transition-all cursor-pointer min-h-[38px] select-none shrink-0 ${
          user
            ? 'bg-surface-2 border-border text-ink hover:border-accent shadow-2xs'
            : 'bg-primary hover:opacity-95 text-primary-text shadow-2xs'
        }`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label={user ? `Menu de usuário: ${user.email}` : 'Entrar na conta'}
      >
        {user ? (
          <>
            <div className="w-5 h-5 rounded-full bg-accent/20 border border-accent/40 text-accent font-bold text-xs flex items-center justify-center shrink-0">
              {userInitial}
            </div>
            <span className="hidden xl:inline max-w-[90px] truncate text-xs text-ink font-medium">
              {userName}
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-ink-2 transition-transform duration-200 shrink-0 ${
                isOpen ? 'rotate-180 text-accent' : ''
              }`}
            />
          </>
        ) : (
          <>
            <User className="w-4 h-4 shrink-0" />
            <span className="text-xs font-medium whitespace-nowrap">Entrar</span>
          </>
        )}
      </button>

      {/* Menu Suspenso Exclusivo de Conta e Configurações (P8 / U-01, U-05, U-08) */}
      {isOpen && user && (
        <div
          role="menu"
          aria-labelledby="user-menu-trigger"
          className="absolute right-0 top-12 z-50 w-72 sm:w-80 rounded-xl bg-surface border border-border shadow-xl p-2.5 space-y-2 text-xs font-sans text-ink animate-fadeIn"
        >
          {/* Cabeçalho do Usuário */}
          <div className="px-2 py-1.5 border-b border-border/60">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-2">
                Conta Conectada
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Nuvem Ativa
              </span>
            </div>
            <p className="font-semibold text-ink text-xs truncate mt-0.5" title={user.email}>
              {user.email}
            </p>
          </div>

          {/* Configurações & Preferências */}
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-2 px-2 block">
              Preferências & Backup
            </span>

            <button
              type="button"
              role="menuitem"
              onClick={() => {
                setShowPrefsModal(true);
                setIsOpen(false);
              }}
              className="w-full text-left px-2.5 py-2 rounded-lg flex items-center justify-between hover:bg-surface-2 text-ink transition-colors cursor-pointer min-h-[40px]"
            >
              <div className="flex items-center gap-2.5">
                <Sliders className="w-4 h-4 text-accent" />
                <span>Preferências de Leitura</span>
              </div>
              <span className="text-xs font-mono text-ink-2">Visual</span>
            </button>

            <button
              type="button"
              role="menuitem"
              onClick={handleExport}
              className="w-full text-left px-2.5 py-2 rounded-lg flex items-center justify-between hover:bg-surface-2 text-ink transition-colors cursor-pointer min-h-[40px]"
            >
              <div className="flex items-center gap-2.5">
                <Download className="w-4 h-4 text-accent" />
                <span>Exportar Progresso (MD)</span>
              </div>
              <span className="text-xs font-mono text-ink-2">Backup</span>
            </button>
          </div>

          {/* Modo Livre com Explicação de Uma Linha (U-08) */}
          <div className="p-2.5 rounded-lg bg-surface-2/60 border border-border/60 space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Unlock className={`w-4 h-4 ${modoLivre ? 'text-amber-500' : 'text-ink-2'}`} />
                <span className="font-semibold text-xs text-ink">Modo Livre</span>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={modoLivre}
                onClick={handleToggleModoLivre}
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  modoLivre ? 'bg-amber-500' : 'bg-surface-3'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    modoLivre ? 'translate-x-4' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            <p className="text-xs text-ink-2 leading-relaxed">
              Desbloqueia todos os módulos e simulados para consulta irrestrita.
            </p>
          </div>

          {/* Logout Padronizado sem termos em parênteses (U-08) */}
          <div className="border-t border-border/60 pt-1.5">
            <button
              type="button"
              role="menuitem"
              onClick={handleLogout}
              className="w-full text-left px-2.5 py-2 rounded-lg flex items-center gap-2.5 text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer font-medium min-h-[40px]"
            >
              <LogOut className="w-4 h-4" />
              <span>Sair da Conta</span>
            </button>
          </div>
        </div>
      )}

      {/* Modal / Dialog de Preferências de Leitura */}
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
                    { id: 'sm', label: 'Compacto' },
                    { id: 'base', label: 'Padrão' },
                    { id: 'lg', label: 'Conforto' },
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
                Tipografia
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFontFamily('sans')}
                  className={`py-2 px-3 rounded-lg border text-xs font-sans transition-all cursor-pointer ${
                    fontFamily === 'sans'
                      ? 'border-accent bg-accent/10 text-accent font-bold'
                      : 'border-border bg-surface hover:bg-surface-2 text-ink-2'
                  }`}
                >
                  Moderna (Sans)
                </button>
                <button
                  type="button"
                  onClick={() => setFontFamily('serif')}
                  className={`py-2 px-3 rounded-lg border text-xs font-serif transition-all cursor-pointer ${
                    fontFamily === 'serif'
                      ? 'border-accent bg-accent/10 text-accent font-bold'
                      : 'border-border bg-surface hover:bg-surface-2 text-ink-2'
                  }`}
                >
                  Livro (Serif)
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowPrefsModal(false)}
                className="w-full py-2.5 rounded-xl bg-accent text-accent-text font-bold text-xs hover:opacity-90 transition-opacity cursor-pointer shadow-editorial-sm"
              >
                Concluir e Aplicar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
