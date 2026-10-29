// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { render, screen, fireEvent } from '@testing-library/react';
import { conceptRepository } from '../domain/concepts/conceptRepository';
import { avaliarFormatoRevisao, resolverFormatoRevisao } from '../domain/avaliarFormatoRevisao';
import { criarEstadoInicialConceito, processarRevisaoConceito, selecionarFilaRevisaoDiaria } from '../domain/scheduler/unifiedScheduler';
import { calcularCorteCebraspe } from '../domain/scoring/cebraspeScoring';
import { montarSimuladoOffline } from '../domain/adaptiveQuiz/adaptiveQuizService';
import { ALL_SIMULADOS_REGISTRY } from '../content/simuladosRegistry';
import { ExerciseRenderer } from '../components/review/ExerciseRenderer';
import { elegivelParaEstudo } from '../domain/questoesElegiveis';
import { PainelEstudoReverso } from '../components/common/PainelEstudoReverso';
import { useProgressStore } from '../store/useProgressStore';
import { SessaoSimuladoStateSchema } from '../domain/schemas/progress.schema';
import { REVIEW_CONFIG } from '../config/reviewConfig';

const conceito = conceptRepository.getTodos()[0];
describe('Regressões da revisão integral', () => {
  it('F2 exige julgamento E justificativa, rejeitando motivo errado mesmo com C/E certo', () => {
    expect(avaliarFormatoRevisao(conceito, 'f2_com_justificativa', {tipo:'julgamento-justificativa',julgamento:conceito.gabaritoCanonic,justificativa:'motivo errado'})).toBe(false);
    expect(avaliarFormatoRevisao(conceito, 'f2_com_justificativa', {tipo:'julgamento-justificativa',julgamento:conceito.gabaritoCanonic,justificativa:conceito.justificativaCanonic})).toBe(true);
  });
  it('F5 exige todas as correspondências corretas', () => {
    const pares=conceito.variantesFormatos!.f5_associacao!.associacao!.pares;
    expect(avaliarFormatoRevisao(conceito,'f5_associacao',{tipo:'associacao',pares})).toBe(true);
    expect(avaliarFormatoRevisao(conceito,'f5_associacao',{tipo:'associacao',pares:pares.map((p,i)=>({...p,ladoB:pares[(i+1)%pares.length].ladoB}))})).toBe(false);
    expect(avaliarFormatoRevisao(conceito,'f5_associacao','C')).toBe(false);
  });
  it('F4 nunca transforma uma assertiva falsa sem versão corrigida em lacuna', () => {
    for(const c of conceptRepository.getTodos()) {
      const lacuna=c.variantesFormatos?.f4_preenchimento_lacunas?.lacunas;
      if(c.gabaritoCanonic==='E' && lacuna) expect(lacuna.textoComLacuna).not.toBe(c.enunciadoCanonic);
      if(lacuna) {
        expect(avaliarFormatoRevisao(c,'f4_preenchimento_lacunas',lacuna.respostaCorreta)).toBe(true);
        expect(avaliarFormatoRevisao(c,'f4_preenchimento_lacunas','C')).toBe(false);
      }
    }
  });
  it('formato sem alternativas específicas retorna ao julgamento real', () => {
    expect(resolverFormatoRevisao({...conceito,formatosDisponiveis:['f8_inversao_papeis']},'f8_inversao_papeis')).toBe('f1_ce_simples');
  });
  it('confiança omitida não se transforma em certeza após acertar', () => {
    const concluir=vi.fn();render(<ExerciseRenderer conceito={conceito} formato="f1_ce_simples" indiceAtual={1} totalItens={1} onConcluirItem={concluir}/>);
    fireEvent.click(screen.getByRole('button',{name:conceito.gabaritoCanonic==='C'?/Julgar como CERTO/i:/Julgar como ERRADO/i}));
    expect(screen.queryByRole('button',{name:/Confiança: Certeza/i})).toBeNull();
    fireEvent.click(screen.getByRole('button',{name:'Finalizar Revisão'}));
    expect(concluir.mock.calls[0][0]).toMatchObject({acertou:true,confianca:undefined});
  });
  it('chute anterior não acelera intervalo e continua contado como acerto objetivo', () => {
    const inicial=criarEstadoInicialConceito('teste','aluno','2026-10-01');
    const chute=processarRevisaoConceito(inicial,true,'chute','f1_ce_simples','C',10,'2026-10-02').novoEstado;
    expect(chute.totalAcertos).toBe(1);
    const seguinte=processarRevisaoConceito(chute,true,'certeza','f1_ce_simples','C',10,'2026-10-05');
    expect(seguinte.mensagemPedagogica).not.toContain('ampliaram');
    expect(seguinte.novoEstado.totalAcertos).toBe(2);
  });
  it('intercalação preserva os três submódulos em vez de sobrescrever o segundo', () => {
    const conceitos=Object.fromEntries(['A1','A2','A3','B1','C1'].map(id=>[id,{...conceito,id,submoduloId:id[0],moduloId:'m1',topico:'Tópico neutro',enunciadoCanonic:'Regra neutra para testar seleção.'}]));
    const estados=Object.fromEntries(Object.keys(conceitos).map(id=>[id,{...criarEstadoInicialConceito(id,'aluno','2026-10-01'),proximaRevisao:'2026-10-01'}]));
    const fila=selecionarFilaRevisaoDiaria({conceitos,estados,dataHojeIso:'2026-10-05',limiteDiario:3});
    expect(fila.itensNaFila).toHaveLength(3);
    expect(new Set(fila.itensNaFila.map(i=>i.conceito.submoduloId))).toEqual(new Set(['A','B','C']));
  });
  it('repetição no mesmo dia não habilita aceleração de intervalo', () => {
    const inicial=criarEstadoInicialConceito('teste','aluno','2026-10-01');
    const primeira=processarRevisaoConceito(inicial,true,'certeza','f1_ce_simples','C',10,'2026-10-02').novoEstado;
    const repetida=processarRevisaoConceito(primeira,true,'certeza','f1_ce_simples','C',10,'2026-10-02');
    expect(repetida.mensagemPedagogica).not.toContain('ampliaram');
  });
  it('pedido de M14 só devolve M14, sem cópias para completar quantidade impossível', () => {
    const itens=montarSimuladoOffline({quantidadeItens:3000,modoFoco:'geral_adaptativo',modulosSelecionados:['M14']},{},[]);
    expect(itens.length).toBeGreaterThan(0);expect(itens.length).toBeLessThan(3000);
    expect(itens.every(q=>q.macroModuloId.toUpperCase()==='M14')).toBe(true);
    expect(new Set(itens.map(q=>q.item)).size).toBe(itens.length);
  });
  it('margem só considera critérios presentes', () => {
    expect(calcularCorteCebraspe(70,100,{percentualMinimo:60}).margem).toBe(10);
    expect(calcularCorteCebraspe(70,100,{notaMinimaLiquida:65}).margem).toBe(5);
    expect(calcularCorteCebraspe(70,100,{notaMinimaLiquida:65,percentualMinimo:60}).margem).toBe(5);
  });
  it('bloqueio editorial direto e em fonte exclui item', () => {
    expect(elegivelParaEstudo({revisar:true})).toBe(false);
    expect(elegivelParaEstudo({fonteOriginal:{revisar:true}})).toBe(false);
  });
  it('todo item ativo tem fundamentação e nenhuma repetição literal ativa possui gabarito conflitante', () => {
    const mapa=new Map<string,string>();
    for(const q of ALL_SIMULADOS_REGISTRY.flatMap(s=>s.questoes)) {
      expect(q.justificativa.trim().length,q.id).toBeGreaterThan(10);
      const texto=q.item.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim();
      if(mapa.has(texto))expect(q.gabarito,q.id).toBe(mapa.get(texto));
      mapa.set(texto,q.gabarito);
    }
  });
  it('painel não apresenta tautologia como fundamento homologado nem realce arbitrário como decisivo', () => {
    render(<PainelEstudoReverso questao={{id:'generico',item:'A afirmação exige demonstração específica.',gabarito:'C',justificativa:'O item está correto ao enunciar com exatidão que expressa o preceito técnico aplicável.',gatilho:'exige',versao_errada:'A afirmação indevidamente exige demonstração específica.'}} resposta="C" autoexplicacao={false}/>);
    expect(screen.getByText(/ainda precisa de fundamentação específica/i)).toBeTruthy();
    expect(screen.queryByText('Trecho que decide o julgamento')).toBeNull();
  });
  it('modo prova integra a sessão persistida e não muda depois de responder', () => {
    const id='m1-fundamentos';
    const store=useProgressStore.getState();
    store.reiniciarSimulado(id);
    expect(useProgressStore.getState().sessoesSimulados[id].modoProva ?? false).toBe(false);
    store.definirModoProvaSimulado(id,true);
    const sessao=useProgressStore.getState().sessoesSimulados[id];
    expect(SessaoSimuladoStateSchema.parse(JSON.parse(JSON.stringify(sessao))).modoProva).toBe(true);
    useProgressStore.setState({sessoesSimulados:{[id]:{...sessao,respostas:{teste:{questionId:'teste',resposta:'C',timestamp:1}}}}});
    store.definirModoProvaSimulado(id,false);
    expect(useProgressStore.getState().sessoesSimulados[id].modoProva).toBe(true);
    store.reiniciarSimulado(id);
  });
  it('todos os itens ativos renderizam o protocolo para acerto, erro e branco', () => {
    for(const q of ALL_SIMULADOS_REGISTRY.flatMap(s=>s.questoes)) {
      const acerto=renderToStaticMarkup(<PainelEstudoReverso questao={q} resposta={q.gabarito} autoexplicacao={false}/>);
      const erro=renderToStaticMarkup(<PainelEstudoReverso questao={q} resposta={q.gabarito==='C'?'E':'C'} autoexplicacao={false}/>);
      const branco=renderToStaticMarkup(<PainelEstudoReverso questao={q} resposta="BRANCO" autoexplicacao={false}/>);
      expect(acerto,q.id).toContain('Por que você acertou');
      expect(erro,q.id).toContain('Por que seu julgamento está incorreto');
      expect(branco,q.id).toContain('Como resolver o item em branco');
    }
  }, 30000);
  it('corte de jurisprudência corresponde a 30 dias corridos antes da prova', () => {
    const prova=Date.parse(REVIEW_CONFIG.retaFinal.dataProvaIso);
    const corte=Date.parse(REVIEW_CONFIG.retaFinal.dataCorteNormativoIso);
    expect((prova-corte)/86400000).toBe(30);
  });
});
