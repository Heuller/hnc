import { describe, it, expect } from 'vitest';
import { CebraspeQuestionSchema } from '../domain/schemas/question.schema';
import {
  PROTOTIPOS_VALIDACAO_E4,
  prototipoM3Classificacao,
  prototipoM8Normalizacao,
  prototipoM10Legislativo,
} from '../content/prototypes';
import { validarSimetriaCebraspe } from '../domain/edital/engenhariaCebraspeService';

describe('Validação da Fase E4: Três Protótipos de Validação Didática Cebraspe', () => {
  it('deve disponibilizar exatamente os 3 protótipos calibrados para as Ondas M, P e X', () => {
    expect(PROTOTIPOS_VALIDACAO_E4).toHaveLength(3);
    const modulos = PROTOTIPOS_VALIDACAO_E4.map(p => p.moduloCodigo);
    expect(modulos).toEqual(['M3', 'M8', 'M10']);
  });

  describe('Conformidade de Schema (CebraspeQuestionSchema)', () => {
    it('todos os 30 itens devem satisfazer o schema estrito Zod', () => {
      const todosOsItens = [
        ...prototipoM3Classificacao,
        ...prototipoM8Normalizacao,
        ...prototipoM10Legislativo,
      ];
      expect(todosOsItens).toHaveLength(30);

      todosOsItens.forEach(item => {
        const resultado = CebraspeQuestionSchema.safeParse(item);
        expect(resultado.success).toBe(true);
        expect(item.justificativa.length).toBeGreaterThan(30);
        expect(item.fonteOriginal.tipo).toBe('inedita');
      });
    });
  });

  describe('Metodologia de Simetria Rigorosa Cebraspe (50% C / 50% E)', () => {
    it('Protótipo 1 (M3 - Classificação) deve ser 100% simétrico (5 C / 5 E)', () => {
      const simetria = validarSimetriaCebraspe(prototipoM3Classificacao);
      expect(simetria.total).toBe(10);
      expect(simetria.certos).toBe(5);
      expect(simetria.errados).toBe(5);
      expect(simetria.isSimetrico5050).toBe(true);
    });

    it('Protótipo 2 (M8 - Normalização ABNT) deve ser 100% simétrico (5 C / 5 E)', () => {
      const simetria = validarSimetriaCebraspe(prototipoM8Normalizacao);
      expect(simetria.total).toBe(10);
      expect(simetria.certos).toBe(5);
      expect(simetria.errados).toBe(5);
      expect(simetria.isSimetrico5050).toBe(true);
    });

    it('Protótipo 3 (M10 - Legislação & RICD) deve ser 100% simétrico (5 C / 5 E)', () => {
      const simetria = validarSimetriaCebraspe(prototipoM10Legislativo);
      expect(simetria.total).toBe(10);
      expect(simetria.certos).toBe(5);
      expect(simetria.errados).toBe(5);
      expect(simetria.isSimetrico5050).toBe(true);
    });
  });

  describe('Acurácia Canônica do Protótipo 1 (M3 - Classificação & Indexação)', () => {
    it('deve conter item sobre notação pura da CDD e item falseador de tabelas auxiliares isoladas', () => {
      const itemCddPura = prototipoM3Classificacao.find(i => i.id === 'e4-m3-01');
      const itemTabelaAutonoma = prototipoM3Classificacao.find(i => i.id === 'e4-m3-02');
      expect(itemCddPura?.gabarito).toBe('C');
      expect(itemTabelaAutonoma?.gabarito).toBe('E');
    });

    it('deve contemplar o sinal de relação reversível (:) e o sinal de fixação não reversível (::) na CDU', () => {
      const itemReversivel = prototipoM3Classificacao.find(i => i.id === 'e4-m3-03');
      const itemDoisPontosDuplos = prototipoM3Classificacao.find(i => i.id === 'e4-m3-04');
      expect(itemReversivel?.gabarito).toBe('C');
      expect(itemDoisPontosDuplos?.gabarito).toBe('E');
      expect(itemDoisPontosDuplos?.justificativa).toContain('ORDENAÇÃO FIXA');
    });

    it('deve contemplar a CDDir de Doris de Queiroz Carvalho e seu caráter decimal', () => {
      const itemCDDirCerto = prototipoM3Classificacao.find(i => i.id === 'e4-m3-05');
      const itemCDDirMista = prototipoM3Classificacao.find(i => i.id === 'e4-m3-06');
      expect(itemCDDirCerto?.gabarito).toBe('C');
      expect(itemCDDirMista?.gabarito).toBe('E');
      expect(itemCDDirMista?.justificativa).toContain('DECIMAL');
    });

    it('deve abordar a relação entre exaustividade na indexação e revocação vs precisão (Lancaster)', () => {
      const itemExaustividade = prototipoM3Classificacao.find(i => i.id === 'e4-m3-08');
      expect(itemExaustividade?.gabarito).toBe('E');
      expect(itemExaustividade?.justificativa).toContain('REVOCAÇÃO');
    });
  });

  describe('Acurácia Canônica do Protótipo 2 (M8 - Normalização ABNT)', () => {
    it('deve testar a ruptura da NBR 10520:2023 abolindo a CAIXA ALTA entre parênteses', () => {
      const itemMinusc = prototipoM8Normalizacao.find(i => i.id === 'e4-m8-05');
      const itemCaixaAlta = prototipoM8Normalizacao.find(i => i.id === 'e4-m8-06');
      expect(itemMinusc?.gabarito).toBe('C');
      expect(itemCaixaAlta?.gabarito).toBe('E');
      expect(itemCaixaAlta?.justificativa).toContain('NBR 10520:2002');
    });

    it('deve validar regra de autoria (até 3 autores vs 4 ou mais) e destaque no título na NBR 6023:2018', () => {
      const itemAteTres = prototipoM8Normalizacao.find(i => i.id === 'e4-m8-01');
      const itemQuatroVedado = prototipoM8Normalizacao.find(i => i.id === 'e4-m8-02');
      const itemDestaqueTitulo = prototipoM8Normalizacao.find(i => i.id === 'e4-m8-03');
      expect(itemAteTres?.gabarito).toBe('C');
      expect(itemQuatroVedado?.gabarito).toBe('E');
      expect(itemDestaqueTitulo?.gabarito).toBe('C');
    });
  });

  describe('Acurácia Canônica do Protótipo 3 (M10 - Legislação, RICD & RVBI)', () => {
    it('deve validar composição da Mesa da Câmara e o quórum de recurso contra decisão terminativa', () => {
      const itemMesa = prototipoM10Legislativo.find(i => i.id === 'e4-m10-01');
      const itemAvocacao = prototipoM10Legislativo.find(i => i.id === 'e4-m10-02');
      expect(itemMesa?.gabarito).toBe('C');
      expect(itemAvocacao?.gabarito).toBe('E');
      expect(itemAvocacao?.justificativa).toContain('1/10');
    });

    it('deve validar quórum de 3/5 dos membros para PEC e maioria absoluta para Lei Complementar', () => {
      const itemPEC = prototipoM10Legislativo.find(i => i.id === 'e4-m10-03');
      const itemPLP = prototipoM10Legislativo.find(i => i.id === 'e4-m10-04');
      expect(itemPEC?.gabarito).toBe('C');
      expect(itemPLP?.gabarito).toBe('E');
      expect(itemPLP?.justificativa).toContain('MAIORIA ABSOLUTA');
    });

    it('deve validar atribuições do CEDI, coordenação da RVBI pelo Senado e padrão MARC 21', () => {
      const itemCedi = prototipoM10Legislativo.find(i => i.id === 'e4-m10-05');
      const itemCoordRvbi = prototipoM10Legislativo.find(i => i.id === 'e4-m10-06');
      const itemMarcRvbi = prototipoM10Legislativo.find(i => i.id === 'e4-m10-07');
      expect(itemCedi?.gabarito).toBe('C');
      expect(itemCoordRvbi?.gabarito).toBe('E');
      expect(itemMarcRvbi?.gabarito).toBe('C');
      expect(itemCoordRvbi?.justificativa).toContain('SENADO FEDERAL');
    });
  });
});
