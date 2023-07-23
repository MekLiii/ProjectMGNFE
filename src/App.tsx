import { memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProjectPage from "./pages/ProjectPage/ProjectPage";
import { Layout } from "./Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import SignUp from "./pages/SignUpPage/SignUpPage";
import ProjectForm from "./pages/ProjectForm/ProjectForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/project"
            index
            element={
              <ProtectedRoute>
                <ProjectPage />
              </ProtectedRoute>
            }
          />
          <Route path="/addProject/" element={<ProjectForm state="ADD"/>} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default memo(App);
