import React from 'react';
import { IconProps } from '../../types';

export const OutlinedAddIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
  </svg>
);
OutlinedAddIcon.displayName = 'OutlinedAddIcon';
export const AddOutlinedIcon = OutlinedAddIcon;

export const OutlinedAddBoxIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z"/>
  </svg>
);
OutlinedAddBoxIcon.displayName = 'OutlinedAddBoxIcon';
export const AddBoxOutlinedIcon = OutlinedAddBoxIcon;

export const OutlinedAddCircleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
  </svg>
);
OutlinedAddCircleIcon.displayName = 'OutlinedAddCircleIcon';
export const AddCircleOutlinedIcon = OutlinedAddCircleIcon;

export const OutlinedAddCircleOutlineIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/>
  </svg>
);
OutlinedAddCircleOutlineIcon.displayName = 'OutlinedAddCircleOutlineIcon';
export const AddCircleOutlineOutlinedIcon = OutlinedAddCircleOutlineIcon;

export const OutlinedAddLinkIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8 11h8v2H8v-2zm12.1 1H22c0-2.76-2.24-5-5-5h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1zM3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM19 12h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3z"/>
  </svg>
);
OutlinedAddLinkIcon.displayName = 'OutlinedAddLinkIcon';
export const AddLinkOutlinedIcon = OutlinedAddLinkIcon;

export const OutlinedAmpStoriesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 19h10V4H7v15zM9 6h6v11H9V6zM3 6h2v11H3zm16 0h2v11h-2z"/>
  </svg>
);
OutlinedAmpStoriesIcon.displayName = 'OutlinedAmpStoriesIcon';
export const AmpStoriesOutlinedIcon = OutlinedAmpStoriesIcon;

export const OutlinedArchiveIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4l4-4h-2.55z"/>
  </svg>
);
OutlinedArchiveIcon.displayName = 'OutlinedArchiveIcon';
export const ArchiveOutlinedIcon = OutlinedArchiveIcon;

export const OutlinedAttributionIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 8.5c-.91 0-2.75.46-2.75 1.38v4.62h1.5V19h2.5v-4.5h1.5V9.88c0-.91-1.84-1.38-2.75-1.38zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"/><circle cx="12" cy="6.5" r="1.5"/>
  </svg>
);
OutlinedAttributionIcon.displayName = 'OutlinedAttributionIcon';
export const AttributionOutlinedIcon = OutlinedAttributionIcon;

export const OutlinedBackspaceIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41L17.59 17L19 15.59L15.41 12L19 8.41L17.59 7L14 10.59L10.41 7L9 8.41L12.59 12L9 15.59z"/>
  </svg>
);
OutlinedBackspaceIcon.displayName = 'OutlinedBackspaceIcon';
export const BackspaceOutlinedIcon = OutlinedBackspaceIcon;

export const OutlinedBallotIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 7.5h5v2h-5zm0 7h5v2h-5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM11 6H6v5h5V6zm-1 4H7V7h3v3zm1 3H6v5h5v-5zm-1 4H7v-3h3v3z"/>
  </svg>
);
OutlinedBallotIcon.displayName = 'OutlinedBallotIcon';
export const BallotOutlinedIcon = OutlinedBallotIcon;

export const OutlinedBiotechIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 19c-1.1 0-2 .9-2 2h14c0-1.1-.9-2-2-2h-4v-2h3c1.1 0 2-.9 2-2h-8c-1.66 0-3-1.34-3-3a3 3 0 0 1 1.47-2.57c.41.59 1.06 1 1.83 1.06c.7.06 1.36-.19 1.85-.62l.59 1.61l.94-.34l.34.94l1.88-.68l-.34-.94l.94-.34l-2.74-7.52l-.94.34l-.34-.94l-1.88.68l.34.94l-.94.35l.56 1.55c-1.17-.04-2.19.75-2.48 1.86A5.01 5.01 0 0 0 5 12c0 2.76 2.24 5 5 5v2H7zm5.86-14.48l1.71 4.7l-.94.34l-1.71-4.7l.94-.34zM10.5 7c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1z"/>
  </svg>
);
OutlinedBiotechIcon.displayName = 'OutlinedBiotechIcon';
export const BiotechOutlinedIcon = OutlinedBiotechIcon;

export const OutlinedBlockIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8c1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.902 7.902 0 0 1 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.902 7.902 0 0 1 20 12c0 4.42-3.58 8-8 8z"/>
  </svg>
);
OutlinedBlockIcon.displayName = 'OutlinedBlockIcon';
export const BlockOutlinedIcon = OutlinedBlockIcon;

