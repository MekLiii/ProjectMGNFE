import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="bg-dark-gray flex flex-1 items-center justify-start flex-col">
      <Nav />
      <Outlet />
    </div>
  );
};
