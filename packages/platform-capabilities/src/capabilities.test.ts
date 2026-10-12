import { describe, it, expect } from 'vitest';
import {
  toPascalCase,
  isPlatformSupported,
  getComponentCapability,
  getHookCapability,
  getRecipesForPlatform,
  getSupportedComponents,
  getPlatformDefinition,
  getComponents,
  getComponent,
  getVariants,
  getSizes,
  getStates,
  getRecipes,
  getProps,
  getHooks,
  getHook,
  getFunctions,
  getUtilities,
  getAccessibility,
  getBestPractices,
  getPlayground,
  getPlatformCapabilities,
  getPlatformSupportMatrix,
  isComponentVerified,
  getVerifiedComponents,
} from './index';

describe('@winplaybox/platform-capabilities', () => {
  describe('toPascalCase', () => {
    it('sanitizes strings with spaces into valid PascalCase identifiers', () => {
      expect(toPascalCase('Copy Button')).toBe('CopyButton');
      expect(toPascalCase('Text Input')).toBe('TextInput');
      expect(toPascalCase('text-input')).toBe('TextInput');
      expect(toPascalCase('split_button_group')).toBe('SplitButtonGroup');
    });
  });

  describe('Platform Definitions', () => {
    it('provides all 5 platform definitions', () => {
      const platforms = ['web', 'android', 'ios', 'windows', 'macos'] as const;
      platforms.forEach((p) => {
        const def = getPlatformDefinition(p);
        expect(def).toBeDefined();
        expect(def.platform).toBe(p);
        expect(def.renderer).toBeTruthy();
        expect(def.touchStandard).toBeTruthy();
      });
    });

    it('aliases getPlatformCapabilities to getPlatformDefinition', () => {
      expect(getPlatformCapabilities('android').name).toBe('Android');
    });
  });

  describe('Component Capabilities & Isolation', () => {
    it('retrieves copy-button capabilities with authentic platforms', () => {
      const cap = getComponentCapability('copy-button');
      expect(cap).toBeDefined();
      expect(cap?.name).toBe('CopyButton');
      expect(cap?.platforms.web.support).toBe('native');
      expect(cap?.platforms.android.support).toBe('native');
      expect(cap?.platforms.ios.support).toBe('native');
      expect(cap?.platforms.windows.support).toBe('adapted');
      expect(cap?.platforms.macos.support).toBe('adapted');
    });

    it('filters recipes by platform using getRecipes', () => {
      const recipes = getRecipes('copy-button', 'android');
      expect(recipes.length).toBeGreaterThan(0);
      recipes.forEach((r) => {
        expect(r.platforms).toContain('android');
      });
    });

    it('verifies LiveIndicator capability across all 5 platforms', () => {
      const live = getComponentCapability('live-indicator');
      expect(live).toBeDefined();
      expect(live?.name).toBe('LiveIndicator');
      expect(live?.platforms.web.support).toBe('native');
      expect(live?.platforms.android.support).toBe('native');
      expect(live?.platforms.ios.support).toBe('native');
      expect(live?.platforms.windows.support).toBe('adapted');
      expect(live?.platforms.macos.support).toBe('adapted');
    });

    it('verifies TextInput has 27 recipes on Web and only verified recipes on Android/iOS', () => {
      const webRecipes = getRecipes('text-input', 'web');
      expect(webRecipes.length).toBe(27);

      const androidRecipes = getRecipes('text-input', 'android');
      expect(androidRecipes.length).toBeLessThan(27);
      expect(androidRecipes.some((r) => r.id === 'standard')).toBe(false);
      expect(androidRecipes.some((r) => r.id === 'select')).toBe(false);
      expect(androidRecipes.some((r) => r.id === 'basic')).toBe(true);
      expect(androidRecipes.some((r) => r.id === 'password')).toBe(true);

      const iosRecipes = getRecipes('text-input', 'ios');
      expect(iosRecipes.some((r) => r.id === 'clear-button')).toBe(true);
      expect(iosRecipes.some((r) => r.id === 'standard')).toBe(false);
    });

    it('enforces platform isolation in getComponent: returns undefined when unsupported', () => {
      // Select is unsupported on macOS
      expect(getComponent('select', 'macos')).toBeUndefined();
      expect(getComponent('select', 'web')).toBeDefined();
      expect(getComponent('select', 'android')).toBeDefined();

      // HoverCard is unsupported on Android and iOS
      expect(getComponent('hover-card', 'android')).toBeUndefined();
      expect(getComponent('hover-card', 'ios')).toBeUndefined();
      expect(getComponent('hover-card', 'web')).toBeDefined();

      // BottomSheet is unsupported on Web, Windows, macOS
      expect(getComponent('bottom-sheet', 'web')).toBeUndefined();
      expect(getComponent('bottom-sheet', 'android')).toBeDefined();
      expect(getComponent('bottom-sheet', 'ios')).toBeDefined();

      // DatePicker is unsupported on Windows and macOS
      expect(getComponent('date-picker', 'windows')).toBeUndefined();
      expect(getComponent('date-picker', 'macos')).toBeUndefined();
      expect(getComponent('date-picker', 'web')).toBeDefined();
    });

    it('retrieves platform-specific variants, sizes, and states', () => {
      const webVariants = getVariants('text-input', 'web');
      expect(webVariants).toContain('outlined');
      expect(webVariants).toContain('filled');
      expect(webVariants).toContain('standard');

      const iosVariants = getVariants('text-input', 'ios');
      expect(iosVariants).not.toContain('standard');

      const sizes = getSizes('text-input', 'web');
      expect(sizes).toEqual(['sm', 'md', 'lg']);

      const webStates = getStates('text-input', 'web');
      expect(webStates).toContain('hover');

      const androidStates = getStates('text-input', 'android');
      expect(androidStates).not.toContain('hover');
    });

    it('verifies Badge capabilities on Web, Android, iOS', () => {
      const badge = getComponentCapability('badge');
      expect(badge).toBeDefined();
      expect(badge?.name).toBe('Badge');
      expect(badge?.platforms.web.support).toBe('native');
      expect(badge?.platforms.web.recipes).toContain('counter');
      expect(badge?.platforms.web.recipes).toContain('presence');
      expect(badge?.platforms.windows.support).toBe('unsupported');
    });

    it('verifies Breadcrumb capabilities on Web', () => {
      const breadcrumb = getComponentCapability('breadcrumb');
      expect(breadcrumb).toBeDefined();
      expect(breadcrumb?.name).toBe('Breadcrumb');
      expect(breadcrumb?.platforms.web.support).toBe('native');
      expect(breadcrumb?.platforms.web.recipes).toContain('basic');
      expect(breadcrumb?.platforms.web.recipes).toContain('sizes');
      expect(breadcrumb?.platforms.web.recipes).toContain('overflow');
      expect(breadcrumb?.platforms.web.recipes).toContain('non-interactive');
      expect(breadcrumb?.platforms.android.support).toBe('adapted');
      expect(breadcrumb?.platforms.ios.support).toBe('adapted');
    });

    it('retrieves platform-filtered props for TextInput', () => {
      const webProps = getProps('text-input', 'web');
      expect(webProps.some((p) => p.name === 'onChange')).toBe(true);
      expect(webProps.some((p) => p.name === 'onChangeText')).toBe(false);

      const androidProps = getProps('text-input', 'android');
      expect(androidProps.some((p) => p.name === 'onChangeText')).toBe(true);
      expect(androidProps.some((p) => p.name === 'onChange')).toBe(false);
      expect(androidProps.some((p) => p.name === 'keyboardType')).toBe(true);
    });

    it('builds playground configuration strictly filtered for target platform', () => {
      const webPlayground = getPlayground('text-input', 'web');
      expect(webPlayground).toBeDefined();
      expect(webPlayground?.supportedVariants).toContain('standard');

      const iosPlayground = getPlayground('text-input', 'ios');
      expect(iosPlayground).toBeDefined();
      expect(iosPlayground?.supportedVariants).not.toContain('standard');

      // Playground for unsupported component returns undefined
      expect(getPlayground('hover-card', 'android')).toBeUndefined();
    });
  });

  describe('Hook Capabilities & Isolation', () => {
    it('marks useHover unsupported on mobile touch platforms', () => {
      const hover = getHookCapability('use-hover');
      expect(hover).toBeDefined();
      expect(hover?.platforms.web.support).toBe('native');
      expect(hover?.platforms.android.support).toBe('unsupported');
      expect(hover?.platforms.ios.support).toBe('unsupported');
      expect(hover?.platforms.windows.support).toBe('adapted');
      expect(hover?.platforms.macos.support).toBe('adapted');

      // getHook with platform returns undefined on unsupported
      expect(getHook('use-hover', 'android')).toBeUndefined();
      expect(getHook('use-hover', 'ios')).toBeUndefined();
      expect(getHook('use-hover', 'web')).toBeDefined();
    });

    it('marks useMediaQuery unsupported on native runtimes', () => {
      const mq = getHookCapability('use-media-query');
      expect(mq).toBeDefined();
      expect(mq?.platforms.web.support).toBe('native');
      expect(mq?.platforms.android.support).toBe('unsupported');
      expect(mq?.platforms.ios.support).toBe('unsupported');

      expect(getHook('use-media-query', 'android')).toBeUndefined();
    });

    it('verifies useReducedMotion is supported across all platforms', () => {
      const motion = getHookCapability('use-reduced-motion');
      expect(motion).toBeDefined();
      expect(motion?.platforms.web.support).toBe('native');
      expect(motion?.platforms.android.support).toBe('native');
      expect(motion?.platforms.ios.support).toBe('native');
      expect(motion?.platforms.windows.support).toBe('adapted');
      expect(motion?.platforms.macos.support).toBe('adapted');

      expect(getHook('use-reduced-motion', 'android')).toBeDefined();
      expect(getHook('use-reduced-motion', 'ios')).toBeDefined();
    });

    it('filters hook catalog by platform using getHooks', () => {
      const webHooks = getHooks('web');
      expect(webHooks.some((h) => h.id === 'use-hover')).toBe(true);
      expect(webHooks.some((h) => h.id === 'use-media-query')).toBe(true);

      const androidHooks = getHooks('android');
      expect(androidHooks.some((h) => h.id === 'use-hover')).toBe(false);
      expect(androidHooks.some((h) => h.id === 'use-media-query')).toBe(false);
      expect(androidHooks.some((h) => h.id === 'use-debounce')).toBe(true);
    });
  });

  describe('Authoritative Platform Support Matrix', () => {
    it('generates matrix with 5 platform ratings for every component and hook', () => {
      const matrix = getPlatformSupportMatrix();
      expect(matrix.length).toBeGreaterThan(10);

      const textInputRow = matrix.find((r) => r.id === 'text-input');
      expect(textInputRow).toBeDefined();
      expect(textInputRow?.platforms.web.support).toBe('native');
      expect(textInputRow?.platforms.android.support).toBe('native');

      const hoverRow = matrix.find((r) => r.id === 'use-hover');
      expect(hoverRow).toBeDefined();
      expect(hoverRow?.platforms.android.support).toBe('unsupported');
    });
  });

  describe('Dual Status Gates & Verification Architecture', () => {
    it('verifies TextInput passes dual status gate on Web, Android, iOS', () => {
      expect(isComponentVerified('text-input', 'web')).toBe(true);
      expect(isComponentVerified('text-input', 'android')).toBe(true);
      expect(isComponentVerified('text-input', 'ios')).toBe(true);
      // Windows and macOS are experimental / basic docs, so they fail strict production verification gate
      expect(isComponentVerified('text-input', 'windows')).toBe(false);
      expect(isComponentVerified('text-input', 'macos')).toBe(false);
    });

    it('resolves verified components strictly filtered by dual status gates', () => {
      const verifiedWeb = getVerifiedComponents('web');
      expect(verifiedWeb.some((c) => c.id === 'text-input')).toBe(true);

      const verifiedAndroid = getVerifiedComponents('android');
      expect(verifiedAndroid.some((c) => c.id === 'text-input')).toBe(true);

      const verifiedWindows = getVerifiedComponents('windows');
      // Experimental components do not enter verified production catalog
      expect(verifiedWindows.some((c) => c.id === 'text-input')).toBe(false);
    });
  });
});
