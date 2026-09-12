// Universal Multi-Platform Design System Specifications & Registry
// Benchmarked against Microsoft Fluent 2 & Apple Human Interface Guidelines

export type Platform = 'web' | 'ios' | 'android' | 'windows' | 'macos';

export interface PlatformMetadata {
  id: Platform;
  name: string;
  shortName: string;
  badge: string;
  icon: string;
  runtime: string;
  package: string;
  primaryLanguage: string;
  nativeLanguage: string;
  minOsVersion: string;
  minFrameworkVersion: string;
  touchStandard: string;
  accessibilityStandard: string;
  motionEngine: string;
  description: string;
  themeCapabilities: string[];
}

export const PLATFORMS: Record<Platform, PlatformMetadata> = {
  web: {
    id: 'web',
    name: 'Web (React DOM)',
    shortName: 'Web',
    badge: 'React 18/19',
    icon: '🌐',
    runtime: 'Modern Evergreen Browsers (Chrome 90+, Safari 14+, Firefox 88+, Edge 90+)',
    package: '@spectra/react',
    primaryLanguage: 'TypeScript / TSX',
    nativeLanguage: 'HTML5 & CSS Variables',
    minOsVersion: 'Any modern OS with Evergreen Browser',
    minFrameworkVersion: 'React 18.0.0+ / React 19.0.0+',
    touchStandard: 'WCAG 2.1 AA 24×24px minimum (32×32px target recommended)',
    accessibilityStandard: 'W3C WAI-ARIA 1.2 & HTML5 Semantic Elements',
    motionEngine: 'CSS Transitions, Keyframe Animations & WAAPI',
    description: 'Zero-runtime CSS variables, tree-shakable components, SSR hydration readiness, and full keyboard focus rings.',
    themeCapabilities: ['CSS Variables', 'prefers-color-scheme', 'prefers-reduced-motion', 'High Contrast Mode (Forced Colors)'],
  },
  ios: {
    id: 'ios',
    name: 'Apple iOS & iPadOS',
    shortName: 'iOS',
    badge: 'iOS 15.0+',
    icon: '🍎',
    runtime: 'React Native Fabric / JavaScriptCore / Hermes',
    package: '@spectra/react-native',
    primaryLanguage: 'TypeScript / TSX (React Native)',
    nativeLanguage: 'Swift / SwiftUI',
    minOsVersion: 'iOS 15.0+ / iPadOS 15.0+',
    minFrameworkVersion: 'React Native 0.72+ / Expo SDK 50+',
    touchStandard: 'Apple Human Interface Guidelines 44×44 pt minimum touch target',
    accessibilityStandard: 'Apple UIAccessibility & VoiceOver Traits',
    motionEngine: 'React Native Reanimated 3 / CoreAnimation / SwiftUI withAnimation',
    description: 'Pixel-perfect Apple HIG components with dynamic type scaling, physical haptics (UIImpactFeedbackGenerator), and native safe area insets.',
    themeCapabilities: ['Dynamic Colors (UIColor / Color)', 'UIUserInterfaceStyle', 'Reduce Motion API', 'Dynamic Type'],
  },
  android: {
    id: 'android',
    name: 'Google Android',
    shortName: 'Android',
    badge: 'API 26+ (8.0)',
    icon: '🤖',
    runtime: 'React Native Hermes / Android Runtime (ART)',
    package: '@spectra/react-native',
    primaryLanguage: 'TypeScript / TSX (React Native)',
    nativeLanguage: 'Kotlin / Jetpack Compose',
    minOsVersion: 'Android 8.0 Oreo (API Level 26+), Target SDK 34+',
    minFrameworkVersion: 'React Native 0.72+ / Expo SDK 50+',
    touchStandard: 'Material Design Guidelines 48×48 dp minimum touch target',
    accessibilityStandard: 'Android AccessibilityNodeInfo & TalkBack',
    motionEngine: 'React Native Reanimated 3 / Jetpack Compose Animation',
    description: 'Hardware ripple effects, Material surface elevation shadows, edge-to-edge system navigation, and back-handler integration.',
    themeCapabilities: ['Material 3 Dynamic Surface', 'Night Mode (UiModeManager)', 'Hardware Acceleration', 'TalkBack Hints'],
  },
  windows: {
    id: 'windows',
    name: 'Microsoft Windows',
    shortName: 'Windows',
    badge: 'Win 10/11',
    icon: '🪟',
    runtime: 'React Native for Windows / WinUI 3 (Windows App SDK)',
    package: '@spectra/react-native-windows',
    primaryLanguage: 'TypeScript / TSX (RNW)',
    nativeLanguage: 'C# / XAML (WinUI 3)',
    minOsVersion: 'Windows 10 (1809+, build 17763+) & Windows 11 (build 22000+)',
    minFrameworkVersion: 'RNW 0.72+ / Windows App SDK 1.4+',
    touchStandard: 'Desktop Pointer & Precision Touchpad (32×32 epx)',
    accessibilityStandard: 'Microsoft UI Automation (UIA) & Narrator',
    motionEngine: 'WinUI Composition Animations & Fluid Motion',
    description: 'Mica and Acrylic material composition, keyboard accelerators (Alt+Key), high-contrast theme integration, and gamepad navigation.',
    themeCapabilities: ['Mica & Acrylic Material', 'Windows High Contrast Mode', 'System Accent Color', 'Focus Visuals'],
  },
  macos: {
    id: 'macos',
    name: 'Apple macOS',
    shortName: 'macOS',
    badge: 'macOS 12.0+',
    icon: '🖥️',
    runtime: 'React Native for macOS / AppKit / SwiftUI Mac',
    package: '@spectra/react-native-macos',
    primaryLanguage: 'TypeScript / TSX (RN macOS)',
    nativeLanguage: 'Swift / AppKit / SwiftUI',
    minOsVersion: 'macOS Monterey 12.0+, Ventura 13+, Sonoma 14+, Sequoia 15+',
    minFrameworkVersion: 'RN macOS 0.72+ / macOS SDK 12+',
    touchStandard: 'Desktop Cursor & Precision Trackpad (28×28 pt)',
    accessibilityStandard: 'macOS NSAccessibility & VoiceOver',
    motionEngine: 'CoreAnimation / NSAnimationContext / SwiftUI withAnimation',
    description: 'macOS Vibrancy materials, SF Symbols integration, cursor hover transformations, menu bar shortcuts (Cmd+Key), and window dragging.',
    themeCapabilities: ['NSVisualEffectView Vibrancy', 'System Accent Sync', 'Dark Aqua Theme', 'Cursor Hover States'],
  },
};

