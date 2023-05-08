import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Layout } from "./Layout/Layout";
import { Sites } from "./pages/sites/SitesPage";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/sites", element: <Sites /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
