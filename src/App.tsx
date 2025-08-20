import { Routes, Route, Link } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/not-found-page">NotFound</Link>
          </li>
        </ul>
      </nav>
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
    </div>
  );
}

export default App;
