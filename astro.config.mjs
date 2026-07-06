// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkBreaks from 'remark-breaks';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zuntomo.com',

  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {                      
    remarkPlugins: [remarkBreaks], 
  },

  integrations: [sitemap()]
});