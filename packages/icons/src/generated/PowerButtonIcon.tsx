import React from 'react';
import { IconProps } from '../types';

export const PowerButtonIcon: React.FC<IconProps> = ({
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
    <path d="M19 4.85999C20.85 6.67999 22 9.20999 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 9.20999 3.15 6.67999 5 4.85999" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12V2" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

PowerButtonIcon.displayName = 'PowerButtonIcon';
