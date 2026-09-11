import React from 'react';
import { IconProps } from '../../types';

export const SharpDivideIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 11h14v2H5zm7.002-7a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4zm0 12a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4z"/>
  </svg>
);
SharpDivideIcon.displayName = 'SharpDivideIcon';
export const DivideSharpIcon = SharpDivideIcon;

export const SharpEqualsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 9.998H5v-2h14zm0 6H5v-2h14z"/>
  </svg>
);
SharpEqualsIcon.displayName = 'SharpEqualsIcon';
export const EqualsSharpIcon = SharpEqualsIcon;

export const SharpGreaterThanIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z" fillRule="evenodd"/>
  </svg>
);
SharpGreaterThanIcon.displayName = 'SharpGreaterThanIcon';
export const GreaterThanSharpIcon = SharpGreaterThanIcon;

export const SharpGreaterThanEqualIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.5 15.5l8.25-5.5L6.5 4.5l1-1.5L18 10L7.5 17z" fillRule="evenodd"/><path fill={color || 'currentColor'} fillRule="nonzero" d="M18 20.998H6v-2h12z"/>
  </svg>
);
SharpGreaterThanEqualIcon.displayName = 'SharpGreaterThanEqualIcon';
export const GreaterThanEqualSharpIcon = SharpGreaterThanEqualIcon;

export const SharpLessThanIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.5 17.5L9.25 12l8.25-5.5l-1-1.5L6 12l10.5 7z" fillRule="evenodd"/>
  </svg>
);
SharpLessThanIcon.displayName = 'SharpLessThanIcon';
export const LessThanSharpIcon = SharpLessThanIcon;

export const SharpLessThanEqualIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.5 15.5L9.25 10l8.25-5.5l-1-1.5L6 10l10.5 7z" fillRule="evenodd"/><path fill={color || 'currentColor'} fillRule="nonzero" d="M18 20.998H6v-2h12z"/>
  </svg>
);
SharpLessThanEqualIcon.displayName = 'SharpLessThanEqualIcon';
export const LessThanEqualSharpIcon = SharpLessThanEqualIcon;

export const SharpMinusIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 12.998H5v-2h14z"/>
  </svg>
);
SharpMinusIcon.displayName = 'SharpMinusIcon';
export const MinusSharpIcon = SharpMinusIcon;

export const SharpNotEqualIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 9.998H5v-2h14zm0 6H5v-2h14z"/><path fill={color || 'currentColor'} d="M14.08 4.605l1.84.79l-6 14l-1.84-.79z"/>
  </svg>
);
SharpNotEqualIcon.displayName = 'SharpNotEqualIcon';
export const NotEqualSharpIcon = SharpNotEqualIcon;

export const SharpPercentageIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.501 3.5l-15 15.001l1.996 1.996l15-15zM7.002 5a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4zm10 10a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4z"/>
  </svg>
);
SharpPercentageIcon.displayName = 'SharpPercentageIcon';
export const PercentageSharpIcon = SharpPercentageIcon;

export const SharpPlusIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/>
  </svg>
);
SharpPlusIcon.displayName = 'SharpPlusIcon';
export const PlusSharpIcon = SharpPlusIcon;

export const SharpPlusMinusIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 10.998h-6v6h-2v-6H5v-2h6v-6h2v6h6zm0 10H5v-2h14z"/>
  </svg>
);
SharpPlusMinusIcon.displayName = 'SharpPlusMinusIcon';
export const PlusMinusSharpIcon = SharpPlusMinusIcon;

export const SharpPlusMinusAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 7.998H8v4H6v-4H2v-2h4v-4h2v4h4zm10 10h-8v-2h8zM18.5 4L4 18.5L5.5 20L20 5.5z"/>
  </svg>
);
SharpPlusMinusAltIcon.displayName = 'SharpPlusMinusAltIcon';
export const PlusMinusAltSharpIcon = SharpPlusMinusAltIcon;
