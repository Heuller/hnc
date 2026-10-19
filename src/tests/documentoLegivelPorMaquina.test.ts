import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('Documento Único Legível por Máquina (Machine-Readable JSON Spec)', () => {
  const jsonPathDocs = path.resolve('docs', 'hnc_plataforma_completa_legivel_por_maquina.json');
  const jsonPathRoot = path.resolve('HNC_PLATAFORMA_COMPLETA_LEGIVEL_POR_MAQUINA.json');

  it('assegura que os arquivos JSON existem no disco e possuem tamanho substantivo', () => {
    expect(fs.existsSync(jsonPathDocs)).toBe(true);
    expect(fs.existsSync(jsonPathRoot)).toBe(true);

    const statDocs = fs.statSync(jsonPathDocs);
    expect(statDocs.size).toBeGreaterThan(1.5 * 1024 * 1024); // Maior que 1.5 MB
  });

  it('valida que o documento é um JSON estritamente válido e conforme o schema', () => {
    const rawContent = fs.readFileSync(jsonPathDocs, 'utf-8');
    const doc = JSON.parse(rawContent);

    expect(doc).toBeDefined();
    expect(doc.$schema).toContain('json-schema.org');
    expect(doc.metadados_documento).toBeDefined();
    expect(doc.metadados_documento.titulo).toContain('Heuller na Câmara');
    expect(doc.metadados_documento.versao_documento).toBe('3.0.0');
    expect(doc.metadados_documento.status_visibilidade_repositorio).toContain('Privado');
  });

  it('valida a integridade do conteúdo teórico completo (15 módulos e 75 submódulos)', () => {
    const doc = JSON.parse(fs.readFileSync(jsonPathDocs, 'utf-8'));
    const modulos = doc.conteudo_teorico_e_tecnico_completo;

    expect(Array.isArray(modulos)).toBe(true);
    expect(modulos.length).toBe(15); // M1 a M14 + M15

    const totalSubmodulos = modulos.reduce((acc: number, m: any) => acc + m.submodulos.length, 0);
    expect(totalSubmodulos).toBe(75);

    // Verifica que cada submódulo possui texto teórico rico e micro-checkpoints
    for (const mod of modulos) {
      for (const sub of mod.submodulos) {
        expect(sub.texto_teorico_integral_markdown.length).toBeGreaterThan(100);
        expect(Array.isArray(sub.micro_checkpoints_formativos)).toBe(true);
        expect(sub.micro_checkpoints_formativos.length).toBeGreaterThanOrEqual(3);
      }
    }
  });

  it('valida a integridade dos cadernos de simulado e das 1.850 questões Cebraspe', () => {
    const doc = JSON.parse(fs.readFileSync(jsonPathDocs, 'utf-8'));
    const cadernos = doc.acervo_simulados_e_cadernos_cebraspe;

    expect(Array.isArray(cadernos)).toBe(true);
    expect(cadernos.length).toBeGreaterThanOrEqual(18);

    const totalQuestoes = cadernos.reduce((acc: number, c: any) => acc + c.questoes.length, 0);
    expect(totalQuestoes).toBe(1850);

    // Verifica que todas as assertivas possuem gabarito C ou E e justificativa
    for (const caderno of cadernos) {
      for (const q of caderno.questoes) {
        expect(['C', 'E']).toContain(q.gabarito);
        expect(q.justificativa.length).toBeGreaterThan(10);
      }
    }
  });

  it('valida a presença das fórmulas oficiais da discursiva e dos temas com espelho', () => {
    const doc = JSON.parse(fs.readFileSync(jsonPathDocs, 'utf-8'));
    const discursiva = doc.prova_discursiva_oficial_cebraspe;

    expect(discursiva.formulas_e_regras.formula_questao_teorica).toContain('- 3 *');
    expect(discursiva.formulas_e_regras.formula_peca_tecnica).toContain('- 6 *');
    expect(discursiva.formulas_e_regras.criterio_minimo_aprovacao).toContain('30,00');

    expect(Array.isArray(discursiva.temas_oficiais)).toBe(true);
    expect(discursiva.temas_oficiais.length).toBeGreaterThanOrEqual(5);

    for (const tema of discursiva.temas_oficiais) {
      expect(tema.enunciado.length).toBeGreaterThan(50);
      expect(tema.criterios_pontuacao.length).toBeGreaterThanOrEqual(2);
    }
  });

  it('valida os verbetes do dicionário técnico e casos integradores', () => {
    const doc = JSON.parse(fs.readFileSync(jsonPathDocs, 'utf-8'));

    expect(doc.dicionario_tecnico_canonico_cebraspe.length).toBeGreaterThanOrEqual(150);
    expect(doc.casos_integradores_interdisciplinares.length).toBe(5);
    expect(doc.folhas_de_vespera_48h_pegadinhas_capitais.length).toBe(5);

    // Garante que o modo demonstração está formalmente registrado como excluído
    expect(doc.arquitetura_e_engenharia.politica_de_seguranca_e_acesso.modo_demonstracao).toContain('Excluído');
  });
});
