function CardRear(props) {

    const {isFlipped, setIsFlipped, eachCard} = props;

    const handleClick = (event) => {
        event.preventDefault();
        props.setIsFlipped(!props.isFlipped);
        // console.log(props.isFlipped)
      }

    return(
        <div className="flip-card-container">
            <button className="delete-btn">DELETE</button> 
            <div className="flip-card">
                <p>{eachCard.resume}</p>
                <button onClick={handleClick}>¡ Flip !</button>
                <button>Saber más</button>
            </div>
        </div>
    )
}

export default CardRear;