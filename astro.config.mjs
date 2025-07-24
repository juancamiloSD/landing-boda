// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [svelte(), icon()]
});