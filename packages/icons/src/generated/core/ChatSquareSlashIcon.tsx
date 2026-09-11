import React from 'react';
import { IconProps } from '../../types';

export const ChatSquareSlashIcon: React.FC<IconProps> = ({
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
    <path d="M3 5V17C3 17.55 3.45 18 4 18H7V22L13 18H20C20.55 18 21 17.55 21 17V5C21 4.45 20.55 4 20 4H4C3.45 4 3 4.45 3 5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 2L22 22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ChatSquareSlashIcon.displayName = 'ChatSquareSlashIcon';
