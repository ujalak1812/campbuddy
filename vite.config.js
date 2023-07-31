import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/campbuddy/",
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      data: "/src/data",
      layout: "/src/layout",
    },
  },
});
