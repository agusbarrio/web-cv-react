import './style.scss';

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

export default ImageDataLine;
