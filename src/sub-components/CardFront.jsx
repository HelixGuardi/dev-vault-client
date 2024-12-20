import axios from "axios";

function CardFront(props) {

  const {eachCard, isFlipped, setIsFlipped, getData} = props

  const incrementFlipCount = async () => {
    try {
      const incrementCount = {
        flipCount: eachCard.flipCount + 1
      };

      axios.patch(`${import.meta.env.VITE_SERVER_URL}/flipCards/${eachCard.id}`, incrementCount);
      getData()
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    incrementFlipCount()
    setIsFlipped(!isFlipped);
  };

  
  return (
          <div
            key={eachCard.id}
            className="flip-card-container"
            onClick={handleClick}
          >
            <div className="flip-card">
              <h2>{eachCard.title}</h2>
              <div className="flipCard-tags">
                <p>{eachCard.technology?.name}</p>
              </div>
            </div>
          </div>
  );
}

export default CardFront;
