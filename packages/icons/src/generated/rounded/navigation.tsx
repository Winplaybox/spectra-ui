import React from 'react';
import { IconProps } from '../../types';

export const RoundedAddHomeWorkIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.96 11.7a1.98 1.98 0 0 0-.8-1.3l-5-3.57c-.7-.5-1.63-.5-2.32 0l-5 3.57c-.53.38-.84.98-.84 1.63V19c0 1.1.9 2 2 2h3v-6h4v6h1.68c-.43-.91-.68-1.92-.68-3a6.99 6.99 0 0 1 3.96-6.3zM23 13.11V4.97C23 3.88 22.12 3 21.03 3h-9.06C10.88 3 10 3.88 10 4.97l.02.05c.1.06.21.11.3.18l5 3.57c.79.56 1.34 1.4 1.56 2.32c.37-.05.74-.09 1.12-.09c1.96 0 3.73.81 5 2.11zM17 7h2v2h-2V7z"/><path fill={color || 'currentColor'} d="M23 18c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5zm-5.5 3v-2.5H15v-1h2.5V15h1v2.5H21v1h-2.5V21h-1z"/>
  </svg>
);
RoundedAddHomeWorkIcon.displayName = 'RoundedAddHomeWorkIcon';
export const AddHomeWorkRoundedIcon = RoundedAddHomeWorkIcon;

export const RoundedAppSettingsAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 18H7V6h10v1h2V3c0-1.1-.9-2-2-2L7 1.01C5.9 1.01 5 1.9 5 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v1zm4-6c0-.13-.02-.26-.04-.39l.64-.48c.2-.15.26-.44.13-.66l-.57-.96a.495.495 0 0 0-.62-.2l-.72.3c-.2-.15-.42-.29-.65-.39l-.1-.77a.505.505 0 0 0-.49-.44l-1.12-.02c-.26 0-.47.18-.5.44l-.1.79c-.24.1-.45.23-.65.39l-.72-.3c-.23-.1-.5-.01-.62.2l-.57.96c-.13.22-.08.5.13.66l.64.48c-.05.13-.07.26-.07.39s.02.25.04.37l-.64.49c-.2.15-.26.43-.13.65l.56.97c.13.22.39.31.63.21l.73-.31c.2.16.42.3.67.4l.1.77c.03.25.24.44.5.44h1.12c.25 0 .46-.19.5-.44l.1-.77c.24-.1.46-.24.67-.4l.73.31c.23.1.5.01.63-.21l.56-.97c.13-.22.07-.5-.13-.65l-.64-.49c-.02-.12 0-.24 0-.37zm-3 1.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
  </svg>
);
RoundedAppSettingsAltIcon.displayName = 'RoundedAppSettingsAltIcon';
export const AppSettingsAltRoundedIcon = RoundedAppSettingsAltIcon;

export const RoundedAppsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
  </svg>
);
RoundedAppsIcon.displayName = 'RoundedAppsIcon';
export const AppsRoundedIcon = RoundedAppsIcon;

export const RoundedAppsOutageIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm6 12c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm-6 0c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0-6c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm.07-10H12c-1.1 0-2 .9-2 2s.9 2 2 2c.22 0 .43-.04.63-.1A6.9 6.9 0 0 1 12 5c0-.34.02-.67.07-1zM19 12a6.9 6.9 0 0 1-2.9-.63c-.06.2-.1.41-.1.63c0 1.1.9 2 2 2s2-.9 2-2v-.07c-.33.05-.66.07-1 .07zm-1 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm1-20c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zm.5 7.5c0 .28-.22.5-.5.5c-.27 0-.5-.22-.5-.5s.22-.5.5-.5s.5.22.5.5zM19 6c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5z"/>
  </svg>
);
RoundedAppsOutageIcon.displayName = 'RoundedAppsOutageIcon';
export const AppsOutageRoundedIcon = RoundedAppsOutageIcon;

export const RoundedArrowBackIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-6.59 6.59a.996.996 0 0 0 0 1.41l6.59 6.59a.996.996 0 1 0 1.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"/>
  </svg>
);
RoundedArrowBackIcon.displayName = 'RoundedArrowBackIcon';
export const ArrowBackRoundedIcon = RoundedArrowBackIcon;

export const RoundedArrowBackIosIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"/>
  </svg>
);
RoundedArrowBackIosIcon.displayName = 'RoundedArrowBackIosIcon';
export const ArrowBackIosRoundedIcon = RoundedArrowBackIosIcon;

export const RoundedArrowBackIosNewIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.88 2.88a1.25 1.25 0 0 0-1.77 0L6.7 11.29a.996.996 0 0 0 0 1.41l8.41 8.41c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.54 12l7.35-7.35c.48-.49.48-1.28-.01-1.77z"/>
  </svg>
);
RoundedArrowBackIosNewIcon.displayName = 'RoundedArrowBackIosNewIcon';
export const ArrowBackIosNewRoundedIcon = RoundedArrowBackIosNewIcon;

export const RoundedArrowDownwardIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 5v11.17l-4.88-4.88c-.39-.39-1.03-.39-1.42 0a.996.996 0 0 0 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 1 0-1.41-1.41L13 16.17V5c0-.55-.45-1-1-1s-1 .45-1 1z"/>
  </svg>
);
RoundedArrowDownwardIcon.displayName = 'RoundedArrowDownwardIcon';
export const ArrowDownwardRoundedIcon = RoundedArrowDownwardIcon;

export const RoundedArrowDropDownIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"/>
  </svg>
);
RoundedArrowDropDownIcon.displayName = 'RoundedArrowDropDownIcon';
export const ArrowDropDownRoundedIcon = RoundedArrowDropDownIcon;

export const RoundedArrowDropDownCircleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-.35 12.65l-2.79-2.79c-.32-.32-.1-.86.35-.86h5.59c.45 0 .67.54.35.85l-2.79 2.79c-.2.2-.52.2-.71.01z"/>
  </svg>
);
RoundedArrowDropDownCircleIcon.displayName = 'RoundedArrowDropDownCircleIcon';
export const ArrowDropDownCircleRoundedIcon = RoundedArrowDropDownCircleIcon;

export const RoundedArrowDropUpIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8.71 12.29L11.3 9.7a.996.996 0 0 1 1.41 0l2.59 2.59c.63.63.18 1.71-.71 1.71H9.41c-.89 0-1.33-1.08-.7-1.71z"/>
  </svg>
);
RoundedArrowDropUpIcon.displayName = 'RoundedArrowDropUpIcon';
export const ArrowDropUpRoundedIcon = RoundedArrowDropUpIcon;

export const RoundedArrowForwardIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42c.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 0 0 0-1.41l-6.58-6.6a.996.996 0 1 0-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z"/>
  </svg>
);
RoundedArrowForwardIcon.displayName = 'RoundedArrowForwardIcon';
export const ArrowForwardRoundedIcon = RoundedArrowForwardIcon;

export const RoundedArrowForwardIosIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"/>
  </svg>
);
RoundedArrowForwardIosIcon.displayName = 'RoundedArrowForwardIosIcon';
export const ArrowForwardIosRoundedIcon = RoundedArrowForwardIosIcon;

export const RoundedArrowLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.29 8.71L9.7 11.3a.996.996 0 0 0 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7z"/>
  </svg>
);
RoundedArrowLeftIcon.displayName = 'RoundedArrowLeftIcon';
export const ArrowLeftRoundedIcon = RoundedArrowLeftIcon;

export const RoundedArrowRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11.71 15.29l2.59-2.59a.996.996 0 0 0 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z"/>
  </svg>
);
RoundedArrowRightIcon.displayName = 'RoundedArrowRightIcon';
export const ArrowRightRoundedIcon = RoundedArrowRightIcon;

export const RoundedArrowUpwardIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 19V7.83l4.88 4.88c.39.39 1.03.39 1.42 0a.996.996 0 0 0 0-1.41l-6.59-6.59a.996.996 0 0 0-1.41 0l-6.6 6.58a.996.996 0 1 0 1.41 1.41L11 7.83V19c0 .55.45 1 1 1s1-.45 1-1z"/>
  </svg>
);
RoundedArrowUpwardIcon.displayName = 'RoundedArrowUpwardIcon';
export const ArrowUpwardRoundedIcon = RoundedArrowUpwardIcon;

export const RoundedAssistantDirectionIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13.5 10H9c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1v-2h3.5v1.29c0 .45.54.67.85.35l2.29-2.29c.2-.2.2-.51 0-.71l-2.29-2.29a.5.5 0 0 0-.85.35V10zM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11s11-4.9 11-11S18.1 1 12 1zm7.73 11.58l-7.19 7.22c-.35.27-.79.27-1.15 0L4.2 12.58a.932.932 0 0 1 0-1.16l7.19-7.22c.35-.27.79-.27 1.15 0l7.19 7.22c.36.27.36.8 0 1.16z"/>
  </svg>
);
RoundedAssistantDirectionIcon.displayName = 'RoundedAssistantDirectionIcon';
export const AssistantDirectionRoundedIcon = RoundedAssistantDirectionIcon;

