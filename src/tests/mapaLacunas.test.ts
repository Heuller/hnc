import { describe, it, expect } from 'vitest';
import {
  gerarRelatorioLacunas,
  DIRETRIZES_PODA_ESTRATEGICA,
  DIRETRIZES_ENRIQUECIMENTO_ESTRATEGICO,
} from '../domain/edital/mapaLacunasService';

describe('Auditoria da Fase E1: Poda Estratégica e Mapa de Lacunas do Edital nº 1/2026', () => {
  const relatorio = gerarRelatorioLacunas();

  describe('Auditoria Quantitativa e Estrutural da Teoria', () => {
    it('deve auditar rigorosamente os 14 macro-módulos e 64 submódulos', () => {
      expect(relatorio.totalEixos).toBe(14);
      expect(relatorio.totalTopicos).toBe(64);
      expect(relatorio.totalSubmodulosAuditados).toBe(64);
      expect(relatorio.eixos).toHaveLength(14);
    });

    it('deve certificar que cada macro-módulo possui seus submódulos correspondentes ao edital', () => {
      relatorio.eixos.forEach(eixo => {
        if (eixo.moduloId === 'm11') {
          expect(eixo.submodulos).toHaveLength(12);
        } else {
          expect(eixo.submodulos).toHaveLength(4);
        }
      });
    });

    it('deve atingir densidade teórica robusta (> 200.000 caracteres no total)', () => {
      expect(relatorio.totalCaracteresTeoria).toBeGreaterThan(200000);
      relatorio.eixos.forEach(eixo => {
        expect(eixo.totalCaracteres).toBeGreaterThan(10000);
      });
    });

    it('deve auditar a presença massiva de Alertas Cebraspe estruturados (> 200 alertas no total)', () => {
      expect(relatorio.totalAlertasBanca).toBeGreaterThan(200);
      relatorio.eixos.forEach(eixo => {
        expect(eixo.totalAlertas).toBeGreaterThanOrEqual(8);
      });
    });

    it('deve contabilizar exatamente 3 checkpoints formativos C/E por submódulo (192 no total)', () => {
      expect(relatorio.totalCheckpointsFormativos).toBe(192);
      relatorio.eixos.forEach(eixo => {
        if (eixo.moduloId === 'm11') {
          expect(eixo.questoesCheckpoints).toBe(36);
        } else {
          expect(eixo.questoesCheckpoints).toBe(12);
        }
        eixo.submodulos.forEach(sub => {
          expect(sub.totalCheckpoints).toBe(3);
        });
      });
    });

    it('deve validar que 100% dos 64 submódulos possuem quadros comparativos e mnemônicos', () => {
      relatorio.eixos.forEach(eixo => {
        eixo.submodulos.forEach(sub => {
          expect(sub.temQuadro).toBe(true);
          expect(sub.temMnemonicos).toBe(true);
        });
      });
      expect(relatorio.taxaProntidaoTeoricaGeral).toBe(100);
    });
  });

  describe('Auditoria de Questões e Diagnóstico de Déficit Pós-Fase E5 e Eixo 1', () => {
    it('deve reconhecer todos os 14 módulos (M1 a M14) com simulados de 100 itens concluídos', () => {
      const concluidosEsperados = [
        'M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10',
        'M11', 'M12', 'M13', 'M14'
      ];
      concluidosEsperados.forEach(modCodigo => {
        expect(relatorio.modulosSimuladoConcluidos).toContain(modCodigo);
      });
      expect(relatorio.totalQuestoesSimulados100Q).toBe(1520);
    });

    it('deve certificar que não restam módulos pendentes de simulados 100Q no edital', () => {
      expect(relatorio.modulosSimuladoPendentes).toEqual([]);
    });

    it('deve certificar déficit zero para os módulos específicos após a conclusão das Ondas M, P e X da Fase E5', () => {
      expect(relatorio.deficitTotalSimuladosE5).toBe(0);
    });

    it('deve totalizar 1.712 questões atualmente ativas no sistema (192 checkpoints formativos + 1.520 de simulados)', () => {
      expect(relatorio.totalGeralQuestoesDisponiveis).toBe(1712);
    });
  });

  describe('Diretrizes de Poda Estratégica', () => {
    it('deve conter diretrizes formais de poda para tópicos superados ou de baixíssima relevância', () => {
      expect(DIRETRIZES_PODA_ESTRATEGICA.length).toBeGreaterThanOrEqual(4);
      DIRETRIZES_PODA_ESTRATEGICA.forEach(diretriz => {
        expect(diretriz.moduloId).toBeDefined();
        expect(diretriz.topicoAlvo).toBeDefined();
        expect(diretriz.justificativaPoda).toBeDefined();
        expect(diretriz.acaoRecomendada).toBeDefined();
      });
    });

    it('deve contemplar poda específica em NBRs antigas, teorias gerais de administração e hardware obsoleto', () => {
      const podasIds = DIRETRIZES_PODA_ESTRATEGICA.map(p => p.moduloId);
      expect(podasIds).toContain('m8'); // ABNT
      expect(podasIds).toContain('m5'); // Gestão / TGA
      expect(podasIds).toContain('m6'); // Digital / Hardware
    });
  });

  describe('Diretrizes de Enriquecimento Estratégico (Ondas M, P, X, L)', () => {
    it('deve catalogar enriquecimento crítico para todos os módulos específicos que receberão simulados', () => {
      expect(DIRETRIZES_ENRIQUECIMENTO_ESTRATEGICO.length).toBe(8);
      const modulosAlvo = DIRETRIZES_ENRIQUECIMENTO_ESTRATEGICO.map(e => e.moduloId);
      ['m3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm10'].forEach(id => {
        expect(modulosAlvo).toContain(id);
      });
    });

    it('todas as diretrizes de enriquecimento da trilha específica devem ter prioridade CRITICA', () => {
      DIRETRIZES_ENRIQUECIMENTO_ESTRATEGICO.forEach(diretriz => {
        expect(diretriz.prioridadeEdital).toBe('CRITICA');
      });
    });
  });
});
