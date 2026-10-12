import React, { useState, useEffect } from 'react';
import {
  TextInput,
  Button,
  Spinner,
} from '@winplaybox/react';
import {
  SearchIcon,
  CheckIcon,
  CloseIcon,
  EyeIcon,
  EyeOffIcon,
  ExternalLinkIcon,
} from '@winplaybox/icons';
import { ComponentDemoCard } from './ComponentDemoCard';
import { usePlatform } from '../../context/PlatformContext';
import { getRecipes } from '@winplaybox/platform-capabilities';

/**
 * TextInputRecipeGallery
 *
 * Implements the production recipe gallery for Spectra TextInput.
 * Every recipe is strictly filtered by the active platform capability registry.
 * Recipes supported on the active platform render interactive previews and copyable code.
 */
export const TextInputRecipeGallery: React.FC = () => {
  const { currentPlatform } = usePlatform();

  // Resolved list of recipes supported on current platform
  const supportedRecipes = React.useMemo(() => {
    return getRecipes('text-input', currentPlatform);
  }, [currentPlatform]);

  const hasRecipe = (id: string) => supportedRecipes.some((r) => r.id === id);

  // Interactive state stores for recipes
  const [basicVal, setBasicVal] = useState('Sagar Suthar');
  const [outlinedVal, setOutlinedVal] = useState('Outlined Input Field');
  const [filledVal, setFilledVal] = useState('Filled Surface Field');
  const [standardVal, setStandardVal] = useState('Underline Standard');
  const [emailVal, setEmailVal] = useState('sagar@example.com');
  const [errorVal, setErrorVal] = useState('invalid-email-address');
  const [searchVal, setSearchVal] = useState('iphone 16 pro');
  const [passwordVal, setPasswordVal] = useState('SpectraUI#2026!');
  const [showPassword, setShowPassword] = useState(false);
  const [clearVal, setClearVal] = useState('Search stories...');
  const [counterVal, setCounterVal] = useState('Spectra UI delivers platform-first design system architecture across 5 targets.');
  const [multilineVal, setMultilineVal] = useState('Hello Team,\n\nPlease review the cross-platform capability matrix updates.\n\nBest,\nSagar');
  const [autosizeVal, setAutosizeVal] = useState('First line of content\nSecond line dynamically expanding height\nThird line without scrolling');
  const [numberVal, setNumberVal] = useState('25');
  const [amountVal, setAmountVal] = useState('1000');
  const [domainVal, setDomainVal] = useState('winplaybox.in');
  const [selectVal, setSelectVal] = useState('in');
  const [loadingQuery, setLoadingQuery] = useState('Searching database index...');
  const [asyncUsername, setAsyncUsername] = useState('sagar_suthar');
  const [isCheckingAsync, setIsCheckingAsync] = useState(false);
  const [asyncAvailable, setAsyncAvailable] = useState<boolean | null>(true);

  // Form Integration state
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPass, setFormPass] = useState('');
  const [formConfirm, setFormConfirm] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Async username validation simulator
  useEffect(() => {
    if (!asyncUsername) {
      setAsyncAvailable(null);
      return;
    }
    setIsCheckingAsync(true);
    const timer = setTimeout(() => {
      setIsCheckingAsync(false);
      setAsyncAvailable(asyncUsername !== 'admin' && asyncUsername !== 'root');
    }, 600);
    return () => clearTimeout(timer);
  }, [asyncUsername]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      {/* 01 Basic */}
      {hasRecipe('basic') && (
        <ComponentDemoCard
          id="input-basic"
          title="01 Basic Text Field"
          description="Standard single-line text input for short strings, names, titles, and general input collection."
          compactCode={`<TextInput label="Full Name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <TextInput
                label="Full Name"
                placeholder="Enter your name"
                value={basicVal}
                onChange={(e) => setBasicVal(e.target.value)}
              />
            </div>
          }
          nativePreview={
            <div style={{ width: '100%' }}>
              <TextInput
                label="Full Name"
                placeholder="Enter your name"
                value={basicVal}
                onChange={(e) => setBasicVal(e.target.value)}
              />
            </div>
          }
          webCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react';

export default function BasicInputExample(): JSX.Element {
  const [name, setName] = useState('Sagar Suthar');

  return (
    <TextInput
      label="Full Name"
      placeholder="Enter your name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}`}
          nativeCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react-native';

export default function NativeBasicInputExample(): JSX.Element {
  const [name, setName] = useState('Sagar Suthar');

  return (
    <TextInput
      label="Full Name"
      placeholder="Enter your name"
      value={name}
      onChangeText={setName}
    />
  );
}`}
        />
      )}

      {/* 02 Outlined */}
      {hasRecipe('outlined') && (
        <ComponentDemoCard
          id="input-outlined"
          title="02 Outlined Variant"
          description="Prominent boundary border with neutral surface background, providing clear visual separation on cards and forms."
          compactCode={`<TextInput variant="outlined" label="Account Identifier" value={value} onChange={(e) => setValue(e.target.value)} />`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <TextInput
                variant="outlined"
                label="Account Identifier"
                value={outlinedVal}
                onChange={(e) => setOutlinedVal(e.target.value)}
              />
            </div>
          }
          nativePreview={
            <div style={{ width: '100%' }}>
              <TextInput
                variant="outlined"
                label="Account Identifier"
                value={outlinedVal}
                onChange={(e) => setOutlinedVal(e.target.value)}
              />
            </div>
          }
          webCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react';

export default function OutlinedInputExample(): JSX.Element {
  const [val, setVal] = useState('Outlined Input Field');

  return (
    <TextInput
      variant="outlined"
      label="Account Identifier"
      value={val}
      onChange={(e) => setVal(e.target.value)}
    />
  );
}`}
          nativeCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react-native';

export default function NativeOutlinedExample(): JSX.Element {
  const [val, setVal] = useState('Outlined Input Field');

  return (
    <TextInput
      variant="outlined"
      label="Account Identifier"
      value={val}
      onChangeText={setVal}
    />
  );
}`}
        />
      )}

      {/* 03 Filled */}
      {hasRecipe('filled') && (
        <ComponentDemoCard
          id="input-filled"
          title="03 Filled Variant"
          description="Subtle tinted background with high contrast bottom line emphasis, popular in mobile touch and data density forms."
          compactCode={`<TextInput variant="filled" label="Project Code" value={value} onChange={(e) => setValue(e.target.value)} />`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <TextInput
                variant="filled"
                label="Project Code"
                value={filledVal}
                onChange={(e) => setFilledVal(e.target.value)}
              />
            </div>
          }
          nativePreview={
            <div style={{ width: '100%' }}>
              <TextInput
                variant="filled"
                label="Project Code"
                value={filledVal}
                onChange={(e) => setFilledVal(e.target.value)}
              />
            </div>
          }
          webCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react';

export default function FilledInputExample(): JSX.Element {
  const [code, setCode] = useState('PRJ-9042');

  return (
    <TextInput
      variant="filled"
      label="Project Code"
      value={code}
      onChange={(e) => setCode(e.target.value)}
    />
  );
}`}
          nativeCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react-native';

export default function NativeFilledExample(): JSX.Element {
  const [code, setCode] = useState('PRJ-9042');

  return (
    <TextInput
      variant="filled"
      label="Project Code"
      value={code}
      onChangeText={setCode}
    />
  );
}`}
        />
      )}

      {/* 04 Standard (Web only) */}
      {hasRecipe('standard') && (
        <ComponentDemoCard
          id="input-standard"
          title="04 Standard Underline Variant"
          description="Minimal borderless input with clean active bottom underline, ideal for document editors and editorial interfaces."
          compactCode={`<TextInput variant="standard" label="Document Title" value={title} onChange={(e) => setTitle(e.target.value)} />`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <TextInput
                variant="standard"
                label="Document Title"
                value={standardVal}
                onChange={(e) => setStandardVal(e.target.value)}
              />
            </div>
          }
          nativePreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <TextInput
                variant="standard"
                label="Document Title"
                value={standardVal}
                onChange={(e) => setStandardVal(e.target.value)}
              />
            </div>
          }
          webCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react';

export default function StandardInputExample(): JSX.Element {
  const [title, setTitle] = useState('Quarterly Design Review');

  return (
    <TextInput
      variant="standard"
      label="Document Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  );
}`}
          nativeCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react-native';

