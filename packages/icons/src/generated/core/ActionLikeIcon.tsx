import React from 'react';
import { IconProps } from '../../types';

export const ActionLikeIcon: React.FC<IconProps> = ({
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
    <path d="M18.5 15C19.33 15 20 15.67 20 16.5C20 17.33 19.33 18 18.5 18H16H18C18.83 18 19.5 18.67 19.5 19.5C19.5 20.33 18.83 21 18 21H17H9C5.69 21 3 18.3 3 14.98C3 12.28 4.77 9.98997 7.22 9.22997C8.45 8.83997 9.37 7.79997 9.77 6.55997L10.69 3.72997C10.85 3.07997 11.51 2.90997 12.17 3.02997C13.22 3.20997 14.11 4.55997 14.11 6.99997L14 8.99997H19.5C20.33 8.99997 21 9.66997 21 10.5C21 11.33 20.33 12 19.5 12H17H19C19.83 12 20.5 12.67 20.5 13.5C20.5 14.33 19.83 15 19 15H16.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ActionLikeIcon.displayName = 'ActionLikeIcon';
