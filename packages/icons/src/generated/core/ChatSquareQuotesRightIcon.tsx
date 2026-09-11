import React from 'react';
import { IconProps } from '../../types';

export const ChatSquareQuotesRightIcon: React.FC<IconProps> = ({
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
    <path d="M2 3V16C2 16.55 2.45 17 3 17H6V22L12 17H21C21.55 17 22 16.55 22 16V3C22 2.45 21.55 2 21 2H3C2.45 2 2 2.45 2 3Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 8C18 10.99 16.39 13 14 13" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.03 10H15.96C14.88 10 14 9.12 14 8.03V7.97C14 6.88 14.88 6 15.97 6H16.04C17.12 6 18 6.88 18 7.97V8.04C18 9.12 17.12 10 16.03 10Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 8C10 10.99 8.39 13 6 13" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.03 10H7.97C6.88 10 6 9.12 6 8.03V7.97C6 6.88 6.88 6 7.97 6H8.04C9.12 6 10 6.88 10 7.97V8.04C10 9.12 9.12 10 8.03 10Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ChatSquareQuotesRightIcon.displayName = 'ChatSquareQuotesRightIcon';
