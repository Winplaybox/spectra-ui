#!/bin/bash
# scripts/generate-component.sh
# Usage: pnpm run generate:component actions Button
# Creates: Button.tsx, Button.css.ts, Button.test.tsx, Button.stories.tsx

set -e

CATEGORY=$1
COMPONENT=$2

if [ -z "$CATEGORY" ] || [ -z "$COMPONENT" ]; then
  echo "Usage: pnpm run generate:component <category> <component>"
  echo "Example: pnpm run generate:component actions Button"
  echo ""
  echo "Categories: layout, actions, form, data-display, navigation, overlay, feedback, media, surfaces, utility"
  exit 1
fi

# Web (React)
WEB_DIR="packages/react/src/components/$CATEGORY"
mkdir -p "$WEB_DIR"

# Component file
cat > "$WEB_DIR/$COMPONENT.tsx" << EOF
import { forwardRef, ReactNode } from 'react';
import * as styles from './$COMPONENT.css';

export interface ${COMPONENT}Props
  extends React.ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
  variant?: 'default' | 'secondary';
  disabled?: boolean;
}

export const $COMPONENT = forwardRef<HTMLDivElement, ${COMPONENT}Props>(
  (
    { variant = 'default', disabled = false, children, ...rest },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={styles.root({ variant, disabled })}
        aria-disabled={disabled}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

$COMPONENT.displayName = '$COMPONENT';
EOF

# Styles (vanilla-extract)
cat > "$WEB_DIR/$COMPONENT.css.ts" << 'EOF'
import { style, styleVariants } from '@vanilla-extract/css';

const base = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'var(--space-component-padding-md)',
  borderRadius: 'var(--radius-component-md)',
  transition: 'all var(--motion-subtle)',
  fontFamily: 'var(--font-family-sans)',
  fontSize: 'var(--font-size-body-md)',
});

export const root = styleVariants({
  default: [
    base,
    {
      backgroundColor: 'var(--color-surface)',
      color: 'var(--color-text-primary)',
      border: '1px solid var(--color-border-default)',
    },
  ],
  secondary: [
    base,
    {
      backgroundColor: 'var(--color-surface-raised)',
      color: 'var(--color-text-secondary)',
      border: '1px solid var(--color-border-subtle)',
    },
  ],
});
EOF

# Test file
cat > "$WEB_DIR/$COMPONENT.test.tsx" << EOF
import { render, screen } from '@testing-library/react';
import { $COMPONENT } from './$COMPONENT';

describe('$COMPONENT', () => {
  it('renders with default props', () => {
    render(<$COMPONENT>Test</$COMPONENT>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('supports variant prop', () => {
    const { container } = render(
      <$COMPONENT variant="secondary">Test</$COMPONENT>
    );
    expect(container.firstChild).toHaveClass('secondary');
  });

  it('supports disabled state', () => {
    render(<$COMPONENT disabled>Test</$COMPONENT>);
    expect(screen.getByText('Test')).toHaveAttribute('aria-disabled', 'true');
  });
});
EOF

# Storybook stories
cat > "$WEB_DIR/$COMPONENT.stories.tsx" << EOF
import { Meta, StoryObj } from '@storybook/react';
import { $COMPONENT } from './$COMPONENT';

const meta: Meta<typeof $COMPONENT> = {
  title: '${CATEGORY^}/$COMPONENT',
  component: $COMPONENT,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '$COMPONENT',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};
EOF

# React Native (same structure)
RN_DIR="packages/react-native/src/components/$CATEGORY"
mkdir -p "$RN_DIR"

# Component file
cat > "$RN_DIR/$COMPONENT.native.tsx" << EOF
import { forwardRef, ReactNode } from 'react';
import { View } from 'react-native';
import * as styles from './$COMPONENT.styles';

export interface ${COMPONENT}Props {
  children?: ReactNode;
  variant?: 'default' | 'secondary';
  disabled?: boolean;
}

export const $COMPONENT = forwardRef<View, ${COMPONENT}Props>(
  ({ variant = 'default', disabled = false, children }, ref) => {
    return (
      <View
        ref={ref}
        style={[
          styles.base,
          variant === 'secondary' ? styles.secondary : styles.default,
          disabled && styles.disabled,
        ]}
      >
        {children}
      </View>
    );
  }
);

$COMPONENT.displayName = '$COMPONENT';
EOF

# Styles
cat > "$RN_DIR/$COMPONENT.styles.ts" << 'EOF'
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
  },
  default: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E7EB',
    borderWidth: 1,
  },
  secondary: {
    backgroundColor: '#F9FAFB',
    borderColor: '#F3F4F6',
    borderWidth: 1,
  },
  disabled: {
    opacity: 0.5,
  },
});

export const base = styles.base;
export const default: typeof styles.default = styles.default;
export const secondary = styles.secondary;
export const disabled = styles.disabled;
EOF

# Test file
cat > "$RN_DIR/$COMPONENT.test.tsx" << EOF
import { render } from '@testing-library/react-native';
import { $COMPONENT } from './$COMPONENT.native';

describe('$COMPONENT (React Native)', () => {
  it('renders with default props', () => {
    const { getByText } = render(<$COMPONENT>Test</$COMPONENT>);
    expect(getByText('Test')).toBeTruthy();
  });

  it('supports disabled state', () => {
    const { getByTestId } = render(
      <$COMPONENT disabled testID="component">
        Test
      </$COMPONENT>
    );
    expect(getByTestId('component')).toBeTruthy();
  });
});
EOF

echo "✅ Generated $COMPONENT in $CATEGORY"
echo ""
echo "Files created:"
echo "  📄 packages/react/src/components/$CATEGORY/$COMPONENT.tsx"
echo "  🎨 packages/react/src/components/$CATEGORY/$COMPONENT.css.ts"
echo "  🧪 packages/react/src/components/$CATEGORY/$COMPONENT.test.tsx"
echo "  📖 packages/react/src/components/$CATEGORY/$COMPONENT.stories.tsx"
echo "  📄 packages/react-native/src/components/$CATEGORY/$COMPONENT.native.tsx"
echo "  🎨 packages/react-native/src/components/$CATEGORY/$COMPONENT.styles.ts"
echo "  🧪 packages/react-native/src/components/$CATEGORY/$COMPONENT.test.tsx"
