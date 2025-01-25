import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    watch: {
      include: ['src/**/*'],
      exclude: ['node_modules/**'],
    },
    rollupOptions: {
      input: {
        popup: 'index.html',
        background: 'src/background/background.ts',
        content: 'src/content/content.ts',
      },
      output: {
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === 'background' || chunkInfo.name === 'content'
            ? '[name].js'
            : 'assets/[name]-[hash].js';
        },
      },
    },
  },
});