export const OutlinedBoltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 21h-1l1-7H7.5c-.88 0-.33-.75-.31-.78C8.48 10.94 10.42 7.54 13.01 3h1l-1 7h3.51c.4 0 .62.19.4.66C12.97 17.55 11 21 11 21z"/>
  </svg>
);
OutlinedBoltIcon.displayName = 'OutlinedBoltIcon';
export const BoltOutlinedIcon = OutlinedBoltIcon;

export const OutlinedCalculateIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/><path fill={color || 'currentColor'} d="M6.25 7.72h5v1.5h-5zM13 15.75h5v1.5h-5zm0-2.5h5v1.5h-5zM8 18h1.5v-2h2v-1.5h-2v-2H8v2H6V16h2zm6.09-7.05l1.41-1.41l1.41 1.41l1.06-1.06l-1.41-1.42l1.41-1.41L16.91 6L15.5 7.41L14.09 6l-1.06 1.06l1.41 1.41l-1.41 1.42z"/>
  </svg>
);
OutlinedCalculateIcon.displayName = 'OutlinedCalculateIcon';
export const CalculateOutlinedIcon = OutlinedCalculateIcon;

export const OutlinedChangeCircleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm4.17-5.24l-1.1-1.1c.71-1.33.53-3.01-.59-4.13A3.482 3.482 0 0 0 12 8.5c-.03 0-.06.01-.09.01L13 9.6l-1.06 1.06l-2.83-2.83L11.94 5L13 6.06l-.96.96c1.27.01 2.53.48 3.5 1.44c1.7 1.71 1.91 4.36.63 6.3zm-1.28 1.41L12.06 19L11 17.94l.95-.95a4.97 4.97 0 0 1-3.48-1.46a5.006 5.006 0 0 1-.64-6.29l1.1 1.1c-.71 1.33-.53 3.01.59 4.13c.7.7 1.63 1.04 2.56 1.01L11 14.4l1.06-1.06l2.83 2.83z"/>
  </svg>
);
OutlinedChangeCircleIcon.displayName = 'OutlinedChangeCircleIcon';
export const ChangeCircleOutlinedIcon = OutlinedChangeCircleIcon;

export const OutlinedClearIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"/>
  </svg>
);
OutlinedClearIcon.displayName = 'OutlinedClearIcon';
export const ClearOutlinedIcon = OutlinedClearIcon;

export const OutlinedContentCopyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
  </svg>
);
OutlinedContentCopyIcon.displayName = 'OutlinedContentCopyIcon';
export const ContentCopyOutlinedIcon = OutlinedContentCopyIcon;

export const OutlinedContentCutIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9.64 7.64c.23-.5.36-1.05.36-1.64c0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2s2 .89 2 2s-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2s2 .89 2 2s-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5s.5.22.5.5s-.22.5-.5.5zM19 3l-6 6l2 2l7-7V3h-3z"/>
  </svg>
);
OutlinedContentCutIcon.displayName = 'OutlinedContentCutIcon';
export const ContentCutOutlinedIcon = OutlinedContentCutIcon;

export const OutlinedContentPasteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"/>
  </svg>
);
OutlinedContentPasteIcon.displayName = 'OutlinedContentPasteIcon';
export const ContentPasteOutlinedIcon = OutlinedContentPasteIcon;

export const OutlinedContentPasteGoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 5h2v3h10V5h2v6h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1z"/><path fill={color || 'currentColor'} d="M18.01 13l-1.42 1.41l1.58 1.58H12v2h6.17l-1.58 1.59l1.42 1.41l3.99-4z"/>
  </svg>
);
OutlinedContentPasteGoIcon.displayName = 'OutlinedContentPasteGoIcon';
export const ContentPasteGoOutlinedIcon = OutlinedContentPasteGoIcon;

export const OutlinedContentPasteOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.19 21.19L2.81 2.81L1.39 4.22L3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61l1.41-1.42zM5 19V7.83L16.17 19H5zM17 8V5h2v11.17l2 2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5.83l5 5H17zm-5-5c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1z"/>
  </svg>
);
OutlinedContentPasteOffIcon.displayName = 'OutlinedContentPasteOffIcon';
export const ContentPasteOffOutlinedIcon = OutlinedContentPasteOffIcon;

export const OutlinedContentPasteSearchIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1z"/><path fill={color || 'currentColor'} d="M20.3 18.9c.4-.7.7-1.5.7-2.4c0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.7 2.7l1.4-1.4l-2.7-2.7zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z"/>
  </svg>
);
OutlinedContentPasteSearchIcon.displayName = 'OutlinedContentPasteSearchIcon';
export const ContentPasteSearchOutlinedIcon = OutlinedContentPasteSearchIcon;

