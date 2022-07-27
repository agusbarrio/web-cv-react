import { useState, useCallback, useEffect } from 'react';
import './Header.scss';
import HomeLink from '../HomeLink';
import Navbar from '../Navbar';
import HamburgerButton from '../HamburgerButton';
import { useMediaQuery } from '@mui/material';
import { MEDIAQUERIES } from '../../constants';
import classnames from 'classnames';
function Header() {
  const isMobile = useMediaQuery(MEDIAQUERIES.xs);
  const [menuMobileActive, setMenuMobileActive] = useState(false);
  const onToggleButton = useCallback(
    (toggle) => {
      setMenuMobileActive(toggle);
    },
    [setMenuMobileActive]
  );
  useEffect(() => {
    if (menuMobileActive) setMenuMobileActive(false);
  }, [isMobile]);
  return (
    <div data-component="Header" className={classnames({ isMobile })}>
      <div className="home-link-container">
        <HomeLink />
      </div>
      {isMobile && (
        <div className="navbar-menu-button-container">
          <HamburgerButton onToggle={onToggleButton} />
        </div>
      )}
      <div
        className={classnames('navbar-container', {
          isMobile,
        })}
      >
        <Navbar active={menuMobileActive} />
      </div>
    </div>
  );
}

export default Header;