export const RoundedCampaignIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 12c0 .55.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1zm-1.41 4.82a.966.966 0 0 0 .2 1.37c.53.39 1.09.81 1.62 1.21c.44.33 1.06.24 1.38-.2c0-.01.01-.01.01-.02a.978.978 0 0 0-.2-1.38c-.53-.4-1.09-.82-1.61-1.21a.993.993 0 0 0-1.39.21c0 .01-.01.02-.01.02zm3.22-12.01c0-.01-.01-.01-.01-.02a.98.98 0 0 0-1.38-.2c-.53.4-1.1.82-1.62 1.22c-.44.33-.52.95-.19 1.38c0 .01.01.01.01.02c.33.44.94.53 1.38.2c.53-.39 1.09-.82 1.62-1.22c.43-.32.51-.94.19-1.38zM8 9H4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v3c0 .55.45 1 1 1s1-.45 1-1v-3h1l5 3V6L8 9zm7.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z"/>
  </svg>
);
RoundedCampaignIcon.displayName = 'RoundedCampaignIcon';
export const CampaignRoundedIcon = RoundedCampaignIcon;

export const RoundedCancelIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2zm4.3 14.3a.996.996 0 0 1-1.41 0L12 13.41L9.11 16.3a.996.996 0 1 1-1.41-1.41L10.59 12L7.7 9.11A.996.996 0 1 1 9.11 7.7L12 10.59l2.89-2.89a.996.996 0 1 1 1.41 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z"/>
  </svg>
);
RoundedCancelIcon.displayName = 'RoundedCancelIcon';
export const CancelRoundedIcon = RoundedCancelIcon;

export const RoundedCheckIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17z"/>
  </svg>
);
RoundedCheckIcon.displayName = 'RoundedCheckIcon';
export const CheckRoundedIcon = RoundedCheckIcon;

export const RoundedChevronLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z"/>
  </svg>
);
RoundedChevronLeftIcon.displayName = 'RoundedChevronLeftIcon';
export const ChevronLeftRoundedIcon = RoundedChevronLeftIcon;

export const RoundedChevronRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/>
  </svg>
);
RoundedChevronRightIcon.displayName = 'RoundedChevronRightIcon';
export const ChevronRightRoundedIcon = RoundedChevronRightIcon;

export const RoundedCloseIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
  </svg>
);
RoundedCloseIcon.displayName = 'RoundedCloseIcon';
export const CloseRoundedIcon = RoundedCloseIcon;

export const RoundedDoubleArrowIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20.08 11.42l-4.04-5.65c-.34-.48-.89-.77-1.48-.77c-1.49 0-2.35 1.68-1.49 2.89L16 12l-2.93 4.11c-.87 1.21 0 2.89 1.49 2.89c.59 0 1.15-.29 1.49-.77l4.04-5.65c.24-.35.24-.81-.01-1.16z"/><path fill={color || 'currentColor'} d="M13.08 11.42L9.05 5.77C8.7 5.29 8.15 5 7.56 5C6.07 5 5.2 6.68 6.07 7.89L9 12l-2.93 4.11C5.2 17.32 6.07 19 7.56 19c.59 0 1.15-.29 1.49-.77l4.04-5.65c.24-.35.24-.81-.01-1.16z"/>
  </svg>
);
RoundedDoubleArrowIcon.displayName = 'RoundedDoubleArrowIcon';
export const DoubleArrowRoundedIcon = RoundedDoubleArrowIcon;

export const RoundedEastIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.29 5.71a.996.996 0 0 0 0 1.41L18.17 11H3c-.55 0-1 .45-1 1s.45 1 1 1h15.18l-3.88 3.88a.996.996 0 1 0 1.41 1.41l5.59-5.59a.996.996 0 0 0 0-1.41l-5.6-5.58a.996.996 0 0 0-1.41 0z"/>
  </svg>
);
RoundedEastIcon.displayName = 'RoundedEastIcon';
export const EastRoundedIcon = RoundedEastIcon;

export const RoundedExpandCircleDownIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm3.79 9.71l-3.08 3.08c-.39.39-1.02.39-1.42 0l-3.08-3.08c-.39-.39-.39-1.03 0-1.42a.996.996 0 0 1 1.41 0L12 12.67l2.38-2.38a.996.996 0 0 1 1.41 0c.39.39.39 1.03 0 1.42z"/>
  </svg>
);
RoundedExpandCircleDownIcon.displayName = 'RoundedExpandCircleDownIcon';
export const ExpandCircleDownRoundedIcon = RoundedExpandCircleDownIcon;

export const RoundedExpandLessIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11.29 8.71L6.7 13.3a.996.996 0 1 0 1.41 1.41L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0z"/>
  </svg>
);
RoundedExpandLessIcon.displayName = 'RoundedExpandLessIcon';
export const ExpandLessRoundedIcon = RoundedExpandLessIcon;

export const RoundedExpandMoreIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.88 9.29L12 13.17L8.12 9.29a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41c-.39-.38-1.03-.39-1.42 0z"/>
  </svg>
);
RoundedExpandMoreIcon.displayName = 'RoundedExpandMoreIcon';
export const ExpandMoreRoundedIcon = RoundedExpandMoreIcon;

export const RoundedFirstPageIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.7 15.89L13.82 12l3.89-3.89A.996.996 0 1 0 16.3 6.7l-4.59 4.59a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0a.993.993 0 0 0-.01-1.4zM7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z"/>
  </svg>
);
RoundedFirstPageIcon.displayName = 'RoundedFirstPageIcon';
export const FirstPageRoundedIcon = RoundedFirstPageIcon;

export const RoundedFullscreenIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 14c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1H7v-2c0-.55-.45-1-1-1zm0-4c.55 0 1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm11 7h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v2zM14 6c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1z"/>
  </svg>
);
RoundedFullscreenIcon.displayName = 'RoundedFullscreenIcon';
export const FullscreenRoundedIcon = RoundedFullscreenIcon;

export const RoundedFullscreenExitIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 16h2v2c0 .55.45 1 1 1s1-.45 1-1v-3c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1zm2-8H6c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1s-1 .45-1 1v2zm7 11c.55 0 1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm1-11V6c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1h-2z"/>
  </svg>
);
RoundedFullscreenExitIcon.displayName = 'RoundedFullscreenExitIcon';
export const FullscreenExitRoundedIcon = RoundedFullscreenExitIcon;

export const RoundedHomeWorkIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.16 10.4l-5-3.57c-.7-.5-1.63-.5-2.32 0l-5 3.57c-.53.38-.84.98-.84 1.63V20c0 .55.45 1 1 1h4v-6h4v6h4c.55 0 1-.45 1-1v-7.97c0-.65-.31-1.25-.84-1.63z"/><path fill={color || 'currentColor'} d="M21.03 3h-9.06C10.88 3 10 3.88 10 4.97l.09.09c.08.05.16.09.24.14l5 3.57c.76.54 1.3 1.34 1.54 2.23H19v2h-2v2h2v2h-2v4h4.03c1.09 0 1.97-.88 1.97-1.97V4.97C23 3.88 22.12 3 21.03 3zM19 9h-2V7h2v2z"/>
  </svg>
);
RoundedHomeWorkIcon.displayName = 'RoundedHomeWorkIcon';
export const HomeWorkRoundedIcon = RoundedHomeWorkIcon;

export const RoundedLastPageIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.29 8.11L10.18 12l-3.89 3.89A.996.996 0 1 0 7.7 17.3l4.59-4.59a.996.996 0 0 0 0-1.41L7.7 6.7a.996.996 0 0 0-1.41 0c-.38.39-.38 1.03 0 1.41zM17 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z"/>
  </svg>
);
RoundedLastPageIcon.displayName = 'RoundedLastPageIcon';
export const LastPageRoundedIcon = RoundedLastPageIcon;

export const RoundedLegendToggleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 15H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1zm0 2H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm-4-6l4.58-3.25c.26-.19.42-.49.42-.81c0-.81-.92-1.29-1.58-.82L15 8.55L10 5L4.48 8.36c-.3.19-.48.51-.48.86c0 .78.85 1.26 1.52.85l4.4-2.68L15 11z"/>
  </svg>
);
RoundedLegendToggleIcon.displayName = 'RoundedLegendToggleIcon';
export const LegendToggleRoundedIcon = RoundedLegendToggleIcon;

export const RoundedMapsHomeWorkIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.16 10.4l-5-3.57c-.7-.5-1.63-.5-2.32 0l-5 3.57c-.53.38-.84.98-.84 1.63V20c0 .55.45 1 1 1h4v-6h4v6h4c.55 0 1-.45 1-1v-7.97c0-.65-.31-1.25-.84-1.63z"/><path fill={color || 'currentColor'} d="M21.03 3h-9.06C10.88 3 10 3.88 10 4.97l.09.09c.08.05.16.09.24.14l5 3.57c.76.54 1.3 1.34 1.54 2.23H19v2h-2v2h2v2h-2v4h4.03c1.09 0 1.97-.88 1.97-1.97V4.97C23 3.88 22.12 3 21.03 3zM19 9h-2V7h2v2z"/>
  </svg>
);
RoundedMapsHomeWorkIcon.displayName = 'RoundedMapsHomeWorkIcon';
export const MapsHomeWorkRoundedIcon = RoundedMapsHomeWorkIcon;

export const RoundedMenuIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/>
  </svg>
);
RoundedMenuIcon.displayName = 'RoundedMenuIcon';
export const MenuRoundedIcon = RoundedMenuIcon;

export const RoundedMenuOpenIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 18h11c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h8c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm17.3 7.88L17.42 12l2.88-2.88a.996.996 0 1 0-1.41-1.41L15.3 11.3a.996.996 0 0 0 0 1.41l3.59 3.59c.39.39 1.02.39 1.41 0c.38-.39.39-1.03 0-1.42z"/>
  </svg>
);
RoundedMenuOpenIcon.displayName = 'RoundedMenuOpenIcon';
export const MenuOpenRoundedIcon = RoundedMenuOpenIcon;

export const RoundedMoreHorizIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"/>
  </svg>
);
RoundedMoreHorizIcon.displayName = 'RoundedMoreHorizIcon';
export const MoreHorizRoundedIcon = RoundedMoreHorizIcon;

export const RoundedMoreVertIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"/>
  </svg>
);
RoundedMoreVertIcon.displayName = 'RoundedMoreVertIcon';
export const MoreVertRoundedIcon = RoundedMoreVertIcon;

export const RoundedNorthIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5.71 9.7c.39.39 1.02.39 1.41 0L11 5.83V21c0 .55.45 1 1 1s1-.45 1-1V5.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 2.7a.996.996 0 0 0-1.41 0L5.71 8.29a.996.996 0 0 0 0 1.41z"/>
  </svg>
);
RoundedNorthIcon.displayName = 'RoundedNorthIcon';
export const NorthRoundedIcon = RoundedNorthIcon;

export const RoundedNorthEastIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9 6c0 .56.45 1 1 1h5.59L4.7 17.89a.996.996 0 1 0 1.41 1.41L17 8.41V14c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1z"/>
  </svg>
);
RoundedNorthEastIcon.displayName = 'RoundedNorthEastIcon';
export const NorthEastRoundedIcon = RoundedNorthEastIcon;

export const RoundedNorthWestIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 15c.56 0 1-.45 1-1V8.41L17.89 19.3a.996.996 0 1 0 1.41-1.41L8.41 7H14c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1z"/>
  </svg>
);
RoundedNorthWestIcon.displayName = 'RoundedNorthWestIcon';
export const NorthWestRoundedIcon = RoundedNorthWestIcon;

export const RoundedOfflineShareIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h9c.55 0 1-.45 1-1s-.45-1-1-1H6V6c0-.55-.45-1-1-1z"/><path fill={color || 'currentColor'} d="M18 1h-8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 14h-8V5h8v10z"/><path fill={color || 'currentColor'} d="M12.5 10.25h2v.54c0 .45.54.67.85.35l1.29-1.29c.2-.2.2-.51 0-.71l-1.29-1.29a.5.5 0 0 0-.85.35v.54H12c-.55 0-1 .45-1 1v1.5c0 .41.34.75.75.75s.75-.34.75-.75v-.99z"/>
  </svg>
);
RoundedOfflineShareIcon.displayName = 'RoundedOfflineShareIcon';
export const OfflineShareRoundedIcon = RoundedOfflineShareIcon;

