import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DataScience } from "./pages/DataScience/DataScience";
import "./styles.css";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DataScience />
  </StrictMode>,
);
