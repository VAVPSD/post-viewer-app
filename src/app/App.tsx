import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '../shared/lib/theme/ThemeProvider';
import { router } from './providers/router/router';
import { StoreProvider } from './providers/store/ui/StoreProvider';

function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
