import React from 'react';
import { IconProps } from '../../types';

export const ImageQuestionIcon: React.FC<IconProps> = ({
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
    <path d="M22 13V4C22 2.9 21.1 2 20 2H4C2.9 2 2 2.9 2 4V14V16C2 17.1 2.9 18 4 18H13" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 13L17 7L11 15L6 11L2 14V16C2 17.1 2.9 18 4 18H13" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 7C7.55228 7 8 6.55228 8 6C8 5.44772 7.55228 5 7 5C6.44772 5 6 5.44772 6 6C6 6.55228 6.44772 7 7 7Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 22H18.01" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 16.04C16.04 15.75 16.16 15.21 16.56 14.73C16.66 14.6 16.85 14.37 17.18 14.2C17.58 14 17.94 14 18.1 14C18.28 14 18.71 14.02 19.15 14.31C19.69 14.67 19.86 15.19 19.91 15.35C19.94 15.43 20.1 15.96 19.91 16.56C19.8 16.94 19.6 17.18 19.43 17.39C18.73 18.22 18.11 18.15 18 18.69C17.99 18.71 18 18.82 18 19" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ImageQuestionIcon.displayName = 'ImageQuestionIcon';
