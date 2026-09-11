import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const iconsRoot = path.resolve(__dirname, '..');

const manifestPath = path.join(iconsRoot, 'src', 'manifest.json');
const registryPath = path.join(iconsRoot, 'src', 'registry.ts');

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

const nameToCategory = {};
const socialIcons = [];
const coreIcons = [];

manifest.forEach((item) => {
  if (item.style === 'filled') {
    const base = item.componentName.replace(/^Filled/, '').replace(/Icon$/, '');
    nameToCategory[base] = item.category;
  } else if (item.style === 'brand' || item.style === 'monochrome' || item.style === 'social') {
    socialIcons.push(item.componentName);
    if (item.alias) socialIcons.push(item.alias);
  } else if (item.style === 'core') {
    coreIcons.push(item.componentName);
  }
});

const registryContent = `// Auto-generated compact registry for @spectra/icons dynamic/lazy loading
// Enables instant category resolution without loading the full 4.7MB manifest

export const nameToCategory: Record<string, string> = ${JSON.stringify(nameToCategory)};

export const socialIconNames = new Set<string>(${JSON.stringify(socialIcons)});

export const coreIconNames = new Set<string>(${JSON.stringify(coreIcons)});

export const curatedIcons = new Set<string>([
  'CheckIcon', 'CloseIcon', 'ChevronDownIcon', 'ChevronUpIcon', 'ChevronLeftIcon', 'ChevronRightIcon',
  'MinusIcon', 'PlusIcon', 'SearchIcon', 'SpinnerIcon', 'AlertCircleIcon', 'InfoIcon', 'UserIcon',
  'SunIcon', 'MoonIcon', 'SparklesIcon', 'MoreHorizontalIcon', 'MoreVerticalIcon', 'CopyIcon', 'ExternalLinkIcon'
]);

export interface ResolvedIconMeta {
  style: 'curated' | 'social' | 'core' | 'filled' | 'outlined' | 'rounded' | 'sharp' | 'twotone' | 'unknown';
  category?: string;
  componentName: string;
}

export function parseIconName(rawName: string): ResolvedIconMeta {
  let name = rawName.trim();

  // If kebab-case id like "filled-action-account-circle"
  if (name.includes('-')) {
    const parts = name.split('-');
    const style = parts[0];
    const category = parts[1];
    const baseWords = parts.slice(2).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
    const stylePrefix = style.charAt(0).toUpperCase() + style.slice(1);
    const componentName = \`\${stylePrefix}\${baseWords}Icon\`;
    return {
      style: (['filled', 'outlined', 'rounded', 'sharp', 'twotone'].includes(style) ? style : 'unknown') as any,
      category,
      componentName
    };
  }

  // Curated icons
  if (curatedIcons.has(name)) {
    return { style: 'curated', componentName: name };
  }

  // Social icons
  if (socialIconNames.has(name)) {
    return { style: 'social', componentName: name };
  }

  // Check prefixes
  if (name.startsWith('Filled') && name.endsWith('Icon')) {
    const base = name.slice(6, -4);
    const category = nameToCategory[base];
    return { style: 'filled', category, componentName: name };
  }
  if (name.startsWith('Outlined') && name.endsWith('Icon')) {
    const base = name.slice(8, -4);
    const category = nameToCategory[base];
    return { style: 'outlined', category, componentName: name };
  }
  if (name.startsWith('Rounded') && name.endsWith('Icon')) {
    const base = name.slice(7, -4);
    const category = nameToCategory[base];
    return { style: 'rounded', category, componentName: name };
  }
  if (name.startsWith('Sharp') && name.endsWith('Icon')) {
    const base = name.slice(5, -4);
    const category = nameToCategory[base];
    return { style: 'sharp', category, componentName: name };
  }
  if (name.startsWith('TwoTone') && name.endsWith('Icon')) {
    const base = name.slice(7, -4);
    const category = nameToCategory[base];
    return { style: 'twotone', category, componentName: name };
  }

  // Check suffix aliases
  if (name.endsWith('FilledIcon')) {
    const base = name.slice(0, -10);
    const category = nameToCategory[base];
    return { style: 'filled', category, componentName: \`Filled\${base}Icon\` };
  }
  if (name.endsWith('OutlinedIcon')) {
    const base = name.slice(0, -12);
    const category = nameToCategory[base];
    return { style: 'outlined', category, componentName: \`Outlined\${base}Icon\` };
  }
  if (name.endsWith('RoundedIcon')) {
    const base = name.slice(0, -11);
    const category = nameToCategory[base];
    return { style: 'rounded', category, componentName: \`Rounded\${base}Icon\` };
  }
  if (name.endsWith('SharpIcon')) {
    const base = name.slice(0, -9);
    const category = nameToCategory[base];
    return { style: 'sharp', category, componentName: \`Sharp\${base}Icon\` };
  }
  if (name.endsWith('TwoToneIcon')) {
    const base = name.slice(0, -11);
    const category = nameToCategory[base];
    return { style: 'twotone', category, componentName: \`TwoTone\${base}Icon\` };
  }

  // Core icons
  if (coreIconNames.has(name)) {
    return { style: 'core', componentName: name };
  }

  return { style: 'unknown', componentName: name };
}
`;

fs.writeFileSync(registryPath, registryContent, 'utf-8');
console.log(`✓ Registry written to ${registryPath}`);
