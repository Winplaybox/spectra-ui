import React from 'react';
import { IconProps } from '../../types';

export const TwoToneAddIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
  </svg>
);
TwoToneAddIcon.displayName = 'TwoToneAddIcon';
export const AddTwoToneIcon = TwoToneAddIcon;

export const TwoToneAddBoxIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M5 19h14V5H5v14zm2-8h4V7h2v4h4v2h-4v4h-2v-4H7v-2z"/><path fill={color || 'currentColor'} d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z"/>
  </svg>
);
TwoToneAddBoxIcon.displayName = 'TwoToneAddBoxIcon';
export const AddBoxTwoToneIcon = TwoToneAddBoxIcon;

export const TwoToneAddCircleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8zm5 9h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/><path fill={color || 'currentColor'} d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/>
  </svg>
);
TwoToneAddCircleIcon.displayName = 'TwoToneAddCircleIcon';
export const AddCircleTwoToneIcon = TwoToneAddCircleIcon;

export const TwoToneAddCircleOutlineIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/>
  </svg>
);
TwoToneAddCircleOutlineIcon.displayName = 'TwoToneAddCircleOutlineIcon';
export const AddCircleOutlineTwoToneIcon = TwoToneAddCircleOutlineIcon;

export const TwoToneAddLinkIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8 11h8v2H8v-2zm12.1 1H22c0-2.76-2.24-5-5-5h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1zM3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM19 12h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3z"/>
  </svg>
);
TwoToneAddLinkIcon.displayName = 'TwoToneAddLinkIcon';
export const AddLinkTwoToneIcon = TwoToneAddLinkIcon;

export const TwoToneAmpStoriesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M9 6h6v11H9z"/><path fill={color || 'currentColor'} d="M7 19h10V4H7v15zM9 6h6v11H9V6zM3 6h2v11H3zm16 0h2v11h-2z"/>
  </svg>
);
TwoToneAmpStoriesIcon.displayName = 'TwoToneAmpStoriesIcon';
export const AmpStoriesTwoToneIcon = TwoToneAmpStoriesIcon;

export const TwoToneArchiveIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M5 19h14V8H5v11zm5.55-6v-3h2.91v3H16l-4 4l-4-4h2.55z"/><path fill={color || 'currentColor'} d="M16 13h-2.55v-3h-2.9v3H8l4 4zm4.54-7.77l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM19 19H5V8h14v11z"/>
  </svg>
);
TwoToneArchiveIcon.displayName = 'TwoToneArchiveIcon';
export const ArchiveTwoToneIcon = TwoToneArchiveIcon;

export const TwoToneAttributionIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8zm0 1c.83 0 1.5.67 1.5 1.5S12.83 8 12 8s-1.5-.67-1.5-1.5S11.17 5 12 5zm2.75 9.5h-1.5V19h-2.5v-4.5h-1.5V9.88c0-.92 1.84-1.38 2.75-1.38s2.75.47 2.75 1.38v4.62z"/><path fill={color || 'currentColor'} d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm0-11.5c-.91 0-2.75.46-2.75 1.38v4.62h1.5V19h2.5v-4.5h1.5V9.88c0-.91-1.84-1.38-2.75-1.38z"/><circle cx="12" cy="6.5" r="1.5"/>
  </svg>
);
TwoToneAttributionIcon.displayName = 'TwoToneAttributionIcon';
export const AttributionTwoToneIcon = TwoToneAttributionIcon;

export const TwoToneBackspaceIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M7.06 5L2.4 12l4.67 7H22V5H7.06c.01 0 .01 0 0 0zM9 8.41L10.41 7L14 10.59L17.59 7L19 8.41L15.41 12L19 15.59L17.59 17L14 13.41L10.41 17L9 15.59L12.59 12L9 8.41z"/><path fill={color || 'currentColor'} d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41L17.59 17L19 15.59L15.41 12L19 8.41L17.59 7L14 10.59L10.41 7L9 8.41L12.59 12L9 15.59z"/>
  </svg>
);
TwoToneBackspaceIcon.displayName = 'TwoToneBackspaceIcon';
export const BackspaceTwoToneIcon = TwoToneBackspaceIcon;

export const TwoToneBallotIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M7 14h3v3H7zm0-7h3v3H7zM5 19h14V5H5v14zm8-11.5h5v2h-5v-2zm0 7h5v2h-5v-2zM6 6h5v5H6V6zm0 7h5v5H6v-5z"/><path fill={color || 'currentColor'} d="M13 7.5h5v2h-5zm0 7h5v2h-5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM11 6H6v5h5V6zm-1 4H7V7h3v3zm1 3H6v5h5v-5zm-1 4H7v-3h3v3z"/>
  </svg>
);
TwoToneBallotIcon.displayName = 'TwoToneBallotIcon';
export const BallotTwoToneIcon = TwoToneBallotIcon;

export const TwoToneBiotechIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M11.925 4.861l.94-.342l1.71 4.699l-.94.342z"/><circle cx="10.5" cy="8" fillOpacity={fillOpacity ?? 0.3} r="1"/><path fill={color || 'currentColor'} d="M7 19c-1.1 0-2 .9-2 2h14c0-1.1-.9-2-2-2h-4v-2h3c1.1 0 2-.9 2-2h-8c-1.66 0-3-1.34-3-3a3 3 0 0 1 1.47-2.57c.41.59 1.06 1 1.83 1.06c.7.06 1.36-.19 1.85-.62l.59 1.61l.94-.34l.34.94l1.88-.68l-.34-.94l.94-.34l-2.74-7.52l-.94.34l-.34-.94l-1.88.68l.34.94l-.94.35l.56 1.55c-1.17-.04-2.19.75-2.48 1.86A5.01 5.01 0 0 0 5 12c0 2.76 2.24 5 5 5v2H7zm5.86-14.48l1.71 4.7l-.94.34l-1.71-4.7l.94-.34zM10.5 7c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1z"/>
  </svg>
);
TwoToneBiotechIcon.displayName = 'TwoToneBiotechIcon';
export const BiotechTwoToneIcon = TwoToneBiotechIcon;

