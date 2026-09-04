import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'Spectra UI — WinPlayBox Design System',
  brandUrl: 'https://github.com/Winplaybox/spectra-ui',
  brandTarget: '_self',
});

addons.setConfig({
  theme,
});
