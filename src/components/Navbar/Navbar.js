import './Navbar.scss';
import { useMediaQuery } from '@mui/material';
import { MEDIAQUERIES } from '../../constants';
import classnames from 'classnames';
import NavbarLink from '../NavbarLink';
import _ from 'lodash';
import PropTypes from 'prop-types';
function Navbar({ active = false, onLinkClick }) {
  const isMobile = useMediaQuery(MEDIAQUERIES.xs);
  return (
    <div data-component="Navbar" className={classnames({ isMobile, active })}>
      <NavbarLink href="#about" textContent="Sobre mi" onClick={onLinkClick} />
      <NavbarLink
        href="#skills"
        textContent="Habilidades"
        onClick={onLinkClick}
      />
      <NavbarLink
        href="#projects"
        textContent="Proyectos"
        onClick={onLinkClick}
      />
      <NavbarLink
        href="#experience"
        textContent="Experiencia"
        onClick={onLinkClick}
      />
      <NavbarLink
        href="#studies"
        textContent="Estudios"
        onClick={onLinkClick}
      />
      <NavbarLink
        href="#contact"
        textContent="Contacto"
        onClick={onLinkClick}
      />
    </div>
  );
}

Navbar.propTypes = {
  active: PropTypes.bool,
  onLinkClick: PropTypes.func,
};
export default Navbar;
