import React from 'react';
import { IconProps } from '../types';

export const NetworkSignalAntenna2Icon: React.FC<IconProps> = ({
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
    <path d="M8 21L11.9928 7.56848L16 21" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 16H14.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
<path d="M5 21H19" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
<path d="M8 9.42459C8 9.42459 7 8.13648 7 6.7097C7 5.28292 8 3.85614 8 3.85614" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
<path d="M5 11.2807C5 11.2807 3 9.11724 3 6.74483C3 4.37241 5 2 5 2" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
<path d="M16 3.85614C16 3.85614 17 5.35219 17 6.70966C17 8.06712 16 9.42459 16 9.42459" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
<path d="M19 2C19 2 21 4.3783 21 6.67912C21 8.97993 19 11.2807 19 11.2807" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 7.56843C12.5523 7.56843 13 7.15292 13 6.64035C13 6.12779 12.5523 5.71228 12 5.71228C11.4477 5.71228 11 6.12779 11 6.64035C11 7.15292 11.4477 7.56843 12 7.56843Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
  </svg>
);

NetworkSignalAntenna2Icon.displayName = 'NetworkSignalAntenna2Icon';
