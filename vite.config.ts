import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Se for fazer deploy no Github Pages para um repositório como github.com/user/repo,
  base: './',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