export default function StandardInputExample(): JSX.Element {
  const [title, setTitle] = useState('Quarterly Design Review');

  return (
    <TextInput
      variant="standard"
      label="Document Title"
      value={title}
      onChangeText={setTitle}
    />
  );
}`}
        />
      )}

      {/* 05 Sizes */}
      {hasRecipe('sizes') && (
        <ComponentDemoCard
          id="input-sizes"
          title="05 Sizing Scale (Small, Medium, Large)"
          description="Three standardized density scales: sm (32px / high-density grids), md (40px / standard forms), and lg (48px / hero touch inputs)."
          compactCode={`<TextInput size="sm" placeholder="Small (32px)" />
<TextInput size="md" placeholder="Medium (40px)" />
<TextInput size="lg" placeholder="Large (48px)" />`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <TextInput size="sm" label="Small (sm · 32px)" placeholder="Dense data entry..." />
              <TextInput size="md" label="Medium (md · 40px · Default)" placeholder="Standard form field..." />
              <TextInput size="lg" label="Large (lg · 48px)" placeholder="Hero touch target..." />
            </div>
          }
          nativePreview={
            <div style={{ width: '100%', gap: 12, display: 'flex', flexDirection: 'column' }}>
              <TextInput size="sm" label="Small (36pt)" placeholder="Dense entry..." />
              <TextInput size="md" label="Medium (44pt Apple HIG)" placeholder="Standard field..." />
              <TextInput size="lg" label="Large (52pt)" placeholder="Touch target..." />
            </div>
          }
          webCode={`import React from 'react';
import { TextInput } from '@winplaybox/react';

export default function InputSizesExample(): JSX.Element {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <TextInput size="sm" label="Small (32px)" placeholder="Small..." />
      <TextInput size="md" label="Medium (40px)" placeholder="Medium..." />
      <TextInput size="lg" label="Large (48px)" placeholder="Large..." />
    </div>
  );
}`}
          nativeCode={`import React from 'react';
import { View } from 'react-native';
import { TextInput } from '@winplaybox/react-native';

export default function NativeSizesExample(): JSX.Element {
  return (
    <View style={{ gap: 12 }}>
      <TextInput size="sm" label="Small" placeholder="Small..." />
      <TextInput size="md" label="Medium" placeholder="Medium..." />
      <TextInput size="lg" label="Large" placeholder="Large..." />
    </View>
  );
}`}
        />
      )}

      {/* 06 Helper text */}
      {hasRecipe('helper-text') && (
        <ComponentDemoCard
          id="input-helper"
          title="06 Helper Text & Description"
          description="Contextual guidance linked programmatically to the input via aria-describedby for accessibility."
          compactCode={`<TextInput label="Corporate Email" description="We'll never share your email address." value={email} />`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <TextInput
                label="Corporate Email"
                placeholder="name@company.com"
                value={emailVal}
                onChange={(e) => setEmailVal(e.target.value)}
                description="We'll never share your email with third parties."
              />
            </div>
          }
          nativePreview={
            <div style={{ width: '100%' }}>
              <TextInput
                label="Corporate Email"
                value={emailVal}
                onChange={(e) => setEmailVal(e.target.value)}
                description="We'll never share your email."
              />
            </div>
          }
          webCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react';

export default function HelperTextInput(): JSX.Element {
  const [email, setEmail] = useState('sagar@example.com');

  return (
    <TextInput
      label="Corporate Email"
      placeholder="name@company.com"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      description="We'll never share your email with third parties."
    />
  );
}`}
          nativeCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react-native';

