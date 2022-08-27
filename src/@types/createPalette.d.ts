import * as createPalette from '@mui/material/styles/createPalette';
import { CustomShadowsProps } from './customShadowType';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }

  interface PaletteOptions {
    gradients: {
      primary: string;
      info: string;
      success: string;
      warning: string;
      error: string;
    };
  }
  interface Palette {
    gradients: {
      primary: string;
      info: string;
      success: string;
      warning: string;
      error: string;
    };
  }
}
