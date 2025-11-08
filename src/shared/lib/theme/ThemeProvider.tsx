import React, { useMemo, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import type { Theme, ThemeContextValue } from './types';

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
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
