import React from 'react';
import { IconProps } from '../types';

export const PencilTipLargeQuestionIcon: React.FC<IconProps> = ({
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
    <path d="M13 7H7L10 2L13 7Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 7H13H7ZM7 7L4 12H16L13 7" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 22V12H16V22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 10H19.01" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 4.04C17.04 3.75 17.16 3.21 17.56 2.73C17.66 2.6 17.85 2.37 18.18 2.2C18.58 2 18.94 2 19.1 2C19.28 2 19.71 2.02 20.15 2.31C20.69 2.67 20.86 3.19 20.91 3.35C20.94 3.43 21.1 3.96 20.91 4.56C20.8 4.94 20.6 5.18 20.43 5.39C19.73 6.22 19.11 6.15 19 6.69C18.99 6.71 19 6.82 19 7" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

PencilTipLargeQuestionIcon.displayName = 'PencilTipLargeQuestionIcon';
