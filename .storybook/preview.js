import '../src/index.scss';
import { NavbarProvider } from '../src/contexts/NavbarContext';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const decorators = [
  (Story) => (
    <NavbarProvider>
      <Story />
    </NavbarProvider>
  ),
];
