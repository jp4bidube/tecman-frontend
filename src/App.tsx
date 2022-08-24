import { MainRoutes } from './routes';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainRoutes />
    </ThemeProvider>
  );
}

export default App;
