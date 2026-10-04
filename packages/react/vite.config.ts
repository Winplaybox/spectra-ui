/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'path';

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      '@winplaybox/tokens/css': path.resolve(__dirname, '../tokens/dist/css/tokens.css'),
      '@winplaybox/tokens': path.resolve(__dirname, '../tokens/dist/ts/index.js'),
      '@winplaybox/primitives': path.resolve(__dirname, '../primitives/src'),
      '@winplaybox/icons/core': path.resolve(__dirname, '../icons/src/core.ts'),
      '@winplaybox/icons/social': path.resolve(__dirname, '../icons/src/social.ts'),
      '@winplaybox/icons/filled': path.resolve(__dirname, '../icons/src/filled.ts'),
      '@winplaybox/icons/outlined': path.resolve(__dirname, '../icons/src/outlined.ts'),
      '@winplaybox/icons/rounded': path.resolve(__dirname, '../icons/src/rounded.ts'),
      '@winplaybox/icons/sharp': path.resolve(__dirname, '../icons/src/sharp.ts'),
      '@winplaybox/icons/twotone': path.resolve(__dirname, '../icons/src/twotone.ts'),
      '@winplaybox/icons/dynamic': path.resolve(__dirname, '../icons/src/dynamic.ts'),
      '@winplaybox/icons': path.resolve(__dirname, '../icons/src'),
      '@winplaybox/react': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
  },
});
