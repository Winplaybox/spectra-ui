/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'path';

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      '@spectra/tokens/css': path.resolve(__dirname, '../tokens/dist/css/tokens.css'),
      '@spectra/tokens': path.resolve(__dirname, '../tokens/dist/ts/index.js'),
      '@spectra/primitives': path.resolve(__dirname, '../primitives/src'),
      '@spectra/icons/core': path.resolve(__dirname, '../icons/src/core.ts'),
      '@spectra/icons/social': path.resolve(__dirname, '../icons/src/social.ts'),
      '@spectra/icons/filled': path.resolve(__dirname, '../icons/src/filled.ts'),
      '@spectra/icons/outlined': path.resolve(__dirname, '../icons/src/outlined.ts'),
      '@spectra/icons/rounded': path.resolve(__dirname, '../icons/src/rounded.ts'),
      '@spectra/icons/sharp': path.resolve(__dirname, '../icons/src/sharp.ts'),
      '@spectra/icons/twotone': path.resolve(__dirname, '../icons/src/twotone.ts'),
      '@spectra/icons/dynamic': path.resolve(__dirname, '../icons/src/dynamic.ts'),
      '@spectra/icons': path.resolve(__dirname, '../icons/src'),
      '@spectra/react': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
  },
});
