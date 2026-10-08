import { Platform, PlatformDefinition } from '../types';
import { webPlatform } from './web';
import { androidPlatform } from './android';
import { iosPlatform } from './ios';
import { windowsPlatform } from './windows';
import { macosPlatform } from './macos';

export const platforms: Record<Platform, PlatformDefinition> = {
  web: webPlatform,
  android: androidPlatform,
  ios: iosPlatform,
  windows: windowsPlatform,
  macos: macosPlatform,
};

export function getPlatformDefinition(platform: Platform): PlatformDefinition {
  return platforms[platform];
}

export { webPlatform, androidPlatform, iosPlatform, windowsPlatform, macosPlatform };
