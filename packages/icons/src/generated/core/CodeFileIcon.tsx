import React from 'react';
import { IconProps } from '../../types';

export const CodeFileIcon: React.FC<IconProps> = ({
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
    <path d="M17.29 2.29L21.7 6.7C21.89 6.89 22 7.15 22 7.41V21C22 21.55 21.55 22 21 22H3C2.45 22 2 21.55 2 21V3C2 2.45 2.45 2 3 2H16.59C16.85 2 17.11 2.11 17.29 2.29Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 15L19 12L16 9" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 15L5 12L8 9" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.1799 17L13.8199 7" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

CodeFileIcon.displayName = 'CodeFileIcon';
