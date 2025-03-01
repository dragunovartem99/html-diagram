import { defineConfig } from "vite";

let base = "/html-diagram/";

if (process.env.PREVIEW_PATH) {
	base += `${process.env.PREVIEW_PATH}`;
}

export default defineConfig({
	base,
	build: { outDir: "dist-demo" },
});
