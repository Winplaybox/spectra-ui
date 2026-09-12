import React from 'react';
import { IconProps } from './types';

export const CheckIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <polyline points="3.5 8.5 6.5 11.5 12.5 4.5" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <line x1="4" y1="4" x2="12" y2="12" />
    <line x1="12" y1="4" x2="4" y2="12" />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <polyline points="4 6 8 10 12 6" />
  </svg>
);

export const ChevronUpIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <polyline points="12 10 8 6 4 10" />
  </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <polyline points="6 4 10 8 6 12" />
  </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <polyline points="10 12 6 8 10 4" />
  </svg>
);

export const MinusIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <line x1="3" y1="8" x2="13" y2="8" />
  </svg>
);

export const PlusIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <line x1="8" y1="3" x2="8" y2="13" />
    <line x1="3" y1="8" x2="13" y2="8" />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <circle cx="7" cy="7" r="4.5" />
    <line x1="10.5" y1="10.5" x2="14" y2="14" />
  </svg>
);

export const SpinnerIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <circle cx="8" cy="8" r="6" strokeOpacity="0.25" />
    <path d="M14 8a6 6 0 0 0-6-6" />
  </svg>
);

export const AlertCircleIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <circle cx="8" cy="8" r="7" />
    <line x1="8" y1="5" x2="8" y2="9" />
    <line x1="8" y1="12" x2="8.01" y2="12" />
  </svg>
);

export const InfoIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <circle cx="8" cy="8" r="7" />
    <line x1="8" y1="8" x2="8" y2="12" />
    <line x1="8" y1="4.5" x2="8.01" y2="4.5" />
  </svg>
);

export const UserIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M13 14v-1.5A3.5 3.5 0 0 0 9.5 9h-3A3.5 3.5 0 0 0 3 12.5V14" />
    <circle cx="8" cy="4.5" r="2.5" />
  </svg>
);

export const SunIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <circle cx="8" cy="8" r="3" />
    <line x1="8" y1="1" x2="8" y2="3" />
    <line x1="8" y1="13" x2="8" y2="15" />
    <line x1="1" y1="8" x2="3" y2="8" />
    <line x1="13" y1="8" x2="15" y2="8" />
  </svg>
);

export const MoonIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M13.5 9.5A6 6 0 0 1 6.5 2.5a6 6 0 1 0 7 7Z" />
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M8 1v3M8 12v3M1 8h3M12 8h3M3.05 3.05l2.12 2.12M10.83 10.83l2.12 2.12M3.05 12.95l2.12-2.12M10.83 5.17l2.12-2.12" />
  </svg>
);

export const MoreHorizontalIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <circle cx="8" cy="8" r="1" fill={color} />
    <circle cx="3" cy="8" r="1" fill={color} />
    <circle cx="13" cy="8" r="1" fill={color} />
  </svg>
);

export const MoreVerticalIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <circle cx="8" cy="8" r="1" fill={color} />
    <circle cx="8" cy="3" r="1" fill={color} />
    <circle cx="8" cy="13" r="1" fill={color} />
  </svg>
);

export const CopyIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" />
    <path d="M3.5 10.5H3A1.5 1.5 0 0 1 1.5 9V3A1.5 1.5 0 0 1 3 1.5h6A1.5 1.5 0 0 1 10.5 3v.5" />
  </svg>
);

export const ExternalLinkIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M12 9v4a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 2 13V6a1.5 1.5 0 0 1 1.5-1.5H7" />
    <polyline points="10 2 14 2 14 6" />
    <line x1="7" y1="9" x2="14" y2="2" />
  </svg>
);

export const GlobeIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <circle cx="8" cy="8" r="6.5" />
    <line x1="1.5" y1="8" x2="14.5" y2="8" />
    <ellipse cx="8" cy="8" rx="3.2" ry="6.5" />
  </svg>
);

