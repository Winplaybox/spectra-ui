import React, { useState, useEffect } from 'react';
import {
  Button,
  TextInput,
  Select,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  Badge,
  Card,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Dialog,
  Tooltip,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  Alert,
  Spinner,
  Skeleton,
  Divider,
  Chip,
  Breadcrumbs,
  useColorScheme,
} from '@spectra/react';
import { getComponentReleaseVersion } from '../../data/versionReleaseData';
import { useVersion } from '../../context/VersionContext';
import {
  ExternalLinkIcon,
  CheckIcon,
  CloseIcon,
  CopyIcon,
  SearchIcon,
  AlertCircleIcon,
  InfoIcon,
  UserIcon,
  ChevronDownIcon,
  PlusIcon,
  MinusIcon,
  GlobeIcon,
  SmartphoneIcon,
  ComponentIcon,
} from '@spectra/icons';
import { openInCodeSandbox, openInStackBlitz, openInNewTab, toJavaScript } from '../../utils/sandbox';
import { compileAndRender } from '../../utils/liveCompiler';
import { EditableCodeBlock } from './EditableCodeBlock';
import { MobileSimulator } from './MobileSimulator';
import { PlatformChassisViewer } from './PlatformChassisViewer';
import { PlatformIcon } from './PlatformIcon';
import { usePlatform } from '../../context/PlatformContext';
import { Platform } from '../../data/platformData';
import { ComponentMetadata, COMPONENTS_DATA } from '../../data/componentsData';
import { ComponentVariantsShowcase, COMPONENT_VARIANTS_MAP } from './ComponentVariantsShowcase';
import { ComponentApiSection } from './ComponentApiSection';
import { NativeSponsorAd } from './NativeSponsorAd';

// Dynamic Component Resource Pill Icons (Image 2 Benchmark - Zero Emojis)
const MarkdownPillIcon: React.FC<{ size?: number }> = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" style={{ flexShrink: 0, color: 'var(--color-text-secondary)' }}>
    <path fillRule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15V4.15C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.9 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z" />
  </svg>
);

const FeedbackPillIcon: React.FC<{ size?: number }> = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#007FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const PackagePillIcon: React.FC<{ size?: number }> = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const GitHubPillIcon: React.FC<{ size?: number }> = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0, color: 'var(--color-text-secondary)' }}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const W3CPillIcon: React.FC<{ size?: number }> = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#005A9C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const SectionCommentIcon: React.FC<{ size?: number; style?: React.CSSProperties }> = ({ size = 14, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const ThumbsUpIcon: React.FC<{ size?: number; style?: React.CSSProperties }> = ({ size = 15, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
  </svg>
);

