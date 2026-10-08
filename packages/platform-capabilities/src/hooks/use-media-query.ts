import { HookCapability } from '../types';

export const useMediaQueryCapability: HookCapability = {
  id: 'use-media-query',
  name: 'useMediaQuery',
  category: 'Layout',
  description: 'Browser CSS Media Query match listener for responsive breakpoint transitions.',
  inputContract: '(query: string) => boolean',
  outputContract: 'Boolean matching state',
  platforms: {
    web: {
      platform: 'web',
      support: 'native',
      implementation: '@winplaybox/primitives',
      notes: 'Browser window.matchMedia with change listener and SSR safe false fallback.',
      testStatus: 'verified',
    },
    android: {
      platform: 'android',
      support: 'unsupported',
      notes: 'Native engines do not execute CSS media query strings.',
      alternative: 'useWindowDimensions / useBreakpoint',
      testStatus: 'verified',
    },
    ios: {
      platform: 'ios',
      support: 'unsupported',
      notes: 'Native iOS runtimes do not parse CSS media query string syntax.',
      alternative: 'useWindowDimensions / useBreakpoint',
      testStatus: 'verified',
    },
    windows: {
      platform: 'windows',
      support: 'unsupported',
      notes: 'WinUI uses window dimension states rather than CSS media query parsers.',
      alternative: 'useWindowDimensions / useBreakpoint',
      testStatus: 'verified',
    },
    macos: {
      platform: 'macos',
      support: 'unsupported',
      notes: 'AppKit utilizes NSWindow dimensions rather than CSS media queries.',
      alternative: 'useWindowDimensions / useBreakpoint',
      testStatus: 'verified',
    },
  },
};
