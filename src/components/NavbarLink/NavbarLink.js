import './NavbarLink.scss';
import PropTypes from 'prop-types';
function NavbarLink({ href, handleClick, textContent }) {
  return (
    <div data-component="NavbarLink" onClick={handleClick}>
      <a href={href}>{textContent}</a>
    </div>
  );
}
NavbarLink.propTypes = {
  href: PropTypes.string,
  handleClick: PropTypes.func,
  textContent: PropTypes.string,
};
export default NavbarLink;
