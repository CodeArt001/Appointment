import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Authprovider } from "./Context/Authcontext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <App />
    </Authprovider>
  </StrictMode>
);
