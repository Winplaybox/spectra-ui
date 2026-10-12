import React, { useState } from 'react';
import {
  Button,
  SplitButton,
  CompoundButton,
  MenuButton,
  ToggleButton,
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
  CounterBadge,
  PresenceBadge,
  Tag,
  InteractionTag,
  TagGroup,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardPreview,
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
  Breadcrumb,
  Breadcrumbs,
  BreadcrumbItem,
  BreadcrumbButton,
  BreadcrumbDivider,
  Pagination,
  Stepper,
  Menu,
  MenuItem,
  MenuGrid,
  AppBar,
  BottomNav,
  Link,
  SpeedDial,
  Text,
  Box,
  Container,
  Grid,
  Stack,
  ColorPicker,
  PlatformChassis,
  CopyButton,
  DatePicker,
  ListView,
  WebViewBox,
  Carousel,
  CarouselNav,
  RatingDisplay,
  Portal,
} from '@winplaybox/react';
import {
  CheckIcon,
  CloseIcon,
  SearchIcon,
  AlertCircleIcon,
  InfoIcon,
  UserIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
  HomeIcon,
  FolderIcon,
  FileTextIcon,
  SettingsIcon,
  PlusIcon,
  MinusIcon,
  ExternalLinkIcon,
  SparklesIcon,
  EyeIcon,
  EyeOffIcon,
  CopyIcon,
} from '@winplaybox/icons';
import { ComponentDemoCard } from './ComponentDemoCard';
import { TextInputRecipeGallery } from './TextInputRecipeGallery';

export interface VariantMeta {
  id: string;
  title: string;
}

