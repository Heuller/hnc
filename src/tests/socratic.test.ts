// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import {
  gerarParecerOffline,
  iniciarSessaoSocratica,
  enviarArgumentoBanca,
  marcarSessaoSuperada,
  carregarSessoesDoStorage,
} from '../domain/socratic/socraticService';
import type { ItemCadernoErro } from '../domain/cadernoErros';

describe('Modo Socrático no Caderno de Erros (Discuta com a Banca)', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const mockItemBriet: ItemCadernoErro = {
    id: 'cp-1-1-1',
    chaveOriginal: '1-1-1',
    origem: 'checkpoint',
    macroModuloId: 'm1',
    macroModuloTitulo: 'Fundamentos da Biblioteconomia',
    submoduloId: '1.1',
    submoduloNumero: '1.1',
    tituloContexto: 'Submódulo 1.1 — Conceito de Documento',
    assertiva:
      'Para Suzanne Briet, um antílope selvagem correndo livremente na savana africana já se qualifica como documento primário.',
    gabarito: 'E',
    respostaUsuario: 'C',
    justificativa:
      'Para Briet, o antílope só se torna documento quando capturado, catalogado e colocado sob observação humana.',
    armadilhaBanca: 'Confundir o ser natural em estado bruto com o objeto submetido à ação documentária.',
  };

  const mockItemVergueiro: ItemCadernoErro = {
    id: 'sim-fund-q-10',
    chaveOriginal: 'q-10',
    origem: 'simulado',
    macroModuloId: 'm1',
    macroModuloTitulo: 'Fundamentos da Biblioteconomia',
    tituloContexto: 'Simulado 100Q · Questão 10',
    assertiva:
      'Segundo Waldomiro Vergueiro, as etapas de desbastamento e descarte são sinônimas no processo de desenvolvimento de coleções.',
    gabarito: 'E',
    respostaUsuario: 'C',
    justificativa:
      'O desbastamento é a transferência do acervo principal para outro local de menor acesso; o descarte é a eliminação definitiva.',
    armadilhaBanca: 'Tratar desbastamento como sinônimo estrito de descarte físico.',
  };

  it('deve identificar corretamente a autoridade canônica de Suzanne Briet no parecer offline', () => {
    const parecer = gerarParecerOffline(mockItemBriet);

    expect(parecer.fundamentacao.autor).toContain('Suzanne Briet');
    expect(parecer.fundamentacao.obraOuNorma).toContain("Qu'est-ce que la documentation?");
    expect(parecer.pontoCegoIdentificado).toContain('Confundir o ser natural');
    expect(parecer.perguntaDesafio).toBeDefined();
    expect(parecer.sugestaoBaralho).toBeDefined();
  });

  it('deve identificar corretamente Waldomiro Vergueiro para itens de coleções', () => {
    const parecer = gerarParecerOffline(mockItemVergueiro);

    expect(parecer.fundamentacao.autor).toContain('Waldomiro Vergueiro');
    expect(parecer.fundamentacao.obraOuNorma).toContain('Desenvolvimento de Coleções');
    expect(parecer.tesePrincipal).toContain('ERRADO');
  });

  it('deve iniciar sessão socrática com primeira mensagem formal da banca examinadora', async () => {
    const sessao = await iniciarSessaoSocratica(mockItemBriet);

    expect(sessao.itemId).toBe('cp-1-1-1');
    expect(sessao.mensagens.length).toBeGreaterThanOrEqual(1);
    expect(sessao.mensagens[0].remetente).toBe('banca');
    expect(sessao.mensagens[0].conteudo).toContain('Ponto Cego');
    expect(sessao.superado).toBe(false);

    // Deve salvar no storage
    const sessoesSalvas = carregarSessoesDoStorage();
    expect(sessoesSalvas['cp-1-1-1']).toBeDefined();
  });

  it('deve processar réplica do candidato e gerar despacho fundamentado da banca', async () => {
    const sessaoInicial = await iniciarSessaoSocratica(mockItemVergueiro);

    const sessaoAtualizada = await enviarArgumentoBanca(
      sessaoInicial,
      'Peço a anulação do item pois na prática muitas bibliotecas utilizam o desbastamento já com destinação de descarte.'
    );

    expect(sessaoAtualizada.mensagens.length).toBe(3); // [banca inicial, recurso candidato, réplica banca]
    expect(sessaoAtualizada.mensagens[1].remetente).toBe('candidato');
    expect(sessaoAtualizada.mensagens[2].remetente).toBe('banca');
    expect(sessaoAtualizada.mensagens[2].conteudo).toContain('Banca');
  });

  it('deve permitir marcar uma lacuna como superada e persistir o status', async () => {
    await iniciarSessaoSocratica(mockItemBriet);

    const atualizada = marcarSessaoSuperada('cp-1-1-1', true);
    expect(atualizada?.superado).toBe(true);

    const sessoesSalvas = carregarSessoesDoStorage();
    expect(sessoesSalvas['cp-1-1-1'].superado).toBe(true);
  });
});
