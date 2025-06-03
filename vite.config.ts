import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isDev = command === "serve";

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@guards": path.resolve(__dirname, "./src/components/guards"),
        "@layouts": path.resolve(__dirname, "./src/layouts"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@features": path.resolve(__dirname, "./src/features"),
        "@services": path.resolve(__dirname, "./src/services"),
        "@api": path.resolve(__dirname, "./src/api"),
        "@redux": path.resolve(__dirname, "./src/redux"),
        "@store": path.resolve(__dirname, "./src/redux/store"),
        "@hooks": path.resolve(__dirname, "./src/redux/hooks"),
        "@slices": path.resolve(__dirname, "./src/redux/slices"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@styles": path.resolve(__dirname, "./src/styles"),
        "@constants": path.resolve(__dirname, "./src/constants"),
        "@types": path.resolve(__dirname, "./src/types")
      }
    },
    build: {
      outDir: "dist"
    },
    server: isDev
      ? {
          port: 3000,
          open: true,
          proxy: {
            "/api": {
              target: "http://localhost:3001",
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, "")
            }
          }
        }
      : undefined
  };
});