export const COMPONENT_VARIANTS_MAP: Record<string, VariantMeta[]> = {
  button: [
    { id: 'button-appearances', title: '01 Visual Appearances (Primary, Secondary, Outline, Subtle, Transparent)' },
    { id: 'button-sizes', title: '02 Sizing Scale (Small 24px, Medium 32px, Large 40px)' },
    { id: 'button-shapes', title: '03 Silhouettes & Geometries (Rounded, Circular, Square)' },
    { id: 'button-icons', title: '04 Authentic Vector Icons & Icon-Only' },
    { id: 'button-compound', title: '05 CompoundButton (Headline + Subtitle Context)' },
    { id: 'button-menu', title: '06 MenuButton (Chevron Contextual Flyout Dropdown)' },
    { id: 'button-split', title: '07 SplitButton (Dual Segment Primary & Dropdown)' },
    { id: 'button-toggle', title: '08 ToggleButton (Pressed State & Pin Toggle)' },
    { id: 'button-states', title: '09 Loading & DisabledFocusable States' },
    { id: 'button-block', title: '10 Responsive Full-Width Block Layout' },
  ],
  'compound-button': [
    { id: 'compound-basic', title: '01 CompoundButton Headline + Subtitle' },
    { id: 'compound-appearances', title: '02 Visual Appearances (Primary, Secondary, Outline, Subtle)' },
    { id: 'compound-icons', title: '03 Vector Icon Integration' },
  ],
  'menu-button': [
    { id: 'menu-button-basic', title: '01 MenuButton Flyout Dropdown' },
    { id: 'menu-button-appearances', title: '02 Visual Appearances (Primary, Secondary, Outline)' },
    { id: 'menu-button-sizes', title: '03 Sizing Scale (Small, Medium, Large)' },
  ],
  'split-button': [
    { id: 'split-button-basic', title: '01 SplitButton Action Flyout' },
    { id: 'split-button-appearances', title: '02 Visual Appearances (Primary, Secondary)' },
  ],
  'toggle-button': [
    { id: 'toggle-button-basic', title: '01 ToggleButton Checked State' },
    { id: 'toggle-button-appearances', title: '02 Visual Appearances (Primary, Secondary, Subtle)' },
    { id: 'toggle-button-icons', title: '03 Pin & Bookmark Toggle' },
  ],
  'text-input': [
    { id: 'input-basic', title: '01 Basic Text Field' },
    { id: 'input-outlined', title: '02 Outlined Variant' },
    { id: 'input-filled', title: '03 Filled Variant' },
    { id: 'input-standard', title: '04 Standard Underline Variant' },
    { id: 'input-sizes', title: '05 Sizing Scale (Sm, Md, Lg)' },
    { id: 'input-helper', title: '06 Helper Text & Description' },
    { id: 'input-error', title: '07 Error Validation State' },
    { id: 'input-success', title: '08 Success State' },
    { id: 'input-required', title: '09 Required Field' },
    { id: 'input-disabled', title: '10 Disabled State' },
    { id: 'input-readonly', title: '11 Read-Only State' },
    { id: 'input-leading-icon', title: '12 Leading Vector Icon' },
    { id: 'input-trailing-icon', title: '13 Trailing Action Icon' },
    { id: 'input-clear', title: '14 Instant Clear Button' },
    { id: 'input-prefix', title: '15 Prefix Adornment' },
    { id: 'input-suffix', title: '16 Suffix Adornment' },
    { id: 'input-counter', title: '17 Live Character Counter' },
    { id: 'input-multiline', title: '18 Multiline Text Area' },
    { id: 'input-autosize', title: '19 Auto-Resizing Multiline' },
    { id: 'input-search', title: '20 Search Field with Reset' },
    { id: 'input-password-recipe', title: '21 Password Field with Toggle' },
    { id: 'input-email', title: '22 Email Address Field' },
    { id: 'input-number', title: '23 Numeric Quantity Input' },
    { id: 'input-select-recipe', title: '24 Select Combobox Recipe' },
    { id: 'input-loading', title: '25 Loading Search State' },
    { id: 'input-async', title: '26 Async Validation State' },
    { id: 'input-form-integration', title: '27 Complete Form Integration' },
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
    { id: 'accordion-basic', title: '01 Default Accordion (Collapsible FAQ)' },
    { id: 'accordion-multiple', title: '02 Simultaneous Multi-Panel Expansion' },
    { id: 'accordion-sizes', title: '03 Sizing Scale & Density (Sm, Md, Lg, XL)' },
    { id: 'accordion-icon-position', title: '04 Expand Icon Position (Start vs End)' },
    { id: 'accordion-disabled', title: '05 Disabled Section State' },
    { id: 'accordion-inline-actions', title: '06 Inline Actions & Badges in Header' },
    { id: 'accordion-controlled', title: '07 Controlled State Management (openItems)' },
    { id: 'accordion-custom-icon', title: '08 Custom Expand Icon & Context Icons' },
  ],
  avatar: [
    { id: 'avatar-basic', title: '01 Default Initials Avatar' },
    { id: 'avatar-image', title: '02 Profile Image with Fallback' },
    { id: 'avatar-sizes', title: '03 Discrete Sizing Scale (16px to 128px)' },
    { id: 'avatar-shapes', title: '04 Circular vs Square Silhouettes' },
    { id: 'avatar-presence', title: '05 Real-Time Status & Presence Badges' },
    { id: 'avatar-colorful', title: '06 Algorithmic Colorful Palette' },
    { id: 'avatar-active', title: '07 Active Halo Ring (Speaker / Live)' },
    { id: 'avatar-group', title: '08 AvatarGroup & Collaborator Stack' },
  ],
  badge: [
    { id: 'badge-basic', title: '01 Appearances (Filled, Ghost, Outline, Tint)' },
    { id: 'badge-colors', title: '02 Semantic Palette Colors' },
    { id: 'badge-sizes', title: '03 Discrete Sizing Scale (Tiny to Extra-Large)' },
    { id: 'badge-shapes', title: '04 Silhouettes (Rounded, Circular, Square)' },
    { id: 'badge-icons', title: '05 Authentic Vector Icons & Status Dots' },
    { id: 'badge-counter', title: '06 CounterBadge & Numeric Overflow (99+)' },
    { id: 'badge-presence', title: '07 PresenceBadge & Out-of-Office Halos' },
    { id: 'badge-in-context', title: '08 Contextual Integrations (Buttons, Avatars, Cards)' },
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
  breadcrumb: [
    { id: 'breadcrumb-basic', title: '01 Default Path Hierarchy' },
    { id: 'breadcrumb-sizes', title: '02 Discrete Sizing Scale (Small, Medium, Large)' },
    { id: 'breadcrumb-dividers', title: '03 Chevron & Slash Delimiters' },
    { id: 'breadcrumb-with-icons', title: '04 Vector Icons per Crumb' },
    { id: 'breadcrumb-overflow', title: '05 Responsive Overflow Menu' },
    { id: 'breadcrumb-current-page', title: '06 Current Page Differentiation' },
    { id: 'breadcrumb-non-interactive', title: '07 Non-interactive File Path Pattern' },
    { id: 'breadcrumb-in-context', title: '08 Contextual Header Wayfinding' },
  ],
  breadcrumbs: [
    { id: 'breadcrumb-basic', title: '01 Default Path Hierarchy' },
    { id: 'breadcrumb-sizes', title: '02 Discrete Sizing Scale (Small, Medium, Large)' },
    { id: 'breadcrumb-dividers', title: '03 Chevron & Slash Delimiters' },
    { id: 'breadcrumb-with-icons', title: '04 Vector Icons per Crumb' },
    { id: 'breadcrumb-overflow', title: '05 Responsive Overflow Menu' },
    { id: 'breadcrumb-current-page', title: '06 Current Page Differentiation' },
    { id: 'breadcrumb-non-interactive', title: '07 Non-interactive File Path Pattern' },
    { id: 'breadcrumb-in-context', title: '08 Contextual Header Wayfinding' },
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
  box: [
    { id: 'box-surfaces', title: 'Box Layout Container & Surface Tokens' },
  ],
  container: [
    { id: 'container-breakpoints', title: 'Responsive Viewport Containment' },
  ],
  grid: [
    { id: 'grid-12col', title: '12-Column Responsive Layout Grid' },
  ],
  stack: [
    { id: 'stack-flex', title: 'Directional Flex Stack & Spacing' },
  ],
  'bottom-nav': [
    { id: 'bottom-nav-mobile', title: 'Mobile Bottom Navigation Bar' },
  ],
  'platform-chassis': [
    { id: 'platform-chassis-simulator', title: 'Multi-Platform Device Chassis Chrome' },
  ],
  'color-picker': [
    { id: 'color-picker-swatches', title: 'Palette Swatches & Hex/RGB Picker' },
  ],
  'radio-group': [
    { id: 'radio-group-orientations', title: 'Vertical & Horizontal Radio Groups' },
  ],
  'copy-button': [
    { id: 'copy-button-variants', title: 'Action Variants & Label Feedback' },
    { id: 'copy-button-icon-only', title: 'Icon-Only Compact Mode & Sizing' },
  ],
  'date-picker': [
    { id: 'date-picker-basic', title: 'Controlled Date Selection with Popover' },
    { id: 'date-picker-sizes', title: 'Form Density & Size Scales' },
  ],
  'list-view': [
    { id: 'list-view-divided', title: 'Divided List Items with Token Borders' },
    { id: 'list-view-empty', title: 'Empty State & Custom Fallback' },
  ],
  'web-view-box': [
    { id: 'web-view-box-sandboxed', title: 'Sandboxed Responsive Frame' },
    { id: 'web-view-box-header', title: 'Interactive Title & External Action Toolbar' },
  ],
  'card-header': [
    { id: 'card-header-basic', title: '01 Avatar & Title Header' },
    { id: 'card-header-actions', title: '02 Contextual Action Slots' },
  ],
  'card-footer': [
    { id: 'card-footer-actions', title: '01 Dual Action Layout' },
    { id: 'card-footer-metadata', title: '02 Timestamp & Author Metadata' },
  ],
  'card-preview': [
    { id: 'card-preview-banner', title: '01 Full-Bleed Media Banner' },
    { id: 'card-preview-interactive', title: '02 Clickable Image Overlay' },
  ],
  carousel: [
    { id: 'carousel-slides', title: '01 Interactive Multi-Card Slides' },
    { id: 'carousel-autoplay', title: '02 Timed Auto-Advancing Stage' },
  ],
  'carousel-nav': [
    { id: 'carousel-nav-dots', title: '01 Expanding Pill Dots' },
    { id: 'carousel-nav-numbered', title: '02 Numeric Slide Stepper' },
  ],
  'interaction-tag': [
    { id: 'interaction-tag-states', title: '01 Selected & Unselected States' },
    { id: 'interaction-tag-dismissible', title: '02 Dismissible Close Action' },
  ],
  'tag-group': [
    { id: 'tag-group-flow', title: '01 Responsive Horizontal Flow' },
    { id: 'tag-group-categories', title: '02 Categorized Multi-Row Tagset' },
  ],
  'rating-display': [
    { id: 'rating-display-compact', title: '01 Compact Stars & Score' },
    { id: 'rating-display-large', title: '02 High-Density Metric Card' },
  ],
  'menu-grid': [
    { id: 'menu-grid-3col', title: '01 3-Column Tool Launcher Grid' },
    { id: 'menu-grid-swatches', title: '02 Color Swatch Selector Grid' },
  ],
  'portal-mount': [
    { id: 'portal-mount-custom', title: '01 Custom DOM Container Target' },
    { id: 'portal-mount-body', title: '02 Default Document Body Mount' },
  ],
  overflow: [
    { id: 'overflow-toolbar', title: '01 Horizontal Action Toolbar (Dynamic Collapse)' },
    { id: 'overflow-priority', title: '02 Priority-Weighted Pinning (High-Priority Actions)' },
    { id: 'overflow-tabs', title: '03 Tab Navigation with Overflow Menu' },
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
  const [selectedDemoDate, setSelectedDemoDate] = useState<Date | undefined>(new Date());
  const [controlledOpenSections, setControlledOpenSections] = useState<string[]>(['section-1']);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isPinned, setIsPinned] = useState(true);
  const [overflowDemoWidth1, setOverflowDemoWidth1] = useState(480);
  const [overflowDemoWidth2, setOverflowDemoWidth2] = useState(380);
  const [overflowDemoWidth3, setOverflowDemoWidth3] = useState(440);

  switch (componentId) {
    case 'button':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* Demo 1: Fluent 2 Visual Appearances */}
          <ComponentDemoCard
            id="button-appearances"
            title="01 Visual Appearances (Fluent 2 Hierarchy)"
            description="Conforming to Microsoft Fluent 2 Web design language, Spectra provides five discrete appearance tiers: Primary (brand emphasized call-to-action), Secondary (standard neutral baseline), Outline (transparent canvas with subtle border), Subtle (minimalist text action with hover highlight), and Transparent (borderless accent trigger)."
            compactCode={`<Button appearance="primary">Primary Action</Button>
<Button appearance="secondary">Secondary Action</Button>
<Button appearance="outline">Outline Action</Button>
<Button appearance="subtle">Subtle Action</Button>
<Button appearance="transparent">Transparent Action</Button>`}
            webPreview={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                <Button appearance="primary">Primary Action</Button>
                <Button appearance="secondary">Secondary Action</Button>
                <Button appearance="outline">Outline Action</Button>
                <Button appearance="subtle">Subtle Action</Button>
                <Button appearance="transparent">Transparent Action</Button>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
                <Button appearance="primary" style={{ width: '100%' }}>Filled Primary</Button>
                <Button appearance="outline" style={{ width: '100%' }}>Outlined Secondary</Button>
                <Button appearance="secondary" style={{ width: '100%' }}>Tinted Action</Button>
                <Button appearance="subtle" style={{ width: '100%' }}>Plain Action</Button>
              </div>
            }
            webCode={`import React from 'react';
import { Button } from '@winplaybox/react';

export default function ButtonAppearancesDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      <Button appearance="primary">Primary Action</Button>
      <Button appearance="secondary">Secondary Action</Button>
      <Button appearance="outline">Outline Action</Button>
      <Button appearance="subtle">Subtle Action</Button>
      <Button appearance="transparent">Transparent Action</Button>
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Button } from '@winplaybox/react-native';

export default function NativeButtonAppearancesDemo(): JSX.Element {
  return (
    <View style={{ gap: 10 }}>
      <Button variant="filled">Filled Primary</Button>
      <Button variant="outline">Outlined Secondary</Button>
      <Button variant="tinted">Tinted Action</Button>
      <Button variant="plain">Plain Action</Button>
    </View>
  );
}`}
          />

          {/* Demo 2: Sizing Scale & Density */}
          <ComponentDemoCard
            id="button-sizes"
            title="02 Sizing Scale & Density"
            description="Three standardized density scales: Small (sm: 24px) for dense data grids and compact toolbars, Medium (md: 32px) as the web desktop baseline, and Large (lg: 40px) for prominent primary workflows."
            compactCode={`<Button appearance="primary" size="sm">Small (24px)</Button>
<Button appearance="primary" size="md">Medium (32px)</Button>
<Button appearance="primary" size="lg">Large (40px)</Button>`}
            webPreview={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                <Button appearance="primary" size="sm">Small (24px)</Button>
                <Button appearance="primary" size="md">Medium (32px)</Button>
                <Button appearance="primary" size="lg">Large (40px)</Button>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
                <Button size="sm" style={{ width: '100%' }}>Native Small (36pt)</Button>
                <Button size="md" style={{ width: '100%' }}>Native Medium (44pt Apple HIG)</Button>
                <Button size="lg" style={{ width: '100%' }}>Native Large (52pt Android 48dp)</Button>
              </div>
            }
            webCode={`import React from 'react';
import { Button } from '@winplaybox/react';

export default function ButtonSizesDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button appearance="primary" size="sm">Small (24px)</Button>
      <Button appearance="primary" size="md">Medium (32px)</Button>
      <Button appearance="primary" size="lg">Large (40px)</Button>
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Button } from '@winplaybox/react-native';

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

          {/* Demo 3: Shapes & Silhouettes */}
          <ComponentDemoCard
            id="button-shapes"
            title="03 Silhouettes & Geometries (Rounded, Circular, Square)"
            description="Fluent 2 supports three shape geometries: Rounded (default 6px border radius), Circular (full pill radius or circle), and Square (0px radius for strict docked boundaries)."
            compactCode={`<Button appearance="secondary" shape="rounded">Rounded (6px)</Button>
<Button appearance="secondary" shape="circular">Circular (Pill)</Button>
<Button appearance="secondary" shape="square">Square (0px)</Button>
<Button appearance="primary" shape="circular" icon={<SparklesIcon size={16} />} aria-label="AI Assist" />`}
            webPreview={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                <Button appearance="secondary" shape="rounded">Rounded (6px)</Button>
                <Button appearance="secondary" shape="circular">Circular (Pill)</Button>
                <Button appearance="secondary" shape="square">Square (0px)</Button>
                <Button appearance="primary" shape="circular" icon={<SparklesIcon size={16} />} aria-label="AI Assist" />
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
                <Button appearance="outline" style={{ borderRadius: 6 }}>Rounded (6px)</Button>
                <Button appearance="outline" style={{ borderRadius: 999 }}>Circular (Pill)</Button>
                <Button appearance="outline" style={{ borderRadius: 0 }}>Square (0px)</Button>
              </div>
            }
            webCode={`import React from 'react';
import { Button } from '@winplaybox/react';
import { SparklesIcon } from '@winplaybox/icons';

export default function ButtonShapesDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button appearance="secondary" shape="rounded">Rounded</Button>
      <Button appearance="secondary" shape="circular">Circular</Button>
      <Button appearance="secondary" shape="square">Square</Button>
      <Button appearance="primary" shape="circular" icon={<SparklesIcon size={16} />} aria-label="AI Assist" />
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Button } from '@winplaybox/react-native';

export default function NativeButtonShapesDemo(): JSX.Element {
  return (
    <View style={{ gap: 10 }}>
      <Button variant="outline" style={{ borderRadius: 6 }}>Rounded</Button>
      <Button variant="outline" style={{ borderRadius: 999 }}>Circular</Button>
      <Button variant="outline" style={{ borderRadius: 0 }}>Square</Button>
    </View>
  );
}`}
          />

          {/* Demo 4: Authentic Vector Icons */}
          <ComponentDemoCard
            id="button-icons"
            title="04 Authentic Vector Icons & Icon-Only Actions"
            description="Pair buttons with authentic vector SVG icons from @winplaybox/icons for rapid visual comprehension. Icon-only buttons must declare an accessible aria-label (WCAG 2.1 AA)."
            compactCode={`<Button appearance="primary" icon={<CheckIcon size={16} />}>Approve Order</Button>
<Button appearance="secondary" icon={<SearchIcon size={16} />} iconPosition="right">Search Logs</Button>
<Button appearance="subtle" icon={<SettingsIcon size={16} />} aria-label="System Settings" />`}
            webPreview={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                <Button appearance="primary" icon={<CheckIcon size={16} />}>
                  Approve Order
                </Button>
                <Button appearance="secondary" icon={<SearchIcon size={16} />} iconPosition="right">
                  Search Logs
                </Button>
                <Button appearance="subtle" icon={<SettingsIcon size={16} />} aria-label="System Settings" />
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
                <Button appearance="primary" icon={<CheckIcon size={16} />} style={{ width: '100%' }}>
                  Approve Order
                </Button>
                <Button appearance="outline" icon={<SearchIcon size={16} />} style={{ width: '100%' }}>
                  Search Logs
                </Button>
              </div>
            }
            webCode={`import React from 'react';
import { Button } from '@winplaybox/react';
import { CheckIcon, SearchIcon, SettingsIcon } from '@winplaybox/icons';

export default function ButtonIconsDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button appearance="primary" icon={<CheckIcon size={16} />}>
        Approve Order
      </Button>
      <Button appearance="secondary" icon={<SearchIcon size={16} />} iconPosition="right">
        Search Logs
      </Button>
      <Button appearance="subtle" icon={<SettingsIcon size={16} />} aria-label="System Settings" />
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Button } from '@winplaybox/react-native';
import { CheckIcon, SearchIcon } from '@winplaybox/icons';

export default function NativeButtonIconsDemo(): JSX.Element {
  return (
    <View style={{ gap: 10 }}>
      <Button variant="filled" icon={<CheckIcon size={16} />}>Approve Order</Button>
      <Button variant="outline" icon={<SearchIcon size={16} />}>Search Logs</Button>
    </View>
  );
}`}
          />

          {/* Demo 5: CompoundButton */}
          <ComponentDemoCard
            id="button-compound"
            title="05 CompoundButton (Headline + Subtitle Context)"
            description="Fluent 2 CompoundButton features a bold primary headline action paired with a descriptive secondary subtitle. Essential for high-stakes onboarding, tier selection, and configuration choices where buttons must not wrap single-line labels."
            compactCode={`<CompoundButton
  appearance="primary"
  icon={<SparklesIcon size={20} />}
  secondaryContent="Create a collaborative design repository with tokens"
>
  New Workspace
</CompoundButton>
<CompoundButton
  appearance="secondary"
  icon={<ExternalLinkIcon size={20} />}
  secondaryContent="Sync variables and design tokens from Figma styles"
>
  Import Figma
</CompoundButton>`}
            webPreview={
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <CompoundButton
                  appearance="primary"
                  icon={<SparklesIcon size={20} />}
                  secondaryContent="Create a collaborative design repository with tokens"
                >
                  New Workspace
                </CompoundButton>
                <CompoundButton
                  appearance="secondary"
                  icon={<ExternalLinkIcon size={20} />}
                  secondaryContent="Sync variables and design tokens from Figma styles"
                >
                  Import Figma
                </CompoundButton>
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
import { CompoundButton } from '@winplaybox/react';
import { SparklesIcon, ExternalLinkIcon } from '@winplaybox/icons';

export default function CompoundButtonDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <CompoundButton
        appearance="primary"
        icon={<SparklesIcon size={20} />}
        secondaryContent="Create a collaborative design repository with tokens"
      >
        New Workspace
      </CompoundButton>
      <CompoundButton
        appearance="secondary"
        icon={<ExternalLinkIcon size={20} />}
        secondaryContent="Sync variables and design tokens from Figma styles"
      >
        Import Figma
      </CompoundButton>
    </div>
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

          {/* Demo 6: MenuButton */}
          <ComponentDemoCard
            id="button-menu"
            title="06 MenuButton (Chevron Contextual Flyout Dropdown)"
            description="MenuButton combines a button label with an integrated chevron vector indicator that expands an accessible flyout menu on click or ArrowDown keyboard press."
            compactCode={`<MenuButton
  appearance="secondary"
  menuItems={[
    { id: 'csv', label: 'Export as CSV' },
    { id: 'pdf', label: 'Export as PDF' },
    { id: 'json', label: 'Export as JSON' },
  ]}
>
  Export Report
</MenuButton>
<MenuButton
  appearance="primary"
  icon={<PlusIcon size={16} />}
  menuItems={[
    { id: 'repo', label: 'New Repository' },
    { id: 'gist', label: 'New Gist' },
    { id: 'org', label: 'New Organization' },
  ]}
>
  Create New
</MenuButton>`}
            webPreview={
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
                <MenuButton
                  appearance="secondary"
                  menuItems={[
                    { id: 'csv', label: 'Export as CSV' },
                    { id: 'pdf', label: 'Export as PDF' },
                    { id: 'json', label: 'Export as JSON' },
                  ]}
                >
                  Export Report
                </MenuButton>
                <MenuButton
                  appearance="primary"
                  icon={<PlusIcon size={16} />}
                  menuItems={[
                    { id: 'repo', label: 'New Repository' },
                    { id: 'gist', label: 'New Gist' },
                    { id: 'org', label: 'New Organization' },
                  ]}
                >
                  Create New
                </MenuButton>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Button appearance="outline" icon={<ChevronDownIcon size={16} />} style={{ width: '100%' }}>
                  Export Report
                </Button>
              </div>
            }
            webCode={`import React from 'react';
import { MenuButton } from '@winplaybox/react';
import { PlusIcon } from '@winplaybox/icons';

export default function MenuButtonDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <MenuButton
        appearance="secondary"
        menuItems={[
          { id: 'csv', label: 'Export as CSV' },
          { id: 'pdf', label: 'Export as PDF' },
          { id: 'json', label: 'Export as JSON' },
        ]}
      >
        Export Report
      </MenuButton>
      <MenuButton
        appearance="primary"
        icon={<PlusIcon size={16} />}
        menuItems={[
          { id: 'repo', label: 'New Repository' },
          { id: 'gist', label: 'New Gist' },
        ]}
      >
        Create New
      </MenuButton>
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Button } from '@winplaybox/react-native';

export default function NativeMenuButtonDemo(): JSX.Element {
  return (
    <View style={{ width: '100%' }}>
      <Button variant="outline">Export Report</Button>
    </View>
  );
}`}
          />

          {/* Demo 7: SplitButton */}
          <ComponentDemoCard
            id="button-split"
            title="07 SplitButton (Dual Segment Primary & Dropdown)"
            description="Combines a default single-click primary action with a secondary chevron button that reveals alternative execution choices without altering the default execution path."
            compactCode={`<SplitButton
  appearance="primary"
  options={[
    { label: 'Create merge commit', onClick: () => setSplitAction('Create merge commit') },
    { label: 'Squash and merge', onClick: () => setSplitAction('Squash and merge') },
    { label: 'Rebase and merge', onClick: () => setSplitAction('Rebase and merge') },
  ]}
>
  {splitAction}
</SplitButton>`}
            webPreview={
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
                <SplitButton
                  appearance="primary"
                  options={[
                    { label: 'Create merge commit', onClick: () => setSplitAction('Create merge commit') },
                    { label: 'Squash and merge', onClick: () => setSplitAction('Squash and merge') },
                    { label: 'Rebase and merge', onClick: () => setSplitAction('Rebase and merge') },
                  ]}
                >
                  {splitAction}
                </SplitButton>
                <SplitButton
                  appearance="secondary"
                  options={[
                    { label: 'Save and Close' },
                    { label: 'Save and Duplicate' },
                  ]}
                >
                  Save Changes
                </SplitButton>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Button appearance="primary" style={{ width: '100%' }}>
                  {splitAction}
                </Button>
              </div>
            }
            webCode={`import React, { useState } from 'react';
import { SplitButton } from '@winplaybox/react';

export default function SplitButtonDemo(): JSX.Element {
  const [action, setAction] = useState('Create merge commit');

  return (
    <SplitButton
      appearance="primary"
      options={[
        { label: 'Create merge commit', onClick: () => setAction('Create merge commit') },
        { label: 'Squash and merge', onClick: () => setAction('Squash and merge') },
        { label: 'Rebase and merge', onClick: () => setAction('Rebase and merge') },
      ]}
    >
      {action}
    </SplitButton>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Button } from '@winplaybox/react-native';

export default function NativeSplitButtonDemo(): JSX.Element {
  return (
    <View style={{ width: '100%' }}>
      <Button variant="filled">Create merge commit</Button>
    </View>
  );
}`}
          />

          {/* Demo 8: ToggleButton */}
          <ComponentDemoCard
            id="button-toggle"
            title="08 ToggleButton (Pressed State & Pin Toggle)"
            description="A two-state button that toggles between pressed (active) and unpressed (default), maintaining accessible aria-pressed='true|false' semantics."
            compactCode={`<ToggleButton
  appearance="secondary"
  checked={isPinned}
  onToggle={(checked) => setIsPinned(checked)}
  icon={<CheckIcon size={16} />}
>
  {isPinned ? 'Pinned to Sidebar' : 'Pin to Sidebar'}
</ToggleButton>
<ToggleButton
  appearance="subtle"
  checked={isBookmarked}
  onToggle={(checked) => setIsBookmarked(checked)}
  icon={<SparklesIcon size={16} />}
>
  {isBookmarked ? 'Bookmarked' : 'Add Bookmark'}
</ToggleButton>`}
            webPreview={
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
                <ToggleButton
                  appearance="secondary"
                  checked={isPinned}
                  onToggle={(checked) => setIsPinned(checked)}
                  icon={<CheckIcon size={16} />}
                >
                  {isPinned ? 'Pinned to Sidebar' : 'Pin to Sidebar'}
                </ToggleButton>
                <ToggleButton
                  appearance="subtle"
                  checked={isBookmarked}
                  onToggle={(checked) => setIsBookmarked(checked)}
                  icon={<SparklesIcon size={16} />}
                >
                  {isBookmarked ? 'Bookmarked' : 'Add Bookmark'}
                </ToggleButton>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Button appearance="outline">{isPinned ? 'Pinned' : 'Pin'}</Button>
              </div>
            }
            webCode={`import React, { useState } from 'react';
import { ToggleButton } from '@winplaybox/react';
import { CheckIcon } from '@winplaybox/icons';

export default function ToggleButtonDemo(): JSX.Element {
  const [pinned, setPinned] = useState(true);

  return (
    <ToggleButton
      appearance="secondary"
      checked={pinned}
      onToggle={(checked) => setPinned(checked)}
      icon={<CheckIcon size={16} />}
    >
      {pinned ? 'Pinned to Sidebar' : 'Pin to Sidebar'}
    </ToggleButton>
  );
}`}
            nativeCode={`import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from '@winplaybox/react-native';

export default function NativeToggleButtonDemo(): JSX.Element {
  const [pinned, setPinned] = useState(true);
  return (
    <View style={{ width: '100%' }}>
      <Button variant="outline">{pinned ? 'Pinned' : 'Pin'}</Button>
    </View>
  );
}`}
          />

          {/* Demo 9: Loading & DisabledFocusable States */}
          <ComponentDemoCard
            id="button-states"
            title="09 Asynchronous Loading & DisabledFocusable States"
            description="Display inline animated spinners with aria-busy='true' during async operations. Use disabledFocusable to keep disabled buttons in keyboard tab order while announcing aria-disabled='true' to assistive technologies."
            compactCode={`<Button appearance="primary" isLoading>Deploying Cluster...</Button>
<Button appearance="secondary" disabled>Disabled Action</Button>
<Button appearance="outline" disabledFocusable>Disabled (Focusable)</Button>`}
            webPreview={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                <Button appearance="primary" isLoading>
                  Deploying Cluster...
                </Button>
                <Button appearance="secondary" disabled>
                  Disabled Action
                </Button>
                <Button appearance="outline" disabledFocusable>
                  Disabled (Focusable)
                </Button>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
                <Button appearance="primary" isLoading style={{ width: '100%' }}>
                  Deploying Cluster...
                </Button>
                <Button appearance="outline" disabled style={{ width: '100%' }}>
                  Disabled Action
                </Button>
              </div>
            }
            webCode={`import React from 'react';
import { Button } from '@winplaybox/react';

export default function ButtonStatesDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button appearance="primary" isLoading>
        Deploying Cluster...
      </Button>
      <Button appearance="secondary" disabled>
        Disabled Action
      </Button>
      <Button appearance="outline" disabledFocusable>
        Disabled (Focusable)
      </Button>
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Button } from '@winplaybox/react-native';

export default function NativeButtonStatesDemo(): JSX.Element {
  return (
    <View style={{ gap: 10 }}>
      <Button variant="filled" isLoading>Deploying Cluster...</Button>
      <Button variant="outline" disabled>Disabled Action</Button>
    </View>
  );
}`}
          />

          {/* Demo 10: Full-Width Block Layout */}
          <ComponentDemoCard
            id="button-block"
            title="10 Responsive Full-Width Block Layout"
            description="Expand buttons across the full container width with fullWidth={true} for responsive mobile viewports, confirmation modals, and bottom sheets."
            compactCode={`<Button appearance="primary" fullWidth>Continue to Payment</Button>
<Button appearance="secondary" fullWidth>Save for Later</Button>`}
            webPreview={
              <div style={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Button appearance="primary" fullWidth>
                  Continue to Payment
                </Button>
                <Button appearance="secondary" fullWidth>
                  Save for Later
                </Button>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Button appearance="primary" style={{ width: '100%' }}>Continue to Checkout</Button>
                <Button appearance="outline" style={{ width: '100%' }}>Cancel</Button>
              </div>
            }
            webCode={`import React from 'react';
import { Button } from '@winplaybox/react';

export default function BlockButtonDemo(): JSX.Element {
  return (
    <div style={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Button appearance="primary" fullWidth>
        Continue to Payment
      </Button>
      <Button appearance="secondary" fullWidth>
        Save for Later
      </Button>
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Button } from '@winplaybox/react-native';

export default function NativeBlockButtonDemo(): JSX.Element {
  return (
    <View style={{ width: '100%', gap: 10 }}>
      <Button variant="filled" style={{ width: '100%' }}>Continue to Checkout</Button>
      <Button variant="outline" style={{ width: '100%' }}>Cancel</Button>
    </View>
  );
}`}
          />
        </div>
      );

    case 'compound-button':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="compound-basic"
            title="01 CompoundButton Headline + Subtitle"
            description="Prominent action button pairing a bold headline with explanatory secondary copy for onboarding and configuration decisions."
            compactCode={`<CompoundButton
  appearance="primary"
  icon={<SparklesIcon size={20} />}
  secondaryContent="Create a collaborative design repository with tokens"
>
  New Workspace
</CompoundButton>`}
            webPreview={
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <CompoundButton
                  appearance="primary"
                  icon={<SparklesIcon size={20} />}
                  secondaryContent="Create a collaborative design repository with tokens"
                >
                  New Workspace
                </CompoundButton>
                <CompoundButton
                  appearance="secondary"
                  icon={<ExternalLinkIcon size={20} />}
                  secondaryContent="Sync variables and design tokens from Figma styles"
                >
                  Import Figma
                </CompoundButton>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Button variant="secondary" style={{ width: '100%', padding: '14px 16px' }}>
                  New Workspace
                </Button>
              </div>
            }
            webCode={`import React from 'react';
import { CompoundButton } from '@winplaybox/react';
import { SparklesIcon } from '@winplaybox/icons';

export default function CompoundButtonDemo(): JSX.Element {
  return (
    <CompoundButton
      appearance="primary"
      icon={<SparklesIcon size={20} />}
      secondaryContent="Create a collaborative design repository with tokens"
    >
      New Workspace
    </CompoundButton>
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
          <ComponentDemoCard
            id="compound-appearances"
            title="02 Visual Appearances"
            description="CompoundButton supports Fluent 2 appearances: Primary, Secondary, Outline, and Subtle."
            compactCode={`<CompoundButton appearance="outline" secondaryContent="Review deployment parameters">Deploy Staging</CompoundButton>`}
            webPreview={
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <CompoundButton appearance="outline" secondaryContent="Review deployment parameters">
                  Deploy Staging
                </CompoundButton>
                <CompoundButton appearance="subtle" secondaryContent="Revert to last stable commit">
                  Rollback Version
                </CompoundButton>
              </div>
            }
            nativePreview={<div style={{ width: '100%' }}><Button appearance="outline">Deploy Staging</Button></div>}
            webCode={`import React from 'react';
import { CompoundButton } from '@winplaybox/react';

export default function CompoundAppearancesDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <CompoundButton appearance="outline" secondaryContent="Review deployment parameters">
        Deploy Staging
      </CompoundButton>
      <CompoundButton appearance="subtle" secondaryContent="Revert to last stable commit">
        Rollback Version
      </CompoundButton>
    </div>
  );
}`}
            nativeCode={`import React from 'react';`}
          />
          <ComponentDemoCard
            id="compound-icons"
            title="03 Vector Icon Integration"
            description="Integrate authentic vector icons from @winplaybox/icons to establish instant visual hierarchy."
            compactCode={`<CompoundButton appearance="primary" icon={<SettingsIcon size={20} />} secondaryContent="Configure organization secrets and SSO">Security Settings</CompoundButton>`}
            webPreview={
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <CompoundButton appearance="primary" icon={<SettingsIcon size={20} />} secondaryContent="Configure organization secrets and SSO">
                  Security Settings
                </CompoundButton>
              </div>
            }
            nativePreview={<div style={{ width: '100%' }}><Button appearance="primary">Security Settings</Button></div>}
            webCode={`import React from 'react';
import { CompoundButton } from '@winplaybox/react';
import { SettingsIcon } from '@winplaybox/icons';

export default function CompoundIconsDemo(): JSX.Element {
  return (
    <CompoundButton appearance="primary" icon={<SettingsIcon size={20} />} secondaryContent="Configure organization secrets and SSO">
      Security Settings
    </CompoundButton>
  );
}`}
            nativeCode={`import React from 'react';`}
          />
        </div>
      );

    case 'menu-button':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="menu-button-basic"
            title="01 MenuButton Flyout Dropdown"
            description="MenuButton features an integrated chevron vector indicator that expands an accessible flyout menu with keyboard navigation."
            compactCode={`<MenuButton
  appearance="secondary"
  menuItems={[
    { id: 'csv', label: 'Export as CSV' },
    { id: 'pdf', label: 'Export as PDF' },
    { id: 'json', label: 'Export as JSON' },
  ]}
>
  Export Report
</MenuButton>`}
            webPreview={
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <MenuButton
                  appearance="secondary"
                  menuItems={[
                    { id: 'csv', label: 'Export as CSV' },
                    { id: 'pdf', label: 'Export as PDF' },
                    { id: 'json', label: 'Export as JSON' },
                  ]}
                >
                  Export Report
                </MenuButton>
                <MenuButton
                  appearance="primary"
                  icon={<PlusIcon size={16} />}
                  menuItems={[
                    { id: 'repo', label: 'New Repository' },
                    { id: 'gist', label: 'New Gist' },
                    { id: 'org', label: 'New Organization' },
                  ]}
                >
                  Create New
                </MenuButton>
              </div>
            }
            nativePreview={<div style={{ width: '100%' }}><Button appearance="outline">Export Report</Button></div>}
            webCode={`import React from 'react';
import { MenuButton } from '@winplaybox/react';

export default function MenuButtonDemo(): JSX.Element {
  return (
    <MenuButton
      appearance="secondary"
      menuItems={[
        { id: 'csv', label: 'Export as CSV' },
        { id: 'pdf', label: 'Export as PDF' },
        { id: 'json', label: 'Export as JSON' },
      ]}
    >
      Export Report
    </MenuButton>
  );
}`}
            nativeCode={`import React from 'react';`}
          />
          <ComponentDemoCard
            id="menu-button-appearances"
            title="02 Visual Appearances (Primary, Secondary, Outline)"
            description="Apply Fluent 2 appearance tiers to menu buttons according to surrounding interface hierarchy."
            compactCode={`<MenuButton appearance="primary" menuItems={[{ id: '1', label: 'Option 1' }]}>Primary Menu</MenuButton>
<MenuButton appearance="outline" menuItems={[{ id: '1', label: 'Option 1' }]}>Outline Menu</MenuButton>`}
            webPreview={
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <MenuButton appearance="primary" menuItems={[{ id: '1', label: 'Publish to Staging' }, { id: '2', label: 'Publish to Production' }]}>
                  Publish
                </MenuButton>
                <MenuButton appearance="outline" menuItems={[{ id: '1', label: 'Archive Project' }, { id: '2', label: 'Delete Project' }]}>
                  Manage
                </MenuButton>
              </div>
            }
            nativePreview={<div style={{ width: '100%' }}><Button appearance="primary">Publish</Button></div>}
            webCode={`import React from 'react';
import { MenuButton } from '@winplaybox/react';

export default function MenuButtonAppearancesDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <MenuButton appearance="primary" menuItems={[{ id: '1', label: 'Publish to Staging' }]}>
        Publish
      </MenuButton>
      <MenuButton appearance="outline" menuItems={[{ id: '1', label: 'Archive' }]}>
        Manage
      </MenuButton>
    </div>
  );
}`}
            nativeCode={`import React from 'react';`}
          />
          <ComponentDemoCard
            id="menu-button-sizes"
            title="03 Sizing Scale (Small, Medium, Large)"
            description="Small (24px) for compact toolbars, Medium (32px) standard, and Large (40px) prominent triggers."
            compactCode={`<MenuButton size="sm" menuItems={[{ id: '1', label: 'Item 1' }]}>Small</MenuButton>
<MenuButton size="md" menuItems={[{ id: '1', label: 'Item 1' }]}>Medium</MenuButton>
<MenuButton size="lg" menuItems={[{ id: '1', label: 'Item 1' }]}>Large</MenuButton>`}
            webPreview={
              <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                <MenuButton size="sm" menuItems={[{ id: '1', label: 'Item 1' }]}>Small (24px)</MenuButton>
                <MenuButton size="md" menuItems={[{ id: '1', label: 'Item 1' }]}>Medium (32px)</MenuButton>
                <MenuButton size="lg" menuItems={[{ id: '1', label: 'Item 1' }]}>Large (40px)</MenuButton>
              </div>
            }
            nativePreview={<div style={{ width: '100%' }}><Button size="md">Medium</Button></div>}
            webCode={`import React from 'react';
import { MenuButton } from '@winplaybox/react';

export default function MenuButtonSizesDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <MenuButton size="sm" menuItems={[{ id: '1', label: 'Item 1' }]}>Small</MenuButton>
      <MenuButton size="md" menuItems={[{ id: '1', label: 'Item 1' }]}>Medium</MenuButton>
      <MenuButton size="lg" menuItems={[{ id: '1', label: 'Item 1' }]}>Large</MenuButton>
    </div>
  );
}`}
            nativeCode={`import React from 'react';`}
          />
        </div>
      );

    case 'split-button':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="split-button-basic"
            title="01 SplitButton Action Flyout"
            description="Combines a primary single-click action with a secondary chevron button revealing alternative actions."
            compactCode={`<SplitButton
  appearance="primary"
  options={[
    { label: 'Create merge commit', onClick: () => setSplitAction('Create merge commit') },
    { label: 'Squash and merge', onClick: () => setSplitAction('Squash and merge') },
    { label: 'Rebase and merge', onClick: () => setSplitAction('Rebase and merge') },
  ]}
>
  {splitAction}
</SplitButton>`}
            webPreview={
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <SplitButton
                  appearance="primary"
                  options={[
                    { label: 'Create merge commit', onClick: () => setSplitAction('Create merge commit') },
                    { label: 'Squash and merge', onClick: () => setSplitAction('Squash and merge') },
                    { label: 'Rebase and merge', onClick: () => setSplitAction('Rebase and merge') },
                  ]}
                >
                  {splitAction}
                </SplitButton>
              </div>
            }
            nativePreview={<div style={{ width: '100%' }}><Button appearance="primary">{splitAction}</Button></div>}
            webCode={`import React, { useState } from 'react';
import { SplitButton } from '@winplaybox/react';

export default function SplitButtonDemo(): JSX.Element {
  const [action, setAction] = useState('Create merge commit');

  return (
    <SplitButton
      appearance="primary"
      options={[
        { label: 'Create merge commit', onClick: () => setAction('Create merge commit') },
        { label: 'Squash and merge', onClick: () => setAction('Squash and merge') },
      ]}
    >
      {action}
    </SplitButton>
  );
}`}
            nativeCode={`import React from 'react';`}
          />
          <ComponentDemoCard
            id="split-button-appearances"
            title="02 Visual Appearances (Primary, Secondary)"
            description="SplitButton supports Primary for prominent actions and Secondary for standard workflows."
            compactCode={`<SplitButton appearance="secondary" options={[{ label: 'Save and Close' }]}>Save Changes</SplitButton>`}
            webPreview={
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <SplitButton appearance="primary" options={[{ label: 'Deploy & Restart' }]}>
                  Deploy
                </SplitButton>
                <SplitButton appearance="secondary" options={[{ label: 'Save and Close' }, { label: 'Save and Duplicate' }]}>
                  Save Changes
                </SplitButton>
              </div>
            }
            nativePreview={<div style={{ width: '100%' }}><Button appearance="outline">Save Changes</Button></div>}
            webCode={`import React from 'react';
import { SplitButton } from '@winplaybox/react';

export default function SplitAppearancesDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <SplitButton appearance="primary" options={[{ label: 'Deploy & Restart' }]}>Deploy</SplitButton>
      <SplitButton appearance="secondary" options={[{ label: 'Save and Close' }]}>Save Changes</SplitButton>
    </div>
  );
}`}
            nativeCode={`import React from 'react';`}
          />
        </div>
      );

    case 'toggle-button':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="toggle-button-basic"
            title="01 ToggleButton Checked State"
            description="Two-state action button with accessible aria-pressed semantics for toggling binary application states."
            compactCode={`<ToggleButton
  appearance="secondary"
  checked={isPinned}
  onToggle={(checked) => setIsPinned(checked)}
  icon={<CheckIcon size={16} />}
>
  {isPinned ? 'Pinned to Sidebar' : 'Pin to Sidebar'}
</ToggleButton>`}
            webPreview={
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <ToggleButton
                  appearance="secondary"
                  checked={isPinned}
                  onToggle={(checked) => setIsPinned(checked)}
                  icon={<CheckIcon size={16} />}
                >
                  {isPinned ? 'Pinned to Sidebar' : 'Pin to Sidebar'}
                </ToggleButton>
              </div>
            }
            nativePreview={<div style={{ width: '100%' }}><Button appearance="outline">{isPinned ? 'Pinned' : 'Pin'}</Button></div>}
            webCode={`import React, { useState } from 'react';
import { ToggleButton } from '@winplaybox/react';
import { CheckIcon } from '@winplaybox/icons';

export default function ToggleButtonDemo(): JSX.Element {
  const [pinned, setPinned] = useState(true);

  return (
    <ToggleButton
      appearance="secondary"
      checked={pinned}
      onToggle={(checked) => setPinned(checked)}
      icon={<CheckIcon size={16} />}
    >
      {pinned ? 'Pinned to Sidebar' : 'Pin to Sidebar'}
    </ToggleButton>
  );
}`}
            nativeCode={`import React from 'react';`}
          />
          <ComponentDemoCard
            id="toggle-button-appearances"
            title="02 Visual Appearances (Primary, Secondary, Subtle)"
            description="Supports Fluent 2 appearances with distinct active pressed background and border contrast."
            compactCode={`<ToggleButton appearance="primary" checked={true}>Primary Toggle</ToggleButton>
<ToggleButton appearance="subtle" checked={true}>Subtle Toggle</ToggleButton>`}
            webPreview={
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <ToggleButton appearance="primary" defaultChecked>
                  Primary Pressed
                </ToggleButton>
                <ToggleButton appearance="secondary" defaultChecked>
                  Secondary Pressed
                </ToggleButton>
                <ToggleButton appearance="subtle" defaultChecked>
                  Subtle Pressed
                </ToggleButton>
              </div>
            }
            nativePreview={<div style={{ width: '100%' }}><Button appearance="primary">Active</Button></div>}
            webCode={`import React from 'react';
import { ToggleButton } from '@winplaybox/react';

export default function ToggleAppearancesDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <ToggleButton appearance="primary" defaultChecked>Primary Pressed</ToggleButton>
      <ToggleButton appearance="secondary" defaultChecked>Secondary Pressed</ToggleButton>
      <ToggleButton appearance="subtle" defaultChecked>Subtle Pressed</ToggleButton>
    </div>
  );
}`}
            nativeCode={`import React from 'react';`}
          />
          <ComponentDemoCard
            id="toggle-button-icons"
            title="03 Pin & Bookmark Toggle"
            description="Pair with authentic vector icons to convey state changes cleanly."
            compactCode={`<ToggleButton
  appearance="subtle"
  checked={isBookmarked}
  onToggle={(checked) => setIsBookmarked(checked)}
  icon={<SparklesIcon size={16} />}
>
  {isBookmarked ? 'Bookmarked' : 'Add Bookmark'}
</ToggleButton>`}
            webPreview={
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <ToggleButton
                  appearance="subtle"
                  checked={isBookmarked}
                  onToggle={(checked) => setIsBookmarked(checked)}
                  icon={<SparklesIcon size={16} />}
                >
                  {isBookmarked ? 'Bookmarked' : 'Add Bookmark'}
                </ToggleButton>
              </div>
            }
            nativePreview={<div style={{ width: '100%' }}><Button appearance="subtle">Bookmark</Button></div>}
            webCode={`import React, { useState } from 'react';
import { ToggleButton } from '@winplaybox/react';
import { SparklesIcon } from '@winplaybox/icons';

export default function BookmarkToggleDemo(): JSX.Element {
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <ToggleButton
      appearance="subtle"
      checked={bookmarked}
      onToggle={(checked) => setBookmarked(checked)}
      icon={<SparklesIcon size={16} />}
    >
      {bookmarked ? 'Bookmarked' : 'Add Bookmark'}
    </ToggleButton>
  );
}`}
            nativeCode={`import React from 'react';`}
          />
        </div>
      );

    case 'accordion':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* Demo 1: Default Accordion */}
          <ComponentDemoCard
            id="accordion-basic"
            title="01 Default Accordion (Collapsible FAQ)"
            description="Basic single-panel expansion where opening any panel collapses others. By default, collapsible={true} allows users to toggle open panels closed."
            webPreview={
              <div style={{ maxWidth: 560, width: '100%' }}>
                <Accordion defaultOpenItems={['faq-1']}>
                  <AccordionItem value="faq-1">
                    <AccordionHeader>How does Spectra UI guarantee design token synchronization?</AccordionHeader>
                    <AccordionPanel>
                      Spectra UI token primitives compile to CSS custom variables for Web React DOM and typed JavaScript dictionaries for React Native, ensuring zero design drift across platforms.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionHeader>Can I use this with Server-Side Rendering (Next.js / Astro)?</AccordionHeader>
                    <AccordionPanel>
                      Yes. All components are built with SSR-safe hydration hooks, zero unguarded browser window globals, and compile cleanly in React 18 &amp; 19 Server Components.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionHeader>What is the accessibility compliance standard?</AccordionHeader>
                    <AccordionPanel>
                      Every component satisfies WCAG 2.1 AA and W3C WAI-ARIA APG patterns, including roving tabindex and keyboard navigation.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Accordion defaultOpenItems={['faq-1']}>
                  <AccordionItem value="faq-1">
                    <AccordionHeader>How does Spectra UI synchronize tokens?</AccordionHeader>
                    <AccordionPanel>Tokens power React Native StyleSheet directly.</AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionHeader>Is React Native supported?</AccordionHeader>
                    <AccordionPanel>Native iOS (44pt) and Android (48dp) touch targets.</AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            }
            webCode={`import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@winplaybox/react';

export default function DefaultAccordionDemo(): JSX.Element {
  return (
    <Accordion defaultOpenItems={['faq-1']}>
      <AccordionItem value="faq-1">
        <AccordionHeader>How does Spectra UI guarantee design token synchronization?</AccordionHeader>
        <AccordionPanel>
          Spectra UI token primitives compile to CSS custom variables for Web React DOM and typed JavaScript dictionaries for React Native, ensuring zero design drift across platforms.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="faq-2">
        <AccordionHeader>Can I use this with Server-Side Rendering (Next.js / Astro)?</AccordionHeader>
        <AccordionPanel>
          Yes. All components are built with SSR-safe hydration hooks, zero unguarded browser window globals, and compile cleanly in React 18 & 19 Server Components.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="faq-3">
        <AccordionHeader>What is the accessibility compliance standard?</AccordionHeader>
        <AccordionPanel>
          Every component satisfies WCAG 2.1 AA and W3C WAI-ARIA APG patterns, including roving tabindex and keyboard navigation.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}`}
            nativeCode={`import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@winplaybox/react-native';

export default function NativeDefaultAccordionDemo(): JSX.Element {
  return (
    <Accordion defaultOpenItems={['faq-1']}>
      <AccordionItem value="faq-1">
        <AccordionHeader>How does Spectra UI synchronize tokens?</AccordionHeader>
        <AccordionPanel>Tokens power React Native StyleSheet directly.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="faq-2">
        <AccordionHeader>Is React Native supported?</AccordionHeader>
        <AccordionPanel>Native iOS (44pt) and Android (48dp) touch targets.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}`}
          />

          {/* Demo 2: Multiple Expansion */}
          <ComponentDemoCard
            id="accordion-multiple"
            title="02 Simultaneous Multi-Panel Expansion"
            description="With multiple={true}, users can keep several sections open at once to cross-reference technical details or multi-step configuration panels."
            webPreview={
              <div style={{ maxWidth: 560, width: '100%' }}>
                <Accordion multiple defaultOpenItems={['cfg-1', 'cfg-2']}>
                  <AccordionItem value="cfg-1">
                    <AccordionHeader>01 Cluster Architecture</AccordionHeader>
                    <AccordionPanel>
                      Running 3 regional active-active nodes with automated failover and health telemetry.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="cfg-2">
                    <AccordionHeader>02 Networking &amp; Ingress</AccordionHeader>
                    <AccordionPanel>
                      TLS 1.3 termination with mutual authentication and rate-limiting enabled across public endpoints.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="cfg-3">
                    <AccordionHeader>03 Storage &amp; Persistent Volumes</AccordionHeader>
                    <AccordionPanel>
                      NVMe-backed SSD storage classes with automated snapshot schedules every 6 hours.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Accordion multiple defaultOpenItems={['cfg-1', 'cfg-2']}>
                  <AccordionItem value="cfg-1">
                    <AccordionHeader>01 Cluster Architecture</AccordionHeader>
                    <AccordionPanel>Active nodes with automated failover.</AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="cfg-2">
                    <AccordionHeader>02 Networking &amp; Ingress</AccordionHeader>
                    <AccordionPanel>TLS 1.3 termination enabled.</AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            }
            webCode={`import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@winplaybox/react';

export default function MultiAccordionDemo(): JSX.Element {
  return (
    <Accordion multiple defaultOpenItems={['cfg-1', 'cfg-2']}>
      <AccordionItem value="cfg-1">
        <AccordionHeader>01 Cluster Architecture</AccordionHeader>
        <AccordionPanel>
          Running 3 regional active-active nodes with automated failover and health telemetry.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="cfg-2">
        <AccordionHeader>02 Networking & Ingress</AccordionHeader>
        <AccordionPanel>
          TLS 1.3 termination with mutual authentication and rate-limiting enabled across public endpoints.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="cfg-3">
        <AccordionHeader>03 Storage & Persistent Volumes</AccordionHeader>
        <AccordionPanel>
          NVMe-backed SSD storage classes with automated snapshot schedules every 6 hours.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}`}
            nativeCode={`import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@winplaybox/react-native';

export default function NativeMultiAccordionDemo(): JSX.Element {
  return (
    <Accordion multiple defaultOpenItems={['cfg-1', 'cfg-2']}>
      <AccordionItem value="cfg-1">
        <AccordionHeader>01 Cluster Architecture</AccordionHeader>
        <AccordionPanel>Active nodes with automated failover.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="cfg-2">
        <AccordionHeader>02 Networking & Ingress</AccordionHeader>
        <AccordionPanel>TLS 1.3 termination enabled.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}`}
          />

          {/* Demo 3: Sizing Scale */}
          <ComponentDemoCard
            id="accordion-sizes"
            title="03 Sizing Scale & Density (Sm, Md, Lg, XL)"
            description="Choose from 4 sizing densities: Small (32px) for high-density toolbars/sidebars, Medium (40px) default, Large (48px) for forms, and Extra Large (56px) for hero FAQ sections."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 560, width: '100%' }}>
                <div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: 6, display: 'block' }}>
                    Small Density (size="small" · 32px height)
                  </span>
                  <Accordion size="small" defaultOpenItems={['sm-1']}>
                    <AccordionItem value="sm-1">
                      <AccordionHeader>System Properties (Small)</AccordionHeader>
                      <AccordionPanel>Memory: 16 GB · Kernel: Darwin 23.4.0</AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: 6, display: 'block' }}>
                    Medium Density (size="medium" · 40px height — Default)
                  </span>
                  <Accordion size="medium" defaultOpenItems={['md-1']}>
                    <AccordionItem value="md-1">
                      <AccordionHeader>Security &amp; Compliance (Medium)</AccordionHeader>
                      <AccordionPanel>SOC 2 Type II certified with end-to-end audit logging.</AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: 6, display: 'block' }}>
                    Large Density (size="large" · 48px height)
                  </span>
                  <Accordion size="large" defaultOpenItems={['lg-1']}>
                    <AccordionItem value="lg-1">
                      <AccordionHeader>Billing &amp; Subscription (Large)</AccordionHeader>
                      <AccordionPanel>Enterprise tier plan renewing on November 1st.</AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: 6, display: 'block' }}>
                    Extra Large Density (size="extra-large" · 56px height)
                  </span>
                  <Accordion size="extra-large" defaultOpenItems={['xl-1']}>
                    <AccordionItem value="xl-1">
                      <AccordionHeader>Frequently Asked Questions (Hero)</AccordionHeader>
                      <AccordionPanel>Prominent hero typography suitable for landing page disclosure.</AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
                <Accordion size="small" defaultOpenItems={['sm-1']}>
                  <AccordionItem value="sm-1">
                    <AccordionHeader>Small Density (36pt)</AccordionHeader>
                    <AccordionPanel>Compact mobile sidebar item.</AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion size="medium" defaultOpenItems={['md-1']}>
                  <AccordionItem value="md-1">
                    <AccordionHeader>Medium Density (44pt Apple HIG)</AccordionHeader>
                    <AccordionPanel>Standard touch target.</AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            }
            webCode={`import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@winplaybox/react';

export default function AccordionSizesDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Small (32px) */}
      <Accordion size="small">
        <AccordionItem value="sm">
          <AccordionHeader>Small Density (32px)</AccordionHeader>
          <AccordionPanel>Ideal for sidebars and dense lists.</AccordionPanel>
        </AccordionItem>
      </Accordion>

      {/* Medium (40px) */}
      <Accordion size="medium" defaultOpenItems={['md']}>
        <AccordionHeader>Medium Density (40px — Default)</AccordionHeader>
        <AccordionPanel>Standard design system baseline.</AccordionPanel>
      </Accordion>

      {/* Large (48px) */}
      <Accordion size="large">
        <AccordionItem value="lg">
          <AccordionHeader>Large Density (48px)</AccordionHeader>
          <AccordionPanel>Comfortable touch and form spacing.</AccordionPanel>
        </AccordionItem>
      </Accordion>

      {/* Extra Large (56px) */}
      <Accordion size="extra-large">
        <AccordionItem value="xl">
          <AccordionHeader>Extra Large Density (56px)</AccordionHeader>
          <AccordionPanel>Prominent hero FAQ sections.</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@winplaybox/react-native';

export default function NativeAccordionSizesDemo(): JSX.Element {
  return (
    <Accordion size="medium" defaultOpenItems={['md']}>
      <AccordionItem value="md">
        <AccordionHeader>Medium Density (44pt touch target)</AccordionHeader>
        <AccordionPanel>Native layout measurement.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}`}
          />

          {/* Demo 4: Expand Icon Position */}
          <ComponentDemoCard
            id="accordion-icon-position"
            title="04 Expand Icon Position (Start vs End)"
            description="Position the expand chevron at the leading edge (expandIconPosition='start', standard outline disclosure) or the trailing edge (expandIconPosition='end', mobile card convention)."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 560, width: '100%' }}>
                <div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: 8, display: 'block' }}>
                    Leading Icon Position (expandIconPosition="start" — Default)
                  </span>
                  <Accordion expandIconPosition="start" defaultOpenItems={['start-1']}>
                    <AccordionItem value="start-1">
                      <AccordionHeader>Leading Chevron (Start)</AccordionHeader>
                      <AccordionPanel>
                        The chevron sits to the left of the header text and rotates 90 degrees downward when open.
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem value="start-2">
                      <AccordionHeader>Collapsed Start Section</AccordionHeader>
                      <AccordionPanel>Collapsed content details.</AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: 8, display: 'block' }}>
                    Trailing Icon Position (expandIconPosition="end")
                  </span>
                  <Accordion expandIconPosition="end" defaultOpenItems={['end-1']}>
                    <AccordionItem value="end-1">
                      <AccordionHeader>Trailing Chevron (End)</AccordionHeader>
                      <AccordionPanel>
                        The chevron is pushed to the far right of the container and rotates 180 degrees upward when open.
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem value="end-2">
                      <AccordionHeader>Collapsed End Section</AccordionHeader>
                      <AccordionPanel>Collapsed content details.</AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Accordion expandIconPosition="end" defaultOpenItems={['end-1']}>
                  <AccordionItem value="end-1">
                    <AccordionHeader>Trailing Chevron Native</AccordionHeader>
                    <AccordionPanel>Matches iOS grouped table disclosure indicators.</AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            }
            webCode={`import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@winplaybox/react';

export default function ExpandIconPositionDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Leading (Start) */}
      <Accordion expandIconPosition="start" defaultOpenItems={['start-1']}>
        <AccordionItem value="start-1">
          <AccordionHeader>Leading Chevron (Start)</AccordionHeader>
          <AccordionPanel>Chevron sits to the left of header text.</AccordionPanel>
        </AccordionItem>
      </Accordion>

      {/* Trailing (End) */}
      <Accordion expandIconPosition="end" defaultOpenItems={['end-1']}>
        <AccordionItem value="end-1">
          <AccordionHeader>Trailing Chevron (End)</AccordionHeader>
          <AccordionPanel>Chevron aligns to the right margin.</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@winplaybox/react-native';

export default function NativeIconPositionDemo(): JSX.Element {
  return (
    <Accordion expandIconPosition="end" defaultOpenItems={['item-1']}>
      <AccordionItem value="item-1">
        <AccordionHeader>Trailing Indicator</AccordionHeader>
        <AccordionPanel>Standard mobile table view disclosure.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}`}
          />

          {/* Demo 5: Disabled Section State */}
          <ComponentDemoCard
            id="accordion-disabled"
            title="05 Disabled Section State"
            description="Individual items can be incapacitated with disabled={true}. Disabled headers cannot receive keyboard focus, appear with muted opacity, and ignore pointer events."
            webPreview={
              <div style={{ maxWidth: 560, width: '100%' }}>
                <Accordion defaultOpenItems={['sec-1']}>
                  <AccordionItem value="sec-1">
                    <AccordionHeader>Basic Workspace Settings (Available)</AccordionHeader>
                    <AccordionPanel>
                      General preferences, notification thresholds, and team naming configurations.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="sec-2" disabled>
                    <AccordionHeader>
                      Custom Domain Routing (Enterprise Only)
                    </AccordionHeader>
                    <AccordionPanel>
                      This section is disabled and cannot be toggled by the user.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="sec-3">
                    <AccordionHeader>API Keys &amp; Webhooks (Available)</AccordionHeader>
                    <AccordionPanel>
                      Manage production credentials and dispatch outgoing event payloads.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Accordion defaultOpenItems={['sec-1']}>
                  <AccordionItem value="sec-1">
                    <AccordionHeader>Active Section</AccordionHeader>
                    <AccordionPanel>Available native panel.</AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="sec-2" disabled>
                    <AccordionHeader>Disabled Section</AccordionHeader>
                    <AccordionPanel>Disabled panel.</AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            }
            webCode={`import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@winplaybox/react';

export default function DisabledAccordionDemo(): JSX.Element {
  return (
    <Accordion defaultOpenItems={['sec-1']}>
      <AccordionItem value="sec-1">
        <AccordionHeader>Active Section</AccordionHeader>
        <AccordionPanel>Available configuration details.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="sec-2" disabled>
        <AccordionHeader>Enterprise Only (Disabled)</AccordionHeader>
        <AccordionPanel>Disabled content cannot be opened.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="sec-3">
        <AccordionHeader>API Credentials</AccordionHeader>
        <AccordionPanel>Manage developer access keys.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}`}
            nativeCode={`import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@winplaybox/react-native';

export default function NativeDisabledAccordionDemo(): JSX.Element {
  return (
    <Accordion defaultOpenItems={['sec-1']}>
      <AccordionItem value="sec-1">
        <AccordionHeader>Active Native Item</AccordionHeader>
        <AccordionPanel>Active panel content.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="sec-2" disabled>
        <AccordionHeader>Disabled Native Item</AccordionHeader>
        <AccordionPanel>Muted disabled styling.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}`}
          />

          {/* Demo 6: Inline Actions & Badges in Header */}
          <ComponentDemoCard
            id="accordion-inline-actions"
            title="06 Inline Actions & Badges in Header"
            description="Utilize the inlineAction slot to render status badges, counter pills, or auxiliary action buttons directly inside the header without triggering section collapse."
            webPreview={
              <div style={{ maxWidth: 560, width: '100%' }}>
                <Accordion expandIconPosition="end" defaultOpenItems={['stage-1']}>
                  <AccordionItem value="stage-1">
                    <AccordionHeader
                      inlineAction={
                        <Badge variant="success" dot>
                          Operational
                        </Badge>
                      }
                    >
                      Auth &amp; Session Broker
                    </AccordionHeader>
                    <AccordionPanel>
                      All authentication endpoints responding with 18ms average latency across 3 regions.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="stage-2">
                    <AccordionHeader
                      inlineAction={
                        <Badge variant="warning">
                          4 Deprecated
                        </Badge>
                      }
                    >
                      API Microservices
                    </AccordionHeader>
                    <AccordionPanel>
                      Migrate legacy REST v1 routes to GraphQL before the next major release milestone.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="stage-3">
                    <AccordionHeader
                      inlineAction={
                        <span style={{ fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 500 }}>
                          Updated 5m ago
                        </span>
                      }
                    >
                      Payment Processing Gateway
                    </AccordionHeader>
                    <AccordionPanel>
                      Stripe webhook handler running with 99.99% successful delivery verification.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Accordion expandIconPosition="end" defaultOpenItems={['stage-1']}>
                  <AccordionItem value="stage-1">
                    <AccordionHeader inlineAction={<Badge variant="success">Online</Badge>}>
                      Mobile Services
                    </AccordionHeader>
                    <AccordionPanel>Native inline status badge.</AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            }
            webCode={`import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel, Badge } from '@winplaybox/react';

export default function InlineActionAccordionDemo(): JSX.Element {
  return (
    <Accordion expandIconPosition="end" defaultOpenItems={['stage-1']}>
      <AccordionItem value="stage-1">
        <AccordionHeader
          inlineAction={<Badge variant="success" dot>Operational</Badge>}
        >
          Auth & Session Broker
        </AccordionHeader>
        <AccordionPanel>
          All authentication endpoints responding within 18ms latency.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem value="stage-2">
        <AccordionHeader
          inlineAction={<Badge variant="warning">4 Deprecated</Badge>}
        >
          API Microservices
        </AccordionHeader>
        <AccordionPanel>
          Migrate legacy endpoints before next release.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}`}
            nativeCode={`import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@winplaybox/react-native';

export default function NativeInlineActionAccordionDemo(): JSX.Element {
  return (
    <Accordion expandIconPosition="end" defaultOpenItems={['stage-1']}>
      <AccordionItem value="stage-1">
        <AccordionHeader>Service Status</AccordionHeader>
        <AccordionPanel>Operational metrics.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}`}
          />

          {/* Demo 7: Controlled State Management */}
          <ComponentDemoCard
            id="accordion-controlled"
            title="07 Controlled State Management (openItems)"
            description="Programmatically govern open items via openItems and the onToggle event handler, enabling external triggers like 'Expand All' and 'Collapse All'."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 560, width: '100%' }}>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setControlledOpenSections(['section-1', 'section-2', 'section-3'])}
                  >
                    Expand All
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setControlledOpenSections([])}
                  >
                    Collapse All
                  </Button>
                  <Button
                    variant={controlledOpenSections.includes('section-2') ? 'primary' : 'secondary'}
                    size="sm"
                    onClick={() => {
                      setControlledOpenSections((prev) =>
                        prev.includes('section-2') ? prev.filter((s) => s !== 'section-2') : [...prev, 'section-2']
                      );
                    }}
                  >
                    Toggle Section 2
                  </Button>
                  <span style={{ fontSize: 12, color: 'var(--color-text-muted)', alignSelf: 'center', marginLeft: 'auto' }}>
                    Open count: <strong>{controlledOpenSections.length}</strong>
                  </span>
                </div>

                <Accordion
                  multiple
                  openItems={controlledOpenSections}
                  onToggle={(_e, data) => setControlledOpenSections(data.openItems)}
                >
                  <AccordionItem value="section-1">
                    <AccordionHeader>Section 1: Database Migration Scripts</AccordionHeader>
                    <AccordionPanel>
                      PostgreSQL 16 migration schema applied across primary and standby clusters.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="section-2">
                    <AccordionHeader>Section 2: Edge CDN Cache Invalidation</AccordionHeader>
                    <AccordionPanel>
                      Purged global cache tags across 140 points of presence in under 150ms.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="section-3">
                    <AccordionHeader>Section 3: Audit Trail Log Stream</AccordionHeader>
                    <AccordionPanel>
                      Encrypted audit trail ingested into Elasticsearch cluster with 30-day retention.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Accordion multiple defaultOpenItems={['section-1']}>
                  <AccordionItem value="section-1">
                    <AccordionHeader>Controlled Native Section 1</AccordionHeader>
                    <AccordionPanel>Native controlled open state.</AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            }
            webCode={`import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel, Button } from '@winplaybox/react';

export default function ControlledAccordionDemo(): JSX.Element {
  const [openItems, setOpenItems] = useState<string[]>(['section-1']);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button size="sm" onClick={() => setOpenItems(['section-1', 'section-2', 'section-3'])}>
          Expand All
        </Button>
        <Button size="sm" onClick={() => setOpenItems([])}>
          Collapse All
        </Button>
      </div>

      <Accordion
        multiple
        openItems={openItems}
        onToggle={(_e, data) => setOpenItems(data.openItems)}
      >
        <AccordionItem value="section-1">
          <AccordionHeader>Section 1: Database Migration</AccordionHeader>
          <AccordionPanel>PostgreSQL 16 migration schema applied.</AccordionPanel>
        </AccordionItem>
        <AccordionItem value="section-2">
          <AccordionHeader>Section 2: CDN Invalidation</AccordionHeader>
          <AccordionPanel>Purged global cache tags.</AccordionPanel>
        </AccordionItem>
        <AccordionItem value="section-3">
          <AccordionHeader>Section 3: Audit Trail Logs</AccordionHeader>
          <AccordionPanel>Encrypted audit trail ingested.</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}`}
            nativeCode={`import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@winplaybox/react-native';

export default function NativeControlledAccordionDemo(): JSX.Element {
  const [openItems, setOpenItems] = useState(['section-1']);

  return (
    <Accordion
      multiple
      openItems={openItems}
      onToggle={(_e, data) => setOpenItems(data.openItems)}
    >
      <AccordionItem value="section-1">
        <AccordionHeader>Controlled Native Item</AccordionHeader>
        <AccordionPanel>Programmatically bound panel.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}`}
          />

          {/* Demo 8: Custom Expand Icon & Context Icons */}
          <ComponentDemoCard
            id="accordion-custom-icon"
            title="08 Custom Expand Icon & Context Icons"
            description="Override the default chevron with custom expand icons (such as Plus/Minus) or pair headers with contextual leading icons for visual scanning."
            webPreview={
              <div style={{ maxWidth: 560, width: '100%' }}>
                <Accordion defaultOpenItems={['icon-1']}>
                  <AccordionItem value="icon-1">
                    <AccordionHeader
                      icon={<SparklesIcon size={16} color="var(--color-primary)" />}
                      expandIcon={<PlusIcon size={16} />}
                    >
                      AI Model Fine-Tuning Pipeline
                    </AccordionHeader>
                    <AccordionPanel>
                      Contextual vector icon on the left paired with a custom expand trigger icon.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="icon-2">
                    <AccordionHeader
                      icon={<SearchIcon size={16} />}
                      expandIcon={<PlusIcon size={16} />}
                    >
                      Semantic Vector Search Index
                    </AccordionHeader>
                    <AccordionPanel>
                      Index query latency benchmarked at 4ms using HNSW graphs.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="icon-3">
                    <AccordionHeader
                      icon={<CheckIcon size={16} color="var(--color-feedback-success, #22c55e)" />}
                      expandIcon={<PlusIcon size={16} />}
                    >
                      Automated Verification Suite
                    </AccordionHeader>
                    <AccordionPanel>
                      1,420 unit tests passing with 100% platform capability coverage.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Accordion defaultOpenItems={['icon-1']}>
                  <AccordionItem value="icon-1">
                    <AccordionHeader icon={<SparklesIcon size={16} />}>
                      Native Contextual Header
                    </AccordionHeader>
                    <AccordionPanel>Contextual vector icon rendered on mobile.</AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            }
            webCode={`import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@winplaybox/react';
import { SparklesIcon, SearchIcon, CheckIcon, PlusIcon } from '@winplaybox/icons';

export default function CustomIconAccordionDemo(): JSX.Element {
  return (
    <Accordion defaultOpenItems={['icon-1']}>
      <AccordionItem value="icon-1">
        <AccordionHeader
          icon={<SparklesIcon size={16} />}
          expandIcon={<PlusIcon size={16} />}
        >
          AI Model Fine-Tuning Pipeline
        </AccordionHeader>
        <AccordionPanel>
          Custom leading contextual icon and custom expand indicator.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem value="icon-2">
        <AccordionHeader
          icon={<SearchIcon size={16} />}
          expandIcon={<PlusIcon size={16} />}
        >
          Semantic Vector Search Index
        </AccordionHeader>
        <AccordionPanel>
          Index query latency benchmarked at 4ms.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}`}
            nativeCode={`import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@winplaybox/react-native';
import { SparklesIcon } from '@winplaybox/icons';

export default function NativeCustomIconAccordionDemo(): JSX.Element {
  return (
    <Accordion defaultOpenItems={['icon-1']}>
      <AccordionItem value="icon-1">
        <AccordionHeader icon={<SparklesIcon size={16} />}>
          AI Pipeline
        </AccordionHeader>
        <AccordionPanel>Mobile icon support.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}`}
          />
        </div>
      );

    case 'avatar':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* Demo 1: Default Initials Avatar */}
          <ComponentDemoCard
            id="avatar-basic"
            title="01 Default Initials Avatar"
            description="Standard avatar displaying 1-2 character monogram derived automatically from the user name with contrast-guaranteed text."
            webPreview={
              <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                <Avatar name="Josef Müller-Brockmann" size={48} />
                <Avatar name="Elena Rostova" size={48} />
                <Avatar name="Alexander Hamilton" size={48} />
                <Avatar name="Spectra" size={48} />
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                <Avatar name="Josef Müller-Brockmann" size={48} />
                <Avatar name="Elena Rostova" size={48} />
                <Avatar name="Alexander Hamilton" size={48} />
              </div>
            }
            webCode={`import React from 'react';
import { Avatar } from '@winplaybox/react';

export default function BasicAvatarDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Avatar name="Josef Müller-Brockmann" size={48} />
      <Avatar name="Elena Rostova" size={48} />
      <Avatar name="Alexander Hamilton" size={48} />
      <Avatar name="Spectra" size={48} />
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Avatar } from '@winplaybox/react-native';

export default function NativeBasicAvatarDemo(): JSX.Element {
  return (
    <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
      <Avatar name="Josef Müller-Brockmann" size={48} />
      <Avatar name="Elena Rostova" size={48} />
    </View>
  );
}`}
          />

          {/* Demo 2: Profile Image with Fallback */}
          <ComponentDemoCard
            id="avatar-image"
            title="02 Profile Image with Fallback"
            description="High-fidelity portrait photos with automatic fallback to monogram initials upon network failure or broken source URL."
            webPreview={
              <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                <Avatar
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
                  name="Elena Rostova"
                  size={48}
                />
                <Avatar
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
                  name="David Miller"
                  size={48}
                />
                <Avatar
                  src="https://invalid-broken-url.com/missing.jpg"
                  name="Alice Smith"
                  size={48}
                />
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                <Avatar
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
                  name="Elena Rostova"
                  size={48}
                />
              </div>
            }
            webCode={`import React from 'react';
import { Avatar } from '@winplaybox/react';

export default function ImageAvatarDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Avatar
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
        name="Elena Rostova"
        size={48}
      />
      {/* Graceful fallback to initials on error */}
      <Avatar
        src="https://invalid-broken-url.com/missing.jpg"
        name="Alice Smith"
        size={48}
      />
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Avatar } from '@winplaybox/react-native';

export default function NativeImageAvatarDemo(): JSX.Element {
  return (
    <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
      <Avatar
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
        name="Elena Rostova"
        size={48}
      />
    </View>
  );
}`}
          />

          {/* Demo 3: Discrete Sizing Scale */}
          <ComponentDemoCard
            id="avatar-sizes"
            title="03 Discrete Sizing Scale (16px to 128px)"
            description="14 discrete pixel steps matching token typography and touch targets, from micro inline presence (16px) to hero profiles (128px)."
            webPreview={
              <div style={{ display: 'flex', gap: 14, alignItems: 'flex-end', flexWrap: 'wrap' }}>
                {[16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96].map((s) => (
                  <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <Avatar size={s as any} name={`User ${s}`} />
                    <span style={{ fontSize: 10, color: 'var(--color-text-muted, #71717A)' }}>{s}px</span>
                  </div>
                ))}
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Avatar size={24} name="Small" />
                <Avatar size={40} name="Medium" />
                <Avatar size={56} name="Large" />
              </div>
            }
            webCode={`import React from 'react';
import { Avatar } from '@winplaybox/react';

export default function AvatarSizesDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Avatar size={24} name="Micro Item" />
      <Avatar size={32} name="Toolbar Item" />
      <Avatar size={40} name="Standard Default" />
      <Avatar size={48} name="Prominent Card" />
      <Avatar size={64} name="Hero Profile" />
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Avatar } from '@winplaybox/react-native';

export default function NativeAvatarSizesDemo(): JSX.Element {
  return (
    <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
      <Avatar size={24} name="Small" />
      <Avatar size={40} name="Medium" />
      <Avatar size={56} name="Large" />
    </View>
  );
}`}
          />

          {/* Demo 4: Circular vs Square Silhouettes */}
          <ComponentDemoCard
            id="avatar-shapes"
            title="04 Circular vs Square Silhouettes"
            description="Circular shape (default) represents individual humans; soft rounded square represents channels, teams, and automation bots."
            webPreview={
              <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Avatar shape="circular" size={48} name="Elena Rostova" />
                  <span style={{ fontSize: 12, color: 'var(--color-text-secondary, #3F3F46)' }}>
                    Circular (Individual)
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Avatar shape="square" size={48} name="DevOps Automation Bot" />
                  <span style={{ fontSize: 12, color: 'var(--color-text-secondary, #3F3F46)' }}>
                    Square (Bot / Team)
                  </span>
                </div>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <Avatar shape="circular" size={48} name="Elena Rostova" />
                <Avatar shape="square" size={48} name="Bot" />
              </div>
            }
            webCode={`import React from 'react';
import { Avatar } from '@winplaybox/react';

export default function AvatarShapesDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 24 }}>
      <Avatar shape="circular" size={48} name="Elena Rostova" />
      <Avatar shape="square" size={48} name="DevOps Automation Bot" />
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Avatar } from '@winplaybox/react-native';

export default function NativeAvatarShapesDemo(): JSX.Element {
  return (
    <View style={{ flexDirection: 'row', gap: 16 }}>
      <Avatar shape="circular" size={48} name="User" />
      <Avatar shape="square" size={48} name="Bot" />
    </View>
  );
}`}
          />

          {/* Demo 5: Real-Time Status & Presence Badges */}
          <ComponentDemoCard
            id="avatar-presence"
            title="05 Real-Time Status & Presence Badges"
            description="Activity state dots with tokenized high-contrast outlines: available, busy, away, do-not-disturb, out-of-office, and offline."
            webPreview={
              <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <Avatar name="Sarah Connor" status="available" size={48} />
                  <span style={{ fontSize: 11, color: 'var(--color-text-muted, #71717A)' }}>Available</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <Avatar name="John Doe" status="busy" size={48} />
                  <span style={{ fontSize: 11, color: 'var(--color-text-muted, #71717A)' }}>Busy</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <Avatar name="Alex Vance" status="away" size={48} />
                  <span style={{ fontSize: 11, color: 'var(--color-text-muted, #71717A)' }}>Away</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <Avatar name="David Miller" status="dnd" size={48} />
                  <span style={{ fontSize: 11, color: 'var(--color-text-muted, #71717A)' }}>DND</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <Avatar name="Elena Rostova" status="out-of-office" size={48} />
                  <span style={{ fontSize: 11, color: 'var(--color-text-muted, #71717A)' }}>OOF</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <Avatar name="Robin Hood" status="offline" size={48} />
                  <span style={{ fontSize: 11, color: 'var(--color-text-muted, #71717A)' }}>Offline</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <Avatar name="Alice OOF" status="available" outOfOffice size={48} />
                  <span style={{ fontSize: 11, color: 'var(--color-text-muted, #71717A)' }}>Available+OOF</span>
                </div>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <Avatar name="Sarah" status="available" size={48} />
                <Avatar name="John" status="busy" size={48} />
                <Avatar name="Alex" status="away" size={48} />
              </div>
            }
            webCode={`import React from 'react';
import { Avatar } from '@winplaybox/react';

export default function PresenceAvatarDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Avatar name="Sarah Connor" status="available" size={48} />
      <Avatar name="John Doe" status="busy" size={48} />
      <Avatar name="Alex Vance" status="away" size={48} />
      <Avatar name="David Miller" status="dnd" size={48} />
      <Avatar name="Elena Rostova" status="out-of-office" size={48} />
      <Avatar name="Robin Hood" status="offline" size={48} />
      {/* Out of Office halo modifier */}
      <Avatar name="Alice OOF" status="available" outOfOffice size={48} />
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Avatar } from '@winplaybox/react-native';

export default function NativePresenceAvatarDemo(): JSX.Element {
  return (
    <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
      <Avatar name="Sarah" status="available" size={48} />
      <Avatar name="John" status="busy" size={48} />
    </View>
  );
}`}
          />

          {/* Demo 6: Algorithmic Colorful Palette */}
          <ComponentDemoCard
            id="avatar-colorful"
            title="06 Algorithmic Colorful Palette"
            description="Automatic color hashing (color='colorful') maps any user name deterministically to accessible, high-contrast hue pairs for instant visual differentiation."
            webPreview={
              <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
                {[
                  'Alice Sky',
                  'Bob Cranberry',
                  'Carol Gold',
                  'David Forest',
                  'Eva Purple',
                  'Frank Pink',
                  'Grace Indigo',
                  'Henry Teal',
                ].map((nm) => (
                  <div key={nm} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <Avatar name={nm} color="colorful" size={48} />
                    <span style={{ fontSize: 10, color: 'var(--color-text-muted, #71717A)' }}>{nm.split(' ')[0]}</span>
                  </div>
                ))}
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Avatar name="Alice Sky" color="colorful" size={48} />
                <Avatar name="Bob Cranberry" color="colorful" size={48} />
                <Avatar name="Carol Gold" color="colorful" size={48} />
              </div>
            }
            webCode={`import React from 'react';
import { Avatar } from '@winplaybox/react';

export default function ColorfulAvatarDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Avatar name="Alice Sky" color="colorful" size={48} />
      <Avatar name="Bob Cranberry" color="colorful" size={48} />
      <Avatar name="Carol Gold" color="colorful" size={48} />
      <Avatar name="David Forest" color="colorful" size={48} />
      <Avatar name="Eva Purple" color="colorful" size={48} />
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Avatar } from '@winplaybox/react-native';

export default function NativeColorfulAvatarDemo(): JSX.Element {
  return (
    <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
      <Avatar name="Alice Sky" color="colorful" size={48} />
      <Avatar name="Bob Cranberry" color="colorful" size={48} />
    </View>
  );
}`}
          />

          {/* Demo 7: Active Halo Ring */}
          <ComponentDemoCard
            id="avatar-active"
            title="07 Active Halo Ring (Speaker / Live)"
            description="Outset active focus ring (active='active') highlights an active speaker in audio/video calls or elevated room participants."
            webPreview={
              <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Avatar name="Sarah Connor" size={48} active="active" activeAppearance="ring" status="available" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary, #3F3F46)' }}>Active Ring</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Avatar name="Alex Vance" size={48} active="active" activeAppearance="ring-shadow" status="busy" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary, #3F3F46)' }}>Ring + Shadow</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Avatar name="David Miller" size={48} active="inactive" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary, #3F3F46)' }}>Inactive</span>
                </div>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                <Avatar name="Sarah" size={48} active="active" status="available" />
                <Avatar name="Alex" size={48} active="inactive" />
              </div>
            }
            webCode={`import React from 'react';
import { Avatar } from '@winplaybox/react';

export default function ActiveAvatarDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      {/* Active speaker ring */}
      <Avatar
        name="Sarah Connor"
        size={48}
        active="active"
        activeAppearance="ring"
        status="available"
      />
      {/* Active speaker with ambient glow */}
      <Avatar
        name="Alex Vance"
        size={48}
        active="active"
        activeAppearance="ring-shadow"
        status="busy"
      />
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Avatar } from '@winplaybox/react-native';

export default function NativeActiveAvatarDemo(): JSX.Element {
  return (
    <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
      <Avatar name="Sarah" size={48} active="active" status="available" />
    </View>
  );
}`}
          />

          {/* Demo 8: AvatarGroup & Collaborator Stack */}
          <ComponentDemoCard
            id="avatar-group"
            title="08 AvatarGroup & Collaborator Stack"
            description="Overlapping collaborator stack with automatic overflow count (+N), custom max limit, and layout modes."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-muted, #71717A)', marginBottom: 8 }}>
                    Stack Mode (Max 4 of 6)
                  </div>
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
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-muted, #71717A)', marginBottom: 8 }}>
                    Spread Mode (Spaced Items)
                  </div>
                  <AvatarGroup max={5} size={36} layout="spread">
                    <Avatar name="Sarah Connor" color="colorful" />
                    <Avatar name="John Doe" color="colorful" />
                    <Avatar name="Alex Vance" color="colorful" />
                    <Avatar name="David Miller" color="colorful" />
                  </AvatarGroup>
                </div>
              </div>
            }
            nativePreview={
              <AvatarGroup max={3} size={40}>
                <Avatar name="Sarah" color="colorful" />
                <Avatar name="John" color="colorful" />
                <Avatar name="Alex" color="colorful" />
                <Avatar name="David" color="colorful" />
              </AvatarGroup>
            }
            webCode={`import React from 'react';
import { Avatar, AvatarGroup } from '@winplaybox/react';

export default function AvatarGroupDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Overlapping stack with +2 overflow */}
      <AvatarGroup max={4} size={40}>
        <Avatar name="Sarah Connor" color="colorful" />
        <Avatar name="John Doe" color="colorful" />
        <Avatar name="Alex Vance" color="colorful" />
        <Avatar name="David Miller" color="colorful" />
        <Avatar name="Elena Rostova" color="colorful" />
        <Avatar name="Sam Wilson" color="colorful" />
      </AvatarGroup>
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { Avatar, AvatarGroup } from '@winplaybox/react-native';

export default function NativeAvatarGroupDemo(): JSX.Element {
  return (
    <AvatarGroup max={3} size={40}>
      <Avatar name="Sarah" color="colorful" />
      <Avatar name="John" color="colorful" />
      <Avatar name="Alex" color="colorful" />
      <Avatar name="David" color="colorful" />
    </AvatarGroup>
  );
}`}
          />
        </div>
      );

    case 'text-input':
      return <TextInputRecipeGallery />;


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
            webCode={`import { Select } from '@winplaybox/react';

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
import { Select } from '@winplaybox/react-native';

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
            webCode={`import { Select } from '@winplaybox/react';

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
import { Select } from '@winplaybox/react-native';

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
import { Select } from '@winplaybox/react-native';

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
            webCode={`import { Badge } from '@winplaybox/react';

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
import { Badge } from '@winplaybox/react-native';

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
            webCode={`import { Badge } from '@winplaybox/react';

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
import { Badge } from '@winplaybox/react-native';

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
            webCode={`import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@winplaybox/react';

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
import { Tabs } from '@winplaybox/react-native';

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
            webCode={`import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@winplaybox/react';

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
import { Tabs } from '@winplaybox/react-native';

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
                <Stack direction="column" justify="center" style={{ flex: 1 }}>
                  <Text variant="heading-sm" weight="semibold" style={{ marginBottom: 8 }}>
                    {verticalTab === 'profile' && 'User Identity & Organization Details'}
                    {verticalTab === 'security' && 'Hardware Security Keys & Multi-Factor Auth'}
                    {verticalTab === 'billing' && 'Enterprise Subscriptions & Invoicing'}
                    {verticalTab === 'api' && 'Scoped Production API Access Tokens'}
                  </Text>
                  <Text variant="body-sm" color="secondary" style={{ lineHeight: 1.5 }}>
                    Manage domain permissions and configure environment variables synchronized with Spectra UI tokens.
                  </Text>
                </Stack>
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
import { Tabs } from '@winplaybox/react-native';

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
            webCode={`import { Switch } from '@winplaybox/react';

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
import { Switch } from '@winplaybox/react-native';

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
            webCode={`import { Switch } from '@winplaybox/react';

export default function PreferenceSwitchDemo() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Stack spacing={2}>
        <Text weight="semibold">Dark Mode Sync</Text>
        <Text variant="body-xs" color="secondary">Match OS theme</Text>
      </Stack>
      <Switch checked={true} onChange={() => {}} />
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { Switch } from '@winplaybox/react-native';

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
import { Checkbox } from '@winplaybox/react';

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
import { Checkbox } from '@winplaybox/react-native';

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
import { Checkbox } from '@winplaybox/react';

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
import { Checkbox } from '@winplaybox/react-native';

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
            webCode={`import { Checkbox } from '@winplaybox/react';

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
import { Checkbox } from '@winplaybox/react-native';

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
import { Checkbox } from '@winplaybox/react';

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
import { Checkbox } from '@winplaybox/react-native';

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
            webCode={`import { RadioGroup, Radio } from '@winplaybox/react';

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="monthly">
      <Radio value="monthly" label="Monthly Billing" />
      <Radio value="annual" label="Annual Billing" />
    </RadioGroup>
  );
}`}
            nativeCode={`import React from 'react';
import { Radio } from '@winplaybox/react-native';

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
            webCode={`import { RadioGroup, Radio } from '@winplaybox/react';

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
import { Radio } from '@winplaybox/react-native';

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
            webCode={`import { Avatar } from '@winplaybox/react';

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
import { Avatar } from '@winplaybox/react-native';

export default function NativeAvatarDemo() {
  return <Avatar size="md" name="Alex Vance" status="online" />;
}`}
          />

          <ComponentDemoCard
            id="avatar-presence"
            title="Rich Presence Status Badges"
            description="Comprehensive presence states including active, busy, do-not-disturb (with dash indicator), away, meeting, focus, idle, invisible, and streaming."
            webPreview={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Avatar size="lg" name="Alex Vance" status="online" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Online</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Avatar size="lg" name="Sarah Connor" status="busy" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Busy</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Avatar size="lg" name="David Miller" status="dnd" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>DND</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Avatar size="lg" name="Elena Rostova" status="away" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Away</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Avatar size="lg" name="Jordan Lee" status="in-meeting" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>In Meeting</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Avatar size="lg" name="Sam Wilson" status="focus" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Focus</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Avatar size="lg" name="Maya Lin" status="idle" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Idle</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Avatar size="lg" name="Chris Pratt" status="invisible" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Invisible</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Avatar size="lg" name="Taylor Swift" status="streaming" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Streaming</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Avatar size="lg" name="Robin Hood" status="offline" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Offline</span>
                </div>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
                <Avatar size="md" name="Alex Vance" status="online" />
                <Avatar size="md" name="Sarah Connor" status="busy" />
                <Avatar size="md" name="David Miller" status="dnd" />
                <Avatar size="md" name="Elena Rostova" status="away" />
                <Avatar size="md" name="Jordan Lee" status="in-meeting" />
                <Avatar size="md" name="Sam Wilson" status="focus" />
                <Avatar size="md" name="Maya Lin" status="idle" />
                <Avatar size="md" name="Taylor Swift" status="streaming" />
              </div>
            }
            webCode={`import { Avatar } from '@winplaybox/react';

export default function AvatarPresenceDemo() {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Avatar size="lg" name="Alex Vance" status="online" />
      <Avatar size="lg" name="Sarah Connor" status="busy" />
      <Avatar size="lg" name="David Miller" status="dnd" />
      <Avatar size="lg" name="Elena Rostova" status="away" />
      <Avatar size="lg" name="Jordan Lee" status="in-meeting" />
      <Avatar size="lg" name="Sam Wilson" status="focus" />
      <Avatar size="lg" name="Maya Lin" status="idle" />
      <Avatar size="lg" name="Chris Pratt" status="invisible" />
      <Avatar size="lg" name="Taylor Swift" status="streaming" />
      <Avatar size="lg" name="Robin Hood" status="offline" />
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { Avatar } from '@winplaybox/react-native';

export default function NativeAvatarPresenceDemo() {
  return (
    <View style={{ flexDirection: 'row', gap: 12 }}>
      <Avatar size="md" name="Alex Vance" status="online" />
      <Avatar size="md" name="David Miller" status="dnd" />
      <Avatar size="md" name="Jordan Lee" status="in-meeting" />
      <Avatar size="md" name="Taylor Swift" status="streaming" />
    </View>
  );
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
            webCode={`import { Avatar } from '@winplaybox/react';

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
import { Avatar } from '@winplaybox/react-native';

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
            webCode={`import { Avatar } from '@winplaybox/react';

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
import { Avatar } from '@winplaybox/react-native';

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
            description="Spectra Persona composite grouping an avatar with status badge, display name, primary role, and presence status."
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
import { Avatar } from '@winplaybox/react';

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
import { Avatar } from '@winplaybox/react-native';

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

    case 'badge': {
      const starIcon = (
        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1.5l2.1 4.3 4.7.7-3.4 3.3.8 4.7L8 12.2l-4.2 2.3.8-4.7-3.4-3.3 4.7-.7L8 1.5z" />
        </svg>
      );
      const bellIcon = (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      );

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* Recipe 1: Appearances */}
          <ComponentDemoCard
            id="badge-basic"
            title="01 Appearances (Filled, Ghost, Outline, Tint)"
            description="Badges support four distinct appearances to communicate visual emphasis: filled (high prominence), tint (soft background), outline (subtle perimeter), and ghost (minimal text-only)."
            webPreview={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
                  <Badge appearance="filled" color="brand">Filled</Badge>
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Filled (Default)</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
                  <Badge appearance="tint" color="brand">Tint</Badge>
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Tint</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
                  <Badge appearance="outline" color="brand">Outline</Badge>
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Outline</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
                  <Badge appearance="ghost" color="brand">Ghost</Badge>
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Ghost</span>
                </div>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>
                <Badge appearance="filled">Filled</Badge>
                <Badge appearance="outline">Outline</Badge>
              </div>
            }
            webCode={`import { Badge } from '@winplaybox/react';

export default function BadgeAppearancesDemo() {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <Badge appearance="filled" color="brand">Filled</Badge>
      <Badge appearance="tint" color="brand">Tint</Badge>
      <Badge appearance="outline" color="brand">Outline</Badge>
      <Badge appearance="ghost" color="brand">Ghost</Badge>
    </div>
  );
}`}
            nativeCode={`import { Badge } from '@winplaybox/react-native';

export default function NativeBadgeAppearancesDemo() {
  return (
    <View style={{ flexDirection: 'row', gap: 8 }}>
      <Badge variant="filled">Filled</Badge>
      <Badge variant="outline">Outline</Badge>
    </View>
  );
}`}
          />

          {/* Recipe 2: Semantic Colors */}
          <ComponentDemoCard
            id="badge-colors"
            title="02 Semantic Palette Colors"
            description="Eight curated semantic colors for intent communication: brand (primary), danger (critical/error), important (high-contrast neutral), informative (guidance), severe (urgent warning), subtle (secondary), success (completed), and warning (caution)."
            webPreview={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                <Badge color="brand">Brand</Badge>
                <Badge color="danger">Danger</Badge>
                <Badge color="important">Important</Badge>
                <Badge color="informative">Informative</Badge>
                <Badge color="severe">Severe</Badge>
                <Badge color="subtle">Subtle</Badge>
                <Badge color="success">Success</Badge>
                <Badge color="warning">Warning</Badge>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
                <Badge color="brand">Brand</Badge>
                <Badge color="danger">Danger</Badge>
                <Badge color="success">Success</Badge>
                <Badge color="warning">Warning</Badge>
              </div>
            }
            webCode={`import { Badge } from '@winplaybox/react';

export default function BadgeColorsDemo() {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge color="brand">Brand</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="important">Important</Badge>
      <Badge color="informative">Informative</Badge>
      <Badge color="severe">Severe</Badge>
      <Badge color="subtle">Subtle</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
    </div>
  );
}`}
            nativeCode={`import { Badge } from '@winplaybox/react-native';

export default function NativeBadgeColorsDemo() {
  return (
    <View style={{ flexDirection: 'row', gap: 8 }}>
      <Badge color="brand">Brand</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="success">Success</Badge>
    </View>
  );
}`}
          />

          {/* Recipe 3: Discrete Sizing Scale */}
          <ComponentDemoCard
            id="badge-sizes"
            title="03 Discrete Sizing Scale (Tiny to Extra-Large)"
            description="Six discrete sizing steps: tiny (6px notification dot), extra-small (16px), small (20px), medium (24px default), large (28px), and extra-large (32px)."
            webPreview={
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Badge size="tiny" color="danger" aria-label="Notification dot" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Tiny (6px)</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Badge size="extra-small" color="brand">16px</Badge>
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Extra Small</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Badge size="small" color="brand">20px</Badge>
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Small</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Badge size="medium" color="brand">24px</Badge>
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Medium (Default)</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Badge size="large" color="brand">28px</Badge>
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Large</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Badge size="extra-large" color="brand">32px</Badge>
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Extra Large</span>
                </div>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Badge size="sm">Small</Badge>
                <Badge size="md">Medium</Badge>
                <Badge size="lg">Large</Badge>
              </div>
            }
            webCode={`import { Badge } from '@winplaybox/react';

export default function BadgeSizesDemo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Badge size="tiny" color="danger" aria-label="Unread alert" />
      <Badge size="extra-small" color="brand">Extra Small</Badge>
      <Badge size="small" color="brand">Small</Badge>
      <Badge size="medium" color="brand">Medium</Badge>
      <Badge size="large" color="brand">Large</Badge>
      <Badge size="extra-large" color="brand">Extra Large</Badge>
    </div>
  );
}`}
            nativeCode={`import { Badge } from '@winplaybox/react-native';

export default function NativeBadgeSizesDemo() {
  return (
    <View style={{ flexDirection: 'row', gap: 8 }}>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </View>
  );
}`}
          />

          {/* Recipe 4: Shapes */}
          <ComponentDemoCard
            id="badge-shapes"
            title="04 Silhouettes (Rounded, Circular, Square)"
            description="Geometries tailored for different UI layouts: rounded (4px radius, standard), circular (pill capsule or circle, optimal for counts and icons), and square (0px radius)."
            webPreview={
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Badge shape="rounded" color="brand">Rounded</Badge>
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Rounded (Default)</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Badge shape="circular" color="brand">Circular Pill</Badge>
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Circular</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Badge shape="square" color="brand">Square</Badge>
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Square</span>
                </div>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                <Badge shape="rounded">Rounded</Badge>
                <Badge shape="circular">Circular</Badge>
              </div>
            }
            webCode={`import { Badge } from '@winplaybox/react';

export default function BadgeShapesDemo() {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <Badge shape="rounded" color="brand">Rounded</Badge>
      <Badge shape="circular" color="brand">Circular</Badge>
      <Badge shape="square" color="brand">Square</Badge>
    </div>
  );
}`}
            nativeCode={`import { Badge } from '@winplaybox/react-native';

export default function NativeBadgeShapesDemo() {
  return (
    <View style={{ flexDirection: 'row', gap: 8 }}>
      <Badge shape="rounded">Rounded</Badge>
      <Badge shape="circular">Circular</Badge>
    </View>
  );
}`}
          />

          {/* Recipe 5: Authentic Vector Icons & Status Dots */}
          <ComponentDemoCard
            id="badge-icons"
            title="05 Authentic Vector Icons & Status Dots"
            description="Support for authentic leading or trailing vector icons and dot prefixes without emojis."
            webPreview={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
                <Badge icon={starIcon} iconPosition="before" color="brand">Featured Tier</Badge>
                <Badge icon={<CheckIcon size={12} />} iconPosition="after" color="success">Verified</Badge>
                <Badge dot color="warning">Pending Review</Badge>
                <Badge dot color="danger">Build Failed</Badge>
                <Badge dot color="informative">Syncing</Badge>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                <Badge dot color="success">Online</Badge>
                <Badge dot color="danger">Failed</Badge>
              </div>
            }
            webCode={`import { Badge } from '@winplaybox/react';
import { CheckIcon } from '@winplaybox/icons';

export default function BadgeIconsDemo() {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <Badge icon={<CheckIcon size={12} />} color="success">Verified</Badge>
      <Badge dot color="warning">Pending Review</Badge>
      <Badge dot color="danger">Build Failed</Badge>
    </div>
  );
}`}
            nativeCode={`import { Badge } from '@winplaybox/react-native';

export default function NativeBadgeIconsDemo() {
  return (
    <View style={{ flexDirection: 'row', gap: 8 }}>
      <Badge dot color="success">Online</Badge>
      <Badge dot color="danger">Failed</Badge>
    </View>
  );
}`}
          />

          {/* Recipe 6: CounterBadge & Numeric Overflow */}
          <ComponentDemoCard
            id="badge-counter"
            title="06 CounterBadge & Numeric Overflow (99+)"
            description="Specialized CounterBadge for notifications, unread messages, and metric counts with automatic 99+ formatting and zero suppression."
            webPreview={
              <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <CounterBadge count={3} color="brand" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Low (3)</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <CounterBadge count={42} color="important" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Medium (42)</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <CounterBadge count={128} overflowCount={99} color="danger" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Overflow (99+)</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <CounterBadge count={0} showZero color="subtle" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>showZero (0)</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <CounterBadge count={0} dot color="brand" aria-label="New alerts" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>dot mode on zero</span>
                </div>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                <CounterBadge count={5} />
                <CounterBadge count={120} overflowCount={99} />
              </div>
            }
            webCode={`import { CounterBadge } from '@winplaybox/react';

export default function CounterBadgeDemo() {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <CounterBadge count={3} color="brand" />
      <CounterBadge count={42} color="important" />
      <CounterBadge count={128} overflowCount={99} color="danger" />
      <CounterBadge count={0} showZero color="subtle" />
      <CounterBadge count={0} dot color="brand" aria-label="New alerts" />
    </div>
  );
}`}
            nativeCode={`import { CounterBadge } from '@winplaybox/react-native';

export default function NativeCounterBadgeDemo() {
  return (
    <View style={{ flexDirection: 'row', gap: 8 }}>
      <CounterBadge count={5} />
      <CounterBadge count={120} overflowCount={99} />
    </View>
  );
}`}
          />

          {/* Recipe 7: PresenceBadge & Out-of-Office Halos */}
          <ComponentDemoCard
            id="badge-presence"
            title="07 PresenceBadge & Out-of-Office Halos"
            description="Presence badges communicate live user availability with authentic vector glyphs: available (check), busy (circle), away (clock), dnd (minus), offline (slash), and out-of-office."
            webPreview={
              <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <PresenceBadge status="available" size="medium" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Available</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <PresenceBadge status="busy" size="medium" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Busy</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <PresenceBadge status="away" size="medium" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Away</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <PresenceBadge status="dnd" size="medium" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>DND</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <PresenceBadge status="offline" size="medium" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Offline</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <PresenceBadge status="out-of-office" outOfOffice size="medium" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Out of Office</span>
                </div>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                <PresenceBadge status="available" />
                <PresenceBadge status="busy" />
                <PresenceBadge status="away" />
              </div>
            }
            webCode={`import { PresenceBadge } from '@winplaybox/react';

export default function PresenceBadgeDemo() {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <PresenceBadge status="available" />
      <PresenceBadge status="busy" />
      <PresenceBadge status="away" />
      <PresenceBadge status="dnd" />
      <PresenceBadge status="offline" />
      <PresenceBadge status="out-of-office" outOfOffice />
    </div>
  );
}`}
            nativeCode={`import { PresenceBadge } from '@winplaybox/react-native';

export default function NativePresenceBadgeDemo() {
  return (
    <View style={{ flexDirection: 'row', gap: 8 }}>
      <PresenceBadge status="available" />
      <PresenceBadge status="busy" />
    </View>
  );
}`}
          />

          {/* Recipe 8: Contextual Integrations */}
          <ComponentDemoCard
            id="badge-in-context"
            title="08 Contextual Integrations (Buttons, Avatars, Cards)"
            description="Badges anchored to buttons for notification tallies, table rows for process statuses, and avatar corners for presence indication."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%', maxWidth: 480 }}>
                {/* Bell with counter badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ position: 'relative', display: 'inline-flex' }}>
                    <button
                      type="button"
                      style={{
                        padding: 10,
                        borderRadius: 8,
                        border: '1px solid var(--color-border-subtle, #edebe9)',
                        backgroundColor: 'var(--color-surface-base, #ffffff)',
                        color: 'var(--color-text-primary, #242424)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      aria-label="Notifications"
                    >
                      {bellIcon}
                    </button>
                    <span style={{ position: 'absolute', top: -6, right: -8 }}>
                      <CounterBadge count={14} color="danger" size="small" />
                    </span>
                  </div>

                  {/* Avatar with PresenceBadge */}
                  <div style={{ position: 'relative', display: 'inline-flex' }}>
                    <Avatar name="Sarah Connor" size={48} />
                    <span style={{ position: 'absolute', bottom: -2, right: -2 }}>
                      <PresenceBadge status="available" size="small" />
                    </span>
                  </div>

                  {/* Status chip */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 12px', border: '1px solid var(--color-border-subtle, #edebe9)', borderRadius: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 500 }}>Production Cluster</span>
                    <Badge color="success" size="small">Healthy</Badge>
                  </div>
                </div>

                {/* Table row simulation */}
                <div style={{ border: '1px solid var(--color-border-subtle, #edebe9)', borderRadius: 8, overflow: 'hidden' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', borderBottom: '1px solid var(--color-border-subtle, #edebe9)', backgroundColor: 'var(--color-surface-raised, #fafafa)', fontSize: 12, fontWeight: 600 }}>
                    <span>Deploy Job</span>
                    <span>Status</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', borderBottom: '1px solid var(--color-border-subtle, #edebe9)', fontSize: 13 }}>
                    <span>pipeline-prod-us-east-1</span>
                    <Badge color="success" size="small" appearance="tint">Active</Badge>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', borderBottom: '1px solid var(--color-border-subtle, #edebe9)', fontSize: 13 }}>
                    <span>cache-invalidation-worker</span>
                    <Badge color="warning" size="small" appearance="tint">Pending</Badge>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', fontSize: 13 }}>
                    <span>telemetry-stream-v2</span>
                    <Badge color="danger" size="small" appearance="tint">Failed</Badge>
                  </div>
                </div>
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Avatar name="Sarah Connor" size="md" />
                <Badge color="success" size="sm">Active</Badge>
              </div>
            }
            webCode={`import { CounterBadge, PresenceBadge, Badge, Avatar } from '@winplaybox/react';

export default function BadgeInContextDemo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      {/* Icon with CounterBadge */}
      <div style={{ position: 'relative' }}>
        <button className="icon-btn">🔔</button>
        <span style={{ position: 'absolute', top: -6, right: -8 }}>
          <CounterBadge count={14} color="danger" size="small" />
        </span>
      </div>

      {/* Avatar with PresenceBadge */}
      <div style={{ position: 'relative' }}>
        <Avatar name="Sarah Connor" size={48} />
        <span style={{ position: 'absolute', bottom: -2, right: -2 }}>
          <PresenceBadge status="available" size="small" />
        </span>
      </div>

      {/* Status Badge */}
      <Badge color="success" appearance="tint">Active</Badge>
    </div>
  );
}`}
            nativeCode={`import { Badge, Avatar } from '@winplaybox/react-native';

export default function NativeBadgeInContextDemo() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
      <Avatar name="Sarah Connor" size="md" />
      <Badge color="success" size="sm">Active</Badge>
    </View>
  );
}`}
          />
        </div>
      );
    }

    case 'card':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="card-variants"
            title="Surface Variants (Bordered, Elevated)"
            description="Encapsulate related actions and stats within unified surface containers."
            webPreview={
              <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, width: '100%', maxWidth: 520 }}>
                <Card variant="bordered" padding="md">
                  <Stack gap="xs">
                    <Text variant="heading-sm" weight="semibold">Bordered Card</Text>
                    <Text variant="body-sm" color="secondary">Clean 2D perimeter border.</Text>
                  </Stack>
                </Card>
                <Card variant="elevated" padding="md">
                  <Stack gap="xs">
                    <Text variant="heading-sm" weight="semibold">Elevated Card</Text>
                    <Text variant="body-sm" color="secondary">Subtle elevation shadow.</Text>
                  </Stack>
                </Card>
              </Box>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Card variant="bordered" style={{ width: '100%' }}>
                  <Text variant="heading-sm" weight="semibold">Native Bordered Card</Text>
                  <Text variant="body-sm" color="secondary">Zero-overhead Hermes styling.</Text>
                </Card>
              </div>
            }
            webCode={`import { Card, Stack, Text } from '@winplaybox/react';

export default function CardVariantsDemo() {
  return (
    <Card variant="bordered" padding="md">
      <Stack spacing={4}>
        <Text variant="heading-sm" weight="semibold">Bordered Surface</Text>
        <Text variant="body-sm" color="secondary">Clean 2D perimeter border.</Text>
      </Stack>
    </Card>
  );
}`}
            nativeCode={`import React from 'react';
import { Card, Text } from '@winplaybox/react-native';

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
              <Box style={{ maxWidth: 440, width: '100%' }}>
                <Card variant="bordered" padding="md">
                  <Stack direction="row" justify="between" align="center" style={{ marginBottom: 8 }}>
                    <Text variant="heading-sm" weight="semibold">Cluster Deployment</Text>
                    <Badge variant="success" dot>Operational</Badge>
                  </Stack>
                  <Text variant="body-sm" color="secondary" style={{ marginBottom: 16 }}>
                    Healthy state verified across all 12 worker nodes.
                  </Text>
                  <Stack direction="row" justify="end" align="center" gap="xs">
                    <Button variant="secondary" size="sm">Logs</Button>
                    <Button variant="primary" size="sm">Deploy</Button>
                  </Stack>
                </Card>
              </Box>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Card variant="bordered">
                  <Text variant="heading-sm" weight="semibold">Native Cluster</Text>
                  <Button variant="primary" size="sm" style={{ marginTop: 8 }}>Deploy</Button>
                </Card>
              </div>
            }
            webCode={`import { Card, Badge, Button, Stack, Text } from '@winplaybox/react';

export default function StructuredCardDemo() {
  return (
    <Card variant="bordered" padding="md">
      <Stack direction="row" justify="between" align="center" style={{ marginBottom: 8 }}>
        <Text variant="heading-sm" weight="semibold">Cluster Deployment</Text>
        <Badge variant="success" dot>Operational</Badge>
      </Stack>
      <Text variant="body-sm" color="secondary" style={{ marginBottom: 16 }}>
        Healthy state across nodes.
      </Text>
      <Stack direction="row" justify="end" gap="xs">
        <Button variant="secondary" size="sm">Logs</Button>
        <Button variant="primary" size="sm">Deploy</Button>
      </Stack>
    </Card>
  );
}`}
            nativeCode={`import React from 'react';
import { Card, Button } from '@winplaybox/react-native';

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
              <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, width: '100%', maxWidth: 520 }}>
                <Card variant="bordered" padding="md">
                  <Text size="xs" color="muted" style={{ marginBottom: 4 }}>Monthly Active Users</Text>
                  <Stack direction="row" justify="between" style={{ alignItems: 'baseline' }}>
                    <Text size="2xl" weight="bold">128,450</Text>
                    <Badge variant="success">+14.2%</Badge>
                  </Stack>
                  <Text size="xs" color="secondary" style={{ marginTop: 6 }}>vs. 112,400 last month</Text>
                </Card>

                <Card variant="bordered" padding="md">
                  <Text size="xs" color="muted" style={{ marginBottom: 4 }}>API Error Rate</Text>
                  <Stack direction="row" justify="between" style={{ alignItems: 'baseline' }}>
                    <Text size="2xl" weight="bold">0.018%</Text>
                    <Badge variant="info">Healthy</Badge>
                  </Stack>
                  <Text size="xs" color="secondary" style={{ marginTop: 6 }}>99.98% SLA maintained</Text>
                </Card>
              </Box>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <Card variant="bordered">
                  <Text size="xl" weight="bold">128,450 MAU</Text>
                  <Text size="xs" color="success">+14.2% Growth</Text>
                </Card>
              </div>
            }
            webCode={`import { Card, Badge, Stack, Text } from '@winplaybox/react';

export default function MetricCardDemo() {
  return (
    <Card variant="bordered" padding="md">
      <Text size="xs" color="muted" style={{ marginBottom: 4 }}>Monthly Active Users</Text>
      <Stack direction="row" align="baseline" justify="between">
        <Text size="2xl" weight="bold">128,450</Text>
        <Badge variant="success">+14.2%</Badge>
      </Stack>
      <Text size="xs" color="secondary" style={{ marginTop: 6 }}>vs. 112,400 last month</Text>
    </Card>
  );
}`}
            nativeCode={`import React from 'react';
import { Card, Text } from '@winplaybox/react-native';

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
                  <div style={{ height: 120, background: 'linear-gradient(135deg, var(--color-surface-raised) 0%, var(--color-surface-elevated) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>
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
                  <div style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>Production Design System</div>
                </Card>
              </div>
            }
            webCode={`import React from 'react';
import { Card, Badge, Button } from '@winplaybox/react';

export default function MediaCardDemo(): JSX.Element {
  return (
    <Card variant="bordered" style={{ overflow: 'hidden', padding: 0 }}>
      <div style={{ height: 120, background: 'var(--color-surface-raised)' }} />
      <div style={{ padding: 18 }}>
        <Stack direction="row" justify="between" align="center">
          <Text variant="heading-sm" weight="semibold">Spectra UI v1.0</Text>
          <Badge variant="info">Production</Badge>
        </Stack>
        <Text variant="body-sm" color="secondary" style={{ margin: '8px 0 12px' }}>Comprehensive cross-platform component library.</Text>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button variant="primary" size="sm">Explore Tokens</Button>
          <Button variant="secondary" size="sm">Changelog</Button>
        </div>
      </div>
    </Card>
  );
}`}
            nativeCode={`import React from 'react';
import { Card, Text, Button } from '@winplaybox/react-native';

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
            webCode={`import { Tooltip, Button } from '@winplaybox/react';

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
import { Tooltip, Button } from '@winplaybox/react-native';

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
            webCode={`import { Tooltip, Button } from '@winplaybox/react';
import { SearchIcon } from '@winplaybox/icons';

export default function IconTooltipDemo() {
  return (
    <Tooltip content="Search logs and events">
      <Button variant="secondary" icon={<SearchIcon size={16} />} aria-label="Search" />
    </Tooltip>
  );
}`}
            nativeCode={`import React from 'react';
import { Button } from '@winplaybox/react-native';
import { SearchIcon } from '@winplaybox/icons';

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
            webCode={`import { List, ListItem, ListItemIcon, ListItemText, Badge } from '@winplaybox/react';
import { UserIcon } from '@winplaybox/icons';

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
import { List, ListItem, ListItemText } from '@winplaybox/react-native';

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
            webCode={`import { List, ListItem, ListItemText, Avatar, Badge } from '@winplaybox/react';

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
import { List, ListItem, ListItemText } from '@winplaybox/react-native';

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
            webCode={`import { List, ListItem, ListItemText, Switch } from '@winplaybox/react';

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
import { List, ListItem, ListItemText, Switch } from '@winplaybox/react-native';

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
                    <Text as="h3" variant="heading" style={{ margin: '0 0 8px 0', fontSize: 18, color: 'var(--color-text-primary)' }}>Confirm Token Deployment</Text>
                    <Text as="p" style={{ margin: '0 0 20px 0', color: 'var(--color-text-secondary)', fontSize: 14 }}>
                      Are you sure you want to push these tokens to production?
                    </Text>
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
            webCode={`import { Dialog, Button, Text } from '@winplaybox/react';

export default function ConfirmDialogDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog isOpen={open} onClose={() => setOpen(false)}>
        <div style={{ padding: 24 }}>
          <Text as="h3" variant="heading">Confirm Action</Text>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </div>
      </Dialog>
    </>
  );
}`}
            nativeCode={`import React, { useState } from 'react';
import { Dialog, Button } from '@winplaybox/react-native';

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
                    <Text as="h3" variant="heading" style={{ margin: 0, fontSize: 18, color: 'var(--color-text-primary)' }}>New Spectra Project</Text>
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
            webCode={`import { Dialog, Button, TextInput, Select, Text } from '@winplaybox/react';

export default function FormDialogDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>New Project</Button>
      <Dialog isOpen={open} onClose={() => setOpen(false)}>
        <div style={{ padding: 24 }}>
          <Text as="h3" variant="heading">New Project</Text>
          <TextInput label="Name" placeholder="Project Name" />
          <Button onClick={() => setOpen(false)}>Save</Button>
        </div>
      </Dialog>
    </>
  );
}`}
            nativeCode={`import React, { useState } from 'react';
import { Dialog, Button } from '@winplaybox/react-native';

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
                      <Text as="h3" variant="heading" style={{ margin: 0, fontSize: 18, color: 'var(--color-feedback-error)' }}>Permanently Delete Database?</Text>
                    </div>
                    <Text as="p" style={{ margin: '0 0 20px 0', color: 'var(--color-text-secondary)', fontSize: 14, lineHeight: 1.5 }}>
                      This action cannot be undone. All 14 tables and replica snapshots will be purged immediately.
                    </Text>
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
            webCode={`import { Dialog, Button, Text } from '@winplaybox/react';

export default function DangerDialogDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="danger" onClick={() => setOpen(true)}>Delete</Button>
      <Dialog isOpen={open} onClose={() => setOpen(false)}>
        <div style={{ padding: 24 }}>
          <Text as="h3" variant="heading">Delete Database?</Text>
          <Text as="p">This action cannot be undone.</Text>
          <Button variant="danger" onClick={() => setOpen(false)}>Delete</Button>
        </div>
      </Dialog>
    </>
  );
}`}
            nativeCode={`import React, { useState } from 'react';
import { Dialog, Button } from '@winplaybox/react-native';

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
            webCode={`import { Alert } from '@winplaybox/react';

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
import { Alert } from '@winplaybox/react-native';

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
import { Alert, Button } from '@winplaybox/react';

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
            nativeCode={`import { Alert } from '@winplaybox/react-native';

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
            description="Embeds dedicated action triggers directly within the alert notification banner for immediate remediation (Spectra Actionable Alert)."
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
import { Alert, Button } from '@winplaybox/react';
import { AlertCircleIcon } from '@winplaybox/icons';

export default function ActionableAlertDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 16, border: '1px solid #ef4444', borderRadius: 10, background: 'rgba(239,68,68,0.08)' }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <AlertCircleIcon size={20} color="#dc2626" />
        <Stack spacing={2}>
          <Text weight="bold">Storage Limit Exceeded</Text>
          <Text variant="body-xs" color="secondary">You have utilized 98.4% of your CDN cache.</Text>
        </Stack>
      </div>
      <Button variant="danger" size="sm">Upgrade Tier</Button>
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@winplaybox/react-native';

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
            webCode={`import { Spinner } from '@winplaybox/react';

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
import { Spinner } from '@winplaybox/react-native';

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
            webCode={`import { Button, Spinner } from '@winplaybox/react';

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
            nativeCode={`import { Button } from '@winplaybox/react-native';

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
            webCode={`import { Skeleton } from '@winplaybox/react';

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
import { Skeleton } from '@winplaybox/react-native';

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
import { Skeleton, Button, Avatar } from '@winplaybox/react';

export default function InteractiveSkeletonDemo() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <Button onClick={() => setLoading(!loading)}>Toggle Loading</Button>
      {loading ? (
        <Skeleton variant="rounded" width={320} height={140} />
      ) : (
        <Stack direction="row" gap="sm" align="center" className="profile-card">
          <Avatar name="Sarah Connor" />
          <Text weight="bold">Sarah Connor</Text>
        </Stack>
      )}
    </div>
  );
}`}
            nativeCode={`import { View } from 'react-native';
import { Skeleton } from '@winplaybox/react-native';

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
            webCode={`import { Divider, Button, TextInput } from '@winplaybox/react';

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
import { Divider, Button } from '@winplaybox/react-native';

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
            webCode={`import { Divider, Button } from '@winplaybox/react';

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
import { Divider, Button } from '@winplaybox/react-native';

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
            webCode={`import { Divider } from '@winplaybox/react';

export default function DividerStylesDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Divider variant="solid" />
      <Divider variant="dashed" />
      <Divider variant="dotted" />
    </div>
  );
}`}
            nativeCode={`import { Divider } from '@winplaybox/react-native';

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
            webCode={`import { Chip } from '@winplaybox/react';
import { SparklesIcon } from '@winplaybox/icons';

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
import { Chip } from '@winplaybox/react-native';

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
import { Chip } from '@winplaybox/react';

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
            nativeCode={`import { Chip } from '@winplaybox/react-native';

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
import { Chip, Button } from '@winplaybox/react';

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
            nativeCode={`import { Chip } from '@winplaybox/react-native';

export default function NativeDeletableChip() {
  return <Chip label="Removable Item" onDelete={() => {}} />;
}`}
          />
        </div>
      );

    case 'breadcrumb':
    case 'breadcrumbs':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="breadcrumb-basic"
            title="01 Default Path Hierarchy"
            description="Breadcrumbs display the current navigation hierarchy. Ancestor steps are interactive links with subtle hover backgrounds, while the current page is marked with semibold typography and aria-current='page'."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
                <Breadcrumb
                  items={[
                    { label: 'Home', href: '#' },
                    { label: 'Design System', href: '#' },
                    { label: 'Components', href: '#' },
                    { label: 'Breadcrumb', isCurrent: true },
                  ]}
                />
              </div>
            }
            nativePreview={
              <Breadcrumbs
                items={[
                  { label: 'Home' },
                  { label: 'Components' },
                  { label: 'Breadcrumb', isCurrent: true },
                ]}
              />
            }
            compactCode={`<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Design System', href: '/design' },
    { label: 'Components', href: '/components' },
    { label: 'Breadcrumb', isCurrent: true },
  ]}
/>`}
            webCode={`import { Breadcrumb } from '@winplaybox/react';

export default function BasicBreadcrumbDemo() {
  return (
    <Breadcrumb
      items={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Settings', href: '/settings' },
        { label: 'Team Members', isCurrent: true },
      ]}
    />
  );
}`}
            nativeCode={`import { Breadcrumbs } from '@winplaybox/react-native';

export default function NativeBreadcrumbDemo() {
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
            id="breadcrumb-sizes"
            title="02 Discrete Sizing Scale (Small, Medium, Large)"
            description="Three standard size stops: small (12px font, 12px icon), medium (14px font, 14px icon, default), and large (16px font, 16px icon) for high-density tables or prominent hero sections."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%' }}>
                <div>
                  <span style={{ fontSize: 11, color: 'var(--color-text-muted)', display: 'block', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Small (12px) — Compact Dense UI:
                  </span>
                  <Breadcrumb
                    size="small"
                    items={[
                      { label: 'Storage', href: '#' },
                      { label: 'Volumes', href: '#' },
                      { label: 'vol-prod-01', isCurrent: true },
                    ]}
                  />
                </div>
                <div>
                  <span style={{ fontSize: 11, color: 'var(--color-text-muted)', display: 'block', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Medium (14px) — Standard Baseline:
                  </span>
                  <Breadcrumb
                    size="medium"
                    items={[
                      { label: 'Storage', href: '#' },
                      { label: 'Volumes', href: '#' },
                      { label: 'vol-prod-01', isCurrent: true },
                    ]}
                  />
                </div>
                <div>
                  <span style={{ fontSize: 11, color: 'var(--color-text-muted)', display: 'block', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Large (16px) — Prominent Navigation:
                  </span>
                  <Breadcrumb
                    size="large"
                    items={[
                      { label: 'Storage', href: '#' },
                      { label: 'Volumes', href: '#' },
                      { label: 'vol-prod-01', isCurrent: true },
                    ]}
                  />
                </div>
              </div>
            }
            compactCode={`<Breadcrumb size="small" items={items} />
<Breadcrumb size="medium" items={items} />
<Breadcrumb size="large" items={items} />`}
            webCode={`import { Breadcrumb } from '@winplaybox/react';

export default function BreadcrumbSizesDemo() {
  return (
    <>
      <Breadcrumb size="small" items={[{ label: 'Files', href: '#' }, { label: 'Doc.txt', isCurrent: true }]} />
      <Breadcrumb size="medium" items={[{ label: 'Files', href: '#' }, { label: 'Doc.txt', isCurrent: true }]} />
      <Breadcrumb size="large" items={[{ label: 'Files', href: '#' }, { label: 'Doc.txt', isCurrent: true }]} />
    </>
  );
}`}
            nativePreview={
              <Breadcrumbs
                items={[
                  { label: 'Files' },
                  { label: 'Volumes' },
                  { label: 'vol-prod-01', isCurrent: true },
                ]}
              />
            }
            nativeCode={`import { Breadcrumbs } from '@winplaybox/react-native';

export default function NativeBreadcrumbSizes() {
  return (
    <Breadcrumbs
      items={[
        { label: 'Files' },
        { label: 'Volumes' },
        { label: 'vol-prod-01', isCurrent: true },
      ]}
    />
  );
}`}
          />

          <ComponentDemoCard
            id="breadcrumb-dividers"
            title="03 Chevron & Slash Delimiters"
            description="Supports standard directional Chevron separators or slash delimiters for file system representations. Dividers are aria-hidden and ignored by assistive technology."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18, width: '100%' }}>
                <div>
                  <span style={{ fontSize: 11, color: 'var(--color-text-muted)', display: 'block', marginBottom: 6 }}>
                    Chevron Divider (Default):
                  </span>
                  <Breadcrumb
                    dividerType="chevron"
                    items={[
                      { label: 'Spectra UI', href: '#' },
                      { label: 'Packages', href: '#' },
                      { label: 'React', href: '#' },
                      { label: 'Navigation', isCurrent: true },
                    ]}
                  />
                </div>
                <div>
                  <span style={{ fontSize: 11, color: 'var(--color-text-muted)', display: 'block', marginBottom: 6 }}>
                    Slash Divider (/):
                  </span>
                  <Breadcrumb
                    dividerType="slash"
                    items={[
                      { label: 'Spectra UI', href: '#' },
                      { label: 'Packages', href: '#' },
                      { label: 'React', href: '#' },
                      { label: 'Navigation', isCurrent: true },
                    ]}
                  />
                </div>
              </div>
            }
            compactCode={`<Breadcrumb dividerType="chevron" items={items} />
<Breadcrumb dividerType="slash" items={items} />`}
            webCode={`import { Breadcrumb } from '@winplaybox/react';

export default function DividersDemo() {
  return (
    <div>
      <Breadcrumb dividerType="chevron" items={items} />
      <Breadcrumb dividerType="slash" items={items} />
    </div>
  );
}`}
            nativePreview={
              <Breadcrumbs
                separator="/"
                items={[
                  { label: 'Spectra' },
                  { label: 'Packages' },
                  { label: 'React', isCurrent: true },
                ]}
              />
            }
            nativeCode={`import { Breadcrumbs } from '@winplaybox/react-native';

export default function NativeDividersDemo() {
  return (
    <Breadcrumbs
      separator="/"
      items={[
        { label: 'Spectra' },
        { label: 'Packages' },
        { label: 'React', isCurrent: true },
      ]}
    />
  );
}`}
          />

          <ComponentDemoCard
            id="breadcrumb-with-icons"
            title="04 Vector Icons per Crumb"
            description="Authentic SVG vector icons (HomeIcon, FolderIcon, FileTextIcon) visually identify entity types, strictly centered and aligned per design system standards."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
                <Breadcrumb>
                  <BreadcrumbItem>
                    <BreadcrumbButton href="#home" icon={<HomeIcon size={14} />}>
                      Home
                    </BreadcrumbButton>
                  </BreadcrumbItem>
                  <BreadcrumbDivider />
                  <BreadcrumbItem>
                    <BreadcrumbButton href="#documents" icon={<FolderIcon size={14} />}>
                      Documents
                    </BreadcrumbButton>
                  </BreadcrumbItem>
                  <BreadcrumbDivider />
                  <BreadcrumbItem>
                    <BreadcrumbButton href="#projects" icon={<FolderIcon size={14} />}>
                      Enterprise
                    </BreadcrumbButton>
                  </BreadcrumbItem>
                  <BreadcrumbDivider />
                  <BreadcrumbItem current>
                    <BreadcrumbButton current icon={<FileTextIcon size={14} />}>
                      Quarterly_Report.docx
                    </BreadcrumbButton>
                  </BreadcrumbItem>
                </Breadcrumb>
              </div>
            }
            compactCode={`<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbButton href="/" icon={<HomeIcon size={14} />}>Home</BreadcrumbButton>
  </BreadcrumbItem>
  <BreadcrumbDivider />
  <BreadcrumbItem>
    <BreadcrumbButton href="/docs" icon={<FolderIcon size={14} />}>Documents</BreadcrumbButton>
  </BreadcrumbItem>
  <BreadcrumbDivider />
  <BreadcrumbItem current>
    <BreadcrumbButton current icon={<FileTextIcon size={14} />}>Report.docx</BreadcrumbButton>
  </BreadcrumbItem>
</Breadcrumb>`}
            webCode={`import { Breadcrumb, BreadcrumbItem, BreadcrumbButton, BreadcrumbDivider } from '@winplaybox/react';
import { HomeIcon, FolderIcon, FileTextIcon } from '@winplaybox/icons';

export default function WithIconsDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbButton href="/" icon={<HomeIcon size={14} />}>Home</BreadcrumbButton>
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem>
        <BreadcrumbButton href="/docs" icon={<FolderIcon size={14} />}>Documents</BreadcrumbButton>
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem current>
        <BreadcrumbButton current icon={<FileTextIcon size={14} />}>Q4_Report.docx</BreadcrumbButton>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}`}
            nativePreview={
              <Breadcrumbs
                items={[
                  { label: 'Home' },
                  { label: 'Documents' },
                  { label: 'Report.docx', isCurrent: true },
                ]}
              />
            }
            nativeCode={`import { Breadcrumbs } from '@winplaybox/react-native';

export default function NativeWithIconsDemo() {
  return (
    <Breadcrumbs
      items={[
        { label: 'Home' },
        { label: 'Documents' },
        { label: 'Report.docx', isCurrent: true },
      ]}
    />
  );
}`}
          />

          <ComponentDemoCard
            id="breadcrumb-overflow"
            title="05 Responsive Overflow Menu"
            description="Deep navigation hierarchies automatically collapse intermediate crumbs into an accessible ellipsis dropdown menu (...), keeping the first and current page visible."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%', maxWidth: 440 }}>
                <span style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>
                  Constrained layout (collapses 6 items down to max 3 with interactive menu):
                </span>
                <div style={{ padding: 12, border: '1px solid var(--color-border-subtle)', borderRadius: 8, background: 'var(--color-bg-subtle)' }}>
                  <Breadcrumb
                    maxItems={3}
                    items={[
                      { label: 'Workspaces', href: '#ws', icon: <HomeIcon size={14} /> },
                      { label: 'Spectra UI', href: '#spectra' },
                      { label: 'Packages', href: '#pkgs' },
                      { label: 'React Suite', href: '#react' },
                      { label: 'Navigation', href: '#nav' },
                      { label: 'Breadcrumb.tsx', isCurrent: true },
                    ]}
                  />
                </div>
              </div>
            }
            compactCode={`<Breadcrumb
  maxItems={3}
  items={[
    { label: 'Workspaces', href: '/ws' },
    { label: 'Spectra UI', href: '/spectra' },
    { label: 'Packages', href: '/pkgs' },
    { label: 'React Suite', href: '/react' },
    { label: 'Breadcrumb.tsx', isCurrent: true },
  ]}
/>`}
            webCode={`import { Breadcrumb } from '@winplaybox/react';

export default function OverflowBreadcrumbDemo() {
  return (
    <div style={{ maxWidth: 400 }}>
      <Breadcrumb
        maxItems={3}
        items={[
          { label: 'Home', href: '/' },
          { label: 'Organization', href: '/org' },
          { label: 'Engineering', href: '/eng' },
          { label: 'Design Systems', href: '/ds' },
          { label: 'Components', href: '/components' },
          { label: 'Breadcrumb.tsx', isCurrent: true },
        ]}
      />
    </div>
  );
}`}
            nativePreview={
              <Breadcrumbs
                items={[
                  { label: 'Workspaces' },
                  { label: '...' },
                  { label: 'Breadcrumb.tsx', isCurrent: true },
                ]}
              />
            }
            nativeCode={`import { Breadcrumbs } from '@winplaybox/react-native';

export default function NativeOverflowDemo() {
  return (
    <Breadcrumbs
      items={[
        { label: 'Workspaces' },
        { label: '...' },
        { label: 'Breadcrumb.tsx', isCurrent: true },
      ]}
    />
  );
}`}
          />

          <ComponentDemoCard
            id="breadcrumb-current-page"
            title="06 Current Page Differentiation"
            description="The current page is visually distinct with semibold typography and neutral primary text. It renders non-interactively to prevent cyclical refreshes, marked with aria-current='page'."
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
                <Breadcrumb>
                  <BreadcrumbItem>
                    <BreadcrumbButton href="#home">Home</BreadcrumbButton>
                  </BreadcrumbItem>
                  <BreadcrumbDivider />
                  <BreadcrumbItem>
                    <BreadcrumbButton href="#products">Products</BreadcrumbButton>
                  </BreadcrumbItem>
                  <BreadcrumbDivider />
                  <BreadcrumbItem>
                    <BreadcrumbButton href="#laptops">Laptops</BreadcrumbButton>
                  </BreadcrumbItem>
                  <BreadcrumbDivider />
                  <BreadcrumbItem current>
                    <BreadcrumbButton current>
                      Spectra ProBook 16 (Current Active Page)
                    </BreadcrumbButton>
                  </BreadcrumbItem>
                </Breadcrumb>
              </div>
            }
            compactCode={`<Breadcrumb>
  <BreadcrumbItem><BreadcrumbButton href="/">Home</BreadcrumbButton></BreadcrumbItem>
  <BreadcrumbDivider />
  <BreadcrumbItem><BreadcrumbButton href="/products">Products</BreadcrumbButton></BreadcrumbItem>
  <BreadcrumbDivider />
  <BreadcrumbItem current>
    <BreadcrumbButton current>Spectra ProBook 16</BreadcrumbButton>
  </BreadcrumbItem>
</Breadcrumb>`}
            webCode={`import { Breadcrumb, BreadcrumbItem, BreadcrumbButton, BreadcrumbDivider } from '@winplaybox/react';

export default function CurrentPageDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbItem><BreadcrumbButton href="/">Home</BreadcrumbButton></BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem><BreadcrumbButton href="/products">Products</BreadcrumbButton></BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem current>
        <BreadcrumbButton current>Spectra ProBook 16</BreadcrumbButton>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}`}
            nativePreview={
              <Breadcrumbs
                items={[
                  { label: 'Home' },
                  { label: 'Products' },
                  { label: 'Spectra ProBook 16', isCurrent: true },
                ]}
              />
            }
            nativeCode={`import { Breadcrumbs } from '@winplaybox/react-native';

export default function NativeCurrentPageDemo() {
  return (
    <Breadcrumbs
      items={[
        { label: 'Home' },
        { label: 'Products' },
        { label: 'Spectra ProBook 16', isCurrent: true },
      ]}
    />
  );
}`}
          />

          <ComponentDemoCard
            id="breadcrumb-non-interactive"
            title="07 Non-interactive File Path Pattern"
            description="Informational path string for task flows, audit logs, or drawers where navigation away is undesirable, following the Fluent 2 non-interactive file path pattern."
            webPreview={
              <div style={{ background: 'var(--color-bg-subtle, #f8fafc)', padding: 14, borderRadius: 8, border: '1px solid var(--color-border-subtle, #e2e8f0)', width: '100%' }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', display: 'block', marginBottom: 8 }}>
                  Audit Log Destination (Informational Wayfinding):
                </span>
                <Breadcrumb dividerType="slash">
                  <BreadcrumbItem>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: 13, fontFamily: 'monospace' }}>var</span>
                  </BreadcrumbItem>
                  <BreadcrumbDivider />
                  <BreadcrumbItem>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: 13, fontFamily: 'monospace' }}>log</span>
                  </BreadcrumbItem>
                  <BreadcrumbDivider />
                  <BreadcrumbItem>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: 13, fontFamily: 'monospace' }}>nginx</span>
                  </BreadcrumbItem>
                  <BreadcrumbDivider />
                  <BreadcrumbItem current>
                    <span style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: 13, fontFamily: 'monospace' }}>
                      access.log
                    </span>
                  </BreadcrumbItem>
                </Breadcrumb>
              </div>
            }
            compactCode={`<Breadcrumb dividerType="slash">
  <BreadcrumbItem><span style={{ fontFamily: 'monospace' }}>var</span></BreadcrumbItem>
  <BreadcrumbDivider />
  <BreadcrumbItem><span style={{ fontFamily: 'monospace' }}>log</span></BreadcrumbItem>
  <BreadcrumbDivider />
  <BreadcrumbItem current><span style={{ fontFamily: 'monospace', fontWeight: 600 }}>access.log</span></BreadcrumbItem>
</Breadcrumb>`}
            webCode={`import { Breadcrumb, BreadcrumbItem, BreadcrumbDivider } from '@winplaybox/react';

export default function NonInteractivePathDemo() {
  return (
    <div style={{ fontFamily: 'monospace' }}>
      <Breadcrumb dividerType="slash">
        <BreadcrumbItem><span>var</span></BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem><span>log</span></BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem current><span>access.log</span></BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}`}
            nativePreview={
              <Breadcrumbs
                separator="/"
                items={[
                  { label: 'var' },
                  { label: 'log' },
                  { label: 'nginx' },
                  { label: 'access.log', isCurrent: true },
                ]}
              />
            }
            nativeCode={`import { Breadcrumbs } from '@winplaybox/react-native';

export default function NativeNonInteractivePath() {
  return (
    <Breadcrumbs
      separator="/"
      items={[
        { label: 'var' },
        { label: 'log' },
        { label: 'nginx' },
        { label: 'access.log', isCurrent: true },
      ]}
    />
  );
}`}
          />

          <ComponentDemoCard
            id="breadcrumb-in-context"
            title="08 Contextual Header Wayfinding"
            description="Enterprise application header bar integration: breadcrumb situated on the left for clear wayfinding, paired with quick actions and settings triggers."
            webPreview={
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 18px',
                  borderRadius: 8,
                  border: '1px solid var(--color-border-subtle)',
                  background: 'var(--color-bg-surface, #ffffff)',
                  width: '100%',
                  flexWrap: 'wrap',
                  gap: 12,
                }}
              >
                <Breadcrumb size="small">
                  <BreadcrumbItem>
                    <BreadcrumbButton href="#home" icon={<HomeIcon size={12} />}>
                      Console
                    </BreadcrumbButton>
                  </BreadcrumbItem>
                  <BreadcrumbDivider />
                  <BreadcrumbItem>
                    <BreadcrumbButton href="#deployments">Deployments</BreadcrumbButton>
                  </BreadcrumbItem>
                  <BreadcrumbDivider />
                  <BreadcrumbItem current>
                    <BreadcrumbButton current icon={<SettingsIcon size={12} />}>
                      Cluster Config
                    </BreadcrumbButton>
                  </BreadcrumbItem>
                </Breadcrumb>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Button size="sm" variant="secondary">View Docs</Button>
                  <Button size="sm" variant="primary">Deploy Node</Button>
                </div>
              </div>
            }
            compactCode={`<div className="header-bar">
  <Breadcrumb size="small" items={navItems} />
  <div className="actions">
    <Button size="sm" variant="secondary">Docs</Button>
    <Button size="sm" variant="primary">Deploy</Button>
  </div>
</div>`}
            webCode={`import { Breadcrumb, Button } from '@winplaybox/react';
import { HomeIcon, SettingsIcon } from '@winplaybox/icons';

export default function HeaderWayfindingDemo() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Breadcrumb
        size="small"
        items={[
          { label: 'Console', href: '/', icon: <HomeIcon size={12} /> },
          { label: 'Deployments', href: '/deployments' },
          { label: 'Cluster Config', isCurrent: true, icon: <SettingsIcon size={12} /> },
        ]}
      />
      <Button size="sm" variant="primary">Deploy Node</Button>
    </div>
  );
}`}
            nativePreview={
              <Breadcrumbs
                items={[
                  { label: 'Console' },
                  { label: 'Deployments' },
                  { label: 'Cluster Config', isCurrent: true },
                ]}
              />
            }
            nativeCode={`import { Breadcrumbs } from '@winplaybox/react-native';

export default function NativeHeaderWayfinding() {
  return (
    <Breadcrumbs
      items={[
        { label: 'Console' },
        { label: 'Deployments' },
        { label: 'Cluster Config', isCurrent: true },
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
            description="Combines direct execution of the primary action with a flyout dropdown menu for alternative strategies (Spectra Split Action)."
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
import { SplitButton } from '@winplaybox/react';

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
            nativeCode={`import { Button } from '@winplaybox/react-native';

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
import { SplitButton } from '@winplaybox/react';

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
            nativeCode={`import { Button } from '@winplaybox/react-native';

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
import { SplitButton } from '@winplaybox/react';

export default function SplitSizesDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <SplitButton size="sm" options={[{ label: 'Option A' }]}>Small</SplitButton>
      <SplitButton size="md" options={[{ label: 'Option B' }]}>Medium</SplitButton>
      <SplitButton size="lg" options={[{ label: 'Option C' }]}>Large</SplitButton>
    </div>
  );
}`}
            nativeCode={`import { Button } from '@winplaybox/react-native';

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
            description="High prominence button pairing a headline label with explanatory secondary text (Spectra Compound Action)."
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
import { CompoundButton } from '@winplaybox/react';

export default function CompoundDemo(): JSX.Element {
  return (
    <CompoundButton variant="primary" subtitle="Deploy build to staging">
      Deploy Staging
    </CompoundButton>
  );
}`}
            nativeCode={`import { Button } from '@winplaybox/react-native';

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
import { CompoundButton } from '@winplaybox/react';
import { SparklesIcon } from '@winplaybox/icons';

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
            nativeCode={`import { Button } from '@winplaybox/react-native';

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
            description="Contiguous buttons sharing joined borders with unified radii."
            webPreview={
              <ButtonGroup variant="secondary">
                <Button variant="primary">Day</Button>
                <Button variant="secondary">Week</Button>
                <Button variant="secondary">Month</Button>
              </ButtonGroup>
            }
            nativePreview={<Button variant="secondary">Day | Week | Month</Button>}
            webCode={`import React from 'react';
import { ButtonGroup, Button } from '@winplaybox/react';

export default function ButtonGroupSegmentedDemo(): JSX.Element {
  return (
    <ButtonGroup variant="secondary">
      <Button variant="primary">Day</Button>
      <Button variant="secondary">Week</Button>
      <Button variant="secondary">Month</Button>
    </ButtonGroup>
  );
}`}
            nativeCode={`import { View, Button } from '@winplaybox/react-native';

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
import { ButtonGroup, Button } from '@winplaybox/react';

export default function ButtonGroupVerticalDemo(): JSX.Element {
  return (
    <ButtonGroup orientation="vertical">
      <Button size="sm">Top</Button>
      <Button size="sm">Middle</Button>
      <Button size="sm">Bottom</Button>
    </ButtonGroup>
  );
}`}
            nativeCode={`import { View, Button } from '@winplaybox/react-native';

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
import { IconButton } from '@winplaybox/react';
import { SearchIcon, CheckIcon, CloseIcon } from '@winplaybox/icons';

export default function IconButtonShapesDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <IconButton icon={<SearchIcon size={18} />} aria-label="Search" variant="primary" shape="circle" />
      <IconButton icon={<CheckIcon size={18} />} aria-label="Confirm" variant="secondary" shape="rounded" />
      <IconButton icon={<CloseIcon size={18} />} aria-label="Dismiss" variant="danger" shape="square" />
    </div>
  );
}`}
            nativeCode={`import { IconButton } from '@winplaybox/react-native';

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
import { Slider } from '@winplaybox/react';

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
import { Slider } from '@winplaybox/react';

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
import { Rating } from '@winplaybox/react';

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
import { Rating } from '@winplaybox/react';

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
import { Textarea } from '@winplaybox/react';

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
import { AvatarGroup, Avatar } from '@winplaybox/react';

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
import { Tag } from '@winplaybox/react';

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
import { Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell, Badge } from '@winplaybox/react';

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
import { Statistic } from '@winplaybox/react';

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
import { Timeline, TimelineItem } from '@winplaybox/react';

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
import { ProgressBar } from '@winplaybox/react';

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
import { Toast } from '@winplaybox/react';

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
import { Pagination } from '@winplaybox/react';

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
import { Stepper } from '@winplaybox/react';

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
import { Menu, MenuItem } from '@winplaybox/react';
import { CopyIcon, CloseIcon } from '@winplaybox/icons';

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

    case 'box':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="box-surfaces"
            title="Polymorphic Box Container & Surfaces"
            description="Foundational structural primitive adapting to any HTML element with elevation shadows."
            webPreview={
              <Box
                style={{
                  padding: '24px 32px',
                  backgroundColor: 'var(--color-surface-elevated)',
                  borderRadius: 8,
                  border: '1px solid var(--color-border-subtle)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  maxWidth: 380,
                }}
              >
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>Polymorphic Box Container</div>
                <div style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
                  Inherits theme background and border radius tokens.
                </div>
              </Box>
            }
            nativePreview={<Text>Native Box Container</Text>}
            webCode={`import React from 'react';
import { Box } from '@winplaybox/react';

export default function BoxDemo(): JSX.Element {
  return (
    <Box as="section" style={{ padding: 24, background: 'var(--color-surface-elevated)' }}>
      <Text variant="heading-sm" weight="bold">Box Container</Text>
    </Box>
  );
}`}
            nativeCode={`import { View, Text } from 'react-native';

export default function NativeBoxDemo() {
  return <View style={{ padding: 24 }}><Text>Box</Text></View>;
}`}
          />
        </div>
      );

    case 'container':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="container-breakpoints"
            title="Responsive Viewport Containment"
            description="Centers content with fluid max-width constraints calibrated to responsive breakpoints."
            webPreview={
              <div style={{ width: '100%', maxWidth: 500 }}>
                <Container size="md" style={{ padding: 20, backgroundColor: 'var(--color-surface-elevated)', borderRadius: 8, border: '1px dashed var(--color-action-primary)', textAlign: 'center' }}>
                  <span style={{ fontWeight: 600, color: 'var(--color-action-primary)', fontSize: 13 }}>Container size="md"</span>
                  <p style={{ margin: '6px 0 0', fontSize: 12, color: 'var(--color-text-muted)' }}>Responsive horizontal padding</p>
                </Container>
              </div>
            }
            nativePreview={<Text>Native Container</Text>}
            webCode={`import React from 'react';
import { Container } from '@winplaybox/react';

export default function ContainerDemo(): JSX.Element {
  return (
    <Container size="md">
      <div>Constrained Page Body</div>
    </Container>
  );
}`}
            nativeCode={`import { View, Text } from 'react-native';

export default function NativeContainerDemo() {
  return <View style={{ maxWidth: 400 }}><Text>Container</Text></View>;
}`}
          />
        </div>
      );

    case 'grid':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="grid-12col"
            title="12-Column Responsive Layout Grid"
            description="Structured layout grid supporting configurable column divisions and spacing tokens."
            webPreview={
              <div style={{ width: '100%', maxWidth: 480 }}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Box style={{ padding: 14, textAlign: 'center', background: 'var(--color-surface-elevated)', borderRadius: 6, border: '1px solid var(--color-border-subtle)', fontSize: 12 }}>1/3</Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box style={{ padding: 14, textAlign: 'center', background: 'var(--color-surface-elevated)', borderRadius: 6, border: '1px solid var(--color-border-subtle)', fontSize: 12 }}>2/3</Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box style={{ padding: 14, textAlign: 'center', background: 'var(--color-surface-elevated)', borderRadius: 6, border: '1px solid var(--color-border-subtle)', fontSize: 12 }}>3/3</Box>
                  </Grid>
                </Grid>
              </div>
            }
            nativePreview={<Text>Native Grid</Text>}
            webCode={`import React from 'react';
import { Grid, Box } from '@winplaybox/react';

export default function GridDemo(): JSX.Element {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Box>Col 1</Box>
      </Grid>
      <Grid item xs={4}>
        <Box>Col 2</Box>
      </Grid>
      <Grid item xs={4}>
        <Box>Col 3</Box>
      </Grid>
    </Grid>
  );
}`}
            nativeCode={`import { View, Text } from 'react-native';

export default function NativeGridDemo() {
  return <View style={{ flexDirection: 'row' }}><Text>Grid</Text></View>;
}`}
          />
        </div>
      );

    case 'stack':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="stack-flex"
            title="Directional Flex Stack & Spacing"
            description="Convenient flex layout primitive managing gap alignment and direction without custom CSS."
            webPreview={
              <Stack direction="row" gap="md" align="center">
                <Button variant="primary" size="sm">Primary</Button>
                <Button variant="secondary" size="sm">Secondary</Button>
                <Button variant="tertiary" size="sm">Tertiary</Button>
              </Stack>
            }
            nativePreview={<Text>Native Stack</Text>}
            webCode={`import React from 'react';
import { Stack, Button } from '@winplaybox/react';

export default function StackDemo(): JSX.Element {
  return (
    <Stack direction="row" gap="md">
      <Button variant="primary">Action</Button>
      <Button variant="secondary">Cancel</Button>
    </Stack>
  );
}`}
            nativeCode={`import { View, Text } from 'react-native';

export default function NativeStackDemo() {
  return <View style={{ flexDirection: 'row', gap: 12 }}><Text>Stack</Text></View>;
}`}
          />
        </div>
      );

    case 'bottom-nav':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="bottom-nav-mobile"
            title="Mobile Bottom Navigation Bar"
            description="Persistent bottom action bar for mobile viewports with icon labels and badge indicators."
            webPreview={
              <div style={{ width: '100%', maxWidth: 340, borderRadius: 10, overflow: 'hidden', border: '1px solid var(--color-border-subtle)' }}>
                <BottomNav
                  items={[
                    { id: 'tab1', label: 'Feed', icon: <SearchIcon size={18} /> },
                    { id: 'tab2', label: 'Starred', icon: <SparklesIcon size={18} /> },
                    { id: 'tab3', label: 'Account', icon: <UserIcon size={18} /> },
                  ]}
                  activeId="tab1"
                  onChange={() => {}}
                />
              </div>
            }
            nativePreview={<Text>Native BottomNav</Text>}
            webCode={`import React, { useState } from 'react';
import { BottomNav } from '@winplaybox/react';
import { SearchIcon, SparklesIcon, UserIcon } from '@winplaybox/icons';

export default function BottomNavDemo(): JSX.Element {
  const [active, setActive] = useState('feed');

  return (
    <BottomNav
      items={[
        { id: 'feed', label: 'Feed', icon: <SearchIcon size={18} /> },
        { id: 'starred', label: 'Starred', icon: <SparklesIcon size={18} /> },
        { id: 'account', label: 'Account', icon: <UserIcon size={18} /> },
      ]}
      activeId={active}
      onChange={setActive}
    />
  );
}`}
            nativeCode={`import { View, Text } from 'react-native';

export default function NativeBottomNavDemo() {
  return <View><Text>Bottom Navigation</Text></View>;
}`}
          />
        </div>
      );

    case 'platform-chassis':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="platform-chassis-simulator"
            title="Multi-Platform Device Chassis Chrome"
            description="Faithfully mirrors native system chrome and viewports for Web, iOS, Android, macOS, and Windows."
            webPreview={
              <div style={{ width: '100%', maxWidth: 380 }}>
                <PlatformChassis platform="web" title="Spectra UI App">
                  <Stack gap="xs" align="center" style={{ padding: 14 }}>
                    <Text variant="heading-xs" weight="semibold">Chassis Sandbox</Text>
                    <Text variant="body-xs" color="secondary">
                      Simulating authentic platform chrome.
                    </Text>
                  </Stack>
                </PlatformChassis>
              </div>
            }
            nativePreview={<Text>Platform Chassis</Text>}
            webCode={`import React from 'react';
import { PlatformChassis } from '@winplaybox/react';

export default function ChassisDemo(): JSX.Element {
  return (
    <PlatformChassis platform="macos" title="Design System">
      <p>macOS Desktop Chrome</p>
    </PlatformChassis>
  );
}`}
            nativeCode={`import { View, Text } from 'react-native';

export default function NativeChassisDemo() {
  return <View><Text>Chassis</Text></View>;
}`}
          />
        </div>
      );

    case 'color-picker':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="color-picker-swatches"
            title="Palette Swatches & Hex/RGB Input"
            description="Interactive color selection with preset palette swatches and direct hexadecimal input."
            webPreview={
              <div style={{ maxWidth: 300, width: '100%' }}>
                <ColorPicker
                  label="Accent Color Token"
                  defaultValue="#2563EB"
                  description="Choose brand primary accent"
                />
              </div>
            }
            nativePreview={<Text>Color Picker</Text>}
            webCode={`import React, { useState } from 'react';
import { ColorPicker } from '@winplaybox/react';

export default function ColorPickerDemo(): JSX.Element {
  const [color, setColor] = useState('#2563EB');

  return (
    <ColorPicker
      label="Brand Color"
      value={color}
      onChange={setColor}
    />
  );
}`}
            nativeCode={`import { View, Text } from 'react-native';

export default function NativeColorPickerDemo() {
  return <View><Text>Color Picker</Text></View>;
}`}
          />
        </div>
      );

    case 'radio-group':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ComponentDemoCard
            id="radio-group-orientations"
            title="Vertical & Horizontal Radio Groups"
            description="Accessible radio button collection with keyboard roving focus and status descriptions."
            webPreview={
              <div style={{ maxWidth: 360, width: '100%' }}>
                <RadioGroup value="cloud" onChange={() => {}}>
                  <Radio value="cloud" label="Cloud Native Hosting (AWS / GCP)" />
                  <Radio value="onprem" label="On-Premises Dedicated Cluster" />
                  <Radio value="edge" label="Global Edge Distribution" />
                </RadioGroup>
              </div>
            }
            nativePreview={<Text>Radio Group</Text>}
            webCode={`import React, { useState } from 'react';
import { RadioGroup, Radio } from '@winplaybox/react';

export default function RadioGroupDemo(): JSX.Element {
  const [val, setVal] = useState('cloud');

  return (
    <RadioGroup value={val} onChange={setVal}>
      <Radio value="cloud" label="Cloud Native" />
      <Radio value="onprem" label="On-Premises" />
    </RadioGroup>
  );
}`}
            nativeCode={`import { View, Text } from 'react-native';

export default function NativeRadioGroupDemo() {
  return <View><Text>Radio Group</Text></View>;
}`}
          />
        </div>
      );

    case 'copy-button':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* Demo 1: Variants & Feedback */}
          <ComponentDemoCard
            id="copy-button-variants"
            title="Action Variants & Label Feedback"
            description="CopyButton seamlessly copies text to the system clipboard and transitions smoothly into success confirmation state with zero emoji vector checkmark icons."
            compactCode={`<CopyButton variant="primary" value="npm i @winplaybox/react" label="Install Command" />
<CopyButton variant="secondary" value="Spectra UI Design System" label="Copy Brand Token" />
<CopyButton variant="tertiary" value="export const THEME = 'dark';" label="Copy Code Snippet" />`}
            webPreview={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                <CopyButton variant="primary" value="npm i @winplaybox/react" label="Install Command" />
                <CopyButton variant="secondary" value="Spectra UI Design System" label="Copy Brand Token" />
                <CopyButton variant="tertiary" value="export const THEME = 'dark';" label="Copy Code Snippet" />
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
                <Button variant="primary" style={{ width: '100%' }}>Copy Install Command</Button>
                <Button variant="secondary" style={{ width: '100%' }}>Copy Brand Token</Button>
              </div>
            }
            webCode={`import React from 'react';
import { CopyButton } from '@winplaybox/react';

export default function CopyButtonVariantsDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <CopyButton variant="primary" value="npm i @winplaybox/react" label="Install Command" />
      <CopyButton variant="secondary" value="Spectra UI Design System" label="Copy Brand Token" />
      <CopyButton variant="tertiary" value="export const THEME = 'dark';" label="Copy Code Snippet" />
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { CopyButton } from '@winplaybox/react-native';

export default function NativeCopyButtonDemo(): JSX.Element {
  return (
    <View style={{ gap: 10 }}>
      <CopyButton value="npm i @winplaybox/react" label="Install Command" />
    </View>
  );
}`}
          />

          {/* Demo 2: Icon Only & Sizing */}
          <ComponentDemoCard
            id="copy-button-icon-only"
            title="Icon-Only Compact Mode & Sizing"
            description="When label is omitted, CopyButton renders a compact square action trigger calibrated to sm (32px), md (40px), and lg (48px) scales."
            compactCode={`<CopyButton size="sm" value="sm-compact-token" aria-label="Copy Small Token" />
<CopyButton size="md" value="md-standard-token" aria-label="Copy Medium Token" />
<CopyButton size="lg" value="lg-touch-token" aria-label="Copy Large Token" />`}
            webPreview={
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <CopyButton size="sm" value="sm-compact-token" aria-label="Copy Small Token" />
                <CopyButton size="md" value="md-standard-token" aria-label="Copy Medium Token" />
                <CopyButton size="lg" value="lg-touch-token" aria-label="Copy Large Token" />
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                <Button size="sm" variant="secondary">sm</Button>
                <Button size="md" variant="secondary">md</Button>
                <Button size="lg" variant="secondary">lg</Button>
              </div>
            }
            webCode={`import React from 'react';
import { CopyButton } from '@winplaybox/react';

export default function CopyButtonSizesDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <CopyButton size="sm" value="sm-compact-token" aria-label="Copy Small Token" />
      <CopyButton size="md" value="md-standard-token" aria-label="Copy Medium Token" />
      <CopyButton size="lg" value="lg-touch-token" aria-label="Copy Large Token" />
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { CopyButton } from '@winplaybox/react-native';

export default function NativeCopyButtonSizesDemo(): JSX.Element {
  return (
    <View style={{ flexDirection: 'row', gap: 12 }}>
      <CopyButton size="sm" value="0x71C...3aF" />
      <CopyButton size="md" value="0x71C...3aF" />
      <CopyButton size="lg" value="0x71C...3aF" />
    </View>
  );
}`}
          />
        </div>
      );

    case 'date-picker':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* Demo 1: Controlled Date Selection */}
          <ComponentDemoCard
            id="date-picker-basic"
            title="Controlled Date Selection with Popover"
            description="Interactive date picker opening an accessible monthly calendar popover on Web and calling native OS date pickers on iOS and Android."
            compactCode={`<DatePicker
  label="Target Milestone"
  value={selectedDemoDate}
  onChange={setSelectedDemoDate}
  placeholder="Select release milestone..."
/>`}
            webPreview={
              <div style={{ maxWidth: 360, width: '100%', margin: '0 auto' }}>
                <DatePicker
                  label="Target Milestone"
                  value={selectedDemoDate}
                  onChange={setSelectedDemoDate}
                  placeholder="Select release milestone..."
                />
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <DatePicker
                  label="Native Milestone"
                  value={selectedDemoDate}
                  onChange={setSelectedDemoDate}
                />
              </div>
            }
            webCode={`import React, { useState } from 'react';
import { DatePicker } from '@winplaybox/react';

export default function DatePickerBasicDemo(): JSX.Element {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div style={{ maxWidth: 360 }}>
      <DatePicker
        label="Target Milestone"
        value={date}
        onChange={setDate}
        placeholder="Select release milestone..."
      />
    </div>
  );
}`}
            nativeCode={`import React, { useState } from 'react';
import { View } from 'react-native';
import { DatePicker } from '@winplaybox/react-native';

export default function NativeDatePickerDemo(): JSX.Element {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <View style={{ padding: 16 }}>
      <DatePicker
        label="Release Date"
        value={date}
        onChange={setDate}
      />
    </View>
  );
}`}
          />

          {/* Demo 2: Size Scales */}
          <ComponentDemoCard
            id="date-picker-sizes"
            title="Form Density & Size Scales"
            description="Available in sm (compact tables), md (standard forms), and lg (touch-first and hero landing inputs) with theme-aligned padding."
            compactCode={`<DatePicker size="sm" placeholder="Small (32px)" />
