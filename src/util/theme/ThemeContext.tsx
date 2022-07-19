import React, { useContext } from 'react';
import { Theme } from './Theme';

const defaultTheme: Theme = {
  primaryColor: 'black',
};

const ThemeContext = React.createContext<Theme>(defaultTheme);

export interface ThemeProviderProps {
  theme?: Theme;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme = defaultTheme, children }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

export const useTheme = () => useContext(ThemeContext);
