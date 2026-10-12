import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbButton,
  BreadcrumbDivider,
} from './Breadcrumb';
import {
  HomeIcon,
  FolderIcon,
  FileTextIcon,
  SettingsIcon,
} from '@winplaybox/icons';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbButton href="#home">Home</BreadcrumbButton>
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem>
        <BreadcrumbButton href="#design">Design System</BreadcrumbButton>
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem>
        <BreadcrumbButton href="#components">Components</BreadcrumbButton>
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem current>
        <BreadcrumbButton current>Breadcrumb</BreadcrumbButton>
      </BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <span style={{ fontSize: '11px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Small (12px)
        </span>
        <Breadcrumb size="small">
          <BreadcrumbItem>
            <BreadcrumbButton href="#files">Files</BreadcrumbButton>
          </BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem>
            <BreadcrumbButton href="#projects">Projects</BreadcrumbButton>
          </BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem current>
            <BreadcrumbButton current>Specs.pdf</BreadcrumbButton>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div>
        <span style={{ fontSize: '11px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Medium (14px — Default)
        </span>
        <Breadcrumb size="medium">
          <BreadcrumbItem>
            <BreadcrumbButton href="#files">Files</BreadcrumbButton>
          </BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem>
            <BreadcrumbButton href="#projects">Projects</BreadcrumbButton>
          </BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem current>
            <BreadcrumbButton current>Specs.pdf</BreadcrumbButton>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div>
        <span style={{ fontSize: '11px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Large (16px)
        </span>
        <Breadcrumb size="large">
          <BreadcrumbItem>
            <BreadcrumbButton href="#files">Files</BreadcrumbButton>
          </BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem>
            <BreadcrumbButton href="#projects">Projects</BreadcrumbButton>
          </BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem current>
            <BreadcrumbButton current>Specs.pdf</BreadcrumbButton>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  ),
};

export const Dividers: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <p style={{ margin: '0 0 6px 0', fontSize: '13px', fontWeight: 600 }}>Chevron Divider (Default)</p>
        <Breadcrumb dividerType="chevron">
          <BreadcrumbItem>
            <BreadcrumbButton href="#root">Storage</BreadcrumbButton>
          </BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem>
            <BreadcrumbButton href="#media">Media</BreadcrumbButton>
          </BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem current>
            <BreadcrumbButton current>Images</BreadcrumbButton>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div>
        <p style={{ margin: '0 0 6px 0', fontSize: '13px', fontWeight: 600 }}>Slash Divider</p>
        <Breadcrumb dividerType="slash">
          <BreadcrumbItem>
            <BreadcrumbButton href="#root">Storage</BreadcrumbButton>
          </BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem>
            <BreadcrumbButton href="#media">Media</BreadcrumbButton>
          </BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem current>
            <BreadcrumbButton current>Images</BreadcrumbButton>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbButton href="#root" icon={<HomeIcon size={14} />}>
          Home
        </BreadcrumbButton>
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem>
        <BreadcrumbButton href="#docs" icon={<FolderIcon size={14} />}>
          Documents
        </BreadcrumbButton>
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem>
        <BreadcrumbButton href="#reports" icon={<FolderIcon size={14} />}>
          Reports
        </BreadcrumbButton>
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem current>
        <BreadcrumbButton current icon={<FileTextIcon size={14} />}>
          Q4_Summary.docx
        </BreadcrumbButton>
      </BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const OverflowMenu: Story = {
  render: () => {
    const items = [
      { label: 'Workspaces', href: '#workspaces', icon: <HomeIcon size={14} /> },
      { label: 'Spectra UI', href: '#spectra' },
      { label: 'Packages', href: '#pkgs' },
      { label: 'React Suite', href: '#react' },
      { label: 'Navigation', href: '#nav' },
      { label: 'Breadcrumb Component', isCurrent: true },
    ];

    return (
      <div style={{ maxWidth: '420px', border: '1px solid #eee', padding: '16px', borderRadius: '8px' }}>
        <p style={{ margin: '0 0 10px 0', fontSize: '13px', color: '#666' }}>
          Constrained container (collapses to max 3 items with overflow popup menu):
        </p>
        <Breadcrumb items={items} maxItems={3} />
      </div>
    );
  },
};

export const NonInteractiveFilePath: Story = {
  render: () => (
    <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
      <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: 600, color: '#475569' }}>
        Log File Destination (Non-interactive wayfinding pattern)
      </p>
      <Breadcrumb dividerType="slash">
        <BreadcrumbItem>
          <span style={{ color: '#64748b', fontSize: '13px', fontFamily: 'monospace' }}>var</span>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem>
          <span style={{ color: '#64748b', fontSize: '13px', fontFamily: 'monospace' }}>log</span>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem>
          <span style={{ color: '#64748b', fontSize: '13px', fontFamily: 'monospace' }}>nginx</span>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem current>
          <span style={{ color: '#0f172a', fontWeight: 600, fontSize: '13px', fontFamily: 'monospace' }}>
            access.log
          </span>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  ),
};

export const TruncatedWithTooltip: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbButton href="#home">Home</BreadcrumbButton>
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem>
        <BreadcrumbButton
          href="#dept"
          truncate
          maxWidth={120}
          tooltip="Enterprise Global Infrastructure and Engineering Department"
        >
          Enterprise Global Infrastructure and Engineering Department
        </BreadcrumbButton>
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem current>
        <BreadcrumbButton current>Server Fleet</BreadcrumbButton>
      </BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const DisabledAndFocusable: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbButton href="#home">Home</BreadcrumbButton>
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem>
        <BreadcrumbButton disabledFocusable tooltip="Category container with no dedicated page">
          Administration
        </BreadcrumbButton>
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem>
        <BreadcrumbButton href="#security">Security</BreadcrumbButton>
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem current>
        <BreadcrumbButton current icon={<SettingsIcon size={14} />}>
          Credentials
        </BreadcrumbButton>
      </BreadcrumbItem>
    </Breadcrumb>
  ),
};
