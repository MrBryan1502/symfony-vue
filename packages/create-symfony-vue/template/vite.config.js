import { defineConfig } from 'vite';
import symfonyPlugin from 'vite-plugin-symfony';
import vue from '@vitejs/plugin-vue';

/* if you're using React */
// import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [vue(), symfonyPlugin()],
  server: {
    host: 'localhost',
    port: 5173,
  },
  build: {
    outDir: 'public/build',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        app: './assets/main.ts',
      },
    },
  },
  resolve: {
    alias: {
      '@': '/assets/src/',
    },
  },
});
