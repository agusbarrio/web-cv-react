import { useMemo } from 'react';
import './style.scss';

function Card({ description, title, variant = 'center', children }) {
  const variantClass = useMemo(() => {
    switch (variant) {
      case 'center':
        return 'card-center';
      default:
        return 'card-center';
    }
  }, [variant]);

  return (
    <div data-component="Card" className={variantClass}>
      {!!title && <div className="card-title">{title}</div>}
      {!!description && <div className="card-description">{description}</div>}
      {children}
    </div>
  );
}

export default Card;
