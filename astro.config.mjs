// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
    },
  },
  integrations: [react()],
  output: "server",
  adapter: netlify(),
});
