import { createRoot } from "react-dom/client";
import App from "./animepro/app/context/App.jsx";   // <-- correct path
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
