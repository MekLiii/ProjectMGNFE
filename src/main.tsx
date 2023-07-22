import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Layout } from "./Layout/Layout";
import ProjectForm from "./pages/ProjectForm/ProjectForm";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import ChooseMode from "./pages/ChooseMode/ChooseMode";
import LoginPage from "./pages/LoginPage/LoginPage";
import { AxiosProvider } from "./API/axios";
import { QueryClient, QueryClientProvider } from "react-query";
import { useSelector } from "react-redux";

const queryClient = new QueryClient();

const Router = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        // { path: "/", element: <App /> },
        { path: "/", element: <ChooseMode /> },
        { path: "/login", element: <LoginPage /> },
        {
          path: "/addProject",
          element: <ProjectForm formState="ADD" />,
        },
      ],
    },
  ]);
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AxiosProvider>
        <QueryClientProvider client={queryClient}>
          {/* <RouterProvider router={Router()} /> */}
          <App />
        </QueryClientProvider>
      </AxiosProvider>
    </Provider>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
