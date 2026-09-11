import React from 'react';
import { IconProps } from '../../types';

export const ClearHistoryIcon: React.FC<IconProps> = ({
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
    <path d="M4.28996 7.29C6.40996 4.68 8.74996 3 12 3C13.45 3 14.83 3.35 16.04 3.96C18.98 5.44 21 8.48 21 12C21 16.97 16.97 21 12 21C8.47996 21 5.43996 18.98 3.95996 16.04" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 9H4.6H3V7.4V6L6 9Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M12 7V13" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 13H17" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 13.5C12.2761 13.5 12.5 13.2761 12.5 13C12.5 12.7239 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.7239 11.5 13C11.5 13.2761 11.7239 13.5 12 13.5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 2L22 20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ClearHistoryIcon.displayName = 'ClearHistoryIcon';
