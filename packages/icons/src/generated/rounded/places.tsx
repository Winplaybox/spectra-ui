import React from 'react';
import { IconProps } from '../../types';

export const RoundedAcUnitIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 11h-3.17l2.54-2.54a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0L15 11h-2V9l3.95-3.95c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0L13 6.17V3c0-.55-.45-1-1-1s-1 .45-1 1v3.17L8.46 3.63a.996.996 0 0 0-1.41 0c-.39.39-.39 1.03 0 1.42L11 9v2H9L5.05 7.05c-.39-.39-1.03-.39-1.42 0a.996.996 0 0 0 0 1.41L6.17 11H3c-.55 0-1 .45-1 1s.45 1 1 1h3.17l-2.54 2.54a.996.996 0 0 0 0 1.41c.39.39 1.03.39 1.42 0L9 13h2v2l-3.95 3.95c-.39.39-.39 1.03 0 1.42c.39.39 1.02.39 1.41 0L11 17.83V21c0 .55.45 1 1 1s1-.45 1-1v-3.17l2.54 2.54c.39.39 1.02.39 1.41 0c.39-.39.39-1.03 0-1.42L13 15v-2h2l3.95 3.95c.39.39 1.03.39 1.42 0a.996.996 0 0 0 0-1.41L17.83 13H21c.55 0 1-.45 1-1s-.45-1-1-1z"/>
  </svg>
);
RoundedAcUnitIcon.displayName = 'RoundedAcUnitIcon';
export const AcUnitRoundedIcon = RoundedAcUnitIcon;

export const RoundedAirportShuttleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22.41 10.41l-4.83-4.83c-.37-.37-.88-.58-1.41-.58H3a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3c1.1 0 2-.9 2-2v-2.17c0-.53-.21-1.04-.59-1.42zM3 10V8c0-.55.45-1 1-1h3v4H4c-.55 0-1-.45-1-1zm3 7.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5zM13 11H9V7h4v4zm5 6.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5zM15 11V7h1l4 4h-5z"/>
  </svg>
);
RoundedAirportShuttleIcon.displayName = 'RoundedAirportShuttleIcon';
export const AirportShuttleRoundedIcon = RoundedAirportShuttleIcon;

export const RoundedAllInclusiveIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20.22 6.86c-2-.6-4.06-.04-5.39 1.29L12 10.66L10.48 12h.01L7.8 14.39c-.81.81-1.95 1.15-3.12.92a3.354 3.354 0 0 1-2.57-2.49a3.39 3.39 0 0 1 3.29-4.2c.91 0 1.76.35 2.44 1.03l.47.41c.38.34.95.34 1.33 0c.45-.4.45-1.1 0-1.5l-.42-.36A5.37 5.37 0 0 0 5.4 6.62C2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5l.01.01L13.52 12h-.01l2.69-2.39c.81-.81 1.95-1.15 3.12-.92c1.25.25 2.28 1.25 2.57 2.49a3.39 3.39 0 0 1-3.29 4.2c-.9 0-1.76-.35-2.44-1.03l-.48-.42a.995.995 0 0 0-1.33 0c-.45.4-.45 1.1 0 1.5l.42.37a5.386 5.386 0 0 0 3.82 1.57c3.27 0 5.86-2.9 5.33-6.25c-.3-1.99-1.77-3.69-3.7-4.26z"/>
  </svg>
);
RoundedAllInclusiveIcon.displayName = 'RoundedAllInclusiveIcon';
export const AllInclusiveRoundedIcon = RoundedAllInclusiveIcon;

export const RoundedApartmentIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 11V5c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h5c.55 0 1-.45 1-1v-3h2v3c0 .55.45 1 1 1h5c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2h-2zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
  </svg>
);
RoundedApartmentIcon.displayName = 'RoundedApartmentIcon';
export const ApartmentRoundedIcon = RoundedApartmentIcon;

export const RoundedBabyChangingStationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 9c0 .55-.45 1-1 1h-1.58c-.28 0-.55-.06-.8-.17l-2.3-1.01L7 12.75V21c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-8.67c0-.22.04-.44.11-.65l1.48-4.32A1.992 1.992 0 0 1 7.3 6.18l4.15 1.83L13 8c.55 0 1 .45 1 1zM8 1c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm2 18h10c.55 0 1-.45 1-1s-.45-1-1-1H10c-.55 0-1 .45-1 1s.45 1 1 1zm9.5-3c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5zM13 12c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v1h-2v-1z"/>
  </svg>
);
RoundedBabyChangingStationIcon.displayName = 'RoundedBabyChangingStationIcon';
export const BabyChangingStationRoundedIcon = RoundedBabyChangingStationIcon;

export const RoundedBackpackIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 8v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.86 1.28-3.41 3-3.86V3.5C7 2.67 7.67 2 8.5 2s1.5.67 1.5 1.5V4h4v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.64c1.72.45 3 2 3 3.86zM6 13c0 .55.45 1 1 1h9v1c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1z"/>
  </svg>
);
RoundedBackpackIcon.displayName = 'RoundedBackpackIcon';
export const BackpackRoundedIcon = RoundedBackpackIcon;

export const RoundedBalconyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 14.27V10c0-4.42-3.58-8-8-8s-8 3.58-8 8v4.27c-.6.34-1 .99-1 1.73v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-.74-.4-1.39-1-1.73zM7 20H5v-4h2v4zm4 0H9v-4h2v4zm0-6H6v-4c0-2.97 2.16-5.44 5-5.92V14zm2-9.92A6 6 0 0 1 18 10v4h-5V4.08zM15 20h-2v-4h2v4zm4 0h-2v-4h2v4zM8 11c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1zm8 0c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1z"/>
  </svg>
);
RoundedBalconyIcon.displayName = 'RoundedBalconyIcon';
export const BalconyRoundedIcon = RoundedBalconyIcon;

export const RoundedBathtubIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="7" cy="7" r="2"/><path fill={color || 'currentColor'} d="M21 13h-1V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08c-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08c0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 0 1 1.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.251 2.251 0 0 0 5 12.25V13H3c-.55 0-1 .45-1 1v5c0 1.1.9 2 2 2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1c1.1 0 2-.9 2-2v-5c0-.55-.45-1-1-1z"/>
  </svg>
);
RoundedBathtubIcon.displayName = 'RoundedBathtubIcon';
export const BathtubRoundedIcon = RoundedBathtubIcon;

export const RoundedBeachAccessIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13.13 14.56l1.43-1.43l5.73 5.73c.39.39.39 1.03 0 1.43c-.39.39-1.03.39-1.43 0l-5.73-5.73zm4.29-5.73l1.27-1.27c.89-.89.77-2.43-.31-3.08a10.1 10.1 0 0 0-12.4 1.47c3.93-1.3 8.31-.25 11.44 2.88zM5.95 5.98c-3.36 3.37-3.85 8.51-1.48 12.4c.66 1.08 2.19 1.21 3.08.31l1.27-1.27C5.7 14.29 4.65 9.91 5.95 5.98zm.02-.02l-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3z"/>
  </svg>
);
RoundedBeachAccessIcon.displayName = 'RoundedBeachAccessIcon';
export const BeachAccessRoundedIcon = RoundedBeachAccessIcon;

export const RoundedBentoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 11V5h4c1.1 0 2 .9 2 2v4h-6zm4 8c1.1 0 2-.9 2-2v-4h-6v6h4zM14 5v14H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h10zm-4.5 7c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5z"/>
  </svg>
);
RoundedBentoIcon.displayName = 'RoundedBentoIcon';
export const BentoRoundedIcon = RoundedBentoIcon;

export const RoundedBungalowIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 16c.55 0 1 .45 1 1v4h3c.55 0 1-.45 1-1v-5.21l.57.92a1.003 1.003 0 0 0 1.7-1.06L12.85 4.36a1 1 0 0 0-1.7 0L4.73 14.65c-.29.47-.15 1.09.32 1.38c.47.29 1.08.15 1.38-.32L7 14.8V20c0 .55.45 1 1 1h3v-4c0-.55.45-1 1-1zm1-3c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1z"/>
  </svg>
);
RoundedBungalowIcon.displayName = 'RoundedBungalowIcon';
export const BungalowRoundedIcon = RoundedBungalowIcon;

export const RoundedBusinessCenterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 16h-2c-.55 0-1-.45-1-1H3.01v4c0 1.1.9 2 2 2H19c1.1 0 2-.9 2-2v-4h-7c0 .55-.45 1-1 1zm7-9h-4c0-2.21-1.79-4-4-4S8 4.79 8 7H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-1c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 7c0-1.1.9-2 2-2s2 .9 2 2H9.99H10z"/>
  </svg>
);
RoundedBusinessCenterIcon.displayName = 'RoundedBusinessCenterIcon';
export const BusinessCenterRoundedIcon = RoundedBusinessCenterIcon;

export const RoundedCabinIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4.37 3.55C4.89 2.62 5.87 2 7 2c.38 0 .72-.22.89-.53c.15-.31.5-.47.84-.47c.74 0 1.26.8.9 1.45C9.11 3.38 8.13 4 7 4c-.38 0-.72.22-.89.53c-.15.31-.5.47-.84.47c-.74 0-1.26-.8-.9-1.45zm18.02 8.64c-.34.44-.96.52-1.4.19l-.99-.76V20c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-8.38l-.99.76a.992.992 0 0 1-1.4-.19c-.33-.44-.25-1.07.19-1.4L4 9.11V7c0-.55.45-1 1-1s1 .45 1 1v.58l5.39-4.12c.36-.27.86-.27 1.21 0l9.6 7.33c.44.34.53.97.19 1.4zM10.06 7h3.89L12 5.52L10.06 7zM6 10.1v.9h12v-.9L16.56 9H7.44L6 10.1zM6 13v2h12v-2H6zm12 6v-2H6v2h12z"/>
  </svg>
);
RoundedCabinIcon.displayName = 'RoundedCabinIcon';
export const CabinRoundedIcon = RoundedCabinIcon;

