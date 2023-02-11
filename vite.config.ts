import { defineConfig, loadEnv, splitVendorChunkPlugin } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

const getAlliases = () => {
  return {
    "@assets": resolve("src/assets"),
    "@components": resolve("src/components"),
    "@containers": resolve("src/containers"),
    "@customTypes": resolve("src/types"),
    "@pages": resolve("src/pages"),
    "@routes": resolve("src/routes"),
    "@context": resolve("src/context"),
    "@hooks": resolve("src/hooks"),
    "@utils": resolve("src/utils")
  }
}

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())

  if (command === "serve" && mode === "development") {
    return {
      plugins: [react()],
      resolve: {
        alias: getAlliases(),
      },
      server: {
        port: parseInt(env.VITE_PORT),
      },
    }
  } else {
    return {
      plugins: [react(), splitVendorChunkPlugin()],
      build: {
        outDir: "build",
        chunkSizeWarningLimit: 1000,
        minify: "esbuild",
      },
      resolve: {
        alias: getAlliases(),
      },
    }
  }
})