import React, { useState, useEffect } from 'react';
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
  RatingDisplay,
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
  Portal,
  Carousel,
  CarouselNav,
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
  Box,
  Grid,
  Container,
  Stack,
  Text,
  ColorPicker,
  PlatformChassis,
  useColorScheme,
  CopyButton,
  DatePicker,
  ListView,
  WebViewBox,
  LiveIndicator,
  Field,
  Label,
  InfoLabel,
  SearchBox,
  NumberInput,
} from '@winplaybox/react';
import type { ChassisPlatform } from '@winplaybox/react';
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
  SparklesIcon,
  CubeIcon,
  FocusTargetIcon,
} from '@winplaybox/icons';
import { openInCodeSandbox, openInStackBlitz, openInNewTab, toJavaScript } from '../../utils/sandbox';
import { compileAndRender } from '../../utils/liveCompiler';
import { EditableCodeBlock } from './EditableCodeBlock';
import { MobileSimulator } from './MobileSimulator';
import { PlatformChassisViewer } from './PlatformChassisViewer';
import { PlatformIcon } from './PlatformIcon';
import { usePlatform } from '../../context/PlatformContext';
import { Platform, PLATFORMS } from '../../data/platformData';
import { isPlatformSupported, getComponentPlatformCapability } from '@winplaybox/platform-capabilities';
import { ComponentMetadata, COMPONENTS_DATA } from '../../data/componentsData';
import { ComponentVariantsShowcase, COMPONENT_VARIANTS_MAP } from './ComponentVariantsShowcase';
import { ComponentApiSection } from './ComponentApiSection';
import { NativeSponsorAd } from './NativeSponsorAd';
import {
  getComponentStorybookUrl,
  getComponentFigmaUrl,
  getComponent7Pillars,
} from '../../data/componentResources';

// Dynamic Component Resource Pill Icons (Spectra UI Specification - Authentic Vectors, Zero Emojis)
const StorybookPillIcon: React.FC<{ size?: number; style?: React.CSSProperties }> = ({ size = 14, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, display: 'block', ...style }}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.65 2.11C18.42 2.22 19 2.87 19 3.65v16.7c0 .78-.58 1.43-1.35 1.54l-11 1.57A1.5 1.5 0 0 1 4.5 22V2c0-.9.78-1.6 1.67-1.47l11.48 1.58ZM7 5.5v13l9-1.28V4.22L7 5.5Z"
      fill="#FF4785"
    />
    <path
      d="M9.8 11.2c-.44-.22-.72-.6-.72-1.07 0-.75.67-1.33 1.56-1.33.72 0 1.34.38 1.58.96.1.25.37.38.62.29.25-.1.38-.37.29-.62-.35-.86-1.26-1.43-2.49-1.43-1.4 0-2.4 1-2.4 2.13 0 .78.48 1.43 1.25 1.8l1.32.65c.65.32.96.7.96 1.22 0 .82-.7 1.45-1.7 1.45-.88 0-1.63-.48-1.89-1.2-.08-.25-.36-.4-.62-.32-.26.09-.4.36-.31.62.38 1.05 1.44 1.7 2.82 1.7 1.55 0 2.54-1 2.54-2.25 0-.85-.5-1.5-1.38-1.92l-1.62-.73Z"
      fill="#FF4785"
    />
  </svg>
);

const FigmaPillIcon: React.FC<{ size?: number; style?: React.CSSProperties }> = ({ size = 14, style }) => (
  <svg width={size} height={size} viewBox="0 0 38 57" fill="none" style={{ flexShrink: 0, display: 'block', ...style }}>
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
  </svg>
);

const MarkdownPillIcon: React.FC<{ size?: number; style?: React.CSSProperties }> = ({ size = 14, style }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" style={{ flexShrink: 0, display: 'block', color: 'var(--color-text-secondary)', ...style }}>
    <path fillRule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15V4.15C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.9 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z" />
  </svg>
);

const FeedbackPillIcon: React.FC<{ size?: number; style?: React.CSSProperties }> = ({ size = 14, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#007FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, display: 'block', ...style }}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const PackagePillIcon: React.FC<{ size?: number; style?: React.CSSProperties }> = ({ size = 14, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, display: 'block', ...style }}>
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);


const GitHubPillIcon: React.FC<{ size?: number; style?: React.CSSProperties }> = ({ size = 14, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0, display: 'block', color: 'var(--color-text-secondary)', ...style }}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const W3CPillIcon: React.FC<{ size?: number; style?: React.CSSProperties }> = ({ size = 14, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#005A9C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, display: 'block', ...style }}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const SectionCommentPlusIcon: React.FC<{ size?: number; style?: React.CSSProperties }> = ({ size = 14, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, display: 'block', ...style }}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <line x1="12" y1="8" x2="12" y2="14" />
    <line x1="9" y1="11" x2="15" y2="11" />
  </svg>
);

const SectionCommentIcon = SectionCommentPlusIcon;

const ThumbsUpIcon: React.FC<{ size?: number; style?: React.CSSProperties }> = ({ size = 15, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, display: 'block', ...style }}>
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
  </svg>
);

const ThumbsDownIcon: React.FC<{ size?: number; style?: React.CSSProperties }> = ({ size = 15, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, display: 'block', ...style }}>
    <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3" />
  </svg>
);

const EyeOffIcon: React.FC<{ size?: number; style?: React.CSSProperties }> = ({ size = 16, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, display: 'block', ...style }}>
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const HandNoticeIcon: React.FC<{ size?: number; style?: React.CSSProperties }> = ({ size = 18, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, display: 'block', ...style }}>
    <path d="M18 11V6a2 2 0 0 0-4 0v5" />
    <path d="M14 10V4a2 2 0 0 0-4 0v7" />
    <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
  </svg>
);

const InfoHandIcon = HandNoticeIcon;

const EditPageIcon: React.FC<{ size?: number; style?: React.CSSProperties }> = ({ size = 14, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, display: 'block', ...style }}>
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
  breadcrumb: '< 1.4 kB',
  breadcrumbs: '< 1.4 kB',
  tabs: '< 2.9 kB',
  divider: '< 0.7 kB',
  'copy-button': '< 1.2 kB',
  'date-picker': '< 2.8 kB',
  'list-view': '< 1.8 kB',
  'web-view-box': '< 2.1 kB',
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
  breadcrumb: 'https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/',
  breadcrumbs: 'https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/',
  tabs: 'https://www.w3.org/WAI/ARIA/apg/patterns/tabs/',
  list: 'https://www.w3.org/WAI/ARIA/apg/patterns/listbox/',
  'copy-button': 'https://www.w3.org/WAI/ARIA/apg/patterns/button/',
  'date-picker': 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/',
  'list-view': 'https://www.w3.org/WAI/ARIA/apg/patterns/feed/',
  'web-view-box': 'https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/',
};

const getSectionAnchor = (sectionName: string): string => {
  const s = sectionName.toLowerCase();
  if (s.includes('anatomy') || s.includes('slot')) return 'anatomy';
  if (s.includes('motion') || s.includes('timing') || s.includes('transition')) return 'motion';
  if (s.includes('guideline') || s.includes('dos')) return 'guidelines';
  if (s.includes('keyboard') || s.includes('aria')) return 'keyboard';
  if (s.includes('resource')) return 'resources';
  if (s.includes('api') || s.includes('prop')) return 'api';
  if (s.includes('variant')) return 'usage-variants';
  return 'playground';
};

const getComponentFullMarkdown = (meta: ComponentMetadata): string => {
  const dosList = meta.dos.map((d) => `- ${d}`).join('\n');
  const dontsList = meta.donts.map((d) => `- ${d}`).join('\n');

  const anatomyRows = meta.anatomy
    .map((a) => `| \`${a.name}\` | ${a.role} |`)
    .join('\n');

  const keyboardRows = meta.keyboard
    .map((k) => `| \`${k.key}\` | ${k.description} |`)
    .join('\n');

  const propRows = meta.props
    .map((p) => `| \`${p.name}\` | \`${p.type.replace(/\|/g, '\\|')}\` | \`${p.defaultValue}\` | ${p.description} |`)
    .join('\n');

  return `# ${meta.name}

${meta.description}

\`\`\`bash
npm install @winplaybox/react @winplaybox/icons
\`\`\`

## Basic Usage

\`\`\`tsx
import React from 'react';
import { ${meta.name} } from '@winplaybox/react';

export default function Basic${meta.name.replace(/\s+/g, '')}Example() {
  return (
    <${meta.name}>
      ${meta.name} Example
    </${meta.name}>
  );
}
\`\`\`

## Guidelines

${meta.guidelines}

### Recommended (Dos)

${dosList}

### Avoid (Don'ts)

${dontsList}

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
${anatomyRows}

## Motion & Transitions

- **Duration**: \`${meta.motion.duration}\`
- **Easing Curve**: \`${meta.motion.easing}\`
- **Specification**: ${meta.motion.description}

## Keyboard Navigation & ARIA

Official pattern: [${meta.waiPattern}](${meta.waiUrl})

| Key | Action & Focus Behavior |
| :--- | :--- |
${keyboardRows}

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
${propRows}

## Headless Primitive (\`@winplaybox/primitives\`)

Hook: \`${meta.headlessHook.name}\`
Description: ${meta.headlessHook.description}

\`\`\`tsx
${meta.headlessHook.code}
\`\`\`
`;
};

interface ComponentDocPageProps {
  componentId: string;
}

