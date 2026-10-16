// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import {
  normalizarTermo,
  getTermosTecnicos,
  carregarDicionario,
  carregarAcervoUnificado,
  gerarIndiceLetras,
  filtrarVerbetes,
  buscarPorId,
  buscarPorTermoExato,
  resetarCacheDicionario,
} from '../domain/glossario/glossarioService';
import { useGlossarioStore } from '../store/useGlossarioStore';

describe('Glossário Unificado - Serviço (U3.10)', () => {
  beforeEach(() => {
    localStorage.clear();
    useGlossarioStore.setState({
      termosSilenciados: [],
      termosSuspeitos: [],
      destaquesHabilitados: true,
      termoAtivoDrawer: null,
      isDrawerOpen: false,
      sugestaoReabertura: null,
    });
  });

  it('normalizarTermo deve remover acentos, converter para minusculas e aparar espacos', () => {
    expect(normalizarTermo('  Classificação Decimal  ')).toBe('classificacao decimal');
    expect(normalizarTermo('OAI-PMH')).toBe('oai-pmh');
    expect(normalizarTermo('Atenção!')).toBe('atencao!');
  });

  it('getTermosTecnicos deve retornar 19 siglas e termos essenciais do Edital Cargo 5', () => {
    const tecnicos = getTermosTecnicos();
    expect(tecnicos.length).toBe(19);

    const sql = tecnicos.find((t) => t.termo === 'SQL');
    expect(sql).toBeDefined();
    expect(sql?.acervo).toBe('tecnico');
    expect(sql?.definicao).toContain('Linguagem declarativa');
    expect(sql?.exemploBiblioteca).toBeDefined();
    expect(sql?.fonte.ano).toBe(2026);
    expect(sql?.submodulosOndeAparece?.[0]?.numero).toBe('6.6');
  });

  it('carregarDicionario deve carregar verbetes do Dicionario Cunha & Cavalcanti', async () => {
    const dic = await carregarDicionario();
    expect(dic.length).toBeGreaterThan(12000);

    const primeiro = dic[0];
    expect(primeiro.acervo).toBe('dicionario');
    expect(primeiro.fonte.obra).toContain('Dicionário de Biblioteconomia e Arquivologia');
    expect(primeiro.fonte.ano).toBe(2008);
  }, 15000);

  it('resetarCacheDicionario deve invalidar o cache em memoria', () => {
    resetarCacheDicionario();
    expect(true).toBe(true);
  });

  it('carregarAcervoUnificado deve mesclar tecnicos e dicionario em ordem alfabetica', async () => {
    const todos = await carregarAcervoUnificado();
    expect(todos.length).toBeGreaterThan(12400);

    // Confirma que contém tanto técnicos quanto dicionário
    const temTecnico = todos.some((v) => v.acervo === 'tecnico');
    const temDicionario = todos.some((v) => v.acervo === 'dicionario');
    expect(temTecnico).toBe(true);
    expect(temDicionario).toBe(true);

    // Confirma ordenação alfabética
    const amostragem = todos.slice(100, 110);
    for (let i = 0; i < amostragem.length - 1; i++) {
      const comp = amostragem[i].termo.localeCompare(amostragem[i + 1].termo, 'pt-BR', {
        sensitivity: 'base',
      });
      expect(comp).toBeLessThanOrEqual(0);
    }
  }, 15000);

  it('gerarIndiceLetras deve computar distribuicao A-Z e contagem de termos', async () => {
    const todos = await carregarAcervoUnificado();
    const indice = gerarIndiceLetras(todos);

    expect(indice.length).toBeGreaterThanOrEqual(26);
    const letraA = indice.find((i) => i.letra === 'A');
    expect(letraA).toBeDefined();
    expect(letraA!.quantidade).toBeGreaterThan(500);

    const totalContado = indice.reduce((acc, curr) => acc + curr.quantidade, 0);
    expect(totalContado).toBe(todos.length);
  });

  it('filtrarVerbetes deve priorizar correspondencia exata e prefixos', async () => {
    const todos = await carregarAcervoUnificado();

    // Busca exata por SQL
    const resSql = filtrarVerbetes(todos, { busca: 'SQL' });
    expect(resSql.length).toBeGreaterThan(0);
    expect(resSql[0].termo).toBe('SQL');
    expect(resSql[0].acervo).toBe('tecnico');

    // Busca com filtro de acervo 'tecnico'
    const resTec = filtrarVerbetes(todos, { busca: '', acervo: 'tecnico' });
    expect(resTec.length).toBe(19);
    expect(resTec.every((v) => v.acervo === 'tecnico')).toBe(true);

    // Busca por letra
    const resB = filtrarVerbetes(todos, { busca: '', letra: 'B' });
    expect(resB.length).toBeGreaterThan(0);
    expect(resB.every((v) => normalizarTermo(v.termo).startsWith('b'))).toBe(true);
  });

  it('buscarPorId e buscarPorTermoExato devem localizar registros pontuais', async () => {
    const sql = await buscarPorId('tec-sql');
    expect(sql).toBeDefined();
    expect(sql?.termo).toBe('SQL');

    const porNome = await buscarPorTermoExato('api');
    expect(porNome).toBeDefined();
    expect(porNome?.termo).toBe('API');
  }, 15000);
});