<DatePicker size="md" placeholder="Medium (40px)" />
<DatePicker size="lg" placeholder="Large (48px)" />`}
            webPreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 360, width: '100%', margin: '0 auto' }}>
                <DatePicker size="sm" placeholder="Small (32px) Date" />
                <DatePicker size="md" placeholder="Medium (40px) Date" />
                <DatePicker size="lg" placeholder="Large (48px) Date" />
              </div>
            }
            nativePreview={
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
                <DatePicker size="sm" placeholder="Compact Native Date" />
                <DatePicker size="md" placeholder="Standard Native Date" />
              </div>
            }
            webCode={`import React from 'react';
import { DatePicker } from '@winplaybox/react';

export default function DatePickerSizesDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 360 }}>
      <DatePicker size="sm" placeholder="Small (32px) Date" />
      <DatePicker size="md" placeholder="Medium (40px) Date" />
      <DatePicker size="lg" placeholder="Large (48px) Date" />
    </div>
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { DatePicker } from '@winplaybox/react-native';

export default function NativeDatePickerSizesDemo(): JSX.Element {
  return (
    <View style={{ gap: 12 }}>
      <DatePicker size="sm" placeholder="Small Date" />
      <DatePicker size="md" placeholder="Medium Date" />
    </View>
  );
}`}
          />
        </div>
      );

    case 'list-view':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* Demo 1: Divided List */}
          <ComponentDemoCard
            id="list-view-divided"
            title="Divided List Items with Token Borders"
            description="ListView renders structured record collections with standardized 1px subtle divider lines and pull-to-refresh capabilities."
            compactCode={`<ListView
  data={[
    { id: '1', title: 'Authentication Service', latency: '24ms', status: 'Healthy' },
    { id: '2', title: 'PostgreSQL Primary Cluster', latency: '4ms', status: 'Optimal' },
    { id: '3', title: 'Edge Worker Routing CDN', latency: '12ms', status: 'Active' },
  ]}
  divided
  renderItem={(item) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px' }}>
      <span style={{ fontWeight: 600 }}>{item.title}</span>
      <span style={{ color: 'var(--color-feedback-success)', fontSize: 13 }}>{item.status} ({item.latency})</span>
    </div>
  )}
