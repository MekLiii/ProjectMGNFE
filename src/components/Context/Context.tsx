import React, { createContext, useContext, useState, useReducer } from "react";
import { IState, IAction, ContextProviderProps, Dispatchers } from "./types";
import { reducer } from "./Reducers";

const initialState: IState = {
  isSideNavOpen: false,
};

const Context = createContext<{ state: IState; dispatchers: Dispatchers }>({
  state: initialState,
  dispatchers: {
    toggleMenu: () => {},
  },
});

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleMenu = () => {
    dispatch({ type: "TOGGLE_MENU" });
  };

  const dispatchers: Dispatchers = {
    toggleMenu,
  };

  return (
    <Context.Provider value={{ state, dispatchers }}>
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => useContext(Context);
