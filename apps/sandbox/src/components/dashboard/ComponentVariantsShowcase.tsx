import React, { useState } from 'react';
import {
  Button,
  SplitButton,
  CompoundButton,
  ButtonGroup,
  IconButton,
  TextInput,
  Textarea,
  Select,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Switch,
  Slider,
  Rating,
  Autocomplete,
  Combobox,
  Badge,
  Tag,
  Card,
  MediaCard,
  Paper,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Dialog,
  Tooltip,
  Popover,
  Avatar,
  AvatarGroup,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
  DataGrid,
  TreeView,
  Statistic,
  Timeline,
  TimelineItem,
  Calendar,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  Alert,
  Toast,
  Drawer,
  ProgressBar,
  Spinner,
  Skeleton,
  Divider,
  Chip,
  Breadcrumbs,
  Pagination,
  Stepper,
  Menu,
  MenuItem,
  AppBar,
  BottomNav,
  Link,
  SpeedDial,
  Text,
} from '@spectra/react';
import {
  CheckIcon,
  CloseIcon,
  SearchIcon,
  AlertCircleIcon,
  InfoIcon,
  UserIcon,
  ChevronDownIcon,
  PlusIcon,
  MinusIcon,
  ExternalLinkIcon,
  SparklesIcon,
  EyeIcon,
  EyeOffIcon,
  CopyIcon,
} from '@spectra/icons';
import { ComponentDemoCard } from './ComponentDemoCard';

export interface VariantMeta {
  id: string;
  title: string;
}

export const COMPONENT_VARIANTS_MAP: Record<string, VariantMeta[]> = {
  button: [
    { id: 'button-variants', title: 'Visual Variants & Hierarchy' },
    { id: 'button-sizes', title: 'Sizing Scale & Density' },
    { id: 'button-icons', title: 'Leading & Trailing Icons' },
    { id: 'button-states', title: 'Loading & Disabled States' },
    { id: 'button-block', title: 'Full-Width Block Layout' },
    { id: 'button-compound', title: 'Compound Button (Fluent 2 Pattern)' },
    { id: 'button-split', title: 'Split Button with Action Flyout' },
    { id: 'button-group', title: 'Segmented Attached Button Group' },
  ],
  'text-input': [
    { id: 'input-icons', title: 'Contextual Vector Icons' },
    { id: 'input-validation', title: 'Validation & Error States' },
    { id: 'input-helper', title: 'Helper Text & Description' },
    { id: 'input-password', title: 'Password Reveal with Visibility Toggle' },
    { id: 'input-clearable', title: 'Clearable Search Input with Reset' },
    { id: 'input-adornments', title: 'Prefix & Suffix Currency/Domain Adornments' },
    { id: 'input-counter', title: 'Live Character Counter & Length Limit' },
  ],
  select: [
    { id: 'select-basic', title: 'Standard Selection Dropdown' },
    { id: 'select-default', title: 'Preselected Default Value' },
    { id: 'select-states', title: 'Disabled State & Validation' },
    { id: 'select-grouped', title: 'Grouped Categories & Options' },
  ],
  checkbox: [
    { id: 'checkbox-interactive', title: 'Single Checkbox with Description' },
    { id: 'checkbox-indeterminate', title: 'Indeterminate Multi-Item State' },
    { id: 'checkbox-group', title: 'Form Validation Preference Group' },
    { id: 'checkbox-cards', title: 'Checkbox Selection Cards & Tiles' },
  ],
  radio: [
    { id: 'radio-billing', title: 'Mutually Exclusive Plan Cards' },
    { id: 'radio-horizontal', title: 'Horizontal Inline Radio Group' },
    { id: 'radio-segmented', title: 'Segmented Pill Radio Group' },
  ],
  switch: [
    { id: 'switch-interactive', title: 'Instant Binary Setting Toggles' },
    { id: 'switch-panel', title: 'Settings Row Preference Panel' },
  ],
  accordion: [
    { id: 'accordion-single', title: 'Single Expansion (FAQ Pattern)' },
    { id: 'accordion-multiple', title: 'Simultaneous Multi-Panel Expansion' },
  ],
  avatar: [
    { id: 'avatar-scales', title: 'Sizing Scales with Presence Badges' },
    { id: 'avatar-stack', title: 'Overlapping Team Avatar Stack' },
    { id: 'avatar-fallback', title: 'Initials & Custom Status Indicator' },
    { id: 'avatar-persona', title: 'Persona Card with Presence & Email' },
  ],
  badge: [
    { id: 'badge-variants', title: 'All Semantic Status Variants' },
    { id: 'badge-dots', title: 'Status Dot Indicators' },
  ],
  tabs: [
    { id: 'tabs-underline', title: 'Underline Navigation Style' },
    { id: 'tabs-pills', title: 'Segmented Pills Style' },
    { id: 'tabs-vertical', title: 'Vertical Sidebar Navigation Tabs' },
  ],
  card: [
    { id: 'card-variants', title: 'Surface Variants (Bordered, Elevated)' },
    { id: 'card-interactive', title: 'Structured Action Card' },
    { id: 'card-stats', title: 'KPI Analytics & Metrics Card' },
    { id: 'card-media', title: 'Structured Media & Preview Card' },
  ],
  tooltip: [
    { id: 'tooltip-placements', title: 'Compass Placements (Top, Bottom, Left, Right)' },
    { id: 'tooltip-icon', title: 'Tooltip on Icon Action' },
  ],
  list: [
    { id: 'list-interactive', title: 'Interactive List with Icons & Badges' },
    { id: 'list-team', title: 'User List with Avatars & Presence Status' },
    { id: 'list-settings', title: 'Settings List with End-Action Switches' },
  ],
  dialog: [
    { id: 'dialog-confirm', title: 'Confirmation Modal Dialog' },
    { id: 'dialog-form', title: 'Form Input Modal Dialog' },
    { id: 'dialog-danger', title: 'Destructive Delete Confirmation' },
  ],
  alert: [
    { id: 'alert-variants', title: 'Status Severity Variants (Info, Success, Warning, Danger)' },
    { id: 'alert-dismissible', title: 'Dismissible Alerts with Custom Handlers' },
    { id: 'alert-actionable', title: 'Actionable Alert with Inline Action' },
  ],
  spinner: [
    { id: 'spinner-sizes', title: 'Sizing Scale (Small, Medium, Large)' },
    { id: 'spinner-inline', title: 'Inline Button Loading State' },
  ],
  skeleton: [
    { id: 'skeleton-shapes', title: 'Shapes & Morphologies (Text, Circle, Rounded, Card)' },
    { id: 'skeleton-interactive', title: 'Interactive Loading State Toggle' },
  ],
  divider: [
    { id: 'divider-horizontal', title: 'Horizontal Divider with Centered Text Inset' },
    { id: 'divider-vertical', title: 'Vertical Divider between Toolbar Actions' },
    { id: 'divider-styles', title: 'Border Stroke Styles (Solid, Dashed, Dotted)' },
  ],
  chip: [
    { id: 'chip-variants', title: 'Filled and Outlined Surface Styles' },
    { id: 'chip-filters', title: 'Selectable Filter Chips Set' },
    { id: 'chip-deletable', title: 'Deletable Tag Badges' },
  ],
  breadcrumbs: [
    { id: 'breadcrumbs-basic', title: 'Standard Breadcrumb Trail' },
    { id: 'breadcrumbs-custom', title: 'Custom Separator Nodes' },
    { id: 'breadcrumbs-collapsed', title: 'Max Items with Collapsed Ellipsis' },
  ],
  'split-button': [
    { id: 'split-button-merge', title: 'Primary Split Button (Git Merge Flow)' },
    { id: 'split-button-secondary', title: 'Secondary Export & Download Split' },
    { id: 'split-button-sizes', title: 'Density & Sizing Hierarchy' },
  ],
  'compound-button': [
    { id: 'compound-button-variants', title: 'Action Hierarchy (Primary, Secondary)' },
    { id: 'compound-button-icons', title: 'Contextual Feature Icon Badges' },
  ],
  'button-group': [
    { id: 'button-group-segmented', title: 'Segmented Attached Mode' },
    { id: 'button-group-vertical', title: 'Vertical Toolbar Orientation' },
  ],
  'icon-button': [
    { id: 'icon-button-shapes', title: 'Shapes (Circle, Rounded, Square)' },
    { id: 'icon-button-sizes', title: 'Sizing Scale & Compact Density' },
  ],
  slider: [
    { id: 'slider-continuous', title: 'Continuous Range with Real-Time Tooltip' },
    { id: 'slider-stepped', title: 'Discrete Incremental Steps' },
  ],
  rating: [
    { id: 'rating-interactive', title: 'Interactive Star Rating with Hover' },
    { id: 'rating-readonly', title: 'Read-only Metric Display' },
  ],
  textarea: [
    { id: 'textarea-counter', title: 'Character Counter & Limit' },
    { id: 'textarea-validation', title: 'Validation & Error States' },
  ],
  'checkbox-group': [
    { id: 'checkbox-group-vertical', title: 'Vertical Fieldset Group' },
    { id: 'checkbox-group-horizontal', title: 'Inline Horizontal Checkbox Group' },
  ],
  autocomplete: [
    { id: 'autocomplete-filter', title: 'Filterable Platform Selector' },
  ],
  combobox: [
    { id: 'combobox-filter', title: 'Filterable Platform Selector' },
  ],
  'avatar-group': [
    { id: 'avatar-group-stack', title: 'Overlapping Avatar Stack with Overflow Counter' },
  ],
  tag: [
    { id: 'tag-variants', title: 'Status Colors & Dismissible Badges' },
  ],
  'media-card': [
    { id: 'media-card-banner', title: 'Structured Media Banner & Action Slots' },
  ],
  table: [
    { id: 'table-striped', title: 'Striped Data Grid with Status Badges' },
  ],
  'data-grid': [
    { id: 'data-grid-striped', title: 'Striped Data Grid with Status Badges' },
  ],
  'tree-view': [
    { id: 'tree-view-folders', title: 'Collapsible Project Directory Tree' },
  ],
  statistic: [
    { id: 'statistic-kpi', title: 'KPI Metrics with Trend Direction' },
  ],
  timeline: [
    { id: 'timeline-audit', title: 'Deployment Audit Trail' },
  ],
  calendar: [
    { id: 'calendar-grid', title: 'Interactive Month Calendar Grid' },
  ],
  'progress-bar': [
    { id: 'progress-bar-states', title: 'Percentage Fill & Indeterminate States' },
  ],
  toast: [
    { id: 'toast-banners', title: 'Status Severity Notifications' },
  ],
  drawer: [
    { id: 'drawer-sheet', title: 'Slide-Out Sheet Overlay' },
  ],
  paper: [
    { id: 'paper-elevations', title: 'Elevation Depth Scale (0-4)' },
  ],
  pagination: [
    { id: 'pagination-controls', title: 'Interactive Multi-Page Controls' },
  ],
  stepper: [
    { id: 'stepper-flow', title: 'Multi-Step Wizard Progress Indicator' },
  ],
  menu: [
    { id: 'menu-flyout', title: 'Command Flyout with Shortcuts' },
  ],
  'app-bar': [
    { id: 'app-bar-header', title: 'Persistent Application Navigation Bar' },
  ],
  link: [
    { id: 'link-styles', title: 'External and Internal Link Styling' },
  ],
  'speed-dial': [
    { id: 'speed-dial-fab', title: 'Floating Action Button Speed Dial' },
  ],
  popover: [
    { id: 'popover-anchored', title: 'Anchored Floating Context Overlay' },
  ],
};

interface ComponentVariantsShowcaseProps {
  componentId: string;
}

