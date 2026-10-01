import type { MacroModulo } from '../../../domain/types';
import { submodulo121 } from './sub-12-1';
import { submodulo122 } from './sub-12-2';
import { submodulo123 } from './sub-12-3';
import { submodulo124 } from './sub-12-4';

export const moduloM12Ingles: MacroModulo = {
  id: 'm12',
  codigo: 'M12',
  numero: 12,
  titulo: 'Língua Inglesa (Inglês Instrumental)',
  subtitulo: 'Compreensão de Textos Legislativos, Marcadores Discursivos, Coesão e Paráfrase para o Cebraspe',
  descricao: 'Módulo fundamentado no Modelo Interativo-Compensatório de Keith Stanovich e na Teoria da Coesão Textual de Halliday & Hasan, estruturado para o domínio da Língua Inglesa no padrão Cebraspe / Câmara dos Deputados: técnicas cognitivas de Skimming e Scanning com apreensão da ideia central e do propósito comunicativo; domínio das famílias de Linking Words e marcadores discursivos de transição argumentativa; cadeias de referenciação anafórica, pronomes relativos encapsuladores e a distinção entre "the former" e "the latter"; e decodificação morfológica, desativação de falsos cognatos, identificação de modais epistêmicos e validação do checklist de paráfrases e reescrita de sentenças.',
  status: 'disponivel',
  simuladoDisponivel: true,
  modulosFilhos: [
    submodulo121,
    submodulo122,
    submodulo123,
    submodulo124,
  ],
};
