import React from 'react';
import { IconProps } from '../types';

export const NetworkWiFiSlashIcon: React.FC<IconProps> = ({
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
    <path d="M15.9736 13.7495C14.8668 12.9649 13.491 12.5 12.0001 12.5C10.5092 12.5 9.13334 12.9649 8.02648 13.7495" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.0088 11.25C17.1409 9.69409 14.6872 8.75 11.9999 8.75C9.31255 8.75 6.85888 9.69409 4.99095 11.25" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 8.75C19.3907 6.42519 15.8717 5 12 5C8.12831 5 4.60934 6.42519 2 8.75" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<ellipse cx="12" cy="18" rx="1" ry="1" transform="rotate(-90 12 18)" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M3 3L21 21" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

NetworkWiFiSlashIcon.displayName = 'NetworkWiFiSlashIcon';
