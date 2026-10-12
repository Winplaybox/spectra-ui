import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from './Accordion';
import { GlobeIcon, SettingsIcon, UserIcon } from '@winplaybox/icons';

const meta: Meta<typeof Accordion> = {
  title: 'Data Display/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <Accordion defaultOpenItems={['item-1']}>
        <AccordionItem value="item-1">
          <AccordionHeader>How does Spectra UI handle platform rendering?</AccordionHeader>
          <AccordionPanel>
            Spectra UI uses authentic platform-native primitives rather than Web DOM mocks. On Web,
            it uses React DOM with semantic HTML and zero-runtime CSS.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionHeader>Is W3C WAI-ARIA supported out-of-the-box?</AccordionHeader>
          <AccordionPanel>
            Yes. Accordion headers carry full aria-expanded and aria-controls attributes, panels carry
            role="region", and header roving arrow keyboard navigation is built in.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionHeader>Can I expand multiple panels simultaneously?</AccordionHeader>
          <AccordionPanel>
            Yes, simply pass the multiple prop to allow multiple panels to remain expanded at the same
            time.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '600px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#616161' }}>Small (32px)</h4>
        <Accordion size="small" defaultOpenItems={['sm-1']}>
          <AccordionItem value="sm-1">
            <AccordionHeader>Compact Density Item</AccordionHeader>
            <AccordionPanel>Compact panel padding for dense toolbars or sidebars.</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#616161' }}>Medium (40px - Default)</h4>
        <Accordion size="medium" defaultOpenItems={['md-1']}>
          <AccordionItem value="md-1">
            <AccordionHeader>Standard Density Item</AccordionHeader>
            <AccordionPanel>Standard density balanced for content hierarchy and readability.</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#616161' }}>Large (48px)</h4>
        <Accordion size="large" defaultOpenItems={['lg-1']}>
          <AccordionItem value="lg-1">
            <AccordionHeader>Spacious Header Item</AccordionHeader>
            <AccordionPanel>Prominent spacing suitable for major configuration steps.</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#616161' }}>Extra Large (56px)</h4>
        <Accordion size="extra-large" defaultOpenItems={['xl-1']}>
          <AccordionItem value="xl-1">
            <AccordionHeader>Hero / FAQ Display Item</AccordionHeader>
            <AccordionPanel>Largest scale for high-visibility marketing sections and hero FAQs.</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};

export const IconPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '600px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#616161' }}>Start Position (Chevron Left)</h4>
        <Accordion expandIconPosition="start" defaultOpenItems={['start-1']}>
          <AccordionItem value="start-1">
            <AccordionHeader>Expand Icon at Start</AccordionHeader>
            <AccordionPanel>Rotates 90 degrees smoothly when expanded.</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#616161' }}>End Position (Chevron Right)</h4>
        <Accordion expandIconPosition="end" defaultOpenItems={['end-1']}>
          <AccordionItem value="end-1">
            <AccordionHeader>Expand Icon at End</AccordionHeader>
            <AccordionPanel>Rotates 180 degrees smoothly when expanded.</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};

export const WithContextualIconsAndActions: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <Accordion defaultOpenItems={['item-profile']}>
        <AccordionItem value="item-profile">
          <AccordionHeader
            icon={<UserIcon size={18} />}
            inlineAction={
              <span
                style={{
                  fontSize: '11px',
                  padding: '2px 8px',
                  borderRadius: '10px',
                  background: '#e0f2fe',
                  color: '#0369a1',
                  fontWeight: 600,
                }}
              >
                Verified
              </span>
            }
          >
            User Profile
          </AccordionHeader>
          <AccordionPanel>Manage your user credentials, avatar, and personal settings.</AccordionPanel>
        </AccordionItem>

        <AccordionItem value="item-network">
          <AccordionHeader
            icon={<GlobeIcon size={18} />}
            inlineAction={
              <span
                style={{
                  fontSize: '11px',
                  padding: '2px 8px',
                  borderRadius: '10px',
                  background: '#dcfce7',
                  color: '#15803d',
                  fontWeight: 600,
                }}
              >
                Active
              </span>
            }
          >
            Network Connectivity
          </AccordionHeader>
          <AccordionPanel>Inspect latency, proxy settings, and regional cluster routing.</AccordionPanel>
        </AccordionItem>

        <AccordionItem value="item-settings">
          <AccordionHeader icon={<SettingsIcon size={18} />}>System Preferences</AccordionHeader>
          <AccordionPanel>Configure hardware acceleration, sound notifications, and caching.</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
