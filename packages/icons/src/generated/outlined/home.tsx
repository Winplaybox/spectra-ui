import React from 'react';
import { IconProps } from '../../types';

export const OutlinedAutoModeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.03 3.56c-1.67-1.39-3.74-2.3-6.03-2.51v2.01c1.73.19 3.31.88 4.61 1.92l1.42-1.42zM11 3.06V1.05c-2.29.2-4.36 1.12-6.03 2.51l1.42 1.42A8.928 8.928 0 0 1 11 3.06zM4.98 6.39L3.56 4.97C2.17 6.64 1.26 8.71 1.05 11h2.01c.19-1.73.88-3.31 1.92-4.61zM20.94 11h2.01c-.21-2.29-1.12-4.36-2.51-6.03l-1.42 1.42A8.928 8.928 0 0 1 20.94 11zM7 12l3.44 1.56L12 17l1.56-3.44L17 12l-3.44-1.56L12 7l-1.56 3.44z"/><path fill={color || 'currentColor'} d="M12 21a8.96 8.96 0 0 1-7.46-4H7v-2H1v6h2v-2.7c1.99 2.84 5.27 4.7 9 4.7c4.87 0 9-3.17 10.44-7.56l-1.96-.45C19.25 18.48 15.92 21 12 21z"/>
  </svg>
);
OutlinedAutoModeIcon.displayName = 'OutlinedAutoModeIcon';
export const AutoModeOutlinedIcon = OutlinedAutoModeIcon;

export const OutlinedBlindsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V3H4v16H2v2h20v-2h-2zM16 9h2v2h-2V9zm-2 2H6V9h8v2zm4-4h-2V5h2v2zm-4-2v2H6V5h8zM6 19v-6h8v1.82A1.746 1.746 0 0 0 15 18a1.746 1.746 0 0 0 1-3.18V13h2v6H6z"/>
  </svg>
);
OutlinedBlindsIcon.displayName = 'OutlinedBlindsIcon';
export const BlindsOutlinedIcon = OutlinedBlindsIcon;

export const OutlinedBlindsClosedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V3H4v16H2v2h11.25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75H22v-2h-2zm-2-8h-2V9h2v2zm-4 0H6V9h8v2zm0 2v2H6v-2h8zm2 0h2v2h-2v-2zm2-6h-2V5h2v2zm-4-2v2H6V5h8zM6 19v-2h8v2H6zm10 0v-2h2v2h-2z"/>
  </svg>
);
OutlinedBlindsClosedIcon.displayName = 'OutlinedBlindsClosedIcon';
export const BlindsClosedOutlinedIcon = OutlinedBlindsClosedIcon;

export const OutlinedBroadcastOnHomeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 6c0-1.1-.9-2-2-2H4v2h16v2.59c.73.29 1.4.69 2 1.17V6zM8 9H3c-.5 0-1 .5-1 1v9c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-9c0-.5-.5-1-1-1zm-1 9H4v-7h3v7zm10.75-1.03c.3-.23.5-.57.5-.97a1.25 1.25 0 0 0-2.5 0c0 .4.2.75.5.97V22h1.5v-5.03z"/><path fill={color || 'currentColor'} d="M17 13.5a2.5 2.5 0 0 1 2.5 2.5c0 .69-.28 1.31-.73 1.76l1.06 1.06C20.55 18.1 21 17.1 21 16c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 1.1.45 2.1 1.17 2.83l1.06-1.06A2.5 2.5 0 0 1 17 13.5z"/><path fill={color || 'currentColor'} d="M17 9.5a6.5 6.5 0 0 0-6.5 6.5c0 1.79.73 3.42 1.9 4.6l1.06-1.06C12.56 18.63 12 17.38 12 16c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.37-.56 2.62-1.46 3.52l1.07 1.06A6.5 6.5 0 0 0 17 9.5z"/>
  </svg>
);
OutlinedBroadcastOnHomeIcon.displayName = 'OutlinedBroadcastOnHomeIcon';
export const BroadcastOnHomeOutlinedIcon = OutlinedBroadcastOnHomeIcon;

export const OutlinedBroadcastOnPersonalIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 19v-9l6-4.5l4.08 3.06c.81-.32 1.69-.51 2.61-.54L10 3L2 9v12h8.76c-.48-.6-.88-1.27-1.17-2H4zm13-4.25c-.69 0-1.25.56-1.25 1.25c0 .4.2.75.5.97V22h1.5v-5.03c.3-.23.5-.57.5-.97c0-.69-.56-1.25-1.25-1.25z"/><path fill={color || 'currentColor'} d="M17 12c-2.21 0-4 1.79-4 4c0 1.1.45 2.1 1.17 2.83l1.06-1.06A2.5 2.5 0 1 1 19.5 16c0 .69-.28 1.31-.73 1.76l1.06 1.06C20.55 18.1 21 17.1 21 16c0-2.21-1.79-4-4-4z"/><path fill={color || 'currentColor'} d="M17 9.5a6.5 6.5 0 0 0-6.5 6.5c0 1.79.73 3.42 1.9 4.6l1.06-1.06C12.56 18.63 12 17.38 12 16c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.37-.56 2.62-1.46 3.52l1.07 1.06A6.5 6.5 0 0 0 17 9.5z"/>
  </svg>
);
OutlinedBroadcastOnPersonalIcon.displayName = 'OutlinedBroadcastOnPersonalIcon';
export const BroadcastOnPersonalOutlinedIcon = OutlinedBroadcastOnPersonalIcon;

export const OutlinedCurtainsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V3H4v16H2v2h20v-2h-2zm-2-8.14c-2.05-.58-3.64-2.93-3.94-5.86H18v5.86zM15.81 12c-2.04 1.35-3.5 3.94-3.76 7h-.09c-.26-3.06-1.72-5.65-3.76-7c2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7zM9.94 5c-.3 2.93-1.89 5.27-3.94 5.86V5h3.94zM6 13.14c2.05.58 3.64 2.93 3.94 5.86H6v-5.86zM14.06 19c.3-2.93 1.89-5.27 3.94-5.86V19h-3.94z"/>
  </svg>
);
OutlinedCurtainsIcon.displayName = 'OutlinedCurtainsIcon';
export const CurtainsOutlinedIcon = OutlinedCurtainsIcon;

export const OutlinedCurtainsClosedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V3H4v16H2v2h20v-2h-2zM13 5v14h-2V5h2zM6 5h3v14H6V5zm9 14V5h3v14h-3z"/>
  </svg>
);
OutlinedCurtainsClosedIcon.displayName = 'OutlinedCurtainsClosedIcon';
export const CurtainsClosedOutlinedIcon = OutlinedCurtainsClosedIcon;

export const OutlinedElectricBoltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.69 2.21L4.33 11.49c-.64.58-.28 1.65.58 1.73L13 14l-4.85 6.76c-.22.31-.19.74.08 1.01c.3.3.77.31 1.08.02l10.36-9.28c.64-.58.28-1.65-.58-1.73L11 10l4.85-6.76c.22-.31.19-.74-.08-1.01a.77.77 0 0 0-1.08-.02z"/>
  </svg>
);
OutlinedElectricBoltIcon.displayName = 'OutlinedElectricBoltIcon';
export const ElectricBoltOutlinedIcon = OutlinedElectricBoltIcon;

export const OutlinedElectricMeterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 11a9 9 0 0 0-18 0c0 3.92 2.51 7.24 6 8.48V22h2v-2.06a8.262 8.262 0 0 0 2 0V22h2v-2.52c3.49-1.24 6-4.56 6-8.48zm-9 7c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7z"/><path fill={color || 'currentColor'} d="M8 7h8v2H8zm4.75 3l-3 3L11 14.25L9.75 15.5l1.5 1.5l3-3L13 12.75l1.25-1.25z"/>
  </svg>
);
OutlinedElectricMeterIcon.displayName = 'OutlinedElectricMeterIcon';
export const ElectricMeterOutlinedIcon = OutlinedElectricMeterIcon;

export const OutlinedEnergySavingsLeafIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 3c-4.8 0-9 3.86-9 9c0 2.12.74 4.07 1.97 5.61L3 19.59L4.41 21l1.97-1.97A9.012 9.012 0 0 0 12 21c2.3 0 4.61-.88 6.36-2.64A8.95 8.95 0 0 0 21 12V3h-9zm7 9c0 1.87-.73 3.63-2.05 4.95A6.96 6.96 0 0 1 12 19c-3.86 0-7-3.14-7-7c0-1.9.74-3.68 2.1-4.99A6.94 6.94 0 0 1 12 5h7v7z"/><path fill={color || 'currentColor'} d="M8.46 12.63l4.05.4l-2.44 3.33c-.11.16-.1.38.04.52c.15.15.4.16.56.01l5.16-4.63c.33-.3.15-.85-.3-.89l-4.05-.4l2.44-3.33c.11-.16.1-.38-.04-.52a.405.405 0 0 0-.56-.01l-5.16 4.63c-.32.3-.14.85.3.89z"/>
  </svg>
);
OutlinedEnergySavingsLeafIcon.displayName = 'OutlinedEnergySavingsLeafIcon';
export const EnergySavingsLeafOutlinedIcon = OutlinedEnergySavingsLeafIcon;

export const OutlinedGasMeterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 4h-1V2h-2v2h-2V2H9v2H8C5.79 4 4 5.79 4 8v10c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm2 14c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v10z"/><path fill={color || 'currentColor'} d="M9.5 15.54C9.5 16.9 10.62 18 12 18s2.5-1.1 2.5-2.46c0-1.09-.45-1.41-2.5-3.79c-2.07 2.4-2.5 2.71-2.5 3.79zM8 8h8v2H8z"/>
  </svg>
);
OutlinedGasMeterIcon.displayName = 'OutlinedGasMeterIcon';
export const GasMeterOutlinedIcon = OutlinedGasMeterIcon;

export const OutlinedHeatPumpIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/><path fill={color || 'currentColor'} d="M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6s-6 2.69-6 6s2.69 6 6 6zm-.75-2.08c-.55-.1-1.05-.32-1.5-.62l1.5-1.5v2.12zm1.5 0v-2.11l1.5 1.5c-.45.3-.95.51-1.5.61zm2.56-1.67l-1.5-1.5h2.11c-.1.55-.31 1.05-.61 1.5zm.61-3h-2.11l1.5-1.5c.3.45.51.95.61 1.5zm-3.17-3.17c.55.1 1.05.32 1.5.62l-1.5 1.5V8.08zM12 11c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm-.75-2.92v2.11l-1.5-1.5c.45-.3.95-.51 1.5-.61zM8.69 9.75l1.5 1.5H8.08c.1-.55.31-1.05.61-1.5zm1.5 3l-1.5 1.5c-.3-.44-.51-.95-.62-1.5h2.12z"/>
  </svg>
);
OutlinedHeatPumpIcon.displayName = 'OutlinedHeatPumpIcon';
export const HeatPumpOutlinedIcon = OutlinedHeatPumpIcon;

