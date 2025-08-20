import { Routes, Route} from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Header } from "./widgets/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/not-found-page"
          element={<NotFoundPage />}
        />
        <Route
          path="/*"
          element={<NotFoundPage />}
        />
      </Routes>
    </>
  );
}

export default App;
