import React from 'react';
import { IconProps } from '../../types';

export const RoundedIcon360Icon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 7C6.48 7 2 9.24 2 12c0 2.24 2.94 4.13 7 4.77v2.02c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79a.5.5 0 0 0-.85.36v1.52c-3.15-.56-5-1.9-5-2.73c0-1.06 3.04-3 8-3s8 1.94 8 3c0 .66-1.2 1.68-3.32 2.34c-.41.13-.68.51-.68.94c0 .67.65 1.16 1.28.96C20.11 15.36 22 13.79 22 12c0-2.76-4.48-5-10-5z"/>
  </svg>
);
RoundedIcon360Icon.displayName = 'RoundedIcon360Icon';
export const Icon360RoundedIcon = RoundedIcon360Icon;

export const RoundedAddBusinessIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 6h13c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1zm12 11h2v-3h.18c.63 0 1.1-.58.98-1.2l-1-5c-.09-.46-.5-.8-.98-.8H2.82c-.48 0-.89.34-.98.8l-1 5c-.12.62.35 1.2.98 1.2H2v5c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-5h4v3zm-6 1H4v-4h5v4z"/><path fill={color || 'currentColor'} d="M22 18h-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1z"/>
  </svg>
);
RoundedAddBusinessIcon.displayName = 'RoundedAddBusinessIcon';
export const AddBusinessRoundedIcon = RoundedAddBusinessIcon;

export const RoundedAddLocationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 7c0-.55-.44-1-1-1c-.55 0-1 .44-1 1v2H9c-.55 0-1 .44-1 1c0 .55.44 1 1 1h2v2c0 .55.44 1 1 1c.55 0 1-.44 1-1v-2h2c.55 0 1-.44 1-1c0-.55-.44-1-1-1h-2V7zm-1-5c4.2 0 8 3.22 8 8.2c0 3.18-2.45 6.92-7.34 11.23c-.38.33-.95.33-1.33 0C6.45 17.12 4 13.38 4 10.2C4 5.22 7.8 2 12 2z"/>
  </svg>
);
RoundedAddLocationIcon.displayName = 'RoundedAddLocationIcon';
export const AddLocationRoundedIcon = RoundedAddLocationIcon;

export const RoundedAddLocationAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 0c.55 0 1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1h-2v2c0 .55-.45 1-1 1s-1-.45-1-1V5h-2c-.55 0-1-.45-1-1s.45-1 1-1h2V1c0-.55.45-1 1-1zm-7 12c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm2.72-9.53c-.44.36-.72.91-.72 1.53c0 1.1.9 2 2 2h1v1c0 1.1.9 2 2 2c.32 0 .62-.08.89-.21c.07.45.11.92.11 1.41c0 3.18-2.45 6.92-7.34 11.23c-.38.33-.95.33-1.33 0C6.45 17.12 4 13.38 4 10.2C4 5.22 7.8 2 12 2c.94 0 1.86.16 2.72.47z"/>
  </svg>
);
RoundedAddLocationAltIcon.displayName = 'RoundedAddLocationAltIcon';
export const AddLocationAltRoundedIcon = RoundedAddLocationAltIcon;

export const RoundedAddRoadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 18v-2c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2zM19 4c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1s1-.45 1-1V5c0-.55-.45-1-1-1zM5 20c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1zm7-12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zm0 6c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zm0 6c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1z"/>
  </svg>
);
RoundedAddRoadIcon.displayName = 'RoundedAddRoadIcon';
export const AddRoadRoundedIcon = RoundedAddRoadIcon;

export const RoundedAgricultureIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.5 11.97c.93 0 1.78.28 2.5.76V7.97c0-1.1-.9-2-2-2h-6.29l-1.06-1.06l1.06-1.06c.2-.2.2-.51 0-.71s-.51-.2-.71 0l-2.83 2.83c-.2.2-.2.51 0 .71c.2.2.51.2.71 0l1.06-1.06L13 6.68v2.29c0 1.1-.9 2-2 2h-.54a5.98 5.98 0 0 1 1.54 4c0 .34-.04.67-.09 1h3.14c.25-2.24 2.14-4 4.45-4z"/><path fill={color || 'currentColor'} d="M19.5 12.97c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM4 8.97h5c0-1.1-.9-2-2-2H4c-.55 0-1 .45-1 1c0 .56.45 1 1 1zm5.83 4.82l-.18-.47l.93-.35a4.92 4.92 0 0 0-2.31-2.43l-.4.89l-.46-.21l.4-.9c-.55-.21-1.17-.35-1.81-.35c-.53 0-1.04.11-1.52.26l.34.91l-.47.18L4 10.4a4.92 4.92 0 0 0-2.43 2.31l.89.4l-.21.46l-.9-.4a4.85 4.85 0 0 0-.35 1.8c0 .53.11 1.04.26 1.52l.91-.34l.18.47l-.93.35a4.92 4.92 0 0 0 2.31 2.43l.4-.89l.46.21l-.4.9c.57.22 1.18.35 1.82.35c.53 0 1.04-.11 1.52-.26l-.35-.91l.47-.18l.35.93a4.92 4.92 0 0 0 2.43-2.31l-.89-.4l.21-.46l.9.4c.22-.57.35-1.18.35-1.82c0-.53-.11-1.04-.26-1.52l-.91.35zm-2.68 3.96c-1.53.63-3.29-.09-3.92-1.62c-.63-1.53.09-3.29 1.62-3.92c1.53-.63 3.29.09 3.92 1.62c.64 1.53-.09 3.28-1.62 3.92z"/>
  </svg>
);
RoundedAgricultureIcon.displayName = 'RoundedAgricultureIcon';
export const AgricultureRoundedIcon = RoundedAgricultureIcon;

export const RoundedAirlineStopsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15 18c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1h1c-.47-4.21-3.89-7.55-8.12-7.96A.98.98 0 0 1 2 8.05c0-.59.52-1.06 1.11-1c3.92.39 7.26 2.82 8.89 6.25c1.13-2.43 2.99-4.25 4.78-5.52l-1.92-1.92c-.32-.32-.1-.86.35-.86h5.29c.28 0 .5.22.5.5v5.29c0 .45-.54.67-.85.35L18.21 9.2c-2.28 1.58-4.76 4.1-5.21 7.8h1c.55 0 1 .45 1 1z"/>
  </svg>
);
RoundedAirlineStopsIcon.displayName = 'RoundedAirlineStopsIcon';
export const AirlineStopsRoundedIcon = RoundedAirlineStopsIcon;

export const RoundedAirlinesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.59 4h-5.01c-.99 0-1.91.49-2.47 1.3L2 20h17l2.56-13.63C21.79 5.14 20.84 4 19.59 4zM14.5 14a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"/>
  </svg>
);
RoundedAirlinesIcon.displayName = 'RoundedAirlinesIcon';
export const AirlinesRoundedIcon = RoundedAirlinesIcon;

export const RoundedAltRouteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9.78 11.16l-1.42 1.42a7.282 7.282 0 0 1-1.79-2.94l1.94-.49c.32.89.77 1.5 1.27 2.01zm.37-6.01l-2.8-2.8c-.2-.2-.51-.2-.71 0l-2.79 2.8a.5.5 0 0 0 .36.85h1.81c.02.81.08 1.54.19 2.17l1.94-.49C8.08 7.2 8.03 6.63 8.02 6H9.8a.5.5 0 0 0 .35-.85zm10 0l-2.79-2.79c-.2-.2-.51-.2-.71 0l-2.79 2.79c-.32.31-.1.85.35.85h1.78c-.1 3.68-1.28 4.75-2.54 5.88c-.5.44-1.01.92-1.45 1.55c-.34-.49-.73-.88-1.13-1.24L9.46 13.6c.93.85 1.54 1.54 1.54 3.4v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-2.02.71-2.66 1.79-3.63c1.38-1.24 3.08-2.78 3.2-7.37h1.8a.5.5 0 0 0 .36-.85z"/>
  </svg>
);
RoundedAltRouteIcon.displayName = 'RoundedAltRouteIcon';
export const AltRouteRoundedIcon = RoundedAltRouteIcon;

export const RoundedAtmIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8 9.75c0 .41.34.75.75.75h1.5v3.75c0 .41.34.75.75.75s.75-.34.75-.75V10.5h1.5c.41 0 .75-.34.75-.75S13.66 9 13.25 9h-4.5c-.41 0-.75.34-.75.75zM6 9H3c-.55 0-1 .45-1 1v4.25c0 .41.34.75.75.75s.75-.34.75-.75v-.75h2v.75c0 .41.34.75.75.75s.75-.34.75-.75V10c0-.55-.45-1-1-1zm-.5 3h-2v-1.5h2V12zM21 9h-4.5c-.55 0-1 .45-1 1v4.25c0 .41.34.75.75.75s.75-.34.75-.75V10.5h1v2.75c0 .41.34.75.75.75s.75-.34.75-.75v-2.76h1v3.76c0 .41.34.75.75.75s.75-.34.75-.75V10c0-.55-.45-1-1-1z"/>
  </svg>
);
RoundedAtmIcon.displayName = 'RoundedAtmIcon';
export const AtmRoundedIcon = RoundedAtmIcon;

export const RoundedAttractionsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10.44 18.75c.37-.46.94-.75 1.57-.75s1.19.29 1.56.75c.39-.09.76-.21 1.12-.36l-1.42-3.18a3.522 3.522 0 0 1-2.56-.02l-1.43 3.19c.37.16.75.29 1.16.37zM5.16 10a7.06 7.06 0 0 0 .08 4c.63.05 1.22.4 1.56.99c.33.57.35 1.23.11 1.79c.27.27.56.53.87.76l1.52-3.39c-.47-.58-.75-1.32-.75-2.13c0-1.89 1.55-3.41 3.46-3.41s3.46 1.53 3.46 3.41c0 .82-.29 1.57-.78 2.16l1.5 3.35c.32-.24.62-.5.9-.79c-.22-.55-.2-1.2.12-1.75c.33-.57.9-.92 1.52-.99a7.025 7.025 0 0 0 .09-4.02c-.64-.04-1.26-.39-1.6-1c-.36-.62-.35-1.36-.03-1.95c-.91-.98-2.1-1.71-3.44-2.05C13.4 5.6 12.74 6 12.01 6s-1.39-.41-1.74-1.01a7.053 7.053 0 0 0-3.44 2.03c.33.6.35 1.35-.02 1.98c-.36.62-.99.97-1.65 1zm-1.3-.42c-.78-.6-1.02-1.7-.51-2.58s1.58-1.23 2.49-.85a8.53 8.53 0 0 1 4.18-2.42c.13-.98.97-1.73 1.99-1.73s1.85.75 1.98 1.73c1.63.39 3.07 1.24 4.18 2.42a1.99 1.99 0 0 1 2.49.85c.51.88.27 1.98-.51 2.58c.23.77.35 1.58.35 2.42s-.12 1.65-.35 2.42c.78.6 1.02 1.7.51 2.58s-1.58 1.23-2.49.85c-.4.43-.85.81-1.34 1.15l.81 1.8a.854.854 0 0 1-1.56.7l-.75-1.67c-.43.18-.88.33-1.34.44c-.13.98-.97 1.73-1.98 1.73s-1.85-.75-1.98-1.73c-.48-.12-.94-.27-1.38-.46l-.76 1.69c-.14.3-.44.5-.78.5H7.1a.845.845 0 0 1-.77-1.2l.82-1.83a8.72 8.72 0 0 1-1.3-1.12c-.92.38-1.99.03-2.5-.85s-.27-1.98.51-2.58c-.24-.77-.35-1.58-.35-2.42s.11-1.65.35-2.42z"/>
  </svg>
);
RoundedAttractionsIcon.displayName = 'RoundedAttractionsIcon';
export const AttractionsRoundedIcon = RoundedAttractionsIcon;

export const RoundedBadgeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM9 12c.83 0 1.5.67 1.5 1.5S9.83 15 9 15s-1.5-.67-1.5-1.5S8.17 12 9 12zm3 6H6v-.43c0-.6.36-1.15.92-1.39c.64-.28 1.34-.43 2.08-.43s1.44.15 2.08.43c.55.24.92.78.92 1.39V18zm1-9h-2V4h2v5zm4.25 7.5h-2.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0-3h-2.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  </svg>
);
RoundedBadgeIcon.displayName = 'RoundedBadgeIcon';
export const BadgeRoundedIcon = RoundedBadgeIcon;

export const RoundedBakeryDiningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.77 8.55l-1.17-.47c-.62-.25-1.31.17-1.37.84L15.49 17H17l2.6-6.5c.31-.77-.06-1.65-.83-1.95zM6.4 8.08l-1.17.47c-.77.3-1.14 1.18-.83 1.95L7 17h1.5l-.74-8.08a.993.993 0 0 0-1.36-.84zM13.36 6h-2.71c-.89 0-1.58.76-1.5 1.64l.85 9.35h4l.85-9.36c.08-.87-.61-1.63-1.49-1.63zM3.18 13.72l-1 1.93c-.19.36-.23.78-.12 1.19c.29 1.01 1.43 1.41 2.38.94l1.05-.52l-1.4-3.49a.5.5 0 0 0-.91-.05zm18.64 1.93l-1-1.93a.503.503 0 0 0-.91.04l-1.4 3.49l1.05.52c.94.47 2.09.07 2.38-.94c.11-.4.07-.82-.12-1.18z"/>
  </svg>
);
RoundedBakeryDiningIcon.displayName = 'RoundedBakeryDiningIcon';
export const BakeryDiningRoundedIcon = RoundedBakeryDiningIcon;

export const RoundedBeenhereIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66l7.57 5.04c.34.22.77.22 1.11 0l7.56-5.04c.53-.36.88-.97.88-1.66V3c0-1.1-.9-2-2-2zm-.7 6.7l-7.59 7.59a.996.996 0 0 1-1.41 0L5.71 11.7a.996.996 0 1 1 1.41-1.41L10 13.17l6.88-6.88c.39-.39 1.02-.39 1.41 0s.4 1.02.01 1.41z"/>
  </svg>
);
RoundedBeenhereIcon.displayName = 'RoundedBeenhereIcon';
export const BeenhereRoundedIcon = RoundedBeenhereIcon;

export const RoundedBikeScooterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10 14h.74L8.82 5.56A2.009 2.009 0 0 0 6.87 4H4c-.55 0-1 .45-1 1s.45 1 1 1h2.87l1.42 6.25h-.01A6.008 6.008 0 0 0 4.09 17H0v2h6v-1c0-2.21 1.79-4 4-4zm8.75-6h-.56l-1.35-3.69A1.999 1.999 0 0 0 14.96 3H12c-.55 0-1 .45-1 1s.45 1 1 1h2.96l1.1 3H10.4l.46 2H15c-.43.58-.75 1.25-.9 2h-2.79l.46 2h2.33c.44 2.23 2.31 3.88 4.65 3.99c3.16.15 5.88-2.83 5.12-6.1C23.34 9.57 21.13 8 18.75 8zm.13 8c-1.54-.06-2.84-1.37-2.88-2.92c-.02-.96.39-1.8 1.05-2.36l.62 1.7c.19.52.76.79 1.28.6c.52-.19.79-.76.6-1.28l-.63-1.73l.01-.01A2.969 2.969 0 0 1 22 13c0 1.72-1.38 3.06-3.12 3z"/><path fill={color || 'currentColor'} d="M10 15c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedBikeScooterIcon.displayName = 'RoundedBikeScooterIcon';
export const BikeScooterRoundedIcon = RoundedBikeScooterIcon;

export const RoundedBreakfastDiningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 3H6C3.79 3 2 4.79 2 7c0 1.48.81 2.75 2 3.45V19c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8.55c1.19-.69 2-1.97 2-3.45c0-2.21-1.79-4-4-4zm-2.29 10.7l-3 3c-.39.39-1.02.39-1.42 0l-3-3a.996.996 0 0 1 0-1.41l3-3a.996.996 0 0 1 1.41 0l3 3c.4.39.4 1.02.01 1.41z"/>
  </svg>
);
RoundedBreakfastDiningIcon.displayName = 'RoundedBreakfastDiningIcon';
export const BreakfastDiningRoundedIcon = RoundedBreakfastDiningIcon;

export const RoundedBrunchDiningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 8h2V4h-2v4zm-3 14H3c-.55 0-1-.45-1-1v-1h14v1c0 .55-.45 1-1 1zm3-6.11l-.4-.42a5.788 5.788 0 0 1-1.6-4V3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v8.51c0 1.46-.54 2.87-1.53 3.94l-.47.52V20h1c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1v-5.11zM7 16v-1c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h4c.55 0 1 .45 1 1v1H2v-1c0-.55.45-1 1-1h4z"/>
  </svg>
);
RoundedBrunchDiningIcon.displayName = 'RoundedBrunchDiningIcon';
export const BrunchDiningRoundedIcon = RoundedBrunchDiningIcon;

export const RoundedBusAlertIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 11V8h7.29c-.77-2.6.21-4.61.37-4.97C2.97 2.67 2 5.02 2 7v9.5c0 .95.38 1.81 1 2.44v1.56c0 .83.67 1.5 1.5 1.5S6 21.33 6 20.5V20h8v.5c0 .82.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5v-1.56c.62-.63 1-1.49 1-2.44V13c-1.91 0-3.63-.76-4.89-2H4zm2.5 6c-.83 0-1.5-.67-1.5-1.5S5.67 14 6.5 14s1.5.67 1.5 1.5S7.33 17 6.5 17zm8.5-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/><path fill={color || 'currentColor'} d="M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zm.5 5.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3zm0 2c0 .28-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5s.5.22.5.5z"/>
  </svg>
);
RoundedBusAlertIcon.displayName = 'RoundedBusAlertIcon';
export const BusAlertRoundedIcon = RoundedBusAlertIcon;

export const RoundedCarCrashIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zm0 6c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5zm.5 1.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5s.5.22.5.5zm1 11.5c.82 0 1.5-.67 1.5-1.5v-6.18c-1.05.51-2.16.69-3.09.68c.06.16.09.33.09.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5c0-.39.15-.74.39-1.01A7.032 7.032 0 0 1 11.68 9H5.81l1.04-3H11c0-.69.1-1.37.29-2H6.5c-.66 0-1.21.42-1.42 1.01l-1.97 5.67c-.07.21-.11.43-.11.66v7.16c0 .83.67 1.5 1.5 1.5S6 19.33 6 18.5V18h12v.5c0 .83.68 1.5 1.5 1.5zm-12-5c-.83 0-1.5-.67-1.5-1.5S6.67 12 7.5 12s1.5.67 1.5 1.5S8.33 15 7.5 15z"/>
  </svg>
);
RoundedCarCrashIcon.displayName = 'RoundedCarCrashIcon';
export const CarCrashRoundedIcon = RoundedCarCrashIcon;

export const RoundedCarRentalIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8 7c1.3 0 2.41-.84 2.83-2H16v1c0 .55.45 1 1 1s1-.45 1-1V5c.55 0 1-.45 1-1s-.45-1-1-1h-7.17A3.004 3.004 0 0 0 7.4 1.06c-1.17.23-2.12 1.19-2.35 2.36C4.7 5.32 6.15 7 8 7zm0-4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm8.39 6H7.61c-.43 0-.81.28-.95.68L5 14.69V21c0 .55.45 1 1 1s1-.45 1-1v-1h10v1c0 .55.45 1 1 1s1-.45 1-1v-6.31l-1.66-5.01c-.14-.4-.52-.68-.95-.68zM9 17.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zM7.67 13l.66-2h7.34l.66 2H7.67z"/>
  </svg>
);
RoundedCarRentalIcon.displayName = 'RoundedCarRentalIcon';
export const CarRentalRoundedIcon = RoundedCarRentalIcon;

export const RoundedCarRepairIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 15v-1h10v1c0 .55.45 1 1 1s1-.45 1-1V8.69L17.44 4c-.05-.16-.12-.29-.19-.4c-.02-.02-.03-.04-.05-.07c-.38-.52-.92-.53-.92-.53H7.72s-.54.01-.92.54c-.02.02-.03.04-.05.06c-.07.11-.14.24-.19.4L5 8.69V15c0 .55.45 1 1 1s1-.45 1-1zm2-3.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zM8.33 5h7.34l.23.69l.43 1.31H7.67l.66-2zM4 18.01c0 .54.45.99.99.99H11v2.01c0 .55.45.99.99.99H12c.55 0 .99-.45.99-.99V19H19c.55 0 .99-.45.99-.99c0-.55-.45-.99-.99-.99H4.99a.986.986 0 0 0-.99.99z"/>
  </svg>
);
RoundedCarRepairIcon.displayName = 'RoundedCarRepairIcon';
export const CarRepairRoundedIcon = RoundedCarRepairIcon;

export const RoundedCastleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 9c-.55 0-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1H7V4c0-.55-.45-1-1-1s-1 .45-1 1v7H3v-1c0-.55-.45-1-1-1s-1 .45-1 1v9c0 1.1.9 2 2 2h7v-3c0-1.1.9-2 2-2s2 .9 2 2v3h7c1.1 0 2-.9 2-2v-9c0-.55-.45-1-1-1zm-11 3H9V9h2v3zm4 0h-2V9h2v3z"/>
  </svg>
);
RoundedCastleIcon.displayName = 'RoundedCastleIcon';
export const CastleRoundedIcon = RoundedCastleIcon;

export const RoundedCategoryIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11.15 3.4L7.43 9.48c-.41.66.07 1.52.85 1.52h7.43c.78 0 1.26-.86.85-1.52L12.85 3.4a.993.993 0 0 0-1.7 0z"/><circle cx="17.5" cy="17.5" r="4.5"/><path fill={color || 'currentColor'} d="M4 21.5h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1z"/>
  </svg>
);
RoundedCategoryIcon.displayName = 'RoundedCategoryIcon';
export const CategoryRoundedIcon = RoundedCategoryIcon;

