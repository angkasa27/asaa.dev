// @ts-check
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://asaa.dev",
  integrations: [svelte(), sitemap()],
  output: "static",
  image: {
    defaultFormat: "webp",
  },
  vite: {
    css: {
      transformer: "postcss",
    },
    build: {
      minify: "esbuild",
      cssMinify: true,
    },
  },
});
