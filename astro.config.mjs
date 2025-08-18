// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

const site = 'https://rasper1219.github.io';
const base = '/';

export default defineConfig({
  site,
  base,
  integrations: [react(), tailwind(), mdx()],
  output: 'static'
});
