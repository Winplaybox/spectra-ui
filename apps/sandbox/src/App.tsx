import React, { useState } from 'react';
import {
  useColorScheme,
  usePack,
  useRTL,
  useToast,
  Button,
  TextInput,
  Switch,
  Checkbox,
  Radio,
  RadioGroup,
  Select,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tooltip,
  Avatar,
  Badge,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAction,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogCloseButton,
  Stack,
  Text,
  Container,
} from '@spectra/react';
import {
  SunIcon,
  MoonIcon,
  SearchIcon,
  CheckIcon,
  AlertCircleIcon,
  UserIcon,
  MoreVerticalIcon,
  ExternalLinkIcon,
  InfoIcon,
} from '@spectra/icons';

export const App: React.FC = () => {
  const { pack, setPack } = usePack();
  const { colorScheme, setColorScheme } = useColorScheme();
  const { isRTL, toggleRTL } = useRTL();
  const { toast } = useToast();

  const [activeTab, setActiveTab] = useState<'playground' | 'tokens' | 'architecture'>('playground');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(true);
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [checkboxIndeterminate, setCheckboxIndeterminate] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState('cloud');
  const [selectedCity, setSelectedCity] = useState('zurich');
  const [inputValue, setInputValue] = useState('');
  const [hasInputError, setHasInputError] = useState(false);

  const handleSimulateAction = () => {
    setButtonLoading(true);
    setTimeout(() => {
      setButtonLoading(false);
      toast('Operation completed successfully!', { type: 'success' });
    }, 1200);
  };

  const selectOptions = [
    { value: 'zurich', label: 'Zurich (HQ - Swiss Flat Style)' },
    { value: 'geneva', label: 'Geneva (International)' },
    { value: 'basel', label: 'Basel (Design & Art)' },
    { value: 'bern', label: 'Bern (Federal Center)' },
    { value: 'disabled', label: 'Lugano (Coming Soon)', disabled: true },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Flat Top Navigation Header */}
      <header
        style={{
          borderBottom: '1px solid var(--color-border-default)',
          backgroundColor: 'var(--color-surface)',
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 6,
              backgroundColor: 'var(--color-action-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-text-inverse)',
              fontWeight: 800,
              fontSize: 18,
            }}
          >
            S
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
              Spectra UI
              <span
                style={{
                  fontSize: 11,
                  padding: '2px 8px',
                  borderRadius: 4,
                  backgroundColor: 'var(--color-surface-raised)',
                  border: '1px solid var(--color-border-default)',
                  color: 'var(--color-action-primary)',
                  fontWeight: 600,
                }}
              >
                Swiss Flat Design (16 Components)
              </span>
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
              WinPlayBox Design System · Tier 1 + Tier 2
            </div>
          </div>
        </div>

        {/* Global Controls Toolbar (Light & Dark Only - No AMOLED) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          {/* Style Pack Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
            <span style={{ color: 'var(--color-text-muted)', fontWeight: 500 }}>Style Pack:</span>
            <select
              value={pack}
              onChange={(e) => setPack(e.target.value as any)}
              style={{
                padding: '6px 12px',
                borderRadius: 4,
                border: '1px solid var(--color-border-default)',
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-text-primary)',
                cursor: 'pointer',
                fontWeight: 500,
              }}
            >
              <option value="minimal">Minimal (Swiss Flat)</option>
              <option value="glass" disabled>Glass (Phase 2)</option>
              <option value="neumorphic" disabled>Neumorphic (Phase 2+)</option>
            </select>
          </div>

          {/* Color Mode Switcher: Strictly Light & Dark Only */}
          <div
            style={{
              display: 'flex',
              backgroundColor: 'var(--color-surface-raised)',
              padding: 3,
              borderRadius: 6,
              border: '1px solid var(--color-border-default)',
            }}
          >
            {(['light', 'dark'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setColorScheme(mode)}
                style={{
                  padding: '5px 12px',
                  borderRadius: 4,
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 12,
                  fontWeight: colorScheme === mode ? 600 : 400,
                  backgroundColor: colorScheme === mode ? 'var(--color-action-primary)' : 'transparent',
                  color: colorScheme === mode ? 'var(--color-text-inverse)' : 'var(--color-text-muted)',
                  textTransform: 'capitalize',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  transition: 'all 150ms ease',
                }}
              >
                {mode === 'light' ? <SunIcon size={13} /> : <MoonIcon size={13} />}
                {mode}
              </button>
            ))}
          </div>

          {/* RTL Toggle */}
          <Button size="sm" variant="secondary" onClick={toggleRTL}>
            {isRTL ? 'LTR' : 'RTL'}
          </Button>
        </div>
      </header>

      {/* Main Container */}
      <Container size="xl" padding="lg">
        {/* Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            gap: 8,
            borderBottom: '1px solid var(--color-border-default)',
            marginBottom: 24,
            paddingBottom: 4,
          }}
        >
          <button
            onClick={() => setActiveTab('playground')}
            style={{
              padding: '8px 16px',
              borderRadius: 4,
              border: 'none',
              backgroundColor: activeTab === 'playground' ? 'var(--color-surface-raised)' : 'transparent',
              color: activeTab === 'playground' ? 'var(--color-action-primary)' : 'var(--color-text-muted)',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            All 16 Components
          </button>
          <button
            onClick={() => setActiveTab('tokens')}
            style={{
              padding: '8px 16px',
              borderRadius: 4,
              border: 'none',
              backgroundColor: activeTab === 'tokens' ? 'var(--color-surface-raised)' : 'transparent',
              color: activeTab === 'tokens' ? 'var(--color-action-primary)' : 'var(--color-text-muted)',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Token Inspector
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            style={{
              padding: '8px 16px',
              borderRadius: 4,
              border: 'none',
              backgroundColor: activeTab === 'architecture' ? 'var(--color-surface-raised)' : 'transparent',
              color: activeTab === 'architecture' ? 'var(--color-action-primary)' : 'var(--color-text-muted)',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Design Principles & Gates
          </button>
        </div>

        {/* Tab 1: All Components Playground */}
        {activeTab === 'playground' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 24 }}>
            {/* 1. Button */}
            <Card variant="bordered" padding="lg">
              <CardHeader>
                <CardTitle>1. Button Component</CardTitle>
                <CardDescription>Flat 2D actions with solid colors and bold typography</CardDescription>
              </CardHeader>
              <CardContent>
                <Stack direction="column" gap="md">
                  <Stack direction="row" gap="sm" wrap>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="tertiary">Tertiary</Button>
                    <Button variant="danger">Danger</Button>
                  </Stack>
                  <Stack direction="row" gap="sm" wrap align="center">
                    <Button size="sm" variant="primary">Small</Button>
                    <Button size="md" variant="primary">Medium</Button>
                    <Button size="lg" variant="primary">Large</Button>
                  </Stack>
                  <Stack direction="row" gap="sm" wrap>
                    <Button
                      variant="primary"
                      isLoading={buttonLoading}
                      onClick={handleSimulateAction}
                      icon={<CheckIcon size={14} />}
                    >
                      {buttonLoading ? 'Processing...' : 'Simulate Async Action'}
                    </Button>
                    <Button variant="primary" disabled>
                      Disabled
                    </Button>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>

            {/* 2. Checkbox & Switch */}
            <Card variant="bordered" padding="lg">
              <CardHeader>
                <CardTitle>2. Checkbox & Switch</CardTitle>
                <CardDescription>Flat geometric toggles with crisp state indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <Stack direction="column" gap="md">
                  <Checkbox
                    checked={checkboxChecked}
                    onChange={setCheckboxChecked}
                    label="Accept Swiss Design Standard"
                    description="Emphasizes minimalism, grid structure, and clarity"
                  />
                  <Checkbox
                    checked={false}
                    indeterminate={checkboxIndeterminate}
                    onChange={() => setCheckboxIndeterminate(!checkboxIndeterminate)}
                    label="Indeterminate Hierarchy State"
                    description="Click to toggle indeterminate minus symbol"
                  />
                  <Switch
                    checked={switchChecked}
                    onChange={setSwitchChecked}
                    label="Dynamic Mode Sync"
                    description="Real-time CSS variable propagation"
                  />
                </Stack>
              </CardContent>
            </Card>

            {/* 3. Radio & RadioGroup */}
            <Card variant="bordered" padding="lg">
              <CardHeader>
                <CardTitle>3. Radio & RadioGroup</CardTitle>
                <CardDescription>Clean circular selectors with crisp solid center dot</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={selectedRadio}
                  onChange={setSelectedRadio}
                  orientation="vertical"
                >
                  <Radio
                    value="cloud"
                    label="Cloud Deployment"
                    description="Automated CI/CD with instant rollback"
                  />
                  <Radio
                    value="hybrid"
                    label="Hybrid Lakehouse"
                    description="Combines local edge cache with remote lake"
                  />
                  <Radio
                    value="onprem"
                    label="On-Premises Dedicated"
                    description="Air-gapped enterprise compliance node"
                  />
                </RadioGroup>
              </CardContent>
            </Card>

            {/* 4. Select Dropdown */}
            <Card variant="bordered" padding="lg">
              <CardHeader>
                <CardTitle>4. Select Component</CardTitle>
                <CardDescription>Custom flat dropdown with keyboard & a11y navigation</CardDescription>
              </CardHeader>
              <CardContent>
                <Stack direction="column" gap="md">
                  <Select
                    label="Swiss Regional Node"
                    options={selectOptions}
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                  />
                  <Select
                    label="Select with Error State"
                    options={selectOptions}
                    placeholder="Choose an invalid option..."
                    error="Connection to selected region timed out"
                  />
                </Stack>
              </CardContent>
            </Card>

            {/* 5. Tabs Component */}
            <Card variant="bordered" padding="lg">
              <CardHeader>
                <CardTitle>5. Tabs Navigation</CardTitle>
                <CardDescription>Compound WAI-ARIA tabbed views with underline indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="swiss">
                  <TabList>
                    <Tab value="swiss">Swiss Style</Tab>
                    <Tab value="flat">Flat UI</Tab>
                    <Tab value="tokens">Rule #0</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel value="swiss">
                      <Text size="sm" color="secondary" style={{ marginTop: 8 }}>
                        Swiss Design (International Typographic Style) pioneered asymmetric layouts, mathematical grids, and sans-serif typefaces like Helvetica.
                      </Text>
                    </TabPanel>
                    <TabPanel value="flat">
                      <Text size="sm" color="secondary" style={{ marginTop: 8 }}>
                        Flat UI eliminates skeuomorphic textures, bevels, and heavy gradients in favor of crisp 2D geometry, solid accents, and generous whitespace.
                      </Text>
                    </TabPanel>
                    <TabPanel value="tokens">
                      <Text size="sm" color="secondary" style={{ marginTop: 8 }}>
                        Rule #0 ensures components consume only semantic tokens. No raw hex or px values exist in component source code.
                      </Text>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </CardContent>
            </Card>

            {/* 6. Avatar & Badge */}
            <Card variant="bordered" padding="lg">
              <CardHeader>
                <CardTitle>6. Avatar & Badge</CardTitle>
                <CardDescription>Data display tokens, presence indicators, and chips</CardDescription>
              </CardHeader>
              <CardContent>
                <Stack direction="column" gap="md">
                  <Stack direction="row" gap="md" align="center">
                    <Avatar name="Max Miedinger" size="lg" status="online" />
                    <Avatar name="Josef Muller" size="md" status="busy" />
                    <Avatar name="Adrian Frutiger" size="sm" status="away" />
                    <Avatar name="Armin Hofmann" size="xs" status="offline" />
                    <Avatar name="Square Mode" size="md" shape="square" />
                  </Stack>
                  <Stack direction="row" gap="sm" wrap align="center">
                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="success" dot>Active</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="error">Failed</Badge>
                    <Badge variant="default">Default</Badge>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>

            {/* 7. Tooltip Showcase */}
            <Card variant="bordered" padding="lg">
              <CardHeader>
                <CardTitle>7. Tooltip Component</CardTitle>
                <CardDescription>Hover & focus accessible popups with directional placement</CardDescription>
              </CardHeader>
              <CardContent>
                <Stack direction="row" gap="md" wrap align="center">
                  <Tooltip content="Tooltip positioned on top" placement="top">
                    <Button variant="secondary" size="sm">Top Tooltip</Button>
                  </Tooltip>
                  <Tooltip content="Tooltip positioned on bottom" placement="bottom">
                    <Button variant="secondary" size="sm">Bottom Tooltip</Button>
                  </Tooltip>
                  <Tooltip content="Quick helpful tip" placement="right">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
                      <InfoIcon size={16} />
                      <Text size="sm" color="secondary">Hover info icon</Text>
                    </div>
                  </Tooltip>
                </Stack>
              </CardContent>
            </Card>

            {/* 8. List & ListItem */}
            <Card variant="bordered" padding="lg">
              <CardHeader>
                <CardTitle>8. List & ListItem</CardTitle>
                <CardDescription>Interactive structured lists with icon, text, and actions</CardDescription>
              </CardHeader>
              <CardContent>
                <List>
                  <ListItem interactive onClick={() => toast('Clicked Josef Müller-Brockmann', { type: 'info' })}>
                    <ListItemIcon>
                      <UserIcon size={18} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Josef Müller-Brockmann"
                      secondary="Pioneer of the Grid System (1961)"
                    />
                    <ListItemAction>
                      <ExternalLinkIcon size={16} />
                    </ListItemAction>
                  </ListItem>
                  <ListItem interactive onClick={() => toast('Clicked Max Miedinger', { type: 'info' })}>
                    <ListItemIcon>
                      <UserIcon size={18} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Max Miedinger"
                      secondary="Designer of Neue Haas Grotesk (Helvetica)"
                    />
                    <ListItemAction>
                      <MoreVerticalIcon size={16} />
                    </ListItemAction>
                  </ListItem>
                </List>
              </CardContent>
            </Card>

            {/* 9. TextInput Showcase */}
            <Card variant="bordered" padding="lg">
              <CardHeader>
                <CardTitle>9. TextInput Component</CardTitle>
                <CardDescription>useFormField integration with labels, icons, and errors</CardDescription>
              </CardHeader>
              <CardContent>
                <Stack direction="column" gap="md">
                  <TextInput
                    label="Username"
                    placeholder="Enter your username"
                    description="Allowed: alphanumeric, 3-20 characters"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    leftIcon={<SearchIcon size={16} />}
                  />

                  <TextInput
                    label="Email Address"
                    placeholder="sagar@winplaybox.dev"
                    required
                    error={hasInputError ? 'Invalid email format' : undefined}
                    rightIcon={hasInputError ? <AlertCircleIcon size={16} color="var(--color-feedback-error)" /> : undefined}
                  />

                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => setHasInputError(!hasInputError)}
                  >
                    Toggle Error State
                  </Button>
                </Stack>
              </CardContent>
            </Card>

            {/* 10. Dialog & Modal */}
            <Card variant="bordered" padding="lg">
              <CardHeader>
                <CardTitle>10. Dialog Modal Component</CardTitle>
                <CardDescription>Focus trapping, ESC handling, and outside click dismiss</CardDescription>
              </CardHeader>
              <CardContent>
                <Text size="sm" color="secondary">
                  Dialog handles focus retention and Escape key dismissal according to WAI-ARIA Modal Dialog requirements.
                </Text>
              </CardContent>
              <CardFooter>
                <Button variant="primary" onClick={() => setIsDialogOpen(true)}>
                  Trigger Dialog Modal
                </Button>
              </CardFooter>
            </Card>

            {/* 11. Typography Hierarchy */}
            <Card variant="bordered" padding="lg">
              <CardHeader>
                <CardTitle>11. Typography Hierarchy</CardTitle>
                <CardDescription>Sans-serif scale: heading, body, label, and caption</CardDescription>
              </CardHeader>
              <CardContent>
                <Stack direction="column" gap="xs">
                  <Text size="xl" weight="bold">Heading XL Token</Text>
                  <Text size="lg" weight="semibold">Heading LG Token</Text>
                  <Text size="md">Body MD: Default reading typography</Text>
                  <Text size="sm" color="secondary">Body SM: Secondary description text</Text>
                  <Text size="xs" color="muted">Caption XS: Metadata and helper notes</Text>
                </Stack>
              </CardContent>
            </Card>

            {/* 12. Layout Stack & Container */}
            <Card variant="bordered" padding="lg">
              <CardHeader>
                <CardTitle>12. Stack & Container Primitives</CardTitle>
                <CardDescription>Responsive flexbox Stack & auto-centering Container</CardDescription>
              </CardHeader>
              <CardContent>
                <Stack
                  direction="row"
                  gap="sm"
                  justify="between"
                  align="center"
                  style={{ backgroundColor: 'var(--color-surface-raised)', padding: 12, borderRadius: 6 }}
                >
                  <Text size="sm" weight="medium">Engine Status</Text>
                  <Badge variant="success" dot>Operational</Badge>
                </Stack>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Tab 2: Token Inspector */}
        {activeTab === 'tokens' && (
          <Card variant="bordered" padding="lg">
            <CardHeader>
              <CardTitle>Active Token Inspector</CardTitle>
              <CardDescription>
                Live values resolved from <strong>{pack}</strong> pack × <strong>{colorScheme}</strong> mode (AMOLED removed)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                {[
                  { name: '--color-surface', desc: 'Primary 2D Surface' },
                  { name: '--color-surface-raised', desc: 'Raised Card Surface' },
                  { name: '--color-action-primary', desc: 'Action Primary Accent' },
                  { name: '--color-border-default', desc: 'Border Default (Crisp 1px)' },
                  { name: '--color-text-primary', desc: 'High-contrast Sans-serif' },
                  { name: '--color-text-muted', desc: 'Secondary Muted Text' },
                  { name: '--color-feedback-error', desc: 'Solid Error State' },
                  { name: '--color-feedback-success', desc: 'Solid Success State' },
                ].map((token) => (
                  <div
                    key={token.name}
                    style={{
                      border: '1px solid var(--color-border-default)',
                      borderRadius: 6,
                      padding: 12,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      backgroundColor: 'var(--color-surface-raised)',
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 4,
                        backgroundColor: `var(${token.name})`,
                        border: '1px solid var(--color-border-default)',
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600 }}>{token.name}</div>
                      <div style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>{token.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Tab 3: Design Principles & Gates */}
        {activeTab === 'architecture' && (
          <Card variant="bordered" padding="lg">
            <CardHeader>
              <CardTitle>Flat / Swiss Design & Automated Build Gates</CardTitle>
              <CardDescription>Strict architectural seams, pure semantic tokens, and automated quality gates</CardDescription>
            </CardHeader>
            <CardContent>
              <Stack direction="column" gap="md">
                <div style={{ padding: 16, borderRadius: 6, backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)' }}>
                  <Text weight="bold" size="md">Swiss Design / Flat UI Principles:</Text>
                  <Text size="sm" color="secondary" style={{ marginTop: 4 }}>
                    1. <strong>Simplicity & Minimalism:</strong> Eliminates unnecessary skeuomorphic textures, faux-3D gradients, and heavy drop shadows.<br />
                    2. <strong>Clean Sans-serif Typography:</strong> Clear visual hierarchy established through weight, size, and high-contrast color.<br />
                    3. <strong>Solid, Vibrant Accents:</strong> Crisp solid colors that communicate purpose and state.<br />
                    4. <strong>Ample Whitespace & Grids:</strong> Structured layout, generous padding, and breathable component spacing.
                  </Text>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                  <div style={{ padding: 16, borderRadius: 6, border: '1px solid var(--color-border-default)' }}>
                    <Text weight="semibold">Gate 1: Token Contract</Text>
                    <Text size="xs" color="muted" style={{ marginTop: 4 }}>
                      Asserts 100% 1:1 match across semantic schema, minimal pack, and light/dark modes (AMOLED eradicated).
                    </Text>
                    <div style={{ marginTop: 8, color: 'var(--color-feedback-success)', fontSize: 12, fontWeight: 600 }}>
                      ✅ 100% Contract Validated (61 tokens)
                    </div>
                  </div>

                  <div style={{ padding: 16, borderRadius: 6, border: '1px solid var(--color-border-default)' }}>
                    <Text weight="semibold">Gate 2: Rule #0 Linter</Text>
                    <Text size="xs" color="muted" style={{ marginTop: 4 }}>
                      Blocks raw hex/px values inside component code; all components strictly read semantic tokens.
                    </Text>
                    <div style={{ marginTop: 8, color: 'var(--color-feedback-success)', fontSize: 12, fontWeight: 600 }}>
                      ✅ 0 Hardcoded Violations
                    </div>
                  </div>

                  <div style={{ padding: 16, borderRadius: 6, border: '1px solid var(--color-border-default)' }}>
                    <Text weight="semibold">Gate 3: WCAG 2.1 AA a11y</Text>
                    <Text size="xs" color="muted" style={{ marginTop: 4 }}>
                      Automated axe-core compliance across all 16 interactive components.
                    </Text>
                    <div style={{ marginTop: 8, color: 'var(--color-feedback-success)', fontSize: 12, fontWeight: 600 }}>
                      ✅ 0 Accessibility Violations
                    </div>
                  </div>
                </div>
              </Stack>
            </CardContent>
          </Card>
        )}

        {/* Global Dialog Instance */}
        <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
          <DialogCloseButton onClose={() => setIsDialogOpen(false)} />
          <DialogHeader>
            <DialogTitle>Swiss Flat Style Confirmation</DialogTitle>
            <DialogDescription>
              Apply this configuration across both Web and React Native targets?
            </DialogDescription>
          </DialogHeader>
          <DialogBody>
            This action validates dynamic token resolution in real time without AMOLED or non-semantic dependencies.
          </DialogBody>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                setIsDialogOpen(false);
                toast('Configuration deployed successfully!', { type: 'success' });
              }}
            >
              Confirm Deploy
            </Button>
          </DialogFooter>
        </Dialog>
      </Container>
    </div>
  );
};
