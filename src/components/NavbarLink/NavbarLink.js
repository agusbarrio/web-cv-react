import './NavbarLink.scss';
import _ from 'lodash';
import PropTypes from 'prop-types';
function NavbarButton({ href, textContent, onClick }) {
  return (
    <div data-component="NavbarLink">
      <a
        href={href}
        onClick={(e) => {
          if (_.isFunction(onClick)) onClick(e);
        }}
      >
        {textContent}
      </a>
    </div>
  );
}
NavbarButton.propTypes = {
  onClick: PropTypes.func,
  href: PropTypes.string,
  textContent: PropTypes.string,
};
export default NavbarButton;
