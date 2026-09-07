import React from 'react';
import { IconProps } from '../types';

export const FolderQuestionIcon: React.FC<IconProps> = ({
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
    <path d="M12 8H2V4H10L12 8Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 20H2V8H12H22V13" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 22H18.01" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 16.04C16.04 15.75 16.16 15.21 16.56 14.73C16.66 14.6 16.85 14.37 17.18 14.2C17.58 14 17.94 14 18.1 14C18.28 14 18.71 14.02 19.15 14.31C19.69 14.67 19.86 15.19 19.91 15.35C19.94 15.43 20.1 15.96 19.91 16.56C19.8 16.94 19.6 17.18 19.43 17.39C18.73 18.22 18.11 18.15 18 18.69C17.99 18.71 18 18.82 18 19" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

FolderQuestionIcon.displayName = 'FolderQuestionIcon';