export const RoundedCarpenterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.73 14.23L7.71 2.21a.996.996 0 0 0-1.41 0L3.7 4.8a1 1 0 0 0-.11 1.28l7.65 10.98c-.78.78-.78 2.05 0 2.83l1.41 1.41c.78.78 2.05.78 2.83 0l4.24-4.24c.79-.78.79-2.05.01-2.83zm-5.66 5.65l-1.41-1.41l4.24-4.24l1.41 1.41l-4.24 4.24z"/>
  </svg>
);
RoundedCarpenterIcon.displayName = 'RoundedCarpenterIcon';
export const CarpenterRoundedIcon = RoundedCarpenterIcon;

export const RoundedCasinoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6S9 6.67 9 7.5S8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z"/>
  </svg>
);
RoundedCasinoIcon.displayName = 'RoundedCasinoIcon';
export const CasinoRoundedIcon = RoundedCasinoIcon;

export const RoundedChaletIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10 15c-.55 0-1 .45-1 1v4H6c-.55 0-1-.45-1-1v-3.67l-.38.38a.996.996 0 1 1-1.41-1.41L9.3 8.21a.996.996 0 0 1 1.41 0l6.09 6.09a.996.996 0 1 1-1.41 1.41l-.39-.38V19c0 .55-.45 1-1 1h-3v-4c0-.55-.45-1-1-1zm7.5-7.5v.89l-1.08 1.08c-.18.18-.21.48-.05.69c.19.23.53.24.74.04l.39-.39v.69c0 .28.22.5.5.5s.5-.22.5-.5v-.69l.39.39c.21.21.55.19.74-.04c.17-.2.14-.5-.05-.69L18.5 8.39V7.5h.89l1.08 1.08c.18.18.48.21.69.05c.23-.19.24-.53.04-.74l-.39-.39h.69c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-.69l.39-.39c.21-.21.19-.55-.04-.74c-.2-.17-.5-.14-.69.05L19.39 6.5h-.89v-.89l1.08-1.08c.18-.18.21-.48.05-.69a.506.506 0 0 0-.74-.04l-.39.39V3.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v.69l-.39-.39a.498.498 0 0 0-.74.04c-.17.2-.14.5.05.69l1.08 1.08v.89h-.89l-1.08-1.08a.531.531 0 0 0-.69-.05c-.23.19-.24.53-.04.74l.39.39h-.69c-.28 0-.5.22-.5.5s.22.5.5.5h.69l-.39.39c-.21.21-.19.55.04.74c.2.17.5.14.69-.05l1.08-1.08h.89z"/>
  </svg>
);
RoundedChaletIcon.displayName = 'RoundedChaletIcon';
export const ChaletRoundedIcon = RoundedChaletIcon;

export const RoundedChargingStationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 17H7V6h10v12zm-4.5-7V9.12c0-.53-.71-.7-.95-.22l-1.69 3.38c-.16.33.08.72.45.72h1.19v1.88c0 .53.71.7.95.22l1.69-3.38a.502.502 0 0 0-.45-.72H12.5z"/>
  </svg>
);
RoundedChargingStationIcon.displayName = 'RoundedChargingStationIcon';
export const ChargingStationRoundedIcon = RoundedChargingStationIcon;

export const RoundedCheckroomIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.6 18.2L13 11.75v-.91a3.496 3.496 0 0 0-.18-6.75c-1.76-.4-3.37.53-4.02 1.98c-.3.67.18 1.43.91 1.43c.39 0 .75-.22.9-.57A1.5 1.5 0 0 1 12 6c.83 0 1.5.67 1.5 1.5c0 .84-.69 1.52-1.53 1.5c-.54-.01-.97.45-.97.99v1.76L2.4 18.2c-.77.58-.36 1.8.6 1.8h18c.96 0 1.37-1.22.6-1.8zM6 18l6-4.5l6 4.5H6z"/>
  </svg>
);
RoundedCheckroomIcon.displayName = 'RoundedCheckroomIcon';
export const CheckroomRoundedIcon = RoundedCheckroomIcon;

export const RoundedChildCareIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="14.5" cy="10.5" r="1.25"/><circle cx="9.5" cy="10.5" r="1.25"/><path fill={color || 'currentColor'} d="M16.1 14H7.9c-.19 0-.32.2-.23.37C8.5 15.94 10.13 17 12 17s3.5-1.06 4.33-2.63a.262.262 0 0 0-.23-.37zm6.84-2.66a4.008 4.008 0 0 0-2.81-3.17a9.114 9.114 0 0 0-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91a3.994 3.994 0 0 0-2.81 3.17c-.04.21-.06.43-.06.66c0 .23.02.45.06.66a4.008 4.008 0 0 0 2.81 3.17a8.977 8.977 0 0 0 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89a3.998 3.998 0 0 0 2.8-3.17c.04-.21.06-.43.06-.66c0-.23-.02-.45-.06-.66zM19 14c-.1 0-.19-.02-.29-.03c-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86c-.1.01-.19.03-.29.03c-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03c.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86c.1-.01.19-.03.29-.03c1.1 0 2 .9 2 2s-.9 2-2 2z"/>
  </svg>
);
RoundedChildCareIcon.displayName = 'RoundedChildCareIcon';
export const ChildCareRoundedIcon = RoundedChildCareIcon;

export const RoundedChildFriendlyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 3.08V10h8a8 8 0 0 0-6.86-7.92c-.6-.09-1.14.39-1.14 1zm6.32 12.81A7.948 7.948 0 0 0 21 11H6.44l-.68-1.43a.993.993 0 0 0-.9-.57H3c-.55 0-1 .45-1 1s.45 1 1 1h1.22s1.89 4.07 2.12 4.42a3.505 3.505 0 0 0-1.74 3.94c.3 1.26 1.34 2.27 2.6 2.55c2.1.46 3.98-.96 4.25-2.91h2.08a3.498 3.498 0 0 0 4.22 2.92a3.493 3.493 0 0 0 2.63-2.53c.35-1.39-.14-2.68-1.06-3.5zM8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20zm9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20z"/>
  </svg>
);
RoundedChildFriendlyIcon.displayName = 'RoundedChildFriendlyIcon';
export const ChildFriendlyRoundedIcon = RoundedChildFriendlyIcon;

export const RoundedCorporateFareIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 7V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-8zm-2 12H4v-2h6v2zm0-4H4v-2h6v2zm0-4H4V9h6v2zm0-4H4V5h6v2zm10 12h-8V9h8v10zm-2-8h-4v2h4v-2zm0 4h-4v2h4v-2z"/>
  </svg>
);
RoundedCorporateFareIcon.displayName = 'RoundedCorporateFareIcon';
export const CorporateFareRoundedIcon = RoundedCorporateFareIcon;

export const RoundedCottageIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22.39 12.19a.992.992 0 0 0-.19-1.4l-9.6-7.33c-.36-.27-.86-.27-1.21 0L6 7.58V7c0-.55-.45-1-1-1s-1 .45-1 1v2.11l-2.21 1.68c-.44.33-.52.96-.19 1.4c.34.44.96.52 1.4.19l1-.76V20c0 .55.45 1 1 1h6v-5c0-.55.45-1 1-1s1 .45 1 1v5h6c.55 0 1-.45 1-1v-8.38l.99.76c.44.34 1.07.25 1.4-.19zM5.27 5c-.74 0-1.26-.8-.9-1.45C4.89 2.62 5.87 2 7 2c.38 0 .72-.22.89-.53c.15-.31.5-.47.84-.47c.74 0 1.26.8.9 1.45C9.11 3.38 8.13 4 7 4c-.38 0-.72.22-.89.53c-.15.31-.5.47-.84.47z"/>
  </svg>
);
RoundedCottageIcon.displayName = 'RoundedCottageIcon';
export const CottageRoundedIcon = RoundedCottageIcon;

export const RoundedCountertopsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 10V7.17c0-1.62-1.22-3.08-2.84-3.17c-1.21-.06-2.27.59-2.8 1.57c-.35.65.17 1.43.91 1.43h.01c.34 0 .68-.16.84-.46c.16-.32.5-.54.88-.54c.55 0 1 .45 1 1v3H8c1.1 0 2-.9 2-2V5c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v3c0 1.1.9 2 2 2H3c-.55 0-1 .45-1 1s.45 1 1 1h1v7c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-7h1c.55 0 1-.45 1-1s-.45-1-1-1h-3zm-5 8h-2v-6h2v6z"/>
  </svg>
);
RoundedCountertopsIcon.displayName = 'RoundedCountertopsIcon';
export const CountertopsRoundedIcon = RoundedCountertopsIcon;

export const RoundedCribIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.32 18.32a.971.971 0 0 0-1.31-.08c-.32.25-.65.48-1 .69V16h2c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2h-6V6c0-1.1-.9-2-2-2H8C5.79 4 4 5.79 4 8v6c0 1.1.9 2 2 2h2v2.93c-.35-.2-.69-.43-1-.69c-.39-.32-.96-.27-1.31.08c-.42.42-.39 1.12.08 1.5A9.948 9.948 0 0 0 12 22c2.36 0 4.53-.82 6.24-2.18c.47-.38.5-1.08.08-1.5zM14 19.75c-.64.16-1.31.25-2 .25s-1.36-.09-2-.25V16h4v3.75z"/>
  </svg>
);
RoundedCribIcon.displayName = 'RoundedCribIcon';
export const CribRoundedIcon = RoundedCribIcon;

