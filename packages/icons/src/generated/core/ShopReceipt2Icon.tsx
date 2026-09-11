import React from 'react';
import { IconProps } from '../../types';

export const ShopReceipt2Icon: React.FC<IconProps> = ({
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
    <path d="M21 22V2H3V22L5.25 20L7.5 22L9.75 20L12 22L14.25 20L16.5 22L18.75 20L21 22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 17V15.99" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 10.01V9" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 11.2701C16.83 10.6501 16.28 10.1701 15.58 10.0401C14.88 9.91006 14.15 10.1501 13.74 10.6401C13.69 10.7001 13.23 11.2601 13.45 11.8701C13.59 12.2501 13.92 12.4601 14.38 12.7401C14.88 13.0501 15.02 13.0001 15.78 13.3901C16.55 13.7901 16.68 13.9901 16.74 14.0901C16.96 14.5101 16.81 14.9301 16.78 15.0101C16.57 15.5501 15.99 15.7701 15.78 15.8601C15.69 15.9001 14.85 16.2001 14.02 15.8201C13.56 15.6101 13.32 15.2901 13.24 15.1901C13.11 15.0001 13.04 14.8301 13 14.7101" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 6H18" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
<path d="M6 9H11" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
<path d="M6 16H11" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
<path d="M6 12H10" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
  </svg>
);

ShopReceipt2Icon.displayName = 'ShopReceipt2Icon';
