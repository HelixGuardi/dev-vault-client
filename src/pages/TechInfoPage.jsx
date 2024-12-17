import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function TechInfoPage() {

  const [foundTech, setFoundTech] = useState(null)

  const dynamicParams = useParams(); //parametros dinamicos
  // console.log(dynamicParams);

  useEffect(() => {
    axios.get(`http://localhost:5005/technologies/${dynamicParams.techId}?_embed=flipCards`)
    .then((response) => {
      // console.log(response);
      setFoundTech(response.data);
    })
  }, [])

  if(foundTech === null) {
    return <p>Loading...</p>
  }

  //todo agregar las flipCards correspondientes de esta technologia


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
