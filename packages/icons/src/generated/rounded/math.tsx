import React from 'react';
import { IconProps } from '../../types';

export const RoundedDivideIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 11h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2zm6.002-7a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4zm0 12a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4z"/>
  </svg>
);
RoundedDivideIcon.displayName = 'RoundedDivideIcon';
export const DivideRoundedIcon = RoundedDivideIcon;

export const RoundedEqualsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 9.998H6a1 1 0 1 1 0-2h12a1 1 0 0 1 0 2zm0 6H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"/>
  </svg>
);
RoundedEqualsIcon.displayName = 'RoundedEqualsIcon';
export const EqualsRoundedIcon = RoundedEqualsIcon;

export const RoundedGreaterThanIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7.25 17l7.5-5l-7.5-5a.901.901 0 1 1 1-1.5l8.502 5.668a1 1 0 0 1 0 1.664L8.25 18.5a.901.901 0 1 1-1-1.5z" fillRule="evenodd"/>
  </svg>
);
RoundedGreaterThanIcon.displayName = 'RoundedGreaterThanIcon';
export const GreaterThanRoundedIcon = RoundedGreaterThanIcon;

export const RoundedGreaterThanEqualIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7.25 15l7.5-5l-7.5-5a.901.901 0 1 1 1-1.5l8.502 5.668a1 1 0 0 1 0 1.664L8.25 16.5a.901.901 0 1 1-1-1.5z" fillRule="evenodd"/><path fill={color || 'currentColor'} d="M17 20.998H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z" fillRule="nonzero"/>
  </svg>
);
RoundedGreaterThanEqualIcon.displayName = 'RoundedGreaterThanEqualIcon';
export const GreaterThanEqualRoundedIcon = RoundedGreaterThanEqualIcon;

export const RoundedLessThanIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.75 17l-7.5-5l7.5-5a.901.901 0 1 0-1-1.5l-8.502 5.668a1 1 0 0 0 0 1.664L15.75 18.5a.901.901 0 1 0 1-1.5z" fillRule="evenodd"/>
  </svg>
);
RoundedLessThanIcon.displayName = 'RoundedLessThanIcon';
export const LessThanRoundedIcon = RoundedLessThanIcon;

export const RoundedLessThanEqualIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.75 15l-7.5-5l7.5-5a.901.901 0 1 0-1-1.5L7.248 9.168a1 1 0 0 0 0 1.664L15.75 16.5a.901.901 0 1 0 1-1.5z" fillRule="evenodd"/><path fill={color || 'currentColor'} d="M17 20.998H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z" fillRule="nonzero"/>
  </svg>
);
RoundedLessThanEqualIcon.displayName = 'RoundedLessThanEqualIcon';
export const LessThanEqualRoundedIcon = RoundedLessThanEqualIcon;

export const RoundedMinusIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"/>
  </svg>
);
RoundedMinusIcon.displayName = 'RoundedMinusIcon';
export const MinusRoundedIcon = RoundedMinusIcon;

export const RoundedNotEqualIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 9.998H6a1 1 0 1 1 0-2h12a1 1 0 0 1 0 2zm0 6H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"/><path fill={color || 'currentColor'} d="M14.999 5H15c.507.219.742.806.525 1.314l-5.212 12.162A.999.999 0 0 1 9 19a1.002 1.002 0 0 1-.525-1.314l5.212-12.162A.999.999 0 0 1 15 5z"/>
  </svg>
);
RoundedNotEqualIcon.displayName = 'RoundedNotEqualIcon';
export const NotEqualRoundedIcon = RoundedNotEqualIcon;

export const RoundedPercentageIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.503 4.498L4.499 17.503a1.411 1.411 0 0 0 1.996 1.996L19.499 6.495a1.412 1.412 0 0 0-1.996-1.997zM7.002 5a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4zm10 10a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4z"/>
  </svg>
);
RoundedPercentageIcon.displayName = 'RoundedPercentageIcon';
export const PercentageRoundedIcon = RoundedPercentageIcon;

export const RoundedPlusIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"/>
  </svg>
);
RoundedPlusIcon.displayName = 'RoundedPlusIcon';
export const PlusRoundedIcon = RoundedPlusIcon;

export const RoundedPlusMinusIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 10.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2zm0 10H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"/>
  </svg>
);
RoundedPlusMinusIcon.displayName = 'RoundedPlusMinusIcon';
export const PlusMinusRoundedIcon = RoundedPlusMinusIcon;

export const RoundedPlusMinusAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 7.998H8v3a1 1 0 0 1-2 0v-3H3a1 1 0 1 1 0-2h3v-3a1 1 0 1 1 2 0v3h3a1 1 0 0 1 0 2zm10 10h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM17.793 4.707L4.707 17.793a1 1 0 0 0 0 1.414l.086.086a1 1 0 0 0 1.414 0L19.293 6.207a1 1 0 0 0 0-1.414l-.086-.086a1 1 0 0 0-1.414 0z"/>
  </svg>
);
RoundedPlusMinusAltIcon.displayName = 'RoundedPlusMinusAltIcon';
export const PlusMinusAltRoundedIcon = RoundedPlusMinusAltIcon;