export default function NativeHelperExample(): JSX.Element {
  const [email, setEmail] = useState('sagar@example.com');

  return (
    <TextInput
      label="Corporate Email"
      value={email}
      onChangeText={setEmail}
      description="We'll never share your email."
    />
  );
}`}
        />
      )}

      {/* 07 Error */}
      {hasRecipe('error') && (
        <ComponentDemoCard
          id="input-error"
          title="07 Error Validation State"
          description="Prominent error border with accessible error description linked via aria-errormessage and aria-invalid."
          compactCode={`<TextInput label="Email Address" error="Please enter a valid corporate email address." value={val} />`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <TextInput
                label="Email Address"
                value={errorVal}
                onChange={(e) => setErrorVal(e.target.value)}
                error="Please enter a valid corporate email address."
              />
            </div>
          }
          nativePreview={
            <div style={{ width: '100%' }}>
              <TextInput
                label="Email Address"
                value={errorVal}
                onChange={(e) => setErrorVal(e.target.value)}
                error="Please enter a valid email address."
              />
            </div>
          }
          webCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react';

export default function ErrorInputExample(): JSX.Element {
  const [val, setVal] = useState('invalid-email-address');

  return (
    <TextInput
      label="Email Address"
      value={val}
      onChange={(e) => setVal(e.target.value)}
      error="Please enter a valid corporate email address."
    />
  );
}`}
          nativeCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react-native';

export default function NativeErrorExample(): JSX.Element {
  const [val, setVal] = useState('invalid-email');

  return (
    <TextInput
      label="Email Address"
      value={val}
      onChangeText={setVal}
      error="Please enter a valid email."
    />
  );
}`}
        />
      )}

      {/* 08 Success */}
      {hasRecipe('success') && (
        <ComponentDemoCard
          id="input-success"
          title="08 Success State"
          description="Positive verification feedback confirming that input satisfies schema requirements (e.g. verified email or available username)."
          compactCode={`<TextInput label="Verified Email" value="sagar@example.com" rightIcon={<CheckIcon size={16} color="#16A34A" />} description="Email successfully verified." />`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <TextInput
                label="Verified Email"
                value="sagar@example.com"
                readOnly
                rightIcon={<CheckIcon size={16} color="var(--color-semantic-success, #16A34A)" />}
                description="Email verified with corporate domain."
              />
            </div>
          }
          nativePreview={
            <div style={{ width: '100%' }}>
              <TextInput
                label="Verified Email"
                value="sagar@example.com"
                readOnly
                rightIcon={<CheckIcon size={16} color="#16A34A" />}
                description="Email verified."
              />
            </div>
          }
          webCode={`import React from 'react';
import { TextInput } from '@winplaybox/react';
import { CheckIcon } from '@winplaybox/icons';

export default function SuccessInputExample(): JSX.Element {
  return (
    <TextInput
      label="Verified Email"
      value="sagar@example.com"
      readOnly
      rightIcon={<CheckIcon size={16} color="#16A34A" />}
      description="Email verified with corporate domain."
    />
  );
}`}
          nativeCode={`import React from 'react';
import { TextInput } from '@winplaybox/react-native';
import { CheckIcon } from '@winplaybox/icons';

export default function NativeSuccessExample(): JSX.Element {
  return (
    <TextInput
      label="Verified Email"
      value="sagar@example.com"
      editable={false}
      rightIcon={<CheckIcon size={16} color="#16A34A" />}
      description="Email verified."
    />
  );
}`}
        />
      )}

      {/* 09 Required */}
      {hasRecipe('required') && (
        <ComponentDemoCard
          id="input-required"
          title="09 Required Field"
          description="Visual required asterisk and semantic aria-required attribute indicating mandatory submission data."
          compactCode={`<TextInput required label="Legal First Name" placeholder="Required for billing verification" />`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <TextInput
                required
                label="Legal First Name"
                placeholder="Required for billing verification"
              />
            </div>
          }
          nativePreview={
            <div style={{ width: '100%' }}>
              <TextInput
                required
                label="Legal First Name"
                placeholder="Required field..."
              />
            </div>
          }
          webCode={`import React from 'react';
import { TextInput } from '@winplaybox/react';

export default function RequiredInputExample(): JSX.Element {
  return (
    <TextInput
      required
      label="Legal First Name"
      placeholder="Required for billing verification"
    />
  );
}`}
          nativeCode={`import React from 'react';
import { TextInput } from '@winplaybox/react-native';

export default function NativeRequiredExample(): JSX.Element {
  return (
    <TextInput
      required
      label="Legal First Name"
      placeholder="Required field..."
    />
  );
}`}
        />
      )}

      {/* 10 Disabled */}
      {hasRecipe('disabled') && (
        <ComponentDemoCard
          id="input-disabled"
          title="10 Disabled State"
          description="Non-interactive dimmed field preventing click, focus, and keypress events."
          compactCode={`<TextInput disabled label="Subscription Plan" value="Enterprise Dedicated ($499/mo)" />`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <TextInput
                disabled
                label="Subscription Plan"
                value="Enterprise Dedicated ($499/mo)"
                description="Plan tier managed by workspace organization administrator"
              />
            </div>
          }
          nativePreview={
            <div style={{ width: '100%' }}>
              <TextInput
                disabled
                label="Subscription Plan"
                value="Enterprise Dedicated"
              />
            </div>
          }
          webCode={`import React from 'react';
import { TextInput } from '@winplaybox/react';

export default function DisabledInputExample(): JSX.Element {
  return (
    <TextInput
      disabled
      label="Subscription Plan"
      value="Enterprise Dedicated ($499/mo)"
    />
  );
}`}
          nativeCode={`import React from 'react';
import { TextInput } from '@winplaybox/react-native';

export default function NativeDisabledExample(): JSX.Element {
  return (
    <TextInput
      editable={false}
      label="Subscription Plan"
      value="Enterprise Dedicated"
    />
  );
}`}
        />
      )}

      {/* 11 Readonly */}
      {hasRecipe('readonly') && (
        <ComponentDemoCard
          id="input-readonly"
          title="11 Read-Only State"
          description="Allows user text selection, copy-to-clipboard, and keyboard navigation while preventing any edits."
          compactCode={`<TextInput readOnly label="Immutable Account ID" value="WB-104829-US" />`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <TextInput
                readOnly
                label="Immutable Account ID"
                value="WB-104829-US"
                description="Click and drag to copy identifier"
              />
            </div>
          }
          nativePreview={
            <div style={{ width: '100%' }}>
              <TextInput
                readOnly
                label="Immutable Account ID"
                value="WB-104829-US"
              />
            </div>
          }
          webCode={`import React from 'react';