export const RoundedCelebrationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3.99 21.29l9.04-3.23c1.38-.49 1.78-2.26.74-3.3l-4.53-4.53c-1.04-1.04-2.8-.64-3.3.74l-3.23 9.04c-.28.8.48 1.56 1.28 1.28zM15.06 12l5.06-5.06a1.25 1.25 0 0 1 1.77 0l.06.06c.29.29.77.29 1.06 0c.29-.29.29-.77 0-1.06l-.06-.06a2.758 2.758 0 0 0-3.89 0L14 10.94c-.29.29-.29.77 0 1.06c.29.29.77.29 1.06 0zm-5-5.12l-.06.06c-.29.29-.29.77 0 1.06c.29.29.77.29 1.06 0l.06-.06a2.758 2.758 0 0 0 0-3.89L11.07 4c-.3-.3-.78-.3-1.07 0c-.29.29-.29.77 0 1.06l.06.06c.48.48.48 1.28 0 1.76zm7 5L16 12.94c-.29.29-.29.77 0 1.06c.29.29.77.29 1.06 0l1.06-1.06a1.25 1.25 0 0 1 1.77 0l1.08 1.08c.29.29.77.29 1.06 0c.29-.29.29-.77 0-1.06l-1.08-1.08a2.758 2.758 0 0 0-3.89 0zm-2-6L12 8.94c-.29.29-.29.77 0 1.06c.29.29.77.29 1.06 0l3.06-3.06a2.758 2.758 0 0 0 0-3.89l-1.06-1.06a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.06 1.06c.48.49.48 1.29 0 1.77z"/>
  </svg>
);
RoundedCelebrationIcon.displayName = 'RoundedCelebrationIcon';
export const CelebrationRoundedIcon = RoundedCelebrationIcon;

export const RoundedChurchIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 12.22v-1.99a2 2 0 0 0-1.11-1.79L13 6.5V5h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1.5L7.11 8.45A2 2 0 0 0 6 10.24v1.99l-2.81 1.25C2.47 13.79 2 14.51 2 15.3V20c0 1.1.9 2 2 2h6v-2.89c0-1 .68-1.92 1.66-2.08A2 2 0 0 1 14 19v3h6c1.1 0 2-.9 2-2v-4.7c0-.79-.47-1.51-1.19-1.83L18 12.22zm-6 1.28c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
  </svg>
);
RoundedChurchIcon.displayName = 'RoundedChurchIcon';
export const ChurchRoundedIcon = RoundedChurchIcon;

export const RoundedCleaningServicesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 11h-1V4c0-1.66-1.34-3-3-3S9 2.34 9 4v7H8c-2.76 0-5 2.24-5 5v5c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5c0-2.76-2.24-5-5-5zm3 10h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3v5z"/>
  </svg>
);
RoundedCleaningServicesIcon.displayName = 'RoundedCleaningServicesIcon';
export const CleaningServicesRoundedIcon = RoundedCleaningServicesIcon;

export const RoundedCompassCalibrationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="12" cy="17" r="4"/><path fill={color || 'currentColor'} d="M12 3C8.49 3 5.28 4.29 2.8 6.41a1.01 1.01 0 0 0-.06 1.48l3.6 3.6c.36.36.92.39 1.32.08c1.2-.94 2.71-1.5 4.34-1.5c1.64 0 3.14.56 4.34 1.49c.4.31.96.28 1.31-.08l3.6-3.6c.42-.42.38-1.1-.07-1.48C18.72 4.28 15.51 3 12 3z"/>
  </svg>
);
RoundedCompassCalibrationIcon.displayName = 'RoundedCompassCalibrationIcon';
export const CompassCalibrationRoundedIcon = RoundedCompassCalibrationIcon;

export const RoundedConnectingAirportsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.93 10.6c.39 0 .66.37.55.74L15.4 15h2.85l.59-.78c.1-.14.26-.22.43-.22c.36 0 .62.35.52.7L19.4 16l.39 1.3c.1.35-.16.7-.52.7c-.17 0-.33-.08-.43-.22l-.59-.78H15.4l1.08 3.66c.11.37-.17.74-.55.74c-.2 0-.39-.11-.5-.28L13 17h-2.97c-.53 0-1-.4-1.03-.93c-.04-.59.43-1.07 1-1.07h3l2.43-4.12c.11-.17.3-.28.5-.28zm-7.86-8c-.39 0-.66.37-.55.74L8.6 7H5.75l-.59-.78A.526.526 0 0 0 4.73 6c-.36 0-.62.35-.52.7L4.6 8l-.39 1.3c-.1.35.16.7.52.7c.17 0 .33-.08.43-.22L5.75 9H8.6l-1.08 3.66c-.11.37.17.74.55.74c.2 0 .39-.11.5-.28L11 9h2.97c.53 0 1-.4 1.03-.93c.04-.59-.43-1.07-1-1.07h-3L8.57 2.88a.605.605 0 0 0-.5-.28z"/>
  </svg>
);
RoundedConnectingAirportsIcon.displayName = 'RoundedConnectingAirportsIcon';
export const ConnectingAirportsRoundedIcon = RoundedConnectingAirportsIcon;

export const RoundedCrisisAlertIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.5 2.5c0 1.5-1.5 6-1.5 6h-2S9.5 4 9.5 2.5a2.5 2.5 0 0 1 5 0zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm4.08-4.89c.18-.75.33-1.47.39-2.06A9.996 9.996 0 0 1 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-3.92 2.25-7.31 5.53-8.95c.07.59.21 1.32.39 2.06A8.028 8.028 0 0 0 4 12c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.93-1.58-5.49-3.92-6.89zM18 12c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2 .98-3.77 2.48-4.86c.23.81.65 2.07.65 2.07C8.43 9.93 8 10.92 8 12c0 2.21 1.79 4 4 4s4-1.79 4-4c0-1.08-.43-2.07-1.13-2.79c0 0 .41-1.22.65-2.07A5.998 5.998 0 0 1 18 12z"/>
  </svg>
);
RoundedCrisisAlertIcon.displayName = 'RoundedCrisisAlertIcon';
export const CrisisAlertRoundedIcon = RoundedCrisisAlertIcon;

export const RoundedDeliveryDiningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 7c0-1.1-.9-2-2-2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2.65L13.52 14H10v-4c0-.55-.45-1-1-1H6c-2.21 0-4 1.79-4 4v2c0 .55.45 1 1 1h1c0 1.66 1.34 3 3 3s3-1.34 3-3h3.52c.61 0 1.18-.28 1.56-.75l3.48-4.35c.29-.36.44-.8.44-1.25V7zM7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z"/><path fill={color || 'currentColor'} d="M6 6h3c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1zm13 7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedDeliveryDiningIcon.displayName = 'RoundedDeliveryDiningIcon';
export const DeliveryDiningRoundedIcon = RoundedDeliveryDiningIcon;

export const RoundedDepartureBoardIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.34 1.13c-2.94-.55-5.63.75-7.12 2.92c.01-.01.01-.02.02-.03C9.84 4 9.42 4 9 4c-4.42 0-8 .5-8 4v10c0 .88.39 1.67 1 2.22v1.28c0 .83.67 1.5 1.5 1.5S5 22.33 5 21.5V21h8v.5c0 .82.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5v-1.28c.61-.55 1-1.34 1-2.22v-3.08c3.72-.54 6.5-3.98 5.92-7.97c-.42-2.9-2.7-5.29-5.58-5.82zM4.5 19c-.83 0-1.5-.67-1.5-1.5S3.67 16 4.5 16s1.5.67 1.5 1.5S5.33 19 4.5 19zM3 13V8h6c0 1.96.81 3.73 2.11 5H3zm10.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm2.5-6c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm-.25-9c-.41 0-.75.34-.75.75v3.68c0 .35.19.68.49.86l2.52 1.51c.34.2.78.09.98-.24a.71.71 0 0 0-.25-.99L16.5 8.25v-3.5c0-.41-.34-.75-.75-.75z"/>
  </svg>
);
RoundedDepartureBoardIcon.displayName = 'RoundedDepartureBoardIcon';
export const DepartureBoardRoundedIcon = RoundedDepartureBoardIcon;

export const RoundedDesignServicesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.24 11.51l1.57-1.57l-3.75-3.75l-1.57 1.57l-4.14-4.13c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l4.13 4.13l-4.6 4.61c-.1.1-.15.22-.15.36v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15l4.62-4.62l4.13 4.13c1.32 1.32 2.76.07 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-4.13-4.12zm-7.06-.44L5.04 6.94l1.89-1.9L8.2 6.31l-.47.49a.996.996 0 1 0 1.41 1.41l.48-.48l1.45 1.45l-1.89 1.89zm7.88 7.89l-4.13-4.13l1.9-1.9l1.45 1.45l-.48.48a.996.996 0 1 0 1.41 1.41l.48-.48l1.27 1.27l-1.9 1.9zm3.65-11.92a.996.996 0 0 0 0-1.41l-2.34-2.34c-.47-.47-1.12-.29-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z"/>
  </svg>
);
RoundedDesignServicesIcon.displayName = 'RoundedDesignServicesIcon';
export const DesignServicesRoundedIcon = RoundedDesignServicesIcon;

export const RoundedDiamondIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.16 3h-.32L9.21 8.25h5.58zm4.3 5.25h5.16l-2.07-4.14A2 2 0 0 0 17.76 3h-3.93l2.63 5.25zm4.92 1.5h-8.63V20.1zM11.25 20.1V9.75H2.62zM7.54 8.25L10.16 3H6.24a2 2 0 0 0-1.79 1.11L2.38 8.25h5.16z"/>
  </svg>
);
RoundedDiamondIcon.displayName = 'RoundedDiamondIcon';
export const DiamondRoundedIcon = RoundedDiamondIcon;

export const RoundedDinnerDiningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2.85 19.85l1 1c.1.1.22.15.36.15H19.8c.13 0 .26-.05.35-.15l1-1a.5.5 0 0 0-.35-.85H3.21a.5.5 0 0 0-.36.85zM3 18h16.97c.29-3.26-2.28-6-5.48-6c-2.35 0-4.35 1.48-5.14 3.55c-.41-.23-.87-.38-1.35-.47V9h1.75C10.99 9 12 7.99 12 6.75h8.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H12C12 4.01 10.99 3 9.75 3h-6c-.41 0-.75.34-.75.75s.34.75.75.75H4v.75h-.25c-.41 0-.75.34-.75.75s.34.75.75.75H4v.75h-.25c-.41 0-.75.34-.75.75s.34.75.75.75H4v7.39c-.44.46-.78 1-1 1.61zM8 4.5h2v.75H8V4.5zm0 2.25h2v.75H8v-.75zM5.5 4.5h1v.75h-1V4.5zm0 2.25h1v.75h-1v-.75zM5.5 9h1v6.06c-.35.06-.68.17-1 .3V9z"/>
  </svg>
);
RoundedDinnerDiningIcon.displayName = 'RoundedDinnerDiningIcon';
export const DinnerDiningRoundedIcon = RoundedDinnerDiningIcon;

export const RoundedDirectionsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.71 11.29l-9-9a.996.996 0 0 0-1.41 0l-9 9a.996.996 0 0 0 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9a.996.996 0 0 0 0-1.41zM14 14.5V12h-4v2c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.55.45-1 1-1h5V7.5l3.15 3.15c.2.2.2.51 0 .71L14 14.5z"/>
  </svg>
);
RoundedDirectionsIcon.displayName = 'RoundedDirectionsIcon';
export const DirectionsRoundedIcon = RoundedDirectionsIcon;

export const RoundedDirectionsBikeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5s5-2.2 5-5s-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4l.8.8c1.06 1.06 2.38 1.78 3.96 2.02c.6.09 1.14-.39 1.14-1c0-.49-.37-.91-.85-.99c-1.11-.18-2.02-.71-2.75-1.43l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4c0 .6.2 1.1.6 1.4L11 14v4c0 .55.45 1 1 1s1-.45 1-1v-4.4c0-.52-.2-1.01-.55-1.38L10.8 10.5zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5s5-2.2 5-5s-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5z"/>
  </svg>
);
RoundedDirectionsBikeIcon.displayName = 'RoundedDirectionsBikeIcon';
export const DirectionsBikeRoundedIcon = RoundedDirectionsBikeIcon;

export const RoundedDirectionsBoatIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 21c-1.19 0-2.38-.35-3.47-.98c-.33-.19-.73-.19-1.07 0a6.825 6.825 0 0 1-6.93 0c-.33-.19-.73-.19-1.07 0c-1.08.63-2.27.98-3.46.98H3c-.55 0-1 .45-1 1s.45 1 1 1h1c1.38 0 2.74-.35 4-.99a8.752 8.752 0 0 0 8 0c1.26.65 2.62.99 4 .99h1c.55 0 1-.45 1-1s-.45-1-1-1h-1zM3.95 19H4c1.27 0 2.42-.55 3.33-1.33c.39-.34.95-.34 1.34 0C9.58 18.45 10.73 19 12 19s2.42-.55 3.33-1.33c.39-.34.95-.34 1.34 0c.91.78 2.06 1.33 3.33 1.33h.05l1.9-6.68c.11-.37.04-1.06-.66-1.28L20 10.62V6c0-1.1-.9-2-2-2h-3V2c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v2H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.63.19-.81.84-.66 1.28L3.95 19zM6 6h12v3.97L12.62 8.2c-.41-.13-.84-.13-1.25 0L6 9.97V6z"/>
  </svg>
);
RoundedDirectionsBoatIcon.displayName = 'RoundedDirectionsBoatIcon';
export const DirectionsBoatRoundedIcon = RoundedDirectionsBoatIcon;

export const RoundedDirectionsBoatFilledIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 21c-1.19 0-2.38-.35-3.47-.98c-.33-.19-.73-.19-1.07 0a6.825 6.825 0 0 1-6.93 0c-.33-.19-.73-.19-1.07 0c-1.08.63-2.27.98-3.46.98H3c-.55 0-1 .45-1 1s.45 1 1 1h1c1.38 0 2.74-.35 4-.99a8.752 8.752 0 0 0 8 0c1.26.65 2.62.99 4 .99h1c.55 0 1-.45 1-1s-.45-1-1-1h-1zM3.95 19H4c1.27 0 2.42-.55 3.33-1.33c.39-.34.95-.34 1.34 0C9.58 18.45 10.73 19 12 19s2.42-.55 3.33-1.33c.39-.34.95-.34 1.34 0c.91.78 2.06 1.33 3.33 1.33h.05l1.9-6.68c.11-.37.04-1.06-.66-1.28L20 10.62V6c0-1.1-.9-2-2-2h-3V2c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v2H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.63.19-.81.84-.66 1.28L3.95 19zM6 6h12v3.97L12.62 8.2c-.41-.13-.84-.13-1.25 0L6 9.97V6z"/>
  </svg>
);
RoundedDirectionsBoatFilledIcon.displayName = 'RoundedDirectionsBoatFilledIcon';
export const DirectionsBoatFilledRoundedIcon = RoundedDirectionsBoatFilledIcon;

export const RoundedDirectionsBusIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 16c0 .88.39 1.67 1 2.22v1.28c0 .83.67 1.5 1.5 1.5S8 20.33 8 19.5V19h8v.5c0 .82.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5v-1.28c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
  </svg>
);
RoundedDirectionsBusIcon.displayName = 'RoundedDirectionsBusIcon';
export const DirectionsBusRoundedIcon = RoundedDirectionsBusIcon;

export const RoundedDirectionsBusFilledIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2c-4 0-8 .5-8 4v9.5c0 .95.38 1.81 1 2.44v1.56c0 .83.67 1.5 1.5 1.5S8 20.33 8 19.5V19h8v.5c0 .82.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5v-1.56c.62-.63 1-1.49 1-2.44V6c0-3.5-3.58-4-8-4zM8.5 16c-.83 0-1.5-.67-1.5-1.5S7.67 13 8.5 13s1.5.67 1.5 1.5S9.33 16 8.5 16zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm2.5-6H6V7h12v3z"/>
  </svg>
);
RoundedDirectionsBusFilledIcon.displayName = 'RoundedDirectionsBusFilledIcon';
export const DirectionsBusFilledRoundedIcon = RoundedDirectionsBusFilledIcon;

export const RoundedDirectionsCarIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01l-1.97 5.67c-.07.21-.11.43-.11.66v7.16c0 .83.67 1.5 1.5 1.5S6 20.33 6 19.5V19h12v.5c0 .82.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5v-7.16c0-.22-.04-.45-.11-.66l-1.97-5.67zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM5 11l1.27-3.82c.14-.4.52-.68.95-.68h9.56c.43 0 .81.28.95.68L19 11H5z"/>
  </svg>
);
RoundedDirectionsCarIcon.displayName = 'RoundedDirectionsCarIcon';
export const DirectionsCarRoundedIcon = RoundedDirectionsCarIcon;

export const RoundedDirectionsCarFilledIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v7.5c0 .83.67 1.5 1.5 1.5S6 20.33 6 19.5V19h12v.5c0 .82.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5V12l-2.08-5.99zM7.5 16c-.83 0-1.5-.67-1.5-1.5S6.67 13 7.5 13s1.5.67 1.5 1.5S8.33 16 7.5 16zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM5.81 10l1.04-3h10.29l1.04 3H5.81z"/>
  </svg>
);
RoundedDirectionsCarFilledIcon.displayName = 'RoundedDirectionsCarFilledIcon';
export const DirectionsCarFilledRoundedIcon = RoundedDirectionsCarFilledIcon;

export const RoundedDirectionsRailwayIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4v10.5zm8 1.5c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm6-7H6V5h12v5zM4 15.5C4 17.43 5.57 19 7.5 19l-1.14 1.15c-.32.31-.1.85.35.85h10.58c.45 0 .67-.54.35-.85L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4v10.5zm8 1.5c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm6-7H6V5h12v5z"/>
  </svg>
);
RoundedDirectionsRailwayIcon.displayName = 'RoundedDirectionsRailwayIcon';
export const DirectionsRailwayRoundedIcon = RoundedDirectionsRailwayIcon;

export const RoundedDirectionsRailwayFilledIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19l-1.21.81A.649.649 0 0 0 6.65 21h10.7a.649.649 0 0 0 .36-1.19L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zm0 14c-.83 0-1.5-.67-1.5-1.5S11.17 13 12 13s1.5.67 1.5 1.5S12.83 16 12 16zm6-6H6V7h12v3z"/>
  </svg>
);
RoundedDirectionsRailwayFilledIcon.displayName = 'RoundedDirectionsRailwayFilledIcon';
export const DirectionsRailwayFilledRoundedIcon = RoundedDirectionsRailwayFilledIcon;

export const RoundedDirectionsRunIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm-3.17 12l.57-2.5l2.1 2v5c0 .55.45 1 1 1s1-.45 1-1v-5.64c0-.55-.22-1.07-.62-1.45l-1.48-1.41l.6-3a7.321 7.321 0 0 0 4.36 2.41c.6.09 1.14-.39 1.14-1c0-.49-.36-.9-.85-.98c-1.52-.25-2.78-1.15-3.45-2.33l-1-1.6c-.4-.6-1-1-1.7-1c-.3 0-.5.1-.8.1L7.21 7.76a2.01 2.01 0 0 0-1.22 1.85v2.37c0 .55.45 1 1 1s1-.45 1-1v-2.4l1.8-.7l-1.6 8.1l-3.92-.8c-.54-.11-1.07.24-1.18.78V17c-.11.54.24 1.07.78 1.18l4.11.82a2 2 0 0 0 2.34-1.52z"/>
  </svg>
);
RoundedDirectionsRunIcon.displayName = 'RoundedDirectionsRunIcon';
export const DirectionsRunRoundedIcon = RoundedDirectionsRunIcon;

export const RoundedDirectionsSubwayIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19l-1.15 1.15a.5.5 0 0 0 .36.85H17.3c.45 0 .67-.54.35-.85L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z"/>
  </svg>
);
RoundedDirectionsSubwayIcon.displayName = 'RoundedDirectionsSubwayIcon';
export const DirectionsSubwayRoundedIcon = RoundedDirectionsSubwayIcon;

export const RoundedDirectionsSubwayFilledIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19l-1.21.81A.649.649 0 0 0 6.65 21h10.7a.649.649 0 0 0 .36-1.19L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM8.5 16c-.83 0-1.5-.67-1.5-1.5S7.67 13 8.5 13s1.5.67 1.5 1.5S9.33 16 8.5 16zm2.5-6H6V7h5v3zm4.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm2.5-6h-5V7h5v3z"/>
  </svg>
);
RoundedDirectionsSubwayFilledIcon.displayName = 'RoundedDirectionsSubwayFilledIcon';
export const DirectionsSubwayFilledRoundedIcon = RoundedDirectionsSubwayFilledIcon;

export const RoundedDirectionsTransitIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19l-1.15 1.15a.5.5 0 0 0 .36.85H17.3c.45 0 .67-.54.35-.85L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z"/>
  </svg>
);
RoundedDirectionsTransitIcon.displayName = 'RoundedDirectionsTransitIcon';
export const DirectionsTransitRoundedIcon = RoundedDirectionsTransitIcon;

export const RoundedDirectionsTransitFilledIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19l-1.21.81A.649.649 0 0 0 6.65 21h10.7a.649.649 0 0 0 .36-1.19L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM8.5 16c-.83 0-1.5-.67-1.5-1.5S7.67 13 8.5 13s1.5.67 1.5 1.5S9.33 16 8.5 16zm2.5-6H6V7h5v3zm4.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm2.5-6h-5V7h5v3z"/>
  </svg>
);
RoundedDirectionsTransitFilledIcon.displayName = 'RoundedDirectionsTransitFilledIcon';
export const DirectionsTransitFilledRoundedIcon = RoundedDirectionsTransitFilledIcon;

export const RoundedDirectionsWalkIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zM9.8 8.9L7.24 21.81c-.13.61.35 1.19.98 1.19h.08c.47 0 .87-.32.98-.78L10.9 15l2.1 2v5c0 .55.45 1 1 1s1-.45 1-1v-5.64c0-.55-.22-1.07-.62-1.45L12.9 13.5l.6-3a7.321 7.321 0 0 0 4.36 2.41c.6.09 1.14-.39 1.14-1c0-.49-.36-.9-.85-.98c-1.52-.25-2.78-1.15-3.45-2.33l-1-1.6a2.145 2.145 0 0 0-2.65-.84L7.22 7.78A2.01 2.01 0 0 0 6 9.63V12c0 .55.45 1 1 1s1-.45 1-1V9.6l1.8-.7"/>
  </svg>
);
RoundedDirectionsWalkIcon.displayName = 'RoundedDirectionsWalkIcon';
export const DirectionsWalkRoundedIcon = RoundedDirectionsWalkIcon;

