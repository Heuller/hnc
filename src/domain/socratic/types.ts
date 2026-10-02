export interface MensagemSocratica {
  id: string;
  remetente: 'banca' | 'candidato';
  conteudo: string;
  dataHora: string;
}

export interface FundamentacaoCanonica {
  autor: string;
  obraOuNorma: string;
  citacao: string;
}

export interface ParecerTecnicoBanca {
  tesePrincipal: string;
  pontoCegoIdentificado: string;
  fundamentacao: FundamentacaoCanonica;
  perguntaDesafio: string;
  sugestaoBaralho?: {
    frente: string;
    verso: string;
  };
}

export interface SessaoSocratica {
  id: string;
  itemId: string; // Ex: 'cp-1-1-2' ou 'sim-fund-q-1'
  assertiva: string;
  gabarito: 'C' | 'E';
  respostaUsuario: 'C' | 'E';
  macroModuloTitulo: string;
  parecerInicial?: ParecerTecnicoBanca;
  mensagens: MensagemSocratica[];
  superado: boolean;
  criadoEm: string;
  atualizadoEm: string;
}