export const RoundedPaymentsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M23 8v10c0 1.1-.9 2-2 2H5c-.55 0-1-.45-1-1s.45-1 1-1h16V8c0-.55.45-1 1-1s1 .45 1 1zM4 16c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h12c1.66 0 3 1.34 3 3v7c0 1.1-.9 2-2 2H4zm3-6c0 1.66 1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3z"/>
  </svg>
);
RoundedPaymentsIcon.displayName = 'RoundedPaymentsIcon';
export const PaymentsRoundedIcon = RoundedPaymentsIcon;

export const RoundedPivotTableChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 5c0-1.1-.9-2-2-2h-9v5h11V5zM3 19c0 1.1.9 2 2 2h3V10H3v9zM3 5v3h5V3H5c-1.1 0-2 .9-2 2zm14.65 4.35l-2.79 2.79c-.32.32-.1.86.35.86H17v2c0 1.1-.9 2-2 2h-2v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79a.5.5 0 0 0 .85-.35V19h2c2.21 0 4-1.79 4-4v-2h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.19-.2-.51-.2-.7-.01z"/>
  </svg>
);
RoundedPivotTableChartIcon.displayName = 'RoundedPivotTableChartIcon';
export const PivotTableChartRoundedIcon = RoundedPivotTableChartIcon;

export const RoundedRefreshIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.65 6.35a7.95 7.95 0 0 0-6.48-2.31c-3.67.37-6.69 3.35-7.1 7.02C3.52 15.91 7.27 20 12 20a7.98 7.98 0 0 0 7.21-4.56c.32-.67-.16-1.44-.9-1.44c-.37 0-.72.2-.88.53a5.994 5.994 0 0 1-6.8 3.31c-2.22-.49-4.01-2.3-4.48-4.52A6.002 6.002 0 0 1 12 6c1.66 0 3.14.69 4.22 1.78l-1.51 1.51c-.63.63-.19 1.71.7 1.71H19c.55 0 1-.45 1-1V6.41c0-.89-1.08-1.34-1.71-.71l-.64.65z"/>
  </svg>
);
RoundedRefreshIcon.displayName = 'RoundedRefreshIcon';
export const RefreshRoundedIcon = RoundedRefreshIcon;

export const RoundedSouthIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.3 14.29a.996.996 0 0 0-1.41 0L13 18.17V3c0-.55-.45-1-1-1s-1 .45-1 1v15.18L7.12 14.3a.996.996 0 1 0-1.41 1.41l5.59 5.59c.39.39 1.02.39 1.41 0l5.59-5.59c.38-.39.38-1.03 0-1.42z"/>
  </svg>
);
RoundedSouthIcon.displayName = 'RoundedSouthIcon';
export const SouthRoundedIcon = RoundedSouthIcon;

export const RoundedSouthEastIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 9c-.56 0-1 .45-1 1v5.59L6.12 4.7a.996.996 0 1 0-1.41 1.41L15.59 17H10c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1z"/>
  </svg>
);
RoundedSouthEastIcon.displayName = 'RoundedSouthEastIcon';
export const SouthEastRoundedIcon = RoundedSouthEastIcon;

export const RoundedSouthWestIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15 18c0-.56-.45-1-1-1H8.41L19.3 6.11a.996.996 0 1 0-1.41-1.41L7 15.59V10c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1z"/>
  </svg>
);
RoundedSouthWestIcon.displayName = 'RoundedSouthWestIcon';
export const SouthWestRoundedIcon = RoundedSouthWestIcon;

export const RoundedSubdirectoryArrowLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5.71 15.71l4.58 4.58c.39.39 1.03.39 1.42 0c.39-.39.39-1.03 0-1.42L8.83 16H19c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v9H8.83l2.88-2.87c.39-.39.39-1.03 0-1.42c-.39-.39-1.03-.39-1.42 0l-4.58 4.58c-.39.39-.39 1.03 0 1.42z"/>
  </svg>
);
RoundedSubdirectoryArrowLeftIcon.displayName = 'RoundedSubdirectoryArrowLeftIcon';
export const SubdirectoryArrowLeftRoundedIcon = RoundedSubdirectoryArrowLeftIcon;

export const RoundedSubdirectoryArrowRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.29 15.71l-4.58 4.58c-.39.39-1.03.39-1.42 0c-.39-.39-.39-1.03 0-1.42L15.17 16H5c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v9h9.17l-2.88-2.87c-.39-.39-.39-1.03 0-1.42c.39-.39 1.03-.39 1.42 0l4.58 4.58c.39.39.39 1.03 0 1.42z"/>
  </svg>
);
RoundedSubdirectoryArrowRightIcon.displayName = 'RoundedSubdirectoryArrowRightIcon';
export const SubdirectoryArrowRightRoundedIcon = RoundedSubdirectoryArrowRightIcon;

