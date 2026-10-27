import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2020',
    cssMinify: true,
    rollupOptions: {
      input: {
        captura: resolve(import.meta.dirname, 'index.html'),
        posLive: resolve(import.meta.dirname, 'pos-live/index.html'),
        venda: resolve(import.meta.dirname, 'venda/index.html'),
      },
    },
  },
})
