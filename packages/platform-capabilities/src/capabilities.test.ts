import { describe, it, expect } from 'vitest';
import {
  toPascalCase,
  isPlatformSupported,
  getComponentCapability,
  getHookCapability,
  getRecipesForPlatform,
  getSupportedComponents,
  getPlatformDefinition,
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
  });

  describe('Component Capabilities', () => {
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

    it('filters recipes by platform', () => {
      const recipes = getRecipesForPlatform('copy-button', 'android');
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
  });

  describe('Hook Capabilities', () => {
    it('marks useHover unsupported on mobile touch platforms', () => {
      const hover = getHookCapability('use-hover');
      expect(hover).toBeDefined();
      expect(hover?.platforms.web.support).toBe('native');
      expect(hover?.platforms.android.support).toBe('unsupported');
      expect(hover?.platforms.ios.support).toBe('unsupported');
      expect(hover?.platforms.windows.support).toBe('adapted');
      expect(hover?.platforms.macos.support).toBe('adapted');
    });

    it('marks useMediaQuery unsupported on native runtimes', () => {
      const mq = getHookCapability('use-media-query');
      expect(mq).toBeDefined();
      expect(mq?.platforms.web.support).toBe('native');
      expect(mq?.platforms.android.support).toBe('unsupported');
      expect(mq?.platforms.ios.support).toBe('unsupported');
    });

    it('verifies useReducedMotion is supported across all platforms', () => {
      const motion = getHookCapability('use-reduced-motion');
      expect(motion).toBeDefined();
      expect(motion?.platforms.web.support).toBe('native');
      expect(motion?.platforms.android.support).toBe('native');
      expect(motion?.platforms.ios.support).toBe('native');
      expect(motion?.platforms.windows.support).toBe('adapted');
      expect(motion?.platforms.macos.support).toBe('adapted');
    });

    it('marks useFocusTrap unsupported on native mobile', () => {
      const trap = getHookCapability('use-focus-trap');
      expect(trap).toBeDefined();
      expect(trap?.platforms.web.support).toBe('native');
      expect(trap?.platforms.android.support).toBe('unsupported');
      expect(trap?.platforms.ios.support).toBe('unsupported');
      expect(trap?.platforms.android.alternative).toContain('Modal');
    });
  });
});

