import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

import { peerDependencies } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ rollupTypes: true }), // Output .d.ts files
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      // Exclude peer dependencies from the bundle to reduce bundle size
      external: Object.keys(peerDependencies),
    },
  },
})
