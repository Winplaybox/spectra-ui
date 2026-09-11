import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsPackageRoot = path.resolve(__dirname, '../');
const workspaceRoot = path.resolve(__dirname, '../../../');
const generatedDir = path.join(iconsPackageRoot, 'src/generated');
const manifestPath = path.join(iconsPackageRoot, 'src/manifest.json');
const generatedIndexPath = path.join(generatedDir, 'index.ts');

console.log('🚀 Starting Spectra UI Multi-Shade Icon System Compiler...');

// 1. Move/Organize existing Core icons into src/generated/core/
const coreDir = path.join(generatedDir, 'core');
fs.mkdirSync(coreDir, { recursive: true });

// Check existing files in generatedDir (excluding subdirectories)
const existingGeneratedFiles = fs.readdirSync(generatedDir).filter(f => f.endsWith('.tsx') && !f.includes('/'));
if (existingGeneratedFiles.length > 0) {
  console.log(`  Moving ${existingGeneratedFiles.length} existing Core icons to src/generated/core/...`);
  const coreExports = [];
  for (const f of existingGeneratedFiles) {
    const oldPath = path.join(generatedDir, f);
    const newPath = path.join(coreDir, f);
    fs.renameSync(oldPath, newPath);
    const compName = f.replace(/\.tsx$/, '');
    coreExports.push(`export { ${compName} } from './${compName}';`);
  }
  fs.writeFileSync(path.join(coreDir, 'index.ts'), coreExports.join('\n') + '\n', 'utf-8');
}

// 2. Build Social Suite from Social Icons.svg
console.log('🌐 Building Social & Brand Suite...');
const socialDir = path.join(generatedDir, 'social');
fs.mkdirSync(socialDir, { recursive: true });

const socialSvgPath = path.join(workspaceRoot, 'Social Icons.svg');
const socialContent = fs.readFileSync(socialSvgPath, 'utf-8');

const socialBrands = [
  { name: 'Facebook', center: [193, 208], defaultColor: '#0866FF', tags: ['facebook', 'meta', 'social'] },
  { name: 'Tiktok', center: [447, 212], defaultColor: '#000000', tags: ['tiktok', 'bytedance', 'video', 'social'] },
  { name: 'Google', center: [703, 212], defaultColor: '#4285F4', tags: ['google', 'alphabet', 'search'] },
  { name: 'Youtube', center: [831, 212], defaultColor: '#FF0302', tags: ['youtube', 'video', 'streaming', 'google'] },
  { name: 'Twitter', center: [959, 212], defaultColor: '#000000', tags: ['twitter', 'x', 'social'] },
  { name: 'Behance', center: [1087, 212], defaultColor: '#0057FF', tags: ['behance', 'adobe', 'portfolio', 'design'] },
  { name: 'Pinterest', center: [1215, 212], defaultColor: '#E60019', tags: ['pinterest', 'pins', 'social'] },
  { name: 'Threads', center: [1343, 212], defaultColor: '#000000', tags: ['threads', 'meta', 'social'] },
  { name: 'Github', center: [1471, 212], defaultColor: '#24292F', tags: ['github', 'code', 'git', 'developer'] },
  { name: 'Apple', center: [1602, 212], defaultColor: '#000000', tags: ['apple', 'mac', 'ios', 'tech'] },
  { name: 'Whatsapp', center: [1728, 212], defaultColor: '#25D366', tags: ['whatsapp', 'messaging', 'chat', 'meta'] },
  { name: 'Figma', center: [199, 388], defaultColor: '#F24E1E', tags: ['figma', 'design', 'vector', 'ui'] },
  { name: 'Reddit', center: [449, 387], defaultColor: '#FF4500', tags: ['reddit', 'forum', 'community', 'snoo'] },
  { name: 'Discord', center: [575, 388], defaultColor: '#5865F2', tags: ['discord', 'chat', 'gaming', 'voice'] },
  { name: 'Instagram', center: [959, 388], defaultColor: '#E1306C', tags: ['instagram', 'photos', 'meta', 'social'] },
  { name: 'Telegram', center: [1087, 390], defaultColor: '#229ED9', tags: ['telegram', 'messaging', 'chat'] },
  { name: 'Linkedin', center: [1215, 388], defaultColor: '#0A66C2', tags: ['linkedin', 'career', 'professional', 'network'] },
  { name: 'Spotify', center: [1471, 388], defaultColor: '#1ED760', tags: ['spotify', 'music', 'audio', 'streaming'] },
  { name: 'Twitch', center: [1605, 379], defaultColor: '#9146FF', tags: ['twitch', 'streaming', 'gaming', 'live'] },
  { name: 'Messenger', center: [1728, 388], defaultColor: '#0084FF', tags: ['messenger', 'facebook', 'chat', 'meta'] }
];