export const RoundedDeskIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 7v10c0 .55.45 1 1 1s1-.45 1-1V8h10v9c0 .55.45 1 1 1s1-.45 1-1v-1h4v1c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1zm18 1v2h-4V8h4zm-4 6v-2h4v2h-4z"/>
  </svg>
);
RoundedDeskIcon.displayName = 'RoundedDeskIcon';
export const DeskRoundedIcon = RoundedDeskIcon;

export const RoundedDoNotStepIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2.1 3.51a.996.996 0 0 0 0 1.41l7.19 7.19c.18.2.18.5-.01.7a.485.485 0 0 1-.7 0L6.87 11.1c-.11.4-.26.78-.45 1.12l1.4 1.4c.2.2.2.51 0 .71a.485.485 0 0 1-.7 0l-1.27-1.27c-.24.29-.5.56-.77.8l1.28 1.28c.2.2.2.51 0 .71c-.1.1-.23.15-.36.15s-.26-.05-.35-.15l-1.38-1.38c-.71.47-1.43.81-2.02 1.04A1.99 1.99 0 0 0 1 17.37V18c0 1.1.9 2 2 2h6.67c.53 0 1.04-.21 1.41-.59l2.74-2.74l5.23 5.23a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0zm16.41 12.17l-1.41-1.41l4.48-4.48c.78.78.78 2.05 0 2.83l-3.07 3.06zm2.37-6.6l-4.48 4.48l-7.1-7.09l3.09-3.07a2 2 0 0 1 2.82 0l5.67 5.68z"/>
  </svg>
);
RoundedDoNotStepIcon.displayName = 'RoundedDoNotStepIcon';
export const DoNotStepRoundedIcon = RoundedDoNotStepIcon;

export const RoundedDoNotTouchIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 10.17l-2.5-2.5V2.25a1.25 1.25 0 0 1 2.5 0v7.92zm7-4.85c0-.65-.47-1.25-1.12-1.32c-.75-.08-1.38.51-1.38 1.24v5.25c0 .28-.22.5-.5.5s-.5-.22-.5-.5V3.31c0-.65-.47-1.25-1.12-1.32c-.75-.06-1.38.53-1.38 1.26v7.92l6 6V5.32zM9.5 4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18L9.5 6.67V4.25zM17 22c.62 0 1.18-.19 1.65-.52l-.02-.02l.44.44a.996.996 0 1 0 1.41-1.41L3.51 3.51A.996.996 0 1 0 2.1 4.92l4.92 4.92L7 9.83v4.3l-2.6-1.48c-.17-.09-.34-.14-.54-.14c-.26 0-.5.09-.7.26L2 13.88l6.8 7.18c.57.6 1.35.94 2.18.94H17z"/>
  </svg>
);
RoundedDoNotTouchIcon.displayName = 'RoundedDoNotTouchIcon';
export const DoNotTouchRoundedIcon = RoundedDoNotTouchIcon;

export const RoundedDryIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M1.94 11.79c-.6.57-.94 1.35-.94 2.18V20c0 1.66 1.34 3 3 3h13.68c.65 0 1.25-.47 1.32-1.12c.08-.75-.51-1.38-1.24-1.38H12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7.18c.65 0 1.25-.47 1.32-1.12c.08-.75-.51-1.38-1.24-1.38H12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h8.18c.65 0 1.25-.47 1.32-1.12c.08-.75-.51-1.38-1.24-1.38H12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6.18c.65 0 1.25-.47 1.32-1.12c.08-.75-.51-1.38-1.24-1.38h-9.9l1.49-2.61a1.065 1.065 0 0 0-.12-1.23l-.42-.45c-.38-.39-1.01-.41-1.41-.03l-6.46 6.11zm15.05-3.72c0 .52-.42.93-.93.93c-.52 0-.93-.42-.93-.93c.03-.67-.22-1.33-.71-1.86l-.07-.06c-.9-.89-1.38-2.03-1.34-3.22a.92.92 0 0 1 .92-.93c.51 0 .93.42.93.93c-.03.67.22 1.33.71 1.86l.07.07c.91.88 1.39 2.02 1.35 3.21zm4.01 0c0 .51-.42.93-.94.93s-.93-.42-.93-.93c.03-.67-.22-1.33-.71-1.86l-.07-.06c-.9-.89-1.38-2.03-1.34-3.22c0-.51.42-.93.93-.93s.93.42.93.93c-.03.67.22 1.33.71 1.86l.07.07c.9.88 1.38 2.02 1.35 3.21z"/>
  </svg>
);
RoundedDryIcon.displayName = 'RoundedDryIcon';
export const DryRoundedIcon = RoundedDryIcon;

export const RoundedElevatorIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.5 6a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5zm2.5 7c0 .55-.45 1-1 1v3c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1v-3c-.55 0-1-.45-1-1v-1.5c0-1.1.9-2 2-2h1c1.1 0 2 .9 2 2V13zm6.52.76l-1.6 2.56c-.2.31-.65.31-.85 0l-1.6-2.56c-.2-.33.04-.76.43-.76h3.2c.39 0 .63.43.42.76zM17.1 11h-3.2c-.39 0-.63-.43-.42-.77l1.6-2.56c.2-.31.65-.31.85 0l1.6 2.56c.2.34-.04.77-.43.77z"/>
  </svg>
);
RoundedElevatorIcon.displayName = 'RoundedElevatorIcon';
export const ElevatorRoundedIcon = RoundedElevatorIcon;

export const RoundedEscalatorIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 6h-1.7l-4.71 8.49c-.18.31-.52.51-.88.51H7c-.83 0-1.5-.67-1.5-1.5S6.17 15 7 15h1.7l4.71-8.49c.18-.31.52-.51.88-.51H17c.83 0 1.5.67 1.5 1.5S17.83 9 17 9z"/>
  </svg>
);
RoundedEscalatorIcon.displayName = 'RoundedEscalatorIcon';
export const EscalatorRoundedIcon = RoundedEscalatorIcon;

export const RoundedEscalatorWarningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.5 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2zm9 7.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5zm3 2.5h-2.84c-.58.01-1.14.32-1.45.86l-.92 1.32L9.72 8a2.02 2.02 0 0 0-1.71-1H5c-1.1 0-2 .9-2 2v5c0 .55.45 1 1 1h.5v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-9.39l2.24 3.89c.18.31.51.5.87.5h1.1c.33 0 .63-.16.82-.43l.47-.67V21c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-4c.55 0 1-.45 1-1v-2.5c0-.82-.67-1.5-1.5-1.5z"/>
  </svg>
);
RoundedEscalatorWarningIcon.displayName = 'RoundedEscalatorWarningIcon';
export const EscalatorWarningRoundedIcon = RoundedEscalatorWarningIcon;

export const RoundedFamilyRestroomIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 4c0-1.11.89-2 2-2s2 .89 2 2s-.89 2-2 2s-2-.89-2-2zm4 17v-5h1.11c.68 0 1.16-.67.95-1.32l-2.1-6.31A2.01 2.01 0 0 0 18.06 7h-.12a2 2 0 0 0-1.9 1.37l-.86 2.58c1.08.6 1.82 1.73 1.82 3.05v8h2c.55 0 1-.45 1-1zm-7.5-9.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2zm2 15v-6H8c.55 0 1-.45 1-1V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v5c0 .55.45 1 1 1h.5v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1zm2.5-7v3c0 .55.45 1 1 1v3c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-3c.55 0 1-.45 1-1v-3c0-.82-.68-1.5-1.5-1.5h-2c-.82 0-1.5.68-1.5 1.5"/>
  </svg>
);
RoundedFamilyRestroomIcon.displayName = 'RoundedFamilyRestroomIcon';
export const FamilyRestroomRoundedIcon = RoundedFamilyRestroomIcon;

export const RoundedFenceIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 11c0-.55-.45-1-1-1h-1V7l-2.29-2.29a.996.996 0 0 0-1.41 0L14 6l-1.29-1.29a.996.996 0 0 0-1.41 0L10 6L8.71 4.71a.996.996 0 0 0-1.41 0L5 7v3H4c-.55 0-1 .45-1 1s.45 1 1 1h1v2H4c-.55 0-1 .45-1 1s.45 1 1 1h1v3c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v-2h1c.55 0 1-.45 1-1zm-5-4.17l1 1V10h-2V7.83l.41-.41l.59-.59zm-4 0l.59.59l.41.41V10h-2V7.83l.41-.41l.59-.59zM11 14v-2h2v2h-2zm2 2v2h-2v-2h2zM7 7.83l1-1l.59.59l.41.41V10H7V7.83zM7 12h2v2H7v-2zm0 4h2v2H7v-2zm10 2h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
  </svg>
);
RoundedFenceIcon.displayName = 'RoundedFenceIcon';
export const FenceRoundedIcon = RoundedFenceIcon;

export const RoundedFireExtinguisherIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 19h10v1c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-1zm0-1h10v-5H7v5zM17 4.23v3.54c0 .63-.58 1.11-1.21.98l-1.94-.41c0 .02 0 .01-.01.03A5.07 5.07 0 0 1 16.9 12H7.1c.34-1.66 1.52-3.02 3.07-3.64c-.33-.26-.6-.58-.8-.95L5.49 6.6A.61.61 0 0 1 5 6c0-.29.2-.54.49-.6l3.88-.81C9.87 3.65 10.86 3 12 3c.7 0 1.34.25 1.85.66l1.94-.41c.63-.13 1.21.35 1.21.98zM13 6c-.03-.59-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1z"/>
  </svg>
);
RoundedFireExtinguisherIcon.displayName = 'RoundedFireExtinguisherIcon';
export const FireExtinguisherRoundedIcon = RoundedFireExtinguisherIcon;

