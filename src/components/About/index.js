import { ASSETS } from '../../constants';
import './style.scss';
import Card from '../Card';
import Text from '../Text';
import { useMemo } from 'react';

function About() {
  const age = useMemo(
    () =>
      parseInt(
        (new Date().getTime() - new Date(2000, 5, 12).getTime()) / 31536000000
      ),
    []
  );
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
          <Text variant="body1" component="p" className="about-description">
            Hola! Mi nombre es Agustín, desarrollador web full stack, Tengo{' '}
            {age} años. Resido actualmente en Buenos Aires, Argentina.
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
