import React from 'react';
import { IconProps } from '../types';

export const ChatSquareCheckIcon: React.FC<IconProps> = ({
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
    <path d="M2 3V16C2 16.55 2.45 17 3 17H6V22L12 17H21C21.55 17 22 16.55 22 16V3C22 2.45 21.55 2 21 2H3C2.45 2 2 2.45 2 3Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.25 9.5L10.75 12L15.75 7" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ChatSquareCheckIcon.displayName = 'ChatSquareCheckIcon';