export const RoundedFitnessCenterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20.57 14.86l.72-.72a.996.996 0 0 0 0-1.41l-.02-.02a.996.996 0 0 0-1.41 0L17 15.57L8.43 7l2.86-2.86a.996.996 0 0 0 0-1.41l-.02-.02a.996.996 0 0 0-1.41 0l-.72.72l-.72-.72c-.39-.39-1.03-.39-1.42 0L5.57 4.14l-.72-.72a1.02 1.02 0 0 0-1.43 0a1.02 1.02 0 0 0 0 1.43l.72.72L2.71 7a.996.996 0 0 0 0 1.41l.72.72l-.72.73a.996.996 0 0 0 0 1.41l.02.02c.39.39 1.02.39 1.41 0L7 8.43L15.57 17l-2.86 2.86a.996.996 0 0 0 0 1.41l.02.02c.39.39 1.02.39 1.41 0l.72-.72l.72.72c.39.39 1.02.39 1.41 0l1.43-1.43l.72.72c.39.39 1.04.39 1.43 0c.39-.39.39-1.04 0-1.43l-.72-.72L21.29 17a.996.996 0 0 0 0-1.41l-.72-.73z"/>
  </svg>
);
RoundedFitnessCenterIcon.displayName = 'RoundedFitnessCenterIcon';
export const FitnessCenterRoundedIcon = RoundedFitnessCenterIcon;

export const RoundedFoodBankIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10.8 3.9l-6 4.5c-.5.38-.8.97-.8 1.6v9c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-9c0-.63-.3-1.22-.8-1.6l-6-4.5a2.01 2.01 0 0 0-2.4 0zm1.7 8.6c0 .83-.67 1.5-1.5 1.5v3.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V14c-.83 0-1.5-.67-1.5-1.5V10c0-.28.22-.5.5-.5s.5.22.5.5v2.5h.5V10c0-.28.22-.5.5-.5s.5.22.5.5v2.5h.5V10c0-.28.22-.5.5-.5s.5.22.5.5v2.5zm2 5.5c-.28 0-.5-.22-.5-.5v-3h-.5c-.28 0-.5-.22-.5-.5v-2.5c0-.88.57-1.63 1.36-1.89c.31-.11.64.14.64.48v7.41c0 .28-.22.5-.5.5z"/>
  </svg>
);
RoundedFoodBankIcon.displayName = 'RoundedFoodBankIcon';
export const FoodBankRoundedIcon = RoundedFoodBankIcon;

export const RoundedFoundationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 12h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v3H4c-.55 0-1 .45-1 1s.45 1 1 1h1v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v-3zM7 15v-4.81l4-3.6V15H7zm6 0V6.59l4 3.6V15h-4z"/>
  </svg>
);
RoundedFoundationIcon.displayName = 'RoundedFoundationIcon';
export const FoundationRoundedIcon = RoundedFoundationIcon;

export const RoundedFreeBreakfastIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 3H6c-1.1 0-2 .9-2 2v8c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2a2 2 0 0 0 2-2V5c0-1.1-.9-2-2-2zm0 5h-2V5h2v3zM5 19h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1z"/>
  </svg>
);
RoundedFreeBreakfastIcon.displayName = 'RoundedFreeBreakfastIcon';
export const FreeBreakfastRoundedIcon = RoundedFreeBreakfastIcon;

export const RoundedGiteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.41 9.41l-2.83-2.83c-.37-.37-.88-.58-1.41-.58H9V5c0-.55-.45-1-1-1s-1 .45-1 1v1h-.17c-.53 0-1.04.21-1.42.59L2.59 9.41c-.38.38-.59.89-.59 1.42V17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6.17c0-.53-.21-1.04-.59-1.42zM14 17H4v-5h10v5zm6 0h-4v-6.17l2-2l2 2V17z"/>
  </svg>
);
RoundedGiteIcon.displayName = 'RoundedGiteIcon';
export const GiteRoundedIcon = RoundedGiteIcon;

export const RoundedGolfCourseIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="19.5" cy="19.5" r="1.5"/><path fill={color || 'currentColor'} d="M11 18.03V8.98l4.22-2.15c.73-.37.73-1.43-.01-1.79l-4.76-2.33C9.78 2.38 9 2.86 9 3.6V19c0 .55-.45 1-1 1s-1-.45-1-1v-.73c-1.79.35-3 .99-3 1.73c0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97z"/>
  </svg>
);
RoundedGolfCourseIcon.displayName = 'RoundedGolfCourseIcon';
export const GolfCourseRoundedIcon = RoundedGolfCourseIcon;

export const RoundedGrassIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.64 11.02a10.02 10.02 0 0 1 2.56-3.83c.38-.36.04-1-.46-.85c-3.32.98-5.75 4.05-5.74 7.69c.95-1.28 2.2-2.31 3.64-3.01zm-4.22-2.17a8.556 8.556 0 0 0-2.96-3.87c-.42-.3-.96.19-.72.65C8.54 7.15 9 8.88 9 10.71c0 .21-.03.41-.04.61c.43.24.83.52 1.22.82a9.91 9.91 0 0 1 1.24-3.29zM12 20H3c-.55 0-1-.45-1-1s.45-1 1-1h4.75a8.027 8.027 0 0 0-4-5.06a.486.486 0 0 1-.26-.44c0-.27.22-.49.49-.5H4c4.42 0 8 3.58 8 8zm8.26-7.06a7.995 7.995 0 0 0-4 5.06H21c.55 0 1 .45 1 1s-.45 1-1 1h-7c0-.68-.07-1.35-.2-2c-.15-.72-.38-1.42-.67-2.07A7.97 7.97 0 0 1 20 12h.02a.5.5 0 0 1 .49.5c.01.19-.1.35-.25.44z"/>
  </svg>
);
RoundedGrassIcon.displayName = 'RoundedGrassIcon';
export const GrassRoundedIcon = RoundedGrassIcon;

export const RoundedHolidayVillageIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 20c.55 0 1-.45 1-1V8.76c0-.27-.11-.52-.29-.71l-3.76-3.76c-.19-.18-.44-.29-.71-.29c-.89 0-1.34 1.08-.71 1.71l3.32 3.32c.1.09.15.22.15.35V19c0 .55.45 1 1 1zm4 0c.55 0 1-.45 1-1V7.11c0-.26-.11-.52-.29-.71l-2.1-2.11c-.19-.18-.45-.29-.71-.29c-.9 0-1.34 1.08-.71 1.71l1.67 1.67a.5.5 0 0 1 .14.35V19c0 .55.45 1 1 1zM8 15c.55 0 1 .45 1 1v4h4c.55 0 1-.45 1-1v-8.59c0-.27-.11-.52-.29-.71l-5-5a.996.996 0 0 0-1.41 0l-5 5c-.19.19-.3.45-.3.71V19c0 .55.45 1 1 1h4v-4c0-.55.45-1 1-1zm0-2c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedHolidayVillageIcon.displayName = 'RoundedHolidayVillageIcon';
export const HolidayVillageRoundedIcon = RoundedHolidayVillageIcon;

export const RoundedHotTubIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="7" cy="6" r="2"/><path fill={color || 'currentColor'} d="M21 12h-9.85c-.31-.22-.59-.46-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5c-.29-.14-.62-.23-.96-.23h-.03C6.01 9 5 10.01 5 11.25V12H3c-.55 0-1 .45-1 1v7c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-7c0-.55-.45-1-1-1zM7 19c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4zm4 0c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4zm4 0c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4zm4 0c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4zm-3.94-9c.5 0 .93-.39.94-.89c.04-1.4-.58-2.48-1.35-3.25c-.65-.72-.8-1.27-.77-1.91c.02-.52-.41-.95-.94-.95c-.5 0-.93.4-.94.9c-.03 1.29.5 2.43 1.35 3.25c.61.59.78 1.27.78 1.89c-.01.52.4.96.93.96zm4 0c.5 0 .93-.39.94-.89c.04-1.4-.58-2.48-1.35-3.25c-.65-.72-.8-1.27-.77-1.91c.02-.52-.41-.95-.94-.95c-.5 0-.93.4-.94.9c-.03 1.29.5 2.43 1.35 3.25c.61.59.78 1.27.78 1.89c-.01.52.4.96.93.96z"/>
  </svg>
);
RoundedHotTubIcon.displayName = 'RoundedHotTubIcon';
export const HotTubRoundedIcon = RoundedHotTubIcon;

export const RoundedHouseIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 9.3V5c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1.6l-3.33-3c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L19 9.3zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z"/>
  </svg>
);
RoundedHouseIcon.displayName = 'RoundedHouseIcon';
export const HouseRoundedIcon = RoundedHouseIcon;

export const RoundedHouseSidingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 12h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1s1-.45 1-1v-1h10v1c0 .55.45 1 1 1s1-.45 1-1v-7zM7.21 10h9.58l.21.19V12H7v-1.81l.21-.19zm7.36-2H9.43L12 5.69L14.57 8zM7 16v-2h10v2H7z"/>
  </svg>
);
RoundedHouseSidingIcon.displayName = 'RoundedHouseSidingIcon';
export const HouseSidingRoundedIcon = RoundedHouseSidingIcon;

