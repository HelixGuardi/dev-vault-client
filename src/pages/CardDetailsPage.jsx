import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CardDetailsPage() {

  const dynamicParams = useParams();
  console.log(dynamicParams)

  const [foundCard, setFoundCard] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/flipCards/${dynamicParams.flipCardId}?_expand=technology`)
    .then((response) => {
      console.log(response);
      setFoundCard(response.data);
    })
  }, [])

  if(foundCard === null) {
    return <p>Loading...</p>
  }

  return (
    <div className="card-details-container">
      <div className="main-card-info">
        <h1>{foundCard.title}</h1>
        <h2>{foundCard.technology.name}</h2>
        <a href={foundCard.officialDoc}>Documentación Oficial</a>
        <p>
          <span>Flip Count: {foundCard.flipCount}</span>
        </p>
      </div>
      <div className="description-card-info">
        <p>{foundCard.description}</p>
        <img src={foundCard.imgUrl} alt="related Image" />
      </div>
      <div className="card-details-btn-container">
        <Link to={`/details/edit-card/${foundCard.id}/${foundCard.title}`}>
          <button className="flipCard-btn" id="card-details-edit-btn">
            EDIT
          </button>
        </Link>
        <Link to="/">
          <button className="flipCard-btn" id="card-details-back-btn">
            BACK
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardDetailsPage;