export const OutlinedModeFanOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 8c-1.06 0-1.64.29-3.91 1.19c-.19-.14-.4-.27-.62-.37c.25-1.03.61-1.53 1.33-2.04c.81-.57 1.2-1.34 1.2-2.28c0-1.22-.95-2.5-2.6-2.5c-3.08 0-4.92 1.47-5.32 3.26l2.33 2.33C10.07 6.69 10 6.38 10 6c0-1.18 1.4-2 3.4-2c.57 0 .6.42.6.5c0 .27-.05.43-.35.65c-1.27.9-1.83 1.91-2.16 3.39l-.02.1l7.25 7.25c.24.06.5.11.78.11c1.22 0 2.5-.95 2.5-2.6C22 9.91 20.11 8 18 8zm1.5 6c-.27 0-.43-.05-.65-.35c-.9-1.27-1.91-1.83-3.39-2.16a3.12 3.12 0 0 0-.15-.62c1.8-.75 2.18-.87 2.69-.87c1.18 0 2 1.4 2 3.4c0 .57-.42.6-.5.6zM1.39 4.22l3.89 3.89C5.04 8.05 4.78 8 4.5 8C3.28 8 2 8.95 2 10.6C2 14.09 3.89 16 6 16c1.06 0 1.64-.29 3.91-1.19c.19.14.4.27.62.37c-.25 1.03-.61 1.53-1.33 2.04c-.81.57-1.2 1.34-1.2 2.28c0 1.22.95 2.5 2.6 2.5c3.08 0 4.92-1.47 5.32-3.26l3.86 3.86l1.41-1.41L2.81 2.81L1.39 4.22zm11.13 11.24c.03 0 .06-.02.09-.02l.97.97c.35.9.42 1.21.42 1.59c0 1.18-1.4 2-3.4 2c-.57 0-.6-.42-.6-.5c0-.27.05-.43.35-.65c1.28-.89 1.83-1.91 2.17-3.39zm-3.98-2.94c.03.22.08.42.15.62c-1.8.74-2.18.86-2.69.86c-1.18 0-2-1.4-2-3.4c0-.57.42-.6.5-.6c.27 0 .43.05.65.35c.89 1.28 1.91 1.83 3.39 2.17z"/>
  </svg>
);
OutlinedModeFanOffIcon.displayName = 'OutlinedModeFanOffIcon';
export const ModeFanOffOutlinedIcon = OutlinedModeFanOffIcon;

export const OutlinedNestCamWiredStandIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 1c-.15 0 .11-.02-4.28.42C8.47 1.75 6 4.48 6 7.75s2.47 6 5.72 6.33l1.9.19l-.56.85c-.35-.08-.7-.12-1.06-.12c-2.76 0-5 2.24-5 5v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-2c0-1.67-.83-3.15-2.09-4.06l.97-1.45c.04 0 .09.01.13.01c1.09 0 2-.89 2-2V3C18 1.89 17.09 1 16 1zm-1 20H9v-1c0-1.65 1.35-3 3-3s3 1.35 3 3v1zM8 7.75c0-2.25 1.69-4.11 3.92-4.34L16 3l.03 9.5l-4.11-.42A4.336 4.336 0 0 1 8 7.75z"/>
  </svg>
);
OutlinedNestCamWiredStandIcon.displayName = 'OutlinedNestCamWiredStandIcon';
export const NestCamWiredStandOutlinedIcon = OutlinedNestCamWiredStandIcon;

export const OutlinedOilBarrelIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9 13.05C9 14.68 10.34 16 12 16s3-1.32 3-2.95c0-1.31-.53-1.69-3-4.55c-2.48 2.88-3 3.25-3 4.55z"/><path fill={color || 'currentColor'} d="M20 13c.55 0 1-.45 1-1s-.45-1-1-1h-1V5h1c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1h1v6H4c-.55 0-1 .45-1 1s.45 1 1 1h1v6H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1h-1v-6h1zm-3 6H7v-6c.55 0 1-.45 1-1s-.45-1-1-1V5h10v6c-.55 0-1 .45-1 1s.45 1 1 1v6z"/>
  </svg>
);
OutlinedOilBarrelIcon.displayName = 'OutlinedOilBarrelIcon';
export const OilBarrelOutlinedIcon = OutlinedOilBarrelIcon;

export const OutlinedPropaneIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 6h-1V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v1H7c-3.31 0-6 2.69-6 6s2.69 6 6 6v3h2v-3h6v3h2v-3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm-7-1h4v1h-4V5zm7 11H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4z"/>
  </svg>
);
OutlinedPropaneIcon.displayName = 'OutlinedPropaneIcon';
export const PropaneOutlinedIcon = OutlinedPropaneIcon;

