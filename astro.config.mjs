import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'https://queroclean.com.br',
  output: 'static',
  adapter: vercel(),
  vite: {
    ssr: {
      noExternal: ['zod']
    }
  }
});