export const TwoToneBlockIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8c1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.902 7.902 0 0 1 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.902 7.902 0 0 1 20 12c0 4.42-3.58 8-8 8z"/>
  </svg>
);
TwoToneBlockIcon.displayName = 'TwoToneBlockIcon';
export const BlockTwoToneIcon = TwoToneBlockIcon;

export const TwoToneBoltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 21h-1l1-7H7.5c-.88 0-.33-.75-.31-.78C8.48 10.94 10.42 7.54 13.01 3h1l-1 7h3.51c.4 0 .62.19.4.66C12.97 17.55 11 21 11 21z"/>
  </svg>
);
TwoToneBoltIcon.displayName = 'TwoToneBoltIcon';
export const BoltTwoToneIcon = TwoToneBoltIcon;

export const TwoToneCalculateIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M5 19h14V5H5v14zm8.03-11.94L14.09 6l1.41 1.41L16.91 6l1.06 1.06l-1.41 1.41l1.41 1.41l-1.06 1.06l-1.41-1.4l-1.41 1.41l-1.06-1.06l1.41-1.41l-1.41-1.42zM13 13.25h5v1.5h-5v-1.5zm0 2.5h5v1.5h-5v-1.5zM6.25 7.72h5v1.5h-5v-1.5zM6 14.5h2v-2h1.5v2h2V16h-2v2H8v-2H6v-1.5z"/><path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/><path fill={color || 'currentColor'} d="M6.25 7.72h5v1.5h-5zM13 15.75h5v1.5h-5zm0-2.5h5v1.5h-5zM8 18h1.5v-2h2v-1.5h-2v-2H8v2H6V16h2zm6.09-7.05l1.41-1.41l1.41 1.41l1.06-1.06l-1.41-1.42l1.41-1.41L16.91 6L15.5 7.41L14.09 6l-1.06 1.06l1.41 1.41l-1.41 1.42z"/>
  </svg>
);
TwoToneCalculateIcon.displayName = 'TwoToneCalculateIcon';
export const CalculateTwoToneIcon = TwoToneCalculateIcon;

export const TwoToneChangeCircleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m.06 9.34v2.14a3.46 3.46 0 0 1-2.54-1.01c-1.12-1.12-1.3-2.8-.59-4.13l-1.1-1.1c-1.28 1.94-1.07 4.59.64 6.29A4.95 4.95 0 0 0 12 17h.06v2l2.83-2.83l-2.83-2.83zm3.48-4.88c-.99-.99-2.3-1.46-3.6-1.45V5L9.11 7.83l2.83 2.83V8.51H12c.9 0 1.79.34 2.48 1.02c1.12 1.12 1.3 2.8.59 4.13l1.1 1.1a5.032 5.032 0 0 0-.63-6.3z"/><path fill={color || 'currentColor'} d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm.06 11.34v2.14a3.46 3.46 0 0 1-2.54-1.01c-1.12-1.12-1.3-2.8-.59-4.13l-1.1-1.1c-1.28 1.94-1.07 4.59.64 6.29A4.95 4.95 0 0 0 12 17h.06v2l2.83-2.83l-2.83-2.83zm3.48-4.88c-.99-.99-2.3-1.46-3.6-1.45V5L9.11 7.83l2.83 2.83V8.51H12c.9 0 1.79.34 2.48 1.02c1.12 1.12 1.3 2.8.59 4.13l1.1 1.1a5.032 5.032 0 0 0-.63-6.3z"/>
  </svg>
);
TwoToneChangeCircleIcon.displayName = 'TwoToneChangeCircleIcon';
export const ChangeCircleTwoToneIcon = TwoToneChangeCircleIcon;

export const TwoToneClearIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"/>
  </svg>
);
TwoToneClearIcon.displayName = 'TwoToneClearIcon';
export const ClearTwoToneIcon = TwoToneClearIcon;

export const TwoToneContentCopyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M8 7h11v14H8z"/><path fill={color || 'currentColor'} d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
  </svg>
);
TwoToneContentCopyIcon.displayName = 'TwoToneContentCopyIcon';
export const ContentCopyTwoToneIcon = TwoToneContentCopyIcon;

export const TwoToneContentCutIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 3l-6 6l2 2l7-7V3zm-9 3c0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64c.23-.5.36-1.05.36-1.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2s2 .89 2 2s-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2s2 .89 2 2s-.9 2-2 2zm6-8.5c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5z"/>
  </svg>
);
TwoToneContentCutIcon.displayName = 'TwoToneContentCutIcon';
export const ContentCutTwoToneIcon = TwoToneContentCutIcon;

export const TwoToneContentPasteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M17 7H7V4H5v16h14V4h-2z"/><path fill={color || 'currentColor'} d="M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"/>
  </svg>
);
TwoToneContentPasteIcon.displayName = 'TwoToneContentPasteIcon';
export const ContentPasteTwoToneIcon = TwoToneContentPasteIcon;

export const TwoToneContentPasteGoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M10 17c0-3.31 2.69-6 6-6h3V5h-2v3H7V5H5v14h5v-2z"/><path fill={color || 'currentColor'} d="M10 19H5V5h2v3h10V5h2v6h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2zm2-16c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1z"/><path fill={color || 'currentColor'} d="M18.01 13l-1.42 1.41l1.58 1.58H12v2h6.17l-1.58 1.59l1.42 1.41l3.99-4z"/>
  </svg>
);
TwoToneContentPasteGoIcon.displayName = 'TwoToneContentPasteGoIcon';
export const ContentPasteGoTwoToneIcon = TwoToneContentPasteGoIcon;

export const TwoToneContentPasteOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M10.83 8H17V5h2v11.17L10.83 8zM5 19V7.83L16.17 19H5z"/><path fill={color || 'currentColor'} d="M21.19 21.19L2.81 2.81L1.39 4.22L3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61l1.41-1.42zM5 19V7.83L16.17 19H5zM17 8V5h2v11.17l2 2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5.83l5 5H17zm-5-5c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1z"/>
  </svg>
);
TwoToneContentPasteOffIcon.displayName = 'TwoToneContentPasteOffIcon';
export const ContentPasteOffTwoToneIcon = TwoToneContentPasteOffIcon;

export const TwoToneContentPasteSearchIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M10 16.5c0-3.58 2.92-6.5 6.5-6.5c.89 0 1.73.18 2.5.5V5h-2v3H7V5H5v14h5.5c-.32-.77-.5-1.61-.5-2.5z"/><path fill={color || 'currentColor'} d="M10.5 19H5V5h2v3h10V5h2v5.5c.75.31 1.42.76 2 1.32V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6.82a6.567 6.567 0 0 1-1.32-2zM12 3c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1z"/><path fill={color || 'currentColor'} d="M20.3 18.9c.4-.7.7-1.5.7-2.4c0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.7 2.7l1.4-1.4l-2.7-2.7zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z"/>
  </svg>
);
TwoToneContentPasteSearchIcon.displayName = 'TwoToneContentPasteSearchIcon';
export const ContentPasteSearchTwoToneIcon = TwoToneContentPasteSearchIcon;

export const TwoToneCopyAllIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M9 4h9v12H9z"/><path fill={color || 'currentColor'} d="M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H9V4h9v12zM3 15v-2h2v2H3zm0-5.5h2v2H3v-2zM10 20h2v2h-2v-2zm-7-1.5v-2h2v2H3zM5 22c-1.1 0-2-.9-2-2h2v2zm3.5 0h-2v-2h2v2zm5 0v-2h2c0 1.1-.9 2-2 2zM5 6v2H3c0-1.1.9-2 2-2z"/>
  </svg>
);
TwoToneCopyAllIcon.displayName = 'TwoToneCopyAllIcon';
export const CopyAllTwoToneIcon = TwoToneCopyAllIcon;

export const TwoToneCreateIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M5 18.08V19h.92l9.06-9.06l-.92-.92z"/><path fill={color || 'currentColor'} d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06l.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41z"/>
  </svg>
);
TwoToneCreateIcon.displayName = 'TwoToneCreateIcon';
export const CreateTwoToneIcon = TwoToneCreateIcon;

export const TwoToneDeleteSweepIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M5 10h6v8H5z"/><path fill={color || 'currentColor'} d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zm2-8h6v8H5v-8zm5-6H6L5 5H2v2h12V5h-3z"/>
  </svg>
);
TwoToneDeleteSweepIcon.displayName = 'TwoToneDeleteSweepIcon';
export const DeleteSweepTwoToneIcon = TwoToneDeleteSweepIcon;

export const TwoToneDeselectIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 13h2v-2H3v2zm4 8h2v-2H7v2zm6-18h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zm8 4h2v-2h-2v2zm8-8h2v-2h-2v2zm0-4h2V7h-2v2zm-4-4h2V3h-2v2zM7.83 5L7 4.17V3h2v2H7.83zm12 12l-.83-.83V15h2v2h-1.17zm1.36 4.19L2.81 2.81L1.39 4.22L4.17 7H3v2h2V7.83l2 2V17h7.17l2 2H15v2h2v-1.17l2.78 2.78l1.41-1.42zM9 15v-3.17L12.17 15H9zm6-2.83V9h-3.17l-2-2H17v7.17l-2-2z"/>
  </svg>
);
TwoToneDeselectIcon.displayName = 'TwoToneDeselectIcon';
export const DeselectTwoToneIcon = TwoToneDeselectIcon;

export const TwoToneDraftsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 15.36l-8-5.02V18h16l-.01-7.63z"/><path fill={color || 'currentColor'} d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1L2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 3.32L19.99 8v.01L12 13L4 8l8-4.68zM4 18v-7.66l8 5.02l7.99-4.99L20 18H4z"/>
  </svg>
);
TwoToneDraftsIcon.displayName = 'TwoToneDraftsIcon';
export const DraftsTwoToneIcon = TwoToneDraftsIcon;

export const TwoToneDynamicFeedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 7h8v4h-8z"/><path fill={color || 'currentColor'} d="M8 8H6v7c0 1.1.9 2 2 2h9v-2H8V8z"/><path fill={color || 'currentColor'} d="M20 3h-8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8h-8V7h8v4zM4 12H2v7c0 1.1.9 2 2 2h9v-2H4v-7z"/>
  </svg>
);
TwoToneDynamicFeedIcon.displayName = 'TwoToneDynamicFeedIcon';
export const DynamicFeedTwoToneIcon = TwoToneDynamicFeedIcon;

export const TwoToneFileCopyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M14 7H8v14h11v-9h-5z"/><path fill={color || 'currentColor'} d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"/>
  </svg>
);
TwoToneFileCopyIcon.displayName = 'TwoToneFileCopyIcon';
export const FileCopyTwoToneIcon = TwoToneFileCopyIcon;

export const TwoToneFilterListIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
  </svg>
);
TwoToneFilterListIcon.displayName = 'TwoToneFilterListIcon';
export const FilterListTwoToneIcon = TwoToneFilterListIcon;

export const TwoToneFilterListOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10.83 8H21V6H8.83l2 2zm5 5H18v-2h-4.17l2 2zM14 16.83V18h-4v-2h3.17l-3-3H6v-2h2.17l-3-3H3V6h.17L1.39 4.22L2.8 2.81l18.38 18.38l-1.41 1.41L14 16.83z"/>
  </svg>
);
TwoToneFilterListOffIcon.displayName = 'TwoToneFilterListOffIcon';
export const FilterListOffTwoToneIcon = TwoToneFilterListOffIcon;

export const TwoToneFlagIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12.36 6H7v6h7.24l.4 2H18V8h-5.24z"/><path fill={color || 'currentColor'} d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6zm3.6 8h-3.36l-.4-2H7V6h5.36l.4 2H18v6z"/>
  </svg>
);
TwoToneFlagIcon.displayName = 'TwoToneFlagIcon';
export const FlagTwoToneIcon = TwoToneFlagIcon;

