import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import dts from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url))

const dtsPluginOptions = {
	rollupTypes: true,
};

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib.ts'),
      name: 'HTMLDiagram',
      fileName: 'html-diagram',
    },
  },
  plugins: [dts(dtsPluginOptions)]
})