import { TextInput } from '@winplaybox/react';

export default function ReadOnlyInputExample(): JSX.Element {
  return (
    <TextInput
      readOnly
      label="Immutable Account ID"
      value="WB-104829-US"
    />
  );
}`}
          nativeCode={`import React from 'react';
import { TextInput } from '@winplaybox/react-native';

export default function NativeReadOnlyExample(): JSX.Element {
  return (
    <TextInput
      editable={false}
      label="Immutable Account ID"
      value="WB-104829-US"
    />
  );
}`}
        />
      )}

      {/* 12 Leading icon */}
      {hasRecipe('leading-icon') && (
        <ComponentDemoCard
          id="input-leading-icon"
          title="12 Leading Vector Icon"
          description="Vector icon placed at the start of the text input container to establish field intent."
          compactCode={`<TextInput label="Workspace Search" leftIcon={<SearchIcon size={16} />} placeholder="Search stories, assets, tokens..." />`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <TextInput
                label="Workspace Search"
                leftIcon={<SearchIcon size={16} />}
                placeholder="Search stories, assets, tokens..."
              />
            </div>
          }
          nativePreview={
            <div style={{ width: '100%' }}>
              <TextInput
                label="Workspace Search"
                leftIcon={<SearchIcon size={16} />}
                placeholder="Search stories..."
              />
            </div>
          }
          webCode={`import React from 'react';
import { TextInput } from '@winplaybox/react';
import { SearchIcon } from '@winplaybox/icons';

export default function LeadingIconExample(): JSX.Element {
  return (
    <TextInput
      label="Workspace Search"
      leftIcon={<SearchIcon size={16} />}
      placeholder="Search stories, assets, tokens..."
    />
  );
}`}
          nativeCode={`import React from 'react';
import { TextInput } from '@winplaybox/react-native';
import { SearchIcon } from '@winplaybox/icons';

export default function NativeLeadingIconExample(): JSX.Element {
  return (
    <TextInput
      label="Workspace Search"
      leftIcon={<SearchIcon size={16} />}
      placeholder="Search stories..."
    />
  );
}`}
        />
      )}

      {/* 13 Trailing icon */}
      {hasRecipe('trailing-icon') && (
        <ComponentDemoCard
          id="input-trailing-icon"
          title="13 Trailing Action Icon"
          description="Interactive trigger or indicator placed at the end of the input (e.g. password visibility toggle, clear button, or info modal)."
          compactCode={`<TextInput label="Master Password" type={showPassword ? 'text' : 'password'} rightIcon={<button onClick={toggle}>...</button>} />`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <TextInput
                label="Master Password"
                type={showPassword ? 'text' : 'password'}
                value={passwordVal}
                onChange={(e) => setPasswordVal(e.target.value)}
                rightIcon={
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setShowPassword((prev) => !prev);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 4,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-text-secondary)',
                      pointerEvents: 'auto',
                    }}
                    title={showPassword ? 'Hide password' : 'Show password'}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
                  </button>
                }
                description="Click eye icon to reveal secrets"
              />
            </div>
          }
          nativePreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <TextInput
                label="Master Password"
                type={showPassword ? 'text' : 'password'}
                value={passwordVal}
                onChange={(e) => setPasswordVal(e.target.value)}
                rightIcon={
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setShowPassword((prev) => !prev);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 4,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-text-secondary)',
                      pointerEvents: 'auto',
                    }}
                    title={showPassword ? 'Hide password' : 'Show password'}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
                  </button>
                }
              />
            </div>
          }
          webCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react';
import { EyeIcon, EyeOffIcon } from '@winplaybox/icons';

export default function TrailingIconExample(): JSX.Element {
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState('•••••••••••••');

  return (
    <TextInput
      label="Master Password"
      type={show ? 'text' : 'password'}
      value={pass}
      onChange={(e) => setPass(e.target.value)}
      rightIcon={
        <button type="button" onClick={() => setShow(!show)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          {show ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
        </button>
      }
    />
  );
}`}
          nativeCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react-native';

export default function NativeTrailingExample(): JSX.Element {
  const [secure, setSecure] = useState(true);
  const [pass, setPass] = useState('SecretPass123');

  return (
    <TextInput
      label="Password"
      secureTextEntry={secure}
      value={pass}
      onChangeText={setPass}
    />
  );
}`}
        />
      )}

      {/* 14 Clear button */}
      {hasRecipe('clear-button') && (
        <ComponentDemoCard
          id="input-clear"
          title="14 Instant Clear Button"
          description="Cross button appears dynamically when input contains text to allow instant field reset."
          compactCode={`<TextInput label="Search Filter" value={query} rightIcon={query ? <button onClick={() => setQuery('')}><CloseIcon /></button> : null} />`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <TextInput
                label="Search Filter"
                value={clearVal}
                onChange={(e) => setClearVal(e.target.value)}
                leftIcon={<SearchIcon size={16} />}
                rightIcon={
                  clearVal ? (
                    <button
                      type="button"
                      onClick={() => setClearVal('')}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-text-secondary)',
                      }}
                      title="Clear input"
                      aria-label="Clear input text"
                    >
                      <CloseIcon size={14} />
                    </button>
                  ) : undefined
                }
                description={clearVal ? 'Click × to clear text' : 'Type characters to reveal clear button'}
              />
            </div>
          }
          nativePreview={
            <div style={{ width: '100%' }}>
              <TextInput
                label="Search Filter"
                value={clearVal}
                onChange={(e) => setClearVal(e.target.value)}
              />
            </div>
          }
          webCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react';
import { SearchIcon, CloseIcon } from '@winplaybox/icons';

export default function ClearButtonExample(): JSX.Element {
  const [val, setVal] = useState('iphone 16 pro');

  return (
    <TextInput
      label="Search Filter"
      value={val}
      onChange={(e) => setVal(e.target.value)}
      leftIcon={<SearchIcon size={16} />}
      rightIcon={
        val ? (
          <button type="button" onClick={() => setVal('')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <CloseIcon size={14} />
          </button>
        ) : undefined
      }
    />
  );
}`}
          nativeCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react-native';

