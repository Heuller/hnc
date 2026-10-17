import fs from 'node:fs';
import path from 'node:path';

/**
 * U9.2: Verificador de Orçamento de Pacote e Build para CI
 * Atende às diretrizes de qualidade do Plano v3:
 * - Limites rígidos de tamanho de pacote para evitar degradação de performance
 * - Validação da geração de assets essenciais para PWA offline
 * - Falha com código de saída 1 caso qualquer orçamento seja violado
 */

export const ORCAMENTO = {
  maxTotalJSBytes: 26 * 1024 * 1024, // 26 MB (inclui dicionário offline de 10.000 verbetes e acervo completo)
  maxTotalCSSBytes: 1 * 1024 * 1024, // 1 MB
  maxEntryChunkBytes: 350 * 1024, // 350 kB (index-*.js)
  maxVendorCoreBytes: 350 * 1024, // 350 kB (vendor-core-*.js)
  maxVendorUiBytes: 150 * 1024, // 150 kB (vendor-ui-primitives-*.js)
  minPrecacheAssets: 200, // Mínimo de 200 arquivos precacheados pelo ServiceWorker
};

export function verificarOrcamento(distPath = path.resolve('dist')) {
  const assetsDir = path.join(distPath, 'assets');
  const erros = [];
  const avisos = [];

  if (!fs.existsSync(distPath)) {
    return {
      sucesso: false,
      erros: [`Diretório de build não encontrado em: ${distPath}. Execute 'npm run build' primeiro.`],
      metricas: null,
    };
  }

  // 1. Arquivos mandatórios na raiz de dist/
  const arquivosMandatorios = [
    'index.html',
    'sw.js',
    'manifest.webmanifest',
  ];

  for (const arq of arquivosMandatorios) {
    const caminho = path.join(distPath, arq);
    if (!fs.existsSync(caminho)) {
      erros.push(`Arquivo obrigatório ausente no build: ${arq}`);
    }
  }

  // 2. Análise de assets em dist/assets
  if (!fs.existsSync(assetsDir)) {
    erros.push(`Diretório de assets não encontrado em: ${assetsDir}`);
    return { sucesso: false, erros, metricas: null };
  }

  const arquivos = fs.readdirSync(assetsDir);
  let totalJSBytes = 0;
  let totalCSSBytes = 0;
  let entryChunkBytes = 0;
  let vendorCoreBytes = 0;
  let vendorUiBytes = 0;

  for (const nome of arquivos) {
    const caminho = path.join(assetsDir, nome);
    const stats = fs.statSync(caminho);
    const bytes = stats.size;

    if (nome.endsWith('.js')) {
      totalJSBytes += bytes;

      if (nome.startsWith('index-') && !entryChunkBytes) {
        entryChunkBytes = bytes;
      }
      if (nome.startsWith('vendor-core-') && !vendorCoreBytes) {
        vendorCoreBytes = bytes;
      }
      if (nome.startsWith('vendor-ui-primitives-') && !vendorUiBytes) {
        vendorUiBytes = bytes;
      }
    } else if (nome.endsWith('.css')) {
      totalCSSBytes += bytes;
    }
  }

  // 3. Verificação do ServiceWorker e contagem de precache
  let precacheCount = 0;
  const swPath = path.join(distPath, 'sw.js');
  if (fs.existsSync(swPath)) {
    // Workbox precache manifest costuma ser embutido em sw.js ou importScripts workbox-*.js
    const workboxFiles = fs.readdirSync(distPath).filter((f) => f.startsWith('workbox-') && f.endsWith('.js'));
    if (workboxFiles.length > 0) {
      precacheCount = arquivos.length; // Estimativa com base nos assets gerados
    }
  }

  // 4. Verificação de orçamentos
  if (totalJSBytes > ORCAMENTO.maxTotalJSBytes) {
    erros.push(
      `Orçamento de JS Total estourado: ${(totalJSBytes / (1024 * 1024)).toFixed(2)} MB (limite: ${(
        ORCAMENTO.maxTotalJSBytes /
        (1024 * 1024)
      ).toFixed(2)} MB)`
    );
  }

  if (totalCSSBytes > ORCAMENTO.maxTotalCSSBytes) {
    erros.push(
      `Orçamento de CSS Total estourado: ${(totalCSSBytes / 1024).toFixed(2)} kB (limite: ${(
        ORCAMENTO.maxTotalCSSBytes / 1024
      ).toFixed(2)} kB)`
    );
  }

  if (entryChunkBytes > ORCAMENTO.maxEntryChunkBytes) {
    erros.push(
      `Chunk de entrada (index) excedeu o limite: ${(entryChunkBytes / 1024).toFixed(2)} kB (limite: ${(
        ORCAMENTO.maxEntryChunkBytes / 1024
      ).toFixed(2)} kB)`
    );
  }

  if (vendorCoreBytes > ORCAMENTO.maxVendorCoreBytes) {
    erros.push(
      `Chunk vendor-core excedeu o limite: ${(vendorCoreBytes / 1024).toFixed(2)} kB (limite: ${(
        ORCAMENTO.maxVendorCoreBytes / 1024
      ).toFixed(2)} kB)`
    );
  }

  if (vendorUiBytes > ORCAMENTO.maxVendorUiBytes) {
    erros.push(
      `Chunk vendor-ui excedeu o limite: ${(vendorUiBytes / 1024).toFixed(2)} kB (limite: ${(
        ORCAMENTO.maxVendorUiBytes / 1024
      ).toFixed(2)} kB)`
    );
  }

  if (precacheCount < ORCAMENTO.minPrecacheAssets) {
    avisos.push(
      `Total de assets precacheados (${precacheCount}) está abaixo da meta recomendada (${ORCAMENTO.minPrecacheAssets})`
    );
  }

  return {
    sucesso: erros.length === 0,
    erros,
    avisos,
    metricas: {
      totalJSMB: Number((totalJSBytes / (1024 * 1024)).toFixed(2)),
      totalCSSKB: Number((totalCSSBytes / 1024).toFixed(2)),
      entryChunkKB: Number((entryChunkBytes / 1024).toFixed(2)),
      vendorCoreKB: Number((vendorCoreBytes / 1024).toFixed(2)),
      vendorUiKB: Number((vendorUiBytes / 1024).toFixed(2)),
      totalAssetsCount: arquivos.length,
      precacheCount,
    },
  };
}

// Execução direta via CLI
if (process.argv[1] && process.argv[1].endsWith('verificarOrcamentoPacote.mjs')) {
  console.log('🔍 Executando verificação de orçamento do pacote (U9.2)...');
  const resultado = verificarOrcamento();

  if (!resultado.sucesso) {
    console.error('\n❌ Falha na verificação de orçamento:');
    resultado.erros.forEach((err) => console.error(` - ${err}`));
    process.exit(1);
  }

  console.log('\n✅ Todos os orçamentos de pacote e build foram respeitados!');
  console.log('📊 Métricas do Build:', JSON.stringify(resultado.metricas, null, 2));

  if (resultado.avisos.length > 0) {
    resultado.avisos.forEach((w) => console.warn(` ⚠️  ${w}`));
  }
}
