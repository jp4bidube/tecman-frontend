import { MainRoutes } from './routes';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './Theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainRoutes />
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
