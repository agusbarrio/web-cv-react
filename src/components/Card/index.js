import { useMemo } from 'react';
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
      {!!title && <h4 className="card-title">{title}</h4>}
      {!!description && <div className="card-description">{description}</div>}
      {children}
    </div>
  );
}

export default Card;
