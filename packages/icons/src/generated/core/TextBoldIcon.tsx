import React from 'react';
import { IconProps } from '../../types';

export const TextBoldIcon: React.FC<IconProps> = ({
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
    <path d="M14.5 2H2V11H14.5C16.9853 11 19 8.98528 19 6.5C19 4.01472 16.9853 2 14.5 2Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 11H2V22H16.5C19.5376 22 22 19.5376 22 16.5C22 13.4624 19.5376 11 16.5 11Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

TextBoldIcon.displayName = 'TextBoldIcon';
