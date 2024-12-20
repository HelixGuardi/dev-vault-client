import { Link } from "react-router-dom";
import TrashIcon from "../assets/trash-icon-btn.png";
import axios from "axios";
import backArrow from "../assets/back-arrow-icon.png";

function CardRear(props) {
  const { isFlipped, setIsFlipped, eachCard, getData } = props;

  const handleClick = (event) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const deleteCard = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_URL}/flipCards/${eachCard.id}`);
      //función para actualizar el estado local del componente padre:
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flip-card-container">
      <div className="flip-card">
        <h1 id="fliped-card-title">{eachCard.title}</h1>
        <p>{eachCard.resume}</p>
        <div className="flip-card-btn-container">
          <button onClick={handleClick} id="flip-back-btn">
            <img id="flip-back-arrow" src={backArrow} alt="flip back arrow" />
          </button>
          <Link to={`/details/${eachCard.id}/${eachCard.title}`}>
            <button className="flipCard-btn">Saber más</button>
          </Link>
          <button className="delete-btn" onClick={deleteCard}>
            <img src={TrashIcon} alt="trash-icon (delete)" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardRear;