export const TwoToneFlagCircleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8zm1 11l-1-2H9.5v5H8V7h6l1 2h3v6h-5z"/><path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/><path fill={color || 'currentColor'} d="M15 9l-1-2H8v11h1.5v-5H12l1 2h5V9h-3zm1.5 4.5h-2.57l-1-2H9.5v-3h3.57l1 2h2.43v3z"/>
  </svg>
);
TwoToneFlagCircleIcon.displayName = 'TwoToneFlagCircleIcon';
export const FlagCircleTwoToneIcon = TwoToneFlagCircleIcon;

export const TwoToneFontDownloadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M4 20h16V4H4v16zm7.07-14.5h1.86l5.11 13h-2.09l-1.14-3H9.17l-1.12 3H5.96l5.11-13zM12 7.98L9.93 13.5h4.14z"/><path fill={color || 'currentColor'} d="M9.17 15.5h5.64l1.14 3h2.09l-5.11-13h-1.86l-5.11 13h2.09l1.12-3zM12 7.98l2.07 5.52H9.93L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16z"/>
  </svg>
);
TwoToneFontDownloadIcon.displayName = 'TwoToneFontDownloadIcon';
export const FontDownloadTwoToneIcon = TwoToneFontDownloadIcon;

export const TwoToneFontDownloadOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M10.35 7.52L10.92 6h2.14l2.55 6.79L20 17.17V4H6.83l3.52 3.52zm2.23 2.23l-.54-1.52h-.1l-.23.66l.87.86zM17.17 20l-5.07-5.07H9.58L8.49 18H6.41l2.39-6.37L4 6.83V20h13.17z"/><path fill={color || 'currentColor'} d="M4.83 2H20c1.1 0 2 .9 2 2v15.17l-2-2V4H6.83l-2-2zm6.09 4l-.57 1.52l1.36 1.36l.23-.66h.1l.54 1.52l3.04 3.04L13.07 6h-2.15zm9.57 17.31L19.17 22H4c-1.1 0-2-.9-2-2V4.83L.69 3.51L2.1 2.1l19.8 19.8l-1.41 1.41zM17.17 20l-5.07-5.07H9.58L8.49 18H6.41l2.39-6.37L4 6.83V20h13.17z"/>
  </svg>
);
TwoToneFontDownloadOffIcon.displayName = 'TwoToneFontDownloadOffIcon';
export const FontDownloadOffTwoToneIcon = TwoToneFontDownloadOffIcon;

export const TwoToneForwardIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M14 14v1.17L17.17 12L14 8.83V10H6v4z"/><path fill={color || 'currentColor'} d="M20 12l-8-8v4H4v8h8v4l8-8zM6 14v-4h8V8.83L17.17 12L14 15.17V14H6z"/>
  </svg>
);
TwoToneForwardIcon.displayName = 'TwoToneForwardIcon';
export const ForwardTwoToneIcon = TwoToneForwardIcon;

export const TwoToneGestureIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22c.5.2 0 1.03-.3 1.52c-.25.42-2.86 3.89-2.86 6.31c0 1.28.48 2.34 1.34 2.98c.75.56 1.74.73 2.64.46c1.07-.31 1.95-1.4 3.06-2.77c1.21-1.49 2.83-3.44 4.08-3.44c1.63 0 1.65 1.01 1.76 1.79c-3.78.64-5.38 3.67-5.38 5.37c0 1.7 1.44 3.09 3.21 3.09c1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2c-2.25 0-4.18 1.91-4.94 2.84c-.58.73-2.06 2.48-2.29 2.72c-.25.3-.68.84-1.11.84c-.45 0-.72-.83-.36-1.92c.35-1.09 1.4-2.86 1.85-3.52c.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3C5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72c0-.6.73-2.2 2.87-2.76c-.3 2.69-1.43 3.48-2.13 3.48z"/>
  </svg>
);
TwoToneGestureIcon.displayName = 'TwoToneGestureIcon';
export const GestureTwoToneIcon = TwoToneGestureIcon;

export const TwoToneHowToRegIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="11" cy="8" fillOpacity={fillOpacity ?? 0.3} r="2"/><path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M5 18h4.99L9 17l.93-.94C7.55 16.33 5.2 17.37 5 18z"/><path fill={color || 'currentColor'} d="M11 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2zm-1 12H5c.2-.63 2.55-1.67 4.93-1.94h.03l.46-.45L12 14.06a9.34 9.34 0 0 0-1-.06c-2.67 0-8 1.34-8 4v2h9l-2-2zm10.6-5.5l-5.13 5.17l-2.07-2.08L12 17l3.47 3.5L22 13.91z"/>
  </svg>
);
TwoToneHowToRegIcon.displayName = 'TwoToneHowToRegIcon';
export const HowToRegTwoToneIcon = TwoToneHowToRegIcon;

export const TwoToneHowToVoteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M5 19h14v1H5z"/><path fill={color || 'currentColor'} d="M18 13h-.68l-2 2h1.91L19 17H5l1.78-2h2.05l-2-2H6l-3 3v4c0 1.1.89 2 1.99 2H19a2 2 0 0 0 2-2v-4l-3-3zm1 7H5v-1h14v1z"/><path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12.048 12.905L8.505 9.362l4.95-4.95l3.543 3.543z"/><path fill={color || 'currentColor'} d="M19.11 7.25L14.16 2.3a.975.975 0 0 0-1.4-.01L6.39 8.66a.996.996 0 0 0 0 1.41l4.95 4.95c.39.39 1.02.39 1.41 0l6.36-6.36a.996.996 0 0 0 0-1.41zm-7.06 5.65L8.51 9.36l4.95-4.95L17 7.95l-4.95 4.95z"/>
  </svg>
);
TwoToneHowToVoteIcon.displayName = 'TwoToneHowToVoteIcon';
export const HowToVoteTwoToneIcon = TwoToneHowToVoteIcon;

