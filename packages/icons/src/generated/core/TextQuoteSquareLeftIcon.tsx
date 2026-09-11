import React from 'react';
import { IconProps } from '../../types';

export const TextQuoteSquareLeftIcon: React.FC<IconProps> = ({
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
    <path d="M5 14V10C5 8.34 6.34 7 8 7H10" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 12H9C9.55 12 10 12.45 10 13V16C10 16.55 9.55 17 9 17H6C5.45 17 5 16.55 5 16V13C5 12.45 5.45 12 6 12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 14V10C14 8.34 15.34 7 17 7H19" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 12H18C18.55 12 19 12.45 19 13V16C19 16.55 18.55 17 18 17H15C14.45 17 14 16.55 14 16V13C14 12.45 14.45 12 15 12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

TextQuoteSquareLeftIcon.displayName = 'TextQuoteSquareLeftIcon';
