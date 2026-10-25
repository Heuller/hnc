import React, { useState } from 'react';
import { Drawer } from 'vaul';
import {
  MoreHorizontal,
  Sun,
  Moon,
  Laptop,
  Download,
  Flame,
  User,
  LogOut,
  Unlock,
  RotateCcw,
  BarChart3,
  PenTool,
  FileText,
  BookMarked,
  X,
  Palette,
  Layers,
} from 'lucide-react';
import { useNavigationStore } from '../../store/useNavigationStore';
import { useAuthStore } from '../../store/useAuthStore';
import { useProgressStore } from '../../store/useProgressStore';
import { hojeLocalIso } from '../../utils/dataLocal';

export const MobileMoreMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setActiveView } = useNavigationStore();
  const { user, openAuthModal, signOut } = useAuthStore();
  const { modoLivre, setModoLivre, exportarResumoMarkdown } = useProgressStore();

  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'auto'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme-preference') as 'light' | 'dark' | 'auto' | null;
      return saved || 'auto';
    }
    return 'auto';
  });

  const applyTheme = (theme: 'light' | 'dark' | 'auto') => {
    setCurrentTheme(theme);
    localStorage.setItem('theme-preference', theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('dark', 'light');
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      }
    }
    setIsOpen(false);
  };

  const handleExport = () => {
    const md = exportarResumoMarkdown();
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `heuller-na-camara-progresso-${hojeLocalIso()}.md`;
    link.click();
    URL.revokeObjectURL(url);
    setIsOpen(false);
  };

  const handleReloadApp = async () => {
    setIsOpen(false);
    if ('serviceWorker' in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      for (const reg of regs) {
        await reg.unregister();
      }
    }
    if ('caches' in window) {
      const keys = await caches.keys();
      for (const key of keys) {
        await caches.delete(key);
      }
    }
    window.location.reload();
  };

  const handleLogout = async () => {
    setIsOpen(false);
    await signOut();
  };

  return (
    <div className="md:hidden">
      <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
        <Drawer.Trigger asChild>
          <button
            type="button"
            className="min-h-[44px] min-w-[44px] p-2 rounded-lg text-ink-2 hover:text-ink hover:bg-surface-2 transition-colors flex items-center justify-center cursor-pointer border border-transparent hover:border-border"
            aria-label="Abrir menu de opções e referência"
          >
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </Drawer.Trigger>

        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/60 z-50 backdrop-blur-xs" />
          <Drawer.Content className="bg-surface border-t border-border flex flex-col rounded-t-2xl max-h-[85dvh] fixed bottom-0 left-0 right-0 z-50 foco focus-visible:ring-2 focus-visible:ring-accent">
            <div className="p-4 bg-surface rounded-t-2xl flex flex-col max-h-[85dvh]">
              {/* Alça visual de arraste */}
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-border mb-3" />

              {/* Cabeçalho da Gaveta */}
              <div className="flex items-center justify-between pb-3 border-b border-border shrink-0">
                <Drawer.Title className="font-sans font-bold text-ink text-sm">
                  Mais Opções & Referência
                </Drawer.Title>
                <Drawer.Description className="sr-only">
                  Ferramentas de estudo, temas visuais e configurações da plataforma
                </Drawer.Description>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-ink-2 hover:text-ink hover:bg-surface-2 cursor-pointer"
                  aria-label="Fechar gaveta de opções"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Conteúdo com rolagem interna e overscroll-contain */}
              <div className="flex-1 overflow-y-auto overscroll-contain py-3 space-y-4 text-xs font-sans text-ink">
                {/* Seção 1: Referência & Estudo Especializado */}
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-ink-2 uppercase tracking-wider px-2 block">
                    Referência & Estudo
                  </span>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveView('discursiva');
                      setIsOpen(false);
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between hover:bg-surface-2 text-ink transition-colors min-h-[44px] cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <PenTool className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span className="font-medium">Oficina Discursiva</span>
                    </div>
                    <span className="text-xs font-mono text-ink-2 bg-surface-2 px-1.5 py-0.5 rounded border border-border">
                      Discursivas
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveView('folha-vespera');
                      setIsOpen(false);
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between hover:bg-surface-2 text-ink transition-colors min-h-[44px] cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <Flame className="w-4 h-4 text-amber-500 shrink-0" />
                      <span className="font-medium">Folha de Véspera</span>
                    </div>
                    <span className="text-xs font-mono text-ink-2 bg-surface-2 px-1.5 py-0.5 rounded border border-border">
                      Revisão de 48 h
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveView('edital');
                      setIsOpen(false);
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between hover:bg-surface-2 text-ink transition-colors min-h-[44px] cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-indigo-500 shrink-0" />
                      <span className="font-medium">Edital Oficial 2026</span>
                    </div>
                    <span className="text-xs font-mono text-ink-2 bg-surface-2 px-1.5 py-0.5 rounded border border-border">
                      Edital 1/2026
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveView('caderno-erros');
                      setIsOpen(false);
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between hover:bg-surface-2 text-ink transition-colors min-h-[44px] cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <BookMarked className="w-4 h-4 text-rose-500 shrink-0" />
                      <span className="font-medium">Caderno de Erros</span>
                    </div>
                    <span className="text-xs font-mono text-ink-2 bg-surface-2 px-1.5 py-0.5 rounded border border-border">
                      Erros e hipercorreção
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveView('radar');
                      setIsOpen(false);
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between hover:bg-surface-2 text-ink transition-colors min-h-[44px] cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <BarChart3 className="w-4 h-4 text-accent shrink-0" />
                      <span className="font-medium">Radar Cebraspe</span>
                    </div>
                    <span className="text-xs font-mono text-ink-2 bg-surface-2 px-1.5 py-0.5 rounded border border-border">
                      Padrões da banca
                    </span>
                  </button>
                </div>

                {/* Seção 2: Aparência */}
                <div className="space-y-1 pt-2 border-t border-border/50">
                  <span className="text-xs font-mono font-bold text-ink-2 uppercase tracking-wider px-2 block">
                    Aparência
                  </span>

                  <div className="grid grid-cols-3 gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => applyTheme('light')}
                      className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs min-h-[44px] cursor-pointer transition-colors ${
                        currentTheme === 'light'
                          ? 'border-accent bg-accent/10 font-bold text-accent'
                          : 'border-border bg-surface-2 text-ink-2 hover:text-ink'
                      }`}
                    >
                      <Sun className="w-4 h-4 mb-1 text-amber-500" />
                      <span>Claro</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => applyTheme('dark')}
                      className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs min-h-[44px] cursor-pointer transition-colors ${
                        currentTheme === 'dark'
                          ? 'border-accent bg-accent/10 font-bold text-accent'
                          : 'border-border bg-surface-2 text-ink-2 hover:text-ink'
                      }`}
                    >
                      <Moon className="w-4 h-4 mb-1 text-blue-400" />
                      <span>Escuro</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => applyTheme('auto')}
                      className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs min-h-[44px] cursor-pointer transition-colors ${
                        currentTheme === 'auto'
                          ? 'border-accent bg-accent/10 font-bold text-accent'
                          : 'border-border bg-surface-2 text-ink-2 hover:text-ink'
                      }`}
                    >
                      <Laptop className="w-4 h-4 mb-1 text-slate-400" />
                      <span>Auto</span>
                    </button>
                  </div>
                </div>

                {/* Seção 3: Conta & Dados */}
                <div className="space-y-1.5 pt-2 border-t border-border/50">
                  <span className="text-xs font-mono font-bold text-ink-2 uppercase tracking-wider px-2 block">
                    Conta & Dados
                  </span>

                  {/* Modo Livre com explicação de uma linha (U-08) */}
                  <div className="p-3 rounded-xl bg-surface-2/60 border border-border/60 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Unlock className={`w-4 h-4 ${modoLivre ? 'text-amber-500' : 'text-ink-2'}`} />
                        <span className="font-semibold text-xs text-ink">Modo Livre</span>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={modoLivre}
                        aria-label="Alternar Modo Livre"
                        onClick={() => setModoLivre(!modoLivre)}
                        className="min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer -mr-2 foco focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
                      >
                        <span
                          className={`relative inline-flex h-6 w-11 shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                            modoLivre ? 'bg-amber-500' : 'bg-surface-3'
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                              modoLivre ? 'translate-x-5' : 'translate-x-0'
                            }`}
                          />
                        </span>
                      </button>
                    </div>
                    <p className="text-xs text-ink-2 leading-relaxed">
                      Desbloqueia todos os módulos e simulados para consulta irrestrita.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleExport}
                    className="w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between hover:bg-surface-2 text-ink transition-colors min-h-[44px] cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <Download className="w-4 h-4 text-accent shrink-0" />
                      <span className="font-medium">Exportar Progresso (MD)</span>
                    </div>
                    <span className="text-xs font-mono text-ink-2">Backup</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleReloadApp}
                    className="w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-2.5 hover:bg-surface-2 text-accent font-medium transition-colors min-h-[44px] cursor-pointer border border-border/40 rounded-xl"
                  >
                    <RotateCcw className="w-4 h-4 text-accent shrink-0" />
                    <span>Recarregar Aplicativo</span>
                  </button>

                  {user ? (
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-2.5 text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 transition-colors min-h-[44px] cursor-pointer font-medium"
                    >
                      <LogOut className="w-4 h-4 shrink-0" />
                      <span>Sair da Conta</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setIsOpen(false);
                        openAuthModal();
                      }}
                      className="w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-2.5 text-accent hover:bg-accent/10 transition-colors min-h-[44px] cursor-pointer font-medium"
                    >
                      <User className="w-4 h-4 shrink-0" />
                      <span>Entrar / Criar Conta</span>
                    </button>
                  )}
                </div>

                {/* Seção 4: DEV se aplicável */}
                {import.meta.env.DEV && (
                  <div className="space-y-1 pt-2 border-t border-border/50">
                    <span className="text-xs font-mono font-bold text-ink-2 uppercase tracking-wider px-2 block">
                      Desenvolvimento
                    </span>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveView('dev-rascunhos');
                        setIsOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-2.5 hover:bg-surface-2 text-accent font-medium min-h-[44px] cursor-pointer"
                    >
                      <Layers className="w-4 h-4 shrink-0" />
                      <span>Homologar Itens R4 (DEV)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveView('design-system');
                        setIsOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-2.5 hover:bg-surface-2 text-amber-600 dark:text-amber-400 font-medium min-h-[44px] cursor-pointer"
                    >
                      <Palette className="w-4 h-4 shrink-0" />
                      <span>Design System (DEV)</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};