export const OutlinedCopyAllIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H9V4h9v12zM3 15v-2h2v2H3zm0-5.5h2v2H3v-2zM10 20h2v2h-2v-2zm-7-1.5v-2h2v2H3zM5 22c-1.1 0-2-.9-2-2h2v2zm3.5 0h-2v-2h2v2zm5 0v-2h2c0 1.1-.9 2-2 2zM5 6v2H3c0-1.1.9-2 2-2z"/>
  </svg>
);
OutlinedCopyAllIcon.displayName = 'OutlinedCopyAllIcon';
export const CopyAllOutlinedIcon = OutlinedCopyAllIcon;

export const OutlinedCreateIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06l.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41z"/>
  </svg>
);
OutlinedCreateIcon.displayName = 'OutlinedCreateIcon';
export const CreateOutlinedIcon = OutlinedCreateIcon;

export const OutlinedDeleteSweepIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zm2-8h6v8H5v-8zm5-6H6L5 5H2v2h12V5h-3z"/>
  </svg>
);
OutlinedDeleteSweepIcon.displayName = 'OutlinedDeleteSweepIcon';
export const DeleteSweepOutlinedIcon = OutlinedDeleteSweepIcon;

export const OutlinedDeselectIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 13h2v-2H3v2zm4 8h2v-2H7v2zm6-18h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zm8 4h2v-2h-2v2zm8-8h2v-2h-2v2zm0-4h2V7h-2v2zm-4-4h2V3h-2v2zM7.83 5L7 4.17V3h2v2H7.83zm12 12l-.83-.83V15h2v2h-1.17zm1.36 4.19L2.81 2.81L1.39 4.22L4.17 7H3v2h2V7.83l2 2V17h7.17l2 2H15v2h2v-1.17l2.78 2.78l1.41-1.42zM9 15v-3.17L12.17 15H9zm6-2.83V9h-3.17l-2-2H17v7.17l-2-2z"/>
  </svg>
);
OutlinedDeselectIcon.displayName = 'OutlinedDeselectIcon';
export const DeselectOutlinedIcon = OutlinedDeselectIcon;

export const OutlinedDraftsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1L2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zm-2 0v.01L12 13L4 8l8-4.68L19.99 8zM4 18v-7.66l8 5.02l7.99-4.99L20 18H4z"/>
  </svg>
);
OutlinedDraftsIcon.displayName = 'OutlinedDraftsIcon';
export const DraftsOutlinedIcon = OutlinedDraftsIcon;

export const OutlinedDynamicFeedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8 8H6v7c0 1.1.9 2 2 2h9v-2H8V8z"/><path fill={color || 'currentColor'} d="M20 3h-8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8h-8V7h8v4zM4 12H2v7c0 1.1.9 2 2 2h9v-2H4v-7z"/>
  </svg>
);
OutlinedDynamicFeedIcon.displayName = 'OutlinedDynamicFeedIcon';
export const DynamicFeedOutlinedIcon = OutlinedDynamicFeedIcon;

export const OutlinedFileCopyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"/>
  </svg>
);
OutlinedFileCopyIcon.displayName = 'OutlinedFileCopyIcon';
export const FileCopyOutlinedIcon = OutlinedFileCopyIcon;

export const OutlinedFilterListIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
  </svg>
);
OutlinedFilterListIcon.displayName = 'OutlinedFilterListIcon';
export const FilterListOutlinedIcon = OutlinedFilterListIcon;

export const OutlinedFilterListOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10.83 8H21V6H8.83l2 2zm5 5H18v-2h-4.17l2 2zM14 16.83V18h-4v-2h3.17l-3-3H6v-2h2.17l-3-3H3V6h.17L1.39 4.22L2.8 2.81l18.38 18.38l-1.41 1.41L14 16.83z"/>
  </svg>
);
OutlinedFilterListOffIcon.displayName = 'OutlinedFilterListOffIcon';
export const FilterListOffOutlinedIcon = OutlinedFilterListOffIcon;

export const OutlinedFlagIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.36 6l.4 2H18v6h-3.36l-.4-2H7V6h5.36M14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6L14 4z"/>
  </svg>
);
OutlinedFlagIcon.displayName = 'OutlinedFlagIcon';
export const FlagOutlinedIcon = OutlinedFlagIcon;

export const OutlinedFlagCircleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/><path fill={color || 'currentColor'} d="M15 9l-1-2H8v11h1.5v-5H12l1 2h5V9h-3zm1.5 4.5h-2.57l-1-2H9.5v-3h3.57l1 2h2.43v3z"/>
  </svg>
);
OutlinedFlagCircleIcon.displayName = 'OutlinedFlagCircleIcon';
export const FlagCircleOutlinedIcon = OutlinedFlagCircleIcon;

