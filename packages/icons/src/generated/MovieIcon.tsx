import React from 'react';
import { IconProps } from '../types';

export const MovieIcon: React.FC<IconProps> = ({
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
    <path d="M6 2V6" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
<path d="M10 2V6" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
<path d="M14 2V6" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
<path d="M18 2V6" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
<path d="M6 18V22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
<path d="M10 18V22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
<path d="M14 18V22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
<path d="M18 18V22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
<path d="M22 6H2V18H22V6Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M21 22H3C2.45 22 2 21.55 2 21V3C2 2.45 2.45 2 3 2H21C21.55 2 22 2.45 22 3V21C22 21.55 21.55 22 21 22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 12L10 9V15L15 12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

MovieIcon.displayName = 'MovieIcon';