export interface PlatformCompatibilityEntry {
  platform: Platform;
  status: 'supported' | 'beta' | 'planned';
  version: string;
  notes: string;
  touchStandard: string;
  primarySnippet: string;
  nativeSnippet: string;
}

// Generates dedicated platform snippets for a given component
export function getComponentPlatformData(componentId: string, componentName: string): Record<Platform, PlatformCompatibilityEntry> {
  const comp = componentName;

  return {
    web: {
      platform: 'web',
      status: 'supported',
      version: 'v0.1.0 (React 18/19)',
      notes: '100% token contract synced with CSS variables. SSR & RSC compatible with full WAI-ARIA.',
      touchStandard: '24×24px minimum (WCAG 2.1 AA)',
      primarySnippet: `// Web Implementation (React DOM)
import '@spectra/tokens/css';
import { ${comp} } from '@spectra/react';

export const Web${comp}Example = () => {
  return (
    <${comp}
      variant="primary"
      size="md"
      onClick={() => console.log('${comp} activated on Web')}
      aria-label="${comp} control"
    >
      ${comp} Action
    </${comp}>
  );
};`,
      nativeSnippet: `<!-- HTML5 & Semantic Web Standards -->
<button
  type="button"
  class="spectra-${componentId} spectra-${componentId}--primary"
  style="--color-bg: var(--color-action-primary); --radius: var(--radius-component-md);"
  aria-label="${comp} control"
>
  ${comp} Action
</button>`,
    },

    ios: {
      platform: 'ios',
      status: 'supported',
      version: 'v0.1.0 (iOS 15.0+)',
      notes: 'Apple HIG compliant with 44pt touch targets, UIImpactFeedbackGenerator haptics, and VoiceOver traits.',
      touchStandard: '44×44 pt minimum (Apple HIG)',
      primarySnippet: `// iOS React Native Implementation
import React from 'react';
import { ${comp} } from '@spectra/react-native';

export const IOS${comp}Example = () => {
  return (
    <${comp}
      variant="primary"
      size="md"
      onPress={() => console.log('${comp} tapped on iOS')}
      hapticFeedback={true}
      accessibilityRole="${componentId === 'button' ? 'button' : 'none'}"
      accessibilityLabel="${comp} action"
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
    >
      ${comp} Action
    </${comp}>
  );
};`,
      nativeSnippet: `// Swift / SwiftUI Native iOS 15+ Implementation
import SwiftUI
import SpectraTokens

struct IOS${comp}View: View {
  var body: some View {
    Spectra${comp}(
      title: "${comp} Action",
      variant: .primary,
      size: .medium
    ) {
      UIImpactFeedbackGenerator(style: .medium).impactOccurred()
      print("${comp} tapped in SwiftUI")
    }
    .frame(minHeight: 44) // Apple HIG standard
    .accessibilityLabel("${comp} action")
  }
}`,
    },

    android: {
      platform: 'android',
      status: 'supported',
      version: 'v0.1.0 (API 26+)',
      notes: 'Material ripple effects, hardware elevation shadows, 48dp touch targets, and TalkBack semantics.',
      touchStandard: '48×48 dp minimum (Material Design)',
      primarySnippet: `// Android React Native Implementation
import React from 'react';
import { ${comp} } from '@spectra/react-native';

export const Android${comp}Example = () => {
  return (
    <${comp}
      variant="primary"
      size="md"
      onPress={() => console.log('${comp} tapped on Android')}
      android_ripple={{ color: 'rgba(255, 255, 255, 0.24)', borderless: false }}
      elevation={2}
      accessibilityRole="${componentId === 'button' ? 'button' : 'none'}"
      accessible={true}
    >
      ${comp} Action
    </${comp}>
  );
};`,
      nativeSnippet: `// Kotlin / Jetpack Compose Native Android Implementation
package com.winplaybox.spectra.ui

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.spectra.tokens.SpectraTheme

@Composable
fun Android${comp}View() {
  Spectra${comp}(
    text = "${comp} Action",
    variant = ${comp}Variant.Primary,
    modifier = Modifier.minTouchTarget(48.dp),
    onClick = { println("${comp} tapped in Compose") }
  )
}`,
    },

    windows: {
      platform: 'windows',
      status: 'supported',
      version: 'v0.1.0 (Win 10/11)',
      notes: 'Fluent UI Mica composition, keyboard accelerators (Alt+Key), high-contrast mode, and UI Automation.',
      touchStandard: '32×32 epx (Desktop Pointer & Touch)',
      primarySnippet: `// Windows React Native (RNW) Implementation
import React from 'react';
import { ${comp} } from '@spectra/react-native-windows';

export const Windows${comp}Example = () => {
  return (
    <${comp}
      variant="primary"
      size="md"
      onPress={() => console.log('${comp} clicked on Windows')}
      acceleratorKey="Enter"
      tooltip="${comp} (Press Enter)"
      highContrastSupport={true}
    >
      ${comp} Action
    </${comp}>
  );
};`,
      nativeSnippet: `<!-- C# / WinUI 3 XAML Implementation -->
<UserControl
  x:Class="Spectra.Windows.${comp}View"
  xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
  xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
  xmlns:spectra="using:Spectra.WinUI.Controls">

  <spectra:${comp}
    Content="${comp} Action"
    Variant="Primary"
    KeyboardAccelerator="Ctrl+S"
    Click="On${comp}Click"
    Style="{ThemeResource Spectra${comp}PrimaryStyle}" />
</UserControl>`,
    },

    macos: {
      platform: 'macos',
      status: 'supported',
      version: 'v0.1.0 (macOS 12+)',
      notes: 'macOS Vibrancy materials, SF Symbols integration, cursor hover states, and Command-key accelerators.',
      touchStandard: '28×28 pt (Precision Trackpad / Mouse)',
      primarySnippet: `// macOS React Native Implementation
import React from 'react';
import { ${comp} } from '@spectra/react-native-macos';

export const MacOS${comp}Example = () => {
  return (
    <${comp}
      variant="primary"
      size="md"
      onPress={() => console.log('${comp} activated on macOS')}
      keyboardShortcut={{ key: 's', modifiers: ['cmd'] }}
      enableHoverVisuals={true}
      tooltip="${comp} (⌘S)"
    >
      ${comp} Action
    </${comp}>
  );
};`,
      nativeSnippet: `// Swift / macOS AppKit / SwiftUI Implementation
import SwiftUI
import SpectraMacOSTokens

struct MacOS${comp}View: View {
  var body: some View {
    Spectra${comp}("${comp} Action", variant: .primary) {
      print("${comp} clicked in macOS")
    }
    .keyboardShortcut("s", modifiers: .command)
    .buttonStyle(SpectraMacButtonStyle())
    .help("${comp} Action (⌘S)")
  }
}`,
    },
  };
}
