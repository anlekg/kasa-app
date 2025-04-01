import { reactRouter } from "@react-router/dev/vite"
import autoprefixer from "autoprefixer"
import tailwindcss from "tailwindcss"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import svgr from "vite-plugin-svgr"
import react from "@vitejs/plugin-react"

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
    svgr({
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
    reactRouter(),
    react(),
    tsconfigPaths(),
  ],
  base: "/kasa-app",
})
