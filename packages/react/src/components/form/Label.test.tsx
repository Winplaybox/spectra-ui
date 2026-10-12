// packages/react/src/components/form/Label.test.tsx
import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';
import { InfoLabel } from './InfoLabel';

describe('Label & InfoLabel Components', () => {
  it('renders standard Label with htmlFor and text', () => {
    render(<Label htmlFor="test-input">Username</Label>);
    const label = screen.getByText('Username');
    expect(label).toBeInTheDocument();
    expect(label.closest('label')).toHaveAttribute('for', 'test-input');
  });

  it('renders accessible required indicator when required is true', () => {
    render(<Label htmlFor="email-input" required>Email Address</Label>);
    const asterisk = screen.getByText('*');
    expect(asterisk).toBeInTheDocument();
    expect(asterisk).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders InfoLabel with authentic info trigger button and accessible label', () => {
    render(
      <InfoLabel
        htmlFor="region-select"
        info="AWS Cloud region deployment target"
        required
      >
        Deployment Region
      </InfoLabel>
    );

    expect(screen.getByText('Deployment Region')).toBeInTheDocument();
    expect(screen.getByText('*')).toHaveAttribute('aria-hidden', 'true');

    const infoBtn = screen.getByRole('button', { name: /more information/i });
    expect(infoBtn).toBeInTheDocument();
    expect(infoBtn).toHaveAttribute('type', 'button');
  });

  it('applies disabled state to Label and InfoLabel', () => {
    render(
      <InfoLabel htmlFor="disabled-input" disabled info="Help text">
        Disabled Field
      </InfoLabel>
    );

    const infoBtn = screen.getByRole('button', { name: /more information/i });
    expect(infoBtn).toBeDisabled();
  });
});
