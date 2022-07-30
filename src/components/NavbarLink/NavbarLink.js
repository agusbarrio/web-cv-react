import './NavbarLink.scss';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import NavbarContext from '../../contexts/NavbarContext';
function NavbarButton({ href, textContent }) {
  const { closeNavbar } = useContext(NavbarContext);
  return (
    <div data-component="NavbarLink" onClick={closeNavbar}>
      <a href={href}>{textContent}</a>
    </div>
  );
}
NavbarButton.propTypes = {
  href: PropTypes.string,
  textContent: PropTypes.string,
};
export default NavbarButton;
