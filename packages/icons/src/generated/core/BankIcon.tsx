import React from 'react';
import { IconProps } from '../../types';

export const BankIcon: React.FC<IconProps> = ({
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
    <path d="M3 21L21 21V7L3 7V21Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 21H21V7H20V21Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 21H4L4 7H3L3 21Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 21H2V22H22V21Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 2L2 7H22L12 2Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 18V16.99" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 11.01V10" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 12.2698C13.83 11.6498 13.28 11.1698 12.58 11.0398C11.88 10.9098 11.15 11.1498 10.74 11.6398C10.69 11.6998 10.23 12.2598 10.45 12.8698C10.59 13.2498 10.92 13.4598 11.38 13.7398C11.88 14.0498 12.02 13.9998 12.78 14.3898C13.55 14.7898 13.68 14.9898 13.74 15.0898C13.96 15.5098 13.81 15.9298 13.78 16.0098C13.57 16.5498 12.99 16.7698 12.78 16.8598C12.69 16.8998 11.85 17.1998 11.02 16.8198C10.56 16.6098 10.32 16.2898 10.24 16.1898C10.11 15.9998 10.04 15.8298 10 15.7098" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

BankIcon.displayName = 'BankIcon';
