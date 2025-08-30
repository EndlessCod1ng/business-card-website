import { Routes, Route } from "react-router-dom";

import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { Header } from "@/widgets/Header/Header";
import { Container } from "@/shared/ui/Container/Container";
import { useEffect } from "react";
import { Footer } from "@/widgets/Footer/Footer";

function App() {
  useEffect(() => {
    document.body.classList = "app_dark_theme";
  }, []);
  return (
    <Container>
      <Header />
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
  );
}

export default App;
