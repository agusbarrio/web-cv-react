import React, { useState } from 'react';
import './HamburgerButton.scss';
import { Spin as Hamburger } from 'hamburger-react';
import PropTypes from 'prop-types';

function HamburgerButton({ onToggle }) {
  const [open, setOpen] = useState(false);
  return (
    <div data-component="HamburgerButton">
      <Hamburger
        toggled={open}
        toggle={() => {
          setOpen(!open);
        }}
        onToggle={onToggle}
        size={36}
        rounded
        color="var(--primary)"
      ></Hamburger>
    </div>
  );
}

HamburgerButton.propTypes = {
  onToggle: PropTypes.func,
};

export default HamburgerButton;