export const RoundedDryCleaningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.56 11.36L13 8.44V7c0-.55-.45-1-1-1s-1-.45-1-1s.45-1 1-1c.38 0 .72.22.88.53c.16.31.51.47.85.47c.74 0 1.26-.79.91-1.44c-.6-1.1-1.86-1.78-3.24-1.51c-1.17.23-2.12 1.2-2.34 2.37c-.29 1.56.61 2.93 1.94 3.4v.63l-6.56 2.92c-.88.38-1.44 1.25-1.44 2.2v.01C3 14.92 4.08 16 5.42 16H7v4c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-4h1.58c1.34 0 2.42-1.08 2.42-2.42v-.01c0-.95-.56-1.82-1.44-2.21zM18.58 14h-1.86c-.35-.6-.98-1-1.72-1H9c-.74 0-1.38.4-1.72 1H5.42c-.46 0-.58-.65-.17-.81l6.75-3l6.75 3c.42.19.28.81-.17.81z"/>
  </svg>
);
RoundedDryCleaningIcon.displayName = 'RoundedDryCleaningIcon';
export const DryCleaningRoundedIcon = RoundedDryCleaningIcon;

export const RoundedEditAttributesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.63 7H6.37C3.96 7 2 9.24 2 12s1.96 5 4.37 5h11.26c2.41 0 4.37-2.24 4.37-5s-1.96-5-4.37-5zm-6.52 3.6L7.6 14.11a.485.485 0 0 1-.7 0l-1.86-1.86c-.2-.2-.2-.51 0-.71s.51-.2.71 0l1.51 1.51l3.16-3.16c.2-.2.51-.2.71 0s.17.51-.02.71z"/>
  </svg>
);
RoundedEditAttributesIcon.displayName = 'RoundedEditAttributesIcon';
export const EditAttributesRoundedIcon = RoundedEditAttributesIcon;

export const RoundedEditLocationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2c-4.2 0-8 3.22-8 8.2c0 3.18 2.45 6.92 7.34 11.23c.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2C20 5.22 16.2 2 12 2zM9.73 13.5H8.5v-1.44l3.93-3.92l1.43 1.43l-3.77 3.78c-.1.1-.22.15-.36.15zm5.55-5.34l-.7.7l-1.44-1.44l.7-.7a.38.38 0 0 1 .54 0l.9.9c.15.15.15.39 0 .54z"/>
  </svg>
);
RoundedEditLocationIcon.displayName = 'RoundedEditLocationIcon';
export const EditLocationRoundedIcon = RoundedEditLocationIcon;

export const RoundedEditLocationAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13.54 13H10c-.55 0-1-.45-1-1V8.46c0-.26.11-.52.29-.7l5.32-5.32A8.17 8.17 0 0 0 12 2c-4.2 0-8 3.22-8 8.2c0 3.18 2.44 6.92 7.33 11.22c.38.33.96.33 1.34 0C17.56 17.12 20 13.37 20 10.2c0-1.01-.16-1.94-.45-2.8l-5.31 5.31c-.18.18-.44.29-.7.29z"/><path fill={color || 'currentColor'} d="M11 11h2.12l6.16-6.16l-2.12-2.12L11 8.88zm9.71-9L20 1.29a.996.996 0 0 0-1.41 0l-.72.72l2.12 2.12l.72-.72a.996.996 0 0 0 0-1.41z"/>
  </svg>
);
RoundedEditLocationAltIcon.displayName = 'RoundedEditLocationAltIcon';
export const EditLocationAltRoundedIcon = RoundedEditLocationAltIcon;

export const RoundedEditRoadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 4c-.55 0-1 .45-1 1v6.9l2-2V5c0-.55-.45-1-1-1zM5 20c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1zm6-12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zm0 6c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zm0 6c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zm11.56-7.41l-1.15-1.15a1.49 1.49 0 0 0-2.12 0L14 16.73v2.77c0 .28.22.5.5.5h2.77l5.29-5.29c.59-.59.59-1.54 0-2.12zm-5.98 5.86h-1.03v-1.03L19 13.97L20.03 15l-3.45 3.45z"/>
  </svg>
);
RoundedEditRoadIcon.displayName = 'RoundedEditRoadIcon';
export const EditRoadRoundedIcon = RoundedEditRoadIcon;

export const RoundedEggIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 3C8.5 3 5 9.33 5 14c0 3.87 3.13 7 7 7s7-3.13 7-7c0-4.67-3.5-11-7-11zm1 15c-3 0-5-1.99-5-5c0-.55.45-1 1-1s1 .45 1 1c0 2.92 2.42 3 3 3c.55 0 1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedEggIcon.displayName = 'RoundedEggIcon';
export const EggRoundedIcon = RoundedEggIcon;

export const RoundedEggAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 9c-2-2-3.01-7-9.03-7C4.95 2 1.94 6 2 11.52C2.06 17.04 6.96 19 9.97 19c2.01 0 2.01 3 6.02 3C19 22 22 19 22 15.02C22 12 21.01 11 19 9zm-7 6.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5z"/>
  </svg>
);
RoundedEggAltIcon.displayName = 'RoundedEggAltIcon';
export const EggAltRoundedIcon = RoundedEggAltIcon;

export const RoundedElectricBikeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 7h-.82l-1.7-4.68A2.008 2.008 0 0 0 14.6 1H13c-.55 0-1 .45-1 1s.45 1 1 1h1.6l1.46 4h-4.81l-.36-1h.09c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1h.75l1.82 5H9.9c-.44-2.23-2.31-3.88-4.65-3.99C2.45 6.87 0 9.2 0 12c0 2.8 2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h4.2c.44 2.23 2.31 3.88 4.65 3.99c2.8.13 5.25-2.19 5.25-5C24 9.2 21.8 7 19 7zM6 13h1.82c-.42 1.23-1.6 2.08-3.02 1.99c-1.49-.09-2.73-1.35-2.8-2.85C1.93 10.39 3.27 9 5 9c1.33 0 2.42.83 2.82 2H6c-.55 0-1 .45-1 1s.45 1 1 1zm8.1-2h-1.4l-.73-2H15c-.44.58-.76 1.25-.9 2zm4.78 4c-1.54-.06-2.84-1.37-2.88-2.92c-.02-.96.39-1.8 1.05-2.36l.62 1.7c.19.52.76.79 1.28.6c.52-.19.79-.76.6-1.28l-.63-1.73l.01-.01A2.969 2.969 0 0 1 22 12c0 1.72-1.38 3.06-3.12 3zM11 20H7l6 3v-2h4l-6-3z"/>
  </svg>
);
RoundedElectricBikeIcon.displayName = 'RoundedElectricBikeIcon';
export const ElectricBikeRoundedIcon = RoundedElectricBikeIcon;

export const RoundedElectricCarIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.92 2.01C18.72 1.42 18.16 1 17.5 1h-11c-.66 0-1.21.42-1.42 1.01L3.11 7.68c-.07.21-.11.43-.11.66v7.16c0 .83.67 1.5 1.5 1.5S6 16.33 6 15.5V15h12v.5c0 .82.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5V8.34c0-.22-.04-.45-.11-.66l-1.97-5.67zM6.5 12c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9S8 9.67 8 10.5S7.33 12 6.5 12zm11 0c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM5 7l1.27-3.82c.14-.4.52-.68.95-.68h9.56c.43 0 .81.28.95.68L19 7H5zm2 13h4v-2l6 3h-4v2z"/>
  </svg>
);
RoundedElectricCarIcon.displayName = 'RoundedElectricCarIcon';
export const ElectricCarRoundedIcon = RoundedElectricCarIcon;

export const RoundedElectricMopedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 5c0-1.1-.9-2-2-2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2.65L13.52 12H10V8c0-.55-.45-1-1-1H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 8.35V5zM7 15c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z"/><path fill={color || 'currentColor'} d="M9 4H6c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm10 7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zM7 20h4v-2l6 3h-4v2z"/>
  </svg>
);
RoundedElectricMopedIcon.displayName = 'RoundedElectricMopedIcon';
export const ElectricMopedRoundedIcon = RoundedElectricMopedIcon;

export const RoundedElectricRickshawIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 11.18V9.72c0-.47-.16-.92-.46-1.28L16.6 3.72c-.38-.46-.94-.72-1.54-.72H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h.18C3.6 16.16 4.7 17 6 17s2.4-.84 2.82-2h8.37a2.996 2.996 0 0 0 5.82-1c-.01-1.3-.85-2.4-2.01-2.82zM18.4 9H16V6.12L18.4 9zM4 5h3v4H3V6c0-.55.45-1 1-1zm2 10c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm3-2v-2h2c.55 0 1-.45 1-1s-.45-1-1-1H9V5h4c.55 0 1 .45 1 1v7H9zm11 2c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zM7 20h4v-2l6 3h-4v2z"/>
  </svg>
);
RoundedElectricRickshawIcon.displayName = 'RoundedElectricRickshawIcon';
export const ElectricRickshawRoundedIcon = RoundedElectricRickshawIcon;

export const RoundedElectricScooterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7.82 16H15v-1c0-2.21 1.79-4 4-4h.74l-1.9-8.44A2.009 2.009 0 0 0 15.89 1H13c-.55 0-1 .45-1 1s.45 1 1 1h2.89l1.4 6.25h-.01A6.008 6.008 0 0 0 13.09 14H7.82a2.996 2.996 0 0 0-3.42-1.94c-1.18.23-2.13 1.2-2.35 2.38A3.002 3.002 0 0 0 5 18c1.3 0 2.4-.84 2.82-2zM5 16c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/><path fill={color || 'currentColor'} d="M19 12c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm-8 4H7l6 3v-2h4l-6-3z"/>
  </svg>
);
RoundedElectricScooterIcon.displayName = 'RoundedElectricScooterIcon';
export const ElectricScooterRoundedIcon = RoundedElectricScooterIcon;

export const RoundedElectricalServicesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 14c0-.55-.45-1-1-1h-2v2h2c.55 0 1-.45 1-1zm-1 3h-2v2h2c.55 0 1-.45 1-1s-.45-1-1-1zm-4-5h-2c-1.1 0-2 .9-2 2h-1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h1c0 1.1.9 2 2 2h2c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM5 13c0-1.1.9-2 2-2h1.5c1.93 0 3.5-1.57 3.5-3.5S10.43 4 8.5 4H5c-.55 0-1 .45-1 1s.45 1 1 1h3.5c.83 0 1.5.67 1.5 1.5S9.33 9 8.5 9H7c-2.21 0-4 1.79-4 4s1.79 4 4 4h2v-2H7c-1.1 0-2-.9-2-2z"/>
  </svg>
);
RoundedElectricalServicesIcon.displayName = 'RoundedElectricalServicesIcon';
export const ElectricalServicesRoundedIcon = RoundedElectricalServicesIcon;

export const RoundedEmergencyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20.29 8.37l-1-1.73a1.01 1.01 0 0 0-1.37-.37L14 8.54V4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v4.54L6.07 6.27a.993.993 0 0 0-1.36.36l-1 1.73c-.28.48-.12 1.1.36 1.37L8 12l-3.93 2.27c-.48.28-.64.89-.37 1.37l1 1.73c.28.48.89.64 1.37.37L10 15.46V20c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-4.54l3.93 2.27c.48.28 1.09.11 1.37-.37l1-1.73c.28-.48.11-1.09-.37-1.37L16 12l3.93-2.27c.48-.27.64-.89.36-1.36z"/>
  </svg>
);
RoundedEmergencyIcon.displayName = 'RoundedEmergencyIcon';
export const EmergencyRoundedIcon = RoundedEmergencyIcon;

export const RoundedEmergencyRecordingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 10.48V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.48l3.15 3.13c.31.32.85.09.85-.35V7.7c0-.44-.54-.67-.85-.35L18 10.48zm-3.5 4.12c-.28.48-.89.64-1.37.37L11 13.73V16c0 .55-.45 1-1 1s-1-.45-1-1v-2.27l-2.13 1.23c-.48.28-1.09.11-1.37-.37s-.11-1.09.37-1.37L8 12l-2.13-1.23c-.48-.28-.65-.89-.37-1.37c.28-.48.89-.64 1.37-.37L9 10.27V8c0-.55.45-1 1-1s1 .45 1 1v2.27l2.13-1.23c.48-.28 1.09-.11 1.37.37s.11 1.09-.37 1.37L12 12l2.13 1.23c.48.28.65.89.37 1.37z"/>
  </svg>
);
RoundedEmergencyRecordingIcon.displayName = 'RoundedEmergencyRecordingIcon';
export const EmergencyRecordingRoundedIcon = RoundedEmergencyRecordingIcon;

export const RoundedEmergencyShareIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 9c-3.15 0-6 2.41-6 6.15c0 2.35 1.78 5.11 5.34 8.27c.37.33.95.33 1.33 0C16.22 20.25 18 17.5 18 15.15C18 11.41 15.15 9 12 9zm0 7.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm4.18-9.68c-.35.35-.89.38-1.3.09C14.07 6.34 13.07 6 12 6s-2.07.34-2.88.91c-.41.28-.95.26-1.3-.09c-.43-.43-.39-1.15.09-1.5C9.06 4.49 10.48 4 12 4s2.94.49 4.09 1.32c.49.35.52 1.07.09 1.5zM4.97 3.97c-.42-.43-.38-1.12.08-1.5C6.95.93 9.37 0 12.01 0c2.64 0 5.06.93 6.95 2.48c.46.38.5 1.07.08 1.49c-.36.36-.93.39-1.32.07a9.027 9.027 0 0 0-11.43 0c-.39.32-.96.28-1.32-.07z"/>
  </svg>
);
RoundedEmergencyShareIcon.displayName = 'RoundedEmergencyShareIcon';
export const EmergencyShareRoundedIcon = RoundedEmergencyShareIcon;

export const RoundedEvStationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.77 7.23l.01-.01l-3.19-3.19a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.58 1.58c-1.05.4-1.76 1.47-1.58 2.71c.16 1.1 1.1 1.99 2.2 2.11c.47.05.88-.03 1.27-.2v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v15c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-6.5h1.5v4.86c0 1.31.94 2.5 2.24 2.63a2.5 2.5 0 0 0 2.76-2.49V9c0-.69-.28-1.32-.73-1.77zM18 10c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zM8 16.12V13.5H6.83a.5.5 0 0 1-.44-.74l2.67-5c.24-.45.94-.28.94.24v3h1.14a.5.5 0 0 1 .43.75l-2.64 4.62c-.25.44-.93.26-.93-.25z"/>
  </svg>
);
RoundedEvStationIcon.displayName = 'RoundedEvStationIcon';
export const EvStationRoundedIcon = RoundedEvStationIcon;

export const RoundedFactoryIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 10V8.48c0-.71-.71-1.19-1.37-.93L9 9v-.48c0-.72-.73-1.21-1.39-.92l-4.4 1.88C2.48 9.8 2 10.52 2 11.32V20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10h-8zm-5 7c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2zm4 0c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2zm4 0c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2zm3.12-15h-1.23c-.51 0-.93.38-.99.88l-.7 5.62h4.6l-.69-5.62c-.06-.5-.49-.88-.99-.88z"/>
  </svg>
);
RoundedFactoryIcon.displayName = 'RoundedFactoryIcon';
export const FactoryRoundedIcon = RoundedFactoryIcon;

export const RoundedFastfoodIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.9 5H18V2c0-.55-.45-1-1-1s-1 .45-1 1v3h-3.9c-.59 0-1.05.51-1 1.1l.12 1.21C14.9 8.16 18 10.77 18 15l.02 8h1.7c.84 0 1.53-.65 1.63-1.47L22.89 6.1c.06-.59-.4-1.1-.99-1.1zM15 21H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1zM2.1 15h12.8c.62 0 1.11-.56.99-1.16c-.65-3.23-4.02-4.85-7.39-4.85s-6.73 1.62-7.39 4.85c-.12.6.38 1.16.99 1.16zM15 17H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1z"/>
  </svg>
);
RoundedFastfoodIcon.displayName = 'RoundedFastfoodIcon';
export const FastfoodRoundedIcon = RoundedFastfoodIcon;

export const RoundedFestivalIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M23 11v-.61c0-.8-.48-1.54-1.23-1.84c-3.65-1.48-6.81-3.93-8.48-5.37c-.74-.64-1.84-.64-2.58 0c-1.68 1.44-4.83 3.88-8.48 5.37A1.97 1.97 0 0 0 1 10.39V11c0 1.49.93 2.75 2.24 3.26c-.03 1.68-.16 3.55-.52 5.29c-.26 1.26.66 2.45 1.95 2.45h14.67c1.29 0 2.21-1.19 1.95-2.45c-.36-1.75-.5-3.62-.52-5.29C22.07 13.75 23 12.49 23 11zM12 4.71c1.33 1.14 3.49 2.84 6.11 4.29H5.89C8.51 7.55 10.67 5.85 12 4.71zM13 11h3c0 .83-.67 1.5-1.5 1.5S13 11.83 13 11zm-3.5 1.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5zM6 11c0 .83-.67 1.5-1.5 1.5S3 11.83 3 11h3zm-1.34 9c.39-1.86.54-3.82.57-5.58c.68-.15 1.29-.49 1.76-.98c.25.25.54.45.85.62c-.1 1.87-.26 4-.52 5.93H4.66zm4.69 0c.24-1.83.39-3.78.48-5.53c.84-.08 1.61-.45 2.17-1.02c.56.57 1.32.94 2.17 1.02c.1 1.75.24 3.7.48 5.53h-5.3zm7.32 0c-.27-1.94-.43-4.07-.52-5.93c.31-.17.61-.37.85-.62c.47.48 1.08.83 1.76.98c.03 1.76.18 3.72.57 5.58h-2.66zm2.83-7.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5z"/>
  </svg>
);
RoundedFestivalIcon.displayName = 'RoundedFestivalIcon';
export const FestivalRoundedIcon = RoundedFestivalIcon;

export const RoundedFireHydrantAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 11h-1V8h1c.55 0 1-.45 1-1s-.45-1-1-1h-1.35a5.99 5.99 0 0 0-11.3 0H5c-.55 0-1 .45-1 1s.45 1 1 1h1v3H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v3H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1h-1v-3h1c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm-7 6.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5z"/><circle cx="12" cy="14" r="1.5"/>
  </svg>
);
RoundedFireHydrantAltIcon.displayName = 'RoundedFireHydrantAltIcon';
export const FireHydrantAltRoundedIcon = RoundedFireHydrantAltIcon;

export const RoundedFireTruckIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22.9 10.69l-1.44-4.32A2.01 2.01 0 0 0 19.56 5H19V4c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1h-2c-1.1 0-2 .9-2 2v4H3c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h1c1.1 0 2-.9 2-2v-4.68c0-.21-.03-.42-.1-.63zM7 19c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm-3-8V7h5.56l1.33 4H14z"/><path fill={color || 'currentColor'} d="M10.25 8.5H10v-2h.25c.41 0 .75-.34.75-.75S10.66 5 10.25 5h-8.5c-.41 0-.75.34-.75.75s.34.75.75.75H2v2h-.25c-.41 0-.75.34-.75.75s.34.75.75.75h8.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zm-5 0H3.5v-2h1.75v2zm3.25 0H6.75v-2H8.5v2z"/>
  </svg>
);
RoundedFireTruckIcon.displayName = 'RoundedFireTruckIcon';
export const FireTruckRoundedIcon = RoundedFireTruckIcon;

export const RoundedFlightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 14.58c0-.36-.19-.69-.49-.89L13 9V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-7.51 4.69a1.05 1.05 0 0 0 .87 1.89L10 13.5V19l-1.8 1.35a.48.48 0 0 0-.2.4v.59c0 .33.32.57.64.48L11.5 21l2.86.82c.32.09.64-.15.64-.48v-.59a.48.48 0 0 0-.2-.4L13 19v-5.5l6.64 2.08c.68.21 1.36-.3 1.36-1z"/>
  </svg>
);
RoundedFlightIcon.displayName = 'RoundedFlightIcon';
export const FlightRoundedIcon = RoundedFlightIcon;

export const RoundedFlightClassIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 4h-2c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM6 4c.55 0 1 .45 1 1v3l2.5 8H17c.55 0 1 .45 1 1s-.45 1-1 1H9.49c-.88 0-1.66-.58-1.92-1.43L5.08 8.28A2.24 2.24 0 0 1 5 7.71V5c0-.55.45-1 1-1zm12 16c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1z"/>
  </svg>
);
RoundedFlightClassIcon.displayName = 'RoundedFlightClassIcon';
export const FlightClassRoundedIcon = RoundedFlightClassIcon;

export const RoundedForestIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.14 12h-.06c.81 0 1.28-.91.82-1.57L9.82 3.17a1 1 0 0 0-1.64 0L3.1 10.43c-.46.66.01 1.57.82 1.57h-.06L.99 16.46c-.43.66.05 1.54.84 1.54H7v2c0 1.1.9 2 2 2s2-.9 2-2v-2h5.17c.79 0 1.27-.88.84-1.54L14.14 12z"/><path fill={color || 'currentColor'} d="M23.01 16.46L20.14 12h-.06c.81 0 1.28-.91.82-1.57l-5.08-7.26a1 1 0 0 0-1.64 0l-1.57 2.24l3.11 4.44a2.004 2.004 0 0 1-.16 2.5l2.29 3.57c.4.62.42 1.4.07 2.04c-.01.02-.02.03-.03.04h4.28c.79 0 1.27-.88.84-1.54zM13 20c0 1.1.9 2 2 2s2-.9 2-2v-1h-4v1z"/>
  </svg>
);
RoundedForestIcon.displayName = 'RoundedForestIcon';
export const ForestRoundedIcon = RoundedForestIcon;

export const RoundedForkLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15 20c0 .55-.45 1-1 1s-1-.45-1-1v-3c-.73-2.58-3.07-3.47-5.17-3l.88.88a.996.996 0 1 1-1.41 1.41L4.71 13.7a.996.996 0 0 1 0-1.41L7.3 9.7a.996.996 0 1 1 1.41 1.41l-.88.89c1.51-.33 3.73.08 5.17 1.36V6.83l-.88.88a.996.996 0 1 1-1.41-1.41l2.59-2.59a.996.996 0 0 1 1.41 0L17.3 6.3a.996.996 0 1 1-1.41 1.41L15 6.83V20z"/>
  </svg>
);
RoundedForkLeftIcon.displayName = 'RoundedForkLeftIcon';
export const ForkLeftRoundedIcon = RoundedForkLeftIcon;

