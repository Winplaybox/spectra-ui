import React from 'react';
import { IconProps } from '../types';

export const Microphone2Icon: React.FC<IconProps> = ({
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
    <path d="M12 18V22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M7 22H17" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M19 10V11C19 14.87 15.87 18 12 18C8.13 18 5 14.87 5 11V10" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M8 6C8 3.79 9.79 2 12 2C14.21 2 16 3.79 16 6V11C16 13.21 14.21 15 12 15C9.79 15 8 13.21 8 11V6Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M15.85 4.91003C14.93 5.58003 13.55 6.00003 12 6.00003C10.45 6.00003 9.07002 5.58003 8.15002 4.91003" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 8C15.08 8.66 13.6 9 12 9" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 11C15.08 11.66 13.6 12 12 12" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

Microphone2Icon.displayName = 'Microphone2Icon';
