import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Avatar } from './Avatar';
import { AvatarGroup } from './AvatarGroup';
import { SettingsIcon, GlobeIcon, BellIcon } from '@winplaybox/icons';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    name: 'Josef Müller-Brockmann',
    size: 40,
  },
};

export const SizingScale: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        {[16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128].map((size) => (
          <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Avatar size={size as any} name={`Size ${size}`} />
            <span style={{ fontSize: '11px', color: '#71717a' }}>{size}px</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <Avatar shape="circular" size={48} name="Circular User" />
        <span style={{ fontSize: '12px', color: '#71717a' }}>Circular (Default)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <Avatar shape="square" size={48} name="Square User" />
        <span style={{ fontSize: '12px', color: '#71717a' }}>Square</span>
      </div>
    </div>
  ),
};

export const StatusAndPresence: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <Avatar name="Sarah Connor" status="available" size={48} />
        <span style={{ fontSize: '11px', color: '#71717a' }}>Available</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <Avatar name="John Doe" status="busy" size={48} />
        <span style={{ fontSize: '11px', color: '#71717a' }}>Busy</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <Avatar name="Alex Vance" status="away" size={48} />
        <span style={{ fontSize: '11px', color: '#71717a' }}>Away</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <Avatar name="David Miller" status="dnd" size={48} />
        <span style={{ fontSize: '11px', color: '#71717a' }}>Do Not Disturb</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <Avatar name="Elena Rostova" status="out-of-office" size={48} />
        <span style={{ fontSize: '11px', color: '#71717a' }}>Out of Office</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <Avatar name="Robin Hood" status="offline" size={48} />
        <span style={{ fontSize: '11px', color: '#71717a' }}>Offline</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <Avatar name="Alice OOF" status="available" outOfOffice size={48} />
        <span style={{ fontSize: '11px', color: '#71717a' }}>Available + OOF</span>
      </div>
    </div>
  ),
};

export const ColorfulPalette: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      {['Alice Sky', 'Bob Cranberry', 'Carol Gold', 'David Forest', 'Eva Purple', 'Frank Pink', 'Grace Indigo', 'Henry Teal'].map(
        (name) => (
          <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Avatar name={name} color="colorful" size={48} />
            <span style={{ fontSize: '11px', color: '#71717a' }}>{name.split(' ')[1]}</span>
          </div>
        )
      )}
    </div>
  ),
};

export const ActiveHalo: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <Avatar name="Active Speaker" size={48} active="active" activeAppearance="ring" />
        <span style={{ fontSize: '11px', color: '#71717a' }}>Active (Ring)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <Avatar name="Speaking Glow" size={48} active="active" activeAppearance="ring-shadow" />
        <span style={{ fontSize: '11px', color: '#71717a' }}>Active (Ring + Shadow)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <Avatar name="Inactive User" size={48} active="inactive" />
        <span style={{ fontSize: '11px', color: '#71717a' }}>Inactive</span>
      </div>
    </div>
  ),
};

export const CustomFallbackAndBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Avatar icon={<GlobeIcon size={24} />} size={48} />
      <Avatar icon={<SettingsIcon size={24} />} size={48} shape="square" />
      <Avatar
        name="Elena Rostova"
        size={48}
        badge={
          <span
            style={{
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              backgroundColor: '#2563EB',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #ffffff',
            }}
          >
            <BellIcon size={10} color="#ffffff" />
          </span>
        }
      />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '13px', color: '#71717a' }}>Stack Layout (Max 4)</h4>
        <AvatarGroup max={4} size={40}>
          <Avatar name="Sarah Connor" color="colorful" />
          <Avatar name="John Doe" color="colorful" />
          <Avatar name="Alex Vance" color="colorful" />
          <Avatar name="David Miller" color="colorful" />
          <Avatar name="Elena Rostova" color="colorful" />
          <Avatar name="Sam Wilson" color="colorful" />
        </AvatarGroup>
      </div>

      <div>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '13px', color: '#71717a' }}>Spread Layout</h4>
        <AvatarGroup max={5} size={36} layout="spread">
          <Avatar name="Sarah Connor" color="colorful" />
          <Avatar name="John Doe" color="colorful" />
          <Avatar name="Alex Vance" color="colorful" />
          <Avatar name="David Miller" color="colorful" />
        </AvatarGroup>
      </div>
    </div>
  ),
};
