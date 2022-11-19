import './style.scss';
import PropTypes from 'prop-types';
import Text from '../Text';
function NavbarLink({ href, handleClick, textContent }) {
  return (
    <div data-component="NavbarLink" onClick={handleClick}>
      <Text variant="subtitle1" component="a" href={href}>
        {textContent}
      </Text>
    </div>
  );
}
NavbarLink.propTypes = {
  href: PropTypes.string,
  handleClick: PropTypes.func,
  textContent: PropTypes.string,
};
export default NavbarLink;
