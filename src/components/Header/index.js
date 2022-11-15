import { useCallback, useEffect, useContext } from 'react';
import './style.scss';
import ImageLink from '../ImageLink';
import Navbar from '../Navbar';
import HamburgerButton from '../HamburgerButton';
import { useMediaQuery } from 'react-responsive';
import { MEDIAQUERIES } from '../../constants';
import classnames from 'classnames';
import NavbarContext from '../../contexts/NavbarContext';
function Header() {
  const isMobile = useMediaQuery({ query: MEDIAQUERIES.xs });
  const { navbarIsOpen, openNavbar, closeNavbar } = useContext(NavbarContext);
  const handleButtonHamburgerClick = useCallback(() => {
    if (navbarIsOpen) {
      closeNavbar();
    } else {
      openNavbar();
    }
  }, [navbarIsOpen, closeNavbar, openNavbar]);

  useEffect(() => {
    closeNavbar();
  }, [isMobile, closeNavbar]);

  return (
    <header data-component="Header" className={classnames({ isMobile })}>
      <div className="home-link-container">
        <ImageLink
          handleClick={closeNavbar}
          href="/#"
          src="./logo.png"
          alt="Inicio"
        />
      </div>
      {isMobile && (
        <div className="navbar-menu-button-container">
          <HamburgerButton
            toggled={navbarIsOpen}
            handleClick={handleButtonHamburgerClick}
          />
        </div>
      )}
      <div
        className={classnames('navbar-container', {
          isMobile,
        })}
      >
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
