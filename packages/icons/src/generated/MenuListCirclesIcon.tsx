import React from 'react';
import { IconProps } from '../types';

export const MenuListCirclesIcon: React.FC<IconProps> = ({
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
    <circle cx="4" cy="4" r="2" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M10 4H22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<circle cx="4" cy="12" r="2" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<circle cx="4" cy="20" r="2" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M10 12H22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M10 20H22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
  </svg>
);

MenuListCirclesIcon.displayName = 'MenuListCirclesIcon';
