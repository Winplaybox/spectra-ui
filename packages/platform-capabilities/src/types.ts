export type Platform = 'web' | 'android' | 'ios' | 'windows' | 'macos';

export type SupportLevel = 'native' | 'adapted' | 'partial' | 'unsupported' | 'experimental';

export type TestStatus = 'verified' | 'untested' | 'failing';

export interface PlatformDefinition {
  platform: Platform;
  name: string;
  shortName: string;
  badge: string;
  icon: string;
  renderer: string;
  primaryUxParadigm: string;
  package: string;
  minOsVersion: string;
  touchStandard: string;
  accessibilityStandard: string;
  motionEngine: string;
  description: string;
  themeCapabilities: string[];
}

export interface PlatformCapability {
  platform: Platform;
  support: SupportLevel;
  implementation?: string;
  variants?: string[];
  recipes?: string[];
  states?: string[];
  interactions?: string[];
  accessibility?: string[];
  limitations?: string[];
  fallback?: string;
  testStatus: TestStatus;
}

export interface RecipeDefinition {
  id: string;
  title: string;
  description: string;
  platforms: Platform[];
  codeTemplate?: Record<Platform, string>;
}

export interface SlotDefinition {
  name: string;
  description: string;
  platforms: Platform[];
}

export interface BestPractices {
  do: string[];
  dont: string[];
}

export interface ComponentCapability {
  id: string;
  name: string;
  displayName: string;
  category: string;
  description: string;
  slots?: SlotDefinition[];
  recipes?: RecipeDefinition[];
  bestPractices?: BestPractices;
  platforms: Record<Platform, PlatformCapability>;
}

export interface HookCapability {
  id: string;
  name: string;
  description: string;
  category: string;
  inputContract?: string;
  outputContract?: string;
  platforms: Record<
    Platform,
    {
      platform: Platform;
      support: SupportLevel;
      implementation?: string;
      notes?: string;
      alternative?: string;
      testStatus: TestStatus;
    }
  >;
}
