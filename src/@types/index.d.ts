import * as Color from '@mui/material/';
import { CustomShadowsProps } from './customShadowType';

declare module '@mui/material/' {
  interface Color {
    500_8: string;
    500_12: string;
    500_16: string;
    500_24: string;
    500_32: string;
    500_48: string;
    500_56: string;
    500_80: string;
  }
}
