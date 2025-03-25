import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://queroclean.com.br',
  integrations: [],
  output: 'static',
  // Add this if not already present
  vite: {
    ssr: {
      noExternal: ['zod']
    }
  }
});