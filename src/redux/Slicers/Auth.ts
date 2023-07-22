import { createSlice } from "@reduxjs/toolkit";

interface IIAuthState {
  token: string | null;
  isLoggedIn: boolean;
  user: {
    nameid: number | null;
    email: string | null;
    Guid: string | null;
  };
}

const initialState: IIAuthState = {
  token: null,
  isLoggedIn: false,
  user: {
    nameid: null,
    email: null,
    Guid: null,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state: IIAuthState,
      action: {
        payload: {
          nameid: number;
          email: string;
          Guid: string;
          token: string;
        };
      }
    ) => {
      state.token = action.payload.token;
      state.isLoggedIn = state.token ? true : false;
      state.user = {
        nameid: action.payload.nameid,
        email: action.payload.email,
        Guid: action.payload.Guid,
      };
    },
    logout: (state) => {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { logout, login } = authSlice.actions;

export default authSlice.reducer;
