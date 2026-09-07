import React from 'react';
import { IconProps } from '../types';

export const ActionTouch2Icon: React.FC<IconProps> = ({
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
    <path d="M9 4C9 4 8 5.52948 8 7.01965C8 8.50983 9 10 9 10" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M13 7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M15 4C15 4 16 5.55603 16 7.03735C16 8.51868 15 10 15 10" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M6 2C6 2 4 4.55841 4 7.03894C4 9.51947 6 12 6 12" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M18 2C18 2 20 4.60474 20 7.06982C20 9.53491 18 12 18 12" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M11.9974 11V20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M14.5 14V20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M17 15V20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M19.5 16V20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M19.5 20H11.5V19.9937C11.5 19.9937 10.7817 19.7229 9.77447 19.2967C8.76722 18.8706 7.5 18.9999 7.5 18.9999C7.5 18.9999 8.20917 19.1389 9.29945 19.7036C10.3897 20.2682 11.5 22 11.5 22V21.9986H19.5V20Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
  </svg>
);

ActionTouch2Icon.displayName = 'ActionTouch2Icon';
