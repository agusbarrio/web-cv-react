import { useCallback, useEffect } from 'react';
import './style.scss';
import ImageLink from '../ImageLink';
import Navbar from '../Navbar';
import HamburgerButton from '../HamburgerButton';
import { useMediaQuery } from 'react-responsive';
import { ASSETS, MEDIAQUERIES } from '../../constants';
import classnames from 'classnames';
import useNavbar from '../../hooks/useNavbar';
function Header() {
  const isMobile = useMediaQuery({ query: MEDIAQUERIES.xs });
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
