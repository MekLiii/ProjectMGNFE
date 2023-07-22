import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slicers/Auth";

export default configureStore({
  reducer: {
    auth: authReducer ,
  },
});
