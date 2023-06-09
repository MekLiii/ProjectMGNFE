interface IState {
  isSideNavOpen: boolean;
}

interface IAction {
  type: "TOGGLE_MENU";
}
interface ContextProviderProps {
  children: React.ReactNode;
}

interface Dispatchers {
  toggleMenu: () => void;
}

export type { IState, IAction, ContextProviderProps, Dispatchers };
