import { resolve } from 'path';
import { defineConfig, loadEnv, ConfigEnv } from 'vite';

import viteCompression from 'vite-plugin-compression';
import react from '@vitejs/plugin-react';
const pathResolve = (dir: string) => {
  return resolve(__dirname, '.', dir);
};
const alias: Record<string, string> = {
  '/@': pathResolve('./src/'),
};
const viteConfig = defineConfig((mode: ConfigEnv) => {
  const env = loadEnv(mode.mode, process.cwd());

  return {
    plugins: [react(), viteCompression()],
    root: process.cwd(),
    resolve: { alias },
    base: mode.command === 'serve' ? './' : env.VITE_PUBLIC_PATH,
    server: {
      host: '0.0.0.0',
      port: env.VITE_PORT as unknown as number,
      open: JSON.parse(env.VITE_OPEN_PROXY),
      hmr: true,
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          ws: true,
          cors: false,
          changeOrigin: true,
          rewrite: (path) => {
            return path.replace(/^\/api/, '');
          },
          configure: (proxy, options) => {
            proxy.on('proxyReq', (proxyReq, req, res) => {
              console.log('Proxying request:', req.url);
            });
          },
        },
      },
    },
    build: {
      outDir: 'dist',
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return (
                id.toString().match(/\/node_modules\/(?!.pnpm)(?<moduleName>[^\/]*)\//)?.groups!
                  .moduleName ?? 'vender'
              );
            }
          },
        },
      },
    },
    css: { preprocessorOptions: { css: { charset: false } } },
  };
});

export default viteConfig;
