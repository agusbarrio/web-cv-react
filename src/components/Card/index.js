import { useMemo } from 'react';
import Text from '../Text';
import './style.scss';

function Card({ description, title, variant = 'center', children }) {
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
    <div data-component="Card" className={variantClass}>
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

export default Card;