export const RoundedHouseboatIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 17.83c0-.42-.27-.8-.67-.94c-.71-.27-1.12-.89-2.66-.89c-1.91 0-2.14 1-3.33 1c-1.24 0-1.39-1-3.34-1s-2.1 1-3.34 1c-1.19 0-1.42-1-3.33-1c-1.54 0-1.95.62-2.66.88c-.4.15-.67.52-.67.95c0 .7.69 1.19 1.35.95c.8-.29 1.18-.78 2-.78c1.19 0 1.42 1 3.33 1c1.95 0 2.08-1 3.32-1s1.37 1 3.32 1c1.91 0 2.14-1 3.33-1c.83 0 1.21.49 2 .78c.66.24 1.35-.26 1.35-.95zm-3.09-8.02a.996.996 0 0 0-.22-1.4l-6.1-4.47a.99.99 0 0 0-1.18 0l-6.1 4.47c-.45.33-.54.95-.22 1.4c.33.45.95.54 1.4.22L7 9.65V13H5.74c-.27 0-.52-.11-.71-.29l-.66-.66a.996.996 0 1 0-1.41 1.41l.66.66c.56.56 1.33.88 2.12.88h12.51c.8 0 1.56-.32 2.12-.88l.66-.66a.996.996 0 1 0-1.41-1.41l-.66.66c-.18.18-.44.29-.7.29H17V9.65l.51.37c.45.33 1.07.23 1.4-.21zM13 13h-2v-2h2v2z"/>
  </svg>
);
RoundedHouseboatIcon.displayName = 'RoundedHouseboatIcon';
export const HouseboatRoundedIcon = RoundedHouseboatIcon;

export const RoundedIronIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8.27 10c.34 0 .68-.16.84-.47c.17-.31.51-.53.89-.53h4c.55 0 1 .45 1 1v1H6c-2.21 0-4 1.79-4 4v2c0 .55.45 1 1 1h13c.55 0 1-.45 1-1v-1c1.66 0 3-1.34 3-3V9c0-.55.45-1 1-1s1-.45 1-1s-.45-1-1-1c-1.66 0-3 1.34-3 3v4c0 .55-.45 1-1 1v-4c0-1.66-1.34-3-3-3h-4c-1.13 0-2.11.62-2.63 1.55c-.36.65.16 1.45.9 1.45z"/>
  </svg>
);
RoundedIronIcon.displayName = 'RoundedIronIcon';
export const IronRoundedIcon = RoundedIronIcon;

export const RoundedKitchenIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 2.01L6 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM17 20H7c-.55 0-1-.45-1-1v-7.02c0-.55.45-1 1-1h10c.55 0 1 .45 1 1V19c0 .55-.45 1-1 1zm0-11H7c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1zM9 5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1zm0 7c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.55.45-1 1-1z"/>
  </svg>
);
RoundedKitchenIcon.displayName = 'RoundedKitchenIcon';
export const KitchenRoundedIcon = RoundedKitchenIcon;

export const RoundedMeetingRoomIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19h-1V5c0-.55-.45-1-1-1h-4c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v15H4c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1V6h3v14c0 .55.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1zm-9-6c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedMeetingRoomIcon.displayName = 'RoundedMeetingRoomIcon';
export const MeetingRoomRoundedIcon = RoundedMeetingRoomIcon;

export const RoundedMicrowaveIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.15 9.97c-.46-.46-.38-1.24.18-1.57c.4-.22.88-.4 1.42-.4c.8 0 1.39.39 1.81.67c.31.21.51.33.69.33c.13 0 .26-.05.39-.12a1 1 0 0 1 1.2.16c.46.46.38 1.24-.18 1.56c-.39.23-.87.4-1.41.4c-.79 0-1.37-.38-1.79-.66c-.33-.22-.52-.34-.71-.34a.84.84 0 0 0-.39.12c-.4.23-.89.16-1.21-.15zM7.75 15c.19 0 .38.12.71.34c.42.28 1 .66 1.79.66c.54 0 1.02-.17 1.41-.4c.56-.32.64-1.1.18-1.56a1 1 0 0 0-1.2-.16a.84.84 0 0 1-.39.12c-.18 0-.38-.12-.69-.33c-.42-.28-1.01-.67-1.81-.67c-.54 0-1.02.18-1.42.4c-.56.33-.64 1.11-.18 1.56a1 1 0 0 0 1.2.16c.14-.07.27-.12.4-.12zM22 6v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-8 0H4v12h10V6zm5 10c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1zm0-4c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1zm0-5h-2v2h2V7z"/>
  </svg>
);
RoundedMicrowaveIcon.displayName = 'RoundedMicrowaveIcon';
export const MicrowaveRoundedIcon = RoundedMicrowaveIcon;

export const RoundedNightShelterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10.8 3.9l-6 4.5c-.5.38-.8.97-.8 1.6v9c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-9c0-.63-.3-1.22-.8-1.6l-6-4.5a2.01 2.01 0 0 0-2.4 0zm-1.05 8.6a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5zM16.5 18c-.28 0-.5-.22-.5-.5v-1H8v1c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-6c0-.28.22-.5.5-.5s.5.22.5.5v4h3.5v-3c0-.28.22-.5.5-.5h3c1.1 0 2 .9 2 2v3.5c0 .28-.22.5-.5.5z"/>
  </svg>
);
RoundedNightShelterIcon.displayName = 'RoundedNightShelterIcon';
export const NightShelterRoundedIcon = RoundedNightShelterIcon;

export const RoundedNoBackpackIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.98 4.15c.01 0 .01-.01.02-.01V3.5C7 2.67 7.67 2 8.5 2s1.5.67 1.5 1.5V4h4v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.64c1.72.45 3 2 3 3.86v9.17l-2.03-2.03c.01-.05.03-.09.03-.14v-2c0-.55-.45-1-1-1h-2.17L6.98 4.15zM20.49 21.9a.996.996 0 0 1-1.41 0l-.14-.14c-.29.15-.6.24-.94.24H6c-1.1 0-2-.9-2-2V8c0-.36.06-.69.15-1.02L2.1 4.93a.996.996 0 1 1 1.41-1.41l16.97 16.97c.4.39.4 1.02.01 1.41zM11.17 14l-2-2H7c-.55 0-1 .45-1 1s.45 1 1 1h4.17z"/>
  </svg>
);
RoundedNoBackpackIcon.displayName = 'RoundedNoBackpackIcon';
export const NoBackpackRoundedIcon = RoundedNoBackpackIcon;

export const RoundedNoCellIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8.83 6l-3.7-3.7C5.42 1.55 6.15 1 7 1l10 .01c1.1 0 2 .89 2 1.99v13.17l-2-2V6H8.83zm11.66 15.9a.996.996 0 0 1-1.41 0l-.2-.2c-.3.75-1.03 1.3-1.88 1.3H7c-1.1 0-2-.9-2-2V7.83l-2.9-2.9a.996.996 0 1 1 1.41-1.41l16.97 16.97c.4.39.4 1.02.01 1.41zM15.17 18L7 9.83V18h8.17z"/>
  </svg>
);
RoundedNoCellIcon.displayName = 'RoundedNoCellIcon';
export const NoCellRoundedIcon = RoundedNoCellIcon;

export const RoundedNoDrinksIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20.49 20.49L3.51 3.51A.996.996 0 1 0 2.1 4.92l7.54 7.54L11 14v5H7c-.55 0-1 .45-1 1s.45 1 1 1h10c.32 0 .59-.16.78-.4l1.3 1.3a.996.996 0 1 0 1.41-1.41zM13 19v-3.17L16.17 19H13zM7.83 5l-2-2h13.72c.8 0 1.45.65 1.45 1.45c0 .35-.13.7-.37.96l-5.83 6.56L9.83 7h6.74l1.78-2H7.83z"/>
  </svg>
);
RoundedNoDrinksIcon.displayName = 'RoundedNoDrinksIcon';
export const NoDrinksRoundedIcon = RoundedNoDrinksIcon;

export const RoundedNoFlashIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3.16 3.16a.996.996 0 1 0-1.41 1.41l4.6 4.6l-.21.23H3.6c-.88 0-1.6.72-1.6 1.6v9.4c0 .88.72 1.6 1.6 1.6h12.8c.75 0 1.38-.52 1.55-1.22l1.47 1.47a.996.996 0 1 0 1.41-1.41L3.16 3.16zM10 20c-2.21 0-4-1.79-4-4c0-1.95 1.4-3.57 3.25-3.92l1.57 1.57c-.26-.09-.53-.15-.82-.15a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 2.5-2.5c0-.29-.06-.56-.15-.82l1.57 1.57A3.993 3.993 0 0 1 10 20zm8-4.83L10.83 8h.87c.56 0 1.1.24 1.48.65l.69.75h2.54c.88 0 1.6.72 1.6 1.6v4.17zm2.4-9.57h.75c.38 0 .62.41.44.74L19 11V7h-.5c-.28 0-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5h2.73c.36 0 .6.37.46.7L20.4 5.6z"/>
  </svg>
);
RoundedNoFlashIcon.displayName = 'RoundedNoFlashIcon';
export const NoFlashRoundedIcon = RoundedNoFlashIcon;

export const RoundedNoFoodIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 22c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1h13c.55 0 1 .45 1 1zm6.89-15.9c.06-.59-.4-1.1-.99-1.1H18V2c0-.55-.45-1-1-1s-1 .45-1 1v3h-3.9c-.59 0-1.05.51-1 1.1l.24 2.41L18 15.17l3.62 3.62L22.89 6.1zm-1.7 16.51a.996.996 0 0 0 0-1.41L12 12L9.01 9.01l-6.2-6.2a.996.996 0 0 0-1.41 0C1 3.2 1 3.83 1.39 4.22l4.99 4.99c-2.56.54-4.76 2.08-5.28 4.63c-.11.61.39 1.16 1 1.16h10.07l2 2H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.32 0 .59-.16.78-.4l4 4c.39.4 1.02.4 1.41.01z"/>
  </svg>
);
RoundedNoFoodIcon.displayName = 'RoundedNoFoodIcon';
export const NoFoodRoundedIcon = RoundedNoFoodIcon;

export const RoundedNoMeetingRoomIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 6h3v7.88l2 2V5c0-.55-.45-1-1-1h-4c0-.55-.45-1-1-1H6.12L14 10.88V6zm7.17 14.88L12 11.71V13h-2v-2h1.29L3.12 2.83a.996.996 0 1 0-1.41 1.41L5 7.54V19H4c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1v-3.46l5.75 5.75c.39.39 1.02.39 1.41 0c.4-.39.4-1.02.01-1.41z"/>
  </svg>
);
RoundedNoMeetingRoomIcon.displayName = 'RoundedNoMeetingRoomIcon';
export const NoMeetingRoomRoundedIcon = RoundedNoMeetingRoomIcon;

export const RoundedNoPhotographyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10.94 8.12L7.48 4.66l.92-1.01c.38-.41.92-.65 1.48-.65h4.24c.56 0 1.1.24 1.47.65L16.83 5H20c1.1 0 2 .9 2 2v12c0 .05-.01.1-.02.16l-5.1-5.1c.08-.35.12-.7.12-1.06c0-2.76-2.24-5-5-5c-.36 0-.71.04-1.06.12zm8.84 14.49L18.17 21H4c-1.1 0-2-.9-2-2V7c0-.59.27-1.12.68-1.49L1.39 4.22A.996.996 0 1 1 2.8 2.81l18.38 18.38c.39.39.39 1.02 0 1.41c-.38.4-1.01.4-1.4.01zm-5.29-5.29l-1.5-1.5c-.32.1-.64.18-.99.18c-1.66 0-3-1.34-3-3c0-.35.08-.67.19-.98l-1.5-1.5A4.74 4.74 0 0 0 7 13c0 2.76 2.24 5 5 5c.91 0 1.76-.25 2.49-.68z"/>
  </svg>
);
RoundedNoPhotographyIcon.displayName = 'RoundedNoPhotographyIcon';
export const NoPhotographyRoundedIcon = RoundedNoPhotographyIcon;

export const RoundedNoStrollerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8 20c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2zm6.3-15.9a8.88 8.88 0 0 0-7.76-.39l4.37 4.37L14.3 4.1zm6.19 17.8a.996.996 0 0 0 0-1.41l-9.82-9.82l-7.16-7.16A.996.996 0 1 0 2.1 4.92l7.26 7.26L6.7 15.3c-.55.65-.09 1.65.76 1.65h6.66l1.17 1.17c-.88.33-1.47 1.25-1.26 2.28c.15.76.78 1.39 1.54 1.54c1.03.21 1.95-.38 2.28-1.26l1.2 1.2c.41.41 1.04.41 1.44.02zM17 6.27c.58-.68.97-1.27 1.65-1.27c.68 0 1.22.52 1.33 1.21c.1.45.5.79.98.79c.55 0 1-.45 1-1c0-.06 0-.11-.01-.16v-.01C21.65 4.22 20.3 3 18.65 3c-1.66 0-2.54 1.27-3.18 2.03l-3.5 4.11L17 14.17v-7.9z"/>
  </svg>
);
RoundedNoStrollerIcon.displayName = 'RoundedNoStrollerIcon';
export const NoStrollerRoundedIcon = RoundedNoStrollerIcon;

export const RoundedOtherHousesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M1.61 12.19c.34.44.96.52 1.4.19l.99-.76V20c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-8.38l.99.76c.44.34 1.07.25 1.4-.19a.992.992 0 0 0-.19-1.4l-9.6-7.33c-.36-.27-.86-.27-1.21 0l-9.6 7.33c-.43.34-.52.97-.18 1.4zM8 15c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedOtherHousesIcon.displayName = 'RoundedOtherHousesIcon';
export const OtherHousesRoundedIcon = RoundedOtherHousesIcon;

export const RoundedPoolIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.11 5.56C7.3 5.7 8.14 6.14 9 7l1 1l-3.25 3.25c.31.12.56.27.77.39c.37.23.59.36 1.15.36s.78-.13 1.15-.36c.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36c.55 0 .78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C9.22 3.74 8.04 3.2 6.3 3.05C5.6 2.99 5 3.56 5 4.26v.09c0 .63.49 1.13 1.11 1.21zm15.24 13.35c-.17-.06-.32-.15-.5-.27c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.6.36-1.15.36c-.55 0-.78-.14-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.19.64c-.37.23-.59.36-1.15.36s-.78-.13-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.19.64c-.18.11-.33.2-.5.27c-.38.13-.65.45-.65.85v.12c0 .67.66 1.13 1.3.91c.37-.13.65-.3.89-.44c.37-.22.6-.35 1.15-.35c.55 0 .78.13 1.15.36c.45.27 1.07.64 2.18.64s1.73-.37 2.19-.64c.37-.23.59-.36 1.15-.36c.55 0 .78.14 1.15.36c.45.27 1.07.64 2.18.64s1.72-.37 2.18-.64c.37-.23.59-.36 1.15-.36c.55 0 .78.14 1.15.36c.23.14.51.31.88.44c.63.22 1.3-.24 1.3-.91v-.12c0-.41-.27-.73-.65-.86zM3.11 16.35c.47-.13.81-.33 1.09-.49c.37-.23.6-.36 1.15-.36c.55 0 .78.14 1.15.36c.45.27 1.07.64 2.18.64s1.73-.37 2.18-.64c.37-.23.59-.36 1.15-.36c.55 0 .78.14 1.15.36c.45.27 1.07.64 2.18.64s1.73-.37 2.18-.64c.37-.23.59-.36 1.15-.36c.55 0 .78.14 1.15.36c.23.14.5.3.85.43a.978.978 0 0 0 1.31-.91v-.12c0-.4-.27-.72-.64-.86c-.17-.06-.32-.15-.51-.26c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.6.36-1.15.36s-.78-.14-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.59.36-1.15.36c-.55 0-.78-.14-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.18.11-.33.2-.5.27c-.38.13-.65.45-.65.85v.23c0 .58.55 1.02 1.11.86z"/><circle cx="16.5" cy="5.5" r="2.5"/>
  </svg>
);
RoundedPoolIcon.displayName = 'RoundedPoolIcon';
export const PoolRoundedIcon = RoundedPoolIcon;

export const RoundedRiceBowlIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 12c0-5.48-4.4-9.93-9.86-10c-3.62-.05-6.85 2.03-8.71 5.14C.1 12.69 2.98 18.27 8 20.25v.25c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-.25c3.53-1.39 6-4.56 6-8.25zm-2 0h-4V5.08c2.39 1.39 4 3.97 4 6.92zm-6-7.74V12h-4V4.26c.64-.16 1.31-.26 2-.26s1.36.1 2 .26zM4 12c0-2.95 1.61-5.53 4-6.92V12H4z"/>
  </svg>
);
RoundedRiceBowlIcon.displayName = 'RoundedRiceBowlIcon';
export const RiceBowlRoundedIcon = RoundedRiceBowlIcon;

export const RoundedRoofingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 18h-2v-2h2v2zm-4-3v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1zm10-5.7V5c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1.6l-3.33-3c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87h1.31c.25 0 .49-.09.67-.26L12 5.69l6.71 6.05c.19.17.43.26.67.26h1.31c.46 0 .68-.57.33-.87L19 9.3z"/>
  </svg>
);
RoundedRoofingIcon.displayName = 'RoundedRoofingIcon';
export const RoofingRoundedIcon = RoundedRoofingIcon;

export const RoundedRoomPreferencesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.75 17c0-.22-.03-.42-.06-.63l.84-.73c.18-.16.22-.42.1-.63l-.59-1.02a.488.488 0 0 0-.59-.22l-1.06.36c-.32-.27-.68-.48-1.08-.63l-.22-1.09a.503.503 0 0 0-.49-.4h-1.18c-.24 0-.44.17-.49.4l-.22 1.09c-.4.15-.76.36-1.08.63l-1.06-.36a.496.496 0 0 0-.59.22l-.59 1.02c-.12.21-.08.47.1.63l.84.73c-.03.21-.06.41-.06.63s.03.42.06.63l-.84.73c-.18.16-.22.42-.1.63l.59 1.02c.12.21.37.3.59.22l1.06-.36c.32.27.68.48 1.08.63l.22 1.09c.05.23.25.4.49.4h1.18c.24 0 .44-.17.49-.4l.22-1.09c.4-.15.76-.36 1.08-.63l1.06.36c.23.08.47-.02.59-.22l.59-1.02c.12-.21.08-.47-.1-.63l-.84-.73c.03-.21.06-.41.06-.63zM18 19c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm-4-7.74V6h3v4h2V5c0-.55-.45-1-1-1h-4c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v15H4c-.55 0-1 .45-1 1s.45 1 1 1h8.26A6.963 6.963 0 0 1 11 17c0-2.38 1.19-4.47 3-5.74zM10 12c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1z"/>
  </svg>
);
RoundedRoomPreferencesIcon.displayName = 'RoundedRoomPreferencesIcon';
export const RoomPreferencesRoundedIcon = RoundedRoomPreferencesIcon;

export const RoundedRoomServiceIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 17h18c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1zm10.84-9.21A2.006 2.006 0 0 0 12 5a2.006 2.006 0 0 0-1.84 2.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21z"/>
  </svg>
);
RoundedRoomServiceIcon.displayName = 'RoundedRoomServiceIcon';
export const RoomServiceRoundedIcon = RoundedRoomServiceIcon;

