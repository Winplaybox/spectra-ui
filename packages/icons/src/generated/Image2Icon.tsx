import React from 'react';
import { IconProps } from '../types';

export const Image2Icon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M15.0749 8.46002L11.5849 14.05C11.2649 14.56 10.5749 14.67 10.1149 14.3L6.91493 11.74C6.43493 11.35 5.72493 11.49 5.41493 12.03L2.33493 17.51C1.94493 18.18 2.43493 19 3.19493 19H20.8049C21.5649 19 22.0449 18.19 21.6849 17.52L16.8049 8.51002C16.4349 7.84002 15.4849 7.81002 15.0749 8.46002Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.98492 9C10.0849 9 10.9849 8.1 10.9849 7C10.9849 5.9 10.0849 5 8.98492 5C7.88492 5 6.98492 5.9 6.98492 7C6.98492 8.1 7.88492 9 8.98492 9Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

Image2Icon.displayName = 'Image2Icon';
