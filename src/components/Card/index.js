import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import Text from '../Text';
import './style.scss';

function Card({
  description,
  title,
  variant = 'center',
  size,
  className = '',
  children,
}) {
  const sizeClass = useMemo(() => {
    switch (size) {
      case 'sm':
        return 'card-sm';
      case 'md':
        return 'card-md';
      case 'lg':
        return 'card-lg';
      default:
        return '';
    }
  }, [size]);

  const variantClass = useMemo(() => {
    switch (variant) {
      case 'center':
        return 'card-center';
      case 'start-center':
        return 'card-start-center';
      default:
        return 'card-center';
    }
  }, [variant]);

  return (
    <div
      data-component="Card"
      className={classNames(variantClass, sizeClass, className)}
    >
      {!!title && (
        <Text className="card-title" variant="h5" component="h3">
          {title}
        </Text>
      )}
      {!!description && (
        <Text className="card-description" variant="body2" component="p">
          {description}
        </Text>
      )}
      {children}
    </div>
  );
}

Card.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  variant: PropTypes.oneOf(['center', 'start-center']),
  className: PropTypes.string,
  children: PropTypes.any,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Card;
