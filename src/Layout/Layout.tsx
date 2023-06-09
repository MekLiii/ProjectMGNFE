import Nav from "./components/Nav";
import { Body, OutletChildren } from "./Layout.styled";
import Theme from "./theme";
import ErrorBoundary from "./components/ErrorBoundary";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Theme>
      <Body>
        <ErrorBoundary>
          <Nav />
          <OutletChildren>
            <Outlet />
          </OutletChildren>
        </ErrorBoundary>
      </Body>
    </Theme>
  );
};
