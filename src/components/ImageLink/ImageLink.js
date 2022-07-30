import './ImageLink.scss';
import PropTypes from 'prop-types';
function ImageLink({ handleClick, href, src, alt }) {
  return (
    <div data-component="ImageLink" onClick={handleClick}>
      <a href={href}>
        <img src={src} alt={alt} />
      </a>
    </div>
  );
}

ImageLink.propTypes = {
  handleClick: PropTypes.func,
  href: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};
export default ImageLink;
