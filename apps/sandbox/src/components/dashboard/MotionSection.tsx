import React, { useState } from 'react';
import { Button, Badge, Card } from '@spectra/react';
import { SparklesIcon, CheckIcon } from '@spectra/icons';

export const MotionSection: React.FC = () => {
  const [activeDuration, setActiveDuration] = useState<'instant' | 'subtle' | 'normal' | 'expressive'>('subtle');
  const [activeEasing, setActiveEasing] = useState<'easeOut' | 'easeIn' | 'easeInOut' | 'spring'>('easeOut');
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [animating, setAnimating] = useState(false);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const durationMsMap = {
    instant: 50,
    subtle: 150,
    normal: 250,
    expressive: 400,
  };

  const easingMap = {
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  };

  const triggerAnimation = () => {
    setAnimating(false);
    requestAnimationFrame(() => {
      setAnimating(true);
    });
  };

  const copy = (val: string) => {
    navigator.clipboard.writeText(val);
    setCopiedToken(val);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const effectiveDuration = (durationMsMap[activeDuration] * (1 / speedMultiplier)).toFixed(0);

  return (
    <div style={{ maxWidth: 1040, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
      {/* 1. Hero Header Card */}
      <Card
        variant="bordered"
        style={{
          padding: '32px 36px',
          backgroundColor: 'var(--color-surface)',
          borderRadius: 16,
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <Badge variant="primary">Design Tokens</Badge>
          <span style={{ fontSize: 13, color: 'var(--color-text-muted)', fontWeight: 500 }}>Motion & Transitions</span>
        </div>
        <h1
          style={{
            fontSize: 34,
            fontWeight: 800,
            letterSpacing: '-0.025em',
            margin: '0 0 12px 0',
            color: 'var(--color-text-primary)',
          }}
        >
          Motion, Easing & Effects
        </h1>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: 'var(--color-text-secondary)',
            margin: 0,
            maxWidth: 780,
          }}
        >
          Spectra UI motion is subtle, swift, and purposeful. It provides natural spatial continuity without distracting skeuomorphic bounce. Supports automatic <code>prefers-reduced-motion</code> overrides.
        </p>
      </Card>

      {/* 2. Interactive Motion Playground */}
      <Card
        variant="bordered"
        style={{
          borderRadius: 16,
          backgroundColor: 'var(--color-surface)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          overflow: 'hidden',
        }}
      >
        {/* Controls Bar */}
        <div
          style={{
            padding: '16px 24px',
            backgroundColor: 'var(--color-surface-raised)',
            borderBottom: '1px solid var(--color-border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 20,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Duration Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
            <span style={{ fontWeight: 600, color: 'var(--color-text-secondary)' }}>Duration:</span>
            {(['instant', 'subtle', 'normal', 'expressive'] as const).map((d) => (
              <button
                key={d}
                onClick={() => {
                  setActiveDuration(d);
                  triggerAnimation();
                }}
                style={{
                  padding: '4px 10px',
                  borderRadius: 4,
                  fontSize: 12,
                  fontWeight: 500,
                  border: '1px solid',
                  borderColor: activeDuration === d ? 'var(--color-action-primary)' : 'var(--color-border-subtle)',
                  backgroundColor: activeDuration === d ? 'var(--color-action-primary)' : 'transparent',
                  color: activeDuration === d ? '#FFFFFF' : 'var(--color-text-primary)',
                  cursor: 'pointer',
                }}
              >
                {d} ({durationMsMap[d]}ms)
              </button>
            ))}
          </div>

          {/* Easing Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
            <span style={{ fontWeight: 600, color: 'var(--color-text-secondary)' }}>Easing:</span>
            {(['easeOut', 'easeIn', 'easeInOut', 'spring'] as const).map((e) => (
              <button
                key={e}
                onClick={() => {
                  setActiveEasing(e);
                  triggerAnimation();
                }}
                style={{
                  padding: '4px 10px',
                  borderRadius: 4,
                  fontSize: 12,
                  fontWeight: 500,
                  border: '1px solid',
                  borderColor: activeEasing === e ? 'var(--color-action-primary)' : 'var(--color-border-subtle)',
                  backgroundColor: activeEasing === e ? 'var(--color-action-primary)' : 'transparent',
                  color: activeEasing === e ? '#FFFFFF' : 'var(--color-text-primary)',
                  cursor: 'pointer',
                }}
              >
                {e}
              </button>
            ))}
          </div>

          {/* Speed inspector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
            <span style={{ fontWeight: 600, color: 'var(--color-text-secondary)' }}>Speed:</span>
            {[1, 0.5, 0.25].map((s) => (
              <button
                key={s}
                onClick={() => setSpeedMultiplier(s)}
                style={{
                  padding: '4px 8px',
                  borderRadius: 4,
                  fontSize: 12,
                  border: '1px solid var(--color-border-subtle)',
                  backgroundColor: speedMultiplier === s ? 'var(--color-surface)' : 'transparent',
                  fontWeight: speedMultiplier === s ? 700 : 400,
                  cursor: 'pointer',
                  color: 'var(--color-text-primary)',
                }}
              >
                {s}×
              </button>
            ))}
          </div>
        </div>

        {/* Live Animation Stage */}
        <div
          style={{
            padding: '50px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
            minHeight: 280,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--color-surface)',
          }}
        >
          <div style={{ width: '100%', maxWidth: 600, display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* 1. Slide & Fade Morph */}
            <div
              style={{
                width: '100%',
                padding: '20px',
                borderRadius: 'var(--radius-component-md)',
                border: '1px solid var(--color-border-default)',
                backgroundColor: 'var(--color-surface-raised)',
                transform: animating ? 'translateX(0) scale(1)' : 'translateX(-20px) scale(0.97)',
                opacity: animating ? 1 : 0.4,
                transition: `transform ${effectiveDuration}ms ${easingMap[activeEasing]}, opacity ${effectiveDuration}ms ${easingMap[activeEasing]}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 600 }}>Morph & Slide Transition</span>
                <Badge variant="success">Active Demo</Badge>
              </div>
              <p style={{ margin: '8px 0 0 0', fontSize: 13, color: 'var(--color-text-secondary)' }}>
                Duration: {effectiveDuration}ms · Easing: {easingMap[activeEasing]}
              </p>
            </div>

            {/* 2. Interactive Accordion Expand Simulation */}
            <div
              style={{
                width: '100%',
                borderRadius: 'var(--radius-component-md)',
                border: '1px solid var(--color-border-default)',
                overflow: 'hidden',
              }}
            >
              <div style={{ padding: '14px 20px', backgroundColor: 'var(--color-surface-raised)', fontWeight: 600 }}>
                Accordion Height Collapse / Expand
              </div>
              <div
                style={{
                  maxHeight: animating ? 120 : 0,
                  opacity: animating ? 1 : 0,
                  padding: animating ? '16px 20px' : '0 20px',
                  transition: `max-height ${effectiveDuration}ms ${easingMap[activeEasing]}, opacity ${effectiveDuration}ms ${easingMap[activeEasing]}, padding ${effectiveDuration}ms ${easingMap[activeEasing]}`,
                  overflow: 'hidden',
                  fontSize: 13,
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.5,
                }}
              >
                This panel expands smoothly using CSS transitions mapped to Spectra UI motion tokens.
              </div>
            </div>
          </div>

          <Button variant="primary" icon={<SparklesIcon size={16} />} onClick={triggerAnimation}>
            Replay Motion
          </Button>
        </div>
      </Card>

      {/* 3. Motion Token Reference Table Card */}
      <Card
        variant="bordered"
        style={{
          borderRadius: 16,
          backgroundColor: 'var(--color-surface)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            padding: '18px 24px',
            backgroundColor: 'var(--color-surface-raised)',
            borderBottom: '1px solid var(--color-border-subtle)',
          }}
        >
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
            CSS Motion Variables Reference
          </h2>
        </div>
        <div>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13 }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-surface-raised)', borderBottom: '1px solid var(--color-border-subtle)' }}>
                <th style={{ padding: '12px 16px', fontWeight: 600 }}>CSS Variable</th>
                <th style={{ padding: '12px 16px', fontWeight: 600 }}>Value</th>
                <th style={{ padding: '12px 16px', fontWeight: 600 }}>Recommended Use</th>
                <th style={{ padding: '12px 16px', fontWeight: 600, textAlign: 'right' }}>Copy</th>
              </tr>
            </thead>
            <tbody>
              {[
                { token: '--motion-instant', val: '50ms ease-out', use: 'Micro-interactions, button hover background color shifts' },
                { token: '--motion-subtle', val: '150ms cubic-bezier(0, 0, 0.2, 1)', use: 'Accordion chevron rotation, checkbox checkmarks, tooltip fade' },
                { token: '--motion-normal', val: '250ms cubic-bezier(0, 0, 0.2, 1)', use: 'Dialog modal backdrop fade, drawer slide-in, tab indicator morph' },
                { token: '--motion-expressive', val: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', use: 'Toast slide notifications, celebratory banners' },
              ].map((m, idx) => (
                <tr key={m.token} style={{ borderBottom: idx === 3 ? 'none' : '1px solid var(--color-border-subtle)' }}>
                  <td style={{ padding: '12px 16px', fontFamily: 'monospace', fontWeight: 600, color: 'var(--color-action-primary)' }}>
                    {m.token}
                  </td>
                  <td style={{ padding: '12px 16px', fontFamily: 'monospace', color: 'var(--color-text-secondary)' }}>
                    {m.val}
                  </td>
                  <td style={{ padding: '12px 16px', color: 'var(--color-text-secondary)' }}>
                    {m.use}
                  </td>
                  <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                    <button
                      onClick={() => copy(`var(${m.token})`)}
                      style={{
                        background: 'none',
                        border: '1px solid var(--color-border-subtle)',
                        borderRadius: 4,
                        padding: '4px 8px',
                        cursor: 'pointer',
                        fontSize: 11,
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      {copiedToken === `var(${m.token})` ? 'Copied' : 'Copy'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
