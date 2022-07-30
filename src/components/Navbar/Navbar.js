import './Navbar.scss';
import { useMediaQuery } from '@mui/material';
import { MEDIAQUERIES } from '../../constants';
import classnames from 'classnames';
import NavbarLink from '../NavbarLink';
import PropTypes from 'prop-types';
import NavbarContext from '../../contexts/NavbarContext';
import { useContext } from 'react';

function Navbar() {
  const isMobile = useMediaQuery(MEDIAQUERIES.xs);
  const { navbarIsOpen } = useContext(NavbarContext);
  return (
    <div
      data-component="Navbar"
      className={classnames({ isMobile, active: navbarIsOpen })}
    >
      <NavbarLink href="#about" textContent="Sobre mi" />
      <NavbarLink href="#skills" textContent="Habilidades" />
      <NavbarLink href="#projects" textContent="Proyectos" />
      <NavbarLink href="#experience" textContent="Experiencia" />
      <NavbarLink href="#studies" textContent="Estudios" />
      <NavbarLink href="#contact" textContent="Contacto" />
    </div>
  );
}

export default Navbar;
