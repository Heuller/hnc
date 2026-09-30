import React from 'react';
import { BookOpen, Lock, ChevronRight } from 'lucide-react';
import { useNavigationStore } from '../../store/useNavigationStore';
import { Badge } from '../common/Badge';

export interface ModuleItem {
  id: string;
  codigo: string;
  titulo: string;
  submodulosCount: number;
  status: 'disponivel' | 'planejado';
  submodulos?: { id: string; numero: string; titulo: string }[];
}

export const COURSE_MODULES: ModuleItem[] = [
  {
    id: 'm1',
    codigo: 'M1',
    titulo: 'Fundamentos da Biblioteconomia, Documentação e CI',
    submodulosCount: 4,
    status: 'disponivel',
    submodulos: [
      { id: 'sub-1-1', numero: '1.1', titulo: 'História, Fronteiras & CI' },
      { id: 'sub-1-2', numero: '1.2', titulo: '5 Leis de Ranganathan & Releituras' },
      { id: 'sub-1-3', numero: '1.3', titulo: 'Dado, Informação e Documento' },
      { id: 'sub-1-4', numero: '1.4', titulo: 'Legislação & Código de Ética CFB' },
    ],
  },
  { id: 'm2', codigo: 'M2', titulo: 'Catalogação, Metadados e Modelos Conceituais', submodulosCount: 4, status: 'planejado' },
  { id: 'm3', codigo: 'M3', titulo: 'Classificação Documentária e Indexação', submodulosCount: 4, status: 'planejado' },
  { id: 'm4', codigo: 'M4', titulo: 'Recuperação da Informação, Fontes e Usuários', submodulosCount: 4, status: 'planejado' },
  { id: 'm5', codigo: 'M5', titulo: 'Gestão de Unidades de Informação e Coleções', submodulosCount: 4, status: 'planejado' },
  { id: 'm6', codigo: 'M6', titulo: 'Bibliotecas Digitais, Repositórios e IA', submodulosCount: 4, status: 'planejado' },
  { id: 'm7', codigo: 'M7', titulo: 'Preservação, Conservação e Memória', submodulosCount: 4, status: 'planejado' },
  { id: 'm8', codigo: 'M8', titulo: 'Normalização Documental e ABNT', submodulosCount: 4, status: 'planejado' },
  { id: 'm9', codigo: 'M9', titulo: 'Comunicação Científica e Métricas', submodulosCount: 4, status: 'planejado' },
  { id: 'm10', codigo: 'M10', titulo: 'Legislação Federal e Contexto Legislativo', submodulosCount: 4, status: 'planejado' },
];

export const Sidebar: React.FC = () => {
  const {
    activeView,
    setActiveView,
    activeSubmoduleIndex,
    setActiveSubmoduleIndex,
    sidebarCollapsed,
  } = useNavigationStore();

  if (sidebarCollapsed) {
    return null;
  }

  const handleSelectSubmodule = (index: number) => {
    setActiveSubmoduleIndex(index);
    setActiveView('teoria');
  };

  return (
    <aside
      className="w-80 shrink-0 hidden lg:block bg-theme-surface border-r border-theme overflow-y-auto sticky top-16 h-[calc(100vh-4rem)] p-4 transition-all"
      aria-label="Trilha de Módulos do Curso"
    >
      <div className="space-y-4">
        {/* Header do Mapeamento */}
        <div className="flex items-center justify-between pb-3 border-b border-theme">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-theme-accent" aria-hidden="true" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-theme-ink">
              Trilha do Edital (M1–M10)
            </h2>
          </div>
          <Badge variant="concluido" size="sm">
            M1 no ar
          </Badge>
        </div>

        {/* Lista dos Macro-Módulos */}
        <div className="space-y-2">
          {COURSE_MODULES.map((modulo) => {
            const isM1 = modulo.codigo === 'M1';

            if (isM1) {
              return (
                <div
                  key={modulo.id}
                  className="rounded-lg border border-theme bg-theme-surface-2 p-3 space-y-2.5 shadow-editorial-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-theme-accent">
                      {modulo.codigo}
                    </span>
                    <Badge variant="certo" size="sm">
                      Disponível
                    </Badge>
                  </div>

                  <h3 className="text-xs font-bold text-theme-ink leading-snug">
                    {modulo.titulo}
                  </h3>

                  {/* Submódulos de M1 */}
                  <div className="space-y-1 pt-1 border-t border-theme">
                    {modulo.submodulos?.map((sub, sIdx) => {
                      const isSelected = activeView === 'teoria' && activeSubmoduleIndex === sIdx;
                      return (
                        <button
                          key={sub.id}
                          onClick={() => handleSelectSubmodule(sIdx)}
                          className={`w-full text-left p-2 rounded text-xs flex items-center justify-between transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-theme-surface text-theme-ink font-bold border border-theme shadow-editorial-sm'
                              : 'text-theme-ink-2 hover:text-theme-ink hover:bg-theme-surface/60'
                          }`}
                        >
                          <span className="truncate pr-2">
                            <span className="font-mono font-semibold text-theme-accent mr-1.5">
                              {sub.numero}
                            </span>
                            {sub.titulo}
                          </span>
                          <ChevronRight
                            className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-theme-accent' : 'opacity-40'}`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            }

            // M2 a M10: Planejado
            return (
              <div
                key={modulo.id}
                className="p-2.5 rounded-lg border border-theme-subtle bg-theme-surface/50 opacity-70 hover:opacity-90 transition-opacity"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[11px] font-semibold text-theme-ink-2">
                    {modulo.codigo}
                  </span>
                  <Badge variant="planejado" size="sm" icon={<Lock className="w-3 h-3" />}>
                    Planejado
                  </Badge>
                </div>
                <h4 className="text-xs font-medium text-theme-ink-2 truncate">
                  {modulo.titulo}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