export const RoundedForkRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9 20c0 .55.45 1 1 1s1-.45 1-1v-3c.73-2.58 3.07-3.47 5.17-3l-.88.88a.996.996 0 1 0 1.41 1.41l2.59-2.59a.996.996 0 0 0 0-1.41L16.7 9.7a.996.996 0 1 0-1.41 1.41l.88.89c-1.51-.33-3.73.08-5.17 1.36V6.83l.88.88a.996.996 0 1 0 1.41-1.41L10.7 3.71a.996.996 0 0 0-1.41 0L6.71 6.29A.996.996 0 1 0 8.12 7.7L9 6.83V20z"/>
  </svg>
);
RoundedForkRightIcon.displayName = 'RoundedForkRightIcon';
export const ForkRightRoundedIcon = RoundedForkRightIcon;

export const RoundedFortIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 4v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v2.17c0 .53.21 1.04.59 1.41L15 9v1H9V9l1.41-1.41c.38-.38.59-.89.59-1.42V4c0-.55-.45-1-1-1s-1 .45-1 1v1H7V4c0-.55-.45-1-1-1s-1 .45-1 1v1H3V4c0-.55-.45-1-1-1s-1 .45-1 1v2.17c0 .53.21 1.04.59 1.42L3 9v6l-1.41 1.41c-.38.38-.59.89-.59 1.42V19c0 1.1.9 2 2 2h7v-2.89c0-1 .68-1.92 1.66-2.08A2 2 0 0 1 14 18v3h7c1.1 0 2-.9 2-2v-1.17c0-.53-.21-1.04-.59-1.41L21 15V9l1.41-1.41c.38-.38.59-.89.59-1.42V4c0-.55-.45-1-1-1s-1 .45-1 1z"/>
  </svg>
);
RoundedFortIcon.displayName = 'RoundedFortIcon';
export const FortRoundedIcon = RoundedFortIcon;

export const RoundedHailIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm5.95-4a1 1 0 0 1 1 1.09c-.02.15-.21 4.06-3.95 5.31V21c0 .55-.45 1-1 1s-1-.45-1-1v-5h-2v5c0 .55-.45 1-1 1s-1-.45-1-1V10.1c-.3.1-.5.2-.6.3c-.46.36-1.17.87-1.36 2.67c-.05.52-.47.93-1 .93a.995.995 0 0 1-1-1.07c.13-1.6.62-2.98 2.07-4.22C8.21 7.81 10 7 12 7s2.68-.46 3.48-1.06c.43-.34 1.28-.99 1.48-3.02a1 1 0 0 1 .99-.92zM5 16h1c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1z"/>
  </svg>
);
RoundedHailIcon.displayName = 'RoundedHailIcon';
export const HailRoundedIcon = RoundedHailIcon;

export const RoundedHandymanIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.67 18.17l-4.72-4.72c-.48-.48-.99-.59-1.58-.59l-2.54 2.54c0 .59.11 1.11.59 1.58l4.72 4.72c.39.39 1.02.39 1.41 0l2.12-2.12a.996.996 0 0 0 0-1.41z"/><path fill={color || 'currentColor'} d="M16.63 9.49c.39.39 1.02.39 1.41 0l.71-.71l2.12 2.12a3 3 0 0 0 0-4.24l-2.83-2.83a.996.996 0 0 0-1.41 0l-.71.71V2c0-.62-.76-.95-1.21-.5l-2.54 2.54c-.45.45-.12 1.21.5 1.21h2.54l-.71.71a.996.996 0 0 0 0 1.41l.35.35l-2.89 2.89l-4.11-4.13v-1c0-.27-.11-.52-.29-.71L5.54 2.74a.996.996 0 0 0-1.41 0L2.71 4.16a.996.996 0 0 0 0 1.41L4.73 7.6c.19.19.44.29.71.29h1l4.13 4.13l-.85.85h-1.3c-.53 0-1.04.21-1.41.59l-4.72 4.72a.996.996 0 0 0 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0l4.72-4.72c.38-.38.59-.88.59-1.41v-1.29l5.15-5.15l.35.35z"/>
  </svg>
);
RoundedHandymanIcon.displayName = 'RoundedHandymanIcon';
export const HandymanRoundedIcon = RoundedHandymanIcon;

export const RoundedHardwareIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.59 3.41L15 6V5c0-1.1-.9-2-2-2H9C6.24 3 4 5.24 4 8h5v3h6V8l2.59 2.59c.26.26.62.41 1 .41h.01c.77 0 1.4-.63 1.4-1.41V4.41C20 3.63 19.37 3 18.59 3h-.01c-.37 0-.73.15-.99.41zM9 13v7c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-7H9z"/>
  </svg>
);
RoundedHardwareIcon.displayName = 'RoundedHardwareIcon';
export const HardwareRoundedIcon = RoundedHardwareIcon;

export const RoundedHomeRepairServiceIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 16c-.55 0-1-.45-1-1H8c0 .55-.45 1-1 1s-1-.45-1-1H2v3c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3h-4c0 .55-.45 1-1 1zm3-8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v4h4v-1c0-.55.45-1 1-1s1 .45 1 1v1h8v-1c0-.55.45-1 1-1s1 .45 1 1v1h4v-4c0-1.1-.9-2-2-2zm-5 0H9V6h6v2z"/>
  </svg>
);
RoundedHomeRepairServiceIcon.displayName = 'RoundedHomeRepairServiceIcon';
export const HomeRepairServiceRoundedIcon = RoundedHomeRepairServiceIcon;

export const RoundedHotelIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3s1.34 3 3 3zm12-6h-6c-1.1 0-2 .9-2 2v5H3V6c0-.55-.45-1-1-1s-1 .45-1 1v13c0 .55.45 1 1 1s1-.45 1-1v-2h18v2c0 .55.45 1 1 1s1-.45 1-1v-8c0-2.21-1.79-4-4-4z"/>
  </svg>
);
RoundedHotelIcon.displayName = 'RoundedHotelIcon';
export const HotelRoundedIcon = RoundedHotelIcon;

export const RoundedHvacIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 16c1.01 0 1.91-.39 2.62-1H9.38c.71.61 1.61 1 2.62 1zm-3.44-2h6.89c.26-.45.44-.96.51-1.5h-7.9c.06.54.23 1.05.5 1.5zM12 8c-1.01 0-1.91.39-2.62 1h5.24c-.71-.61-1.61-1-2.62-1zm-3.44 2c-.26.45-.44.96-.51 1.5h7.9c-.07-.54-.24-1.05-.51-1.5H8.56z"/><path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6z"/>
  </svg>
);
RoundedHvacIcon.displayName = 'RoundedHvacIcon';
export const HvacRoundedIcon = RoundedHvacIcon;

export const RoundedIcecreamIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.38 6.24C17.79 3.24 15.14 1 12 1S6.21 3.24 5.62 6.24A4.014 4.014 0 0 0 3 10c0 2.21 1.79 4 4 4c.12 0 .23-.02.34-.02l3.83 7.31c.38.72 1.41.71 1.78-.01l3.73-7.31c.11.01.21.03.32.03c2.21 0 4-1.79 4-4c0-1.71-1.08-3.19-2.62-3.76zm-6.33 12.39l-2.73-5.21a6.468 6.468 0 0 0 5.4-.02l-2.67 5.23z"/>
  </svg>
);
RoundedIcecreamIcon.displayName = 'RoundedIcecreamIcon';
export const IcecreamRoundedIcon = RoundedIcecreamIcon;

export const RoundedKebabDiningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7.75 13v1h.75a2.5 2.5 0 0 1 0 5h-.75v3.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V19H5.5a2.5 2.5 0 0 1 0-5h.75v-1H4c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h2.25V7H5.5a2.5 2.5 0 0 1 0-5h.75v-.25c0-.41.34-.75.75-.75s.75.34.75.75V2h.75a2.5 2.5 0 0 1 0 5h-.75v1H10c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1H7.75zm10 0v1h.75a2.5 2.5 0 0 1 0 5h-.75v3.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V19h-.75a2.5 2.5 0 0 1 0-5h.75v-1H14c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h2.25V7h-.75a2.5 2.5 0 0 1 0-5h.75v-.25c0-.41.34-.75.75-.75s.75.34.75.75V2h.75a2.5 2.5 0 0 1 0 5h-.75v1H20c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-2.25z"/>
  </svg>
);
RoundedKebabDiningIcon.displayName = 'RoundedKebabDiningIcon';
export const KebabDiningRoundedIcon = RoundedKebabDiningIcon;

export const RoundedLayersIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.6 18.06c-.36.28-.87.28-1.23 0l-6.15-4.78a.991.991 0 0 0-1.22 0a.997.997 0 0 0 0 1.57l6.76 5.26c.72.56 1.73.56 2.46 0l6.76-5.26c.51-.4.51-1.17 0-1.57l-.01-.01a.991.991 0 0 0-1.22 0l-6.15 4.79zm.63-3.02l6.76-5.26c.51-.4.51-1.18 0-1.58l-6.76-5.26c-.72-.56-1.73-.56-2.46 0L4.01 8.21c-.51.4-.51 1.18 0 1.58l6.76 5.26c.72.56 1.74.56 2.46-.01z"/>
  </svg>
);
RoundedLayersIcon.displayName = 'RoundedLayersIcon';
export const LayersRoundedIcon = RoundedLayersIcon;

export const RoundedLayersClearIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.99 9.79c.51-.4.51-1.18 0-1.58l-6.76-5.26c-.72-.56-1.73-.56-2.46 0L9.41 4.02l7.88 7.88l2.7-2.11zm0 3.49l-.01-.01a.991.991 0 0 0-1.22 0l-.05.04l1.4 1.4a.982.982 0 0 0-.12-1.43zm1.45 5.6L4.12 1.56a.996.996 0 1 0-1.41 1.41l3.52 3.52l-2.22 1.72c-.51.4-.51 1.18 0 1.58l6.76 5.26c.72.56 1.73.56 2.46 0l.87-.68l1.42 1.42l-2.92 2.27c-.36.28-.87.28-1.23 0l-6.15-4.78a.991.991 0 0 0-1.22 0a.997.997 0 0 0 0 1.57l6.76 5.26c.72.56 1.73.56 2.46 0l3.72-2.89l3.07 3.07c.39.39 1.02.39 1.41 0c.41-.39.41-1.02.02-1.41z"/>
  </svg>
);
RoundedLayersClearIcon.displayName = 'RoundedLayersClearIcon';
export const LayersClearRoundedIcon = RoundedLayersClearIcon;

export const RoundedLiquorIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 14c0 1.3.84 2.4 2 2.82V20H4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H7v-3.18C8.16 16.4 9 15.3 9 14V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v7zm2-6h2v3H5V8zm15.64.54l-.96-.32a1 1 0 0 1-.68-.95V3c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4.28a1 1 0 0 1-.68.95l-.96.32c-.81.28-1.36 1.04-1.36 1.9V20c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-9.56c0-.86-.55-1.62-1.36-1.9zM16 4h1v1h-1V4zm-3 6.44l.95-.32C15.18 9.72 16 8.57 16 7.28V7h1v.28a3 3 0 0 0 2.05 2.85l.95.31V12h-7v-1.56zM20 20h-7v-2h7v2z"/>
  </svg>
);
RoundedLiquorIcon.displayName = 'RoundedLiquorIcon';
export const LiquorRoundedIcon = RoundedLiquorIcon;

export const RoundedLocalActivityIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 12c0-.76.43-1.42 1.06-1.76c.6-.33.94-1.01.94-1.7V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.89-1.99 1.99v2.55c0 .69.33 1.37.94 1.69C3.58 10.58 4 11.24 4 12s-.43 1.43-1.06 1.76c-.6.33-.94 1.01-.94 1.7V18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-2.54c0-.69-.34-1.37-.94-1.7c-.63-.34-1.06-1-1.06-1.76zm-5.5 4.1L12 14.5l-2.5 1.61c-.38.24-.87-.11-.75-.55l.75-2.88l-2.3-1.88a.503.503 0 0 1 .29-.89l2.96-.17l1.08-2.75c.17-.42.77-.42.93 0l1.08 2.76l2.96.17c.45.03.64.6.29.89l-2.3 1.88l.76 2.86c.12.45-.37.8-.75.55z"/>
  </svg>
);
RoundedLocalActivityIcon.displayName = 'RoundedLocalActivityIcon';
export const LocalActivityRoundedIcon = RoundedLocalActivityIcon;

export const RoundedLocalAirportIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.48 13.7L13.5 9V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9l-7.98 4.7c-.32.18-.52.53-.52.9c0 .7.67 1.2 1.34 1.01l7.16-2.1V19l-2.26 1.35c-.15.09-.24.26-.24.43v.58c0 .33.31.57.62.49l2.92-.73L12 21l.38.09l.42.11l1.9.48l.67.17c.32.08.62-.16.62-.49v-.58c0-.18-.09-.34-.24-.43L13.5 19v-5.5l7.16 2.1c.67.2 1.34-.3 1.34-1c0-.37-.2-.72-.52-.9z"/>
  </svg>
);
RoundedLocalAirportIcon.displayName = 'RoundedLocalAirportIcon';
export const LocalAirportRoundedIcon = RoundedLocalAirportIcon;

export const RoundedLocalAtmIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 13c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10zm-6-7c.55 0 1-.45 1-1s-.45-1-1-1h-1v-.01c0-.55-.45-1-1-1s-1 .45-1 1V8h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1h-3c-.55 0-1 .45-1 1s.45 1 1 1h1c0 .55.45 1 1 1s1-.45 1-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h3z"/>
  </svg>
);
RoundedLocalAtmIcon.displayName = 'RoundedLocalAtmIcon';
export const LocalAtmRoundedIcon = RoundedLocalAtmIcon;

export const RoundedLocalBarIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 4.45c0-.8-.65-1.45-1.45-1.45H4.45C3.65 3 3 3.65 3 4.45c0 .35.13.7.37.96L11 14v5H7c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1h-4v-5l7.63-8.59c.24-.26.37-.61.37-.96zM7.43 7L5.66 5h12.69l-1.78 2H7.43z"/>
  </svg>
);
RoundedLocalBarIcon.displayName = 'RoundedLocalBarIcon';
export const LocalBarRoundedIcon = RoundedLocalBarIcon;

export const RoundedLocalCafeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 3H6c-1.1 0-2 .9-2 2v8c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 5h-2V5h2v3zM3 21h16c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1z"/>
  </svg>
);
RoundedLocalCafeIcon.displayName = 'RoundedLocalCafeIcon';
export const LocalCafeRoundedIcon = RoundedLocalCafeIcon;

export const RoundedLocalCarWashIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 5c.83 0 1.5-.67 1.5-1.5c0-.66-.66-1.64-1.11-2.22a.498.498 0 0 0-.79 0c-.44.58-1.1 1.56-1.1 2.22c0 .83.67 1.5 1.5 1.5zm-5 0c.83 0 1.5-.67 1.5-1.5c0-.66-.66-1.64-1.11-2.22a.498.498 0 0 0-.79 0c-.44.58-1.1 1.56-1.1 2.22c0 .83.67 1.5 1.5 1.5zM7 5c.83 0 1.5-.67 1.5-1.5c0-.66-.66-1.64-1.11-2.22a.498.498 0 0 0-.79 0c-.44.58-1.1 1.56-1.1 2.22C5.5 4.33 6.17 5 7 5zm11.92 3.01C18.72 7.42 18.16 7 17.5 7h-11c-.66 0-1.21.42-1.42 1.01l-1.97 5.67c-.07.21-.11.43-.11.66v7.16c0 .83.67 1.5 1.5 1.5S6 22.33 6 21.5V21h12v.5c0 .82.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5v-7.16c0-.22-.04-.45-.11-.66l-1.97-5.67zM6.5 18c-.83 0-1.5-.67-1.5-1.5S5.67 15 6.5 15s1.5.67 1.5 1.5S7.33 18 6.5 18zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM5 13l1.27-3.82c.14-.4.52-.68.95-.68h9.56c.43 0 .81.28.95.68L19 13H5z"/>
  </svg>
);
RoundedLocalCarWashIcon.displayName = 'RoundedLocalCarWashIcon';
export const LocalCarWashRoundedIcon = RoundedLocalCarWashIcon;

export const RoundedLocalConvenienceStoreIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.9 7.89l-1.05-3.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 7.89c-.46 1.97.85 3.11.9 3.17V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7.94c1.12-1.12 1.09-2.41.9-3.17zM13 5h1.96l.54 3.52c.09.71-.39 1.48-1.28 1.48c-.67 0-1.22-.59-1.22-1.31V5zM6.44 8.86c-.08.65-.6 1.14-1.21 1.14c-.93 0-1.35-.97-1.19-1.64L5.05 5h1.97l-.58 3.86zM10.5 16H9v1h1.5c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5H10v-1H8.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2c.28 0 .5.22.5.5v2c0 .28-.22.5-.5.5zm.5-7.31c0 .72-.55 1.31-1.29 1.31c-.75 0-1.3-.7-1.22-1.48L9.04 5H11v3.69zM15.5 18c-.28 0-.5-.22-.5-.5V16h-1.5c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5s.5.22.5.5V15h1v-1.5c0-.28.22-.5.5-.5s.5.22.5.5v4c0 .28-.22.5-.5.5zm3.27-8c-.61 0-1.14-.49-1.21-1.14L16.98 5l1.93-.01l1.05 3.37c.16.67-.25 1.64-1.19 1.64z"/>
  </svg>
);
RoundedLocalConvenienceStoreIcon.displayName = 'RoundedLocalConvenienceStoreIcon';
export const LocalConvenienceStoreRoundedIcon = RoundedLocalConvenienceStoreIcon;

export const RoundedLocalDiningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8.1 13.34l2.83-2.83l-6.19-6.18c-.48-.48-1.31-.35-1.61.27c-.71 1.49-.45 3.32.78 4.56l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38c1.91-1.91 2.28-4.65.81-6.12c-1.46-1.46-4.2-1.1-6.12.81c-1.59 1.59-2.09 3.74-1.38 5.27l-9.05 9.05a.996.996 0 1 0 1.41 1.41L12 14.41l6.18 6.18a.996.996 0 1 0 1.41-1.41L13.41 13l1.47-1.47z"/>
  </svg>
);
RoundedLocalDiningIcon.displayName = 'RoundedLocalDiningIcon';
export const LocalDiningRoundedIcon = RoundedLocalDiningIcon;

export const RoundedLocalDrinkIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5.23 2C4.04 2 3.11 3.04 3.24 4.22l1.77 16.01C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77l1.77-16.01c.13-1.18-.8-2.22-1.99-2.22H5.23zM12 19c-1.66 0-3-1.34-3-3c0-1.55 1.81-3.95 2.62-4.94c.2-.25.57-.25.77 0c.81 1 2.62 3.39 2.62 4.94A3.01 3.01 0 0 1 12 19zm6.33-11H5.67l-.32-2.89c-.06-.59.4-1.11 1-1.11h11.3c.59 0 1.06.52.99 1.11L18.33 8z"/>
  </svg>
);
RoundedLocalDrinkIcon.displayName = 'RoundedLocalDrinkIcon';
export const LocalDrinkRoundedIcon = RoundedLocalDrinkIcon;

export const RoundedLocalFireDepartmentIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 12.9l-2.03 2c-.46.46-.82 1.03-.93 1.67C8.74 18.41 10.18 20 12 20s3.26-1.59 2.96-3.42c-.11-.64-.46-1.22-.93-1.67L12 12.9z"/><path fill={color || 'currentColor'} d="M15.56 6.55C14.38 8.02 12 7.19 12 5.3V3.77c0-.8-.89-1.28-1.55-.84C8.12 4.49 4 7.97 4 13c0 2.92 1.56 5.47 3.89 6.86a4.86 4.86 0 0 1-.81-3.68c.19-1.04.75-1.98 1.51-2.72l2.71-2.67c.39-.38 1.01-.38 1.4 0l2.73 2.69c.74.73 1.3 1.65 1.48 2.68c.25 1.36-.07 2.64-.77 3.66c1.89-1.15 3.29-3.06 3.71-5.3c.61-3.27-.81-6.37-3.22-8.1c-.33-.25-.8-.2-1.07.13z"/>
  </svg>
);
RoundedLocalFireDepartmentIcon.displayName = 'RoundedLocalFireDepartmentIcon';
export const LocalFireDepartmentRoundedIcon = RoundedLocalFireDepartmentIcon;

export const RoundedLocalFloristIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 22c4.56 0 8.33-3.4 8.92-7.8c.09-.64-.48-1.21-1.12-1.12c-4.4.59-7.8 4.36-7.8 8.92zM5.6 10.25a2.5 2.5 0 0 0 3.92 2.06l-.02.19a2.5 2.5 0 0 0 5 0l-.02-.19c.4.28.89.44 1.42.44a2.5 2.5 0 0 0 2.5-2.5c0-1-.59-1.85-1.43-2.25c.84-.4 1.43-1.25 1.43-2.25a2.5 2.5 0 0 0-3.92-2.06l.02-.19a2.5 2.5 0 0 0-5 0l.02.19c-.4-.28-.89-.44-1.42-.44a2.5 2.5 0 0 0-2.5 2.5c0 1 .59 1.85 1.43 2.25c-.84.4-1.43 1.25-1.43 2.25zM12 5.5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5zm-8.92 8.7C3.67 18.6 7.44 22 12 22c0-4.56-3.4-8.33-7.8-8.92c-.64-.09-1.21.48-1.12 1.12z"/>
  </svg>
);
RoundedLocalFloristIcon.displayName = 'RoundedLocalFloristIcon';
export const LocalFloristRoundedIcon = RoundedLocalFloristIcon;

