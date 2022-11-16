import { ASSETS } from '../../constants';
import './style.scss';

function About() {
  return (
    <article data-component="About">
      <h1>Desarrollador Full Stack</h1>
      <div>
        <img src={ASSETS.ME} alt="Agustín Barrio Eastman" />
      </div>
    </article>
  );
}

export default About;
