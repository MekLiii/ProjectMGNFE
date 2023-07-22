import Nav from "./components/Nav";
import { Body, OutletChildren } from "./Layout.styled";
import Theme from "./theme";
import ErrorBoundary from "./components/ErrorBoundary";
import { Outlet, useLocation } from "react-router-dom";

export const Layout = () => {
  const { pathname } = useLocation();
  const isCHooseMode = pathname === "/" || pathname === "/login"; 

  return (
    <Theme>
      <Body>
        <ErrorBoundary>
          {!isCHooseMode && <Nav />}
          <OutletChildren>
            <Outlet />
          </OutletChildren>
        </ErrorBoundary>
      </Body>
    </Theme>
  );
};
