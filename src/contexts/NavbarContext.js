import { createContext, useState, useCallback } from 'react';

const NavbarContext = createContext();

export function NavbarProvider({ children }) {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const openNavbar = useCallback(() => {
    setNavbarIsOpen(true);
  }, []);
  const closeNavbar = useCallback(() => {
    setNavbarIsOpen(false);
  }, []);

  return (
    <NavbarContext.Provider value={{ navbarIsOpen, openNavbar, closeNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
}

export default NavbarContext;