/>`}
            webPreview={
              <div style={{ maxWidth: 520, width: '100%', margin: '0 auto' }}>
                <ListView
                  data={[
                    { id: '1', title: 'Authentication Service', latency: '24ms', status: 'Healthy' },
                    { id: '2', title: 'PostgreSQL Primary Cluster', latency: '4ms', status: 'Optimal' },
                    { id: '3', title: 'Edge Worker Routing CDN', latency: '12ms', status: 'Active' },
                  ]}
                  divided
                  renderItem={(item) => (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px' }}>
                      <span style={{ fontWeight: 600, fontSize: 14 }}>{item.title}</span>
                      <span style={{ color: 'var(--color-feedback-success, #16a34a)', fontSize: 13, fontWeight: 500 }}>
                        {item.status} ({item.latency})
                      </span>
                    </div>
                  )}
                />
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <ListView
                  data={[
                    { id: '1', title: 'Native Worker Node A' },
                    { id: '2', title: 'Native Worker Node B' },
                  ]}
                  divided
                  renderItem={(item) => (
                    <div style={{ padding: '12px 14px' }}>
                      <span style={{ fontWeight: 600 }}>{item.title}</span>
                    </div>
                  )}
                />
              </div>
            }
            webCode={`import React from 'react';
import { ListView } from '@winplaybox/react';

