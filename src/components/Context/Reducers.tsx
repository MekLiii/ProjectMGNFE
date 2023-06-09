import { IState, IAction } from "./types";

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        isSideNavOpen: !state.isSideNavOpen,
      };
    default:
      return state;
  }
};
export { reducer };
