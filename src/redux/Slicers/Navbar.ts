import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  isNavbarOpen: boolean;
}
export const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    isNavbarOpen: false,
  } as IInitialState,
  reducers: {
    toggleNavbar: (state) => {
      state.isNavbarOpen = !state.isNavbarOpen;
    },
  },
});

export const { toggleNavbar } = navbarSlice.actions;

export default navbarSlice.reducer;
