import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@router": "/src/router",
      "@views": "/src/views",
      "@components": "/src/components",
      "@utils": "/src/utils",
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: '@import "@/assets/scss/_variables";',
      },
    },
  },
});