export const OutlinedFontDownloadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9.17 15.5h5.64l1.14 3h2.09l-5.11-13h-1.86l-5.11 13h2.09l1.12-3zM12 7.98l2.07 5.52H9.93L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16z"/>
  </svg>
);
OutlinedFontDownloadIcon.displayName = 'OutlinedFontDownloadIcon';
export const FontDownloadOutlinedIcon = OutlinedFontDownloadIcon;

export const OutlinedFontDownloadOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4.83 2H20c1.1 0 2 .9 2 2v15.17l-2-2V4H6.83l-2-2zm6.09 4l-.57 1.52l1.36 1.36l.23-.66h.1l.54 1.52l3.04 3.04L13.07 6h-2.15zm9.57 17.31L19.17 22H4c-1.1 0-2-.9-2-2V4.83L.69 3.51L2.1 2.1l19.8 19.8l-1.41 1.41zM17.17 20l-5.07-5.07H9.58L8.49 18H6.41l2.39-6.37L4 6.83V20h13.17z"/>
  </svg>
);
OutlinedFontDownloadOffIcon.displayName = 'OutlinedFontDownloadOffIcon';
export const FontDownloadOffOutlinedIcon = OutlinedFontDownloadOffIcon;

export const OutlinedForwardIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 8.83L17.17 12L14 15.17V14H6v-4h8V8.83M12 4v4H4v8h8v4l8-8l-8-8z"/>
  </svg>
);
OutlinedForwardIcon.displayName = 'OutlinedForwardIcon';
export const ForwardOutlinedIcon = OutlinedForwardIcon;

export const OutlinedGestureIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22c.5.2 0 1.03-.3 1.52c-.25.42-2.86 3.89-2.86 6.31c0 1.28.48 2.34 1.34 2.98c.75.56 1.74.73 2.64.46c1.07-.31 1.95-1.4 3.06-2.77c1.21-1.49 2.83-3.44 4.08-3.44c1.63 0 1.65 1.01 1.76 1.79c-3.78.64-5.38 3.67-5.38 5.37c0 1.7 1.44 3.09 3.21 3.09c1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2c-2.25 0-4.18 1.91-4.94 2.84c-.58.73-2.06 2.48-2.29 2.72c-.25.3-.68.84-1.11.84c-.45 0-.72-.83-.36-1.92c.35-1.09 1.4-2.86 1.85-3.52c.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3C5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72c0-.6.73-2.2 2.87-2.76c-.3 2.69-1.43 3.48-2.13 3.48z"/>
  </svg>
);
OutlinedGestureIcon.displayName = 'OutlinedGestureIcon';
export const GestureOutlinedIcon = OutlinedGestureIcon;

export const OutlinedHowToRegIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2zM5 18c.2-.63 2.57-1.68 4.96-1.94l2.04-2a9.34 9.34 0 0 0-1-.06c-2.67 0-8 1.34-8 4v2h9l-2-2H5zm15.6-5.5l-5.13 5.17l-2.07-2.08L12 17l3.47 3.5L22 13.91z"/>
  </svg>
);
OutlinedHowToRegIcon.displayName = 'OutlinedHowToRegIcon';
export const HowToRegOutlinedIcon = OutlinedHowToRegIcon;

export const OutlinedHowToVoteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 13h-.68l-2 2h1.91L19 17H5l1.78-2h2.05l-2-2H6l-3 3v4c0 1.1.89 2 1.99 2H19a2 2 0 0 0 2-2v-4l-3-3zm1 7H5v-1h14v1zm-7.66-4.98c.39.39 1.02.39 1.41 0l6.36-6.36a.996.996 0 0 0 0-1.41L14.16 2.3a.975.975 0 0 0-1.4-.01L6.39 8.66a.996.996 0 0 0 0 1.41l4.95 4.95zm2.12-10.61L17 7.95l-4.95 4.95l-3.54-3.54l4.95-4.95z"/>
  </svg>
);
OutlinedHowToVoteIcon.displayName = 'OutlinedHowToVoteIcon';
export const HowToVoteOutlinedIcon = OutlinedHowToVoteIcon;

export const OutlinedInboxIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z"/>
  </svg>
);
OutlinedInboxIcon.displayName = 'OutlinedInboxIcon';
export const InboxOutlinedIcon = OutlinedInboxIcon;

export const OutlinedInsightsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2c1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93c0-1.1-.9-2-2-2z"/><path fill={color || 'currentColor'} d="M15 9l.94-2.07L18 6l-2.06-.93L15 3l-.92 2.07L12 6l2.08.93zM3.5 11L4 9l2-.5L4 8l-.5-2L3 8l-2 .5L3 9z"/>
  </svg>
);
OutlinedInsightsIcon.displayName = 'OutlinedInsightsIcon';
export const InsightsOutlinedIcon = OutlinedInsightsIcon;

