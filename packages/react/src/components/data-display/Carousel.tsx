// packages/react/src/components/data-display/Carousel.tsx
import React, { forwardRef, useState } from 'react';
import { ChevronDownIcon } from '@winplaybox/icons';

export interface CarouselProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode;
  autoPlay?: boolean;
  interval?: number;
}

export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  ({ children, autoPlay = false, interval = 5000, style, ...rest }, ref) => {
    const items = React.Children.toArray(children);
    const [currentIndex, setCurrentIndex] = useState(0);

    const prev = () => {
      setCurrentIndex((i) => (i === 0 ? Math.max(0, items.length - 1) : i - 1));
    };

    const next = () => {
      setCurrentIndex((i) => (i === items.length - 1 ? 0 : i + 1));
    };

    return (
      <div
        ref={ref}
        role="region"
        aria-roledescription="carousel"
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 'var(--radius-component-lg, 12px)',
          border: '1px solid var(--color-border-default)',
          backgroundColor: 'var(--color-surface)',
          ...style,
        }}
        {...rest}
      >
        <div style={{ padding: 24, minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {items[currentIndex] || <div>No items</div>}
        </div>

        {items.length > 1 && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 16px',
              borderTop: '1px solid var(--color-border-subtle)',
              backgroundColor: 'var(--color-surface-raised)',
            }}
          >
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px 12px',
                borderRadius: 4,
                border: '1px solid var(--color-border-default)',
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-text-primary)',
                cursor: 'pointer',
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              Previous
            </button>

            <CarouselNav
              total={items.length}
              current={currentIndex}
              onSelect={setCurrentIndex}
            />

            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px 12px',
                borderRadius: 4,
                border: '1px solid var(--color-border-default)',
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-text-primary)',
                cursor: 'pointer',
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              Next
            </button>
          </div>
        )}
      </div>
    );
  }
);
Carousel.displayName = 'Carousel';

export interface CarouselNavProps {
  total: number;
  current: number;
  onSelect?: (index: number) => void;
  style?: React.CSSProperties;
}

export const CarouselNav: React.FC<CarouselNavProps> = ({
  total,
  current,
  onSelect,
  style,
}) => {
  return (
    <div
      role="tablist"
      aria-label="Slides"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        ...style,
      }}
    >
      {Array.from({ length: total }).map((_, idx) => {
        const isActive = idx === current;
        return (
          <button
            key={idx}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => onSelect?.(idx)}
            style={{
              width: isActive ? 20 : 8,
              height: 8,
              borderRadius: 4,
              border: 'none',
              backgroundColor: isActive
                ? 'var(--color-action-primary, #007FFF)'
                : 'var(--color-border-default)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              padding: 0,
            }}
          />
        );
      })}
    </div>
  );
};
CarouselNav.displayName = 'CarouselNav';
