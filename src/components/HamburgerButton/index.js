import './style.scss';
import colors from '../../constants/styles/colors.scss';
import { Spin as Hamburger } from 'hamburger-react';
import PropTypes from 'prop-types';

function HamburgerButton({ toggled = false, handleClick }) {
  return (
    <div data-component="HamburgerButton" onClick={handleClick}>
      <Hamburger
        toggled={toggled}
        size={36}
        rounded
        color={colors.primary}
      ></Hamburger>
    </div>
  );
}

HamburgerButton.propTypes = {
  toggled: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default HamburgerButton;