// Extract all path elements from Social Icons.svg
const pRegex = /<path\s+([^>]+)>/g;
let m;
const socialRawPaths = [];
while ((m = pRegex.exec(socialContent)) !== null) {
  const attrs = m[1];
  const d = attrs.match(/d="([^"]+)"/)?.[1];
  const fill = attrs.match(/fill="([^"]+)"/)?.[1] || '';
  if (!d) continue;
  const nums = d.match(/[-+]?[0-9]*\.?[0-9]+/g)?.map(Number) || [];
  if (nums.length < 4) continue;
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (let i = 0; i < nums.length - 1; i += 2) {
    const x = nums[i], y = nums[i+1];
    if (x >= 0 && x <= 2000 && y >= 0 && y <= 1200) {
      minX = Math.min(minX, x); maxX = Math.max(maxX, x);
      minY = Math.min(minY, y); maxY = Math.max(maxY, y);
    }
  }
  if (maxX - minX < 120 && maxY - minY < 120 && maxX > minX) {
    socialRawPaths.push({ minX, maxX, minY, maxY, cx: (minX+maxX)/2, cy: (minY+maxY)/2, fill, attrs, d });
  }
}

const socialManifest = [];
const socialCodeLines = [
  "import React from 'react';",
  "import { IconProps } from '../../types';",
  ""
];

for (const b of socialBrands) {
  const [bcx, bcy] = b.center;
  const matched = socialRawPaths.filter(p => Math.abs(p.cx - bcx) < 32 && Math.abs(p.cy - bcy) < 32);
  if (matched.length === 0) continue;

  const brandCompName = `${b.name}Icon`;
  const monoCompName = `${b.name}MonoIcon`;

  // Clean attributes (strip trailing slashes or closing brackets)
  const cleanMatched = matched.map(p => {
    return {
      ...p,
      attrs: p.attrs.replace(/[\/\s>]+$/, '').trim()
    };
  });

  // Brand paths with original brand fills or fallback
  const brandInner = cleanMatched.map(p => {
    let sanitizedAttrs = p.attrs
      .replace(/fill-rule=/gi, 'fillRule=')
      .replace(/clip-rule=/gi, 'clipRule=');
    return `    <path ${sanitizedAttrs} />`;
  }).join('\n');

  // Monochrome paths with color || 'currentColor' (Rule #0 compliant)
  const monoInner = cleanMatched.map(p => {
    let sanitizedAttrs = p.attrs
      .replace(/fill="[^"]+"/gi, `fill={color || 'currentColor'}`)
      .replace(/fill-rule=/gi, 'fillRule=')
      .replace(/clip-rule=/gi, 'clipRule=');
    if (!sanitizedAttrs.includes('fill=')) {
      sanitizedAttrs += ` fill={color || 'currentColor'}`;
    }
    return `    <path ${sanitizedAttrs} />`;
  }).join('\n');

  socialCodeLines.push(`export const ${brandCompName}: React.FC<IconProps> = ({ size = 24, className, ...props }) => (`);
  socialCodeLines.push(`  <svg width={size} height={size} viewBox="${(bcx - 24).toFixed(1)} ${(bcy - 24).toFixed(1)} 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>`);
  socialCodeLines.push(brandInner);
  socialCodeLines.push(`  </svg>`);
  socialCodeLines.push(`);`);
  socialCodeLines.push(`${brandCompName}.displayName = '${brandCompName}';\n`);

  socialCodeLines.push(`export const ${monoCompName}: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (`);
  socialCodeLines.push(`  <svg width={size} height={size} viewBox="${(bcx - 24).toFixed(1)} ${(bcy - 24).toFixed(1)} 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>`);
  socialCodeLines.push(monoInner);
  socialCodeLines.push(`  </svg>`);
  socialCodeLines.push(`);`);
  socialCodeLines.push(`${monoCompName}.displayName = '${monoCompName}';\n`);

  socialManifest.push({
    id: `social-${b.name.toLowerCase()}`,
    name: b.name,
    componentName: brandCompName,
    category: 'Social',
    style: 'brand',
    tags: b.tags
  });
  socialManifest.push({
    id: `social-${b.name.toLowerCase()}-mono`,
    name: `${b.name} (Monochrome)`,
    componentName: monoCompName,
    category: 'Social',
    style: 'monochrome',
    tags: [...b.tags, 'monochrome', 'minimal']
  });
}

// Only write social/index.tsx if it doesn't already exist (to protect canonical handcrafted 24x24 SVG icons)
const socialIndexPath = path.join(socialDir, 'index.tsx');
if (!fs.existsSync(socialIndexPath)) {
  fs.writeFileSync(socialIndexPath, socialCodeLines.join('\n'), 'utf-8');
}
console.log(`  ✓ Successfully registered Social Suite (${socialManifest.length} components)!`);

// 3. Build Multi-Shade Suite from @material-icons/svg
console.log('\n🎨 Building Multi-Shade Spectra Icon Suites...');
const matBase = path.resolve(iconsPackageRoot, 'node_modules/@material-icons/svg');
const matData = JSON.parse(fs.readFileSync(path.join(matBase, 'data.json'), 'utf-8'));
const matSvgDir = path.join(matBase, 'svg');

