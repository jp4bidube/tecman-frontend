import { MainRoutes } from './routes';
import { ThemeProvider } from './theme';

function App() {
  return (
    <ThemeProvider>
      <MainRoutes />
    </ThemeProvider>
  );
}

export default App;
