import './style.scss';
import PropTypes from 'prop-types';
function Section({ id, children }) {
  return (
    <section data-component="Section" id={id}>
      <div className="section-container">{children}</div>
    </section>
  );
}
Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any,
};

export default Section;