const ThumbsDownIcon: React.FC<{ size?: number; style?: React.CSSProperties }> = ({ size = 15, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3" />
  </svg>
);

const InfoHandIcon: React.FC<{ size?: number; style?: React.CSSProperties }> = ({ size = 18, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const EditPageIcon: React.FC<{ size?: number; style?: React.CSSProperties }> = ({ size = 14, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

// Dynamic Resource Data Mappings
const COMPONENT_BUNDLE_SIZES: Record<string, string> = {
  button: '< 1.8 kB',
  'text-input': '< 2.4 kB',
  select: '< 3.1 kB',
  checkbox: '< 1.4 kB',
  radio: '< 1.5 kB',
  switch: '< 1.6 kB',
  accordion: '< 2.8 kB',
  avatar: '< 1.2 kB',
  badge: '< 1.1 kB',
  chip: '< 1.5 kB',
  list: '< 1.9 kB',
  card: '< 1.3 kB',
  dialog: '< 3.4 kB',
  tooltip: '< 2.6 kB',
  alert: '< 1.7 kB',
  spinner: '< 0.9 kB',
  skeleton: '< 1.1 kB',
  breadcrumbs: '< 1.4 kB',
  tabs: '< 2.9 kB',
  divider: '< 0.7 kB',
};

const COMPONENT_WAI_ARIA: Record<string, string> = {
  button: 'https://www.w3.org/WAI/ARIA/apg/patterns/button/',
  'text-input': 'https://www.w3.org/WAI/ARIA/apg/patterns/textbox/',
  select: 'https://www.w3.org/WAI/ARIA/apg/patterns/combobox/',
  checkbox: 'https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/',
  radio: 'https://www.w3.org/WAI/ARIA/apg/patterns/radio-button/',
  switch: 'https://www.w3.org/WAI/ARIA/apg/patterns/switch/',
  accordion: 'https://www.w3.org/WAI/ARIA/apg/patterns/accordion/',
  dialog: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/',
  tooltip: 'https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/',
  alert: 'https://www.w3.org/WAI/ARIA/apg/patterns/alert/',
  breadcrumbs: 'https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/',
  tabs: 'https://www.w3.org/WAI/ARIA/apg/patterns/tabs/',
  list: 'https://www.w3.org/WAI/ARIA/apg/patterns/listbox/',
};

interface ComponentDocPageProps {
  componentId: string;
}

export const ComponentDocPage: React.FC<ComponentDocPageProps> = ({ componentId }) => {
  const meta = COMPONENTS_DATA[componentId] || COMPONENTS_DATA['button'];
  const releaseInfo = getComponentReleaseVersion(meta.id);
  const { currentVersion, getGitHubUrl } = useVersion();
  const { currentPlatform, metadata: platformMeta } = usePlatform();
  const { colorScheme } = useColorScheme();
  const platformMode = currentPlatform;
  const [isMarkdownModalOpen, setIsMarkdownModalOpen] = useState(false);
  const [markdownCopied, setMarkdownCopied] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [playgroundLang, setPlaygroundLang] = useState<'ts' | 'js'>('ts');
  const [customPlaygroundCodeTs, setCustomPlaygroundCodeTs] = useState<string | null>(null);
  const [customPlaygroundCodeJs, setCustomPlaygroundCodeJs] = useState<string | null>(null);
  const customPlaygroundCode = playgroundLang === 'ts' ? customPlaygroundCodeTs : customPlaygroundCodeJs;
  const [copied, setCopied] = useState(false);
  const [activeResourceModal, setActiveResourceModal] = useState<'react' | 'native' | 'tokens' | null>(null);
  const [activeSection, setActiveSection] = useState<string>('playground');
  const variants = COMPONENT_VARIANTS_MAP[meta.id] || [];

  // Feedback & Edit State (MUI Image 1 Benchmark)
  const [feedbackFormOpen, setFeedbackFormOpen] = useState(false);
  const [feedbackSection, setFeedbackSection] = useState<string>('Overview');
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackRating, setFeedbackRating] = useState<'positive' | 'negative' | null>(null);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const openFeedbackForSection = (sectionName: string) => {
    setFeedbackSection(sectionName);
    setFeedbackFormOpen(true);
    setTimeout(() => {
      const el = document.getElementById('page-feedback');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 40);
  };

  useEffect(() => {
    const handleSectionFeedback = (e: any) => {
      if (e?.detail) {
        openFeedbackForSection(e.detail);
      }
    };
    window.addEventListener('spectra:section-feedback', handleSectionFeedback as any);
    return () => window.removeEventListener('spectra:section-feedback', handleSectionFeedback as any);
  }, []);

  // Active scrollspy tracking for Table of Contents
  useEffect(() => {
    const container = document.getElementById('main-scroll-container');
    if (!container) return;

    const sectionIds = [
      'playground',
      'usage-variants',
      ...variants.map((v) => v.id),
      'resources',
      'anatomy',
      'motion',
      'guidelines',
      'keyboard',
      'props',
      'api',
      'page-feedback',
    ];

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      let currentActive = 'playground';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const relativeTop = rect.top - containerRect.top;
          if (relativeTop <= 160) {
            currentActive = id;
          }
        }
      }
      setActiveSection(currentActive);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => container.removeEventListener('scroll', handleScroll);
  }, [variants, componentId]);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const container = document.getElementById('main-scroll-container');
    const el = document.getElementById(id);
    if (container && el) {
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const targetScrollTop = container.scrollTop + (elRect.top - containerRect.top) - 24;
      container.scrollTo({ top: targetScrollTop, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Smooth scroll to in-page anchor when URL hash is present or changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [componentId]);

  // Dynamic interactive demo state
  const [btnVariant, setBtnVariant] = useState<'primary' | 'secondary' | 'tertiary' | 'danger'>('primary');
  const [btnSize, setBtnSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [btnLoading, setBtnLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [switchChecked, setSwitchChecked] = useState(true);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option-1');
  const [avatarStatus, setAvatarStatus] = useState<'online' | 'busy' | 'away'>('online');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [tabsVariant, setTabsVariant] = useState<'underline' | 'pills'>('underline');
  const [activeTab, setActiveTab] = useState('tab-1');

  // Generate clean JSX snippet according to active demo
  const getRawSnippet = (): string => {
    switch (meta.id) {
      case 'accordion':
        return `import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@spectra/react';
import type { AccordionProps } from '@spectra/react';

export default function AccordionDemo(): JSX.Element {
  return (
    <Accordion defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionHeader>Accordion Header 1</AccordionHeader>
        <AccordionPanel>
          Accordions decrease cognitive load by letting people choose which sections
          of content they see, like questions in an FAQ.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionHeader>Accordion Header 2</AccordionHeader>
        <AccordionPanel>
          Never put information that is required for the current task inside an accordion.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionHeader>Accordion Header 3</AccordionHeader>
        <AccordionPanel>
          Consider a treatment that gives it more prominence when critical.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}`;
      case 'button':
        return `import React from 'react';
import { Button } from '@spectra/react';
import type { ButtonProps } from '@spectra/react';
import { CheckIcon } from '@spectra/icons';

export default function ButtonDemo(): JSX.Element {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log('Action triggered', e);
  };

  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button
        variant="${btnVariant}"
        size="${btnSize}"
        isLoading={${btnLoading}}
        icon={<CheckIcon size={16} />}
        onClick={handleClick}
      >
        ${btnVariant.charAt(0).toUpperCase() + btnVariant.slice(1)} Action
      </Button>
      <Button variant="secondary" size="${btnSize}">
        Cancel
      </Button>
    </div>
  );
}`;
      case 'text-input':
        return `import React, { useState } from 'react';
import { TextInput } from '@spectra/react';
import type { TextInputProps } from '@spectra/react';
import { SearchIcon } from '@spectra/icons';

export default function TextInputDemo(): JSX.Element {
  const [query, setQuery] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  return (
    <TextInput
      label="Search Database"
      placeholder="Type query..."
      description="Enter at least 3 characters"
      value={query}
      onChange={handleChange}
      leftIcon={<SearchIcon size={16} />}
    />
  );
}`;
      case 'select':
        return `import React, { useState } from 'react';
import { Select } from '@spectra/react';
import type { SelectOption } from '@spectra/react';

const REGIONS: SelectOption[] = [
  { value: 'us-east-1', label: 'US East (N. Virginia)' },
  { value: 'eu-west-1', label: 'Europe (Ireland)' },
  { value: 'ap-south-1', label: 'Asia Pacific (Mumbai)' },
];

export default function SelectDemo(): JSX.Element {
  const [region, setRegion] = useState<string>('us-east-1');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setRegion(e.target.value);
  };

  return (
    <Select
      label="Select Cloud Region"
      value={region}
      onChange={handleChange}
      options={REGIONS}
    />
  );
}`;
      case 'checkbox':
        return `import React, { useState } from 'react';
import { Checkbox } from '@spectra/react';
import type { CheckboxProps } from '@spectra/react';

export default function CheckboxDemo(): JSX.Element {
  const [checked, setChecked] = useState<boolean>(${checkboxChecked});

  const handleToggle = (checked: boolean): void => {
    setChecked(checked);
  };

  return (
    <Checkbox
      label="Accept Terms & Security Policy"
      description="You must accept to initialize workspace telemetry"
      checked={checked}
      onChange={handleToggle}
    />
  );
}`;
      case 'radio':
        return `import React, { useState } from 'react';
import { RadioGroup, Radio } from '@spectra/react';
import type { RadioGroupProps } from '@spectra/react';

export default function RadioDemo(): JSX.Element {
  const [tier, setTier] = useState<string>('${radioValue}');

  const handleTierChange = (value: string): void => {
    setTier(value);
  };

  return (
    <RadioGroup value={tier} onChange={handleTierChange}>
      <Radio value="option-1" label="Standard Performance Tier" />
      <Radio value="option-2" label="Enterprise High-Throughput Tier" />
      <Radio value="option-3" label="Serverless On-Demand" />
    </RadioGroup>
  );
}`;
      case 'switch':
        return `import React, { useState } from 'react';
import { Switch } from '@spectra/react';
import type { SwitchProps } from '@spectra/react';

export default function SwitchDemo(): JSX.Element {
  const [enabled, setEnabled] = useState<boolean>(${switchChecked});

  const handleToggle = (checked: boolean): void => {
    setEnabled(checked);
  };

  return (
    <Switch
      label="Enable Real-Time Telemetry"
      checked={enabled}
      onChange={handleToggle}
    />
  );
}`;
      case 'avatar':
        return `import React from 'react';
import { Avatar } from '@spectra/react';
import type { AvatarProps } from '@spectra/react';

export default function AvatarDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Avatar name="Sarah Connor" status="online" size="md" />
      <Avatar name="John Doe" status="busy" size="md" />
      <Avatar shape="square" size="md" />
    </div>
  );
}`;
      case 'badge':
        return `import React from 'react';
import { Badge } from '@spectra/react';
import type { BadgeProps } from '@spectra/react';

export default function BadgeDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Badge variant="primary">New Feature</Badge>
      <Badge variant="success" dot>Operational</Badge>
      <Badge variant="warning">In Review</Badge>
      <Badge variant="error">High Priority</Badge>
    </div>
  );
}`;
      case 'tooltip':
        return `import React from 'react';
import { Tooltip, Button } from '@spectra/react';
import type { TooltipProps } from '@spectra/react';

export default function TooltipDemo(): JSX.Element {
  return (
    <Tooltip content="Quickly export workspace configurations to JSON">
      <Button variant="secondary">Hover for Details</Button>
    </Tooltip>
  );
}`;
      case 'tabs':
        return `import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@spectra/react';
import type { TabsProps } from '@spectra/react';

export default function TabsDemo(): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>('tab-1');

  return (
    <Tabs variant="${tabsVariant}" value={activeTab} onChange={(val: string): void => setActiveTab(val)}>
      <TabList>
        <Tab value="tab-1">Overview</Tab>
        <Tab value="tab-2">Integration</Tab>
        <Tab value="tab-3">Settings</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="tab-1">Overview panel content</TabPanel>
        <TabPanel value="tab-2">Integration setup instructions</TabPanel>
        <TabPanel value="tab-3">Security and environment settings</TabPanel>
      </TabPanels>
    </Tabs>
  );
}`;
      case 'card':
        return `import React from 'react';
import { Card, Button } from '@spectra/react';
import type { CardProps } from '@spectra/react';

export default function CardDemo(): JSX.Element {
  return (
    <Card variant="bordered" padding="md">
      <h3 style={{ margin: '0 0 8px 0' }}>Workspace Telemetry</h3>
      <p style={{ margin: '0 0 16px 0', color: 'var(--color-text-secondary)' }}>
        Active monitor running across 14 clusters with 99.99% SLA.
      </p>
      <Button variant="primary">Manage Cluster</Button>
    </Card>
  );
}`;
      case 'list':
        return `import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@spectra/react';
import type { ListProps } from '@spectra/react';
import { UserIcon } from '@spectra/icons';

export default function ListDemo(): JSX.Element {
  return (
    <List>
      <ListItem interactive>
        <ListItemIcon><UserIcon size={16} /></ListItemIcon>
        <ListItemText primary="System Administrator" secondary="Full root permissions" />
      </ListItem>
      <ListItem interactive>
        <ListItemIcon><UserIcon size={16} /></ListItemIcon>
        <ListItemText primary="Security Auditor" secondary="Read-only compliance scope" />
      </ListItem>
    </List>
  );
}`;
      case 'alert':
        return `import React, { useState } from 'react';
import { Alert, Button } from '@spectra/react';
import type { AlertProps } from '@spectra/react';

export default function AlertDemo(): JSX.Element {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return (
      <div style={{ textAlign: 'center', padding: 16 }}>
        <Button variant="secondary" onClick={() => setDismissed(false)}>
          Restore Alert
        </Button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: 520 }}>
      <Alert
        variant="info"
        title="Spectra UI v0.2.0"
        dismissible
        onDismiss={() => setDismissed(true)}
      >
        Welcome to the latest release! 6 new components and Algolia agentic search are now active.
      </Alert>
      <Alert variant="success" title="Synchronization Complete">
        All 175 design tokens and CSS class rules indexed to Algolia search index.
      </Alert>
    </div>
  );
}`;
      case 'spinner':
        return `import React from 'react';
import { Spinner, Button } from '@spectra/react';
import type { SpinnerProps } from '@spectra/react';

export default function SpinnerDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', justifyContent: 'center' }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Button variant="primary" isLoading>
        Loading Button
      </Button>
    </div>
  );
}`;
      case 'skeleton':
        return `import React from 'react';
import { Skeleton } from '@spectra/react';
import type { SkeletonProps } from '@spectra/react';

export default function SkeletonDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 380 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Skeleton variant="circular" width={48} height={48} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <Skeleton variant="text" width="60%" height={16} />
          <Skeleton variant="text" width="40%" height={12} />
        </div>
      </div>
      <Skeleton variant="rounded" width="100%" height={120} />
    </div>
  );
}`;
      case 'divider':
        return `import React from 'react';
import { Divider, Button, TextInput } from '@spectra/react';
import type { DividerProps } from '@spectra/react';

export default function DividerDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 360 }}>
      <Button variant="primary" style={{ width: '100%' }}>Single Sign-On</Button>
      <Divider label="OR CONTINUE WITH" />
      <TextInput placeholder="Email address" />
      <Button variant="secondary" style={{ width: '100%' }}>Submit</Button>
    </div>
  );
}`;
      case 'chip':
        return `import React, { useState } from 'react';
import { Chip } from '@spectra/react';
import type { ChipProps } from '@spectra/react';
import { SparklesIcon } from '@spectra/icons';

export default function ChipDemo(): JSX.Element {
  const [selected, setSelected] = useState<string>('react');

  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
      <Chip
        label="React"
        variant="filled"
        selected={selected === 'react'}
        onClick={() => setSelected('react')}
      />
      <Chip
        label="TypeScript"
        variant="outlined"
        selected={selected === 'ts'}
        onClick={() => setSelected('ts')}
      />
      <Chip
        label="Next.js"
        variant="filled"
        icon={<SparklesIcon size={14} />}
        selected={selected === 'next'}
        onClick={() => setSelected('next')}
      />
    </div>
  );
}`;
      case 'breadcrumbs':
        return `import React from 'react';
import { Breadcrumbs } from '@spectra/react';
import type { BreadcrumbsProps } from '@spectra/react';

export default function BreadcrumbsDemo(): JSX.Element {
  return (
    <Breadcrumbs
      items={[
        { label: 'Home', href: '/' },
        { label: 'Design System', href: '/tokens' },
        { label: 'Components', href: '/components' },
        { label: 'Breadcrumbs', isCurrent: true },
      ]}
    />
  );
}`;
      default:
        return `import React from 'react';
import { ${meta.name} } from '@spectra/react';
import type { ${meta.name}Props } from '@spectra/react';

export default function ${meta.name}Demo(): JSX.Element {
  return (
    <${meta.name}>
      {/* Component content */}
    </${meta.name}>
  );
}`;
    }
  };

  const getCodeSnippet = (): string => {
    const raw = getRawSnippet();
    return playgroundLang === 'ts' ? raw : toJavaScript(raw);
  };

  const getNativeCodeSnippet = (): string => {
    switch (meta.id) {
      case 'button':
        return `// React Native Mobile Implementation (iOS & Android)
import React from 'react';
import { Button } from '@spectra/react-native';
import { CheckIcon } from '@spectra/icons';

export const NativeButtonDemo = () => {
  return (
    <Button
      variant="filled"
      size="${btnSize}"
      isLoading={${btnLoading}}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      onPress={() => console.log('Tapped native button')}
    >
      ${btnVariant.charAt(0).toUpperCase() + btnVariant.slice(1)} Action
    </Button>
  );
};`;
      case 'text-input':
        return `// React Native Mobile Implementation (iOS & Android)
import React, { useState } from 'react';
import { TextInput } from '@spectra/react-native';

export const NativeTextInputDemo = () => {
  const [text, setText] = useState('');
  return (
    <TextInput
      label="Mobile Search"
      placeholder="Type query..."
      value={text}
      onChangeText={setText}
      accessibilityLabel="Search database field"
    />
  );
};`;
      case 'switch':
        return `// React Native Mobile Implementation (iOS & Android)
import React, { useState } from 'react';
import { Switch } from '@spectra/react-native';

export const NativeSwitchDemo = () => {
  const [enabled, setEnabled] = useState(true);
  return (
    <Switch
      label="Enable Push Notifications"
      value={enabled}
      onValueChange={setEnabled}
    />
  );
};`;
      case 'accordion':
        return `// React Native Mobile Implementation (iOS & Android)
import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@spectra/react-native';

export const NativeAccordionDemo = () => {
  return (
    <Accordion defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionHeader>FAQ Section 1</AccordionHeader>
        <AccordionPanel>
          Optimized native collapsible view utilizing LayoutAnimation.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};`;
      case 'avatar':
        return `// React Native Mobile Implementation (iOS & Android)
import React from 'react';
import { Avatar } from '@spectra/react-native';

export const NativeAvatarDemo = () => {
  return <Avatar name="Sarah Connor" size="md" status="online" />;
};`;
      case 'badge':
        return `// React Native Mobile Implementation (iOS & Android)
import React from 'react';
import { Badge } from '@spectra/react-native';

export const NativeBadgeDemo = () => {
  return <Badge variant="success">Active</Badge>;
};`;
      case 'card':
        return `// React Native Mobile Implementation (iOS & Android)
import React from 'react';
import { Card, Text } from '@spectra/react-native';

export const NativeCardDemo = () => {
  return (
    <Card variant="bordered">
      <Text variant="heading">Native Mobile Surface</Text>
      <Text variant="body">Flat 2D surface with 120 FPS Hermes performance.</Text>
    </Card>
  );
};`;
      case 'tabs':
        return `// React Native Mobile Implementation (iOS & Android)
import React, { useState } from 'react';
import { Tabs } from '@spectra/react-native';

export const NativeTabsDemo = () => {
  const [index, setIndex] = useState(0);
  return (
    <Tabs
      tabs={['Overview', 'Security', 'Telemetry']}
      selectedIndex={index}
      onTabPress={setIndex}
    />
  );
};`;
      case 'alert':
        return `// React Native Mobile Implementation (iOS & Android)
import React from 'react';
import { View } from 'react-native';
import { Alert } from '@spectra/react-native';

export const NativeAlertDemo = () => {
  return (
    <View style={{ gap: 10, width: '100%' }}>
      <Alert variant="info" title="System Notice">
        Spectra UI v0.2.0 running on native mobile runtime.
      </Alert>
      <Alert variant="success" title="Persisted">
        Offline cache synchronized.
      </Alert>
    </View>
  );
};`;
      case 'spinner':
        return `// React Native Mobile Implementation (iOS & Android)
import React from 'react';
import { View } from 'react-native';
import { Spinner } from '@spectra/react-native';

export const NativeSpinnerDemo = () => {
  return (
    <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </View>
  );
};`;
      case 'skeleton':
        return `// React Native Mobile Implementation (iOS & Android)
import React from 'react';
import { View } from 'react-native';
import { Skeleton } from '@spectra/react-native';

export const NativeSkeletonDemo = () => {
  return (
    <View style={{ gap: 12, width: '100%' }}>
      <Skeleton variant="circular" width={48} height={48} />
      <Skeleton variant="text" width="75%" height={16} />
      <Skeleton variant="rounded" width="100%" height={120} />
    </View>
  );
};`;
      case 'divider':
        return `// React Native Mobile Implementation (iOS & Android)
import React from 'react';
import { View } from 'react-native';
import { Divider, Button } from '@spectra/react-native';

export const NativeDividerDemo = () => {
  return (
    <View style={{ gap: 12, width: '100%' }}>
      <Button variant="filled">Apple ID</Button>
      <Divider />
      <Button variant="outline">Email Address</Button>
    </View>
  );
};`;
      case 'chip':
        return `// React Native Mobile Implementation (iOS & Android)
import React from 'react';
import { View } from 'react-native';
import { Chip } from '@spectra/react-native';

export const NativeChipDemo = () => {
  return (
    <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
      <Chip label="React Native" variant="filled" selected />
      <Chip label="TypeScript" variant="outlined" />
      <Chip label="Hermes" variant="filled" />
    </View>
  );
};`;
      case 'breadcrumbs':
        return `// React Native Mobile Implementation (iOS & Android)
import React from 'react';
import { Breadcrumbs } from '@spectra/react-native';

export const NativeBreadcrumbsDemo = () => {
  return (
    <Breadcrumbs
      items={[
        { label: 'Mobile' },
        { label: 'Settings' },
        { label: 'Profile', isCurrent: true },
      ]}
    />
  );
};`;
      default:
        return `// React Native Mobile Implementation (iOS & Android)
import React from 'react';
import { ${meta.name} } from '@spectra/react-native';

export const Native${meta.name}Demo = () => {
  return <${meta.name} />;
};`;
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activePlaygroundSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const basePlaygroundSnippet = playgroundLang === 'ts' ? getCodeSnippet() : toJavaScript(getCodeSnippet());
  const activePlaygroundSnippet = customPlaygroundCode !== null ? customPlaygroundCode : basePlaygroundSnippet;

  const { Component: DynamicPlaygroundComp } = React.useMemo(() => {
    if (customPlaygroundCode === null) return { Component: null };
    return compileAndRender(activePlaygroundSnippet, {
      platform: (platformMode === 'ios' || platformMode === 'android') ? 'native' : 'web',
    });
  }, [activePlaygroundSnippet, customPlaygroundCode, platformMode]);

  // Render Web Component in Interactive Playground
  const renderComponentPreview = () => {
    switch (meta.id) {
      case 'button':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
              <Button
                variant={btnVariant}
                size={btnSize}
                isLoading={btnLoading}
                icon={<CheckIcon size={16} />}
              >
                {btnVariant.charAt(0).toUpperCase() + btnVariant.slice(1)} Action
              </Button>
              <Button variant="secondary" size={btnSize}>
                Secondary
              </Button>
              <Button variant="tertiary" size={btnSize}>
                Tertiary
              </Button>
              <Button variant="danger" size={btnSize}>
                Danger
              </Button>
            </div>

            {/* Quick interactive props pill controls */}
            <div
              style={{
                display: 'flex',
                gap: 8,
                flexWrap: 'wrap',
                padding: '8px 12px',
                borderRadius: 'var(--radius-component-md)',
                backgroundColor: 'var(--color-surface-raised)',
                border: '1px solid var(--color-border-subtle)',
                fontSize: 12,
              }}
            >
              <span style={{ fontWeight: 600, color: 'var(--color-text-muted)', alignSelf: 'center' }}>
                Variant:
              </span>
              {(['primary', 'secondary', 'tertiary', 'danger'] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setBtnVariant(v)}
                  style={{
                    padding: '4px 8px',
                    border: '1px solid',
                    borderColor: btnVariant === v ? 'var(--color-action-primary)' : 'var(--color-border-subtle)',
                    borderRadius: 4,
                    backgroundColor: btnVariant === v ? 'var(--color-action-primary)' : 'transparent',
                    color: btnVariant === v ? 'var(--color-text-inverse)' : 'var(--color-text-primary)',
                    cursor: 'pointer',
                    fontSize: 11,
                  }}
                >
                  {v}
                </button>
              ))}
              <span style={{ width: 1, backgroundColor: 'var(--color-border-subtle)', margin: '0 4px' }} />
              <span style={{ fontWeight: 600, color: 'var(--color-text-muted)', alignSelf: 'center' }}>
                Size:
              </span>
              {(['sm', 'md', 'lg'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setBtnSize(s)}
                  style={{
                    padding: '4px 8px',
                    border: '1px solid',
                    borderColor: btnSize === s ? 'var(--color-action-primary)' : 'var(--color-border-subtle)',
                    borderRadius: 4,
                    backgroundColor: btnSize === s ? 'var(--color-action-primary)' : 'transparent',
                    color: btnSize === s ? 'var(--color-text-inverse)' : 'var(--color-text-primary)',
                    cursor: 'pointer',
                    fontSize: 11,
                  }}
                >
                  {s}
                </button>
              ))}
              <button
                onClick={() => setBtnLoading(!btnLoading)}
                style={{
                  padding: '4px 8px',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: 4,
                  backgroundColor: btnLoading ? 'var(--color-action-primary)' : 'transparent',
                  color: btnLoading ? 'var(--color-text-inverse)' : 'var(--color-text-primary)',
                  cursor: 'pointer',
                  fontSize: 11,
                }}
              >
                {btnLoading ? 'Loading: On' : 'Loading: Off'}
              </button>
            </div>
          </div>
        );

      case 'text-input':
        return (
          <div style={{ maxWidth: 440, width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <TextInput
              label="Standard Text Field"
              placeholder="Enter your email address..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              description="We will never share your personal email."
              leftIcon={<SearchIcon size={16} />}
            />
            <TextInput
              label="Field with Error"
              placeholder="Username"
              defaultValue="admin"
              error="Username is already taken. Try another."
            />
          </div>
        );

      case 'select':
        return (
          <div style={{ maxWidth: 360, width: '100%', margin: '0 auto' }}>
            <Select
              label="Select Deployment Target"
              options={[
                { value: 'us-east', label: 'US East (N. Virginia)' },
                { value: 'eu-west', label: 'Europe (Frankfurt)' },
                { value: 'ap-south', label: 'Asia Pacific (Tokyo)' },
              ]}
            />
          </div>
        );

      case 'checkbox':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 380, width: '100%', margin: '0 auto' }}>
            <Checkbox
              label="Accept Terms & Security Policy"
              description="Required before deploying tokens across organizations."
              checked={checkboxChecked}
              onChange={setCheckboxChecked}
            />
            <Checkbox
              label="Partially Selected Folder"
              indeterminate
              description="Sub-items contain both selected and unselected files."
            />
          </div>
        );

      case 'radio':
        return (
          <div style={{ maxWidth: 380, width: '100%', margin: '0 auto' }}>
            <RadioGroup value={radioValue} onChange={setRadioValue}>
              <Radio value="option-1" label="Standard Performance (1 CPU, 2GB RAM)" />
              <Radio value="option-2" label="High-Throughput (4 CPU, 16GB RAM)" />
              <Radio value="option-3" label="Serverless Auto-scaling" />
            </RadioGroup>
          </div>
        );

      case 'switch':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center' }}>
            <Switch
              label="Enable Real-Time Telemetry"
              checked={switchChecked}
              onChange={setSwitchChecked}
            />
            <Switch label="Dark Mode Sync (Disabled)" checked={false} disabled />
          </div>
        );

      case 'accordion':
        return (
          <div style={{ maxWidth: 560, width: '100%', margin: '0 auto' }}>
            <Accordion defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionHeader>How does Spectra UI achieve zero layout jank?</AccordionHeader>
                <AccordionPanel>
                  Accordions decrease cognitive load by letting people choose which sections of content
                  they see, like questions in an FAQ.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionHeader>Can I use these tokens in React Native?</AccordionHeader>
                <AccordionPanel>
                  Yes! @spectra/tokens compiles to strictly typed JavaScript objects that plug directly
                  into React Native StyleSheet.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionHeader>What is the W3C WAI compliance tier?</AccordionHeader>
                <AccordionPanel>
                  All components adhere strictly to WCAG 2.1 AA and W3C WAI-ARIA APG patterns.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        );

      case 'avatar':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <Avatar name="Sarah Connor" size="lg" status={avatarStatus} />
              <Avatar name="Alex Vance" size="md" status={avatarStatus} />
              <Avatar shape="square" size="md" />
              <Avatar size="sm" />
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {(['online', 'busy', 'away'] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => setAvatarStatus(st)}
                  style={{
                    padding: '4px 8px',
                    borderRadius: 4,
                    border: '1px solid var(--color-border-subtle)',
                    backgroundColor: avatarStatus === st ? 'var(--color-action-primary)' : 'transparent',
                    color: avatarStatus === st ? 'var(--color-text-inverse)' : 'var(--color-text-secondary)',
                    cursor: 'pointer',
                    fontSize: 11,
                  }}
                >
                  Status: {st}
                </button>
              ))}
            </div>
          </div>
        );

      case 'badge':
        return (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success" dot>Operational</Badge>
            <Badge variant="warning">Pending</Badge>
            <Badge variant="error">High Risk</Badge>
            <Badge variant="info">v2.4.0</Badge>
          </div>
        );

      case 'tooltip':
        return (
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', alignItems: 'center' }}>
            <Tooltip content="Saves token modifications to repository" placement="top">
              <Button variant="primary">Hover Me (Top)</Button>
            </Tooltip>
            <Tooltip content="Reverts workspace to last verified git commit" placement="bottom">
              <Button variant="secondary">Hover Me (Bottom)</Button>
            </Tooltip>
          </div>
        );

      case 'tabs':
        return (
          <div style={{ maxWidth: 500, width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
              <button
                onClick={() => setTabsVariant('underline')}
                style={{
                  padding: '4px 8px',
                  borderRadius: 4,
                  fontSize: 11,
                  border: '1px solid var(--color-border-subtle)',
                  backgroundColor: tabsVariant === 'underline' ? 'var(--color-action-primary)' : 'transparent',
                  color: tabsVariant === 'underline' ? 'var(--color-text-inverse)' : 'var(--color-text-secondary)',
                  cursor: 'pointer',
                }}
              >
                Underline
              </button>
              <button
                onClick={() => setTabsVariant('pills')}
                style={{
                  padding: '4px 8px',
                  borderRadius: 4,
                  fontSize: 11,
                  border: '1px solid var(--color-border-subtle)',
                  backgroundColor: tabsVariant === 'pills' ? 'var(--color-action-primary)' : 'transparent',
                  color: tabsVariant === 'pills' ? 'var(--color-text-inverse)' : 'var(--color-text-secondary)',
                  cursor: 'pointer',
                }}
              >
                Pills
              </button>
            </div>
            <Tabs variant={tabsVariant} value={activeTab} onChange={setActiveTab}>
              <TabList>
                <Tab value="tab-1">Overview</Tab>
                <Tab value="tab-2">Integration</Tab>
                <Tab value="tab-3">Settings</Tab>
              </TabList>
              <TabPanels>
                <TabPanel value="tab-1">
                  <p style={{ margin: 0, padding: '16px 0', fontSize: 14, color: 'var(--color-text-secondary)' }}>
                    Overview panel details: High performance flat design system tokens.
                  </p>
                </TabPanel>
                <TabPanel value="tab-2">
                  <p style={{ margin: 0, padding: '16px 0', fontSize: 14, color: 'var(--color-text-secondary)' }}>
                    Integration guide: Plug into Next.js, Vite, or React Native in 2 minutes.
                  </p>
                </TabPanel>
                <TabPanel value="tab-3">
                  <p style={{ margin: 0, padding: '16px 0', fontSize: 14, color: 'var(--color-text-secondary)' }}>
                    Settings: Adjust colorScheme, font scales, and motion curve tokens.
                  </p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        );

      case 'card':
        return (
          <div style={{ maxWidth: 440, width: '100%', margin: '0 auto' }}>
            <Card variant="bordered" padding="md">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>Cluster Deployment #28</h4>
                <Badge variant="success" dot>Active</Badge>
              </div>
              <p style={{ margin: '0 0 16px 0', fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                Telemetry verified across 24 edge nodes. Zero latency regressions detected in the last 24h.
              </p>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                <Button variant="secondary" size="sm">Logs</Button>
                <Button variant="primary" size="sm">Configure</Button>
              </div>
            </Card>
          </div>
        );

      case 'list':
        return (
          <div style={{ maxWidth: 400, width: '100%', margin: '0 auto' }}>
            <List>
              <ListItem interactive>
                <ListItemIcon><UserIcon size={16} /></ListItemIcon>
                <ListItemText primary="System Administrator" secondary="Full root credentials" />
              </ListItem>
              <ListItem interactive>
                <ListItemIcon><UserIcon size={16} /></ListItemIcon>
                <ListItemText primary="Security Auditor" secondary="Read-only compliance audit" />
              </ListItem>
              <ListItem interactive>
                <ListItemIcon><UserIcon size={16} /></ListItemIcon>
                <ListItemText primary="CI/CD Pipeline Bot" secondary="Automated build webhook" />
              </ListItem>
            </List>
          </div>
        );

      case 'dialog':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <Button variant="primary" onClick={() => setIsDialogOpen(true)}>
              Open Confirmation Dialog
            </Button>
            <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
              <div style={{ padding: 24 }}>
                <h3 style={{ margin: '0 0 12px 0', fontSize: 18 }}>Confirm System Update</h3>
                <p style={{ margin: '0 0 20px 0', color: 'var(--color-text-secondary)', fontSize: 14, lineHeight: 1.5 }}>
                  Are you sure you want to deploy the new design system tokens across all workspaces?
                </p>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
                  <Button variant="secondary" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={() => setIsDialogOpen(false)}>
                    Confirm Update
                  </Button>
                </div>
              </div>
            </Dialog>
          </div>
        );

      case 'alert':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: 520 }}>
            <Alert variant="info" title="Spectra UI v0.2.0">
              Interactive web alert component with full design token integration.
            </Alert>
            <Alert variant="success" title="Ready to Publish">
              All packages configured for npm publishing with access: public.
            </Alert>
          </div>
        );

      case 'spinner':
        return (
          <div style={{ display: 'flex', gap: 24, alignItems: 'center', justifyContent: 'center' }}>
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <Button variant="primary" isLoading>Loading</Button>
          </div>
        );

      case 'skeleton':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%', maxWidth: 400 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Skeleton variant="circular" width={48} height={48} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <Skeleton variant="text" width="65%" height={16} />
                <Skeleton variant="text" width="40%" height={12} />
              </div>
            </div>
            <Skeleton variant="rounded" width="100%" height={100} />
          </div>
        );

      case 'divider':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 380, padding: 20, borderRadius: 8, border: '1px solid var(--color-border-default)' }}>
            <Button variant="primary" style={{ width: '100%' }}>Single Sign-On</Button>
            <Divider label="OR CONTINUE WITH EMAIL" />
            <TextInput placeholder="user@domain.com" />
          </div>
        );

      case 'chip':
        return (
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Chip label="React Web" variant="filled" selected />
            <Chip label="React Native" variant="outlined" />
            <Chip label="Design Tokens" variant="filled" />
          </div>
        );

      case 'breadcrumbs':
        return (
          <Breadcrumbs
            items={[
              { label: 'Home', href: '#' },
              { label: 'Design System', href: '#' },
              { label: 'Components', href: '#' },
              { label: 'Breadcrumbs', isCurrent: true },
            ]}
          />
        );

      default:
        return (
          <div style={{ textAlign: 'center', padding: 24 }}>
            <Button variant="primary">{meta.name} Action</Button>
          </div>
        );
    }
  };

  // Render Mobile Simulator Component
  const renderNativePreview = () => {
    switch (meta.id) {
      case 'alert':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
            <Alert variant="info" title="Native Alert">Running on iOS and Android</Alert>
            <Alert variant="success" title="Success">Saved to local state</Alert>
          </div>
        );

      case 'spinner':
        return (
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center' }}>
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </div>
        );

      case 'skeleton':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
            <Skeleton variant="circular" width={44} height={44} />
            <Skeleton variant="text" width="70%" height={14} />
            <Skeleton variant="rounded" width="100%" height={80} />
          </div>
        );

      case 'divider':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
            <Button variant="primary">Apple ID</Button>
            <Divider />
            <Button variant="secondary">Email Login</Button>
          </div>
        );

      case 'chip':
        return (
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <Chip label="React Native" variant="filled" selected />
            <Chip label="Hermes" variant="outlined" />
          </div>
        );

      case 'breadcrumbs':
        return (
          <Breadcrumbs
            items={[
              { label: 'Mobile' },
              { label: 'Settings' },
              { label: 'Profile', isCurrent: true },
            ]}
          />
        );
      case 'button':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%' }}>
            <Button variant="primary" size="md" style={{ width: '100%' }}>
              Native Filled Button
            </Button>
            <Button variant="secondary" size="md" style={{ width: '100%' }}>
              Native Secondary
            </Button>
            <Button variant="tertiary" size="md" style={{ width: '100%' }}>
              Native Plain Action
            </Button>
          </div>
        );
      case 'text-input':
        return (
          <div style={{ width: '100%' }}>
            <TextInput label="Mobile Search" placeholder="Type query..." leftIcon={<SearchIcon size={16} />} />
          </div>
        );
      case 'switch':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
            <Switch label="Push Notifications" checked={switchChecked} onChange={setSwitchChecked} />
            <Switch label="Background Refresh" checked={true} />
          </div>
        );
      case 'accordion':
        return (
          <div style={{ width: '100%' }}>
            <Accordion defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionHeader>Native Accordion Header</AccordionHeader>
                <AccordionPanel>LayoutAnimation fluid expansion on iOS and Android.</AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        );
      case 'avatar':
        return (
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <Avatar name="Sarah Connor" size="lg" status="online" />
            <Avatar name="John Doe" size="md" status="busy" />
          </div>
        );
      case 'badge':
        return (
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Badge variant="primary">New</Badge>
            <Badge variant="success" dot>Online</Badge>
            <Badge variant="error">Alert</Badge>
          </div>
        );
      case 'card':
        return (
          <Card variant="bordered" style={{ width: '100%' }}>
            <h4 style={{ margin: '0 0 4px 0', fontSize: 15 }}>Native Mobile Card</h4>
            <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)' }}>
              Card surface running on React Native with native border styling.
            </p>
          </Card>
        );
      case 'tabs':
        return (
          <div style={{ width: '100%' }}>
            <Tabs variant="pills" defaultValue="1">
              <TabList>
                <Tab value="1">Feed</Tab>
                <Tab value="2">Saved</Tab>
              </TabList>
              <TabPanels>
                <TabPanel value="1">Mobile Feed Items</TabPanel>
                <TabPanel value="2">Saved Articles</TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        );
      default:
        return (
          <Button variant="primary" style={{ width: '100%' }}>
            Native {meta.name}
          </Button>
        );
    }
  };

  return (
    <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', gap: 40, alignItems: 'flex-start' }}>
      {/* Main Documentation Column */}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 44 }}>
        {/* 1. Header Hero Card & Platform Selector Tabs */}
        <Card
          variant="bordered"
          style={{
            backgroundColor: 'var(--color-surface)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
            padding: '28px 32px 0 32px',
            borderRadius: 16,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 12,
              margin: '0 0 14px 0',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <h1
                style={{
                  fontSize: 36,
                  fontWeight: 800,
                  letterSpacing: '-0.025em',
                  margin: 0,
                  color: 'var(--color-text-primary)',
                }}
              >
                {meta.name}
              </h1>

              {releaseInfo.isNew ? (
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    padding: '3px 10px',
                    borderRadius: 20,
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    color: '#10B981',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {currentVersion} (New)
                </span>
              ) : (
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    padding: '3px 8px',
                    borderRadius: 20,
                    backgroundColor: 'var(--color-surface-raised)',
                    color: 'var(--color-text-muted)',
                    border: '1px solid var(--color-border-subtle)',
                  }}
                >
                  {currentVersion}
                </span>
              )}
            </div>

            <a
              href={getGitHubUrl(meta.id, platformMode)}
              target="_blank"
              rel="noreferrer"
              title={`View the ${platformMode} source on GitHub pinned to ${currentVersion}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 12,
                fontWeight: 600,
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                padding: '6px 12px',
                borderRadius: 6,
                backgroundColor: 'var(--color-surface-raised)',
                border: '1px solid var(--color-border-default)',
                transition: 'all 0.15s ease',
              }}
            >
              <span>View the source on GitHub</span>
              <ExternalLinkIcon size={13} />
            </a>
          </div>

          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: 'var(--color-text-secondary)',
              margin: '0 0 16px 0',
              maxWidth: 780,
            }}
          >
            {meta.description}
          </p>

          {/* Dynamic Resource Pills Row (Image 2 Benchmark - Zero Emojis) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 8,
              marginBottom: 20,
            }}
          >
            {/* 1. View as Markdown */}
            <button
              type="button"
              onClick={() => setIsMarkdownModalOpen(true)}
              title="View raw Markdown documentation"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 12,
                fontWeight: 600,
                color: 'var(--color-text-secondary)',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border-default)',
                borderRadius: 20,
                padding: '5px 12px',
                cursor: 'pointer',
                transition: 'all 0.12s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-action-primary)';
                e.currentTarget.style.color = 'var(--color-action-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-default)';
                e.currentTarget.style.color = 'var(--color-text-secondary)';
              }}
            >
              <MarkdownPillIcon size={14} />
              <span>View as Markdown</span>
            </button>

            {/* 2. Feedback (Opens page feedback drawer/section) */}
            <button
              onClick={() => openFeedbackForSection('General Page Feedback')}
              title="Leave feedback or suggestions on this component"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 12,
                fontWeight: 600,
                color: 'var(--color-text-secondary)',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border-default)',
                borderRadius: 20,
                padding: '5px 12px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'all 0.12s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-action-primary)';
                e.currentTarget.style.color = 'var(--color-action-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-default)';
                e.currentTarget.style.color = 'var(--color-text-secondary)';
              }}
            >
              <FeedbackPillIcon size={14} />
              <span>Feedback</span>
            </button>

            {/* 3. Bundle size */}
            <a
              href="https://bundlephobia.com/package/@spectra/react"
              target="_blank"
              rel="noreferrer"
              title={`Estimated gzipped bundle size: ${COMPONENT_BUNDLE_SIZES[meta.id] || '< 2.0 kB'}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 12,
                fontWeight: 600,
                color: 'var(--color-text-secondary)',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border-default)',
                borderRadius: 20,
                padding: '5px 12px',
                textDecoration: 'none',
                transition: 'all 0.12s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-action-primary)';
                e.currentTarget.style.color = 'var(--color-action-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-default)';
                e.currentTarget.style.color = 'var(--color-text-secondary)';
              }}
            >
              <PackagePillIcon size={14} />
              <span>Bundle size {COMPONENT_BUNDLE_SIZES[meta.id] || '< 2.0 kB'}</span>
            </a>

            {/* 4. Source */}
            <a
              href={getGitHubUrl(meta.id, platformMode)}
              target="_blank"
              rel="noreferrer"
              title="View source code on GitHub"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 12,
                fontWeight: 600,
                color: 'var(--color-text-secondary)',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border-default)',
                borderRadius: 20,
                padding: '5px 12px',
                textDecoration: 'none',
                transition: 'all 0.12s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-action-primary)';
                e.currentTarget.style.color = 'var(--color-action-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-default)';
                e.currentTarget.style.color = 'var(--color-text-secondary)';
              }}
            >
              <GitHubPillIcon size={14} />
              <span>Source</span>
            </a>

            {/* 5. WAI-ARIA */}
            {COMPONENT_WAI_ARIA[meta.id] && (
              <a
                href={COMPONENT_WAI_ARIA[meta.id]}
                target="_blank"
                rel="noreferrer"
                title="W3C WAI-ARIA Authoring Practices Guide"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'var(--color-text-secondary)',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border-default)',
                  borderRadius: 20,
                  padding: '5px 12px',
                  textDecoration: 'none',
                  transition: 'all 0.12s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-action-primary)';
                  e.currentTarget.style.color = 'var(--color-action-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border-default)';
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                <W3CPillIcon size={14} />
                <span>WAI-ARIA</span>
              </a>
            )}
          </div>

          {/* Active Platform Banner (Strict Platform Isolation) */}
          <div
            style={{
              marginTop: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 14px',
              borderRadius: 8,
              backgroundColor: 'var(--color-surface-raised)',
              border: '1px solid var(--color-border-subtle)',
              flexWrap: 'wrap',
              gap: 8,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <PlatformIcon platform={currentPlatform} size={18} color="var(--color-action-primary)" />
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  {platformMeta.name} Platform Environment
                </span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    padding: '1px 6px',
                    borderRadius: 4,
                    backgroundColor: 'rgba(0, 127, 255, 0.12)',
                    color: 'var(--color-action-primary)',
                    border: '1px solid rgba(0, 127, 255, 0.25)',
                  }}
                >
                  {platformMeta.badge}
                </span>
              </div>
            </div>
            <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
              Showing isolated {platformMeta.name} documentation & syntax. Switch target platform in the sidebar dropdown.
            </span>
          </div>
        </Card>

      {/* 3. PLATFORM VIEW: Web Mode */}
      {platformMode === 'web' && (
        <>
          {/* 1. Primary Demo Section: Basic <Component> (MUI & Fluent UI Benchmark) */}
          <div id="playground" style={{ display: 'flex', flexDirection: 'column', gap: 14, scrollMarginTop: 80 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)', letterSpacing: '-0.01em' }}>
                  Basic {meta.name}
                </h2>
                <button
                  onClick={() => openFeedbackForSection(`Basic ${meta.name}`)}
                  title={`Give feedback on Basic ${meta.name}`}
                  style={{
                    background: 'none',
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: 6,
                    padding: '4px 6px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    color: 'var(--color-text-muted)',
                    transition: 'all 0.12s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-action-primary)';
                    e.currentTarget.style.borderColor = 'var(--color-action-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-text-muted)';
                    e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                  }}
                >
                  <SectionCommentIcon size={14} />
                </button>
              </div>
            </div>
            <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
              Standard default {meta.name.toLowerCase()} implementation ready for production use.
            </p>

            <div
              style={{
                borderRadius: 'var(--radius-component-md)',
                border: '1px solid var(--color-border-default)',
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-text-primary)',
                overflow: 'hidden',
                transition: 'background-color 0.2s ease',
              }}
            >
              {/* Live Preview Area */}
              <div
                style={{
                  padding: '48px 32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 200,
                }}
              >
                {customPlaygroundCode !== null && DynamicPlaygroundComp ? (
                  React.createElement(DynamicPlaygroundComp)
                ) : (
                  renderComponentPreview()
                )}
              </div>

              {/* Bottom Action Bar (Fluent 2 / MUI Exact implementation) */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: 20,
                  padding: '12px 24px',
                  borderTop: '1px solid var(--color-border-subtle)',
                  backgroundColor: 'var(--color-surface-raised)',
                  fontSize: 13,
                }}
              >
                <button
                  onClick={() => openInCodeSandbox({ title: meta.name, code: activePlaygroundSnippet, theme: colorScheme })}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-text-secondary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    cursor: 'pointer',
                    fontSize: 13,
                    fontFamily: 'inherit',
                    padding: 0,
                  }}
                >
                  <ExternalLinkIcon size={14} />
                  <span>Open in CodeSandbox</span>
                </button>

                <button
                  onClick={() => openInStackBlitz({ title: meta.name, code: activePlaygroundSnippet, theme: colorScheme })}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-text-secondary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    cursor: 'pointer',
                    fontSize: 13,
                    fontFamily: 'inherit',
                    padding: 0,
                  }}
                >
                  <ExternalLinkIcon size={14} />
                  <span>Open in Stackblitz</span>
                </button>

                <button
                  onClick={() => openInNewTab({ title: meta.name, code: activePlaygroundSnippet, theme: colorScheme })}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-text-secondary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    cursor: 'pointer',
                    fontSize: 13,
                    fontFamily: 'inherit',
                    padding: 0,
                  }}
                >
                  <ExternalLinkIcon size={14} />
                  <span>Open in new tab</span>
                </button>

                <button
                  onClick={() => setShowCode(!showCode)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: showCode ? 'var(--color-action-primary)' : 'var(--color-text-primary)',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    cursor: 'pointer',
                    fontSize: 13,
                    fontFamily: 'inherit',
                    padding: 0,
                  }}
                >
                  <span>{showCode ? 'Hide code' : 'Show code'}</span>
                </button>

                {showCode && (
                  <div style={{ marginLeft: 6 }}>
                    <Tabs variant="pills" size="sm" value={playgroundLang} onChange={(val) => setPlaygroundLang(val as 'ts' | 'js')}>
                      <TabList style={{ padding: '2px 4px' }}>
                        <Tab value="js" style={{ padding: '2px 8px', fontSize: 11, fontWeight: 700 }}>
                          JS
                        </Tab>
                        <Tab value="ts" style={{ padding: '2px 8px', fontSize: 11, fontWeight: 700 }}>
                          TS
                        </Tab>
                      </TabList>
                    </Tabs>
                  </div>
                )}
              </div>

              {/* Expandable Editable Code Snippet */}
              {showCode && (
                <div style={{ backgroundColor: 'var(--color-surface-raised)', padding: '6px 10px 10px 10px', borderTop: '1px solid var(--color-border-subtle)' }}>
                  <EditableCodeBlock
                    code={activePlaygroundSnippet}
                    onChange={(newCode) => {
                      if (playgroundLang === 'ts') {
                        setCustomPlaygroundCodeTs(newCode);
                      } else {
                        setCustomPlaygroundCodeJs(newCode);
                      }
                    }}
                    language={playgroundLang}
                    isExpanded={true}
                    isModified={customPlaygroundCode !== null}
                    onResetCode={() => {
                      setCustomPlaygroundCodeTs(null);
                      setCustomPlaygroundCodeJs(null);
                    }}
                    onCopy={handleCopyCode}
                    copied={copied}
                    fileBadge={playgroundLang === 'ts' ? 'App.tsx (TypeScript)' : 'App.jsx (JavaScript)'}
                    maxHeight={380}
                  />
                </div>
              )}
            </div>
          </div>

          {/* 2. Variants Showcase (Rendered directly without redundant banner) */}
          <div id="usage-variants" style={{ display: 'flex', flexDirection: 'column', gap: 20, scrollMarginTop: 80 }}>
            <ComponentVariantsShowcase componentId={meta.id} />
          </div>

          {/* Resources Section (Matching Fluent 2) */}
          <div id="resources" style={{ scrollMarginTop: 80 }}>
            <Card
              variant="bordered"
              style={{
                backgroundColor: 'var(--color-surface)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                padding: '24px',
                borderRadius: 12,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                Resources & Quick Guides
              </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 16,
              }}
            >
              {/* Card 1: React Guidance */}
              <div
                onClick={() => setActiveResourceModal('react')}
                style={{
                  padding: '20px',
                  borderRadius: 'var(--radius-component-md)',
                  border: '1px solid var(--color-border-default)',
                  backgroundColor: 'var(--color-surface-raised)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: 110,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <svg width="32" height="32" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
                    <circle cx="0" cy="0" r="2.05" fill="var(--color-action-primary)" />
                    <g stroke="var(--color-action-primary)" strokeWidth="1" fill="none">
                      <ellipse rx="11" ry="4.2" />
                      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                    </g>
                  </svg>
                  <ExternalLinkIcon size={16} color="var(--color-text-muted)" />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{meta.name} Web Component</div>
                  <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 2 }}>React guidance</div>
                </div>
              </div>

              {/* Card 2: Design Tokens Guidance */}
              <div
                onClick={() => setActiveResourceModal('tokens')}
                style={{
                  padding: '20px',
                  borderRadius: 'var(--radius-component-md)',
                  border: '1px solid var(--color-border-default)',
                  backgroundColor: 'var(--color-surface-raised)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: 110,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-action-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a7 7 0 0 0 0 14v6" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                    <line x1="16" y1="12" x2="16.01" y2="12" />
                  </svg>
                  <ExternalLinkIcon size={16} color="var(--color-text-muted)" />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{meta.name} Design Tokens</div>
                  <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 2 }}>CSS variables & theme integration</div>
                </div>
              </div>

              {/* Card 3: WAI Guidance */}
              <a
                href={meta.waiUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '20px',
                  borderRadius: 'var(--radius-component-md)',
                  border: '1px solid var(--color-border-default)',
                  backgroundColor: 'var(--color-surface-raised)',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: 110,
                  color: 'inherit',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 16,
                      backgroundColor: 'var(--color-action-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-text-inverse)',
                      fontWeight: 700,
                      fontSize: 10,
                    }}
                  >
                    WAI
                  </div>
                  <ExternalLinkIcon size={16} color="var(--color-text-muted)" />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{meta.waiPattern}</div>
                  <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 2 }}>WAI guidance</div>
                </div>
              </a>
            </div>
          </Card>
        </div>

          {/* Component Anatomy & Slots */}
          <div id="anatomy" style={{ scrollMarginTop: 80 }}>
            <Card
              variant="bordered"
              style={{
                backgroundColor: 'var(--color-surface)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                overflow: 'hidden',
              }}
            >
              <div style={{ padding: '18px 24px', borderBottom: '1px solid var(--color-border-default)', backgroundColor: 'var(--color-surface-raised)' }}>
                <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                  Anatomy & Slots
                </h2>
              </div>
              <div style={{ overflowX: 'auto', backgroundColor: 'var(--color-surface)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13, backgroundColor: 'var(--color-surface)' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--color-surface-raised)', borderBottom: '1px solid var(--color-border-default)' }}>
                      <th style={{ padding: '12px 20px', fontWeight: 600 }}>Part / Slot</th>
                      <th style={{ padding: '12px 20px', fontWeight: 600 }}>Description & Semantic Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {meta.anatomy.map((part, idx) => (
                      <tr
                        key={part.name}
                        style={{
                          backgroundColor: idx % 2 === 0 ? 'var(--color-surface)' : 'var(--color-surface-raised)',
                          borderBottom: idx === meta.anatomy.length - 1 ? 'none' : '1px solid var(--color-border-subtle)',
                        }}
                      >
                        <td style={{ padding: '12px 20px', fontWeight: 600, fontFamily: 'monospace', color: 'var(--color-action-primary)' }}>
                          {part.name}
                        </td>
                        <td style={{ padding: '12px 20px', color: 'var(--color-text-secondary)' }}>
                          {part.role}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Motion & Transition Specification */}
          <div id="motion" style={{ scrollMarginTop: 80 }}>
            <Card
              variant="bordered"
              style={{
                backgroundColor: 'var(--color-surface)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                padding: 24,
              }}
            >
              <h2 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 16px 0', color: 'var(--color-text-primary)' }}>
                Motion, Micro-interactions & Timing
              </h2>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 16 }}>
                <div style={{ padding: '8px 16px', borderRadius: 'var(--radius-component-md, 6px)', backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)' }}>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: 12 }}>Duration: </span>
                  <strong style={{ fontFamily: 'monospace', color: 'var(--color-action-primary)' }}>{meta.motion.duration}</strong>
                </div>
                <div style={{ padding: '8px 16px', borderRadius: 'var(--radius-component-md, 6px)', backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)' }}>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: 12 }}>Easing Curve: </span>
                  <strong style={{ fontFamily: 'monospace', color: 'var(--color-text-primary)' }}>{meta.motion.easing}</strong>
                </div>
              </div>
              <p style={{ margin: 0, color: 'var(--color-text-secondary)', lineHeight: 1.6, fontSize: 14 }}>
                {meta.motion.description}
              </p>
            </Card>
          </div>

          {/* Visual Dos and Don'ts Cards */}
          <div id="guidelines" style={{ scrollMarginTop: 80 }}>
            <Card
              variant="bordered"
              style={{
                backgroundColor: 'var(--color-surface)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                padding: 24,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                    Usage Guidelines (Dos and Don'ts)
                  </h2>
                  <button
                    onClick={() => openFeedbackForSection('Usage Guidelines')}
                    title="Give feedback on Usage Guidelines"
                    style={{
                      background: 'none',
                      border: '1px solid var(--color-border-subtle)',
                      borderRadius: 6,
                      padding: '4px 6px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                      color: 'var(--color-text-muted)',
                      transition: 'all 0.12s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-action-primary)';
                      e.currentTarget.style.borderColor = 'var(--color-action-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-text-muted)';
                      e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                    }}
                  >
                    <SectionCommentIcon size={14} />
                  </button>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
                {/* DO Card */}
                <div
                  style={{
                    padding: 20,
                    borderRadius: 'var(--radius-component-md, 8px)',
                    border: '1.5px solid var(--color-semantic-success, #16A34A)',
                    backgroundColor: 'var(--color-surface-raised)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--color-semantic-success, #16A34A)', fontWeight: 700, fontSize: 15 }}>
                    <CheckIcon size={16} color="currentColor" />
                    <span>RECOMMENDED (DO)</span>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.7 }}>
                    {meta.dos.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>

                {/* DON'T Card */}
                <div
                  style={{
                    padding: 20,
                    borderRadius: 'var(--radius-component-md, 8px)',
                    border: '1.5px solid var(--color-semantic-error, #DC2626)',
                    backgroundColor: 'var(--color-surface-raised)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--color-semantic-error, #DC2626)', fontWeight: 700, fontSize: 15 }}>
                    <CloseIcon size={16} color="currentColor" />
                    <span>AVOID (DON'T)</span>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--color-text-secondary)', fontSize: 13, lineHeight: 1.7 }}>
                    {meta.donts.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Keyboard Navigation & ARIA Table */}
          <div id="keyboard" style={{ scrollMarginTop: 80 }}>
            <Card
              variant="bordered"
              style={{
                backgroundColor: 'var(--color-surface)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                overflow: 'hidden',
              }}
            >
              <div style={{ padding: '18px 24px', borderBottom: '1px solid var(--color-border-default)', backgroundColor: 'var(--color-surface-raised)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                    Keyboard Navigation & ARIA Behavior
                  </h2>
                  <button
                    onClick={() => openFeedbackForSection('Keyboard Navigation & ARIA')}
                    title="Give feedback on Keyboard Navigation"
                    style={{
                      background: 'none',
                      border: '1px solid var(--color-border-subtle)',
                      borderRadius: 6,
                      padding: '4px 6px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                      color: 'var(--color-text-muted)',
                      transition: 'all 0.12s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-action-primary)';
                      e.currentTarget.style.borderColor = 'var(--color-action-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-text-muted)';
                      e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                    }}
                  >
                    <SectionCommentIcon size={14} />
                  </button>
                </div>
              </div>
              <div style={{ overflowX: 'auto', backgroundColor: 'var(--color-surface)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13, backgroundColor: 'var(--color-surface)' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--color-surface-raised)', borderBottom: '1px solid var(--color-border-default)' }}>
                      <th style={{ padding: '12px 20px', fontWeight: 600 }}>Key</th>
                      <th style={{ padding: '12px 20px', fontWeight: 600 }}>Action & Focus Behavior</th>
                    </tr>
                  </thead>
                  <tbody>
                    {meta.keyboard.map((k, idx) => (
                      <tr
                        key={k.key}
                        style={{
                          backgroundColor: idx % 2 === 0 ? 'var(--color-surface)' : 'var(--color-surface-raised)',
                          borderBottom: idx === meta.keyboard.length - 1 ? 'none' : '1px solid var(--color-border-subtle)',
                        }}
                      >
                        <td style={{ padding: '12px 20px', fontWeight: 600, width: 200 }}>
                          <kbd style={{ padding: '3px 8px', borderRadius: 4, border: '1px solid var(--color-border-default)', backgroundColor: 'var(--color-surface)', fontSize: 12 }}>
                            {k.key}
                          </kbd>
                        </td>
                        <td style={{ padding: '12px 20px', color: 'var(--color-text-secondary)' }}>
                          {k.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Comprehensive API Reference: Props, CSS Classes, Design Tokens, Native Mobile API */}
          <ComponentApiSection componentId={meta.id} />
        </>
      )}

      {/* 4. PLATFORM VIEW: Apple iOS */}
      {platformMode === 'ios' && (
        <div id="playground" style={{ display: 'flex', flexDirection: 'column', gap: 36, scrollMarginTop: 80 }}>
          <PlatformChassisViewer
            platform="ios"
            componentId={meta.id}
            componentName={meta.name}
            nativeProps={meta.nativeProps}
          >
            {renderNativePreview()}
          </PlatformChassisViewer>

          <div id="usage-variants" style={{ display: 'flex', flexDirection: 'column', gap: 16, scrollMarginTop: 80 }}>
            <Card
              variant="bordered"
              style={{
                backgroundColor: 'var(--color-surface)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                padding: '20px 24px',
                borderRadius: 12,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                  Apple iOS Usage Recipes & Variations
                </h2>
                <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
                  Apple HIG 44pt Touch Targets · Swift & React Native
                </span>
              </div>
            </Card>
            <ComponentVariantsShowcase componentId={meta.id} />
          </div>
        </div>
      )}

      {/* 5. PLATFORM VIEW: Google Android */}
      {platformMode === 'android' && (
        <div id="playground" style={{ display: 'flex', flexDirection: 'column', gap: 36, scrollMarginTop: 80 }}>
          <PlatformChassisViewer
            platform="android"
            componentId={meta.id}
            componentName={meta.name}
            nativeProps={meta.nativeProps}
          >
            {renderNativePreview()}
          </PlatformChassisViewer>

          <div id="usage-variants" style={{ display: 'flex', flexDirection: 'column', gap: 16, scrollMarginTop: 80 }}>
            <Card
              variant="bordered"
              style={{
                backgroundColor: 'var(--color-surface)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                padding: '20px 24px',
                borderRadius: 12,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                  Google Android Usage Recipes & Variations
                </h2>
                <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
                  Material 3 48dp Touch Targets · Kotlin & React Native
                </span>
              </div>
            </Card>
            <ComponentVariantsShowcase componentId={meta.id} />
          </div>
        </div>
      )}

      {/* 6. PLATFORM VIEW: Microsoft Windows */}
      {platformMode === 'windows' && (
        <div id="playground" style={{ display: 'flex', flexDirection: 'column', gap: 36, scrollMarginTop: 80 }}>
          <PlatformChassisViewer
            platform="windows"
            componentId={meta.id}
            componentName={meta.name}
            nativeProps={meta.nativeProps}
          >
            {renderNativePreview()}
          </PlatformChassisViewer>

          <div id="usage-variants" style={{ display: 'flex', flexDirection: 'column', gap: 16, scrollMarginTop: 80 }}>
            <Card
              variant="bordered"
              style={{
                backgroundColor: 'var(--color-surface)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                padding: '20px 24px',
                borderRadius: 12,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                  Microsoft Windows Usage Recipes & Variations
                </h2>
                <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
                  WinUI 3 · Acrylic/Mica · C# XAML & React Native for Windows
                </span>
              </div>
            </Card>
            <ComponentVariantsShowcase componentId={meta.id} />
          </div>
        </div>
      )}

      {/* 7. PLATFORM VIEW: Apple macOS */}
      {platformMode === 'macos' && (
        <div id="playground" style={{ display: 'flex', flexDirection: 'column', gap: 36, scrollMarginTop: 80 }}>
          <PlatformChassisViewer
            platform="macos"
            componentId={meta.id}
            componentName={meta.name}
            nativeProps={meta.nativeProps}
          >
            {renderNativePreview()}
          </PlatformChassisViewer>

          <div id="usage-variants" style={{ display: 'flex', flexDirection: 'column', gap: 16, scrollMarginTop: 80 }}>
            <Card
              variant="bordered"
              style={{
                backgroundColor: 'var(--color-surface)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                padding: '20px 24px',
                borderRadius: 12,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                  Apple macOS Usage Recipes & Variations
                </h2>
                <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
                  macOS Sequoia · AppKit / SwiftUI · React Native for macOS
                </span>
              </div>
            </Card>
            <ComponentVariantsShowcase componentId={meta.id} />
          </div>
        </div>
      )}



      {/* Resource Modal for Web React or Mobile Native */}
      {activeResourceModal && (
        <Dialog
          isOpen={true}
          onClose={() => setActiveResourceModal(null)}
        >
          <div style={{ padding: 24 }}>
            <h3 style={{ margin: '0 0 12px', fontSize: 18 }}>
              {activeResourceModal === 'react'
                ? `${meta.name} — Web React Guidance`
                : activeResourceModal === 'tokens'
                ? `${meta.name} — Design Tokens & CSS Variables`
                : `${meta.name} — Mobile Native Guidance`}
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, margin: '0 0 16px' }}>
              {activeResourceModal === 'react'
                ? `Import directly from @spectra/react for Web applications:`
                : activeResourceModal === 'tokens'
                ? `Customizable CSS design tokens and variables available for ${meta.name}:`
                : `Import from @spectra/react-native for native iOS and Android mobile apps:`}
            </p>
            <pre
              style={{
                backgroundColor: 'var(--color-surface-sunken)',
                color: 'var(--color-text-primary)',
                padding: '16px',
                borderRadius: 6,
                fontSize: 12,
                overflowX: 'auto',
                margin: 0,
              }}
            >
              <code>
                {activeResourceModal === 'react'
                  ? getCodeSnippet()
                  : activeResourceModal === 'tokens'
                  ? `/* Design Tokens for ${meta.name} */
--color-${meta.id}-bg: var(--color-surface);
--color-${meta.id}-border: var(--color-border-default);
--color-${meta.id}-text: var(--color-text-primary);
--radius-${meta.id}: var(--radius-component-md);
--shadow-${meta.id}: var(--elevation-raised);`
                  : getNativeCodeSnippet()}
              </code>
            </pre>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
              <Button variant="primary" onClick={() => setActiveResourceModal(null)}>
                Close
              </Button>
            </div>
          </div>
        </Dialog>
      )}

      {/* View as Markdown Modal (Image 2 Benchmark) */}
      {isMarkdownModalOpen && (
        <Dialog
          isOpen={isMarkdownModalOpen}
          onClose={() => setIsMarkdownModalOpen(false)}
        >
          <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: 'var(--color-text-primary)' }}>
              {meta.name} Documentation (Markdown)
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
              <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
                Raw GitHub-compatible documentation markdown for {meta.name}
              </span>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  const mdContent = `# @spectra/react: ${meta.name}

${meta.description}

## Installation

\`\`\`bash
npm install @spectra/react @spectra/icons
\`\`\`

## Basic Usage

\`\`\`tsx
import { ${meta.name} } from '@spectra/react';

export default function Example() {
  return (
    <${meta.name}>
      ${meta.name} Component
    </${meta.name}>
  );
}
\`\`\`

## Active Platform Environment
- Target: ${platformMeta.name}
- Package: ${platformMeta.package}
- Release: ${currentVersion}

## Accessibility (WAI-ARIA)
- Built with accessible keyboard patterns and ARIA roles.
- Supports light, dark, and system color mode preferences.
`;
                  navigator.clipboard.writeText(mdContent);
                  setMarkdownCopied(true);
                  setTimeout(() => setMarkdownCopied(false), 2000);
                }}
              >
                {markdownCopied ? <CheckIcon size={14} color="#10B981" /> : <CopyIcon size={14} />}
                <span>{markdownCopied ? 'Copied!' : 'Copy Markdown'}</span>
              </Button>
            </div>

            <pre
              style={{
                margin: 0,
                padding: '16px',
                backgroundColor: 'var(--color-surface-raised)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 8,
                fontSize: 12,
                lineHeight: 1.6,
                maxHeight: 380,
                overflowY: 'auto',
                whiteSpace: 'pre-wrap',
                color: 'var(--color-text-primary)',
                fontFamily: 'monospace',
              }}
            >
{`# @spectra/react: ${meta.name}

${meta.description}

## Installation

\`\`\`bash
npm install @spectra/react @spectra/icons
\`\`\`

## Basic Usage

\`\`\`tsx
import { ${meta.name} } from '@spectra/react';

export default function Example() {
  return (
    <${meta.name}>
      ${meta.name} Component
    </${meta.name}>
  );
}
\`\`\`

## Active Platform Environment
- Target: ${platformMeta.name}
- Package: ${platformMeta.package}
- Release: ${currentVersion}

## Accessibility (WAI-ARIA)
- Built with accessible keyboard patterns and ARIA roles.
- Supports light, dark, and system color mode preferences.`}
            </pre>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
              <Button variant="primary" onClick={() => setIsMarkdownModalOpen(false)}>
                Close
              </Button>
            </div>
          </div>
        </Dialog>
      )}

      {/* 4. Page Feedback & Edit Section (MUI & Fluent UI Benchmark - Image 1) */}
      <div
        id="page-feedback"
        style={{
          marginTop: 48,
          paddingTop: 32,
          borderTop: '1px solid var(--color-border-subtle)',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          scrollMarginTop: 80,
        }}
      >
        {/* Top Action Bar: [Edit this page] on Left, [Was this page helpful? 👍 👎] on Right */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          {/* Edit this page link */}
          <a
            href={getGitHubUrl(meta.id, platformMode).replace('/blob/', '/edit/')}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 13,
              fontWeight: 500,
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-action-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-text-secondary)';
            }}
          >
            <EditPageIcon size={14} />
            <span>Edit this page</span>
          </a>

          {/* Was this page helpful widget */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', fontWeight: 500 }}>
              Was this page helpful?
            </span>
            <div style={{ display: 'flex', gap: 6 }}>
              <button
                type="button"
                onClick={() => {
                  setFeedbackRating('positive');
                  setFeedbackFormOpen(true);
                }}
                title="Yes, this page was helpful"
                aria-label="Yes, this page was helpful"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 32,
                  height: 32,
                  borderRadius: 6,
                  border: `1px solid ${feedbackRating === 'positive' ? 'var(--color-action-primary)' : 'var(--color-border-default)'}`,
                  backgroundColor: feedbackRating === 'positive' ? 'rgba(0, 127, 255, 0.08)' : 'var(--color-surface)',
                  color: feedbackRating === 'positive' ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.12s ease',
                }}
                onMouseEnter={(e) => {
                  if (feedbackRating !== 'positive') {
                    e.currentTarget.style.borderColor = 'var(--color-action-primary)';
                    e.currentTarget.style.color = 'var(--color-action-primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (feedbackRating !== 'positive') {
                    e.currentTarget.style.borderColor = 'var(--color-border-default)';
                    e.currentTarget.style.color = 'var(--color-text-secondary)';
                  }
                }}
              >
                <ThumbsUpIcon size={14} />
              </button>

              <button
                type="button"
                onClick={() => {
                  setFeedbackRating('negative');
                  setFeedbackFormOpen(true);
                }}
                title="No, this page was not helpful"
                aria-label="No, this page was not helpful"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 32,
                  height: 32,
                  borderRadius: 6,
                  border: `1px solid ${feedbackRating === 'negative' ? 'var(--color-semantic-error, #ef4444)' : 'var(--color-border-default)'}`,
                  backgroundColor: feedbackRating === 'negative' ? 'rgba(239, 68, 68, 0.08)' : 'var(--color-surface)',
                  color: feedbackRating === 'negative' ? 'var(--color-semantic-error, #ef4444)' : 'var(--color-text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.12s ease',
                }}
                onMouseEnter={(e) => {
                  if (feedbackRating !== 'negative') {
                    e.currentTarget.style.borderColor = 'var(--color-semantic-error, #ef4444)';
                    e.currentTarget.style.color = 'var(--color-semantic-error, #ef4444)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (feedbackRating !== 'negative') {
                    e.currentTarget.style.borderColor = 'var(--color-border-default)';
                    e.currentTarget.style.color = 'var(--color-text-secondary)';
                  }
                }}
              >
                <ThumbsDownIcon size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Feedback Form (MUI Image 1 Benchmark) */}
        {feedbackFormOpen && (
          <div
            style={{
              padding: 20,
              borderRadius: 8,
              border: '1px solid var(--color-border-default)',
              backgroundColor: 'var(--color-surface-raised)',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              animation: 'fadeIn 0.2s ease-in-out',
            }}
          >
            {feedbackSubmitted ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '14px 16px',
                  borderRadius: 6,
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: 'var(--color-semantic-success, #10B981)',
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                <CheckIcon size={16} />
                <span>Thank you for your feedback! We continuously review documentation feedback to improve Spectra UI.</span>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <label
                    htmlFor="feedback-textarea"
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    How can we improve the &ldquo;{feedbackSection}&rdquo; section?{' '}
                    <span style={{ fontWeight: 400, color: 'var(--color-text-muted)' }}>(optional)</span>
                  </label>
                  {feedbackRating && (
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        padding: '2px 8px',
                        borderRadius: 12,
                        backgroundColor: feedbackRating === 'positive' ? 'rgba(16, 185, 129, 0.12)' : 'rgba(239, 68, 68, 0.12)',
                        color: feedbackRating === 'positive' ? '#10B981' : '#EF4444',
                      }}
                    >
                      {feedbackRating === 'positive' ? 'Marked helpful' : 'Needs improvement'}
                    </span>
                  )}
                </div>

                <textarea
                  id="feedback-textarea"
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="Tell us what was confusing, missing, or could be improved..."
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: 6,
                    border: '1px solid var(--color-border-default)',
                    backgroundColor: 'var(--color-surface)',
                    color: 'var(--color-text-primary)',
                    fontSize: 13,
                    fontFamily: 'inherit',
                    lineHeight: 1.5,
                    resize: 'vertical',
                    boxSizing: 'border-box',
                    outline: 'none',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-action-primary)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-default)';
                  }}
                />

                {/* Callout Notice linking to GitHub Issues */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '10px 14px',
                    borderRadius: 6,
                    backgroundColor: 'rgba(234, 179, 8, 0.08)',
                    border: '1px solid rgba(234, 179, 8, 0.25)',
                    fontSize: 12,
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.4,
                  }}
                >
                  <InfoHandIcon size={16} />
                  <span>
                    Looking for help or troubleshooting an issue? Please{' '}
                    <a
                      href="https://github.com/sagarkm/spectra-ui/issues/new/choose"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--color-action-primary)',
                        fontWeight: 600,
                        textDecoration: 'underline',
                      }}
                    >
                      open an issue instead
                    </a>
                    .
                  </span>
                </div>

                {/* Bottom buttons */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 4 }}>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setFeedbackFormOpen(false);
                      setFeedbackText('');
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      setFeedbackSubmitted(true);
                      setTimeout(() => {
                        setFeedbackFormOpen(false);
                        setFeedbackSubmitted(false);
                        setFeedbackText('');
                        setFeedbackRating(null);
                      }, 2500);
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
      </div> {/* End of Main Documentation Column */}

      {/* Sticky Table of Contents (On this page - matching MUI Benchmark with continuous left guide rule) */}
      <div
        style={{
          width: 220,
          position: 'sticky',
          top: 80,
          alignSelf: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          flexShrink: 0,
          paddingLeft: 4,
        }}
      >
        <nav
          aria-label="Table of contents"
          style={{
            display: 'flex',
            flexDirection: 'column',
            borderLeft: '1px solid var(--color-border-subtle)',
            fontSize: 13,
            paddingLeft: 0,
          }}
        >
          <span
            style={{
              fontWeight: 700,
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-text-muted)',
              marginBottom: 10,
              paddingLeft: 14,
            }}
          >
            On this page
          </span>

          {/* Section: Playground / Simulator */}
          <a
            href="#playground"
            onClick={(e) => scrollToSection(e, 'playground')}
            style={{
              display: 'block',
              padding: '6px 0 6px 14px',
              marginLeft: -1,
              borderLeft: activeSection === 'playground' ? '2px solid var(--color-action-primary)' : '2px solid transparent',
              color: activeSection === 'playground' ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
              fontWeight: activeSection === 'playground' ? 600 : 400,
              textDecoration: 'none',
              fontSize: 13,
              transition: 'all 0.12s ease',
            }}
            onMouseEnter={(e) => {
              if (activeSection !== 'playground') e.currentTarget.style.color = 'var(--color-text-primary)';
            }}
            onMouseLeave={(e) => {
              if (activeSection !== 'playground') e.currentTarget.style.color = 'var(--color-text-secondary)';
            }}
          >
            {platformMode === 'web' ? `Basic ${meta.name}` : `${platformMeta.name} Simulator`}
          </a>

          {/* Section: Usage & Variants */}
          <a
            href="#usage-variants"
            onClick={(e) => scrollToSection(e, 'usage-variants')}
            style={{
              display: 'block',
              padding: '6px 0 6px 14px',
              marginLeft: -1,
              borderLeft: activeSection === 'usage-variants' ? '2px solid var(--color-action-primary)' : '2px solid transparent',
              color: activeSection === 'usage-variants' ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
              fontWeight: activeSection === 'usage-variants' ? 600 : 400,
              textDecoration: 'none',
              fontSize: 13,
              transition: 'all 0.12s ease',
            }}
            onMouseEnter={(e) => {
              if (activeSection !== 'usage-variants') e.currentTarget.style.color = 'var(--color-text-primary)';
            }}
            onMouseLeave={(e) => {
              if (activeSection !== 'usage-variants') e.currentTarget.style.color = 'var(--color-text-secondary)';
            }}
          >
            {platformMode === 'web' ? `Variants (${variants.length})` : `${platformMeta.name} Recipes`}
          </a>

          {/* Sub-variant links with indent & scrollspy connected to guide rule */}
          {platformMode === 'web' && variants.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', margin: '2px 0 6px 0' }}>
              {variants.map((v) => {
                const isActive = activeSection === v.id;
                return (
                  <a
                    key={v.id}
                    href={`#${v.id}`}
                    onClick={(e) => scrollToSection(e, v.id)}
                    style={{
                      display: 'block',
                      padding: '4px 0 4px 26px',
                      marginLeft: -1,
                      borderLeft: isActive ? '2px solid var(--color-action-primary)' : '2px solid transparent',
                      color: isActive ? 'var(--color-action-primary)' : 'var(--color-text-muted)',
                      fontWeight: isActive ? 600 : 400,
                      textDecoration: 'none',
                      fontSize: 12,
                      lineHeight: 1.4,
                      transition: 'all 0.12s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'var(--color-text-primary)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'var(--color-text-muted)';
                    }}
                  >
                    {v.title}
                  </a>
                );
              })}
            </div>
          )}

          {platformMode === 'web' && (
            <>
              {/* Section: Resources */}
              <a
                href="#resources"
                onClick={(e) => scrollToSection(e, 'resources')}
                style={{
                  display: 'block',
                  padding: '6px 0 6px 14px',
                  marginLeft: -1,
                  borderLeft: activeSection === 'resources' ? '2px solid var(--color-action-primary)' : '2px solid transparent',
                  color: activeSection === 'resources' ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                  fontWeight: activeSection === 'resources' ? 600 : 400,
                  textDecoration: 'none',
                  fontSize: 13,
                  transition: 'all 0.12s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== 'resources') e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== 'resources') e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                Resources
              </a>

              {/* Section: Anatomy */}
              <a
                href="#anatomy"
                onClick={(e) => scrollToSection(e, 'anatomy')}
                style={{
                  display: 'block',
                  padding: '6px 0 6px 14px',
                  marginLeft: -1,
                  borderLeft: activeSection === 'anatomy' ? '2px solid var(--color-action-primary)' : '2px solid transparent',
                  color: activeSection === 'anatomy' ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                  fontWeight: activeSection === 'anatomy' ? 600 : 400,
                  textDecoration: 'none',
                  fontSize: 13,
                  transition: 'all 0.12s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== 'anatomy') e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== 'anatomy') e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                Anatomy & Slots
              </a>

              {/* Section: Motion */}
              <a
                href="#motion"
                onClick={(e) => scrollToSection(e, 'motion')}
                style={{
                  display: 'block',
                  padding: '6px 0 6px 14px',
                  marginLeft: -1,
                  borderLeft: activeSection === 'motion' ? '2px solid var(--color-action-primary)' : '2px solid transparent',
                  color: activeSection === 'motion' ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                  fontWeight: activeSection === 'motion' ? 600 : 400,
                  textDecoration: 'none',
                  fontSize: 13,
                  transition: 'all 0.12s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== 'motion') e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== 'motion') e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                Motion & Effects
              </a>

              {/* Section: Guidelines */}
              <a
                href="#guidelines"
                onClick={(e) => scrollToSection(e, 'guidelines')}
                style={{
                  display: 'block',
                  padding: '6px 0 6px 14px',
                  marginLeft: -1,
                  borderLeft: activeSection === 'guidelines' ? '2px solid var(--color-action-primary)' : '2px solid transparent',
                  color: activeSection === 'guidelines' ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                  fontWeight: activeSection === 'guidelines' ? 600 : 400,
                  textDecoration: 'none',
                  fontSize: 13,
                  transition: 'all 0.12s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== 'guidelines') e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== 'guidelines') e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                Guidelines (Dos & Don'ts)
              </a>

              {/* Section: Keyboard */}
              <a
                href="#keyboard"
                onClick={(e) => scrollToSection(e, 'keyboard')}
                style={{
                  display: 'block',
                  padding: '6px 0 6px 14px',
                  marginLeft: -1,
                  borderLeft: activeSection === 'keyboard' ? '2px solid var(--color-action-primary)' : '2px solid transparent',
                  color: activeSection === 'keyboard' ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                  fontWeight: activeSection === 'keyboard' ? 600 : 400,
                  textDecoration: 'none',
                  fontSize: 13,
                  transition: 'all 0.12s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== 'keyboard') e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== 'keyboard') e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                Keyboard & ARIA
              </a>

              {/* Section: API Reference */}
              <a
                href="#api"
                onClick={(e) => scrollToSection(e, 'api')}
                style={{
                  display: 'block',
                  padding: '6px 0 6px 14px',
                  marginLeft: -1,
                  borderLeft: (activeSection === 'api' || activeSection === 'props') ? '2px solid var(--color-action-primary)' : '2px solid transparent',
                  color: (activeSection === 'api' || activeSection === 'props') ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                  fontWeight: (activeSection === 'api' || activeSection === 'props') ? 600 : 400,
                  textDecoration: 'none',
                  fontSize: 13,
                  transition: 'all 0.12s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== 'api' && activeSection !== 'props') e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== 'api' && activeSection !== 'props') e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                API Reference (Props & CSS)
              </a>
            </>
          )}

          {/* Section: Feedback & Edit */}
          <a
            href="#page-feedback"
            onClick={(e) => scrollToSection(e, 'page-feedback')}
            style={{
              display: 'block',
              padding: '6px 0 6px 14px',
              marginLeft: -1,
              borderLeft: activeSection === 'page-feedback' ? '2px solid var(--color-action-primary)' : '2px solid transparent',
              color: activeSection === 'page-feedback' ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
              fontWeight: activeSection === 'page-feedback' ? 600 : 400,
              textDecoration: 'none',
              fontSize: 13,
              transition: 'all 0.12s ease',
            }}
            onMouseEnter={(e) => {
              if (activeSection !== 'page-feedback') e.currentTarget.style.color = 'var(--color-text-primary)';
            }}
            onMouseLeave={(e) => {
              if (activeSection !== 'page-feedback') e.currentTarget.style.color = 'var(--color-text-secondary)';
            }}
          >
            Feedback & Edit
          </a>
        </nav>

      {/* Developer Native Sponsor Ad Unit (MUI & Carbon Ads benchmark) */}
      <NativeSponsorAd publisherTheme="docs" style={{ width: '100%' }} />
    </div>
  </div>
  );
};
