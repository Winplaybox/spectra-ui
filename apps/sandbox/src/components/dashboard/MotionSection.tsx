import React, { useState } from 'react';
import { Button, Badge, Card, Stack, Box, Text, Grid } from '@winplaybox/react';
import { SparklesIcon, CheckIcon, CopyIcon, RotateCcwIcon, LightningIcon } from '@winplaybox/icons';
import { navigate } from '../../utils/router';

export interface MotionSectionProps {
  motionId?: string;
}

export const MotionSection: React.FC<MotionSectionProps> = ({ motionId }) => {
  const [activeDuration, setActiveDuration] = useState<'instant' | 'subtle' | 'normal' | 'expressive'>('subtle');
  const [activeEasing, setActiveEasing] = useState<'easeOut' | 'easeIn' | 'easeInOut' | 'spring'>('easeOut');
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [animating, setAnimating] = useState(true);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  // Individual interactive demos state
  const [blurActive, setBlurActive] = useState(false);
  const [collapseOpen, setCollapseOpen] = useState(true);
  const [fadeVisible, setFadeVisible] = useState(true);
  const [rotateDeg, setRotateDeg] = useState(0);
  const [scaleHover, setScaleHover] = useState(false);
  const [slideIn, setSlideIn] = useState(true);
  const [staggerPlaying, setStaggerPlaying] = useState(true);

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

  const replayStagger = () => {
    setStaggerPlaying(false);
    setTimeout(() => setStaggerPlaying(true), 50);
  };

  const copy = (val: string) => {
    navigator.clipboard.writeText(val);
    setCopiedToken(val);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const effectiveDuration = (durationMsMap[activeDuration] * (1 / speedMultiplier)).toFixed(0);

  const MOTION_ITEMS = [
    { id: 'atoms', title: 'Atoms & Durations', category: 'Tokens', desc: 'Core timing tokens (50ms–400ms) with interactive easing curves.' },
    { id: 'blur', title: 'Blur Transitions', category: 'Transitions', desc: 'Backdrop frosting and depth focus for dialogs & drawers.' },
    { id: 'collapse', title: 'Collapse & Expand', category: 'Height', desc: 'Zero-jank fractional grid interpolation without JS maxHeight.' },
    { id: 'fade', title: 'Fade & Opacity', category: 'Opacity', desc: 'Gentle opacity and subtle scale easing for notifications.' },
    { id: 'rotate', title: 'Rotate & Spin', category: 'Rotation', desc: 'Smooth rotational kinetic transitions for icons & loaders.' },
    { id: 'scale', title: 'Scale & Elevation', category: 'Scale', desc: 'Physical hover elevation lift and shadow dispersal.' },
    { id: 'slide', title: 'Slide & Sheets', category: 'Slide', desc: 'Translational entrance sweep for sheets, modals & panels.' },
    { id: 'stagger', title: 'Stagger Choreography', category: 'Choreography', desc: '40ms sequential delay for cascading menus and search results.' },
    { id: 'tokens', title: 'Motion Tokens', category: 'Reference', desc: 'Comprehensive CSS motion variable specification table.' },
  ];

  // 1. Atoms & Kinetic Simulator Card
  const renderAtoms = () => (
    <Card
      id="atoms"
      variant="bordered"
      style={{
        borderRadius: 16,
        backgroundColor: 'var(--color-surface)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        overflow: 'hidden',
        scrollMarginTop: 80,
      }}
    >
      <Box style={{ padding: '20px 24px', borderBottom: '1px solid var(--color-border-subtle)', backgroundColor: 'var(--color-surface-raised)' }}>
        <Stack direction="row" align="center" justify="between" wrap gap="md">
          <Stack direction="row" align="center" gap="sm">
            <Badge variant="primary">Fluent 2 Motion</Badge>
            <Text as="h2" variant="heading" size="md" weight="bold">
              Kinetic Curve & Timing Sandbox
            </Text>
          </Stack>
          <Button
            variant="secondary"
            size="sm"
            icon={<RotateCcwIcon size={14} />}
            onClick={triggerAnimation}
          >
            Replay Motion
          </Button>
        </Stack>
      </Box>

      <Box style={{ padding: '28px 32px' }}>
        {/* Controls Grid */}
        <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginBottom: 32 }}>
          {/* Duration Selector */}
          <Stack direction="column" gap="xs">
            <Text size="xs" weight="bold" color="muted" style={{ textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Duration Token
            </Text>
            <Stack direction="row" gap="xs" wrap>
              {(['instant', 'subtle', 'normal', 'expressive'] as const).map((d) => (
                <Button
                  key={d}
                  size="sm"
                  variant={activeDuration === d ? 'primary' : 'secondary'}
                  onClick={() => {
                    setActiveDuration(d);
                    triggerAnimation();
                  }}
                >
                  {d} ({durationMsMap[d]}ms)
                </Button>
              ))}
            </Stack>
          </Stack>

          {/* Easing Curves */}
          <Stack direction="column" gap="xs">
            <Text size="xs" weight="bold" color="muted" style={{ textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Easing Curve
            </Text>
            <Stack direction="row" gap="xs" wrap>
              {(['easeOut', 'easeIn', 'easeInOut', 'spring'] as const).map((e) => (
                <Button
                  key={e}
                  size="sm"
                  variant={activeEasing === e ? 'primary' : 'secondary'}
                  onClick={() => {
                    setActiveEasing(e);
                    triggerAnimation();
                  }}
                >
                  {e}
                </Button>
              ))}
            </Stack>
          </Stack>

          {/* Speed Multiplier */}
          <Stack direction="column" gap="xs">
            <Text size="xs" weight="bold" color="muted" style={{ textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Speed Multiplier
            </Text>
            <Stack direction="row" gap="xs" wrap>
              {[1, 0.5, 0.25].map((s) => (
                <Button
                  key={s}
                  size="sm"
                  variant={speedMultiplier === s ? 'primary' : 'secondary'}
                  onClick={() => {
                    setSpeedMultiplier(s);
                    triggerAnimation();
                  }}
                >
                  {s === 1 ? 'Normal (1x)' : `${s}x (Slow)`}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Box>

        {/* Live Stage */}
        <Box
          style={{
            height: 180,
            borderRadius: 12,
            backgroundColor: 'var(--color-surface-raised)',
            border: '1px solid var(--color-border-subtle)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            padding: '0 32px',
          }}
        >
          <Box
            style={{
              position: 'absolute',
              top: '50%',
              left: 32,
              right: 32,
              height: 2,
              backgroundColor: 'var(--color-border-default)',
              transform: 'translateY(-50%)',
            }}
          />

          <Box
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              backgroundColor: 'var(--color-action-primary)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(0, 127, 255, 0.35)',
              transform: animating ? 'translateX(calc(100cqw - 120px)) scale(1.08)' : 'translateX(0px) scale(1)',
              transitionProperty: 'transform',
              transitionDuration: `${effectiveDuration}ms`,
              transitionTimingFunction: easingMap[activeEasing],
              willChange: 'transform',
              containerType: 'inline-size',
            }}
          >
            <SparklesIcon size={24} />
          </Box>
        </Box>

        {/* Token Specs Readout */}
        <Box
          style={{
            marginTop: 20,
            padding: '16px 20px',
            borderRadius: 8,
            backgroundColor: 'var(--color-surface-raised)',
            border: '1px solid var(--color-border-subtle)',
          }}
        >
          <Stack direction="row" align="center" justify="between">
            <Text size="sm" weight="semibold">Active Kinetic Morph</Text>
            <Badge variant="success">Hardware Accelerated</Badge>
          </Stack>
          <Text size="xs" color="muted" style={{ marginTop: 8 }}>
            Computed Duration: <strong>{effectiveDuration}ms</strong> · Curve: <code>{easingMap[activeEasing]}</code>
          </Text>
        </Box>
      </Box>
    </Card>
  );

  // 2. Blur Transitions Card
  const renderBlur = () => (
    <Card
      id="blur"
      variant="bordered"
      style={{
        borderRadius: 16,
        backgroundColor: 'var(--color-surface)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        overflow: 'hidden',
        scrollMarginTop: 80,
      }}
    >
      <Box style={{ padding: '20px 24px', borderBottom: '1px solid var(--color-border-subtle)', backgroundColor: 'var(--color-surface-raised)' }}>
        <Stack direction="row" align="center" justify="between">
          <Stack direction="row" align="center" gap="sm">
            <Badge variant="primary">Transitions</Badge>
            <Text as="h2" variant="heading" size="md" weight="bold">Blur Transitions & Backdrop Frosting</Text>
          </Stack>
          <Button variant="secondary" size="sm" onClick={() => setBlurActive(!blurActive)}>
            Toggle Frosting
          </Button>
        </Stack>
      </Box>
      <Box style={{ padding: '24px' }}>
        <Text size="sm" color="secondary" style={{ margin: '0 0 16px 0', lineHeight: 1.6 }}>
          Backdrop blur transitions provide depth and focus hierarchy during modal dialog and drawer mount sequences.
        </Text>
        <Box
          style={{
            height: 120,
            borderRadius: 12,
            background: 'linear-gradient(135deg, #0284c7 0%, #6366f1 50%, #ec4899 100%)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              backdropFilter: blurActive ? 'blur(16px)' : 'blur(0px)',
              backgroundColor: blurActive ? 'rgba(0,0,0,0.35)' : 'transparent',
              transition: 'backdrop-filter 250ms ease-out, background-color 250ms ease-out',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            {blurActive ? 'Frosted Glass Surface (16px Blur)' : 'Unblurred Direct Backing'}
          </Box>
        </Box>
      </Box>
    </Card>
  );

  // 3. Collapse & Expand Card
  const renderCollapse = () => (
    <Card
      id="collapse"
      variant="bordered"
      style={{
        borderRadius: 16,
        backgroundColor: 'var(--color-surface)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        overflow: 'hidden',
        scrollMarginTop: 80,
      }}
    >
      <Box style={{ padding: '20px 24px', borderBottom: '1px solid var(--color-border-subtle)', backgroundColor: 'var(--color-surface-raised)' }}>
        <Stack direction="row" align="center" justify="between">
          <Stack direction="row" align="center" gap="sm">
            <Badge variant="primary">Height</Badge>
            <Text as="h2" variant="heading" size="md" weight="bold">Collapse & Expand</Text>
          </Stack>
          <Button variant="secondary" size="sm" onClick={() => setCollapseOpen(!collapseOpen)}>
            {collapseOpen ? 'Collapse Panel' : 'Expand Panel'}
          </Button>
        </Stack>
      </Box>
      <Box style={{ padding: '24px' }}>
        <Text size="sm" color="secondary" style={{ margin: '0 0 16px 0', lineHeight: 1.6 }}>
          Smooth height transitions utilizing CSS grid-template-rows 0fr to 1fr technique for zero-jank fluid collapsible layouts.
        </Text>
        <Box
          style={{
            display: 'grid',
            gridTemplateRows: collapseOpen ? '1fr' : '0fr',
            transition: 'grid-template-rows 250ms cubic-bezier(0, 0, 0.2, 1)',
            overflow: 'hidden',
            borderRadius: 8,
            border: '1px solid var(--color-border-default)',
            backgroundColor: 'var(--color-surface-raised)',
          }}
        >
          <Box style={{ minHeight: 0 }}>
            <Box style={{ padding: '18px 22px', fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              Spectra UI Accordions and Disclosures animate reliably using fluid fractional grid interpolation, completely circumventing fragile JavaScript maxHeight calculations.
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );

  // 4. Fade & Opacity Card
  const renderFade = () => (
    <Card
      id="fade"
      variant="bordered"
      style={{
        borderRadius: 16,
        backgroundColor: 'var(--color-surface)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        overflow: 'hidden',
        scrollMarginTop: 80,
      }}
    >
      <Box style={{ padding: '20px 24px', borderBottom: '1px solid var(--color-border-subtle)', backgroundColor: 'var(--color-surface-raised)' }}>
        <Stack direction="row" align="center" justify="between">
          <Stack direction="row" align="center" gap="sm">
            <Badge variant="primary">Opacity</Badge>
            <Text as="h2" variant="heading" size="md" weight="bold">Fade & Opacity</Text>
          </Stack>
          <Button variant="secondary" size="sm" onClick={() => setFadeVisible(!fadeVisible)}>
            {fadeVisible ? 'Fade Out' : 'Fade In'}
          </Button>
        </Stack>
      </Box>
      <Box style={{ padding: '24px' }}>
        <Box
          style={{
            padding: '24px',
            borderRadius: 8,
            border: '1px solid var(--color-border-subtle)',
            backgroundColor: 'var(--color-surface-raised)',
            opacity: fadeVisible ? 1 : 0,
            transform: fadeVisible ? 'scale(1)' : 'scale(0.98)',
            transition: 'opacity 200ms ease-out, transform 200ms ease-out',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Text size="md" weight="semibold">Notification Banner Overlay</Text>
            <Text size="xs" color="secondary">Fades smoothly with zero repaint layout shifts.</Text>
          </Box>
          <Badge variant="primary">Visible State</Badge>
        </Box>
      </Box>
    </Card>
  );

  // 5. Rotate & Spin Card
  const renderRotate = () => (
    <Card
      id="rotate"
      variant="bordered"
      style={{
        borderRadius: 16,
        backgroundColor: 'var(--color-surface)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        overflow: 'hidden',
        scrollMarginTop: 80,
      }}
    >
      <Box style={{ padding: '20px 24px', borderBottom: '1px solid var(--color-border-subtle)', backgroundColor: 'var(--color-surface-raised)' }}>
        <Stack direction="row" align="center" justify="between">
          <Stack direction="row" align="center" gap="sm">
            <Badge variant="primary">Rotation</Badge>
            <Text as="h2" variant="heading" size="md" weight="bold">Rotate & Spin</Text>
          </Stack>
          <Button
            variant="secondary"
            size="sm"
            icon={<RotateCcwIcon size={14} />}
            onClick={() => setRotateDeg((prev) => prev + 180)}
          >
            Rotate 180°
          </Button>
        </Stack>
      </Box>
      <Box style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: 24 }}>
        <Box
          style={{
            width: 56,
            height: 56,
            borderRadius: 12,
            backgroundColor: 'var(--color-action-primary)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `rotate(${rotateDeg}deg)`,
            transition: 'transform 300ms cubic-bezier(0, 0, 0.2, 1)',
          }}
        >
          <RotateCcwIcon size={24} />
        </Box>
        <Box>
          <Text size="sm" weight="semibold">Chevron & Refresh Icon Kinetics</Text>
          <Text size="xs" color="secondary">
            Current angle: <code>{rotateDeg}°</code>
          </Text>
        </Box>
      </Box>
    </Card>
  );

  // 6. Scale & Elevation Card
  const renderScale = () => (
    <Card
      id="scale"
      variant="bordered"
      style={{
        borderRadius: 16,
        backgroundColor: 'var(--color-surface)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        overflow: 'hidden',
        scrollMarginTop: 80,
      }}
    >
      <Box style={{ padding: '20px 24px', borderBottom: '1px solid var(--color-border-subtle)', backgroundColor: 'var(--color-surface-raised)' }}>
        <Stack direction="row" align="center" gap="sm">
          <Badge variant="primary">Scale</Badge>
          <Text as="h2" variant="heading" size="md" weight="bold">Scale & Elevation (Hover & Press)</Text>
        </Stack>
      </Box>
      <Box style={{ padding: '24px' }}>
        <Text size="sm" color="secondary" style={{ margin: '0 0 16px 0' }}>
          Hover or tap the interactive card below to observe physical elevation lifting and shadow dispersal:
        </Text>
        <Box
          onMouseEnter={() => setScaleHover(true)}
          onMouseLeave={() => setScaleHover(false)}
          style={{
            padding: '24px',
            borderRadius: 12,
            border: '1px solid var(--color-border-subtle)',
            backgroundColor: 'var(--color-surface)',
            transform: scaleHover ? 'scale(1.02) translateY(-4px)' : 'scale(1) translateY(0)',
            boxShadow: scaleHover ? '0 12px 32px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
            transition: 'transform 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Text size="md" weight="bold">Hover Elevation Target</Text>
            <Text size="xs" color="secondary">
              Scale factor: <code>1.02</code> · Elevation: <code>translateY(-4px)</code>
            </Text>
          </Box>
          <Badge variant={scaleHover ? 'primary' : 'default'}>
            {scaleHover ? 'Hover Lift Active' : 'Resting State'}
          </Badge>
        </Box>
      </Box>
    </Card>
  );

  // 7. Slide & Sheets Card
  const renderSlide = () => (
    <Card
      id="slide"
      variant="bordered"
      style={{
        borderRadius: 16,
        backgroundColor: 'var(--color-surface)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        overflow: 'hidden',
        scrollMarginTop: 80,
      }}
    >
      <Box style={{ padding: '20px 24px', borderBottom: '1px solid var(--color-border-subtle)', backgroundColor: 'var(--color-surface-raised)' }}>
        <Stack direction="row" align="center" justify="between">
          <Stack direction="row" align="center" gap="sm">
            <Badge variant="primary">Slide</Badge>
            <Text as="h2" variant="heading" size="md" weight="bold">Slide & Sheets (Drawers & Modals)</Text>
          </Stack>
          <Button variant="secondary" size="sm" onClick={() => setSlideIn(!slideIn)}>
            {slideIn ? 'Slide Out' : 'Slide In'}
          </Button>
        </Stack>
      </Box>
      <Box style={{ padding: '24px' }}>
        <Box
          style={{
            padding: '20px',
            borderRadius: 8,
            border: '1px solid var(--color-border-default)',
            backgroundColor: 'var(--color-surface-raised)',
            transform: slideIn ? 'translateX(0)' : 'translateX(60px)',
            opacity: slideIn ? 1 : 0,
            transition: 'transform 250ms cubic-bezier(0, 0, 0.2, 1), opacity 250ms cubic-bezier(0, 0, 0.2, 1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Text size="sm" weight="semibold">Mobile Bottom Sheet Entry</Text>
            <Text size="xs" color="secondary">Smooth edge-anchored translational sweep.</Text>
          </Box>
          <Badge variant="success">250ms Decel</Badge>
        </Box>
      </Box>
    </Card>
  );

  // 8. Stagger Choreography Card
  const renderStagger = () => (
    <Card
      id="stagger"
      variant="bordered"
      style={{
        borderRadius: 16,
        backgroundColor: 'var(--color-surface)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        overflow: 'hidden',
        scrollMarginTop: 80,
      }}
    >
      <Box style={{ padding: '20px 24px', borderBottom: '1px solid var(--color-border-subtle)', backgroundColor: 'var(--color-surface-raised)' }}>
        <Stack direction="row" align="center" justify="between">
          <Stack direction="row" align="center" gap="sm">
            <Badge variant="primary">Choreography</Badge>
            <Text as="h2" variant="heading" size="md" weight="bold">Stagger Choreography</Text>
          </Stack>
          <Button variant="secondary" size="sm" icon={<LightningIcon size={14} />} onClick={replayStagger}>
            Replay Stagger
          </Button>
        </Stack>
      </Box>
      <Box style={{ padding: '24px' }}>
        <Text size="sm" color="secondary" style={{ margin: '0 0 16px 0' }}>
          Sequential 40ms index delay creates satisfying cascading reveals for menus, lists, and search results:
        </Text>
        <Stack direction="column" gap="xs">
          {['Global Workspace Settings', 'Federated OAuth Providers', 'Zero Trust Device Policies', 'Audit Trail Export'].map(
            (item, idx) => (
              <Box
                key={item}
                style={{
                  padding: '14px 18px',
                  borderRadius: 8,
                  backgroundColor: 'var(--color-surface-raised)',
                  border: '1px solid var(--color-border-subtle)',
                  opacity: staggerPlaying ? 1 : 0,
                  transform: staggerPlaying ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 250ms cubic-bezier(0, 0, 0.2, 1) ${idx * 50}ms, transform 250ms cubic-bezier(0, 0, 0.2, 1) ${idx * 50}ms`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Text size="sm" weight="semibold">{item}</Text>
                <Text size="xs" color="muted">Delay: +{idx * 50}ms</Text>
              </Box>
            )
          )}
        </Stack>
      </Box>
    </Card>
  );

  // 9. Motion Tokens Reference Card
  const renderTokens = () => (
    <Card
      id="tokens"
      variant="bordered"
      style={{
        borderRadius: 16,
        backgroundColor: 'var(--color-surface)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        overflow: 'hidden',
        scrollMarginTop: 80,
      }}
    >
      <Box
        style={{
          padding: '18px 24px',
          backgroundColor: 'var(--color-surface-raised)',
          borderBottom: '1px solid var(--color-border-subtle)',
        }}
      >
        <Text as="h2" variant="heading" size="md" weight="bold">
          CSS Motion Variables Reference
        </Text>
      </Box>
      <Box style={{ overflowX: 'auto' }}>
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
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => copy(`var(${m.token})`)}
                  >
                    {copiedToken === `var(${m.token})` ? 'Copied' : 'Copy'}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Card>
  );

  const RENDER_MAP: Record<string, () => React.ReactNode> = {
    atoms: renderAtoms,
    blur: renderBlur,
    collapse: renderCollapse,
    fade: renderFade,
    rotate: renderRotate,
    scale: renderScale,
    slide: renderSlide,
    stagger: renderStagger,
    tokens: renderTokens,
  };

  const targetId = motionId?.toLowerCase();
  const isSubPage = targetId && targetId !== 'overview' && targetId !== 'all' && RENDER_MAP[targetId];

  // SUB-PAGE: Dedicated Screen for a single motion topic
  if (isSubPage) {
    const meta = MOTION_ITEMS.find((m) => m.id === targetId);
    return (
      <Stack direction="column" gap="lg" style={{ maxWidth: 1040, margin: '0 auto', paddingBottom: 64 }}>
        <Stack direction="row" align="center" justify="between" wrap gap="sm">
          <Stack direction="row" align="center" gap="xs">
            <Button size="sm" variant="secondary" onClick={() => navigate('/motion')}>
              ← Motion Overview
            </Button>
            <Text size="xs" color="muted">/</Text>
            <Badge variant="primary" size="sm">{meta?.category || 'Motion'}</Badge>
            <Text size="sm" weight="bold">{meta?.title}</Text>
          </Stack>
        </Stack>

        {RENDER_MAP[targetId]()}
      </Stack>
    );
  }

  // OVERVIEW PAGE: Master Index with Hero Card, Simulator, and Catalog Grid
  return (
    <Stack direction="column" gap="xl" style={{ maxWidth: 1040, margin: '0 auto', paddingBottom: 64 }}>
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
        <Stack direction="row" align="center" gap="sm" style={{ marginBottom: 10 }}>
          <Badge variant="primary">Design Tokens</Badge>
          <Text size="xs" color="muted" weight="medium">
            Motion & Choreography Primitives
          </Text>
        </Stack>
        <Text
          as="h1"
          variant="heading"
          size="xl"
          weight="bold"
          style={{ fontSize: 34, letterSpacing: '-0.025em', margin: '0 0 12px 0' }}
        >
          Motion, Easing & Effects
        </Text>
        <Text size="md" color="secondary" style={{ lineHeight: 1.6, maxWidth: 780, margin: 0 }}>
          Spectra UI motion is subtle, swift, and purposeful. It provides natural spatial continuity without distracting skeuomorphic bounce. Supports automatic <code>prefers-reduced-motion</code> overrides.
        </Text>
      </Card>

      {/* 2. Interactive Kinetic Simulator */}
      {renderAtoms()}

      {/* 3. Catalog Grid of Dedicated Motion Pages */}
      <Card
        variant="bordered"
        style={{
          padding: 28,
          borderRadius: 16,
          backgroundColor: 'var(--color-surface)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        }}
      >
        <Text as="h2" variant="heading" size="lg" weight="bold" style={{ margin: '0 0 6px 0' }}>
          Motion Primitives Catalog
        </Text>
        <Text size="sm" color="secondary" style={{ margin: '0 0 20px 0' }}>
          Select any motion atom below to open its dedicated sandbox screen with state controls, easing curves, and live code examples.
        </Text>
        <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
          {MOTION_ITEMS.filter((m) => m.id !== 'atoms').map((item) => (
            <Card
              key={item.id}
              variant="bordered"
              style={{
                padding: '20px',
                borderRadius: 12,
                backgroundColor: 'var(--color-surface-raised)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 14,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onClick={() => navigate(`/motion/${item.id}`)}
            >
              <Stack direction="column" gap="xs">
                <Stack direction="row" justify="between" align="center">
                  <Badge variant="primary" size="sm">{item.category}</Badge>
                </Stack>
                <Text size="md" weight="bold" color="primary">{item.title}</Text>
                <Text size="xs" color="secondary" style={{ lineHeight: 1.5 }}>{item.desc}</Text>
              </Stack>
              <Button size="sm" variant="secondary" onClick={() => navigate(`/motion/${item.id}`)}>
                Open Sandbox →
              </Button>
            </Card>
          ))}
        </Box>
      </Card>
    </Stack>
  );
};
