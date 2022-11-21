import './style.scss';
import Card from '../Card';
import ImageDataLine from '../ImageDataLine';
import ASSETS from '../../constants/ASSETS';
import Text from '../Text';
function Skills() {
  return (
    <div data-component="Skills">
      <Card variant="start-center">
        <Text variant="h4" component="h2">
          Backend
        </Text>
        <div className="card-content-skills">
          <ImageDataLine img={ASSETS.LOGO_NODE} text={'Node.js'} />
          <ImageDataLine img={ASSETS.LOGO_GQL} text={'GraphQL'} />
          <ImageDataLine img={ASSETS.LOGO_MYSQL} text={'MySQL'} />
          <ImageDataLine img={ASSETS.LOGO_SEQUELIZE} text={'Sequelize'} />
          <ImageDataLine img={ASSETS.LOGO_EXPRESS} text={'Express.js'} />
        </div>
      </Card>
      <Card variant="start-center">
        <Text variant="h4" component="h2">
          Frontend
        </Text>
        <div className="card-content-skills">
          <ImageDataLine img={ASSETS.LOGO_JAVASCRIPT} text={'Javascript'} />
          <ImageDataLine img={ASSETS.LOGO_HTML} text={'HTML'} />
          <ImageDataLine img={ASSETS.LOGO_CSS} text={'CSS'} />
          <ImageDataLine img={ASSETS.LOGO_REACT} text={'React.js'} />
          <ImageDataLine img={ASSETS.LOGO_MUI} text={'Material UI'} />
        </div>
      </Card>
    </div>
  );
}

export default Skills;
