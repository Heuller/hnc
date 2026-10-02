import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Sparkles } from 'lucide-react';
import { useDicionarioStore } from '../../store/useDicionarioStore';

export const TextSelectionListener: React.FC = () => {
  const { abrirDicionario, isModalOpen } = useDicionarioStore();
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
  const [selectedText, setSelectedText] = useState('');
  const [contextSentence, setContextSentence] = useState('');
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Se o modal estiver aberto, não exibe o botão flutuante de seleção
    if (isModalOpen) {
      setPosition(null);
      return;
    }

    const handleSelectionChange = () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) {
        setPosition(null);
        setSelectedText('');
        return;
      }

      const text = selection.toString().trim();

      // Validação: apenas seleções de tamanho razoável (entre 2 e 60 caracteres, até 6 palavras)
      if (text.length >= 2 && text.length <= 60 && text.split(/\s+/).length <= 6) {
        // Ignora seleções dentro de inputs ou botões
        const anchorNode = selection.anchorNode;
        if (anchorNode && anchorNode.parentElement) {
          const tagName = anchorNode.parentElement.tagName.toLowerCase();
          if (['input', 'textarea', 'button'].includes(tagName)) {
            setPosition(null);
            return;
          }
        }

        try {
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();

          if (rect && (rect.width > 0 || rect.height > 0)) {
            // Extrai a frase circundante como contexto
            const fullText = anchorNode?.textContent || '';
            setContextSentence(fullText.slice(0, 200));
            setSelectedText(text);

            // Posiciona o tooltip logo acima da seleção
            const top = Math.max(10, rect.top + window.scrollY - 44);
            const left = Math.max(10, rect.left + window.scrollX + rect.width / 2);

            setPosition({ top, left });
          }
        } catch {
          setPosition(null);
        }
      } else {
        setPosition(null);
      }
    };

    // Usar mouseup e touchend para garantir que o usuário terminou a seleção
    document.addEventListener('mouseup', handleSelectionChange);
    document.addEventListener('touchend', handleSelectionChange);

    return () => {
      document.removeEventListener('mouseup', handleSelectionChange);
      document.removeEventListener('touchend', handleSelectionChange);
    };
  }, [isModalOpen]);

  if (!position || !selectedText) return null;

  return (
    <div
      ref={buttonRef}
      style={{
        position: 'absolute',
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: 'translateX(-50%)',
        zIndex: 9999,
      }}
      className="animate-in fade-in zoom-in-95 duration-150"
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          abrirDicionario(selectedText, contextSentence);
          setPosition(null);
        }}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-primary dark:bg-amber-500 dark:text-ink shadow-lg rounded-full hover:scale-105 active:scale-95 transition-all cursor-pointer border border-primary/20 dark:border-amber-400"
        title={`Definir "${selectedText}" no Dicionário de Biblioteconomia`}
      >
        <BookOpen className="w-3.5 h-3.5" />
        <span>Definir no Dicionário</span>
        <Sparkles className="w-3 h-3 text-amber-300 dark:text-primary opacity-80" />
      </button>
    </div>
  );
};
