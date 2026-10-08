import { describe, it, expect } from 'vitest';
import React from 'react';
import { LiveIndicator } from './components/feedback/LiveIndicator';

describe('LiveIndicator (React Native)', () => {
  it('instantiates LiveIndicator element with default props', () => {
    const element = React.createElement(LiveIndicator, {});
    expect(element).toBeDefined();
    expect(element.type).toBe(LiveIndicator);
  });

  it('instantiates with custom status and variant', () => {
    const element = React.createElement(LiveIndicator, {
      variant: 'beacon',
      status: 'busy',
      label: 'RECORDING',
    });
    expect(element.props.variant).toBe('beacon');
    expect(element.props.status).toBe('busy');
    expect(element.props.label).toBe('RECORDING');
  });

  it('supports dot-only mode with null label', () => {
    const element = React.createElement(LiveIndicator, {
      label: null,
    });
    expect(element.props.label).toBeNull();
  });
});
