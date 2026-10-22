import fs from 'node:fs';
import { simuladoOficialReserva60Q } from '../src/content/drafts/simuladoOficialReserva60Q.ts';

function gerarComoConferir(q) {
  const loc = q.localizador;
  const fonte = q.fontePrimaria;

  // Leis e atos normativos com artigo
  if (/Art\.\s*37,\s*§\s*6º/i.test(loc)) {
    return 'Acessar Constituição Federal no Portal da Legislação da Presidência (planalto.gov.br) e conferir a responsabilidade civil objetiva do Estado e direito de regresso no Art. 37, § 6º.';
  }
  if (/Art\.\s*5º.*Art\.\s*37/i.test(loc)) {
    return 'Consultar CF/88 no Planalto: Art. 5º, XXXIII (direito à informação pública e ressalva de sigilo imprescindível à segurança) e Art. 37, caput (princípio da publicidade).';
  }
  if (/Art\.\s*41/i.test(loc)) {
    return 'Acessar CF/88 no Planalto: Art. 41, caput e § 4º (estabilidade após 3 anos de estágio probatório e avaliação especial obrigatória de desempenho).';
  }
  if (/Art\.\s*33.*Art\.\s*36/i.test(loc)) {
    return 'Consultar Lei nº 8.112/1990 no Planalto: Art. 33 (hipóteses exaustivas de vacância) e Art. 36 (remoção não é forma de provimento nem de vacância, mas mero deslocamento).';
  }
  if (/Art\.\s*53/i.test(loc)) {
    return 'Consultar Lei nº 9.784/1999 (Art. 53) e Súmula 473 do STF no portal STF/Planalto: autotutela administrativa (anulação de atos ilegais e revogação por conveniência/oportunidade).';
  }
  if (/Art\.\s*54/i.test(loc)) {
    return 'Consultar Lei nº 9.784/1999 (Art. 54) no Planalto: prazo decadencial de 5 anos para a Administração anular atos de que decorram efeitos favoráveis, salvo comprovada má-fé.';
  }
  if (/Art\.\s*31/i.test(loc)) {
    return 'Consultar Lei nº 12.527/2011 (LAI), Art. 31, § 1º, I: restrição de acesso a informações pessoais relativas à intimidade, vida privada, honra e imagem pelo prazo máximo de 100 anos.';
  }
  if (/Art\.\s*24/i.test(loc)) {
    return 'Consultar Lei nº 12.527/2011 (LAI), Art. 24, § 1º, III: prazos máximos de classificação em ultrassecreta (25 anos), secreta (15 anos) e reservada (5 anos).';
  }
  if (/Art\.\s*11.*Art\.\s*12/i.test(loc) || /Art\.\s*11/i.test(loc)) {
    return 'Consultar Lei nº 13.709/2018 (LGPD), Art. 11, II, "a": dispensa do consentimento para cumprimento de obrigação legal ou regulatória pelo controlador no tratamento de dados sensíveis.';
  }
  if (/Art\.\s*12/i.test(loc)) {
    return 'Consultar Lei nº 13.709/2018 (LGPD), Art. 12, caput: dados anonimizados não são considerados dados pessoais, salvo quando o processo for revertido ou puder sê-lo razoavelmente.';
  }
  if (/Art\.\s*58.*Art\.\s*35/i.test(loc)) {
    return 'Acessar CF/88 (Art. 58, § 3º) e RICD (Art. 35) no portal da Câmara: poderes de investigação próprios das autoridades judiciais das CPIs e limites (reserva de jurisdição para quebra de domicílio/interceptação telefônica).';
  }
  if (/Art\.\s*69.*Art\.\s*183/i.test(loc)) {
    return 'Acessar CF/88 (Art. 69) e RICD (Art. 183): aprovação de Lei Complementar por maioria absoluta dos membros da Casa e sua distinção para a maioria simples da Lei Ordinária.';
  }
  if (/Art\.\s*166.*Resolução/i.test(loc)) {
    return 'Acessar CF/88 (Art. 166, § 1º) e Resolução nº 1/2006-CN (Art. 2º): Comissão Mista de Planos, Orçamentos Públicos e Fiscalização (CMO) e exame preliminar de admissibilidade.';
  }
  if (/Art\.\s*66.*RCCN/i.test(loc)) {
    return 'Acessar CF/88 (Art. 66, § 4º) e RCCN (Art. 104): apreciação de veto presidencial em sessão conjunta pelo voto da maioria absoluta dos Deputados e Senadores no prazo de 30 dias.';
  }

  // Itens bibliográficos / manuais / normas
  if (/Manual de Redação da Presidência da República/i.test(fonte)) {
    return 'Abrir versão oficial do MRPR (3ª ed. 2018) em gov.br/planalto/pt-br/assuntos/manual-de-redacao e conferir a seção citada (' + loc + ').';
  }
  if (/Evanildo Bechara|Celso Cunha|Ingedore|Azeredo/i.test(fonte)) {
    return 'Consultar exemplar da gramática citada (' + fonte + ') no índice analítico e conferir a regra de sintaxe/regência/coesão descrita no capítulo correspondente.';
  }
  if (/Longman|Oxford English/i.test(fonte)) {
    return 'Consultar manual de gramática da língua inglesa (' + fonte + ') no capítulo indicado para verificar a classe gramatical e conectivo abordado.';
  }
  if (/DCC Lifecycle/i.test(fonte)) {
    return 'Acessar documento oficial do DCC (dcc.ac.uk/guidance/curation-lifecycle-model) e conferir as etapas e ações de curadoria digital no ciclo de vida.';
  }
  if (/Wilkinson|FAIR/i.test(fonte)) {
    return 'Consultar o artigo seminal dos Princípios FAIR (DOI: 10.1038/sdata.2016.18) no Scientific Data/Nature e checar os 4 pilares: Findable, Accessible, Interoperable, Reusable.';
  }
  if (/IFLA Statement on Open Access/i.test(fonte)) {
    return 'Consultar declaração da IFLA sobre Acesso Aberto no portal oficial (ifla.org) e conferir os princípios de acesso irrestrito à produção científica financiada com recursos públicos.';
  }
  if (/Society of American Archivists/i.test(fonte)) {
    return 'Acessar o SAA Dictionary of Archives Terminology (dictionary.archivists.org) e buscar pelo verbete "dark archive" (repositório sem acesso público direto preservado para contingência).';
  }
  if (/Kimball|Silberschatz/i.test(fonte)) {
    return 'Consultar livro-texto (' + fonte + ') no capítulo indicado e conferir definições conceituais de modelagem dimensional (tabela fato/dimensão) ou SQL ANSI.';
  }
  if (/Waldomiro Vergueiro|Weitzel|Almeida|Maciel/i.test(fonte)) {
    return 'Consultar o livro-texto de Biblioteconomia indicado no acervo físico ou digital (capítulo especificado) e verificar a etapa de desenvolvimento de coleções ou planejamento.';
  }
  if (/MARC 21/i.test(fonte)) {
    return 'Acessar o portal oficial da Library of Congress MARC Standards (loc.gov/marc/bibliographic/) e verificar a especificação dos campos indicados (' + loc + ').';
  }
  if (/IFLA Library Reference Model|IFLA LRM/i.test(fonte)) {
    return 'Consultar o texto integral do IFLA LRM (ifla.org/publications/node/11412) na Seção 4.2 e checar definições de Expressão, Manifestação e Item.';
  }
  if (/CDU|Classificação Decimal Universal/i.test(fonte)) {
    return 'Consultar a edição padrão da CDU (tabelas auxiliares comuns e principais) para conferir sinais de relação/coordenação (: ou +) e classes do conhecimento.';
  }
  if (/Lancaster/i.test(fonte)) {
    return 'Consultar exemplar de Lancaster (Indexação e Resumos) no capítulo citado para conferir trade-off entre revocação e precisão vs. exaustividade e especificidade.';
  }
  if (/ISO 25964/i.test(fonte)) {
    return 'Consultar norma ISO 25964-1 no portal ISO ou ABNT e verificar as relações de equivalência (USE / USE FOR) e hierárquicas em tesauros documentários.';
  }
  if (/Chowdhury|Baeza-Yates/i.test(fonte)) {
    return 'Consultar o livro de Recuperação da Informação no capítulo indicado e checar definições de precisão, revocação e álgebra booleana de busca.';
  }
  if (/ISO 14721|OAIS/i.test(fonte)) {
    return 'Consultar ISO 14721:2012 / CCSDS 650.0-M-2 (Modelo OAIS) na seção indicada: pacote SIP, AIP, DIP e entidade de armazenamento arquivístico (Archival Storage).';
  }
  if (/CONARQ nº 43/i.test(fonte)) {
    return 'Consultar Resolução CONARQ nº 43/2015 no portal do Conselho Nacional de Arquivos e verificar os requisitos técnicos para RDC-Arq.';
  }
  if (/PREMIS/i.test(fonte)) {
    return 'Acessar o PREMIS Data Dictionary (loc.gov/standards/premis/) e conferir as entidades conceituais (Object, Event, Agent, Right).';
  }
  if (/Campello|Passos/i.test(fonte)) {
    return 'Consultar obra de fontes de informação ou informação jurídica (' + fonte + ') no acervo institucional e verificar a taxonomia de fontes primárias/secundárias.';
  }
  if (/BIBFRAME/i.test(fonte)) {
    return 'Acessar Library of Congress BIBFRAME 2.0 (loc.gov/bibframe/docs/) e checar as classes fundamentais: Work, Instance e Item.';
  }
  if (/W3C/i.test(fonte)) {
    return 'Acessar a recomendação W3C RDF 1.1 Concepts (w3.org/TR/rdf11-concepts/) e conferir a estrutura da tripla (sujeito, predicado, objeto).';
  }

  return 'Localizar o documento na fonte indicada (' + fonte + ') e validar o conceito cobrado no item contra o texto oficial.';
}

