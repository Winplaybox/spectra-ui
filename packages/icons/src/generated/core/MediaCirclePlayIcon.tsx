import React from 'react';
import { IconProps } from '../../types';

export const MediaCirclePlayIcon: React.FC<IconProps> = ({
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
    <path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M9 7.99992V15.9999C9 16.3899 9.40974 16.6299 9.74953 16.4399L16.7452 12.4399C17.0849 12.2499 17.0849 11.7599 16.7452 11.5699L9.74953 7.56992C9.40974 7.37992 9 7.61992 9 7.99992Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

MediaCirclePlayIcon.displayName = 'MediaCirclePlayIcon';
