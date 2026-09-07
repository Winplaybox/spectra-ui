import React from 'react';
import { IconProps } from '../types';

export const ClipboardPasteIcon: React.FC<IconProps> = ({
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
    <path d="M11 18V11C11 10.45 11.45 10 12 10H17V5C17 4.45 16.55 4 16 4H13V5C13 5.55 12.55 6 12 6H8C7.45 6 7 5.55 7 5V4H4C3.45 4 3 4.45 3 5V17C3 17.55 3.45 18 4 18H11Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6H8C7.45 6 7 5.55 7 5V3C7 2.45 7.45 2 8 2H12C12.55 2 13 2.45 13 3V5C13 5.55 12.55 6 12 6Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 10H20C20.55 10 21 10.45 21 11V21C21 21.55 20.55 22 20 22H12C11.45 22 11 21.55 11 21V11C11 10.45 11.45 10 12 10Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ClipboardPasteIcon.displayName = 'ClipboardPasteIcon';
