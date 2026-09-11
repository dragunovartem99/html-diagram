import { resolve } from "node:path";

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
	build: {
		lib: {
			entry: resolve(import.meta.dirname, "lib/index.ts"),
			name: "HTML Diagram",
			fileName: "html-diagram",
		},
		copyPublicDir: false,
	},
	plugins: [dts({ rollupTypes: true })],
});