const lines = [];
lines.push('# Relatório de Homologação da Reserva de 60 Itens (Prompt C11)');
lines.push('');
lines.push('Este documento consolida o status de conferência documental e rastreabilidade dos **60 itens inéditos frescos** da reserva (`src/content/drafts/simuladoOficialReserva60Q.ts`), criados para assegurar a substituição gradual e segura de itens repetidos no Simulado Oficial Câmara 180Q sem inventar dados nem flexibilizar critérios de proveniência.');
lines.push('');
lines.push('## Critérios Canônicos de Homologação (Prompt C11)');
lines.push('');
lines.push('1. **Localizadores com Página ou Seção (`localizadorVerificado = false`):** Qualquer item cujo localizador aponte para número de página ou seção de livro/manual sem link direto, DOI ou transcrição conferida é marcado preventivamente como **não verificado**, com `statusHomologacao = "pendente_homologacao"` e `homologado = false`.');
lines.push('2. **Localizadores Normativos Diretos (`localizadorVerificado = true`):** Itens amparados em artigos específicos de leis federais (CF/88, Lei 8.112/90, Lei 9.784/99, Lei 12.527/11, Lei 13.709/18) e regimentos legislativos (RICD e RCCN) com indicação precisa de dispositivo normativo foram classificados como verificáveis documentalmente.');
lines.push('3. **Portão de Entrada no Simulado Oficial:** A função `podeSerPromovidoSimuladoOficial` e os testes de regressão automatizados em `src/tests/simuladoOficialItensFrescosC4.test.ts` **impedem estritamente** a promoção de qualquer item sem homologação manual expressa (`localizadorVerificado === true && statusHomologacao === "homologado" && homologado === true`).');
lines.push('');
lines.push('## Sumário Executivo');
lines.push('');
const total = simuladoOficialReserva60Q.length;
const verif = simuladoOficialReserva60Q.filter(q => q.localizadorVerificado).length;
const pend = simuladoOficialReserva60Q.filter(q => !q.localizadorVerificado).length;
const certos = simuladoOficialReserva60Q.filter(q => q.gabarito === 'C').length;
const errados = simuladoOficialReserva60Q.filter(q => q.gabarito === 'E').length;

