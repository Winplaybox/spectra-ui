import type { StorybookConfig } from '@storybook/react-vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../../../packages/react/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    config.plugins = config.plugins || [];
    config.plugins.push(vanillaExtractPlugin());
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@spectra/tokens/css': path.resolve(__dirname, '../../../packages/tokens/dist/css/tokens.css'),
      '@spectra/tokens': path.resolve(__dirname, '../../../packages/tokens/dist/ts/index.js'),
      '@spectra/primitives': path.resolve(__dirname, '../../../packages/primitives/src'),
      '@spectra/icons': path.resolve(__dirname, '../../../packages/icons/src'),
      '@spectra/react': path.resolve(__dirname, '../../../packages/react/src'),
    };
    return config;
  },
};

export default config;
