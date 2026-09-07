/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      'react-native': path.resolve(__dirname, './test-setup/react-native-mock.ts'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