interface ServiceNode {
  id: string;
  title: string;
  latency: string;
  status: string;
}

const NODES: ServiceNode[] = [
  { id: '1', title: 'Authentication Service', latency: '24ms', status: 'Healthy' },
  { id: '2', title: 'PostgreSQL Primary Cluster', latency: '4ms', status: 'Optimal' },
  { id: '3', title: 'Edge Worker Routing CDN', latency: '12ms', status: 'Active' },
];

export default function ListViewDividedDemo(): JSX.Element {
  return (
    <ListView
      data={NODES}
      divided
      renderItem={(item) => (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px' }}>
          <span>{item.title}</span>
          <span>{item.status}</span>
        </div>
      )}
    />
  );
}`}
            nativeCode={`import React from 'react';
import { View, Text } from 'react-native';
import { ListView } from '@winplaybox/react-native';

export default function NativeListViewDemo(): JSX.Element {
  return (
    <ListView
      data={[{ id: '1', name: 'Item Alpha' }, { id: '2', name: 'Item Beta' }]}
      divided
      renderItem={({ item }) => (
        <View style={{ padding: 14 }}>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
}`}
          />

          {/* Demo 2: Empty State */}
          <ComponentDemoCard
            id="list-view-empty"
            title="Empty State & Custom Fallback"
            description="When the data dataset is empty, ListView renders a centered card fallback utilizing design token typography."
            compactCode={`<ListView
  data={[]}
  emptyText="No cluster services match your current query filter."
  renderItem={() => null}
/>`}
            webPreview={
              <div style={{ maxWidth: 520, width: '100%', margin: '0 auto' }}>
                <ListView
                  data={[]}
                  emptyText="No cluster services match your current query filter."
                  renderItem={() => null}
                />
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <ListView
                  data={[]}
                  emptyText="No native records available."
                  renderItem={() => null}
                />
              </div>
            }
            webCode={`import React from 'react';
import { ListView } from '@winplaybox/react';

export default function ListViewEmptyDemo(): JSX.Element {
  return (
    <ListView
      data={[]}
      emptyText="No cluster services match your current query filter."
      renderItem={() => null}
    />
  );
}`}
            nativeCode={`import React from 'react';
import { ListView } from '@winplaybox/react-native';

export default function NativeListViewEmptyDemo(): JSX.Element {
  return (
    <ListView
      data={[]}
      emptyText="No records found."
      renderItem={() => null}
    />
  );
}`}
          />
        </div>
      );

    case 'web-view-box':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* Demo 1: Sandboxed Frame */}
          <ComponentDemoCard
            id="web-view-box-sandboxed"
            title="Sandboxed Responsive Frame"
            description="WebViewBox provides universal web content encapsulation with built-in loading indicator, zero host crash fallbacks, and token borders."
            compactCode={`<WebViewBox
  src="https://example.com"
  title="Sandboxed Web Frame"
  height="240px"
/>`}
            webPreview={
              <div style={{ maxWidth: 600, width: '100%', margin: '0 auto' }}>
                <WebViewBox
                  src="https://example.com"
                  title="Sandboxed Web Frame"
                  height="240px"
                />
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <WebViewBox
                  src="https://example.com"
                  title="Mobile Native Frame"
                  height="220px"
                />
              </div>
            }
            webCode={`import React from 'react';
import { WebViewBox } from '@winplaybox/react';

export default function WebViewBoxSandboxedDemo(): JSX.Element {
  return (
    <WebViewBox
      src="https://example.com"
      title="Sandboxed Web Frame"
      height="240px"
    />
  );
}`}
            nativeCode={`import React from 'react';
import { View } from 'react-native';
import { WebViewBox } from '@winplaybox/react-native';

export default function NativeWebViewBoxDemo(): JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <WebViewBox
        source={{ uri: 'https://example.com' }}
        title="Mobile Web Frame"
        height={220}
      />
    </View>
  );
}`}
          />

          {/* Demo 2: Header Toolbar */}
          <ComponentDemoCard
            id="web-view-box-header"
            title="Interactive Title & External Action Toolbar"
            description="Enabling showHeader renders a top toolbar displaying document title, origin host, and an external launch icon action."
            compactCode={`<WebViewBox
  src="https://spectra-ui.dev"
  title="Spectra UI Documentation"
  showHeader
  height="260px"
/>`}
            webPreview={
              <div style={{ maxWidth: 600, width: '100%', margin: '0 auto' }}>
                <WebViewBox
                  src="https://spectra-ui.dev"
                  title="Spectra UI Documentation"
                  showHeader
                  height="260px"
                />
              </div>
            }
            nativePreview={
              <div style={{ width: '100%' }}>
                <WebViewBox
                  src="https://spectra-ui.dev"
                  title="Spectra UI Documentation"
                  showHeader
                  height="240px"
                />
              </div>
            }
            webCode={`import React from 'react';
import { WebViewBox } from '@winplaybox/react';

export default function WebViewBoxHeaderDemo(): JSX.Element {
  return (
    <WebViewBox
      src="https://spectra-ui.dev"
      title="Spectra UI Documentation"
      showHeader
      height="260px"
    />
  );
}`}
            nativeCode={`import React from 'react';
import { WebViewBox } from '@winplaybox/react-native';

export default function NativeWebViewBoxHeaderDemo(): JSX.Element {
  return (
    <WebViewBox
      source={{ uri: 'https://spectra-ui.dev' }}
      title="Spectra UI Docs"
      showHeader
      height={240}
    />
  );
}`}
          />
        </div>
      );

    case 'card-header':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <ComponentDemoCard
            id="card-header-basic"
            title="01 Avatar & Title Header"
            description="CardHeader brings together leading identity avatars, high-contrast titles, and subtitle metadata using declarative slots."
            compactCode={`<Card variant="bordered" padding="md">
  <CardHeader
    image={<Avatar name="Sarah Connor" size={36} color="brand" />}
    header={<CardTitle>Security Operations Center</CardTitle>}
    description={<CardDescription>Primary Incident Response Team</CardDescription>}
  />
</Card>`}
            webPreview={
              <Card variant="bordered" padding="md" style={{ maxWidth: 440, width: '100%', margin: '0 auto' }}>
                <CardHeader
                  image={<Avatar name="Sarah Connor" size={36} color="brand" />}
                  header={<CardTitle>Security Operations Center</CardTitle>}
                  description={<CardDescription>Primary Incident Response Team</CardDescription>}
                />
              </Card>
            }
            webCode={`import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, Avatar } from '@winplaybox/react';