export const RoundedLocalGasStationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.77 7.23l.01-.01l-3.19-3.19a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.58 1.58c-1.05.4-1.76 1.47-1.58 2.71c.16 1.1 1.1 1.99 2.2 2.11c.47.05.88-.03 1.27-.2v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v15c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-6.5h1.5v4.86c0 1.31.94 2.5 2.24 2.63a2.5 2.5 0 0 0 2.76-2.49V9c0-.69-.28-1.32-.73-1.77zM12 10H6V6c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v4zm6 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedLocalGasStationIcon.displayName = 'RoundedLocalGasStationIcon';
export const LocalGasStationRoundedIcon = RoundedLocalGasStationIcon;

export const RoundedLocalGroceryStoreIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zM2 4h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.993.993 0 0 0-.9-.57H2c-.55 0-1 .45-1 1s.45 1 1 1zm15 14c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2z"/>
  </svg>
);
RoundedLocalGroceryStoreIcon.displayName = 'RoundedLocalGroceryStoreIcon';
export const LocalGroceryStoreRoundedIcon = RoundedLocalGroceryStoreIcon;

export const RoundedLocalHospitalIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 11h-3v3c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-3H7c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h3V7c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v3h3c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1z"/>
  </svg>
);
RoundedLocalHospitalIcon.displayName = 'RoundedLocalHospitalIcon';
export const LocalHospitalRoundedIcon = RoundedLocalHospitalIcon;

export const RoundedLocalHotelIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3s1.34 3 3 3zm12-6h-6c-1.1 0-2 .9-2 2v5H3V6c0-.55-.45-1-1-1s-1 .45-1 1v13c0 .55.45 1 1 1s1-.45 1-1v-2h18v2c0 .55.45 1 1 1s1-.45 1-1v-8c0-2.21-1.79-4-4-4z"/>
  </svg>
);
RoundedLocalHotelIcon.displayName = 'RoundedLocalHotelIcon';
export const LocalHotelRoundedIcon = RoundedLocalHotelIcon;

export const RoundedLocalLaundryServiceIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9.64 16.36c1.3 1.3 3.42 1.3 4.72 0c1.3-1.3 1.3-3.42 0-4.72l-4.72 4.72zM18 2.01L6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99zM11 5c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zM8 5c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm4 14c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5z"/>
  </svg>
);
RoundedLocalLaundryServiceIcon.displayName = 'RoundedLocalLaundryServiceIcon';
export const LocalLaundryServiceRoundedIcon = RoundedLocalLaundryServiceIcon;

export const RoundedLocalLibraryIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 11.55c-1.82-1.7-4.12-2.89-6.68-3.35C4.11 7.99 3 8.95 3 10.18v6.24c0 1.68.72 2.56 1.71 2.69c2.5.32 4.77 1.35 6.63 2.87c.35.29.92.32 1.27.04c1.87-1.53 4.16-2.58 6.68-2.9c.94-.13 1.71-1.06 1.71-2.02v-6.92c0-1.23-1.11-2.19-2.32-1.98c-2.56.46-4.86 1.65-6.68 3.35zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3z"/>
  </svg>
);
RoundedLocalLibraryIcon.displayName = 'RoundedLocalLibraryIcon';
export const LocalLibraryRoundedIcon = RoundedLocalLibraryIcon;

export const RoundedLocalMallIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10a4.99 4.99 0 0 1-4.84-3.75C6.99 8.62 7.48 8 8.13 8c.47 0 .85.34.98.8a2.997 2.997 0 0 0 5.78 0c.13-.46.51-.8.98-.8c.65 0 1.13.62.97 1.25A4.99 4.99 0 0 1 12 13z"/>
  </svg>
);
RoundedLocalMallIcon.displayName = 'RoundedLocalMallIcon';
export const LocalMallRoundedIcon = RoundedLocalMallIcon;

export const RoundedLocalMoviesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 4v1h-2V4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1H6V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
  </svg>
);
RoundedLocalMoviesIcon.displayName = 'RoundedLocalMoviesIcon';
export const LocalMoviesRoundedIcon = RoundedLocalMoviesIcon;

export const RoundedLocalOfferIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4S7 4.67 7 5.5S6.33 7 5.5 7z"/>
  </svg>
);
RoundedLocalOfferIcon.displayName = 'RoundedLocalOfferIcon';
export const LocalOfferRoundedIcon = RoundedLocalOfferIcon;

export const RoundedLocalParkingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.79 3H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2s2-.9 2-2v-4h3c3.57 0 6.42-3.13 5.95-6.79C18.56 5.19 15.84 3 12.79 3zm.41 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"/>
  </svg>
);
RoundedLocalParkingIcon.displayName = 'RoundedLocalParkingIcon';
export const LocalParkingRoundedIcon = RoundedLocalParkingIcon;

export const RoundedLocalPharmacyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.89 5h-.53l.71-1.97c.24-.65-.1-1.37-.75-1.6c-.65-.24-1.37.1-1.61.75L15.69 5H5.1a2 2 0 0 0-1.9 2.63L5 13l-1.79 5.37C2.77 19.66 3.74 21 5.1 21h13.78c1.36 0 2.33-1.34 1.9-2.63L19 13l1.78-5.37C21.21 6.34 20.25 5 18.89 5zM15 14h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H9c-.55 0-1-.45-1-1s.45-1 1-1h2v-2c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedLocalPharmacyIcon.displayName = 'RoundedLocalPharmacyIcon';
export const LocalPharmacyRoundedIcon = RoundedLocalPharmacyIcon;

export const RoundedLocalPhoneIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"/>
  </svg>
);
RoundedLocalPhoneIcon.displayName = 'RoundedLocalPhoneIcon';
export const LocalPhoneRoundedIcon = RoundedLocalPhoneIcon;

export const RoundedLocalPizzaIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C9.01 2 6.28 3.08 4.17 4.88c-.71.61-.86 1.65-.4 2.46l7.36 13.11c.38.68 1.36.68 1.74 0l7.36-13.11c.46-.81.31-1.86-.4-2.46C17.73 3.09 14.99 2 12 2zM7 7c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"/>
  </svg>
);
RoundedLocalPizzaIcon.displayName = 'RoundedLocalPizzaIcon';
export const LocalPizzaRoundedIcon = RoundedLocalPizzaIcon;

export const RoundedLocalPlayIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 12c0-.76.43-1.42 1.06-1.76c.6-.33.94-1.01.94-1.7V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.89-1.99 1.99v2.55c0 .69.33 1.37.94 1.69C3.58 10.58 4 11.24 4 12s-.43 1.43-1.06 1.76c-.6.33-.94 1.01-.94 1.7v2.25C2 19.1 2.9 20 4 20h16c1.1 0 2-.9 2-2v-2.54c0-.69-.34-1.37-.94-1.7c-.63-.34-1.06-1-1.06-1.76zm-5.5 4.1L12 14.5l-2.5 1.61c-.38.24-.87-.11-.75-.55l.75-2.88l-2.3-1.88a.503.503 0 0 1 .29-.89l2.96-.17l1.08-2.75c.17-.42.77-.42.93 0l1.08 2.76l2.96.17c.45.03.64.6.29.89l-2.3 1.88l.76 2.86c.12.45-.37.8-.75.55z"/>
  </svg>
);
RoundedLocalPlayIcon.displayName = 'RoundedLocalPlayIcon';
export const LocalPlayRoundedIcon = RoundedLocalPlayIcon;

export const RoundedLocalPoliceIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.5 12.59l.63 2.73c.1.43-.37.77-.75.54L12 14.42l-2.39 1.44a.502.502 0 0 1-.75-.54l.64-2.72l-2.1-1.81a.5.5 0 0 1 .28-.88l2.78-.24l1.08-2.56c.17-.41.75-.41.92 0l1.08 2.55l2.78.24a.5.5 0 0 1 .28.88l-2.1 1.81zM4.19 4.47C3.47 4.79 3 5.51 3 6.3V11c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V6.3c0-.79-.47-1.51-1.19-1.83l-7-3.11c-.52-.23-1.11-.23-1.62 0l-7 3.11z"/>
  </svg>
);
RoundedLocalPoliceIcon.displayName = 'RoundedLocalPoliceIcon';
export const LocalPoliceRoundedIcon = RoundedLocalPoliceIcon;

export const RoundedLocalPostOfficeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-6.54 4.09c-.65.41-1.47.41-2.12 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z"/>
  </svg>
);
RoundedLocalPostOfficeIcon.displayName = 'RoundedLocalPostOfficeIcon';
export const LocalPostOfficeRoundedIcon = RoundedLocalPostOfficeIcon;

export const RoundedLocalPrintshopIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 7V4c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v3h12zm1 1H5c-1.66 0-3 1.34-3 3v5c0 .55.45 1 1 1h3v2c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-2h3c.55 0 1-.45 1-1v-5c0-1.66-1.34-3-3-3zm-3 11H8v-4h8v4zm2-6.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedLocalPrintshopIcon.displayName = 'RoundedLocalPrintshopIcon';
export const LocalPrintshopRoundedIcon = RoundedLocalPrintshopIcon;

export const RoundedLocalSeeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5c1.23 0 2.25-.9 2.46-2.07c-1-1.01-1.83-1.98-2.48-2.93A2.51 2.51 0 0 0 9.5 14z"/><path fill={color || 'currentColor'} d="M18.65 17.08a1 1 0 0 1-1.3 0c-1.26-1.08-.7-.61-1.3-1.14c-.83 1.74-2.73 2.87-4.85 2.5a4.514 4.514 0 0 1-3.63-3.63a4.488 4.488 0 0 1 3.31-5.14C10.3 8.45 10 7.28 10 6.15c0-.75.1-1.47.28-2.15h-.4c-.56 0-1.1.24-1.48.65L7.17 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6.03c-1.41 1.49-2.65 2.51-3.35 3.11z"/><path fill={color || 'currentColor'} d="M17.34 14.42c.37.33.95.33 1.33 0C22.22 11.25 24 8.5 24 6.15C24 2.42 21.15 0 18 0s-6 2.42-6 6.15c0 2.35 1.78 5.1 5.34 8.27zm-.07-9.17L18 3l.73 2.25H21l-1.85 1.47l.7 2.28L18 7.59L16.15 9l.7-2.28L15 5.25h2.27z"/>
  </svg>
);
RoundedLocalSeeIcon.displayName = 'RoundedLocalSeeIcon';
export const LocalSeeRoundedIcon = RoundedLocalSeeIcon;

export const RoundedLocalShippingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.5 8H17V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h1c.55 0 1-.45 1-1v-3.33c0-.43-.14-.85-.4-1.2L20.3 8.4c-.19-.25-.49-.4-.8-.4zM6 18c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm13.5-8.5l1.96 2.5H17V9.5h2.5zM18 18c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedLocalShippingIcon.displayName = 'RoundedLocalShippingIcon';
export const LocalShippingRoundedIcon = RoundedLocalShippingIcon;

export const RoundedLocalTaxiIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v1H6.5c-.66 0-1.21.42-1.42 1.01l-1.97 5.67c-.07.21-.11.43-.11.66v7.16c0 .83.67 1.5 1.5 1.5S6 20.33 6 19.5V19h12v.5c0 .82.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5v-7.16c0-.22-.04-.45-.11-.66l-1.97-5.67zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
  </svg>
);
RoundedLocalTaxiIcon.displayName = 'RoundedLocalTaxiIcon';
export const LocalTaxiRoundedIcon = RoundedLocalTaxiIcon;

export const RoundedLunchDiningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3.37 14.28c.79-.29 1.17-.78 1.99-.78c1.19 0 1.42 1 3.33 1c1.95 0 2.09-1 3.33-1c1.19 0 1.42 1 3.33 1c1.95 0 2.09-1 3.33-1c.81 0 1.17.46 1.93.76c.67.26 1.39-.25 1.39-.96c0-.43-.28-.81-.69-.96c-.97-.35-1.22-.83-2.65-.83c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.33-1c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.33-1c-1.55 0-1.96.63-2.68.89c-.39.14-.65.52-.65.94c0 .69.7 1.18 1.36.94zM2 19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v1zM22 9c.02-4-4.28-6-10-6C6.29 3 2 5 2 9c0 .55.45 1 1 1h18c.55 0 1-.45 1-1z"/>
  </svg>
);
RoundedLunchDiningIcon.displayName = 'RoundedLunchDiningIcon';
export const LunchDiningRoundedIcon = RoundedLunchDiningIcon;

export const RoundedMapIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.65 4.98l-5-1.75c-.42-.15-.88-.15-1.3-.01L4.36 4.56C3.55 4.84 3 5.6 3 6.46v11.85c0 1.41 1.41 2.37 2.72 1.86l2.93-1.14c.22-.09.47-.09.69-.01l5 1.75c.42.15.88.15 1.3.01l3.99-1.34c.81-.27 1.36-1.04 1.36-1.9V5.69c0-1.41-1.41-2.37-2.72-1.86l-2.93 1.14c-.22.08-.46.09-.69.01zM15 18.89l-6-2.11V5.11l6 2.11v11.67z"/>
  </svg>
);
RoundedMapIcon.displayName = 'RoundedMapIcon';
export const MapRoundedIcon = RoundedMapIcon;

export const RoundedMapsUgcIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 4c4.97 0 8.9 4.56 7.82 9.72c-.68 3.23-3.4 5.74-6.67 6.2c-1.59.22-3.14-.01-4.58-.7c-.27-.13-.56-.19-.86-.19c-.19 0-.38.03-.56.08l-2.31.68a.51.51 0 0 1-.63-.63l.7-2.39c.13-.45.07-.92-.14-1.35A7.983 7.983 0 0 1 4 12c0-4.41 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29l-1.46 4.96c-.22.75.49 1.46 1.25 1.23l4.96-1.46c1.66.79 3.56 1.15 5.58.89c4.56-.59 8.21-4.35 8.66-8.92C22.53 7.03 17.85 2 12 2z"/><path fill={color || 'currentColor'} d="M12 8c-.55 0-1 .45-1 1v2H9c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V9c0-.55-.45-1-1-1z" fillRule="evenodd"/>
  </svg>
);
RoundedMapsUgcIcon.displayName = 'RoundedMapsUgcIcon';
export const MapsUgcRoundedIcon = RoundedMapsUgcIcon;

export const RoundedMedicalInformationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9-3h2v5h-2V4zM7 16H6c-.55 0-1-.45-1-1s.45-1 1-1h1v-1c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1H9v1c0 .55-.45 1-1 1s-1-.45-1-1v-1zm6.75-1.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.5c.41 0 .75.34.75.75s-.34.75-.75.75h-4.5zm0 3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c.41 0 .75.34.75.75s-.34.75-.75.75h-2.5z"/>
  </svg>
);
RoundedMedicalInformationIcon.displayName = 'RoundedMedicalInformationIcon';
export const MedicalInformationRoundedIcon = RoundedMedicalInformationIcon;

export const RoundedMedicalServicesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm5 11h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H9c-.55 0-1-.45-1-1s.45-1 1-1h2v-2c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedMedicalServicesIcon.displayName = 'RoundedMedicalServicesIcon';
export const MedicalServicesRoundedIcon = RoundedMedicalServicesIcon;

export const RoundedMenuBookIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5c-1.45-1.1-3.55-1.5-5.5-1.5c-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94c.98-.25 2.02-.36 3.02-.36c1.56 0 3.22.26 4.56.92c.6.3 1.28.3 1.87 0c1.34-.67 3-.92 4.56-.92c1 0 2.04.11 3.02.36c1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85c-1.28-.57-2.82-.79-4.27-.79zM21 17.23c0 .63-.58 1.09-1.2.98c-.75-.14-1.53-.2-2.3-.2c-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5c.92 0 1.83.09 2.7.28c.46.1.8.51.8.98v9.47z"/><path fill={color || 'currentColor'} d="M13.98 11.01c-.32 0-.61-.2-.71-.52c-.13-.39.09-.82.48-.94c1.54-.5 3.53-.66 5.36-.45c.41.05.71.42.66.83c-.05.41-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39c-.08.01-.16.03-.23.03zm0 2.66c-.32 0-.61-.2-.71-.52c-.13-.39.09-.82.48-.94c1.53-.5 3.53-.66 5.36-.45c.41.05.71.42.66.83c-.05.41-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39a.97.97 0 0 1-.23.03zm0 2.66c-.32 0-.61-.2-.71-.52c-.13-.39.09-.82.48-.94c1.53-.5 3.53-.66 5.36-.45c.41.05.71.42.66.83c-.05.41-.42.7-.83.66c-1.62-.19-3.39-.04-4.73.39a.97.97 0 0 1-.23.03z"/>
  </svg>
);
RoundedMenuBookIcon.displayName = 'RoundedMenuBookIcon';
export const MenuBookRoundedIcon = RoundedMenuBookIcon;

export const RoundedMergeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8.71 7.71a.996.996 0 0 1 0-1.41l2.59-2.59a.996.996 0 0 1 1.41 0L15.3 6.3a.996.996 0 1 1-1.41 1.41L13 6.83v5.1c0 1.06.42 2.08 1.17 2.83l4.12 4.12a.996.996 0 1 1-1.41 1.41L12 15.41l-4.88 4.88a.996.996 0 1 1-1.41-1.41l4.12-4.12c.75-.75 1.17-1.77 1.17-2.83v-5.1l-.88.88a.996.996 0 0 1-1.41 0z"/>
  </svg>
);
RoundedMergeIcon.displayName = 'RoundedMergeIcon';
export const MergeRoundedIcon = RoundedMergeIcon;

export const RoundedMinorCrashIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.5 24c.82 0 1.5-.67 1.5-1.5v-7.16c0-.22-.04-.45-.11-.66l-1.97-5.67C18.72 8.42 18.16 8 17.5 8h-11c-.66 0-1.21.42-1.42 1.01l-1.97 5.67c-.07.21-.11.43-.11.66v7.16c0 .83.68 1.5 1.5 1.5S6 23.33 6 22.5V22h12v.5c0 .83.67 1.5 1.5 1.5zM6.85 10h10.29l1.04 3H5.81l1.04-3zM6 17.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S8.33 19 7.5 19S6 18.33 6 17.5zm9 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5zM8.71 5.71a.996.996 0 0 1-1.41 0L5.71 4.12a.996.996 0 1 1 1.41-1.41L8.71 4.3c.39.38.39 1.02 0 1.41zm9.58-3c.39.39.39 1.02 0 1.41L16.7 5.71a.996.996 0 1 1-1.41-1.41l1.59-1.59a.996.996 0 0 1 1.41 0zM12 5c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1z"/>
  </svg>
);
RoundedMinorCrashIcon.displayName = 'RoundedMinorCrashIcon';
export const MinorCrashRoundedIcon = RoundedMinorCrashIcon;

export const RoundedMiscellaneousServicesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.17 13.71l1.4-2.42c.09-.15.05-.34-.08-.45l-1.48-1.16c.03-.22.05-.45.05-.68s-.02-.46-.05-.69l1.48-1.16c.13-.11.17-.3.08-.45l-1.4-2.42c-.09-.15-.27-.21-.43-.15l-1.74.7c-.36-.28-.75-.51-1.18-.69l-.26-1.85a.364.364 0 0 0-.35-.29h-2.8c-.17 0-.32.13-.35.3L6.8 4.15c-.42.18-.82.41-1.18.69l-1.74-.7c-.16-.06-.34 0-.43.15l-1.4 2.42c-.09.15-.05.34.08.45l1.48 1.16c-.03.22-.05.45-.05.68s.02.46.05.69l-1.48 1.16c-.13.11-.17.3-.08.45l1.4 2.42c.09.15.27.21.43.15l1.74-.7c.36.28.75.51 1.18.69l.26 1.85c.03.16.18.29.35.29h2.8c.17 0 .32-.13.35-.3l.26-1.85c.42-.18.82-.41 1.18-.69l1.74.7c.16.06.34 0 .43-.15zM8.81 11c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm13.11 7.67l-.96-.74c.02-.14.04-.29.04-.44c0-.15-.01-.3-.04-.44l.95-.74c.08-.07.11-.19.05-.29l-.9-1.55c-.05-.1-.17-.13-.28-.1l-1.11.45c-.23-.18-.48-.33-.76-.44l-.17-1.18a.216.216 0 0 0-.21-.2h-1.79c-.11 0-.21.08-.22.19l-.17 1.18c-.27.12-.53.26-.76.44l-1.11-.45a.23.23 0 0 0-.28.1l-.9 1.55c-.05.1-.04.22.05.29l.95.74a3.145 3.145 0 0 0 0 .88l-.95.74c-.08.07-.11.19-.05.29l.9 1.55c.05.1.17.13.28.1l1.11-.45c.23.18.48.33.76.44l.17 1.18c.02.11.11.19.22.19h1.79c.11 0 .21-.08.22-.19l.17-1.18c.27-.12.53-.26.75-.44l1.12.45c.1.04.22 0 .28-.1l.9-1.55c.06-.09.03-.21-.05-.28zm-4.29.16a1.35 1.35 0 1 1 .001-2.701a1.35 1.35 0 0 1-.001 2.701z"/>
  </svg>
);
RoundedMiscellaneousServicesIcon.displayName = 'RoundedMiscellaneousServicesIcon';
export const MiscellaneousServicesRoundedIcon = RoundedMiscellaneousServicesIcon;

export const RoundedModeOfTravelIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 10.2C4 5.22 7.8 2 12 2c4 0 7.64 2.92 7.97 7.5h2.32c.45 0 .67.54.35.85l-3.29 3.29c-.2.2-.51.2-.71 0l-3.29-3.29a.5.5 0 0 1 .35-.85h2.26C17.65 6.24 15.13 4 12 4c-3.35 0-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14c.64-.59 1.23-1.16 1.77-1.71a2.5 2.5 0 0 1-.27-1.12a2.5 2.5 0 0 1 5 0a2.492 2.492 0 0 1-3.19 2.39c-.78.82-1.67 1.66-2.65 2.52c-.38.33-.95.33-1.33 0C6.45 17.12 4 13.38 4 10.2z"/>
  </svg>
);
RoundedModeOfTravelIcon.displayName = 'RoundedModeOfTravelIcon';
export const ModeOfTravelRoundedIcon = RoundedModeOfTravelIcon;

export const RoundedMoneyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15 16h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1zm1-6h1v4h-1v-4zm-7 6h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1zm1-6h1v4h-1v-4zM6 8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1V9c0-.55-.45-1-1-1zM2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2zm17 12H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z"/>
  </svg>
);
RoundedMoneyIcon.displayName = 'RoundedMoneyIcon';
export const MoneyRoundedIcon = RoundedMoneyIcon;

