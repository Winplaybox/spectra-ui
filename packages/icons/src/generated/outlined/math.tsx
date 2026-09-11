import React from 'react';
import { IconProps } from '../../types';

export const OutlinedDivideIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 11h18v2H3zm9.003-8a3 3 0 1 1-.006 6a3 3 0 0 1 .006-6zM12 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm.003 10a3 3 0 1 1-.006 6a3 3 0 0 1 .006-6zM12 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2z"/>
  </svg>
);
OutlinedDivideIcon.displayName = 'OutlinedDivideIcon';
export const DivideOutlinedIcon = OutlinedDivideIcon;

export const OutlinedEqualsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 9.998H5v-2h14zm0 6H5v-2h14z"/>
  </svg>
);
OutlinedEqualsIcon.displayName = 'OutlinedEqualsIcon';
export const EqualsOutlinedIcon = OutlinedEqualsIcon;

export const OutlinedGreaterThanIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z" fillRule="evenodd"/>
  </svg>
);
OutlinedGreaterThanIcon.displayName = 'OutlinedGreaterThanIcon';
export const GreaterThanOutlinedIcon = OutlinedGreaterThanIcon;

export const OutlinedGreaterThanEqualIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.5 15.5l8.25-5.5L6.5 4.5l1-1.5L18 10L7.5 17z" fillRule="evenodd"/><path fill={color || 'currentColor'} fillRule="nonzero" d="M18 20.998H6v-2h12z"/>
  </svg>
);
OutlinedGreaterThanEqualIcon.displayName = 'OutlinedGreaterThanEqualIcon';
export const GreaterThanEqualOutlinedIcon = OutlinedGreaterThanEqualIcon;

export const OutlinedLessThanIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.5 17.5L9.25 12l8.25-5.5l-1-1.5L6 12l10.5 7z" fillRule="evenodd"/>
  </svg>
);
OutlinedLessThanIcon.displayName = 'OutlinedLessThanIcon';
export const LessThanOutlinedIcon = OutlinedLessThanIcon;

export const OutlinedLessThanEqualIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.5 15.5L9.25 10l8.25-5.5l-1-1.5L6 10l10.5 7z" fillRule="evenodd"/><path fill={color || 'currentColor'} fillRule="nonzero" d="M18 20.998H6v-2h12z"/>
  </svg>
);
OutlinedLessThanEqualIcon.displayName = 'OutlinedLessThanEqualIcon';
export const LessThanEqualOutlinedIcon = OutlinedLessThanEqualIcon;

export const OutlinedMinusIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 12.998H5v-2h14z"/>
  </svg>
);
OutlinedMinusIcon.displayName = 'OutlinedMinusIcon';
export const MinusOutlinedIcon = OutlinedMinusIcon;

export const OutlinedNotEqualIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 9.998H5v-2h14zm0 6H5v-2h14z"/><path fill={color || 'currentColor'} d="M14.08 4.605l1.84.79l-6 14l-1.84-.79z"/>
  </svg>
);
OutlinedNotEqualIcon.displayName = 'OutlinedNotEqualIcon';
export const NotEqualOutlinedIcon = OutlinedNotEqualIcon;

export const OutlinedPercentageIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.501 3.5l-15 15.001l1.996 1.996l15-15zM17.003 14a3 3 0 1 1-.006 6a3 3 0 0 1 .006-6zM17 16a1 1 0 1 0 0 2a1 1 0 0 0 0-2zM7.003 4a3 3 0 1 1-.006 6a3 3 0 0 1 .006-6zM7 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2z"/>
  </svg>
);
OutlinedPercentageIcon.displayName = 'OutlinedPercentageIcon';
export const PercentageOutlinedIcon = OutlinedPercentageIcon;

export const OutlinedPlusIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/>
  </svg>
);
OutlinedPlusIcon.displayName = 'OutlinedPlusIcon';
export const PlusOutlinedIcon = OutlinedPlusIcon;

export const OutlinedPlusMinusIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 10.998h-6v6h-2v-6H5v-2h6v-6h2v6h6zm0 10H5v-2h14z"/>
  </svg>
);
OutlinedPlusMinusIcon.displayName = 'OutlinedPlusMinusIcon';
export const PlusMinusOutlinedIcon = OutlinedPlusMinusIcon;

export const OutlinedPlusMinusAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 7.998H8v4H6v-4H2v-2h4v-4h2v4h4zm10 10h-8v-2h8zM18.5 4L4 18.5L5.5 20L20 5.5z"/>
  </svg>
);
OutlinedPlusMinusAltIcon.displayName = 'OutlinedPlusMinusAltIcon';
export const PlusMinusAltOutlinedIcon = OutlinedPlusMinusAltIcon;
