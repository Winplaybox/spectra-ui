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
