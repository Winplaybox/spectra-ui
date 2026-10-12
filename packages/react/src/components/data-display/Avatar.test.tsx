import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Avatar } from './Avatar';
import { AvatarGroup } from './AvatarGroup';
import { SettingsIcon } from '@winplaybox/icons';

describe('Avatar', () => {
  it('renders initials computed from name', () => {
    render(<Avatar name="Josef Müller-Brockmann" />);
    expect(screen.getByText('JM')).toBeInTheDocument();
  });

  it('renders single word name with two letters', () => {
    render(<Avatar name="Spectra" />);
    expect(screen.getByText('SP')).toBeInTheDocument();
  });

  it('honors explicit initials prop override', () => {
    render(<Avatar name="John Doe" initials="JD2" />);
    expect(screen.getByText('JD2')).toBeInTheDocument();
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

  it('renders status dot with out-of-office modifier', () => {
    const { container } = render(<Avatar name="Alice" status="busy" outOfOffice />);
    const statusDot = container.querySelector('[data-status="busy"]');
    expect(statusDot).toBeInTheDocument();
  });

  it('supports square shape', () => {
    const { container } = render(<Avatar name="Square User" shape="square" />);
    expect(container.firstChild).toHaveClass(/shapeSquare/);
  });

  it('supports active ring halo', () => {
    const { container } = render(<Avatar name="Active User" active="active" activeAppearance="ring" />);
    expect(container.firstChild).toHaveClass(/activeRing/);
  });

  it('renders custom icon when no name or image provided', () => {
    render(<Avatar icon={<SettingsIcon data-testid="settings-icon" />} />);
    expect(screen.getByTestId('settings-icon')).toBeInTheDocument();
  });

  it('renders colorful hash background when color="colorful"', () => {
    const { container } = render(<Avatar name="Colorful Person" color="colorful" />);
    const inner = container.querySelector('[role="img"] > div') as HTMLElement;
    expect(inner.style.backgroundColor).toBeTruthy();
  });

  it('renders AvatarGroup with overflow indicator', () => {
    render(
      <AvatarGroup max={2}>
        <Avatar name="User One" />
        <Avatar name="User Two" />
        <Avatar name="User Three" />
        <Avatar name="User Four" />
      </AvatarGroup>
    );

    expect(screen.getByText('UO')).toBeInTheDocument();
    expect(screen.getByText('UT')).toBeInTheDocument();
    expect(screen.getByText('+2')).toBeInTheDocument();
  });
});