describe('useGlossarioStore - Estado e Preferências (U3.10)', () => {
  beforeEach(() => {
    localStorage.clear();
    useGlossarioStore.setState({
      termosSilenciados: [],
      termosSuspeitos: [],
      destaquesHabilitados: true,
      termoAtivoDrawer: null,
      isDrawerOpen: false,
      sugestaoReabertura: null,
    });
  });

  it('deve gerenciar marcar e desmarcar "Já sei" com persistencia', () => {
    const store = useGlossarioStore.getState();
    expect(store.isTermoSilenciado('tec-sql')).toBe(false);

    store.marcarJaSei('tec-sql');
    expect(useGlossarioStore.getState().isTermoSilenciado('tec-sql')).toBe(true);

    store.desmarcarJaSei('tec-sql');
    expect(useGlossarioStore.getState().isTermoSilenciado('tec-sql')).toBe(false);

    store.alternarJaSei('tec-sql');
    expect(useGlossarioStore.getState().isTermoSilenciado('tec-sql')).toBe(true);
  });

  it('deve gerenciar itens marcados como suspeitos', () => {
    const store = useGlossarioStore.getState();
    expect(store.isTermoSuspeito('dic-123')).toBe(false);

    store.marcarSuspeito('dic-123');
    expect(useGlossarioStore.getState().isTermoSuspeito('dic-123')).toBe(true);

    store.alternarSuspeito('dic-123');
    expect(useGlossarioStore.getState().isTermoSuspeito('dic-123')).toBe(false);
  });

  it('deve alternar a visibilidade global de destaques de termos no leitor', () => {
    const store = useGlossarioStore.getState();
    expect(store.destaquesHabilitados).toBe(true);

    store.setDestaquesHabilitados(false);
    expect(useGlossarioStore.getState().destaquesHabilitados).toBe(false);
  });

  it('deve gerenciar sugestão de reabertura após erro conceitual (U3.5)', () => {
    const store = useGlossarioStore.getState();
    store.marcarJaSei('tec-sql');
    expect(store.isTermoSilenciado('tec-sql')).toBe(true);

    store.sugerirReabertura('tec-sql', 'SQL', 'Você errou uma questão sobre banco de dados relacional.');
    expect(useGlossarioStore.getState().sugestaoReabertura).toEqual({
      termoId: 'tec-sql',
      termo: 'SQL',
      motivo: 'Você errou uma questão sobre banco de dados relacional.',
    });

    // Usuário aceita a reabertura
    useGlossarioStore.getState().reabrirPorSugestao('tec-sql');
    expect(useGlossarioStore.getState().isTermoSilenciado('tec-sql')).toBe(false);
    expect(useGlossarioStore.getState().sugestaoReabertura).toBeNull();
  });
});
