import React from 'react';
import { IconProps } from '../../types';

export const MenuHamburgerIcon: React.FC<IconProps> = ({
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
    <path d="M20 14H4C2.9 14 2 13.1 2 12C2 10.9 2.9 10 4 10H20C21.1 10 22 10.9 22 12C22 13.1 21.1 14 20 14Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.5 7H2.5C2.5 4.79 4.29 3 6.5 3H17.5C19.71 3 21.5 4.79 21.5 7Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.5 17H21.5C21.5 19.21 19.71 21 17.5 21H6.5C4.29 21 2.5 19.21 2.5 17Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

MenuHamburgerIcon.displayName = 'MenuHamburgerIcon';
