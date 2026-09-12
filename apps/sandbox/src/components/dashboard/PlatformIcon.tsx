import React from 'react';
import { Platform } from '../../data/platformData';
import { GlobeIcon, BookOpenIcon, AppleIcon, AndroidIcon, WindowsIcon, MonitorIcon } from '@spectra/icons';

interface PlatformIconProps {
  platform: Platform | 'headless' | 'all';
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const PlatformIcon: React.FC<PlatformIconProps> = ({
  platform,
  size = 16,
  color = 'currentColor',
  className,
  style,
}) => {
  switch (platform) {
    case 'web':
      return <BookOpenIcon size={size} color={color} className={className} style={style} />;
    case 'ios':
      return <AppleIcon size={size} color={color} className={className} style={style} />;
    case 'android':
      return <AndroidIcon size={size} color={color} className={className} style={style} />;
    case 'windows':
      return <WindowsIcon size={size} color={color} className={className} style={style} />;
    case 'macos':
      return <MonitorIcon size={size} color={color} className={className} style={style} />;
    default:
      return <GlobeIcon size={size} color={color} className={className} style={style} />;
  }
};
