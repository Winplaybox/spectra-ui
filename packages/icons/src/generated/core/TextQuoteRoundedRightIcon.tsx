import React from 'react';
import { IconProps } from '../../types';

export const TextQuoteRoundedRightIcon: React.FC<IconProps> = ({
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
    <path d="M14 16C14.61 16 15.21 15.89 15.78 15.67C17.74 14.9 19.03 12.72 19 10.6C19 10.38 18.98 10.17 18.94 9.94995" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 13C17.8807 13 19 11.8807 19 10.5C19 9.11929 17.8807 8 16.5 8C15.1193 8 14 9.11929 14 10.5C14 11.8807 15.1193 13 16.5 13Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 16C5.61 16 6.21 15.89 6.78 15.67C8.74 14.9 10.03 12.72 10 10.6C10 10.38 9.98 10.17 9.94 9.94995" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 13C8.88071 13 10 11.8807 10 10.5C10 9.11929 8.88071 8 7.5 8C6.11929 8 5 9.11929 5 10.5C5 11.8807 6.11929 13 7.5 13Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

TextQuoteRoundedRightIcon.displayName = 'TextQuoteRoundedRightIcon';
