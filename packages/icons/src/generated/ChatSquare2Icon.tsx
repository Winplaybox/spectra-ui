import React from 'react';
import { IconProps } from '../types';

export const ChatSquare2Icon: React.FC<IconProps> = ({
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
<path d="M8 8V12" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 10H10" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.56 7.55006C13.37 6.23006 14.88 5.69006 15.98 6.18006C16.82 6.56006 17.58 7.60006 17.35 8.64006C17.22 9.24006 16.81 9.62006 16.49 9.88006C15.59 10.6501 14.28 11.7301 12.55 12.9901H18" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ChatSquare2Icon.displayName = 'ChatSquare2Icon';
