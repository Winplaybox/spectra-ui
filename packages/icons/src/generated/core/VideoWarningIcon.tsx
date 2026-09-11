import React from 'react';
import { IconProps } from '../../types';

export const VideoWarningIcon: React.FC<IconProps> = ({
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
    <path d="M2 15C2 12.24 4.24 10 7 10C9.76 10 12 12.24 12 15C12 15.34 11.97 15.68 11.9 16H17C17.55 16 18 15.55 18 15V5C18 4.45 17.55 4 17 4H3C2.45 4 2 4.45 2 5V15Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 15V5L18 7V13L22 15Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 20C9.76142 20 12 17.7614 12 15C12 12.2386 9.76142 10 7 10C4.23858 10 2 12.2386 2 15C2 17.7614 4.23858 20 7 20Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 12V15" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M7 17H7.01" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

VideoWarningIcon.displayName = 'VideoWarningIcon';
