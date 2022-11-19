import './style.scss';
import Card from '../Card';
import ImageDataLine from '../ImageDataLine';
import ASSETS from '../../constants/ASSETS';
function Skills() {
  return (
    <div data-component="Skills">
      <Card variant="start-center">
        <h2>Backend</h2>
        <div className="card-content-skills">
          <ImageDataLine img={ASSETS.LOGO_NODE} text={'Node.js'} />
          <ImageDataLine img={ASSETS.LOGO_GQL} text={'GraphQL'} />
          <ImageDataLine img={ASSETS.LOGO_MYSQL} text={'MySQL'} />
        </div>
      </Card>
      <Card variant="start-center">
        <h2>Frontend</h2>
        <div className="card-content-skills">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          blanditiis accusantium rerum, dicta, inventore quos distinctio, animi
          saepe voluptatibus quam tenetur! Consequuntur eius placeat repellendus
          mollitia ratione eos, ad veniam.
        </div>
      </Card>
    </div>
  );
}

export default Skills;