export const RoundedMopedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 7c0-1.1-.9-2-2-2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2.65L13.52 14H10v-4c0-.55-.45-1-1-1H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 10.35V7zM7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z"/><path fill={color || 'currentColor'} d="M9 6H6c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm10 7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedMopedIcon.displayName = 'RoundedMopedIcon';
export const MopedRoundedIcon = RoundedMopedIcon;

export const RoundedMosqueIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 8h10c.29 0 .57.06.84.13c.09-.33.16-.67.16-1.04c0-1.31-.65-2.53-1.74-3.25L12 1L7.74 3.84A3.887 3.887 0 0 0 6 7.09c0 .37.07.71.16 1.04c.27-.07.55-.13.84-.13z"/><path fill={color || 'currentColor'} d="M24 7c0-1.1-2-3-2-3s-2 1.9-2 3c0 .74.4 1.38 1 1.72V13h-2v-2c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v2H3V8.72c.6-.34 1-.98 1-1.72c0-1.1-2-3-2-3S0 5.9 0 7c0 .74.4 1.38 1 1.72V21h9v-4c0-1.1.9-2 2-2s2 .9 2 2v4h9V8.72c.6-.34 1-.98 1-1.72z"/>
  </svg>
);
RoundedMosqueIcon.displayName = 'RoundedMosqueIcon';
export const MosqueRoundedIcon = RoundedMosqueIcon;

export const RoundedMovingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2.7 17.29c.39.39 1.02.39 1.41 0L8.7 12.7a.996.996 0 0 1 1.41 0l1.17 1.17a3 3 0 0 0 4.24 0L19.7 9.7l1.44 1.44a.5.5 0 0 0 .85-.35V6.5a.48.48 0 0 0-.49-.5h-4.29c-.45 0-.67.54-.35.85l1.44 1.44l-4.17 4.17a.996.996 0 0 1-1.41 0l-1.17-1.17a3 3 0 0 0-4.24 0L2.7 15.88c-.38.39-.38 1.03 0 1.41z"/>
  </svg>
);
RoundedMovingIcon.displayName = 'RoundedMovingIcon';
export const MovingRoundedIcon = RoundedMovingIcon;

export const RoundedMultipleStopIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 5.21c0-.45.54-.67.85-.35l2.79 2.79c.2.2.2.51 0 .71l-2.79 2.79a.5.5 0 0 1-.85-.36V9h-3c-.55 0-1-.45-1-1s.45-1 1-1h3V5.21zM10 7c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1zM6 7c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1zm1 10h3c.55 0 1-.45 1-1s-.45-1-1-1H7v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79a.5.5 0 0 0 .85-.36V17zm7 0c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1z"/>
  </svg>
);
RoundedMultipleStopIcon.displayName = 'RoundedMultipleStopIcon';
export const MultipleStopRoundedIcon = RoundedMultipleStopIcon;

export const RoundedMuseumIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.5 11c.28 0 .5-.22.5-.5V9.26c0-.16-.08-.32-.21-.41L12.57 2.4c-.34-.24-.8-.24-1.15 0L2.21 8.85c-.13.09-.21.25-.21.41v1.24c0 .28.22.5.5.5H4v9H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1h-1v-9h1.5zM16 17c0 .55-.45 1-1 1s-1-.45-1-1v-3l-1.17 1.75a1 1 0 0 1-1.66 0L10 14v3c0 .55-.45 1-1 1s-1-.45-1-1v-4.7a1.297 1.297 0 0 1 2.38-.72L12 14l1.61-2.42c.25-.36.65-.58 1.09-.58c.72 0 1.3.58 1.3 1.3V17z"/>
  </svg>
);
RoundedMuseumIcon.displayName = 'RoundedMuseumIcon';
export const MuseumRoundedIcon = RoundedMuseumIcon;

export const RoundedMyLocationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V2c0-.55-.45-1-1-1s-1 .45-1 1v1.06A8.994 8.994 0 0 0 3.06 11H2c-.55 0-1 .45-1 1s.45 1 1 1h1.06A8.994 8.994 0 0 0 11 20.94V22c0 .55.45 1 1 1s1-.45 1-1v-1.06A8.994 8.994 0 0 0 20.94 13H22c.55 0 1-.45 1-1s-.45-1-1-1h-1.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7z"/>
  </svg>
);
RoundedMyLocationIcon.displayName = 'RoundedMyLocationIcon';
export const MyLocationRoundedIcon = RoundedMyLocationIcon;

export const RoundedNavigationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.93 4.26l6.15 14.99c.34.83-.51 1.66-1.33 1.29l-5.34-2.36c-.26-.11-.55-.11-.81 0l-5.34 2.36c-.82.36-1.67-.46-1.33-1.29l6.15-14.99c.33-.83 1.51-.83 1.85 0z"/>
  </svg>
);
RoundedNavigationIcon.displayName = 'RoundedNavigationIcon';
export const NavigationRoundedIcon = RoundedNavigationIcon;

export const RoundedNearMeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.75 3.94L4.07 10.08c-.83.35-.81 1.53.02 1.85L9.43 14a1 1 0 0 1 .57.57l2.06 5.33c.32.84 1.51.86 1.86.03l6.15-14.67c.33-.83-.5-1.66-1.32-1.32z"/>
  </svg>
);
RoundedNearMeIcon.displayName = 'RoundedNearMeIcon';
export const NearMeRoundedIcon = RoundedNearMeIcon;

export const RoundedNearMeDisabledIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 6.34l6.95-2.58c.8-.3 1.58.48 1.29 1.29L17.66 12L12 6.34zm9.9 12.73L4.93 2.1a.996.996 0 1 0-1.41 1.41l4.36 4.36l-4.2 1.56c-.41.16-.68.54-.68.97c0 .42.26.8.65.96l6.42 2.57l2.57 6.42c.16.39.54.65.96.65c.43 0 .82-.27.97-.67l1.56-4.2l4.36 4.36c.39.39 1.02.39 1.41 0c.39-.4.39-1.03 0-1.42z"/>
  </svg>
);
RoundedNearMeDisabledIcon.displayName = 'RoundedNearMeDisabledIcon';
export const NearMeDisabledRoundedIcon = RoundedNearMeDisabledIcon;

export const RoundedNightlifeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2.87 5h10.26c.8 0 1.28.89.83 1.55L9 14v4h1c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1h1v-4L2.04 6.55C1.59 5.89 2.07 5 2.87 5zm7.23 4l1.4-2H4.49l1.4 2h4.21zM19 5h1.5c.83 0 1.5.67 1.5 1.5S21.33 8 20.5 8H19v9c0 1.84-1.64 3.28-3.54 2.95c-1.21-.21-2.2-1.2-2.41-2.41A2.995 2.995 0 0 1 16 14a3 3 0 0 1 1 .17V7c0-1.1.9-2 2-2z"/>
  </svg>
);
RoundedNightlifeIcon.displayName = 'RoundedNightlifeIcon';
export const NightlifeRoundedIcon = RoundedNightlifeIcon;

export const RoundedNoCrashIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.5 24c.82 0 1.5-.67 1.5-1.5v-7.16c0-.22-.04-.45-.11-.66l-1.97-5.67C18.72 8.42 18.16 8 17.5 8h-11c-.66 0-1.21.42-1.42 1.01l-1.97 5.67c-.07.21-.11.43-.11.66v7.16c0 .83.68 1.5 1.5 1.5S6 23.33 6 22.5V22h12v.5c0 .83.67 1.5 1.5 1.5zM6.85 10h10.29l1.04 3H5.81l1.04-3zM6 17.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S8.33 19 7.5 19S6 18.33 6 17.5zm9 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5zM16.24.71c.39.39.39 1.02 0 1.41L12.7 5.66a.996.996 0 0 1-1.41 0L9.88 4.24a.996.996 0 1 1 1.41-1.41l.71.71L14.83.71a.996.996 0 0 1 1.41 0z"/>
  </svg>
);
RoundedNoCrashIcon.displayName = 'RoundedNoCrashIcon';
export const NoCrashRoundedIcon = RoundedNoCrashIcon;

export const RoundedNoMealsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 18.17l-2-2V14h-1c-1.1 0-2-.9-2-2V6c0-1.49 1.6-3.32 3.76-3.85c.63-.15 1.24.33 1.24.98v15.04zm.19 4.44a.996.996 0 0 1-1.41 0l-9.76-9.76c-.33.09-.66.15-1.02.15v8c0 .55-.45 1-1 1s-1-.45-1-1v-8c-2.21 0-4-1.79-4-4V5.83L1.39 4.22A.996.996 0 1 1 2.8 2.81l18.38 18.38c.4.39.4 1.03.01 1.42zM6.17 9L5 7.83V9h1.17zM13 9V3c0-.55-.45-1-1-1s-1 .45-1 1v5.17l1.85 1.85c.09-.33.15-.66.15-1.02zM9 3c0-.55-.45-1-1-1s-1 .45-1 1v1.17l2 2V3z"/>
  </svg>
);
RoundedNoMealsIcon.displayName = 'RoundedNoMealsIcon';
export const NoMealsRoundedIcon = RoundedNoMealsIcon;

export const RoundedNoTransferIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5.78 2.95C7.24 2.16 9.48 2 12 2c4.42 0 8 .5 8 4v10c0 .35-.08.67-.19.98L13.83 11H18V6H8.83L5.78 2.95zM20.49 21.9a.996.996 0 0 1-1.41 0l-1.01-1.01A1.504 1.504 0 0 1 16 19.5V19H8v.5c0 .83-.67 1.5-1.5 1.5S5 20.33 5 19.5v-1.28c-.61-.55-1-1.34-1-2.22V6.83l-1.9-1.9a.996.996 0 1 1 1.41-1.41l16.97 16.97c.4.39.4 1.02.01 1.41zM9 15.5c0-.83-.67-1.5-1.5-1.5S6 14.67 6 15.5S6.67 17 7.5 17S9 16.33 9 15.5zM8.17 11L6 8.83V11h2.17z"/>
  </svg>
);
RoundedNoTransferIcon.displayName = 'RoundedNoTransferIcon';
export const NoTransferRoundedIcon = RoundedNoTransferIcon;

export const RoundedNotListedLocationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2c-4.2 0-8 3.22-8 8.2c0 3.18 2.45 6.92 7.34 11.22c.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2C20 5.22 16.2 2 12 2zm.01 14c-.59 0-1.05-.47-1.05-1.05c0-.59.47-1.04 1.05-1.04c.59 0 1.04.45 1.04 1.04c0 .58-.44 1.05-1.04 1.05zm2.51-6.17c-.63.93-1.23 1.21-1.56 1.81c-.08.14-.13.26-.16.49c-.05.39-.36.68-.75.68h-.03c-.44 0-.79-.38-.75-.82c.03-.27.09-.57.25-.84c.41-.73 1.18-1.16 1.63-1.8c.48-.68.21-1.94-1.14-1.94c-.61 0-1.01.32-1.26.7c-.19.29-.57.39-.89.25c-.42-.18-.6-.7-.34-1.07C10.03 6.55 10.88 6 12 6c1.23 0 2.08.56 2.51 1.26c.36.61.58 1.73.01 2.57z"/>
  </svg>
);
RoundedNotListedLocationIcon.displayName = 'RoundedNotListedLocationIcon';
export const NotListedLocationRoundedIcon = RoundedNotListedLocationIcon;

export const RoundedParkIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.96 12h.08c.81 0 1.28-.91.82-1.57l-5.08-7.25a1 1 0 0 0-1.64 0L6.1 10.43c-.46.66.02 1.57.83 1.57h.04l-2.9 4.46c-.44.66.04 1.54.84 1.54h5.08v2.02c0 1.09.89 1.98 1.98 1.98c1.09 0 1.98-.89 1.98-1.98V18h5.15c.8 0 1.28-.89.83-1.55L16.96 12z"/>
  </svg>
);
RoundedParkIcon.displayName = 'RoundedParkIcon';
export const ParkRoundedIcon = RoundedParkIcon;

export const RoundedPedalBikeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.18 10l-1.7-4.68A2.008 2.008 0 0 0 14.6 4H13c-.55 0-1 .45-1 1s.45 1 1 1h1.6l1.46 4h-4.81l-.36-1h.09c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1h.75l1.82 5H9.9c-.44-2.23-2.31-3.88-4.65-3.99C2.45 9.87 0 12.2 0 15c0 2.8 2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h4.2c.44 2.23 2.31 3.88 4.65 3.99c2.8.13 5.25-2.19 5.25-5c0-2.8-2.2-5-5-5h-.82zM7.82 16c-.42 1.23-1.6 2.08-3.02 1.99c-1.49-.09-2.73-1.35-2.8-2.85C1.93 13.39 3.27 12 5 12c1.33 0 2.42.83 2.82 2H6c-.55 0-1 .45-1 1s.45 1 1 1h1.82zm6.28-2h-1.4l-.73-2H15c-.44.58-.76 1.25-.9 2zm4.78 4c-1.54-.06-2.84-1.37-2.88-2.92c-.02-.96.39-1.8 1.05-2.36l.62 1.7c.19.52.76.79 1.28.6c.52-.19.79-.76.6-1.28l-.63-1.73l.01-.01c1.72-.04 3.08 1.29 3.08 3a2.99 2.99 0 0 1-3.13 3z"/>
  </svg>
);
RoundedPedalBikeIcon.displayName = 'RoundedPedalBikeIcon';
export const PedalBikeRoundedIcon = RoundedPedalBikeIcon;

export const RoundedPersonPinIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4l2.29 2.29c.39.39 1.02.39 1.41 0L15 20h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 3.3c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7S9.3 9.49 9.3 8s1.21-2.7 2.7-2.7zM18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z"/>
  </svg>
);
RoundedPersonPinIcon.displayName = 'RoundedPersonPinIcon';
export const PersonPinRoundedIcon = RoundedPersonPinIcon;

export const RoundedPersonPinCircleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2c-4.2 0-8 3.22-8 8.2c0 3.18 2.45 6.92 7.34 11.22c.36.32.97.32 1.33 0C17.55 17.12 20 13.38 20 10.2C20 5.22 16.2 2 12 2zM7.69 12.49C8.88 11.56 10.37 11 12 11s3.12.56 4.31 1.49C15.45 13.98 13.85 15 12 15s-3.45-1.02-4.31-2.51zM12 6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2z"/>
  </svg>
);
RoundedPersonPinCircleIcon.displayName = 'RoundedPersonPinCircleIcon';
export const PersonPinCircleRoundedIcon = RoundedPersonPinCircleIcon;

export const RoundedPestControlIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 14c0-.55-.45-1-1-1h-2.07c-.05-.39-.12-.77-.22-1.14l1.72-.99c.48-.28.64-.89.37-1.37a1.01 1.01 0 0 0-1.37-.37l-1.51.87c-.28-.48-.62-.91-.99-1.29c.04-.23.07-.46.07-.71c0-.8-.24-1.55-.65-2.18l.94-.94a.996.996 0 1 0-1.41-1.41l-1.02 1.02c-1.68-.89-3.1-.33-3.73 0L9.12 3.46a.996.996 0 1 0-1.41 1.41l.94.94C8.24 6.45 8 7.2 8 8c0 .25.03.48.07.72c-.37.38-.71.81-.99 1.28l-1.51-.87a.996.996 0 0 0-1.36.37c-.28.48-.11 1.09.37 1.37l1.72.99c-.1.37-.17.75-.22 1.14H4c-.55 0-1 .45-1 1s.45 1 1 1h2.07c.05.39.12.77.22 1.14l-1.72.99c-.48.28-.64.89-.37 1.37c.28.48.89.64 1.37.37L7.08 18c1.08 1.81 2.88 3 4.92 3s3.84-1.19 4.92-3l1.51.87c.48.28 1.09.11 1.37-.37s.11-1.09-.37-1.37l-1.72-.99c.1-.37.17-.75.22-1.14H20c.55 0 1-.45 1-1zm-9 3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1z"/>
  </svg>
);
RoundedPestControlIcon.displayName = 'RoundedPestControlIcon';
export const PestControlRoundedIcon = RoundedPestControlIcon;

export const RoundedPestControlRodentIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.31 17.38l-2.39-2.13c.52-2.36-1.36-4.25-3.42-4.25c-1.16 0-3.5.9-3.5 3.5c0 .81.27 1.55.74 2.15c.15.2.14.48-.04.66a.51.51 0 0 1-.75-.04c-.6-.77-.95-1.73-.95-2.77c0-1.7.96-3.17 2.35-3.93a5 5 0 0 0-2.28-.57c-2.38 0-4.37 1.65-4.91 3.87a2.993 2.993 0 0 1-2.15-3.14C4.15 9.16 5.54 8 7.11 8h2c1.58 0 2.75-.95 2.87-2.25A2.49 2.49 0 0 0 9.5 3H8.05c-.5 0-.96.34-1.04.83C6.91 4.46 7.39 5 8 5h1.5c.28 0 .5.22.5.5s-.22.5-.5.5H7.16c-2.67 0-4.99 2.03-5.15 4.7A4.995 4.995 0 0 0 6 15.9v.03C6 18.73 8.27 21 11.07 21h8.86c1.87 0 2.81-2.34 1.38-3.62zM18 19c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedPestControlRodentIcon.displayName = 'RoundedPestControlRodentIcon';
export const PestControlRodentRoundedIcon = RoundedPestControlRodentIcon;

export const RoundedPinDropIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 20h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1zm6-13c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-5c3.27 0 7 2.46 7 7.15c0 2.98-2.13 6.12-6.39 9.39c-.36.28-.86.28-1.22 0C7.13 15.26 5 12.13 5 9.15C5 4.46 8.73 2 12 2z"/>
  </svg>
);
RoundedPinDropIcon.displayName = 'RoundedPinDropIcon';
export const PinDropRoundedIcon = RoundedPinDropIcon;

export const RoundedPlaceIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2c-4.2 0-8 3.22-8 8.2c0 3.18 2.45 6.92 7.34 11.23c.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2C20 5.22 16.2 2 12 2zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"/>
  </svg>
);
RoundedPlaceIcon.displayName = 'RoundedPlaceIcon';
export const PlaceRoundedIcon = RoundedPlaceIcon;

export const RoundedPlumbingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.28 4.93l-2.12-2.12c-.78-.78-2.05-.78-2.83 0L11.5 5.64l2.12 2.12l2.12-2.12l3.54 3.54a3.012 3.012 0 0 0 0-4.25zM5.49 13.77c.59.59 1.54.59 2.12 0l2.47-2.47l-2.12-2.13l-2.47 2.47c-.59.59-.59 1.54 0 2.13z"/><path fill={color || 'currentColor'} d="M14.33 8.46l-.71.71l-3.18-3.18a1.49 1.49 0 0 0-2.12 0a1.49 1.49 0 0 0 0 2.12l3.18 3.18l-7 7c-.7.7-.88 1.84-.29 2.65a2.005 2.005 0 0 0 3.05.26l9.19-9.2a.996.996 0 1 0 1.41-1.41l-2.12-2.12a.987.987 0 0 0-1.41-.01z"/>
  </svg>
);
RoundedPlumbingIcon.displayName = 'RoundedPlumbingIcon';
export const PlumbingRoundedIcon = RoundedPlumbingIcon;

export const RoundedRailwayAlertIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 11V8h7.29c-.77-2.6.21-4.61.37-4.97C2.97 2.67 2 5.02 2 7v9.5C2 18.43 3.57 20 5.5 20l-1.21.81A.649.649 0 0 0 4.65 22h10.7a.649.649 0 0 0 .36-1.19L14.5 20c1.93 0 3.5-1.57 3.5-3.5V13c-1.91 0-3.63-.76-4.89-2H4zm6 6c-.83 0-1.5-.67-1.5-1.5S9.17 14 10 14s1.5.67 1.5 1.5S10.83 17 10 17z"/><path fill={color || 'currentColor'} d="M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zm0 8c-.28 0-.5-.22-.5-.5s.22-.5.5-.5s.5.22.5.5s-.22.5-.5.5zm.5-2.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3z"/>
  </svg>
);
RoundedRailwayAlertIcon.displayName = 'RoundedRailwayAlertIcon';
export const RailwayAlertRoundedIcon = RoundedRailwayAlertIcon;

export const RoundedRamenDiningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 2.84c0-.45-.39-.79-.83-.75L4.89 3.9c-.51.05-.89.48-.89.99V12h-.92c-.6 0-1.08.53-1 1.13c.44 3.2 2.75 5.87 5.92 7.12V21c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-.75c3.17-1.25 5.48-3.92 5.92-7.12c.08-.6-.4-1.13-1-1.13H10.5V8h10.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H10.5V4.78l10.83-1.19c.38-.05.67-.37.67-.75zM6.5 5.22V6.5h-1V5.34l1-.12zM5.5 8h1v4h-1V8zM9 12H8V8h1v4zm0-5.5H8V5.06l1-.11V6.5z"/>
  </svg>
);
RoundedRamenDiningIcon.displayName = 'RoundedRamenDiningIcon';
export const RamenDiningRoundedIcon = RoundedRamenDiningIcon;

export const RoundedRampLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 21c-.55 0-1-.45-1-1V6.83l-.88.88A.996.996 0 1 1 8.71 6.3l2.59-2.59a.996.996 0 0 1 1.41 0L15.3 6.3a.996.996 0 1 1-1.41 1.41L13 6.83V9c0 3.62 2.89 6.22 4.97 7.62a.99.99 0 0 1 .14 1.53c-.33.33-.87.4-1.26.13c-1.59-1.06-2.89-2.28-3.85-3.59v5.3c0 .56-.45 1.01-1 1.01z"/>
  </svg>
);
RoundedRampLeftIcon.displayName = 'RoundedRampLeftIcon';
export const RampLeftRoundedIcon = RoundedRampLeftIcon;

export const RoundedRampRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 21c.55 0 1-.45 1-1V6.83l.88.88a.996.996 0 1 0 1.41-1.41L12.7 3.71a.996.996 0 0 0-1.41 0L8.71 6.29a.996.996 0 1 0 1.41 1.41l.88-.87V9c0 3.62-2.89 6.22-4.97 7.62a.99.99 0 0 0-.14 1.53c.33.33.87.4 1.26.13C8.74 17.22 10.04 16 11 14.69v5.3c0 .56.45 1.01 1 1.01z"/>
  </svg>
);
RoundedRampRightIcon.displayName = 'RoundedRampRightIcon';
export const RampRightRoundedIcon = RoundedRampRightIcon;