export const OutlinedInventoryIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1z"/><path fill={color || 'currentColor'} d="M21 11.5L15.51 17l-3.01-3l-1.5 1.5l4.51 4.5l6.99-7z"/>
  </svg>
);
OutlinedInventoryIcon.displayName = 'OutlinedInventoryIcon';
export const InventoryOutlinedIcon = OutlinedInventoryIcon;

export const OutlinedInventory2Icon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-1 18H5V9h14v11zm1-13H4V4h16v3z"/><path fill={color || 'currentColor'} d="M9 12h6v2H9z"/>
  </svg>
);
OutlinedInventory2Icon.displayName = 'OutlinedInventory2Icon';
export const Inventory2OutlinedIcon = OutlinedInventory2Icon;

export const OutlinedLinkIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"/>
  </svg>
);
OutlinedLinkIcon.displayName = 'OutlinedLinkIcon';
export const LinkOutlinedIcon = OutlinedLinkIcon;

export const OutlinedLinkOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.39 11L16 12.61V11zM17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1c0 1.27-.77 2.37-1.87 2.84l1.4 1.4A4.986 4.986 0 0 0 22 12c0-2.76-2.24-5-5-5zM2 4.27l3.11 3.11A4.991 4.991 0 0 0 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1c0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4.01l1.41-1.41L3.41 2.86L2 4.27z"/>
  </svg>
);
OutlinedLinkOffIcon.displayName = 'OutlinedLinkOffIcon';
export const LinkOffOutlinedIcon = OutlinedLinkOffIcon;

export const OutlinedLowPriorityIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 5h8v2h-8V5zm0 5.5h8v2h-8v-2zm0 5.5h8v2h-8v-2zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3l-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"/>
  </svg>
);
OutlinedLowPriorityIcon.displayName = 'OutlinedLowPriorityIcon';
export const LowPriorityOutlinedIcon = OutlinedLowPriorityIcon;

export const OutlinedMailIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 4.99L4 6h16zm0 12H4V8l8 5l8-5v10z"/>
  </svg>
);
OutlinedMailIcon.displayName = 'OutlinedMailIcon';
export const MailOutlinedIcon = OutlinedMailIcon;

export const OutlinedMarkunreadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"/>
  </svg>
);
OutlinedMarkunreadIcon.displayName = 'OutlinedMarkunreadIcon';
export const MarkunreadOutlinedIcon = OutlinedMarkunreadIcon;

export const OutlinedMoveToInboxIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 9h-2.55V6h-2.9v3H8l4 4zm3-6H4.99C3.88 3 3 3.9 3 5v14c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5l-.01-9H19v9z"/>
  </svg>
);
OutlinedMoveToInboxIcon.displayName = 'OutlinedMoveToInboxIcon';
export const MoveToInboxOutlinedIcon = OutlinedMoveToInboxIcon;

export const OutlinedNextWeekIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 18.5l4-4l-4-4l-1 1l3 3l-3 3zM20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm10 15H4V9h16v11z"/>
  </svg>
);
OutlinedNextWeekIcon.displayName = 'OutlinedNextWeekIcon';
export const NextWeekOutlinedIcon = OutlinedNextWeekIcon;

export const OutlinedOutlinedFlagIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z"/>
  </svg>
);
OutlinedOutlinedFlagIcon.displayName = 'OutlinedOutlinedFlagIcon';
export const OutlinedFlagOutlinedIcon = OutlinedOutlinedFlagIcon;

export const OutlinedPinOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9 9l1.914 1.914L8 13.828V14h6l2 2h-3v4l-1 3l-1-3v-4H6v-3l3-3V9zm8-7v2l-2 1v5l3 3v2.461l-5-5.001V4h-2v4.46l-2-2V5L7 4V2h10z"/><path fill={color || 'currentColor'} d="M2.27 2.27L1 3.54L20.46 23l1.27-1.27L11 11z"/>
  </svg>
);
OutlinedPinOffIcon.displayName = 'OutlinedPinOffIcon';
export const PinOffOutlinedIcon = OutlinedPinOffIcon;

export const OutlinedPolicyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 1.85-.51 3.65-1.38 5.21l-1.45-1.45a4.994 4.994 0 0 0-.64-6.29a5.003 5.003 0 0 0-7.07 0a5.003 5.003 0 0 0 0 7.07a5.006 5.006 0 0 0 6.29.64l1.72 1.72c-1.19 1.42-2.73 2.51-4.47 3.04c-4.02-1.25-7-5.42-7-9.94V6.3l7-3.11l7 3.11V11zm-7 4c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3z"/>
  </svg>
);
OutlinedPolicyIcon.displayName = 'OutlinedPolicyIcon';
export const PolicyOutlinedIcon = OutlinedPolicyIcon;