const shades = [
  { key: 'filled', prefix: 'Filled', suffix: 'Filled', file: 'baseline.svg' },
  { key: 'outlined', prefix: 'Outlined', suffix: 'Outlined', file: 'outline.svg' },
  { key: 'rounded', prefix: 'Rounded', suffix: 'Rounded', file: 'round.svg' },
  { key: 'sharp', prefix: 'Sharp', suffix: 'Sharp', file: 'sharp.svg' },
  { key: 'twotone', prefix: 'TwoTone', suffix: 'TwoTone', file: 'twotone.svg' }
];

function toPascal(str) {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
    .replace(/^[0-9]/, num => `Icon${num}`)
    .replace(/^([a-z])/, chr => chr.toUpperCase());
}

// Group icons by category
const iconsByCategory = {};
for (const icon of matData.icons) {
  const cat = icon.categories[0] || 'general';
  if (!iconsByCategory[cat]) iconsByCategory[cat] = [];
  iconsByCategory[cat].push(icon);
}

const shadeManifests = [];

for (const shade of shades) {
  const shadeDir = path.join(generatedDir, shade.key);
  fs.mkdirSync(shadeDir, { recursive: true });
  console.log(`  Processing shade "${shade.prefix}"...`);

  const categoryFileExports = [];

  for (const [cat, icons] of Object.entries(iconsByCategory)) {
    const catCompLines = [
      "import React from 'react';",
      "import { IconProps } from '../../types';",
      ""
    ];

    let catIconCount = 0;

    for (const icon of icons) {
      const iconPath = path.join(matSvgDir, icon.name, shade.file);
      if (!fs.existsSync(iconPath)) continue;

      const rawSvg = fs.readFileSync(iconPath, 'utf-8');
      const innerMatch = rawSvg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
      if (!innerMatch) continue;

      let inner = innerMatch[1].trim();

      // Rule #0 Sanitation:
      // Convert fill/stroke to color || 'currentColor'
      if (shade.key === 'twotone') {
        inner = inner.replace(/opacity="(?:\.3|0\.3)"/gi, `fillOpacity={fillOpacity ?? 0.3}`);
        inner = inner.replace(/<path\s+/gi, `<path fill={color || 'currentColor'} `);
      } else {
        inner = inner.replace(/<path\s+/gi, `<path fill={color || 'currentColor'} `);
      }

      // React JSX attributes
      inner = inner.replace(/fill-rule=/gi, 'fillRule=');
      inner = inner.replace(/clip-rule=/gi, 'clipRule=');

      const basePascal = toPascal(icon.name);
      const mainCompName = `${shade.prefix}${basePascal}Icon`;
      const aliasCompName = `${basePascal}${shade.suffix}Icon`;

      catCompLines.push(`export const ${mainCompName}: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (`);
      catCompLines.push(`  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>`);
      catCompLines.push(`    ${inner}`);
      catCompLines.push(`  </svg>`);
      catCompLines.push(`);`);
      catCompLines.push(`${mainCompName}.displayName = '${mainCompName}';`);
      catCompLines.push(`export const ${aliasCompName} = ${mainCompName};\n`);

      shadeManifests.push({
        id: `${shade.key}-${icon.name}`,
        name: `${basePascal} (${shade.prefix})`,
        componentName: mainCompName,
        alias: aliasCompName,
        category: cat.charAt(0).toUpperCase() + cat.slice(1),
        style: shade.key,
        tags: icon.tags || []
      });

      catIconCount++;
    }

    if (catIconCount > 0) {
      const fileName = `${cat}.tsx`;
      fs.writeFileSync(path.join(shadeDir, fileName), catCompLines.join('\n'), 'utf-8');
      categoryFileExports.push(`export * from './${cat}';`);
    }
  }

  // Write shade index.ts
  fs.writeFileSync(path.join(shadeDir, 'index.ts'), categoryFileExports.join('\n') + '\n', 'utf-8');
  console.log(`    ✓ Wrote ${categoryFileExports.length} category modules for shade "${shade.prefix}".`);
}

// 4. Build master index and manifest
console.log('\n📦 Step 4: Generating Master Manifest and Barrels...');

// Read Core manifest if exists
let coreManifest = [];
try {
  const existingManifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  coreManifest = existingManifest.filter(i => !i.id.startsWith('social-') && !shades.some(s => i.id.startsWith(`${s.key}-`)));
  coreManifest.forEach(i => { if (!i.style) i.style = 'core'; });
} catch (e) {
  console.log('No existing manifest found, starting fresh');
}

const fullManifest = [
  ...coreManifest,
  ...socialManifest,
  ...shadeManifests
];

fs.writeFileSync(manifestPath, JSON.stringify(fullManifest, null, 2), 'utf-8');
console.log(`  ✓ Manifest saved: ${fullManifest.length} total icons catalogued!`);

// Write src/generated/index.ts
const masterGeneratedIndex = `export * from './core/index';
export * from './social/index';
export * from './filled/index';
export * from './outlined/index';
export * from './rounded/index';
export * from './sharp/index';
export * from './twotone/index';
`;
fs.writeFileSync(generatedIndexPath, masterGeneratedIndex, 'utf-8');
console.log(`  ✓ Master barrel index written: ${generatedIndexPath}`);

console.log('\n🎉 ALL DONE! Multi-Shade Icon Suite is ready.');
