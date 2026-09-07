import React from 'react';
import { IconProps } from '../types';

export const MediaFilmClapboardIcon: React.FC<IconProps> = ({
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
    <path d="M6 11V14" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M10 11V14" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M14 11V14" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M18 11V14" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M2 11H22V21H2V11Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M2 14H22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M2 7.57143L22 3V6.5L2 11V7.57143Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

MediaFilmClapboardIcon.displayName = 'MediaFilmClapboardIcon';
