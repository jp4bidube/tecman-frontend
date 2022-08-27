import * as createTheme from '@mui/material/styles/createTheme';
import { CustomShadowsProps } from '../Theme/shadows';

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    customShadows: CustomShadowsProps;
  }

  interface Theme {
    customShadows: CustomShadowsProps;
  }
}
