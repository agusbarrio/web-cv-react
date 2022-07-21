import React from 'react';
import './Header.scss';
import HomeLink from '../HomeLink';

const Header = () => {
  return (
    <div data-component="Header">
      <div className="home-link-container">
        <HomeLink />
      </div>
      <div className="navbar-container"></div>
    </div>
  );
};

export default Header;
