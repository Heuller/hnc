import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'HNC',
        short_name: 'HNC',
        description: 'Heuller na Camara - Plataforma de Alta Performance CEBRASPE',
        theme_color: '#16244A',
        background_color: '#FAF7F0',
        display: 'standalone',
        start_url: './',
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2,ttf}'],
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
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