export const RoundedRvHookupIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 17h-1v-6c0-1.1-.9-2-2-2H7v-.74c0-.46-.56-.7-.89-.37L4.37 9.63c-.2.2-.2.53 0 .74l1.74 1.74c.33.33.89.1.89-.37V11h4v3H5c-.55 0-1 .45-1 1v2c0 1.1.9 2 2 2h2c0 1.66 1.34 3 3 3s3-1.34 3-3h7c.55 0 1-.45 1-1s-.45-1-1-1zm-10 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm7-6h-4v-3h3c.55 0 1 .45 1 1v2zm-8-8h7v.74c0 .46.56.7.89.37l1.74-1.74c.2-.2.2-.53 0-.74l-1.74-1.74a.52.52 0 0 0-.89.37V4h-7c-.55 0-1 .45-1 1s.45 1 1 1z"/>
  </svg>
);
RoundedRvHookupIcon.displayName = 'RoundedRvHookupIcon';
export const RvHookupRoundedIcon = RoundedRvHookupIcon;

export const RoundedSmokeFreeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20.5 13H22v3h-1.5zM18 13h1.5v3H18zm-1 1.5c0-.83-.67-1.5-1.5-1.5h-.84l2.18 2.18c.1-.21.16-.44.16-.68zm1.96-12.15H19h-.04zm-.11 2.38c.38-.38.67-.84.84-1.35a.771.771 0 0 0-.71-1.02c-.34.01-.61.25-.72.58c-.18.55-.62.99-1.17 1.17c-.34.11-.59.39-.59.74V5c0 .37.27.69.64.75c1.93.31 3.36 2 3.36 4.02v1.48c0 .41.34.75.75.75s.75-.34.75-.75V9.76c0-2.22-1.28-4.14-3.15-5.03zm-4.24 3.92h1.42c1.05 0 1.97.74 1.97 2.05v.55c0 .41.33.75.75.75h.01c.41 0 .75-.33.75-.75v-.89c0-1.81-1.6-3.16-3.47-3.16h-1.3c-1.02 0-1.94-.73-2.07-1.75c-.12-.95.46-1.7 1.3-1.93c.32-.09.54-.38.54-.72c0-.49-.46-.86-.93-.72a3.35 3.35 0 0 0-2.42 3.28c.02 1.85 1.61 3.29 3.45 3.29zM4.12 5.29A.996.996 0 1 0 2.71 6.7L9 13H3.5c-.83 0-1.5.67-1.5 1.5S2.67 16 3.5 16H12l6.29 6.29a.996.996 0 1 0 1.41-1.41L4.12 5.29z"/>
  </svg>
);
RoundedSmokeFreeIcon.displayName = 'RoundedSmokeFreeIcon';
export const SmokeFreeRoundedIcon = RoundedSmokeFreeIcon;

export const RoundedSmokingRoomsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.5 16h-12c-.83 0-1.5.67-1.5 1.5S2.67 19 3.5 19h12c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5zm3.35-8.27c.62-.61 1-1.45 1-2.38c0-1.51-1-2.79-2.38-3.21a.758.758 0 0 0-.97.72c0 .33.21.62.52.71c.77.23 1.33.94 1.33 1.78c0 .82-.53 1.51-1.27 1.76c-.33.11-.58.39-.58.74V8c0 .37.27.69.64.75c1.93.31 3.36 2 3.36 4.02v1.48c0 .41.34.75.75.75s.75-.34.75-.75v-1.49c0-2.22-1.28-4.14-3.15-5.03zm-2.82 2.47h-1.3c-1.02 0-1.94-.73-2.07-1.75c-.12-.95.46-1.7 1.3-1.93c.32-.09.54-.38.54-.72c0-.49-.46-.86-.93-.72a3.35 3.35 0 0 0-2.42 3.28c.03 1.84 1.62 3.29 3.46 3.29h1.42c1.05 0 1.97.74 1.97 2.05v.55c0 .41.33.75.75.75h.01c.41 0 .75-.33.75-.75v-.89c-.01-1.81-1.61-3.16-3.48-3.16zM18 16h1.5v3H18zm2.5 0H22v3h-1.5z"/>
  </svg>
);
RoundedSmokingRoomsIcon.displayName = 'RoundedSmokingRoomsIcon';
export const SmokingRoomsRoundedIcon = RoundedSmokingRoomsIcon;

export const RoundedSoapIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.25 6c.41 0 .75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75s.34-.75.75-.75m0-1.5C13.01 4.5 12 5.51 12 6.75S13.01 9 14.25 9s2.25-1.01 2.25-2.25s-1.01-2.25-2.25-2.25zm5.75 1c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5M20 4c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm-2-1.5c0 .83-.67 1.5-1.5 1.5S15 3.33 15 2.5S15.67 1 16.5 1s1.5.67 1.5 1.5zM1.94 11.79c-.6.56-.94 1.35-.94 2.18V20c0 1.66 1.34 3 3 3h13.68c.65 0 1.25-.47 1.32-1.12c.08-.75-.51-1.38-1.24-1.38H12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7.18c.65 0 1.25-.47 1.32-1.12c.08-.75-.51-1.38-1.24-1.38H12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h8.18c.65 0 1.25-.47 1.32-1.12c.08-.75-.51-1.38-1.24-1.38H12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6.18c.65 0 1.25-.47 1.32-1.12c.08-.75-.51-1.38-1.24-1.38h-9.9l1.49-2.61a1.065 1.065 0 0 0-.12-1.23l-.42-.45c-.38-.39-1.01-.41-1.41-.03l-6.46 6.11z"/>
  </svg>
);
RoundedSoapIcon.displayName = 'RoundedSoapIcon';
export const SoapRoundedIcon = RoundedSoapIcon;

export const RoundedSpaIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.49 9.63c-.16-2.42-1.03-4.79-2.64-6.76c-.41-.5-1.16-.5-1.57 0a12.102 12.102 0 0 0-2.77 6.76c1.28.68 2.46 1.56 3.49 2.63c1.03-1.06 2.21-1.94 3.49-2.63zm-6.5 2.65c-.14-.1-.3-.19-.45-.29c.15.11.31.19.45.29zm6.42-.25c-.13.09-.27.16-.4.26c.13-.1.27-.17.4-.26zM12 15.45c-1.95-2.97-5.14-5.03-8.83-5.39c-.64-.06-1.17.47-1.11 1.11c.45 4.8 3.65 8.78 7.98 10.33c.63.23 1.29.4 1.97.51c.68-.12 1.33-.29 1.97-.51c4.33-1.55 7.53-5.52 7.98-10.33a1.02 1.02 0 0 0-1.11-1.11c-3.71.36-6.9 2.42-8.85 5.39z"/>
  </svg>
);
RoundedSpaIcon.displayName = 'RoundedSpaIcon';
export const SpaRoundedIcon = RoundedSpaIcon;

export const RoundedSportsBarIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 9h-1.56c.33-.55.53-1.18.55-1.86c.04-1.03-.43-1.99-1.16-2.71c-1.54-1.54-2.74-1.56-3.82-1.29A4.615 4.615 0 0 0 10 2.02c-1.89 0-3.51 1.11-4.27 2.71C4.15 5.26 3 6.74 3 8.5c0 1.86 1.28 3.41 3 3.86V19c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2h2c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2zM7 10.5c-1.1 0-2-.9-2-2c0-.85.55-1.6 1.37-1.88l.8-.27l.36-.76C8 4.62 8.94 4.02 10 4.02c.79 0 1.39.35 1.74.65l.78.65S13.16 5 13.99 5c1.1 0 2 .9 2 2h-3C9.67 7 9.15 10.5 7 10.5zM19 17h-2v-6h2v6z"/>
  </svg>
);
RoundedSportsBarIcon.displayName = 'RoundedSportsBarIcon';
export const SportsBarRoundedIcon = RoundedSportsBarIcon;

export const RoundedStairsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 5h-1.42v3.33H13v3.33h-2.58l.03 3.34H7c-.55 0-1-.45-1-1s.45-1 1-1h1.42v-3.33H11V9.33h2.58V6H17c.55 0 1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedStairsIcon.displayName = 'RoundedStairsIcon';
export const StairsRoundedIcon = RoundedStairsIcon;

export const RoundedStorefrontIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.9 7.89l-1.05-3.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 7.89c-.46 1.97.85 3.11.9 3.17V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7.94c1.12-1.12 1.09-2.41.9-3.17zM13 5h1.96l.54 3.52c.09.71-.39 1.48-1.28 1.48c-.67 0-1.22-.59-1.22-1.31V5zM6.44 8.86c-.08.65-.6 1.14-1.21 1.14c-.93 0-1.35-.97-1.19-1.64L5.05 5h1.97l-.58 3.86zM11 8.69c0 .72-.55 1.31-1.29 1.31c-.75 0-1.3-.7-1.22-1.48L9.04 5H11v3.69zM18.77 10c-.61 0-1.14-.49-1.21-1.14L16.98 5l1.93-.01l1.05 3.37c.16.67-.25 1.64-1.19 1.64z"/>
  </svg>
);
RoundedStorefrontIcon.displayName = 'RoundedStorefrontIcon';
export const StorefrontRoundedIcon = RoundedStorefrontIcon;

export const RoundedStrollerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 20c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2zM6 18c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm8.3-13.9C13.03 3.4 11.56 3 10 3c-1.51 0-2.93.38-4.17 1.03c-.59.31-.68 1.12-.22 1.58L9.6 9.6l4.7-5.5zm7.64 1.73C21.65 4.22 20.3 3 18.65 3c-1.66 0-2.54 1.27-3.18 2.03L6.71 15.31c-.55.65-.09 1.65.76 1.65H15c1.1 0 2-.9 2-2V6.27c.58-.68.97-1.27 1.65-1.27c.68 0 1.22.52 1.33 1.21c.1.45.5.79.98.79c.55 0 1-.45 1-1c0-.06-.01-.11-.02-.17z"/>
  </svg>
);
RoundedStrollerIcon.displayName = 'RoundedStrollerIcon';
export const StrollerRoundedIcon = RoundedStrollerIcon;