export const SmartphoneIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <rect x="3.5" y="1.5" width="9" height="13" rx="2" />
    <line x1="7" y1="12" x2="9" y2="12" />
  </svg>
);

export const CubeIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M8 1.5l5.5 3.2v6.6L8 14.5l-5.5-3.2V4.7L8 1.5z" />
    <line x1="8" y1="1.5" x2="8" y2="14.5" />
    <line x1="8" y1="8" x2="13.5" y2="4.7" />
    <line x1="8" y1="8" x2="2.5" y2="4.7" />
  </svg>
);

export const LightningIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <polygon points="8.5 1.5 2.5 9 7.5 9 6.5 14.5 13.5 7 8.5 7 9.5 1.5" />
  </svg>
);

export const FocusTargetIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <circle cx="8" cy="8" r="2.5" />
    <path d="M4 1.5H2.5A1 1 0 0 0 1.5 2.5V4" />
    <path d="M12 1.5h1.5a1 1 0 0 1 1 1V4" />
    <path d="M4 14.5H2.5a1 1 0 0 1-1-1V12" />
    <path d="M12 14.5h1.5a1 1 0 0 0 1-1V12" />
  </svg>
);

export const RotateCcwIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M2.5 7.5A5.5 5.5 0 1 1 8 13.5c-2.3 0-4.3-1.4-5.1-3.5" />
    <polyline points="2.5 3.5 2.5 7.5 6.5 7.5" />
  </svg>
);

export const CodeIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <polyline points="5.5 4.5 2 8 5.5 11.5" />
    <polyline points="10.5 4.5 14 8 10.5 11.5" />
  </svg>
);

export const PaletteIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <circle cx="8" cy="8" r="6.5" />
    <circle cx="5.5" cy="6" r="0.75" fill={color} />
    <circle cx="10.5" cy="6" r="0.75" fill={color} />
    <circle cx="6" cy="10" r="0.75" fill={color} />
    <circle cx="10" cy="10" r="0.75" fill={color} />
  </svg>
);

export const ComponentIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <rect x="2" y="2" width="5" height="5" rx="1" />
    <rect x="9" y="2" width="5" height="5" rx="1" />
    <rect x="2" y="9" width="5" height="5" rx="1" />
    <rect x="9" y="9" width="5" height="5" rx="1" />
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <line x1="2" y1="4" x2="14" y2="4" />
    <line x1="2" y1="8" x2="14" y2="8" />
    <line x1="2" y1="12" x2="14" y2="12" />
  </svg>
);

export const GitHubIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill={color}
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M8 1.5a6.5 6.5 0 0 0-2.05 12.67c.32.06.44-.14.44-.31v-1.1c-1.8.39-2.18-.87-2.18-.87-.3-.75-.72-.95-.72-.95-.59-.4.04-.39.04-.39.65.05.99.67.99.67.58 1 .52.78 1.9.56.06-.42.23-.71.42-.87-1.44-.16-2.95-.72-2.95-3.21 0-.71.25-1.29.67-1.74-.07-.16-.29-.82.06-1.72 0 0 .55-.17 1.79.67.52-.15 1.08-.22 1.63-.22.55 0 1.11.07 1.63.22 1.24-.84 1.79-.67 1.79-.67.35.9.13 1.56.06 1.72.42.45.67 1.03.67 1.74 0 2.5-1.52 3.05-2.96 3.21.23.2.44.6.44 1.21v1.8c0 .17.12.37.45.31A6.5 6.5 0 0 0 8 1.5Z" />
  </svg>
);

export const EyeIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5Z" />
    <circle cx="8" cy="8" r="2.5" />
  </svg>
);

export const EyeOffIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M12.4 12.4C11.1 13.4 9.6 14 8 14c-4.5 0-7-5-7-5s1.2-2.4 3.1-3.8M6.5 6.5A2.5 2.5 0 0 0 9.5 9.5M9.8 4.2C13.2 5.1 15 8 15 8s-1 2-2.6 3.4M2 2l12 12" />
  </svg>
);

