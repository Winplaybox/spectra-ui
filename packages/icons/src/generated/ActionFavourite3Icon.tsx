import React from 'react';
import { IconProps } from '../types';

export const ActionFavourite3Icon: React.FC<IconProps> = ({
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
    <path d="M17 3C14.1196 2.99993 12 6 12 6C12 6 10.0808 3 7 3C4.09916 3 2.0001 5.00004 2 7.99998C2.0001 10.9999 3.0001 13 6 16C8.0001 18 12 21 12 21C12 21 16.0001 18 18 16C21.0001 13 22.0001 11 22.0001 8C22.0001 5.00004 19.9008 3.00007 17 3Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

ActionFavourite3Icon.displayName = 'ActionFavourite3Icon';
