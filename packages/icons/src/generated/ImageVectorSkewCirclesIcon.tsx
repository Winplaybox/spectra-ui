import React from 'react';
import { IconProps } from '../types';

export const ImageVectorSkewCirclesIcon: React.FC<IconProps> = ({
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
    <path d="M21 18.9L3 20L4.1 4L19.9 7.4L21 18.9Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.09998 5C4.65226 5 5.09998 4.55228 5.09998 4C5.09998 3.44772 4.65226 3 4.09998 3C3.54769 3 3.09998 3.44772 3.09998 4C3.09998 4.55228 3.54769 5 4.09998 5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 21C3.55228 21 4 20.5523 4 20C4 19.4477 3.55228 19 3 19C2.44772 19 2 19.4477 2 20C2 20.5523 2.44772 21 3 21Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 19.9C21.5523 19.9 22 19.4523 22 18.9C22 18.3477 21.5523 17.9 21 17.9C20.4477 17.9 20 18.3477 20 18.9C20 19.4523 20.4477 19.9 21 19.9Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.9 8.40002C20.4523 8.40002 20.9 7.95231 20.9 7.40002C20.9 6.84774 20.4523 6.40002 19.9 6.40002C19.3477 6.40002 18.9 6.84774 18.9 7.40002C18.9 7.95231 19.3477 8.40002 19.9 8.40002Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ImageVectorSkewCirclesIcon.displayName = 'ImageVectorSkewCirclesIcon';
