import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workspaceRoot = path.resolve(__dirname, '../../../');
const iconsPackageRoot = path.resolve(__dirname, '../');
const svgExtractDir = path.join(iconsPackageRoot, 'svg');
const generatedDir = path.join(iconsPackageRoot, 'src/generated');
const manifestPath = path.join(iconsPackageRoot, 'src/manifest.json');
const generatedIndexPath = path.join(generatedDir, 'index.ts');

fs.mkdirSync(svgExtractDir, { recursive: true });
fs.mkdirSync(generatedDir, { recursive: true });

console.log('📦 Step 1: Extracting SVG files from DesignCode UI zip archives...');

const zipFiles = [
  'DesignCode UI - Figma Design UI Kit & Design System (Community).zip',
  'DesignCode UI - Figma Design UI Kit & Design System (Community) (1).zip',
  'DesignCode UI - Figma Design UI Kit & Design System (Community) (2).zip',
  'DesignCode UI - Figma Design UI Kit & Design System (Community) (3).zip',
  'DesignCode UI - Figma Design UI Kit & Design System (Community) (4).zip',
  'DesignCode UI - Figma Design UI Kit & Design System (Community) (5).zip',
  'DesignCode UI - Figma Design UI Kit & Design System (Community) (6).zip',
  'DesignCode UI - Figma Design UI Kit & Design System (Community) (7).zip',
  'DesignCode UI - Figma Design UI Kit & Design System (Community) (8).zip',
];

for (const zipName of zipFiles) {
  const zipPath = path.join(workspaceRoot, zipName);
  if (fs.existsSync(zipPath)) {
    try {
      execSync(`tar -xf "${zipPath}" -C "${svgExtractDir}"`, { stdio: 'ignore' });
      console.log(`  ✓ Extracted ${zipName}`);
    } catch (err) {
      console.error(`  ✗ Failed to extract ${zipName}:`, err.message);
    }
  } else {
    console.warn(`  ⚠️ Archive not found: ${zipPath}`);
  }
}

function toPascalCase(str) {
  return str
    .replace(/\.svg$/i, '')
    .trim()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
    .replace(/^[0-9]/, num => `Icon${num}`)
    .replace(/^([a-z])/, chr => chr.toUpperCase());
}

function deriveCategory(name) {
  const cleanName = name.replace(/\.svg$/i, '').trim();
  const firstWord = cleanName.split(/[\s-_]+/)[0];

  const categoryMap = {
    Action: 'Action',
    Activity: 'Interface',
    Airplay: 'Media',
    Album: 'Media',
    Archive: 'Document',
    Arrow: 'Arrow',
    Attachment: 'Document',
    Bank: 'Finance',
    Battery: 'Device',
    Bluetooth: 'Device',
    Bookmark: 'Interface',
    Building: 'Places',
    Calendar: 'System',
    Call: 'Communication',
    Camera: 'Media',
    Card: 'Finance',
    Chart: 'Analytics',
    Chat: 'Communication',
    Check: 'Feedback',
    Circle: 'Shape',
    Clock: 'System',
    Clipboard: 'Document',
    Cloud: 'System',
    Computer: 'Device',
    Currency: 'Finance',
    Data: 'System',
    Device: 'Device',
    Disk: 'System',
    Edit: 'Action',
    Email: 'Communication',
    File: 'Document',
    Filter: 'Interface',
    Folder: 'Document',
    Heart: 'Interface',
    Home: 'Interface',
    Image: 'Media',
    Info: 'Feedback',
    Link: 'Interface',
    Location: 'Places',
    Lock: 'Security',
    Mail: 'Communication',
    Map: 'Places',
    Media: 'Media',
    Menu: 'Interface',
    Message: 'Communication',
    Microphone: 'Media',
    Minus: 'Action',
    Mobile: 'Device',
    Money: 'Finance',
    Moon: 'Weather',
    Music: 'Media',
    Navigation: 'Arrow',
    Notification: 'Feedback',
    Paper: 'Document',
    Phone: 'Communication',
    Play: 'Media',
    Plus: 'Action',
    Power: 'Device',
    Printer: 'Device',
    Radio: 'Media',
    Search: 'Interface',
    Security: 'Security',
    Send: 'Communication',
    Setting: 'System',
    Settings: 'System',
    Share: 'Interface',
    Shield: 'Security',
    Shopping: 'Commerce',
    Sound: 'Media',
    Star: 'Interface',
    Sun: 'Weather',
    Time: 'System',
    Trash: 'Action',
    Trend: 'Analytics',
    User: 'User',
    Users: 'User',
    Video: 'Media',
    Volume: 'Media',
    Wallet: 'Finance',
    Watch: 'Device',
    Wifi: 'Device',
  };

  return categoryMap[firstWord] || firstWord || 'General';
}

