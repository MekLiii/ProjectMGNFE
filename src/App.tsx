import { memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ChooseMode from "./pages/ChooseMode/ChooseMode";
import { Layout } from "./Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import { useSelector } from "react-redux";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  const state = useSelector((state: any) => state);
  console.log(state);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path="/" element={<ChooseMode />} /> */}
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/project"
            element={
              <ProtectedRoute user={state.auth}>
                <ProjectPage />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default memo(App);
