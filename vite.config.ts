/// <reference types="vitest" />
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import postcssNested from "postcss-nested";
import postcssCustomMedia from "postcss-custom-media";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [postcssNested(), postcssCustomMedia()],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test.setup.ts"],
  },
});
