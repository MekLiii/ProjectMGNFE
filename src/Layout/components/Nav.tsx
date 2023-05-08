import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";

//add staging link to env

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const currentPath = useLocation().pathname;
  const checkIfIscurrentPath = (path: string) => {
    return currentPath === path;
  };
  const currentPathButtonStyle =
    "bg-sylos-blue rounded-md text-center cursor-pointer ";

  const navList = (
    <ul className="mb-4 mt-2 flex gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 font-normal w-24 justify-center flex text-white  ${
          checkIfIscurrentPath("/") && currentPathButtonStyle
        }`}
      >
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 font-normal w-24 justify-center flex text-white ${
          checkIfIscurrentPath("/sites") && currentPathButtonStyle
        }`}
      >
        <Link to="/sites" className="flex items-center">
          Sites
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 mg-top-1 bg-dark-gray mt-2">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal text-white"
        >
          <span>Sylos Build Management</span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <Button variant="gradient" size="sm" className="hidden lg:inline-block">
          <a
            href="https://staging.plumsoftware.pl:1081/"
            target="_blank"
            className="flex items-center"
          >
            Stagging
          </a>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              color="#fff"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              color="#fff"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <a
              href="https://staging.plumsoftware.pl:1081/"
              target="_blank"
              className="flex items-center"
            >
              Stagging
            </a>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}
