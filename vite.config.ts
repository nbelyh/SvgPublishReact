import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['svgpublish'],
  },
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
    dts({ include: ['lib'] })    
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es']
    }
  }
})