export default function CardHeaderDemo() {
  return (
    <Card variant="bordered" padding="md">
      <CardHeader
        image={<Avatar name="Sarah Connor" size={36} color="brand" />}
        header={<CardTitle>Security Operations Center</CardTitle>}
        description={<CardDescription>Primary Incident Response Team</CardDescription>}
      />
    </Card>
  );
}`}
          />
          <ComponentDemoCard
            id="card-header-actions"
            title="02 Contextual Action Slots"
            description="Slotting buttons or menu triggers in the right action slot of CardHeader."
            compactCode={`<Card variant="bordered" padding="md">
  <CardHeader
    header={<CardTitle>Database Replication</CardTitle>}
    description={<CardDescription>Active streaming replication across 3 regions</CardDescription>}
    action={<Button variant="secondary" size="sm">Manage</Button>}
  />
</Card>`}
            webPreview={
              <Card variant="bordered" padding="md" style={{ maxWidth: 460, width: '100%', margin: '0 auto' }}>
                <CardHeader
                  header={<CardTitle>Database Replication</CardTitle>}
                  description={<CardDescription>Active streaming replication across 3 regions</CardDescription>}
                  action={<Button variant="secondary" size="sm">Manage</Button>}
                />
              </Card>
            }
            webCode={`import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, Button } from '@winplaybox/react';

