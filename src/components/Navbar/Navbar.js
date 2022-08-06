import './Navbar.scss';
import { useMediaQuery } from '@mui/material';
import { MEDIAQUERIES } from '../../constants';
import classnames from 'classnames';
import NavbarLink from '../NavbarLink';
import NavbarContext from '../../contexts/NavbarContext';
import { useContext, useCallback } from 'react';

const buttons = [
  { href: '#about', textContent: 'Sobre mi' },
  { href: '#skills', textContent: 'Habilidades' },
  { href: '#projects', textContent: 'Proyectos' },
  { href: '#experience', textContent: 'Experiencia' },
  { href: '#studies', textContent: 'Estudios' },
  { href: '#contact', textContent: 'Contacto' },
];

function Navbar() {
  const isMobile = useMediaQuery(MEDIAQUERIES.xs);
  const { navbarIsOpen, closeNavbar } = useContext(NavbarContext);
  const handleButtonClick = useCallback(() => {
    closeNavbar();
  }, [closeNavbar]);
  return (
    <div
      data-component="Navbar"
      className={classnames({ isMobile, active: navbarIsOpen })}
    >
      {buttons.map((el) => {
        return (
          <NavbarLink
            key={el.href}
            href={el.href}
            textContent={el.textContent}
            handleClick={handleButtonClick}
          />
        );
      })}
    </div>
  );
}

export default Navbar;