export default function NativeClearExample(): JSX.Element {
  const [val, setVal] = useState('iphone 16');

  return (
    <TextInput
      label="Search Filter"
      value={val}
      onChangeText={setVal}
      clearButtonMode="while-editing"
    />
  );
}`}
        />
      )}

      {/* 15 Prefix */}
      {hasRecipe('prefix') && (
        <ComponentDemoCard
          id="input-prefix"
          title="15 Prefix Adornment"
          description="Fixed non-editable prefix symbol attached to the left of editable text (e.g. currency symbols or protocols)."
          compactCode={`<div className="prefix-container"><span className="prefix">₹</span><input /></div>`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 6 }}>
                Transaction Amount
              </label>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: 8,
                  border: '1px solid var(--color-border-default)',
                  backgroundColor: 'var(--color-surface)',
                  overflow: 'hidden',
                }}
              >
                <span
                  style={{
                    padding: '8px 12px',
                    backgroundColor: 'var(--color-surface-raised)',
                    borderRight: '1px solid var(--color-border-default)',
                    color: 'var(--color-text-secondary)',
                    fontWeight: 700,
                    fontSize: 14,
                  }}
                >
                  ₹
                </span>
                <input
                  type="text"
                  value={amountVal}
                  onChange={(e) => setAmountVal(e.target.value)}
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    padding: '9px 12px',
                    backgroundColor: 'transparent',
                    color: 'var(--color-text-primary)',
                    fontSize: 14,
                  }}
                  aria-label="Amount in INR"
                />
              </div>
            </div>
          }
          nativePreview={<div />}
          webCode={`import React, { useState } from 'react';

