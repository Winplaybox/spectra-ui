import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  DynamicIcon,
  getIconManifest,
  CheckIcon,
  CloseIcon,
  SearchIcon,
  SpinnerIcon,
  CopyIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@spectra/icons';
import {
  Badge,
  Button,
  IconButton,
  Switch,
  Slider,
  Tabs,
  TabList,
  Tab,
  useToast,
  useColorScheme,
} from '@spectra/react';

// ============================================================================
// Authentic SVG Vector Icons for UI Controls (Zero Emojis - Rule 2)
// ============================================================================

const MinusVectorIcon: React.FC<{ size?: number; color?: string }> = ({ size = 14, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'block', flexShrink: 0 }}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const PlusVectorIcon: React.FC<{ size?: number; color?: string }> = ({ size = 14, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'block', flexShrink: 0 }}
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const DownloadVectorIcon: React.FC<{ size?: number; color?: string }> = ({ size = 16, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'block', flexShrink: 0 }}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const FilterSlidersIcon: React.FC<{ size?: number; color?: string }> = ({ size = 16, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'block', flexShrink: 0 }}
  >
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="17" y1="16" x2="23" y2="16" />
  </svg>
);

const RotateResetIcon: React.FC<{ size?: number; color?: string }> = ({ size = 14, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'block', flexShrink: 0 }}
  >
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
  </svg>
);

const FolderVectorIcon: React.FC<{ size?: number; color?: string }> = ({ size = 14, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'block', flexShrink: 0 }}
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const ColorDropperIcon: React.FC<{ size?: number; color?: string }> = ({ size = 14, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'block', flexShrink: 0 }}
  >
    <path d="m19 11-8-8-8.5 8.5a2.12 2.12 0 0 0 0 3l2.5 2.5a2.12 2.12 0 0 0 3 0L19 11Z" />
    <path d="m5 2 5 5" />
    <path d="M2 13h15" />
    <path d="M22 20a2 2 0 1 1-4 0c0-1.6 2-4.5 2-4.5s2 2.9 2 4.5Z" />
  </svg>
);

const InfoCircleIcon: React.FC<{ size?: number; color?: string }> = ({ size = 13, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'block', flexShrink: 0 }}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const PlusCircleIcon: React.FC<{ size?: number; color?: string }> = ({ size = 18, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'block', flexShrink: 0 }}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

// Standard Styles benchmarked against Google Fonts Icons
const ICON_STYLES = [
  { id: 'all', label: 'All Styles' },
  { id: 'outlined', label: 'Outlined' },
  { id: 'filled', label: 'Filled' },
  { id: 'rounded', label: 'Rounded' },
  { id: 'sharp', label: 'Sharp' },
  { id: 'twotone', label: 'Two-Tone' },
  { id: 'brand', label: 'Brand & Social' },
] as const;

// Authentic Categories
const ICON_CATEGORIES = [
  'All',
  'Action',
  'Alert',
  'Av',
  'Communication',
  'Content',
  'Device',
  'Editor',
  'File',
  'Hardware',
  'Home',
  'Image',
  'Maps',
  'Navigation',
  'Notification',
  'Places',
  'Search',
  'Social',
  'Toggle',
] as const;

// Exact 80-color palette matching Google Fonts Icons (10 columns x 8 rows)
const GOOGLE_PALETTE_COLORS = [
  // Row 1 (Greys & Monochrome)
  '#000000', '#434343', '#666666', '#999999', '#b7b7b7', '#cccccc', '#d9d9d9', '#efefef', '#f3f3f3', '#ffffff',
  // Row 2 (Pure Primaries & Hues)
  '#990000', '#ff0000', '#ff9900', '#ffff00', '#00ff00', '#00ffff', '#4a86e8', '#0000ff', '#9900ff', '#ff00ff',
  // Row 3 (Light Tints / Pastels)
  '#f4cccc', '#fce5cd', '#fff2cc', '#d9ead3', '#d0e0e3', '#c9daf8', '#cfe2f3', '#d9d2e9', '#ead1dc', '#f4c7c3',
  // Row 4 (Soft Mid-Tints)
  '#ea9999', '#f9cb9c', '#ffe599', '#b6d7a8', '#a2c4c9', '#a4c2f4', '#9fc5e8', '#b4a7d6', '#d5a6bd', '#f7a8b8',
  // Row 5 (Medium Vibrancy)
  '#e06666', '#f6b26b', '#ffd966', '#93c47d', '#76a5af', '#6d9eeb', '#6fa8dc', '#8e7cc3', '#c27ba0', '#f06292',
  // Row 6 (Deep Shades)
  '#cc0000', '#e69138', '#f1c232', '#6aa84f', '#45818e', '#3c78d8', '#3d85c6', '#674ea7', '#a64d79', '#e91e63',
  // Row 7 (Darker Tones)
  '#900000', '#b45f06', '#bf9000', '#38761d', '#134f5c', '#1155cc', '#0b5394', '#351c75', '#741b47', '#c2185b',
  // Row 8 (Deepest Shades)
  '#5b0f00', '#783f04', '#7f6000', '#274e13', '#0c343d', '#1c4587', '#073763', '#20124d', '#4c1130', '#880e4f',
];

// ============================================================================
// Google Fonts Style Color Picker Component (Popover with 80 Swatches & Custom)
// ============================================================================

interface GoogleColorPickerProps {
  color: string;
  onChange: (hex: string) => void;
  customColors: string[];
  onAddCustomColor: (hex: string) => void;
  onClose: () => void;
  anchorRect?: DOMRect | null;
  inline?: boolean;
  isDark?: boolean;
}

