import type { Preview } from '@storybook/react';
import React, { useEffect } from 'react';
import { SpectraProvider } from '@spectra/react';
import '../../../packages/tokens/dist/css/tokens.css';

export const globalTypes = {
  pack: {
    name: 'Style Pack',
    description: 'Global style pack for Spectra UI',
    defaultValue: 'minimal',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'minimal', title: 'Minimal Pack (Phase 1)' },
      ],
      showName: true,
    },
  },
  mode: {
    name: 'Color Mode',
    description: 'Color scheme mode',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light Mode' },
        { value: 'dark', title: 'Dark Mode' },
        { value: 'amoled', title: 'AMOLED Mode' },
      ],
      showName: true,
    },
  },
};

const withTheme = (Story: any, context: any) => {
  const { pack, mode } = context.globals;

  useEffect(() => {
    document.documentElement.setAttribute('data-pack', pack || 'minimal');
    document.documentElement.setAttribute('data-mode', mode || 'light');
  }, [pack, mode]);

  return (
    <SpectraProvider defaultPack={pack || 'minimal'} defaultColorScheme={mode || 'light'}>
      <div
        style={{
          padding: 24,
          minHeight: '100vh',
          backgroundColor: 'var(--color-surface)',
          color: 'var(--color-text-primary)',
          transition: 'background-color 0.2s ease, color 0.2s ease',
        }}
      >
        <Story />
      </div>
    </SpectraProvider>
  );
};

const preview: Preview = {
  decorators: [withTheme],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      config: {},
      options: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa'],
        },
      },
    },
  },
};

export default preview;
