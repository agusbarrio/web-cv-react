import React from 'react';
import './Navbar.scss';
import { useMediaQuery } from '@mui/material';
import { MEDIAQUERIES } from '../../constants';
import classnames from 'classnames';
function Navbar({ active = false }) {
  const isMobile = useMediaQuery(MEDIAQUERIES.xs);

  return (
    <div data-component="Navbar" className={classnames({ isMobile, active })}>
      Navbar Content
    </div>
  );
}

export default Navbar;
