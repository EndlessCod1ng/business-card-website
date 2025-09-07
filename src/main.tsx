import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/styles/index.scss";
import App from "./app/App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./app/providers/ThemeProvider/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </StrictMode>
);
