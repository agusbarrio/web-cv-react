import { useContext } from 'react';
import NavbarContext from '../contexts/NavbarContext';

function useNavbar() {
  const { navbarIsOpen, openNavbar, closeNavbar } = useContext(NavbarContext);
  return { navbarIsOpen, openNavbar, closeNavbar };
}
export default useNavbar;