const GoogleColorPicker: React.FC<GoogleColorPickerProps> = ({
  color,
  onChange,
  customColors,
  onAddCustomColor,
  onClose,
  anchorRect = null,
  inline = false,
  isDark = true,
}) => {
  const pickerRef = useRef<HTMLDivElement>(null);
  const nativeInputRef = useRef<HTMLInputElement>(null);
  const [customInputHex, setCustomInputHex] = useState(color);

  useEffect(() => {
    if (inline) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose, inline]);

  const handleCustomAdd = (hex: string) => {
    if (hex && !customColors.includes(hex)) {
      onAddCustomColor(hex);
    }
    onChange(hex);
  };

  const topPos = anchorRect
    ? Math.min(anchorRect.bottom + 8, window.innerHeight - 400)
    : inline
    ? 0
    : 'calc(100% + 8px)';

  const rightPos = anchorRect
    ? Math.max(16, window.innerWidth - anchorRect.right)
    : 0;

  return (
    <div
      ref={pickerRef}
      style={{
        position: anchorRect ? 'fixed' : (inline ? 'relative' : 'absolute'),
        top: topPos,
        right: rightPos,
        width: inline ? '100%' : 270,
        backgroundColor: isDark ? '#1E1E1E' : '#FFFFFF',
        color: isDark ? '#FFFFFF' : '#111827',
        borderRadius: 12,
        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'}`,
        boxShadow: inline
          ? 'none'
          : isDark
          ? '0 12px 36px rgba(0, 0, 0, 0.7)'
          : '0 12px 36px rgba(0, 0, 0, 0.15)',
        padding: '14px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        userSelect: 'none',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: isDark ? '#FFFFFF' : '#111827' }}>Color Picker</span>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
            cursor: 'pointer',
            padding: 2,
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          <CloseIcon size={12} />
        </button>
      </div>

      {/* 10x8 Swatches Matrix */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(10, 1fr)',
          gap: 4,
        }}
      >
        {GOOGLE_PALETTE_COLORS.map((hex, idx) => {
          const isSelected = color.toLowerCase() === hex.toLowerCase();
          return (
            <button
              key={`${hex}-${idx}`}
              onClick={() => onChange(hex)}
              title={hex}
              style={{
                width: 18,
                height: 18,
                borderRadius: '50%',
                backgroundColor: hex,
                border: isSelected ? '2px solid #007FFF' : (isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.15)'),
                outline: isSelected ? (isDark ? '2px solid #FFFFFF' : '2px solid #000000') : 'none',
                outlineOffset: 1,
                cursor: 'pointer',
                padding: 0,
                transition: 'transform 0.1s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          );
        })}
      </div>

      {/* Custom Colors Section */}
      <div style={{ borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`, paddingTop: 10 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: isDark ? '#FFFFFF' : '#111827', marginBottom: 8 }}>Custom</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
          {/* Plus Add Custom Color Button (Overlaid native input ensures browser opens picker at click position) */}
          <label
            title="Add custom color"
            style={{
              position: 'relative',
              width: 22,
              height: 22,
              borderRadius: '50%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
            }}
          >
            <PlusCircleIcon size={22} />
            <input
              ref={nativeInputRef}
              type="color"
              value={color.startsWith('#') && color.length === 7 ? color : '#FFFFFF'}
              onChange={(e) => handleCustomAdd(e.target.value)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0,
                cursor: 'pointer',
                border: 'none',
                padding: 0,
                margin: 0,
              }}
            />
          </label>

          {/* User's custom swatches */}
          {customColors.map((hex) => {
            const isSelected = color.toLowerCase() === hex.toLowerCase();
            return (
              <button
                key={hex}
                onClick={() => onChange(hex)}
                title={hex}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  backgroundColor: hex,
                  border: isSelected ? '2px solid #007FFF' : (isDark ? '1px solid rgba(255, 255, 255, 0.25)' : '1px solid rgba(0, 0, 0, 0.2)'),
                  outline: isSelected ? (isDark ? '2px solid #FFFFFF' : '2px solid #000000') : 'none',
                  outlineOffset: 1,
                  cursor: 'pointer',
                  padding: 0,
                }}
              />
            );
          })}
        </div>

        {/* Hex Text Input for Custom Color */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 10 }}>
          <span style={{ fontSize: 11, color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)' }}>Hex:</span>
          <input
            type="text"
            value={customInputHex}
            onChange={(e) => {
              setCustomInputHex(e.target.value);
              if (/^#[0-9A-Fa-f]{6}$/.test(e.target.value)) {
                handleCustomAdd(e.target.value);
              }
            }}
            onBlur={() => {
              if (/^#[0-9A-Fa-f]{6}$/.test(customInputHex)) {
                handleCustomAdd(customInputHex);
              }
            }}
            style={{
              flex: 1,
              padding: '3px 8px',
              borderRadius: 4,
              border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'}`,
              backgroundColor: isDark ? '#141414' : '#F3F4F6',
              color: isDark ? '#FFFFFF' : '#111827',
              fontSize: 11.5,
              fontFamily: 'monospace',
              outline: 'none',
            }}
          />
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Spectra UI Native Vector Diagrams for Customize Popover (100% SVG, Zero External Media)
// ============================================================================

const WeightDiagram: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 8,
      borderRadius: 10,
      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
      padding: '12px 8px',
      border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
      marginBottom: 12,
    }}
  >
    {[
      { label: '100 Thin', stroke: 1.2, tag: 'Minimal' },
      { label: '400 Regular', stroke: 2.0, tag: 'Default' },
      { label: '700 Bold', stroke: 3.0, tag: 'Prominent' },
    ].map((item) => (
      <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <svg
          width={36}
          height={36}
          viewBox="0 0 24 24"
          fill="none"
          stroke={isDark ? '#FFFFFF' : '#0F172A'}
          strokeWidth={item.stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ display: 'block', marginBottom: 6 }}
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span style={{ fontSize: 11, fontWeight: 700, color: isDark ? '#FFFFFF' : '#0F172A' }}>{item.label}</span>
        <span style={{ fontSize: 10, color: isDark ? 'rgba(255, 255, 255, 0.5)' : '#64748B' }}>{item.tag}</span>
      </div>
    ))}
  </div>
);

const GradeDiagram: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      borderRadius: 10,
      overflow: 'hidden',
      border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'}`,
      marginBottom: 12,
    }}
  >
    <div
      style={{
        backgroundColor: '#1E242C',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px 8px',
        textAlign: 'center',
      }}
    >
      <svg width={40} height={40} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', marginBottom: 10 }}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="9.5" r="2.5" />
        <path d="M6.5 18.5c1.2-3 4-4.5 5.5-4.5s4.3 1.5 5.5 4.5" />
      </svg>
      <span style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.2 }}>-25</span>
      <span style={{ fontSize: 10.5, color: 'rgba(255, 255, 255, 0.7)', marginTop: 2 }}>Low Glare</span>
    </div>

    <div
      style={{
        backgroundColor: isDark ? '#2A303C' : '#FFFFFF',
        color: isDark ? '#FFFFFF' : '#0F172A',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px 8px',
        textAlign: 'center',
        borderLeft: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
        borderRight: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
      }}
    >
      <svg width={40} height={40} viewBox="0 0 24 24" fill="none" stroke={isDark ? '#FFFFFF' : '#0F172A'} strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', marginBottom: 10 }}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="9.5" r="2.5" />
        <path d="M6.5 18.5c1.2-3 4-4.5 5.5-4.5s4.3 1.5 5.5 4.5" />
      </svg>
      <span style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.2 }}>0</span>
      <span style={{ fontSize: 10.5, color: isDark ? 'rgba(255, 255, 255, 0.6)' : '#64748B', marginTop: 2 }}>Balanced</span>
    </div>

    <div
      style={{
        backgroundColor: '#EAF2FD',
        color: '#0F172A',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px 8px',
        textAlign: 'center',
      }}
    >
      <svg width={40} height={40} viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', marginBottom: 10 }}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="9.5" r="2.5" />
        <path d="M6.5 18.5c1.2-3 4-4.5 5.5-4.5s4.3 1.5 5.5 4.5" />
      </svg>
      <span style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.2 }}>+200</span>
      <span style={{ fontSize: 10.5, color: '#334155', marginTop: 2 }}>High Focus</span>
    </div>
  </div>
);

const OpticalSizeDiagram: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
      borderRadius: 10,
      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
      padding: '14px 10px',
      border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
      marginBottom: 12,
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <div style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 6 }}>
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={isDark ? '#FFFFFF' : '#0F172A'} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      </div>
      <span style={{ fontSize: 11.5, fontWeight: 700, color: isDark ? '#FFFFFF' : '#0F172A' }}>20px Compact</span>
      <span style={{ fontSize: 10, color: isDark ? 'rgba(255, 255, 255, 0.5)' : '#64748B' }}>Sturdier for dense UI</span>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <div style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 6 }}>
        <svg width={40} height={40} viewBox="0 0 24 24" fill="none" stroke={isDark ? '#FFFFFF' : '#0F172A'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      </div>
      <span style={{ fontSize: 11.5, fontWeight: 700, color: isDark ? '#FFFFFF' : '#0F172A' }}>48px Display</span>
      <span style={{ fontSize: 10, color: isDark ? 'rgba(255, 255, 255, 0.5)' : '#64748B' }}>Refined for hero scale</span>
    </div>
  </div>
);

const FillDiagram: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
      borderRadius: 10,
      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
      padding: '14px 10px',
      border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
      marginBottom: 12,
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={isDark ? '#FFFFFF' : '#0F172A'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', marginBottom: 6 }}>
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
      <span style={{ fontSize: 11.5, fontWeight: 700, color: isDark ? '#FFFFFF' : '#0F172A' }}>Outlined</span>
      <span style={{ fontSize: 10, color: isDark ? 'rgba(255, 255, 255, 0.5)' : '#64748B' }}>Default / Unselected</span>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <svg width={32} height={32} viewBox="0 0 24 24" fill="#007FFF" stroke="#007FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', marginBottom: 6 }}>
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
      <span style={{ fontSize: 11.5, fontWeight: 700, color: '#007FFF' }}>Filled</span>
      <span style={{ fontSize: 10, color: isDark ? 'rgba(255, 255, 255, 0.5)' : '#64748B' }}>Active / Selected</span>
    </div>
  </div>
);

