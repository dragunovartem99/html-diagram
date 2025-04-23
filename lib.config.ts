import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, "lib/index.ts"),
			name: "HTML Diagram",
			fileName: "html-diagram",
		},
		copyPublicDir: false,
	},
	plugins: [dts({ rollupTypes: true })],
});
