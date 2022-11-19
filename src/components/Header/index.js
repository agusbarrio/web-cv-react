import { useCallback, useEffect } from 'react';
import './style.scss';
import ImageLink from '../ImageLink';
import Navbar from '../Navbar';
import HamburgerButton from '../HamburgerButton';
import { ASSETS } from '../../constants';
import classnames from 'classnames';
import useNavbar from '../../hooks/useNavbar';
import useScreenSize from '../../hooks/useScreenSize';
function Header() {
  const { isMobile } = useScreenSize();
  const { navbarIsOpen, openNavbar, closeNavbar } = useNavbar();
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
          src={ASSETS.LOGO}
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