export default function CardHeaderActionDemo() {
  return (
    <Card variant="bordered" padding="md">
      <CardHeader
        header={<CardTitle>Database Replication</CardTitle>}
        description={<CardDescription>Active streaming replication across 3 regions</CardDescription>}
        action={<Button variant="secondary" size="sm">Manage</Button>}
      />
    </Card>
  );
}`}
          />
        </div>
      );

    case 'card-footer':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <ComponentDemoCard
            id="card-footer-actions"
            title="01 Dual Action Layout"
            description="CardFooter aligns affirmative primary action and secondary cancellation triggers."
            compactCode={`<Card variant="bordered" padding="md">
  <CardContent>Configuration changes ready for deployment.</CardContent>
  <CardFooter>
    <Button variant="secondary" size="sm">Dismiss</Button>
    <Button variant="primary" size="sm">Deploy Changes</Button>
  </CardFooter>
</Card>`}
            webPreview={
              <Card variant="bordered" padding="md" style={{ maxWidth: 440, width: '100%', margin: '0 auto' }}>
                <CardContent style={{ marginBottom: 16 }}>Configuration changes ready for deployment to cluster us-east-1.</CardContent>
                <CardFooter>
                  <Button variant="secondary" size="sm">Dismiss</Button>
                  <Button variant="primary" size="sm">Deploy Changes</Button>
                </CardFooter>
              </Card>
            }
            webCode={`import React from 'react';
