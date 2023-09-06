import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    outDir: './build/',
  },
  server: {
    port: 3000,
  },
  plugins: [tsconfigPaths()],
 
})