export const TwoToneInboxIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12.01 18c-1.48 0-2.75-.81-3.45-2H5v3h14v-3h-3.55a3.98 3.98 0 0 1-3.44 2z"/><path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-5c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z"/>
  </svg>
);
TwoToneInboxIcon.displayName = 'TwoToneInboxIcon';
export const InboxTwoToneIcon = TwoToneInboxIcon;

export const TwoToneInsightsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2c1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93c0-1.1-.9-2-2-2z"/><path fill={color || 'currentColor'} d="M15 9l.94-2.07L18 6l-2.06-.93L15 3l-.92 2.07L12 6l2.08.93zM3.5 11L4 9l2-.5L4 8l-.5-2L3 8l-2 .5L3 9z"/>
  </svg>
);
TwoToneInsightsIcon.displayName = 'TwoToneInsightsIcon';
export const InsightsTwoToneIcon = TwoToneInsightsIcon;

export const TwoToneInventoryIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 11.5l1.5 1.5l-6.99 7L11 15.5l1.5-1.5l3.01 3L21 11.5z"/><path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M17 5v3H7V5H5v14h6.68l-3.51-3.5l4.33-4.33l3.01 3l3.49-3.5V5z"/><path fill={color || 'currentColor'} d="M5 19V5h2v3h10V5h2v5.67l2-2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8.68l-2-2H5zm7-16c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1z"/>
  </svg>
);
TwoToneInventoryIcon.displayName = 'TwoToneInventoryIcon';
export const InventoryTwoToneIcon = TwoToneInventoryIcon;

export const TwoToneInventory2Icon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M4 7h16V3.98L4 4zm1 13h14V9H5v11zm4-8h6v2H9v-2z"/><path fill={color || 'currentColor'} d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-1 18H5V9h14v11zm1-13H4V4l16-.02V7z"/><path fill={color || 'currentColor'} d="M9 12h6v2H9z"/>
  </svg>
);
TwoToneInventory2Icon.displayName = 'TwoToneInventory2Icon';
export const Inventory2TwoToneIcon = TwoToneInventory2Icon;

export const TwoToneLinkIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"/>
  </svg>
);
TwoToneLinkIcon.displayName = 'TwoToneLinkIcon';
export const LinkTwoToneIcon = TwoToneLinkIcon;

export const TwoToneLinkOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.39 11L16 12.61V11zM17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1c0 1.27-.77 2.37-1.87 2.84l1.4 1.4A4.986 4.986 0 0 0 22 12c0-2.76-2.24-5-5-5zM2 4.27l3.11 3.11A4.991 4.991 0 0 0 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1c0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4.01l1.41-1.41L3.41 2.86L2 4.27z"/>
  </svg>
);
TwoToneLinkOffIcon.displayName = 'TwoToneLinkOffIcon';
export const LinkOffTwoToneIcon = TwoToneLinkOffIcon;

export const TwoToneLowPriorityIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 5h8v2h-8V5zm0 5.5h8v2h-8v-2zm0 5.5h8v2h-8v-2zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3l-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"/>
  </svg>
);
TwoToneLowPriorityIcon.displayName = 'TwoToneLowPriorityIcon';
export const LowPriorityTwoToneIcon = TwoToneLowPriorityIcon;

export const TwoToneMailIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M20 6H4l8 4.99zM4 8v10h16V8l-8 5z"/><path fill={color || 'currentColor'} d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 4.99L4 6h16zm0 12H4V8l8 5l8-5v10z"/>
  </svg>
);
TwoToneMailIcon.displayName = 'TwoToneMailIcon';
export const MailTwoToneIcon = TwoToneMailIcon;

export const TwoToneMarkunreadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M20 6H4l8 5zM4 8v10h16V8l-8 5z"/><path fill={color || 'currentColor'} d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"/>
  </svg>
);
TwoToneMarkunreadIcon.displayName = 'TwoToneMarkunreadIcon';
export const MarkunreadTwoToneIcon = TwoToneMarkunreadIcon;

export const TwoToneMoveToInboxIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12.01 18c-1.48 0-2.75-.81-3.45-2H5v3h14v-3h-3.55a3.98 3.98 0 0 1-3.44 2z"/><path fill={color || 'currentColor'} d="M16 9h-2.55V6h-2.9v3H8l4 4zm3-6H4.99C3.88 3 3 3.9 3 5v14c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5l-.01-9H19v9z"/>
  </svg>
);
TwoToneMoveToInboxIcon.displayName = 'TwoToneMoveToInboxIcon';
export const MoveToInboxTwoToneIcon = TwoToneMoveToInboxIcon;

export const TwoToneNextWeekIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M4 20h16V9H4v11zm6-8.5l1-1l4 4l-4 4l-1-1l3-3l-3-3z"/><path fill={color || 'currentColor'} d="M11 18.5l4-4l-4-4l-1 1l3 3l-3 3zM20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm10 15H4V9h16v11z"/>
  </svg>
);
TwoToneNextWeekIcon.displayName = 'TwoToneNextWeekIcon';
export const NextWeekTwoToneIcon = TwoToneNextWeekIcon;

export const TwoToneOutlinedFlagIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z"/>
  </svg>
);
TwoToneOutlinedFlagIcon.displayName = 'TwoToneOutlinedFlagIcon';
export const OutlinedFlagTwoToneIcon = TwoToneOutlinedFlagIcon;

export const TwoTonePinOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M9.644 12.184L11.461 14H8v-.172l1.644-1.644zM13 4v6.46l-.73-.73L11 8.46V4h2z"/><path fill={color || 'currentColor'} d="M9 9l1.914 1.914L8 13.828V14h6l2 2h-3v4l-1 3l-1-3v-4H6v-3l3-3V9zm8-7v2l-2 1v5l3 3v2.461l-5-5.001V4h-2v4.46l-2-2V5L7 4V2h10z"/><path fill={color || 'currentColor'} d="M2.27 2.27L1 3.54L20.46 23l1.27-1.27L11 11z"/>
  </svg>
);
TwoTonePinOffIcon.displayName = 'TwoTonePinOffIcon';
export const PinOffTwoToneIcon = TwoTonePinOffIcon;

