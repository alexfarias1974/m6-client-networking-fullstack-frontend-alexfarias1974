import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserContextProvider from "./contexts/UserContext";
import { ToastContainer } from "react-toastify";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ContactContextProvider from "./contexts/ContactContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ContactContextProvider>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            style={{ width: "250px" }}
          />
          <App />
        </ContactContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
