import React from 'react';
import { IconProps } from '../../types';

export const ActionTouchIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M11.5 14C15.0899 14 18 11.3137 18 8C18 4.68629 15.0899 2 11.5 2C7.91015 2 5 4.68629 5 8C5 11.3137 7.91015 14 11.5 14Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path fillRule="evenodd" clipRule="evenodd" d="M11.5 11C13.2949 11 14.75 9.65685 14.75 8C14.75 6.34315 13.2949 5 11.5 5C9.70507 5 8.25 6.34315 8.25 8C8.25 9.65685 9.70507 11 11.5 11Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M11.4974 10V20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M14 14V20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M16.5 15V20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M19 16V20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M19 20H11V19.9937C11 19.9937 10.2817 19.7229 9.27447 19.2967C8.26722 18.8706 7 18.9999 7 18.9999C7 18.9999 7.70917 19.1389 8.79945 19.7036C9.8897 20.2682 11 22 11 22V21.9986H19V20Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
  </svg>
);

ActionTouchIcon.displayName = 'ActionTouchIcon';