export const TwoTonePolicyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M5 6.3V11c0 4.52 2.98 8.69 7 9.93c1.74-.53 3.28-1.62 4.47-3.04l-1.72-1.72a4.994 4.994 0 0 1-6.29-.64a5.003 5.003 0 0 1 0-7.07a5.003 5.003 0 0 1 7.07 0a5.006 5.006 0 0 1 .64 6.29l1.45 1.45C18.49 14.65 19 12.85 19 11V6.3l-7-3.11L5 6.3z"/><path fill={color || 'currentColor'} d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c.65-.16 1.27-.38 1.87-.65c1.8-.82 3.36-2.13 4.57-3.74C20.04 16.46 21 13.77 21 11V5l-9-4zm7 10c0 1.85-.51 3.65-1.38 5.21l-1.45-1.45a4.994 4.994 0 0 0-.64-6.29a5.003 5.003 0 0 0-7.07 0a5.003 5.003 0 0 0 0 7.07a5.006 5.006 0 0 0 6.29.64l1.72 1.72c-1.19 1.42-2.73 2.51-4.47 3.04c-4.02-1.25-7-5.42-7-9.94V6.3l7-3.11l7 3.11V11zm-4 1c0 1.66-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3z"/>
  </svg>
);
TwoTonePolicyIcon.displayName = 'TwoTonePolicyIcon';
export const PolicyTwoToneIcon = TwoTonePolicyIcon;

export const TwoTonePushPinIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M14 4h-4v5c0 1.1-.35 2.14-1 3h6c-.63-.84-1-1.88-1-3V4z"/><path fill={color || 'currentColor'} d="M19 12c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1l1-1v-7H19v-2zM9 12c.65-.86 1-1.9 1-3V4h4v5c0 1.12.37 2.16 1 3H9z"/>
  </svg>
);
TwoTonePushPinIcon.displayName = 'TwoTonePushPinIcon';
export const PushPinTwoToneIcon = TwoTonePushPinIcon;

export const TwoToneRedoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/>
  </svg>
);
TwoToneRedoIcon.displayName = 'TwoToneRedoIcon';
export const RedoTwoToneIcon = TwoToneRedoIcon;

export const TwoToneRemoveIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 13H5v-2h14v2z"/>
  </svg>
);
TwoToneRemoveIcon.displayName = 'TwoToneRemoveIcon';
export const RemoveTwoToneIcon = TwoToneRemoveIcon;

export const TwoToneRemoveCircleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8zm5 9H7v-2h10v2z"/><path fill={color || 'currentColor'} d="M7 11h10v2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/>
  </svg>
);
TwoToneRemoveCircleIcon.displayName = 'TwoToneRemoveCircleIcon';
export const RemoveCircleTwoToneIcon = TwoToneRemoveCircleIcon;

export const TwoToneRemoveCircleOutlineIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 11h10v2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/>
  </svg>
);
TwoToneRemoveCircleOutlineIcon.displayName = 'TwoToneRemoveCircleOutlineIcon';
export const RemoveCircleOutlineTwoToneIcon = TwoToneRemoveCircleOutlineIcon;

export const TwoToneReplyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10 9V5l-7 7l7 7v-4.1c5 0 8.5 1.6 11 5.1c-1-5-4-10-11-11z"/>
  </svg>
);
TwoToneReplyIcon.displayName = 'TwoToneReplyIcon';
export const ReplyTwoToneIcon = TwoToneReplyIcon;

export const TwoToneReplyAllIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 8V5l-7 7l7 7v-3l-4-4l4-4zm6 1V5l-7 7l7 7v-4.1c5 0 8.5 1.6 11 5.1c-1-5-4-10-11-11z"/>
  </svg>
);
TwoToneReplyAllIcon.displayName = 'TwoToneReplyAllIcon';
export const ReplyAllTwoToneIcon = TwoToneReplyAllIcon;

export const TwoToneReportIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M9.1 5L5 9.1v5.8L9.1 19h5.8l4.1-4.1V9.1L14.9 5H9.1zM12 17c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm1-3h-2V7h2v7z"/><path fill={color || 'currentColor'} d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z"/><circle cx="12" cy="16" r="1"/><path fill={color || 'currentColor'} d="M11 7h2v7h-2z"/>
  </svg>
);
TwoToneReportIcon.displayName = 'TwoToneReportIcon';
export const ReportTwoToneIcon = TwoToneReportIcon;

export const TwoToneReportGmailerrorredIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z"/><circle cx="12" cy="16" r="1"/><path fill={color || 'currentColor'} d="M11 7h2v7h-2z"/>
  </svg>
);
TwoToneReportGmailerrorredIcon.displayName = 'TwoToneReportGmailerrorredIcon';
export const ReportGmailerrorredTwoToneIcon = TwoToneReportGmailerrorredIcon;

export const TwoToneReportOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M19 9.1L14.9 5H9.1l-.22.22L11 7.33V7h2v2.33l5.78 5.79l.22-.22zM6.05 8.04L5 9.1v5.8L9.1 19h5.8l1.05-1.05l-9.9-9.91zM13 16c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1z"/><path fill={color || 'currentColor'} d="M9.1 5h5.8L19 9.1v5.8l-.22.22l1.42 1.41l.8-.8V8.27L15.73 3H8.27l-.8.8l1.41 1.42z"/><circle cx="12" cy="16" r="1"/><path fill={color || 'currentColor'} d="M13 7h-2v.33l2 2zM2.41 1.58L1 2.99l3.64 3.64L3 8.27v7.46L8.27 21h7.46l1.64-1.64L21.01 23l1.41-1.41L2.41 1.58zM14.9 19H9.1L5 14.9V9.1l1.05-1.05l9.9 9.9L14.9 19z"/>
  </svg>
);
TwoToneReportOffIcon.displayName = 'TwoToneReportOffIcon';
export const ReportOffTwoToneIcon = TwoToneReportOffIcon;

