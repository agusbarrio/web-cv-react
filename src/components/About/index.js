import { ASSETS } from '../../constants';
import './style.scss';
import Card from '../Card';
import useScreenSize from '../../hooks/useScreenSize';

function About() {
  const { isMobile } = useScreenSize();
  return (
    <article data-component="About">
      <h1>Desarrollador Full Stack</h1>
      <div className="about-content">
        {!isMobile && (
          <img
            className="about-image"
            src={ASSETS.ME}
            alt="Agustín Barrio Eastman"
          />
        )}
        <div className="about-info">
          <div className="about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ad
            odit ratione eos perferendis iusto temporibus delectus. Laudantium
            veritatis laborum reiciendis rerum non nemo hic accusantium sunt,
            qui perferendis enim?
          </div>
          <div className="cards-container">
            <Card
              title={'Proyectos'}
              description="2 terminados"
              variant="center"
            ></Card>
            <Card
              title={'Experiencia'}
              description="6 meses"
              variant="center"
            ></Card>
          </div>
        </div>
      </div>
    </article>
  );
}

export default About;
