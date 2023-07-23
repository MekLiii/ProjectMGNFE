import Nav from "./components/Nav";
import { Body, OutletChildren } from "./Layout.styled";
import Theme from "./theme";
import ErrorBoundary from "./components/ErrorBoundary";
import { Outlet, useLocation } from "react-router-dom";

export const Layout = () => {
  const { pathname } = useLocation();
  const isCHooseMode = pathname === "/" || pathname === "/login"; 
  const pathWithoutNav = ["/", "/login", "/signUp"]
  const isNav = !pathWithoutNav.includes(pathname)
  return (
    <Theme>
      <Body>
        <ErrorBoundary>
          {isNav && <Nav />}
          <OutletChildren>
            <Outlet />
          </OutletChildren>
        </ErrorBoundary>
      </Body>
    </Theme>
  );
};