export const TwoToneSaveIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3zm3-8H6V6h9v4z"/><path fill={color || 'currentColor'} d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3zM6 6h9v4H6z"/>
  </svg>
);
TwoToneSaveIcon.displayName = 'TwoToneSaveIcon';
export const SaveTwoToneIcon = TwoToneSaveIcon;

export const TwoToneSaveAllIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 6H8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11c1.1 0 2-.9 2-2v-9l-4-4zm2 13H8V8h8.17L19 10.83V19z"/><path fill={color || 'currentColor'} d="M9 9h6v2H9z"/><circle cx="13.5" cy="15.5" r="2.5"/><path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} fillRule="evenodd" clipRule="evenodd" d="M19 10.83V19H8V8h8.17L19 10.83zM9 9h6v2H9V9zm4.5 9a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5z"/><path fill={color || 'currentColor'} d="M2 4a2 2 0 0 1 2-2h10v2H4v10H2V4z"/>
  </svg>
);
TwoToneSaveAllIcon.displayName = 'TwoToneSaveAllIcon';
export const SaveAllTwoToneIcon = TwoToneSaveAllIcon;

export const TwoToneSaveAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5l-5-5l1.41-1.41L11 12.67V3h2v9.67z"/>
  </svg>
);
TwoToneSaveAltIcon.displayName = 'TwoToneSaveAltIcon';
export const SaveAltTwoToneIcon = TwoToneSaveAltIcon;

export const TwoToneSaveAsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M16.17 5H5v14h9.4l4.6-4.6V7.83L16.17 5zM12 18c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3zm3-8H6V6h9v4z"/><path fill={color || 'currentColor'} d="M21 12.4V7l-4-4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.4l2-2H5V5h11.17L19 7.83v6.57l2-2zM15 15c0 1.66-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3zM6 6h9v4H6V6zm13.99 10.25l1.77 1.77L16.77 23H15v-1.77l4.99-4.98zm3.26.26l-.85.85l-1.77-1.77l.85-.85c.2-.2.51-.2.71 0l1.06 1.06c.2.2.2.52 0 .71z"/>
  </svg>
);
TwoToneSaveAsIcon.displayName = 'TwoToneSaveAsIcon';
export const SaveAsTwoToneIcon = TwoToneSaveAsIcon;

export const TwoToneSelectAllIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"/>
  </svg>
);
TwoToneSelectAllIcon.displayName = 'TwoToneSelectAllIcon';
export const SelectAllTwoToneIcon = TwoToneSelectAllIcon;

export const TwoToneSendIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M4 8.25l7.51 1l-7.5-3.22zm.01 9.72l7.5-3.22l-7.51 1z"/><path fill={color || 'currentColor'} d="M2.01 3L2 10l15 2l-15 2l.01 7L23 12L2.01 3zM4 8.25V6.03l7.51 3.22l-7.51-1zm.01 9.72v-2.22l7.51-1l-7.51 3.22z"/>
  </svg>
);
TwoToneSendIcon.displayName = 'TwoToneSendIcon';
export const SendTwoToneIcon = TwoToneSendIcon;

export const TwoToneShieldIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M6 6.39v4.7c0 4 2.55 7.7 6 8.83c3.45-1.13 6-4.82 6-8.83v-4.7l-6-2.25l-6 2.25z"/><path fill={color || 'currentColor'} d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83c-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25l6 2.25v4.7z"/>
  </svg>
);
TwoToneShieldIcon.displayName = 'TwoToneShieldIcon';
export const ShieldTwoToneIcon = TwoToneShieldIcon;

export const TwoToneSortIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/>
  </svg>
);
TwoToneSortIcon.displayName = 'TwoToneSortIcon';
export const SortTwoToneIcon = TwoToneSortIcon;

export const TwoToneSquareFootIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M7 17h5.76L7 11.24z"/><path fill={color || 'currentColor'} d="M17.66 17.66l-1.06 1.06l-.71-.71l1.06-1.06l-1.94-1.94l-1.06 1.06l-.71-.71l1.06-1.06l-1.94-1.94l-1.06 1.06l-.71-.71l1.06-1.06L9.7 9.7l-1.06 1.06l-.71-.71l1.06-1.06l-1.94-1.94l-1.06 1.06l-.71-.71l1.06-1.06L4 4v14c0 1.1.9 2 2 2h14l-2.34-2.34zM7 17v-5.76L12.76 17H7z"/>
  </svg>
);
TwoToneSquareFootIcon.displayName = 'TwoToneSquareFootIcon';
export const SquareFootTwoToneIcon = TwoToneSquareFootIcon;

export const TwoToneStackedBarChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 9h4v11H4zm0-5h4v4H4zm6 3h4v4h-4zm6 3h4v4h-4zm0 5h4v5h-4zm-6-3h4v8h-4z"/>
  </svg>
);
TwoToneStackedBarChartIcon.displayName = 'TwoToneStackedBarChartIcon';
export const StackedBarChartTwoToneIcon = TwoToneStackedBarChartIcon;

export const TwoToneStreamIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="20" cy="12" r="2"/><circle cx="4" cy="12" r="2"/><circle cx="12" cy="20" r="2"/><path fill={color || 'currentColor'} d="M13.943 8.619l4.404-4.392l1.413 1.416l-4.405 4.392zM8.32 9.68l.31.32l1.42-1.41l-4.02-4.04h-.01l-.31-.32l-1.42 1.41l4.02 4.05zm7.09 4.26L14 15.35l3.99 4.01l.35.35l1.42-1.41l-3.99-4.01zm-6.82.01l-4.03 4.01l-.32.33l1.41 1.41l4.03-4.02l.33-.32z"/><circle cx="12" cy="4" r="2"/>
  </svg>
);
TwoToneStreamIcon.displayName = 'TwoToneStreamIcon';
export const StreamTwoToneIcon = TwoToneStreamIcon;

export const TwoToneTagIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4zm-6 4h-4v-4h4v4z"/>
  </svg>
);
TwoToneTagIcon.displayName = 'TwoToneTagIcon';
export const TagTwoToneIcon = TwoToneTagIcon;

