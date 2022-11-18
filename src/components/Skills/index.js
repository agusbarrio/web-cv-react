import './style.scss';
import Card from '../Card';
function Skills() {
  return (
    <div data-component="Skills">
      <Card variant="start-center">
        <h2>Backend</h2>
        <div className="card-content-skills">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
          odio molestias quidem exercitationem, porro suscipit repudiandae earum
          nesciunt cum ipsam laudantium quisquam nam vitae alias voluptates
          culpa et amet fuga?
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
