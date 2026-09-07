import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders initials computed from name', () => {
    render(<Avatar name="Josef Müller-Brockmann" />);
    expect(screen.getByText('JM')).toBeInTheDocument();
  });

  it('renders single word name with two letters', () => {
    render(<Avatar name="Spectra" />);
    expect(screen.getByText('SP')).toBeInTheDocument();
  });

  it('renders image when src provided', () => {
    render(<Avatar src="https://example.com/photo.jpg" alt="User portrait" />);
    const img = screen.getByRole('img', { name: 'User portrait' });
    expect(img).toBeInTheDocument();
  });

  it('falls back to initials when image fails to load', () => {
    render(<Avatar src="invalid-url.jpg" name="Alice Smith" />);
    const img = screen.getByRole('img');
    const imageElement = img.querySelector('img');
    if (imageElement) {
      fireEvent.error(imageElement);
    }
    expect(screen.getByText('AS')).toBeInTheDocument();
  });

  it('renders status dot when specified', () => {
    const { container } = render(<Avatar name="Bob Vance" status="online" />);
    expect(container.querySelector('[data-status="online"]')).toBeInTheDocument();
  });
});