import { Card, CardContent, CardFooter, Button } from '@winplaybox/react';

export default function CardFooterDemo() {
  return (
    <Card variant="bordered" padding="md">
      <CardContent>Configuration changes ready for deployment.</CardContent>
      <CardFooter>
        <Button variant="secondary" size="sm">Dismiss</Button>
        <Button variant="primary" size="sm">Deploy Changes</Button>
      </CardFooter>
    </Card>
  );
}`}
          />
        </div>
      );

    case 'card-preview':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <ComponentDemoCard
            id="card-preview-banner"
            title="01 Full-Bleed Media Banner"
            description="CardPreview clips imagery or preview canvas to the exact border radius of the parent card."
            compactCode={`<Card variant="bordered" padding="none">
  <CardPreview>
    <Box style={{ height: 140, background: 'linear-gradient(135deg, var(--color-action-primary) 0%, #0059B2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Text weight="bold" color="inverse">Spectra UI Universal Design System</Text>
    </Box>
  </CardPreview>
  <CardContent style={{ padding: 16 }}>
    <CardTitle>Release v2.0</CardTitle>
    <CardDescription>Multi-platform design language verified across Web, iOS, Android, Windows, macOS.</CardDescription>
  </CardContent>
</Card>`}
            webPreview={
              <Card variant="bordered" padding="none" style={{ maxWidth: 420, width: '100%', margin: '0 auto', overflow: 'hidden' }}>
                <CardPreview style={{ marginBottom: 0 }}>
                  <Box style={{ height: 140, background: 'linear-gradient(135deg, var(--color-action-primary) 0%, #0059B2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Text weight="bold" color="inverse">Spectra UI Universal Design System</Text>
                  </Box>
                </CardPreview>
                <CardContent style={{ padding: 16 }}>
                  <CardTitle>Release v2.0</CardTitle>
                  <CardDescription>Multi-platform design language verified across Web, iOS, Android, Windows, macOS.</CardDescription>
                </CardContent>
              </Card>
            }
            webCode={`import React from 'react';
import { Card, CardPreview, CardContent, CardTitle, CardDescription, Box, Text } from '@winplaybox/react';

export default function CardPreviewDemo() {
  return (
    <Card variant="bordered" padding="none">
      <CardPreview>
        <Box style={{ height: 140, background: 'linear-gradient(135deg, var(--color-action-primary) 0%, #0059B2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Text weight="bold" color="inverse">Spectra UI Universal Design System</Text>
        </Box>
      </CardPreview>
      <CardContent style={{ padding: 16 }}>
        <CardTitle>Release v2.0</CardTitle>
        <CardDescription>Universal design system architecture.</CardDescription>
      </CardContent>
    </Card>
  );
}`}
          />
        </div>
      );

    case 'carousel':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <ComponentDemoCard
            id="carousel-slides"
            title="01 Interactive Multi-Card Slides"
            description="Carousel with accessible prev/next controls and keyboard arrows."
            compactCode={`<Carousel>
  <div>Slide 1: Web & Desktop Design System</div>
  <div>Slide 2: Native Android & iOS Engines</div>
  <div>Slide 3: Enterprise Theme Tokens</div>
</Carousel>`}
            webPreview={
              <div style={{ maxWidth: 500, width: '100%', margin: '0 auto' }}>
                <Box style={{ border: '1px solid var(--color-border-default)', borderRadius: 12, padding: 24, textAlign: 'center', backgroundColor: 'var(--color-surface)' }}>
                  <Stack gap="sm" align="center">
                    <Text variant="heading-sm" weight="bold">Spectra UI Slide 1 of 3</Text>
                    <Text variant="body-sm" color="secondary">
                      Enterprise multi-platform component library conforming to Microsoft Fluent 2.
                    </Text>
                  </Stack>
                </Box>
              </div>
            }
            webCode={`import React from 'react';
import { Carousel } from '@winplaybox/react';

export default function CarouselDemo() {
  return (
    <Carousel>
      <div>Slide 1: Web & Desktop Design System</div>
      <div>Slide 2: Native Android & iOS Engines</div>
      <div>Slide 3: Enterprise Theme Tokens</div>
    </Carousel>
  );
}`}
          />
        </div>
      );

    case 'carousel-nav':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <ComponentDemoCard
            id="carousel-nav-dots"
            title="01 Expanding Pill Dots"
            description="Accessible tablist pagination indicators indicating current slide with spring expansion."
            compactCode={`<CarouselNav total={4} current={1} />`}
            webPreview={
              <div style={{ display: 'flex', justifyContent: 'center', padding: 24 }}>
                <div style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
                  <span style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: 'var(--color-border-default)' }} />
                  <span style={{ width: 22, height: 8, borderRadius: 4, backgroundColor: 'var(--color-action-primary)' }} />
                  <span style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: 'var(--color-border-default)' }} />
                  <span style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: 'var(--color-border-default)' }} />
                </div>
              </div>
            }
            webCode={`import React from 'react';
import { CarouselNav } from '@winplaybox/react';

export default function CarouselNavDemo() {
  const [active, setActive] = React.useState(1);
  return <CarouselNav total={4} current={active} onSelect={setActive} />;
}`}
          />
        </div>
      );

    case 'interaction-tag':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <ComponentDemoCard
            id="interaction-tag-states"
            title="01 Selected & Unselected States"
            description="Interactive tags with focus-visible outline and toggle selection."
            compactCode={`<div style={{ display: 'flex', gap: 8 }}>
  <InteractionTag selected variant="primary">Design Tokens (Active)</InteractionTag>
  <InteractionTag variant="neutral">Accessibility</InteractionTag>
  <InteractionTag variant="success" closable>Production</InteractionTag>
</div>`}
            webPreview={
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Tag variant="primary" style={{ outline: '2px solid var(--color-action-primary)', cursor: 'pointer' }}>Design Tokens (Selected)</Tag>
                <Tag variant="neutral" style={{ cursor: 'pointer' }}>Accessibility</Tag>
                <Tag variant="success" closable style={{ cursor: 'pointer' }}>Production Ready</Tag>
              </div>
            }
            webCode={`import React from 'react';
import { InteractionTag } from '@winplaybox/react';

export default function InteractionTagDemo() {
  const [selected, setSelected] = React.useState(true);
  return (
    <InteractionTag selected={selected} onClick={() => setSelected(!selected)}>
      Filter: Active Node
    </InteractionTag>
  );
}`}
          />
        </div>
      );

    case 'tag-group':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <ComponentDemoCard
            id="tag-group-flow"
            title="01 Responsive Horizontal Flow"
            description="TagGroup wraps multiple category tags with unified spacing and role='group'."
            compactCode={`<TagGroup>
  <Tag variant="primary">React DOM</Tag>
  <Tag variant="info">React Native</Tag>
  <Tag variant="success">TypeScript 5.8</Tag>
  <Tag variant="warning">WAI-ARIA AA</Tag>
</TagGroup>`}
            webPreview={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', maxWidth: 440, margin: '0 auto' }}>
                <Tag variant="primary">React DOM</Tag>
                <Tag variant="info">React Native</Tag>
                <Tag variant="success">TypeScript 5.8</Tag>
                <Tag variant="warning">WAI-ARIA AA</Tag>
              </div>
            }
            webCode={`import React from 'react';
import { TagGroup, Tag } from '@winplaybox/react';

export default function TagGroupDemo() {
  return (
    <TagGroup>
      <Tag variant="primary">React DOM</Tag>
      <Tag variant="info">React Native</Tag>
      <Tag variant="success">TypeScript 5.8</Tag>
    </TagGroup>
  );
}`}
          />
        </div>
      );

    case 'rating-display':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <ComponentDemoCard
            id="rating-display-compact"
            title="01 Compact Stars & Score"
            description="Accessible read-only rating display with star vector icons and numeric score label."
            compactCode={`<RatingDisplay value={4.8} max={5} showValueLabel />`}
            webPreview={
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center' }}>
                <Rating value={5} readOnly />
                <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)' }}>4.9 / 5.0</span>
                <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>(1,482 customer reviews)</span>
              </div>
            }
            webCode={`import React from 'react';
import { RatingDisplay } from '@winplaybox/react';

export default function RatingDisplayDemo() {
  return <RatingDisplay value={4.8} max={5} showValueLabel />;
}`}
          />
        </div>
      );

    case 'menu-grid':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <ComponentDemoCard
            id="menu-grid-3col"
            title="01 3-Column Tool Launcher Grid"
            description="MenuGrid arranges actionable tiles in a multi-column CSS grid inside a Menu."
            compactCode={`<Menu>
  <MenuGrid columns={3}>
    <MenuItem>App 1</MenuItem>
    <MenuItem>App 2</MenuItem>
    <MenuItem>App 3</MenuItem>
  </MenuGrid>
</Menu>`}
            webPreview={
              <div style={{ maxWidth: 280, margin: '0 auto', border: '1px solid var(--color-border-default)', borderRadius: 8, padding: 8, backgroundColor: 'var(--color-surface-elevated)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, textAlign: 'center' }}>
                  {['Docs', 'Tokens', 'Icons', 'Motion', 'Themes', 'CLI'].map((name) => (
                    <button key={name} style={{ padding: '12px 6px', borderRadius: 6, border: '1px solid var(--color-border-subtle)', background: 'var(--color-surface-raised)', color: 'var(--color-text-primary)', cursor: 'pointer', fontSize: 11, fontWeight: 600 }}>
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            }
            webCode={`import React from 'react';
import { Menu, MenuGrid, MenuItem } from '@winplaybox/react';

export default function MenuGridDemo() {
  return (
    <Menu>
      <MenuGrid columns={3}>
        <MenuItem>Docs</MenuItem>
        <MenuItem>Tokens</MenuItem>
        <MenuItem>Icons</MenuItem>
      </MenuGrid>
    </Menu>
  );
}`}
          />
        </div>
      );

    case 'portal-mount':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <ComponentDemoCard
            id="portal-mount-custom"
            title="01 Custom DOM Container Target"
            description="toMountNodeProps helper configures explicit mount containers for breaking out of overflow clipping."
            compactCode={`const config = toMountNodeProps({ element: customNode });
<Portal mountNode={config.mountNode}>
  <div>Mounted overlay content</div>
</Portal>`}
            webPreview={
              <div style={{ textAlign: 'center', padding: 24, border: '1px dashed var(--color-border-default)', borderRadius: 8 }}>
                <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
                  Mount Node Root: <code>document.body</code> (Active Target)
                </span>
              </div>
            }
            webCode={`import React from 'react';
import { Portal, toMountNodeProps } from '@winplaybox/react';

export default function PortalMountDemo() {
  const mountConfig = toMountNodeProps();
  return (
    <Portal mountNode={mountConfig.mountNode}>
      <div>Mounted overlay</div>
    </Portal>
  );
}`}
          />
        </div>
      );

    case 'overflow': {
      const toolbarItems = [
        { id: 'bold', label: 'Bold' },
        { id: 'italic', label: 'Italic' },
        { id: 'underline', label: 'Underline' },
        { id: 'link', label: 'Link' },
        { id: 'table', label: 'Table' },
        { id: 'code', label: 'Code' },
        { id: 'quote', label: 'Quote' },
      ];
      let visible1 = 6;
      if (overflowDemoWidth1 < 280) visible1 = 1;
      else if (overflowDemoWidth1 < 360) visible1 = 2;
      else if (overflowDemoWidth1 < 440) visible1 = 3;
      else if (overflowDemoWidth1 < 520) visible1 = 4;
      const visItems1 = toolbarItems.slice(0, visible1);
      const overItems1 = toolbarItems.slice(visible1);

      const priorityActions = [
        { id: 'save', label: 'Save', priority: 'high' },
        { id: 'publish', label: 'Publish', priority: 'high' },
        { id: 'preview', label: 'Preview', priority: 'medium' },
        { id: 'export', label: 'Export PDF', priority: 'low' },
        { id: 'share', label: 'Share Link', priority: 'low' },
        { id: 'history', label: 'Version History', priority: 'low' },
      ];
      let visible2 = 5;
      if (overflowDemoWidth2 < 260) visible2 = 2;
      else if (overflowDemoWidth2 < 340) visible2 = 3;
      else if (overflowDemoWidth2 < 420) visible2 = 4;
      const visItems2 = priorityActions.slice(0, visible2);
      const overItems2 = priorityActions.slice(visible2);

      const navTabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'deployments', label: 'Deployments' },
        { id: 'metrics', label: 'Metrics' },
        { id: 'clusters', label: 'Clusters' },
        { id: 'security', label: 'Security' },
        { id: 'billing', label: 'Billing' },
      ];
      let visible3 = 5;
      if (overflowDemoWidth3 < 280) visible3 = 1;
      else if (overflowDemoWidth3 < 360) visible3 = 2;
      else if (overflowDemoWidth3 < 460) visible3 = 3;
      const visItems3 = navTabs.slice(0, visible3);
      const overItems3 = navTabs.slice(visible3);

      return (
        <Stack direction="column" gap="lg">
          {/* Demo 1: Fluent UI Resizable Area Benchmark */}
          <ComponentDemoCard
            id="overflow-toolbar"
            title="01 Resizable Area Overflow (Fluent UI Benchmark)"
            description="Matches Microsoft Fluent UI 2 @fluentui/react-overflow. Drag the bottom-right corner or range slider to dynamically collapse overflowing items into the '+N items' menu."
            webCode={`import React from 'react';
import { Overflow, OverflowItem, OverflowMenu, Button, Box } from '@winplaybox/react';

export default function OverflowFluentDemo() {
  const items = Array.from({ length: 8 }, (_, i) => ({ id: \`item-\${i}\`, label: \`Item \${i}\` }));
  const labels = Object.fromEntries(items.map(i => [i.id, i.label]));

  return (
    <Box
      style={{
        border: '2px solid #0078D4',
        position: 'relative',
        borderRadius: 4,
        padding: '24px 14px 14px 14px',
        resize: 'horizontal',
        overflow: 'hidden',
        minWidth: 200,
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, backgroundColor: '#0078D4', color: '#fff', padding: '2px 8px', fontSize: 11, fontWeight: 700 }}>
        Resizable Area
      </div>
      <Overflow minimumVisible={1}>
        {items.map(item => (
          <OverflowItem key={item.id} id={item.id}>
            <Button size="sm" variant="secondary">{item.label}</Button>
          </OverflowItem>
        ))}
        <OverflowMenu itemLabels={labels} />
      </Overflow>
    </Box>
  );
}`}
            webPreview={
              <Stack direction="column" gap="md" align="center" style={{ width: '100%', maxWidth: 640 }}>
                <Stack direction="row" align="center" justify="between" style={{ width: '100%', padding: '8px 12px', borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-subtle)', flexWrap: 'wrap', gap: 8 }}>
                  <Stack direction="row" align="center" gap="xs">
                    <Text size="xs" weight="semibold" color="muted">Container Width:</Text>
                    <input type="range" min={220} max={680} step={10} value={overflowDemoWidth1} onChange={(e) => setOverflowDemoWidth1(Number(e.target.value))} style={{ width: 120, cursor: 'ew-resize' }} />
                    <Text size="xs" weight="bold" color="primary">{overflowDemoWidth1}px</Text>
                  </Stack>
                  <Stack direction="row" gap="xs">
                    {[{ label: 'Full', val: 660 }, { label: 'Medium', val: 500 }, { label: 'Mobile', val: 360 }, { label: 'Compact', val: 240 }].map(p => (
                      <Button key={p.label} size="sm" variant={overflowDemoWidth1 === p.val ? 'primary' : 'secondary'} onClick={() => setOverflowDemoWidth1(p.val)}>{p.label}</Button>
                    ))}
                  </Stack>
                </Stack>
                <Box style={{ width: overflowDemoWidth1, maxWidth: '100%', minWidth: 200, resize: 'horizontal', overflow: 'hidden', position: 'relative', padding: '26px 14px 14px 14px', borderRadius: 4, backgroundColor: 'var(--color-surface)', border: '2px solid #0078D4', boxShadow: '0 2px 14px rgba(0, 120, 212, 0.12)', transition: 'width 0.12s ease' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, backgroundColor: '#0078D4', color: '#FFFFFF', padding: '2px 8px', fontSize: 11, fontWeight: 700, letterSpacing: '0.04em', userSelect: 'none' }}>
                    Resizable Area
                  </div>
                  <Stack direction="row" gap="xs" align="center" justify="between" style={{ width: '100%' }}>
                    <Stack direction="row" gap="xs" align="center" style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
                      {visItems1.map(item => <Button key={item.id} size="sm" variant="secondary" style={{ flexShrink: 0, borderRadius: 4, border: '1px solid var(--color-border-default)' }}>{item.label}</Button>)}
                    </Stack>
                    {overItems1.length > 0 && (
                      <Menu>
                        <MenuButton size="sm" variant="secondary" style={{ flexShrink: 0, borderRadius: 4, fontWeight: 600, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)' }}>
                          +{overItems1.length} {overItems1.length === 1 ? 'item' : 'items'}
                        </MenuButton>
                        {overItems1.map(item => <MenuItem key={item.id}>{item.label}</MenuItem>)}
                      </Menu>
                    )}
                  </Stack>
                </Box>
              </Stack>
            }
          />

          {/* Demo 2: Priority-Weighted Pinning */}
          <ComponentDemoCard
            id="overflow-priority"
            title="02 Priority-Weighted Pinning (High-Priority Actions)"
            description="Guarantees critical actions (Save, Publish) remain visible while non-critical actions collapse first based on priority weighting."
            webCode={`// High-priority actions stay pinned; low-priority actions collapse first
const { visibleItems, overflowItems } = useOverflow({ items, getPriority: item => item.priority });`}
            webPreview={
              <Stack direction="column" gap="md" align="center" style={{ width: '100%', maxWidth: 640 }}>
                <Stack direction="row" align="center" justify="between" style={{ width: '100%', padding: '8px 12px', borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-subtle)', flexWrap: 'wrap', gap: 8 }}>
                  <Stack direction="row" align="center" gap="xs">
                    <Text size="xs" weight="semibold" color="muted">Container Width:</Text>
                    <input type="range" min={240} max={600} step={10} value={overflowDemoWidth2} onChange={(e) => setOverflowDemoWidth2(Number(e.target.value))} style={{ width: 120, cursor: 'ew-resize' }} />
                    <Text size="xs" weight="bold" color="primary">{overflowDemoWidth2}px</Text>
                  </Stack>
                  <Stack direction="row" gap="xs">
                    {[{ label: 'Full', val: 560 }, { label: 'Medium', val: 380 }, { label: 'Compact', val: 260 }].map(p => (
                      <Button key={p.label} size="sm" variant={overflowDemoWidth2 === p.val ? 'primary' : 'secondary'} onClick={() => setOverflowDemoWidth2(p.val)}>{p.label}</Button>
                    ))}
                  </Stack>
                </Stack>
                <Box style={{ width: overflowDemoWidth2, maxWidth: '100%', minWidth: 200, resize: 'horizontal', overflow: 'hidden', padding: '12px 14px', borderRadius: 8, backgroundColor: 'var(--color-surface)', border: '1.5px solid var(--color-action-primary)', transition: 'width 0.15s ease' }}>
                  <Stack direction="row" gap="xs" align="center" justify="between">
                    <Stack direction="row" gap="xs" align="center" style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
                      {visItems2.map(item => (
                        <Button key={item.id} size="sm" variant={item.priority === 'high' ? 'primary' : 'secondary'} style={{ flexShrink: 0 }}>
                          {item.label}
                        </Button>
                      ))}
                    </Stack>
                    {overItems2.length > 0 && (
                      <Menu>
                        <MenuButton size="sm" variant="secondary" style={{ flexShrink: 0, borderRadius: 4, fontWeight: 600 }}>
                          +{overItems2.length} {overItems2.length === 1 ? 'action' : 'actions'}
                        </MenuButton>
                        {overItems2.map(item => <MenuItem key={item.id}>{item.label}</MenuItem>)}
                      </Menu>
                    )}
                  </Stack>
                </Box>
              </Stack>
            }
          />

          {/* Demo 3: Tab Navigation */}
          <ComponentDemoCard
            id="overflow-tabs"
            title="03 Tab Navigation with Overflow Menu"
            description="Horizontal tab bar that smoothly collapses trailing navigation sections into a dropdown menu when space is restricted."
            webCode={`<Stack direction="row" gap="xs" align="center">
  {visibleTabs.map(tab => <Button key={tab.id} variant="secondary">{tab.label}</Button>)}
  {overflowTabs.length > 0 && (
    <Menu>
      <MenuButton variant="secondary">More ({overflowTabs.length})</MenuButton>
      {overflowTabs.map(tab => <MenuItem key={tab.id}>{tab.label}</MenuItem>)}
    </Menu>
  )}
</Stack>`}
            webPreview={
              <Stack direction="column" gap="md" align="center" style={{ width: '100%', maxWidth: 640 }}>
                <Stack direction="row" align="center" justify="between" style={{ width: '100%', padding: '8px 12px', borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-subtle)', flexWrap: 'wrap', gap: 8 }}>
                  <Stack direction="row" align="center" gap="xs">
                    <Text size="xs" weight="semibold" color="muted">Container Width:</Text>
                    <input type="range" min={240} max={600} step={10} value={overflowDemoWidth3} onChange={(e) => setOverflowDemoWidth3(Number(e.target.value))} style={{ width: 120, cursor: 'ew-resize' }} />
                    <Text size="xs" weight="bold" color="primary">{overflowDemoWidth3}px</Text>
                  </Stack>
                  <Stack direction="row" gap="xs">
                    {[{ label: 'Full', val: 560 }, { label: 'Medium', val: 400 }, { label: 'Mobile', val: 280 }].map(p => (
                      <Button key={p.label} size="sm" variant={overflowDemoWidth3 === p.val ? 'primary' : 'secondary'} onClick={() => setOverflowDemoWidth3(p.val)}>{p.label}</Button>
                    ))}
                  </Stack>
                </Stack>
                <Box style={{ width: overflowDemoWidth3, maxWidth: '100%', minWidth: 200, resize: 'horizontal', overflow: 'hidden', padding: '8px 12px', borderRadius: 8, backgroundColor: 'var(--color-surface)', border: '1.5px solid var(--color-action-primary)', transition: 'width 0.15s ease' }}>
                  <Stack direction="row" gap="xs" align="center" justify="between">
                    <Stack direction="row" gap="xs" align="center" style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
                      {visItems3.map(item => (
                        <Button key={item.id} size="sm" variant="secondary" style={{ flexShrink: 0 }}>
                          {item.label}
                        </Button>
                      ))}
                    </Stack>
                    {overItems3.length > 0 && (
                      <Menu>
                        <MenuButton size="sm" variant="secondary" style={{ flexShrink: 0, borderRadius: 4, fontWeight: 600 }}>
                          +{overItems3.length} {overItems3.length === 1 ? 'tab' : 'tabs'}
                        </MenuButton>
                        {overItems3.map(item => <MenuItem key={item.id}>{item.label}</MenuItem>)}
                      </Menu>
                    )}
                  </Stack>
                </Box>
              </Stack>
            }
          />
        </Stack>
      );
    }

    default:
      return null;
  }
};

