---
"html-diagram": patch
---

Restore the bundled `dist/html-diagram.d.ts`: vite-plugin-dts v5 renamed `rollupTypes` to `bundleTypes`, so 0.5.9 shipped per-file declarations and TypeScript consumers lost their types
