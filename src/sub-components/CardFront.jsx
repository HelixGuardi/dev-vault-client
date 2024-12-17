function CardFront(props) {

  const {eachCard, isFlipped, setIsFlipped} = props

  const handleClick = (event) => {
    event.preventDefault();
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
