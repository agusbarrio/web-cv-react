import './style.scss';
import PropTypes from 'prop-types';
function ImageDataLine({ img, text }) {
  return (
    <figure data-component="ImageDataLine">
      <img src={img} alt={text} />
      <figcaption>
        <b>{text}</b>
      </figcaption>
    </figure>
  );
}
ImageDataLine.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
};
export default ImageDataLine;