export const SettingsIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <circle cx="8" cy="8" r="2.5" />
    <path d="M13.1 9.3a1 1 0 0 0 .2 1.1l.1.1a1.2 1.2 0 0 1-1.7 1.7l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V13a1.2 1.2 0 0 1-2.4 0v-.1a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a1.2 1.2 0 0 1-1.7-1.7l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H3a1.2 1.2 0 0 1 0-2.4h.1a1 1 0 0 0 .9-.6 1 1 0 0 0-.2-1.1l-.1-.1a1.2 1.2 0 0 1 1.7-1.7l.1.1a1 1 0 0 0 1.1.2 1 1 0 0 0 .6-.9V3a1.2 1.2 0 0 1 2.4 0v.1a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a1.2 1.2 0 0 1 1.7 1.7l-.1.1a1 1 0 0 0-.2 1.1 1 1 0 0 0 .9.6h.1a1.2 1.2 0 0 1 0 2.4h-.1a1 1 0 0 0-.9.6z" />
  </svg>
);

export const BookOpenIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M2 3.5A2.5 2.5 0 0 1 4.5 1h3.5v12.5H4.5A2.5 2.5 0 0 0 2 16V3.5z" />
    <path d="M14 3.5A2.5 2.5 0 0 0 11.5 1H8v12.5h3.5A2.5 2.5 0 0 1 14 16V3.5z" />
  </svg>
);

export const AppleIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill={color}
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M12.47 13.06c-.55.83-1.14 1.63-2.03 1.65-.89.02-1.18-.53-2.19-.53-1.02 0-1.33.51-2.18.55-.87.03-1.53-.88-2.09-1.69-1.15-1.66-2.03-4.7-1.15-6.74.58-1.01 1.62-1.65 2.75-1.67.85-.01 1.67.58 2.19.58.52 0 1.51-.71 2.54-.61.43.02 1.65.17 2.43 1.32-.06.04-1.45.85-1.43 2.54.02 2.01 1.77 2.69 1.79 2.7-.02.05-.28.96-.92 1.89l.29.01zM10.65 4.25c.41-.5.69-1.2.61-1.9-.6.03-1.33.4-1.76.9-.38.44-.71 1.14-.62 1.82.67.05 1.35-.32 1.77-.82z" />
  </svg>
);

export const AndroidIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill={color}
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M3.7 5.5A4.3 4.3 0 0 1 8 1.5a4.3 4.3 0 0 1 4.3 4H3.7z" />
    <circle cx="5.8" cy="4.2" r=".6" fill="var(--color-surface, #fff)" />
    <circle cx="10.2" cy="4.2" r=".6" fill="var(--color-surface, #fff)" />
    <line x1="4.5" y1="2" x2="3.2" y2="0.6" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    <line x1="11.5" y1="2" x2="12.8" y2="0.6" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    <rect x="3.7" y="6.2" width="8.6" height="6.2" rx="1" />
    <rect x="1.8" y="6.6" width="1.3" height="4.4" rx=".6" />
    <rect x="12.9" y="6.6" width="1.3" height="4.4" rx=".6" />
    <rect x="5.2" y="12.6" width="1.5" height="2.4" rx=".6" />
    <rect x="9.3" y="12.6" width="1.5" height="2.4" rx=".6" />
  </svg>
);

export const WindowsIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill={color}
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M1.5 2.8 6.8 2v5.4H1.5V2.8zm0 5.2h5.3v5.4L1.5 12.5V8zm5.9-6.2L14.5 1v6.4H7.4V1.8zm0 6.2h7.1v6.4L7.4 13.5V8z" />
  </svg>
);

export const MonitorIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <rect x="2" y="2.5" width="12" height="8.5" rx="1.5" />
    <line x1="6" y1="14" x2="10" y2="14" />
    <line x1="8" y1="11" x2="8" y2="14" />
  </svg>
);

