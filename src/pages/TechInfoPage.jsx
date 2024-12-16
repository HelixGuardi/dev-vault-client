import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function TechInfoPage(props) {
  // console.log(props);
  const technoProp = props.technologies; //array con la colección technologies
  const flipCardProp = props.flipCards; //array con los flipCards
  // console.log(technoProp)
  // console.log(flipCardProp)

  const dynamicParams = useParams(); //parametros dinamicos
  console.log(dynamicParams);

  const foundTech = technoProp.find((eachTech) => {
    if (eachTech.id === dynamicParams.techId) {
      return true;
    } else {
      return false;
    }
  });

  // console.log(foundTech);

  return (
    <div className="tech-info-container">
      <section className="tech-info-section">
        <div className="tech-main-info">
          <h1>{foundTech.name}</h1>
          <h2>{foundTech.category}</h2>
        </div>
        <div className="about-tech-info">
          <h3>created in: {foundTech.foundedIn}</h3>
          <h4>invented by: {foundTech.inventedBy}</h4>
        </div>
        <div className="tech-description">
          <h5>Description:</h5>
          <p>{foundTech.description}</p>
        </div>
      </section>
      <Link to="/">
        <button className="back-home-btn">Atrás</button>
      </Link>
    </div>
  );
}

export default TechInfoPage;