export const OutlinedPushPinIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 4v5c0 1.12.37 2.16 1 3H9c.65-.86 1-1.9 1-3V4h4m3-2H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1l1-1v-7H19v-2c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1z"/>
  </svg>
);
OutlinedPushPinIcon.displayName = 'OutlinedPushPinIcon';
export const PushPinOutlinedIcon = OutlinedPushPinIcon;

export const OutlinedRedoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/>
  </svg>
);
OutlinedRedoIcon.displayName = 'OutlinedRedoIcon';
export const RedoOutlinedIcon = OutlinedRedoIcon;

export const OutlinedRemoveIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 13H5v-2h14v2z"/>
  </svg>
);
OutlinedRemoveIcon.displayName = 'OutlinedRemoveIcon';
export const RemoveOutlinedIcon = OutlinedRemoveIcon;

export const OutlinedRemoveCircleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>
  </svg>
);
OutlinedRemoveCircleIcon.displayName = 'OutlinedRemoveCircleIcon';
export const RemoveCircleOutlinedIcon = OutlinedRemoveCircleIcon;

export const OutlinedRemoveCircleOutlineIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/>
  </svg>
);
OutlinedRemoveCircleOutlineIcon.displayName = 'OutlinedRemoveCircleOutlineIcon';
export const RemoveCircleOutlineOutlinedIcon = OutlinedRemoveCircleOutlineIcon;

export const OutlinedReplyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10 9V5l-7 7l7 7v-4.1c5 0 8.5 1.6 11 5.1c-1-5-4-10-11-11z"/>
  </svg>
);
OutlinedReplyIcon.displayName = 'OutlinedReplyIcon';
export const ReplyOutlinedIcon = OutlinedReplyIcon;

export const OutlinedReplyAllIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 8V5l-7 7l7 7v-3l-4-4l4-4zm6 1V5l-7 7l7 7v-4.1c5 0 8.5 1.6 11 5.1c-1-5-4-10-11-11z"/>
  </svg>
);
OutlinedReplyAllIcon.displayName = 'OutlinedReplyAllIcon';
export const ReplyAllOutlinedIcon = OutlinedReplyAllIcon;

export const OutlinedReportIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z"/><circle cx="12" cy="16" r="1"/><path fill={color || 'currentColor'} d="M11 7h2v7h-2z"/>
  </svg>
);
OutlinedReportIcon.displayName = 'OutlinedReportIcon';
export const ReportOutlinedIcon = OutlinedReportIcon;

export const OutlinedReportGmailerrorredIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z"/><circle cx="12" cy="16" r="1"/><path fill={color || 'currentColor'} d="M11 7h2v7h-2z"/>
  </svg>
);
OutlinedReportGmailerrorredIcon.displayName = 'OutlinedReportGmailerrorredIcon';
export const ReportGmailerrorredOutlinedIcon = OutlinedReportGmailerrorredIcon;

export const OutlinedReportOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9.1 5h5.8L19 9.1v5.8l-.22.22l1.42 1.41l.8-.8V8.27L15.73 3H8.27l-.8.8l1.41 1.42z"/><circle cx="12" cy="16" r="1"/><path fill={color || 'currentColor'} d="M13 9.33V7h-2v.33zM2.41 1.58L1 2.99l3.64 3.64L3 8.27v7.46L8.27 21h7.46l1.64-1.64L21.01 23l1.41-1.41L2.41 1.58zM14.9 19H9.1L5 14.9V9.1l1.05-1.05l9.9 9.9L14.9 19z"/>
  </svg>
);
OutlinedReportOffIcon.displayName = 'OutlinedReportOffIcon';
export const ReportOffOutlinedIcon = OutlinedReportOffIcon;

export const OutlinedSaveIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3zM6 6h9v4H6z"/>
  </svg>
);
OutlinedSaveIcon.displayName = 'OutlinedSaveIcon';
export const SaveOutlinedIcon = OutlinedSaveIcon;

export const OutlinedSaveAllIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 6H8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11c1.1 0 2-.9 2-2v-9l-4-4zm2 13H8V8h8.17L19 10.83V19z"/><path fill={color || 'currentColor'} d="M9 9h6v2H9z"/><circle cx="13.5" cy="15.5" r="2.5"/><path fill={color || 'currentColor'} d="M2 4a2 2 0 0 1 2-2h10v2H4v10H2V4z"/>
  </svg>
);
OutlinedSaveAllIcon.displayName = 'OutlinedSaveAllIcon';
export const SaveAllOutlinedIcon = OutlinedSaveAllIcon;

