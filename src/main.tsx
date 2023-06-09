import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Layout } from "./Layout/Layout";
import { ContextProvider } from "./components/Context/Context";
import ProjectForm from "./pages/ProjectForm/ProjectForm";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      {
        path: "/addProject",
        element: <ProjectForm formState="ADD"/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
