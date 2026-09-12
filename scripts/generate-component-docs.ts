import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { COMPONENTS_DATA, ComponentMetadata } from '../apps/sandbox/src/data/componentsData';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const docsDir = path.resolve(rootDir, 'docs', 'components');

if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

function generateMarkdown(meta: ComponentMetadata): string {
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
npm install @spectra/react @spectra/icons
\`\`\`

## Basic Usage

\`\`\`tsx
import React from 'react';
import { ${meta.name} } from '@spectra/react';

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

## Headless Primitive (\`@spectra/primitives\`)

Hook: \`${meta.headlessHook.name}\`
Description: ${meta.headlessHook.description}

\`\`\`tsx
${meta.headlessHook.code}
\`\`\`
`;
}

let generatedCount = 0;
for (const [id, meta] of Object.entries(COMPONENTS_DATA)) {
  const md = generateMarkdown(meta);
  const targetFile = path.join(docsDir, `${id}.md`);
  fs.writeFileSync(targetFile, md, 'utf-8');
  generatedCount++;
}

console.log(`Successfully generated ${generatedCount} component documentation files in docs/components/`);
