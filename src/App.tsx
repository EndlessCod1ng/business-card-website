import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Header } from "./widgets/Header/Header";

const links = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Teach Stack", link: "/stack" },
  { name: "Projects", link: "/projects" },
  { name: "Contacts", link: "/contacts" },
];

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
          path="/*"
          element={<NotFoundPage />}
        />
      </Routes>
    </>
  );
}

export default App;
