import { createTheme } from '@mui/material';
import palette from './palette';
import shadows, { customShadows } from './shadows';
import typography from './typography';

export const fontFamily = `"Inter Regular", Inter, sans-serif`;

export const theme = createTheme({
  typography,
  shape: { borderRadius: 8 },
  palette,
  shadows,
  customShadows,
});
