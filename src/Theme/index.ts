import { createTheme } from '@mui/material';

export const fontFamily = `"Inter Regular", Inter, sans-serif`;

export const theme = createTheme({
  typography: {
    fontFamily,
  },
  palette: {
    primary: { light: '#001166', main: '#000a3c', dark: '#000833' },
    success: { main: '#168821' },
    warning: { main: '#FFA62B' },
    background: { default: '#f2f5f8', paper: '#fff' },
  },
});