export const TwoToneTextFormatIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"/>
  </svg>
);
TwoToneTextFormatIcon.displayName = 'TwoToneTextFormatIcon';
export const TextFormatTwoToneIcon = TwoToneTextFormatIcon;

export const TwoToneUnarchiveIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M5 19h14V8H5v11zm7-9l4 4h-2.55v3h-2.91v-3H8l4-4z"/><path fill={color || 'currentColor'} d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM19 19H5V8h14v11zm-8.45-2h2.9v-3H16l-4-4l-4 4h2.55z"/>
  </svg>
);
TwoToneUnarchiveIcon.displayName = 'TwoToneUnarchiveIcon';
export const UnarchiveTwoToneIcon = TwoToneUnarchiveIcon;

export const TwoToneUndoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/>
  </svg>
);
TwoToneUndoIcon.displayName = 'TwoToneUndoIcon';
export const UndoTwoToneIcon = TwoToneUndoIcon;

export const TwoToneUpcomingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 17c-2.04 0-3.81-1.24-4.58-3H4v5h16v-5h-3.42c-.77 1.76-2.54 3-4.58 3z"/><path fill={color || 'currentColor'} d="M21.16 7.26l-1.41-1.41l-3.56 3.55l1.41 1.41s3.45-3.52 3.56-3.55zM11 3h2v5h-2zm9 9h-5c0 1.66-1.34 3-3 3s-3-1.34-3-3H4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm0 7H4v-5h3.42c.77 1.76 2.54 3 4.58 3s3.81-1.24 4.58-3H20v5zM6.4 10.81L7.81 9.4L4.26 5.84L2.84 7.26c.11.03 3.56 3.55 3.56 3.55z"/>
  </svg>
);
TwoToneUpcomingIcon.displayName = 'TwoToneUpcomingIcon';
export const UpcomingTwoToneIcon = TwoToneUpcomingIcon;

export const TwoToneWavesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 16.99c-1.35 0-2.2.42-2.95.8c-.65.33-1.18.6-2.05.6c-.9 0-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.95c1.35 0 2.2-.42 2.95-.8c.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.42 2.95-.8c.65-.33 1.18-.6 2.05-.6c.9 0 1.4.25 2.05.6c.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6c-.75-.38-1.6-.8-2.95-.8zm0-4.45c-1.35 0-2.2.43-2.95.8c-.65.32-1.18.6-2.05.6c-.9 0-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.32-1.17.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6c-.75-.38-1.6-.8-2.95-.8zm2.95-8.08c-.75-.38-1.58-.8-2.95-.8s-2.2.42-2.95.8c-.65.32-1.18.6-2.05.6c-.9 0-1.4-.25-2.05-.6c-.75-.37-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.93c1.35 0 2.2-.43 2.95-.8c.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6c.9 0 1.4.25 2.05.6c.75.38 1.58.8 2.95.8V5.04c-.9 0-1.4-.25-2.05-.58zM17 8.09c-1.35 0-2.2.43-2.95.8c-.65.35-1.15.6-2.05.6s-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.35-1.15.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6c.9 0 1.4.25 2.05.6c.75.38 1.58.8 2.95.8V9.49c-.9 0-1.4-.25-2.05-.6c-.75-.38-1.6-.8-2.95-.8z"/>
  </svg>
);
TwoToneWavesIcon.displayName = 'TwoToneWavesIcon';
export const WavesTwoToneIcon = TwoToneWavesIcon;

export const TwoToneWebStoriesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M4 4h9v16H4z"/><path fill={color || 'currentColor'} d="M17 4v16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h9v16zm8-14v12c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5z"/>
  </svg>
);
TwoToneWebStoriesIcon.displayName = 'TwoToneWebStoriesIcon';
export const WebStoriesTwoToneIcon = TwoToneWebStoriesIcon;

export const TwoToneWeekendIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M21 11c-.55 0-1 .45-1 1v4H4v-4c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1zM6 14h12v-2c0-.88.39-1.67 1-2.22V7c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v2.78c.61.55 1 1.34 1 2.22v2z"/><path fill={color || 'currentColor'} d="M21 9V7c0-1.65-1.35-3-3-3H6C4.35 4 3 5.35 3 7v2c-1.65 0-3 1.35-3 3v5c0 1.65 1.35 3 3 3h18c1.65 0 3-1.35 3-3v-5c0-1.65-1.35-3-3-3zM5 7c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v2.78c-.61.55-1 1.34-1 2.22v2H6v-2c0-.88-.39-1.67-1-2.22V7zm17 10c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v4h16v-4c0-.55.45-1 1-1s1 .45 1 1v5z"/>
  </svg>
);
TwoToneWeekendIcon.displayName = 'TwoToneWeekendIcon';
export const WeekendTwoToneIcon = TwoToneWeekendIcon;

export const TwoToneWhereToVoteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 3C8.69 3 6 5.69 6 9c0 3.54 3.82 8.86 6 11.47c1.75-2.11 6-7.63 6-11.47c0-3.31-2.69-6-6-6zm-1.53 11l-3.18-3.18L8.71 9.4l1.77 1.77l4.6-4.6l1.41 1.41L10.47 14z"/><path fill={color || 'currentColor'} d="M12 1C7.59 1 4 4.59 4 9c0 5.57 6.96 13.34 7.26 13.67l.74.82l.74-.82C13.04 22.34 20 14.57 20 9c0-4.41-3.59-8-8-8zm0 19.47C9.82 17.86 6 12.54 6 9c0-3.31 2.69-6 6-6s6 2.69 6 6c0 3.83-4.25 9.36-6 11.47zm3.07-13.9l-4.6 4.6L8.71 9.4l-1.42 1.42L10.47 14l6.01-6.01z"/>
  </svg>
);
TwoToneWhereToVoteIcon.displayName = 'TwoToneWhereToVoteIcon';
export const WhereToVoteTwoToneIcon = TwoToneWhereToVoteIcon;
