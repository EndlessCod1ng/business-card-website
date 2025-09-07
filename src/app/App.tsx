import { Routes, Route } from "react-router-dom";

import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { Header } from "@/widgets/Header/Header";
import { Container } from "@/shared/ui/Container/Container";
import { useEffect } from "react";
import { Footer } from "@/widgets/Footer/Footer";
import { useTheme } from "./providers/context/ThemeContext";


function App() {
  const { theme, changeTheme: changeContextTheme } = useTheme();

  useEffect(() => {
    document.body.classList = `app_${theme}_theme`;
  }, [theme]);

  return (
    <>
      <Header changeTheme={() => changeContextTheme?.()} />
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