export default function PrefixInputExample(): JSX.Element {
  const [amt, setAmt] = useState('1000');

  return (
    <div style={{ display: 'flex', alignItems: 'center', borderRadius: 8, border: '1px solid #CBD5E1' }}>
      <span style={{ padding: '8px 12px', backgroundColor: '#F1F5F9', fontWeight: 700 }}>₹</span>
      <input
        type="text"
        value={amt}
        onChange={(e) => setAmt(e.target.value)}
        style={{ flex: 1, border: 'none', outline: 'none', padding: '9px 12px' }}
      />
    </div>
  );
}`}
          nativeCode={`// Prefix adornment is configured on Web and Desktop platforms`}
        />
      )}

      {/* 16 Suffix */}
      {hasRecipe('suffix') && (
        <ComponentDemoCard
          id="input-suffix"
          title="16 Suffix Adornment"
          description="Fixed non-editable label attached to the right of editable text (e.g. domain top-level domains, units, or external links)."
          compactCode={`<div className="suffix-container"><input /><span className="suffix">.winplaybox.in</span></div>`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 6 }}>
                Production Domain URL
              </label>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: 8,
                  border: '1px solid var(--color-border-default)',
                  backgroundColor: 'var(--color-surface)',
                  overflow: 'hidden',
                }}
              >
                <input
                  type="text"
                  value={domainVal}
                  onChange={(e) => setDomainVal(e.target.value)}
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    padding: '9px 12px',
                    backgroundColor: 'transparent',
                    color: 'var(--color-text-primary)',
                    fontSize: 14,
                  }}
                  aria-label="Domain host"
                />
                <span
                  style={{
                    padding: '8px 12px',
                    backgroundColor: 'var(--color-surface-raised)',
                    borderLeft: '1px solid var(--color-border-default)',
                    color: 'var(--color-text-secondary)',
                    fontWeight: 600,
                    fontSize: 13,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                  }}
                >
                  <ExternalLinkIcon size={13} />
                  <span>https</span>
                </span>
              </div>
            </div>
          }
          nativePreview={<div />}
          webCode={`import React, { useState } from 'react';
import { ExternalLinkIcon } from '@winplaybox/icons';

export default function SuffixInputExample(): JSX.Element {
  const [domain, setDomain] = useState('winplaybox.in');

  return (
    <div style={{ display: 'flex', alignItems: 'center', borderRadius: 8, border: '1px solid #CBD5E1' }}>
      <input
        type="text"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        style={{ flex: 1, border: 'none', outline: 'none', padding: '9px 12px' }}
      />
      <span style={{ padding: '8px 12px', backgroundColor: '#F1F5F9' }}>
        <ExternalLinkIcon size={14} />
      </span>
    </div>
  );
}`}
          nativeCode={`// Suffix adornment is configured on Web and Desktop platforms`}
        />
      )}

      {/* 17 Character counter */}
      {hasRecipe('character-counter') && (
        <ComponentDemoCard
          id="input-counter"
          title="17 Live Character Counter"
          description="Real-time character counter showing current length vs boundary limit (e.g. bio, tweet, or SMS limit)."
          compactCode={`<TextInput maxLength={160} description={\`\${text.length} / 160 characters\`} />`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <TextInput
                label="Summary Description"
                value={counterVal}
                maxLength={160}
                onChange={(e) => setCounterVal(e.target.value)}
                description={`${counterVal.length} / 160 characters`}
              />
            </div>
          }
          nativePreview={
            <div style={{ width: '100%' }}>
              <TextInput
                label="Summary Description"
                value={counterVal}
                maxLength={160}
                onChange={(e) => setCounterVal(e.target.value)}
                description={`${counterVal.length} / 160`}
              />
            </div>
          }
          webCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react';

export default function CounterInputExample(): JSX.Element {
  const [text, setText] = useState('Spectra UI character count demo');
  const MAX = 160;

  return (
    <TextInput
      label="Summary Description"
      value={text}
      maxLength={MAX}
      onChange={(e) => setText(e.target.value)}
      description={\`\${text.length} / \${MAX} characters\`}
    />
  );
}`}
          nativeCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react-native';

export default function NativeCounterExample(): JSX.Element {
  const [text, setText] = useState('Spectra UI');

  return (
    <TextInput
      label="Summary Description"
      value={text}
      maxLength={160}
      onChangeText={setText}
      description={\`\${text.length} / 160\`}
    />
  );
}`}
        />
      )}

      {/* 18 Multiline */}
      {hasRecipe('multiline') && (
        <ComponentDemoCard
          id="input-multiline"
          title="18 Multiline Text Area"
          description="Multi-row textarea suitable for long-form user feedback, notes, and communications."
          compactCode={`<Textarea label="Message Body" rows={4} value={msg} />`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 6 }}>
                Message Body
              </label>
              <textarea
                rows={4}
                value={multilineVal}
                onChange={(e) => setMultilineVal(e.target.value)}
                style={{
                  width: '100%',
                  borderRadius: 8,
                  border: '1px solid var(--color-border-default)',
                  backgroundColor: 'var(--color-surface)',
                  padding: '10px 12px',
                  color: 'var(--color-text-primary)',
                  fontSize: 13,
                  lineHeight: 1.5,
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                }}
              />
            </div>
          }
          nativePreview={
            <div style={{ width: '100%' }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 6 }}>
                Message Body
              </label>
              <textarea
                rows={4}
                value={multilineVal}
                onChange={(e) => setMultilineVal(e.target.value)}
                style={{
                  width: '100%',
                  borderRadius: 8,
                  border: '1px solid var(--color-border-default)',
                  backgroundColor: 'var(--color-surface)',
                  padding: '10px 12px',
                  color: 'var(--color-text-primary)',
                  fontSize: 13,
                  lineHeight: 1.5,
                  outline: 'none',
                  fontFamily: 'inherit',
                }}
              />
            </div>
          }
          webCode={`import React, { useState } from 'react';
import { Textarea } from '@winplaybox/react';

export default function MultilineInputExample(): JSX.Element {
  const [msg, setMsg] = useState('Write your message here...');

  return (
    <Textarea
      label="Message Body"
      rows={4}
      value={msg}
      onChange={(e) => setMsg(e.target.value)}
    />
  );
}`}
          nativeCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react-native';

export default function NativeMultilineExample(): JSX.Element {
  const [msg, setMsg] = useState('Write message...');

  return (
    <TextInput
      multiline
      numberOfLines={4}
      label="Message Body"
      value={msg}
      onChangeText={setMsg}
    />
  );
}`}
        />
      )}

      {/* 19 Autosize (Web only) */}
      {hasRecipe('autosize') && (
        <ComponentDemoCard
          id="input-autosize"
          title="19 Auto-Resizing Multiline"
          description="Expands its vertical height automatically as line count increases without rendering a vertical scrollbar."
          compactCode={`<textarea style={{ height: 'auto', minHeight: 70 }} onInput={autoResize} />`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 6 }}>
                Auto-Expanding Notes
              </label>
              <textarea
                value={autosizeVal}
                onChange={(e) => setAutosizeVal(e.target.value)}
                rows={3}
                style={{
                  width: '100%',
                  borderRadius: 8,
                  border: '1px solid var(--color-border-default)',
                  backgroundColor: 'var(--color-surface)',
                  padding: '10px 12px',
                  color: 'var(--color-text-primary)',
                  fontSize: 13,
                  lineHeight: 1.5,
                  outline: 'none',
                  fontFamily: 'inherit',
                }}
              />
              <span style={{ fontSize: 11, color: 'var(--color-text-muted)', marginTop: 4, display: 'block' }}>
                Height adjusts dynamically to content
              </span>
            </div>
          }
          nativePreview={<div />}
          webCode={`import React, { useState } from 'react';

export default function AutosizeExample(): JSX.Element {
  const [text, setText] = useState('First line\\nSecond line\\nThird line');

  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      rows={3}
      style={{ width: '100%', borderRadius: 8, padding: 12 }}
    />
  );
}`}
          nativeCode={`// Auto-resize is handled natively via onContentSizeChange in React Native`}
        />
      )}

      {/* 20 Search */}
      {hasRecipe('search') && (
        <ComponentDemoCard
          id="input-search"
          title="20 Search Field with Reset"
          description="Dedicated search recipe equipped with leading magnifying glass vector icon and trailing clear trigger."
          compactCode={`<TextInput leftIcon={<SearchIcon />} placeholder="Search articles..." value={query} />`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <TextInput
                label="Knowledge Base Search"
                placeholder="Search articles, documentation, guides..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                leftIcon={<SearchIcon size={16} />}
                rightIcon={
                  searchVal ? (
                    <button
                      type="button"
                      onClick={() => setSearchVal('')}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                      aria-label="Clear search"
                    >
                      <CloseIcon size={14} />
                    </button>
                  ) : undefined
                }
              />
            </div>
          }
          nativePreview={
            <div style={{ width: '100%' }}>
              <TextInput
                label="Search Articles"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                leftIcon={<SearchIcon size={16} />}
              />
            </div>
          }
          webCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react';
import { SearchIcon, CloseIcon } from '@winplaybox/icons';

export default function SearchRecipeExample(): JSX.Element {
  const [q, setQ] = useState('iphone 16 pro');

  return (
    <TextInput
      label="Knowledge Base Search"
      value={q}
      onChange={(e) => setQ(e.target.value)}
      leftIcon={<SearchIcon size={16} />}
      rightIcon={q ? <CloseIcon size={14} onClick={() => setQ('')} /> : undefined}
    />
  );
}`}
          nativeCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react-native';
import { SearchIcon } from '@winplaybox/icons';

export default function NativeSearchExample(): JSX.Element {
  const [q, setQ] = useState('iphone');

  return (
    <TextInput
      label="Search Articles"
      value={q}
      onChangeText={setQ}
      leftIcon={<SearchIcon size={16} />}
      returnKeyType="search"
    />
  );
}`}
        />
      )}

      {/* 21 Password */}
      {hasRecipe('password') && (
        <ComponentDemoCard
          id="input-password-recipe"
          title="21 Password Field with Toggle"
          description="Obscures credentials by default while providing accessible visibility toggle."
          compactCode={`<TextInput type={show ? 'text' : 'password'} label="Account Password" />`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <TextInput
                label="Account Password"
                type={showPassword ? 'text' : 'password'}
                value={passwordVal}
                onChange={(e) => setPasswordVal(e.target.value)}
                rightIcon={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
                  </button>
                }
              />
            </div>
          }
          nativePreview={
            <div style={{ width: '100%' }}>
              <TextInput
                type={showPassword ? 'text' : 'password'}
                label="Account Password"
                value={passwordVal}
                onChange={(e) => setPasswordVal(e.target.value)}
              />
            </div>
          }
          webCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react';
import { EyeIcon, EyeOffIcon } from '@winplaybox/icons';

export default function PasswordRecipeExample(): JSX.Element {
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState('SpectraUI#2026!');

  return (
    <TextInput
      label="Account Password"
      type={show ? 'text' : 'password'}
      value={pass}
      onChange={(e) => setPass(e.target.value)}
      rightIcon={
        <button type="button" onClick={() => setShow(!show)}>
          {show ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
        </button>
      }
    />
  );
}`}
          nativeCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react-native';

export default function NativePasswordExample(): JSX.Element {
  const [secure, setSecure] = useState(true);

  return (
    <TextInput
      secureTextEntry={secure}
      label="Password"
      defaultValue="Secret#123"
    />
  );
}`}
        />
      )}

      {/* 22 Email */}
      {hasRecipe('email') && (
        <ComponentDemoCard
          id="input-email"
          title="22 Email Address Field"
          description="Email input with browser validation semantics and mobile email soft keyboard configuration."
          compactCode={`<TextInput type="email" keyboardType="email-address" label="Work Email" placeholder="name@company.com" />`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <TextInput
                type="email"
                label="Work Email"
                placeholder="name@company.com"
                value={emailVal}
                onChange={(e) => setEmailVal(e.target.value)}
              />
            </div>
          }
          nativePreview={
            <div style={{ width: '100%' }}>
              <TextInput
                type="email"
                label="Work Email"
                value={emailVal}
                onChange={(e) => setEmailVal(e.target.value)}
              />
            </div>
          }
          webCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react';

export default function EmailRecipeExample(): JSX.Element {
  const [email, setEmail] = useState('sagar@example.com');

  return (
    <TextInput
      type="email"
      label="Work Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  );
}`}
          nativeCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react-native';

export default function NativeEmailExample(): JSX.Element {
  const [email, setEmail] = useState('sagar@example.com');

  return (
    <TextInput
      keyboardType="email-address"
      autoCapitalize="none"
      label="Work Email"
      value={email}
      onChangeText={setEmail}
    />
  );
}`}
        />
      )}

      {/* 23 Number */}
      {hasRecipe('number') && (
        <ComponentDemoCard
          id="input-number"
          title="23 Numeric Quantity Input"
          description="Constrains input to numbers with step increments and numeric keypad trigger on mobile."
          compactCode={`<TextInput type="number" keyboardType="numeric" label="User Age" value="25" />`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <TextInput
                type="number"
                label="User Age"
                value={numberVal}
                onChange={(e) => setNumberVal(e.target.value)}
                description="Must be 18 years or older"
              />
            </div>
          }
          nativePreview={
            <div style={{ width: '100%' }}>
              <TextInput
                type="number"
                label="User Age"
                value={numberVal}
                onChange={(e) => setNumberVal(e.target.value)}
              />
            </div>
          }
          webCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react';

export default function NumberRecipeExample(): JSX.Element {
  const [age, setAge] = useState('25');

  return (
    <TextInput
      type="number"
      label="User Age"
      value={age}
      onChange={(e) => setAge(e.target.value)}
    />
  );
}`}
          nativeCode={`import React, { useState } from 'react';
import { TextInput } from '@winplaybox/react-native';

export default function NativeNumberExample(): JSX.Element {
  const [age, setAge] = useState('25');

  return (
    <TextInput
      keyboardType="numeric"
      label="User Age"
      value={age}
      onChangeText={setAge}
    />
  );
}`}
        />
      )}

      {/* 24 Select (Web only recipe) */}
      {hasRecipe('select') && (
        <ComponentDemoCard
          id="input-select-recipe"
          title="24 Select Combobox Recipe"
          description="Combines text input container styling with drop-down selection options on supported platforms."
          compactCode={`<select className="spectra-select"><option value="in">India (IN)</option></select>`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 6 }}>
                Region Selection
              </label>
              <select
                value={selectVal}
                onChange={(e) => setSelectVal(e.target.value)}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: 8,
                  border: '1px solid var(--color-border-default)',
                  backgroundColor: 'var(--color-surface)',
                  color: 'var(--color-text-primary)',
                  fontSize: 13,
                  outline: 'none',
                }}
              >
                <option value="in">India (Asia Pacific South · Mumbai)</option>
                <option value="us">United States (US East · Virginia)</option>
                <option value="eu">European Union (Europe Central · Frankfurt)</option>
              </select>
            </div>
          }
          nativePreview={<div />}
          webCode={`import React, { useState } from 'react';

export default function SelectInputRecipe(): JSX.Element {
  const [region, setRegion] = useState('in');

  return (
    <select value={region} onChange={(e) => setRegion(e.target.value)}>
      <option value="in">India (Mumbai)</option>
      <option value="us">United States (Virginia)</option>
    </select>
  );
}`}
          nativeCode={`// Select combobox is rendered via native picker on mobile platforms`}
        />
      )}

      {/* 25 Loading */}
      {hasRecipe('loading') && (
        <ComponentDemoCard
          id="input-loading"
          title="25 Loading Search State"
          description="Asynchronous searching indicator displaying micro-spinner in trailing slot during debounced operations."
          compactCode={`<TextInput label="Live Search" rightIcon={<Spinner size="sm" />} value="Searching..." />`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <TextInput
                label="Live Query Search"
                value={loadingQuery}
                onChange={(e) => setLoadingQuery(e.target.value)}
                leftIcon={<SearchIcon size={16} />}
                rightIcon={<Spinner size="sm" />}
                description="Executing federated database query..."
              />
            </div>
          }
          nativePreview={
            <div style={{ width: '100%' }}>
              <TextInput
                label="Live Query"
                value={loadingQuery}
                onChange={(e) => setLoadingQuery(e.target.value)}
                rightIcon={<Spinner size="sm" />}
              />
            </div>
          }
          webCode={`import React, { useState } from 'react';
import { TextInput, Spinner } from '@winplaybox/react';
import { SearchIcon } from '@winplaybox/icons';

export default function LoadingInputExample(): JSX.Element {
  return (
    <TextInput
      label="Live Query Search"
      value="Searching database..."
      leftIcon={<SearchIcon size={16} />}
      rightIcon={<Spinner size="sm" />}
    />
  );
}`}
          nativeCode={`import React from 'react';
import { TextInput, Spinner } from '@winplaybox/react-native';

export default function NativeLoadingExample(): JSX.Element {
  return (
    <TextInput
      label="Live Query"
      value="Searching..."
      rightIcon={<Spinner size="sm" />}
    />
  );
}`}
        />
      )}

      {/* 26 Async validation */}
      {hasRecipe('async-validation') && (
        <ComponentDemoCard
          id="input-async"
          title="26 Async Validation State"
          description="Debounced remote server verification checking username or coupon code availability in real-time."
          compactCode={`<TextInput label="Choose Username" rightIcon={isChecking ? <Spinner size="sm" /> : <CheckIcon />} />`}
          webPreview={
            <div style={{ maxWidth: 420, width: '100%' }}>
              <TextInput
                label="Choose Username"
                value={asyncUsername}
                onChange={(e) => setAsyncUsername(e.target.value)}
                rightIcon={
                  isCheckingAsync ? (
                    <Spinner size="sm" />
                  ) : asyncAvailable ? (
                    <CheckIcon size={16} color="#16A34A" />
                  ) : (
                    <CloseIcon size={16} color="#DC2626" />
                  )
                }
                error={!isCheckingAsync && asyncAvailable === false ? 'Username is already taken' : undefined}
                description={
                  isCheckingAsync
                    ? 'Checking availability...'
                    : asyncAvailable
                    ? 'Username is available!'
                    : undefined
                }
              />
            </div>
          }
          nativePreview={
            <div style={{ width: '100%' }}>
              <TextInput
                label="Choose Username"
                value={asyncUsername}
                onChange={(e) => setAsyncUsername(e.target.value)}
                description={isCheckingAsync ? 'Checking...' : 'Available'}
              />
            </div>
          }
          webCode={`import React, { useState, useEffect } from 'react';
import { TextInput, Spinner } from '@winplaybox/react';
import { CheckIcon } from '@winplaybox/icons';

export default function AsyncValidationExample(): JSX.Element {
  const [username, setUsername] = useState('sagar_suthar');
  const [checking, setChecking] = useState(false);

  return (
    <TextInput
      label="Choose Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      rightIcon={checking ? <Spinner size="sm" /> : <CheckIcon color="#16A34A" />}
    />
  );
}`}
          nativeCode={`import React, { useState } from 'react';
import { TextInput, Spinner } from '@winplaybox/react-native';

export default function NativeAsyncExample(): JSX.Element {
  const [user, setUser] = useState('sagar');

  return (
    <TextInput
      label="Choose Username"
      value={user}
      onChangeText={setUser}
    />
  );
}`}
        />
      )}

      {/* 27 Form integration */}
      {hasRecipe('form-integration') && (
        <ComponentDemoCard
          id="input-form-integration"
          title="27 Complete Form Integration"
          description="Cohesive real-world account creation form combining names, emails, passwords, and submission triggers."
          compactCode={`<form onSubmit={handleSubmit}><TextInput label="Full Name" /><TextInput label="Work Email" /><Button type="submit">Create Account</Button></form>`}
          webPreview={
            <div
              style={{
                maxWidth: 440,
                width: '100%',
                padding: 24,
                borderRadius: 12,
                border: '1px solid var(--color-border-subtle)',
                backgroundColor: 'var(--color-surface)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                Create Spectra Enterprise Account
              </div>
              <TextInput
                label="Full Name"
                placeholder="Sagar Suthar"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                required
              />
              <TextInput
                type="email"
                label="Corporate Email"
                placeholder="sagar@winplaybox.in"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                required
              />
              <TextInput
                type="password"
                label="Password"
                placeholder="Minimum 8 characters"
                value={formPass}
                onChange={(e) => setFormPass(e.target.value)}
                required
              />
              <TextInput
                type="password"
                label="Confirm Password"
                placeholder="Re-enter password"
                value={formConfirm}
                onChange={(e) => setFormConfirm(e.target.value)}
                required
                error={formConfirm && formConfirm !== formPass ? 'Passwords do not match' : undefined}
              />
              <Button
                variant="primary"
                onClick={() => setFormSubmitted(true)}
                style={{ width: '100%', marginTop: 8 }}
              >
                Create Account
              </Button>
              {formSubmitted && (
                <div style={{ fontSize: 12, color: '#16A34A', textAlign: 'center', fontWeight: 600 }}>
                  Account created successfully!
                </div>
              )}
            </div>
          }
          nativePreview={
            <div style={{ width: '100%', gap: 14, display: 'flex', flexDirection: 'column' }}>
              <TextInput label="Full Name" value={formName} onChange={(e) => setFormName(e.target.value)} />
              <TextInput label="Email" value={formEmail} onChange={(e) => setFormEmail(e.target.value)} />
              <Button variant="primary">Create Account</Button>
            </div>
          }
          webCode={`import React, { useState } from 'react';
import { TextInput, Button } from '@winplaybox/react';

export default function CompleteFormExample(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, pass });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <TextInput label="Full Name" required value={name} onChange={(e) => setName(e.target.value)} />
      <TextInput label="Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextInput label="Password" type="password" required value={pass} onChange={(e) => setPass(e.target.value)} />
      <Button type="submit" variant="primary">Create Account</Button>
    </form>
  );
}`}
          nativeCode={`import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from '@winplaybox/react-native';

export default function NativeFormExample(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={{ gap: 14 }}>
      <TextInput label="Full Name" value={name} onChangeText={setName} />
      <TextInput label="Email" value={email} onChangeText={setEmail} />
      <Button variant="primary">Create Account</Button>
    </View>
  );
}`}
        />
      )}
    </div>
  );
};
