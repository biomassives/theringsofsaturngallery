import { defineConfig } from 'vite';

export default defineConfig({
  base: 'https://theringsofsaturngallery-nu.vercel.app/',
  build: {
    rollupOptions: {
      input: '/main.js',
    },
  },
});
