import React from 'react';
import { IconProps } from '../types';

export const ActionUnfavourite3Icon: React.FC<IconProps> = ({
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
    <path d="M16.9999 3C14.1196 2.99993 11.9999 6 11.9999 6C11.9999 6 10.0808 3 6.99994 3C4.0991 3 2.00004 5.00004 1.99994 7.99998C2.00004 10.9999 3.00004 13 5.99994 16C8.00004 18 11.9999 21 11.9999 21C11.9999 21 16 18 17.9999 16C21 13 22 11 22 8C22 5.00004 19.9008 3.00007 16.9999 3Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M2 2L22 22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ActionUnfavourite3Icon.displayName = 'ActionUnfavourite3Icon';
