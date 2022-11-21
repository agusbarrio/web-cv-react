import './style.scss';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

function Text({
  variant = 'body1',
  component = 'span',
  children,
  className = '',
  ...props
}) {
  return React.createElement(
    component,
    {
      // eslint-disable-next-line no-useless-computed-key
      ['data-component']: 'Text',
      className: classNames(variant, className),
      ...props,
    },
    children
  );
}
Text.propTypes = {
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'body3',
  ]),
  component: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
};
export default Text;
