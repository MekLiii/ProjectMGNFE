import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { AxiosProvider } from "./API/axios";
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient();


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
