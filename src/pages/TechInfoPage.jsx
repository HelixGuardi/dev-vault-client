import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import Card from "../sub-components/Card";

function TechInfoPage() {
  const [foundTech, setFoundTech] = useState(null);
  const [flipCards, setFlipCards] = useState([]);

  const dynamicParams = useParams();

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_SERVER_URL}/technologies/${
          dynamicParams.techId
        }?_embed=flipCards`
      )
      .then((response) => {
        setFoundTech(response.data);
        setFlipCards(response.data.flipCards)
      });
  }, []);

  // loading...
  if (foundTech === null) {
    return (
      <div className="loading-container">
        <PacmanLoader width={"100%"} color="#FFD166" />
      </div>
    );
  }


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
        <Link to="/">
          <button className="back-home-btn">Atrás</button>
        </Link>
      </section>
      <div className="related-flip-cards-container">
        {flipCards.map((eachCard) => {
          return(
            <Card key={eachCard.id} eachCard={eachCard}/>
          )
        })}
      </div>
    </div>
  );
}

export default TechInfoPage;
