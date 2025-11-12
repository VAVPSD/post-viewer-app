import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '../shared/lib/theme/ThemeProvider';
import { router } from './providers/router/router';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
