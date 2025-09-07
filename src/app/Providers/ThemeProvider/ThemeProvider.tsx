import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export type Theme = "dark" | "light";
const LOCALSTORAGE_THEME_KEY = "theme";

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem(LOCALSTORAGE_THEME_KEY) as Theme) || "dark"
  );
  useEffect(() => {
    document.body.classList = `app_${theme}_theme`;
  }, [theme]);
  const changeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem(LOCALSTORAGE_THEME_KEY, newTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
