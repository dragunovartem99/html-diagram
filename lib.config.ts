import { resolve } from "node:path";

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
	build: {
		lib: {
			entry: resolve(import.meta.dirname, "lib/index.ts"),
			fileName: "html-diagram",
			formats: ["es"],
		},
		copyPublicDir: false,
	},
	plugins: [dts({ bundleTypes: true })],
});