export const RoundedSwitchLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8.5 8.62v6.76L5.12 12L8.5 8.62m-4.79 2.67a.996.996 0 0 0 0 1.41l4.59 4.59c.62.63 1.7.19 1.7-.7V7.41c0-.89-1.08-1.34-1.71-.71l-4.58 4.59zM14 7.41v9.17c0 .89 1.08 1.34 1.71.71l4.59-4.59a.996.996 0 0 0 0-1.41L15.71 6.7c-.63-.62-1.71-.18-1.71.71z"/>
  </svg>
);
RoundedSwitchLeftIcon.displayName = 'RoundedSwitchLeftIcon';
export const SwitchLeftRoundedIcon = RoundedSwitchLeftIcon;

export const RoundedSwitchRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.5 15.38V8.62L18.88 12l-3.38 3.38m4.79-2.67a.996.996 0 0 0 0-1.41L15.7 6.71c-.62-.63-1.7-.19-1.7.7v9.17c0 .89 1.08 1.34 1.71.71l4.58-4.58zM10 16.59V7.41c0-.89-1.08-1.34-1.71-.71L3.7 11.29a.996.996 0 0 0 0 1.41l4.59 4.59c.63.63 1.71.19 1.71-.7z"/>
  </svg>
);
RoundedSwitchRightIcon.displayName = 'RoundedSwitchRightIcon';
export const SwitchRightRoundedIcon = RoundedSwitchRightIcon;

export const RoundedUnfoldLessIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8.12 19.3c.39.39 1.02.39 1.41 0L12 16.83l2.47 2.47a.996.996 0 1 0 1.41-1.41l-3.17-3.17a.996.996 0 0 0-1.41 0l-3.17 3.17c-.4.38-.4 1.02-.01 1.41zm7.76-14.6a.996.996 0 0 0-1.41 0L12 7.17L9.53 4.7a.996.996 0 0 0-1.41 0c-.39.39-.39 1.03 0 1.42l3.17 3.17c.39.39 1.02.39 1.41 0l3.17-3.17c.4-.39.4-1.03.01-1.42z"/>
  </svg>
);
RoundedUnfoldLessIcon.displayName = 'RoundedUnfoldLessIcon';
export const UnfoldLessRoundedIcon = RoundedUnfoldLessIcon;

export const RoundedUnfoldMoreIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 5.83l2.46 2.46a.996.996 0 1 0 1.41-1.41L12.7 3.7a.996.996 0 0 0-1.41 0L8.12 6.88a.996.996 0 1 0 1.41 1.41L12 5.83zm0 12.34l-2.46-2.46a.996.996 0 1 0-1.41 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.17a.996.996 0 1 0-1.41-1.41L12 18.17z"/>
  </svg>
);
RoundedUnfoldMoreIcon.displayName = 'RoundedUnfoldMoreIcon';
export const UnfoldMoreRoundedIcon = RoundedUnfoldMoreIcon;

export const RoundedWaterfallChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.5 4c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-13c0-.83.67-1.5 1.5-1.5zm-15 9c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5S3 19.33 3 18.5v-4c0-.83.67-1.5 1.5-1.5zm11-9c.83 0 1.5.67 1.5 1.5S16.33 7 15.5 7S14 6.33 14 5.5S14.67 4 15.5 4zm-4 1c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5S10 8.33 10 7.5v-1c0-.83.67-1.5 1.5-1.5zm-3 5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5S7 13.33 7 12.5v-1c0-.83.67-1.5 1.5-1.5z"/>
  </svg>
);
RoundedWaterfallChartIcon.displayName = 'RoundedWaterfallChartIcon';
export const WaterfallChartRoundedIcon = RoundedWaterfallChartIcon;

export const RoundedWestIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9.7 18.3a.996.996 0 0 0 0-1.41L5.83 13H21c.55 0 1-.45 1-1s-.45-1-1-1H5.83l3.88-3.88A.996.996 0 1 0 8.3 5.71L2.7 11.3a.996.996 0 0 0 0 1.41l5.59 5.59c.39.38 1.03.38 1.41 0z"/>
  </svg>
);
RoundedWestIcon.displayName = 'RoundedWestIcon';
export const WestRoundedIcon = RoundedWestIcon;
