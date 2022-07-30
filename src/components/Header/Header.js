import { useState, useCallback, useEffect, useContext } from 'react';
import './Header.scss';
import ImageLink from '../ImageLink';
import Navbar from '../Navbar';
import HamburgerButton from '../HamburgerButton';
import { useMediaQuery } from '@mui/material';
import { MEDIAQUERIES } from '../../constants';
import classnames from 'classnames';
import NavbarContext from '../../contexts/NavbarContext';
function Header() {
  const isMobile = useMediaQuery(MEDIAQUERIES.xs);
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
  }, [isMobile]);

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
