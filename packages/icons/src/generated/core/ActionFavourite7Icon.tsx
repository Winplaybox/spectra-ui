import React from 'react';
import { IconProps } from '../../types';

export const ActionFavourite7Icon: React.FC<IconProps> = ({
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
    <path d="M20.4 4.62C19.34 3.54 17.95 3 16.54 3C15.15 3 13.75 3.54 12.68 4.62L12 5.31L11.32 4.62C10.25 3.54 8.85 3 7.45 3C6.05 3 4.66 3.54 3.6 4.62C1.47 6.8 1.47 10.3 3.6 12.46L12.01 21L19.72 13.16L20.4 12.47C22.53 10.3 22.53 6.8 20.4 4.62Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ActionFavourite7Icon.displayName = 'ActionFavourite7Icon';
