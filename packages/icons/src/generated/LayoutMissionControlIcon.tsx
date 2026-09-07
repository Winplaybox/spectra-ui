import React from 'react';
import { IconProps } from '../types';

export const LayoutMissionControlIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 1.5,
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect x="2" y="14" width="8" height="11" rx="1" transform="rotate(-90 2 14)" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<rect x="16" y="14" width="12" height="6" rx="1" transform="rotate(-90 16 14)" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<rect x="8" y="22" width="5" height="13" rx="1" transform="rotate(-90 8 22)" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

LayoutMissionControlIcon.displayName = 'LayoutMissionControlIcon';
