import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slicers/Auth";
import navbarReducer from "./Slicers/Navbar";
import projectReducer from "./Slicers/Projects";

export default configureStore({
  reducer: {
    auth: authReducer,
    navbar: navbarReducer,
    projects: projectReducer,
  },
});
