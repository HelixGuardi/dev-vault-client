import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import CardFront from "./CardFront";
import CardRear from "./CardRear";

function Card(props) {
    
  const {eachCard} = props;

  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <CardFront isFlipped={isFlipped} setIsFlipped={setIsFlipped} eachCard={eachCard}/>

        <CardRear isFlipped={isFlipped} setIsFlipped={setIsFlipped} eachCard={eachCard}/>
      </ReactCardFlip>
    </>
  );
}

export default Card;
