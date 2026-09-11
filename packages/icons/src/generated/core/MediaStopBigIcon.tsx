import React from 'react';
import { IconProps } from '../../types';

export const MediaStopBigIcon: React.FC<IconProps> = ({
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
    <path d="M17 20H7C5.34 20 4 18.66 4 17V7C4 5.34 5.34 4 7 4H17C18.66 4 20 5.34 20 7V17C20 18.66 18.66 20 17 20Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

MediaStopBigIcon.displayName = 'MediaStopBigIcon';
