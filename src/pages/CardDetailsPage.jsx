import { Link, useParams } from "react-router-dom";

function CardDetailsPage(props) {
  // console.log("estos son los props:", props);
  const { flipCards, technologies } = props;

  const dynamicParams = useParams();
  // console.log("estos son los params dynamic:",dynamicParams);

  const foundCard = flipCards.find((eachCard) => {
    if (eachCard.id === dynamicParams.flipCardId) {
      return true;
    } else {
      return false;
    }
  });

  const foundTech = technologies.find((eachTech) => {
    if (eachTech.id === foundCard.technologyId) {
      return true;
    } else {
      return false;
    }
  });

  // console.log(foundCard);

  return (
    <div className="card-details-container">
      <div className="main-card-info">
        <h1>{foundCard.title}</h1>
        <h2>{foundTech.name}</h2>
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
