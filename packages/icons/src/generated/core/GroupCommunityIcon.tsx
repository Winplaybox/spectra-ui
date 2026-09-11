import React from 'react';
import { IconProps } from '../../types';

export const GroupCommunityIcon: React.FC<IconProps> = ({
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
    <path d="M14 4C14 4.66667 13.3333 6 12 6C10.6667 6 10 4.98157 10 4C10 2.66667 11.1076 2 12 2C12.8924 2 14 2.66667 14 4Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 10L14.6646 8.21146C14.4242 6.92919 13.3046 6 12 6C10.6954 6 9.57578 6.92919 9.33535 8.21146L9 10H15Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M21 12C21 12.6667 20.3333 14 19 14C17.6667 14 17 12.9816 17 12C17 10.6667 18.1076 10 19 10C19.8924 10 21 10.6667 21 12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 18L21.6646 16.2115C21.4242 14.9292 20.3046 14 19 14C17.6954 14 16.5758 14.9292 16.3354 16.2115L16 18H22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M7 12C7 12.6667 6.33333 14 5 14C3.66667 14 3 12.9816 3 12C3 10.6667 4.10756 10 5 10C5.89245 10 7 10.6667 7 12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 18L7.66465 16.2115C7.42422 14.9292 6.30461 14 5 14C3.69539 14 2.57578 14.9292 2.33535 16.2115L2 18H8Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M11 20H15M13 19L11 20L13 19ZM11 20L13 21L11 20Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.85022 5.81909L2.57361 8.1134M4.78549 7.7854L5.85022 5.81909L4.78549 7.7854ZM5.85022 5.81909L3.63834 6.14709L5.85022 5.81909Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.8502 7.1134L16.5736 4.81909M17.6383 6.78539L19.8502 7.1134L17.6383 6.78539ZM19.8502 7.1134L18.7855 5.14709L19.8502 7.1134Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

GroupCommunityIcon.displayName = 'GroupCommunityIcon';