export const ComponentVariantsShowcase: React.FC<ComponentVariantsShowcaseProps> = ({ componentId }) => {
  // Local state for interactive variant demos
  const [alertDismissed, setAlertDismissed] = useState(false);
  const [skeletonLoading, setSkeletonLoading] = useState(true);
  const [selectedChips, setSelectedChips] = useState<string[]>(['React', 'TypeScript']);
  const [chipTags, setChipTags] = useState(['Design System', 'Accessibility', 'Tokens', 'Performance']);
  const [activeTab1, setActiveTab1] = useState('1');
  const [activeTab2, setActiveTab2] = useState('1');
  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(true);
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(false);
  const [radioVal, setRadioVal] = useState('monthly');
  const [radioAlign, setRadioAlign] = useState('left');
  const [selectVal, setSelectVal] = useState('us-east');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formDialogOpen, setFormDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [listSwitch1, setListSwitch1] = useState(true);
  const [listSwitch2, setListSwitch2] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState('SpectraUI#2026');
  const [groupCheck1, setGroupCheck1] = useState(true);
  const [groupCheck2, setGroupCheck2] = useState(true);
  const [groupCheck3, setGroupCheck3] = useState(false);
  const [groupedSelectVal, setGroupedSelectVal] = useState('postgres');
  const [splitMenuOpen, setSplitMenuOpen] = useState(false);
  const [splitAction, setSplitAction] = useState('Create merge commit');
  const [buttonGroupVal, setButtonGroupVal] = useState<'day' | 'week' | 'month'>('week');
  const [clearableText, setClearableText] = useState('Search components and design tokens...');
  const [counterText, setCounterText] = useState('Building a unified multi-platform design system');
  const [adornmentPrice, setAdornmentPrice] = useState('249.00');
  const [selectedCardTiers, setSelectedCardTiers] = useState<string[]>(['standard', 'performance']);
  const [segmentedRadio, setSegmentedRadio] = useState('grid');
  const [verticalTab, setVerticalTab] = useState('profile');

  switch (componentId) {
    case 'button':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* Demo 1: Visual Variants */}
          <ComponentDemoCard
            id="button-variants"
            title="Visual Variants & Hierarchy"
            description="Use Primary for the main call to action, Secondary for secondary actions, Tertiary for low-emphasis, and Danger for destructive actions."
            webPreview={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                <Button variant="primary">Primary Action</Button>
                <Button variant="secondary">Secondary Action</Button>
                <Button variant="tertiary">Tertiary Action</Button>
                <Button variant="danger">Destructive Action</Button>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
                <Button variant="primary" style={{ width: '100%' }}>Filled Primary</Button>
                <Button variant="secondary" style={{ width: '100%' }}>Outlined Secondary</Button>
                <Button variant="danger" style={{ width: '100%' }}>Destructive</Button>
              </div>
            }
            compactCode={`<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="tertiary">Tertiary Action</Button>
<Button variant="danger">Destructive Action</Button>`}
            webCode={`import React from 'react';
import { Button } from '@spectra/react';
import type { ButtonProps } from '@spectra/react';

export default function ButtonVariantsDemo(): JSX.Element {
  const handleClick = (variant: string): void => {
    console.log(\`Clicked \${variant}\`);
  };

  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <Button variant="primary" onClick={(): void => handleClick('primary')}>Primary Action</Button>
      <Button variant="secondary" onClick={(): void => handleClick('secondary')}>Secondary Action</Button>
      <Button variant="tertiary" onClick={(): void => handleClick('tertiary')}>Tertiary Action</Button>
      <Button variant="danger" onClick={(): void => handleClick('danger')}>Destructive Action</Button>
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Button } from '@spectra/react-native';
import type { ButtonVariant } from '@spectra/react-native';

export default function NativeButtonVariantsDemo(): JSX.Element {
  const handlePress = (variant: ButtonVariant): void => {
    console.log(\`Pressed \${variant}\`);
  };

  return (
    <View style={{ gap: 10 }}>
      <Button variant="filled" onPress={(): void => handlePress('filled')}>Filled Primary</Button>
      <Button variant="outline" onPress={(): void => handlePress('outline')}>Outlined Secondary</Button>
      <Button variant="danger" onPress={(): void => handlePress('danger')}>Destructive</Button>
    </View>
  );
}`}
          />

          {/* Demo 2: Sizing Scale */}
          <ComponentDemoCard
            id="button-sizes"
            title="Sizing Scale & Density"
            description="Three standardized sizes: Small (sm: 32px) for dense data tables, Medium (md: 40px) for standard UI, and Large (lg: 48px) for mobile and hero screens."
            compactCode={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
            webPreview={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                <Button variant="primary" size="sm">Small (sm)</Button>
                <Button variant="primary" size="md">Medium (md)</Button>
                <Button variant="primary" size="lg">Large (lg)</Button>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
                <Button variant="primary" size="sm" style={{ width: '100%' }}>Native Small (36pt)</Button>
                <Button variant="primary" size="md" style={{ width: '100%' }}>Native Medium (44pt)</Button>
                <Button variant="primary" size="lg" style={{ width: '100%' }}>Native Large (52pt)</Button>
              </div>
            }
            webCode={`import React from 'react';
import { Button } from '@spectra/react';
import type { ButtonSize } from '@spectra/react';

export default function ButtonSizesDemo(): JSX.Element {
  const sizes: ButtonSize[] = ['sm', 'md', 'lg'];

  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      {sizes.map((sz: ButtonSize): JSX.Element => (
        <Button key={sz} size={sz}>
          Size {sz.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Button } from '@spectra/react-native';
import type { ButtonSize } from '@spectra/react-native';

export default function NativeButtonSizesDemo(): JSX.Element {
  return (
    <View style={{ gap: 10 }}>
      <Button size="sm">Small (36pt)</Button>
      <Button size="md">Medium (44pt Apple HIG)</Button>
      <Button size="lg">Large (52pt)</Button>
    </View>
  );
}`}
          />

          {/* Demo 3: With Icons */}
          <ComponentDemoCard
            id="button-icons"
            title="Buttons with Leading, Trailing & Standalone Icons"
            description="Enhance cognitive recognition by pairing clear vector icons with text, or use icon-only buttons with accessible labels."
            compactCode={`<Button variant="primary" icon={<CheckIcon size={16} />}>
  Approve Order
</Button>
<Button variant="secondary" icon={<SearchIcon size={16} />} iconPosition="right">
  Search Logs
</Button>
<Button variant="secondary" icon={<CloseIcon size={16} />} aria-label="Dismiss alert" />`}
            webPreview={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                <Button variant="primary" icon={<CheckIcon size={16} />}>
                  Approve Order
                </Button>
                <Button variant="secondary" icon={<SearchIcon size={16} />} iconPosition="right">
                  Search Logs
                </Button>
                <Button variant="secondary" icon={<CloseIcon size={16} />} aria-label="Dismiss alert" />
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
                <Button variant="primary" icon={<CheckIcon size={16} />} style={{ width: '100%' }}>
                  Approve Order
                </Button>
                <Button variant="secondary" icon={<SearchIcon size={16} />} style={{ width: '100%' }}>
                  Search Logs
                </Button>
              </div>
            }
            webCode={`import React from 'react';
import { Button } from '@spectra/react';
import type { ButtonProps } from '@spectra/react';
import { CheckIcon, SearchIcon, CloseIcon } from '@spectra/icons';

export default function ButtonIconsDemo(): JSX.Element {
  const handleApprove = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log('Approved', e);
  };

  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <Button variant="primary" icon={<CheckIcon size={16} />} onClick={handleApprove}>
        Approve Order
      </Button>
      <Button variant="secondary" icon={<SearchIcon size={16} />} iconPosition="right">
        Search Logs
      </Button>
      <Button variant="secondary" icon={<CloseIcon size={16} />} aria-label="Dismiss alert" />
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Button } from '@spectra/react-native';
import { CheckIcon, SearchIcon } from '@spectra/icons';

export default function NativeButtonIconsDemo(): JSX.Element {
  return (
    <View style={{ gap: 10 }}>
      <Button variant="filled" icon={<CheckIcon size={16} />}>Approve Order</Button>
      <Button variant="outline" icon={<SearchIcon size={16} />}>Search Logs</Button>
    </View>
  );
}`}
          />

          {/* Demo 4: Loading & Disabled States */}
          <ComponentDemoCard
            id="button-states"
            title="Asynchronous Loading & Disabled States"
            description="Prevent duplicate submissions by displaying an integrated spinner while keeping layout dimensions intact."
            webPreview={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                <Button variant="primary" isLoading>
                  Deploying Cluster...
                </Button>
                <Button variant="secondary" disabled>
                  Disabled Action
                </Button>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
                <Button variant="primary" isLoading style={{ width: '100%' }}>
                  Deploying Cluster...
                </Button>
                <Button variant="secondary" disabled style={{ width: '100%' }}>
                  Disabled Action
                </Button>
              </div>
            }
            webCode={`import React, { useState } from 'react';
import { Button } from '@spectra/react';
import type { ButtonProps } from '@spectra/react';

export default function ButtonStatesDemo(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <Button variant="primary" isLoading={loading} onClick={(): void => setLoading(!loading)}>
        Deploying Cluster...
      </Button>
      <Button variant="secondary" disabled>
        Disabled Action
      </Button>
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Button } from '@spectra/react-native';

export default function NativeButtonStatesDemo(): JSX.Element {
  return (
    <View style={{ gap: 10 }}>
      <Button variant="filled" isLoading>Deploying Cluster...</Button>
      <Button variant="outline" disabled>Disabled Action</Button>
    </View>
  );
}`}
          />

          {/* Demo 5: Full Width Block Layout */}
          <ComponentDemoCard
            id="button-block"
            title="Full-Width Block Layout"
            description="Expand buttons across the full container width for mobile viewport actions and modal bottom sheets."
            webPreview={
              <div style={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Button variant="primary" style={{ width: '100%' }}>
                  Continue to Payment
                </Button>
                <Button variant="secondary" style={{ width: '100%' }}>
                  Save for Later
                </Button>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Button variant="primary" style={{ width: '100%' }}>Continue to Checkout</Button>
                <Button variant="secondary" style={{ width: '100%' }}>Cancel</Button>
              </div>
            }
            webCode={`import React from 'react';
import { Button } from '@spectra/react';
import type { ButtonProps } from '@spectra/react';

export default function BlockButtonDemo(): JSX.Element {
  return (
    <div style={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Button variant="primary" style={{ width: '100%' }}>
        Continue to Payment
      </Button>
      <Button variant="secondary" style={{ width: '100%' }}>
        Save for Later
      </Button>
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Button } from '@spectra/react-native';

export default function NativeBlockButtonDemo(): JSX.Element {
  return (
    <View style={{ width: '100%', gap: 10 }}>
      <Button variant="filled" style={{ width: '100%' }}>Continue to Checkout</Button>
      <Button variant="outline" style={{ width: '100%' }}>Cancel</Button>
    </View>
  );
}`}
          />

          {/* Demo 6: Compound Button (Fluent 2 Pattern) */}
          <ComponentDemoCard
            id="button-compound"
            title="Compound Button (Fluent 2 Pattern)"
            description="Features a prominent primary label accompanied by a secondary descriptive subtitle, ideal for high-impact onboarding and choice actions."
            webPreview={
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <button
                  type="button"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 14,
                    padding: '16px 20px',
                    borderRadius: 12,
                    border: '1px solid var(--color-border-subtle)',
                    background: 'var(--color-surface-elevated)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    boxShadow: 'var(--shadow-sm)',
                    maxWidth: 320,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  }}
                >
                  <div style={{ padding: 8, borderRadius: 8, background: 'var(--color-primary-subtle)', color: 'var(--color-primary)', display: 'flex' }}>
                    <SparklesIcon size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>New Workspace</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', marginTop: 2 }}>Create a collaborative design repository with tokens</div>
                  </div>
                </button>
                <button
                  type="button"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 14,
                    padding: '16px 20px',
                    borderRadius: 12,
                    border: '1px solid var(--color-border-subtle)',
                    background: 'var(--color-surface-elevated)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    boxShadow: 'var(--shadow-sm)',
                    maxWidth: 320,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  }}
                >
                  <div style={{ padding: 8, borderRadius: 8, background: 'var(--color-surface-hover)', color: 'var(--color-text-secondary)', display: 'flex' }}>
                    <ExternalLinkIcon size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>Import Figma</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', marginTop: 2 }}>Sync variables and design tokens from Figma styles</div>
                  </div>
                </button>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%', gap: 10, display: 'flex', flexDirection: 'column' }}>
                <Button variant="secondary" style={{ width: '100%', padding: '14px 16px' }}>
                  New Workspace (Collaborative design repo)
                </Button>
              </div>
            }
            webCode={`import React from 'react';
import { SparklesIcon } from '@spectra/icons';

export default function CompoundButtonDemo(): JSX.Element {
  return (
    <button
      type="button"
      className="spectra-compound-button"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 14,
        padding: '16px 20px',
        borderRadius: 12,
        border: '1px solid var(--color-border-subtle)',
        background: 'var(--color-surface-elevated)',
        cursor: 'pointer',
        textAlign: 'left',
      }}
    >
      <div style={{ padding: 8, borderRadius: 8, background: 'var(--color-primary-subtle)', color: 'var(--color-primary)' }}>
        <SparklesIcon size={20} />
      </div>
      <div>
        <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>New Workspace</div>
        <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>Create a collaborative design repository</div>
      </div>
    </button>
  );
}`}
            nativeCode={`import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function NativeCompoundButtonDemo(): JSX.Element {
  return (
    <TouchableOpacity style={{ padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#E2E8F0' }}>
      <Text style={{ fontWeight: '600', fontSize: 16 }}>New Workspace</Text>
      <Text style={{ fontSize: 13, color: '#64748B', marginTop: 4 }}>Create a collaborative design repository</Text>
    </TouchableOpacity>
  );
}`}
          />

          {/* Demo 7: Split Button with Action Flyout */}
          <ComponentDemoCard
            id="button-split"
            title="Split Button with Action Flyout"
            description="Combines a default single-click primary action with a secondary chevron button that reveals alternative execution choices."
            webPreview={
              <div style={{ position: 'relative', display: 'inline-flex' }}>
                <div style={{ display: 'inline-flex', borderRadius: 8, overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                  <Button variant="primary" style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
                    {splitAction}
                  </Button>
                  <button
                    type="button"
                    onClick={() => setSplitMenuOpen(!splitMenuOpen)}
                    aria-label="Toggle actions"
                    style={{
                      border: 'none',
                      background: 'var(--color-primary-hover, #1d4ed8)',
                      color: '#ffffff',
                      padding: '0 10px',
                      cursor: 'pointer',
                      borderLeft: '1px solid rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ChevronDownIcon size={16} />
                  </button>
                </div>
                {splitMenuOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      right: 0,
                      marginTop: 6,
                      background: 'var(--color-surface-elevated)',
                      border: '1px solid var(--color-border-subtle)',
                      borderRadius: 8,
                      boxShadow: 'var(--shadow-lg)',
                      zIndex: 100,
                      minWidth: 200,
                      overflow: 'hidden',
                    }}
                  >
                    {['Create merge commit', 'Squash and merge', 'Rebase and merge'].map((action) => (
                      <button
                        key={action}
                        type="button"
                        onClick={() => {
                          setSplitAction(action);
                          setSplitMenuOpen(false);
                        }}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          border: 'none',
                          background: splitAction === action ? 'var(--color-primary-subtle)' : 'transparent',
                          color: splitAction === action ? 'var(--color-primary)' : 'var(--color-text-primary)',
                          fontWeight: splitAction === action ? 600 : 400,
                          fontSize: '0.875rem',
                          textAlign: 'left',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span>{action}</span>
                        {splitAction === action && <CheckIcon size={14} />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Button variant="primary" style={{ width: '100%' }}>
                  {splitAction}
                </Button>
              </div>
            }
            webCode={`import React, { useState } from 'react';
import { Button } from '@spectra/react';
import { ChevronDownIcon, CheckIcon } from '@spectra/icons';

export default function SplitButtonDemo(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState('Create merge commit');

  return (
    <div style={{ position: 'relative', display: 'inline-flex' }}>
      <div style={{ display: 'inline-flex', borderRadius: 8, overflow: 'hidden' }}>
        <Button variant="primary" style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
          {action}
        </Button>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle actions"
          style={{
            border: 'none',
            background: 'var(--color-primary-hover)',
            color: '#fff',
            padding: '0 10px',
            cursor: 'pointer',
            borderLeft: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          <ChevronDownIcon size={16} />
        </button>
      </div>
      {open && (
        <div style={{ position: 'absolute', top: '100%', right: 0, marginTop: 6, background: '#fff', borderRadius: 8, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
          {['Create merge commit', 'Squash and merge', 'Rebase and merge'].map((item) => (
            <button key={item} onClick={() => { setAction(item); setOpen(false); }}>
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Button } from '@spectra/react-native';

export default function NativeSplitButtonDemo(): JSX.Element {
  return (
    <View style={{ width: '100%' }}>
      <Button variant="filled">Create merge commit</Button>
    </View>
  );
}`}
          />

          {/* Demo 8: Segmented Attached Button Group */}
          <ComponentDemoCard
            id="button-group"
            title="Segmented Attached Button Group"
            description="Horizontally groups related button triggers with unified border radius and shared outer bounds (MUI & Fluent ButtonGroup)."
            webPreview={
              <div style={{ display: 'inline-flex', borderRadius: 8, border: '1px solid var(--color-border-subtle)', overflow: 'hidden', background: 'var(--color-surface-subtle)' }}>
                {(['day', 'week', 'month'] as const).map((period, idx) => (
                  <button
                    key={period}
                    type="button"
                    onClick={() => setButtonGroupVal(period)}
                    style={{
                      border: 'none',
                      padding: '8px 18px',
                      background: buttonGroupVal === period ? 'var(--color-surface-elevated)' : 'transparent',
                      color: buttonGroupVal === period ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                      fontWeight: buttonGroupVal === period ? 600 : 500,
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      borderLeft: idx > 0 ? '1px solid var(--color-border-subtle)' : 'none',
                      boxShadow: buttonGroupVal === period ? 'var(--shadow-sm)' : 'none',
                      transition: 'all 0.15s ease',
                      textTransform: 'capitalize',
                    }}
                  >
                    {period}
                  </button>
                ))}
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Button variant="secondary">Active: {buttonGroupVal.toUpperCase()}</Button>
              </div>
            }
            webCode={`import React, { useState } from 'react';

export default function ButtonGroupDemo(): JSX.Element {
  const [period, setPeriod] = useState<'day' | 'week' | 'month'>('week');

  return (
    <div style={{ display: 'inline-flex', borderRadius: 8, border: '1px solid var(--color-border-subtle)', overflow: 'hidden' }}>
      {(['day', 'week', 'month'] as const).map((item, idx) => (
        <button
          key={item}
          type="button"
          onClick={() => setPeriod(item)}
          style={{
            border: 'none',
            padding: '8px 18px',
            background: period === item ? 'var(--color-surface-elevated)' : 'transparent',
            borderLeft: idx > 0 ? '1px solid var(--color-border-subtle)' : 'none',
            cursor: 'pointer',
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View, Text } from 'react-native';

export default function NativeButtonGroupDemo(): JSX.Element {
  return (
    <View style={{ flexDirection: 'row', borderRadius: 8, borderWidth: 1, borderColor: '#E2E8F0' }}>
      <Text style={{ padding: 10 }}>Week</Text>
    </View>
  );
}`}
          />
        </div>
      );

    case 'accordion':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* Demo 1: Single Collapse Accordion */}
          <ComponentDemoCard
            id="accordion-single"
            title="Single Expansion (FAQ Pattern)"
            description="Opening an accordion section automatically collapses any previously open panel to minimize vertical screen clutter."
            webPreview={
              <div style={{ maxWidth: 480, width: '100%' }}>
                <Accordion defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionHeader>What platforms does Spectra UI support?</AccordionHeader>
                    <AccordionPanel>
                      Spectra UI supports Web (React 18 & 19, Next.js, Vite) and Mobile Native (React Native, iOS, and Android).
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionHeader>Are design tokens shared across platforms?</AccordionHeader>
                    <AccordionPanel>
                      Yes! The single source of truth in @spectra/tokens compiles to CSS Variables for Web and JavaScript theme dictionaries for React Native StyleSheet.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Accordion defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionHeader>Native FAQ Item 1</AccordionHeader>
                    <AccordionPanel>LayoutAnimation fluid transition on native mobile.</AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionHeader>Native FAQ Item 2</AccordionHeader>
                    <AccordionPanel>44pt touch targets with accessibilityState.</AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            }
            webCode={`import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@spectra/react';
import type { AccordionProps } from '@spectra/react';

export default function SingleAccordionDemo(): JSX.Element {
  return (
    <Accordion defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionHeader>What platforms does Spectra UI support?</AccordionHeader>
        <AccordionPanel>
          Spectra UI supports Web (React 18 & 19, Next.js, Vite) and Mobile Native (iOS & Android).
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionHeader>Are design tokens shared across platforms?</AccordionHeader>
        <AccordionPanel>
          Yes! The same tokens power CSS variables and React Native StyleSheet.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}`}
            nativeCode={`import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@spectra/react-native';

export default function NativeAccordionDemo(): JSX.Element {
  return (
    <Accordion defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionHeader>Native FAQ Item 1</AccordionHeader>
        <AccordionPanel>LayoutAnimation fluid transition on native mobile.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}`}
          />

          {/* Demo 2: Multiple Expanded Panels */}
          <ComponentDemoCard
            id="accordion-multiple"
            title="Simultaneous Multi-Panel Expansion"
            description="With multiple={true}, users can open as many panels as they need simultaneously to compare documentation sections."
            webPreview={
              <div style={{ maxWidth: 480, width: '100%' }}>
                <Accordion multiple defaultValue={['item-1', 'item-2']}>
                  <AccordionItem value="item-1">
                    <AccordionHeader>Section 1: Authentication Config</AccordionHeader>
                    <AccordionPanel>OAuth 2.0 and API token configuration parameters.</AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionHeader>Section 2: Database Replicas</AccordionHeader>
                    <AccordionPanel>3 read-replicas distributed across eu-west and us-east.</AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Accordion multiple defaultValue={['item-1', 'item-2']}>
                  <AccordionItem value="item-1">
                    <AccordionHeader>Native Section 1</AccordionHeader>
                    <AccordionPanel>Simultaneously open native panel 1.</AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionHeader>Native Section 2</AccordionHeader>
                    <AccordionPanel>Simultaneously open native panel 2.</AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            }
            webCode={`import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@spectra/react';
import type { AccordionProps } from '@spectra/react';

export default function MultiAccordionDemo(): JSX.Element {
  const defaultItems: string[] = ['item-1', 'item-2'];

  return (
    <Accordion multiple defaultValue={defaultItems}>
      <AccordionItem value="item-1">
        <AccordionHeader>Section 1: Authentication Config</AccordionHeader>
        <AccordionPanel>OAuth 2.0 and API token configuration parameters.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionHeader>Section 2: Database Replicas</AccordionHeader>
        <AccordionPanel>3 read-replicas distributed across eu-west and us-east.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}`}
            nativeCode={`import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@spectra/react-native';

export default function NativeMultiAccordionDemo(): JSX.Element {
  return (
    <Accordion multiple defaultValue={['item-1', 'item-2']}>
      <AccordionItem value="item-1">
        <AccordionHeader>Native Section 1</AccordionHeader>
        <AccordionPanel>Simultaneously open native panel 1.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}`}
          />
        </div>
      );

    case 'text-input':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* Demo 1: Input with Left and Right Icons */}
          <ComponentDemoCard
            id="input-icons"
            title="Search Field with Contextual Vector Icons"
            description="Add a leading search icon to indicate field intent, and a trailing clear button for immediate input clearing."
            webPreview={
              <div style={{ maxWidth: 400, width: '100%' }}>
                <TextInput
                  label="Search Components"
                  placeholder="Filter by name (e.g. Button, Dialog)..."
                  leftIcon={<SearchIcon size={16} />}
                  rightIcon={<CloseIcon size={16} />}
                  description="Press Esc to clear search field"
                />
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <TextInput
                  label="Mobile Search"
                  placeholder="Type query..."
                  leftIcon={<SearchIcon size={16} />}
                />
              </div>
            }
            webCode={`import React, { useState } from 'react';
import { TextInput } from '@spectra/react';
import type { TextInputProps } from '@spectra/react';
import { SearchIcon, CloseIcon } from '@spectra/icons';

export default function SearchInputDemo(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const handleClear = (): void => {
    setSearchTerm('');
  };

  return (
    <TextInput
      label="Search Components"
      placeholder="Filter by name..."
      value={searchTerm}
      onChange={handleChange}
      leftIcon={<SearchIcon size={16} />}
      rightIcon={<CloseIcon size={16} onClick={handleClear} />}
      description="Press Esc to clear"
    />
  );
}`}
            nativeCode={`import React, { useState } from 'react';
import { TextInput } from '@spectra/react-native';
import { SearchIcon } from '@spectra/icons';

export default function NativeSearchInputDemo(): JSX.Element {
  const [text, setText] = useState<string>('');

  return (
    <TextInput
      label="Mobile Search"
      placeholder="Type query..."
      value={text}
      onChangeText={(val: string): void => setText(val)}
      leftIcon={<SearchIcon size={16} />}
      keyboardType="web-search"
    />
  );
}`}
          />

          {/* Demo 2: Validation & Error States */}
          <ComponentDemoCard
            id="input-validation"
            title="Validation & Error State"
            description="When user validation fails, display a prominent 2D danger border and an accessible inline error linked via aria-describedby."
            webPreview={
              <div style={{ maxWidth: 400, width: '100%' }}>
                <TextInput
                  label="Organization Slug"
                  defaultValue="acme-corp-123"
                  error="This slug is already taken by another enterprise account."
                />
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <TextInput
                  label="Organization Slug"
                  defaultValue="acme-corp"
                  error="Slug is already taken."
                />
              </div>
            }
            webCode={`import React, { useState } from 'react';
import { TextInput } from '@spectra/react';
import type { TextInputProps } from '@spectra/react';

export default function InputValidationDemo(): JSX.Element {
  const [slug, setSlug] = useState<string>('acme-corp-123');
  const [errorMsg, setErrorMsg] = useState<string>('This slug is already taken.');

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSlug(e.target.value);
    if (e.target.value.length >= 3) {
      setErrorMsg('');
    }
  };

  return (
    <TextInput
      label="Organization Slug"
      value={slug}
      onChange={handleSlugChange}
      error={errorMsg || undefined}
    />
  );
}`}
            nativeCode={`import React from 'react';
import { TextInput } from '@spectra/react-native';

export default function NativeInputValidationDemo(): JSX.Element {
  return (
    <TextInput
      label="Organization Slug"
      defaultValue="acme-corp"
      error="Slug is already taken."
    />
  );
}`}
          />

          {/* Demo 3: Helper text & Disabled */}
          <ComponentDemoCard
            id="input-helper"
            title="Helper Text & Disabled Read-Only State"
            description="Display contextual hints beneath the field, or lock values against editing using the disabled attribute."
            webPreview={
              <div style={{ maxWidth: 400, width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <TextInput
                  label="API Endpoint Base URL"
                  defaultValue="https://api.spectra-ui.dev/v1"
                  description="Configured automatically based on active workspace region"
                  disabled
                />
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <TextInput
                  label="API Endpoint"
                  defaultValue="https://api.spectra-ui.dev"
                  disabled
                />
              </div>
            }
            webCode={`import React from 'react';
import { TextInput } from '@spectra/react';
import type { TextInputProps } from '@spectra/react';

export default function HelperInputDemo(): JSX.Element {
  return (
    <TextInput
      label="API Endpoint Base URL"
      defaultValue="https://api.spectra-ui.dev/v1"
      description="Configured automatically based on active workspace"
      disabled
    />
  );
}`}
            nativeCode={`import React from 'react';
import { TextInput } from '@spectra/react-native';

export default function NativeHelperInputDemo(): JSX.Element {
  return (
    <TextInput
      label="API Endpoint"
      defaultValue="https://api.spectra-ui.dev"
      editable={false}
    />
  );
}`}
          />

          {/* Demo 4: Password Input with Visibility Toggle */}
          <ComponentDemoCard
            id="input-password"
            title="Password Reveal with Visibility Toggle"
            description="Toggle input security mask to reveal or hide sensitive credentials with accessible state labeling."
            webPreview={
              <div style={{ maxWidth: 400, width: '100%' }}>
                <TextInput
                  label="Master Access Token"
                  type={showPassword ? 'text' : 'password'}
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                  rightIcon={
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-text-secondary)',
                      }}
                      title={showPassword ? 'Hide password' : 'Show password'}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
                    </button>
                  }
                  description="Click the eye icon to toggle token visibility"
                />
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <TextInput
                  label="Mobile Token"
                  type={showPassword ? 'text' : 'password'}
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                />
              </div>
            }
            webCode={`import React, { useState } from 'react';
import { TextInput } from '@spectra/react';
import { EyeIcon, EyeOffIcon } from '@spectra/icons';

export default function PasswordInputDemo() {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('SpectraUI#2026');

  return (
    <TextInput
      label="Master Access Token"
      type={show ? 'text' : 'password'}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      rightIcon={
        <button
          type="button"
          onClick={() => setShow(!show)}
          aria-label={show ? 'Hide password' : 'Show password'}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {show ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
        </button>
      }
      description="Click the eye icon to toggle visibility"
    />
  );
}`}
            nativeCode={`import React, { useState } from 'react';
import { TextInput } from '@spectra/react-native';

export default function NativePasswordInputDemo() {
  const [secure, setSecure] = useState(true);
  return (
    <TextInput
      label="Mobile Token"
      secureTextEntry={secure}
      defaultValue="SpectraUI#2026"
    />
  );
}`}
          />

          {/* Demo 5: Clearable Search Input with Reset */}
          <ComponentDemoCard
            id="input-clearable"
            title="Clearable Search Input with Reset"
            description="Displays a trailing dismiss icon when text is entered to provide one-click clearing for filter fields."
            webPreview={
              <div style={{ maxWidth: 400, width: '100%' }}>
                <TextInput
                  label="Clearable Query Field"
                  value={clearableText}
                  onChange={(e) => setClearableText(e.target.value)}
                  leftIcon={<SearchIcon size={16} />}
                  rightIcon={
                    clearableText ? (
                      <button
                        type="button"
                        onClick={() => setClearableText('')}
                        aria-label="Clear text"
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--color-text-secondary)',
                        }}
                      >
                        <CloseIcon size={14} />
                      </button>
                    ) : undefined
                  }
                  description={clearableText ? 'Click cross icon to reset search value' : 'Type to see the clear reset button appear'}
                />
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <TextInput
                  label="Mobile Search"
                  value={clearableText}
                  onChange={(e) => setClearableText(e.target.value)}
                  placeholder="Clearable input..."
                />
              </div>
            }
            webCode={`import React, { useState } from 'react';
import { TextInput } from '@spectra/react';
import { SearchIcon, CloseIcon } from '@spectra/icons';

export default function ClearableInputDemo(): JSX.Element {
  const [query, setQuery] = useState('Search tokens...');

  return (
    <TextInput
      label="Search Field"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      leftIcon={<SearchIcon size={16} />}
      rightIcon={
        query ? (
          <button
            type="button"
            onClick={() => setQuery('')}
            aria-label="Clear text"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <CloseIcon size={14} />
          </button>
        ) : undefined
      }
    />
  );
}`}
            nativeCode={`import React, { useState } from 'react';
import { TextInput } from '@spectra/react-native';

export default function NativeClearableDemo(): JSX.Element {
  const [val, setVal] = useState('Query');
  return <TextInput label="Search" value={val} onChangeText={setVal} />;
}`}
          />

          {/* Demo 6: Prefix & Suffix Currency/Domain Adornments */}
          <ComponentDemoCard
            id="input-adornments"
            title="Prefix & Suffix Currency/Domain Adornments"
            description="Fix visually locked prefixes (currencies, domain protocols) and suffixes (metric units, top-level domains) around the editable text area."
            webPreview={
              <div style={{ maxWidth: 400, width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 6 }}>
                    Enterprise Monthly Budget
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', borderRadius: 8, border: '1px solid var(--color-border-subtle)', background: 'var(--color-surface-elevated)', overflow: 'hidden' }}>
                    <span style={{ padding: '8px 12px', background: 'var(--color-surface-subtle)', color: 'var(--color-text-secondary)', fontSize: '0.875rem', fontWeight: 600, borderRight: '1px solid var(--color-border-subtle)' }}>
                      $
                    </span>
                    <input
                      type="text"
                      value={adornmentPrice}
                      onChange={(e) => setAdornmentPrice(e.target.value)}
                      style={{
                        flex: 1,
                        border: 'none',
                        outline: 'none',
                        padding: '10px 12px',
                        fontSize: '0.875rem',
                        background: 'transparent',
                        color: 'var(--color-text-primary)',
                      }}
                      aria-label="Price in USD"
                    />
                    <span style={{ padding: '8px 12px', background: 'var(--color-surface-subtle)', color: 'var(--color-text-secondary)', fontSize: '0.82rem', borderLeft: '1px solid var(--color-border-subtle)' }}>
                      USD / mo
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: 4 }}>Fixed tier allocation for production cluster</div>
                </div>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <TextInput label="Budget ($ USD)" value={adornmentPrice} onChange={(e) => setAdornmentPrice(e.target.value)} />
              </div>
            }
            webCode={`import React, { useState } from 'react';

export default function AdornmentInputDemo(): JSX.Element {
  const [val, setVal] = useState('249.00');

  return (
    <div style={{ display: 'flex', alignItems: 'center', borderRadius: 8, border: '1px solid #E2E8F0', overflow: 'hidden' }}>
      <span style={{ padding: '8px 12px', background: '#F8FAFC', fontWeight: 600 }}>$</span>
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        style={{ flex: 1, border: 'none', padding: '10px 12px' }}
      />
      <span style={{ padding: '8px 12px', background: '#F8FAFC', fontSize: 13 }}>USD / mo</span>
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default function NativeAdornmentDemo(): JSX.Element {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 8 }}>
      <Text style={{ padding: 10 }}>$</Text>
      <TextInput style={{ flex: 1 }} defaultValue="249.00" />
      <Text style={{ padding: 10 }}>USD</Text>
    </View>
  );
}`}
          />

          {/* Demo 7: Live Character Counter & Length Limit */}
          <ComponentDemoCard
            id="input-counter"
            title="Live Character Counter & Length Limit"
            description="Real-time character counting provides immediate feedback to users as they approach input boundary restrictions."
            webPreview={
              <div style={{ maxWidth: 400, width: '100%' }}>
                <TextInput
                  label="Release Milestone Title"
                  value={counterText}
                  maxLength={60}
                  onChange={(e) => setCounterText(e.target.value)}
                  description={`${counterText.length} / 60 characters used`}
                />
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <TextInput
                  label="Milestone Title"
                  value={counterText}
                  maxLength={60}
                  onChange={(e) => setCounterText(e.target.value)}
                />
              </div>
            }
            webCode={`import React, { useState } from 'react';
import { TextInput } from '@spectra/react';

export default function CounterInputDemo(): JSX.Element {
  const [text, setText] = useState('Spectra UI Enterprise Release');
  const MAX = 60;

  return (
    <TextInput
      label="Release Milestone Title"
      value={text}
      maxLength={MAX}
      onChange={(e) => setText(e.target.value)}
      description={\`\${text.length} / \${MAX} characters used\`}
    />
  );
}`}
            nativeCode={`import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';

export default function NativeCounterDemo(): JSX.Element {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput maxLength={60} value={text} onChangeText={setText} />
      <Text>{text.length} / 60</Text>
    </View>
  );
}`}
          />
        </div>
      );

    case 'select':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* Demo 1: Standard Dropdown */}
          <ComponentDemoCard
            id="select-basic"
            title="Standard Selection Dropdown"
            description="Allow users to choose from a list of predefined options with automatic keyboard navigation."
            webPreview={
              <div style={{ maxWidth: 360, width: '100%' }}>
                <Select
                  label="Deployment Region"
                  value={selectVal}
                  onChange={(e) => setSelectVal(e.target.value)}
                  options={[
                    { value: 'us-east', label: 'US East (N. Virginia)' },
                    { value: 'eu-west', label: 'Europe (Frankfurt)' },
                    { value: 'ap-south', label: 'Asia Pacific (Tokyo)' },
                  ]}
                />
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Select
                  label="Mobile Region"
                  value={selectVal}
                  onChange={(e) => setSelectVal(e.target.value)}
                  options={[
                    { value: 'us-east', label: 'US East' },
                    { value: 'eu-west', label: 'Europe' },
                  ]}
                />
              </div>
            }
            webCode={`import { Select } from '@spectra/react';

export default function SelectDemo() {
  return (
    <Select
      label="Deployment Region"
      defaultValue="us-east"
      options={[
        { value: 'us-east', label: 'US East (N. Virginia)' },
        { value: 'eu-west', label: 'Europe (Frankfurt)' },
        { value: 'ap-south', label: 'Asia Pacific (Tokyo)' },
      ]}
    />
  );
}`}
            nativeCode={`import React, { useState } from 'react';
import { Select } from '@spectra/react-native';

export default function NativeSelectDemo() {
  const [val, setVal] = useState('us-east');
  return (
    <Select
      label="Mobile Region"
      value={val}
      onChange={setVal}
      options={[
        { value: 'us-east', label: 'US East' },
        { value: 'eu-west', label: 'Europe' },
      ]}
    />
  );
}`}
          />

          {/* Demo 2: Validation & Disabled State */}
          <ComponentDemoCard
            id="select-states"
            title="Disabled & Validation Error State"
            description="Communicate invalid input with an inline error or lock interaction during pending background fetches."
            webPreview={
              <div style={{ maxWidth: 360, width: '100%', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <Select
                  label="Cluster Tier"
                  disabled
                  options={[{ value: 'free', label: 'Sandbox Cluster (Provisioning...)' }]}
                />
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Select
                  label="Cluster Tier"
                  disabled
                  options={[{ value: 'free', label: 'Sandbox Tier' }]}
                />
              </div>
            }
            webCode={`import { Select } from '@spectra/react';

export default function SelectStatesDemo() {
  return (
    <Select
      label="Cluster Tier"
      disabled
      options={[{ value: 'free', label: 'Sandbox Cluster (Provisioning...)' }]}
    />
  );
}`}
            nativeCode={`import React from 'react';
import { Select } from '@spectra/react-native';

export default function NativeSelectStatesDemo() {
  return (
    <Select
      label="Cluster Tier"
      disabled
      options={[{ value: 'free', label: 'Sandbox Tier' }]}
    />
  );
}`}
          />

          {/* Demo 4: Grouped Categories & Options */}
          <ComponentDemoCard
            id="select-grouped"
            title="Grouped Categories & Options"
            description="Organize extensive option sets into categorized optgroups (e.g. Relational vs Key-Value vs Document databases)."
            webPreview={
              <div style={{ maxWidth: 360, width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)' }}>
                    Managed Database Engine
                  </label>
                  <select
                    value={groupedSelectVal}
                    onChange={(e) => setGroupedSelectVal(e.target.value)}
                    style={{
                      padding: '8px 12px',
                      borderRadius: 6,
                      border: '1px solid var(--color-border-default)',
                      backgroundColor: 'var(--color-surface)',
                      color: 'var(--color-text-primary)',
                      fontSize: 14,
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <optgroup label="Relational SQL">
                      <option value="postgres">PostgreSQL 16 (Distributed)</option>
                      <option value="mysql">MySQL 8.4 Enterprise</option>
                      <option value="cockroach">CockroachDB Serverless</option>
                    </optgroup>
                    <optgroup label="NoSQL & Document">
                      <option value="mongodb">MongoDB Atlas Replica</option>
                      <option value="cassandra">Apache Cassandra</option>
                    </optgroup>
                    <optgroup label="In-Memory Cache">
                      <option value="redis">Redis Cluster v7</option>
                      <option value="valkey">Valkey High-Throughput</option>
                    </optgroup>
                  </select>
                </div>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Select
                  label="Database Category"
                  value="postgres"
                  options={[
                    { value: 'postgres', label: 'PostgreSQL (SQL)' },
                    { value: 'mongodb', label: 'MongoDB (NoSQL)' },
                    { value: 'redis', label: 'Redis (Cache)' },
                  ]}
                />
              </div>
            }
            webCode={`import React, { useState } from 'react';

export default function GroupedSelectDemo() {
  const [engine, setEngine] = useState('postgres');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label>Managed Database Engine</label>
      <select value={engine} onChange={(e) => setEngine(e.target.value)}>
        <optgroup label="Relational SQL">
          <option value="postgres">PostgreSQL 16 (Distributed)</option>
          <option value="mysql">MySQL 8.4 Enterprise</option>
        </optgroup>
        <optgroup label="In-Memory Cache">
          <option value="redis">Redis Cluster v7</option>
          <option value="valkey">Valkey High-Throughput</option>
        </optgroup>
      </select>
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { Select } from '@spectra/react-native';

export default function NativeGroupedSelectDemo() {
  return (
    <Select
      label="Database Category"
      defaultValue="postgres"
      options={[
        { value: 'postgres', label: 'PostgreSQL (SQL)' },
        { value: 'redis', label: 'Redis (Cache)' },
      ]}
    />
  );
}`}
          />
        </div>
      );

    case 'badge':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* Demo 1: Semantic Variants */}
          <ComponentDemoCard
            id="badge-variants"
            title="All Semantic Status Variants"
            description="Use semantic colors to communicate operational health, warnings, and informational metadata."
            webPreview={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
                <Badge variant="default">Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Critical</Badge>
                <Badge variant="info">Info</Badge>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
                <Badge variant="success">Active</Badge>
                <Badge variant="warning">Pending</Badge>
                <Badge variant="error">Failed</Badge>
              </div>
            }
            webCode={`import { Badge } from '@spectra/react';

export default function BadgeVariantsDemo() {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Critical</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { Badge } from '@spectra/react-native';

export default function NativeBadgeVariantsDemo() {
  return (
    <Badge variant="success">Active</Badge>
  );
}`}
          />

          {/* Demo 2: Presence Dot Indicators */}
          <ComponentDemoCard
            id="badge-dots"
            title="Status Dot Indicators"
            description="Add dot={true} to include a 6px status dot for live system monitoring and online presence."
            webPreview={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                <Badge variant="success" dot>Operational (99.99%)</Badge>
                <Badge variant="warning" dot>Syncing Database</Badge>
                <Badge variant="error" dot>Degraded Performance</Badge>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', gap: 10 }}>
                <Badge variant="success" dot>Operational</Badge>
                <Badge variant="error" dot>Alert</Badge>
              </div>
            }
            webCode={`import { Badge } from '@spectra/react';

export default function BadgeDotDemo() {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <Badge variant="success" dot>Operational (99.99%)</Badge>
      <Badge variant="warning" dot>Syncing Database</Badge>
      <Badge variant="error" dot>Degraded Performance</Badge>
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { Badge } from '@spectra/react-native';

export default function NativeBadgeDotDemo() {
  return <Badge variant="success" dot>Operational</Badge>;
}`}
          />
        </div>
      );

    case 'tabs':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* Demo 1: Underline Variant */}
          <ComponentDemoCard
            id="tabs-underline"
            title="Underline Navigation Style"
            description="Clean horizontal line indicator matching modern web dashboards and document editors."
            webPreview={
              <div style={{ maxWidth: 440, width: '100%' }}>
                <Tabs variant="underline" value={activeTab1} onChange={setActiveTab1}>
                  <TabList>
                    <Tab value="1">Account</Tab>
                    <Tab value="2">Billing</Tab>
                    <Tab value="3">Security</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel value="1"><p style={{ margin: 0, padding: '12px 0', fontSize: 13, color: 'var(--color-text-secondary)' }}>Account preferences and profile details.</p></TabPanel>
                    <TabPanel value="2"><p style={{ margin: 0, padding: '12px 0', fontSize: 13, color: 'var(--color-text-secondary)' }}>Active payment methods and invoices.</p></TabPanel>
                    <TabPanel value="3"><p style={{ margin: 0, padding: '12px 0', fontSize: 13, color: 'var(--color-text-secondary)' }}>Multi-factor authentication settings.</p></TabPanel>
                  </TabPanels>
                </Tabs>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Tabs variant="underline" defaultValue="1">
                  <TabList>
                    <Tab value="1">Account</Tab>
                    <Tab value="2">Billing</Tab>
                  </TabList>
                </Tabs>
              </div>
            }
            webCode={`import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@spectra/react';

export default function UnderlineTabsDemo() {
  return (
    <Tabs variant="underline" defaultValue="1">
      <TabList>
        <Tab value="1">Account</Tab>
        <Tab value="2">Billing</Tab>
        <Tab value="3">Security</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="1">Account preferences.</TabPanel>
        <TabPanel value="2">Invoices & billing.</TabPanel>
        <TabPanel value="3">MFA settings.</TabPanel>
      </TabPanels>
    </Tabs>
  );
}`}
            nativeCode={`import React, { useState } from 'react';
import { Tabs } from '@spectra/react-native';

export default function NativeTabsDemo() {
  const [idx, setIdx] = useState(0);
  return <Tabs tabs={['Account', 'Billing', 'Security']} selectedIndex={idx} onTabPress={setIdx} />;
}`}
          />

          {/* Demo 2: Pills / Segmented Variant */}
          <ComponentDemoCard
            id="tabs-pills"
            title="Segmented Pills Style"
            description="Contained pill buttons optimal for switching graph metrics (Daily, Weekly, Monthly) or mobile filter segments."
            webPreview={
              <div style={{ maxWidth: 440, width: '100%' }}>
                <Tabs variant="pills" value={activeTab2} onChange={setActiveTab2}>
                  <TabList>
                    <Tab value="1">Daily</Tab>
                    <Tab value="2">Weekly</Tab>
                    <Tab value="3">Monthly</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel value="1"><p style={{ margin: 0, padding: '12px 0', fontSize: 13, color: 'var(--color-text-secondary)' }}>Showing last 24 hours of traffic.</p></TabPanel>
                    <TabPanel value="2"><p style={{ margin: 0, padding: '12px 0', fontSize: 13, color: 'var(--color-text-secondary)' }}>Showing past 7 days aggregated analytics.</p></TabPanel>
                    <TabPanel value="3"><p style={{ margin: 0, padding: '12px 0', fontSize: 13, color: 'var(--color-text-secondary)' }}>Showing month-over-month growth.</p></TabPanel>
                  </TabPanels>
                </Tabs>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Tabs variant="pills" defaultValue="1">
                  <TabList>
                    <Tab value="1">Daily</Tab>
                    <Tab value="2">Weekly</Tab>
                  </TabList>
                </Tabs>
              </div>
            }
            webCode={`import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@spectra/react';

export default function PillsTabsDemo() {
  return (
    <Tabs variant="pills" defaultValue="1">
      <TabList>
        <Tab value="1">Daily</Tab>
        <Tab value="2">Weekly</Tab>
        <Tab value="3">Monthly</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="1">24 hours traffic.</TabPanel>
        <TabPanel value="2">7 days aggregate.</TabPanel>
        <TabPanel value="3">Monthly growth.</TabPanel>
      </TabPanels>
    </Tabs>
  );
}`}
            nativeCode={`import React from 'react';
import { Tabs } from '@spectra/react-native';

export default function NativePillsTabsDemo() {
  return <Tabs tabs={['Daily', 'Weekly', 'Monthly']} selectedIndex={0} onTabPress={() => {}} />;
}`}
          />

          {/* Demo 3: Vertical Sidebar Navigation Tabs */}
          <ComponentDemoCard
            id="tabs-vertical"
            title="Vertical Sidebar Navigation Tabs"
            description="Vertical tab alignment ideal for settings dashboards, developer preferences, and multi-tier configuration panels."
            webPreview={
              <div style={{ display: 'flex', gap: 24, width: '100%', minHeight: 180, border: '1px solid var(--color-border-subtle)', borderRadius: 12, padding: 16, background: 'var(--color-surface-elevated)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: 180, borderRight: '1px solid var(--color-border-subtle)', paddingRight: 12 }}>
                  {[
                    { id: 'profile', label: 'Account Profile' },
                    { id: 'security', label: 'Security & 2FA' },
                    { id: 'billing', label: 'Cloud Billing' },
                    { id: 'api', label: 'API Keys' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setVerticalTab(item.id)}
                      style={{
                        textAlign: 'left',
                        padding: '8px 12px',
                        borderRadius: 8,
                        border: 'none',
                        background: verticalTab === item.id ? 'var(--color-primary-subtle, rgba(37,99,235,0.08))' : 'transparent',
                        color: verticalTab === item.id ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                        fontWeight: verticalTab === item.id ? 600 : 400,
                        fontSize: '0.875rem',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '1rem', color: 'var(--color-text-primary)' }}>
                    {verticalTab === 'profile' && 'User Identity & Organization Details'}
                    {verticalTab === 'security' && 'Hardware Security Keys & Multi-Factor Auth'}
                    {verticalTab === 'billing' && 'Enterprise Subscriptions & Invoicing'}
                    {verticalTab === 'api' && 'Scoped Production API Access Tokens'}
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Manage domain permissions and configure environment variables synchronized with Spectra UI tokens.
                  </p>
                </div>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Tabs variant="pills" defaultValue="profile">
                  <TabList>
                    <Tab value="profile">Profile</Tab>
                    <Tab value="security">Security</Tab>
                  </TabList>
                </Tabs>
              </div>
            }
            webCode={`import React, { useState } from 'react';

export default function VerticalTabsDemo(): JSX.Element {
  const [tab, setTab] = useState('profile');

  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: 160 }}>
        {['profile', 'security', 'billing'].map((item) => (
          <button
            key={item}
            onClick={() => setTab(item)}
            className={tab === item ? 'tab-active' : 'tab-inactive'}
          >
            {item}
          </button>
        ))}
      </div>
      <div style={{ flex: 1 }}>
        <p>Active Tab: {tab}</p>
      </div>
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { Tabs } from '@spectra/react-native';

export default function NativeVerticalTabsDemo(): JSX.Element {
  return <Tabs tabs={['Profile', 'Security']} selectedIndex={0} onTabPress={() => {}} />;
}`}
          />
        </div>
      );

    case 'switch':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="switch-interactive"
            title="Instant Binary Setting Toggle"
            description="Switches take effect immediately without a secondary Save action."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <Switch
                  label="Enable Real-Time Cloud Telemetry"
                  checked={switch1}
                  onChange={setSwitch1}
                />
                <Switch
                  label="Automatic Rollbacks on Regression"
                  checked={switch2}
                  onChange={setSwitch2}
                />
                <Switch
                  label="Read-Only Production Mode (Disabled)"
                  checked={true}
                  disabled
                />
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%' }}>
                <Switch label="Push Notifications" checked={switch1} onChange={setSwitch1} />
                <Switch label="Auto-sync" checked={true} />
              </div>
            }
            webCode={`import { Switch } from '@spectra/react';

export default function SwitchDemo() {
  return (
    <Switch
      label="Enable Real-Time Cloud Telemetry"
      checked={true}
      onChange={(checked) => console.log(checked)}
    />
  );
}`}
            nativeCode={`import React, { useState } from 'react';
import { Switch } from '@spectra/react-native';

export default function NativeSwitchDemo() {
  const [val, setVal] = useState(true);
  return <Switch label="Push Notifications" value={val} onValueChange={setVal} />;
}`}
          />

          <ComponentDemoCard
            id="switch-panel"
            title="Settings Row Preference Panel"
            description="Stack switches into clean preference rows with descriptive labels for account management."
            webPreview={
              <div style={{ maxWidth: 440, width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderRadius: 8, border: '1px solid var(--color-border-subtle)', backgroundColor: 'var(--color-surface-raised)' }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13 }}>Dark Mode Sync</div>
                    <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Match system operating system theme</div>
                  </div>
                  <Switch checked={switch3} onChange={setSwitch3} aria-label="Dark mode sync" />
                </div>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Switch label="Dark Mode Sync" checked={switch3} onChange={setSwitch3} />
              </div>
            }
            webCode={`import { Switch } from '@spectra/react';

export default function PreferenceSwitchDemo() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h4>Dark Mode Sync</h4>
        <p>Match OS theme</p>
      </div>
      <Switch checked={true} onChange={() => {}} />
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { Switch } from '@spectra/react-native';

export default function NativePreferenceDemo() {
  return <Switch label="Dark Mode Sync" value={true} />;
}`}
          />
        </div>
      );

    case 'checkbox': {
      const allSelected = groupCheck1 && groupCheck2 && groupCheck3;
      const isIndeterminate = (groupCheck1 || groupCheck2 || groupCheck3) && !allSelected;

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* Demo 1: Interactive Checkbox with Description */}
          <ComponentDemoCard
            id="checkbox-interactive"
            title="Single Checkbox with Description"
            description="Use standalone checkboxes for explicit consent, policy agreements, or enabling optional sub-features."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <Checkbox
                  label="Accept Organization Data Policy"
                  description="Required to synchronize design tokens with third-party apps."
                  checked={check1}
                  onChange={setCheck1}
                />
                <Checkbox
                  label="Send Automated Weekly Diagnostics"
                  description="Receive crash reports and memory utilization metrics via email."
                  checked={check2}
                  onChange={setCheck2}
                />
                <Checkbox
                  label="Read-Only Enterprise Security Policy (Disabled)"
                  description="Configured by organization administrator."
                  checked={true}
                  disabled
                />
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
                <Checkbox label="Accept Data Policy" checked={check1} onChange={setCheck1} />
                <Checkbox label="Weekly Diagnostics" checked={check2} onChange={setCheck2} />
              </div>
            }
            webCode={`import React, { useState } from 'react';
import { Checkbox } from '@spectra/react';

export default function CheckboxDemo() {
  const [checked, setChecked] = useState(true);

  return (
    <Checkbox
      label="Accept Organization Data Policy"
      description="Required to synchronize design tokens."
      checked={checked}
      onChange={setChecked}
    />
  );
}`}
            nativeCode={`import React from 'react';
import { Checkbox } from '@spectra/react-native';

export default function NativeCheckboxDemo() {
  return <Checkbox label="Accept Data Policy" value={true} />;
}`}
          />

          {/* Demo 2: Indeterminate Parent/Child State */}
          <ComponentDemoCard
            id="checkbox-indeterminate"
            title="Indeterminate Multi-Item State"
            description="When some but not all child items are selected, display an indeterminate minus icon in the parent checkbox."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
                <Checkbox
                  label="Select All Cluster Nodes"
                  checked={allSelected}
                  indeterminate={isIndeterminate}
                  onChange={(checked) => {
                    setGroupCheck1(checked);
                    setGroupCheck2(checked);
                    setGroupCheck3(checked);
                  }}
                />
                <div style={{ paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <Checkbox
                    label="Node us-east-1a (Compute)"
                    checked={groupCheck1}
                    onChange={setGroupCheck1}
                  />
                  <Checkbox
                    label="Node us-east-1b (Memory)"
                    checked={groupCheck2}
                    onChange={setGroupCheck2}
                  />
                  <Checkbox
                    label="Node us-east-1c (Storage)"
                    checked={groupCheck3}
                    onChange={setGroupCheck3}
                  />
                </div>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
                <Checkbox label="Select All Nodes" checked={allSelected} indeterminate={isIndeterminate} />
                <Checkbox label="Node us-east-1a" checked={groupCheck1} />
                <Checkbox label="Node us-east-1b" checked={groupCheck2} />
              </div>
            }
            webCode={`import React, { useState } from 'react';
import { Checkbox } from '@spectra/react';

export default function IndeterminateDemo() {
  const [c1, setC1] = useState(true);
  const [c2, setC2] = useState(false);
  const all = c1 && c2;
  const indeterminate = (c1 || c2) && !all;

  return (
    <div>
      <Checkbox
        label="Select All"
        checked={all}
        indeterminate={indeterminate}
        onChange={(val) => { setC1(val); setC2(val); }}
      />
      <div style={{ paddingLeft: 20 }}>
        <Checkbox label="Worker 1" checked={c1} onChange={setC1} />
        <Checkbox label="Worker 2" checked={c2} onChange={setC2} />
      </div>
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { Checkbox } from '@spectra/react-native';

export default function NativeIndeterminateDemo() {
  return <Checkbox label="Select All" indeterminate={true} />;
}`}
          />

          {/* Demo 3: Form Validation Preference Group */}
          <ComponentDemoCard
            id="checkbox-group"
            title="Form Validation Preference Group"
            description="Group multiple checkboxes with fieldset grouping and accessible validation hints."
            webPreview={
              <div style={{ maxWidth: 400, width: '100%' }}>
                <fieldset style={{ border: '1px solid var(--color-border-subtle)', borderRadius: 8, padding: '16px 20px', margin: 0 }}>
                  <legend style={{ fontSize: 13, fontWeight: 700, padding: '0 6px', color: 'var(--color-text-primary)' }}>
                    Notification Channels
                  </legend>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 6 }}>
                    <Checkbox label="Email Notifications (Critical Alerts)" checked={true} />
                    <Checkbox label="Slack Bot Webhooks" checked={true} />
                    <Checkbox label="SMS PagerDuty Escalation" checked={false} />
                  </div>
                </fieldset>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%', gap: 10, display: 'flex', flexDirection: 'column' }}>
                <Checkbox label="Email Alerts" checked={true} />
                <Checkbox label="Slack Webhook" checked={true} />
              </div>
            }
            webCode={`import { Checkbox } from '@spectra/react';

export default function CheckboxGroupDemo() {
  return (
    <fieldset style={{ border: '1px solid var(--color-border-subtle)', borderRadius: 8, padding: 16 }}>
      <legend>Notification Channels</legend>
      <Checkbox label="Email Notifications" checked={true} />
      <Checkbox label="Slack Bot Webhooks" checked={true} />
      <Checkbox label="SMS PagerDuty Escalation" checked={false} />
    </fieldset>
  );
}`}
            nativeCode={`import React from 'react';
import { Checkbox } from '@spectra/react-native';

export default function NativeCheckboxGroupDemo() {
  return (
    <>
      <Checkbox label="Email Alerts" checked={true} />
      <Checkbox label="Slack Webhook" checked={true} />
    </>
  );
}`}
          />

          {/* Demo 4: Checkbox Selection Cards & Tiles */}
          <ComponentDemoCard
            id="checkbox-cards"
            title="Checkbox Selection Cards & Tiles"
            description="Card-style selection units that combine a standard checkbox control with rich structured metadata and visual active highlighting."
            webPreview={
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14, width: '100%' }}>
                {[
                  { id: 'standard', name: 'Standard Nodes', spec: '4 vCPU · 16 GB RAM', price: '$40/mo' },
                  { id: 'performance', name: 'High-Mem Nodes', spec: '16 vCPU · 64 GB RAM', price: '$160/mo' },
                  { id: 'gpu', name: 'GPU Acceleration', spec: '1x NVIDIA L4 · 24 GB VRAM', price: '$320/mo' },
                ].map((tier) => {
                  const isChecked = selectedCardTiers.includes(tier.id);
                  return (
                    <div
                      key={tier.id}
                      onClick={() => {
                        setSelectedCardTiers((prev) =>
                          isChecked ? prev.filter((id) => id !== tier.id) : [...prev, tier.id]
                        );
                      }}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                        padding: 16,
                        borderRadius: 12,
                        border: isChecked ? '2px solid var(--color-primary)' : '1px solid var(--color-border-subtle)',
                        background: isChecked ? 'var(--color-primary-subtle, rgba(37,99,235,0.04))' : 'var(--color-surface-elevated)',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--color-text-primary)' }}>{tier.name}</div>
                        <Checkbox
                          checked={isChecked}
                          onChange={(checked) => {
                            setSelectedCardTiers((prev) =>
                              checked ? [...prev, tier.id] : prev.filter((id) => id !== tier.id)
                            );
                          }}
                        />
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>{tier.spec}</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-primary)', marginTop: 'auto' }}>{tier.price}</div>
                    </div>
                  );
                })}
              </div>
            }
            nativePreview={
              <div style={{ width: '100%', gap: 10, display: 'flex', flexDirection: 'column' }}>
                <Checkbox label="Standard Nodes ($40/mo)" checked={selectedCardTiers.includes('standard')} />
                <Checkbox label="High-Mem Nodes ($160/mo)" checked={selectedCardTiers.includes('performance')} />
              </div>
            }
            webCode={`import React, { useState } from 'react';
import { Checkbox } from '@spectra/react';

export default function CheckboxCardsDemo(): JSX.Element {
  const [selected, setSelected] = useState<string[]>(['standard']);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className={selected.includes(tier.id) ? 'card-selected' : 'card-default'}
          onClick={() => toggleTier(tier.id)}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>{tier.name}</span>
            <Checkbox checked={selected.includes(tier.id)} />
          </div>
          <p>{tier.spec}</p>
        </div>
      ))}
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Checkbox } from '@spectra/react-native';

export default function NativeCheckboxCardsDemo(): JSX.Element {
  return (
    <View style={{ gap: 8 }}>
      <Checkbox label="Standard Nodes ($40/mo)" checked={true} />
    </View>
  );
}`}
          />
        </div>
      );
    }

    case 'radio':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="radio-billing"
            title="Mutually Exclusive Plan Cards"
            description="Enforce selection of exactly one option from a set with full keyboard arrow navigation."
            webPreview={
              <RadioGroup value={radioVal} onChange={setRadioVal}>
                <Radio value="monthly" label="Monthly Billing ($29/month)" />
                <Radio value="annual" label="Annual Billing ($290/year - 2 months free)" />
                <Radio value="enterprise" label="Custom Enterprise License" />
              </RadioGroup>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
                <Radio value="monthly" label="Monthly Billing" />
                <Radio value="annual" label="Annual Billing" />
              </div>
            }
            webCode={`import { RadioGroup, Radio } from '@spectra/react';

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="monthly">
      <Radio value="monthly" label="Monthly Billing" />
      <Radio value="annual" label="Annual Billing" />
    </RadioGroup>
  );
}`}
            nativeCode={`import React from 'react';
import { Radio } from '@spectra/react-native';

export default function NativeRadioDemo() {
  return <Radio value="monthly" label="Monthly Billing" />;
} `}
          />

          <ComponentDemoCard
            id="radio-horizontal"
            title="Horizontal Inline Radio Group"
            description="Align radio controls horizontally for compact alignments such as text justification."
            webPreview={
              <RadioGroup orientation="horizontal" value={radioAlign} onChange={setRadioAlign}>
                <Radio value="left" label="Left Align" />
                <Radio value="center" label="Center Align" />
                <Radio value="right" label="Right Align" />
              </RadioGroup>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>
                <Radio value="left" label="Left" />
                <Radio value="right" label="Right" />
              </div>
            }
            webCode={`import { RadioGroup, Radio } from '@spectra/react';

export default function HorizontalRadioDemo() {
  return (
    <RadioGroup orientation="horizontal" defaultValue="left">
      <Radio value="left" label="Left Align" />
      <Radio value="center" label="Center Align" />
      <Radio value="right" label="Right Align" />
    </RadioGroup>
  );
}`}
            nativeCode={`import React from 'react';
import { Radio } from '@spectra/react-native';

export default function NativeHorizontalRadioDemo() {
  return <Radio value="left" label="Left Align" />;
} `}
          />

          {/* Demo 3: Segmented Pill Radio Group */}
          <ComponentDemoCard
            id="radio-segmented"
            title="Segmented Pill Radio Group"
            description="Segmented pills present mutually exclusive toggles inside a shared pill background container."
            webPreview={
              <div style={{ display: 'inline-flex', padding: 4, borderRadius: 9999, background: 'var(--color-surface-subtle)', border: '1px solid var(--color-border-subtle)' }}>
                {[
                  { id: 'grid', label: 'Grid View' },
                  { id: 'table', label: 'Table View' },
                  { id: 'kanban', label: 'Kanban Board' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSegmentedRadio(item.id)}
                    style={{
                      border: 'none',
                      padding: '6px 16px',
                      borderRadius: 9999,
                      background: segmentedRadio === item.id ? 'var(--color-surface-elevated)' : 'transparent',
                      color: segmentedRadio === item.id ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                      fontWeight: segmentedRadio === item.id ? 600 : 500,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      boxShadow: segmentedRadio === item.id ? 'var(--shadow-sm)' : 'none',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Radio value="grid" label="Grid View" />
              </div>
            }
            webCode={`import React, { useState } from 'react';

export default function SegmentedRadioDemo(): JSX.Element {
  const [view, setView] = useState('grid');
  return (
    <div style={{ display: 'inline-flex', padding: 4, borderRadius: 9999, background: '#F1F5F9' }}>
      {['grid', 'table', 'kanban'].map((item) => (
        <button
          key={item}
          onClick={() => setView(item)}
          style={{
            borderRadius: 9999,
            background: view === item ? '#fff' : 'transparent',
            padding: '6px 16px',
            border: 'none',
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View, Text } from 'react-native';

export default function NativeSegmentedRadioDemo(): JSX.Element {
  return (
    <View style={{ flexDirection: 'row', borderRadius: 20, backgroundColor: '#F1F5F9' }}>
      <Text style={{ padding: 8 }}>Grid</Text>
    </View>
  );
}`}
          />
        </div>
      );

    case 'avatar':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="avatar-scales"
            title="All 5 Sizing Scales with Presence Badges"
            description="From extra small (xs: 24px) for compact tags up to extra large (xl: 56px) for user profiles."
            webPreview={
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <Avatar size="xs" name="Alex Vance" status="online" />
                <Avatar size="sm" name="Alex Vance" status="online" />
                <Avatar size="md" name="Alex Vance" status="online" />
                <Avatar size="lg" name="Alex Vance" status="busy" />
                <Avatar size="xl" name="Alex Vance" status="away" />
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Avatar size="sm" name="Alex Vance" status="online" />
                <Avatar size="md" name="Alex Vance" status="busy" />
                <Avatar size="lg" name="Alex Vance" status="away" />
              </div>
            }
            webCode={`import { Avatar } from '@spectra/react';

export default function AvatarSizesDemo() {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Avatar size="xs" name="Alex Vance" status="online" />
      <Avatar size="sm" name="Alex Vance" status="online" />
      <Avatar size="md" name="Alex Vance" status="online" />
      <Avatar size="lg" name="Alex Vance" status="busy" />
      <Avatar size="xl" name="Alex Vance" status="away" />
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { Avatar } from '@spectra/react-native';

export default function NativeAvatarDemo() {
  return <Avatar size="md" name="Alex Vance" status="online" />;
}`}
          />

          <ComponentDemoCard
            id="avatar-stack"
            title="Overlapping Team Avatar Stack"
            description="Overlap multiple avatars with 2px borders to display team members or concurrent reviewers."
            webPreview={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                  <Avatar size="md" name="Sarah Connor" />
                </div>
                <div style={{ marginLeft: -10 }}>
                  <Avatar size="md" name="John Doe" />
                </div>
                <div style={{ marginLeft: -10 }}>
                  <Avatar size="md" name="Alex Vance" />
                </div>
                <div
                  style={{
                    marginLeft: -10,
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-surface-raised)',
                    border: '2px solid var(--color-surface)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    fontWeight: 700,
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  +4
                </div>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Avatar size="md" name="Sarah Connor" />
                <Avatar size="md" name="John Doe" />
              </div>
            }
            webCode={`import { Avatar } from '@spectra/react';

export default function AvatarStackDemo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Avatar size="md" name="Sarah Connor" />
      <div style={{ marginLeft: -10 }}><Avatar size="md" name="John Doe" /></div>
      <div style={{ marginLeft: -10 }}><Avatar size="md" name="Alex Vance" /></div>
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Avatar } from '@spectra/react-native';

export default function NativeAvatarStackDemo() {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Avatar size="md" name="Sarah Connor" />
      <Avatar size="md" name="John Doe" />
    </View>
  );
}`}
          />

          {/* Demo 3: Initials & Custom Status Indicator */}
          <ComponentDemoCard
            id="avatar-fallback"
            title="Initials, Color Fallbacks & Custom Status Indicator"
            description="Automatic two-letter uppercase fallback generation from full names with online, busy, away, and offline presence indicators."
            webPreview={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Avatar name="David Mitchell" size="lg" status="online" />
                  <span style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>DM (Online)</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Avatar name="Elena Rostova" size="lg" status="busy" />
                  <span style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>ER (Busy)</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Avatar name="Kavita Sharma" size="lg" status="away" />
                  <span style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>KS (Away)</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Avatar name="Marcus Vance" size="lg" status="offline" />
                  <span style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>MV (Offline)</span>
                </div>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'row', gap: 16 }}>
                <Avatar name="David Mitchell" size="md" status="online" />
                <Avatar name="Elena Rostova" size="md" status="busy" />
                <Avatar name="Kavita Sharma" size="md" status="away" />
              </div>
            }
            webCode={`import { Avatar } from '@spectra/react';

export default function AvatarFallbackDemo() {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <Avatar name="David Mitchell" size="lg" status="online" />
      <Avatar name="Elena Rostova" size="lg" status="busy" />
      <Avatar name="Kavita Sharma" size="lg" status="away" />
      <Avatar name="Marcus Vance" size="lg" status="offline" />
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Avatar } from '@spectra/react-native';

export default function NativeAvatarFallbackDemo() {
  return (
    <View style={{ flexDirection: 'row', gap: 16 }}>
      <Avatar name="David Mitchell" size="md" status="online" />
      <Avatar name="Elena Rostova" size="md" status="busy" />
    </View>
  );
}`}
          />

          {/* Demo 4: Persona Card with Presence & Contact Details */}
          <ComponentDemoCard
            id="avatar-persona"
            title="Persona Card with Presence & Contact Details"
            description="Fluent-style Persona combination grouping an avatar with status badge, display name, primary role, and presence status."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 360, width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 16px', borderRadius: 12, border: '1px solid var(--color-border-subtle)', background: 'var(--color-surface-elevated)' }}>
                  <Avatar name="Sarah Connor" size="lg" status="online" />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>Sarah Connor</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>Principal Design Technologist</div>
                    <div style={{ fontSize: '0.78rem', color: '#16A34A', fontWeight: 600, marginTop: 2 }}>Active now</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 16px', borderRadius: 12, border: '1px solid var(--color-border-subtle)', background: 'var(--color-surface-elevated)' }}>
                  <Avatar name="Elena Rostova" size="lg" status="busy" />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>Elena Rostova</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>Staff Accessibility Specialist</div>
                    <div style={{ fontSize: '0.78rem', color: '#DC2626', fontWeight: 600, marginTop: 2 }}>In a meeting until 3:30 PM</div>
                  </div>
                </div>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Avatar name="Sarah Connor" size="md" status="online" />
              </div>
            }
            webCode={`import React from 'react';
import { Avatar } from '@spectra/react';

export default function PersonaDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 16, border: '1px solid #E2E8F0', borderRadius: 12 }}>
      <Avatar name="Sarah Connor" size="lg" status="online" />
      <div>
        <div style={{ fontWeight: 600 }}>Sarah Connor</div>
        <div style={{ fontSize: 13, color: '#64748B' }}>Principal Design Technologist</div>
        <div style={{ fontSize: 12, color: '#16A34A' }}>Active now</div>
      </div>
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from '@spectra/react-native';

export default function NativePersonaDemo(): JSX.Element {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
      <Avatar name="Sarah Connor" size="md" status="online" />
      <View>
        <Text style={{ fontWeight: '600' }}>Sarah Connor</Text>
        <Text style={{ color: '#64748B' }}>Active now</Text>
      </View>
    </View>
  );
}`}
          />
        </div>
      );

    case 'card':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="card-variants"
            title="Surface Variants (Bordered, Elevated)"
            description="Encapsulate related actions and stats within unified surface containers."
            webPreview={
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, width: '100%', maxWidth: 520 }}>
                <Card variant="bordered" padding="md">
                  <h4 style={{ margin: '0 0 6px 0', fontSize: 15 }}>Bordered Card</h4>
                  <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)' }}>Clean 2D perimeter border.</p>
                </Card>
                <Card variant="elevated" padding="md">
                  <h4 style={{ margin: '0 0 6px 0', fontSize: 15 }}>Elevated Card</h4>
                  <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)' }}>Subtle elevation shadow.</p>
                </Card>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Card variant="bordered" style={{ width: '100%' }}>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: 15 }}>Native Bordered Card</h4>
                  <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)' }}>Zero-overhead Hermes styling.</p>
                </Card>
              </div>
            }
            webCode={`import { Card } from '@spectra/react';

export default function CardVariantsDemo() {
  return (
    <Card variant="bordered" padding="md">
      <h4>Bordered Surface</h4>
      <p>Clean 2D perimeter border.</p>
    </Card>
  );
}`}
            nativeCode={`import React from 'react';
import { Card, Text } from '@spectra/react-native';

export default function NativeCardDemo() {
  return (
    <Card variant="bordered">
      <Text variant="heading">Native Surface</Text>
    </Card>
  );
}`}
          />

          <ComponentDemoCard
            id="card-interactive"
            title="Structured Action Card"
            description="Compose header, metrics badges, and bottom action buttons inside a card container."
            webPreview={
              <div style={{ maxWidth: 440, width: '100%' }}>
                <Card variant="bordered" padding="md">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <h4 style={{ margin: 0, fontSize: 15 }}>Cluster Deployment</h4>
                    <Badge variant="success" dot>Operational</Badge>
                  </div>
                  <p style={{ margin: '0 0 16px 0', fontSize: 13, color: 'var(--color-text-secondary)' }}>
                    Healthy state verified across all 12 worker nodes.
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                    <Button variant="secondary" size="sm">Logs</Button>
                    <Button variant="primary" size="sm">Deploy</Button>
                  </div>
                </Card>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Card variant="bordered">
                  <h4 style={{ margin: '0 0 4px 0' }}>Native Cluster</h4>
                  <Button variant="primary" size="sm" style={{ marginTop: 8 }}>Deploy</Button>
                </Card>
              </div>
            }
            webCode={`import { Card, Badge, Button } from '@spectra/react';

export default function StructuredCardDemo() {
  return (
    <Card variant="bordered" padding="md">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h4>Cluster Deployment</h4>
        <Badge variant="success" dot>Operational</Badge>
      </div>
      <p>Healthy state across nodes.</p>
      <Button variant="primary" size="sm">Deploy</Button>
    </Card>
  );
}`}
            nativeCode={`import React from 'react';
import { Card, Button } from '@spectra/react-native';

export default function NativeStructuredCardDemo() {
  return (
    <Card variant="bordered">
      <Button variant="filled">Deploy</Button>
    </Card>
  );
}`}
          />

          <ComponentDemoCard
            id="card-stats"
            title="KPI Analytics & Metrics Card"
            description="Display key performance indicators, percentage growth trends, and secondary metadata inside a compact card."
            webPreview={
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, width: '100%', maxWidth: 520 }}>
                <Card variant="bordered" padding="md">
                  <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginBottom: 4 }}>Monthly Active Users</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: 24, fontWeight: 800, color: 'var(--color-text-primary)' }}>128,450</div>
                    <Badge variant="success">+14.2%</Badge>
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', marginTop: 6 }}>vs. 112,400 last month</div>
                </Card>

                <Card variant="bordered" padding="md">
                  <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginBottom: 4 }}>API Error Rate</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: 24, fontWeight: 800, color: 'var(--color-text-primary)' }}>0.018%</div>
                    <Badge variant="info">Healthy</Badge>
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', marginTop: 6 }}>99.98% SLA maintained</div>
                </Card>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Card variant="bordered">
                  <div style={{ fontSize: 20, fontWeight: 700 }}>128,450 MAU</div>
                  <div style={{ fontSize: 12, color: '#16A34A' }}>+14.2% Growth</div>
                </Card>
              </div>
            }
            webCode={`import { Card, Badge } from '@spectra/react';

export default function MetricCardDemo() {
  return (
    <Card variant="bordered" padding="md">
      <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Monthly Active Users</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span style={{ fontSize: 24, fontWeight: 800 }}>128,450</span>
        <Badge variant="success">+14.2%</Badge>
      </div>
    </Card>
  );
}`}
            nativeCode={`import React from 'react';
import { Card, Text } from '@spectra/react-native';

export default function NativeMetricCardDemo() {
  return (
    <Card variant="bordered">
      <Text variant="body">128,450 MAU (+14.2%)</Text>
    </Card>
  );
}`}
          />

          {/* Demo 3: Structured Card with Header Media & Actions */}
          <ComponentDemoCard
            id="card-media"
            title="Structured Card with Header Media & Actions"
            description="Composite card combining a top media banner, title badge, supporting descriptive body, and trailing action buttons."
            webPreview={
              <div style={{ maxWidth: 360, width: '100%' }}>
                <div style={{ borderRadius: 12, border: '1px solid var(--color-border-subtle)', background: 'var(--color-surface-elevated)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ height: 120, background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600 }}>
                    Component Design System Canvas
                  </div>
                  <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-text-primary)' }}>Spectra UI v1.0</span>
                      <Badge variant="info">Production</Badge>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      Comprehensive cross-platform component library engineered with token symmetry and strict accessibility benchmarks.
                    </p>
                    <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
                      <Button variant="primary" size="sm">Explore Tokens</Button>
                      <Button variant="secondary" size="sm">Changelog</Button>
                    </div>
                  </div>
                </div>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Card variant="bordered">
                  <div style={{ fontWeight: 700 }}>Spectra UI v1.0</div>
                  <div style={{ fontSize: 13, color: '#64748B' }}>Production Design System</div>
                </Card>
              </div>
            }
            webCode={`import React from 'react';
import { Card, Badge, Button } from '@spectra/react';

export default function MediaCardDemo(): JSX.Element {
  return (
    <Card variant="bordered" style={{ overflow: 'hidden', padding: 0 }}>
      <div style={{ height: 120, background: '#1e293b' }} />
      <div style={{ padding: 18 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h4>Spectra UI v1.0</h4>
          <Badge variant="info">Production</Badge>
        </div>
        <p>Comprehensive cross-platform component library.</p>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button variant="primary" size="sm">Explore Tokens</Button>
          <Button variant="secondary" size="sm">Changelog</Button>
        </div>
      </div>
    </Card>
  );
}`}
            nativeCode={`import React from 'react';
import { Card, Text, Button } from '@spectra/react-native';

export default function NativeMediaCardDemo(): JSX.Element {
  return (
    <Card variant="bordered">
      <Text style={{ fontWeight: '700' }}>Spectra UI v1.0</Text>
      <Button variant="filled">Explore</Button>
    </Card>
  );
}`}
          />
        </div>
      );

    case 'tooltip':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="tooltip-placements"
            title="Compass Placements (Top, Bottom, Left, Right)"
            description="Position contextual tooltip overlays to avoid obscuring relevant user content."
            webPreview={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', alignItems: 'center' }}>
                <Tooltip content="Tooltip placed at top" placement="top">
                  <Button variant="secondary" size="sm">Top</Button>
                </Tooltip>
                <Tooltip content="Tooltip placed at bottom" placement="bottom">
                  <Button variant="secondary" size="sm">Bottom</Button>
                </Tooltip>
                <Tooltip content="Tooltip placed on the left side" placement="left">
                  <Button variant="secondary" size="sm">Left</Button>
                </Tooltip>
                <Tooltip content="Tooltip placed on the right side" placement="right">
                  <Button variant="secondary" size="sm">Right</Button>
                </Tooltip>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', gap: 10 }}>
                <Button variant="secondary" size="sm">Native Tooltip Target</Button>
              </div>
            }
            webCode={`import { Tooltip, Button } from '@spectra/react';

export default function TooltipPlacementsDemo() {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <Tooltip content="Tooltip at top" placement="top">
        <Button variant="secondary">Top</Button>
      </Tooltip>
      <Tooltip content="Tooltip at bottom" placement="bottom">
        <Button variant="secondary">Bottom</Button>
      </Tooltip>
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { Tooltip, Button } from '@spectra/react-native';

export default function NativeTooltipDemo() {
  return (
    <Tooltip content="Native helper prompt" placement="top">
      <Button variant="outline">Native Target</Button>
    </Tooltip>
  );
}`}
          />

          <ComponentDemoCard
            id="tooltip-icon"
            title="Tooltip on Icon Action"
            description="Always provide tooltip text for icon-only buttons to guarantee clarity and accessible naming."
            webPreview={
              <Tooltip content="Search logs and events">
                <Button variant="secondary" icon={<SearchIcon size={16} />} aria-label="Search" />
              </Tooltip>
            }
            nativePreview={
              <Button variant="secondary" icon={<SearchIcon size={16} />} />
            }
            webCode={`import { Tooltip, Button } from '@spectra/react';
import { SearchIcon } from '@spectra/icons';

export default function IconTooltipDemo() {
  return (
    <Tooltip content="Search logs and events">
      <Button variant="secondary" icon={<SearchIcon size={16} />} aria-label="Search" />
    </Tooltip>
  );
}`}
            nativeCode={`import React from 'react';
import { Button } from '@spectra/react-native';
import { SearchIcon } from '@spectra/icons';

export default function NativeIconTooltipDemo() {
  return <Button variant="outline" icon={<SearchIcon size={16} />} />;
}`}
          />
        </div>
      );

    case 'list':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="list-interactive"
            title="Interactive List with Leading Icons & Trailing Badges"
            description="Create navigable indexes with hover focus and keyboard arrow navigation."
            webPreview={
              <div style={{ maxWidth: 440, width: '100%' }}>
                <List>
                  <ListItem interactive>
                    <ListItemIcon><UserIcon size={16} /></ListItemIcon>
                    <ListItemText primary="System Administrator" secondary="Root infrastructure access" />
                    <Badge variant="success">Active</Badge>
                  </ListItem>
                  <ListItem interactive>
                    <ListItemIcon><UserIcon size={16} /></ListItemIcon>
                    <ListItemText primary="Compliance Officer" secondary="Audit reports and security logs" />
                    <Badge variant="warning">In Review</Badge>
                  </ListItem>
                </List>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <List>
                  <ListItem>
                    <ListItemText primary="Native Mobile User 1" secondary="Touch row item" />
                  </ListItem>
                </List>
              </div>
            }
            webCode={`import { List, ListItem, ListItemIcon, ListItemText, Badge } from '@spectra/react';
import { UserIcon } from '@spectra/icons';

export default function ListDemo() {
  return (
    <List>
      <ListItem interactive>
        <ListItemIcon><UserIcon size={16} /></ListItemIcon>
        <ListItemText primary="System Administrator" secondary="Root access" />
        <Badge variant="success">Active</Badge>
      </ListItem>
    </List>
  );
}`}
            nativeCode={`import React from 'react';
import { List, ListItem, ListItemText } from '@spectra/react-native';

export default function NativeListDemo() {
  return (
    <List divided>
      <ListItem onPress={() => console.log('Tapped list item')}>
        <ListItemText primary="Native User Row" />
      </ListItem>
    </List>
  );
}`}
          />

          <ComponentDemoCard
            id="list-team"
            title="User List with Avatars & Presence Status"
            description="Team directory list featuring integrated circular avatars, presence indicator dots, and role descriptions."
            webPreview={
              <div style={{ maxWidth: 440, width: '100%' }}>
                <List>
                  <ListItem interactive>
                    <div style={{ marginRight: 12 }}>
                      <Avatar name="Sarah Chen" status="online" size="md" />
                    </div>
                    <ListItemText primary="Sarah Chen" secondary="Staff Infrastructure Engineer" />
                    <Badge variant="primary">Lead</Badge>
                  </ListItem>
                  <ListItem interactive>
                    <div style={{ marginRight: 12 }}>
                      <Avatar name="Alex Rivera" status="away" size="md" />
                    </div>
                    <ListItemText primary="Alex Rivera" secondary="Design System Architect" />
                    <Badge variant="default">Member</Badge>
                  </ListItem>
                </List>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <List>
                  <ListItem>
                    <ListItemText primary="Sarah Chen" secondary="Staff Engineer (Online)" />
                  </ListItem>
                </List>
              </div>
            }
            webCode={`import { List, ListItem, ListItemText, Avatar, Badge } from '@spectra/react';

export default function TeamListDemo() {
  return (
    <List>
      <ListItem interactive>
        <Avatar name="Sarah Chen" status="online" size="md" />
        <ListItemText primary="Sarah Chen" secondary="Staff Infrastructure Engineer" />
        <Badge variant="primary">Lead</Badge>
      </ListItem>
    </List>
  );
}`}
            nativeCode={`import React from 'react';
import { List, ListItem, ListItemText } from '@spectra/react-native';

export default function NativeTeamList() {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Sarah Chen (Online)" secondary="Staff Engineer" />
      </ListItem>
    </List>
  );
}`}
          />

          <ComponentDemoCard
            id="list-settings"
            title="Settings List with End-Action Switches"
            description="Compact preference settings rows featuring description copy and interactive switches."
            webPreview={
              <div style={{ maxWidth: 440, width: '100%' }}>
                <List>
                  <ListItem>
                    <ListItemText primary="Desktop Push Notifications" secondary="Receive real-time alerts when builds succeed" />
                    <Switch checked={listSwitch1} onChange={(val) => setListSwitch1(val)} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Analytics Telemetry" secondary="Share anonymous crash dumps to help improve the system" />
                    <Switch checked={listSwitch2} onChange={(val) => setListSwitch2(val)} />
                  </ListItem>
                </List>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <List>
                  <ListItem>
                    <ListItemText primary="Push Notifications" secondary="Native iOS / Android switch row" />
                  </ListItem>
                </List>
              </div>
            }
            webCode={`import { List, ListItem, ListItemText, Switch } from '@spectra/react';

export default function SettingsListDemo() {
  const [notifications, setNotifications] = useState(true);

  return (
    <List>
      <ListItem>
        <ListItemText primary="Push Notifications" secondary="Real-time build alerts" />
        <Switch checked={notifications} onChange={setNotifications} />
      </ListItem>
    </List>
  );
}`}
            nativeCode={`import React from 'react';
import { List, ListItem, ListItemText, Switch } from '@spectra/react-native';

export default function NativeSettingsList() {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Push Notifications" />
        <Switch value={true} />
      </ListItem>
    </List>
  );
}`}
          />
        </div>
      );

    case 'dialog':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="dialog-confirm"
            title="Confirmation Modal Dialog"
            description="Trap keyboard focus, disable background scrolling, and support Escape key dismissal."
            webPreview={
              <div>
                <Button variant="primary" onClick={() => setDialogOpen(true)}>
                  Trigger Confirmation Dialog
                </Button>
                <Dialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)}>
                  <div style={{ padding: 24 }}>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: 18 }}>Confirm Token Deployment</h3>
                    <p style={{ margin: '0 0 20px 0', color: 'var(--color-text-secondary)', fontSize: 14 }}>
                      Are you sure you want to push these tokens to production?
                    </p>
                    <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
                      <Button variant="secondary" onClick={() => setDialogOpen(false)}>Cancel</Button>
                      <Button variant="primary" onClick={() => setDialogOpen(false)}>Deploy Now</Button>
                    </div>
                  </div>
                </Dialog>
              </div>
            }
            nativePreview={
              <Button variant="primary" style={{ width: '100%' }}>
                Trigger Native Alert
              </Button>
            }
            webCode={`import { Dialog, Button } from '@spectra/react';

export default function ConfirmDialogDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog isOpen={open} onClose={() => setOpen(false)}>
        <div style={{ padding: 24 }}>
          <h3>Confirm Action</h3>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </div>
      </Dialog>
    </>
  );
}`}
            nativeCode={`import React, { useState } from 'react';
import { Dialog, Button } from '@spectra/react-native';

export default function NativeDialogDemo() {
  const [open, setOpen] = useState(false);
  return <Button onPress={() => setOpen(true)}>Open Native Dialog</Button>;
}`}
          />

          <ComponentDemoCard
            id="dialog-form"
            title="Form Input Modal Dialog"
            description="Complex dialog containing form inputs, label bindings, and modal submission actions."
            webPreview={
              <div>
                <Button variant="secondary" onClick={() => setFormDialogOpen(true)}>
                  Create New Project
                </Button>
                <Dialog isOpen={formDialogOpen} onClose={() => setFormDialogOpen(false)}>
                  <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16, minWidth: 320 }}>
                    <h3 style={{ margin: 0, fontSize: 18 }}>New Spectra Project</h3>
                    <TextInput label="Project Name" placeholder="e.g. Acme Dashboard" defaultValue="Spectra Cloud" />
                    <Select
                      label="Deployment Region"
                      options={[
                        { label: 'US East (N. Virginia)', value: 'us-east-1' },
                        { label: 'Europe (Frankfurt)', value: 'eu-central-1' },
                        { label: 'Asia Pacific (Tokyo)', value: 'ap-northeast-1' },
                      ]}
                    />
                    <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 8 }}>
                      <Button variant="secondary" onClick={() => setFormDialogOpen(false)}>Cancel</Button>
                      <Button variant="primary" onClick={() => setFormDialogOpen(false)}>Create Project</Button>
                    </div>
                  </div>
                </Dialog>
              </div>
            }
            nativePreview={
              <Button variant="secondary" style={{ width: '100%' }}>
                Open Form Sheet
              </Button>
            }
            webCode={`import { Dialog, Button, TextInput, Select } from '@spectra/react';

export default function FormDialogDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>New Project</Button>
      <Dialog isOpen={open} onClose={() => setOpen(false)}>
        <div style={{ padding: 24 }}>
          <h3>New Project</h3>
          <TextInput label="Name" placeholder="Project Name" />
          <Button onClick={() => setOpen(false)}>Save</Button>
        </div>
      </Dialog>
    </>
  );
}`}
            nativeCode={`import React, { useState } from 'react';
import { Dialog, Button } from '@spectra/react-native';

export default function NativeFormDialog() {
  return <Button onPress={() => {}}>Open Native Modal</Button>;
}`}
          />

          <ComponentDemoCard
            id="dialog-danger"
            title="Destructive Delete Confirmation Dialog"
            description="Danger action confirmation dialog preventing accidental deletion of critical cloud resources."
            webPreview={
              <div>
                <Button variant="danger" onClick={() => setDeleteDialogOpen(true)}>
                  Delete Database
                </Button>
                <Dialog isOpen={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
                  <div style={{ padding: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--color-feedback-error)', marginBottom: 8 }}>
                      <AlertCircleIcon size={20} />
                      <h3 style={{ margin: 0, fontSize: 18 }}>Permanently Delete Database?</h3>
                    </div>
                    <p style={{ margin: '0 0 20px 0', color: 'var(--color-text-secondary)', fontSize: 14, lineHeight: 1.5 }}>
                      This action cannot be undone. All 14 tables and replica snapshots will be purged immediately.
                    </p>
                    <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
                      <Button variant="secondary" onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
                      <Button variant="danger" onClick={() => setDeleteDialogOpen(false)}>Yes, Delete Database</Button>
                    </div>
                  </div>
                </Dialog>
              </div>
            }
            nativePreview={
              <Button variant="danger" style={{ width: '100%' }}>
                Confirm Native Deletion
              </Button>
            }
            webCode={`import { Dialog, Button } from '@spectra/react';

export default function DangerDialogDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="danger" onClick={() => setOpen(true)}>Delete</Button>
      <Dialog isOpen={open} onClose={() => setOpen(false)}>
        <div style={{ padding: 24 }}>
          <h3>Delete Database?</h3>
          <p>This action cannot be undone.</p>
          <Button variant="danger" onClick={() => setOpen(false)}>Delete</Button>
        </div>
      </Dialog>
    </>
  );
}`}
            nativeCode={`import React, { useState } from 'react';
import { Dialog, Button } from '@spectra/react-native';

export default function NativeDangerDialog() {
  return <Button variant="danger" onPress={() => {}}>Delete Resource</Button>;
}`}
          />
        </div>
      );

    case 'alert':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="alert-variants"
            title="Status Severity Variants (Info, Success, Warning, Danger)"
            description="Alerts communicate four primary severity levels: Info for announcements, Success for confirmation, Warning for cautions, and Danger for critical errors."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
                <Alert variant="info" title="Update Available">
                  Spectra UI v0.2.0 is now live featuring Algolia search, 6 new components, and parity React Native support.
                </Alert>
                <Alert variant="success" title="Synchronization Complete">
                  175 design token and CSS class reference records indexed successfully to the Algolia database.
                </Alert>
                <Alert variant="warning" title="API Deprecation Notice">
                  Legacy theme provider props will be sunset in v1.0. Migrate to useColorScheme hook.
                </Alert>
                <Alert variant="danger" title="Deployment Failure">
                  Network timeout while connecting to remote edge worker. Please retry your deployment.
                </Alert>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
                <Alert variant="info" title="Native Notice">Running on iOS / Android runtime</Alert>
                <Alert variant="success" title="Saved">Changes persisted to SQLite</Alert>
                <Alert variant="danger" title="Error">Camera permission denied</Alert>
              </div>
            }
            compactCode={`<Alert variant="info" title="Update Available">Spectra UI v0.2.0 is live</Alert>
<Alert variant="success" title="Complete">Data synchronized</Alert>
<Alert variant="warning" title="Caution">Review settings</Alert>
<Alert variant="danger" title="Error">Operation failed</Alert>`}
            webCode={`import { Alert } from '@spectra/react';

export default function AlertVariantsDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Alert variant="info" title="Update Available">
        Spectra UI v0.2.0 is live with Algolia agentic search and 6 new components.
      </Alert>
      <Alert variant="success" title="Success">
        Design tokens synchronized successfully.
      </Alert>
      <Alert variant="warning" title="Warning">
        Review resource allocations before deploying.
      </Alert>
      <Alert variant="danger" title="Error">
        Network request timed out.
      </Alert>
    </div>
  );
}`}
            nativeCode={`import { View } from 'react-native';
import { Alert } from '@spectra/react-native';

export default function NativeAlertDemo() {
  return (
    <View style={{ gap: 10 }}>
      <Alert variant="info" title="Info">System update scheduled</Alert>
      <Alert variant="success" title="Success">Upload complete</Alert>
      <Alert variant="danger" title="Danger">Failed to authenticate</Alert>
    </View>
  );
}`}
          />

          <ComponentDemoCard
            id="alert-dismissible"
            title="Dismissible Alerts with Custom Handlers"
            description="Dismissible alerts render an accessible close button that fires an onDismiss callback when clicked, enabling temporary notices."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
                {!alertDismissed ? (
                  <Alert
                    variant="info"
                    title="Dismissible Announcement"
                    dismissible
                    onDismiss={() => setAlertDismissed(true)}
                  >
                    Click the close button on the right to dismiss this notification.
                  </Alert>
                ) : (
                  <div style={{ padding: '16px', borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>Alert was dismissed.</span>
                    <Button size="sm" variant="secondary" onClick={() => setAlertDismissed(false)}>
                      Restore Alert
                    </Button>
                  </div>
                )}
              </div>
            }
            nativePreview={
              <Alert variant="info" title="Native Notice" onDismiss={() => {}}>
                Dismissible mobile banner
              </Alert>
            }
            compactCode={`<Alert variant="info" title="Notice" dismissible onDismiss={() => handleDismiss()}>
  Dismissible message body
</Alert>`}
            webCode={`import { useState } from 'react';
import { Alert, Button } from '@spectra/react';

export default function DismissibleAlertDemo() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return <Button onClick={() => setDismissed(false)}>Restore Alert</Button>;
  }

  return (
    <Alert
      variant="info"
      title="Notice"
      dismissible
      onDismiss={() => setDismissed(true)}
    >
      Click the close button to dismiss.
    </Alert>
  );
}`}
            nativeCode={`import { Alert } from '@spectra/react-native';

export default function NativeDismissibleDemo() {
  return (
    <Alert
      variant="info"
      title="Notice"
      onDismiss={() => console.log('Dismissed')}
    >
      Native dismiss banner
    </Alert>
  );
}`}
          />

          {/* Demo 3: Actionable Alert with Direct Action Buttons */}
          <ComponentDemoCard
            id="alert-actionable"
            title="Actionable Alert with Direct Action Buttons"
            description="Embeds dedicated action triggers directly within the alert notification banner for immediate remediation (MUI & Fluent Alert action slot)."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderRadius: 10, background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <AlertCircleIcon size={20} color="#dc2626" />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--color-text-primary)' }}>Storage Limit Exceeded</div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>You have utilized 98.4% of your allocated CDN asset cache.</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <Button variant="danger" size="sm">Upgrade Tier</Button>
                    <Button variant="secondary" size="sm">Clear Cache</Button>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderRadius: 10, background: 'rgba(37, 99, 235, 0.08)', border: '1px solid rgba(37, 99, 235, 0.3)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <InfoIcon size={20} color="#2563eb" />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--color-text-primary)' }}>New Design System Version Available</div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>Spectra UI v0.3.0 includes 60+ components and 25+ functional hooks.</div>
                    </div>
                  </div>
                  <Button variant="primary" size="sm">Update Now</Button>
                </div>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Alert variant="warning" title="Disk Warning">
                  Free up space or upgrade
                </Alert>
              </div>
            }
            webCode={`import React from 'react';
import { Alert, Button } from '@spectra/react';
import { AlertCircleIcon } from '@spectra/icons';

export default function ActionableAlertDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 16, border: '1px solid #ef4444', borderRadius: 10, background: 'rgba(239,68,68,0.08)' }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <AlertCircleIcon size={20} color="#dc2626" />
        <div>
          <h4>Storage Limit Exceeded</h4>
          <p>You have utilized 98.4% of your CDN cache.</p>
        </div>
      </div>
      <Button variant="danger" size="sm">Upgrade Tier</Button>
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@spectra/react-native';

export default function NativeActionableAlertDemo(): JSX.Element {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 14 }}>
      <Text>Storage Limit Warning</Text>
      <Button variant="filled">Upgrade</Button>
    </View>
  );
}`}
          />
        </div>
      );

    case 'spinner':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="spinner-sizes"
            title="Sizing Scale (Small, Medium, Large)"
            description="The Spinner component provides three calibrated sizes: sm (16px) for inline buttons and chips, md (24px) for cards, and lg (36px) for full-view data loading."
            webPreview={
              <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <Spinner size="sm" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>Small (16px)</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <Spinner size="md" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>Medium (24px)</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <Spinner size="lg" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>Large (36px)</span>
                </div>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
              </div>
            }
            compactCode={`<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />`}
            webCode={`import { Spinner } from '@spectra/react';

export default function SpinnerSizesDemo() {
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  );
}`}
            nativeCode={`import { View } from 'react-native';
import { Spinner } from '@spectra/react-native';

export default function NativeSpinnerDemo() {
  return (
    <View style={{ flexDirection: 'row', gap: 20 }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </View>
  );
}`}
          />

          <ComponentDemoCard
            id="spinner-inline"
            title="Inline Button Loading State"
            description="Spinners integrate seamlessly inside buttons and action triggers to provide clear asynchronous progress feedback."
            webPreview={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
                <Button variant="primary" isLoading>
                  Submitting Form
                </Button>
                <Button variant="secondary" icon={<Spinner size="sm" color="var(--color-text-primary)" />}>
                  Synchronizing...
                </Button>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 6, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-subtle)' }}>
                  <Spinner size="sm" />
                  <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>Indexing Algolia database...</span>
                </div>
              </div>
            }
            nativePreview={
              <Button variant="primary" isLoading style={{ width: '100%' }}>
                Saving to Cloud
              </Button>
            }
            compactCode={`<Button variant="primary" isLoading>Submitting Form</Button>
<div style={{ display: 'flex', gap: 8 }}>
  <Spinner size="sm" />
  <span>Loading...</span>
</div>`}
            webCode={`import { Button, Spinner } from '@spectra/react';

export default function InlineSpinnerDemo() {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Button variant="primary" isLoading>
        Saving Changes
      </Button>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Spinner size="sm" />
        <span>Loading records...</span>
      </div>
    </div>
  );
}`}
            nativeCode={`import { Button } from '@spectra/react-native';

export default function NativeInlineLoading() {
  return <Button variant="filled" isLoading>Saving Profile</Button>;
}`}
          />
        </div>
      );

    case 'skeleton':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="skeleton-shapes"
            title="Shapes & Morphologies (Text, Circle, Rounded, Card)"
            description="Skeleton provides geometric primitives that simulate text lines, circular avatars, and rectangular images with smooth continuous shimmer animations."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 420 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <Skeleton variant="circular" width={48} height={48} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
                    <Skeleton variant="text" width="65%" height={16} />
                    <Skeleton variant="text" width="40%" height={12} />
                  </div>
                </div>
                <Skeleton variant="rounded" width="100%" height={120} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <Skeleton variant="text" width="100%" height={12} />
                  <Skeleton variant="text" width="90%" height={12} />
                  <Skeleton variant="text" width="70%" height={12} />
                </div>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
                <Skeleton variant="circular" width={44} height={44} />
                <Skeleton variant="text" width="80%" height={14} />
                <Skeleton variant="rounded" width="100%" height={80} />
              </div>
            }
            compactCode={`<Skeleton variant="circular" width={48} height={48} />
<Skeleton variant="text" width="60%" />
<Skeleton variant="rounded" width="100%" height={120} />`}
            webCode={`import { Skeleton } from '@spectra/react';

export default function SkeletonShapesDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 360 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Skeleton variant="circular" width={48} height={48} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <Skeleton variant="text" width="70%" height={16} />
          <Skeleton variant="text" width="40%" height={12} />
        </div>
      </div>
      <Skeleton variant="rounded" width="100%" height={140} />
    </div>
  );
}`}
            nativeCode={`import { View } from 'react-native';
import { Skeleton } from '@spectra/react-native';

export default function NativeSkeletonDemo() {
  return (
    <View style={{ gap: 12 }}>
      <Skeleton variant="circular" width={48} height={48} />
      <Skeleton variant="text" width="75%" height={16} />
      <Skeleton variant="rounded" width="100%" height={100} />
    </View>
  );
}`}
          />

          <ComponentDemoCard
            id="skeleton-interactive"
            title="Interactive Loading State Toggle"
            description="Toggle between the animated skeleton placeholder and the loaded content to preview the seamless transition UX."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 440 }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button size="sm" variant="secondary" onClick={() => setSkeletonLoading(!skeletonLoading)}>
                    {skeletonLoading ? 'Show Loaded Content' : 'Simulate Loading'}
                  </Button>
                </div>

                <div style={{ padding: 20, borderRadius: 12, border: '1px solid var(--color-border-default)', backgroundColor: 'var(--color-surface)' }}>
                  {skeletonLoading ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                        <Skeleton variant="circular" width={44} height={44} />
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                          <Skeleton variant="text" width="55%" height={16} />
                          <Skeleton variant="text" width="35%" height={12} />
                        </div>
                      </div>
                      <Skeleton variant="rounded" width="100%" height={100} />
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Skeleton variant="text" width="30%" height={14} />
                        <Skeleton variant="rounded" width={80} height={28} />
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                        <Avatar name="Sarah Connor" size="md" status="online" />
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--color-text-primary)' }}>Sarah Connor</div>
                          <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Staff Systems Architect</div>
                        </div>
                      </div>
                      <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                        Leading the enterprise multi-platform architecture across React web, React Native mobile, and edge AI integrations.
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 12, color: 'var(--color-action-primary)', fontWeight: 600 }}>14 repositories active</span>
                        <Button size="sm" variant="primary">Follow</Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            }
            nativePreview={
              <Skeleton variant="rounded" width="100%" height={120} />
            }
            compactCode={`{isLoading ? (
  <Skeleton variant="rounded" width="100%" height={120} />
) : (
  <ProfileCard user={data} />
)}`}
            webCode={`import { useState } from 'react';
import { Skeleton, Button, Avatar } from '@spectra/react';

export default function InteractiveSkeletonDemo() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <Button onClick={() => setLoading(!loading)}>Toggle Loading</Button>
      {loading ? (
        <Skeleton variant="rounded" width={320} height={140} />
      ) : (
        <div className="profile-card">
          <Avatar name="Sarah Connor" />
          <h4>Sarah Connor</h4>
        </div>
      )}
    </div>
  );
}`}
            nativeCode={`import { View } from 'react-native';
import { Skeleton } from '@spectra/react-native';

export default function NativeCardSkeleton() {
  return <Skeleton variant="rounded" width="100%" height={120} />;
}`}
          />
        </div>
      );

    case 'divider':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="divider-horizontal"
            title="Horizontal Divider with Centered Text Inset"
            description="Dividers separate content sections cleanly. Adding a label attribute renders an inset pill ideal for auth flows (e.g. 'OR CONTINUE WITH')."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 380, padding: 24, borderRadius: 12, border: '1px solid var(--color-border-default)', backgroundColor: 'var(--color-surface)' }}>
                <Button variant="primary" style={{ width: '100%' }}>Sign in with Corporate SSO</Button>
                <Divider label="OR CONTINUE WITH EMAIL" />
                <TextInput placeholder="Enter your email..." fullWidth />
                <Button variant="secondary" style={{ width: '100%' }}>Next Step</Button>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Button variant="primary" style={{ width: '100%' }}>SSO Login</Button>
                <Divider />
                <Button variant="secondary" style={{ width: '100%' }}>Email Login</Button>
              </div>
            }
            compactCode={`<Button variant="primary">SSO Login</Button>
<Divider label="OR" />
<TextInput placeholder="Email" />`}
            webCode={`import { Divider, Button, TextInput } from '@spectra/react';

export default function DividerHorizontalDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 340 }}>
      <Button variant="primary">Sign in with SSO</Button>
      <Divider label="OR" />
      <TextInput placeholder="name@company.com" />
      <Button variant="secondary">Continue with Email</Button>
    </div>
  );
}`}
            nativeCode={`import { View } from 'react-native';
import { Divider, Button } from '@spectra/react-native';

export default function NativeDividerDemo() {
  return (
    <View style={{ gap: 12 }}>
      <Button variant="filled">Apple Sign-In</Button>
      <Divider />
      <Button variant="outline">Email Sign-In</Button>
    </View>
  );
}`}
          />

          <ComponentDemoCard
            id="divider-vertical"
            title="Vertical Divider between Toolbar Actions"
            description="Vertical dividers segment inline controls within toolbars, navigation headers, or button groups."
            webPreview={
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', borderRadius: 8, border: '1px solid var(--color-border-default)', backgroundColor: 'var(--color-surface-raised)' }}>
                <Button size="sm" variant="tertiary">Cut</Button>
                <Button size="sm" variant="tertiary">Copy</Button>
                <Button size="sm" variant="tertiary">Paste</Button>
                <Divider orientation="vertical" style={{ height: 20 }} />
                <Button size="sm" variant="tertiary">Undo</Button>
                <Button size="sm" variant="tertiary">Redo</Button>
                <Divider orientation="vertical" style={{ height: 20 }} />
                <Button size="sm" variant="primary">Format</Button>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <Button size="sm" variant="secondary">Copy</Button>
                <Divider orientation="vertical" style={{ height: 24 }} />
                <Button size="sm" variant="secondary">Paste</Button>
              </div>
            }
            compactCode={`<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
  <Button size="sm" variant="tertiary">Copy</Button>
  <Divider orientation="vertical" />
  <Button size="sm" variant="tertiary">Paste</Button>
</div>`}
            webCode={`import { Divider, Button } from '@spectra/react';

export default function VerticalDividerDemo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Button size="sm" variant="tertiary">Cut</Button>
      <Button size="sm" variant="tertiary">Copy</Button>
      <Divider orientation="vertical" />
      <Button size="sm" variant="tertiary">Paste</Button>
    </div>
  );
}`}
            nativeCode={`import { View } from 'react-native';
import { Divider, Button } from '@spectra/react-native';

export default function NativeVerticalDivider() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <Button size="sm" variant="outline">Back</Button>
      <Divider orientation="vertical" />
      <Button size="sm" variant="outline">Next</Button>
    </View>
  );
}`}
          />

          <ComponentDemoCard
            id="divider-styles"
            title="Border Stroke Styles (Solid, Dashed, Dotted)"
            description="Dividers support three border stroke styles to express different degrees of section demarcation."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%' }}>
                <div>
                  <span style={{ fontSize: 12, color: 'var(--color-text-muted)', marginBottom: 6, display: 'block' }}>Solid Divider</span>
                  <Divider variant="solid" />
                </div>
                <div>
                  <span style={{ fontSize: 12, color: 'var(--color-text-muted)', marginBottom: 6, display: 'block' }}>Dashed Divider</span>
                  <Divider variant="dashed" />
                </div>
                <div>
                  <span style={{ fontSize: 12, color: 'var(--color-text-muted)', marginBottom: 6, display: 'block' }}>Dotted Divider</span>
                  <Divider variant="dotted" />
                </div>
              </div>
            }
            nativePreview={
              <Divider />
            }
            compactCode={`<Divider variant="solid" />
<Divider variant="dashed" />
<Divider variant="dotted" />`}
            webCode={`import { Divider } from '@spectra/react';

export default function DividerStylesDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Divider variant="solid" />
      <Divider variant="dashed" />
      <Divider variant="dotted" />
    </div>
  );
}`}
            nativeCode={`import { Divider } from '@spectra/react-native';

export default function NativeDividerStyles() {
  return <Divider />;
}`}
          />
        </div>
      );

    case 'chip':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="chip-variants"
            title="Filled and Outlined Surface Styles"
            description="Chips come in Filled and Outlined variants across small (24px) and medium (32px) heights."
            webPreview={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                <Chip label="Filled Medium" variant="filled" size="md" />
                <Chip label="Filled Small" variant="filled" size="sm" />
                <Chip label="Outlined Medium" variant="outlined" size="md" />
                <Chip label="Outlined Small" variant="outlined" size="sm" />
                <Chip label="With Leading Icon" variant="filled" icon={<SparklesIcon size={14} />} />
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <Chip label="Native Filled" variant="filled" />
                <Chip label="Native Outlined" variant="outlined" />
              </div>
            }
            compactCode={`<Chip label="Filled" variant="filled" />
<Chip label="Outlined" variant="outlined" />
<Chip label="With Icon" icon={<SparklesIcon size={14} />} />`}
            webCode={`import { Chip } from '@spectra/react';
import { SparklesIcon } from '@spectra/icons';

export default function ChipVariantsDemo() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Chip label="Filled" variant="filled" />
      <Chip label="Outlined" variant="outlined" />
      <Chip label="Featured" variant="filled" icon={<SparklesIcon size={14} />} />
    </div>
  );
}`}
            nativeCode={`import { View } from 'react-native';
import { Chip } from '@spectra/react-native';

export default function NativeChipDemo() {
  return (
    <View style={{ flexDirection: 'row', gap: 8 }}>
      <Chip label="Mobile Chip" variant="filled" />
      <Chip label="Outline" variant="outlined" />
    </View>
  );
}`}
          />

          <ComponentDemoCard
            id="chip-filters"
            title="Selectable Filter Chips Set"
            description="Filter chips let users multi-select attributes to narrow down content sets with clear active highlight states."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['React', 'TypeScript', 'Next.js', 'Vite', 'React Native', 'Tailwind'].map((tech) => {
                    const isSelected = selectedChips.includes(tech);
                    return (
                      <Chip
                        key={tech}
                        label={tech}
                        variant={isSelected ? 'filled' : 'outlined'}
                        selected={isSelected}
                        onClick={() => {
                          if (isSelected) {
                            setSelectedChips(selectedChips.filter((t) => t !== tech));
                          } else {
                            setSelectedChips([...selectedChips, tech]);
                          }
                        }}
                      />
                    );
                  })}
                </div>
                <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
                  Active filters: {selectedChips.length > 0 ? selectedChips.join(', ') : 'None'}
                </div>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', gap: 8 }}>
                <Chip label="React" selected />
                <Chip label="TypeScript" />
              </div>
            }
            compactCode={`<Chip
  label="React"
  selected={isSelected}
  onClick={() => toggleSelection('React')}
/>`}
            webCode={`import { useState } from 'react';
import { Chip } from '@spectra/react';

export default function FilterChipsDemo() {
  const [selected, setSelected] = useState(['React', 'TypeScript']);

  const toggle = (tag: string) => {
    setSelected(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  return (
    <div style={{ display: 'flex', gap: 8 }}>
      {['React', 'TypeScript', 'Next.js'].map(tag => (
        <Chip
          key={tag}
          label={tag}
          selected={selected.includes(tag)}
          onClick={() => toggle(tag)}
        />
      ))}
    </div>
  );
}`}
            nativeCode={`import { Chip } from '@spectra/react-native';

export default function NativeFilterChips() {
  return <Chip label="Selected Filter" selected onPress={() => {}} />;
}`}
          />

          <ComponentDemoCard
            id="chip-deletable"
            title="Deletable Tag Badges"
            description="Adding an onDelete handler renders an accessible dismiss button that lets users remove tags dynamically."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
                  {chipTags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      variant="outlined"
                      onDelete={() => setChipTags(chipTags.filter((t) => t !== tag))}
                    />
                  ))}
                  {chipTags.length < 4 && (
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => setChipTags(['Design System', 'Accessibility', 'Tokens', 'Performance'])}
                    >
                      Reset Tags
                    </Button>
                  )}
                </div>
              </div>
            }
            nativePreview={
              <Chip label="Dismissible Mobile Chip" onDelete={() => {}} />
            }
            compactCode={`<Chip
  label="Design System"
  onDelete={() => removeTag('Design System')}
/>`}
            webCode={`import { useState } from 'react';
import { Chip, Button } from '@spectra/react';

export default function DeletableChipDemo() {
  const [tags, setTags] = useState(['Frontend', 'Backend', 'DevOps']);

  return (
    <div style={{ display: 'flex', gap: 8 }}>
      {tags.map(tag => (
        <Chip
          key={tag}
          label={tag}
          onDelete={() => setTags(tags.filter(t => t !== tag))}
        />
      ))}
    </div>
  );
}`}
            nativeCode={`import { Chip } from '@spectra/react-native';

export default function NativeDeletableChip() {
  return <Chip label="Removable Item" onDelete={() => {}} />;
}`}
          />
        </div>
      );

    case 'breadcrumbs':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="breadcrumbs-basic"
            title="Standard Breadcrumb Trail"
            description="Breadcrumbs display the current navigation hierarchy. Ancestors are interactive links while the current page is marked with aria-current='page'."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
                <Breadcrumbs
                  items={[
                    { label: 'Home', href: '#' },
                    { label: 'Design System', href: '#' },
                    { label: 'Components', href: '#' },
                    { label: 'Breadcrumbs', isCurrent: true },
                  ]}
                />
              </div>
            }
            nativePreview={
              <Breadcrumbs
                items={[
                  { label: 'Home' },
                  { label: 'Components' },
                  { label: 'Breadcrumbs', isCurrent: true },
                ]}
              />
            }
            compactCode={`<Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Breadcrumbs', isCurrent: true },
  ]}
/>`}
            webCode={`import { Breadcrumbs } from '@spectra/react';

export default function BreadcrumbsDemo() {
  return (
    <Breadcrumbs
      items={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Settings', href: '/settings' },
        { label: 'Team Members', isCurrent: true },
      ]}
    />
  );
}`}
            nativeCode={`import { Breadcrumbs } from '@spectra/react-native';

export default function NativeBreadcrumbsDemo() {
  return (
    <Breadcrumbs
      items={[
        { label: 'Root' },
        { label: 'Settings' },
        { label: 'Profile', isCurrent: true },
      ]}
    />
  );
}`}
          />

          <ComponentDemoCard
            id="breadcrumbs-custom"
            title="Custom Separator Nodes"
            description="Custom separators such as chevrons, arrows, or slashes can be supplied to match specific design requirements."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
                <div>
                  <span style={{ fontSize: 11, color: 'var(--color-text-muted)', display: 'block', marginBottom: 6 }}>Chevron Separator:</span>
                  <Breadcrumbs
                    separator={<ChevronDownIcon size={12} style={{ transform: 'rotate(-90deg)', opacity: 0.6 }} />}
                    items={[
                      { label: 'App', href: '#' },
                      { label: 'Projects', href: '#' },
                      { label: 'Spectra UI', href: '#' },
                      { label: 'Releases', isCurrent: true },
                    ]}
                  />
                </div>
                <div>
                  <span style={{ fontSize: 11, color: 'var(--color-text-muted)', display: 'block', marginBottom: 6 }}>Arrow Separator:</span>
                  <Breadcrumbs
                    separator={<span style={{ opacity: 0.5 }}>→</span>}
                    items={[
                      { label: 'Home', href: '#' },
                      { label: 'Docs', href: '#' },
                      { label: 'API Reference', isCurrent: true },
                    ]}
                  />
                </div>
              </div>
            }
            nativePreview={
              <Breadcrumbs
                separator="›"
                items={[
                  { label: 'App' },
                  { label: 'Settings' },
                  { label: 'Theme', isCurrent: true },
                ]}
              />
            }
            compactCode={`<Breadcrumbs
  separator="›"
  items={[
    { label: 'Home', href: '/' },
    { label: 'Docs', isCurrent: true },
  ]}
/>`}
            webCode={`import { Breadcrumbs } from '@spectra/react';

export default function CustomSeparatorDemo() {
  return (
    <Breadcrumbs
      separator="›"
      items={[
        { label: 'Home', href: '/' },
        { label: 'Settings', href: '/settings' },
        { label: 'Security', isCurrent: true },
      ]}
    />
  );
}`}
            nativeCode={`import { Breadcrumbs } from '@spectra/react-native';

export default function NativeCustomSeparator() {
  return (
    <Breadcrumbs
      separator="›"
      items={[
        { label: 'Home' },
        { label: 'Security', isCurrent: true },
      ]}
    />
  );
}`}
          />

          <ComponentDemoCard
            id="breadcrumbs-collapsed"
            title="Max Items with Collapsed Ellipsis"
            description="Deep navigation hierarchies automatically collapse intermediate crumbs into an ellipsis button when exceeding maxItems."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
                <Breadcrumbs
                  maxItems={3}
                  items={[
                    { label: 'Home', href: '#' },
                    { label: 'Workspace', href: '#' },
                    { label: 'Projects', href: '#' },
                    { label: 'Spectra UI', href: '#' },
                    { label: 'Packages', href: '#' },
                    { label: 'React', href: '#' },
                    { label: 'Alert.tsx', isCurrent: true },
                  ]}
                />
              </div>
            }
            nativePreview={
              <Breadcrumbs
                items={[
                  { label: 'Home' },
                  { label: '...' },
                  { label: 'Alert.tsx', isCurrent: true },
                ]}
              />
            }
            compactCode={`<Breadcrumbs
  maxItems={3}
  items={[
    { label: 'Home', href: '#' },
    { label: 'Workspace', href: '#' },
    { label: 'Projects', href: '#' },
    { label: 'Alert.tsx', isCurrent: true },
  ]}
/>`}
            webCode={`import { Breadcrumbs } from '@spectra/react';

export default function CollapsedBreadcrumbsDemo() {
  return (
    <Breadcrumbs
      maxItems={3}
      items={[
        { label: 'Home', href: '/' },
        { label: 'Organization', href: '/org' },
        { label: 'Engineering', href: '/eng' },
        { label: 'Design Systems', href: '/ds' },
        { label: 'Components', href: '/components' },
        { label: 'Button.tsx', isCurrent: true },
      ]}
    />
  );
}`}
            nativeCode={`import { Breadcrumbs } from '@spectra/react-native';

export default function NativeCollapsedDemo() {
  return (
    <Breadcrumbs
      items={[
        { label: 'Home' },
        { label: '...' },
        { label: 'Button', isCurrent: true },
      ]}
    />
  );
}`}
          />
        </div>
      );

    case 'split-button':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="split-button-merge"
            title="Primary Split Button (Git Merge Flow)"
            description="Combines direct execution of the primary action with a flyout dropdown menu for alternative strategies (MUI & Fluent UI 2 benchmark)."
            webPreview={
              <SplitButton
                variant="primary"
                options={[
                  { label: 'Create a merge commit', onClick: () => console.log('Merge commit') },
                  { label: 'Squash and merge', onClick: () => console.log('Squash merge') },
                  { label: 'Rebase and merge', onClick: () => console.log('Rebase merge') },
                ]}
                onClick={() => console.log('Primary merge triggered')}
              >
                Merge pull request
              </SplitButton>
            }
            nativePreview={<Button variant="primary">Merge Pull Request</Button>}
            webCode={`import React from 'react';
import { SplitButton } from '@spectra/react';

export default function SplitMergeDemo(): JSX.Element {
  const options = [
    { label: 'Create a merge commit', onClick: () => console.log('Merge') },
    { label: 'Squash and merge', onClick: () => console.log('Squash') },
    { label: 'Rebase and merge', onClick: () => console.log('Rebase') },
  ];

  return (
    <SplitButton
      variant="primary"
      options={options}
      onClick={() => console.log('Primary action')}
    >
      Merge pull request
    </SplitButton>
  );
}`}
            nativeCode={`import { Button } from '@spectra/react-native';

export default function NativeSplitDemo() {
  return <Button variant="filled">Merge pull request</Button>;
}`}
          />

          <ComponentDemoCard
            id="split-button-secondary"
            title="Secondary Export & Download Split"
            description="Low-profile secondary outline variant for exporting formats like PDF, CSV, and JSON."
            webPreview={
              <SplitButton
                variant="secondary"
                options={[
                  { label: 'Export as CSV', onClick: () => console.log('CSV') },
                  { label: 'Export as PDF', onClick: () => console.log('PDF') },
                  { label: 'Export as JSON', onClick: () => console.log('JSON') },
                ]}
                onClick={() => console.log('Default CSV export')}
              >
                Export Report
              </SplitButton>
            }
            nativePreview={<Button variant="secondary">Export Report</Button>}
            webCode={`import React from 'react';
import { SplitButton } from '@spectra/react';

export default function SplitSecondaryDemo(): JSX.Element {
  return (
    <SplitButton
      variant="secondary"
      options={[
        { label: 'Export as CSV' },
        { label: 'Export as PDF' },
        { label: 'Export as JSON' },
      ]}
    >
      Export Report
    </SplitButton>
  );
}`}
            nativeCode={`import { Button } from '@spectra/react-native';

export default function NativeExportDemo() {
  return <Button variant="outline">Export Report</Button>;
}`}
          />

          <ComponentDemoCard
            id="split-button-sizes"
            title="Density & Sizing Hierarchy"
            description="Compact (sm), Standard (md), and Prominent (lg) density scales."
            webPreview={
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                <SplitButton size="sm" variant="primary" options={[{ label: 'Option A' }]}>Small</SplitButton>
                <SplitButton size="md" variant="primary" options={[{ label: 'Option B' }]}>Medium</SplitButton>
                <SplitButton size="lg" variant="primary" options={[{ label: 'Option C' }]}>Large</SplitButton>
              </div>
            }
            nativePreview={<Button size="md" variant="primary">Split Button</Button>}
            webCode={`import React from 'react';
import { SplitButton } from '@spectra/react';

export default function SplitSizesDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <SplitButton size="sm" options={[{ label: 'Option A' }]}>Small</SplitButton>
      <SplitButton size="md" options={[{ label: 'Option B' }]}>Medium</SplitButton>
      <SplitButton size="lg" options={[{ label: 'Option C' }]}>Large</SplitButton>
    </div>
  );
}`}
            nativeCode={`import { Button } from '@spectra/react-native';

export default function NativeSplitSizesDemo() {
  return <Button size="md">Split Button</Button>;
}`}
          />
        </div>
      );

    case 'compound-button':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="compound-button-variants"
            title="Action Hierarchy (Primary, Secondary)"
            description="High prominence button pairing a headline label with explanatory secondary text (Fluent UI 2 benchmark)."
            webPreview={
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <CompoundButton variant="primary" subtitle="Deploy build to staging">
                  Deploy Staging
                </CompoundButton>
                <CompoundButton variant="secondary" subtitle="Review pending pull requests">
                  Review Pull Requests
                </CompoundButton>
              </div>
            }
            nativePreview={<Button variant="primary">Deploy Staging</Button>}
            webCode={`import React from 'react';
import { CompoundButton } from '@spectra/react';

export default function CompoundDemo(): JSX.Element {
  return (
    <CompoundButton variant="primary" subtitle="Deploy build to staging">
      Deploy Staging
    </CompoundButton>
  );
}`}
            nativeCode={`import { Button } from '@spectra/react-native';

export default function NativeCompoundDemo() {
  return <Button variant="filled">Deploy Staging</Button>;
}`}
          />

          <ComponentDemoCard
            id="compound-button-icons"
            title="Contextual Feature Icon Badges"
            description="Embeds SVG vector icons to anchor user visual recognition."
            webPreview={
              <CompoundButton
                variant="primary"
                icon={<SparklesIcon size={22} />}
                subtitle="Run 1,240 automated end-to-end tests"
              >
                Run Diagnostics
              </CompoundButton>
            }
            nativePreview={<Button variant="primary">Run Diagnostics</Button>}
            webCode={`import React from 'react';
import { CompoundButton } from '@spectra/react';
import { SparklesIcon } from '@spectra/icons';

export default function CompoundIconDemo(): JSX.Element {
  return (
    <CompoundButton
      variant="primary"
      icon={<SparklesIcon size={22} />}
      subtitle="Run 1,240 automated end-to-end tests"
    >
      Run Diagnostics
    </CompoundButton>
  );
}`}
            nativeCode={`import { Button } from '@spectra/react-native';

export default function NativeCompoundIconDemo() {
  return <Button variant="filled">Run Diagnostics</Button>;
}`}
          />
        </div>
      );

    case 'button-group':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="button-group-segmented"
            title="Segmented Attached Mode"
            description="Contiguous buttons sharing joined borders with unified radii (MUI ButtonGroup benchmark)."
            webPreview={
              <ButtonGroup variant="secondary">
                <Button variant="primary">Day</Button>
                <Button variant="secondary">Week</Button>
                <Button variant="secondary">Month</Button>
              </ButtonGroup>
            }
            nativePreview={<Button variant="secondary">Day | Week | Month</Button>}
            webCode={`import React from 'react';
import { ButtonGroup, Button } from '@spectra/react';

export default function ButtonGroupSegmentedDemo(): JSX.Element {
  return (
    <ButtonGroup variant="secondary">
      <Button variant="primary">Day</Button>
      <Button variant="secondary">Week</Button>
      <Button variant="secondary">Month</Button>
    </ButtonGroup>
  );
}`}
            nativeCode={`import { View, Button } from '@spectra/react-native';

export default function NativeButtonGroupDemo() {
  return <Button variant="outline">Intervals</Button>;
}`}
          />

          <ComponentDemoCard
            id="button-group-vertical"
            title="Vertical Toolbar Orientation"
            description="Stacked vertical orientation ideal for canvas and diagram toolbars."
            webPreview={
              <ButtonGroup orientation="vertical" variant="secondary">
                <Button size="sm">Top</Button>
                <Button size="sm">Middle</Button>
                <Button size="sm">Bottom</Button>
              </ButtonGroup>
            }
            nativePreview={<Button variant="secondary">Vertical Group</Button>}
            webCode={`import React from 'react';
import { ButtonGroup, Button } from '@spectra/react';

export default function ButtonGroupVerticalDemo(): JSX.Element {
  return (
    <ButtonGroup orientation="vertical">
      <Button size="sm">Top</Button>
      <Button size="sm">Middle</Button>
      <Button size="sm">Bottom</Button>
    </ButtonGroup>
  );
}`}
            nativeCode={`import { View, Button } from '@spectra/react-native';

export default function NativeVerticalGroupDemo() {
  return <Button size="sm">Vertical Toolbar</Button>;
}`}
          />
        </div>
      );

    case 'icon-button':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="icon-button-shapes"
            title="Shapes (Circle, Rounded, Square)"
            description="Geometric variations for toolbars, floating triggers, and inline table actions."
            webPreview={
              <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                <IconButton icon={<SearchIcon size={18} />} aria-label="Search" variant="primary" shape="circle" />
                <IconButton icon={<CheckIcon size={18} />} aria-label="Confirm" variant="secondary" shape="rounded" />
                <IconButton icon={<CloseIcon size={18} />} aria-label="Dismiss" variant="danger" shape="square" />
              </div>
            }
            nativePreview={<IconButton icon={<SearchIcon size={18} />} aria-label="Search" />}
            webCode={`import React from 'react';
import { IconButton } from '@spectra/react';
import { SearchIcon, CheckIcon, CloseIcon } from '@spectra/icons';

export default function IconButtonShapesDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <IconButton icon={<SearchIcon size={18} />} aria-label="Search" variant="primary" shape="circle" />
      <IconButton icon={<CheckIcon size={18} />} aria-label="Confirm" variant="secondary" shape="rounded" />
      <IconButton icon={<CloseIcon size={18} />} aria-label="Dismiss" variant="danger" shape="square" />
    </div>
  );
}`}
            nativeCode={`import { IconButton } from '@spectra/react-native';

export default function NativeIconButtonDemo() {
  return <IconButton aria-label="Search" />;
}`}
          />
        </div>
      );

    case 'slider':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="slider-continuous"
            title="Continuous Range with Real-Time Tooltip"
            description="Draggable and clickable slider rail with percentage fill and keyboard step support."
            webPreview={
              <div style={{ maxWidth: 360, width: '100%' }}>
                <Slider label="Screen Brightness" defaultValue={65} min={0} max={100} valueFormatter={(v) => `${v}%`} />
              </div>
            }
            nativePreview={<Text>Slider Continuous Demo</Text>}
            webCode={`import React from 'react';
import { Slider } from '@spectra/react';

export default function SliderContinuousDemo(): JSX.Element {
  return (
    <Slider label="Screen Brightness" defaultValue={65} min={0} max={100} valueFormatter={(v) => \`\${v}%\`} />
  );
}`}
            nativeCode={`import { View, Text } from 'react-native';

export default function NativeSliderDemo() {
  return <Text>Slider Native</Text>;
}`}
          />

          <ComponentDemoCard
            id="slider-stepped"
            title="Discrete Incremental Steps"
            description="Snaps to defined numerical increments (step=25)."
            webPreview={
              <div style={{ maxWidth: 360, width: '100%' }}>
                <Slider label="Memory Allocation" defaultValue={50} min={0} max={100} step={25} valueFormatter={(v) => `${v} GB`} />
              </div>
            }
            nativePreview={<Text>Slider Discrete Demo</Text>}
            webCode={`import React from 'react';
import { Slider } from '@spectra/react';

export default function SliderSteppedDemo(): JSX.Element {
  return (
    <Slider label="Memory Allocation" defaultValue={50} step={25} valueFormatter={(v) => \`\${v} GB\`} />
  );
}`}
            nativeCode={`import { View, Text } from 'react-native';

export default function NativeSteppedDemo() {
  return <Text>Slider Step</Text>;
}`}
          />
        </div>
      );

    case 'rating':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="rating-interactive"
            title="Interactive Star Rating with Hover"
            description="Interactive score selector utilizing authentic SVG vector paths with hover preview (Zero Emojis)."
            webPreview={<Rating defaultValue={4} max={5} size="lg" />}
            nativePreview={<Text>Rating: 4/5</Text>}
            webCode={`import React from 'react';
import { Rating } from '@spectra/react';

export default function RatingInteractiveDemo(): JSX.Element {
  return <Rating defaultValue={4} max={5} size="lg" />;
}`}
            nativeCode={`import { View, Text } from 'react-native';

export default function NativeRatingDemo() {
  return <Text>Rating 4/5</Text>;
}`}
          />

          <ComponentDemoCard
            id="rating-readonly"
            title="Read-only Metric Display"
            description="Static rating indicator for reviews, testimonial cards, and metric summaries."
            webPreview={<Rating value={5} readOnly size="md" />}
            nativePreview={<Text>5.0 / 5.0</Text>}
            webCode={`import React from 'react';
import { Rating } from '@spectra/react';

export default function RatingReadonlyDemo(): JSX.Element {
  return <Rating value={5} readOnly size="md" />;
}`}
            nativeCode={`import { View, Text } from 'react-native';

export default function NativeRatingStaticDemo() {
  return <Text>5 Stars</Text>;
}`}
          />
        </div>
      );

    case 'textarea':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="textarea-counter"
            title="Character Counter & Limit"
            description="Tracks remaining character capacity with tabular number layout."
            webPreview={
              <div style={{ maxWidth: 420, width: '100%' }}>
                <Textarea label="Pull Request Description" placeholder="Explain rationale..." showCount maxLength={150} defaultValue="Engineered high-density enterprise components." />
              </div>
            }
            nativePreview={<Text>Textarea Counter</Text>}
            webCode={`import React from 'react';
import { Textarea } from '@spectra/react';

export default function TextareaCounterDemo(): JSX.Element {
  return (
    <Textarea label="PR Description" showCount maxLength={150} />
  );
}`}
            nativeCode={`import { TextInput } from 'react-native';

export default function NativeTextareaDemo() {
  return <TextInput multiline />;
}`}
          />
        </div>
      );

    case 'avatar-group':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="avatar-group-stack"
            title="Overlapping Avatar Stack with Overflow Counter"
            description="Displays clustered user profiles with automatic +N counter when team size exceeds max limit."
            webPreview={
              <AvatarGroup max={3} size="md">
                <Avatar name="Sarah Connor" status="online" />
                <Avatar name="John Doe" status="busy" />
                <Avatar name="Alex Mercer" status="away" />
                <Avatar name="Elena Fisher" />
                <Avatar name="Marcus Fenix" />
              </AvatarGroup>
            }
            nativePreview={<Text>Avatar Group (3+)</Text>}
            webCode={`import React from 'react';
import { AvatarGroup, Avatar } from '@spectra/react';

export default function AvatarGroupDemo(): JSX.Element {
  return (
    <AvatarGroup max={3} size="md">
      <Avatar name="Sarah Connor" status="online" />
      <Avatar name="John Doe" status="busy" />
      <Avatar name="Alex Mercer" status="away" />
      <Avatar name="Elena Fisher" />
      <Avatar name="Marcus Fenix" />
    </AvatarGroup>
  );
}`}
            nativeCode={`import { View } from 'react-native';

export default function NativeAvatarGroupDemo() {
  return <View />;
}`}
          />
        </div>
      );

    case 'tag':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="tag-variants"
            title="Status Colors & Dismissible Badges"
            description="Semantic color treatments with optional dismiss cross for dynamic filtering."
            webPreview={
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <Tag variant="primary">v1.2.0</Tag>
                <Tag variant="success" closable onClose={() => console.log('Closed')}>Operational</Tag>
                <Tag variant="warning">High Load</Tag>
                <Tag variant="danger">Offline</Tag>
              </div>
            }
            nativePreview={<Text>Tag Badges</Text>}
            webCode={`import React from 'react';
import { Tag } from '@spectra/react';

export default function TagVariantsDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <Tag variant="primary">v1.2.0</Tag>
      <Tag variant="success" closable>Operational</Tag>
      <Tag variant="warning">High Load</Tag>
      <Tag variant="danger">Offline</Tag>
    </div>
  );
}`}
            nativeCode={`import { View, Text } from 'react-native';

export default function NativeTagDemo() {
  return <Text>Tags</Text>;
}`}
          />
        </div>
      );

    case 'table':
    case 'data-grid':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="table-striped"
            title="Striped Data Grid with Status Badges"
            description="Structured enterprise data table with alternating row highlights and semantic badges."
            webPreview={
              <div style={{ width: '100%', maxWidth: 540 }}>
                <Table bordered striped>
                  <TableHead>
                    <TableRow>
                      <TableHeaderCell>Cluster</TableHeaderCell>
                      <TableHeaderCell>Nodes</TableHeaderCell>
                      <TableHeaderCell>Status</TableHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>prod-us-east</TableCell>
                      <TableCell>64</TableCell>
                      <TableCell><Badge variant="success">Healthy</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>prod-eu-west</TableCell>
                      <TableCell>32</TableCell>
                      <TableCell><Badge variant="success">Healthy</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>stage-ap-south</TableCell>
                      <TableCell>16</TableCell>
                      <TableCell><Badge variant="warning">Syncing</Badge></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            }
            nativePreview={<Text>Data Table</Text>}
            webCode={`import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell, Badge } from '@spectra/react';

export default function TableGridDemo(): JSX.Element {
  return (
    <Table bordered striped>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Cluster</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>prod-us-east</TableCell>
          <TableCell><Badge variant="success">Healthy</Badge></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`}
            nativeCode={`import { View, Text } from 'react-native';

export default function NativeTableDemo() {
  return <Text>Table Data</Text>;
}`}
          />
        </div>
      );

    case 'statistic':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="statistic-kpi"
            title="KPI Metrics with Trend Direction"
            description="Displays numerical telemetry with directional vector chevrons and comparison periods."
            webPreview={
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, width: '100%', maxWidth: 480 }}>
                <Statistic title="Total Revenue" value="$428,950" trend={{ value: '18.4%', direction: 'up', label: 'vs last quarter' }} />
                <Statistic title="Avg Response" value="16" suffix="ms" trend={{ value: '3.1ms', direction: 'down', label: 'faster' }} />
              </div>
            }
            nativePreview={<Text>KPI: $428,950 (+18.4%)</Text>}
            webCode={`import React from 'react';
import { Statistic } from '@spectra/react';

export default function StatisticKpiDemo(): JSX.Element {
  return (
    <Statistic title="Total Revenue" value="$428,950" trend={{ value: '18.4%', direction: 'up', label: 'vs last quarter' }} />
  );
}`}
            nativeCode={`import { View, Text } from 'react-native';

export default function NativeStatisticDemo() {
  return <Text>$428,950</Text>;
}`}
          />
        </div>
      );

    case 'timeline':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="timeline-audit"
            title="Deployment Audit Trail"
            description="Vertical sequence connecting milestones with spine nodes and timestamps."
            webPreview={
              <div style={{ maxWidth: 420, width: '100%' }}>
                <Timeline>
                  <TimelineItem title="Release v1.2.0 Tagged" description="Git commit published to remote." timestamp="12:00 PM" />
                  <TimelineItem title="Assets Distributed" description="CDN cache invalidated." timestamp="11:45 AM" />
                </Timeline>
              </div>
            }
            nativePreview={<Text>Timeline Audit</Text>}
            webCode={`import React from 'react';
import { Timeline, TimelineItem } from '@spectra/react';

export default function TimelineAuditDemo(): JSX.Element {
  return (
    <Timeline>
      <TimelineItem title="Release Tagged" timestamp="12:00 PM" />
      <TimelineItem title="Assets Distributed" timestamp="11:45 AM" />
    </Timeline>
  );
}`}
            nativeCode={`import { View, Text } from 'react-native';

export default function NativeTimelineDemo() {
  return <Text>Timeline</Text>;
}`}
          />
        </div>
      );

    case 'progress-bar':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="progress-bar-states"
            title="Percentage Fill & Indeterminate States"
            description="Smooth progress indicators with custom colors and animated pulse patterns."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360, width: '100%' }}>
                <ProgressBar value={80} showValue label="Upload Progress" variant="primary" />
                <ProgressBar indeterminate label="Compiling Tokens..." variant="info" />
              </div>
            }
            nativePreview={<Text>ProgressBar: 80%</Text>}
            webCode={`import React from 'react';
import { ProgressBar } from '@spectra/react';

export default function ProgressBarStatesDemo(): JSX.Element {
  return (
    <ProgressBar value={80} showValue label="Upload Progress" />
  );
}`}
            nativeCode={`import { View } from 'react-native';

export default function NativeProgressDemo() {
  return <View />;
}`}
          />
        </div>
      );

    case 'toast':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="toast-banners"
            title="Status Severity Notifications"
            description="Notification alerts with icons, dismiss buttons, and action slots."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 380, width: '100%' }}>
                <Toast variant="success" title="Changes Saved">Preferences saved.</Toast>
                <Toast variant="warning" title="Disk Warning">Storage capacity at 94%.</Toast>
              </div>
            }
            nativePreview={<Text>Toast Notifications</Text>}
            webCode={`import React from 'react';
import { Toast } from '@spectra/react';

export default function ToastBannersDemo(): JSX.Element {
  return (
    <Toast variant="success" title="Changes Saved">Preferences saved.</Toast>
  );
}`}
            nativeCode={`import { View, Text } from 'react-native';

export default function NativeToastDemo() {
  return <Text>Toast</Text>;
}`}
          />
        </div>
      );

    case 'pagination':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="pagination-controls"
            title="Interactive Multi-Page Controls"
            description="Navigate pages with numeric bubbles, ellipses, and next/prev triggers."
            webPreview={<Pagination count={8} defaultPage={3} />}
            nativePreview={<Text>Page 3 of 8</Text>}
            webCode={`import React from 'react';
import { Pagination } from '@spectra/react';

export default function PaginationDemo(): JSX.Element {
  return <Pagination count={8} defaultPage={3} />;
}`}
            nativeCode={`import { View, Text } from 'react-native';

export default function NativePaginationDemo() {
  return <Text>Pages</Text>;
}`}
          />
        </div>
      );

    case 'stepper':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="stepper-flow"
            title="Multi-Step Wizard Progress Indicator"
            description="Visual pipeline tracker showing completed checkmarks, current active step, and remaining phases."
            webPreview={
              <div style={{ maxWidth: 540, width: '100%' }}>
                <Stepper
                  steps={[
                    { title: 'Define Tokens', description: 'Design tokens' },
                    { title: 'Review ARIA', description: 'A11y checks' },
                    { title: 'Publish', description: 'npm release' },
                  ]}
                  activeStep={1}
                />
              </div>
            }
            nativePreview={<Text>Step 2 of 3</Text>}
            webCode={`import React from 'react';
import { Stepper } from '@spectra/react';

export default function StepperFlowDemo(): JSX.Element {
  return (
    <Stepper
      steps={[
        { title: 'Define Tokens' },
        { title: 'Review ARIA' },
        { title: 'Publish' },
      ]}
      activeStep={1}
    />
  );
}`}
            nativeCode={`import { View, Text } from 'react-native';

export default function NativeStepperDemo() {
  return <Text>Stepper</Text>;
}`}
          />
        </div>
      );

    case 'menu':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="menu-flyout"
            title="Command Flyout with Shortcuts"
            description="Action menu with keyboard shortcut badges, SVG icons, and destructive styling."
            webPreview={
              <div style={{ maxWidth: 220, width: '100%' }}>
                <Menu>
                  <MenuItem icon={<CopyIcon size={16} />} shortcut="Ctrl+C">Duplicate Node</MenuItem>
                  <MenuItem icon={<ExternalLinkIcon size={16} />}>Export Tokens</MenuItem>
                  <MenuItem danger icon={<CloseIcon size={16} />}>Delete Component</MenuItem>
                </Menu>
              </div>
            }
            nativePreview={<Text>Command Menu</Text>}
            webCode={`import React from 'react';
import { Menu, MenuItem } from '@spectra/react';
import { CopyIcon, CloseIcon } from '@spectra/icons';

export default function MenuFlyoutDemo(): JSX.Element {
  return (
    <Menu>
      <MenuItem icon={<CopyIcon size={16} />} shortcut="Ctrl+C">Duplicate</MenuItem>
      <MenuItem danger icon={<CloseIcon size={16} />}>Delete</MenuItem>
    </Menu>
  );
}`}
            nativeCode={`import { View, Text } from 'react-native';

export default function NativeMenuDemo() {
  return <Text>Menu</Text>;
}`}
          />
        </div>
      );

    default:
      return null;
  }
};