export const RoundedRateReviewIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm11 0h-6.5l2-2H17c.55 0 1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedRateReviewIcon.displayName = 'RoundedRateReviewIcon';
export const RateReviewRoundedIcon = RoundedRateReviewIcon;

export const RoundedRemoveRoadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 4c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1s1-.45 1-1V5c0-.55-.45-1-1-1zM5 20c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1zm7-12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zm0 6c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zm0 6c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zm9.79-4.29a.996.996 0 0 0-1.41 0L19 17.09l-1.38-1.38a.996.996 0 1 0-1.41 1.41l1.38 1.38l-1.38 1.38a.996.996 0 1 0 1.41 1.41L19 19.91l1.38 1.38a.996.996 0 1 0 1.41-1.41l-1.38-1.38l1.38-1.38a.996.996 0 0 0 0-1.41z"/>
  </svg>
);
RoundedRemoveRoadIcon.displayName = 'RoundedRemoveRoadIcon';
export const RemoveRoadRoundedIcon = RoundedRemoveRoadIcon;

export const RoundedRestaurantIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 6v6c0 1.1.9 2 2 2h1v7c0 .55.45 1 1 1s1-.45 1-1V3.13c0-.65-.61-1.13-1.24-.98C17.6 2.68 16 4.51 16 6zm-5 3H9V3c0-.55-.45-1-1-1s-1 .45-1 1v6H5V3c0-.55-.45-1-1-1s-1 .45-1 1v6c0 2.21 1.79 4 4 4v8c0 .55.45 1 1 1s1-.45 1-1v-8c2.21 0 4-1.79 4-4V3c0-.55-.45-1-1-1s-1 .45-1 1v6z"/>
  </svg>
);
RoundedRestaurantIcon.displayName = 'RoundedRestaurantIcon';
export const RestaurantRoundedIcon = RoundedRestaurantIcon;

export const RoundedRestaurantMenuIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8.1 13.34l2.83-2.83l-6.19-6.18c-.48-.48-1.31-.35-1.61.27c-.71 1.49-.45 3.32.78 4.56l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38c1.91-1.91 2.28-4.65.81-6.12c-1.46-1.46-4.2-1.1-6.12.81c-1.59 1.59-2.09 3.74-1.38 5.27L4.4 19.17a.996.996 0 1 0 1.41 1.41L12 14.41l6.18 6.18a.996.996 0 1 0 1.41-1.41L13.41 13l1.47-1.47z"/>
  </svg>
);
RoundedRestaurantMenuIcon.displayName = 'RoundedRestaurantMenuIcon';
export const RestaurantMenuRoundedIcon = RoundedRestaurantMenuIcon;

export const RoundedRoundaboutLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 21c-.55 0-1-.45-1-1v-5.09c0-.98.71-1.8 1.67-1.97a3.999 3.999 0 1 0-4.61-4.61c-.17.96-.99 1.67-1.97 1.67H5.83l.88.88a.996.996 0 1 1-1.41 1.41L2.71 9.71a.996.996 0 0 1 0-1.41L5.3 5.71a.996.996 0 1 1 1.41 1.41L5.83 8h4.25A6 6 0 0 1 16 3c3.31 0 6 2.69 6 6c0 2.97-2.16 5.44-5 5.92V20c0 .55-.45 1-1 1z"/>
  </svg>
);
RoundedRoundaboutLeftIcon.displayName = 'RoundedRoundaboutLeftIcon';
export const RoundaboutLeftRoundedIcon = RoundedRoundaboutLeftIcon;

export const RoundedRoundaboutRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8 21c.55 0 1-.45 1-1v-5.09c0-.98-.71-1.8-1.67-1.97a3.999 3.999 0 1 1 4.61-4.61c.17.96.99 1.67 1.97 1.67h4.26l-.88.88a.996.996 0 1 0 1.41 1.41l2.59-2.59a.996.996 0 0 0 0-1.41L18.7 5.7a.996.996 0 1 0-1.41 1.41l.88.89h-4.25C13.44 5.16 10.97 3 8 3C4.69 3 2 5.69 2 9c0 2.97 2.16 5.44 5 5.92V20c0 .55.45 1 1 1z"/>
  </svg>
);
RoundedRoundaboutRightIcon.displayName = 'RoundedRoundaboutRightIcon';
export const RoundaboutRightRoundedIcon = RoundedRoundaboutRightIcon;

export const RoundedRouteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 15.18V7c0-2.21-1.79-4-4-4s-4 1.79-4 4v10c0 1.1-.9 2-2 2s-2-.9-2-2V8.82C8.16 8.4 9 7.3 9 6c0-1.66-1.34-3-3-3S3 4.34 3 6c0 1.3.84 2.4 2 2.82V17c0 2.21 1.79 4 4 4s4-1.79 4-4V7c0-1.1.9-2 2-2s2 .9 2 2v8.18A2.996 2.996 0 0 0 18 21c1.66 0 3-1.34 3-3c0-1.3-.84-2.4-2-2.82z"/>
  </svg>
);
RoundedRouteIcon.displayName = 'RoundedRouteIcon';
export const RouteRoundedIcon = RoundedRouteIcon;

export const RoundedRunCircleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm1.5 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm1.91 5.91c-.71-.2-1.63-.74-2.32-1.66l-.41 2.35l1.19 1.3c.08.08.13.2.13.32v3.28c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-3.08l-1.11-1.21l-.43 2.15c-.05.27-.32.45-.59.39l-2.78-.57a.5.5 0 0 1-.39-.59c.06-.27.32-.44.59-.39l2.29.47l.96-4.89l-1.54.57v1.15c0 .28-.22.5-.5.5s-.5-.22-.5-.5V10c0-.21.13-.4.33-.47l2.95-1.09a1 1 0 0 1 1.25.51c.65 1.35 1.55 1.85 2.1 2c.22.05.37.23.37.45v.04c0 .31-.29.55-.59.47z"/>
  </svg>
);
RoundedRunCircleIcon.displayName = 'RoundedRunCircleIcon';
export const RunCircleRoundedIcon = RoundedRunCircleIcon;

export const RoundedSafetyCheckIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11.3 2.26l-6 2.25C4.52 4.81 4 5.55 4 6.39v4.7c0 4.83 3.13 9.37 7.43 10.75c.37.12.77.12 1.14 0c4.3-1.38 7.43-5.91 7.43-10.75v-4.7a2 2 0 0 0-1.3-1.87l-6-2.25c-.45-.18-.95-.18-1.4-.01zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm2-3c-.2.2-.51.2-.71 0l-1.65-1.65a.51.51 0 0 1-.15-.35V9.5c.01-.28.23-.5.51-.5s.5.22.5.5v2.29l1.5 1.5c.2.2.2.51 0 .71z"/>
  </svg>
);
RoundedSafetyCheckIcon.displayName = 'RoundedSafetyCheckIcon';
export const SafetyCheckRoundedIcon = RoundedSafetyCheckIcon;

export const RoundedSailingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 13V3.59c0-.49-.63-.69-.91-.29l-6.54 9.41c-.23.33.01.79.41.79h6.54c.28 0 .5-.22.5-.5zm9.99-.02C20.72 7.07 15.9 2.32 13.4 1.23c-.37-.16-.77.2-.67.59c.3 1.13.76 3.28.76 5.68c0 2.44-.49 4.39-.78 5.35c-.1.32.14.65.48.65h7.28c.29 0 .53-.24.52-.52zM20.62 15H3.38c-.73 0-1.22.76-.92 1.42c.43.92 1.07 1.71 1.86 2.31c.38-.16.74-.38 1.06-.63c.35-.29.87-.29 1.23 0c.67.53 1.49.9 2.39.9c.9 0 1.72-.37 2.39-.91c.35-.28.87-.28 1.22 0c.67.54 1.49.91 2.39.91c.9 0 1.72-.37 2.39-.91c.35-.29.87-.28 1.23 0c.32.26.67.48 1.06.63c.79-.6 1.43-1.39 1.86-2.31c.3-.65-.19-1.41-.92-1.41zM22 22c0-.55-.45-1-1-1c-.87 0-1.73-.24-2.53-.7a.954.954 0 0 0-.94 0c-1.59.9-3.47.9-5.06 0a.98.98 0 0 0-.94 0c-1.59.9-3.47.9-5.06 0a.98.98 0 0 0-.94 0c-.8.46-1.66.7-2.53.7c-.55 0-1 .45-1 1s.45 1 1 1c1.15 0 2.3-.31 3.33-.94c1.66 1.11 3.78 1.01 5.58.14a6.36 6.36 0 0 0 6.09.05c.95.5 1.97.75 3 .75c.55 0 1-.45 1-1z"/>
  </svg>
);
RoundedSailingIcon.displayName = 'RoundedSailingIcon';
export const SailingRoundedIcon = RoundedSailingIcon;

export const RoundedSatelliteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 5h3c0 1.66-1.34 3-3 3V5zm0 5.91c0-.49.36-.9.85-.98c2.08-.36 3.72-2 4.08-4.08c.08-.49.49-.85.98-.85c.61 0 1.09.53 1 1.13a6.997 6.997 0 0 1-5.77 5.78c-.6.1-1.14-.39-1.14-1zm.63 6.28l2.49-3.2a.5.5 0 0 1 .78-.01l2.1 2.53l3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68a.5.5 0 0 1-.4.8H6.02c-.41-.01-.65-.49-.39-.82z"/>
  </svg>
);
RoundedSatelliteIcon.displayName = 'RoundedSatelliteIcon';
export const SatelliteRoundedIcon = RoundedSatelliteIcon;

export const RoundedScreenRotationAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.53 9.29c.63.63.18 1.71-.71 1.71c-.27 0-.52-.11-.71-.29L10.4 4L5.41 9H7c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1s1 .45 1 1v1.59l5-5c.78-.78 2.05-.78 2.83 0l6.7 6.7zM5.47 14.71c-.63-.63-.18-1.71.71-1.71c.27 0 .52.11.71.29L13.6 20l4.99-5H17c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-1.59l-5 5c-.78.78-2.05.78-2.83 0l-6.7-6.7z"/>
  </svg>
);
RoundedScreenRotationAltIcon.displayName = 'RoundedScreenRotationAltIcon';
export const ScreenRotationAltRoundedIcon = RoundedScreenRotationAltIcon;

export const RoundedSetMealIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20.3 17.6l-16.47.86c-.41.02-.77-.3-.79-.71c-.02-.41.3-.77.71-.79l16.48-.86c.41-.02.77.3.79.71c.02.41-.3.77-.72.79zm-.05 1.88H3.75c-.41 0-.75.34-.75.75s.34.75.75.75h16.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zM22 5v7c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-2.88 1.09c-1.25.27-2.19 1.11-2.33 2.14c-.64-.73-2.73-2.73-6.54-2.73c-3.44 0-5.48 1.63-6.31 2.49c-.28.29-.28.74 0 1.03c.83.86 2.87 2.49 6.31 2.49c3.81 0 5.9-2 6.54-2.73c.14 1.02 1.08 1.86 2.33 2.14c.46.1.88-.28.88-.74V6.84c0-.47-.43-.85-.88-.75z"/>
  </svg>
);
RoundedSetMealIcon.displayName = 'RoundedSetMealIcon';
export const SetMealRoundedIcon = RoundedSetMealIcon;

export const RoundedShareArrivalTimeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8 4c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8zm3.11 11.11a.99.99 0 0 1-1.39 0l-2.14-2.14c-.37-.37-.58-.88-.58-1.41V9c0-.57.48-1.04 1.07-1c.53.04.93.5.93 1.03v2.58l2.11 2.11a.99.99 0 0 1 0 1.39zm9.79 1.79c-.38-.38-.4-.91-.11-1.3c.76-1 1.2-2.25 1.2-3.6s-.45-2.6-1.2-3.6c-.3-.39-.27-.93.11-1.3a.989.989 0 0 1 1.48.09C23.4 8.52 24 10.19 24 12s-.6 3.48-1.62 4.82c-.36.47-1.06.5-1.48.08zm-2.52-2.52c-.36-.36-.37-.83-.16-1.23c.18-.34.28-.74.28-1.15s-.1-.81-.28-1.15c-.21-.4-.18-.89.14-1.21c.49-.49 1.26-.38 1.58.19c.36.64.56 1.39.56 2.17s-.2 1.53-.56 2.17c-.31.57-1.1.67-1.56.21z"/>
  </svg>
);
RoundedShareArrivalTimeIcon.displayName = 'RoundedShareArrivalTimeIcon';
export const ShareArrivalTimeRoundedIcon = RoundedShareArrivalTimeIcon;

export const RoundedSignpostIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 10h5l3-3l-3-3h-5V2h-2v2H4v6h7v2H6l-3 3l3 3h5v4h2v-4h7v-6h-7z"/>
  </svg>
);
RoundedSignpostIcon.displayName = 'RoundedSignpostIcon';
export const SignpostRoundedIcon = RoundedSignpostIcon;

export const RoundedSnowmobileIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 6c0 .55.45 1 1 1h1.25l1.45 1.3L11 11l-9.12-.96a1.7 1.7 0 0 0-.67 3.32l3.33 1l-3.49 1.88C-.77 17.22-.07 20 2 20h6c2.21 0 4-1.79 4-4h4l2 2h-2c-.55 0-1 .45-1 1s.45 1 1 1h5c1.13 0 2.11-.62 2.63-1.55c.36-.65-.15-1.45-.9-1.45c-.34 0-.68.16-.84.47c-.17.31-.51.53-.89.53h-.17l-2.2-2.2C20.58 15.37 22 14.4 22 13c0-.89-7.72-7.75-7.72-7.75a.985.985 0 0 0-.66-.25H12c-.55 0-1 .45-1 1zM8 18H2l5.25-2.83L10 16a2 2 0 0 1-2 2z"/>
  </svg>
);
RoundedSnowmobileIcon.displayName = 'RoundedSnowmobileIcon';
export const SnowmobileRoundedIcon = RoundedSnowmobileIcon;

export const RoundedSosIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13.5 7h-3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8h-3V9h3v6zM3 9v2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H2c-.55 0-1-.45-1-1s.45-1 1-1h3v-2H3c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3c.55 0 1 .45 1 1s-.45 1-1 1H3zm16 0v2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-2h-2c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3c.55 0 1 .45 1 1s-.45 1-1 1h-3z"/>
  </svg>
);
RoundedSosIcon.displayName = 'RoundedSosIcon';
export const SosRoundedIcon = RoundedSosIcon;

export const RoundedSoupKitchenIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.15 13.5c-.46 0-.8-.42-.71-.87c.04-.18.06-.39.06-.63c0-1-1-2.85-1-3.62c0-.29.03-.59.17-.93A.72.72 0 0 1 5.34 7c.45 0 .8.42.71.86c-.04.18-.05.35-.05.52C6 9.15 7 11 7 12c0 .42-.08.76-.17 1.01c-.1.3-.37.49-.68.49zm6.5 0c.31 0 .58-.19.68-.49c.09-.25.17-.59.17-1.01c0-1-1-2.85-1-3.62c0-.17.01-.34.04-.51a.723.723 0 0 0-.7-.87a.73.73 0 0 0-.67.45c-.14.34-.17.63-.17.93c0 .77 1 2.62 1 3.62c0 .24-.02.45-.06.63c-.09.45.25.87.71.87zm-3.25 0c.31 0 .58-.19.68-.49c.09-.25.17-.59.17-1.01c0-1-1-2.85-1-3.62c0-.17.01-.34.04-.51a.723.723 0 0 0-.7-.87c-.3 0-.56.18-.67.45c-.14.34-.17.63-.17.93c0 .77 1 2.63 1 3.62c0 .24-.02.45-.06.63c-.09.45.25.87.71.87zm11.06-7.13a.991.991 0 0 0 1.12-.91c.01-.18.02-.34.02-.46c0-1.65-1.35-3-3-3c-1.54 0-2.81 1.16-2.98 2.65L14.53 15H3.99c-.6 0-1.07.54-.98 1.14C3.54 19.46 6.39 22 9.75 22c3.48 0 6.34-2.73 6.71-6.23L17.61 4.9c.05-.51.47-.9.99-.9c.55 0 1 .45 1 1c0 .07-.01.18-.01.31c-.04.53.34.99.87 1.06z"/>
  </svg>
);
RoundedSoupKitchenIcon.displayName = 'RoundedSoupKitchenIcon';
export const SoupKitchenRoundedIcon = RoundedSoupKitchenIcon;

export const RoundedStadiumIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.11 5.45L3.72 6.64A.502.502 0 0 1 3 6.19V3.81c0-.37.39-.61.72-.45L6.1 4.55c.37.19.37.71.01.9zM18 3.81v2.38c0 .37.39.61.72.45l2.38-1.19c.37-.18.37-.71 0-.89l-2.38-1.19a.494.494 0 0 0-.72.44zm-7-1v2.38c0 .37.39.61.72.45l2.38-1.19c.37-.18.37-.71 0-.89l-2.38-1.19a.494.494 0 0 0-.72.44zm-6 7.23c1.38.49 3.77.96 7 .96s5.62-.47 7-.96C19 9.86 16.22 9 12 9s-7 .86-7 1.04zM14 17h-4c-.55 0-1 .45-1 1v3.88c-4.06-.39-7-1.54-7-2.88v-9c0-1.66 4.48-3 10-3s10 1.34 10 3v9c0 1.34-2.94 2.48-7 2.87V18c0-.55-.45-1-1-1z"/>
  </svg>
);
RoundedStadiumIcon.displayName = 'RoundedStadiumIcon';
export const StadiumRoundedIcon = RoundedStadiumIcon;

export const RoundedStoreMallDirectoryIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20.16 7.8c-.09-.46-.5-.8-.98-.8H4.82c-.48 0-.89.34-.98.8L3 12v1c0 .55.45 1 1 1v5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-5h4v5c0 .55.45 1 1 1s1-.45 1-1v-5c.55 0 1-.45 1-1v-1l-.84-4.2zM12 18H6v-4h6v4zM5 6h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1z"/>
  </svg>
);
RoundedStoreMallDirectoryIcon.displayName = 'RoundedStoreMallDirectoryIcon';
export const StoreMallDirectoryRoundedIcon = RoundedStoreMallDirectoryIcon;

export const RoundedStraightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 6.83l.88.88a.996.996 0 1 0 1.41-1.41L12.7 3.71a.996.996 0 0 0-1.41 0L8.71 6.29a.996.996 0 1 0 1.41 1.41l.88-.87V20c0 .55.45 1 1 1s1-.45 1-1V6.83z"/>
  </svg>
);
RoundedStraightIcon.displayName = 'RoundedStraightIcon';
export const StraightRoundedIcon = RoundedStraightIcon;

export const RoundedStreetviewIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.56 14.33c-.34.27-.56.7-.56 1.17V21h7c1.1 0 2-.9 2-2v-5.98c-.94-.33-1.95-.52-3-.52c-2.03 0-3.93.7-5.44 1.83z"/><circle cx="18" cy="6" r="5"/><path fill={color || 'currentColor'} d="M11.5 6c0-1.08.27-2.1.74-3H5c-1.1 0-2 .9-2 2v14c0 .55.23 1.05.59 1.41l9.82-9.82A6.435 6.435 0 0 1 11.5 6z"/>
  </svg>
);
RoundedStreetviewIcon.displayName = 'RoundedStreetviewIcon';
export const StreetviewRoundedIcon = RoundedStreetviewIcon;

export const RoundedSubwayIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="8.5" cy="16" r="1"/><circle cx="15.5" cy="16" r="1"/><path fill={color || 'currentColor'} d="M7.01 9h10v5h-10zM17.8 2.8C16 2.09 13.86 2 12 2s-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06zm.2 12.7c0 1.54-1.16 2.79-2.65 2.96l1.15 1.16V20h-1.67l-1.5-1.5h-2.66L9.17 20H7.5v-.38l1.15-1.16A2.979 2.979 0 0 1 6 15.5V9c0-2.63 3-3 6-3s6 .37 6 3v6.5z"/>
  </svg>
);
RoundedSubwayIcon.displayName = 'RoundedSubwayIcon';
export const SubwayRoundedIcon = RoundedSubwayIcon;

export const RoundedSynagogueIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 8.94V21h4v-4.89c0-1 .68-1.92 1.66-2.08A2 2 0 0 1 14 16v5h4V8.94a2 2 0 0 0-.72-1.54l-4-3.33c-.74-.62-1.82-.62-2.56 0l-4 3.33c-.46.38-.72.94-.72 1.54zM13.5 10c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5zM3 5c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2zm0 16h2V9H1v10c0 1.1.9 2 2 2zM21 5c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2zm-2 16h2c1.1 0 2-.9 2-2V9h-4v12z"/>
  </svg>
);
RoundedSynagogueIcon.displayName = 'RoundedSynagogueIcon';
export const SynagogueRoundedIcon = RoundedSynagogueIcon;

export const RoundedTakeoutDiningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.29 6.75a.984.984 0 0 0-1.4 0l-.89.88l.03-.56l-3.46-3.48c-.38-.38-.89-.59-1.42-.59h-4.3c-.53 0-1.04.21-1.42.59L4.97 7.07l.03.5l-.89-.87a.98.98 0 0 0-1.39.01l-.02.02a.984.984 0 0 0 .02 1.4L4.66 10h14.69l1.92-1.84c.4-.38.41-1.02.02-1.41zm-15.5 11.4c.08 1.04.95 1.85 2 1.85h8.43c1.05 0 1.92-.81 1.99-1.85l.49-6.6H5.3l.49 6.6z"/>
  </svg>
);
RoundedTakeoutDiningIcon.displayName = 'RoundedTakeoutDiningIcon';
export const TakeoutDiningRoundedIcon = RoundedTakeoutDiningIcon;

