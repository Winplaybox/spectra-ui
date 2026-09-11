import React from 'react';
import { IconProps } from '../../types';

export const Mouse2Icon: React.FC<IconProps> = ({
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
    <path d="M4 2C4 2 4.41873 5 9 3C13.5813 1 14 3.5 14 3.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M8 9C8 6.79086 9.79086 5 12 5V11H8V9Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path fillRule="evenodd" clipRule="evenodd" d="M16 5C18.2091 5 20 6.79086 20 9V11H16V5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path fillRule="evenodd" clipRule="evenodd" d="M8 11H20V16C20 19.3137 17.3137 22 14 22C10.6863 22 8 19.3137 8 16V11Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

Mouse2Icon.displayName = 'Mouse2Icon';
