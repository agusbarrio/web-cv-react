import { ASSETS } from '../../constants';
import './style.scss';
import Card from '../Card';
import Text from '../Text';

function About() {
  return (
    <article data-component="About">
      <Text variant="h1" component="h1" className="about-title">
        Desarrollador Full Stack
      </Text>
      <div className="about-content">
        <img
          className="about-image"
          src={ASSETS.ME}
          alt="Agustín Barrio Eastman"
        />

        <div className="about-info">
          <Text variant="body1" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ad
            odit ratione eos perferendis iusto temporibus delectus. Laudantium
            veritatis laborum reiciendis rerum non nemo hic accusantium sunt,
            qui perferendis enim?
          </Text>
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
