import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { BASE_URL } from "./src/constants/UrlConstants";

// https://vitejs.dev/config/
export default defineConfig({
  base: `${BASE_URL}`,
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      data: "/src/data",
      layouts: "/src/layouts",
      modules: "/src/modules",
      pages: "/src/pages",
      constants: "/src/constants",
    },
  },
});