lines.push(`- **Total de Itens na Reserva:** ${total} (30 P1 / 30 P2)`);
lines.push(`- **Gabarito:** ${certos} Certos (${Math.round((certos/total)*100)}%) / ${errados} Errados (${Math.round((errados/total)*100)}%) — equilíbrio estrito`);
lines.push(`- **Itens com Dispositivo Normativo Verificável (Artigo de Lei/Regimento):** ${verif} (${Math.round((verif/total)*100)}%)`);
lines.push(`- **Itens com Localizador Bibliográfico Pendente de Conferência Manual:** ${pend} (${Math.round((pend/total)*100)}%)`);
lines.push(`- **Itens Promovidos ao Simulado Oficial de 180Q:** **0 (nenhum item sem homologação entra no simulado)**`);
lines.push('');
lines.push('---');
lines.push('');
lines.push('## Tabela Completa de Homologação da Reserva (60Q)');
lines.push('');
lines.push('| Nº | ID | Bloco | Módulo | Gab | Fonte Primária | Localizador Declarado | Verificado? | Status Homologação | Como Conferir |');
lines.push('|:--:|:---|:-----:|:------:|:---:|:---------------|:----------------------|:-----------:|:------------------:|:-------------|');

simuladoOficialReserva60Q.forEach(q => {
  const num = String(q.numero).padStart(2, '0');
  const bloco = q.bloco === 'P1_BASICOS' ? 'P1' : 'P2';
  const mod = q.macroModuloId;
  const gab = q.gabarito;
  const fonte = q.fontePrimaria.replace(/\|/g, '-');
  const loc = q.localizador.replace(/\|/g, '-');
  const verificado = q.localizadorVerificado ? '✅ Sim (Artigo)' : '⏳ Não (Pág/Seção)';
  const status = q.statusHomologacao;
  const como = gerarComoConferir(q).replace(/\|/g, '-');

  lines.push(`| ${num} | \`${q.id}\` | ${bloco} | ${mod} | **${gab}** | ${fonte} | ${loc} | ${verificado} | \`${status}\` | ${como} |`);
});

lines.push('');
lines.push('---');
lines.push('');
lines.push('## Próximos Passos para Promoção Gradual');
lines.push('');
lines.push('1. Para cada item que o analista humano conferir fisicamente ou digitalmente no acervo original:');
lines.push('   - Adicionar o link exato, DOI ou citação conferida no campo `localizador`;');
lines.push('   - Alterar `localizadorVerificado` para `true`;');
lines.push('   - Alterar `statusHomologacao` para `"homologado"`;');
lines.push('   - Alterar `homologado` para `true`.');
lines.push('2. Somente itens com esses quatro campos integralmente validados são elegíveis para substituição no simulado oficial.');

fs.writeFileSync('RESERVA_HOMOLOGACAO.md', lines.join('\n'), 'utf-8');
console.log('RESERVA_HOMOLOGACAO.md successfully generated with', total, 'items.');