export const OutlinedSaveAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5l-5-5l1.41-1.41L11 12.67V3h2v9.67z"/>
  </svg>
);
OutlinedSaveAltIcon.displayName = 'OutlinedSaveAltIcon';
export const SaveAltOutlinedIcon = OutlinedSaveAltIcon;

export const OutlinedSaveAsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 12.4V7l-4-4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.4l2-2H5V5h11.17L19 7.83v6.57l2-2zM15 15c0 1.66-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3zM6 6h9v4H6V6zm13.99 10.25l1.77 1.77L16.77 23H15v-1.77l4.99-4.98zm3.26.26l-.85.85l-1.77-1.77l.85-.85c.2-.2.51-.2.71 0l1.06 1.06c.2.2.2.52 0 .71z"/>
  </svg>
);
OutlinedSaveAsIcon.displayName = 'OutlinedSaveAsIcon';
export const SaveAsOutlinedIcon = OutlinedSaveAsIcon;

export const OutlinedSelectAllIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"/>
  </svg>
);
OutlinedSelectAllIcon.displayName = 'OutlinedSelectAllIcon';
export const SelectAllOutlinedIcon = OutlinedSelectAllIcon;

export const OutlinedSendIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4.01 6.03l7.51 3.22l-7.52-1l.01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2l-15 2l.01 7L23 12L2.01 3z"/>
  </svg>
);
OutlinedSendIcon.displayName = 'OutlinedSendIcon';
export const SendOutlinedIcon = OutlinedSendIcon;

export const OutlinedShieldIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83c-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25l6 2.25v4.7z"/>
  </svg>
);
OutlinedShieldIcon.displayName = 'OutlinedShieldIcon';
export const ShieldOutlinedIcon = OutlinedShieldIcon;

export const OutlinedSortIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/>
  </svg>
);
OutlinedSortIcon.displayName = 'OutlinedSortIcon';
export const SortOutlinedIcon = OutlinedSortIcon;

export const OutlinedSquareFootIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.66 17.66l-1.06 1.06l-.71-.71l1.06-1.06l-1.94-1.94l-1.06 1.06l-.71-.71l1.06-1.06l-1.94-1.94l-1.06 1.06l-.71-.71l1.06-1.06L9.7 9.7l-1.06 1.06l-.71-.71l1.06-1.06l-1.94-1.94l-1.06 1.06l-.71-.71l1.06-1.06L4 4v14c0 1.1.9 2 2 2h14l-2.34-2.34zM7 17v-5.76L12.76 17H7z"/>
  </svg>
);
OutlinedSquareFootIcon.displayName = 'OutlinedSquareFootIcon';
export const SquareFootOutlinedIcon = OutlinedSquareFootIcon;

export const OutlinedStackedBarChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 9h4v11H4zm0-5h4v4H4zm6 3h4v4h-4zm6 3h4v4h-4zm0 5h4v5h-4zm-6-3h4v8h-4z"/>
  </svg>
);
OutlinedStackedBarChartIcon.displayName = 'OutlinedStackedBarChartIcon';
export const StackedBarChartOutlinedIcon = OutlinedStackedBarChartIcon;

export const OutlinedStreamIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="20" cy="12" r="2"/><circle cx="4" cy="12" r="2"/><circle cx="12" cy="20" r="2"/><path fill={color || 'currentColor'} d="M13.943 8.619l4.404-4.392l1.413 1.416l-4.405 4.392zM8.32 9.68l.31.32l1.42-1.41l-4.02-4.04h-.01l-.31-.32l-1.42 1.41l4.02 4.05zm7.09 4.26L14 15.35l3.99 4.01l.35.35l1.42-1.41l-3.99-4.01zm-6.82.01l-4.03 4.01l-.32.33l1.41 1.41l4.03-4.02l.33-.32z"/><circle cx="12" cy="4" r="2"/>
  </svg>
);
OutlinedStreamIcon.displayName = 'OutlinedStreamIcon';
export const StreamOutlinedIcon = OutlinedStreamIcon;

export const OutlinedTagIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4zm-6 4h-4v-4h4v4z"/>
  </svg>
);
OutlinedTagIcon.displayName = 'OutlinedTagIcon';
export const TagOutlinedIcon = OutlinedTagIcon;

export const OutlinedTextFormatIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"/>
  </svg>
);
OutlinedTextFormatIcon.displayName = 'OutlinedTextFormatIcon';
export const TextFormatOutlinedIcon = OutlinedTextFormatIcon;

