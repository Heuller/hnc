import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  BookOpen,
  User,
  AlertTriangle,
  Award,
  ArrowRight,
  X,
  FileText,
} from 'lucide-react';
import { COURSE_REGISTRY } from '../../content/registry';
import { simuladoFundamentos100Q } from '../../content/questions/m1-fundamentos-100q';
import { useNavigationStore } from '../../store/useNavigationStore';
import { Kbd } from './Kbd';

interface SearchResultItem {
  id: string;
  tipo: 'submodulo' | 'autor' | 'alerta' | 'simulado';
  titulo: string;
  subtitulo: string;
  trecho: string;
  submoduloId?: string;
  questaoNumero?: number;
}

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { setActiveView, setSelectedSubmodule } = useNavigationStore();

  // Foco no input ao abrir
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Indexação em memória dos dados da plataforma
  const searchIndex = useMemo(() => {
    const items: SearchResultItem[] = [];

    // 1. Submódulos e Seus Conteúdos
    for (const macro of COURSE_REGISTRY) {
      for (const sub of macro.modulosFilhos) {
        // O próprio submódulo
        items.push({
          id: `sub-${sub.id}`,
          tipo: 'submodulo',
          titulo: `Submódulo ${sub.numero}: ${sub.titulo}`,
          subtitulo: `${macro.codigo} · ${macro.titulo}`,
          trecho: sub.descricaoCurta,
          submoduloId: sub.id,
        });

        // Autores-chave
        for (const autor of sub.autoresChave) {
          items.push({
            id: `aut-${sub.id}-${autor}`,
            tipo: 'autor',
            titulo: autor,
            subtitulo: `Autor Canônico · Submódulo ${sub.numero}`,
            trecho: `Estudado no submódulo ${sub.numero}: ${sub.titulo}`,
            submoduloId: sub.id,
          });
        }

        // Alertas Cebraspe
        for (let i = 0; i < sub.alertasCebraspe.length; i++) {
          const alerta = sub.alertasCebraspe[i];
          items.push({
            id: `alerta-${sub.id}-${i}`,
            tipo: 'alerta',
            titulo: `Alerta da Banca · Submódulo ${sub.numero}`,
            subtitulo: sub.titulo,
            trecho: alerta,
            submoduloId: sub.id,
          });
        }
      }
    }

    // 2. Questões do Simulado 100Q
    for (const q of simuladoFundamentos100Q) {
      items.push({
        id: `sim-${q.id}`,
        tipo: 'simulado',
        titulo: `Simulado 100Q · Questão ${q.numero}`,
        subtitulo: `Submódulo ${q.submoduloId} · Gabarito: ${q.gabarito}`,
        trecho: q.item,
        questaoNumero: q.numero,
        submoduloId: q.submoduloId,
      });
    }

    return items;
  }, []);

  // Filtragem
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return searchIndex
      .filter((item) => {
        return (
          item.titulo.toLowerCase().includes(q) ||
          item.subtitulo.toLowerCase().includes(q) ||
          item.trecho.toLowerCase().includes(q)
        );
      })
      .slice(0, 12); // Limita a 12 resultados para performance e ergonomia
  }, [query, searchIndex]);

  // Teclas de navegação (Cima, Baixo, Enter, Escape)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1 < results.length ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 >= 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelectItem(results[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  const handleSelectItem = (item: SearchResultItem) => {
    if (item.tipo === 'simulado') {
      setActiveView('simulado');
    } else if (item.submoduloId) {
      setSelectedSubmodule(item.submoduloId);
      setActiveView('teoria');
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-3 sm:px-4">
        {/* Backdrop escuro com blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal de Busca */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -8 }}
          transition={{ duration: 0.15 }}
          className="relative w-full max-w-2xl bg-surface rounded-2xl border border-border shadow-2xl overflow-hidden flex flex-col max-h-[80vh] z-10"
        >
          {/* Campo de Entrada de Busca */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border bg-surface-2/40">
            <Search className="w-5 h-5 text-accent shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Buscar por conceito, autor (ex: Briet, Borko, MARC), alerta ou regra..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent text-ink text-sm sm:text-base placeholder:text-ink-2/60 focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="text-ink-2 hover:text-ink p-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <div className="hidden sm:flex items-center gap-1 shrink-0">
              <Kbd>ESC</Kbd>
            </div>
          </div>

          {/* Lista de Resultados */}
          <div className="overflow-y-auto p-2 space-y-1 divide-y divide-border/30">
            {query.trim() === '' ? (
              <div className="py-12 px-4 text-center space-y-2">
                <FileText className="w-8 h-8 text-ink-2/40 mx-auto" />
                <p className="text-xs text-ink-2 font-serif m-0">
                  Digite para buscar em todos os 40 submódulos, autores canônicos, alertas Cebraspe e questões.
                </p>
                <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                  {['Ranganathan', 'MARC 21', 'Briet', 'CDD', 'Revocação', 'LAI', 'LRM'].map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setQuery(tag)}
                      className="px-2 py-0.5 rounded-full bg-surface-2 border border-border text-[11px] font-mono text-ink-2 hover:text-ink hover:border-accent cursor-pointer transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            ) : results.length === 0 ? (
              <div className="py-12 px-4 text-center space-y-1">
                <p className="text-sm font-bold text-ink m-0">Nenhum resultado para "{query}"</p>
                <p className="text-xs text-ink-2 font-serif m-0">
                  Tente buscar pelo nome do autor, número de campo MARC ou termo teórico.
                </p>
              </div>
            ) : (
              results.map((item, idx) => {
                const isSelected = selectedIndex === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectItem(item)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full text-left p-3 rounded-xl transition-colors cursor-pointer flex items-start justify-between gap-3 ${
                      isSelected
                        ? 'bg-accent/10 border border-accent/30 text-ink'
                        : 'hover:bg-surface-2/60 text-ink border border-transparent'
                    }`}
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="mt-0.5 shrink-0 text-accent">
                        {item.tipo === 'submodulo' && <BookOpen className="w-4 h-4" />}
                        {item.tipo === 'autor' && <User className="w-4 h-4" />}
                        {item.tipo === 'alerta' && <AlertTriangle className="w-4 h-4 text-amber-500" />}
                        {item.tipo === 'simulado' && <Award className="w-4 h-4 text-indigo-500" />}
                      </div>

                      <div className="min-w-0 space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs sm:text-sm text-ink truncate">
                            {item.titulo}
                          </span>
                          <span className="text-[10px] font-mono uppercase px-1.5 py-0.2 rounded bg-surface-2 text-ink-2 shrink-0">
                            {item.tipo}
                          </span>
                        </div>

                        <p className="text-[11px] text-ink-2/80 truncate font-mono m-0">
                          {item.subtitulo}
                        </p>

                        <p className="text-xs text-ink-2 font-serif line-clamp-2 leading-relaxed m-0 pt-0.5">
                          {item.trecho}
                        </p>
                      </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-accent shrink-0 mt-2 opacity-60" />
                  </button>
                );
              })
            )}
          </div>

          {/* Rodapé do Modal com Atalhos */}
          <div className="px-4 py-2 bg-surface-2/60 border-t border-border flex items-center justify-between text-[11px] text-ink-2 font-mono">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Kbd>↑</Kbd> <Kbd>↓</Kbd> Navegar
              </span>
              <span className="flex items-center gap-1">
                <Kbd>↵</Kbd> Selecionar
              </span>
            </div>
            <span>{results.length} resultados</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
