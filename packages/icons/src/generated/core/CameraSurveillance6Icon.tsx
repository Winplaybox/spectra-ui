import React from 'react';
import { IconProps } from '../../types';

export const CameraSurveillance6Icon: React.FC<IconProps> = ({
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
    <path d="M14 14V16C14 17.1046 14.8954 18 16 18H20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 16V20H20V16H22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<rect x="12" y="13" width="4" height="1" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.00006 4L7.00006 5.5V10.5L3 12L3.00006 4Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 5C7 3.89543 7.89543 3 9 3H19C20.1046 3 21 3.89543 21 5.00001L21 11C21 12.1046 20.1045 13 19 13H9C7.89543 13 7 12.1046 7 11V5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

CameraSurveillance6Icon.displayName = 'CameraSurveillance6Icon';
