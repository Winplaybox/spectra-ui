// CodeSandbox & StackBlitz Integration for Spectra UI
// Spectra UI interactive live sandbox runners

import LZString from 'lz-string';

export const CODESANDBOX_API_KEY = 'csb_v1_1zz-PR_HNYHUQIGEyQtM1JufJc5Uodmy-Q50wOsafbY';

export interface SandboxProjectOptions {
  title: string;
  code: string;
  theme?: 'light' | 'dark';
}

function compress(stringToCompress: string): string {
  return LZString.compressToBase64(stringToCompress)
    .replace(/\+/g, '-') // Convert '+' to '-'
    .replace(/\//g, '_') // Convert '/' to '_'
    .replace(/=+$/, ''); // Remove ending '='
}

export function openInCodeSandbox({ title, code, theme = 'light' }: SandboxProjectOptions) {
  const packageJson = {
    name: `spectra-ui-${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    version: '1.0.0',
    description: `Spectra UI - ${title} Demo`,
    main: 'src/index.tsx',
    dependencies: {
      react: '^18.2.0',
      'react-dom': '^18.2.0',
      '@spectra/react': '^0.1.0',
      '@spectra/tokens': '^0.1.0',
      '@spectra/icons': '^0.1.0',
    },
    scripts: {
      start: 'react-scripts start',
      build: 'react-scripts build',
    },
    browserslist: ['>0.2%', 'not dead', 'not op_mini all'],
  };

  const html = `<!DOCTYPE html>
<html lang="en" data-theme="${theme}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Spectra UI — ${title}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/@spectra/tokens/dist/css/tokens.css" />
    <style>
      body {
        margin: 0;
        padding: 24px;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        background-color: ${theme === 'dark' ? '#18181B' : '#FFFFFF'};
        color: ${theme === 'dark' ? '#FAFAFA' : '#18181B'};
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;

  const indexTsx = `import React from 'react';
import ReactDOM from 'react-dom/client';
import { SpectraProvider } from '@spectra/react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <SpectraProvider defaultColorScheme="${theme}">
      <App />
    </SpectraProvider>
  </React.StrictMode>
);`;

  const files = {
    'package.json': {
      content: JSON.stringify(packageJson, null, 2),
    },
    'public/index.html': {
      content: html,
    },
    'src/index.tsx': {
      content: indexTsx,
    },
    'src/App.tsx': {
      content: code,
    },
  };

  const parameters = compress(JSON.stringify({ files }));

  const form = document.createElement('form');
  form.method = 'POST';
  form.target = '_blank';
  form.action = 'https://codesandbox.io/api/v1/sandboxes/define?module=/src/App.tsx';

  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = 'parameters';
  input.value = parameters;
  form.appendChild(input);

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}

export function openInStackBlitz({ title, code, theme = 'light' }: SandboxProjectOptions) {
  const form = document.createElement('form');
  form.method = 'POST';
  form.target = '_blank';
  form.action = 'https://stackblitz.com/run';

  const addField = (name: string, value: string) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    form.appendChild(input);
  };

  addField('project[title]', `Spectra UI — ${title}`);
  addField('project[description]', `Live interactive demo of ${title} in Spectra UI`);
  addField('project[template]', 'create-react-app');
  addField(
    'project[dependencies]',
    JSON.stringify({
      react: '^18.2.0',
      'react-dom': '^18.2.0',
      '@spectra/react': '^0.1.0',
      '@spectra/tokens': '^0.1.0',
      '@spectra/icons': '^0.1.0',
    })
  );

  addField(
    'project[files][public/index.html]',
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Spectra UI — ${title}</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`
  );

  addField(
    'project[files][src/index.tsx]',
    `import React from 'react';
import ReactDOM from 'react-dom/client';
import { SpectraProvider } from '@spectra/react';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SpectraProvider defaultColorScheme="${theme}">
    <App />
  </SpectraProvider>
);`
  );

  addField('project[files][src/App.tsx]', code);

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}

export function openInNewTab({ title, code, theme = 'light' }: SandboxProjectOptions) {
  const html = `<!DOCTYPE html>
<html lang="en" data-theme="${theme}">
<head>
  <meta charset="utf-8" />
  <title>Spectra UI Preview — ${title}</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 40px;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: ${theme === 'dark' ? '#18181B' : '#FFFFFF'};
      color: ${theme === 'dark' ? '#FAFAFA' : '#18181B'};
    }
  </style>
</head>
<body>
  <h2>${title} Component Preview</h2>
  <p style="color: #71717A;">Isolated standalone preview window</p>
  <pre style="background: ${theme === 'dark' ? '#27272A' : '#F4F4F5'}; padding: 20px; border-radius: 8px; overflow: auto;"><code>${escapeHtml(code)}</code></pre>
</body>
</html>`;

  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function openInExpoSnack({ title, code }: { title: string; code: string }) {
  const snackUrl = `https://snack.expo.dev?name=${encodeURIComponent(`Spectra UI - ${title}`)}&code=${encodeURIComponent(code)}&platform=ios`;
  window.open(snackUrl, '_blank');
}

export function openInReactNativeSandbox({ title, code, theme = 'light' }: SandboxProjectOptions) {
  const packageJson = {
    name: `spectra-native-${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    version: '1.0.0',
    description: `Spectra UI Native - ${title} Demo`,
    main: 'index.js',
    dependencies: {
      react: '^18.2.0',
      'react-native': '0.73.4',
      'react-native-web': '^0.19.10',
      'react-dom': '^18.2.0',
      '@spectra/react-native': '^0.1.0',
      '@spectra/tokens': '^0.1.0',
      '@spectra/icons': '^0.1.0',
      '@spectra/primitives': '^0.1.0',
    },
    scripts: {
      start: 'expo start',
    },
  };

  const appJs = `import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import AppDemo from './App';

export default function Root() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="${theme === 'dark' ? 'light-content' : 'dark-content'}" />
      <View style={styles.inner}>
        <AppDemo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '${theme === 'dark' ? '#18181B' : '#FFFFFF'}',
  },
  inner: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});`;

  const files = {
    'package.json': {
      content: JSON.stringify(packageJson, null, 2),
    },
    'App.js': {
      content: appJs,
    },
    'App.tsx': {
      content: code,
    },
  };

  const parameters = compress(JSON.stringify({ files }));

  const form = document.createElement('form');
  form.method = 'POST';
  form.target = '_blank';
  form.action = 'https://codesandbox.io/api/v1/sandboxes/define?module=/App.tsx';

  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = 'parameters';
  input.value = parameters;
  form.appendChild(input);

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}

/**
 * Strips TypeScript types, interfaces, annotations, and generics to produce clean JavaScript (JSX)
 */
export function toJavaScript(tsCode: string): string {
  return tsCode
    // Remove type-only imports (single or multiline, with or without semicolon):
    .replace(/(?:^|\n)\s*import\s+type\s+[\s\S]*?(?:;\n?|\n|$)/g, '\n')
    // Remove inline 'type' in named imports: import { type Foo, Bar } from '...'
    .replace(/,\s*type\s+[A-Za-z0-9_]+/g, '')
    .replace(/type\s+[A-Za-z0-9_]+,\s*/g, '')
    // Remove type aliases: type X = ...;
    .replace(/(?:export\s+)?type\s+[A-Za-z0-9_<>|\s]+=\s*[^;]+;\n*/g, '')
    // Remove interface declarations (single-line or multi-line)
    .replace(/(?:export\s+)?interface\s+[A-Za-z0-9_<>\s]+(?:\s+extends\s+[^{]+)?\s*\{[\s\S]*?\}\n*/g, '')
    // Remove function return type annotations: (): JSX.Element => or ): void { or (): void =>
    .replace(/\):\s*(?:JSX\.Element|React\.ReactNode|React\.ReactElement|[A-Za-z0-9_<>|]+)\s*([=>{])/g, ')$1')
    // Remove React.FC or Component typing: const Comp: React.FC<Props> = ...
    .replace(/:\s*React\.FC(?:<[^>]+>)?/g, '')
    // Remove parameter type annotations e.g. (variant: ButtonVariant) or (e: React.MouseEvent<...>) or (val: string)
    .replace(/\(([a-zA-Z0-9_]+):\s*[A-Za-z0-9_$.<>|]+(?:\s*<[^>]+>)?(?:\[\])?\)/g, '($1)')
    .replace(/([a-zA-Z0-9_]+):\s*(?:string|number|boolean|any|void|unknown|[A-Z][A-Za-z0-9_<>|]*)(?:\[\])?/g, '$1')
    // Remove variable type declarations: const x: string = ... or const REGIONS: SelectOption[] = ...
    .replace(/(?:const|let|var)\s+([a-zA-Z0-9_]+):\s*[A-Za-z0-9_<>|]*(?:\[\])?\s*=/g, 'const $1 =')
    // Remove generic parameters on hooks: useState<string>(...) or useRef<HTMLDivElement>(...)
    .replace(/useState<[^>]+>\(/g, 'useState(')
    .replace(/useRef<[^>]+>\(/g, 'useRef(')
    .replace(/useCallback<[^>]+>\(/g, 'useCallback(')
    .replace(/useMemo<[^>]+>\(/g, 'useMemo(')
    // Remove 'as Type' assertions
    .replace(/\s+as\s+[a-zA-Z0-9_<>|]+/g, '');
}


