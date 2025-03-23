import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://queroclean.com.br',
  integrations: [],
  vite: {
    ssr: {
      external: ['svgo']
    }
  },
  server: {
    port: 3000,
    host: true
  }
});