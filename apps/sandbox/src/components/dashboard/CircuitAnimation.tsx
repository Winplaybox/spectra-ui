import React from 'react';
import { useColorScheme } from '@spectra/react';

interface CircuitAnimationProps {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  pulseColor?: string;
  duration?: string | number;
  showNodes?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export const CircuitAnimation: React.FC<CircuitAnimationProps> = ({
  width = 130,
  height = 106,
  strokeColor,
  pulseColor,
  duration = '3s',
  showNodes = true,
  style,
  className,
}) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const durationStr = typeof duration === 'number' ? `${duration}s` : duration;
  const baseStroke = strokeColor || (isDark ? '#272E3F' : '#E2E8F0');
  const activePulse = pulseColor || (isDark ? '#38BDF8' : '#007FFF');

  return (
    <svg
      id="circuit-animation"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-4 -4 136 112"
      width={width}
      height={height}
      style={{ overflow: 'visible', ...style }}
      className={className}
    >
      {/* Background Circuit Trace */}
      <path
        d="M 126 0 V 38 Q 126 53 111 53 H 15 Q 0 53 0 68 V 102"
        fill="none"
        stroke={baseStroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Traveling Pulse Animation */}
      <path
        d="M 126 0 V 38 Q 126 53 111 53 H 15 Q 0 53 0 68 V 102"
        fill="none"
        stroke={activePulse}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="16 184"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="200;0"
          dur={durationStr}
          repeatCount="indefinite"
        />
      </path>

      {/* Circuit Junction Nodes */}
      {showNodes && (
        <>
          <circle cx="126" cy="0" r="3.5" fill={activePulse} />
          <circle cx="126" cy="0" r="6" fill={activePulse} opacity="0.25">
            <animate attributeName="r" values="3.5;7;3.5" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.05;0.3" dur="2s" repeatCount="indefinite" />
          </circle>

          <circle cx="63" cy="53" r="2.5" fill={baseStroke} />

          <circle cx="0" cy="102" r="3.5" fill={activePulse} />
          <circle cx="0" cy="102" r="6" fill={activePulse} opacity="0.25">
            <animate attributeName="r" values="3.5;7;3.5" dur="2s" repeatCount="indefinite" begin="1s" />
            <animate attributeName="opacity" values="0.3;0.05;0.3" dur="2s" repeatCount="indefinite" begin="1s" />
          </circle>
        </>
      )}
    </svg>
  );
};

// Multi-Branch Network Circuit Grid
export const CircuitNetworkGrid: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        opacity: 0.85,
        ...style,
      }}
    >
      <CircuitAnimation width={110} height={90} duration="2.6s" />
      <CircuitAnimation
        width={110}
        height={90}
        duration="3.2s"
        style={{ transform: 'scaleX(-1)' }}
        pulseColor="#10B981"
      />
    </div>
  );
};
