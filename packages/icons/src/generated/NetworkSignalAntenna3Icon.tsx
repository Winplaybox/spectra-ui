import React from 'react';
import { IconProps } from '../types';

export const NetworkSignalAntenna3Icon: React.FC<IconProps> = ({
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
    <path d="M11.004 18.0358C11.004 18.0358 9 17.3519 9 16C9 14.6481 9.85898 14.2413 9.85898 14.2413" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M19 22C19 20.6745 16.9561 18 12 18C7.04395 18 5 20.6745 5 22H19Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M9.46819 14.0328C12.8174 15.9342 17.5197 14.7898 18.6532 12.6956C19.7866 10.6013 18.0674 7.20475 14.5822 5.31173C11.233 3.41036 7.62488 3.60682 6.49142 5.70107C5.35795 7.79531 6.11898 12.1314 9.46819 14.0328Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path fillRule="evenodd" clipRule="evenodd" d="M10.48 12.4142C13.1515 13.9308 17.4763 14.8942 18.7013 12.6428C19.6735 10.5318 18.1876 7.41991 14.7208 5.39099C11.254 3.36207 7.42517 3.66862 6.48909 5.68886C5.553 7.70909 7.13074 10.5128 10.48 12.4142Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M17.4 3.79999L13 8.99999" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M18 4C18.5523 4 19 3.55228 19 3C19 2.44772 18.5523 2 18 2C17.4477 2 17 2.44772 17 3C17 3.55228 17.4477 4 18 4Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

NetworkSignalAntenna3Icon.displayName = 'NetworkSignalAntenna3Icon';