export const OutlinedUnarchiveIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm3-5h2.55v3h2.9v-3H16l-4-4z"/>
  </svg>
);
OutlinedUnarchiveIcon.displayName = 'OutlinedUnarchiveIcon';
export const UnarchiveOutlinedIcon = OutlinedUnarchiveIcon;

export const OutlinedUndoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/>
  </svg>
);
OutlinedUndoIcon.displayName = 'OutlinedUndoIcon';
export const UndoOutlinedIcon = OutlinedUndoIcon;

export const OutlinedUpcomingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.6 10.81L16.19 9.4l3.56-3.55l1.41 1.41c-.11.03-3.56 3.55-3.56 3.55zM13 3h-2v5h2V3zm-6.6 7.81L7.81 9.4L4.26 5.84L2.84 7.26c.11.03 3.56 3.55 3.56 3.55zM20 14h-3.42c-.77 1.76-2.54 3-4.58 3s-3.81-1.24-4.58-3H4v5h16v-5m0-2c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-5c0-1.1.9-2 2-2h5c0 1.66 1.34 3 3 3s3-1.34 3-3h5z"/>
  </svg>
);
OutlinedUpcomingIcon.displayName = 'OutlinedUpcomingIcon';
export const UpcomingOutlinedIcon = OutlinedUpcomingIcon;

export const OutlinedWavesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 16.99c-1.35 0-2.2.42-2.95.8c-.65.33-1.18.6-2.05.6c-.9 0-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.95c1.35 0 2.2-.42 2.95-.8c.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.42 2.95-.8c.65-.33 1.18-.6 2.05-.6c.9 0 1.4.25 2.05.6c.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6c-.75-.38-1.6-.8-2.95-.8zm0-4.45c-1.35 0-2.2.43-2.95.8c-.65.32-1.18.6-2.05.6c-.9 0-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.32-1.17.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6c-.75-.38-1.6-.8-2.95-.8zm2.95-8.08c-.75-.38-1.58-.8-2.95-.8s-2.2.42-2.95.8c-.65.32-1.18.6-2.05.6c-.9 0-1.4-.25-2.05-.6c-.75-.37-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.93c1.35 0 2.2-.43 2.95-.8c.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6c.9 0 1.4.25 2.05.6c.75.38 1.58.8 2.95.8V5.04c-.9 0-1.4-.25-2.05-.58zM17 8.09c-1.35 0-2.2.43-2.95.8c-.65.35-1.15.6-2.05.6s-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.35-1.15.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6c.9 0 1.4.25 2.05.6c.75.38 1.58.8 2.95.8V9.49c-.9 0-1.4-.25-2.05-.6c-.75-.38-1.6-.8-2.95-.8z"/>
  </svg>
);
OutlinedWavesIcon.displayName = 'OutlinedWavesIcon';
export const WavesOutlinedIcon = OutlinedWavesIcon;

export const OutlinedWebStoriesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 4v16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h9v16zm8-14v12c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5z"/>
  </svg>
);
OutlinedWebStoriesIcon.displayName = 'OutlinedWebStoriesIcon';
export const WebStoriesOutlinedIcon = OutlinedWebStoriesIcon;

export const OutlinedWeekendIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 9V7c0-1.65-1.35-3-3-3H6C4.35 4 3 5.35 3 7v2c-1.65 0-3 1.35-3 3v5c0 1.65 1.35 3 3 3h18c1.65 0 3-1.35 3-3v-5c0-1.65-1.35-3-3-3zM5 7c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v2.78c-.61.55-1 1.34-1 2.22v2H6v-2c0-.88-.39-1.67-1-2.22V7zm17 10c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v4h16v-4c0-.55.45-1 1-1s1 .45 1 1v5z"/>
  </svg>
);
OutlinedWeekendIcon.displayName = 'OutlinedWeekendIcon';
export const WeekendOutlinedIcon = OutlinedWeekendIcon;

export const OutlinedWhereToVoteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 1C7.59 1 4 4.59 4 9c0 5.57 6.96 13.34 7.26 13.67l.74.82l.74-.82C13.04 22.34 20 14.57 20 9c0-4.41-3.59-8-8-8zm0 19.47C9.82 17.86 6 12.54 6 9c0-3.31 2.69-6 6-6s6 2.69 6 6c0 3.83-4.25 9.36-6 11.47zm-1.53-9.3L8.71 9.4l-1.42 1.42L10.47 14l6.01-6.01l-1.41-1.42z"/>
  </svg>
);
OutlinedWhereToVoteIcon.displayName = 'OutlinedWhereToVoteIcon';
export const WhereToVoteOutlinedIcon = OutlinedWhereToVoteIcon;
