import React from 'react';
import { IconProps } from '../../types';

export const MediaPauseRoundIcon: React.FC<IconProps> = ({
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
    <path d="M16.5 20C15.67 20 15 19.33 15 18.5V5.5C15 4.67 15.67 4 16.5 4C17.33 4 18 4.67 18 5.5V18.5C18 19.33 17.33 20 16.5 20Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 20C6.67 20 6 19.33 6 18.5V5.5C6 4.67 6.67 4 7.5 4C8.33 4 9 4.67 9 5.5V18.5C9 19.33 8.33 20 7.5 20Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

MediaPauseRoundIcon.displayName = 'MediaPauseRoundIcon';
