import { Routes, Route } from "react-router-dom";

import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { Header } from "@/widgets/Header/Header";
import { Container } from "@/shared/ui/Container/Container";
import { useEffect, useState } from "react";
import { Footer } from "@/widgets/Footer/Footer";

type Theme = "dark" | "light";
const LOCALSTORAGE_THEME_KEY = "theme";
function App() {
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
    <>
      <Header changeTheme={() => changeTheme()} />
      <Container className="main">
        <main>
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/*"
              element={<NotFoundPage />}
            />
          </Routes>
        </main>
        <Footer />
      </Container>
    </>
  );
}

export default App;