export const OutlinedPropaneTankIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 6.14V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2.14c-1.72.45-3 2-3 3.86v8c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-8c0-1.86-1.28-3.41-3-3.86zM9 4h6v2h-2c0-.55-.45-1-1-1s-1 .45-1 1H9V4zM8 8h8c1.1 0 2 .9 2 2v3H6v-3c0-1.1.9-2 2-2zm8 12H8c-1.1 0-2-.9-2-2v-3h12v3c0 1.1-.9 2-2 2z"/>
  </svg>
);
OutlinedPropaneTankIcon.displayName = 'OutlinedPropaneTankIcon';
export const PropaneTankOutlinedIcon = OutlinedPropaneTankIcon;

export const OutlinedRollerShadesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V3H4v16H2v2h20v-2h-2zM18 5v6H6V5h12zM6 19v-6h5v1.82A1.746 1.746 0 0 0 12 18a1.746 1.746 0 0 0 1-3.18V13h5v6H6z"/>
  </svg>
);
OutlinedRollerShadesIcon.displayName = 'OutlinedRollerShadesIcon';
export const RollerShadesOutlinedIcon = OutlinedRollerShadesIcon;

export const OutlinedRollerShadesClosedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V3H4v16H2v2h8.25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75H22v-2h-2zM18 5v10H6V5h12zM6 19v-2h5v2H6zm7 0v-2h5v2h-5z"/>
  </svg>
);
OutlinedRollerShadesClosedIcon.displayName = 'OutlinedRollerShadesClosedIcon';
export const RollerShadesClosedOutlinedIcon = OutlinedRollerShadesClosedIcon;

export const OutlinedSensorDoorIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 4v16H6V4h12m0-2H6c-1.1 0-2 .9-2 2v18h16V4c0-1.1-.9-2-2-2zm-2.5 8.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S17 12.83 17 12s-.67-1.5-1.5-1.5z"/>
  </svg>
);
OutlinedSensorDoorIcon.displayName = 'OutlinedSensorDoorIcon';
export const SensorDoorOutlinedIcon = OutlinedSensorDoorIcon;

export const OutlinedSensorOccupiedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 11c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm0 5c-1.84 0-3.56.5-5.03 1.37c-.61.35-.97 1.02-.97 1.72V17h12v-1.91c0-.7-.36-1.36-.97-1.72A9.844 9.844 0 0 0 12 12zm-3.86 3c1.18-.65 2.51-1 3.86-1s2.68.35 3.85 1H8.14zm13.09-6.85l1.85-.77A12.056 12.056 0 0 0 16.62.92l-.77 1.85c2.42 1.02 4.36 2.96 5.38 5.38zM8.15 2.77L7.38.92A12.089 12.089 0 0 0 .92 7.38l1.85.77c1.02-2.42 2.96-4.36 5.38-5.38zM2.77 15.85l-1.85.77c1.22 2.91 3.55 5.25 6.46 6.46l.77-1.85a10.117 10.117 0 0 1-5.38-5.38zm13.08 5.38l.77 1.85c2.91-1.22 5.25-3.55 6.46-6.46l-1.85-.77a10.117 10.117 0 0 1-5.38 5.38z"/>
  </svg>
);
OutlinedSensorOccupiedIcon.displayName = 'OutlinedSensorOccupiedIcon';
export const SensorOccupiedOutlinedIcon = OutlinedSensorOccupiedIcon;

export const OutlinedSensorWindowIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 2v7h-4v-1h-4v1H6V4h12zM6 20v-7h12v7H6z"/>
  </svg>
);
OutlinedSensorWindowIcon.displayName = 'OutlinedSensorWindowIcon';
export const SensorWindowOutlinedIcon = OutlinedSensorWindowIcon;

