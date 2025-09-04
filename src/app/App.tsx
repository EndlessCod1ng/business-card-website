import { Routes, Route } from "react-router-dom";

import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { Header } from "@/widgets/Header/Header";
import { Container } from "@/shared/ui/Container/Container";
import { useEffect } from "react";
import { Footer } from "@/widgets/Footer/Footer";
import { useTheme } from "./Providers/ThemeProvider/ThemeProvider";

function App() {
  const { theme: contextTheme, changeTheme: changeContextTheme } = useTheme();

  useEffect(() => {
    document.body.classList = `app_${contextTheme}_theme`;
  }, [contextTheme]);

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