export const ComponentDocPage: React.FC<ComponentDocPageProps> = ({ componentId }) => {
  const meta = COMPONENTS_DATA[componentId] || COMPONENTS_DATA['button'];
  const releaseInfo = getComponentReleaseVersion(meta.id);
  const { currentVersion, getGitHubUrl } = useVersion();
  const { currentPlatform, metadata: platformMeta, setPlatform } = usePlatform();
  const ALL_PLATFORMS: Platform[] = ['web', 'android', 'ios', 'windows', 'macos'];
  const supportedPlatforms = ALL_PLATFORMS.filter((p) => isPlatformSupported(meta.id, p));
  const isCurrentSupported = isPlatformSupported(meta.id, currentPlatform);
  const activeCap = getComponentPlatformCapability(meta.id, currentPlatform);
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
  const [activeSection, setActiveSection] = useState<string>('playground');
  const [overflowSandboxWidth, setOverflowSandboxWidth] = useState<number>(440);
  const [playgroundViewportWidth, setPlaygroundViewportWidth] = useState<'100%' | '768px' | '480px' | '360px'>('100%');
  const [activeResourceModal, setActiveResourceModal] = useState<'react' | 'tokens' | 'native' | null>(null);
  const variants = COMPONENT_VARIANTS_MAP[meta.id] || [];
  const pillarsData = getComponent7Pillars(meta.id, meta);
  const storybookUrl = getComponentStorybookUrl(meta.id);
  const figmaUrl = getComponentFigmaUrl(meta.id);

  // Documentation Page Feedback & Edit State
  const [feedbackFormOpen, setFeedbackFormOpen] = useState(false);
  const [feedbackSection, setFeedbackSection] = useState<string>('Overview');
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackRating, setFeedbackRating] = useState<'positive' | 'negative' | null>(null);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const sectionAnchor = getSectionAnchor(feedbackSection);
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://spectra-ui.dev';
  const pageUrlWithAnchor = `${currentOrigin}/components/${meta.id}#${sectionAnchor}`;
  const issueTitle = `[docs] ${meta.name}: Feedback on "${feedbackSection}" section`;
  const issueBody = `### Documentation Page\n${pageUrlWithAnchor}\n\n### Section\n${feedbackSection}\n\n### How can we improve this section?\n${
    feedbackText.trim() ? feedbackText.trim() : '<!-- Please describe what was confusing, missing, or could be improved -->'
  }\n`;

  const githubIssueUrl = `https://github.com/Winplaybox/spectra-ui/issues/new?template=docs-feedback.yml&title=${encodeURIComponent(
    issueTitle
  )}&labels=documentation&page-url=${encodeURIComponent(pageUrlWithAnchor)}&section=${encodeURIComponent(
    feedbackSection
  )}&body=${encodeURIComponent(issueBody)}`;

  const docRef = currentVersion === 'latest' ? 'main' : currentVersion;
  const githubDocEditUrl = `https://github.com/Winplaybox/spectra-ui/edit/${docRef}/docs/components/${meta.id}.md`;

  const openFeedbackForSection = (sectionName: string) => {
    setFeedbackSection(sectionName);
    setFeedbackFormOpen(true);
    setTimeout(() => {
      const el = document.getElementById('page-feedback');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      const textarea = document.getElementById('feedback-textarea') as HTMLTextAreaElement | null;
      if (textarea) {
        textarea.focus();
      }
    }, 60);
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
      'types',
      'behavior',
      'layout',
      'content',
      'accessibility',
      'resources',
      'quick-guides',
      'anatomy',
      'motion',
      'guidelines',
      'keyboard',
      'props',
      'api',
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
  const [avatarStatus, setAvatarStatus] = useState<
    'available' | 'busy' | 'away' | 'dnd' | 'out-of-office' | 'offline'
  >('available');
  const [avatarSize, setAvatarSize] = useState<number>(48);
  const [avatarShape, setAvatarShape] = useState<'circular' | 'square'>('circular');
  const [avatarColor, setAvatarColor] = useState<'neutral' | 'brand' | 'colorful'>('colorful');
  const [avatarActive, setAvatarActive] = useState<'active' | 'unset'>('unset');
  const [avatarOof, setAvatarOof] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [tabsVariant, setTabsVariant] = useState<'underline' | 'pills'>('underline');
  const [activeTab, setActiveTab] = useState('tab-1');

  // Enterprise Interactive States
  const [splitSelected, setSplitSelected] = useState('Create a merge commit');
  const [splitToast, setSplitToast] = useState<string | null>(null);
  const [sliderVal, setSliderVal] = useState(64);
  const [ratingVal, setRatingVal] = useState(4);
  const [textareaVal, setTextareaVal] = useState('');
  const [demoDrawerOpen, setDemoDrawerOpen] = useState(false);
  const [demoPage, setDemoPage] = useState(1);
  const [demoStep, setDemoStep] = useState(1);
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [autoQuery, setAutoQuery] = useState('');
  const [groupVal, setGroupVal] = useState<'day' | 'week' | 'month'>('week');
  const [progressVal, setProgressVal] = useState(72);
  const [toastVisible, setToastVisible] = useState(true);
  const [pickerColor, setPickerColor] = useState('#2563EB');
  const [chassisPlatform, setChassisPlatform] = useState<ChassisPlatform>('web');
  const [bottomNavTab, setBottomNavTab] = useState('home');
  const [demoDatePickerVal, setDemoDatePickerVal] = useState<Date | undefined>(new Date());
  const [accSize, setAccSize] = useState<'small' | 'medium' | 'large' | 'extra-large'>('medium');
  const [accIconPos, setAccIconPos] = useState<'start' | 'end'>('start');
  const [accMultiple, setAccMultiple] = useState(false);
  const [accCollapsible, setAccCollapsible] = useState(true);

  // Badge Interactive Demo State
  const [badgeAppearance, setBadgeAppearance] = useState<'filled' | 'ghost' | 'outline' | 'tint'>('filled');
  const [badgeColor, setBadgeColor] = useState<
    'brand' | 'danger' | 'important' | 'informative' | 'severe' | 'subtle' | 'success' | 'warning'
  >('brand');
  const [badgeShape, setBadgeShape] = useState<'rounded' | 'circular' | 'square'>('rounded');
  const [badgeSize, setBadgeSize] = useState<
    'tiny' | 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'
  >('medium');
  const [badgeDot, setBadgeDot] = useState(false);
  const [badgeWithIcon, setBadgeWithIcon] = useState(false);

  // Sub-component demo states
  const [togglePressed, setTogglePressed] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [tagSelected, setTagSelected] = useState(true);
  const [portalMounted, setPortalMounted] = useState(false);

  // Generate clean JSX snippet according to active demo
  const getRawSnippet = (): string => {
    switch (meta.id) {
      case 'accordion':
        return `import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@winplaybox/react';
import type { AccordionProps } from '@winplaybox/react';

export default function AccordionDemo(): JSX.Element {
  return (
    <Accordion
      size="${accSize}"
      expandIconPosition="${accIconPos}"
      multiple={${accMultiple}}
      collapsible={${accCollapsible}}
      defaultOpenItems={['item-1']}
    >
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
          Yes! @winplaybox/tokens compiles to strictly typed JavaScript objects that plug directly
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
  );
};`;
      case 'button':
        return `import React from 'react';
import { Stack, Button } from '@winplaybox/react';
import type { ButtonProps } from '@winplaybox/react';
import { CheckIcon } from '@winplaybox/icons';

export default function ButtonDemo(): JSX.Element {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log('Action triggered', e);
  };

  return (
    <Stack direction="row" gap="md" align="center">
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
    </Stack>
  );
}`;

      case 'compound-button':
        return `import React from 'react';
import { Stack, CompoundButton } from '@winplaybox/react';
import { SparklesIcon } from '@winplaybox/icons';

export default function CompoundButtonDemo(): JSX.Element {
  return (
    <Stack direction="row" gap="md" wrap>
      <CompoundButton
        variant="primary"
        icon={<SparklesIcon size={20} />}
        secondaryContent="Automated build with hermes compiler"
      >
        Deploy Production
      </CompoundButton>
      <CompoundButton
        variant="secondary"
        secondaryContent="Create isolated PR deployment branch"
      >
        Preview Environment
      </CompoundButton>
    </Stack>
  );
}`;

      case 'split-button':
        return `import React, { useState } from 'react';
import { SplitButton } from '@winplaybox/react';

export default function SplitButtonDemo(): JSX.Element {
  const [selected, setSelected] = useState('Create a merge commit');

  return (
    <SplitButton
      options={[
        { label: 'Create a merge commit', onClick: () => setSelected('Create a merge commit') },
        { label: 'Squash and merge', onClick: () => setSelected('Squash and merge') },
        { label: 'Rebase and merge', onClick: () => setSelected('Rebase and merge') },
      ]}
      onClick={() => console.log('Action triggered:', selected)}
    >
      {selected}
    </SplitButton>
  );
}`;

      case 'menu-button':
        return `import React from 'react';
import { MenuButton, Menu, MenuItem } from '@winplaybox/react';
import { ChevronDownIcon } from '@winplaybox/icons';

export default function MenuButtonDemo(): JSX.Element {
  return (
    <Menu>
      <MenuButton variant="primary" icon={<ChevronDownIcon size={16} />}>
        Actions Menu
      </MenuButton>
      <MenuItem onSelect={() => console.log('Export')}>Export Dataset</MenuItem>
      <MenuItem onSelect={() => console.log('Duplicate')}>Duplicate Workflow</MenuItem>
      <MenuItem danger onSelect={() => console.log('Delete')}>Delete Workspace</MenuItem>
    </Menu>
  );
}`;

      case 'toggle-button':
        return `import React, { useState } from 'react';
import { ToggleButton } from '@winplaybox/react';
import { CheckIcon } from '@winplaybox/icons';

export default function ToggleButtonDemo(): JSX.Element {
  const [checked, setChecked] = useState(false);

  return (
    <ToggleButton
      checked={checked}
      onToggle={setChecked}
      icon={checked ? <CheckIcon size={16} /> : undefined}
    >
      {checked ? 'Muted' : 'Unmuted'}
    </ToggleButton>
  );
}`;

      case 'card-header':
        return `import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, Badge } from '@winplaybox/react';

export default function CardHeaderDemo(): JSX.Element {
  return (
    <Card style={{ maxWidth: 460, width: '100%' }}>
      <CardHeader
        header={<CardTitle>Cluster Node Alpha</CardTitle>}
        description={<CardDescription>Region: us-east-1 (N. Virginia)</CardDescription>}
        action={<Badge variant="success">Healthy</Badge>}
      />
    </Card>
  );
}`;

      case 'card-footer':
        return `import React from 'react';
import { Card, CardContent, CardFooter, Button } from '@winplaybox/react';

export default function CardFooterDemo(): JSX.Element {
  return (
    <Card style={{ maxWidth: 460, width: '100%', padding: '20px 24px' }}>
      <CardContent style={{ marginBottom: 16 }}>
        Confirm deployment of container revisions to production nodes.
      </CardContent>
      <CardFooter>
        <Button variant="secondary" onClick={() => console.log('Cancelled')}>Cancel</Button>
        <Button variant="primary" onClick={() => console.log('Confirmed')}>Deploy Now</Button>
      </CardFooter>
    </Card>
  );
}`;

      case 'card-preview':
        return `import React from 'react';
import { Card, CardPreview, CardContent, CardTitle, CardDescription, Box, Text } from '@winplaybox/react';

export default function CardPreviewDemo(): JSX.Element {
  return (
    <Card style={{ maxWidth: 360, width: '100%' }}>
      <CardPreview>
        <Box style={{ height: 160, background: 'linear-gradient(135deg, var(--color-action-primary) 0%, #6366f1 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Text weight="bold" color="inverse">Visual Media Showcase</Text>
        </Box>
      </CardPreview>
      <CardContent style={{ padding: 16 }}>
        <CardTitle>Spectra UI Media Surface</CardTitle>
        <CardDescription>CardPreview mounts edge-to-edge banners.</CardDescription>
      </CardContent>
    </Card>
  );
}`;

      case 'carousel':
        return `import React from 'react';
import { Carousel } from '@winplaybox/react';

export default function CarouselDemo(): JSX.Element {
  const slides = [
    { title: 'Multi-Platform Consistency', desc: 'One design language across Web, iOS, Android, macOS, and Windows' },
    { title: 'WCAG 2.1 AA Compliance', desc: 'Accessible roving tabindex, high-contrast, screen-reader verified' },
    { title: 'Sub-15 kB Tree Shaking', desc: 'Optimized ES modules for instant startup performance' },
  ];

  return (
    <Carousel autoPlay={false}>
      {slides.map((s, idx) => (
        <Box key={idx} style={{ padding: 40, textAlign: 'center', backgroundColor: 'var(--color-surface-raised)', borderRadius: 12 }}>
          <Stack spacing={8} align="center">
            <Text variant="heading-md" weight="bold">{s.title}</Text>
            <Text variant="body-sm" color="secondary">{s.desc}</Text>
          </Stack>
        </Box>
      ))}
    </Carousel>
  );
}`;

      case 'carousel-nav':
        return `import React, { useState } from 'react';
import { Stack, CarouselNav } from '@winplaybox/react';

export default function CarouselNavDemo(): JSX.Element {
  const [index, setIndex] = useState(0);

  return (
    <Stack direction="column" gap="md" align="center">
      <div style={{ fontSize: 14 }}>Slide {index + 1} of 5 Active</div>
      <CarouselNav
        total={5}
        current={index}
        onSelect={setIndex}
      />
    </Stack>
  );
}`;

      case 'interaction-tag':
        return `import React, { useState } from 'react';
import { Stack, InteractionTag } from '@winplaybox/react';
import { SparklesIcon } from '@winplaybox/icons';

export default function InteractionTagDemo(): JSX.Element {
  const [selected, setSelected] = useState(true);

  return (
    <Stack direction="row" gap="sm">
      <InteractionTag
        selected={selected}
        icon={<SparklesIcon size={14} />}
        closable
        onClose={() => setSelected(false)}
      >
        TypeScript 5.8
      </InteractionTag>
    </Stack>
  );
}`;

      case 'tag-group':
        return `import React from 'react';
import { TagGroup, InteractionTag } from '@winplaybox/react';

export default function TagGroupDemo(): JSX.Element {
  const tags = ['React', 'TypeScript', 'WebAssembly', 'Node.js'];

  return (
    <TagGroup>
      {tags.map((t) => (
        <InteractionTag key={t} closable>
          {t}
        </InteractionTag>
      ))}
    </TagGroup>
  );
}`;

      case 'rating-display':
        return `import React from 'react';
import { Stack, RatingDisplay } from '@winplaybox/react';

export default function RatingDisplayDemo(): JSX.Element {
  return (
    <Stack direction="column" gap="md">
      <RatingDisplay value={4.8} max={5} size="lg" />
      <RatingDisplay value={3.5} max={5} size="md" />
    </Stack>
  );
}`;

      case 'menu-grid':
        return `import React from 'react';
import { MenuGrid, MenuItem } from '@winplaybox/react';
import { GlobeIcon, SparklesIcon, CubeIcon, FocusTargetIcon } from '@winplaybox/icons';

export default function MenuGridDemo(): JSX.Element {
  return (
    <MenuGrid columns={2}>
      <MenuItem icon={<GlobeIcon size={16} />}>CDN Endpoints</MenuItem>
      <MenuItem icon={<SparklesIcon size={16} />}>AI Copilot</MenuItem>
      <MenuItem icon={<CubeIcon size={16} />}>Database Clusters</MenuItem>
      <MenuItem icon={<FocusTargetIcon size={16} />}>Identity & Access</MenuItem>
    </MenuGrid>
  );
};`;

      case 'portal-mount':
        return `import React, { useState } from 'react';
import { Portal, Button } from '@winplaybox/react';

export default function PortalMountDemo(): JSX.Element {
  const [mounted, setMounted] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Button variant="primary" onClick={() => setMounted(!mounted)}>
        {mounted ? 'Unmount Teleported Overlay' : 'Mount to document.body via Portal'}
      </Button>
      {mounted && (
        <Portal>
          <div
            style={{
              position: 'fixed',
              bottom: 24,
              right: 24,
              padding: '16px 20px',
              backgroundColor: 'var(--color-surface-elevated)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              borderRadius: 12,
              border: '1px solid var(--color-border-subtle)',
              zIndex: 9999,
            }}
          >
            Teleported directly to document.body!
          </div>
        </Portal>
      )}
    </div>
  );
}`;

      case 'text-input':
        return `import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react';
import type { TextInputProps } from '@winplaybox/react';
import { SearchIcon } from '@winplaybox/icons';

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
import { Select } from '@winplaybox/react';
import type { SelectOption } from '@winplaybox/react';

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
import { Checkbox } from '@winplaybox/react';
import type { CheckboxProps } from '@winplaybox/react';

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
import { RadioGroup, Radio } from '@winplaybox/react';
import type { RadioGroupProps } from '@winplaybox/react';

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
import { Switch } from '@winplaybox/react';
import type { SwitchProps } from '@winplaybox/react';

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
import { Avatar, AvatarGroup } from '@winplaybox/react';
import type { AvatarProps } from '@winplaybox/react';

export default function AvatarDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
      <Avatar
        name="Sarah Connor"
        size={${avatarSize}}
        shape="${avatarShape}"
        color="${avatarColor}"
        status="${avatarStatus}"
        outOfOffice={${avatarOof}}
        active="${avatarActive}"
      />
      <Avatar
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
        name="Elena Rostova"
        size={${avatarSize}}
        shape="${avatarShape}"
        status="${avatarStatus}"
      />
      <AvatarGroup max={3} size={${avatarSize}}>
        <Avatar name="Alex Vance" color="colorful" />
        <Avatar name="David Miller" color="colorful" />
        <Avatar name="Sam Wilson" color="colorful" />
        <Avatar name="Robin Hood" color="colorful" />
      </AvatarGroup>
    </div>
  );
}`;
      case 'badge':
        return `import React from 'react';
import { Badge, CounterBadge, PresenceBadge } from '@winplaybox/react';
import type { BadgeProps } from '@winplaybox/react';
import { SparklesIcon } from '@winplaybox/icons';

export default function BadgeDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge
        appearance="${badgeAppearance}"
        color="${badgeColor}"
        shape="${badgeShape}"
        size="${badgeSize}"
        dot={${badgeDot}}
        ${badgeWithIcon ? 'icon={<SparklesIcon size={12} />}' : ''}
      >
        Badge Preview
      </Badge>
      <CounterBadge count={42} appearance="${badgeAppearance}" color="${badgeColor}" />
      <CounterBadge count={128} overflowCount={99} color="danger" />
      <PresenceBadge status="available" size="${badgeSize === 'tiny' ? 'small' : badgeSize}" />
    </div>
  );
}`;
      case 'tooltip':
        return `import React from 'react';
import { Tooltip, Button } from '@winplaybox/react';
import type { TooltipProps } from '@winplaybox/react';

export default function TooltipDemo(): JSX.Element {
  return (
    <Tooltip content="Quickly export workspace configurations to JSON">
      <Button variant="secondary">Hover for Details</Button>
    </Tooltip>
  );
}`;
      case 'tabs':
        return `import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@winplaybox/react';
import type { TabsProps } from '@winplaybox/react';

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
import { Card, Button } from '@winplaybox/react';
import type { CardProps } from '@winplaybox/react';

export default function CardDemo(): JSX.Element {
  return (
    <Card variant="bordered" padding="md">
      <Stack spacing={8}>
        <Text variant="heading-sm" weight="semibold">Workspace Telemetry</Text>
        <Text variant="body-sm" color="secondary" style={{ marginBottom: 12 }}>
          Active monitor running across 14 clusters with 99.99% SLA.
        </Text>
        <Button variant="primary">Manage Cluster</Button>
      </Stack>
    </Card>
  );
}`;
      case 'list':
        return `import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@winplaybox/react';
import type { ListProps } from '@winplaybox/react';
import { UserIcon } from '@winplaybox/icons';

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
import { Alert, Button } from '@winplaybox/react';
import type { AlertProps } from '@winplaybox/react';

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
import { Spinner, Button } from '@winplaybox/react';
import type { SpinnerProps } from '@winplaybox/react';

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
import { Skeleton } from '@winplaybox/react';
import type { SkeletonProps } from '@winplaybox/react';

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
import { Divider, Button, TextInput } from '@winplaybox/react';
import type { DividerProps } from '@winplaybox/react';

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
import { Chip } from '@winplaybox/react';
import type { ChipProps } from '@winplaybox/react';
import { SparklesIcon } from '@winplaybox/icons';

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
      case 'breadcrumb':
      case 'breadcrumbs':
        return `import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbButton, BreadcrumbDivider } from '@winplaybox/react';

export default function BreadcrumbDemo(): JSX.Element {
  return (
    <Breadcrumb
      items={[
        { label: 'Home', href: '/' },
        { label: 'Design System', href: '/tokens' },
        { label: 'Components', href: '/components' },
        { label: 'Breadcrumb', isCurrent: true },
      ]}
    />
  );
}`;

      case 'compound-button':
        return `import React from 'react';
import { CompoundButton } from '@winplaybox/react';
import { SparklesIcon } from '@winplaybox/icons';

export default function CompoundButtonDemo(): JSX.Element {
  return (
    <CompoundButton
      variant="primary"
      subtitle="Deploy continuous integration pipeline"
      icon={<SparklesIcon size={20} />}
      onClick={() => console.log('Deploy triggered')}
    >
      Deploy Production Release
    </CompoundButton>
  );
}`;

      case 'button-group':
        return `import React, { useState } from 'react';
import { ButtonGroup, Button } from '@winplaybox/react';

export default function ButtonGroupDemo(): JSX.Element {
  const [active, setActive] = useState<'day' | 'week' | 'month'>('week');

  return (
    <ButtonGroup variant="secondary">
      <Button variant={active === 'day' ? 'primary' : 'secondary'} onClick={() => setActive('day')}>Day</Button>
      <Button variant={active === 'week' ? 'primary' : 'secondary'} onClick={() => setActive('week')}>Week</Button>
      <Button variant={active === 'month' ? 'primary' : 'secondary'} onClick={() => setActive('month')}>Month</Button>
    </ButtonGroup>
  );
}`;

      case 'icon-button':
        return `import React from 'react';
import { IconButton } from '@winplaybox/react';
import { SearchIcon } from '@winplaybox/icons';

export default function IconButtonDemo(): JSX.Element {
  return (
    <IconButton
      icon={<SearchIcon size={18} />}
      aria-label="Search design system"
      variant="secondary"
      shape="rounded"
    />
  );
}`;

      case 'slider':
        return `import React, { useState } from 'react';
import { Slider } from '@winplaybox/react';

export default function SliderDemo(): JSX.Element {
  const [val, setVal] = useState(64);

  return (
    <div style={{ maxWidth: 360, width: '100%' }}>
      <Slider
        label="Volume Level"
        value={val}
        min={0}
        max={100}
        onChange={setVal}
        valueFormatter={(v) => \`\${v}%\`}
      />
    </div>
  );
}`;

      case 'rating':
        return `import React, { useState } from 'react';
import { Rating } from '@winplaybox/react';

export default function RatingDemo(): JSX.Element {
  const [rating, setRating] = useState(4);

  return (
    <Rating
      value={rating}
      max={5}
      onChange={setRating}
    />
  );
}`;

      case 'textarea':
        return `import React, { useState } from 'react';
import { Textarea } from '@winplaybox/react';

export default function TextareaDemo(): JSX.Element {
  const [text, setText] = useState('');

  return (
    <div style={{ maxWidth: 440, width: '100%' }}>
      <Textarea
        label="Feedback Notes"
        placeholder="Type observations here..."
        description="Provide feedback on token accessibility."
        showCount
        maxLength={200}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}`;

      case 'checkbox-group':
        return `import React, { useState } from 'react';
import { CheckboxGroup, Checkbox } from '@winplaybox/react';

export default function CheckboxGroupDemo(): JSX.Element {
  const [security, setSecurity] = useState(true);
  const [updates, setUpdates] = useState(false);

  return (
    <CheckboxGroup label="Notification Channels" description="Configure delivery destinations">
      <Checkbox label="Security Alerts (Immediate)" checked={security} onChange={setSecurity} />
      <Checkbox label="Weekly Summary Digest" checked={updates} onChange={setUpdates} />
    </CheckboxGroup>
  );
}`;

      case 'autocomplete':
      case 'combobox':
        return `import React, { useState } from 'react';
import { Autocomplete } from '@winplaybox/react';

const TECHNOLOGIES = [
  { value: 'react', label: 'React.js', description: 'Declarative UI library' },
  { value: 'vue', label: 'Vue.js', description: 'Progressive Framework' },
  { value: 'next', label: 'Next.js', description: 'Full-stack React platform' },
  { value: 'react-native', label: 'React Native', description: 'Native mobile platform' },
];

export default function AutocompleteDemo(): JSX.Element {
  const [val, setVal] = useState('');

  return (
    <div style={{ maxWidth: 360, width: '100%' }}>
      <Autocomplete
        label="Select Platform"
        placeholder="Search frameworks..."
        options={TECHNOLOGIES}
        value={val}
        onChange={setVal}
      />
    </div>
  );
}`;

      case 'avatar-group':
        return `import React from 'react';
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
}`;

      case 'tag':
        return `import React from 'react';
import { Stack, Tag } from '@winplaybox/react';

export default function TagDemo(): JSX.Element {
  return (
    <Stack direction="row" gap="sm" wrap>
      <Tag variant="primary">v1.0.0</Tag>
      <Tag variant="success" closable onClose={() => console.log('Closed')}>Active Node</Tag>
      <Tag variant="warning">High Memory</Tag>
      <Tag variant="danger">Critical</Tag>
    </Stack>
  );
}`;

      case 'media-card':
        return `import React from 'react';
import { MediaCard, Badge, Button } from '@winplaybox/react';

export default function MediaCardDemo(): JSX.Element {
  return (
    <div style={{ maxWidth: 360, width: '100%' }}>
      <MediaCard
        media={<div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, var(--color-surface-raised), var(--color-surface-elevated))' }} />}
        title="Spectra UI v1.0"
        subtitle="Universal Design System"
        badge={<Badge variant="info">Production</Badge>}
        actions={<><Button variant="primary" size="sm">Explore Tokens</Button><Button variant="secondary" size="sm">Changelog</Button></>}
      >
        Enterprise-grade multi-platform token architecture with WAI-ARIA AA compliance.
      </MediaCard>
    </div>
  );
}`;

      case 'table':
      case 'data-grid':
        return `import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell, Badge } from '@winplaybox/react';

export default function TableDemo(): JSX.Element {
  return (
    <Table bordered striped>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Service</TableHeaderCell>
          <TableHeaderCell>Region</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>API Gateway</TableCell>
          <TableCell>us-east-1</TableCell>
          <TableCell><Badge variant="success">Operational</Badge></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Auth Broker</TableCell>
          <TableCell>eu-west-1</TableCell>
          <TableCell><Badge variant="success">Operational</Badge></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cache Redis</TableCell>
          <TableCell>ap-south-1</TableCell>
          <TableCell><Badge variant="warning">Degraded</Badge></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`;

      case 'tree-view':
        return `import React from 'react';
import { TreeView } from '@winplaybox/react';

const TREE_DATA = [
  {
    id: 'src',
    label: 'src',
    children: [
      {
        id: 'components',
        label: 'components',
        children: [
          { id: 'button', label: 'Button.tsx' },
          { id: 'split-button', label: 'SplitButton.tsx' },
        ],
      },
      { id: 'index', label: 'index.ts' },
    ],
  },
];

export default function TreeViewDemo(): JSX.Element {
  return (
    <div style={{ maxWidth: 300, width: '100%' }}>
      <TreeView items={TREE_DATA} defaultExpandedIds={['src', 'components']} />
    </div>
  );
}`;

      case 'statistic':
        return `import React from 'react';
import { Statistic } from '@winplaybox/react';

export default function StatisticDemo(): JSX.Element {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, width: '100%' }}>
      <Statistic
        title="Monthly Active Users"
        value="128,450"
        trend={{ value: '14.2%', direction: 'up', label: 'vs last month' }}
      />
      <Statistic
        title="Avg API Latency"
        value="18"
        suffix="ms"
        trend={{ value: '2.4ms', direction: 'down', label: 'improved' }}
      />
    </div>
  );
}`;

      case 'timeline':
        return `import React from 'react';
import { Timeline, TimelineItem } from '@winplaybox/react';

export default function TimelineDemo(): JSX.Element {
  return (
    <div style={{ maxWidth: 440, width: '100%' }}>
      <Timeline>
        <TimelineItem
          title="Deployment v1.2.0"
          description="Deployed 58 components to production CDN nodes."
          timestamp="10:45 AM"
        />
        <TimelineItem
          title="Automated Test Suite Passed"
          description="1,240 integration tests completed in 42 seconds."
          timestamp="10:30 AM"
        />
      </Timeline>
    </div>
  );
}`;

      case 'calendar':
        return `import React, { useState } from 'react';
import { Calendar } from '@winplaybox/react';

export default function CalendarDemo(): JSX.Element {
  const [date, setDate] = useState(new Date());

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Calendar value={date} onChange={setDate} />
    </div>
  );
}`;

      case 'progress-bar':
        return `import React from 'react';
import { ProgressBar } from '@winplaybox/react';

export default function ProgressBarDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 380, width: '100%' }}>
      <ProgressBar value={72} label="Asset Migration" showValue variant="primary" />
      <ProgressBar value={100} label="Build Verified" showValue variant="success" />
      <ProgressBar indeterminate label="Compiling TypeScript Tokens..." variant="info" />
    </div>
  );
}`;

      case 'toast':
        return `import React from 'react';
import { Toast, Button } from '@winplaybox/react';

export default function ToastDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 380, width: '100%' }}>
      <Toast variant="success" title="Changes Saved" onClose={() => console.log('Closed')}>
        Your design token preferences were synchronized.
      </Toast>
      <Toast
        variant="warning"
        title="Cache Warning"
        action={<Button variant="secondary" size="sm">Purge Cache</Button>}
      >
        CDN cache is at 94% storage capacity.
      </Toast>
    </div>
  );
}`;

      case 'drawer':
        return `import React, { useState } from 'react';
import { Drawer, Button } from '@winplaybox/react';

export default function DrawerDemo(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ textAlign: 'center' }}>
      <Button variant="primary" onClick={() => setOpen(true)}>Open Settings Drawer</Button>
      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        title="System Preferences"
        footer={<Button variant="primary" onClick={() => setOpen(false)}>Save Changes</Button>}
      >
        <p>Configure cross-platform layout tokens, reading direction, and ambient canvas theme.</p>
      </Drawer>
    </div>
  );
}`;

      case 'paper':
        return `import React from 'react';
import { Paper } from '@winplaybox/react';

export default function PaperDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
      <Paper elevation={1}>Elevation 1</Paper>
      <Paper elevation={2}>Elevation 2</Paper>
      <Paper elevation={3}>Elevation 3</Paper>
    </div>
  );
}`;

      case 'pagination':
        return `import React, { useState } from 'react';
import { Pagination } from '@winplaybox/react';

export default function PaginationDemo(): JSX.Element {
  const [page, setPage] = useState(1);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Pagination count={10} page={page} onChange={setPage} />
    </div>
  );
}`;

      case 'stepper':
        return `import React, { useState } from 'react';
import { Stepper, Button } from '@winplaybox/react';

const STEPS = [
  { title: 'Project Scope', description: 'Define tokens and platforms' },
  { title: 'Component Review', description: 'Accessibility and variant checks' },
  { title: 'Publish', description: 'Deploy to npm registry' },
];

export default function StepperDemo(): JSX.Element {
  const [step, setStep] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 600, width: '100%' }}>
      <Stepper steps={STEPS} activeStep={step} />
      <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
        <Button variant="secondary" size="sm" disabled={step <= 0} onClick={() => setStep(step - 1)}>Previous</Button>
        <Button variant="primary" size="sm" disabled={step >= STEPS.length - 1} onClick={() => setStep(step + 1)}>Next Step</Button>
      </div>
    </div>
  );
}`;

      case 'menu':
        return `import React from 'react';
import { Menu, MenuItem } from '@winplaybox/react';
import { CopyIcon, CloseIcon } from '@winplaybox/icons';

export default function MenuDemo(): JSX.Element {
  return (
    <div style={{ maxWidth: 220, width: '100%' }}>
      <Menu>
        <MenuItem icon={<CopyIcon size={16} />} shortcut="Ctrl+C">Duplicate Node</MenuItem>
        <MenuItem danger icon={<CloseIcon size={16} />}>Delete Component</MenuItem>
      </Menu>
    </div>
  );
}`;

      case 'app-bar':
        return `import React from 'react';
import { AppBar, Button } from '@winplaybox/react';

export default function AppBarDemo(): JSX.Element {
  return (
    <div style={{ width: '100%' }}>
      <AppBar
        brand={<span style={{ fontWeight: 700, fontSize: 16 }}>Spectra UI</span>}
        actions={<Button variant="primary" size="sm">Sign In</Button>}
      >
        <span>Docs</span>
        <span>Tokens</span>
        <span>Showcase</span>
      </AppBar>
    </div>
  );
}`;

      case 'link':
        return `import React from 'react';
import { Link } from '@winplaybox/react';

export default function LinkDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
      <Link href="https://github.com/Winplaybox/spectra-ui" external>GitHub Repository</Link>
      <Link href="/tokens/colors">Color Tokens</Link>
    </div>
  );
}`;

      case 'speed-dial':
        return `import React from 'react';
import { SpeedDial } from '@winplaybox/react';
import { SearchIcon, CopyIcon } from '@winplaybox/icons';

export default function SpeedDialDemo(): JSX.Element {
  const actions = [
    { icon: <SearchIcon size={16} />, name: 'Search', onClick: () => console.log('Search') },
    { icon: <CopyIcon size={16} />, name: 'Copy', onClick: () => console.log('Copy') },
  ];

  return (
    <div style={{ padding: 40, display: 'flex', justifyContent: 'center' }}>
      <SpeedDial actions={actions} />
    </div>
  );
}`;

      case 'popover':
        return `import React from 'react';
import { Popover, Button } from '@winplaybox/react';

export default function PopoverDemo(): JSX.Element {
  return (
    <div style={{ textAlign: 'center' }}>
      <Popover
        title="Token Architecture"
        trigger={<Button variant="secondary">View Token Info</Button>}
      >
        Spectra UI synchronizes 175 design tokens across Web and React Native Hermes runtimes.
      </Popover>
    </div>
  );
}`;

      case 'box':
        return `import React from 'react';
import { Box } from '@winplaybox/react';

export default function BoxDemo(): JSX.Element {
  return (
    <Box
      as="div"
      style={{
        padding: '28px 36px',
        backgroundColor: 'var(--color-surface-elevated)',
        borderRadius: 8,
        border: '1px solid var(--color-border-subtle)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
        textAlign: 'center',
      }}
    >
      <Stack spacing={4} align="center">
        <Text variant="heading-sm" weight="bold">Polymorphic Box Surface</Text>
        <Text variant="body-sm" color="secondary">
          Adapts seamlessly to any HTML semantic element while inheriting design token variables.
        </Text>
      </Stack>
    </Box>
  );
}`;

      case 'container':
        return `import React from 'react';
import { Container } from '@winplaybox/react';

export default function ContainerDemo(): JSX.Element {
  return (
    <Container size="md" style={{ padding: 24, textAlign: 'center' }}>
      <Stack spacing={6} align="center">
        <Text variant="heading-md" weight="semibold">Responsive Viewport Container</Text>
        <Text variant="body-sm" color="secondary">Centers content with responsive horizontal constraints calibrated to token scales.</Text>
      </Stack>
    </Container>
  );
}`;

      case 'grid':
        return `import React from 'react';
import { Grid, Box } from '@winplaybox/react';

export default function GridDemo(): JSX.Element {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Box style={{ padding: 20, textAlign: 'center', background: 'var(--color-surface-elevated)', borderRadius: 8 }}>Column 1</Box>
      </Grid>
      <Grid item xs={4}>
        <Box style={{ padding: 20, textAlign: 'center', background: 'var(--color-surface-elevated)', borderRadius: 8 }}>Column 2</Box>
      </Grid>
      <Grid item xs={4}>
        <Box style={{ padding: 20, textAlign: 'center', background: 'var(--color-surface-elevated)', borderRadius: 8 }}>Column 3</Box>
      </Grid>
    </Grid>
  );
}`;

      case 'stack':
        return `import React from 'react';
import { Stack, Button } from '@winplaybox/react';

export default function StackDemo(): JSX.Element {
  return (
    <Stack direction="row" gap="md" align="center">
      <Button variant="primary">Action 1</Button>
      <Button variant="secondary">Action 2</Button>
      <Button variant="tertiary">Action 3</Button>
    </Stack>
  );
}`;

      case 'bottom-nav':
        return `import React, { useState } from 'react';
import { BottomNav } from '@winplaybox/react';
import { SearchIcon, SparklesIcon, UserIcon } from '@winplaybox/icons';

export default function BottomNavDemo(): JSX.Element {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div style={{ maxWidth: 360, width: '100%', margin: '0 auto' }}>
      <BottomNav
        items={[
          { id: 'home', label: 'Home', icon: <SearchIcon size={18} /> },
          { id: 'explore', label: 'Explore', icon: <SparklesIcon size={18} /> },
          { id: 'profile', label: 'Profile', icon: <UserIcon size={18} /> },
        ]}
        activeId={activeTab}
        onChange={setActiveTab}
      />
    </div>
  );
}`;

      case 'platform-chassis':
        return `import React, { useState } from 'react';
import { PlatformChassis, Button } from '@winplaybox/react';

export default function PlatformChassisDemo(): JSX.Element {
  const [platform, setPlatform] = useState<'web' | 'ios' | 'android' | 'macos' | 'windows'>('web');

  return (
    <PlatformChassis platform={platform} title="Spectra UI Frame">
      <Stack spacing={8} align="center" style={{ padding: 20 }}>
        <Text variant="heading-sm" weight="semibold">Platform Chassis Simulator</Text>
        <Text variant="body-sm" color="secondary">Preview components inside authentic OS titlebars and viewport frames.</Text>
        <Button variant="primary">Simulated Action</Button>
      </Stack>
    </PlatformChassis>
  );
}`;

      case 'color-picker':
        return `import React, { useState } from 'react';
import { ColorPicker } from '@winplaybox/react';

export default function ColorPickerDemo(): JSX.Element {
  const [color, setColor] = useState('#2563EB');

  return (
    <div style={{ maxWidth: 320, margin: '0 auto' }}>
      <ColorPicker
        label="Theme Accent Token"
        description="Choose a preset swatch or type custom hexadecimal color"
        value={color}
        onChange={setColor}
      />
    </div>
  );
}`;

      case 'radio-group':
        return `import React, { useState } from 'react';
import { RadioGroup, Radio } from '@winplaybox/react';

export default function RadioGroupDemo(): JSX.Element {
  const [value, setValue] = useState('standard');

  return (
    <RadioGroup value={value} onChange={setValue}>
      <Radio value="standard" label="Standard Performance (1 CPU, 2GB RAM)" />
      <Radio value="high" label="High Throughput (4 CPU, 16GB RAM)" />
      <Radio value="serverless" label="Serverless Auto-scaling" />
    </RadioGroup>
  );
}`;

      case 'copy-button':
        return `import React from 'react';
import { CopyButton } from '@winplaybox/react';

export default function CopyButtonDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <CopyButton
        value="pnpm add @winplaybox/react"
        label="Copy Installation Command"
        variant="primary"
      />
      <CopyButton
        value="https://spectra-ui.dev"
        aria-label="Copy Documentation URL"
      />
    </div>
  );
}`;

      case 'date-picker':
        return `import React, { useState } from 'react';
import { DatePicker } from '@winplaybox/react';

export default function DatePickerDemo(): JSX.Element {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div style={{ maxWidth: 360, width: '100%', margin: '0 auto' }}>
      <DatePicker
        label="Production Release Date"
        value={date}
        onChange={setDate}
        placeholder="Pick target deployment date..."
        clearable
      />
    </div>
  );
}`;

      case 'list-view':
        return `import React from 'react';
import { ListView } from '@winplaybox/react';

interface ClusterNode {
  id: string;
  name: string;
  region: string;
  status: string;
}

const NODES: ClusterNode[] = [
  { id: '1', name: 'Auth Gateway us-east-1', region: 'Virginia', status: 'Healthy' },
  { id: '2', name: 'Database Replica eu-west-1', region: 'Ireland', status: 'Healthy' },
  { id: '3', name: 'Cache Layer ap-south-1', region: 'Mumbai', status: 'Optimal' },
];

export default function ListViewDemo(): JSX.Element {
  return (
    <div style={{ maxWidth: 540, width: '100%', margin: '0 auto' }}>
      <ListView
        data={NODES}
        divided
        renderItem={(item) => (
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px' }}>
            <div>
              <div style={{ fontWeight: 600 }}>{item.name}</div>
              <div style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>{item.region}</div>
            </div>
            <span style={{ color: 'var(--color-feedback-success)', fontSize: 13, fontWeight: 500 }}>
              {item.status}
            </span>
          </div>
        )}
      />
    </div>
  );
}`;

      case 'web-view-box':
        return `import React from 'react';
import { WebViewBox } from '@winplaybox/react';

export default function WebViewBoxDemo(): JSX.Element {
  return (
    <div style={{ maxWidth: 640, width: '100%', margin: '0 auto' }}>
      <WebViewBox
        src="https://spectra-ui.dev"
        title="Spectra UI Documentation"
        showHeader
        height="320px"
      />
    </div>
  );
}`;

      case 'status-indicator':
        return `import React from 'react';
import { LiveIndicator } from '@winplaybox/react';

export default function StatusIndicatorDemo(): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <LiveIndicator status="online" variant="pulse" label="Available" />
      <LiveIndicator status="busy" variant="static" label="Busy" />
      <LiveIndicator status="connecting" variant="beacon" label="Syncing" />
      <LiveIndicator status="offline" variant="static" label="Offline" />
    </div>
  );
}`;

      case 'field':
        return `import React from 'react';
import { Field, TextInput } from '@winplaybox/react';

export default function FieldDemo(): JSX.Element {
  return (
    <Field
      label="Production Cluster Host"
      required
      hint="Fully qualified domain name or IP address"
      info="Used by Envoy ingress proxy to route inbound traffic"
    >
      <TextInput placeholder="e.g. k8s-node-alpha.internal" />
    </Field>
  );
}`;

      case 'search-box':
        return `import React, { useState } from 'react';
import { SearchBox } from '@winplaybox/react';

export default function SearchBoxDemo(): JSX.Element {
  const [query, setQuery] = useState('');

  return (
    <SearchBox
      value={query}
      onChangeValue={setQuery}
      onClear={() => setQuery('')}
      placeholder="Search repositories, commits, and packages..."
      fullWidth
    />
  );
}`;

      case 'spin-button':
        return `import React, { useState } from 'react';
import { NumberInput } from '@winplaybox/react';

export default function SpinButtonDemo(): JSX.Element {
  const [val, setVal] = useState(3);

  return (
    <NumberInput
      label="Replica Instance Count"
      value={val}
      onChange={setVal}
      min={1}
      max={16}
      step={1}
      description="Autoscaling node instances between 1 and 16"
    />
  );
}`;

      case 'info-label':
        return `import React from 'react';
import { Stack, TextInput, InfoLabel } from '@winplaybox/react';

export default function InfoLabelDemo(): JSX.Element {
  return (
    <Stack direction="column" gap="sm" style={{ maxWidth: 400, width: '100%' }}>
      <InfoLabel
        htmlFor="deployment-region"
        info="Direct AWS data center location where computing units run"
        required
      >
        Deployment Region
      </InfoLabel>
      <TextInput id="deployment-region" defaultValue="us-east-1 (N. Virginia)" />
    </Stack>
  );
}`;

      case 'label':
        return `import React from 'react';
import { Stack, TextInput, Label } from '@winplaybox/react';

export default function LabelDemo(): JSX.Element {
  return (
    <Stack direction="column" gap="sm" style={{ maxWidth: 400, width: '100%' }}>
      <Label htmlFor="service-acc" required>
        Service Account Identifier
      </Label>
      <TextInput id="service-acc" placeholder="svc-alpha-pipeline" />
    </Stack>
  );
}`;

      case 'persona':
        return `import React from 'react';
import { Stack, Box, Avatar, LiveIndicator } from '@winplaybox/react';

export default function PersonaDemo(): JSX.Element {
  return (
    <Box style={{ maxWidth: 440, width: '100%' }}>
      <Stack direction="row" gap="md" align="center" style={{ padding: '14px 18px', borderRadius: 10, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-subtle)' }}>
        <div style={{ position: 'relative' }}>
          <Avatar name="Sarah Connor" size="lg" />
          <span style={{ position: 'absolute', bottom: -2, right: -2 }}>
            <LiveIndicator status="online" variant="pulse" size="sm" label={null} />
          </span>
        </div>
        <Stack direction="column" gap="xs">
          <span style={{ fontSize: 14, fontWeight: 700 }}>Sarah Connor</span>
          <span style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>Principal Platform Architect</span>
          <span style={{ fontSize: 11, color: 'var(--color-action-primary)' }}>sarah.c@winplaybox.in</span>
        </Stack>
      </Stack>
    </Box>
  );
}`;

      case 'teaching-popover':
        return `import React from 'react';
import { Stack, Box, Button, Badge } from '@winplaybox/react';

export default function TeachingPopoverDemo(): JSX.Element {
  return (
    <Box style={{ maxWidth: 360, padding: 20, borderRadius: 12, border: '1px solid var(--color-border-default)', backgroundColor: 'var(--color-surface-elevated)' }}>
      <Stack direction="row" justify="between" align="center" style={{ marginBottom: 8, width: '100%' }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-action-primary)' }}>Step 1 of 3</span>
        <Badge variant="info">New</Badge>
      </Stack>
      <Stack spacing={4} style={{ marginBottom: 16 }}>
        <Text variant="heading-sm" weight="bold">Multi-Platform Token Engine</Text>
        <Text variant="body-sm" color="secondary" style={{ lineHeight: 1.5 }}>
          Theme tokens automatically adapt between Web, iOS, Android, macOS, and Windows.
        </Text>
      </Stack>
      <Stack direction="row" justify="between" style={{ width: '100%' }}>
        <Button size="sm" variant="secondary">Skip</Button>
        <Button size="sm" variant="primary">Next Step</Button>
      </Stack>
    </Box>
  );
}`;

      case 'tag-picker':
        return `import React from 'react';
import { Stack, TagGroup, InteractionTag, SearchBox } from '@winplaybox/react';

export default function TagPickerDemo(): JSX.Element {
  return (
    <Stack direction="column" gap="sm" style={{ maxWidth: 440, width: '100%' }}>
      <TagGroup>
        {['Production', 'v0.2.0', 'Zero-Jank', 'WCAG-AA'].map((tag) => (
          <InteractionTag key={tag} closable>
            {tag}
          </InteractionTag>
        ))}
      </TagGroup>
      <SearchBox size="sm" placeholder="Search & add tags..." fullWidth />
    </Stack>
  );
}`;

      case 'time-picker':
        return `import React from 'react';
import { Stack, Box, TextInput, Badge } from '@winplaybox/react';

export default function TimePickerDemo(): JSX.Element {
  return (
    <Box style={{ maxWidth: 300, width: '100%' }}>
      <Stack direction="row" gap="sm" align="center">
        <TextInput defaultValue="14:30" type="time" style={{ width: 140 }} />
        <Badge variant="info">UTC +05:30</Badge>
      </Stack>
    </Box>
  );
}`;

      case 'toolbar':
        return `import React from 'react';
import { Stack, Box, ButtonGroup, Button, IconButton } from '@winplaybox/react';
import { SearchIcon, InfoIcon } from '@winplaybox/icons';

export default function ToolbarDemo(): JSX.Element {
  return (
    <Box style={{ maxWidth: 520, width: '100%' }}>
      <Stack role="toolbar" direction="row" gap="sm" align="center" style={{ padding: 8, borderRadius: 8, backgroundColor: 'var(--color-surface-raised)' }}>
        <ButtonGroup variant="secondary">
          <Button size="sm">File</Button>
          <Button size="sm">Edit</Button>
          <Button size="sm">View</Button>
        </ButtonGroup>
        <IconButton size="sm" aria-label="Search" icon={<SearchIcon size={14} />} />
        <IconButton size="sm" aria-label="Info" icon={<InfoIcon size={14} />} />
        <Button size="sm" variant="primary" style={{ marginLeft: 'auto' }}>Publish</Button>
      </Stack>
    </Box>
  );
}`;

      case 'overflow':
        return `import React from 'react';
import { Overflow, OverflowItem, OverflowMenu, Button, Box } from '@winplaybox/react';

export default function OverflowDemo(): JSX.Element {
  const items = Array.from({ length: 8 }, (_, i) => ({
    id: \`item-\${i}\`,
    label: \`Item \${i}\`,
  }));

  const itemLabels = Object.fromEntries(items.map((i) => [i.id, i.label]));

  return (
    <Box
      style={{
        border: '2px solid var(--color-action-primary)',
        position: 'relative',
        borderRadius: 4,
        padding: '24px 14px 14px 14px',
        resize: 'horizontal',
        overflow: 'hidden',
        minWidth: 200,
        maxWidth: 560,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: 'var(--color-action-primary)',
          color: '#FFFFFF',
          padding: '2px 8px',
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.04em',
        }}
      >
        Resizable Area
      </div>
      <Overflow minimumVisible={1}>
        {items.map((item) => (
          <OverflowItem key={item.id} id={item.id}>
            <Button size="sm" variant="secondary">{item.label}</Button>
          </OverflowItem>
        ))}
        <OverflowMenu itemLabels={itemLabels} />
      </Overflow>
    </Box>
  );
}`;

      case 'image':
        return `import React from 'react';
import { Box, Stack } from '@winplaybox/react';

export default function ImageDemo(): JSX.Element {
  return (
    <Box style={{ maxWidth: 440, width: '100%', height: 200, borderRadius: 12, backgroundColor: 'var(--color-surface-raised)' }}>
      <Stack align="center" justify="center" style={{ width: '100%', height: '100%' }}>
        <span style={{ fontWeight: 700 }}>Responsive Image Surface</span>
      </Stack>
    </Box>
  );
}`;

      case 'portal':
        return `import React, { useState } from 'react';
import { Button, Portal } from '@winplaybox/react';

export default function PortalDemo(): JSX.Element {
  const [mounted, setMounted] = useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setMounted(!mounted)}>
        {mounted ? 'Unmount Teleported Overlay' : 'Mount to document.body via Portal'}
      </Button>
      {mounted && (
        <Portal>
          <div style={{ position: 'fixed', bottom: 24, right: 24, padding: 16, backgroundColor: 'var(--color-surface-elevated)', borderRadius: 12 }}>
            Teleported directly to document.body!
          </div>
        </Portal>
      )}
    </div>
  );
}`;

      default: {
        const safeName = meta.name.replace(/[\s-]+/g, '');
        return `import React from 'react';
import { ${safeName} } from '@winplaybox/react';

export default function ${safeName}Demo(): JSX.Element {
  return (
    <Box style={{ padding: 24, textAlign: 'center' }}>
      <Stack spacing={6} align="center">
        <Text variant="heading-sm" weight="semibold">${meta.name}</Text>
        <Text variant="body-sm" color="secondary">${meta.description}</Text>
      </Stack>
    </Box>
  );
}`;
      }
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
import { Button } from '@winplaybox/react-native';
import { CheckIcon } from '@winplaybox/icons';

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
import { TextInput } from '@winplaybox/react-native';

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
import { Switch } from '@winplaybox/react-native';

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
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@winplaybox/react-native';

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
import { Avatar } from '@winplaybox/react-native';

export const NativeAvatarDemo = () => {
  return <Avatar name="Sarah Connor" size="md" status="online" />;
};`;
      case 'badge':
        return `// React Native Mobile Implementation (iOS & Android)
import React from 'react';
import { Badge } from '@winplaybox/react-native';

export const NativeBadgeDemo = () => {
  return <Badge variant="success">Active</Badge>;
};`;
      case 'card':
        return `// React Native Mobile Implementation (iOS & Android)
import React from 'react';
import { Card, Text } from '@winplaybox/react-native';

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
import { Tabs } from '@winplaybox/react-native';

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
import { Alert } from '@winplaybox/react-native';

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
import { Spinner } from '@winplaybox/react-native';

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
import { Skeleton } from '@winplaybox/react-native';

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
import { Divider, Button } from '@winplaybox/react-native';

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
import { Chip } from '@winplaybox/react-native';

export const NativeChipDemo = () => {
  return (
    <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
      <Chip label="React Native" variant="filled" selected />
      <Chip label="TypeScript" variant="outlined" />
      <Chip label="Hermes" variant="filled" />
    </View>
  );
};`;
      case 'breadcrumb':
      case 'breadcrumbs':
        return `// React Native Mobile Implementation (iOS & Android)
import React from 'react';
import { Breadcrumbs } from '@winplaybox/react-native';

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
      case 'copy-button':
        return `// React Native Mobile Implementation (iOS & Android)
import React from 'react';
import { View } from 'react-native';
import { CopyButton } from '@winplaybox/react-native';

export const NativeCopyButtonDemo = () => {
  return (
    <View style={{ gap: 12, width: '100%' }}>
      <CopyButton
        value="0x71C6793F2016377756f54c29B"
        label="Copy Wallet Address"
      />
    </View>
  );
};`;
      case 'date-picker':
        return `// React Native Mobile Implementation (iOS & Android)
import React, { useState } from 'react';
import { View } from 'react-native';
import { DatePicker } from '@winplaybox/react-native';

export const NativeDatePickerDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <View style={{ width: '100%', padding: 16 }}>
      <DatePicker
        label="Target Release Date"
        value={date}
        onChange={setDate}
      />
    </View>
  );
};`;
      case 'list-view':
        return `// React Native Mobile Implementation (iOS & Android)
import React from 'react';
import { View, Text } from 'react-native';
import { ListView } from '@winplaybox/react-native';

export const NativeListViewDemo = () => {
  return (
    <ListView
      data={[
        { id: '1', title: 'Service Alpha', status: 'Active' },
        { id: '2', title: 'Service Beta', status: 'Optimal' },
      ]}
      divided
      renderItem={({ item }) => (
        <View style={{ padding: 14 }}>
          <Text style={{ fontWeight: '600' }}>{item.title}</Text>
          <Text style={{ fontSize: 12, color: '#888' }}>{item.status}</Text>
        </View>
      )}
    />
  );
};`;
      case 'web-view-box':
        return `// React Native Mobile Implementation (iOS & Android)
import React from 'react';
import { View } from 'react-native';
import { WebViewBox } from '@winplaybox/react-native';

export const NativeWebViewBoxDemo = () => {
  return (
    <View style={{ flex: 1, height: 260 }}>
      <WebViewBox
        source={{ uri: 'https://spectra-ui.dev' }}
        title="In-App Documentation"
        showHeader
      />
    </View>
  );
};`;
      default:
        return `// React Native Mobile Implementation (iOS & Android)
import React from 'react';
import { ${meta.name} } from '@winplaybox/react-native';

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
          <Stack direction="column" gap="lg" align="center">
            <Stack direction="row" gap="md" wrap justify="center" align="center">
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
            </Stack>

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
          </Stack>
        );

      case 'compound-button':
        return (
          <Stack direction="column" gap="md" align="center">
            <Stack direction="row" gap="md" wrap justify="center">
              <CompoundButton
                variant="primary"
                icon={<SparklesIcon size={20} />}
                secondaryContent="Automated build with hermes compiler"
              >
                Deploy Production
              </CompoundButton>
              <CompoundButton
                variant="secondary"
                secondaryContent="Create isolated PR deployment branch"
              >
                Preview Environment
              </CompoundButton>
            </Stack>
          </Stack>
        );

      case 'split-button':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
            <SplitButton
              options={[
                { label: 'Create a merge commit', onClick: () => setSplitSelected('Create a merge commit') },
                { label: 'Squash and merge', onClick: () => setSplitSelected('Squash and merge') },
                { label: 'Rebase and merge', onClick: () => setSplitSelected('Rebase and merge') },
              ]}
              onClick={() => setSplitToast(`Executed: ${splitSelected}`)}
            >
              {splitSelected}
            </SplitButton>
            {splitToast && (
              <Badge variant="success">{splitToast}</Badge>
            )}
          </div>
        );

      case 'menu-button':
        return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Menu>
              <MenuButton variant="primary" icon={<ChevronDownIcon size={16} />}>
                Actions Menu
              </MenuButton>
              <MenuItem onSelect={() => setSplitToast('Dataset exported')}>Export Dataset</MenuItem>
              <MenuItem onSelect={() => setSplitToast('Workflow duplicated')}>Duplicate Workflow</MenuItem>
              <MenuItem danger onSelect={() => setSplitToast('Deleted')}>Delete Workspace</MenuItem>
            </Menu>
          </div>
        );

      case 'toggle-button':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
            <ToggleButton
              checked={togglePressed}
              onToggle={setTogglePressed}
              icon={togglePressed ? <CheckIcon size={16} /> : undefined}
            >
              {togglePressed ? 'Muted' : 'Unmuted'}
            </ToggleButton>
            <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
              State: <strong>{togglePressed ? 'Pressed (Active)' : 'Unpressed (Default)'}</strong>
            </span>
          </div>
        );

      case 'card-header':
        return (
          <Box style={{ maxWidth: 460, width: '100%', margin: '0 auto' }}>
            <Card style={{ width: '100%' }}>
              <CardHeader
                header={<CardTitle>Cluster Node Alpha</CardTitle>}
                description={<CardDescription>Region: us-east-1 (N. Virginia)</CardDescription>}
                action={<Badge variant="success">Healthy</Badge>}
              />
            </Card>
          </Box>
        );

      case 'card-footer':
        return (
          <Box style={{ maxWidth: 460, width: '100%', margin: '0 auto' }}>
            <Card style={{ width: '100%', padding: '20px 24px' }}>
              <CardContent style={{ marginBottom: 16 }}>
                Confirm deployment of container revisions to production nodes.
              </CardContent>
              <CardFooter>
                <Button variant="secondary" onClick={() => setSplitToast('Deployment cancelled')}>Cancel</Button>
                <Button variant="primary" onClick={() => setSplitToast('Deployment confirmed')}>Deploy Now</Button>
              </CardFooter>
            </Card>
          </Box>
        );

      case 'card-preview':
        return (
          <Box style={{ maxWidth: 360, width: '100%', margin: '0 auto' }}>
            <Card style={{ width: '100%' }}>
              <CardPreview>
                <Box style={{ height: 160, background: 'linear-gradient(135deg, var(--color-action-primary) 0%, #6366f1 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Text weight="bold" color="inverse">Visual Media Showcase</Text>
                </Box>
              </CardPreview>
              <CardContent style={{ padding: 16 }}>
                <CardTitle>Spectra UI Media Surface</CardTitle>
                <CardDescription>CardPreview mounts edge-to-edge banners.</CardDescription>
              </CardContent>
            </Card>
          </Box>
        );

      case 'carousel':
        return (
          <div style={{ maxWidth: 500, width: '100%', margin: '0 auto' }}>
            <Carousel autoPlay={false}>
              {[
                { title: 'Multi-Platform Consistency', desc: 'One design language across Web, iOS, Android, macOS, and Windows' },
                { title: 'WCAG 2.1 AA Compliance', desc: 'Accessible roving tabindex, high-contrast, screen-reader verified' },
                { title: 'Sub-15 kB Tree Shaking', desc: 'Optimized ES modules for instant startup performance' },
              ].map((s, idx) => (
                <div key={idx} style={{ padding: 40, textAlign: 'center', backgroundColor: 'var(--color-surface-raised)', borderRadius: 12 }}>
                  <Text as="h3" variant="heading" style={{ margin: '0 0 8px 0', fontSize: 20 }}>{s.title}</Text>
                  <Text as="p" style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: 14 }}>{s.desc}</Text>
                </div>
              ))}
            </Carousel>
          </div>
        );

      case 'carousel-nav':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
            <div style={{ fontSize: 14 }}>Slide {carouselIndex + 1} of 5 Active</div>
            <CarouselNav
              total={5}
              current={carouselIndex}
              onSelect={setCarouselIndex}
            />
          </div>
        );

      case 'interaction-tag':
        return (
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <InteractionTag
              selected={tagSelected}
              icon={<SparklesIcon size={14} />}
              closable
              onClose={() => setTagSelected(false)}
            >
              TypeScript 5.8
            </InteractionTag>
          </div>
        );

      case 'tag-group':
        return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TagGroup>
              {['React', 'TypeScript', 'WebAssembly', 'Node.js'].map((t) => (
                <InteractionTag key={t} closable>
                  {t}
                </InteractionTag>
              ))}
            </TagGroup>
          </div>
        );

      case 'rating-display':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
            <RatingDisplay value={4.8} max={5} size="lg" />
            <RatingDisplay value={3.5} max={5} size="md" />
          </div>
        );

      case 'menu-grid':
        return (
          <div style={{ maxWidth: 440, width: '100%', margin: '0 auto' }}>
            <MenuGrid columns={2}>
              <MenuItem icon={<GlobeIcon size={16} />}>CDN Endpoints</MenuItem>
              <MenuItem icon={<SparklesIcon size={16} />}>AI Copilot</MenuItem>
              <MenuItem icon={<CubeIcon size={16} />}>Database Clusters</MenuItem>
              <MenuItem icon={<FocusTargetIcon size={16} />}>Identity & Access</MenuItem>
            </MenuGrid>
          </div>
        );

      case 'portal-mount':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
            <Button variant="primary" onClick={() => setPortalMounted(!portalMounted)}>
              {portalMounted ? 'Unmount Teleported Overlay' : 'Mount to document.body via Portal'}
            </Button>
            {portalMounted && (
              <Portal>
                <div
                  style={{
                    position: 'fixed',
                    bottom: 24,
                    right: 24,
                    padding: '16px 20px',
                    backgroundColor: 'var(--color-surface-elevated)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    borderRadius: 12,
                    border: '1px solid var(--color-border-subtle)',
                    zIndex: 9999,
                  }}
                >
                  Teleported directly to document.body!
                </div>
              </Portal>
            )}
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
      case 'radio-group':
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 560, width: '100%', margin: '0 auto' }}>
            <div
              style={{
                display: 'flex',
                gap: 8,
                flexWrap: 'wrap',
                padding: '8px 12px',
                borderRadius: 'var(--radius-component-md, 8px)',
                backgroundColor: 'var(--color-surface-raised, rgba(0,0,0,0.03))',
                border: '1px solid var(--color-border-subtle, #edebe9)',
                fontSize: 12,
              }}
            >
              <span style={{ fontWeight: 600, color: 'var(--color-text-muted, #707070)', alignSelf: 'center' }}>Size:</span>
              {(['small', 'medium', 'large', 'extra-large'] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setAccSize(s)}
                  style={{
                    padding: '3px 8px',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: accSize === s ? 'var(--color-action-primary, #0078d4)' : 'var(--color-border-subtle, #edebe9)',
                    backgroundColor: accSize === s ? 'var(--color-action-primary, #0078d4)' : 'transparent',
                    color: accSize === s ? '#ffffff' : 'var(--color-text-primary, #242424)',
                    cursor: 'pointer',
                    fontSize: 11,
                    fontWeight: accSize === s ? 600 : 400,
                  }}
                >
                  {s}
                </button>
              ))}

              <span style={{ width: 1, backgroundColor: 'var(--color-border-subtle, #edebe9)', margin: '0 4px' }} />

              <span style={{ fontWeight: 600, color: 'var(--color-text-muted, #707070)', alignSelf: 'center' }}>Icon:</span>
              {(['start', 'end'] as const).map((pos) => (
                <button
                  key={pos}
                  type="button"
                  onClick={() => setAccIconPos(pos)}
                  style={{
                    padding: '3px 8px',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: accIconPos === pos ? 'var(--color-action-primary, #0078d4)' : 'var(--color-border-subtle, #edebe9)',
                    backgroundColor: accIconPos === pos ? 'var(--color-action-primary, #0078d4)' : 'transparent',
                    color: accIconPos === pos ? '#ffffff' : 'var(--color-text-primary, #242424)',
                    cursor: 'pointer',
                    fontSize: 11,
                    fontWeight: accIconPos === pos ? 600 : 400,
                  }}
                >
                  {pos}
                </button>
              ))}

              <span style={{ width: 1, backgroundColor: 'var(--color-border-subtle, #edebe9)', margin: '0 4px' }} />

              <button
                type="button"
                onClick={() => setAccMultiple(!accMultiple)}
                style={{
                  padding: '3px 8px',
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: accMultiple ? 'var(--color-action-primary, #0078d4)' : 'var(--color-border-subtle, #edebe9)',
                  backgroundColor: accMultiple ? 'var(--color-action-primary, #0078d4)' : 'transparent',
                  color: accMultiple ? '#ffffff' : 'var(--color-text-primary, #242424)',
                  cursor: 'pointer',
                  fontSize: 11,
                  fontWeight: accMultiple ? 600 : 400,
                }}
              >
                {accMultiple ? 'Multiple: On' : 'Multiple: Off'}
              </button>
            </div>

            <Accordion
              key={`${accSize}-${accIconPos}-${accMultiple}-${accCollapsible}`}
              size={accSize}
              expandIconPosition={accIconPos}
              multiple={accMultiple}
              collapsible={accCollapsible}
              defaultOpenItems={['item-1']}
            >
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
                  Yes! @winplaybox/tokens compiles to strictly typed JavaScript objects that plug directly
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

      case 'avatar': {
        const presenceOptions: {
          id: 'available' | 'busy' | 'away' | 'dnd' | 'out-of-office' | 'offline';
          label: string;
          color: string;
        }[] = [
          { id: 'available', label: 'Available', color: '#16A34A' },
          { id: 'busy', label: 'Busy', color: '#DC2626' },
          { id: 'away', label: 'Away', color: '#D97706' },
          { id: 'dnd', label: 'DND', color: '#DC2626' },
          { id: 'out-of-office', label: 'Out of Office', color: '#7C3AED' },
          { id: 'offline', label: 'Offline', color: '#71717A' },
        ];

        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', width: '100%' }}>
            {/* Control Bar */}
            <div
              style={{
                display: 'flex',
                gap: 8,
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px 14px',
                borderRadius: 'var(--radius-component-md, 8px)',
                backgroundColor: 'var(--color-surface-raised, rgba(0,0,0,0.03))',
                border: '1px solid var(--color-border-subtle, #edebe9)',
                fontSize: 12,
                maxWidth: 720,
                width: '100%',
              }}
            >
              {/* Size Selectors */}
              <span style={{ fontWeight: 600, color: 'var(--color-text-muted, #71717A)' }}>Size:</span>
              {[24, 32, 40, 48, 56, 64].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setAvatarSize(s)}
                  style={{
                    padding: '3px 8px',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: avatarSize === s ? 'var(--color-action-primary, #2563EB)' : 'var(--color-border-subtle, #edebe9)',
                    backgroundColor: avatarSize === s ? 'var(--color-action-primary, #2563EB)' : 'transparent',
                    color: avatarSize === s ? '#ffffff' : 'var(--color-text-primary, #242424)',
                    cursor: 'pointer',
                    fontSize: 11,
                    fontWeight: avatarSize === s ? 600 : 400,
                  }}
                >
                  {s}px
                </button>
              ))}

              <span style={{ width: 1, height: 16, backgroundColor: 'var(--color-border-subtle, #edebe9)', margin: '0 4px' }} />

              {/* Shape Selectors */}
              <span style={{ fontWeight: 600, color: 'var(--color-text-muted, #71717A)' }}>Shape:</span>
              {(['circular', 'square'] as const).map((sh) => (
                <button
                  key={sh}
                  type="button"
                  onClick={() => setAvatarShape(sh)}
                  style={{
                    padding: '3px 8px',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: avatarShape === sh ? 'var(--color-action-primary, #2563EB)' : 'var(--color-border-subtle, #edebe9)',
                    backgroundColor: avatarShape === sh ? 'var(--color-action-primary, #2563EB)' : 'transparent',
                    color: avatarShape === sh ? '#ffffff' : 'var(--color-text-primary, #242424)',
                    cursor: 'pointer',
                    fontSize: 11,
                    fontWeight: avatarShape === sh ? 600 : 400,
                  }}
                >
                  {sh}
                </button>
              ))}

              <span style={{ width: 1, height: 16, backgroundColor: 'var(--color-border-subtle, #edebe9)', margin: '0 4px' }} />

              {/* Color Selectors */}
              <span style={{ fontWeight: 600, color: 'var(--color-text-muted, #71717A)' }}>Color:</span>
              {(['colorful', 'brand', 'neutral'] as const).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setAvatarColor(c)}
                  style={{
                    padding: '3px 8px',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: avatarColor === c ? 'var(--color-action-primary, #2563EB)' : 'var(--color-border-subtle, #edebe9)',
                    backgroundColor: avatarColor === c ? 'var(--color-action-primary, #2563EB)' : 'transparent',
                    color: avatarColor === c ? '#ffffff' : 'var(--color-text-primary, #242424)',
                    cursor: 'pointer',
                    fontSize: 11,
                    fontWeight: avatarColor === c ? 600 : 400,
                  }}
                >
                  {c}
                </button>
              ))}

              <span style={{ width: 1, height: 16, backgroundColor: 'var(--color-border-subtle, #edebe9)', margin: '0 4px' }} />

              {/* Active Halo Toggle */}
              <button
                type="button"
                onClick={() => setAvatarActive(avatarActive === 'active' ? 'unset' : 'active')}
                style={{
                  padding: '3px 8px',
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: avatarActive === 'active' ? 'var(--color-action-primary, #2563EB)' : 'var(--color-border-subtle, #edebe9)',
                  backgroundColor: avatarActive === 'active' ? 'var(--color-action-primary, #2563EB)' : 'transparent',
                  color: avatarActive === 'active' ? '#ffffff' : 'var(--color-text-primary, #242424)',
                  cursor: 'pointer',
                  fontSize: 11,
                  fontWeight: avatarActive === 'active' ? 600 : 400,
                }}
              >
                {avatarActive === 'active' ? 'Active Ring: On' : 'Active Ring: Off'}
              </button>

              {/* OOF Modifier Toggle */}
              <button
                type="button"
                onClick={() => setAvatarOof(!avatarOof)}
                style={{
                  padding: '3px 8px',
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: avatarOof ? '#7C3AED' : 'var(--color-border-subtle, #edebe9)',
                  backgroundColor: avatarOof ? '#7C3AED' : 'transparent',
                  color: avatarOof ? '#ffffff' : 'var(--color-text-primary, #242424)',
                  cursor: 'pointer',
                  fontSize: 11,
                  fontWeight: avatarOof ? 600 : 400,
                }}
              >
                {avatarOof ? 'OOF: Yes' : 'OOF: No'}
              </button>
            </div>

            {/* Live Interactive Preview */}
            <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', padding: '16px 0' }}>
              <Avatar
                name="Sarah Connor"
                size={avatarSize as any}
                shape={avatarShape}
                color={avatarColor}
                status={avatarStatus}
                outOfOffice={avatarOof}
                active={avatarActive}
              />
              <Avatar
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
                name="Elena Rostova"
                size={avatarSize as any}
                shape={avatarShape}
                status={avatarStatus}
                outOfOffice={avatarOof}
              />
              <Avatar
                name="Alex Vance"
                size={avatarSize as any}
                shape={avatarShape}
                color="colorful"
                status={avatarStatus}
                outOfOffice={avatarOof}
              />
              <Avatar
                shape="square"
                name="Bot Agent"
                size={avatarSize as any}
                color="brand"
                status={avatarStatus}
              />
              <AvatarGroup max={3} size={avatarSize as any}>
                <Avatar name="David Miller" color="colorful" />
                <Avatar name="Sam Wilson" color="colorful" />
                <Avatar name="Robin Hood" color="colorful" />
                <Avatar name="Jordan Lee" color="colorful" />
              </AvatarGroup>
            </div>

            {/* Presence Status Selectors */}
            <div
              style={{
                display: 'flex',
                gap: 6,
                flexWrap: 'wrap',
                justifyContent: 'center',
                maxWidth: 680,
                padding: '8px 12px',
                borderRadius: 'var(--radius-component-md, 8px)',
                backgroundColor: 'var(--color-surface-raised, rgba(0,0,0,0.03))',
                border: '1px solid var(--color-border-subtle, #edebe9)',
              }}
            >
              {presenceOptions.map((st) => {
                const isActive = avatarStatus === st.id;
                return (
                  <button
                    key={st.id}
                    onClick={() => setAvatarStatus(st.id)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      padding: '4px 10px',
                      borderRadius: 4,
                      border: '1px solid',
                      borderColor: isActive ? 'var(--color-action-primary, #2563EB)' : 'var(--color-border-subtle, #edebe9)',
                      backgroundColor: isActive ? 'var(--color-action-primary, #2563EB)' : 'transparent',
                      color: isActive ? '#ffffff' : 'var(--color-text-secondary, #3F3F46)',
                      cursor: 'pointer',
                      fontSize: 11,
                      fontWeight: isActive ? 600 : 400,
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        backgroundColor: isActive ? '#ffffff' : st.color,
                        display: 'inline-block',
                      }}
                    />
                    Status: {st.label}
                  </button>
                );
              })}
            </div>
          </div>
        );
      }

      case 'badge': {
        const starIcon = (
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1.5l2.1 4.3 4.7.7-3.4 3.3.8 4.7L8 12.2l-4.2 2.3.8-4.7-3.4-3.3 4.7-.7L8 1.5z" />
          </svg>
        );

        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', width: '100%' }}>
            {/* Interactive Controls Toolbar */}
            <div
              style={{
                display: 'flex',
                gap: 8,
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 12,
                padding: '6px 12px',
                borderRadius: 'var(--radius-component-md, 8px)',
                backgroundColor: 'var(--color-surface-raised, rgba(0,0,0,0.03))',
                border: '1px solid var(--color-border-subtle, #edebe9)',
              }}
            >
              {/* Appearance */}
              <span style={{ fontWeight: 600, color: 'var(--color-text-muted, #71717A)' }}>Appearance:</span>
              {(['filled', 'ghost', 'outline', 'tint'] as const).map((app) => (
                <button
                  key={app}
                  type="button"
                  onClick={() => setBadgeAppearance(app)}
                  style={{
                    padding: '3px 8px',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: badgeAppearance === app ? 'var(--color-action-primary, #2563EB)' : 'var(--color-border-subtle, #edebe9)',
                    backgroundColor: badgeAppearance === app ? 'var(--color-action-primary, #2563EB)' : 'transparent',
                    color: badgeAppearance === app ? '#ffffff' : 'var(--color-text-primary, #242424)',
                    cursor: 'pointer',
                    fontSize: 11,
                    fontWeight: badgeAppearance === app ? 600 : 400,
                  }}
                >
                  {app}
                </button>
              ))}

              <span style={{ width: 1, height: 16, backgroundColor: 'var(--color-border-subtle, #edebe9)', margin: '0 4px' }} />

              {/* Shape */}
              <span style={{ fontWeight: 600, color: 'var(--color-text-muted, #71717A)' }}>Shape:</span>
              {(['rounded', 'circular', 'square'] as const).map((shp) => (
                <button
                  key={shp}
                  type="button"
                  onClick={() => setBadgeShape(shp)}
                  style={{
                    padding: '3px 8px',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: badgeShape === shp ? 'var(--color-action-primary, #2563EB)' : 'var(--color-border-subtle, #edebe9)',
                    backgroundColor: badgeShape === shp ? 'var(--color-action-primary, #2563EB)' : 'transparent',
                    color: badgeShape === shp ? '#ffffff' : 'var(--color-text-primary, #242424)',
                    cursor: 'pointer',
                    fontSize: 11,
                    fontWeight: badgeShape === shp ? 600 : 400,
                  }}
                >
                  {shp}
                </button>
              ))}

              <span style={{ width: 1, height: 16, backgroundColor: 'var(--color-border-subtle, #edebe9)', margin: '0 4px' }} />

              {/* Size */}
              <span style={{ fontWeight: 600, color: 'var(--color-text-muted, #71717A)' }}>Size:</span>
              {(['tiny', 'extra-small', 'small', 'medium', 'large', 'extra-large'] as const).map((sz) => (
                <button
                  key={sz}
                  type="button"
                  onClick={() => setBadgeSize(sz)}
                  style={{
                    padding: '3px 8px',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: badgeSize === sz ? 'var(--color-action-primary, #2563EB)' : 'var(--color-border-subtle, #edebe9)',
                    backgroundColor: badgeSize === sz ? 'var(--color-action-primary, #2563EB)' : 'transparent',
                    color: badgeSize === sz ? '#ffffff' : 'var(--color-text-primary, #242424)',
                    cursor: 'pointer',
                    fontSize: 11,
                    fontWeight: badgeSize === sz ? 600 : 400,
                  }}
                >
                  {sz === 'extra-small' ? 'XS' : sz === 'extra-large' ? 'XL' : sz}
                </button>
              ))}

              <span style={{ width: 1, height: 16, backgroundColor: 'var(--color-border-subtle, #edebe9)', margin: '0 4px' }} />

              {/* Dot & Icon Toggles */}
              <button
                type="button"
                onClick={() => setBadgeDot(!badgeDot)}
                style={{
                  padding: '3px 8px',
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: badgeDot ? 'var(--color-action-primary, #2563EB)' : 'var(--color-border-subtle, #edebe9)',
                  backgroundColor: badgeDot ? 'var(--color-action-primary, #2563EB)' : 'transparent',
                  color: badgeDot ? '#ffffff' : 'var(--color-text-primary, #242424)',
                  cursor: 'pointer',
                  fontSize: 11,
                  fontWeight: badgeDot ? 600 : 400,
                }}
              >
                {badgeDot ? 'Dot: On' : 'Dot: Off'}
              </button>
              <button
                type="button"
                onClick={() => setBadgeWithIcon(!badgeWithIcon)}
                style={{
                  padding: '3px 8px',
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: badgeWithIcon ? 'var(--color-action-primary, #2563EB)' : 'var(--color-border-subtle, #edebe9)',
                  backgroundColor: badgeWithIcon ? 'var(--color-action-primary, #2563EB)' : 'transparent',
                  color: badgeWithIcon ? '#ffffff' : 'var(--color-text-primary, #242424)',
                  cursor: 'pointer',
                  fontSize: 11,
                  fontWeight: badgeWithIcon ? 600 : 400,
                }}
              >
                {badgeWithIcon ? 'Icon: On' : 'Icon: Off'}
              </button>
            </div>

            {/* Color Palette Selector Bar */}
            <div
              style={{
                display: 'flex',
                gap: 6,
                flexWrap: 'wrap',
                justifyContent: 'center',
                padding: '6px 10px',
                borderRadius: 'var(--radius-component-md, 8px)',
                backgroundColor: 'var(--color-surface-raised, rgba(0,0,0,0.03))',
                border: '1px solid var(--color-border-subtle, #edebe9)',
              }}
            >
              {(['brand', 'danger', 'important', 'informative', 'severe', 'subtle', 'success', 'warning'] as const).map((c) => {
                const isActive = badgeColor === c;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setBadgeColor(c)}
                    style={{
                      padding: '3px 8px',
                      borderRadius: 4,
                      border: '1px solid',
                      borderColor: isActive ? 'var(--color-action-primary, #2563EB)' : 'var(--color-border-subtle, #edebe9)',
                      backgroundColor: isActive ? 'var(--color-action-primary, #2563EB)' : 'transparent',
                      color: isActive ? '#ffffff' : 'var(--color-text-primary, #242424)',
                      cursor: 'pointer',
                      fontSize: 11,
                      fontWeight: isActive ? 600 : 400,
                      textTransform: 'capitalize',
                    }}
                  >
                    {c}
                  </button>
                );
              })}
            </div>

            {/* Live Interactive Preview */}
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', padding: '16px 0' }}>
              <Badge
                appearance={badgeAppearance}
                color={badgeColor}
                shape={badgeShape}
                size={badgeSize}
                dot={badgeDot}
                icon={badgeWithIcon ? starIcon : undefined}
              >
                {badgeSize === 'tiny' ? undefined : 'Live Badge'}
              </Badge>

              <CounterBadge
                count={24}
                appearance={badgeAppearance}
                color={badgeColor}
                shape={badgeShape}
                size={badgeSize}
              />

              <CounterBadge
                count={150}
                overflowCount={99}
                appearance={badgeAppearance}
                color="danger"
                shape={badgeShape}
                size={badgeSize}
              />

              <PresenceBadge
                status="available"
                size={badgeSize === 'tiny' ? 'small' : badgeSize}
              />

              <PresenceBadge
                status="busy"
                size={badgeSize === 'tiny' ? 'small' : badgeSize}
              />

              <PresenceBadge
                status="out-of-office"
                outOfOffice
                size={badgeSize === 'tiny' ? 'small' : badgeSize}
              />
            </div>
          </div>
        );
      }

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
          <Box style={{ maxWidth: 440, width: '100%', margin: '0 auto' }}>
            <Card variant="bordered" padding="md">
              <Stack direction="row" justify="between" align="center" style={{ marginBottom: 12 }}>
                <Text variant="heading-sm" weight="semibold">Cluster Deployment #28</Text>
                <Badge variant="success" dot>Active</Badge>
              </Stack>
              <Text variant="body-sm" color="secondary" style={{ marginBottom: 16, lineHeight: 1.5 }}>
                Telemetry verified across 24 edge nodes. Zero latency regressions detected in the last 24h.
              </Text>
              <Stack direction="row" justify="end" align="center" gap="xs">
                <Button variant="secondary" size="sm">Logs</Button>
                <Button variant="primary" size="sm">Configure</Button>
              </Stack>
            </Card>
          </Box>
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
                <Text as="h3" variant="heading" style={{ margin: '0 0 12px 0', fontSize: 18 }}>Confirm System Update</Text>
                <Text as="p" style={{ margin: '0 0 20px 0', color: 'var(--color-text-secondary)', fontSize: 14, lineHeight: 1.5 }}>
                  Are you sure you want to deploy the new design system tokens across all workspaces?
                </Text>
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

      case 'breadcrumb':
      case 'breadcrumbs':
        return (
          <Breadcrumb
            items={[
              { label: 'Home', href: '#' },
              { label: 'Design System', href: '#' },
              { label: 'Components', href: '#' },
              { label: 'Breadcrumb', isCurrent: true },
            ]}
          />
        );

      case 'split-button':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%', maxWidth: 420 }}>
            <SplitButton
              variant={btnVariant}
              size={btnSize}
              options={[
                {
                  label: 'Create a merge commit',
                  onClick: () => {
                    setSplitSelected('Create a merge commit');
                    setSplitToast('Option selected: Create a merge commit');
                  },
                },
                {
                  label: 'Squash and merge',
                  onClick: () => {
                    setSplitSelected('Squash and merge');
                    setSplitToast('Option selected: Squash and merge');
                  },
                },
                {
                  label: 'Rebase and merge',
                  onClick: () => {
                    setSplitSelected('Rebase and merge');
                    setSplitToast('Option selected: Rebase and merge');
                  },
                },
              ]}
              onClick={() => setSplitToast(`Executed primary action: ${splitSelected}`)}
            >
              {splitSelected}
            </SplitButton>

            {splitToast && (
              <div
                style={{
                  fontSize: 12,
                  color: 'var(--color-feedback-success, #22c55e)',
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  padding: '6px 14px',
                  borderRadius: 6,
                }}
              >
                {splitToast}
              </div>
            )}

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
              <span style={{ fontWeight: 600, color: 'var(--color-text-muted)', alignSelf: 'center' }}>Variant:</span>
              {(['primary', 'secondary', 'danger'] as const).map((v) => (
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
              <span style={{ fontWeight: 600, color: 'var(--color-text-muted)', alignSelf: 'center' }}>Size:</span>
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
            </div>
          </div>
        );

      case 'compound-button':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <CompoundButton
              variant={btnVariant}
              size={btnSize}
              subtitle="Deploy continuous integration pipeline to AWS"
              icon={<SparklesIcon size={22} />}
              onClick={() => setSplitToast('Deployment pipeline initiated!')}
            >
              Deploy Production Release
            </CompoundButton>
            {splitToast && (
              <span style={{ fontSize: 12, color: 'var(--color-feedback-success, #22c55e)' }}>
                {splitToast}
              </span>
            )}
          </div>
        );

      case 'button-group':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <ButtonGroup variant="secondary">
              <Button
                variant={groupVal === 'day' ? 'primary' : 'secondary'}
                onClick={() => setGroupVal('day')}
              >
                Day
              </Button>
              <Button
                variant={groupVal === 'week' ? 'primary' : 'secondary'}
                onClick={() => setGroupVal('week')}
              >
                Week
              </Button>
              <Button
                variant={groupVal === 'month' ? 'primary' : 'secondary'}
                onClick={() => setGroupVal('month')}
              >
                Month
              </Button>
            </ButtonGroup>
            <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
              Active interval: <strong>{groupVal.toUpperCase()}</strong>
            </span>
          </div>
        );

      case 'icon-button':
        return (
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center' }}>
            <IconButton icon={<SearchIcon size={18} />} aria-label="Search" variant="primary" shape="circle" />
            <IconButton icon={<CheckIcon size={18} />} aria-label="Confirm" variant="secondary" shape="rounded" />
            <IconButton icon={<CloseIcon size={18} />} aria-label="Dismiss" variant="danger" shape="square" />
          </div>
        );

      case 'slider':
        return (
          <div style={{ maxWidth: 380, width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Slider
              label="Memory Allocation"
              value={sliderVal}
              min={0}
              max={128}
              onChange={setSliderVal}
              valueFormatter={(v) => `${v} GB`}
            />
            <span style={{ fontSize: 12, color: 'var(--color-text-muted)', textAlign: 'center' }}>
              Drag thumb or click anywhere on the rail
            </span>
          </div>
        );

      case 'rating':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <Rating value={ratingVal} max={5} size="lg" onChange={setRatingVal} />
            <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
              Customer Satisfaction Score: <strong>{ratingVal} / 5 stars</strong>
            </span>
          </div>
        );

      case 'textarea':
        return (
          <div style={{ maxWidth: 440, width: '100%', margin: '0 auto' }}>
            <Textarea
              label="Release Notes"
              placeholder="Describe enhancements in this build..."
              description="Max 250 characters."
              showCount
              maxLength={250}
              value={textareaVal}
              onChange={(e) => setTextareaVal(e.target.value)}
            />
          </div>
        );

      case 'checkbox-group':
        return (
          <div style={{ maxWidth: 360, width: '100%', margin: '0 auto' }}>
            <CheckboxGroup label="Organization Access" description="Choose tenant isolation levels">
              <Checkbox label="Read-only audit reports" defaultChecked />
              <Checkbox label="Token modification rights" />
              <Checkbox label="Billing management" defaultChecked />
            </CheckboxGroup>
          </div>
        );

      case 'autocomplete':
      case 'combobox':
        return (
          <div style={{ maxWidth: 380, width: '100%', margin: '0 auto' }}>
            <Autocomplete
              label="Select Target Architecture"
              placeholder="Search platforms..."
              options={[
                { value: 'web', label: 'React Web (Vite / Next.js)', description: 'Vanilla Extract + Tokens' },
                { value: 'native', label: 'React Native (Hermes)', description: 'iOS & Android runtime' },
                { value: 'figma', label: 'Figma Tokens Plugin', description: 'Design sync engine' },
                { value: 'mcp', label: 'Model Context Protocol', description: 'Agentic AI toolchain' },
              ]}
              value={autoQuery}
              onChange={setAutoQuery}
            />
          </div>
        );

      case 'avatar-group':
        return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <AvatarGroup max={4} size="md">
              <Avatar name="Sarah Connor" status="online" />
              <Avatar name="John Doe" status="busy" />
              <Avatar name="Alex Mercer" status="away" />
              <Avatar name="Elena Fisher" />
              <Avatar name="Marcus Fenix" />
              <Avatar name="Ada Lovelace" />
            </AvatarGroup>
          </div>
        );

      case 'tag':
        return (
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Tag variant="primary">v1.2.0</Tag>
            <Tag variant="success" closable onClose={() => console.log('Closed')}>Production</Tag>
            <Tag variant="warning">High Memory</Tag>
            <Tag variant="danger">Offline</Tag>
            <Tag variant="info">Zero Emojis</Tag>
          </div>
        );

      case 'media-card':
        return (
          <div style={{ maxWidth: 360, width: '100%', margin: '0 auto' }}>
            <MediaCard
              media={
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, var(--color-surface-raised), var(--color-surface-elevated))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)', fontSize: 13, fontWeight: 600 }}>
                  Spectra UI Canvas
                </div>
              }
              title="Spectra UI v1.0"
              subtitle="Universal Design System"
              badge={<Badge variant="info">Active</Badge>}
              actions={
                <>
                  <Button variant="primary" size="sm">Explore Tokens</Button>
                  <Button variant="secondary" size="sm">Docs</Button>
                </>
              }
            >
              Universal cross-platform design system engineered for enterprise applications.
            </MediaCard>
          </div>
        );

      case 'table':
      case 'data-grid':
        return (
          <div style={{ width: '100%', maxWidth: 560, margin: '0 auto' }}>
            <Table bordered striped>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Microservice</TableHeaderCell>
                  <TableHeaderCell>Latency</TableHeaderCell>
                  <TableHeaderCell>Health</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>API Gateway</TableCell>
                  <TableCell>14ms</TableCell>
                  <TableCell><Badge variant="success">Online</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Auth Broker</TableCell>
                  <TableCell>22ms</TableCell>
                  <TableCell><Badge variant="success">Online</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Search Index</TableCell>
                  <TableCell>98ms</TableCell>
                  <TableCell><Badge variant="warning">Degraded</Badge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        );

      case 'tree-view':
        return (
          <div style={{ maxWidth: 320, width: '100%', margin: '0 auto', background: 'var(--color-surface-elevated)', padding: 12, borderRadius: 8, border: '1px solid var(--color-border-subtle)' }}>
            <TreeView
              items={[
                {
                  id: 'src',
                  label: 'src',
                  children: [
                    {
                      id: 'components',
                      label: 'components',
                      children: [
                        { id: 'btn', label: 'Button.tsx' },
                        { id: 'sbtn', label: 'SplitButton.tsx' },
                        { id: 'sld', label: 'Slider.tsx' },
                      ],
                    },
                    { id: 'idx', label: 'index.ts' },
                  ],
                },
                { id: 'pkg', label: 'package.json' },
              ]}
              defaultExpandedIds={['src', 'components']}
            />
          </div>
        );

      case 'statistic':
        return (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, width: '100%', maxWidth: 540, margin: '0 auto' }}>
            <Statistic
              title="Monthly Active Users"
              value="128,450"
              trend={{ value: '14.2%', direction: 'up', label: 'vs last month' }}
            />
            <Statistic
              title="Cache Hit Ratio"
              value="99.4"
              suffix="%"
              trend={{ value: '0.8%', direction: 'up', label: 'improved' }}
            />
          </div>
        );

      case 'timeline':
        return (
          <div style={{ maxWidth: 440, width: '100%', margin: '0 auto' }}>
            <Timeline>
              <TimelineItem
                title="Component Suite Synthesized"
                description="Engineered SplitButton, Slider, Rating, and enterprise composite recipes."
                timestamp="Just now"
              />
              <TimelineItem
                title="Zero Emoji Verification Passed"
                description="All icon slots strictly mapped to SVG vector paths."
                timestamp="10 mins ago"
              />
              <TimelineItem
                title="Monorepo Build Succeeded"
                description="Verified 0 TypeScript compiler errors across all packages."
                timestamp="25 mins ago"
              />
            </Timeline>
          </div>
        );

      case 'calendar':
        return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Calendar value={calendarDate} onChange={setCalendarDate} />
          </div>
        );

      case 'progress-bar':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 400, width: '100%', margin: '0 auto' }}>
            <ProgressBar value={progressVal} label="Design System Build" showValue variant="primary" />
            <ProgressBar value={100} label="A11y Test Suite" showValue variant="success" />
            <ProgressBar indeterminate label="Optimizing Hermes Bytecode..." variant="info" />
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
              <Button size="sm" variant="secondary" onClick={() => setProgressVal((p) => Math.max(0, p - 10))}>-10%</Button>
              <Button size="sm" variant="secondary" onClick={() => setProgressVal((p) => Math.min(100, p + 10))}>+10%</Button>
            </div>
          </div>
        );

      case 'toast':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
            {toastVisible && (
              <Toast
                variant="success"
                title="Deployment Succeeded"
                onClose={() => setToastVisible(false)}
                action={<Button variant="secondary" size="sm" onClick={() => console.log('View build')}>View Build</Button>}
              >
                All 58 components synchronized across Web and Mobile runtimes.
              </Toast>
            )}
            {!toastVisible && (
              <Button variant="secondary" size="sm" onClick={() => setToastVisible(true)}>
                Trigger Toast Banner
              </Button>
            )}
          </div>
        );

      case 'drawer':
        return (
          <div style={{ textAlign: 'center' }}>
            <Button variant="primary" onClick={() => setDemoDrawerOpen(true)}>
              Open Drawer Sheet
            </Button>
            <Drawer
              isOpen={demoDrawerOpen}
              onClose={() => setDemoDrawerOpen(false)}
              title="Design System Settings"
              footer={
                <>
                  <Button variant="secondary" size="sm" onClick={() => setDemoDrawerOpen(false)}>Cancel</Button>
                  <Button variant="primary" size="sm" onClick={() => setDemoDrawerOpen(false)}>Save Settings</Button>
                </>
              }
            >
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                Customize cross-platform token variables, motion curves, and layout density across client workspaces.
              </p>
            </Drawer>
          </div>
        );

      case 'paper':
        return (
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Paper elevation={1}>Elevation 1</Paper>
            <Paper elevation={2}>Elevation 2</Paper>
            <Paper elevation={3}>Elevation 3</Paper>
          </div>
        );

      case 'pagination':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <Pagination count={10} page={demoPage} onChange={setDemoPage} />
            <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
              Current page: <strong>{demoPage}</strong> of 10
            </span>
          </div>
        );

      case 'stepper':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 540, width: '100%', margin: '0 auto' }}>
            <Stepper
              steps={[
                { title: 'Define Tokens', description: 'Colors & Typography' },
                { title: 'Component Review', description: 'ARIA & Contrast' },
                { title: 'Deploy', description: 'Publish to npm' },
              ]}
              activeStep={demoStep}
            />
            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
              <Button variant="secondary" size="sm" disabled={demoStep <= 0} onClick={() => setDemoStep((s) => s - 1)}>Back</Button>
              <Button variant="primary" size="sm" disabled={demoStep >= 2} onClick={() => setDemoStep((s) => s + 1)}>Next</Button>
            </div>
          </div>
        );

      case 'menu':
        return (
          <div style={{ maxWidth: 220, width: '100%', margin: '0 auto' }}>
            <Menu>
              <MenuItem icon={<CopyIcon size={16} />} shortcut="Ctrl+C">Duplicate Node</MenuItem>
              <MenuItem icon={<ExternalLinkIcon size={16} />}>Export Tokens</MenuItem>
              <MenuItem danger icon={<CloseIcon size={16} />}>Delete Component</MenuItem>
            </Menu>
          </div>
        );

      case 'app-bar':
        return (
          <div style={{ width: '100%' }}>
            <AppBar
              brand={<span style={{ fontWeight: 700, fontSize: 16, color: 'var(--color-text-primary)' }}>Spectra UI</span>}
              actions={<Button variant="primary" size="sm">Deploy</Button>}
            >
              <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', cursor: 'pointer' }}>Documentation</span>
              <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', cursor: 'pointer' }}>Tokens</span>
            </AppBar>
          </div>
        );

      case 'link':
        return (
          <div style={{ display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'center' }}>
            <Link href="https://github.com/Winplaybox/spectra-ui" external>GitHub Repository</Link>
            <Link href="/tokens/colors">Color Tokens</Link>
          </div>
        );

      case 'speed-dial':
        return (
          <div style={{ padding: 40, display: 'flex', justifyContent: 'center' }}>
            <SpeedDial
              actions={[
                { icon: <SearchIcon size={16} />, name: 'Search', onClick: () => console.log('Search') },
                { icon: <CopyIcon size={16} />, name: 'Copy', onClick: () => console.log('Copy') },
              ]}
            />
          </div>
        );

      case 'popover':
        return (
          <div style={{ textAlign: 'center' }}>
            <Popover
              title="Token Architecture"
              trigger={<Button variant="secondary">View Token Info</Button>}
            >
              Spectra UI synchronizes 175 design tokens across Web and React Native Hermes runtimes.
            </Popover>
          </div>
        );

      case 'box':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
            <Box
              style={{
                padding: '28px 36px',
                backgroundColor: 'var(--color-surface-elevated)',
                borderRadius: 'var(--radius-component-md, 8px)',
                border: '1px solid var(--color-border-default)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                textAlign: 'center',
                maxWidth: 420,
              }}
            >
              <Stack gap="xs" align="center">
                <Text variant="heading-sm" weight="bold">Polymorphic Box Surface</Text>
                <Text variant="body-sm" color="secondary" style={{ lineHeight: 1.5 }}>
                  Serves as the foundational structural container adapting to any HTML semantic element.
                </Text>
              </Stack>
            </Box>
          </div>
        );

      case 'container':
        return (
          <div style={{ width: '100%', maxWidth: 640, margin: '0 auto' }}>
            <Container
              size="md"
              style={{
                padding: 24,
                backgroundColor: 'var(--color-surface-elevated)',
                borderRadius: 8,
                border: '1px dashed var(--color-action-primary, #2563eb)',
                textAlign: 'center',
              }}
            >
              <span style={{ fontWeight: 600, fontSize: 14, color: 'var(--color-action-primary, #2563eb)' }}>
                Container (size="md")
              </span>
              <p style={{ margin: '8px 0 0', fontSize: 13, color: 'var(--color-text-secondary)' }}>
                Centers and constrains viewport width across responsive breakpoints.
              </p>
            </Container>
          </div>
        );

      case 'grid':
        return (
          <div style={{ width: '100%', maxWidth: 580, margin: '0 auto' }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Box style={{ padding: 20, textAlign: 'center', backgroundColor: 'var(--color-surface-elevated)', borderRadius: 8, border: '1px solid var(--color-border-default)' }}>
                  <strong>Col 1</strong>
                  <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Span 4</div>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box style={{ padding: 20, textAlign: 'center', backgroundColor: 'var(--color-surface-elevated)', borderRadius: 8, border: '1px solid var(--color-border-default)' }}>
                  <strong>Col 2</strong>
                  <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Span 4</div>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box style={{ padding: 20, textAlign: 'center', backgroundColor: 'var(--color-surface-elevated)', borderRadius: 8, border: '1px solid var(--color-border-default)' }}>
                  <strong>Col 3</strong>
                  <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Span 4</div>
                </Box>
              </Grid>
            </Grid>
          </div>
        );

      case 'stack':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
            <Stack direction="row" gap="md" align="center">
              <Button variant="primary">Action 1</Button>
              <Button variant="secondary">Action 2</Button>
              <Button variant="tertiary">Action 3</Button>
            </Stack>
            <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
              Stack direction="row" gap="md"
            </span>
          </div>
        );

      case 'bottom-nav':
        return (
          <div style={{ maxWidth: 360, width: '100%', margin: '0 auto', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--color-border-subtle)' }}>
            <BottomNav
              items={[
                { id: 'home', label: 'Home', icon: <SearchIcon size={18} /> },
                { id: 'explore', label: 'Explore', icon: <SparklesIcon size={18} /> },
                { id: 'settings', label: 'Settings', icon: <UserIcon size={18} /> },
              ]}
              activeId={bottomNavTab}
              onChange={setBottomNavTab}
            />
          </div>
        );

      case 'platform-chassis':
        return (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
              {(['web', 'ios', 'android', 'macos', 'windows'] as const).map((p) => (
                <Button
                  key={p}
                  size="sm"
                  variant={chassisPlatform === p ? 'primary' : 'secondary'}
                  onClick={() => setChassisPlatform(p)}
                >
                  {p.toUpperCase()}
                </Button>
              ))}
            </div>
            <PlatformChassis platform={chassisPlatform} title={`Spectra UI on ${chassisPlatform.toUpperCase()}`}>
              <Stack gap="sm" align="center" style={{ padding: 16 }}>
                <Text variant="heading-sm" weight="semibold">Native Chassis Surface</Text>
                <Text variant="body-xs" color="secondary" style={{ marginBottom: 4 }}>
                  Faithfully renders platform-authentic titlebars, status indicators, and viewports.
                </Text>
                <Button size="sm" variant="primary">Trigger Action</Button>
              </Stack>
            </PlatformChassis>
          </div>
        );

      case 'color-picker':
        return (
          <div style={{ maxWidth: 320, width: '100%', margin: '0 auto' }}>
            <ColorPicker
              label="Theme Accent Token"
              description="Click a swatch or enter custom HEX code"
              value={pickerColor}
              onChange={setPickerColor}
            />
          </div>
        );

      case 'copy-button':
        return (
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <CopyButton
              value="pnpm add @winplaybox/react"
              label="Install Command"
              variant="primary"
            />
            <CopyButton
              value="Spectra UI Universal Tokens"
              label="Copy Token"
              variant="secondary"
            />
            <CopyButton
              value="https://github.com/Winplaybox/spectra-ui"
              aria-label="Copy GitHub Repository Link"
            />
          </div>
        );

      case 'date-picker':
        return (
          <div style={{ maxWidth: 360, width: '100%', margin: '0 auto' }}>
            <DatePicker
              label="Production Release Date"
              value={demoDatePickerVal}
              onChange={setDemoDatePickerVal}
              placeholder="Pick target deployment date..."
              clearable
            />
          </div>
        );

      case 'list-view':
        return (
          <div style={{ maxWidth: 540, width: '100%', margin: '0 auto' }}>
            <ListView
              data={[
                { id: '1', name: 'Auth Gateway us-east-1', region: 'Virginia', status: 'Healthy' },
                { id: '2', name: 'Database Replica eu-west-1', region: 'Ireland', status: 'Healthy' },
                { id: '3', name: 'Cache Layer ap-south-1', region: 'Mumbai', status: 'Optimal' },
              ]}
              divided
              renderItem={(item) => (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px' }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{item.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>{item.region}</div>
                  </div>
                  <span style={{ color: 'var(--color-feedback-success, #16a34a)', fontSize: 13, fontWeight: 600 }}>
                    {item.status}
                  </span>
                </div>
              )}
            />
          </div>
        );

      case 'web-view-box':
        return (
          <div style={{ maxWidth: 640, width: '100%', margin: '0 auto' }}>
            <WebViewBox
              src="https://spectra-ui.dev"
              title="Spectra UI Documentation"
              showHeader
              height="300px"
            />
          </div>
        );

      case 'status-indicator':
        return (
          <Stack direction="column" gap="lg" align="center" style={{ width: '100%' }}>
            <Stack direction="row" gap="lg" align="center" wrap justify="center">
              <LiveIndicator status="online" variant="pulse" label="Available" />
              <LiveIndicator status="busy" variant="static" label="Busy (DND)" />
              <LiveIndicator status="connecting" variant="beacon" label="Connecting..." />
              <LiveIndicator status="offline" variant="static" label="Offline" />
            </Stack>
            <Box style={{ backgroundColor: 'var(--color-surface-raised)', padding: '12px 20px', borderRadius: 8 }}>
              <Stack direction="row" gap="md" align="center">
                <LiveIndicator status="online" variant="pulse" size="sm" label="System Node" />
                <LiveIndicator status="connecting" variant="beacon" size="md" label="● LIVE BROADCAST" />
                <LiveIndicator status="busy" variant="pulse" size="lg" label="Incident Active" />
              </Stack>
            </Box>
          </Stack>
        );

      case 'field':
        return (
          <Box style={{ maxWidth: 420, width: '100%', margin: '0 auto' }}>
            <Field
              label="Production Cluster Host"
              required
              hint="Fully qualified domain name or IP address"
              info="Used by Envoy ingress proxy to route inbound traffic"
            >
              <TextInput placeholder="e.g. k8s-node-alpha.internal" />
            </Field>
          </Box>
        );

      case 'search-box':
        return (
          <Stack direction="column" gap="md" style={{ maxWidth: 420, width: '100%', margin: '0 auto' }}>
            <SearchBox placeholder="Search repositories, commits, and packages..." fullWidth />
            <Stack direction="row" gap="sm">
              <SearchBox size="sm" placeholder="Filter tags..." />
              <SearchBox size="md" placeholder="Search members..." />
            </Stack>
          </Stack>
        );

      case 'spin-button':
        return (
          <Box style={{ maxWidth: 320, width: '100%', margin: '0 auto' }}>
            <NumberInput
              label="Replica Instance Count"
              defaultValue={3}
              min={1}
              max={16}
              step={1}
              description="Autoscaling node instances between 1 and 16"
            />
          </Box>
        );

      case 'info-label':
        return (
          <Stack direction="column" gap="sm" style={{ maxWidth: 400, width: '100%', margin: '0 auto' }}>
            <InfoLabel
              htmlFor="deploy-region"
              info="Direct AWS data center location where computing units run"
              required
            >
              Deployment Region
            </InfoLabel>
            <TextInput id="deploy-region" defaultValue="us-east-1 (N. Virginia)" />
          </Stack>
        );

      case 'label':
        return (
          <Stack direction="column" gap="sm" style={{ maxWidth: 400, width: '100%', margin: '0 auto' }}>
            <Label htmlFor="label-demo-input" required>
              Service Account Identifier
            </Label>
            <TextInput id="label-demo-input" placeholder="svc-alpha-pipeline" />
          </Stack>
        );

      case 'persona':
        return (
          <Box style={{ maxWidth: 440, width: '100%', margin: '0 auto' }}>
            <Stack direction="row" gap="md" align="center" style={{ padding: '14px 18px', borderRadius: 10, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-subtle)' }}>
              <div style={{ position: 'relative' }}>
                <Avatar name="Sarah Connor" size="lg" />
                <span style={{ position: 'absolute', bottom: -2, right: -2 }}>
                  <LiveIndicator status="online" variant="pulse" size="sm" label={null} />
                </span>
              </div>
              <Stack direction="column" gap="xs">
                <span style={{ fontSize: 14, fontWeight: 700 }}>Sarah Connor</span>
                <span style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>Principal Platform Architect</span>
                <span style={{ fontSize: 11, color: 'var(--color-action-primary)', marginTop: 2 }}>sarah.c@winplaybox.in</span>
              </Stack>
            </Stack>
          </Box>
        );

      case 'teaching-popover':
        return (
          <Box style={{ maxWidth: 360, width: '100%', margin: '0 auto', padding: '20px 24px', borderRadius: 12, backgroundColor: 'var(--color-surface-elevated)', border: '1px solid var(--color-border-default)', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
            <Stack direction="row" justify="between" align="center" style={{ marginBottom: 8, width: '100%' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-action-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Feature Tour · Step 1 of 3</span>
              <Badge variant="primary">New</Badge>
            </Stack>
            <Stack gap="xs" style={{ marginBottom: 16 }}>
              <Text variant="heading-sm" weight="bold">Multi-Platform Token Engine</Text>
              <Text variant="body-sm" color="secondary" style={{ lineHeight: 1.5 }}>
                Theme tokens now automatically adapt between Web, iOS, Android, macOS, and Windows with zero runtime overhead.
              </Text>
            </Stack>
            <Stack direction="row" justify="between" align="center" style={{ width: '100%' }}>
              <Button size="sm" variant="secondary">Skip Tour</Button>
              <Button size="sm" variant="primary">Next Step</Button>
            </Stack>
          </Box>
        );

      case 'tag-picker':
        return (
          <Stack direction="column" gap="sm" style={{ maxWidth: 440, width: '100%', margin: '0 auto' }}>
            <label style={{ fontSize: 13, fontWeight: 600 }}>Assigned Release Tags</label>
            <Box style={{ padding: 12, borderRadius: 8, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-subtle)' }}>
              <TagGroup>
                {['Production', 'v0.2.0', 'Zero-Jank', 'WCAG-AA'].map((tag) => (
                  <InteractionTag key={tag} closable onClose={() => {}}>
                    {tag}
                  </InteractionTag>
                ))}
              </TagGroup>
            </Box>
            <SearchBox size="sm" placeholder="Search & add tags..." fullWidth />
          </Stack>
        );

      case 'time-picker':
        return (
          <Stack direction="column" gap="sm" style={{ maxWidth: 360, width: '100%', margin: '0 auto' }}>
            <label style={{ fontSize: 13, fontWeight: 600 }}>Scheduled Execution Time</label>
            <Stack direction="row" gap="sm" align="center">
              <TextInput defaultValue="14:30" type="time" style={{ width: 140 }} />
              <Badge variant="info">UTC +05:30</Badge>
            </Stack>
          </Stack>
        );

      case 'toolbar':
        return (
          <Box style={{ maxWidth: 560, width: '100%', margin: '0 auto' }}>
            <Stack
              role="toolbar"
              aria-label="Document editing toolbar"
              direction="row"
              gap="sm"
              align="center"
              wrap
              style={{
                padding: '8px 12px',
                borderRadius: 8,
                backgroundColor: 'var(--color-surface-raised)',
                border: '1px solid var(--color-border-subtle)',
              }}
            >
              <ButtonGroup variant="secondary">
                <Button size="sm">File</Button>
                <Button size="sm">Edit</Button>
                <Button size="sm">View</Button>
              </ButtonGroup>
              <div style={{ width: 1, height: 24, backgroundColor: 'var(--color-border-subtle)', margin: '0 4px' }} />
              <IconButton size="sm" aria-label="Search" icon={<SearchIcon size={14} />} />
              <IconButton size="sm" aria-label="Info" icon={<InfoIcon size={14} />} />
              <div style={{ marginLeft: 'auto' }}>
                <Button size="sm" variant="primary">Publish</Button>
              </div>
            </Stack>
          </Box>
        );

      case 'overflow': {
        const allItems = Array.from({ length: 8 }, (_, i) => ({
          id: `item-${i}`,
          label: `Item ${i}`,
        }));

        let visibleCount = 6;
        if (overflowSandboxWidth < 260) visibleCount = 1;
        else if (overflowSandboxWidth < 340) visibleCount = 2;
        else if (overflowSandboxWidth < 420) visibleCount = 4;
        else if (overflowSandboxWidth < 520) visibleCount = 5;
        else if (overflowSandboxWidth < 620) visibleCount = 6;
        else visibleCount = 8;

        const visibleItems = allItems.slice(0, visibleCount);
        const overflowItems = allItems.slice(visibleCount);

        return (
          <Stack direction="column" gap="md" align="center" style={{ width: '100%', maxWidth: 640 }}>
            {/* Interactive Resizer Controls Toolbar */}
            <Stack
              direction="row"
              align="center"
              justify="between"
              style={{
                width: '100%',
                padding: '8px 14px',
                backgroundColor: 'var(--color-surface-raised)',
                borderRadius: 8,
                border: '1px solid var(--color-border-subtle)',
                flexWrap: 'wrap',
                gap: 10,
              }}
            >
              <Stack direction="row" align="center" gap="xs">
                <Text size="xs" weight="semibold" color="muted">Width:</Text>
                <input
                  type="range"
                  min={220}
                  max={680}
                  step={10}
                  value={overflowSandboxWidth}
                  onChange={(e) => setOverflowSandboxWidth(Number(e.target.value))}
                  style={{ width: 130, cursor: 'ew-resize' }}
                />
                <Text size="xs" weight="bold" color="primary" style={{ fontVariantNumeric: 'tabular-nums', width: 44 }}>
                  {overflowSandboxWidth}px
                </Text>
              </Stack>
              <Stack direction="row" align="center" gap="xs">
                {[
                  { label: 'Full', val: 660 },
                  { label: 'Medium', val: 500 },
                  { label: 'Mobile', val: 360 },
                  { label: 'Compact', val: 240 },
                ].map((preset) => (
                  <Button
                    key={preset.label}
                    size="sm"
                    variant={overflowSandboxWidth === preset.val ? 'primary' : 'secondary'}
                    onClick={() => setOverflowSandboxWidth(preset.val)}
                  >
                    {preset.label}
                  </Button>
                ))}
              </Stack>
            </Stack>

            {/* Resizable Area Container */}
            <Box
              style={{
                width: overflowSandboxWidth,
                maxWidth: '100%',
                minWidth: 200,
                resize: 'horizontal',
                overflow: 'hidden',
                position: 'relative',
                transition: 'width 0.12s ease',
                padding: '26px 14px 14px 14px',
                borderRadius: 4,
                backgroundColor: 'var(--color-surface)',
                border: '2px solid #0078D4',
                boxShadow: '0 2px 14px rgba(0, 120, 212, 0.12)',
              }}
            >
              {/* Attached Resizable Area Top-Left Tab */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backgroundColor: '#0078D4',
                  color: '#FFFFFF',
                  padding: '2px 8px',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  userSelect: 'none',
                }}
              >
                Resizable Area
              </div>

              <Stack direction="row" gap="xs" align="center" justify="between" style={{ width: '100%' }}>
                <Stack direction="row" gap="xs" align="center" style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
                  {visibleItems.map((item) => (
                    <Button
                      key={item.id}
                      size="sm"
                      variant="secondary"
                      style={{
                        flexShrink: 0,
                        borderRadius: 4,
                        border: '1px solid var(--color-border-default)',
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Stack>
                {overflowItems.length > 0 && (
                  <Menu>
                    <MenuButton
                      size="sm"
                      variant="secondary"
                      style={{
                        flexShrink: 0,
                        borderRadius: 4,
                        fontWeight: 600,
                        backgroundColor: 'var(--color-surface-raised)',
                        border: '1px solid var(--color-border-default)',
                      }}
                    >
                      +{overflowItems.length} {overflowItems.length === 1 ? 'item' : 'items'}
                    </MenuButton>
                    {overflowItems.map((item) => (
                      <MenuItem key={item.id}>{item.label}</MenuItem>
                    ))}
                  </Menu>
                )}
              </Stack>
            </Box>

            <Stack direction="row" align="center" gap="xs">
              <Badge variant="primary" size="sm">↔ Resizable</Badge>
              <Text size="xs" color="muted">
                Drag the bottom-right corner or use width presets to test dynamic item overflow collapse.
              </Text>
            </Stack>
          </Stack>
        );
      }

      case 'image':
        return (
          <Box style={{ maxWidth: 440, width: '100%', margin: '0 auto', textAlign: 'center' }}>
            <Box style={{ width: '100%', height: 200, borderRadius: 12, overflow: 'hidden', backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-subtle)', background: 'linear-gradient(135deg, rgba(2,132,199,0.1) 0%, rgba(99,102,241,0.1) 100%)' }}>
              <Stack align="center" justify="center" style={{ width: '100%', height: '100%' }}>
                <Box style={{ width: 56, height: 56, borderRadius: 14, backgroundColor: 'var(--color-action-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontWeight: 800, fontSize: 20, marginBottom: 10 }}>
                  SP
                </Box>
                <span style={{ fontWeight: 700, fontSize: 15 }}>Responsive Image Surface</span>
                <span style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 4 }}>Optimized multi-DPI asset with lazy loading</span>
              </Stack>
            </Box>
          </Box>
        );

      case 'portal':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
            <Button variant="primary" onClick={() => setPortalMounted(!portalMounted)}>
              {portalMounted ? 'Unmount Teleported Overlay' : 'Mount to document.body via Portal'}
            </Button>
            {portalMounted && (
              <Portal>
                <div
                  style={{
                    position: 'fixed',
                    bottom: 24,
                    right: 24,
                    padding: '16px 20px',
                    backgroundColor: 'var(--color-surface-elevated)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    borderRadius: 12,
                    border: '1px solid var(--color-border-subtle)',
                    zIndex: 9999,
                  }}
                >
                  Teleported directly to document.body!
                </div>
              </Portal>
            )}
          </div>
        );

      default:
        return (
          <Box style={{ textAlign: 'center', padding: 28, borderRadius: 12, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-subtle)' }}>
            <Stack gap="xs" align="center">
              <Text variant="heading-sm" weight="semibold">{meta.name}</Text>
              <Text variant="body-sm" color="secondary">{meta.description}</Text>
            </Stack>
          </Box>
        );
    }
  };

  // Render Platform-Correct Simulator Component
  const renderNativePreview = () => {
    switch (meta.id) {
      case 'alert':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
            <Alert variant="info" title="System Notice">Platform-appropriate feedback indicator</Alert>
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
            <Chip label="Mobile Platform" variant="filled" selected />
            <Chip label="Hermes Engine" variant="outlined" />
          </div>
        );

      case 'breadcrumb':
      case 'breadcrumbs':
        return (
          <Breadcrumbs
            items={[
              { label: 'Settings' },
              { label: 'Account' },
              { label: 'Profile', isCurrent: true },
            ]}
          />
        );
      case 'button':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%' }}>
            <Button variant="primary" size="md" style={{ width: '100%' }}>
              Primary Action
            </Button>
            <Button variant="secondary" size="md" style={{ width: '100%' }}>
              Secondary Action
            </Button>
            <Button variant="tertiary" size="md" style={{ width: '100%' }}>
              Plain Action
            </Button>
          </div>
        );

      case 'split-button':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%' }}>
            <SplitButton
              variant="primary"
              options={[
                { label: 'Rebase and merge', onClick: () => {} },
                { label: 'Squash and merge', onClick: () => {} },
              ]}
              onClick={() => {}}
            >
              Merge Pull Request
            </SplitButton>
            <SplitButton
              variant="secondary"
              options={[
                { label: 'Export as CSV', onClick: () => {} },
                { label: 'Export as Markdown', onClick: () => {} },
              ]}
              onClick={() => {}}
            >
              Export Report
            </SplitButton>
          </div>
        );

      case 'button-group':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%', alignItems: 'center' }}>
            <ButtonGroup orientation="horizontal" style={{ width: '100%' }}>
              <Button variant="secondary" size="md" style={{ flex: 1 }}>Grid</Button>
              <Button variant="primary" size="md" style={{ flex: 1 }}>List</Button>
              <Button variant="secondary" size="md" style={{ flex: 1 }}>Map</Button>
            </ButtonGroup>
            <ButtonGroup orientation="horizontal" style={{ width: '100%' }}>
              <Button variant="secondary" size="sm" style={{ flex: 1 }}>Day</Button>
              <Button variant="secondary" size="sm" style={{ flex: 1 }}>Week</Button>
              <Button variant="primary" size="sm" style={{ flex: 1 }}>Month</Button>
              <Button variant="secondary" size="sm" style={{ flex: 1 }}>Year</Button>
            </ButtonGroup>
          </div>
        );

      case 'compound-button':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
            <CompoundButton
              subtitle="Secure access using hardware biometric vault"
              icon={<SparklesIcon size={20} />}
              variant="secondary"
              style={{ width: '100%' }}
            >
              Biometric Authentication
            </CompoundButton>
            <CompoundButton
              subtitle="End-to-end encrypted backup to replica cluster"
              icon={<SearchIcon size={20} />}
              variant="primary"
              style={{ width: '100%' }}
            >
              Cloud Synchronization
            </CompoundButton>
          </div>
        );
      case 'text-input':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%' }}>
            <TextInput
              label={currentPlatform === 'android' ? 'Search (Android · 48dp)' : 'Search (iOS · 44pt)'}
              placeholder="Search stories, documents..."
              leftIcon={<SearchIcon size={16} />}
              description={currentPlatform === 'android' ? 'Elevation shadow and TalkBack accessibility' : 'Dynamic Type scale and VoiceOver traits'}
            />
            <TextInput
              label="Account Password"
              type="password"
              placeholder="Enter secure password"
              rightIcon={<EyeOffIcon size={16} />}
            />
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
                <AccordionHeader>Collapsible Section Header</AccordionHeader>
                <AccordionPanel>Smooth layout animation and fluid expansion.</AccordionPanel>
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
            <Stack gap="xs">
              <Text variant="heading-sm" weight="semibold">Content Card</Text>
              <Text variant="body-sm" color="secondary">
                Responsive surface with token styling and interactive elevation.
              </Text>
            </Stack>
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
      case 'table':
        return (
          <div style={{ width: '100%' }}>
            <Table
              striped
              dense
            >
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Service</TableHeaderCell>
                  <TableHeaderCell>Region</TableHeaderCell>
                  <TableHeaderCell>Latency</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell style={{ fontWeight: 600 }}>API Gateway</TableCell>
                  <TableCell>us-east</TableCell>
                  <TableCell style={{ color: 'var(--color-feedback-success)' }}>24ms</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: 600 }}>Auth Engine</TableCell>
                  <TableCell>eu-west</TableCell>
                  <TableCell style={{ color: 'var(--color-feedback-success)' }}>38ms</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: 600 }}>DB Cluster</TableCell>
                  <TableCell>ap-south</TableCell>
                  <TableCell style={{ color: 'var(--color-feedback-warning)' }}>92ms</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        );
      case 'copy-button':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
            <Button variant="primary" style={{ width: '100%' }}>Copy Install Command</Button>
            <Button variant="secondary" style={{ width: '100%' }}>Copy Contract Hash</Button>
          </div>
        );
      case 'date-picker':
        return (
          <div style={{ width: '100%' }}>
            <DatePicker
              label="Release Schedule"
              value={demoDatePickerVal}
              onChange={setDemoDatePickerVal}
            />
          </div>
        );
      case 'list-view':
        return (
          <div style={{ width: '100%' }}>
            <ListView
              data={[
                { id: '1', title: 'Service Alpha', status: 'Healthy' },
                { id: '2', title: 'Service Beta', status: 'Optimal' },
              ]}
              divided
              renderItem={(item) => (
                <div style={{ padding: '12px 14px' }}>
                  <div style={{ fontWeight: 600 }}>{item.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{item.status}</div>
                </div>
              )}
            />
          </div>
        );
      case 'web-view-box':
        return (
          <div style={{ width: '100%' }}>
            <WebViewBox
              src="https://example.com"
              title="Mobile Web Frame"
              height="220px"
            />
          </div>
        );
      case 'icon-button':
        return (
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center' }}>
            <IconButton aria-label="Search" icon={<SearchIcon size={18} />} variant="primary" />
            <IconButton aria-label="Copy" icon={<CopyIcon size={18} />} variant="secondary" />
            <IconButton aria-label="Sparkles" icon={<SparklesIcon size={18} />} variant="tertiary" />
          </div>
        );
      case 'checkbox':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%' }}>
            <Checkbox label="Enable Push Notifications" checked={true} />
            <Checkbox label="Sync Analytics Data" checked={false} />
          </div>
        );
      case 'radio':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%' }}>
            <Radio label="Production Server" name="mobile-env" value="prod" checked={true} />
            <Radio label="Staging Sandbox" name="mobile-env" value="staging" checked={false} />
          </div>
        );
      case 'select':
        return (
          <div style={{ width: '100%' }}>
            <Select
              label="Select Deployment Region"
              options={[
                { label: 'US-East (Virginia)', value: 'us-east' },
                { label: 'EU-West (Frankfurt)', value: 'eu-west' },
                { label: 'AP-South (Mumbai)', value: 'ap-south' },
              ]}
              defaultValue="us-east"
            />
          </div>
        );
      case 'bottom-sheet':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', alignItems: 'center' }}>
            <Button variant="primary" style={{ width: '100%' }}>Open Action Sheet</Button>
            <span style={{ fontSize: 12, color: 'var(--color-text-secondary)', textAlign: 'center' }}>
              Modal bottom sheet with drag handles and velocity snap points
            </span>
          </div>
        );
      case 'live-indicator':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center' }}>
            <LiveIndicator variant="pulse" label="LIVE FEED" />
            <LiveIndicator variant="beacon" label="EDGE REPLICA" />
          </div>
        );
      default:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: '32px 16px', textAlign: 'center' }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)' }}>
              {meta.name} is not available on {platformMeta.name}
            </div>
            <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', maxWidth: 280, lineHeight: 1.5 }}>
              This component is exclusive to other platform architectures.
            </div>
            <Button size="sm" variant="secondary" onClick={() => setPlatform('web')}>
              Switch to Web
            </Button>
          </div>
        );
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        minHeight: '100%',
        position: 'relative',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      {/* Middle Content Container Body */}
      <div
        style={{
          flex: 1,
          minWidth: 0,
          maxWidth: 960,
          margin: '0 auto',
          padding: '36px 40px 80px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: 40,
        }}
      >
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
            <Stack direction="row" align="center" gap="md" wrap>
              <Text
                as="h1"
                variant="heading"
                size="xl"
                weight="bold"
                style={{
                  fontSize: 36,
                  letterSpacing: '-0.025em',
                  margin: 0,
                  color: 'var(--color-text-primary)',
                }}
              >
                {meta.name}
              </Text>

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
            </Stack>

            {/* Source code link hidden per user request */}
            {false && (
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
            )}
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

          {/* Dynamic Resource Pills Row (Zero Emojis) */}
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
              href="https://bundlephobia.com/package/@winplaybox/react"
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

            {/* Storybook, Source, and WAI-ARIA pills hidden per user specification */}
            {false && (
              <>
                <a href={getComponentStorybookUrl(meta.id)}>Storybook</a>
                <a href={getGitHubUrl(meta.id, platformMode)}>Source</a>
                {COMPONENT_WAI_ARIA[meta.id] && <a href={COMPONENT_WAI_ARIA[meta.id]}>WAI-ARIA</a>}
              </>
            )}
          </div>

          {/* Platform Availability & Capability Enforcement */}
          <div
            style={{
              marginTop: 16,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              padding: '14px 16px',
              borderRadius: 10,
              backgroundColor: 'var(--color-surface-raised)',
              border: '1px solid var(--color-border-subtle)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--color-text-muted)' }}>
                  Available on:
                </span>
                {supportedPlatforms.map((p) => {
                  const isCurrent = currentPlatform === p;
                  const isComingSoon = p === 'windows' || p === 'macos';
                  return (
                    <button
                      key={p}
                      disabled={isComingSoon}
                      onClick={() => {
                        if (isComingSoon) return;
                        setPlatform(p);
                      }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        padding: '4px 10px',
                        borderRadius: 6,
                        border: '1px solid',
                        borderColor: isCurrent ? 'var(--color-action-primary)' : 'var(--color-border-default)',
                        backgroundColor: isCurrent ? 'rgba(0, 127, 255, 0.12)' : 'var(--color-surface)',
                        color: isComingSoon
                          ? 'var(--color-text-muted)'
                          : isCurrent
                          ? 'var(--color-action-primary)'
                          : 'var(--color-text-secondary)',
                        fontSize: 12,
                        fontWeight: isCurrent ? 700 : 500,
                        cursor: isComingSoon ? 'not-allowed' : 'pointer',
                        opacity: isComingSoon ? 0.6 : 1,
                        transition: 'all 0.12s ease',
                      }}
                    >
                      <PlatformIcon
                        platform={p}
                        size={13}
                        color={
                          isComingSoon
                            ? 'var(--color-text-muted)'
                            : isCurrent
                            ? 'var(--color-action-primary)'
                            : 'var(--color-text-muted)'
                        }
                      />
                      <span>{PLATFORMS[p]?.name || p}</span>
                      {isComingSoon && (
                        <span style={{ fontSize: 10, color: 'var(--color-text-muted)', marginLeft: 2, fontWeight: 500 }}>
                          Coming soon
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <PlatformIcon platform={currentPlatform} size={15} color="var(--color-action-primary)" />
                <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  Active Context: {platformMeta.name}
                </span>
              </div>
            </div>

            {/* Platform Capabilities & Limitations Summary */}
            {activeCap && (activeCap.supportedCapabilities || activeCap.unsupportedCapabilities) && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  flexWrap: 'wrap',
                  paddingTop: 10,
                  borderTop: '1px solid var(--color-border-subtle)',
                }}
              >
                <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--color-text-muted)', marginRight: 2 }}>
                  {platformMeta.name} Capabilities:
                </span>
                {activeCap.supportedCapabilities?.map((c) => (
                  <span
                    key={c}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4,
                      fontSize: 11,
                      fontWeight: 600,
                      padding: '2px 8px',
                      borderRadius: 4,
                      backgroundColor: 'rgba(16, 185, 129, 0.12)',
                      color: '#10B981',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                    }}
                  >
                    <CheckIcon size={11} />
                    <span>{c}</span>
                  </span>
                ))}
                {activeCap.unsupportedCapabilities?.map((c) => (
                  <span
                    key={c}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4,
                      fontSize: 11,
                      fontWeight: 500,
                      padding: '2px 8px',
                      borderRadius: 4,
                      backgroundColor: 'rgba(239, 68, 68, 0.08)',
                      color: '#EF4444',
                      border: '1px solid rgba(239, 68, 68, 0.2)',
                    }}
                  >
                    <CloseIcon size={11} />
                    <span>{c}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
        </Card>

      {/* Platform Support Verification Gate */}
      {!isCurrentSupported ? (
        <Card
          variant="bordered"
          style={{
            backgroundColor: 'var(--color-surface)',
            padding: '36px 32px',
            borderRadius: 16,
            border: '1px solid var(--color-border-subtle)',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              color: '#EF4444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AlertCircleIcon size={26} />
          </div>
          <Text as="h2" variant="heading" style={{ fontSize: 22, fontWeight: 800, margin: 0, color: 'var(--color-text-primary)' }}>
            {meta.name} is not available on {platformMeta.name}
          </Text>
          <Text as="p" style={{ fontSize: 14, color: 'var(--color-text-secondary)', maxWidth: 600, lineHeight: 1.6, margin: 0 }}>
            Under Spectra UI Architectural Rule 1 & Rule 43 (Capability & Recipe Enforcement), capabilities that are not implemented or verified natively on {platformMeta.name} are hidden and never faked with non-native shims.
          </Text>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-muted)' }}>
              Switch to a verified platform:
            </span>
            {supportedPlatforms.map((p) => (
              <button
                key={p}
                onClick={() => setPlatform(p)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '6px 14px',
                  borderRadius: 6,
                  border: '1px solid var(--color-border-default)',
                  backgroundColor: 'var(--color-surface-raised)',
                  color: 'var(--color-action-primary)',
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.12s ease',
                }}
              >
                <PlatformIcon platform={p} size={14} color="var(--color-action-primary)" />
                <span>{PLATFORMS[p]?.name || p}</span>
              </button>
            ))}
          </div>
        </Card>
      ) : (
        <>

      {/* 3. PLATFORM VIEW: Web Mode */}
      {platformMode === 'web' && (
        <>
          {/* 1. Primary Demo Section: Basic <Component> */}
          <div id="playground" style={{ display: 'flex', flexDirection: 'column', gap: 14, scrollMarginTop: 80 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Text
                  as="h2"
                  variant="heading"
                  size="lg"
                  weight="bold"
                  style={{ fontSize: 22, margin: 0, letterSpacing: '-0.01em' }}
                >
                  Basic {meta.name}
                </Text>
                <a href="#playground" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: 16 }} title="Direct link to this section">#</a>
              </div>

              {/* Viewport Resizer Toolbar for all components */}
              <Stack direction="row" align="center" gap="xs" style={{ flexWrap: 'wrap' }}>
                <Text size="xs" color="muted" weight="semibold">Viewport:</Text>
                {[
                  { label: 'Full', val: '100%' as const },
                  { label: 'Tablet (768px)', val: '768px' as const },
                  { label: 'Mobile (480px)', val: '480px' as const },
                  { label: 'Compact (360px)', val: '360px' as const },
                ].map((vp) => (
                  <Button
                    key={vp.label}
                    size="sm"
                    variant={playgroundViewportWidth === vp.val ? 'primary' : 'secondary'}
                    onClick={() => setPlaygroundViewportWidth(vp.val)}
                  >
                    {vp.label}
                  </Button>
                ))}
              </Stack>

              <button
                type="button"
                onClick={() => openFeedbackForSection(`Basic ${meta.name}`)}
                title={`Give feedback on the "Basic ${meta.name}" section`}
                aria-label={`Give feedback on Basic ${meta.name}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  border: '1px solid var(--color-border-subtle)',
                  backgroundColor: 'var(--color-surface)',
                  color: 'var(--color-text-muted)',
                  cursor: 'pointer',
                  transition: 'all 0.12s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-action-primary)';
                  e.currentTarget.style.borderColor = 'var(--color-action-primary)';
                  e.currentTarget.style.backgroundColor = 'rgba(0, 127, 255, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-muted)';
                  e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                  e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                }}
              >
                <SectionCommentPlusIcon size={14} />
              </button>
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
              {/* Live Preview Area with Responsive Viewport Wrapper */}
              <div
                style={{
                  padding: '48px 32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 200,
                  overflowX: 'auto',
                }}
              >
                <div
                  style={{
                    width: playgroundViewportWidth,
                    maxWidth: '100%',
                    transition: 'width 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                  }}
                >
                  {customPlaygroundCode !== null && DynamicPlaygroundComp ? (
                    React.createElement(DynamicPlaygroundComp)
                  ) : (
                    renderComponentPreview()
                  )}
                </div>
              </div>

              {/* Bottom Action Bar */}
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

          {/* 2. Spectra Component Props Reference (Rendered immediately after Basic component before variants showcase) */}
          <ComponentApiSection componentId={meta.id} />

          {/* 3. Variants Showcase (Rendered directly without redundant banner) */}
          <div id="usage-variants" style={{ display: 'flex', flexDirection: 'column', gap: 20, scrollMarginTop: 80 }}>
            <ComponentVariantsShowcase componentId={meta.id} />
          </div>

          {/* =========================================================================
              SPECTRA UI ENTERPRISE 7 PILLARS ARCHITECTURE
              1. Types: Visual appearances, shapes, density sizing scales, and composite subtypes.
              2. Behavior: Interactive state machine (hover, focus, pressed, disabled, disabledFocusable, loading, error).
              3. Layout: 4px grid spacing tokens, responsive density, inline vs full-width block expansion, anatomy & motion.
              4. Content: Action-oriented verbs, single-line labeling, capitalization rules, and Dos & Don'ts.
              5. Accessibility: WCAG 2.1 AA compliance, WAI-ARIA APG patterns, double-ring focus visible indicators, and keyboard navigation.
              6. Resources: Direct Storybook interactive canvas URLs, Spectra Figma design specs, and WAI-ARIA patterns.
              7. Quick Guides: Production code recipes, tree-shakeable imports, and minimizing bundle size.
              ========================================================================= */}

          {/* PILLAR 1: Types & Hierarchy */}
          <div id="types" style={{ scrollMarginTop: 80 }}>
            <Card
              variant="bordered"
              style={{
                backgroundColor: 'var(--color-surface)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                padding: '24px',
                borderRadius: 12,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Text as="h2" variant="heading" style={{ fontSize: 22, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                    1. Types & Visual Hierarchy
                  </Text>
                  <a href="#types" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: 16 }} title="Direct link to this section">#</a>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      padding: '2px 8px',
                      borderRadius: 12,
                      backgroundColor: 'rgba(0, 127, 255, 0.08)',
                      color: 'var(--color-action-primary, #0078D4)',
                      border: '1px solid rgba(0, 127, 255, 0.2)',
                    }}
                  >
                    Spectra UI Specification
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => openFeedbackForSection('1. Types & Hierarchy')}
                  title="Give feedback on Types & Hierarchy"
                  aria-label="Give feedback on Types & Hierarchy"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    border: '1px solid var(--color-border-subtle)',
                    backgroundColor: 'var(--color-surface)',
                    color: 'var(--color-text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.12s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-action-primary)';
                    e.currentTarget.style.borderColor = 'var(--color-action-primary)';
                    e.currentTarget.style.backgroundColor = 'rgba(0, 127, 255, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-text-muted)';
                    e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                    e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                  }}
                >
                  <SectionCommentPlusIcon size={14} />
                </button>
              </div>

              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                {pillarsData.types.overview}
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: 14,
                }}
              >
                {pillarsData.types.items.map((item) => (
                  <div
                    key={item.name}
                    style={{
                      padding: '16px',
                      borderRadius: 'var(--radius-component-md, 8px)',
                      backgroundColor: 'var(--color-surface-raised)',
                      border: '1px solid var(--color-border-subtle)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 6,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--color-text-primary)' }}>
                        {item.name}
                      </span>
                      {item.badge && (
                        <span
                          style={{
                            fontSize: 10,
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                            padding: '2px 6px',
                            borderRadius: 4,
                            backgroundColor: 'var(--color-surface)',
                            color: 'var(--color-text-muted)',
                            border: '1px solid var(--color-border-default)',
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* PILLAR 2: Interactive Behavior & State Machine */}
          <div id="behavior" style={{ scrollMarginTop: 80 }}>
            <Card
              variant="bordered"
              style={{
                backgroundColor: 'var(--color-surface)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                padding: '24px',
                borderRadius: 12,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Text as="h2" variant="heading" style={{ fontSize: 22, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                    2. Interactive Behavior & State Machine
                  </Text>
                  <a href="#behavior" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: 16 }} title="Direct link to this section">#</a>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      padding: '2px 8px',
                      borderRadius: 12,
                      backgroundColor: 'rgba(16, 185, 129, 0.08)',
                      color: '#10B981',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                    }}
                  >
                    State Machine Guaranteed
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => openFeedbackForSection('2. Interactive Behavior')}
                  title="Give feedback on Interactive Behavior"
                  aria-label="Give feedback on Interactive Behavior"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    border: '1px solid var(--color-border-subtle)',
                    backgroundColor: 'var(--color-surface)',
                    color: 'var(--color-text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.12s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-action-primary)';
                    e.currentTarget.style.borderColor = 'var(--color-action-primary)';
                    e.currentTarget.style.backgroundColor = 'rgba(0, 127, 255, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-text-muted)';
                    e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                    e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                  }}
                >
                  <SectionCommentPlusIcon size={14} />
                </button>
              </div>

              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                {pillarsData.behavior.overview}
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: 14,
                }}
              >
                {pillarsData.behavior.states.map((st) => (
                  <div
                    key={st.name}
                    style={{
                      padding: '16px',
                      borderRadius: 'var(--radius-component-md, 8px)',
                      backgroundColor: 'var(--color-surface-raised)',
                      border: '1px solid var(--color-border-subtle)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 6,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--color-text-primary)' }}>
                        {st.name}
                      </span>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 600,
                          fontFamily: 'monospace',
                          padding: '2px 6px',
                          borderRadius: 4,
                          backgroundColor: 'var(--color-surface)',
                          color: 'var(--color-action-primary)',
                          border: '1px solid var(--color-border-subtle)',
                        }}
                      >
                        150ms ease
                      </span>
                    </div>
                    <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {st.description}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* PILLAR 3: Layout, Density, Anatomy & Motion */}
          <div id="layout" style={{ scrollMarginTop: 80, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <Card
              variant="bordered"
              style={{
                backgroundColor: 'var(--color-surface)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                padding: '24px',
                borderRadius: 12,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Text as="h2" variant="heading" style={{ fontSize: 22, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                    3. Layout, Density & Grid Scales
                  </Text>
                  <a href="#layout" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: 16 }} title="Direct link to this section">#</a>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      padding: '2px 8px',
                      borderRadius: 12,
                      backgroundColor: 'rgba(217, 119, 6, 0.08)',
                      color: '#D97706',
                      border: '1px solid rgba(217, 119, 6, 0.25)',
                    }}
                  >
                    4px Design Token Grid
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => openFeedbackForSection('3. Layout & Density')}
                  title="Give feedback on Layout & Density"
                  aria-label="Give feedback on Layout & Density"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    border: '1px solid var(--color-border-subtle)',
                    backgroundColor: 'var(--color-surface)',
                    color: 'var(--color-text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.12s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-action-primary)';
                    e.currentTarget.style.borderColor = 'var(--color-action-primary)';
                    e.currentTarget.style.backgroundColor = 'rgba(0, 127, 255, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-text-muted)';
                    e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                    e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                  }}
                >
                  <SectionCommentPlusIcon size={14} />
                </button>
              </div>

              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                {pillarsData.layout.overview}
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: 14,
                }}
              >
                {pillarsData.layout.rules.map((rule) => (
                  <div
                    key={rule.title}
                    style={{
                      padding: '16px',
                      borderRadius: 'var(--radius-component-md, 8px)',
                      backgroundColor: 'var(--color-surface-raised)',
                      border: '1px solid var(--color-border-subtle)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 6,
                    }}
                  >
                    <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--color-text-primary)' }}>
                      {rule.title}
                    </span>
                    <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {rule.description}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

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
                <div style={{ padding: '18px 24px', borderBottom: '1px solid var(--color-border-default)', backgroundColor: 'var(--color-surface-raised)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Text as="h3" variant="heading" style={{ fontSize: 18, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                      Anatomy & Slots Specification
                    </Text>
                    <a href="#anatomy" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: 16 }} title="Direct link to this section">#</a>
                  </div>
                  <button
                    type="button"
                    onClick={() => openFeedbackForSection('Anatomy & Slots')}
                    title="Give feedback on Anatomy & Slots"
                    aria-label="Give feedback on Anatomy & Slots"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 26,
                      height: 26,
                      borderRadius: 6,
                      border: '1px solid var(--color-border-subtle)',
                      backgroundColor: 'var(--color-surface)',
                      color: 'var(--color-text-muted)',
                      cursor: 'pointer',
                      transition: 'all 0.12s ease',
                    }}
                  >
                    <SectionCommentPlusIcon size={14} />
                  </button>
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Text as="h3" variant="heading" style={{ fontSize: 18, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                      Motion, Micro-interactions & Timing
                    </Text>
                    <a href="#motion" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: 16 }} title="Direct link to this section">#</a>
                  </div>
                  <button
                    type="button"
                    onClick={() => openFeedbackForSection('Motion & Transitions')}
                    title="Give feedback on Motion & Transitions"
                    aria-label="Give feedback on Motion & Transitions"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 26,
                      height: 26,
                      borderRadius: 6,
                      border: '1px solid var(--color-border-subtle)',
                      backgroundColor: 'var(--color-surface)',
                      color: 'var(--color-text-muted)',
                      cursor: 'pointer',
                    }}
                  >
                    <SectionCommentPlusIcon size={14} />
                  </button>
                </div>
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
          </div>

          {/* PILLAR 4: Content Strategy & Labeling Guidelines */}
          <div id="content" style={{ scrollMarginTop: 80, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <Card
              variant="bordered"
              style={{
                backgroundColor: 'var(--color-surface)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                padding: '24px',
                borderRadius: 12,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Text as="h2" variant="heading" style={{ fontSize: 22, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                    4. Content Strategy & Labeling Guidelines
                  </Text>
                  <a href="#content" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: 16 }} title="Direct link to this section">#</a>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      padding: '2px 8px',
                      borderRadius: 12,
                      backgroundColor: 'rgba(124, 58, 237, 0.08)',
                      color: '#7C3AED',
                      border: '1px solid rgba(124, 58, 237, 0.25)',
                    }}
                  >
                    Editorial Standards
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => openFeedbackForSection('4. Content Strategy')}
                  title="Give feedback on Content Strategy"
                  aria-label="Give feedback on Content Strategy"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    border: '1px solid var(--color-border-subtle)',
                    backgroundColor: 'var(--color-surface)',
                    color: 'var(--color-text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.12s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-action-primary)';
                    e.currentTarget.style.borderColor = 'var(--color-action-primary)';
                    e.currentTarget.style.backgroundColor = 'rgba(0, 127, 255, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-text-muted)';
                    e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                    e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                  }}
                >
                  <SectionCommentPlusIcon size={14} />
                </button>
              </div>

              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                {pillarsData.content.overview}
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: 14,
                }}
              >
                {pillarsData.content.guidelines.map((guide) => (
                  <div
                    key={guide.title}
                    style={{
                      padding: '16px',
                      borderRadius: 'var(--radius-component-md, 8px)',
                      backgroundColor: 'var(--color-surface-raised)',
                      border: '1px solid var(--color-border-subtle)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 6,
                    }}
                  >
                    <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--color-text-primary)' }}>
                      {guide.title}
                    </span>
                    <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {guide.description}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Text as="h3" variant="heading" style={{ fontSize: 18, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                      Usage Guidelines (Dos and Don'ts)
                    </Text>
                    <a href="#guidelines" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: 16 }} title="Direct link to this section">#</a>
                  </div>
                  <button
                    type="button"
                    onClick={() => openFeedbackForSection('Usage Guidelines')}
                    title="Give feedback on Usage Guidelines"
                    aria-label="Give feedback on Usage Guidelines"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 26,
                      height: 26,
                      borderRadius: 6,
                      border: '1px solid var(--color-border-subtle)',
                      backgroundColor: 'var(--color-surface)',
                      color: 'var(--color-text-muted)',
                      cursor: 'pointer',
                    }}
                  >
                    <SectionCommentPlusIcon size={14} />
                  </button>
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
          </div>

          {/* PILLAR 5: Accessibility & WAI-ARIA Specifications */}
          <div id="accessibility" style={{ scrollMarginTop: 80, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <Card
              variant="bordered"
              style={{
                backgroundColor: 'var(--color-surface)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                padding: '24px',
                borderRadius: 12,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Text as="h2" variant="heading" style={{ fontSize: 22, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                    5. Accessibility & ARIA Specifications
                  </Text>
                  <a href="#accessibility" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: 16 }} title="Direct link to this section">#</a>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      padding: '2px 8px',
                      borderRadius: 12,
                      backgroundColor: 'rgba(16, 185, 129, 0.08)',
                      color: '#10B981',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                    }}
                  >
                    WCAG 2.1 AA Compliant
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => openFeedbackForSection('5. Accessibility & ARIA')}
                  title="Give feedback on Accessibility & ARIA"
                  aria-label="Give feedback on Accessibility & ARIA"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    border: '1px solid var(--color-border-subtle)',
                    backgroundColor: 'var(--color-surface)',
                    color: 'var(--color-text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.12s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-action-primary)';
                    e.currentTarget.style.borderColor = 'var(--color-action-primary)';
                    e.currentTarget.style.backgroundColor = 'rgba(0, 127, 255, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-text-muted)';
                    e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                    e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                  }}
                >
                  <SectionCommentPlusIcon size={14} />
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <div style={{ padding: '6px 12px', borderRadius: 6, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)', fontSize: 13 }}>
                  <span style={{ color: 'var(--color-text-muted)', marginRight: 6 }}>Semantic Role:</span>
                  <code style={{ color: 'var(--color-action-primary)', fontWeight: 700 }}>role="{pillarsData.accessibility.role}"</code>
                </div>
                <div style={{ padding: '6px 12px', borderRadius: 6, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)', fontSize: 13 }}>
                  <span style={{ color: 'var(--color-text-muted)', marginRight: 6 }}>Focus Indicator:</span>
                  <strong style={{ color: 'var(--color-text-primary)' }}>Double-Ring (3:1 Contrast Ratio)</strong>
                </div>
              </div>

              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                {pillarsData.accessibility.wcagNotes}
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: 14,
                }}
              >
                {pillarsData.accessibility.ariaAttributes.map((attr) => (
                  <div
                    key={attr.attribute}
                    style={{
                      padding: '16px',
                      borderRadius: 'var(--radius-component-md, 8px)',
                      backgroundColor: 'var(--color-surface-raised)',
                      border: '1px solid var(--color-border-subtle)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 6,
                    }}
                  >
                    <code style={{ fontWeight: 700, fontSize: 13, color: 'var(--color-action-primary)' }}>
                      {attr.attribute}
                    </code>
                    <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {attr.description}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

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
                <div style={{ padding: '18px 24px', borderBottom: '1px solid var(--color-border-default)', backgroundColor: 'var(--color-surface-raised)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Text as="h3" variant="heading" style={{ fontSize: 18, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                      Keyboard Navigation & Focus Traversal
                    </Text>
                    <a href="#keyboard" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: 16 }} title="Direct link to this section">#</a>
                  </div>
                  <button
                    type="button"
                    onClick={() => openFeedbackForSection('Keyboard Navigation & ARIA')}
                    title="Give feedback on Keyboard Navigation"
                    aria-label="Give feedback on Keyboard Navigation"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 26,
                      height: 26,
                      borderRadius: 6,
                      border: '1px solid var(--color-border-subtle)',
                      backgroundColor: 'var(--color-surface)',
                      color: 'var(--color-text-muted)',
                      cursor: 'pointer',
                    }}
                  >
                    <SectionCommentPlusIcon size={14} />
                  </button>
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
          </div>

          {/* PILLAR 6: Resources & Storybook Integration - Hidden per user specification */}
          {false && (
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
                gap: 20,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Text as="h2" variant="heading" style={{ fontSize: 22, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                    6. Resources & Multi-Platform Specs
                  </Text>
                  <a href="#resources" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: 16 }} title="Direct link to this section">#</a>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      padding: '2px 8px',
                      borderRadius: 12,
                      backgroundColor: 'rgba(255, 71, 133, 0.08)',
                      color: '#FF4785',
                      border: '1px solid rgba(255, 71, 133, 0.25)',
                    }}
                  >
                    Storybook Linked
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => openFeedbackForSection('6. Resources & Storybook')}
                  title="Give feedback on Resources & Storybook"
                  aria-label="Give feedback on Resources & Storybook"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    border: '1px solid var(--color-border-subtle)',
                    backgroundColor: 'var(--color-surface)',
                    color: 'var(--color-text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.12s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-action-primary)';
                    e.currentTarget.style.borderColor = 'var(--color-action-primary)';
                    e.currentTarget.style.backgroundColor = 'rgba(0, 127, 255, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-text-muted)';
                    e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                    e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                  }}
                >
                  <SectionCommentPlusIcon size={14} />
                </button>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: 16,
                }}
              >
                {/* 1. Official Storybook Live Interactive Canvas */}
                <a
                  href={storybookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '20px',
                    borderRadius: 'var(--radius-component-md, 8px)',
                    border: '1.5px solid rgba(255, 71, 133, 0.3)',
                    backgroundColor: 'var(--color-surface-raised)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: 120,
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#FF4785';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 71, 133, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 71, 133, 0.3)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <StorybookPillIcon size={24} />
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          padding: '2px 6px',
                          borderRadius: 4,
                          backgroundColor: '#FF4785',
                          color: '#ffffff',
                          letterSpacing: '0.04em',
                        }}
                      >
                        STORYBOOK LIVE
                      </span>
                    </div>
                    <ExternalLinkIcon size={16} color="var(--color-text-muted)" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--color-text-primary)' }}>
                      {meta.name} Storybook Canvas
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 4 }}>
                      Interactive isolated canvas & component story matrix
                    </div>
                  </div>
                </a>

                {/* 2. Spectra UI Component Source Code */}
                <a
                  href={getGitHubUrl(meta.id, platformMode)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '20px',
                    borderRadius: 'var(--radius-component-md, 8px)',
                    border: '1.5px solid var(--color-border-default)',
                    backgroundColor: 'var(--color-surface-raised)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: 120,
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-action-primary)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 127, 255, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-default)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-action-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          padding: '2px 6px',
                          borderRadius: 4,
                          backgroundColor: 'var(--color-surface)',
                          color: 'var(--color-text-primary)',
                          border: '1px solid var(--color-border-subtle)',
                          letterSpacing: '0.04em',
                        }}
                      >
                        GITHUB REPO
                      </span>
                    </div>
                    <ExternalLinkIcon size={16} color="var(--color-text-muted)" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--color-text-primary)' }}>
                      {meta.name} Source Code
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 4 }}>
                      @winplaybox/react implementation & TypeScript source
                    </div>
                  </div>
                </a>

                {/* 3. W3C ARIA APG Accessibility Pattern */}
                <a
                  href={meta.waiUrl || 'https://www.w3.org/WAI/ARIA/apg/patterns/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '20px',
                    borderRadius: 'var(--radius-component-md, 8px)',
                    border: '1px solid var(--color-border-default)',
                    backgroundColor: 'var(--color-surface-raised)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: 120,
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-action-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-default)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 800,
                          color: 'var(--color-action-primary)',
                          backgroundColor: 'rgba(0, 127, 255, 0.1)',
                          padding: '2px 8px',
                          borderRadius: 4,
                        }}
                      >
                        W3C APG
                      </span>
                    </div>
                    <ExternalLinkIcon size={16} color="var(--color-text-muted)" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--color-text-primary)' }}>
                      {meta.name} Accessible Pattern
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 4 }}>
                      WCAG 2.1 AA keyboard navigation & WAI-ARIA contract
                    </div>
                  </div>
                </a>

                {/* 4. React Component Guidance */}
                <div
                  onClick={() => setActiveResourceModal('react')}
                  style={{
                    padding: '20px',
                    borderRadius: 'var(--radius-component-md, 8px)',
                    border: '1px solid var(--color-border-default)',
                    backgroundColor: 'var(--color-surface-raised)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: 120,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <svg width="28" height="28" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
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
                    <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--color-text-primary)' }}>
                      {meta.name} Web Component
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 4 }}>
                      React guidance & programmatic API
                    </div>
                  </div>
                </div>

                {/* 5. Design Tokens Guidance */}
                <div
                  onClick={() => setActiveResourceModal('tokens')}
                  style={{
                    padding: '20px',
                    borderRadius: 'var(--radius-component-md, 8px)',
                    border: '1px solid var(--color-border-default)',
                    backgroundColor: 'var(--color-surface-raised)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: 120,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-action-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a7 7 0 0 0 0 14v6" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                      <line x1="16" y1="12" x2="16.01" y2="12" />
                    </svg>
                    <ExternalLinkIcon size={16} color="var(--color-text-muted)" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--color-text-primary)' }}>
                      {meta.name} Design Tokens
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 4 }}>
                      CSS variables & theme integration
                    </div>
                  </div>
                </div>

                {/* 6. WAI-ARIA Guidance */}
                <a
                  href={meta.waiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '20px',
                    borderRadius: 'var(--radius-component-md, 8px)',
                    border: '1px solid var(--color-border-default)',
                    backgroundColor: 'var(--color-surface-raised)',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: 120,
                    color: 'inherit',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 14,
                        backgroundColor: 'var(--color-action-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-text-inverse, #ffffff)',
                        fontWeight: 700,
                        fontSize: 10,
                      }}
                    >
                      WAI
                    </div>
                    <ExternalLinkIcon size={16} color="var(--color-text-muted)" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--color-text-primary)' }}>
                      {meta.waiPattern}
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 4 }}>
                      W3C Authoring Practices Guide
                    </div>
                  </div>
                </a>
              </div>
            </Card>
          </div>
          )}

          {/* PILLAR 7: Quick Guides & Production Recipes */}
          <div id="quick-guides" style={{ scrollMarginTop: 80 }}>
            <Card
              variant="bordered"
              style={{
                backgroundColor: 'var(--color-surface)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                padding: '24px',
                borderRadius: 12,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Text as="h2" variant="heading" style={{ fontSize: 22, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                    6. Quick Guides & Production Recipes
                  </Text>
                  <a href="#quick-guides" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: 16 }} title="Direct link to this section">#</a>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      padding: '2px 8px',
                      borderRadius: 12,
                      backgroundColor: 'rgba(2, 132, 199, 0.08)',
                      color: '#0284c7',
                      border: '1px solid rgba(2, 132, 199, 0.25)',
                    }}
                  >
                    Tree-Shakeable
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => openFeedbackForSection('6. Quick Guides')}
                  title="Give feedback on Quick Guides"
                  aria-label="Give feedback on Quick Guides"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    border: '1px solid var(--color-border-subtle)',
                    backgroundColor: 'var(--color-surface)',
                    color: 'var(--color-text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.12s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-action-primary)';
                    e.currentTarget.style.borderColor = 'var(--color-action-primary)';
                    e.currentTarget.style.backgroundColor = 'rgba(0, 127, 255, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-text-muted)';
                    e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                    e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                  }}
                >
                  <SectionCommentPlusIcon size={14} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {pillarsData.quickGuides.map((guide, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '18px 20px',
                      borderRadius: 'var(--radius-component-md, 8px)',
                      backgroundColor: 'var(--color-surface-raised)',
                      border: '1px solid var(--color-border-subtle)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 10,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--color-text-primary)' }}>
                        {guide.title}
                      </span>
                    </div>
                    <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {guide.description}
                    </span>
                    {guide.codeSnippet && (
                      <div
                        style={{
                          position: 'relative',
                          marginTop: 6,
                          borderRadius: 6,
                          overflow: 'hidden',
                          border: '1px solid var(--color-border-default)',
                          backgroundColor: '#0F172A',
                          color: '#E2E8F0',
                          padding: '12px 16px',
                          fontSize: 12,
                          fontFamily: 'monospace',
                          lineHeight: 1.5,
                        }}
                      >
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                          <code>{guide.codeSnippet}</code>
                        </pre>
                        <button
                          type="button"
                          onClick={() => {
                            navigator.clipboard.writeText(guide.codeSnippet!);
                          }}
                          title="Copy recipe code"
                          style={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 4,
                            padding: '3px 8px',
                            borderRadius: 4,
                            border: '1px solid rgba(255,255,255,0.2)',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            color: '#ffffff',
                            cursor: 'pointer',
                            fontSize: 11,
                          }}
                        >
                          <CopyIcon size={12} />
                          <span>Copy</span>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>

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
                <Text as="h2" variant="heading" style={{ fontSize: 22, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                  Apple iOS Recipes & Interactive Variations
                </Text>
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
                <Text as="h2" variant="heading" style={{ fontSize: 22, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                  Google Android Recipes & Interactive Variations
                </Text>
                <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
                  Android 48dp Touch Targets · Kotlin & React Native
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
                <Text as="h2" variant="heading" style={{ fontSize: 22, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                  Microsoft Windows Recipes & Interactive Variations
                </Text>
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
                <Text as="h2" variant="heading" style={{ fontSize: 22, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                  Apple macOS Recipes & Interactive Variations
                </Text>
                <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
                  macOS Sequoia · AppKit / SwiftUI · React Native for macOS
                </span>
              </div>
            </Card>
            <ComponentVariantsShowcase componentId={meta.id} />
          </div>
        </div>
      )}
        </>
      )}



      {/* Resource Modal for Web React or Mobile Native */}
      {activeResourceModal && (
        <Dialog
          isOpen={true}
          onClose={() => setActiveResourceModal(null)}
        >
          <div style={{ padding: 24 }}>
            <Text as="h3" variant="heading" style={{ margin: '0 0 12px', fontSize: 18, color: 'var(--color-text-primary)' }}>
              {activeResourceModal === 'react'
                ? `${meta.name} — Web React Guidance`
                : activeResourceModal === 'tokens'
                ? `${meta.name} — Design Tokens & CSS Variables`
                : `${meta.name} — Mobile Native Guidance`}
            </Text>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, margin: '0 0 16px' }}>
              {activeResourceModal === 'react'
                ? `Import directly from @winplaybox/react for Web applications:`
                : activeResourceModal === 'tokens'
                ? `Customizable CSS design tokens and variables available for ${meta.name}:`
                : `Import from @winplaybox/react-native for native iOS and Android mobile apps:`}
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
            <Text as="h3" variant="heading" style={{ margin: 0, fontSize: 18, fontWeight: 700, color: 'var(--color-text-primary)' }}>
              {meta.name} Documentation (Markdown)
            </Text>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
              <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
                Raw GitHub-compatible documentation markdown for {meta.name}
              </span>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  const mdContent = getComponentFullMarkdown(meta);
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
              {getComponentFullMarkdown(meta)}
            </pre>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
              <Button variant="primary" onClick={() => setIsMarkdownModalOpen(false)}>
                Close
              </Button>
            </div>
          </div>
        </Dialog>
      )}

      {/* 4. Page Feedback & Edit Section */}
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
        {/* Top Action Bar: [Edit this page] on Left, [Was this page helpful?] on Right */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          {/* Edit this page link: opens component markdown documentation on GitHub */}
          <a
            href={githubDocEditUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`Edit ${meta.name} documentation on GitHub`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              fontSize: 13,
              fontWeight: 500,
              lineHeight: 1,
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
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <EditPageIcon size={14} />
            </span>
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

        {/* Direct Feedback Form */}
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
                      href={githubIssueUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open a pre-filled documentation feedback issue on GitHub"
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

      {/* Sticky Table of Contents (Card Pattern Touching Corner Right Side) */}
      <div
        className="doc-right-toc"
        style={{
          width: 250,
          position: 'sticky',
          top: 0,
          right: 0,
          alignSelf: 'flex-start',
          maxHeight: '100vh',
          overflowY: 'auto',
          borderLeft: '1px solid var(--color-border-subtle)',
          backgroundColor: colorScheme === 'dark' ? 'rgba(15, 23, 42, 0.65)' : 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          flexShrink: 0,
          padding: '36px 18px 40px 16px',
          scrollbarWidth: 'thin',
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

          {/* Section: Component Props API (Right after Basic Component before variants) */}
          {platformMode === 'web' && (
            <a
              href="#api"
              onClick={(e) => scrollToSection(e, 'api')}
              style={{
                display: 'block',
                padding: '6px 0 6px 14px',
                marginLeft: -1,
                borderLeft: activeSection === 'api' ? '2px solid var(--color-action-primary)' : '2px solid transparent',
                color: activeSection === 'api' ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                fontWeight: activeSection === 'api' ? 600 : 400,
                textDecoration: 'none',
                fontSize: 13,
                transition: 'all 0.12s ease',
              }}
              onMouseEnter={(e) => {
                if (activeSection !== 'api') e.currentTarget.style.color = 'var(--color-text-primary)';
              }}
              onMouseLeave={(e) => {
                if (activeSection !== 'api') e.currentTarget.style.color = 'var(--color-text-secondary)';
              }}
            >
              Props & API Reference
            </a>
          )}

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
              {/* Pillar 1: Types & Hierarchy */}
              <a
                href="#types"
                onClick={(e) => scrollToSection(e, 'types')}
                style={{
                  display: 'block',
                  padding: '6px 0 6px 14px',
                  marginLeft: -1,
                  borderLeft: activeSection === 'types' ? '2px solid var(--color-action-primary)' : '2px solid transparent',
                  color: activeSection === 'types' ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                  fontWeight: activeSection === 'types' ? 600 : 400,
                  textDecoration: 'none',
                  fontSize: 13,
                  transition: 'all 0.12s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== 'types') e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== 'types') e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                1. Types & Hierarchy
              </a>

              {/* Pillar 2: Interactive Behavior */}
              <a
                href="#behavior"
                onClick={(e) => scrollToSection(e, 'behavior')}
                style={{
                  display: 'block',
                  padding: '6px 0 6px 14px',
                  marginLeft: -1,
                  borderLeft: activeSection === 'behavior' ? '2px solid var(--color-action-primary)' : '2px solid transparent',
                  color: activeSection === 'behavior' ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                  fontWeight: activeSection === 'behavior' ? 600 : 400,
                  textDecoration: 'none',
                  fontSize: 13,
                  transition: 'all 0.12s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== 'behavior') e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== 'behavior') e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                2. Interactive Behavior
              </a>

              {/* Pillar 3: Layout & Density */}
              <a
                href="#layout"
                onClick={(e) => scrollToSection(e, 'layout')}
                style={{
                  display: 'block',
                  padding: '6px 0 6px 14px',
                  marginLeft: -1,
                  borderLeft: activeSection === 'layout' ? '2px solid var(--color-action-primary)' : '2px solid transparent',
                  color: activeSection === 'layout' ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                  fontWeight: activeSection === 'layout' ? 600 : 400,
                  textDecoration: 'none',
                  fontSize: 13,
                  transition: 'all 0.12s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== 'layout') e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== 'layout') e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                3. Layout & Density
              </a>

              {/* Sub-item: Anatomy & Slots */}
              <a
                href="#anatomy"
                onClick={(e) => scrollToSection(e, 'anatomy')}
                style={{
                  display: 'block',
                  padding: '3px 0 3px 26px',
                  marginLeft: -1,
                  borderLeft: activeSection === 'anatomy' ? '2px solid var(--color-action-primary)' : '2px solid transparent',
                  color: activeSection === 'anatomy' ? 'var(--color-action-primary)' : 'var(--color-text-muted)',
                  fontWeight: activeSection === 'anatomy' ? 600 : 400,
                  textDecoration: 'none',
                  fontSize: 12,
                  transition: 'all 0.12s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== 'anatomy') e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== 'anatomy') e.currentTarget.style.color = 'var(--color-text-muted)';
                }}
              >
                Anatomy & Slots
              </a>

              {/* Sub-item: Motion & Timing */}
              <a
                href="#motion"
                onClick={(e) => scrollToSection(e, 'motion')}
                style={{
                  display: 'block',
                  padding: '3px 0 3px 26px',
                  marginLeft: -1,
                  borderLeft: activeSection === 'motion' ? '2px solid var(--color-action-primary)' : '2px solid transparent',
                  color: activeSection === 'motion' ? 'var(--color-action-primary)' : 'var(--color-text-muted)',
                  fontWeight: activeSection === 'motion' ? 600 : 400,
                  textDecoration: 'none',
                  fontSize: 12,
                  transition: 'all 0.12s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== 'motion') e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== 'motion') e.currentTarget.style.color = 'var(--color-text-muted)';
                }}
              >
                Motion & Timing
              </a>

              {/* Pillar 4: Content Guidelines */}
              <a
                href="#content"
                onClick={(e) => scrollToSection(e, 'content')}
                style={{
                  display: 'block',
                  padding: '6px 0 6px 14px',
                  marginLeft: -1,
                  borderLeft: activeSection === 'content' ? '2px solid var(--color-action-primary)' : '2px solid transparent',
                  color: activeSection === 'content' ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                  fontWeight: activeSection === 'content' ? 600 : 400,
                  textDecoration: 'none',
                  fontSize: 13,
                  transition: 'all 0.12s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== 'content') e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== 'content') e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                4. Content Guidelines
              </a>

              {/* Sub-item: Dos & Don'ts */}
              <a
                href="#guidelines"
                onClick={(e) => scrollToSection(e, 'guidelines')}
                style={{
                  display: 'block',
                  padding: '3px 0 3px 26px',
                  marginLeft: -1,
                  borderLeft: activeSection === 'guidelines' ? '2px solid var(--color-action-primary)' : '2px solid transparent',
                  color: activeSection === 'guidelines' ? 'var(--color-action-primary)' : 'var(--color-text-muted)',
                  fontWeight: activeSection === 'guidelines' ? 600 : 400,
                  textDecoration: 'none',
                  fontSize: 12,
                  transition: 'all 0.12s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== 'guidelines') e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== 'guidelines') e.currentTarget.style.color = 'var(--color-text-muted)';
                }}
              >
                Dos & Don'ts
              </a>

              {/* Pillar 5: Accessibility & ARIA */}
              <a
                href="#accessibility"
                onClick={(e) => scrollToSection(e, 'accessibility')}
                style={{
                  display: 'block',
                  padding: '6px 0 6px 14px',
                  marginLeft: -1,
                  borderLeft: activeSection === 'accessibility' ? '2px solid var(--color-action-primary)' : '2px solid transparent',
                  color: activeSection === 'accessibility' ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                  fontWeight: activeSection === 'accessibility' ? 600 : 400,
                  textDecoration: 'none',
                  fontSize: 13,
                  transition: 'all 0.12s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== 'accessibility') e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== 'accessibility') e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                5. Accessibility & ARIA
              </a>

              {/* Sub-item: Keyboard Navigation */}
              <a
                href="#keyboard"
                onClick={(e) => scrollToSection(e, 'keyboard')}
                style={{
                  display: 'block',
                  padding: '3px 0 3px 26px',
                  marginLeft: -1,
                  borderLeft: activeSection === 'keyboard' ? '2px solid var(--color-action-primary)' : '2px solid transparent',
                  color: activeSection === 'keyboard' ? 'var(--color-action-primary)' : 'var(--color-text-muted)',
                  fontWeight: activeSection === 'keyboard' ? 600 : 400,
                  textDecoration: 'none',
                  fontSize: 12,
                  transition: 'all 0.12s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== 'keyboard') e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== 'keyboard') e.currentTarget.style.color = 'var(--color-text-muted)';
                }}
              >
                Keyboard Navigation
              </a>

              {/* Pillar 7: Quick Guides */}
              <a
                href="#quick-guides"
                onClick={(e) => scrollToSection(e, 'quick-guides')}
                style={{
                  display: 'block',
                  padding: '6px 0 6px 14px',
                  marginLeft: -1,
                  borderLeft: activeSection === 'quick-guides' ? '2px solid var(--color-action-primary)' : '2px solid transparent',
                  color: activeSection === 'quick-guides' ? 'var(--color-action-primary)' : 'var(--color-text-secondary)',
                  fontWeight: activeSection === 'quick-guides' ? 600 : 400,
                  textDecoration: 'none',
                  fontSize: 13,
                  transition: 'all 0.12s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== 'quick-guides') e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== 'quick-guides') e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                6. Quick Guides
              </a>
            </>
          )}
        </nav>

        {/* Developer Dynamic Native Sponsor Ad Unit (Content Sidebar) */}
        <NativeSponsorAd
          componentId={meta.id}
          componentCategory={meta.category}
          publisherTheme="docs"
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};
