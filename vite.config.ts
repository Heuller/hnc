import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    watch: {
      ignored: ['**/acervo-privado/**', '**/acervo-estudos/**', '**/provas/**', '**/*.pdf'],
    },
  },
  base: process.env.BASE_URL || '/',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Heuller na Câmara',
        short_name: 'HNC',
        description: 'Ambiente integrado de estudos, retenção de conhecimento e alto rendimento pedagógico.',
        lang: 'pt-BR',
        theme_color: '#16244A',
        background_color: '#FAF7F0',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: '/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/icons/icon-512-maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        globIgnores: [
          '**/content-theory-*.js',
          '**/content-questions-*.js',
          '**/registry-*.js',
          '**/*registry*.js',
          '**/elk-*.js',
          '**/dicionario*.js',
          '**/*Diagram-*.js',
          '**/diagram-*.js',
          '**/cytoscape*.js',
          '**/cose-bilkent-*.js',
          '**/swimlanes-*.js',
          '**/chunk-NGNAAXSQ-*.js',
          '**/*.ttf',
          '**/*vietnamese*.woff2',
          '**/*greek*.woff2',
          '**/*cyrillic*.woff2',
        ],
        runtimeCaching: [
          {
            urlPattern: ({ url, sameOrigin }) =>
              sameOrigin &&
              (url.pathname.includes('content-theory') ||
                url.pathname.includes('content-questions') ||
                url.pathname.includes('registry') ||
                url.pathname.includes('elk') ||
                url.pathname.includes('dicionario') ||
                url.pathname.includes('Diagram') ||
                url.pathname.includes('cytoscape') ||
                url.pathname.includes('chunk-NGNAAXSQ') ||
                url.pathname.endsWith('.ttf') ||
                url.pathname.includes('vietnamese') ||
                url.pathname.includes('greek') ||
                url.pathname.includes('cyrillic')),
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'hnc-runtime-on-demand',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 dias
              },
            },
          },
        ],
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true,
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          const theoryModule = id.replaceAll('\\', '/').match(/content\/modules\/([^/]+)\//)?.[1];
          if (theoryModule) return `content-theory-${theoryModule}`;
          if (id.includes('content/questions') || id.includes('content\\questions')) {
            if (id.includes('simulado') || id.includes('mini-modulo') || id.includes('ampliados')) {
              return 'content-questions-simulados';
            }
            if (
              id.includes('m10-') ||
              id.includes('m10a-') ||
              id.includes('m10b-') ||
              id.includes('m11-') ||
              id.includes('m12-') ||
              id.includes('m13-') ||
              id.includes('m14-')
            ) {
              return 'content-questions-gerais';
            }
            return 'content-questions-especificos';
          }
          if (id.includes('content/simuladosRegistry') || id.includes('content\\simuladosRegistry')) {
            return 'registry';
          }
          if (id.includes('node_modules')) {
            if (
              id.includes('katex') ||
              id.includes('rehype-katex') ||
              id.includes('remark-gfm') ||
              id.includes('react-markdown')
            ) {
              return 'vendor-katex-markdown';
            }
            if (
              id.includes('recharts') ||
              id.includes('d3-') ||
              id.includes('victory-vendor')
            ) {
              return 'vendor-charts';
            }
            if (
              id.includes('@radix-ui') ||
              id.includes('vaul') ||
              id.includes('lucide-react')
            ) {
              return 'vendor-ui-primitives';
            }
            if (id.includes('motion')) {
              return 'vendor-motion';
            }
            if (id.includes('react') || id.includes('zustand')) {
              return 'vendor-core';
            }
          }
        },
      },
    },
  },
})
