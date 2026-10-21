// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PainelMnemonicosLegislativo } from '../components/common/PainelMnemonicosLegislativo';
import { SimuladoWizard } from '../components/adaptiveQuiz/SimuladoWizard';
import { FolhaVesperaPage } from '../pages/FolhaVesperaPage';

describe('Fase 5 - Didática Elevada (PainelMnemonicosLegislativo)', () => {
  it('renderiza os mnemônicos essenciais da CF/88 e Processo Legislativo', () => {
    render(<PainelMnemonicosLegislativo />);

    expect(screen.getByText('SO-CI-DI-VA-PLU')).toBeDefined();
    expect(screen.getByText('CON-GAR-ER-PRO')).toBeDefined();
    expect(screen.getByText('5 - 15 - 25 - 100')).toBeDefined();
    expect(screen.getByText(/Quórum de Emenda Constitucional/i)).toBeDefined();
  });

  it('expande o detalhamento ao clicar no mnemônico', () => {
    render(<PainelMnemonicosLegislativo />);

    const mnemBtn = screen.getByText('CON-GAR-ER-PRO');
    fireEvent.click(mnemBtn);

    expect(screen.getByText(/Todos os objetivos fundamentais da CF\/88/i)).toBeDefined();
  });
});

describe('Fase 5 - Assistente Multietapas (SimuladoWizard)', () => {
  it('permite avançar pelas 4 etapas do wizard com validação de parâmetros', () => {
    const onIniciar = vi.fn();
    const setQtdItens = vi.fn();
    const setModoFoco = vi.fn();
    const setModoFeedback = vi.fn();

    const mockVulnerabilidades = [
      {
        macroModuloId: 'm10',
        titulo: 'Processo Legislativo',
        taxaErro: 45,
        totalErros: 9,
        totalTentativas: 20,
        nivelGravidade: 'CRITICA' as const,
        pontosCegosIdentificados: ['Quórum de PEC e MPV'],
      },
    ];

    render(
      <SimuladoWizard
        vulnerabilidades={mockVulnerabilidades}
        qtdItens={10}
        setQtdItens={setQtdItens}
        modoFoco="fraquezas_criticas"
        setModoFoco={setModoFoco}
        modoFeedback="cego"
        setModoFeedback={setModoFeedback}
        onIniciar={onIniciar}
        gerando={false}
      />
    );

    // Etapa 1
    expect(screen.getByText(/ETAPA 1 DE 4/i)).toBeDefined();
    expect(screen.getByText(/Diagnóstico Inteligente de Fraquezas/i)).toBeDefined();

    // Avança para Etapa 2
    fireEvent.click(screen.getByText('Próximo Passo'));
    expect(screen.getByText(/ETAPA 2 DE 4/i)).toBeDefined();
    expect(screen.getByText(/Quantidade de Itens no Treino/i)).toBeDefined();

    // Avança para Etapa 3
    fireEvent.click(screen.getByText('Próximo Passo'));
    expect(screen.getByText(/ETAPA 3 DE 4/i)).toBeDefined();
    expect(screen.getByText(/Modo Simulado Cego/i)).toBeDefined();
    expect(screen.getByText(/Modo Hipercorreção/i)).toBeDefined();

    // Avança para Etapa 4
    fireEvent.click(screen.getByText('Próximo Passo'));
    expect(screen.getByText(/ETAPA 4 DE 4/i)).toBeDefined();
    expect(screen.getByText(/Resumo da Configuração do Simulado/i)).toBeDefined();

    // Dispara Simulado
    const btnIniciar = screen.getByText('Iniciar Simulado Adaptativo');
    fireEvent.click(btnIniciar);
    expect(onIniciar).toHaveBeenCalled();
  });
});

describe('Fase 5 - Folha de Véspera (Modo Treino Ativo & Mnemônicos)', () => {
  it('exibe a aba de Fórmulas Mnemônicas e permite alternar abas', () => {
    render(<FolhaVesperaPage />);

    const tabMnemonicos = screen.getByText(/Fórmulas Mnemônicas \(Teach\)/i);
    expect(tabMnemonicos).toBeDefined();

    fireEvent.click(tabMnemonicos);
    expect(screen.getByText(/Mnemônicos Estratégicos Cebraspe/i)).toBeDefined();
  });

  it('permite ativar e desativar o Modo Treino de Véspera (Active Recall)', () => {
    render(<FolhaVesperaPage />);

    const btnAtivar = screen.getByText(/Ativar Treino de Véspera \(Recall\)/i);
    fireEvent.click(btnAtivar);

    expect(screen.getByText(/Modo Treino Ativo Ligado/i)).toBeDefined();
    expect(screen.getByText(/Mudar para Leitura Sintética/i)).toBeDefined();
  });
});
