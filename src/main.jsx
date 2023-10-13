import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import Routers from "./Routers/Routers.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routers} />
    </AuthProvider>
  </React.StrictMode>
);