export const RoundedTaxiAlertIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 13c-1.91 0-3.63-.76-4.89-2h-8.3l1.04-3h5.44C11.1 7.37 11 6.7 11 6s.1-1.37.29-2H9c-.55 0-1 .45-1 1v1H5.5c-.66 0-1.21.42-1.42 1.01L2 13v7.5c0 .82.67 1.5 1.5 1.5S5 21.32 5 20.5V20h12v.5c0 .82.67 1.5 1.5 1.5s1.5-.68 1.5-1.5V13l-.09-.27c-.61.17-1.25.27-1.91.27zM6.5 17c-.83 0-1.5-.67-1.5-1.5S5.67 14 6.5 14s1.5.67 1.5 1.5S7.33 17 6.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/><path fill={color || 'currentColor'} d="M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zm0 8c-.28 0-.5-.22-.5-.5s.22-.5.5-.5s.5.22.5.5s-.22.5-.5.5zm.5-2.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3z"/>
  </svg>
);
RoundedTaxiAlertIcon.displayName = 'RoundedTaxiAlertIcon';
export const TaxiAlertRoundedIcon = RoundedTaxiAlertIcon;

export const RoundedTempleBuddhistIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.85 9.01c-.41 0-.82.24-.95.63c-.26.79-1.01 1.36-1.88 1.36H4.98c-.87 0-1.62-.57-1.88-1.36c-.13-.39-.53-.62-.94-.62c-.66 0-1.16.64-.95 1.26A4 4 0 0 0 4 12.86V20c0 1.1.9 2 2 2h4v-2.89c0-1 .68-1.92 1.66-2.08A2 2 0 0 1 14 19v3h4c1.1 0 2-.9 2-2v-7.14c.46-.12 2.22-.76 2.81-2.58c.2-.63-.3-1.28-.96-1.27z"/><path fill={color || 'currentColor'} d="M6 8.86V10h12V8.86c.46-.12 2.22-.76 2.81-2.58c.2-.63-.3-1.27-.96-1.27c-.41 0-.82.24-.95.63c-.26.79-1.01 1.36-1.88 1.36H6.98c-.87 0-1.62-.57-1.88-1.36c-.13-.39-.53-.62-.94-.62c-.66 0-1.16.64-.95 1.26A3.98 3.98 0 0 0 6 8.86z"/><path fill={color || 'currentColor'} d="M11.2 2.07L8.25 6h7.5L12.8 2.07a.993.993 0 0 0-1.6 0z"/>
  </svg>
);
RoundedTempleBuddhistIcon.displayName = 'RoundedTempleBuddhistIcon';
export const TempleBuddhistRoundedIcon = RoundedTempleBuddhistIcon;

export const RoundedTempleHinduIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.6 11h10.8l-.9-3h-9zM20 12v1H4v-1c0-.55-.45-1-1-1s-1 .45-1 1v8c0 1.1.9 2 2 2h6v-3c0-1.1.9-2 2-2s2 .9 2 2v3h6c1.1 0 2-.9 2-2v-8c0-.55-.45-1-1-1s-1 .45-1 1zm-4.1-6L15 3V2c0-.55-.45-1-1-1s-1 .45-1 1v1h-2.03V2c0-.55-.45-1-1-1s-1 .45-1 1v1.12L8.1 6h7.8z"/>
  </svg>
);
RoundedTempleHinduIcon.displayName = 'RoundedTempleHinduIcon';
export const TempleHinduRoundedIcon = RoundedTempleHinduIcon;

export const RoundedTerrainIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13.2 7.07L10.25 11l2.25 3c.33.44.24 1.07-.2 1.4a.994.994 0 0 1-1.4-.2c-1.05-1.4-2.31-3.07-3.1-4.14c-.4-.53-1.2-.53-1.6 0l-4 5.33c-.49.67-.02 1.61.8 1.61h18c.82 0 1.29-.94.8-1.6l-7-9.33a.993.993 0 0 0-1.6 0z"/>
  </svg>
);
RoundedTerrainIcon.displayName = 'RoundedTerrainIcon';
export const TerrainRoundedIcon = RoundedTerrainIcon;

export const RoundedTheaterComedyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 2h-8c-1.1 0-2 .9-2 2v3.5h1.5c1.1 0 2 .9 2 2v4.95c1.04.48 2.24.68 3.5.47c2.93-.49 5-3.17 5-6.14V4c0-1.1-.9-2-2-2zm-7 4.5c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1zm4.85 4.38h-3.72c-.38 0-.63-.41-.44-.75c.39-.66 1.27-1.13 2.3-1.13s1.91.47 2.3 1.14c.19.33-.06.74-.44.74zM19 7.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/><path fill={color || 'currentColor'} d="M11 9H3c-1.1 0-2 .9-2 2v4.79c0 3.05 2.19 5.77 5.21 6.16C9.87 22.42 13 19.57 13 16v-5c0-1.1-.9-2-2-2zm-7 4.5c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1zm5.3 3.25c-.38.67-1.27 1.14-2.3 1.14s-1.91-.47-2.3-1.14c-.19-.34.06-.75.44-.75h3.72c.38 0 .63.41.44.75zM9 14.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedTheaterComedyIcon.displayName = 'RoundedTheaterComedyIcon';
export const TheaterComedyRoundedIcon = RoundedTheaterComedyIcon;

export const RoundedTireRepairIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 7a1.003 1.003 0 0 0 1.71.71c.4-.4 1.04-2.46 1.04-2.46s-2.06.64-2.46 1.04c-.18.18-.29.43-.29.71z"/><path fill={color || 'currentColor'} d="M19 2c-2.76 0-5 2.24-5 5c0 2.05 1.23 3.81 3 4.58V12c0 .55.45 1 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1v-3a3.009 3.009 0 0 0-4-2.83V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-4c0-.55.45-1 1-1s1 .45 1 1v3c0 1.65 1.35 3 3 3s3-1.35 3-3v-5c.55 0 1-.45 1-1v-.42c1.77-.77 3-2.53 3-4.58c0-2.76-2.24-5-5-5zM6 19.5l-2-2v-2.83l2 2v2.83zm0-5l-2-2V9.67l2 2v2.83zm0-5l-2-2V4.67l2 2V9.5zm4 8l-2 2v-2.83l2-2v2.83zm0-5l-2 2v-2.83l2-2v2.83zm0-5l-2 2V6.67l2-2V7.5zm9 2.5c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3z"/>
  </svg>
);
RoundedTireRepairIcon.displayName = 'RoundedTireRepairIcon';
export const TireRepairRoundedIcon = RoundedTireRepairIcon;

export const RoundedTrafficIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.96 10.59a.514.514 0 0 0-.5-.59H17V8.86a4.01 4.01 0 0 0 2.96-3.27a.514.514 0 0 0-.5-.59H17V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H4.54c-.31 0-.54.28-.5.59A4.01 4.01 0 0 0 7 8.86V10H4.54c-.31 0-.54.28-.5.59A4.01 4.01 0 0 0 7 13.86V15H4.54c-.31 0-.54.28-.5.59A4.01 4.01 0 0 0 7 18.86V20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1.14a4.01 4.01 0 0 0 2.96-3.27a.514.514 0 0 0-.5-.59H17v-1.14a4.01 4.01 0 0 0 2.96-3.27zM12 19a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 19zm0-5a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 14zm0-5a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 1 1 0 4z"/>
  </svg>
);
RoundedTrafficIcon.displayName = 'RoundedTrafficIcon';
export const TrafficRoundedIcon = RoundedTrafficIcon;

export const RoundedTrainIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19l-1.15 1.15a.5.5 0 0 0 .36.85H7.8c.13 0 .26-.05.35-.15L10 19h4l1.85 1.85c.09.09.22.15.35.15h1.09c.45 0 .67-.54.35-.85L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm5.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm1.5-7h-5V6h5v4z"/>
  </svg>
);
RoundedTrainIcon.displayName = 'RoundedTrainIcon';
export const TrainRoundedIcon = RoundedTrainIcon;

export const RoundedTramIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 5l.75-1.5H17V2H7v1.5h4.75L11 5c-3.13.09-6 .73-6 3.5V17c0 1.5 1.11 2.73 2.55 2.95l-1.19 1.19c-.32.32-.1.86.35.86H7.8c.13 0 .26-.05.35-.15L10 20h4l1.85 1.85c.09.09.22.15.35.15h1.09c.45 0 .67-.54.35-.85l-1.19-1.19C17.89 19.73 19 18.5 19 17V8.5c0-2.77-2.87-3.41-6-3.5zm-1 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm5-4.5H7V9h10v5z"/>
  </svg>
);
RoundedTramIcon.displayName = 'RoundedTramIcon';
export const TramRoundedIcon = RoundedTramIcon;

export const RoundedTransferWithinAStationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 15.5h-5.52v-.77c0-.36-.44-.54-.69-.29l-1.51 1.52c-.16.16-.16.41 0 .57l1.51 1.52c.26.26.69.08.69-.29V17H22v-1.5zm-.28 4.71l-1.51-1.52a.402.402 0 0 0-.69.29v.77H14v1.5h5.52v.77c0 .36.44.54.69.29l1.51-1.52a.41.41 0 0 0 0-.58zM9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zM5.75 8.9L3.23 21.81c-.12.62.35 1.19.98 1.19h.09c.47 0 .88-.33.98-.79L6.85 15L9 17v5c0 .55.45 1 1 1s1-.45 1-1v-5.72c0-.53-.21-1.04-.59-1.41L8.95 13.4l.6-3a6.967 6.967 0 0 0 4.31 2.51c.6.1 1.14-.39 1.14-1c0-.49-.36-.9-.84-.98a5.14 5.14 0 0 1-3.51-2.38l-.95-1.6C9.35 6.35 8.7 6 8 6c-.25 0-.5.05-.75.15L3.24 7.79C2.49 8.1 2 8.83 2 9.64V12c0 .55.45 1 1 1s1-.45 1-1V9.65l1.75-.75"/>
  </svg>
);
RoundedTransferWithinAStationIcon.displayName = 'RoundedTransferWithinAStationIcon';
export const TransferWithinAStationRoundedIcon = RoundedTransferWithinAStationIcon;

export const RoundedTransitEnterexitIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.5 18H8c-1.1 0-2-.9-2-2V9.5C6 8.67 6.67 8 7.5 8S9 8.67 9 9.5v3.27L14.95 7c.57-.55 1.48-.54 2.04.02s.56 1.47.01 2.04L11.15 15h3.35c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
  </svg>
);
RoundedTransitEnterexitIcon.displayName = 'RoundedTransitEnterexitIcon';
export const TransitEnterexitRoundedIcon = RoundedTransitEnterexitIcon;

export const RoundedTripOriginIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6s-6 2.69-6 6s2.69 6 6 6z"/>
  </svg>
);
RoundedTripOriginIcon.displayName = 'RoundedTripOriginIcon';
export const TripOriginRoundedIcon = RoundedTripOriginIcon;

export const RoundedTurnLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7.71 13.29a.996.996 0 0 1-1.41 0L3.71 10.7a.996.996 0 0 1 0-1.41L6.3 6.7a.996.996 0 1 1 1.41 1.41L6.83 9H15c1.1 0 2 .9 2 2v8c0 .55-.45 1-1 1s-1-.45-1-1v-8H6.83l.88.88c.39.39.39 1.02 0 1.41z"/>
  </svg>
);
RoundedTurnLeftIcon.displayName = 'RoundedTurnLeftIcon';
export const TurnLeftRoundedIcon = RoundedTurnLeftIcon;

export const RoundedTurnRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.29 13.29c.39.39 1.02.39 1.41 0l2.59-2.59a.996.996 0 0 0 0-1.41L17.7 6.7a.996.996 0 1 0-1.41 1.41l.88.89H9c-1.1 0-2 .9-2 2v8c0 .55.45 1 1 1s1-.45 1-1v-8h8.17l-.88.88a.996.996 0 0 0 0 1.41z"/>
  </svg>
);
RoundedTurnRightIcon.displayName = 'RoundedTurnRightIcon';
export const TurnRightRoundedIcon = RoundedTurnRightIcon;

export const RoundedTurnSharpLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8 6.83l.88.88a.996.996 0 1 0 1.41-1.41L7.71 3.71a.996.996 0 0 0-1.41 0L3.71 6.29A.996.996 0 1 0 5.12 7.7L6 6.83V13c0 1.1.9 2 2 2h8v5c0 .55.45 1 1 1s1-.45 1-1v-5c0-1.1-.9-2-2-2H8V6.83z"/>
  </svg>
);
RoundedTurnSharpLeftIcon.displayName = 'RoundedTurnSharpLeftIcon';
export const TurnSharpLeftRoundedIcon = RoundedTurnSharpLeftIcon;

export const RoundedTurnSharpRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 6.83l-.88.88a.996.996 0 1 1-1.41-1.41l2.59-2.59a.996.996 0 0 1 1.41 0L20.3 6.3a.996.996 0 1 1-1.41 1.41L18 6.83V13c0 1.1-.9 2-2 2H8v5c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-1.1.9-2 2-2h8V6.83z"/>
  </svg>
);
RoundedTurnSharpRightIcon.displayName = 'RoundedTurnSharpRightIcon';
export const TurnSharpRightRoundedIcon = RoundedTurnSharpRightIcon;

export const RoundedTurnSlightLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11.66 5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v3.66c0 .55.45 1 1 1s1-.45 1-1V7.41l5 5V19c0 .55.45 1 1 1s1-.45 1-1v-6.58c0-.53-.21-1.04-.59-1.41l-5-5h1.24A1.02 1.02 0 0 0 11.66 5z"/>
  </svg>
);
RoundedTurnSlightLeftIcon.displayName = 'RoundedTurnSlightLeftIcon';
export const TurnSlightLeftRoundedIcon = RoundedTurnSlightLeftIcon;

export const RoundedTurnSlightRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.34 5c0-.55.45-1 1-1H17c.55 0 1 .45 1 1v3.66c0 .55-.45 1-1 1s-1-.45-1-1V7.41l-5 5V19c0 .55-.45 1-1 1s-1-.45-1-1v-6.58c0-.53.21-1.04.59-1.41l5-5h-1.24A1.02 1.02 0 0 1 12.34 5z"/>
  </svg>
);
RoundedTurnSlightRightIcon.displayName = 'RoundedTurnSlightRightIcon';
export const TurnSlightRightRoundedIcon = RoundedTurnSlightRightIcon;

export const RoundedTwoWheelerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 11c-.18 0-.36.03-.53.05L17.41 9H19c.55 0 1-.45 1-1v-.38c0-.74-.78-1.23-1.45-.89l-2.28 1.14L13.7 5.3A.976.976 0 0 0 13 5h-3c-.55 0-1 .45-1 1s.45 1 1 1h2.17c.27 0 .52.11.71.29L14.59 9h-3.35c-.16 0-.31.04-.45.11l-3.14 1.57a.99.99 0 0 1-1.15-.19l-1.2-1.2C5.11 9.11 4.85 9 4.59 9H1c-.55 0-1 .45-1 1s.45 1 1 1h3a4 4 0 0 0-3.89 4.94a3.96 3.96 0 0 0 2.95 2.95A4 4 0 0 0 8 15l1.41 1.41c.38.38.89.59 1.42.59h1.01c.72 0 1.38-.38 1.74-1.01l2.91-5.09l1.01 1.01a3.974 3.974 0 0 0-1.38 4.05c.34 1.44 1.51 2.61 2.95 2.94A4.01 4.01 0 0 0 24 15c0-2.21-1.79-4-4-4zM4 17c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm16 0c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"/>
  </svg>
);
RoundedTwoWheelerIcon.displayName = 'RoundedTwoWheelerIcon';
export const TwoWheelerRoundedIcon = RoundedTwoWheelerIcon;

export const RoundedUTurnLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3.71 12.29a.996.996 0 0 1 1.41 0l.88.88V9c0-3.31 2.69-6 6-6s6 2.69 6 6v11c0 .55-.45 1-1 1s-1-.45-1-1V9c0-2.21-1.79-4-4-4S8 6.79 8 9v4.17l.88-.88a.996.996 0 1 1 1.41 1.41L7.7 16.29a.996.996 0 0 1-1.41 0L3.7 13.7c-.38-.38-.38-1.02.01-1.41z"/>
  </svg>
);
RoundedUTurnLeftIcon.displayName = 'RoundedUTurnLeftIcon';
export const UTurnLeftRoundedIcon = RoundedUTurnLeftIcon;

export const RoundedUTurnRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20.29 12.29a.996.996 0 0 0-1.41 0l-.88.88V9c0-3.31-2.69-6-6-6S6 5.69 6 9v11c0 .55.45 1 1 1s1-.45 1-1V9c0-2.21 1.79-4 4-4s4 1.79 4 4v4.17l-.88-.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.38-.38.38-1.02-.01-1.41z"/>
  </svg>
);
RoundedUTurnRightIcon.displayName = 'RoundedUTurnRightIcon';
export const UTurnRightRoundedIcon = RoundedUTurnRightIcon;

export const RoundedVolunteerActivismIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 11c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2s2-.9 2-2v-7c0-1.1-.9-2-2-2zm7-5.7C10 3.45 11.45 2 13.3 2c1.04 0 2.05.49 2.7 1.25c.65-.76 1.66-1.25 2.7-1.25C20.55 2 22 3.45 22 5.3c0 2.1-2.5 4.51-5.33 7.09a1 1 0 0 1-1.35 0C12.5 9.81 10 7.4 10 5.3M19.99 17h-6.83a.96.96 0 0 1-.33-.06l-1.47-.51a.49.49 0 0 1-.3-.63c.09-.26.38-.4.64-.3l1.12.43c.11.04.24.07.36.07h2.63c.65 0 1.18-.53 1.18-1.18c0-.49-.31-.93-.77-1.11L9.3 11.13c-.22-.09-.46-.13-.7-.13H7v9.02l6.37 1.81c.41.12.85.1 1.25-.05L22 19c0-1.11-.9-2-2.01-2z"/>
  </svg>
);
RoundedVolunteerActivismIcon.displayName = 'RoundedVolunteerActivismIcon';
export const VolunteerActivismRoundedIcon = RoundedVolunteerActivismIcon;

export const RoundedWarehouseIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 19V8.35c0-.82-.5-1.55-1.26-1.86l-8-3.2c-.48-.19-1.01-.19-1.49 0l-8 3.2C2.5 6.8 2 7.54 2 8.35V19c0 1.1.9 2 2 2h3v-9h10v9h3c1.1 0 2-.9 2-2zm-11 0H9v2h2v-2zm2-3h-2v2h2v-2zm2 3h-2v2h2v-2z"/>
  </svg>
);
RoundedWarehouseIcon.displayName = 'RoundedWarehouseIcon';
export const WarehouseRoundedIcon = RoundedWarehouseIcon;

export const RoundedWineBarIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 3c-.55 0-1 .45-1 1v5c0 2.97 2.16 5.43 5 5.91V19H9c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-2v-4.09c2.84-.48 5-2.94 5-5.91V4c0-.55-.45-1-1-1H7zm9 5H8V5h8v3z"/>
  </svg>
);
RoundedWineBarIcon.displayName = 'RoundedWineBarIcon';
export const WineBarRoundedIcon = RoundedWineBarIcon;

export const RoundedWrongLocationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20.42 4.5l1.38-1.38a.996.996 0 1 0-1.41-1.41L19 3.08L17.62 1.7a.996.996 0 1 0-1.41 1.41l1.38 1.38l-1.38 1.38a.996.996 0 1 0 1.41 1.41L19 5.92l1.38 1.38a.996.996 0 1 0 1.41-1.41L20.42 4.5z"/><path fill={color || 'currentColor'} d="M19.67 8L19 7.33l-.59.59c-.7.7-1.84.88-2.65.3a2.005 2.005 0 0 1-.26-3.05l.67-.67l-.67-.67c-.36-.36-.54-.81-.57-1.28C14.01 2.19 13.02 2 12 2c-4.2 0-8 3.22-8 8.2c0 3.18 2.45 6.92 7.34 11.23c.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2c0-.76-.1-1.47-.26-2.14c-.02-.02-.05-.04-.07-.06zM12 12c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"/>
  </svg>
);
RoundedWrongLocationIcon.displayName = 'RoundedWrongLocationIcon';
export const WrongLocationRoundedIcon = RoundedWrongLocationIcon;

export const RoundedZoomInMapIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 8c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1v1.59L4.62 3.21a.996.996 0 1 0-1.41 1.41L5.59 7H4c-.55 0-1 .45-1 1zm17-1h-1.59l2.38-2.38a.996.996 0 1 0-1.41-1.41L17 5.59V4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1zM4 17h1.59l-2.38 2.38a.996.996 0 1 0 1.41 1.41L7 18.41V20c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm17-1c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-1.59l2.38 2.38a.996.996 0 1 0 1.41-1.41L18.41 17H20c.55 0 1-.45 1-1z"/>
  </svg>
);
RoundedZoomInMapIcon.displayName = 'RoundedZoomInMapIcon';
export const ZoomInMapRoundedIcon = RoundedZoomInMapIcon;

export const RoundedZoomOutMapIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.85 3.85L17.3 5.3l-2.18 2.16c-.39.39-.39 1.03 0 1.42c.39.39 1.03.39 1.42 0L18.7 6.7l1.45 1.45a.5.5 0 0 0 .85-.36V3.5c0-.28-.22-.5-.5-.5h-4.29a.5.5 0 0 0-.36.85zm-12 4.3L5.3 6.7l2.16 2.18c.39.39 1.03.39 1.42 0c.39-.39.39-1.03 0-1.42L6.7 5.3l1.45-1.45A.5.5 0 0 0 7.79 3H3.5c-.28 0-.5.22-.5.5v4.29c0 .45.54.67.85.36zm4.3 12L6.7 18.7l2.18-2.16c.39-.39.39-1.03 0-1.42c-.39-.39-1.03-.39-1.42 0L5.3 17.3l-1.45-1.45a.5.5 0 0 0-.85.36v4.29c0 .28.22.5.5.5h4.29a.5.5 0 0 0 .36-.85zm12-4.3L18.7 17.3l-2.16-2.18c-.39-.39-1.03-.39-1.42 0c-.39.39-.39 1.03 0 1.42l2.18 2.16l-1.45 1.45a.5.5 0 0 0 .36.85h4.29c.28 0 .5-.22.5-.5v-4.29a.5.5 0 0 0-.85-.36z"/>
  </svg>
);
RoundedZoomOutMapIcon.displayName = 'RoundedZoomOutMapIcon';
export const ZoomOutMapRoundedIcon = RoundedZoomOutMapIcon;
