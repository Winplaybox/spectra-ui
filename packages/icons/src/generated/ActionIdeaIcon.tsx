import React from 'react';
import { IconProps } from '../types';

export const ActionIdeaIcon: React.FC<IconProps> = ({
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
    <path d="M11 22L9.80004 19.57C9.80004 19.57 5.69004 19.89 5.61004 19.47C5.35004 18.13 4.87004 15.46 4.74004 14.53L2.26004 13.3C2.06004 13.3 1.93004 13.12 2.04004 12.98L5.77004 8.16C5.71004 3.72 8.66004 2 11 2C14.32 2 21.67 2.08 21.99 9.74C22.05 11.1 21.66 12.39 21.66 12.39" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.55 14.69C14.98 13.96 18.55 10.28 16.4 7.45999C14.66 5.15999 11.34 5.15999 9.58998 7.45999C7.43998 10.29 11.02 13.96 12.44 14.69C12.8 14.87 13.2 14.87 13.55 14.69Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 10.78V14.82" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.4 14.8199H14.6" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.4 17.46H14.6" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 10.78C13.2761 10.78 13.5 10.5562 13.5 10.28C13.5 10.0039 13.2761 9.78003 13 9.78003C12.7239 9.78003 12.5 10.0039 12.5 10.28C12.5 10.5562 12.7239 10.78 13 10.78Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10"/>
  </svg>
);

ActionIdeaIcon.displayName = 'ActionIdeaIcon';