export const OutlinedShieldMoonIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83c-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25l6 2.25v4.7z"/><path fill={color || 'currentColor'} d="M9.01 14.33c1.75 2.17 5.12 2.24 6.96.07c.23-.27.08-.68-.26-.74a4.491 4.491 0 0 1-3.18-2.2a4.503 4.503 0 0 1-.32-3.86a.453.453 0 0 0-.51-.6c-3.34.62-4.89 4.61-2.69 7.33z"/>
  </svg>
);
OutlinedShieldMoonIcon.displayName = 'OutlinedShieldMoonIcon';
export const ShieldMoonOutlinedIcon = OutlinedShieldMoonIcon;

export const OutlinedSolarPowerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 12H4L2 22h20l-2-10zm-1.64 2l.4 2H13v-2h5.36zM11 14v2H5.24l.4-2H11zm-6.16 4H11v2H4.44l.4-2zM13 20v-2h6.16l.4 2H13zM11 8h2v3h-2zm4.764-.795l1.415-1.414L19.3 7.912l-1.414 1.414zm-11.059.708L6.826 5.79L8.24 7.206L6.12 9.327zM3 2h3v2H3zm15 0h3v2h-3zm-6 5c2.76 0 5-2.24 5-5h-2c0 1.65-1.35 3-3 3S9 3.65 9 2H7c0 2.76 2.24 5 5 5z"/>
  </svg>
);
OutlinedSolarPowerIcon.displayName = 'OutlinedSolarPowerIcon';
export const SolarPowerOutlinedIcon = OutlinedSolarPowerIcon;

export const OutlinedVerticalShadesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V3H4v16H2v2h20v-2h-2zM14 5v14h-4V5h4zM6 5h2v14H6V5zm10 14V5h2v14h-2z"/>
  </svg>
);
OutlinedVerticalShadesIcon.displayName = 'OutlinedVerticalShadesIcon';
export const VerticalShadesOutlinedIcon = OutlinedVerticalShadesIcon;

export const OutlinedVerticalShadesClosedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 19V3H4v16H2v2h20v-2h-2zM13 5h1.5v14H13V5zm-2 14H9.5V5H11v14zM6 5h1.5v14H6V5zm10.5 14V5H18v14h-1.5z"/>
  </svg>
);
OutlinedVerticalShadesClosedIcon.displayName = 'OutlinedVerticalShadesClosedIcon';
export const VerticalShadesClosedOutlinedIcon = OutlinedVerticalShadesClosedIcon;

export const OutlinedWindPowerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 3h6v2H4zM1 7h5v2H1zm2 12h5v2H3z"/><path fill={color || 'currentColor'} d="M22.21 18.61l-2.28-4.1a2.05 2.05 0 0 0-1.26-.97l-2.69-.67a2.95 2.95 0 0 0-.37-1.33l3.96-6.59c.65-1.08.3-2.48-.78-3.13a2.288 2.288 0 0 0-2.73.3l-3.43 3.21c-.4.37-.63.9-.63 1.45v3.4c-.47.17-.89.45-1.23.82H3.28a2.279 2.279 0 0 0-.63 4.47l4.51 1.29c.18.05.37.08.55.08c.36 0 .72-.1 1.03-.29l2.24-1.34c.29.26.63.47 1.02.61V21c-1.1 0-2 .9-2 2h6c0-1.1-.9-2-2-2v-4.28l4.61 4.61c.45.45 1.03.67 1.61.67c.58 0 1.17-.22 1.61-.67c.72-.72.88-1.83.38-2.72zM7.72 14.84L3.2 13.55a.279.279 0 0 1-.2-.27c0-.15.13-.28.28-.28h6.73c0 .15.01.3.03.44l-2.32 1.4zM13 14c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm1-3.86V6.78l3.43-3.21c.05-.05.19-.12.34-.04c.13.08.18.25.1.38l-3.74 6.24l-.13-.01zm6.42 9.78c-.05.05-.24.16-.4 0l-4.85-4.85c.08-.09.16-.18.24-.28l2.78.69l2.28 4.1c.06.11.04.25-.05.34z"/>
  </svg>
);
OutlinedWindPowerIcon.displayName = 'OutlinedWindPowerIcon';
export const WindPowerOutlinedIcon = OutlinedWindPowerIcon;
