import React from 'react';
import { IconProps } from '../types';

export const VideoQuestionIcon: React.FC<IconProps> = ({
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
    <path d="M14 6H17C17.55 6 18 6.45 18 7V17C18 17.55 17.55 18 17 18H14" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 18H3C2.45 18 2 17.55 2 17V7C2 6.45 2.45 6 3 6H6" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 17V7L18 9V15L22 17Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.98999 17H10.01" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 9.04C8.04 8.75 8.16 8.22 8.55 7.73C8.66 7.6 8.85 7.37 9.18 7.2C9.58 7 9.94 7 10.09 7C10.27 7 10.7 7.01 11.14 7.31C11.68 7.66 11.85 8.19 11.9 8.35C11.93 8.45 12.08 8.96 11.9 9.56C11.79 9.92 11.6 10.15 11.35 10.45C10.66 11.3 10.03 11.49 10 12C10 12 10 12 10 12.5C10 12.66 10 12.83 10 13C10 13.33 10 13.66 10 14" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

VideoQuestionIcon.displayName = 'VideoQuestionIcon';
