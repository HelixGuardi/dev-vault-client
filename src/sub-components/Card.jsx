import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import CardFront from "./CardFront";
import CardRear from "./CardRear";

function Card(props) {
    
  const {eachCard, setFlipCards, getDataFunction} = props;

  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <CardFront isFlipped={isFlipped} setIsFlipped={setIsFlipped} eachCard={eachCard}/>

        <CardRear isFlipped={isFlipped} setIsFlipped={setIsFlipped} eachCard={eachCard} getData={getDataFunction}/>
      </ReactCardFlip>
    </>
  );
}

export default Card;
