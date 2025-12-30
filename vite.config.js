import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  build: {
    outDir: 'static',
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/markdown-editor.js'),
      name: 'MarkdownEditor',
      formats: ['es'],
      fileName: () => 'markdown-editor.js'
    },
    rollupOptions: {
      output: {
        assetFileNames: 'markdown-editor.css'
      }
    }
  }
});
