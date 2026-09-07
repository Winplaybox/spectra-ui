import React from 'react';
import { IconProps } from '../types';

export const MenuTwoLinesIcon: React.FC<IconProps> = ({
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
    <path d="M4 15.5C4 15.22 4.22 15 4.5 15H19.5C19.78 15 20 15.22 20 15.5C20 15.78 19.78 16 19.5 16H4.5C4.22 16 4 15.78 4 15.5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 8.5C4 8.22 4.22 8 4.5 8H19.5C19.78 8 20 8.22 20 8.5C20 8.78 19.78 9 19.5 9H4.5C4.22 9 4 8.78 4 8.5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

MenuTwoLinesIcon.displayName = 'MenuTwoLinesIcon';
