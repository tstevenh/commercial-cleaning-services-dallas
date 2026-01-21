// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://commercialcleaningservicesdallas.com',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react(), sitemap()]
});