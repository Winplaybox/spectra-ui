import React from 'react';
import { IconProps } from '../../types';

export const MediaPlayCircleDashedIcon: React.FC<IconProps> = ({
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
    <path d="M21.8 10C21.36 7.84002 20.22 5.93002 18.63 4.52002" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.36995 4.52002C3.77995 5.93002 2.63995 7.84002 2.19995 10" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.82996 21.48C9.82996 21.82 10.89 22 12 22C13.11 22 14.17 21.82 15.17 21.48" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.8 14C21.36 16.16 20.22 18.07 18.63 19.48" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.36995 19.48C3.77995 18.07 2.63995 16.16 2.19995 14" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.82996 2.52C9.82996 2.18 10.89 2 12 2C13.11 2 14.17 2.18 15.17 2.52" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.99994 8V16C8.99994 16.39 9.40968 16.63 9.74947 16.44L16.7451 12.44C17.0849 12.25 17.0849 11.76 16.7451 11.57L9.74947 7.57C9.40968 7.38 8.99994 7.62 8.99994 8Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

MediaPlayCircleDashedIcon.displayName = 'MediaPlayCircleDashedIcon';
