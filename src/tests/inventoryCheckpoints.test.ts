import { describe, it } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { COURSE_REGISTRY } from '../content/registry';

describe('Auditoria de Pool de Itens por Submódulo (Ajuste 5)', () => {
  it('gera relatório de checkpoints e itens oficiais por submódulo', () => {
    const lista = [];

    for (const macro of COURSE_REGISTRY) {
      for (const sub of macro.modulosFilhos) {
        const n = sub.checkpoints ? sub.checkpoints.length : 0;
        // Para N itens, com regra acertos/total >= 0.85 sem arredondamento:
        // Ex: se n = 3: 3/3 = 1.0 (>= 0.85); 2/3 = 0.666 (< 0.85). Exige 100%.
        // Se n = 4: 4/4 = 1.0; 3/4 = 0.75 (< 0.85). Exige 100%.
        // Se n = 5: 5/5 = 1.0; 4/5 = 0.80 (< 0.85). Exige 100%.
        // Se n = 6: 6/6 = 1.0; 5/6 = 0.833 (< 0.85). Exige 100%.
        // Se n = 7: 6/7 = 0.8571 (>= 0.85). Permite 1 erro!
        const acertosMinimos = Math.ceil(0.85 * n);
        const errosPermitidos = n - acertosMinimos;
        const equivaleA100Porcento = errosPermitidos === 0;

        lista.push({
          moduloId: macro.id,
          moduloCodigo: macro.codigo,
          submoduloNumero: sub.numero,
          submoduloTitulo: sub.titulo_curto || sub.titulo,
          totalCheckpoints: n,
          acertosMinimos85: acertosMinimos,
          errosPermitidos: errosPermitidos,
          equivaleA100Porcento: equivaleA100Porcento,
        });
      }
    }

    const relatorioPath = path.resolve(
      process.cwd(),
      'src/tests/inventario_checkpoints_resultado.json'
    );
    fs.writeFileSync(relatorioPath, JSON.stringify(lista, null, 2), 'utf-8');
  });
});
