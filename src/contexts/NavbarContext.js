import { createContext, useState } from 'react';

const NavbarContext = createContext();

export function NavbarProvider({ children }) {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const openNavbar = () => {
    setNavbarIsOpen(true);
  };
  const closeNavbar = () => {
    setNavbarIsOpen(false);
  };

  return (
    <NavbarContext.Provider value={{ navbarIsOpen, openNavbar, closeNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
}

export default NavbarContext;
