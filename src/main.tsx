import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={5001}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </HashRouter>
  </StrictMode>
);