export const RoundedTapasIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 10V2c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 1.86 1.28 3.41 3 3.86V21h-1c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-1v-7.14c1.72-.45 3-2 3-3.86zm-2-7v3h-4V3h4zM9.86 9H8V8h1.86c1.31 0 2.5-.94 2.63-2.24A2.5 2.5 0 0 0 10 3H8V2c0-.55-.45-1-1-1s-1 .45-1 1v1H4.14c-1.31 0-2.5.94-2.63 2.24A2.5 2.5 0 0 0 4 8h2v1H4.14c-1.31 0-2.5.94-2.63 2.24A2.5 2.5 0 0 0 4 14h2v8c0 .55.45 1 1 1s1-.45 1-1v-8h2a2.5 2.5 0 0 0 2.49-2.76C12.36 9.94 11.17 9 9.86 9z"/>
  </svg>
);
RoundedTapasIcon.displayName = 'RoundedTapasIcon';
export const TapasRoundedIcon = RoundedTapasIcon;

export const RoundedTtyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm-1 3c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm-2-3c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm5 5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm1-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm2 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm1-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm-6.38 8.38L12.1 16.9c-2.5-1.43-4.57-3.5-6-6l2.52-2.52c.24-.24.34-.58.28-.9L8.16 3.8c-.09-.46-.5-.8-.98-.8H3.03c-.56 0-1.03.47-1 1.03c.17 2.89 1.02 5.6 2.4 7.97c1.58 2.73 3.85 4.99 6.57 6.57c2.37 1.37 5.08 2.23 7.97 2.4c.56.03 1.03-.44 1.03-1v-4.15c0-.48-.34-.89-.8-.98l-3.67-.73a.99.99 0 0 0-.91.27zM15 10c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm-3 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm6 2c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm3 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedTtyIcon.displayName = 'RoundedTtyIcon';
export const TtyRoundedIcon = RoundedTtyIcon;

export const RoundedUmbrellaIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.12 6.28l-2.62.64L13 5.77V3.4c0-.26.22-.48.5-.48c.23 0 .43.16.49.36c.11.42.5.72.95.72c.55 0 1-.45 1-1c0-.1-.02-.2-.05-.3c-.3-.98-1.26-1.7-2.39-1.7C12.12 1 11 2.07 11 3.4v2.37L9.5 6.92l-2.62-.64a.505.505 0 0 0-.6.64l4.77 14.39c.15.46.55.69.95.69s.8-.23.95-.69l4.77-14.39a.505.505 0 0 0-.6-.64zM11 14.8L9.03 8.86l.92.23l.76-.58l.29-.22v6.51zm2 0V8.29l.28.22l.76.58l.92-.23L13 14.8z"/>
  </svg>
);
RoundedUmbrellaIcon.displayName = 'RoundedUmbrellaIcon';
export const UmbrellaRoundedIcon = RoundedUmbrellaIcon;

export const RoundedVapeFreeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20.49 21.9a.996.996 0 0 1-1.41 0l-2.9-2.9H8v-3h5.17L2.1 4.93a.996.996 0 1 1 1.41-1.41l16.97 16.97c.4.39.4 1.02.01 1.41zM18.83 16h1.67a1.498 1.498 0 0 1 .97 2.64L18.83 16zm-8.33 1c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5zm8.35-9.27c.62-.61 1-1.45 1-2.38c0-1.51-1-2.79-2.38-3.21a.758.758 0 0 0-.97.72c0 .33.21.62.52.71c.77.23 1.33.94 1.33 1.78c0 .82-.53 1.51-1.27 1.76c-.33.11-.58.39-.58.74V8c0 .37.27.69.64.75c1.93.31 3.36 2 3.36 4.02v1.48c0 .41.34.75.75.75s.75-.34.75-.75v-1.49c0-2.22-1.28-4.14-3.15-5.03zm-4.37 3.92h1.55c1.05 0 1.97.74 1.97 2.05v.55c0 .41.34.75.76.75c.41 0 .75-.33.75-.75v-.89c-.01-1.81-1.61-3.16-3.48-3.16h-1.3c-1.02 0-1.94-.73-2.07-1.75c-.12-.95.46-1.7 1.3-1.93c.32-.09.54-.38.54-.72c0-.49-.46-.86-.93-.72a3.354 3.354 0 0 0-2.42 3.24l3.33 3.33zM3 18.5c1.33 0 2.71.18 4 .5v-3c-1.29.32-2.67.5-4 .5c-.55 0-1 .45-1 1s.45 1 1 1z"/>
  </svg>
);
RoundedVapeFreeIcon.displayName = 'RoundedVapeFreeIcon';
export const VapeFreeRoundedIcon = RoundedVapeFreeIcon;

export const RoundedVapingRoomsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 17.5c0 .83-.67 1.5-1.5 1.5H8v-3h12.5c.83 0 1.5.67 1.5 1.5zM10.5 17c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5zm8.35-9.27c.62-.61 1-1.45 1-2.38c0-1.51-1-2.79-2.38-3.21a.758.758 0 0 0-.97.72c0 .33.21.62.52.71c.77.23 1.33.94 1.33 1.78c0 .82-.53 1.51-1.27 1.76c-.33.11-.58.39-.58.74V8c0 .37.27.69.64.75c1.93.31 3.36 2 3.36 4.02v1.48c0 .41.34.75.75.75s.75-.34.75-.75v-1.49c0-2.22-1.28-4.14-3.15-5.03zM18.76 15c.41 0 .75-.33.75-.75v-.89c-.01-1.81-1.61-3.16-3.48-3.16h-1.3c-1.02 0-1.94-.73-2.07-1.75c-.12-.95.46-1.7 1.3-1.93c.32-.09.54-.38.54-.72c0-.49-.46-.86-.93-.72a3.35 3.35 0 0 0-2.42 3.28c.03 1.84 1.62 3.29 3.46 3.29h1.42c1.05 0 1.97.74 1.97 2.05v.55c0 .41.34.75.76.75zM3 18.5c1.33 0 2.71.18 4 .5v-3c-1.29.32-2.67.5-4 .5c-.55 0-1 .45-1 1s.45 1 1 1z"/>
  </svg>
);
RoundedVapingRoomsIcon.displayName = 'RoundedVapingRoomsIcon';
export const VapingRoomsRoundedIcon = RoundedVapingRoomsIcon;

export const RoundedVillaIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 21H4c-.55 0-1-.45-1-1V8.69c0-.42.25-.79.64-.94l11-4.23a1 1 0 0 1 1.36.94V10H8c-.55 0-1 .45-1 1v10zm10-9h-7c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h4v-4c0-.55.45-1 1-1s1 .45 1 1v4h4c.55 0 1-.45 1-1v-8c0-1.1-.9-2-2-2s-2 .9-2 2z"/>
  </svg>
);
RoundedVillaIcon.displayName = 'RoundedVillaIcon';
export const VillaRoundedIcon = RoundedVillaIcon;

export const RoundedWashIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M1.94 11.79c-.6.56-.94 1.35-.94 2.18V20c0 1.66 1.34 3 3 3h13.68c.65 0 1.25-.47 1.32-1.12c.08-.75-.51-1.38-1.24-1.38H12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7.18c.65 0 1.25-.47 1.32-1.12c.08-.75-.51-1.38-1.24-1.38H12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h8.18c.65 0 1.25-.47 1.32-1.12c.08-.75-.51-1.38-1.24-1.38H12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6.18c.65 0 1.25-.47 1.32-1.12c.08-.75-.51-1.38-1.24-1.38h-9.9l1.49-2.61a1.065 1.065 0 0 0-.12-1.23l-.42-.45c-.38-.39-1.01-.41-1.41-.03l-6.46 6.11zM18.5 8A2.5 2.5 0 0 0 21 5.5c0-1.25-1.41-3.16-2.11-4.04a.489.489 0 0 0-.77 0C17.41 2.34 16 4.25 16 5.5A2.5 2.5 0 0 0 18.5 8zm-5 1c.83 0 1.5-.67 1.5-1.5c0-.56-.67-1.49-1.11-2.04a.489.489 0 0 0-.77 0C12.67 6.01 12 6.94 12 7.5c0 .83.67 1.5 1.5 1.5z"/>
  </svg>
);
RoundedWashIcon.displayName = 'RoundedWashIcon';
export const WashRoundedIcon = RoundedWashIcon;

export const RoundedWaterDamageIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11.33 3.6l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0zM12 16c-1.1 0-2-.9-2-2c0-.78.99-2.44 1.58-3.36c.2-.31.64-.31.84 0c.59.92 1.58 2.58 1.58 3.36c0 1.1-.9 2-2 2z"/>
  </svg>
);
RoundedWaterDamageIcon.displayName = 'RoundedWaterDamageIcon';
export const WaterDamageRoundedIcon = RoundedWaterDamageIcon;

export const RoundedWheelchairPickupIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4.5 4c0-1.11.89-2 2-2s2 .89 2 2s-.89 2-2 2s-2-.89-2-2zm5.5 6.95V9c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v5c0 .55.45 1 1 1h1v6c0 .55.45 1 1 1h2.5v-.11c-1.24-1.26-2-2.99-2-4.89c0-2.58 1.41-4.84 3.5-6.05zM16.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3c0-1.11.61-2.06 1.5-2.58v-2.16c-2.02.64-3.5 2.51-3.5 4.74c0 2.76 2.24 5 5 5s5-2.24 5-5h-2zm2.5-3h-4V9c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1h4.46l1.92 2.88c.31.46.93.58 1.39.28c.46-.31.58-.93.28-1.39l-2.21-3.32c-.19-.28-.51-.45-.84-.45z"/>
  </svg>
);
RoundedWheelchairPickupIcon.displayName = 'RoundedWheelchairPickupIcon';
export const WheelchairPickupRoundedIcon = RoundedWheelchairPickupIcon;
