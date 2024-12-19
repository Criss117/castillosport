// @ts-check
// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],

  env: {
    schema: {
      FRONT_END_URL: envField.string({ context: "client", access: "public" }),
      BACK_URL: envField.string({ context: "server", access: "public" }),
    },
  },

  output: "static",

  adapter: node({
    mode: "standalone",
  }),
});
