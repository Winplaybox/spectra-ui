import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'path';

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      '@spectra/tokens/css': path.resolve(__dirname, '../../packages/tokens/dist/css/tokens.css'),
      '@spectra/tokens': path.resolve(__dirname, '../../packages/tokens/dist/ts/index.js'),
      '@spectra/primitives': path.resolve(__dirname, '../../packages/primitives/src'),
      '@spectra/icons': path.resolve(__dirname, '../../packages/icons/src'),
      '@spectra/react': path.resolve(__dirname, '../../packages/react/src'),
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});
