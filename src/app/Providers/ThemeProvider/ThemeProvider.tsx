import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface ThemeProviderProps {
  children: ReactNode;
}
interface ThemeContextProps {
  theme?: Theme;
  changeTheme?: () => void;
}

type Theme = "dark" | "light";
const LOCALSTORAGE_THEME_KEY = "theme";

export const ThemeContext = createContext<ThemeContextProps>({});
export const useTheme = (): ThemeContextProps => {
  const { theme, changeTheme } = useContext(ThemeContext);
  return { theme, changeTheme };
};

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
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
