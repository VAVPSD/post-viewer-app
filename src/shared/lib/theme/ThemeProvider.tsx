import { useMemo, useState, type PropsWithChildren } from 'react';
import { ThemeContext } from './ThemeContext';
import type { Theme, ThemeContextValue } from './types';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>('light');

  const themeContextValue: ThemeContextValue = useMemo(
    () => ({
      theme,
      setTheme,
      toggle: () => setTheme(prev => (prev === 'light' ? 'dark' : 'light')),
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  )
};
