import React from 'react';
import { IconProps } from '../types';

export const PencilLargeIcon: React.FC<IconProps> = ({
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
    <path d="M14.5929 2L13.1787 3.41421L20.5861 10.8216L22.0004 9.40743L14.5929 2Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M3.48149 14.5928L2 22.0002L9.40743 20.5187L3.48149 14.5928Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.1784 3.41431L3.48163 13.1111C3.07253 13.5202 3.07253 14.1835 3.48163 14.5926L9.40758 20.5186C9.81668 20.9277 10.48 20.9277 10.8891 20.5186L20.5859 10.8217L13.1784 3.41431Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.1482 16.8149L16.0741 10.8889" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
<path d="M7.1853 13.852L13.1112 7.92603" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
  </svg>
);

PencilLargeIcon.displayName = 'PencilLargeIcon';
