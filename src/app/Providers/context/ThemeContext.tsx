import { createContext, useContext } from "react";
import type { Theme } from "../ThemeProvider/ThemeProvider";

interface ThemeContextProps {
  theme?: Theme;
  changeTheme?: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});


export const useTheme = (): ThemeContextProps => {
  const { theme, changeTheme } = useContext(ThemeContext);
  return { theme, changeTheme };
};
