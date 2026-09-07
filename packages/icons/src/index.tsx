import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

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