function deriveTags(name) {
  const cleanName = name.replace(/\.svg$/i, '').toLowerCase();
  const words = cleanName.split(/[\s-_]+/).filter(w => w.length > 1 && !['and', 'the', 'for'].includes(w));
  return Array.from(new Set(words));
}

function sanitizeSvg(svgContent) {
  const match = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  if (!match) return null;

  let inner = match[1].trim();

  // Strip standalone background rects (24x24 white / transparent rects)
  inner = inner.replace(/<rect\s+width="24"\s+height="24"[^>]*fill="(?:white|none)"[^>]*\/>/gi, '');

  // Normalize stroke and fill colors to currentColor
  inner = inner.replace(/stroke="(?:black|#000000|#000|#222222|#33363F|#111111)"/gi, `stroke={color || 'currentColor'}`);
  inner = inner.replace(/fill="(?:black|#000000|#000|#222222|#33363F|#111111)"/gi, `fill={color || 'currentColor'}`);

  // Dynamic stroke-width
  inner = inner.replace(/stroke-width="([^"]+)"/gi, (_, w) => `strokeWidth={strokeWidth ?? ${w}}`);

  // React JSX attribute mappings
  inner = inner.replace(/stroke-linecap=/gi, 'strokeLinecap=');
  inner = inner.replace(/stroke-linejoin=/gi, 'strokeLinejoin=');
  inner = inner.replace(/stroke-miterlimit=/gi, 'strokeMiterlimit=');
  inner = inner.replace(/stroke-dasharray=/gi, 'strokeDasharray=');
  inner = inner.replace(/stroke-dashoffset=/gi, 'strokeDashoffset=');
  inner = inner.replace(/fill-rule=/gi, 'fillRule=');
  inner = inner.replace(/clip-rule=/gi, 'clipRule=');
  inner = inner.replace(/clip-path=/gi, 'clipPath=');
  inner = inner.replace(/fill-opacity=/gi, 'fillOpacity=');
  inner = inner.replace(/stroke-opacity=/gi, 'strokeOpacity=');

  return inner;
}

console.log('\n⚙️ Step 2: Processing and compiling SVG icons...');

const allFiles = fs.readdirSync(svgExtractDir).filter(f => f.endsWith('.svg'));
console.log(`  Found ${allFiles.length} extracted SVG files.`);

const manifest = [];
const exportLines = [];
const seenComponentNames = new Set();

let compiledCount = 0;
let skippedCount = 0;

for (const file of allFiles) {
  const filePath = path.join(svgExtractDir, file);
  const rawContent = fs.readFileSync(filePath, 'utf-8');

  // Skip raster or invalid SVGs
  if (rawContent.includes('<image') || !rawContent.includes('viewBox="0 0 24 24"')) {
    skippedCount++;
    continue;
  }

  const baseName = file.replace(/\.svg$/i, '');
  let componentName = `${toPascalCase(baseName)}Icon`;

  // Avoid duplicate component names
  if (seenComponentNames.has(componentName)) {
    let counter = 2;
    while (seenComponentNames.has(`${componentName}${counter}`)) {
      counter++;
    }
    componentName = `${componentName}${counter}`;
  }
  seenComponentNames.add(componentName);

  const innerSvg = sanitizeSvg(rawContent);
  if (!innerSvg) {
    skippedCount++;
    continue;
  }

  const category = deriveCategory(file);
  const tags = deriveTags(file);

  const componentCode = `import React from 'react';
import { IconProps } from '../types';

export const ${componentName}: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 1.5,
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    ${innerSvg}
  </svg>
);

${componentName}.displayName = '${componentName}';
`;

  fs.writeFileSync(path.join(generatedDir, `${componentName}.tsx`), componentCode, 'utf-8');

  manifest.push({
    id: baseName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name: baseName,
    componentName,
    category,
    tags,
  });

  exportLines.push(`export { ${componentName} } from './${componentName}';`);
  compiledCount++;
}

// Write generated/index.ts
fs.writeFileSync(generatedIndexPath, exportLines.join('\n') + '\n', 'utf-8');

// Write manifest.json
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');

console.log(`\n🎉 Compilation Finished!`);
console.log(`  ✓ Successfully compiled: ${compiledCount} unique vector icons`);
console.log(`  ✓ Skipped invalid/raster: ${skippedCount}`);
console.log(`  ✓ Written manifest: ${manifestPath}`);
console.log(`  ✓ Written barrel index: ${generatedIndexPath}`);