// ============================================================================
// Rich Customize Info Popover (100% Native Spectra UI Design System Voice)
// ============================================================================

interface CustomizeInfoPopoverProps {
  type: 'fill' | 'weight' | 'grade' | 'optical';
  anchorRect: DOMRect | null;
  onClose: () => void;
  isDark: boolean;
}

const CustomizeInfoPopover: React.FC<CustomizeInfoPopoverProps> = ({
  type,
  anchorRect,
  onClose,
  isDark,
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const top = anchorRect
    ? Math.max(16, Math.min(anchorRect.top - 20, window.innerHeight - 440))
    : 100;
  const left = anchorRect ? anchorRect.right + 14 : 270;

  return (
    <div
      ref={popoverRef}
      style={{
        position: 'fixed',
        top,
        left,
        width: 340,
        maxHeight: 'calc(100vh - 40px)',
        overflowY: 'auto',
        backgroundColor: isDark ? '#1E232A' : '#FFFFFF',
        color: isDark ? '#F1F5F9' : '#0F172A',
        borderRadius: 12,
        boxShadow: isDark
          ? '0 20px 45px -5px rgba(0, 0, 0, 0.7), 0 10px 20px -5px rgba(0, 0, 0, 0.5)'
          : '0 20px 45px -5px rgba(0, 0, 0, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.08)',
        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'}`,
        padding: '16px',
        zIndex: 9999,
        fontSize: 13,
        lineHeight: 1.5,
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: '#007FFF' }}>
            {type === 'fill' && 'Fill Style'}
            {type === 'weight' && 'Stroke Weight'}
            {type === 'grade' && 'Optical Grade'}
            {type === 'optical' && 'Optical Sizing'}
          </span>
          {type === 'optical' && (
            <span
              style={{
                fontSize: 11,
                padding: '2px 6px',
                borderRadius: 4,
                backgroundColor: isDark ? 'rgba(0,127,255,0.2)' : 'rgba(0,127,255,0.1)',
                color: '#007FFF',
                fontWeight: 600,
              }}
            >
              20px – 48px
            </span>
          )}
          {type === 'weight' && (
            <span
              style={{
                fontSize: 11,
                padding: '2px 6px',
                borderRadius: 4,
                backgroundColor: isDark ? 'rgba(0,127,255,0.2)' : 'rgba(0,127,255,0.1)',
                color: '#007FFF',
                fontWeight: 600,
              }}
            >
              100 – 700
            </span>
          )}
          {type === 'grade' && (
            <span
              style={{
                fontSize: 11,
                padding: '2px 6px',
                borderRadius: 4,
                backgroundColor: isDark ? 'rgba(0,127,255,0.2)' : 'rgba(0,127,255,0.1)',
                color: '#007FFF',
                fontWeight: 600,
              }}
            >
              -25 – +200
            </span>
          )}
        </div>
        <button
          onClick={onClose}
          aria-label="Close details"
          style={{
            background: 'none',
            border: 'none',
            color: isDark ? 'rgba(255, 255, 255, 0.5)' : '#64748B',
            cursor: 'pointer',
            padding: 4,
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          <CloseIcon size={14} />
        </button>
      </div>

      {/* Content based on type */}
      {type === 'weight' && (
        <div>
          <WeightDiagram isDark={isDark} />
          <p style={{ margin: '0 0 8px 0', color: isDark ? 'rgba(255, 255, 255, 0.85)' : '#334155' }}>
            Weight defines the stroke thickness across the Spectra icon family.
          </p>
          <p style={{ margin: 0, fontSize: 12, color: isDark ? 'rgba(255, 255, 255, 0.65)' : '#64748B' }}>
            Lower weights (100–300) deliver a light, refined touch for spacious interfaces, while heavier weights (600–700) provide high visual prominence for primary actions and key callouts.
          </p>
        </div>
      )}

      {type === 'grade' && (
        <div>
          <GradeDiagram isDark={isDark} />
          <p style={{ margin: '0 0 8px 0', color: isDark ? 'rgba(255, 255, 255, 0.85)' : '#334155' }}>
            Grade offers micro-adjustments to line density without changing outer dimensions.
          </p>
          <div
            style={{
              fontSize: 12,
              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)',
              padding: 10,
              borderRadius: 8,
              border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
            }}
          >
            <div style={{ marginBottom: 6 }}>
              <span style={{ fontWeight: 600, color: '#007FFF' }}>-25 (Low Glare):</span> Mitigates visual glare for bright icons on dark canvases.
            </div>
            <div>
              <span style={{ fontWeight: 600, color: '#007FFF' }}>+200 (High Focus):</span> Boosts optical contrast on light surfaces or dense controls.
            </div>
          </div>
        </div>
      )}

      {type === 'optical' && (
        <div>
          <OpticalSizeDiagram isDark={isDark} />
          <p style={{ margin: '0 0 8px 0', color: isDark ? 'rgba(255, 255, 255, 0.85)' : '#334155' }}>
            Optical sizing dynamically adapts stroke proportions based on target display scale.
          </p>
          <p style={{ margin: 0, fontSize: 12, color: isDark ? 'rgba(255, 255, 255, 0.65)' : '#64748B' }}>
            At compact sizes (20px), strokes remain sturdy so details never blur. At display sizes (48px), strokes become refined to preserve crisp elegance.
          </p>
        </div>
      )}

      {type === 'fill' && (
        <div>
          <FillDiagram isDark={isDark} />
          <p style={{ margin: '0 0 8px 0', color: isDark ? 'rgba(255, 255, 255, 0.85)' : '#334155' }}>
            Fill toggles between outlined and solid states for state distinction.
          </p>
          <p style={{ margin: 0, fontSize: 12, color: isDark ? 'rgba(255, 255, 255, 0.65)' : '#64748B' }}>
            Outlined icons represent default interactive targets, while filled icons immediately communicate active, selected, or bookmarked states.
          </p>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// Main IconExplorer Component
// ============================================================================

export interface IconExplorerProps {
  screen?: 'catalog' | 'recipes';
}

export const IconExplorer: React.FC<IconExplorerProps> = ({ screen = 'catalog' }) => {
  const { toast } = useToast();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [manifest, setManifest] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Search & Filters (Google Fonts Icons benchmark)
  const [iconSearch, setIconSearch] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isCategoryTreeOpen, setIsCategoryTreeOpen] = useState(true);
  const [isStyleOpen, setIsStyleOpen] = useState(true);

  // Customize Section (Real-time live updates)
  const [isFillActive, setIsFillActive] = useState(false);
  const [iconWeight, setIconWeight] = useState<number>(400); // 100 to 700
  const [iconGrade, setIconGrade] = useState<number>(0); // -25 to 200
  const [opticalSize, setOpticalSize] = useState<number>(24); // 20 to 48px
  const [twoToneOpacity, setTwoToneOpacity] = useState<number>(1);

  // Rich Info Popover state for Customize sidebar (Fill, Weight, Grade, Optical Size)
  const [activeInfoType, setActiveInfoType] = useState<'fill' | 'weight' | 'grade' | 'optical' | null>(null);
  const [infoAnchorRect, setInfoAnchorRect] = useState<DOMRect | null>(null);

  // Real-time calculated visual stroke & optical properties (Zero blur on default values)
  const isWeightModified = iconWeight !== 400;
  const isGradeModified = iconGrade !== 0;
  const isOpticalModified = opticalSize !== 24;

  const weightStroke = ((iconWeight - 400) / 300) * 0.75;
  const gradeStroke = (iconGrade / 200) * 0.45;
  const opticalStroke = ((24 - opticalSize) / 24) * 0.35;
  const netStroke = (isWeightModified || isGradeModified || isOpticalModified)
    ? Math.max(0, weightStroke + gradeStroke + opticalStroke)
    : 0;

  // Subtle optical scale without exceeding card boundaries
  const iconScale = 1 + ((opticalSize - 24) / 24) * 0.08;
  const iconDefaultColor = isDark ? '#FFFFFF' : '#0F172A';

  // Helper to calculate luminance for dynamic contrast backgrounds
  const getLuminance = (hex: string) => {
    const cleanHex = hex.replace('#', '');
    if (cleanHex.length !== 6) return 0.5;
    const r = parseInt(cleanHex.slice(0, 2), 16) / 255;
    const g = parseInt(cleanHex.slice(2, 4), 16) / 255;
    const b = parseInt(cleanHex.slice(4, 6), 16) / 255;
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  // Infinite Scroll limit (seamlessly auto-expands on scroll)
  const [iconLimit, setIconLimit] = useState<number>(400);

  // Right Drawer state (Screen-inline, not portal modal)
  const [selectedIcon, setSelectedIcon] = useState<any | null>(null);
  const [drawerPlatform, setDrawerPlatform] = useState<'web' | 'android' | 'apple'>('web');
  const [drawerSize, setDrawerSize] = useState<number>(48);
  const [drawerColor, setDrawerColor] = useState<string>(isDark ? '#FFFFFF' : '#0F172A');
  const [showAllTags, setShowAllTags] = useState(false);

  // Google Color Picker state for Drawer only
  const [isDrawerPickerOpen, setIsDrawerPickerOpen] = useState(false);
  const [drawerPickerAnchor, setDrawerPickerAnchor] = useState<DOMRect | null>(null);
  const [customColors, setCustomColors] = useState<string[]>(['#E3E3E3', '#007FFF', '#10B981', '#EF4444']);

  const drawerPreviewRef = useRef<HTMLDivElement>(null);
  const scrollSentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    getIconManifest().then((data) => {
      if (isMounted) {
        setManifest(data);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Map internal style names like "core" or "iconly" transparently into standard styles
  const normalizedManifest = useMemo(() => {
    return manifest.map((item) => {
      let mappedStyle = item.style;
      if (item.style === 'core' || item.style === 'iconly') {
        if (item.componentName?.includes('Bold') || item.componentName?.startsWith('Filled')) {
          mappedStyle = 'filled';
        } else if (item.componentName?.includes('Twotone') || item.componentName?.startsWith('TwoTone')) {
          mappedStyle = 'twotone';
        } else if (item.componentName?.includes('Sharp') || item.componentName?.startsWith('Sharp')) {
          mappedStyle = 'sharp';
        } else if (item.componentName?.includes('Round') || item.componentName?.startsWith('Rounded')) {
          mappedStyle = 'rounded';
        } else {
          mappedStyle = 'outlined';
        }
      } else if (item.style === 'monochrome') {
        mappedStyle = 'brand';
      }
      return {
        ...item,
        normalizedStyle: mappedStyle,
      };
    });
  }, [manifest]);

  // Category counts for Tree Pattern
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: normalizedManifest.length };
    for (const item of normalizedManifest) {
      const cat = item.category || 'Other';
      const normCat = cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase();
      counts[normCat] = (counts[normCat] || 0) + 1;
    }
    return counts;
  }, [normalizedManifest]);

  // Filter logic
  const filtered = useMemo(() => {
    const query = iconSearch.trim().toLowerCase();
    return normalizedManifest.filter((item) => {
      // 1. Fill toggle: if Fill is ON, prioritize filled; if OFF, prioritize outlined when applicable
      if (isFillActive && selectedStyle === 'all') {
        if (item.normalizedStyle !== 'filled') return false;
      }

      // 2. Style filter
      if (selectedStyle !== 'all') {
        if (item.normalizedStyle !== selectedStyle) return false;
      }

      // 3. Category filter
      if (selectedCategory !== 'All') {
        const cat = item.category?.toLowerCase() || '';
        if (cat !== selectedCategory.toLowerCase()) return false;
      }

      // 4. Search query
      if (!query) return true;
      return (
        item.name.toLowerCase().includes(query) ||
        item.componentName.toLowerCase().includes(query) ||
        (item.alias && item.alias.toLowerCase().includes(query)) ||
        item.tags?.some((t: string) => t.includes(query))
      );
    });
  }, [normalizedManifest, isFillActive, selectedStyle, selectedCategory, iconSearch]);

  // Scroll listener on the middle icon grid: automatically stream batches of 400 icons
  const handleGridScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop - clientHeight < 1000) {
      setIconLimit((prev) => Math.min(filtered.length, prev + 400));
    }
  };

  const hasActiveFilters =
    selectedStyle !== 'all' ||
    selectedCategory !== 'All' ||
    iconSearch.trim() !== '' ||
    isFillActive ||
    iconWeight !== 400 ||
    iconGrade !== 0 ||
    opticalSize !== 24;

  const resetAllFilters = () => {
    setSelectedStyle('all');
    setSelectedCategory('All');
    setIconSearch('');
    setIsFillActive(false);
    setIconWeight(400);
    setIconGrade(0);
    setOpticalSize(24);
    setTwoToneOpacity(1);
    setIconLimit(400);
    setActiveInfoType(null);
  };

  const handleCopy = (snippet: string, msg: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(snippet);
    }
    toast(msg, { type: 'success' });
  };

  const getSanitizedDrawerSvgMarkup = (): string => {
    if (!drawerPreviewRef.current) return '';
    const svgEl = drawerPreviewRef.current.querySelector('svg');
    if (!svgEl) return '';
    let markup = svgEl.outerHTML;
    // Guarantee fill-opacity="0.35" is replaced with "1" if present
    markup = markup.replace(/fill-opacity=["'](?:0\.35|\.35)["']/g, 'fill-opacity="1"');
    return markup;
  };

  const handleDownloadSVG = () => {
    if (!drawerPreviewRef.current || !selectedIcon) return;
    const svgMarkup = getSanitizedDrawerSvgMarkup();
    if (!svgMarkup) {
      toast('Could not find SVG element to download', { type: 'error' });
      return;
    }
    const blob = new Blob([svgMarkup], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${selectedIcon.componentName}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast(`Downloaded ${selectedIcon.componentName}.svg`, { type: 'success' });
  };

  const handleDownloadPNG = () => {
    if (!drawerPreviewRef.current || !selectedIcon) return;
    const svgEl = drawerPreviewRef.current.querySelector('svg');
    if (!svgEl) {
      toast('Could not find SVG element to rasterize', { type: 'error' });
      return;
    }
    const svgString = new XMLSerializer().serializeToString(svgEl);
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const URL = window.URL || window.webkitURL || window;
    const blobURL = URL.createObjectURL(svgBlob);
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement('canvas');
      const size = Math.max(drawerSize, 48);
      canvas.width = size * 2;
      canvas.height = size * 2;
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((pngBlob) => {
          if (pngBlob) {
            const pngUrl = URL.createObjectURL(pngBlob);
            const link = document.createElement('a');
            link.href = pngUrl;
            link.download = `${selectedIcon.componentName}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(pngUrl);
            toast(`Downloaded ${selectedIcon.componentName}.png`, { type: 'success' });
          }
        }, 'image/png');
      }
      URL.revokeObjectURL(blobURL);
    };
    image.src = blobURL;
  };

  const handleCopySVG = () => {
    if (!drawerPreviewRef.current || !selectedIcon) return;
    const svgMarkup = getSanitizedDrawerSvgMarkup();
    if (!svgMarkup) {
      toast('Could not find SVG element to copy', { type: 'error' });
      return;
    }
    handleCopy(svgMarkup, `Copied SVG markup for ${selectedIcon.componentName}!`);
  };

  const handleDrawerSizeStep = (delta: number) => {
    setDrawerSize((prev) => Math.max(16, Math.min(1000, prev + delta)));
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', gap: 12 }}>
        <SpinnerIcon size={24} style={{ animation: 'spin 1s linear infinite', display: 'block' }} />
        <span style={{ fontSize: 14, color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }}>
          Loading Spectra Icon Explorer (14,255 icons)...
        </span>
      </div>
    );
  }

  // Dynamic preview contrast background based on color luminance and active theme:
  // In Light mode: default canvas is #F8FAFC. If drawerColor is white or very pale (luminance > 0.88), invert to #161B26 so it's visible.
  // In Dark mode: default canvas is #161B26. If drawerColor is black or very dark (luminance < 0.12), invert to #F8FAFC so it's visible.
  const colorLuminance = getLuminance(drawerColor);
  const needsDarkContrast = !isDark && colorLuminance > 0.88;
  const needsLightContrast = isDark && colorLuminance < 0.12;
  const isPreviewDark = needsDarkContrast || (isDark && !needsLightContrast);

  const previewBg = isPreviewDark ? '#161B26' : '#F8FAFC';
  const previewBorder = isPreviewDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.12)';
  const previewIconSize = Math.min(drawerSize, 96);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        backgroundColor: isDark ? '#090D16' : '#FFFFFF',
        color: isDark ? '#E3E3E3' : '#1E293B',
        overflow: 'hidden',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Scoped Scrollbar Style to match app aesthetic & remove number input spinners */}
      <style>{`
        /* Completely remove number input up/down spin arrows on hover and focus */
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
          -webkit-appearance: none !important;
          margin: 0 !important;
        }
        input[type=number] {
          -moz-appearance: textfield !important;
          appearance: textfield !important;
        }

        .spectra-custom-scroll::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .spectra-custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .spectra-custom-scroll::-webkit-scrollbar-thumb {
          background: ${isDark ? 'rgba(255, 255, 255, 0.16)' : 'rgba(0, 0, 0, 0.16)'};
          border-radius: 9999px;
        }
        .spectra-custom-scroll::-webkit-scrollbar-thumb:hover {
          background: ${isDark ? 'rgba(255, 255, 255, 0.32)' : 'rgba(0, 0, 0, 0.32)'};
        }
        .spectra-custom-scroll {
          scrollbar-width: thin;
          scrollbar-color: ${isDark ? 'rgba(255, 255, 255, 0.16) transparent' : 'rgba(0, 0, 0, 0.16) transparent'};
        }
      `}</style>

      {/* ==================================================================== */}
      {/* 1. TOP FIXED / STICKY SEARCH & ACTION HEADER                          */}
      {/* ==================================================================== */}
      <header
        style={{
          flexShrink: 0,
          padding: '12px 24px',
          borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
          backgroundColor: isDark ? '#0E121B' : '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          zIndex: 20,
        }}
      >
        {/* Left Search Bar (Google Fonts style) */}
        <div style={{ position: 'relative', flex: '1 1 380px', maxWidth: 640, display: 'flex', alignItems: 'center' }}>
          <span
            style={{
              position: 'absolute',
              left: 14,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: isDark ? 'rgba(255, 255, 255, 0.45)' : 'rgba(0, 0, 0, 0.45)',
            }}
          >
            <SearchIcon size={18} />
          </span>
          <input
            type="text"
            placeholder={`Search ${manifest.length.toLocaleString()} icons (e.g. search, settings, chevron, home)...`}
            value={iconSearch}
            onChange={(e) => {
              setIconSearch(e.target.value);
              setIconLimit(400);
            }}
            style={{
              width: '100%',
              padding: '10px 40px',
              borderRadius: 24,
              border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'}`,
              backgroundColor: isDark ? '#161B26' : '#F1F5F9',
              color: isDark ? '#FFFFFF' : '#0F172A',
              fontSize: 14,
              outline: 'none',
              transition: 'border-color 0.15s ease, background-color 0.15s ease',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#007FFF';
              e.currentTarget.style.backgroundColor = isDark ? '#1E2433' : '#FFFFFF';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)';
              e.currentTarget.style.backgroundColor = isDark ? '#161B26' : '#F1F5F9';
            }}
          />
          {iconSearch && (
            <button
              onClick={() => setIconSearch('')}
              style={{
                position: 'absolute',
                right: 12,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 4,
              }}
              title="Clear search"
            >
              <CloseIcon size={14} />
            </button>
          )}
        </div>

        {/* Right Status & Quick Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 13, color: isDark ? 'rgba(255, 255, 255, 0.6)' : '#64748B', fontWeight: 500 }}>
            Showing {Math.min(filtered.length, iconLimit).toLocaleString()} of {filtered.length.toLocaleString()} icons
          </span>

          {iconLimit < filtered.length && (
            <Button
              variant="tertiary"
              size="sm"
              onClick={() => setIconLimit(filtered.length)}
              style={{ fontSize: 12, padding: '4px 10px', height: 28, minHeight: 28 }}
            >
              Load all {filtered.length.toLocaleString()}
            </Button>
          )}

          {hasActiveFilters && (
            <Button
              variant="secondary"
              size="sm"
              onClick={resetAllFilters}
              icon={<RotateResetIcon size={12} />}
              style={{ fontSize: 12.5, height: 30, minHeight: 30 }}
            >
              Reset all
            </Button>
          )}
        </div>
      </header>

      {/* ==================================================================== */}
      {/* 2. MAIN BODY (Single Scrollable Sidebar + Pure Scroll Grid + Drawer) */}
      {/* ==================================================================== */}
      <div style={{ display: 'flex', flex: 1, minHeight: 0, overflow: 'hidden' }}>
        {/* ================================================================== */}
        {/* LEFT FIXED SIDEBAR: CUSTOMIZE & TREE PATTERN FILTER                */}
        {/* ================================================================== */}
        <aside
          className="spectra-custom-scroll"
          style={{
            width: 270,
            flexShrink: 0,
            height: '100%',
            overflowY: 'auto',
            borderRight: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
            padding: '20px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            backgroundColor: isDark ? '#0E121B' : '#F8FAFC',
          }}
        >
          {/* Header row: Customize & Reset */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: isDark ? '#FFFFFF' : '#0F172A' }}>
              <FilterSlidersIcon size={16} />
              <span>Customize</span>
            </div>
            <Button
              variant="tertiary"
              size="sm"
              onClick={resetAllFilters}
              icon={<RotateResetIcon size={12} />}
              style={{ padding: '2px 8px', fontSize: 12, height: 26, minHeight: 26 }}
              title="Reset all customizers"
            >
              Reset
            </Button>
          </div>

          {/* 1. Fill Toggle Switch using @spectra/react Switch */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: isDark ? '#FFFFFF' : '#0F172A', fontWeight: 500 }}>
              <span>Fill</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  const rect = e.currentTarget.getBoundingClientRect();
                  setInfoAnchorRect(rect);
                  setActiveInfoType((prev) => (prev === 'fill' ? null : 'fill'));
                }}
                aria-label="Information about Fill"
                title="Click for Fill specifications"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: activeInfoType === 'fill' ? '#007FFF' : (isDark ? 'rgba(255, 255, 255, 0.45)' : 'rgba(0, 0, 0, 0.45)'),
                  transition: 'color 0.15s ease',
                }}
              >
                <InfoCircleIcon size={14} />
              </button>
            </div>
            <Switch
              checked={isFillActive}
              onChange={setIsFillActive}
              size="sm"
              aria-label="Toggle Fill"
            />
          </div>

          {/* 2. Weight Slider (100 to 700) using @spectra/react Slider */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: isDark ? '#FFFFFF' : '#0F172A', fontWeight: 500 }}>
                <span>Weight</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    const rect = e.currentTarget.getBoundingClientRect();
                    setInfoAnchorRect(rect);
                    setActiveInfoType((prev) => (prev === 'weight' ? null : 'weight'));
                  }}
                  aria-label="Information about Weight"
                  title="Click for Weight specifications"
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: activeInfoType === 'weight' ? '#007FFF' : (isDark ? 'rgba(255, 255, 255, 0.45)' : 'rgba(0, 0, 0, 0.45)'),
                    transition: 'color 0.15s ease',
                  }}
                >
                  <InfoCircleIcon size={14} />
                </button>
              </div>
              <span style={{ fontSize: 12, color: isDark ? 'rgba(255, 255, 255, 0.6)' : '#64748B', fontWeight: 600 }}>{iconWeight}</span>
            </div>
            <Slider
              min={100}
              max={700}
              step={100}
              value={iconWeight}
              onChange={setIconWeight}
              showValue={false}
              aria-label="Weight"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: isDark ? 'rgba(255, 255, 255, 0.4)' : '#64748B', marginTop: 2 }}>
              <span>100</span>
              <span>700</span>
            </div>
          </div>

          {/* 3. Grade Slider (-25 to 200) using @spectra/react Slider */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: isDark ? '#FFFFFF' : '#0F172A', fontWeight: 500 }}>
                <span>Grade</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    const rect = e.currentTarget.getBoundingClientRect();
                    setInfoAnchorRect(rect);
                    setActiveInfoType((prev) => (prev === 'grade' ? null : 'grade'));
                  }}
                  aria-label="Information about Grade"
                  title="Click for Grade specifications"
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: activeInfoType === 'grade' ? '#007FFF' : (isDark ? 'rgba(255, 255, 255, 0.45)' : 'rgba(0, 0, 0, 0.45)'),
                    transition: 'color 0.15s ease',
                  }}
                >
                  <InfoCircleIcon size={14} />
                </button>
              </div>
              <span style={{ fontSize: 12, color: isDark ? 'rgba(255, 255, 255, 0.6)' : '#64748B', fontWeight: 600 }}>{iconGrade}</span>
            </div>
            <Slider
              min={-25}
              max={200}
              step={25}
              value={iconGrade}
              onChange={setIconGrade}
              showValue={false}
              aria-label="Grade"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: isDark ? 'rgba(255, 255, 255, 0.4)' : '#64748B', marginTop: 2 }}>
              <span>-25 (low)</span>
              <span>200 (high)</span>
            </div>
          </div>

          {/* 4. Optical Size Slider (20px to 48px) using @spectra/react Slider */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: isDark ? '#FFFFFF' : '#0F172A', fontWeight: 500 }}>
                <span>Optical Size</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    const rect = e.currentTarget.getBoundingClientRect();
                    setInfoAnchorRect(rect);
                    setActiveInfoType((prev) => (prev === 'optical' ? null : 'optical'));
                  }}
                  aria-label="Information about Optical Size"
                  title="Click for Optical Size specifications"
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: activeInfoType === 'optical' ? '#007FFF' : (isDark ? 'rgba(255, 255, 255, 0.45)' : 'rgba(0, 0, 0, 0.45)'),
                    transition: 'color 0.15s ease',
                  }}
                >
                  <InfoCircleIcon size={14} />
                </button>
              </div>
              <span style={{ fontSize: 12, color: isDark ? 'rgba(255, 255, 255, 0.6)' : '#64748B', fontWeight: 600 }}>{opticalSize}px</span>
            </div>
            <Slider
              min={20}
              max={48}
              step={4}
              value={opticalSize}
              onChange={setOpticalSize}
              showValue={false}
              aria-label="Optical Size"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: isDark ? 'rgba(255, 255, 255, 0.4)' : '#64748B', marginTop: 2 }}>
              <span>20px</span>
              <span>48px</span>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)', margin: '4px 0' }} />

          {/* Section: Filter */}
          <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: isDark ? 'rgba(255, 255, 255, 0.4)' : '#64748B' }}>
            Filter
          </div>

          {/* Style Accordion */}
          <div>
            <button
              onClick={() => setIsStyleOpen((prev) => !prev)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '6px 0',
                background: 'none',
                border: 'none',
                color: isDark ? '#FFFFFF' : '#0F172A',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <span>Style</span>
              <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                {isStyleOpen ? <ChevronDownIcon size={14} /> : <ChevronRightIcon size={14} />}
              </span>
            </button>

            {isStyleOpen && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3, marginTop: 6 }}>
                {ICON_STYLES.map((style) => {
                  const active = selectedStyle === style.id;
                  return (
                    <button
                      key={style.id}
                      onClick={() => {
                        setSelectedStyle(style.id);
                        setIconLimit(120);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '6px 10px',
                        borderRadius: 6,
                        fontSize: 12.5,
                        fontWeight: active ? 600 : 400,
                        border: `1px solid ${active ? '#007FFF' : 'transparent'}`,
                        backgroundColor: active
                          ? (isDark ? 'rgba(0, 127, 255, 0.12)' : 'rgba(0, 127, 255, 0.08)')
                          : 'transparent',
                        color: active ? '#007FFF' : (isDark ? 'rgba(255, 255, 255, 0.8)' : '#334155'),
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.12s ease',
                      }}
                    >
                      <span>{style.label}</span>
                      {active && <CheckIcon size={12} />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Category Tree Pattern (NO inner scrollbar, flows naturally in sidebar) */}
          <div>
            <button
              onClick={() => setIsCategoryTreeOpen((prev) => !prev)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '6px 0',
                background: 'none',
                border: 'none',
                color: isDark ? '#FFFFFF' : '#0F172A',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <FolderVectorIcon size={14} />
                <span>Category</span>
              </div>
              <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                {isCategoryTreeOpen ? <ChevronDownIcon size={14} /> : <ChevronRightIcon size={14} />}
              </span>
            </button>

            {isCategoryTreeOpen && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 6 }}>
                {ICON_CATEGORIES.map((cat) => {
                  const active = selectedCategory === cat;
                  const count = categoryCounts[cat] || 0;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIconLimit(120);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '6px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        fontWeight: active ? 600 : 400,
                        border: `1px solid ${active ? '#007FFF' : 'transparent'}`,
                        backgroundColor: active
                          ? (isDark ? 'rgba(0, 127, 255, 0.12)' : 'rgba(0, 127, 255, 0.08)')
                          : 'transparent',
                        color: active ? '#007FFF' : (isDark ? 'rgba(255, 255, 255, 0.75)' : '#334155'),
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.12s ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        <span style={{ color: active ? '#007FFF' : (isDark ? 'rgba(255, 255, 255, 0.4)' : '#94A3B8') }}>
                          <FolderVectorIcon size={12} />
                        </span>
                        <span style={{ whiteSpace: 'nowrap' }}>{cat}</span>
                      </div>
                      <span style={{ fontSize: 10.5, color: isDark ? 'rgba(255, 255, 255, 0.4)' : '#94A3B8', marginLeft: 6 }}>
                        {count.toLocaleString()}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </aside>

        {/* ================================================================== */}
        {/* CENTER SCROLLABLE ICONS GRID (ONLY THIS AREA SCROLLS)              */}
        {/* ================================================================== */}
        <main
          className="spectra-custom-scroll"
          onScroll={handleGridScroll}
          style={{
            flex: 1,
            height: '100%',
            overflowY: 'auto',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {/* Active Filter Chips */}
          {hasActiveFilters && (
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
              {isFillActive && <Badge variant="primary">Fill: On</Badge>}
              {selectedStyle !== 'all' && (
                <Badge variant="primary">Style: {ICON_STYLES.find((s) => s.id === selectedStyle)?.label}</Badge>
              )}
              {selectedCategory !== 'All' && <Badge variant="default">Category: {selectedCategory}</Badge>}
              {iconSearch && <Badge variant="default">Search: "{iconSearch}"</Badge>}
              {iconWeight !== 400 && <Badge variant="default">Weight: {iconWeight}</Badge>}
              {iconGrade !== 0 && <Badge variant="default">Grade: {iconGrade}</Badge>}
              {opticalSize !== 24 && <Badge variant="default">Optical Size: {opticalSize}px</Badge>}
            </div>
          )}

          {/* Grid of Icons (Google Fonts minimal cards) */}
          {filtered.length === 0 ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '80px 20px',
                gap: 12,
                color: isDark ? 'rgba(255, 255, 255, 0.5)' : '#64748B',
              }}
            >
              <SearchIcon size={36} />
              <div style={{ fontSize: 16, fontWeight: 600, color: isDark ? '#FFFFFF' : '#0F172A' }}>No icons found matching your filters</div>
              <div style={{ fontSize: 13 }}>Try clearing search keywords or resetting style and category filters.</div>
              <button
                onClick={resetAllFilters}
                style={{
                  padding: '8px 16px',
                  borderRadius: 20,
                  backgroundColor: '#007FFF',
                  color: '#FFFFFF',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: 13,
                  marginTop: 6,
                }}
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(118px, 1fr))',
                gap: 8,
              }}
            >
              {filtered.slice(0, iconLimit).map((item) => {
                const isSelected = selectedIcon?.id === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      setSelectedIcon(item);
                      setDrawerColor(isDark ? '#FFFFFF' : '#0F172A');
                      setDrawerSize(48);
                      setShowAllTags(false);
                      setIsDrawerPickerOpen(false);
                    }}
                    title={`Click to inspect <${item.componentName} />`}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '16px 8px 12px 8px',
                      borderRadius: 8,
                      border: `1px solid ${isSelected ? '#007FFF' : 'transparent'}`,
                      backgroundColor: isSelected
                        ? (isDark ? 'rgba(0, 127, 255, 0.15)' : 'rgba(0, 127, 255, 0.08)')
                        : 'transparent',
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'background-color 0.12s ease, border-color 0.12s ease',
                      userSelect: 'none',
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    <div
                      style={{
                        marginBottom: 8,
                        width: 44,
                        height: 44,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: iconDefaultColor,
                        transform: iconScale !== 1 ? `scale(${iconScale})` : undefined,
                        transition: 'transform 0.15s ease',
                        ...(netStroke > 0 ? {
                          stroke: 'currentColor',
                          strokeWidth: `${netStroke.toFixed(2)}px`,
                          paintOrder: 'stroke fill',
                        } : {}),
                      }}
                    >
                      <DynamicIcon
                        name={item.componentName}
                        size={28}
                        color={iconDefaultColor}
                        fillOpacity={twoToneOpacity}
                      />
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 500,
                        color: isDark ? '#E3E3E3' : '#334155',
                        wordBreak: 'break-word',
                        lineHeight: 1.25,
                        maxWidth: '100%',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {item.name || item.componentName.replace(/Icon$/, '')}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Smooth continuous stream indicator and instant load all button */}
          {iconLimit < filtered.length && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '28px 0 40px 0',
                gap: 10,
                color: isDark ? 'rgba(255, 255, 255, 0.45)' : '#64748B',
                fontSize: 12.5,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <SpinnerIcon size={16} style={{ animation: 'spin 1s linear infinite' }} />
                <span>Scroll to stream more icons... ({(filtered.length - iconLimit).toLocaleString()} remaining)</span>
              </div>
              <button
                onClick={() => setIconLimit(filtered.length)}
                style={{
                  padding: '6px 16px',
                  borderRadius: 16,
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'}`,
                  backgroundColor: isDark ? '#1E2433' : '#F1F5F9',
                  color: isDark ? '#FFFFFF' : '#0F172A',
                  fontSize: 12,
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = isDark ? '#2C3446' : '#E2E8F0')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = isDark ? '#1E2433' : '#F1F5F9')}
              >
                Load all {filtered.length.toLocaleString()} icons now
              </button>
            </div>
          )}
        </main>

        {/* ================================================================== */}
        {/* RIGHT SCREEN-INLINE DRAWER (Exact Google Fonts Icons Benchmark)     */}
        {/* ================================================================== */}
        {selectedIcon && (
          <aside
            className="spectra-custom-scroll"
            style={{
              width: 380,
              flexShrink: 0,
              height: '100%',
              overflowY: 'auto',
              borderLeft: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
              backgroundColor: isDark ? '#0E121B' : '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              padding: '20px',
              gap: 20,
              zIndex: 15,
            }}
          >
            {/* Drawer Header: Icon Name & Reset/Close */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2 style={{ fontSize: 20, fontWeight: 600, margin: 0, color: isDark ? '#FFFFFF' : '#0F172A' }}>
                {selectedIcon.name || selectedIcon.componentName.replace(/Icon$/, '')}
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <IconButton
                  variant="tertiary"
                  size="sm"
                  shape="circle"
                  aria-label="Reset preview"
                  icon={<RotateResetIcon size={16} />}
                  onClick={() => {
                    setDrawerSize(48);
                    setDrawerColor(isDark ? '#FFFFFF' : '#0F172A');
                    setIsDrawerPickerOpen(false);
                  }}
                  title="Reset preview"
                />
                <IconButton
                  variant="tertiary"
                  size="sm"
                  shape="circle"
                  aria-label="Close drawer"
                  icon={<CloseIcon size={16} />}
                  onClick={() => {
                    setSelectedIcon(null);
                    setIsDrawerPickerOpen(false);
                  }}
                  title="Close drawer"
                />
              </div>
            </div>

            {/* Top Preview Card & Controls (2 Columns like Google Fonts screenshot) */}
            <div style={{ display: 'grid', gridTemplateColumns: '130px 1fr', gap: 16, alignItems: 'center' }}>
              {/* Left Column: Hero Preview Card with Copy Icon and Dynamic Contrast Background */}
              <div
                ref={drawerPreviewRef}
                style={{
                  width: 130,
                  height: 130,
                  borderRadius: 12,
                  border: `1px solid ${previewBorder}`,
                  backgroundColor: previewBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'background-color 0.2s ease, border-color 0.2s ease',
                }}
              >
                {drawerSize > 96 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: 6,
                      left: 8,
                      fontSize: 9.5,
                      fontWeight: 600,
                      color: isPreviewDark ? 'rgba(255, 255, 255, 0.6)' : '#64748B',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Capped at 96px
                  </span>
                )}
                <div
                  style={{
                    color: drawerColor,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: iconScale !== 1 ? `scale(${iconScale})` : undefined,
                    transition: 'transform 0.15s ease',
                    ...(netStroke > 0 ? {
                      stroke: 'currentColor',
                      strokeWidth: `${netStroke.toFixed(2)}px`,
                      paintOrder: 'stroke fill',
                    } : {}),
                  }}
                >
                  <DynamicIcon
                    name={selectedIcon.componentName}
                    size={previewIconSize}
                    color={drawerColor}
                    fillOpacity={twoToneOpacity}
                  />
                </div>
                <button
                  onClick={handleCopySVG}
                  style={{
                    position: 'absolute',
                    bottom: 8,
                    right: 8,
                    background: isPreviewDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)',
                    border: 'none',
                    borderRadius: 4,
                    color: isPreviewDark ? 'rgba(255, 255, 255, 0.8)' : '#475569',
                    cursor: 'pointer',
                    padding: 4,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  title="Copy raw SVG"
                >
                  <CopyIcon size={14} />
                </button>
              </div>

              {/* Right Column: Size Stepper & Color Picker */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {/* Size Control: Redesigned with left minus, centered input + px, right plus */}
                <div>
                  <div style={{ fontSize: 12, color: isDark ? 'rgba(255, 255, 255, 0.6)' : '#64748B', marginBottom: 6 }}>Size</div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: isDark ? '#161B26' : '#F1F5F9',
                      borderRadius: 20,
                      border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'}`,
                      padding: '3px 6px',
                      height: 36,
                    }}
                  >
                    <button
                      onClick={() => handleDrawerSizeStep(-8)}
                      disabled={drawerSize <= 16}
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: '50%',
                        border: 'none',
                        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
                        color: isDark ? '#FFFFFF' : '#0F172A',
                        cursor: drawerSize <= 16 ? 'not-allowed' : 'pointer',
                        opacity: drawerSize <= 16 ? 0.4 : 1,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background-color 0.15s ease',
                      }}
                      title="Decrease size"
                    >
                      <MinusVectorIcon size={12} color="currentColor" />
                    </button>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                      <input
                        type="number"
                        className="spectra-size-input"
                        min={16}
                        max={1000}
                        value={drawerSize}
                        onChange={(e) => {
                          const raw = e.target.value;
                          if (raw === '') {
                            setDrawerSize(16);
                            return;
                          }
                          const val = Math.max(16, Math.min(1000, Number(raw) || 16));
                          setDrawerSize(val);
                        }}
                        style={{
                          width: 44,
                          background: 'none',
                          border: 'none',
                          color: isDark ? '#FFFFFF' : '#0F172A',
                          fontSize: 13,
                          fontWeight: 600,
                          textAlign: 'center',
                          outline: 'none',
                          padding: 0,
                          fontFamily: 'monospace',
                        }}
                      />
                      <span style={{ fontSize: 11.5, fontWeight: 500, color: isDark ? 'rgba(255, 255, 255, 0.5)' : '#64748B' }}>
                        px
                      </span>
                    </div>
                    <button
                      onClick={() => handleDrawerSizeStep(8)}
                      disabled={drawerSize >= 1000}
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: '50%',
                        border: 'none',
                        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
                        color: isDark ? '#FFFFFF' : '#0F172A',
                        cursor: drawerSize >= 1000 ? 'not-allowed' : 'pointer',
                        opacity: drawerSize >= 1000 ? 0.4 : 1,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background-color 0.15s ease',
                      }}
                      title="Increase size"
                    >
                      <PlusVectorIcon size={12} color="currentColor" />
                    </button>
                  </div>
                </div>

                {/* Color Control with Google Color Picker Popover */}
                <div style={{ position: 'relative' }}>
                  <div style={{ fontSize: 12, color: isDark ? 'rgba(255, 255, 255, 0.6)' : '#64748B', marginBottom: 6 }}>Color</div>
                  <button
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setDrawerPickerAnchor(rect);
                      setIsDrawerPickerOpen((prev) => !prev);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      backgroundColor: isDark ? '#161B26' : '#F1F5F9',
                      borderRadius: 20,
                      border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'}`,
                      padding: '4px 10px',
                      cursor: 'pointer',
                      width: '100%',
                    }}
                  >
                    <span style={{ color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#64748B', display: 'inline-flex', alignItems: 'center' }}>
                      <ColorDropperIcon size={15} />
                    </span>
                    <div
                      style={{
                        width: 14,
                        height: 14,
                        borderRadius: '50%',
                        backgroundColor: drawerColor,
                        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)'}`,
                      }}
                    />
                    <span style={{ fontSize: 12, color: isDark ? '#FFFFFF' : '#0F172A', fontFamily: 'monospace' }}>{drawerColor}</span>
                  </button>

                  {/* Google Color Picker Popover */}
                  {isDrawerPickerOpen && (
                    <GoogleColorPicker
                      color={drawerColor}
                      onChange={(hex) => {
                        setDrawerColor(hex);
                      }}
                      customColors={customColors}
                      onAddCustomColor={(hex) => setCustomColors((prev) => [...prev, hex])}
                      onClose={() => setIsDrawerPickerOpen(false)}
                      anchorRect={drawerPickerAnchor}
                      isDark={isDark}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Icon Details: Tags / Search keywords with Show more / Show less */}
            {selectedIcon.tags && selectedIcon.tags.length > 0 && (
              <div>
                <div style={{ fontSize: 12, color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#475569', lineHeight: 1.6 }}>
                  {showAllTags ? selectedIcon.tags.join(', ') : selectedIcon.tags.slice(0, 10).join(', ')}
                  {selectedIcon.tags.length > 10 && (
                    <button
                      onClick={() => setShowAllTags((prev) => !prev)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#007FFF',
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: 'pointer',
                        marginLeft: 6,
                        padding: 0,
                      }}
                    >
                      {showAllTags ? 'Show less' : 'Show more'}
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons: Download SVG & Download PNG using @spectra/react Button */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <Button
                variant="primary"
                size="sm"
                onClick={handleDownloadSVG}
                icon={<DownloadVectorIcon size={14} color="currentColor" />}
              >
                SVG
              </Button>

              <Button
                variant="secondary"
                size="sm"
                onClick={handleDownloadPNG}
                icon={<DownloadVectorIcon size={14} color="currentColor" />}
              >
                PNG
              </Button>
            </div>

            {/* Platform Tabs: Web, Android, Apple using @spectra/react Tabs (variant="pills") */}
            <div>
              <Tabs
                value={drawerPlatform}
                onChange={(val) => setDrawerPlatform(val as any)}
                variant="pills"
                size="sm"
              >
                <TabList style={{ marginBottom: 12 }}>
                  <Tab value="web">Web</Tab>
                  <Tab value="android">Android</Tab>
                  <Tab value="apple">Apple</Tab>
                </TabList>
              </Tabs>

              {/* Instructions text */}
              <div style={{ fontSize: 11.5, color: isDark ? 'rgba(255, 255, 255, 0.5)' : '#64748B', lineHeight: 1.5, marginBottom: 10 }}>
                Check the Spectra UI Icons guide for advanced examples such as animations and sub-pixel alignment guarantees.
              </div>

              {/* Implementation Code Box */}
              <div style={{ position: 'relative' }}>
                <pre
                  style={{
                    margin: 0,
                    padding: '14px',
                    backgroundColor: isDark ? '#1E1E1E' : '#F8FAFC',
                    borderRadius: 8,
                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                    fontSize: 12,
                    fontFamily: 'Consolas, Monaco, "Courier New", monospace',
                    color: isDark ? '#E3E3E3' : '#0F172A',
                    overflowX: 'auto',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }}
                >
                  {drawerPlatform === 'web' &&
                    `import { ${selectedIcon.componentName} } from '@spectra/icons';\n\n<${selectedIcon.componentName} size={${drawerSize}}${drawerColor !== (isDark ? '#FFFFFF' : '#0F172A') ? ` color="${drawerColor}"` : ''} />`}
                  {drawerPlatform === 'android' &&
                    `import { ${selectedIcon.componentName} } from '@spectra/icons/native';\n\n<${selectedIcon.componentName} size={${drawerSize}}${drawerColor !== (isDark ? '#FFFFFF' : '#0F172A') ? ` color="${drawerColor}"` : ''} />`}
                  {drawerPlatform === 'apple' &&
                    (getSanitizedDrawerSvgMarkup() ||
                      `<svg width="${drawerSize}" height="${drawerSize}" viewBox="0 0 24 24" fill="none">...</svg>`)}
                </pre>

                <button
                  onClick={() => {
                    let code = '';
                    if (drawerPlatform === 'web') {
                      code = `import { ${selectedIcon.componentName} } from '@spectra/icons';\n\n<${selectedIcon.componentName} size={${drawerSize}}${drawerColor !== (isDark ? '#FFFFFF' : '#0F172A') ? ` color="${drawerColor}"` : ''} />`;
                    } else if (drawerPlatform === 'android') {
                      code = `import { ${selectedIcon.componentName} } from '@spectra/icons/native';\n\n<${selectedIcon.componentName} size={${drawerSize}}${drawerColor !== (isDark ? '#FFFFFF' : '#0F172A') ? ` color="${drawerColor}"` : ''} />`;
                    } else {
                      code = getSanitizedDrawerSvgMarkup();
                    }
                    handleCopy(code, 'Copied code to clipboard!');
                  }}
                  style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    padding: '4px 10px',
                    borderRadius: 14,
                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'}`,
                    backgroundColor: isDark ? '#282828' : '#F1F5F9',
                    color: isDark ? '#FFFFFF' : '#0F172A',
                    fontSize: 11.5,
                    cursor: 'pointer',
                  }}
                >
                  <CopyIcon size={12} />
                  <span>Copy code</span>
                </button>
              </div>
            </div>
          </aside>
        )}
      </div>

      {/* Floating Rich Info Popover for Customize Sidebar (Fill, Weight, Grade, Optical Size) */}
      {activeInfoType && (
        <CustomizeInfoPopover
          type={activeInfoType}
          anchorRect={infoAnchorRect}
          onClose={() => setActiveInfoType(null)}
          isDark={isDark}
        />
      )}
    </div>
  );
};

export default IconExplorer;
