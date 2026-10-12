export type Platform = 'web' | 'android' | 'ios' | 'windows' | 'macos';

export type SupportLevel = 'native' | 'adapted' | 'partial' | 'unsupported' | 'experimental';

export type ImplementationStatus =
  | 'planned'
  | 'experimental'
  | 'partial'
  | 'stable'
  | 'deprecated'
  | 'unsupported';

export type DocumentationStatus =
  | 'missing'
  | 'basic'
  | 'complete'
  | 'verified';

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
  implementationStatus?: ImplementationStatus;
  documentationStatus?: DocumentationStatus;
  implementation?: string;
  variants?: string[];
  sizes?: string[];
  recipes?: string[];
  states?: string[];
  props?: string[];
  interactions?: string[];
  accessibility?: string[];
  supportedCapabilities?: string[];
  unsupportedCapabilities?: string[];
  limitations?: string[];
  fallback?: string;
  testStatus: TestStatus;
}

export interface RecipeDefinition {
  id: string;
  number?: string;
  title: string;
  description: string;
  platforms: Platform[];
  variants?: string[];
  complexity?: 'basic' | 'intermediate' | 'advanced';
  category?: string;
  demoSnippet?: string;
  codeTemplate?: Record<Platform, string>;
}

export interface PropDefinition {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
  platforms: Platform[];
  required?: boolean;
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
  props?: PropDefinition[];
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

export interface PlatformSupportMatrixRow {
  id: string;
  name: string;
  displayName: string;
  category: string;
  type: 'component' | 'hook';
  platforms: Record<Platform, { support: SupportLevel; testStatus: TestStatus; notes?: string }>;
}

export interface PlaygroundConfig {
  componentId: string;
  platform: Platform;
  defaultVariant?: string;
  supportedVariants: string[];
  supportedSizes: string[];
  supportedStates: string[];
  supportedRecipes: string[];
  supportedProps: PropDefinition[];
  codeSnippet: string;
}

